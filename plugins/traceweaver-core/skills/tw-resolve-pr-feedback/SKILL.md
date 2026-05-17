---
name: tw-resolve-pr-feedback
description: TraceWeaver-controlled PR feedback wrapper. Use when evaluating or repairing PR review feedback while preserving traceability and publication gates.
argument-hint: "[PR feedback, review thread, or local repair scope]"
---

<!-- TRACEWEAVER: file-role=pr-feedback-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Resolve PR Feedback

## Purpose

Use `tw-resolve-pr-feedback` for PR review feedback analysis and local repair
under TraceWeaver controls. It delegates to the TraceWeaver-packaged
`ce-resolve-pr-feedback` engine, but does not give that engine publication or
remote-mutation authority.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- the PR feedback, review finding, thread reference, or local diff scope

## Workflow

1. Classify the feedback as local repair, authority clarification, verification
   gap, review discussion, or publication intent.
2. Stop before local repair when requirements, target branch, accepted scope, or
   verification mapping are unclear.
3. Delegate analysis or local repair to the TraceWeaver-packaged
   `ce-resolve-pr-feedback` engine.
4. After local changes, route through `tw-work`, `tw-traceability-check`, and
   `tw-code-review` / `tw-doc-review` as applicable.
5. Route any commit, push, PR update, remote comment, thread resolution, or
   publication action through `tw-commit-push-pr` or a separate explicit remote
   gate.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not resolve remote threads, reply on PRs, push, commit, open PRs, or update
  PR descriptions from this wrapper.
- Do not treat review feedback as authority to change requirements.
- Do not claim publication readiness from local repair alone.

## Output

Return:

- authority context loaded
- packaged `ce-resolve-pr-feedback` delegation status
- local repair summary or blocked reason
- verification and traceability evidence needed
- remote/publication actions held
- next TraceWeaver command
