---
name: tw-compound-refresh
description: TraceWeaver-controlled stale-learning refresh wrapper. Use when refreshing docs/solutions learning material while keeping authority and requirements mutation held.
argument-hint: "[learning doc, docs/solutions scope, or refresh target]"
---

<!-- TRACEWEAVER: file-role=learning-refresh-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Compound Refresh

## Purpose

Use `tw-compound-refresh` to refresh stale learning docs under TraceWeaver
controls. It delegates to the TraceWeaver-packaged `ce-compound-refresh` engine
and keeps refreshed learning as source evidence unless a separate review accepts
authority changes.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- the learning-doc scope being refreshed

## Workflow

1. Identify the stale learning scope and the current code or doc evidence used
   to evaluate it.
2. Delegate the refresh to the TraceWeaver-packaged `ce-compound-refresh`
   engine.
3. Keep any refreshed learning as source evidence.
4. Pause when the refresh implies a requirements change, authority baseline
   change, publication claim, or release-readiness claim.
5. Route authority-impacting changes through `tw-requirements-review` or
   `tw-doc-review`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not silently edit requirements, Intent Contract state, or matrix authority.
- Do not stage, commit, push, open PRs, resolve remote threads, or publish.
- Do not claim that stale-learning cleanup closes verification or validation.

## Output

Return:

- authority context loaded
- packaged `ce-compound-refresh` delegation status
- refreshed learning paths or proposed changes
- authority-impacting findings, if any
- held claims and next TraceWeaver handoff
