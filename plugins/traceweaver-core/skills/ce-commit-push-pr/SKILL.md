---
name: ce-commit-push-pr
description: Internal TraceWeaver publication engine. Draft freely, but mutate Git or GitHub only with a current single-use authorization capsule issued by tw-commit-push-pr for the exact repository, tree, target, operations, and credential identity.
---

<!-- TRACEWEAVER: file-role=packaged-ce-commit-push-pr-skill; req=REQ-TW-043; trace=TRACE-TW-009; ver=VER-TW-015 -->
<!-- TRACEWEAVER: file-role=controlled-publication-delegate; req=REQ-TW-053; trace=TRACE-TW-033; ver=VER-TW-042 -->

# Git Commit, Push, and PR

## TraceWeaver Package Boundary

This packaged CE-derived skill is an internal execution engine, never the
user-facing authority boundary. Direct invocation, invocation from a raw CE
workflow, or delegation without a complete publication authorization capsule
must stop before branch mutation, staging, commit, push, PR mutation, merge, or
any other remote write. User wording alone is not a capsule and cannot bypass
this rule.

A valid capsule must be issued by `tw-commit-push-pr` in the current run and
must name the baseline/hash, trace/verification/review evidence, reviewed tree
identity and file scope, repository and verified remote URL, exact base/head and
starting ref, allowed operations, verified credential identity, explicit human
confirmation, issue time, and single-use run ID. Recheck every applicable field
immediately before each mutation. Any mismatch, missing field, reused run ID,
new diff, check-state change, or target change invalidates the capsule and stops
the workflow. Resolve the canonical ledger as
`<git-common-dir>/traceweaver/publication-consumed-run-ids`, create only its
parent directory, then validate and atomically consume the run ID exactly once
before the first mutation with the sibling TraceWeaver wrapper validator
`../tw-commit-push-pr/scripts/traceweaver-validate-publication-capsule --mode consume --repo <exact-repo-path>`. Before each
later operation, use `--mode revalidate` against that same ledger; an absent
consumed run ID or changed capsule digest is a blocker, not a fresh validation
path.

Description-only drafting remains available without a capsule because it does
not mutate local or remote state.

**Asking the user:** When this skill says "ask the user", use the platform's blocking question tool: `AskUserQuestion` in Claude Code (call `ToolSearch` with `select:AskUserQuestion` first if its schema isn't loaded), `request_user_input` in Codex, `ask_question` in Antigravity CLI (`agy`), `ask_user` in Pi (requires the `pi-ask-user` extension). Fall back to presenting the question in chat only when no blocking tool exists in the harness or the call errors (e.g., Codex edit modes) — not because a schema load is required. Never silently skip the question.

## Mode

- **Description-only** — user wants *just* a description ("write/draft a PR description", "describe this PR", or pasted a PR URL/number alone). Run Step 4 only; print the result. Do not apply it to a PR from this packaged alpha flow.
- **Description update** — user wants to refresh/rewrite an existing PR's description with no commit/push intent. If no open PR, report and stop. Otherwise run Step 4 (PR mode using the existing PR's URL), then Step 5 to preview the replacement text and stop. Do not run `gh pr edit`.
- **Full workflow** — otherwise. Require and validate the TraceWeaver
  authorization capsule, then run the exact allowed operations only. Without a
  valid capsule, gather context, optionally draft, and stop held.

**`mode:pipeline` modifier** — set by orchestrated callers (e.g., `lfg`). Run the resolved mode non-interactively: suppress every blocking ask. Step 5's existing-PR rewrite question defaults to **not rewriting**; in description-update mode the preview ask is skipped and the rewrite applies directly (the update invocation itself is the apply intent); any other suppressed ask takes its conservative documented default (keep the current branch; if Pre-A cannot resolve a base, stop and report rather than guess).

## Context

Gather the repository context by running each command below as its **own** shell tool call — a single argv-style invocation (just the program and its arguments). Do **not** join them with `;`, `&&`, `||`, pipes, `$(...)`, or redirects like `2>/dev/null`: that syntax parses only under POSIX shells and aborts under Windows PowerShell. Read each command's exit status directly — a non-zero exit is a normal state to interpret (no PR yet, no `origin/HEAD`, detached HEAD), not a failure to suppress.

Run them in order — the existing-PR check needs the branch name from `git branch --show-current`:

| Command | Purpose | Non-zero exit / empty output means |
| --- | --- | --- |
| `git rev-parse --show-toplevel` | Repo root | Not a git repository — report and stop |
| `git status` | Working-tree state | (fails only outside a repo) |
| `git diff HEAD` | Uncommitted changes | Unborn repo with no commits yet |
| `git branch --show-current` | Current branch (`<branch>`) | Empty output = detached HEAD (Step 1 handles it) |
| `git log --oneline -10` | Recent commit / PR-title style | Unborn repo — no history yet |
| `git rev-parse --abbrev-ref origin/HEAD` | Remote default branch | No `origin/HEAD` set — resolve per Step 1 |
| `gh pr list --head <branch> --state open --json number,url,title,body,state,headRefName,headRepositoryOwner` | Open PR for this branch (run only once `<branch>` is non-empty) | Exit 0 with `[]` = no open PR. Non-zero = `gh` missing, unauthenticated, or offline — PR state is **unknown**, not "none"; never treat a non-zero check as "no PR"; re-check before creating (Step 5) |

Substitute `<branch>` with the current branch from `git branch --show-current`, and pass the branch **name only**. Two traps:

- **Empty branch (detached HEAD):** skip the PR check entirely — `gh pr list` with an empty `--head` drops the filter and lists unrelated PRs. Resolve it after Step 1 creates a branch.
- **Fork checkout:** do **not** pass `<owner>:<branch>` — `gh pr list --head` does not accept that syntax and silently returns `[]` for it, which reads as "no PR" and opens a duplicate. The PR lives on the base repo, so make `gh` target the base: rely on its default-repo resolution, or pass `-R <base-owner>/<repo>` explicitly when the default is the fork.

Everything gathered here is a snapshot taken before any action — treat it as a hint, not ground truth. Re-verify the branch, remote, and existing-PR state immediately before each consequential step (push in Step 3, `gh pr create` in Step 5), since they can change between gathering and acting.

---

## Step 1: Resolve branch and PR state

The remote default branch returns something like `origin/main`; strip the `origin/` prefix. If that command exited non-zero (no `origin/HEAD` set) or returned bare `HEAD`, try `gh repo view --json defaultBranchRef --jq '.defaultBranchRef.name'`. If both fail, fall back to `main`. For the existing-PR check: an empty `[]` array means no open PR for this branch; a non-zero exit means `gh` is missing, unauthenticated, or offline — treat PR state as **unknown** (not "no PR") and re-run the check, or `gh auth status`, before creating a new PR in Step 5 rather than assuming none exists.

Branch routing:

- **Detached HEAD** — create only the exact capsule-authorized feature branch
  from the capsule's expected starting ref; otherwise stop held.
- **On default branch with work to do** (uncommitted, unpushed, or no upstream)
  — create only the exact capsule-authorized feature branch after confirming
  the base and starting ref; otherwise stop held.
- **On default branch with no work** — report no feature branch work and stop.
- **Feature branch** — continue.

If the PR check returned a non-empty array, do **not** blindly take index 0 — in a base repo with multiple forks, another contributor's PR can share the same branch name (`--head` filters by branch only, not `<owner>:<branch>`). Select the entry whose `headRepositoryOwner` and `headRefName` match the current head — the branch/fork this workflow is pushing. Note the URL and body from that entry (all entries are open — the check filtered `--state open`). If exactly one entry matches, use it; if multiple entries share the branch name from different owners and none can be confirmed as the current head's, treat it as ambiguous and stop/surface rather than acting on the wrong PR. Step 5 uses the URL to route between new-PR and existing-PR application. Step 4 uses the existing body as preservation context when rewriting.

## Step 2: Determine conventions

Match repo style for commit messages and PR titles (project instructions in context > recent commits > conventional commits as default). With conventional commits, default to `fix:` over `feat:` when ambiguous — adding code to remedy broken or missing behavior is `fix:`. Reserve `feat:` for capabilities the user could not previously accomplish. The user may override.

## Step 3: Authorized branch, commit, and push

Stop unless the capsule is valid and explicitly allows each operation below.

1. Recheck the repository identity, remote URL, expected starting ref, current
   tree identity, declared file scope, and credential identity.
2. When branch creation is allowed and required, create the exact head branch
   named in the capsule. Never invent or substitute a branch name.
3. Stage only the capsule-declared files. Never use `git add .` or
   `git add -A`. Recompute the staged-tree identity and stop if it differs from
   the reviewed identity recorded by the wrapper.
4. Commit using the repository convention and the reviewed commit grouping.
5. Push only the exact authorized head branch to the verified remote. Require
   the local ref and expected parent to match the capsule, then use the explicit
   refspec `git push -u <remote> HEAD:refs/heads/<authorized-head>`. Verify the
   resulting remote SHA before PR mutation. Never force-push.
6. Re-read branch, upstream, commit, and working-tree state. Stop before PR
   mutation if the pushed commit or tree is not the reviewed candidate.

## Step 4: Compose the PR title and body

**You MUST read `references/pr-description-writing.md`** and follow it from Pre-A onward. The only input it needs from this skill is the PR ref, if one was identified by mode dispatch (description-only with a pasted URL, or description update).

**Evidence decision** before composition. CE no longer owns a dedicated capture workflow; modern harnesses provide their own browser, screenshot, terminal recording, and artifact capture tools. Treat evidence as user-supplied context or as validation prose, not as a separate skill dispatch.

1. **User supplied evidence** (URL, markdown image/embed, local artifact path they want referenced) — incorporate it into the PR body as `## Demo`, `## Screenshots`, or `## Evidence`, matching the artifact type. Do not invent or upload evidence.
2. **User explicitly asks to include evidence but has not supplied it** — ask for the URL/markdown/path, or tell them to use the current harness's capture flow and return with the artifact. Do not launch another CE skill.
3. **Agent judgment on authored changes** — if you authored the commits and know the change produces no material claim a reviewer would need evidence for (internal plumbing, type-only, backend refactor without user-facing effect, inert documentation, pure refactors), skip evidence handling without asking. Classify by runtime purpose, not extension: markdown or YAML that is runtime agent instructions, configuration, generated product content, or policy code is not auto-skippable just for being markdown or YAML.

Otherwise, if the branch diff changes behavior a reviewer would need evidence for (UI, CLI output, API behavior with runnable code, generated artifacts, workflow output, ranking/scoring logic, deployment or config behavior), include a concise validation note in the PR body describing what was exercised and how it behaved. If no real run was possible because of unavailable credentials, paid services, deploy-only infrastructure, hardware, or missing local setup, say that plainly in the validation section.

Do not block PR creation solely because no visual artifact exists. Test output and manual validation notes are acceptable validation evidence, but do not label test output as "Demo" or "Screenshots."

**Concept teaching gate** before composition. Use the repo root gathered in Context (resolving it with `git rev-parse --show-toplevel` if you don't already have it) and read `<repo-root>/.compound-engineering/config.local.yaml` with the native file-read tool. Only an **active (non-commented)** `pr_teaching_section:` key counts — lines starting with `#` are YAML comments, and the shipped template documents keys as commented examples; matching those would silently flip the gate. The gate is off only when the active value is exactly `false`; a missing file, missing key, or any other value means the default: **on**. The same read resolves `pr_teaching_archive:` — on only when the active value is exactly `true`, otherwise **off** — and a per-run `archive:on|off` token overrides the archive key for this invocation.

- Gate **on** — judge concept novelty and compose the section per **Step B2** of the reference. The gate is single: when it is off, skip judgment, the section, the Step 5 trailer and offer, and archival entirely.
- Gate **off** — compose the description without any concept handling.

**PR branding gate** before composition. Branding is **off unless this invocation includes `branding:on` or the user explicitly asks in the current prompt to add Compound Engineering branding**; normalize that natural-language request to `branding:on`. `branding:off` forces the gate off when `branding:on` is absent. If both tokens are present, stop and report the conflict rather than guessing. Pass the resolved gate and whether the target is a new or existing PR into Step D of the reference. Branding is the generic Compound Engineering badge only; do not attribute the PR to a model or harness. The gate controls adding branding to a new PR body. Existing branding is preserved verbatim unless the user explicitly asks to remove or replace that exact content.

Then continue with the rest of the reference (Steps A through E, including the Step B2 concept judgment when the gate is on) to compose the title and body — Step E is the pre-apply coverage audit and must run before the body is returned.

## Step 5: Apply and report

**Description-only mode** — print the title and body. Stop.

**Full workflow** — with a valid capsule allowing `pr_create` or `pr_edit`,
write the body to a temporary file and apply it with `gh pr create` or
`gh pr edit`. Verify the returned PR URL, base, head, state, and head SHA. If
the capsule does not authorize the required PR operation, print the draft and
stop held.

**Existing PR** (full workflow, found in Step 1) — update or push only when the
capsule names the repository-qualified PR number/URL and exact head SHA and
authorizes the exact operation.

**Description update mode, or existing-PR rewrite requested** — preview and
stop unless the capsule authorizes `pr_edit` for that exact PR.

Name the next required TraceWeaver review, traceability check, or human
publication decision.

---

## Optional authorized merge

Merge is outside the branch/commit/push/PR capsule. Require a new post-PR merge
capsule whose only operation is `merge` and which names the repository-qualified
PR number/URL, expected base/head, exact head SHA, and approved merge method.
Immediately before merging, validate that capsule and verify that the PR is
open, non-draft, mergeable, has no requested changes, and every required check
is successful. Use only the capsule's merge method, then verify the PR is merged
and record the merge commit. If the merge triggers CI/CD or deployment, verify
that downstream outcome separately; report `verification blocked` rather than
implying success when it cannot be observed.
