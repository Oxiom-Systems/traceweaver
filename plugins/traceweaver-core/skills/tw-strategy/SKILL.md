---
name: tw-strategy
description: TraceWeaver-controlled strategy wrapper. Use when creating or updating STRATEGY.md as source-evidence grounding before ideation, brainstorming, requirements review, planning, or implementation authority.
argument-hint: "[strategy focus, section, product direction, or grounding question]"
---

<!-- TRACEWEAVER: file-role=strategy-source-evidence-wrapper-skill; req=REQ-TW-064; trace=TRACE-TW-047; ver=VER-TW-060 -->

# TraceWeaver Strategy

## Purpose

Use `tw-strategy` when product direction needs a short grounding anchor before
ideas become requirements source material. It preserves the useful CE strategy
workflow while keeping `STRATEGY.md` as source evidence, not implementation
authority.

`tw-strategy` delegates to the TraceWeaver-packaged `ce-strategy` engine. It
does not approve, rewrite, or silently broaden requirements.

## Required Inputs

Before delegating, load and cite the available authority context:

- `STRATEGY.md` when present
- `requirements.md` when present
- `traceability-matrix.md` when present
- `.traceweaver/intent-contract.yml` when present
- skill-local `references/traceweaver-operating-modes.md`

If authority files are missing, classify the run as authority bootstrap source
evidence. Do not implement from strategy output.

## Workflow

1. Capture the target problem, approach, users/personas, key metrics, tracks,
   non-goals, assumptions, risks, and open decisions.
2. Compare any existing `STRATEGY.md` with accepted requirements and the Intent
   Contract when those files exist.
3. Pause or route to `tw-requirements-review` when strategy conflicts with,
   changes, weakens, or expands accepted authority.
4. Delegate strategy drafting or update work to the TraceWeaver-packaged
   `ce-strategy` engine.
5. Mark output as source evidence only. Strategy may ground ideation,
   brainstorming, and planning, but it is not the controlling work source once
   `requirements.md` and `.traceweaver/intent-contract.yml` exist.
6. Return the next TraceWeaver handoff, normally `tw-ideate`,
   `tw-brainstorm`, or `tw-requirements-review`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not treat strategy output as approved implementation authority.
- Do not edit requirements, matrices, code, tests, commits, PRs, deployment
  state, or remote systems.
- Do not claim verification, runtime readiness, publication readiness, clean CE
  replacement, package/release readiness, or release readiness.

## Output

Return:

- operating mode and authority files loaded
- packaged `ce-strategy` delegation status
- source-evidence summary
- strategy changes, candidate requirements, conflicts, gaps, risks, and
  decisions
- held claims
- next TraceWeaver command
