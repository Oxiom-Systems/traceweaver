---
id: CHG-TW-2026-08-24-001
exception_id: EXC-TW-018
status: approved_bounded_exception_active
date: 2026-08-24
owner: Oxiom Systems
authority_effect: exact_bounded_validation_method_correction_only
requirements: [REQ-TW-136, REQ-TW-143, REQ-TW-144, REQ-TW-145]
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-real-product-depth-change-proposal; req=REQ-TW-136,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Proposed Real-Product-Depth Change And Repair-Cap Exception

## Source and decision requested

Source: Hannes Zietsman's 2026-08-24 explicit selection of **Real-product
depth** for the rejected exact-candidate product validation.

Owner decision: Hannes Zietsman explicitly approved both records on 2026-08-24:

> Approve CHG-TW-2026-08-24-001 and EXC-TW-018.

The approved records are:

- `CHG-TW-2026-08-24-001`: correct the representative validation method so it
  ingests and navigates a deterministic census of actual authorized Vestro and
  Air Router lifecycle state; and
- `EXC-TW-018`: permit one final bounded validation-method correction cycle
  after the normal repair batch was consumed, implemented under immutable L3
  workflow profile revision 2.

## Exact allowed scope if approved

- `scripts/traceweaver-run-v060-representative-product-trials`;
- its directly linked focused validation smoke/fixtures if RED coverage needs
  them;
- the V&V definition/capsule, validation plan/result, raw product evidence,
  scope digest, traceability status, and generated evidence views required to
  bind the new exact candidate;
- read-only access to the already authorized Vestro and Air Router source files
  and revisions; and
- one new profile revision that changes only the repair/change authorization
  metadata needed for this bounded cycle.

The correction must use source-derived actual record/link counts and provenance,
must not hard-code a passing census, and must fail when the route substitutes a
fixed eight-record graph or constant five-link task scores.

## Prohibited scope

- no modification of either consumer repository or the mixed TraceWeaver root;
- no new product capability, public claim, package scope, reviewer identity,
  deployment target, semantic-HTML authority cutover, or served-model claim;
- no second integrated reviewer or fresh full discovery review;
- no commit, push, PR, merge, tag, GitHub Release, deployment, or publication;
  and
- no further repair cycle after this exception.

## Baseline and evidence impact

The current functional candidate
`sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51`
and product result
`sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794`
remain historical rejected evidence. Any approved implementation creates a new
functional digest and resets product validation, scope/rollback identity,
review continuation, oracle, graph, reinstall, PR, and release gates to held.

Unaffected component verification may remain current only through explicit
post-change impact classification; source-derived product trials, focused
validation-method verification, scope binding, and product disposition must be
rerun.

## Exception expiry

`EXC-TW-018` expires at the first of:

- one bounded correction and focused verification attempt completes;
- a new exact-candidate owner product disposition is recorded;
- the allowed file or behavior scope expands; or
- the owner withdraws the decision.

Expiry does not authorize publication. The existing single targeted Terra
continuation may run only after a new exact candidate is accepted.

## Next gate

`/tw-authority-gate` may now re-evaluate the exact approved scope. If the gate
passes, `/tw-auto` creates profile revision 2 and routes one bounded `/tw-work`
correction. Any broader scope returns to a human decision.
