---
name: systems-engineering-traceability
description: Maintains trace links from approved authority to behavior, design, implementation, verification, and validation evidence. Use when asking whether behavior traces to approved authority and V&V evidence.
---

# Systems Engineering Traceability

## Purpose

Maintain the visible chain from stakeholder/source authority to requirements,
design, implementation, verification, validation, risks, gaps, and baseline
records.

## Core Question

Does this behavior trace to approved authority and V&V evidence?

## When To Use

- When reviewing behavior, code, tasks, documents, plans, or release evidence.
- When checking for orphan behavior, dark code, weak traces, or missing V&V.
- Before claiming engineering completeness or release readiness.

## When Not To Use

- To approve weak requirements.
- To treat tests alone as authority.
- To accept implementation as proof that the requirement is correct.

## Inputs Required

- Behavior or artifact under review.
- Need, requirement, design decision, task, implementation, V&V, risk, gap, and
  baseline records when available.

## Outputs Produced

- `trace_matrix`
- `orphan_behavior_report`
- `dark_code_report`
- `authority_gap_report`
- `verification_trace_status`
- `validation_trace_status`
- `approved_gap_or_risk_links`

## Authority Boundary

This skill can confirm, reject, or hold trace completeness. It cannot invent
authority or approve missing evidence.

## Handoff Rules

- Weak requirements go to `requirements-reviewer`.
- Missing source goes to `needs-and-requirements-capture`.
- Approved exceptions go to `risk-gap-change-control`.
- Stale baseline goes to `baseline-configuration-control`.
- Missing V&V plan goes to `verification-planner` or `validation-planner`.

## Failure / Hold Conditions

- Behavior traces only to a task, issue, or agent interpretation.
- Bidirectional links are missing.
- Verification or validation evidence is missing, stale, or not tied to a ref.
- Gap or risk link is not approved and bounded.

## Examples

- Clean: behavior traces to approved requirement, ADR, implementation ref,
  verification result, validation scenario, owner, and baseline.
- Weak: feature traces only to `TASK-004`.

## What This Skill Owns

- No-orphan gate.
- Traceability matrix rules.
- Valid authority checks.
- Trace links between need, requirement, decision, task, implementation,
  verification, and validation.
- Dark-code detection.

## What This Skill Does Not Own

- Requirement quality review.
- Capturing raw stakeholder needs.
- Running tests.
- Conducting validation.
- Approving gaps or risks by itself.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify the behavior or artifact under review.
2. Find its approved authority.
3. Confirm authority is valid and quality-reviewed or explicitly accepted.
4. Link design, implementation, verification, and validation evidence.
5. Record gaps, risks, debt, or dark-code candidates.
6. Emit traceability matrix rows or findings.

## Gate

Meaningful behavior must not proceed unless it traces to approved requirement,
approved design decision, first-class approved risk control, approved gap, or a
task that closes directly to one of those authorities.
