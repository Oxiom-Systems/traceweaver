---
name: tw-setup
description: TraceWeaver-controlled setup wrapper. Use when diagnosing or preparing the local Compound Engineering / TraceWeaver environment without bypassing authority or publication gates.
argument-hint: "[setup check, environment issue, or tool diagnostic]"
---

<!-- TRACEWEAVER: file-role=setup-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Setup

## Purpose

Use `tw-setup` for local environment diagnostics and setup evidence under
TraceWeaver controls. It delegates to the TraceWeaver-packaged `ce-setup` engine
but keeps host mutation, authority changes, and publication claims bounded.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- the setup target, tool, failure, or diagnostic question

## Workflow

1. Classify the request as read-only diagnostic, explicit local setup mutation,
   authority change, or publication intent.
2. Prefer read-only diagnostics. Ask for explicit user confirmation before
   host-level setup mutation unless the command is already required by reviewed
   authority and locally scoped.
3. Delegate diagnostics or guided setup to the TraceWeaver-packaged `ce-setup`
   engine.
4. Report setup evidence, host mutation performed or held, and follow-up review
   gates.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not edit requirements, matrices, or Intent Contract state from setup
  results unless routed through authority review.
- Do not commit, push, open PRs, publish, install remote credentials, or mutate
  remote services.
- Do not claim runtime readiness beyond the exact setup proof observed.

## Output

Return:

- authority context loaded
- packaged `ce-setup` delegation status
- diagnostic results
- local mutation status: `none`, `explicit`, or `held`
- held claims and next TraceWeaver handoff
