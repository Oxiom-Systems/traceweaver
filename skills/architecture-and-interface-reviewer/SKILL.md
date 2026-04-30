---
name: architecture-and-interface-reviewer
description: Reviews architecture context, interfaces, external dependencies, integration assumptions, and operational interactions against approved needs, requirements, constraints, and risks.
---

# Architecture And Interface Reviewer

## Purpose

Expose whether the architecture and interface story is complete enough to
support requirements, design decisions, integration, and V&V planning.

## Core Question

Is the architecture/interface story consistent with the approved needs,
requirements, constraints, and operational context?

## When To Use

- When a change crosses module, system, runtime, package, API, or human workflow
  boundaries.
- When architecture exists only in code or scattered notes.
- When external dependencies, data contracts, or integration assumptions affect
  behavior.
- Before approving design decisions that create derived requirements.

## When Not To Use

- To approve requirement wording.
- To select an implementation because it is convenient.
- To accept undocumented external dependencies.
- To replace ADR or design-decision review.

## Inputs Required

- Needs, requirements, constraints, risks, and operating context.
- Architecture notes, diagrams, code references, runtime/package boundaries,
  interface contracts, and external dependency list.
- Integration assumptions, data flows, actor/system interactions, and V&V
  concerns.

## Outputs Produced

- `architecture_review_report`
- `interface_inventory`
- `external_dependency_map`
- `interface_gap_report`
- `architecture_to_requirement_trace`
- `integration_risk_record`

## Authority Boundary

This skill can identify architecture and interface gaps, derived requirement
candidates, and integration risks. It cannot approve new requirements or design
decisions by itself.

## Handoff Rules

- Derived requirement candidates go to `requirements-reviewer`.
- Design choices go to `design-decision-reviewer`.
- Missing authority goes to `systems-engineering-traceability`.
- Integration risks or approved exceptions go to `risk-gap-change-control`.
- Verification/validation needs go to `verification-planner` or
  `validation-planner`.

## Failure / Hold Conditions

- Architecture is inferred only from implementation with no authority trace.
- Interface boundary is unclear.
- External dependency is undocumented.
- Data contract, ownership, or failure mode is missing.
- Derived requirement is silently implemented.
- Integration risk has no owner or mitigation path.

## Examples

- Clean: package loader interface has owner, input/output contract, failure
  handling, requirement trace, and verification method.
- Weak: "the runtime will find it somehow" with no interface contract.
- Exception: temporary manual sync is approved as a bounded integration gap.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify architecture scope and interface boundaries.
2. Map actors, systems, external dependencies, data flows, and runtime/package
   interactions.
3. Trace architecture elements to approved needs, requirements, constraints, or
   risks.
4. Identify derived requirements, gaps, integration risks, and V&V implications.
5. Route decisions, requirements, and exceptions to the right skill.
6. Emit architecture/interface review output.

## Gate

An interface or architecture dependency cannot become invisible implementation
detail when it affects approved behavior, integration, V&V, security, operations,
or release scope.
