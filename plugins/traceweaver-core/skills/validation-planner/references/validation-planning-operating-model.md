# Validation Planning Operating Model

This is the core TraceWeaver operating model for validation planning. It is
written for agents deciding how a delivered behavior will be proven to solve
the right stakeholder problem in its intended context, and for agents judging
whether claimed validation evidence actually proves it.

## Primary Question

```text
How will we prove we built the right thing?
```

## What Validation Is

Validation checks the result against stakeholder need, intended use, and
operating context. A validation result says: a representative actor exercised
a representative scenario and the stated acceptance signal was observed.

A useful validation plan lets another person or agent:

- see which need or intent is being validated
- see who judges success and why that judge is representative
- see what scenario stands in for real use
- see what observable signal counts as acceptance
- find the evidence once it exists
- tell validation evidence apart from verification evidence

## What Validation Is Not

| Offered as validation | Why it is not | Correct treatment |
|---|---|---|
| Passing unit or integration tests | They verify implementation against requirements, not need satisfaction in context | Link as verification evidence |
| A clean build or smoke run | Proves buildability and basic operation, not the right thing was built | Link as verification evidence |
| Implementer self-assessment | The judge is not independent of the work | Hold; name a rater with a recorded relationship to the work |
| A demo without a named rater or acceptance signal | Nothing was judged against stated criteria | Convert into a scenario with rater and signal |
| An unmeasured adoption hope | No target, no interpretation rule, no evidence path | Define telemetry target and interpretation rule, or hold |
| Silent post-release follow-up | Deferral without control hides the missing evidence | Record as an approved deferred-validation gap |

## Decision Rules

- Validation checks the result against stakeholder need, intended use, and
  operating context.
- Verification can inform validation, but it does not replace it.
- The rater, stakeholder, user, operator, or approved proxy must be
  identified by name or role.
- The rater's relationship to the work must be recorded in the rater profile,
  with an independence note.
- Acceptance criteria must describe observable success in context.
- Deferred validation is allowed only as a controlled gap with owner,
  trigger, expected evidence, and release impact.
- Failed or partial validation must route to change control or scope
  reduction; it must not be re-labeled as a pass.

## Validation Evidence Types

| Evidence type | Meaning | Minimum content |
|---|---|---|
| Stakeholder review | A representative stakeholder judges the result against stated criteria | Rater profile, criteria, recorded judgment |
| Representative-user scenario | A representative user performs the intended workflow | Rater profile, scenario, observed outcome |
| Operational dry run | The operational procedure is exercised before production use | Operator, procedure, run record, outcome |
| Acceptance test with representative actor | An end-to-end scenario tied to user value, judged by a representative actor | Actor, scenario, acceptance signal, result record |
| Beta or adoption telemetry | Real-use signals after limited release | Target, interpretation rule agreed in advance, measured value |
| Approval package review | A decision authority reviews assembled evidence | Package inputs, reviewer, decision record |

An activity without a rater, scenario, observable outcome, and evidence path
is not validation evidence regardless of its type label.

## Rater And Representativeness Rules

- Prefer a rater who is a real instance of the intended user, operator,
  customer, or approver.
- An approved proxy is acceptable when the real actor is unavailable; record
  why the proxy is representative and who approved the substitution.
- Record independence: a rater who contributed to the implementation may
  still provide evidence, but a pass requires either an independent rater or
  an explicit, recorded acceptance of the dependence by the decision owner.
- One rater can cover multiple scenarios; one scenario may need multiple
  raters when different stakeholder groups must accept the result.

## Deferred-Validation Rules

Deferred validation is a controlled exception, not a default. To defer:

- record an approved gap with a stable ID
- name the owner accountable for closing it
- define the trigger that starts validation (for example: beta start, first
  production cohort, next release gate)
- define the expected evidence and where it will be recorded
- state the release impact: what is held, shipped with the gap visible, or
  blocked until closure

A deferral without all five elements is a hold condition. Expired triggers
reopen the gap; they do not close it.

## Failed Or Partial Validation Handling

| Outcome | Required action |
|---|---|
| `fail` | Route to change control: revise the behavior, the requirement, or the need linkage; do not re-run until something changed |
| `partial` | Record what passed and what did not; route the unmet part to change control or scope reduction |
| `blocked` | Record the blocker, owner, and unblock condition; the claim stays open |
| `deferred` | Allowed only under the deferred-validation rules above |

## Handoff Rules

| Validation issue | Next domain |
|---|---|
| Need unclear | `needs-and-requirements-capture` |
| Requirement mismatch | `requirements-reviewer` |
| Implementation proof missing | `verification-planner` |
| Deferred validation | `risk-gap-change-control` |
| Release decision needed | `technical-review-and-audit-gate` |

`requirements-reviewer` is packaged in this plugin. The other domains are not
yet packaged as standalone knowledge skills; route through their distilled
guides or the consuming `tw-*` skills until they are promoted.
