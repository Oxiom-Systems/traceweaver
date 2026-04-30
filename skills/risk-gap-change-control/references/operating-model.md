# Operating Model

## Primary Question

How do we handle approved gaps, accepted risks, weak requirements, and
requirement changes?

## Decision Rules

- A gap is a known missing or weak trace, requirement, evidence, validation, or
  authority item.
- A risk is an uncertain future harm with likelihood/impact or exposure.
- Traceability debt is incomplete engineering record-keeping that must be
  resolved, accepted, or retired.
- A weak requirement exception does not make the requirement good. It records
  permission to proceed under controlled risk.
- A requirement change must identify affected needs, downstream requirements,
  design decisions, implementation, verification, validation, risks, and
  baseline.
- Deferred verification or validation requires owner, trigger, expected
  evidence, and accepted risk.
- Every exception needs review condition and expiry or closure trigger.
- Unowned exceptions are not approved.

## Exception Types

- approved gap
- accepted risk
- weak requirement exception
- deferred verification
- deferred validation
- requirement change
- traceability debt
- baseline delta

## Outcomes

| Outcome | Meaning |
|---|---|
| `accept` | Controlled exception approved with owner and review condition |
| `revise` | Requirement, trace, or evidence needs correction |
| `defer` | Allowed later with trigger, owner, and expected evidence |
| `block` | Too risky or uncontrolled |
| `escalate` | Human decision required |
| `close` | Debt/gap resolved with evidence |
