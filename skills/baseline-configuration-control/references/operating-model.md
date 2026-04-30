# Operating Model

## Primary Question

What is the controlled baseline, and did anything change after evidence was
generated?

## Decision Rules

- A baseline is a named, controlled set of files, refs, records, and evidence.
- Evidence is valid only for the tested ref, artifact, configuration, and scope
  it records.
- A final candidate must have one controlling ref for gates, package scope, and
  release evidence.
- Runtime/package-controlled changes after evidence make affected gates stale
  unless impact-reviewed.
- A fork diff is not noise until classified.
- A task, branch, or local workspace state is not a baseline unless recorded as
  controlled authority.
- Configuration changes must link to affected needs, requirements, design,
  implementation, verification, validation, risks, gaps, and release gates.

## Diff Classes

| Class | Meaning | Action |
|---|---|---|
| `no_impact` | Change cannot affect controlled behavior or evidence | Record rationale |
| `impact_reviewed` | Change affects scope but evidence remains acceptable | Link review record |
| `reset_required` | Change invalidates one or more gates | Hold affected gates |
| `blocked` | Change lacks authority or impact analysis | Stop and route |
| `superseded` | Older baseline replaced by approved newer baseline | Link before/after |

## Handoff Rules

| Finding | Next Skill |
|---|---|
| Behavior not in baseline | `systems-engineering-traceability` |
| Requirement changed | `risk-gap-change-control` |
| Evidence stale or missing | `verification-planner` / `validation-planner` |
| Readiness decision needed | `technical-review-and-audit-gate` |
