---
name: tw-sessions
description: TraceWeaver-controlled session-history wrapper. Use when prior agent sessions may provide source evidence, context, or failed attempts without overriding current authority.
argument-hint: "[repo, topic, issue, time window, or question about prior sessions]"
---

<!-- TRACEWEAVER: file-role=session-context-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Sessions

## Purpose

Use `tw-sessions` to search prior agent sessions as source evidence under
TraceWeaver controls. It delegates to the TraceWeaver-packaged `ce-sessions`
engine. The packaged `ce-session-inventory` and `ce-session-extract` skills are
hidden/internal helpers for this route and must not be exposed as direct-callable
TraceWeaver wrapper skills.

Prior sessions can explain what was tried or decided. They cannot override the
current requirements baseline, Intent Contract, traceability matrix, or
verification evidence.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- the repo, topic, time window, issue, or question being researched

## Workflow

1. Define the session-history question and current authority boundary.
2. Delegate search and synthesis to the TraceWeaver-packaged `ce-sessions`
   engine.
3. Allow `ce-sessions` to use packaged hidden/internal `ce-session-inventory`
   and `ce-session-extract` helper primitives as needed.
4. Label all prior-session output as source evidence only.
5. Route any authority-impacting conclusion through `tw-requirements-review`,
   `tw-doc-review`, or `tw-traceability-check`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not create direct-callable `tw-session-inventory` or
  `tw-session-extract` wrappers in this slice.
- Do not treat old session notes as approved requirements or current proof.
- Do not stage, commit, push, publish, update issues, or update PRs.

## Output

Return:

- authority context loaded
- packaged `ce-sessions` delegation status
- hidden/internal helper usage, if any
- cited source-evidence summary
- conflicts with current authority, if any
- held claims and next TraceWeaver handoff
