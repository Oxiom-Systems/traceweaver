# Operating Model

## Primary Question

How will we prove we built it right?

## Decision Rules

- Verification checks implementation or artifact behavior against requirements.
- Verification planning starts before implementation when requirements are
  important enough to guide build.
- Verification methods are inspection, analysis, demonstration, or test.
- A test command is not enough; evidence needs requirement ID, method, setup,
  tested ref, expected result, actual result, outcome, and record path.
- A local harness can support evidence only when its equivalence to the target
  runtime is stated.
- Failed, partial, blocked, or deferred verification creates a record and a
  handoff, not silence.

## TraceWeaver Verification Targets

- target runtime discovery
- skill loading
- metadata parsing
- reference loading
- routing behavior
- package inclusion and file layout
- harness equivalence
- documented command/procedure result

## Handoff Rules

| Verification Issue | Next Skill |
|---|---|
| Requirement unverifiable | `requirements-reviewer` |
| Missing authority | `systems-engineering-traceability` |
| Deferred or failed result | `risk-gap-change-control` |
| Candidate ref mismatch | `baseline-configuration-control` |
| Stakeholder acceptance needed | `validation-planner` |
