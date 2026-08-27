---
id: CHG-TW-2026-08-24-002
exception_id: EXC-TW-019
status: owner_approved_source_evidence_requirements_review_clean_controlled_promotion_in_progress
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-037, REQ-TW-130, REQ-TW-136, REQ-TW-143, REQ-TW-144, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
source_review: TW-INTEGRATED-REVIEW-2026-08-24-V060-TARGETED-CONTINUATION-001
publication_authority: none
---

# Core 0.6.0 terminal release-truth change proposal

## Decision required

Hannes Zietsman approved the exact decision below on 2026-08-26. The approval
is source evidence for the controlled promotion and carries no publication
authority.

The exact candidate cannot proceed to its reviewer-bound oracle, graph,
reinstall, PR, or release gates because the only permitted targeted review
continuation returned `P1-005-continuation` and `P1-006-continuation`.

The current plan permits at most one batched repair and one targeted reviewer
resume. Both are consumed. `EXC-TW-018` also says no further repair cycle and
expired when the accepted exact product disposition was recorded. The standing
Core 0.6.0 delivery goal therefore does not authorize another mutation.

Proposed exact owner decision:

> Approve CHG-TW-2026-08-24-002 and EXC-TW-019 for one final release-control repair of P1-005-continuation and P1-006-continuation, followed by exact-product rebinding and one retained-finding-only continuation of the existing integrated Terra reviewer; publication remains separately gated.

## Proposed authority effect

Owner approval is source evidence for a controlled re-baseline; it is not
direct implementation authority. Before work, `/tw-requirements-review` must
promote this exact terminal exception into the three controlled roots, create
immutable L3 workflow profile revision 3, reconcile the plan's cycle ceiling,
and obtain a clean authority/document gate. Only then may `/tw-work` execute.

`EXC-TW-019` would be the sole and final candidate-specific exception beyond
the consumed normal repair and `EXC-TW-018` correction. It must not reset the
earlier series, reopen closed P1 findings, dispatch a new reviewer identity, or
authorize publication.

## Exact allowed implementation scope

- `scripts/traceweaver-refresh-v060-model-context-oracle`;
- `scripts/traceweaver-check-release-readiness`;
- `scripts/traceweaver-smoke-v060-release-integrity` and directly linked
  release/oracle fixtures;
- current requirements, matrix, Intent Contract, workflow profile, V&V
  capsule/definition/validation status, and exact evidence bindings required
  to express one validation-accepted state without promoting publication;
- one correction-specific RED receipt, one bounded main-thread `/tw-work`
  repair, and deterministic regression evidence;
- a new exact functional-scope digest followed by fresh read-only Vestro and
  Air Router trial bindings and explicit product-owner disposition; and
- after exact product acceptance, one retained-finding-only continuation of
  the same existing integrated Terra reviewer for these two fingerprints only.

## Prohibited scope

- no packaged lifecycle runtime capability beyond what the two findings
  require;
- no consumer-repository mutation;
- no new reviewer identity, full discovery review, review fan-out, or repair
  subagent;
- no semantic-HTML authority cutover;
- no served-model, deployment, runtime-health, release-ready, tag, GitHub
  Release, or publication claim; and
- no further repair or reviewer cycle after this terminal exception.

## Required RED and GREEN evidence

RED must prove both current failures before mutation:

1. substituting the rejected historical source set for the exact accepted set
   is not refused by the oracle/release contract; and
2. the real accepted V&V capsule cannot pass the production v3 terminal
   validation path while the synthetic fixture can.

GREEN must prove the exact inverse, preserve every publication/runtime/cutover
hold, reproduce the canonical baseline and functional digest, pass all v0.6
release and product regressions, and receive clean retained-finding closure
from the existing reviewer.

## Expiry

If promoted, `EXC-TW-019` expires at the first of one bounded repair attempt,
one new exact product disposition, one retained-finding-only reviewer result,
scope expansion, or owner withdrawal. A non-clean reviewer result is terminal
for this Core 0.6.0 candidate unless the owner separately changes the release
goal and controlled requirements.

## Next gate

Promote the three controlled roots, workflow profile revision 3, plan, and L3
V&V state; capture correction-specific RED; then obtain a clean authority
Proceed. The oracle must not be written before that gate.
