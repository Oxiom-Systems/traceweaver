# Shipping Workflow

This file contains the upstream CE shipping workflow (Phase 3-4). In
TraceWeaver packaged mode it is reference material only unless a controlled
TraceWeaver publication route has already authorized the exact publication
target.

## TraceWeaver Packaged Alpha Hold

Do not stage files, create commits, push branches, open or update PRs, mutate
remotes, load `ce-commit`, or load `ce-commit-push-pr` from this reference
unless the controlled TraceWeaver publication route has already passed
authority, traceability, verification, review, staged-tree, credential, remote,
and human-confirmation gates for that exact target.

When this file is consulted without that publication authorization, use Phase 3
only to prepare a held publication handoff: changed files, validation performed,
known residuals, trace evidence, proposed commit/PR text, and held claims.
Return control to `tw-work` or `tw-auto` before any external mutation.

## Phase 3: Quality Check

1. **Run Core Quality Checks**

   Always run before submitting:

   ```bash
   # Run full test suite (use project's test command)
   # Examples: bin/rails test, npm test, pytest, go test, etc.

   # Run linting (per the project's configured lint command / active instructions)
   # Use linting-agent before the held publication handoff
   ```

2. **Simplify** (conditional — separate from code review)

   Before code review, invoke **`ce-simplify-code`** when the diff is non-mechanical and large enough to benefit (default: **>=30 changed lines**). Skip when the diff is purely mechanical (formatting, dependency bumps, lint-only fixes, generated artifacts).

   This step refines reuse, quality, and efficiency on the **current diff** so any later review sees cleaner code. It is not a substitute for code review.

   Pass `plan:<path>` or a scope hint when the plan or user narrowed what changed. If the skill is unavailable on the harness, skip or do a brief manual pass for obvious duplicate/dead code — code review (step 3) still runs regardless.

3. **Code Review**

   Review the diff with **`ce-code-review`** — the plugin's portable review skill — as the single path. It self-right-sizes (a lite roster for small, low-risk, code-only diffs; the full roster otherwise), so there is no "escalate to a heavier reviewer" decision and **no harness-specific review detection** — it behaves identically on every harness. (This replaces the former Tier 1 harness-native `/review` / Tier 2 escalation split: the size and sensitive-surface judgment that used to live here now lives inside `ce-code-review`'s own reviewer selection and small-diff gate.)

   **Skip dedicated review only for a purely mechanical diff** — formatting, dependency-version bumps, lint-only fixes, generated artifacts (the same class step 2 skips for simplify). Note in the shipping summary: `Code review: skipped (mechanical diff)`. Everything else gets reviewed.

   **Review is not fix — two steps:**

   **3a. Review (read-only).** Invoke `ce-code-review` with `mode:agent` (add `plan:<path>` when known; `base:<ref>` when the diff base is resolved). Pass **`depth:full`** when the plan, the task, or the user explicitly asked for a full / deep / thorough review — that is the one escalation signal `ce-code-review` cannot infer from the diff alone. Do not pass `mode:autofix`. Parse the JSON.

   **2b. Apply fixes (caller-owned).** Load `references/review-findings-followup.md`: filter on JSON, batch by file, dispatch fix subagents. Orchestrator integrates diffs without staging or committing, tests, and records the proposed publication boundary. Then proceed to the Residual Work Gate.

   **If `ce-code-review` cannot run at all** — subagent dispatch unavailable, unauthenticated, or hard-capped, returning `status: failed`/`degraded` with no coverage even after its own sequential Fallback: in an **interactive** session, run the harness-native review if one exists (e.g. `/review`) and fix inline; in a **non-interactive** session (autonomous pipeline, or no native review available), skip the dedicated step, note `Code review: skipped (ce-code-review unavailable)`, and add an explicit manual diff scan to Final Validation. Never silently ship a non-mechanical change with no review of any kind.

4. **Residual Work Gate** (REQUIRED when `ce-code-review` ran and left actionable residuals)

   After code review and review-findings followup, inspect the **Actionable Findings** summary (or read the absolute `<artifact-path>` returned by `ce-code-review` if the summary was truncated). If one or more actionable `downstream-resolver` findings were not applied in followup, do not proceed to Final Validation until they are resolved or durably recorded.

   **Non-interactive / autonomous sessions (no human can answer — e.g. an `lfg`-style pipeline or a headless run):** do **not** call the blocking tool — that would hang the pipeline. After step 3b auto-applied every mechanically-eligible finding, take the `Accept and proceed` path automatically: record the remaining actionable residuals to a durable sink and continue to Final Validation. When a PR will be created or updated, that sink is the PR description's Known Residuals section. On the no-PR path, file them via `references/tracker-defer.md` in non-interactive mode — one tracker ticket per finding, with enough background to action it standalone; any findings the tracker chain could not durably file — its `failed` or `no_sink` buckets — fall to `docs/residual-review-findings/<branch-or-head-sha>.md` as the last resort so none are dropped. Residuals are recorded, never dropped — this keeps autonomous shipping unblocked without losing findings.

   A settlement-invalidating conflict — evidence a `session-settled:`-labeled decision cannot work — is never auto-accepted as a residual; it is a blocker (`status: blocked` return in return-to-caller mode; stop-and-surface in standalone runs).

   After Tier 2 code review and review-findings followup, inspect the **Actionable Findings** summary (or read the run artifact at `<temporary CE code-review artifact root>/<run-id>/` if the summary was truncated). If one or more actionable `downstream-resolver` findings were not applied in followup, do not proceed to Final Validation until the user decides how to handle them.

   Ask the user using the platform's blocking question tool (`AskUserQuestion` in Claude Code with `ToolSearch select:AskUserQuestion` pre-loaded if needed, `request_user_input` in Codex, `ask_question` in Antigravity CLI (`agy`), `ask_user` in Pi (requires the `pi-ask-user` extension)). Fall back to numbered options in chat only when the harness genuinely lacks a blocking tool. Never silently skip the gate.

   Stem: `Code review left N actionable finding(s) not yet fixed. How should the agent proceed?`

   Options (four or fewer, self-contained labels):
   - `Apply/fix now` — load `references/review-findings-followup.md`, dispatch batched fix subagents for remaining eligible findings, run tests, and record the changed files plus proposed commit text; optionally re-run `ce-code-review` only after the diff changed materially.
   - `File tickets via project tracker` — load `references/tracker-defer.md` in Interactive mode; the agent files tickets in the project's detected tracker (or `gh` fallback, or leaves them in the report if no sink exists) and proceeds to Final Validation only when tracker mutation is authorized by the active workflow.
   - `Accept and proceed` — record the residual findings verbatim in a durable "Known Residuals" sink before the held publication handoff. If a later controlled PR route is approved, include them in the PR description's "Known Residuals" section. If a later no-PR commit path is approved, create `docs/residual-review-findings/<branch-or-head-sha>.md`, include the accepted findings and source review-run context, and mention the file path in the final summary. The user has acknowledged the risk, but the findings must not live only in the transient session.
   - `Stop — do not ship` — abort the shipping workflow. The user will handle findings manually before re-invoking.

   Skip this gate entirely when the review reported `Actionable findings: none.` (and followup applied everything mechanical) or when only Tier 1 was used. Do not proceed past this gate on an `Accept and proceed` decision until the agent has recorded the durable sink that a later controlled publication route would use.

5. **Final Validation**
   - All tasks marked completed
   - Testing addressed -- tests pass and new/changed behavior has corresponding test coverage (or an explicit justification for why tests are not needed)
   - Linting passes
   - Code follows existing patterns
   - Figma designs match (if applicable)
   - No console errors or warnings
   - If the plan has a `Requirements` section (or legacy `Requirements Trace`), verify each requirement is satisfied by the completed work
   - If any `Deferred to Implementation` questions were noted, confirm they were resolved during execution

6. **Prepare Operational Validation Plan** (REQUIRED)
   - Draft a `## Post-Deploy Monitoring & Validation` section for the later PR description when a controlled PR route is approved.
   - Include concrete:
     - Log queries/search terms
     - Metrics or dashboards to watch
     - Expected healthy signals
     - Failure signals and rollback/mitigation trigger
     - Validation window and owner
   - If there is truly no production/runtime impact, still include the drafted section with: `No additional operational monitoring required` and a one-line reason.

## Phase 4: Held Publication Handoff

1. **Prepare Validation Context**

   Do not try to launch a dedicated CE evidence-capture workflow. Modern harnesses provide their own browser, screenshot, terminal recording, and artifact capture tools; use those directly only when the user asks or when the artifact already exists.

   Note whether the completed work has observable behavior (UI rendering, CLI output, API/library behavior with a runnable example, generated artifacts, or workflow output), and summarize any manual validation performed. If the user supplied evidence (URL, markdown embed, local artifact path), include it in the held publication handoff for the later controlled PR route.

2. **Prepare Controlled Publication Handoff**

   Do not load `ce-commit-push-pr` or `ce-commit` from TraceWeaver packaged
   `ce-work` unless the controlled TraceWeaver publication route has already
   authorized that exact target. Instead, prepare the publication handoff for
   `tw-work` or `tw-auto`.

   Handoff context should include:
   - The plan's summary and key decisions
   - Testing notes (tests added/modified, manual testing performed)
   - Evidence context from step 1
   - Figma design link (if applicable)
   - The Post-Deploy Monitoring & Validation section (see Phase 3 Step 6)
   - Any "Known Residuals" accepted in the Phase 3 Residual Work Gate, rendered as a dedicated section with severity, file:line, and title per finding
   - Exact changed-file list and proposed commit/PR text
   - Held claims and required next TraceWeaver gate

   If the user later prefers to commit without creating a PR, route through the
   TraceWeaver-controlled `tw-commit` wrapper instead of loading raw CE commit
   tooling from this reference.

3. **Notify User**
   - Summarize what was completed
   - State that no PR was created by this held handoff
   - Note any follow-up work needed
   - Suggest next steps if applicable

## Quality Checklist

Before controlled publication handoff, verify:

- [ ] All clarifying questions asked and answered
- [ ] All tasks marked completed
- [ ] Testing addressed -- tests pass AND new/changed behavior has corresponding test coverage (or an explicit justification for why tests are not needed)
- [ ] Linting passes (use linting-agent)
- [ ] Code follows existing patterns
- [ ] Figma designs match implementation (if applicable)
- [ ] Validation/evidence context is recorded for the later controlled publication route when the change has observable behavior
- [ ] Proposed commit messages follow conventional format
- [ ] Draft PR description context includes Post-Deploy Monitoring & Validation section (or explicit no-impact rationale)
- [ ] Simplify: `ce-simplify-code` when diff >=30 lines (or skipped with reason)
- [ ] Code review: Tier 1 completed, or Tier 2 when escalated, or skipped (no Tier 1 + Tier 2 criteria not met — note in summary)
- [ ] Draft PR description context includes summary, testing notes, and evidence when captured
- [ ] Any later PR badge/attribution is left to the controlled publication route

## Code Review Tiers

## Code Review

Single portable path: **`ce-code-review`** self-sizes (lite roster for small low-risk code-only diffs, full roster otherwise). No harness-native review detection, no escalation tiers — the size/sensitive-surface judgment lives inside `ce-code-review` now.

**Skip** only for a purely mechanical diff (formatting, dep-bumps, lint-only, generated). Everything else is reviewed.

**Two steps — review is not fix.** (3a) Review-only via `mode:agent`; add `depth:full` when the plan/task/user explicitly asked for a deep review. (3b) Batched fix subagents per `references/review-findings-followup.md`; residuals → Residual Work Gate.

**If `ce-code-review` can't run** (no subagent dispatch): interactive → harness-native review if present, fix inline; non-interactive → skip-with-note + manual diff scan in Final Validation. Never silently ship a non-mechanical change unreviewed.
