---
id: TW-INTEGRATED-REVIEW-2026-08-24-V060-TARGETED-CONTINUATION-001
status: repair_required_authorized_budget_exhausted
date: 2026-08-24
reviewer_route: gpt-5.6-terra
reviewer_effort: xhigh
reviewer_identity: withheld
integration_base: e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33
functional_scope_digest: sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875
functional_scope_path_count: 72
candidate_digest: sha256:556124f0f438dc68292badd79e080aa9580c9ce246a18bf31a5afac956d65a1e
candidate_path_count: 116
accepted_product_result_digest: sha256:fae120261ddea78ad01d474e716e124d2f9804e42c6bdb03a1eaaee9d27da50b
oracle_authorized: false
publication_authorized: false
---

# Core 0.6.0 integrated review targeted continuation

## Disposition

The one allowed targeted continuation of the existing integrated Terra xhigh
reviewer reproduced the exact 72-path functional scope and accepted product
bindings. Four of the original six P1 findings are closed. Two retained
release-control findings remain open, so the reviewer denied oracle refresh
and every final gate.

No reviewer files were edited, no subagents were used, and no publication
action occurred.

## Reproduced scope

- Integration base:
  `e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33`
- Released predecessor: `traceweaver-core--v0.5.0` at
  `3a1f3c56b093e61b88e9f6282637878e8ebbf163`
- Functional scope: 72 paths at
  `sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875`
- Complete review candidate: 116 paths at
  `sha256:556124f0f438dc68292badd79e080aa9580c9ce246a18bf31a5afac956d65a1e`
- Accepted product result:
  `sha256:fae120261ddea78ad01d474e716e124d2f9804e42c6bdb03a1eaaee9d27da50b`

The targeted lifecycle capture, HTML, graph, evidence, product-validation,
real-product-depth, and release-integrity regressions passed. The accepted
Vestro and Air Router raw digests reproduced with 100% recovery and zero false
authority or truth-stage promotion.

## Original finding disposition

| Finding | Status | Closure evidence |
| --- | --- | --- |
| P1-001 | Closed | Durable staged images, journal publication, fsync, recovery-before-command, and kill-point crash-recovery regression. |
| P1-002 | Closed | HTML spans search and slice binary strings; lifecycle HTML regression passed. |
| P1-003 | Closed | Impact invalidation covers every historical evidence record type; graph regression passed. |
| P1-004 | Closed | Evidence, cutover, and product inputs resolve beneath the root, reject symlinks, and bind actual bytes to digests; content-binding regressions passed. |
| P1-005 | Open as `P1-005-continuation` | The enforced oracle source contract still promotes rejected historical product evidence and omits the accepted exact correction. |
| P1-006 | Open as `P1-006-continuation` | The real accepted V&V capsule and current authority carriers cannot enter the production v3 terminal release path consistently. |

## P1-005-continuation

The oracle generator and release checker share an incomplete lifecycle source
set. It includes rejected fixed-route product evidence while omitting the
accepted exact result JSON/Markdown, exact raw observations, current V&V
capsule, exact rollback evidence, correction authority gate, and focused depth
smoke. A structurally passing oracle could therefore deliver historical
rejected evidence under an `accepted_evidence` category.

Required repair: update both source-set definitions and their equality
contract, bind the accepted exact correction sources, and add a negative
release regression that substitutes the rejected set and requires refusal.

## P1-006-continuation

The V&V capsule binds the accepted result but uses a state the production v3
checker rejects, retains obsolete rejected/reviewer-pending claims, and is not
reconciled with current requirements and matrix status. The positive release
smoke masks the real path by replacing the capsule with a synthetic accepted
fixture.

Required repair: establish one explicit validation-accepted state across the
current V&V, requirements, matrix, Intent Contract, and v3 checker while
retaining publication/tag/deployment/runtime/cutover holds; exercise the real
corrected capsule in regression.

## Gate

- Open P0: 0
- Open P1: 2
- Reviewer-bound oracle refresh: prohibited
- Graph/reinstall/PR/release gates: prohibited
- One targeted reviewer continuation: consumed
- Existing repair and `EXC-TW-018` correction budgets: consumed

## Next gate

Run `/tw-authority-gate` for a controlled owner decision that explicitly
reopens the exhausted repair/reviewer budget. Do not write the oracle or change
release behavior under the expired `EXC-TW-018` authority.
