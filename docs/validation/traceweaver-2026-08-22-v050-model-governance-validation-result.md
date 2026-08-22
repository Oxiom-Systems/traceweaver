---
id: VAL-TW-040
status: accepted
date: 2026-08-22
owner: Oxiom Systems
rater: /root/v050_independent_validation
rater_relationship: did_not_implement_compiler_or_author_source_oracle
oracle_review_id: ORACLE-ADEQUACY-TW-049-RELEASE-001
reviewed_oracle_cells: 522
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
I independently confirmed the formatting-only trailing-space cleanup without a semantic, output, or 136-path-set change.

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
