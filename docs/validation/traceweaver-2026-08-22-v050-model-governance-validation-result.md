---
id: VAL-TW-040
status: accepted
date: 2026-08-22
owner: Oxiom Systems
rater: terra-integrated-reviewer:/root/v050_convergence_integrated_review
rater_relationship: did_not_implement_compiler_or_author_source_oracle
oracle_review_id: ORACLE-ADEQUACY-TW-049-RELEASE-001
reviewed_oracle_cells: 522
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
scenario_results:
  b0: passed
  b1: passed
  b2: passed
  b3: passed
  negative_holds: passed
  v1_invariance: passed
  claim_boundary: passed
  complete_oracle_review: passed
---

<!-- TRACEWEAVER: file-role=v050-model-governance-validation-result; req=REQ-TW-109,REQ-TW-123; trace=TRACE-TW-072; ver=VER-TW-092; val=VAL-TW-040 -->

# VAL-TW-040 — 0.5.0 Shadow Model-Governance Validation Result

## Disposition

Accepted for the bounded TraceWeaver Core 0.5.0 shadow-governance claim set.
The model-context map, source-oracle closure, deterministic budget selection,
and protected receipts were understandable and useful without implying active
routing, qualification, or efficiency evidence.
The retained Terra reviewer independently accepted the convergence amendment
and canonical source oracle, then closed the same series after one consolidated
Sol repair batch. The final 155-path identity includes only the authorized
mechanical v1 and evidence bindings performed after that closure.

## Independent Results

The complete oracle review dispositioned all 87 routes across all six source
categories: 435 cells were satisfied by exact digest-bound sources, 87
`current_external_sources` cells were excluded by the controlling authority
with a non-empty rationale, and no cell remained open or uncertain.

Real isolated installs exercised both supported layouts. Codex selected B0 for
`tw-setup` and B1 for `tw-authority-gate`; Antigravity selected B2 for
`tw-code-review` and B3 for `tw-plan`. Every compile produced a structurally
eligible shadow recommendation at the lowest authorized class and passed
independent receipt validation.

The negative scenarios returned their exact fail-closed outcomes:

- required-source omission: `held_source_manifest_incomplete` with
  `oracle_recall:task_scope`;
- stale digest-bound locator: `held_source_delivery_invalid`;
- escaping locator: `held_source_delivery_invalid` with `escaping_locator`;
  and
- protected receipt mutation: `held_receipt_invalid` with `receipt_identity`.

The strict v1 comparison passed for all 112 SEC records, native-child planned
and terminal receipts, the terminal template, and the review-series receipt.
The public claim inspection also passed: active routing, descendant
enforcement, independently attested served-model identity, token savings,
token sufficiency, quality equivalence, provider replay qualification, and
active cutover remain explicitly unproven; active cutover is disabled.

## Acceptance Boundary

This result accepts the shadow model/context governance surface for 0.5.0. It
does not validate live provider replay, runtime descendant interception,
served-model attestation, actual token usage or savings, token sufficiency,
quality equivalence, active routing, or active cutover.
