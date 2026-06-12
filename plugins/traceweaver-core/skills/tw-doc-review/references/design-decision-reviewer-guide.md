# Design Decision Reviewer Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for judging whether a design
decision is justified by approved authority, bounded by its tradeoffs and
risks, and recorded with its alternatives and downstream impacts, so that
implementation convenience or agent preference cannot become hidden design
authority. It is original TraceWeaver guidance and does not by itself promote
a runtime skill, package manifest, or release claim.

Requirement basis: GAP-TW-2026-06-12-007 and
`docs/validation/candidate-baseline-review-design-decision-reviewer-2026-06-12.md`,
addressing framework review finding K5 (trade-study gap) in
`docs/validation/traceweaver-framework-design-review-2026-06-12.md`.

## Core Question

Is this design decision justified by approved authority, tradeoff, risk,
constraint, or exception?

## Use When

Use design decision review when an ADR, design note, implementation approach,
or architecture choice is proposed; when a design choice creates derived
requirements or changes behavior; when alternatives, tradeoffs, constraints,
or downstream impacts need review; or when implementation already contains an
unrecorded design decision.

Do not use it to approve requirements, to accept design changes that silently
alter approved authority, to replace architecture/interface review for
boundary-heavy decisions, or to approve risk acceptance without
risk/gap/change control. The review can judge whether a decision is justified
and trace-linked; it cannot change requirements, accept risk, or approve
implementation scope without the relevant authority records.

## Required Inputs

- proposed decision, context, rationale, alternatives, and constraints
- linked need, requirement, risk, gap, baseline, and architecture/interface
  records
- expected consequences, downstream impacts, V&V implications, and status

## Expected Outputs

- design decision review with stable review and decision IDs
- authority trace (needs, requirements, constraints, risks, approved gaps)
- tradeoff summary (selected option, alternatives considered, rationale,
  consequences)
- risk and constraint links
- downstream impacts (requirements, architecture/interfaces, implementation,
  verification, validation, baseline)
- decision status: `draft`, `candidate`, `approved`,
  `approved_with_exception`, `rejected`, `held`, or `superseded`

## Decision Rules

- A design decision is not a requirement; classify it before judging it.
- A design decision must trace to approved authority or a controlled
  exception.
- Agent preference is not rationale; implementation convenience is not
  authority. "Use SQLite because it is easy" is a finding, not a record.
- Material decisions need alternatives considered and tradeoff rationale. A
  decision is material when it constrains requirements, creates derived
  requirements, changes externally visible behavior, affects verification or
  validation evidence or a baseline, or would be costly to reverse.
- A design decision that changes requirement meaning triggers change control;
  silent meaning change is never accepted.
- Derived requirements remain candidates until reviewed and approved; the
  decision itself approves nothing.
- Downstream impact review covers requirements, architecture and interfaces,
  implementation, verification, validation, and baseline; record a category
  as empty only after checking it.
- Rationale is recorded, not implied: context, selected option, rejected
  alternatives, consequences, and status live in the decision record under a
  stable ID that survives revision and supersession.
- The review ends in an explicit disposition: approve-ready, revise, hold,
  reclassify, or exception-required.

## Checklist

For each design decision confirm: a stable decision ID; stated context; an
approved authority trace; linked constraints; linked risks; alternatives
listed; tradeoff rationale stated; consequences stated; affected requirements
listed; derived requirements captured as candidates; interface/architecture
impacts listed; verification and validation impacts listed; baseline impact
assessed; and an explicit decision status.

## Hold When

Hold the decision when:

- the authority trace is missing;
- the decision changes requirement meaning;
- alternatives are absent for a material decision;
- tradeoff rationale is missing;
- risk or constraint impact is unknown;
- downstream impacts are not assessed;
- approval is inferred from implementation.

A temporary design accepted under an approved risk with a review trigger is a
controlled exception (`approved_with_exception`), not a hold.

## Handoffs

| Design Finding | Next Skill |
|---|---|
| Requirement meaning changed | `risk-gap-change-control` |
| Derived or rewritten requirement | `requirements-reviewer` |
| Interface or architecture concern | `architecture-and-interface-reviewer` |
| Missing trace link | `systems-engineering-traceability` |
| Verification evidence impact | `verification-planner` |
| Validation evidence impact | `validation-planner` |
| Risk acceptance or exception | `risk-gap-change-control` |

## Review Output Shape

```yaml
skill_name: design-decision-reviewer
decision: held
design_decision_review:
  review_id: DD-REV-001
  decision_id: ADR-001
  decision_title: ""
  context: ""
  decision_status: draft
authority_trace:
  {needs: [], requirements: [], constraints: [], risks: [], approved_gaps: []}
tradeoff_summary:
  selected_option: ""
  alternatives_considered: []
  rationale: ""
  consequences: []
risk_and_constraint_links: []
downstream_impacts:
  {requirements: [], architecture_interfaces: [], implementation_refs: [],
   verification: [], validation: [], baseline: []}
exceptions: []
hold_conditions: []
recommended_next_skill: null
```

## Gate

A design decision may guide implementation only when its authority trace,
rationale, alternatives, risks, constraints, and downstream impacts are
visible or intentionally controlled as an approved exception.
