---
name: verification-planner
description: Plans how TraceWeaver will prove implementation satisfies approved requirements. Use for verification methods, success criteria, procedures, execution records, target runtime discovery, and harness equivalence.
---

# Verification Planner

## Purpose

Define objective proof that the built artifact satisfies approved requirements
under the intended configuration.

## Core Question

How will we prove we built it right?

## When To Use

- During planning before meaningful implementation.
- When a requirement lacks verification method, success criteria, or procedure.
- When target runtime discovery, metadata parsing, loading, routing, or package
  behavior must be proven.
- When existing evidence lacks tested ref, command/procedure, outcome, or
  result path.

## When Not To Use

- To validate stakeholder acceptance.
- To approve requirements.
- To waive missing verification evidence.
- To treat local harness behavior as runtime evidence without equivalence.

## Inputs Required

- Approved or candidate requirements with IDs and authority status.
- Baseline or candidate ref.
- System behavior, runtime/package context, and risk level.
- Existing test, inspection, analysis, or demonstration evidence.
- Known constraints, assumptions, gaps, and verification environment.

## Outputs Produced

- `verification_plan`
- `verification_cross_reference_matrix`
- `success_criteria`
- `method: inspection | analysis | demonstration | test`
- `target_environment`
- `execution_record_template`
- `evidence_required`

## Authority Boundary

This skill plans and assesses verification evidence. It does not approve the
requirement, execute validation, or accept failed/partial results without a
controlled risk/gap/change record.

## Handoff Rules

- Requirement quality issues go to `requirements-reviewer`.
- Missing authority links go to `systems-engineering-traceability`.
- Deferred or failed verification goes to `risk-gap-change-control`.
- Stale or mismatched candidate refs go to `baseline-configuration-control`.
- Stakeholder acceptance proof goes to `validation-planner`.

## Failure / Hold Conditions

- Requirement is not approved or explicitly accepted for verification planning.
- No objective success criteria exist.
- Verification method is missing or inappropriate.
- Procedure lacks setup, command/steps, expected result, or evidence path.
- Evidence does not identify tested ref/configuration.
- Harness evidence is claimed as runtime evidence without equivalence argument.

## Examples

- Clean: runtime skill loading has test procedure, target runtime, expected
  metadata parse result, command, tested ref, and result path.
- Weak: "run tests" with no requirement IDs, expected results, or tested ref.
- Exception: verification deferred because target runtime is unavailable, with
  owner, trigger, and approved gap.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify requirements and authority state.
2. Select verification method for each requirement.
3. Define success criteria and expected result.
4. Define environment, setup, command/procedure, data, and evidence path.
5. Link target ref, package/runtime context, and equivalence assumptions.
6. Emit verification plan and execution record template.

## Gate

A requirement is not verification-ready until a reviewer can see what will be
checked, by which method, in which environment, against which ref, with what
pass/fail criteria, and where the result will be recorded.
