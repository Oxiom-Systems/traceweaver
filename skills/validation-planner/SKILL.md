---
name: validation-planner
description: Plans how TraceWeaver will prove the result satisfies stakeholder need and intended use. Use for validation scenarios, representative users, adoption evidence, rater independence, and acceptance records.
---

# Validation Planner

## Purpose

Define evidence that the delivered behavior solves the right stakeholder problem
in the intended context.

## Core Question

How will we prove we built the right thing?

## When To Use

- When a need, feature, or release needs stakeholder acceptance evidence.
- When validation cannot be represented by tests alone.
- When representative user, rater, operator, customer, or approval actor must be
  named.
- When validation is deferred and needs owner, trigger, and closure criteria.

## When Not To Use

- To verify implementation against a requirement.
- To let implementer self-assessment stand as independent acceptance.
- To approve vague stakeholder needs.
- To hide unavailable validation as ordinary follow-up.

## Inputs Required

- Stakeholder need, intended use, operating context, and success signal.
- Candidate or approved requirements and verification state.
- Representative user/rater/approval actor profile.
- Validation scenario, acceptance criteria, evidence path, and constraints.
- Existing approved gaps, risks, or deferred validation records.

## Outputs Produced

- `validation_plan`
- `validation_scenario_matrix`
- `stakeholder_or_rater_profile`
- `representative_user_check`
- `validation_success_criteria`
- `adoption_evidence_record`
- `approval_package_inputs`

## Authority Boundary

This skill plans validation evidence. It cannot approve requirements, replace a
stakeholder decision, or treat passing tests as validation unless the test is
explicitly tied to stakeholder acceptance criteria and representative context.

## Handoff Rules

- Need ambiguity goes to `needs-and-requirements-capture`.
- Requirement quality gaps go to `requirements-reviewer`.
- Verification gaps go to `verification-planner`.
- Deferred or partial validation goes to `risk-gap-change-control`.
- Gate decision goes to `technical-review-and-audit-gate`.

## Failure / Hold Conditions

- Rater, stakeholder, or representative profile is missing.
- Implementer self-assessment is the only validation evidence.
- Scenario does not reflect intended use or operating context.
- Acceptance signal is vague.
- Validation status is claimed but evidence path is missing.
- Deferred validation lacks owner, trigger, and approval.

## Examples

- Clean: named rater, role, relationship to work, scenario, acceptance criteria,
  result record, and approval package inputs.
- Weak: "users will like it" with no representative, scenario, or evidence.
- Exception: validation deferred until beta telemetry, with approved gap and
  release hold condition.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify stakeholder need, intended use, and operating context.
2. Define validation scenario and acceptance signal.
3. Name stakeholder, rater, or representative and record relationship to work.
4. Define evidence collection method and approval package inputs.
5. Separate verification evidence from validation evidence.
6. Emit validation plan and scenario matrix.

## Gate

Validation cannot pass on implementer self-assessment alone. The rater or
representative must be named, their role and relationship to the work recorded,
and the scenario must connect to stakeholder need or intended use.
