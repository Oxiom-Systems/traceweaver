# Verification Planner Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for planning objective proof that a
built artifact satisfies approved requirements. It is original TraceWeaver
guidance for U3 summary promotion and does not promote a public skill folder,
runtime package, package manifest, or release claim.

Requirement basis: R12 in
`docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`.

## Core Question

How will we prove we built it right?

## Use When

Use verification planning before meaningful implementation, when requirements
lack methods or success criteria, when runtime discovery must be proven, or
when existing evidence lacks tested ref, command/procedure, outcome, or result
path.

Do not use it to validate stakeholder acceptance, approve requirements, waive
failed evidence, or treat a local harness as runtime evidence without an
equivalence argument.

## Required Inputs

- approved or candidate requirements with IDs and authority status
- baseline or candidate ref
- system behavior, runtime/package context, and risk level
- existing test, inspection, analysis, or demonstration evidence
- known constraints, assumptions, gaps, and verification environment

## Expected Outputs

- verification plan
- verification cross-reference matrix
- success criteria
- method: `inspection`, `analysis`, `demonstration`, or `test`
- target environment
- execution record template
- evidence required

## Decision Rules

- Verification checks implementation or artifact behavior against requirements.
- Verification planning starts before implementation when requirements are
  important enough to guide build.
- A test command is not enough; evidence needs requirement ID, method, setup,
  tested ref, expected result, actual result, outcome, and record path.
- A local harness can support evidence only when its equivalence to the target
  runtime is stated.
- Failed, partial, blocked, or deferred verification creates a record and a
  handoff, not silence.

## TraceWeaver Verification Targets

- target runtime discovery
- skill loading
- metadata parsing
- reference loading
- routing behavior
- package inclusion and file layout
- harness equivalence
- documented command/procedure result

## Hold Conditions

Hold verification when:

- requirement authority state is missing or unacceptable for planning;
- success criteria are vague;
- method does not prove the requirement;
- target runtime differs from harness and no equivalence note exists;
- evidence cannot be tied to baseline or candidate ref;
- verification is being used as validation.

## Handoffs

| Verification Issue | Next Skill |
|---|---|
| Requirement unverifiable | `requirements-reviewer` |
| Missing authority | `systems-engineering-traceability` |
| Deferred or failed result | `risk-gap-change-control` |
| Candidate ref mismatch | `baseline-configuration-control` |
| Stakeholder acceptance needed | `validation-planner` |

## Summary Output Shape

```yaml
skill_name: verification-planner
decision: held
verification_plan:
  plan_id: VER-PLAN-001
  requirement_ids: []
  verification_scope: ""
  method: test
  success_criteria: []
  target_environment: ""
  tested_ref_required: true
  owner: ""
verification_cross_reference_matrix:
  - requirement_id: SREQ-001
    method: test
    procedure_ref: ATP-001
    expected_result: ""
    evidence_required: []
    target_environment: ""
    harness_equivalence: ""
execution_record_template:
  execution_id: VER-001
  procedure_or_command: ""
  tested_ref: ""
  actual_result: ""
  outcome: blocked
  evidence_path: ""
```

## U5.5 Blocker Mapping

This summary owns blockers where runtime discovery, metadata parsing, skill
loading, reference loading, routing behavior, or package layout lacks objective
evidence against the target candidate.
