---
id: VER-TW-094-V060-RELEASE-CANDIDATE-INTEGRITY-001
status: passed
date: 2026-08-27
owner: Oxiom Systems
functional_scope_digest: sha256:4de43ade6ac8d15e278cef68f2e94b2c1eec5e5f9a919f8696f71e0f51debcec
functional_scope_path_count: 102
integration_base: e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33
version: 0.6.0
tag: traceweaver-core--v0.6.0
authority_effect: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-release-candidate-release-integrity-verification; req=REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094 -->

# Core 0.6.0 release-integrity verification

`scripts/traceweaver-smoke-v060-release-integrity` passed on the frozen
candidate after fresh product rebinding and V&V capsule update. The retained
checks passed for:

- acyclic pre-oracle source closure and rejection of post-oracle receipts as
  oracle inputs;
- release label and equality across all five version-carrying manifests;
- refusal of missing or stale product-validation evidence;
- 88-route, 6-category, 528-cell complete reviewer-bound oracle identity;
- stale map, inventory, product truth, and exact-scope negatives;
- exact merge-SHA and candidate-scope enforcement.

`bash scripts/traceweaver-check-release-manifest-versions --expect 0.6.0`
reported `0.6.0` for the marketplace, Claude, Codex, Cursor, and Antigravity
manifests. `git diff --check` also passed. The release remains held until the
final same-cycle graph reconciliation, validated publication capsule, PR
checks, separate merge capsule, and exact-main release workflow.
