# Architecture And Interface Reviewer Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for judging whether the
architecture and interface story of a change is consistent with approved
needs, requirements, constraints, and operational context. It is original
TraceWeaver guidance and does not by itself promote a runtime skill,
package manifest, or release claim.

Requirement basis: GAP-TW-2026-06-12-007 and
`docs/validation/candidate-baseline-review-architecture-and-interface-reviewer-2026-06-12.md`.

## Core Question

Is the architecture and interface story consistent with the approved needs,
requirements, constraints, and operational context?

## Use When

Use architecture and interface review when a change crosses module, system,
runtime, package, API, or human workflow boundaries; when architecture exists
only in code or scattered notes; when external dependencies, data contracts,
or integration assumptions affect behavior; or before approving design
decisions that create derived requirements.

Do not use it to approve requirement wording, to select an implementation
because it is convenient, to accept undocumented external dependencies, or to
replace design-decision review.

## Required Inputs

- needs, requirements, constraints, risks, and operating context
- architecture notes, diagrams, code references, runtime and package
  boundaries, interface contracts, and the external dependency list
- integration assumptions, data flows, actor/system interactions, and V&V
  concerns

## Expected Outputs

- architecture review report
- interface inventory
- external dependency map
- interface gap report
- architecture-to-requirement trace
- integration risk record

## Decision Rules

- Architecture is not authority unless it is linked to an approved need,
  requirement, constraint, risk control, or design decision.
- Interface boundaries include human, software, runtime, package, data, tool,
  and external-system boundaries.
- Every external dependency needs an owner, purpose, contract, failure mode,
  and trace.
- Derived requirements must be captured as candidates and reviewed before
  implementation.
- Interface gaps become risks, gaps, or design-decision work, never
  assumptions.
- Architecture views are explanatory; trace records control authority.
- Operational context and integration assumptions must be visible before
  verification or validation is planned.
- This review can identify architecture and interface gaps, derived
  requirement candidates, and integration risks; it cannot approve new
  requirements or design decisions by itself.
- An interface or architecture dependency cannot become invisible
  implementation detail when it affects approved behavior, integration, V&V,
  security, operations, or release scope.

## Review Subjects

- runtime and package boundaries
- APIs and data contracts
- external tools or services
- human handoffs
- file and metadata contracts
- agent routing and skill discovery paths
- failure modes and degraded behavior

## Checklist

- [ ] Architecture scope is stated.
- [ ] Operating context is linked.
- [ ] Actors and external systems are listed.
- [ ] Interface boundaries are named.
- [ ] Inputs, outputs, data contracts, and ownership are recorded.
- [ ] External dependencies are mapped.
- [ ] Failure modes and degraded behavior are noted.
- [ ] Architecture elements trace to approved authority.
- [ ] Derived requirements are captured as candidates.
- [ ] Integration risks are identified.
- [ ] V&V implications are routed.
- [ ] Missing views or contracts become gaps, not assumptions.

## Hold When

Hold the architecture/interface review when:

- architecture is inferred only from implementation with no authority trace;
- the interface boundary cannot be named with an owner;
- an external dependency is undocumented;
- a data contract, ownership, or failure mode is missing;
- a derived requirement was implemented silently;
- an integration risk has no owner, mitigation, or approval path.

## Handoffs

| Architecture Finding | Next Skill |
|---|---|
| Derived requirement candidate | `requirements-reviewer` |
| Design choice | `design-decision-reviewer` |
| Missing authority trace | `systems-engineering-traceability` |
| Integration risk or approved exception | `risk-gap-change-control` |
| Proof needed | `verification-planner` / `validation-planner` |

## Summary Output Shape

```yaml
skill_name: architecture-and-interface-reviewer
decision: held
architecture_review_report:
  review_id: ARCH-REV-001
  scope: ""
  operating_context: ""
  decision: hold
interface_inventory:
  - interface_id: IFACE-001
    name: ""
    boundary_type: runtime
    owner: ""
    inputs: []
    outputs: []
    contract_ref: ""
    authority_trace: []
    failure_modes: []
external_dependency_map:
  - dependency_id: DEP-001
    name: ""
    purpose: ""
    owner: ""
    risk_links: []
interface_gap_report:
  gaps: []
  derived_requirement_candidates: []
  integration_risk_records: []
architecture_to_requirement_trace:
  - architecture_item: ""
    requirement_ids: []
    design_decision_ids: []
```
