# Technical Review And Audit Gate Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for deciding whether work is ready
to pass a lifecycle gate. It is original TraceWeaver guidance for U3 summary
promotion and does not promote a public skill folder, runtime package, package
manifest, or release claim.

Requirement basis: R14 in
`docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`.

## Core Question

Is this work ready to proceed through the next gate?

## Use When

Use the gate before implementation, merge, release, runtime promotion, or
baseline update. Also use it when multiple review lenses disagree, when
evidence is incomplete, or when open risks, gaps, and stale evidence need a
proceed, hold, reduce, or reject decision.

Do not use it to create missing authority, write requirements, plan tests,
approve exceptions without risk/gap/change control, or treat no response as
approval.

## Required Inputs

- gate name, lifecycle stage, review mode, and entry/exit criteria
- baseline or candidate ref
- traceability, requirement quality, V&V, risk/gap/change, and baseline records
- open actions, owners, blockers, and decision authority

## Expected Outputs

- gate readiness report
- entry criteria status
- exit criteria status
- action item status
- evidence index
- risk readiness status
- decision: `proceed`, `hold`, `reduce`, or `reject`

## Decision Rules

- Entry criteria decide whether review can start.
- Exit criteria decide whether work can proceed.
- Missing evidence is a hold unless an approved exception scopes it out.
- Open actions must be classified as blocker, accepted exception, follow-up, or
  not relevant.
- Review mode must be explicit: `lite`, `normal`, or `audit`.
- A clean result from one lens does not clear other required lenses.
- No response is not approval.

## Gate Decisions

| Decision | Meaning |
|---|---|
| `proceed` | Criteria met and evidence supports next step |
| `hold` | Work cannot proceed until blockers or missing evidence are resolved |
| `reduce` | A smaller approved scope may proceed |
| `reject` | Candidate is not acceptable for this gate |

## Hold Conditions

Hold the gate when:

- entry criteria are not met;
- candidate baseline is stale or inconsistent;
- required evidence is missing;
- a required review lens is missing or not clean;
- an open blocker has no owner or disposition;
- approval is inferred from silence or no response.

## Handoffs

| Gate Issue | Next Skill |
|---|---|
| Candidate ref inconsistent | `baseline-configuration-control` |
| Missing trace authority | `systems-engineering-traceability` |
| Requirement not good enough | `requirements-reviewer` |
| Open risk, gap, or waiver | `risk-gap-change-control` |
| Missing proof plan | `verification-planner` / `validation-planner` |

## Summary Output Shape

```yaml
skill_name: technical-review-and-audit-gate
decision: held
gate_readiness_report:
  gate_id: GATE-001
  gate_name: ""
  lifecycle_stage: ""
  review_mode: lite
  candidate_ref: ""
  decision_authority: ""
entry_criteria_status:
  - criterion: ""
    status: held
    evidence_ref: null
exit_criteria_status:
  - criterion: ""
    status: held
    evidence_ref: null
action_item_status:
  blockers: []
  accepted_exceptions: []
  follow_ups: []
  not_relevant: []
evidence_index:
  baseline_records: []
  trace_records: []
  verification_records: []
  validation_records: []
  review_records: []
```

## U5.5 Blocker Mapping

This summary owns blockers where a candidate tries to continue despite missing
entry criteria, unresolved review findings, stale evidence, unsupported
no-response assumptions, or incomplete gate evidence.
