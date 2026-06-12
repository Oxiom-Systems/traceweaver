---
name: verification-planner
description: Plans objective proof that built behavior satisfies approved requirements, covering verification method selection, success criteria, procedures, execution records, target runtime discovery, and harness equivalence. Use when planning how implementation will be proven before build, when a requirement lacks a verification method or pass/fail criteria, when runtime discovery, loading, routing, or package behavior must be proven, or when existing evidence lacks tested ref, command/procedure, outcome, or result path.
---

<!-- TRACEWEAVER: file-role=distilled-verification-planning-knowledge-skill; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Verification Planner

## Overview

Define objective proof that the built artifact satisfies approved requirements
under the intended configuration. This skill does not summarize standards or
source documents; it applies distilled TraceWeaver rules to verification
planning before implementation and to verification evidence assessment after
execution.

Core question:

```text
How will we prove we built it right?
```

If proof cannot be planned - no method, no objective success criteria, no
target environment, no tested ref, no evidence path - say so, hold the plan,
and route the gap instead of letting an unverifiable requirement guide build.

## Reference Loading

Always load `references/verification-planning-operating-model.md`,
`references/verification-planning-checklist.md`, and
`references/verification-plan-output-schema.md` for substantive verification
planning.

- Load `tests/verification-planning-examples.md` when calibrating plan quality,
  classifying weak evidence, or producing rewrite guidance.
- Load `references/source-basis.md` only when the user asks where the rules
  came from or when updating the distilled knowledge base.

Do not reproduce licensed source text, source tables, source diagrams, or long
quoted passages. Public output must use original TraceWeaver wording.

## Process

### 1. Identify Requirements And Authority State

List the requirements in scope with their stable IDs, authority status, and
parent/source trace. Verification plans bind to requirement IDs, not to vague
feature names.

- If a requirement lacks a stable ID or authority state, do not invent one;
  route to `requirements-reviewer`.
- If the requirement is candidate rather than approved, planning may proceed,
  but the plan must record the candidate status so evidence is not overclaimed.
- Verification planning starts before implementation whenever the work is
  meaningful behavior under TraceWeaver authority controls.

### 2. Select The Verification Method

For each requirement choose exactly one primary method:

- `inspection`: review of a static artifact, file layout, configuration, or
  document content
- `analysis`: reasoned proof, calculation, model, query, or static check
- `demonstration`: observed behavior without full instrumentation
- `test`: controlled procedure executed against the artifact with a compared
  result

The method must be able to prove the requirement. A demonstration cannot prove
a threshold; an inspection cannot prove runtime behavior. When the method does
not match the requirement, hold and revise.

### 3. Define Success Criteria And Expected Result

State what pass looks like before execution:

- an objective pass/fail condition, threshold, or inspectable artifact
- the expected result written down ahead of the run
- a single requirement per criterion where practical, so failures localize

Vague criteria ("works correctly", "loads fine") are a hold condition.

### 4. Define Environment, Setup, Procedure, And Evidence Path

A plan a reviewer cannot rerun is not a plan. Define:

- target environment and any setup or fixture steps
- the command, script, or procedure to execute
- input data or scope where it changes the result
- where the result record and artifacts will live (evidence path)
- the owner or responsible actor

### 5. Link Target Ref, Runtime Context, And Equivalence

Evidence must identify what was tested:

- the baseline or candidate ref (commit, tag, package version) the run targets
- the runtime or package context the requirement cares about
- harness equivalence stated whenever the execution environment differs from
  the target runtime - a local harness can support evidence only when its
  equivalence to the target runtime is stated

TraceWeaver-specific verification targets include target runtime discovery,
skill loading, metadata parsing, reference loading, routing behavior, package
inclusion and file layout, harness equivalence, and documented
command/procedure results.

### 6. Emit The Plan And Execution Record Template

Produce the `verification_plan`, `verification_cross_reference_matrix`,
and `execution_record_template` using
`references/verification-plan-output-schema.md`. Every execution record needs
requirement ID, method, setup, tested ref, expected result, actual result,
outcome, and record path - a test command alone is not evidence.

Failed, partial, blocked, or deferred verification creates a record and a
handoff, not silence.

## Authority Boundary

This skill plans and assesses verification evidence. It does not:

- approve requirements or grant implementation authority
- execute validation or speak for stakeholder acceptance
- waive missing verification evidence
- accept failed or partial results without a controlled risk/gap/change record
- treat local harness behavior as runtime evidence without an equivalence
  argument

## Handoff Rules

| Verification Issue | Next Skill |
|---|---|
| Requirement unverifiable or quality-weak | `requirements-reviewer` |
| Missing authority or trace link | `systems-engineering-traceability` |
| Deferred or failed result | `risk-gap-change-control` |
| Candidate ref mismatch or stale baseline | `baseline-configuration-control` |
| Stakeholder acceptance needed | `validation-planner` |
| Evidence package needed for a milestone or audit gate | `technical-review-and-audit-gate` |

## Integration With TraceWeaver

`tw-plan` uses this skill when planning the verification method, evidence, and
pass/fail criteria for planned work. `tw-test-browser` and `tw-test-xcode` use
it so their runs are planned as verification evidence with method and
pass/fail criteria, not ad hoc tests.

Verification methods, procedure refs, and evidence paths planned here feed the
verification columns of `traceability-matrix.md`, so every requirement row can
show how it will be proven and where the proof lives.

Keep verification separate from validation:

- Verification: did we build it right? (this skill)
- Validation: did we build the right thing? (`validation-planner`)

A passing verification run must not be reported as validation, acceptance,
release readiness, or publication readiness.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "The tests pass, so it's verified." | A green run without requirement ID, tested ref, expected result, and evidence path is activity, not evidence. |
| "We'll figure out how to test it later." | If proof cannot be planned now, the requirement is not ready to guide build; hold or route to `requirements-reviewer`. |
| "It worked on my machine." | A local harness supports evidence only when its equivalence to the target runtime is stated. |
| "The demo showed it works." | A demonstration without a planned acceptance condition and recorded result is exploration, not verification. |
| "The failure is minor, skip the record." | Failed, partial, blocked, or deferred outcomes create a record and a handoff, not silence. |
| "Verification covers acceptance too." | Verification proves the build against requirements; stakeholder acceptance is validation and belongs to `validation-planner`. |
| "Any test method will do." | The method must be able to prove the requirement; an inspection cannot prove runtime behavior. |

## Red Flags

- "Run tests" with no requirement IDs, expected results, or tested ref
- Success criteria like "works", "stable", "loads fine", or "no errors"
  without an objective pass/fail condition
- Evidence that does not say which commit, tag, or package version was tested
- A plan whose procedure cannot be rerun from what is written
- Harness results presented as target-runtime results with no equivalence note
- A verification method that cannot prove the requirement's actual obligation
- Missing evidence path, owner, or actual-result field
- Verification results quietly reported as validation or acceptance
- Failed or deferred runs with no risk/gap/change record

## Verification

Before finishing verification planning, confirm:

- [ ] Every in-scope requirement has a stable ID and explicit authority state,
      or a routed finding.
- [ ] Each requirement has exactly one selected primary method that can prove
      it.
- [ ] Success criteria are objective: pass/fail condition, threshold, or
      inspectable artifact.
- [ ] Procedure, setup, target environment, and evidence path are defined and
      rerunnable.
- [ ] Tested ref or configuration will be recorded for every execution.
- [ ] Harness equivalence is stated wherever the execution environment differs
      from the target runtime.
- [ ] Deferred, failed, partial, and blocked outcomes have a handoff route.
- [ ] Verification and validation claims are kept separate.
- [ ] Output follows `references/verification-plan-output-schema.md`.
