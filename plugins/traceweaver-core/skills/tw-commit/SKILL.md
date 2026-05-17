---
name: tw-commit
description: TraceWeaver-controlled commit wrapper. Use when the user asks to commit, save changes, or prepare a commit while preserving Intent Contract, traceability, verification, review, and publication-route controls.
argument-hint: "[commit request or scope]"
---

<!-- TRACEWEAVER: file-role=publication-wrapper-skill; req=REQ-TW-053; trace=TRACE-TW-033; ver=VER-TW-042 -->

# TraceWeaver Commit

## Purpose

Provide the TraceWeaver entrypoint for commit intent so users do not need to
invoke raw `ce-commit`. `tw-commit` is a publication wrapper around the
TraceWeaver-controlled route: it checks authority, traceability, verification,
review state, staged-tree coherence, target certainty, and held claims before
any commit-capable workflow is considered.

This wrapper exists to keep the user-facing command surface TraceWeaver-owned.
It does not broaden publication authority.

## Required Inputs

Before preparing any commit, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- relevant validation, review, trace, gap, change, or exception records
- the current `git status --short`

If authority files are split between staged and working-tree state, stale, dirty
in an unreviewed way, or contradictory, stop and report the staged/working-tree
coherence blocker.

## Workflow

1. Confirm the request is Publication Mode.
2. Require `tw-authority-gate` for unchanged approved authority.
3. Require `tw-traceability-check` for the current changed-file and authority
   set.
4. Require clean `tw-code-review` for behavior-bearing code/scripts/skills and
   clean `tw-doc-review` for authority, matrix, plan, or evidence changes.
5. Confirm verification evidence is present and linked in the matrix.
6. Confirm there are no blocking structured findings, dark behavior, stale
   hashes, missing trace anchors, untracked authority files, target ambiguity,
   credential/remote uncertainty, or held publication claims.
7. If every controlled-publication condition is proven and the user explicitly
   confirms the commit target, delegate to the TraceWeaver-packaged `ce-commit`
   as the commit-message engine.
8. If any condition is missing, stop before staging or committing and return the
   exact blocker plus the next TraceWeaver review or verification step.

## Boundaries

- Do not invoke raw external CE plugin skills.
- Do not stage files, commit, create branches, or mutate git state unless the
  controlled TraceWeaver publication route is clean for this exact target.
- Do not treat "commit anyway", "ship", or similar wording as authority to
  bypass TraceWeaver gates.
- Description or commit-message drafting may proceed only when it does not
  imply that publication gates are closed.

## Output

Return:

- publication route status: `blocked`, `held`, or `ready_for_ce_commit_delegate`
- authority baseline and hash used
- traceability/review/verification evidence checked
- staged-tree and working-tree coherence status
- exact blocker list or proposed commit grouping/message
- next TraceWeaver command
