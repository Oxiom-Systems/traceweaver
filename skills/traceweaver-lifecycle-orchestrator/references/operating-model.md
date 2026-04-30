# Operating Model

## Primary Question

Which skill should run next, and what lifecycle state are we in?

## Decision Rules

- Each skill owns one lifecycle question.
- The orchestrator routes; it does not approve.
- Raw intent is not authority.
- Weak requirements must be reviewed before traceability can rely on them.
- Missing trace, missing V&V, stale baseline, or uncontrolled risk creates a
  hold or a reduced-scope route.
- A hold can be cleared only by the skill that owns the blocker or by an
  approved exception record.
- Lifecycle state must include authority state and evidence state.

## Lifecycle States

- `source_capture`
- `requirement_review`
- `trace_planning`
- `architecture_review`
- `design_decision`
- `verification_planning`
- `validation_planning`
- `implementation_ready`
- `evidence_review`
- `baseline_control`
- `gate_review`
- `change_control`

## Skill Routing Map

| Need | Skill |
|---|---|
| What did the stakeholder ask for? | `needs-and-requirements-capture` |
| Is the requirement good enough? | `requirements-reviewer` |
| Does behavior trace to authority/evidence? | `systems-engineering-traceability` |
| How is an exception/change controlled? | `risk-gap-change-control` |
| What is the controlled baseline? | `baseline-configuration-control` |
| Is the next gate ready? | `technical-review-and-audit-gate` |
| How do we prove built right? | `verification-planner` |
| How do we prove right thing? | `validation-planner` |
| Is architecture/interface complete? | `architecture-and-interface-reviewer` |
| Is design decision justified? | `design-decision-reviewer` |
