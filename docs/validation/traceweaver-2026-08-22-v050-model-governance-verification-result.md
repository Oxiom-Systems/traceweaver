---
id: VER-TW-092
status: passed
reviewed_behavior_digest: sha256:d7d066d95cb5438558ea31f51004ff6a290b984eab71e5e7eca12ccb2275ae99
reviewed_behavior_path_count: 155
artifact_bindings:
  map:
    path: plugins/traceweaver-core/references/model-context-map.yml
    file_sha256: sha256:a8fdba8531b05f22291f2dc4ecfc706d5da9f105c0f21cb7eb2e225082e367cb
    semantic_digest: sha256:2eab40f5e2e459dfb1ff1f655b0fb0cdacfe8c40478f04368d7185b219c988f2
  oracle:
    path: plugins/traceweaver-core/references/model-context-oracle-adequacy-review.json
    file_sha256: sha256:8639cf36bc675cfd17d06d4e59ec1bb81d732617d5950c185dd128d54730c7e3
    semantic_digest: sha256:e20e838ad7ed01f850466ed16b30914a2883c2f3d40a0f9f0827aa972e65c9fa
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

Verification passed on the reviewed 155-path behavior set. The frozen
model-context runner passed 72/72 cases; the installer transaction runner
passed complete Codex and Antigravity projections, both prior states, every
injected phase, concurrency, unowned-conflict, and ancestor/leaf symlink
boundaries; and the release-readiness runner passed its integrated production
and negative contract suite. The convergence and controlled-publication
runners also proved the one-Sol/one-Terra turn bounds and exact reuse of a
single integrated mixed review.

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
