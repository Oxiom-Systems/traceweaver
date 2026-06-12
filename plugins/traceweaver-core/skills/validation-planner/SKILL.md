---
name: validation-planner
description: Plans and judges stakeholder validation evidence for needs, features, releases, acceptance criteria, and closure claims. Use when deciding how to prove a delivered behavior solves the right stakeholder problem in its intended context, when a representative user, rater, operator, or approval actor must be named, when adoption or acceptance evidence needs planning or review, when validation is deferred and needs an owner and trigger, or when verification results are being offered as validation.
---

<!-- TRACEWEAVER: file-role=distilled-validation-planning-knowledge-skill; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Validation Planner

## Overview

Define the evidence that proves a delivered behavior solves the right
stakeholder problem in the intended context, and judge whether claimed
validation evidence actually proves it. This skill does not summarize
standards or source documents; it applies distilled TraceWeaver rules to
validation planning and validation-closure judgment.

Core question:

```text
How will we prove we built the right thing?
```

Verification answers a different question: did we build it right? This skill
exists so the two never blur. Passing tests, clean builds, and implementer
confidence are not validation.

Use this skill when a need, feature, or release needs stakeholder acceptance
evidence; when validation cannot be represented by tests alone; when a
representative user, rater, operator, customer, or approval actor must be
named; or when deferred validation needs an owner, trigger, and closure
criteria.

Do not use this skill to verify implementation against a requirement, to let
implementer self-assessment stand as independent acceptance, to approve vague
stakeholder needs, or to hide unavailable validation as ordinary follow-up.

## Reference Loading

Load only what the work needs:

- Always load `references/validation-planning-operating-model.md`,
  `references/validation-planning-checklist.md`, and
  `references/validation-plan-output-schema.md` for substantive validation
  planning.
- Load `tests/validation-planning-examples.md` when calibrating findings,
  judging weak validation claims, or producing rewrite guidance for
  acceptance criteria.
- Load `references/source-basis.md` only when the user asks where the rules
  came from or when updating the distilled knowledge base.

Do not reproduce licensed source text, source tables, source diagrams, or long
quoted passages. Public output must use original TraceWeaver wording.

## Process

### 1. Identify Need, Intended Use, And Operating Context

Establish what is being validated before planning how:

- the stakeholder need or source intent, with its ID when one exists
- the intended use: who does what with the result, to achieve what outcome
- the operating context: environment, workload, workflow, and constraints in
  which the result must succeed
- the success signal: what observable result would show the need is satisfied

If the need is too vague to derive an observable success signal, stop and hand
off to needs capture rather than inventing acceptance criteria.

Required inputs for substantive planning:

- stakeholder need, intended use, operating context, and success signal
- candidate or approved requirements and their verification state
- a representative user, rater, or approval actor profile
- validation scenario, acceptance criteria, evidence path, and constraints
- existing approved gaps, risks, or deferred validation records

### 2. Define The Validation Scenario And Acceptance Signal

For each need or release objective, define a scenario that reflects real
intended use, not a convenient demonstration:

- the scenario exercises the intended use in the operating context
- the acceptance signal is observable: a confirmed outcome, a recorded
  judgment against stated criteria, a measured adoption target with an
  interpretation rule, or an approval decision
- acceptance criteria describe observable success in context, not opinion

A scenario that only shows the feature working in isolation supports
verification confidence; it does not validate the need.

### 3. Name The Rater And Record Their Relationship To The Work

The rater, stakeholder, user, operator, or approved proxy must be identified
by name or role. Record in the rater profile:

- name or role
- relationship to the work
- an independence note: whether and how the rater is independent of the
  implementation
- why this rater is representative of the intended user or approver

Implementer self-assessment is never sufficient as independent acceptance. An
implementer may contribute evidence, but a validation pass requires a rater
whose relationship to the work is recorded and defensible.

### 4. Define Evidence Collection And Approval Package Inputs

For each scenario, define how evidence will be collected and where it will
live:

- the evidence path: where the result record, approval note, telemetry
  extract, or scenario outcome will be stored
- the evidence type: stakeholder review, representative-user scenario,
  operational dry run, acceptance test with a representative actor, adoption
  telemetry with a target and interpretation rule, or approval package review
- the approval package inputs this evidence feeds, when a release or
  acceptance decision depends on it

A claimed validation status with no evidence path is a hold condition, not a
result.

### 5. Separate Verification Evidence From Validation Evidence

Keep the two evidence streams distinct:

- Verification: did we build it right? Tests, builds, static checks,
  inspections.
- Validation: did we build the right thing? Stakeholder review,
  representative scenarios, operational dry runs, acceptance results,
  interpreted adoption signals.

Verification can inform validation, but it does not replace it. When
verification evidence exists, link it and label it as verification, not
validation. A test result counts toward validation only when the test is
explicitly tied to stakeholder acceptance criteria and representative
context.

### 6. Apply The Gate And Emit The Plan

Apply the validation gate before any pass decision:

```text
Validation cannot pass on implementer self-assessment alone. The rater or
representative must be named, their role and relationship to the work
recorded, and the scenario must connect to stakeholder need or intended use.
```

Then emit the validation plan and scenario matrix using
`references/validation-plan-output-schema.md`:

- `validation_plan` with need IDs, intended use, operating context, method,
  success criteria, and owner
- `stakeholder_or_rater_profile`
- `validation_scenario_matrix` with one row per scenario
- `adoption_evidence_record` entries when evidence exists
- a decision (`pass`, `fail`, `partial`, `blocked`, `deferred`, or held) with
  rationale and hold conditions

Hold the decision when any hold condition in
`references/validation-planning-checklist.md` applies. Failed or partial
validation must route to change control or scope reduction; it must not be
re-labeled as a pass.

## Authority Boundary

This skill plans and judges validation evidence. It cannot approve
requirements, replace a stakeholder decision, or treat passing tests as
validation unless the test is explicitly tied to stakeholder acceptance
criteria and representative context. Deferred validation is allowed only as a
controlled gap with owner, trigger, expected evidence, and recorded release
impact.

## Handoff Rules

Handoffs name TraceWeaver knowledge domains. Domains without a standalone
knowledge skill in this plugin route through their distilled guides or the
consuming `tw-*` skills until they are promoted.

| Validation issue | Next domain | Packaging state |
|---|---|---|
| Need unclear or success signal underivable | `needs-and-requirements-capture` | Guide-only; load the distilled needs-and-requirements-capture guide via `tw-brainstorm` / `tw-grill` capture flows |
| Requirement quality or authority gap | `requirements-reviewer` | Packaged knowledge skill in this plugin |
| Implementation proof missing | `verification-planner` | Packaged knowledge skill in this plugin |
| Deferred or partial validation | `risk-gap-change-control` | Packaged knowledge skill in this plugin |
| Release or gate decision needed | `technical-review-and-audit-gate` | Packaged knowledge skill in this plugin |

## Integration With TraceWeaver

`tw-plan` uses this skill when planning how a result will be validated against
stakeholder need or acceptance signal. `tw-audit` uses it when judging
validation or acceptance closure claims.

Validation evidence produced under this skill feeds the validation columns of
`traceability-matrix.md`: `VAL-*` records, validation status, and approved
deferred-validation gaps. A stakeholder-facing behavior is not done when its
matrix row shows only verification evidence.

Do not let verification pass as validation:

- do not mark a need `Validated` on test results alone
- do not close a release claim on implementer self-assessment
- record deferred validation as an approved gap with owner and trigger, never
  as silent follow-up
- route failed or partial validation to change control or scope reduction

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "All the tests pass." | Tests verify implementation against requirements; validation needs stakeholder or intended-use evidence. |
| "The implementer used it and it works." | Implementer self-assessment is not independent acceptance; name a rater and record their relationship to the work. |
| "The demo went well." | A demo supports validation only with a representative scenario, a named rater, and a recorded acceptance signal. |
| "Users will obviously like it." | An adoption claim without a representative rater, scenario, or evidence path is not evidence. |
| "We will validate it after release." | Post-release validation is allowed only as an approved deferred gap with owner, trigger, expected evidence, and release impact. |
| "The stakeholder saw the PR." | Seeing the change is not acceptance in context; the stakeholder must judge a scenario against stated criteria. |
| "Telemetry will tell us." | Telemetry validates only with a target and an interpretation rule agreed before the evidence is read. |

## Red Flags

- Validation status claimed with no named rater
- The rater is the implementer, with no independence note or approved-proxy
  rationale
- The scenario does not reflect intended use or operating context
- Acceptance signal worded as opinion ("looks good", "seems fine") with no
  observable outcome
- Unit or integration test results offered as validation evidence
- A `Validated` status with no evidence path
- Deferred validation without an owner, trigger, or approved gap
- Adoption claims without a telemetry target and interpretation rule
- Validation evidence tied to a different candidate, version, or scope than
  the one being released
- Failed or partial validation re-labeled as a pass instead of routed to
  change control

## Verification

Before finishing validation planning or a validation-closure judgment,
confirm:

- [ ] Stakeholder need, intended use, operating context, and success signal
      are identified.
- [ ] Each scenario reflects intended use in the operating context.
- [ ] The rater is named with role, relationship to the work, independence
      note, and representativeness rationale.
- [ ] Acceptance criteria describe observable success in context.
- [ ] An evidence path exists for every claimed or planned validation result.
- [ ] Verification evidence is linked and labeled separately from validation
      evidence.
- [ ] Deferred validation is recorded as an approved gap with owner, trigger,
      expected evidence, and release impact.
- [ ] The gate was applied: no pass rests on implementer self-assessment
      alone.
- [ ] The validation plan and scenario matrix follow the output schema, with
      decision, rationale, and hold conditions recorded.
