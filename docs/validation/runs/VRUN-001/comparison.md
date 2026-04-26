# VRUN-001 Comparison

Scenario: New feature with document chain

Starting commit: `3a031545587a643275a62a8050ddeadaf9a0e728`

Baseline final commit: `0d71a8030c2d8d5b2793339dcc6a6a5347c66ded`

TraceWeaver final commit: `6089e99b1f59750f96bf940a6a0b226751f44b9a`

## Outcome

Technical result: Pass.

Formal validation status: Human reviewer usefulness/noise and confidence rating
pending.

Both runs implemented the requested shipping quote behavior and passed the same
five-test suite. The TraceWeaver run added explicit trace links that the
baseline did not produce.

## Baseline vs TraceWeaver

| Area | Baseline | TraceWeaver | Distinct Value |
|---|---|---|---|
| Stakeholder need captured | Plain-language need only | NEED-SHIP-001 | Stable need ID |
| Requirement IDs created | None | SREQ-SHIP-001, SREQ-SHIP-002 | Requirements can be referenced by plan, ATP, result, and tests |
| Requirement-to-plan links | Implicit plan bullets | TASK-SHIP rows linked to SREQ IDs | Reviewer can audit scope from plan to requirement |
| Requirement-to-implementation links | Inferred from feature name and tests | TRACE rows link SREQs to `src/cart.js#shippingQuote` and `test/cart.test.js` | Less reconstruction needed |
| Requirement-to-test links | Behavioral test names only | VER-SHIP-001 and SREQ-labelled tests | Tests state what requirement they verify |
| ATP / acceptance procedure | None | ATP-SHIP-001, ATP-SHIP-002 | Acceptance procedures are explicit |
| Verification evidence | General `npm test` summary | VER-SHIP-001 linked to requirements and result | Test evidence is auditable by ID |
| Validation path | None | VAL-SHIP-001 plus TD-SHIP-001 for deferred UI validation | Separates dummy module validation from later UI validation |
| Gaps / debt | Not recorded | TD-SHIP-001 records UI wording validation as deferred | Missing validation is visible instead of hidden |

## Noise / Overhead

| Metric | Baseline | TraceWeaver |
|---|---|---|
| Final project files | 7 | 9 |
| Test command time | 0.30s | 0.30s |
| Additional durable docs | None beyond requirements/plan/results | Traceability matrix and ATP |
| Noise observed | Low | Low for Standard-mode new feature; too much for Lite-mode small docs-only work |

The TraceWeaver run produced more documentation, but the extra artifacts are
directly tied to the validation purpose: requirement-to-plan-to-ATP/result
traceability.

## Reviewer Confidence

Codex reviewer confidence, before human confirmation:

| Workflow | Confidence | Reason |
|---|---|---|
| Baseline | 2 / 5 | Behavior works, but reviewer must infer requirement coverage and result links. |
| TraceWeaver | 4 / 5 | Requirement, plan, implementation, ATP, verification, result, and validation links are explicit. |

Human reviewer rating: Pending Hannes confirmation.

## Result

VRUN-001 has technical evidence that TraceWeaver adds distinct value for a new
feature with a document chain.

The run should be marked fully complete only after the human reviewer confirms:

- usefulness rating
- low-value noise rating
- confidence before/after rating
