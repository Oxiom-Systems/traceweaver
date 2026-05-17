---
name: tw-worktree
description: TraceWeaver-controlled worktree wrapper. Use when creating or inspecting local git worktrees while preserving authority, traceability, and no-publication boundaries.
argument-hint: "[branch name, issue, feature scope, or worktree request]"
---

<!-- TRACEWEAVER: file-role=worktree-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Worktree

## Purpose

Use `tw-worktree` for local worktree creation or inspection under TraceWeaver
controls. It delegates to the TraceWeaver-packaged `ce-worktree` engine and
keeps branch, commit, push, PR, and publication actions outside this wrapper.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- target branch, issue, feature, or worktree scope

## Workflow

1. Confirm the worktree operation is local-only and tied to a clear work scope.
2. Stop when the target branch, repo, base, or authority boundary is unclear.
3. Delegate local worktree creation or inspection to the TraceWeaver-packaged
   `ce-worktree` engine.
4. Return the created path, branch, base, scope, and next TraceWeaver command.
5. Route implementation to `tw-work` and publication to `tw-commit` or
   `tw-commit-push-pr`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not commit, push, open PRs, update remote branches, or publish.
- Do not use worktree creation as authority to implement unreviewed behavior.
- Do not claim review, runtime, or release readiness.

## Output

Return:

- authority context loaded
- packaged `ce-worktree` delegation status
- local worktree path, branch, base, and scope
- held publication actions
- next TraceWeaver handoff
