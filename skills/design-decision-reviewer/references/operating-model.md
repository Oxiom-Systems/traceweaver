# Operating Model

## Primary Question

Is this design decision justified by approved authority, tradeoff, risk,
constraint, or exception?

## Decision Rules

- A design decision is not a requirement.
- A design decision must trace to approved authority or a controlled exception.
- Agent preference is not rationale.
- Implementation convenience is not authority.
- Material decisions need alternatives and tradeoff reasoning.
- A design decision that changes requirement meaning triggers change control.
- Derived requirements remain candidate until reviewed and approved.
- Downstream impacts must include implementation, V&V, risk, and baseline
  effects where relevant.

## Decision Statuses

- `draft`
- `candidate`
- `approved`
- `approved_with_exception`
- `rejected`
- `held`
- `superseded`

## Handoff Rules

| Design Finding | Next Skill |
|---|---|
| Requirement changed | `risk-gap-change-control` |
| Derived requirement | `requirements-reviewer` |
| Interface concern | `architecture-and-interface-reviewer` |
| Missing trace | `systems-engineering-traceability` |
| Evidence impact | `verification-planner` / `validation-planner` |
