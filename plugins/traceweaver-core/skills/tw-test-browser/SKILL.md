---
name: tw-test-browser
description: TraceWeaver-controlled browser verification wrapper. Use when running browser checks that should become linked verification evidence.
argument-hint: "[URL, route, feature, test target, or verification context]"
---

<!-- TRACEWEAVER: file-role=verification-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Test Browser

## Purpose

Use `tw-test-browser` for browser verification under TraceWeaver controls. It
delegates to the TraceWeaver-packaged `ce-test-browser` engine while requiring
verification evidence to stay linked to requirement, trace, and verification
IDs when it is used to close a TraceWeaver gate.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/verification-planner-guide.md` so the run is planned
  as verification evidence with method and pass/fail criteria, not an ad hoc test
- TraceWeaver-packaged `verification-planner` when the run needs substantive
  verification planning: method selection, procedure refs, evidence paths, and
  pass/fail criteria beyond the summary guide
- target URL, route, viewport, user flow, or test scope
- requirement, trace, and verification IDs when the result is accepted evidence

## Workflow

1. Determine whether the browser run is accepted verification or exploratory
   observation.
2. If accepted verification is intended, require a clear requirement ID, trace
   ID, verification ID, and expected acceptance signal.
3. Delegate execution to the TraceWeaver-packaged `ce-test-browser` engine.
4. Return commands, screenshots or artifacts, pass/fail status, and matrix
   evidence that `tw-work` or `tw-code-review` can link.
5. Mark evidence exploratory or held when IDs or acceptance criteria are
   missing.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not mutate requirements to make a browser result pass.
- Do not claim validation, release, production, or publication readiness from a
  browser check alone.
- Do not commit, push, open PRs, or update remote systems.

## Output

Return:

- authority context loaded
- packaged `ce-test-browser` delegation status
- verification or exploratory classification
- requirement, trace, and verification IDs used
- artifact paths and pass/fail evidence
- held claims and next TraceWeaver handoff
