---
name: tw-brainstorm
description: TraceWeaver-controlled brainstorm wrapper. Use when exploring vague ideas, requirements source material, or possible approaches while preserving source-evidence status before requirements review.
argument-hint: "[idea, problem, goal, or rough feature]"
---

<!-- TRACEWEAVER: file-role=source-evidence-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Brainstorm

## Purpose

Use `tw-brainstorm` when an idea needs exploration before it can become
implementation authority. The wrapper preserves the useful CE brainstorming
workflow while keeping brainstorm output as TraceWeaver source evidence until
requirements review accepts it.

`tw-brainstorm` delegates to the TraceWeaver-packaged `ce-brainstorm` engine.
It does not approve, rewrite, or silently broaden requirements.

## Required Inputs

Before delegating, load and cite the available authority context:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/needs-and-requirements-capture-guide.md` so raw
  stakeholder wording, needs, wants, design suggestions, constraints, and
  success signals are elicited and separated per distilled capture rules

If authority files are missing, classify the run as authority bootstrap source
evidence. Do not implement from brainstorm output.

## Workflow

1. Capture the user's idea, known constraints, assumptions, exclusions, risks,
   validation questions, and open decisions.
2. Pause or route to `tw-requirements-review` when the request depends on
   unclear, contradictory, incomplete, stale, missing, or materially changed
   requirements.
3. Delegate exploration to the TraceWeaver-packaged `ce-brainstorm` engine.
4. Mark output as source evidence only: candidate needs, candidate
   requirements, assumptions, gaps, options, tradeoffs, and clarification
   questions.
5. Return the next TraceWeaver handoff, normally `tw-requirements-review` before
   `tw-plan`, `tw-auto`, or `tw-work`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not treat brainstorm output as approved implementation authority.
- Do not edit requirements, matrices, code, tests, commits, PRs, or remote
  systems.
- Do not claim verification, runtime readiness, publication readiness, clean CE
  replacement, or release readiness.

## Output

Return:

- operating mode and authority files loaded
- packaged `ce-brainstorm` delegation status
- source-evidence summary
- candidate requirements, gaps, risks, and decisions
- held claims
- next TraceWeaver command
