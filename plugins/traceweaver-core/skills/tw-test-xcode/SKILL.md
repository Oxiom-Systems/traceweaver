---
name: tw-test-xcode
description: TraceWeaver-controlled Xcode verification wrapper. Use when building or testing iOS/macOS targets that should become linked verification evidence.
argument-hint: "[scheme, simulator, target, test path, or verification context]"
---

<!-- TRACEWEAVER: file-role=verification-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Test Xcode

## Purpose

Use `tw-test-xcode` for Xcode build or test verification under TraceWeaver
controls. It delegates to the TraceWeaver-packaged `ce-test-xcode` engine while
requiring accepted evidence to stay linked to requirement, trace, and
verification IDs.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- scheme, target, simulator, device, or test scope
- requirement, trace, and verification IDs when the result is accepted evidence

## Workflow

1. Classify the run as accepted verification or exploratory diagnosis.
2. Require a clear requirement ID, trace ID, verification ID, and acceptance
   signal before treating Xcode output as gate-closing evidence.
3. Delegate execution to the TraceWeaver-packaged `ce-test-xcode` engine.
4. Return build/test command, environment, pass/fail result, logs or artifacts,
   and matrix handoff details.
5. Mark evidence exploratory or held when IDs, authority, or target mapping are
   unclear.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not rewrite requirements or test expectations to fit an Xcode result.
- Do not claim release, App Store, production, or publication readiness from the
  wrapper alone.
- Do not commit, push, open PRs, or update remote systems.

## Output

Return:

- authority context loaded
- packaged `ce-test-xcode` delegation status
- verification or exploratory classification
- requirement, trace, and verification IDs used
- artifact paths and pass/fail evidence
- held claims and next TraceWeaver handoff
