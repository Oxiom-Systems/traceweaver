# Validation Planner Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for proving that a delivered
behavior solves the right stakeholder problem in the intended context. It is
original TraceWeaver guidance for U3 summary promotion and does not promote a
public skill folder, runtime package, package manifest, or release claim.

Requirement basis: R13 in
`docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`.

## Core Question

How will we prove we built the right thing?

## Use When

Use validation planning when a need, feature, or release needs stakeholder
acceptance evidence; when validation cannot be represented by tests alone; when
representative user, rater, operator, customer, or approval actor must be named;
or when deferred validation needs owner, trigger, and closure criteria.

Do not use it to verify implementation against a requirement, let implementer
self-assessment stand as independent acceptance, approve vague stakeholder
needs, or hide unavailable validation as ordinary follow-up.

## Required Inputs

- stakeholder need, intended use, operating context, and success signal
- candidate or approved requirements and verification state
- representative user, rater, or approval actor profile
- validation scenario, acceptance criteria, evidence path, and constraints
- approved gaps, risks, or deferred validation records

## Expected Outputs

- validation plan
- validation scenario matrix
- stakeholder or rater profile
- representative user check
- validation success criteria
- adoption evidence record
- approval package inputs

## Decision Rules

- Validation checks the result against stakeholder need, intended use, and
  operating context.
- Verification can inform validation, but it does not replace validation.
- Representative context matters: the rater, stakeholder, user, operator, or
  approved proxy must be identified.
- The relationship of the rater to the work must be visible.
- Acceptance criteria must describe observable success in context.
- Deferred validation is allowed only as a controlled gap with owner, trigger,
  expected evidence, and release impact.
- Failed or partial validation drives change control or scope reduction.

## Validation Evidence Types

- stakeholder review
- representative-user scenario
- operational dry run
- acceptance test with representative actor
- beta or adoption telemetry with target and interpretation rule
- approval package review

## Hold Conditions

Hold validation when:

- implementer self-assessment is the only evidence;
- rater is unnamed;
- scenario is not representative;
- acceptance criteria are vague;
- evidence path is missing;
- deferred validation has no approved gap or trigger.

## Handoffs

| Validation Issue | Next Skill |
|---|---|
| Need unclear | `needs-and-requirements-capture` |
| Requirement mismatch | `requirements-reviewer` |
| Implementation proof missing | `verification-planner` |
| Deferred validation | `risk-gap-change-control` |
| Release decision needed | `technical-review-and-audit-gate` |

## Summary Output Shape

```yaml
skill_name: validation-planner
decision: held
validation_plan:
  plan_id: VAL-PLAN-001
  need_ids: []
  intended_use: ""
  operating_context: ""
  validation_method: stakeholder_review
  success_criteria: []
  owner: ""
stakeholder_or_rater_profile:
  name_or_role: ""
  relationship_to_work: ""
  independence_note: ""
  representative_reason: ""
validation_scenario_matrix:
  - scenario_id: VAL-SCEN-001
    need_id: NEED-001
    scenario: ""
    acceptance_signal: ""
    evidence_path: ""
    status: planned
adoption_evidence_record:
  record_id: VAL-001
  scenario_id: VAL-SCEN-001
  rater_or_source: ""
  result: blocked
  approval_package_inputs: []
  deferred_trigger: null
```

## U5.5 Blocker Mapping

This summary owns blockers where adoption value, representative rating,
traceability-specific value, or stakeholder intended-use evidence is missing,
self-assessed, deferred without control, or tied to the wrong candidate.
