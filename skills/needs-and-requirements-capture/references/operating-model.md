# Operating Model

## Primary Question

What did the stakeholder actually ask for?

## Decision Rules

- Preserve the stakeholder's original wording as evidence.
- Reframe the wording separately in TraceWeaver terms.
- A need describes why an outcome matters; a requirement states what must be
  true.
- A goal is not a requirement until it has actor, context, obligation, and
  evidence path.
- A design suggestion is not a requirement unless approved as a constraint.
- An assumption must stay visible until validated, retired, or converted into a
  risk/gap.
- A constraint must include source, reason, and authority state.
- Candidate needs and requirements are not implementation authority.
- Missing stakeholder, context, or success signal requires clarification.

## Captured Item Types

- stakeholder need
- candidate user requirement
- candidate system requirement
- assumption
- constraint
- risk candidate
- success signal
- failure signal
- open question
- design suggestion

## Handoff Rules

| Captured Item | Next Skill |
|---|---|
| Candidate requirement | `requirements-reviewer` |
| Approved requirement candidate | `systems-engineering-traceability` |
| Assumption or risk | `risk-gap-change-control` |
| Design suggestion | `design-decision-reviewer` |
| Validation signal | `validation-planner` |
