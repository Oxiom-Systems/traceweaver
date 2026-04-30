---
name: requirements-reviewer
description: Reviews requirement quality and approval readiness. Use when deciding whether a need, requirement, user story, constraint, acceptance criterion, or planning statement is good enough to become approved implementation authority.
---

# Requirements Reviewer

## Purpose

Judge whether a requirement is clear, source-linked, feasible, verifiable,
validation-aware, and safe to promote into implementation authority.

## Core Question

Is this requirement good enough to become authority?

## When To Use

- When a candidate need, requirement, constraint, acceptance criterion, or user
  story may become implementation authority.
- Before approval, baseline entry, traceability reliance, or implementation.
- When weak wording, missing metadata, or V&V concerns are suspected.

## When Not To Use

- To approve its own rewrite.
- To accept unverifiable requirements without an explicit exception.
- To replace traceability, V&V planning, or change control.

## Inputs Required

- Candidate requirement text, ID, type, owner, source/parent need, rationale,
  priority, and status when available.
- Verification method, validation path, approval state, and related requirements.

## Outputs Produced

- `requirement_review_result`
- `authority_status`
- `source_preservation_assessment`
- `verifiability_assessment`
- `validation_alignment_assessment`
- `required_rework`
- `approved_exception_reference`

## Authority Boundary

This skill decides approval readiness. It does not grant approval; approval
requires project authority or a controlled exception record.

## Handoff Rules

- Missing raw source goes to `needs-and-requirements-capture`.
- Traceability setup goes to `systems-engineering-traceability`.
- Weak accepted requirements go to `risk-gap-change-control`.
- Verification and validation planning go to their dedicated planner skills.

## Failure / Hold Conditions

- Requirement has no parent/source trace.
- Requirement is vague, compound, conflicting, infeasible, or unverifiable.
- Verification method or validation path is missing.
- Human acceptance of weakness lacks an exception record.

## Examples

- Clean: requirement has ID, type, parent need, objective verification criteria,
  validation path, owner, and approval state.
- Weak: "system should be robust" is vague, unverifiable, and not baseline-ready.

## What This Skill Owns

- Classify candidate requirement text.
- Detect weak, ambiguous, unverifiable, compound, conflicting, or
  implementation-biased requirements.
- Decide whether a requirement can be approved, must be revised, must be
  reclassified, or needs human decision.
- Produce structured findings with traceability impact.

## What This Skill Does Not Own

- Full lifecycle traceability.
- Implementation planning.
- Verification execution.
- Validation execution.
- Approval itself. Quality review decides whether approval is safe; the project
  still needs a human approval or change-control record.

## References

Read these in order:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when rewrite examples are useful
5. `references/source-basis.md` only when source provenance is needed

## Process

1. Separate true requirements from needs, ideas, assumptions, design notes,
   constraints, tasks, and evidence.
2. Classify each requirement by type and authority state.
3. Run the quality checklist.
4. Map verification and validation readiness.
5. Decide: `can_approve`, `revise`, `block`, `human_decision`, or
   `reclassify`.
6. Emit findings using the output schema.

## Gate

A weak requirement must not become approved implementation authority. If the
team intentionally accepts a weak requirement, record it as an approved gap,
accepted risk, design decision, or change-control exception with owner, reason,
review condition, and allowed use.
