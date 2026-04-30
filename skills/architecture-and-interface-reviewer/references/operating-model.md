# Operating Model

## Primary Question

Is the architecture/interface story consistent with approved needs,
requirements, constraints, and operational context?

## Decision Rules

- Architecture is not authority unless linked to approved need, requirement,
  constraint, risk control, or design decision.
- Interfaces include human, software, runtime, package, data, tool, and external
  system boundaries.
- External dependencies need owner, purpose, contract, failure mode, and trace.
- Derived requirements must be captured and reviewed before implementation.
- Interface gaps become risks, gaps, or design-decision work.
- Architecture views are explanatory; trace records control authority.
- Operational context and integration assumptions must be visible before V&V is
  planned.

## Review Subjects

- runtime and package boundaries
- APIs and data contracts
- external tools or services
- human handoffs
- file and metadata contracts
- agent routing and skill discovery paths
- failure modes and degraded behavior

## Handoff Rules

| Architecture Finding | Next Skill |
|---|---|
| Derived requirement | `requirements-reviewer` |
| Design choice | `design-decision-reviewer` |
| Missing trace | `systems-engineering-traceability` |
| Integration risk | `risk-gap-change-control` |
| Proof needed | `verification-planner` / `validation-planner` |
