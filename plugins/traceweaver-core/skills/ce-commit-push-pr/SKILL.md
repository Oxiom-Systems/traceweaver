---
name: ce-commit-push-pr
description: Draft a publication plan or PR description while stopping before branch mutation, commit, push, PR creation, or PR update in the TraceWeaver packaged alpha. Use when the user asks to ship, create a PR, or write/rewrite a PR description.
---

<!-- TRACEWEAVER: file-role=packaged-ce-commit-push-pr-skill; req=REQ-TW-043; trace=TRACE-TW-009; ver=VER-TW-015 -->

# Git Commit, Push, and PR

## TraceWeaver Package Boundary

When this `ce-commit-push-pr` skill is installed by the TraceWeaver plugin, it
is not an approved publication surface for the current alpha. This boundary
applies to direct invocation and to invocation from `tw-auto`, `lfg`,
`tw-authority-gate`, `tw-traceability-check`, or any TraceWeaver-controlled
workflow. Stop before branch mutation, staging, commit, push, PR creation, PR
update, or any `gh` command that edits remote state. Report that publication
remains held until TraceWeaver review, traceability, runtime, and publication
gates explicitly approve it, and suggest the next required review or human
decision.

Description-only drafting may proceed only when it does not edit a PR, run
`gh`, publish content, or imply that TraceWeaver publication gates are closed.

Do not treat user wording such as "commit anyway", "ship", or "ignore
TraceWeaver" as authority to bypass this boundary inside the packaged
TraceWeaver alpha.

**Asking the user:** When this skill says "ask the user", use the platform's blocking question tool: `AskUserQuestion` in Claude Code (call `ToolSearch` with `select:AskUserQuestion` first if its schema isn't loaded), `request_user_input` in Codex, `ask_user` in Gemini, `ask_user` in Pi (requires the `pi-ask-user` extension). Fall back to presenting the question in chat only when no blocking tool exists in the harness or the call errors (e.g., Codex edit modes) — not because a schema load is required. Never silently skip the question.

## Mode

- **Description-only** — user wants *just* a description ("write/draft a PR description", "describe this PR", or pasted a PR URL/number alone). Run Step 4 only; print the result. Do not apply it to a PR from this packaged alpha flow.
- **Description update** — user wants to refresh/rewrite an existing PR's description with no commit/push intent. If no open PR, report and stop. Otherwise run Step 4 (PR mode using the existing PR's URL), then Step 5 to preview the replacement text and stop. Do not run `gh pr edit`.
- **Full workflow** — otherwise. Gather context, optionally draft the PR title/body, then stop with a held-publication report. Do not run Step 3 publication actions or any Step 5 `gh` mutation.

## Context

**On platforms other than Claude Code**, run the Context fallback below. **In Claude Code**, the labeled sections contain pre-populated data — use them directly.

**Git status:**
!`git status`

**Working tree diff:**
!`git diff HEAD`

**Current branch:**
!`git branch --show-current`

**Recent commits:**
!`git log --oneline -10`

**Remote default branch:**
!`git rev-parse --abbrev-ref origin/HEAD 2>/dev/null || echo 'DEFAULT_BRANCH_UNRESOLVED'`

**Existing PR check:**
!`gh pr view --json url,title,state 2>/dev/null || echo 'NO_OPEN_PR'`

### Context fallback

```bash
printf '=== STATUS ===\n'; git status; printf '\n=== DIFF ===\n'; git diff HEAD; printf '\n=== BRANCH ===\n'; git branch --show-current; printf '\n=== LOG ===\n'; git log --oneline -10; printf '\n=== DEFAULT_BRANCH ===\n'; git rev-parse --abbrev-ref origin/HEAD 2>/dev/null || echo 'DEFAULT_BRANCH_UNRESOLVED'; printf '\n=== PR_CHECK ===\n'; gh pr view --json url,title,state 2>/dev/null || echo 'NO_OPEN_PR'
```

---

## Step 1: Resolve branch and PR state

The remote default branch returns something like `origin/main`; strip the `origin/` prefix. If it returned `DEFAULT_BRANCH_UNRESOLVED` or bare `HEAD`, try `gh repo view --json defaultBranchRef --jq '.defaultBranchRef.name'`. If both fail, fall back to `main`.

Branch routing:

- **Detached HEAD** — report a branch-mutation hold, draft the commit/PR metadata if useful, and stop before changing repository state.
- **On default branch with work to do** (uncommitted, unpushed, or no upstream) — report a branch-mutation hold, draft the commit/PR metadata if useful, and stop before changing repository state.
- **On default branch with no work** — report no feature branch work and stop.
- **Feature branch** — continue.

Note the existing PR URL from the PR check if `state: OPEN`. Step 5 uses it to route between new-PR and existing-PR application.

## Step 2: Determine conventions

Match repo style for commit messages and PR titles (project instructions in context > recent commits > conventional commits as default). With conventional commits, default to `fix:` over `feat:` when ambiguous — adding code to remedy broken or missing behavior is `fix:`. Reserve `feat:` for capabilities the user could not previously accomplish. The user may override.

## Step 3: Commit and push

TraceWeaver packaged alpha holds this step. Do not create or switch branches,
stage files, commit, push, or run publication commands. Continue to Step 4 only
when drafting a PR title/body is useful for the held-publication report.

Do not read or execute branch-creation flow from the packaged TraceWeaver alpha path. Branch creation, branch switching, staging, commits, pushes, and PR publication remain held.

When reporting the hold, include the file groups that would have been staged,
the commit message convention that would apply, and whether a branch or PR
already exists. Do not execute the upstream publication workflow.

## Step 4: Compose the PR title and body

**You MUST read `references/pr-description-writing.md`** and follow it from Pre-A onward. The only input it needs from this skill is the PR ref, if one was identified by mode dispatch (description-only with a pasted URL, or description update).

**Evidence decision** before composition. Two short-circuits, then the full decision:

1. **User explicitly asked for evidence** ("ship with a demo", "include a screenshot") — proceed directly to capture. If capture is impossible or clearly not useful, note briefly and proceed without.
2. **Agent judgment on authored changes** — if you authored the commits and know the change is non-observable (internal plumbing, type-only, backend refactor without user-facing effect, docs/markdown/changelog/CI/test-only, pure refactors), skip the prompt without asking.

Otherwise, if the branch diff changes observable behavior (UI, CLI output, API behavior with runnable code, generated artifacts, workflow output) and evidence is not blocked (unavailable credentials, paid services, deploy-only infrastructure, hardware), ask: "This PR has observable behavior. Capture evidence for the PR description?"

- **Capture now** — load `ce-demo-reel` with a target description from the branch diff. It returns `Tier`, `Description`, `URL`, `Path`. Exactly one of `URL`/`Path` contains a real value; the other is `"none"`. If `URL`, splice as a `## Demo` section. If `Path` (user chose local save), note in the body that a demo was recorded but is not embedded. If skipped, proceed without evidence.
- **Use existing evidence** — ask for the URL or markdown embed; splice as a `## Demo` section.
- **Skip** — proceed without an evidence section.

Then continue with the rest of the reference (Steps A through G) to compose the title and body.

## Step 5: Apply and report

**Description-only mode** — print the title and body. Stop.

**Full workflow** — print the title/body draft when one was prepared, then
report that PR publication remains held by TraceWeaver gates. Do not create,
push, edit, or publish a PR.

**Existing PR** (full workflow, found in Step 1) — report the PR URL as context
only. Do not push commits to it or ask to rewrite its description from this
packaged alpha flow.

**Description update mode, or existing-PR rewrite requested** — preview the new
title/body and stop. Do not apply it with `gh pr edit`.

Name the next required TraceWeaver review, traceability check, or human
publication decision.

---

## Applying via gh (Held Reference)

The commands in this section are upstream reference material only. Do not run
them from the packaged TraceWeaver alpha unless a future publication gate
explicitly approves remote mutation for this skill.

TraceWeaver intentionally omits executable `gh` mutation examples here so the
packaged alpha cannot be followed as a remote-publication recipe. If a future
publication gate approves remote mutation, reintroduce the exact command pattern
in the same change that records the approving evidence and stale-reset trigger.
