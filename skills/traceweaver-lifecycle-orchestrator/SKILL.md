---
name: traceweaver-lifecycle-orchestrator
description: Routes work through the TraceWeaver lifecycle skill suite. Use to decide which skill runs next, what state the work is in, and what blocks progression.
---

# TraceWeaver Lifecycle Orchestrator

## Purpose

Coordinate the 11 TraceWeaver Core skills without turning the orchestrator into
a technical approval skill.

## Core Question

Which skill should run next, and what lifecycle state are we in?

## When To Use

- At the start of planning, review, implementation, release, or remediation.
- When work has multiple possible next skills.
- When a hold, gap, stale baseline, or missing evidence blocks progress.
- When routing needs, requirements, architecture, design, V&V, traceability,
  risk, baseline, and gate work.

## When Not To Use

- To approve requirements, risks, designs, baselines, verification, or
  validation.
- To bypass a hold.
- To collapse the skill suite into one combined prompt.
- To infer authority from an agent interpretation.

## Inputs Required

- Current artifact, lifecycle state, requested action, and known authority.
- Existing needs, requirements, trace rows, decisions, risks, gaps, V&V records,
  baseline refs, and gate results.
- Open questions, blockers, assumptions, and desired output.

## Outputs Produced

- `lifecycle_route`
- `current_state`
- `next_skill`
- `required_inputs`
- `blocking_conditions`
- `handoff_record`
- `authority_state`

## Authority Boundary

This skill routes work and records state. It cannot make technical approvals or
convert draft content into authority. It must stop or route when authority,
evidence, or approval is missing.

## Handoff Rules

- Raw stakeholder intent -> `needs-and-requirements-capture`
- Requirement quality -> `requirements-reviewer`
- Trace/evidence chain -> `systems-engineering-traceability`
- Risk/gap/change -> `risk-gap-change-control`
- Baseline/stale evidence -> `baseline-configuration-control`
- Gate readiness -> `technical-review-and-audit-gate`
- Verification plan -> `verification-planner`
- Validation plan -> `validation-planner`
- Architecture/interface -> `architecture-and-interface-reviewer`
- Design rationale -> `design-decision-reviewer`

## Failure / Hold Conditions

- Requested action would bypass a required hold.
- No skill has enough required inputs.
- Authority state is unknown.
- Evidence state is unknown for release or implementation.
- A next skill is selected but blocking inputs are missing.
- User asks for implementation without approved authority or controlled
  exception.

## Examples

- Clean: stakeholder request routes to capture, then requirements review, then
  traceability and V&V planning.
- Weak: user asks to implement from vague idea; orchestrator routes to capture
  and holds implementation.
- Exception: approved gap allows reduced scope and routes baseline/gate review.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify artifact type, lifecycle state, authority state, and requested
   action.
2. Detect blockers: missing source, weak requirement, missing trace, risk/gap,
   stale baseline, missing V&V, or gate failure.
3. Select the narrowest next skill that owns the blocker or next lifecycle step.
4. Record required inputs and handoff context.
5. Hold or reduce scope when authority/evidence is insufficient.
6. Emit lifecycle route using the output schema.

## Gate

The orchestrator may route, hold, or reduce. It must not approve technical
content or route around a failed or missing authority/evidence gate.
