---
id: TW-RELEASE-CANDIDATE-2026-08-22-0.5.0-001
status: ready_for_version_bump
date: 2026-08-22
version: 0.5.0
tag: traceweaver-core--v0.5.0
released_base: e1b2886ea51ceae03249c4ae09ff75308678970a
requirement: REQ-TW-122
trace: TRACE-TW-072
verification: VER-TW-092
validation: VAL-TW-040
release_readiness:
  schema_version: tw-release-readiness/2
  terminal_status: ready_for_version_bump
  version: 0.5.0
  candidate_scope:
    algorithm: sha256(sorted(path + NUL + git_mode + NUL + sha256(file_bytes) + LF))
    paths:
      - .claude-plugin/marketplace.json
      - .github/workflows/release-on-version-bump.yml
      - .github/workflows/smoke-tests.yml
      - .traceweaver/changes/CHG-TW-2026-08-22-002-v050-model-governance.yml
      - .traceweaver/intent-contract.current.yml
      - .traceweaver/intent-contract.yml
      - .traceweaver/task-capsules/TASK-TW-2026-08-22-V050-MODEL-GOVERNANCE-001.yml
      - .traceweaver/v050-model-governance-workflow-profile.yml
      - .traceweaver/vv/TW-VV-2026-08-22-V050-MODEL-GOVERNANCE-001.json
      - CHANGELOG.md
      - README.md
      - docs/generated/traceability-dashboard.md
      - docs/generated/traceability-data.json
      - docs/guides/using-traceweaver.md
      - docs/plans/2026-08-22-traceweaver-core-0.5.0-model-governance-plan.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-acceptance-result.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-authority-gate.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-code-review.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-direct-delivery-authority.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-plan-doc-review.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-red-evidence.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-requirements-authority-review.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-validation-definition.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-validation-result.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-definition.md
      - docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
      - fixtures/bootstrap-project/empty-project/expected-files.txt
      - fixtures/bootstrap-project/existing-project/expected-files.txt
      - fixtures/model-context-routing/acceptance-cases.yml
      - fixtures/model-context-routing/accounting-assembled.json
      - fixtures/model-context-routing/accounting-packet.json
      - fixtures/model-context-routing/accounting-workflow-cached-double-count.json
      - fixtures/model-context-routing/accounting-workflow-cached.json
      - fixtures/model-context-routing/advisory-side-effect-snapshot.yml
      - fixtures/model-context-routing/capability-tokenizer-changed.yml
      - fixtures/model-context-routing/delivery-direct-source.txt
      - fixtures/model-context-routing/delivery-direct.json
      - fixtures/model-context-routing/delivery-inherited.json
      - fixtures/model-context-routing/delivery-locator.json
      - fixtures/model-context-routing/delivery-parent-source.txt
      - fixtures/model-context-routing/delivery-shard-source.txt
      - fixtures/model-context-routing/delivery-shard.json
      - fixtures/model-context-routing/delivery-stale-lossy.json
      - fixtures/model-context-routing/delivery-traversal.json
      - fixtures/model-context-routing/eligibility-content-only.json
      - fixtures/model-context-routing/eligibility-efficiency-true.json
      - fixtures/model-context-routing/install-failure-matrix.yml
      - fixtures/model-context-routing/install-success.yml
      - fixtures/model-context-routing/install-unowned-conflict.yml
      - fixtures/model-context-routing/inventory-alias-duplicate.yml
      - fixtures/model-context-routing/inventory-expected.yml
      - fixtures/model-context-routing/inventory-omitted.yml
      - fixtures/model-context-routing/inventory-unknown-descendant.yml
      - fixtures/model-context-routing/map-axis-mutations.yml
      - fixtures/model-context-routing/map-digest-mismatch.yml
      - fixtures/model-context-routing/map-duplicate-route.yml
      - fixtures/model-context-routing/map-invalid-enum.yml
      - fixtures/model-context-routing/map-unknown-additive.yml
      - fixtures/model-context-routing/map-unsupported-schema.yml
      - fixtures/model-context-routing/map-valid.yml
      - fixtures/model-context-routing/observation-declared-only.json
      - fixtures/model-context-routing/observation-full-unattested.json
      - fixtures/model-context-routing/observation-matrix.json
      - fixtures/model-context-routing/observation-partial.json
      - fixtures/model-context-routing/oracle-review-complete.json
      - fixtures/model-context-routing/oracle-review-open.json
      - fixtures/model-context-routing/oracle-review-self.json
      - fixtures/model-context-routing/oracle-review-unexplained.json
      - fixtures/model-context-routing/overflow-exhausted.json
      - fixtures/model-context-routing/overflow-locator.json
      - fixtures/model-context-routing/overflow-prohibited.json
      - fixtures/model-context-routing/overflow-promote.json
      - fixtures/model-context-routing/overflow-shard.json
      - fixtures/model-context-routing/profile-valid.yml
      - fixtures/model-context-routing/publication-boundary.yml
      - fixtures/model-context-routing/receipt-cross-binding.json
      - fixtures/model-context-routing/receipt-duplicate.jsonl
      - fixtures/model-context-routing/receipt-ledger.jsonl
      - fixtures/model-context-routing/receipt-plan-final.json
      - fixtures/model-context-routing/receipt-replay.jsonl
      - fixtures/model-context-routing/receipt-tampered.json
      - fixtures/model-context-routing/replay-isolated-mock.yml
      - fixtures/model-context-routing/replay-no-authority.yml
      - fixtures/model-context-routing/route-exact.json
      - fixtures/model-context-routing/route-floors-all-b3.yml
      - fixtures/model-context-routing/route-floors-expected.yml
      - fixtures/model-context-routing/route-lfg-alias.json
      - fixtures/model-context-routing/route-multiple.yml
      - fixtures/model-context-routing/route-unknown.json
      - fixtures/model-context-routing/selection-cap-equal.json
      - fixtures/model-context-routing/selection-cap-minus-one.json
      - fixtures/model-context-routing/selection-cap-plus-one.json
      - fixtures/model-context-routing/selection-multiple-eligible.json
      - fixtures/model-context-routing/source-manifest-complete.json
      - fixtures/model-context-routing/source-manifest-delivery-direct.json
      - fixtures/model-context-routing/source-manifest-delivery-locator.json
      - fixtures/model-context-routing/source-manifest-delivery-shard.json
      - fixtures/model-context-routing/source-manifest-new-dependency.json
      - fixtures/model-context-routing/source-manifest-omitted.json
      - fixtures/model-context-routing/source-manifest-temporal-external-excluded.json
      - fixtures/model-context-routing/source-manifest-temporal-external-required.json
      - fixtures/model-context-routing/source-oracle-all-excluded.yml
      - fixtures/model-context-routing/source-oracle-empty.yml
      - fixtures/model-context-routing/source-oracle-mandatory-excluded.yml
      - fixtures/model-context-routing/strict-v1-consumer.rb
      - fixtures/model-context-routing/v1-receipts.json
      - fixtures/release-readiness/model-context-v050-candidate.yml
      - fixtures/release-readiness/readiness-old-pr-only.yml
      - fixtures/release-readiness/readiness-overclaim.yml
      - fixtures/release-readiness/readiness-ref-version.yml
      - fixtures/release-readiness/readiness-trace-scope.yml
      - fixtures/release-readiness/runtime-receipt-ready.json
      - plugins/traceweaver-core/.antigravity-plugin/plugin.json
      - plugins/traceweaver-core/.claude-plugin/plugin.json
      - plugins/traceweaver-core/.codex-plugin/plugin.json
      - plugins/traceweaver-core/.cursor-plugin/plugin.json
      - plugins/traceweaver-core/README.md
      - plugins/traceweaver-core/references/model-context-map.yml
      - plugins/traceweaver-core/references/model-context-oracle-adequacy-review.json
      - plugins/traceweaver-core/references/skill-execution-contracts.yml
      - plugins/traceweaver-core/references/workflow-profile-template.yml
      - plugins/traceweaver-core/skills/tw-auto/references/model-context-map.yml
      - plugins/traceweaver-core/skills/tw-auto/references/model-context-oracle-adequacy-review.json
      - plugins/traceweaver-core/skills/tw-auto/references/workflow-profile-template.yml
      - plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-compile-model-context-route
      - plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-generate-model-context-map
      - plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-generate-skill-execution-contract-registry
      - plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-resolve-skill-execution-contract
      - plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-route-native-child
      - plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-validate-model-context-receipt
      - plugins/traceweaver-core/skills/tw-setup/scripts/traceweaver-bootstrap-project
      - requirements.md
      - scripts/traceweaver-check-release-readiness
      - scripts/traceweaver-smoke-bootstrap-project
      - scripts/traceweaver-smoke-codex-discovery
      - scripts/traceweaver-smoke-codex-host-registry
      - scripts/traceweaver-smoke-installer-transaction
      - scripts/traceweaver-smoke-model-context-routing
      - scripts/traceweaver-smoke-release-readiness
      - scripts/traceweaver-smoke-skill-execution-contract
      - scripts/traceweaver-smoke-workflow-profile
      - src/index.ts
      - traceability-matrix.md
    excluded_paths:
      - .traceweaver/tw-graph-freshness.json
      - docs/validation/traceweaver-plugin-0.5.0-release-candidate.md
    digest: sha256:73c8b675528a0ebe2307c076bf361f310f635394b11f901dc35bcb169e75c401
  candidate_identity:
    plan_id: TW-PLAN-2026-08-22-V050-MODEL-GOVERNANCE-001
    plan_review_id: TW-DOC-REVIEW-2026-08-22-V050-MODEL-GOVERNANCE-PLAN-001
    code_review_series_id: TW-CODE-REVIEW-2026-08-22-V050-CONSOLIDATED-001
    acceptance_test_id: ATP-TW-049
    acceptance_result_id: RESULT-TW-049
    verification_id: VER-TW-092
    validation_id: VAL-TW-040
    trace_id: TRACE-TW-072
    authoritative_runtime: v1
    model_context_mode: advisory_shadow_compile
    active_cutover: disabled
    map_digest: sha256:153ce25228e915ec0949fe1dab1b2296ce3f9934948987c8b191be15eb47665d
    oracle_digest: sha256:57e6759a481157ec339bf5b66322cf25b5b86d14c6bd9d0fceaf566a8b53ff2d
    inventory_digest: sha256:fd0eb117987ece30d1f2d3c576d051e8f5f14a3c97e7d55581c22e5a43afdf01
    oracle_review_id: ORACLE-ADEQUACY-TW-049-RELEASE-001
    oracle_reviewer_identity: /root/v050_independent_validation
    oracle_reviewer_relationship: did_not_implement_compiler_or_author_source_oracle
    reviewed_behavior_digest: sha256:fc78c3bf929a822f5c998584ce1dcf2912567a9aade3d3864e0bd68d81eabb0d
    reviewed_behavior_path_count: 136
    reviewed_scope_digest: sha256:73c8b675528a0ebe2307c076bf361f310f635394b11f901dc35bcb169e75c401
  prerequisites:
    accepted_plan: accepted
    plan_document_review: passed
    code_review_series: closed
    acceptance_result: passed
    verification_result: passed
    validation_result: accepted
    bounded_traceability: passed
    graph_freshness: passed
    package_projection: passed
    installer_rollback: passed
    manifest_equality: passed
    public_claim_scan: passed
    v1_invariance: passed
    global_backlog: visible_non_gating
    runtime_exact_sha_checks: required_by_release_workflow
    automatic_release_receipt: required_by_release_workflow
  evidence:
    plan: docs/plans/2026-08-22-traceweaver-core-0.5.0-model-governance-plan.md
    plan_document_review: docs/validation/traceweaver-2026-08-22-v050-model-governance-plan-doc-review.md
    code_review_series: docs/validation/traceweaver-2026-08-22-v050-model-governance-code-review.md
    acceptance_result: docs/validation/traceweaver-2026-08-22-v050-model-governance-acceptance-result.md
    verification_result: docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
    validation_result: docs/validation/traceweaver-2026-08-22-v050-model-governance-validation-result.md
    traceability: traceability-matrix.md
    graph_freshness: .traceweaver/tw-graph-freshness.json
    package_projection: docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
    installer_rollback: docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
    manifest_equality: docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
    public_claim_scan: docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
    v1_invariance: docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md
  held_claims:
    - active_routing
    - descendant_enforcement
    - independently_attested_served_model
    - actual_or_material_token_savings
    - token_sufficiency
    - quality_equivalence
    - provider_replay_qualification
    - active_cutover
---

<!-- TRACEWEAVER: file-role=v050-release-candidate; req=REQ-TW-122; trace=TRACE-TW-072; ver=VER-TW-092; val=VAL-TW-040 -->

# TraceWeaver Core 0.5.0 Release Candidate

## Current State

This is the exact release-candidate envelope for the one integrated 0.5.0
shadow model/context-governance delivery. The consolidated code-review series,
ATP-TW-049 result, VER-TW-092 result, independent VAL-TW-040 result, bounded
traceability, package projection and rollback evidence, and candidate scope
identity are closed on the same reviewed behavior digest.

The readiness checker verifies every identity and passed/accepted disposition
mechanically. Historical 0.4.0 PR1/PR2 records remain readable through the
legacy readiness schema, but they are not prerequisites or substitutes for
this integrated candidate.

## Fixed Scope Identity

The candidate identity is:

```text
sha256(sorted(path + NUL + git_mode + NUL + sha256(file_bytes) + LF))
```

over the exact `candidate_scope.paths` list in front matter. The list is
sorted by the checker before hashing. The release-candidate record excludes
itself to avoid self-reference. `.traceweaver/tw-graph-freshness.json` is also
excluded because graph freshness is checked independently and would otherwise
create a circular digest. No other path is implicitly included or excluded.

The reviewed scope digest is the exact pre-publication candidate ref. The
main-only release workflow separately binds the future checked-out merge SHA,
waits for smoke and CodeQL on that exact SHA, rejects tag conflicts, and writes
the automatic runtime release receipt.

## Product And Claim Boundary

TraceWeaver Core 0.5.0 contains a deterministic, inspectable, shadow-only
model-context map and compiler. B0--B3 values are experimental hypotheses. V1
remains authoritative, and shadow plan/final artifacts use separate receipts.
The installed package is projected as one transaction with byte/mode-exact
rollback after a failed phase.

Active routing, descendant enforcement, served-model attestation, token savings, token sufficiency, quality equivalence, and provider replay qualification remain held.
Active cutover is disabled and requires a future owner decision. The
pre-existing wider requirements backlog remains visible and non-gating; this
record claims bounded TRACE-TW-072 readiness only.

## Pre-Merge Boundary

The integrated implementation and single consolidated repair/review series are
frozen. The final scope digest and evidence identities above must continue to
pass:

```sh
ruby scripts/traceweaver-check-release-readiness \
  --receipt docs/validation/traceweaver-plugin-0.5.0-release-candidate.md \
  --version 0.5.0 \
  --root .
```

Any semantic or behavior change after review invalidates the digest and returns
the candidate to review. The controlling task authority permits commit, push,
PR creation, and required pre-merge checks for this exact candidate. This
record does not authorize merge, tagging, a GitHub Release, or a post-merge
release receipt; those operations require new explicit owner direction.
