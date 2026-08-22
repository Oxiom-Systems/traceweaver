---
id: VER-TW-092
status: passed
reviewed_behavior_digest: sha256:fc78c3bf929a822f5c998584ce1dcf2912567a9aade3d3864e0bd68d81eabb0d
reviewed_behavior_path_count: 136
artifact_bindings:
  map:
    path: plugins/traceweaver-core/references/model-context-map.yml
    file_sha256: sha256:68e716c3e56492a2aff6ca83de7eeb76981c4b7e5ba6e17a7effc17d3e42da52
    semantic_digest: sha256:153ce25228e915ec0949fe1dab1b2296ce3f9934948987c8b191be15eb47665d
  oracle:
    path: plugins/traceweaver-core/references/model-context-oracle-adequacy-review.json
    file_sha256: sha256:6505622611558c592c04c2e9b27582b2bb6529736ee9d6b23bbefb9f3000ed21
    semantic_digest: sha256:57e6759a481157ec339bf5b66322cf25b5b86d14c6bd9d0fceaf566a8b53ff2d
  inventory:
    generator: plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-generate-model-context-map
    semantic_digest: sha256:fd0eb117987ece30d1f2d3c576d051e8f5f14a3c97e7d55581c22e5a43afdf01
    route_count: 87
    route_category_cell_count: 522
evidence_claims:
  package_projection: passed
  installer_rollback: passed
  manifest_equality: passed
  public_claim_scan: passed
  v1_invariance: passed
executed_checks:
  model_context_routing: passed
  installer_transaction: passed
  release_readiness: passed
  structured_acceptance: passed
  generated_view_drift: passed
  current_snapshot_drift: passed
  manifest_equality: passed
  public_claim_scan: passed
  v1_invariance: passed
---

<!-- TRACEWEAVER: file-role=v050-model-governance-verification-result; req=REQ-TW-109,REQ-TW-123; trace=TRACE-TW-072; ver=VER-TW-092; val=VAL-TW-040 -->

# VER-TW-092 — 0.5.0 Model-Governance Verification Result

Verification passed on the reviewed 136-path behavior set. The frozen
model-context runner passed 72/72 cases; the installer transaction runner
passed complete Codex and Antigravity projections, both prior states, every
injected phase, concurrency, unowned-conflict, and ancestor/leaf symlink
boundaries; and the release-readiness runner passed its integrated production
and negative contract suite.

The broader repository verification set covers SEC generation and resolution,
workflow profiles, bootstrap/discovery/host reconciliation, review-series and
scoped-review compatibility, trace authoring and code anchors, generated views,
bounded current-snapshot verification, manifest versions, public claim scans,
TypeScript build, workflow lint, plugin validation, CE-byte closure, V&V
capsule closure, and diff hygiene. The final command ledger is rerun on the
same candidate before PR publication and remains bound by the digest above.

The installed runtime check establishes package projection and discovery. It
does not attest a live provider-served model; that claim remains held alongside
active routing, quantitative savings or sufficiency, quality equivalence,
provider replay qualification, and active cutover.
