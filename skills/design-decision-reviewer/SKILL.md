---
name: design-decision-reviewer
description: Reviews whether a design decision is justified by approved authority, tradeoff, constraint, risk, or exception. Use for ADRs, design rationale, alternatives, and downstream impacts.
---

# Design Decision Reviewer

## Purpose

Prevent implementation convenience or agent preference from becoming hidden
design authority.

## Core Question

Is this design decision justified by approved authority, tradeoff, risk,
constraint, or exception?

## When To Use

- When an ADR, design note, implementation approach, or architecture choice is
  proposed.
- When a design choice creates derived requirements or changes behavior.
- When alternatives, tradeoffs, constraints, or downstream impacts need review.
- When implementation already contains an unrecorded design decision.

## When Not To Use

- To approve requirements.
- To accept design changes that alter approved authority silently.
- To replace architecture/interface review for boundary-heavy decisions.
- To approve risk acceptance without risk/gap/change control.

## Inputs Required

- Proposed decision, context, rationale, alternatives, and constraints.
- Linked need, requirement, risk, gap, baseline, and architecture/interface
  records.
- Expected consequences, downstream impacts, V&V implications, and status.

## Outputs Produced

- `design_decision_review`
- `authority_trace`
- `tradeoff_summary`
- `alternatives_considered`
- `risk_and_constraint_links`
- `downstream_impacts`
- `decision_status`

## Authority Boundary

This skill can judge whether a design decision is justified and trace-linked. It
cannot change requirements, accept risk, or approve implementation scope without
the relevant authority records.

## Handoff Rules

- Requirement changes go to `requirements-reviewer` and
  `risk-gap-change-control`.
- Interface or architecture gaps go to `architecture-and-interface-reviewer`.
- Missing trace links go to `systems-engineering-traceability`.
- Risk or exception decisions go to `risk-gap-change-control`.
- V&V impacts go to `verification-planner` or `validation-planner`.

## Failure / Hold Conditions

- Decision has no authority trace.
- Alternatives were not considered for a material decision.
- Tradeoff rationale is missing.
- Design changes requirement meaning silently.
- Risk or constraint links are absent.
- Downstream impacts are unknown.

## Examples

- Clean: ADR links to requirement, rejected alternatives, tradeoff, risk, V&V
  impact, and baseline.
- Weak: "use SQLite because it is easy" with no authority or alternatives.
- Exception: temporary design accepted under approved risk with review trigger.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify the decision and affected behavior.
2. Link approved authority, constraints, risks, and architecture/interface
   context.
3. Review rationale, alternatives, tradeoffs, consequences, and status.
4. Identify derived requirements, changed requirements, and V&V impacts.
5. Decide approve-ready, revise, hold, reclassify, or exception-required.
6. Emit design decision review output.

## Gate

A design decision may guide implementation only when its authority trace,
rationale, alternatives, risks, constraints, and downstream impacts are visible
or intentionally controlled as an approved exception.
