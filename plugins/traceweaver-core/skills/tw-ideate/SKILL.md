---
name: tw-ideate
description: TraceWeaver-controlled ideation wrapper. Use when generating, ranking, or critiquing product or implementation ideas as source evidence before brainstorming or requirements review.
argument-hint: "[idea area, product focus, constraint, or improvement theme]"
---

<!-- TRACEWEAVER: file-role=ideation-source-evidence-wrapper-skill; req=REQ-TW-064; trace=TRACE-TW-047; ver=VER-TW-060 -->

# TraceWeaver Ideate

## Purpose

Use `tw-ideate` when the agent should generate and critically evaluate possible
directions before one is selected for brainstorming or requirements review. It
preserves the useful CE ideation workflow while keeping ideation output as
TraceWeaver source evidence.

`tw-ideate` delegates to the TraceWeaver-packaged `ce-ideate` engine. It does
not approve, rewrite, or silently broaden requirements.

## Required Inputs

Before delegating, load and cite the available authority context:

- `STRATEGY.md` when present
- `requirements.md` when present
- `traceability-matrix.md` when present
- `.traceweaver/intent-contract.yml` when present
- skill-local `references/traceweaver-operating-modes.md`

If authority files are missing, classify the run as authority bootstrap source
evidence. Do not implement from ideation output.

## Workflow

1. Identify the ideation subject and whether the request is repo-grounded,
   product/software context, or broader source-evidence exploration.
2. Read `STRATEGY.md` when present and use it as grounding only.
3. Compare candidate directions with accepted requirements and the Intent
   Contract when those files exist.
4. Pause or route to `tw-requirements-review` when an idea conflicts with,
   changes, weakens, or expands accepted authority.
5. Delegate idea generation and critique to the TraceWeaver-packaged
   `ce-ideate` engine.
6. Mark output as source evidence only: ranked ideas, rejected ideas,
   assumptions, validation questions, gaps, and recommended next source step.
7. Return the next TraceWeaver handoff, normally `tw-grill`,
   `tw-brainstorm`, or `tw-requirements-review`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not treat ideation output as approved implementation authority.
- Do not skip directly from ideation to `tw-plan`, `tw-work`, or publication.
- Do not edit requirements, matrices, code, tests, commits, PRs, deployment
  state, or remote systems.
- Do not claim verification, runtime readiness, publication readiness, clean CE
  replacement, package/release readiness, or release readiness.

## Output

Return:

- operating mode and authority files loaded
- packaged `ce-ideate` delegation status
- source-evidence summary
- ranked ideas, rejected ideas, assumptions, validation questions, gaps, and
  risks
- held claims
- next TraceWeaver command
