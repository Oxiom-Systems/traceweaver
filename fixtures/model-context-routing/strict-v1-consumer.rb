#!/usr/bin/env ruby
# frozen_string_literal: true
# TRACEWEAVER: file-role=model-context-verification-fixture; verifies=VER-TW-092; req=REQ-TW-110; trace=TRACE-TW-072; ver=VER-TW-092

# Checked-in 1b1cafa producer bytes make this consumer independent of git
# history: CI compares current ordinary v1 SEC output itself, not a synthetic
# stand-in or a model-context artifact.

require "digest"
require "json"
require "open3"
require "tmpdir"
require "yaml"

fixture_path = ARGV.fetch(0)
root = File.expand_path(ARGV.fetch(1, File.expand_path("../..", __dir__)))
fixture = JSON.parse(File.read(fixture_path))
abort "v1 fixture schema" unless fixture["schema_version"] == "tw-v1-producer-invariance/1" && fixture["base_commit"] == "1b1cafa2dc06f5309e527a6b8328fa0acf6f0250"
records = fixture.fetch("records")
abort "v1 SEC cardinality" unless fixture["ordinary_sec_receipt_count"] == 112 && records.length == 112

registry = YAML.safe_load(File.read(File.join(root, "plugins/traceweaver-core/references/skill-execution-contracts.yml")), permitted_classes: [], aliases: false)
expected = registry.fetch("contracts").map { |entry| entry.fetch("skill") }.sort.product(%w[L0 L1 L2 L3]).map { |skill, risk| [skill, risk] }.sort
abort "v1 SEC inventory" unless records.map { |record| [record.fetch("skill"), record.fetch("risk")] }.sort == expected

resolver = File.join(root, "plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-resolve-skill-execution-contract")
allowed_keys = %w[authority_promotion baseline_identity child_output_eligibility contract invocation_id invocation_receipt_id model_route schema_version static_definition_hash terminal_state]

def no_shadow_fields!(value)
  case value
  when Hash
    value.each do |key, nested|
      abort "unknown v1 field #{key}" if key.to_s.include?("model_context") || key.to_s.include?("shadow")
      no_shadow_fields!(nested)
    end
  when Array then value.each { |nested| no_shadow_fields!(nested) }
  end
end

records.each do |record|
  output, error, status = Open3.capture3(
    resolver, "--skill", record.fetch("skill"), "--risk", record.fetch("risk"),
    "--invocation-id", record.fetch("invocation_id"), "--baseline", fixture.fetch("baseline_identity")
  )
  abort "v1 producer failure #{record.fetch('skill')}/#{record.fetch('risk')}: #{error}" unless status.success?
  abort "v1 byte drift #{record.fetch('skill')}/#{record.fetch('risk')}" unless "sha256:#{Digest::SHA256.hexdigest(output)}" == record.fetch("bytes_sha256")
  receipt = JSON.parse(output)
  abort "unknown v1 receipt shape" unless receipt.fetch("schema_version") == "tw-skill-execution-contract-receipt/1" && receipt.keys.sort == allowed_keys
  no_shadow_fields!(receipt)
end

terminal_template = fixture.fetch("terminal_receipt_template")
terminal_path = File.join(root, terminal_template.fetch("path"))
terminal_bytes = File.binread(terminal_path)
abort "v1 terminal template bytes" unless "sha256:#{Digest::SHA256.hexdigest(terminal_bytes)}" == terminal_template.fetch("bytes_sha256")
terminal_receipt = YAML.safe_load(terminal_bytes, permitted_classes: [], aliases: false)
abort "v1 terminal template shape" unless terminal_receipt.fetch("schema_version") == "tw-terminal-receipt/1" && terminal_receipt.keys.sort == terminal_template.fetch("keys")
no_shadow_fields!(terminal_receipt)

native = fixture.fetch("native_child")
adapter = File.join(root, "plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-route-native-child")
profile = File.join(root, ".traceweaver/v050-model-governance-workflow-profile.yml")
Dir.mktmpdir("traceweaver-v1-native-") do |directory|
  request_path = File.join(directory, "request.yml")
  File.write(request_path, YAML.dump(native.fetch("request")))
  planned, error, status = Open3.capture3(adapter, "--root", root, "--state-dir", File.join(directory, "state"), "--request", request_path, "--workflow-profile", profile)
  abort "v1 native plan failure: #{error}" unless status.success?
  planned_receipt = JSON.parse(planned)
  abort "v1 native plan bytes" unless "sha256:#{Digest::SHA256.hexdigest(planned)}" == native.fetch("planned_sha256") && planned_receipt.keys.sort == native.fetch("planned_keys")
  no_shadow_fields!(planned_receipt)
  File.write(request_path, YAML.dump({ "schema_version" => "tw-native-child-route-command/1", "command" => "finalize", "planned_receipt" => planned_receipt }))
  terminal, error, status = Open3.capture3(adapter, "--root", root, "--state-dir", File.join(directory, "state"), "--request", request_path, "--workflow-profile", profile)
  abort "v1 terminal failure: #{error}" unless status.success?
  terminal_receipt = JSON.parse(terminal)
  abort "v1 terminal bytes" unless "sha256:#{Digest::SHA256.hexdigest(terminal)}" == native.fetch("terminal_sha256") && terminal_receipt.keys.sort == native.fetch("terminal_keys")
  no_shadow_fields!(terminal_receipt)
end

review = fixture.fetch("review_series")
controller = File.join(root, "plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-review-series")
Dir.mktmpdir("traceweaver-v1-review-") do |directory|
  request_path = File.join(directory, "request.yml")
  File.write(request_path, YAML.dump(review.fetch("request")))
  output, error, status = Open3.capture3(controller, "--root", root, "--ledger-dir", File.join(directory, "ledger"), "--request", request_path)
  abort "v1 review series failure: #{error}" unless status.success?
  receipt = JSON.parse(output)
  abort "v1 review series bytes" unless "sha256:#{Digest::SHA256.hexdigest(output)}" == review.fetch("sha256") && receipt.keys.sort == review.fetch("keys")
  no_shadow_fields!(receipt)
end

puts "strict_v1_consumer=pass records=#{records.length} native_child=planned_terminal review_series=authorize baseline=#{fixture.fetch('base_commit')}"
