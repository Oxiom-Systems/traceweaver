---
name: ce-work
description: Execute a plan or concrete work prompt end-to-end. Use when implementing from docs/plans, a spec path, or a clear build request; use ce-debug for open-ended bugs. Standalone use owns the shipping tail; outer orchestrators pass `mode:return-to-caller [implementation_engine:<compact-json>] [implementation_run:<safe-id>] <plan path>` for implementation, recovery, and local verification only.
argument-hint: "[Plan path, work description, or recovery request with run id; blank uses latest] | [mode:return-to-caller [implementation_engine:<compact-json>] [implementation_run:<safe-id>] <plan path> for outer orchestrators]"
---

<!-- TRACEWEAVER: file-role=manual-continuity-worker-skill; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->

# Work Execution Command

## Outcome

## TraceWeaver Package Boundary

When this `ce-work` skill is installed by the TraceWeaver plugin, direct
invocation is a legacy/manual-continuity surface and must still run in
TraceWeaver publication-gated mode for the current alpha. It is not, by itself,
a TraceWeaver-authority-enforced workflow, and it cannot close TraceWeaver
authority, traceability, verification, validation, commit, push, or PR gates
without the controlled TraceWeaver publication route passing.

For TraceWeaver-controlled implementation, use `tw-auto`, which routes the
implementation phase through `tw-work`. Direct `ce-work` is only the underlying
compatibility worker and should not be the user-facing TraceWeaver work-loop
surface. If manually composing the sequence, run:

```text
tw-authority-gate
-> tw-work
-> ce-work no-publication implementation engine
-> tw-traceability-check
-> ce-code-review / ce-doc-review
```

Before changing meaningful behavior in TraceWeaver-controlled work, load the
project root `requirements.md`, `.traceweaver/intent-contract.yml`, and
`traceability-matrix.md`. If approved authority, validation intent, or required
verification evidence is missing, stop and create or recommend a gap, change,
exception, accepted-risk candidate, or clarification record. Do not treat a plan,
bare prompt, task ID, or agent interpretation as authority by itself.

If the user explicitly asks for legacy/manual CE work anyway, proceed only in
publication-gated mode. State in the output that the work does not close
TraceWeaver authority, traceability, verification, validation, commit, push, or
PR gates until `tw-authority-gate`, matrix updates, `tw-traceability-check`, and
the controlled TraceWeaver publication route pass.

### TraceWeaver Controlled Publication-Gated Mode

When this skill is installed by TraceWeaver, enter publication-gated mode before
Phase 0 for every invocation. The implementation phase remains non-publishing;
publication can only happen later through the controlled TraceWeaver publication
route:

- use only the native inline/subagent implementation path in the current alpha;
  cross-model/external unit-workspace execution is packaged as provenance but
  held and machine-refused because its commit/ref-based controller has not been
  adapted to TraceWeaver's publication capsule boundary;
- keep the authority capsule, approved requirements/exceptions, validation
  question, verification target, and matrix-update requirement visible while
  working;
- implement and test only the authorized behavior;
- update trace evidence or report the exact trace gap before claiming completion;
- do not stage files, create commits, push, open PRs, create issues, update plan
  status to `completed`, or load `ce-commit`, `ce-commit-push-pr`, or Phase 4
  shipping instructions unless the controlled TraceWeaver publication route
  authorizes that specific target after authority, traceability, verification,
  review, staged-tree, credential, and remote-boundary checks pass;
- do not allow subagents to stage, commit, push, or publish during
  implementation, even in isolated worktrees;
- after implementation, tests, trace updates, and review handoff are complete,
  return control to `tw-work` or `tw-auto` with changed files, verification
  evidence, matrix status, open gaps, held claims, and the next required review
  or human decision.

If any later instruction in this skill or its references conflicts with
TraceWeaver publication-gated mode, the TraceWeaver boundary wins and the
publication step is skipped unless the controlled publication route has already
authorized it.

The cross-model execution, unit-workspace, wave, resume, and fallback
instructions retained in the imported CE references are inactive upstream
provenance in this package. Do not invoke `cross-model-work.sh` or
`unit-workspace.py` for new work. Use native inline/subagent execution and
return verified local changes to the TraceWeaver caller.

## Introduction

This command takes a work document (plan or specification) or a bare prompt describing the work, and executes it systematically. The focus is on **shipping complete features** by understanding requirements quickly, following existing patterns, and maintaining quality throughout.

## Input Document

The **input document** for this run is the input this skill was invoked with — present in the current prompt or conversation, whether the user provided it directly or a calling skill passed it (e.g. `lfg` in `mode:pipeline`, which passes a plan path). It may be a plan or spec path, a `mode:` token followed by a path, or a bare work prompt. The rest of this skill refers to it as `<input_document>`; if nothing was provided, treat `<input_document>` as blank.

Invocation origin is not observable or relevant: apply the same source-resolution rules whether the user invoked `ce-work` explicitly or the host selected it automatically.

## Execution Workflow

**Bundled reference loading is fail-closed.** Resolve every bundled reference or script path named below from this skill's loaded `SKILL.md` directory, using the skill full path supplied by the harness; never glob the target repository to find a bundled file. If the harness does not expose that directory or a required file cannot be read, stop before the action governed by it and report the missing reference instead of approximating the protocol or continuing natively.

### Phase 0: Input Triage

**Recovery activation comes first.** Before normal plan, path, blank-input, or bare-prompt classification, interpret whether the user is semantically asking to resume, inspect status, reap, or clean up an existing external implementation run and has supplied its run id. This is intent recognition, not verb-only matching. Validate the id with the controller's safe-id contract: `^[A-Za-z0-9._-]{1,128}$` and at least one non-period character. When this direct recovery intent is present, read `references/cross-model-execution.md`, use that run id as authoritative for the requested controller operation, and return the observed state or blocker. Recovery must not dispatch a new worker, select a new route, fall through to latest-plan discovery, or run either shipping tail. When every unit is already cleaned, **completed recovery is read-only reconciliation**: Do not rerun test, build, format, install, generation, or `verify-run`; report the stored unit and plan-wide verification receipts. If recovery intent is clear but the run id is missing, request the id instead of guessing or classifying the text as new work.

**Otherwise, parse a leading mode token.** If `<input_document>` begins with `mode:return-to-caller` (or the legacy aliases `mode:caller-owned-tail` / `caller:lfg`), strip that token before anything else and enter **Return-to-Caller Mode** (see § Return-to-Caller Mode) — implement and locally verify only, then return the structured envelope instead of running the standalone shipping tail. Before the plan path, accept up to two optional carriers in this fixed order: first one compact JSON object prefixed exactly `implementation_engine:`, then one run id prefixed exactly `implementation_run:`. The engine object remains the typed caller binding and must contain exactly `mode`, `target`, `model`, and `source` with the types and values defined in `references/execution-engines.md`; the run carrier is accepted only for return-to-caller recovery and must satisfy the safe-id contract above. Reject malformed JSON, missing/extra fields, an unsafe run id, or a duplicate carrier. The entire remaining string is the plan path. A mode token or carrier with no following path is an error; report it instead of treating control data as a bare prompt. Without either optional carrier, the original `mode:return-to-caller <plan-path>` form is unchanged and standing configuration remains eligible.

When `implementation_run:<safe-id>` is present, recovery wins over ordinary input classification: read `references/cross-model-execution.md`, use `resume --run-id <safe-id>` as the authoritative entrypoint, and return the normal Return-to-Caller envelope after reconciliation. Preserve the supplied `implementation_engine` binding when present. Do not resolve a different route, redispatch, reimplement, rerun completed verification, or start another caller tail.

When a valid `implementation_engine:` binding is present without recovery, **pre-controller discovery is read-only**. Do not run baseline, test, build, format, install, or generation commands in the canonical checkout before resolving the binding and initializing the external controller: those commands can create ignored or untracked artifacts before the controller records its clean starting point. Limit triage to reads such as metadata, source, configuration, branch, status, and command-availability probes. If a non-read probe is genuinely required to decide whether the route can start, run it only with artifact suppression and prove the canonical Git snapshot is byte-for-byte unchanged before continuing; otherwise stop with a route blocker.

**Resolve a session-carried plan before blank or bare-prompt classification.** When the current request is continuation language such as "proceed" and the conversation identifies exactly one current plan/spec path that was authored, selected, or accepted for this work, treat that path as `<input_document>`. If multiple session plans are plausible, ask which one; do not choose by recency. Do not replace a concrete new work request with an unrelated earlier plan. This rule depends only on visible conversation state, never on whether invocation was explicit or automatic.

**Every non-recovery code path must resolve its implementation engine before execution.** Once metadata or prompt triage identifies code work, but before reading active implementation units, creating tasks, writing files, or committing, read `references/execution-engines.md` and perform its route-resolution gate. This applies with or without an `implementation_engine:` carrier: inspect `.compound-engineering/config.local.yaml` when it exists, because standing configuration remains eligible in both standalone and carrierless Return-to-Caller Mode. Do not choose inline/native execution until that gate has ruled out or validly exhausted the applicable higher-authority routes.

Determine how to proceed based on what was provided in `<input_document>` (after any mode token is stripped).

**Plan document** (input is a file path to an existing plan or specification): read the plan's metadata first — YAML frontmatter for a markdown plan, or the visible header text for an HTML plan (both formats carry the same fields).

- If it carries `artifact_contract: ce-unified-plan/v1`, classify `artifact_readiness` before reading the body.
  - `artifact_readiness: requirements-only` -> stop and tell the user this Product Contract needs `ce-plan` enrichment before implementation. Offer the exact `ce-plan <plan-path>` handoff.
  - `artifact_readiness: implementation-ready` plus `execution: code` -> continue to Phase 1 using the unified-plan reader strategy below.
  - Any other readiness value or any non-code/unclassified execution mode -> do not auto-execute as code. Route `execution: knowledge-work` to the non-code carve-out; otherwise ask the user to return to `ce-plan` to produce an implementation-ready code plan.
  - Progress-like values (`active`, `in_progress`, `completed`, `done`) are invalid readiness values. Stop and ask for plan repair rather than guessing.
- If it carries `execution: knowledge-work`, this is a **non-code plan** — read `references/non-code-execution.md` and follow that carve-out instead of the rest of this workflow.
- Otherwise (legacy plan, field absent, or `execution: code`) -> continue to Phase 1 and run the normal code lifecycle.

**Blank invocation latest-plan discovery:** when `<input_document>` is blank, glob `docs/plans/*.md` and `docs/plans/*.html`, inspect metadata for the newest candidates, and only auto-select a plan that is `artifact_readiness: implementation-ready` plus `execution: code` or a legacy code plan. Stop instead of silently executing when the newest matching artifact is requirements-only, `execution: knowledge-work`, an approach-plan, or an unclassified universal/answer-seeking output. Ask for an explicit path or a `ce-plan` enrichment step. **Superseded sibling:** if a requirements-only candidate has a same-basename file in the other format (`<basename>.md` / `<basename>.html`) that is `implementation-ready`, a format conversion left the requirements-only copy stale — select the implementation-ready sibling and execute it rather than stopping.

**Bare prompt** (input is a description of work, not a file path):

1. **Scan the work area**

   - Identify files likely to change based on the prompt
   - Find existing test files for those areas (search for test/spec files that import, reference, or share names with the implementation files)
   - Note local patterns and conventions in the affected areas

2. **Assess complexity and route**

   | Complexity | Signals | Action |
   |-----------|---------|--------|
   | **Trivial** | 1-2 files, no behavioral change (typo, config, rename) | Proceed to Phase 1 step 2 (environment setup), skip only the task list, then run step 4's mandatory engine-resolution gate before implementing directly — no unit execution loop. Apply Test Discovery if the change touches behavior-bearing code |
   | **Small / Medium** | Clear scope, under ~10 files | Build a task list from discovery. Proceed to Phase 1 step 2 |
   | **Large** | Cross-cutting, architectural decisions, 10+ files, touches auth/payments/migrations | Inform the user this would benefit from `ce-brainstorm` or `ce-plan` to surface edge cases and scope boundaries. Honor their choice. If proceeding, build a task list and continue to Phase 1 step 2 |

   Do not treat an unclear prompt as external-worker authority. If discovery cannot state a concrete goal, bounded scope, and authoritative verification, clarify or route to `ce-plan` before any cross-model egress.

---

### Phase 1: Quick Start

1. **Read Plan and Clarify** _(skip if arriving from Phase 0 with a bare prompt)_

   - For unified plans, size your read. A short plan (lightweight or requirements-only, a screen or two) can be read in full. For a long implementation-ready plan, do **not** read the whole document first — it is expensive and unnecessary. Build a section map, then read only what the active unit needs: metadata, then `Goal Capsule`, `Verification Contract`, `Definition of Done`, the `Implementation Units` heading list, and only the active U-ID section plus referenced R/F/AE/KTD excerpts. Read appendices or unrelated U-IDs only when the active unit cites them. To build the map: in **markdown** scan headings (`rg -n '^#{1,3} ' <plan>` — top-level sections plus `### U<N>.` units); in **HTML** scan the `<h1>`–`<h3>` heading elements and their anchor ids. Match on the stable section names / unit IDs (`Goal Capsule`, `Verification Contract`, `### U<N>.`, …), ignoring HTML wrapper tags — not on a format-specific pattern.
   - For legacy plans, read the work document completely. Both formats (`.md`, `.html`) carry the same section names and IDs; HTML just wraps them in semantic elements (`<section>`, `<article>`, etc.).
   - Treat the plan as a decision artifact, not an execution script
   - If the plan includes sections such as `Implementation Units`, `Work Breakdown`, `Requirements` (or legacy `Requirements Trace`), `Files`, `Test Scenarios`, or `Verification`, use those as the primary source material for execution
   - Check for `Execution note` on each implementation unit — these carry the plan's natural-language execution direction for that unit (for example, start from failing proof, characterize legacy behavior, or prefer smoke/runtime verification). Note them when creating tasks, but do not reduce them to keyword matching.
   - Check for a `Deferred to Implementation` or `Implementation-Time Unknowns` section — these are questions the planner intentionally left for you to resolve during execution. Note them before starting so they inform your approach rather than surprising you mid-task
   - Check for a `Scope Boundaries` section — these are explicit non-goals. Refer back to them if implementation starts pulling you toward adjacent work
   - Review any references or links provided in the plan
   - If the user explicitly asks for TDD, test-first, characterization-first execution, or a specific verification style in this session, honor that direction even if the plan has no `Execution note`
   - If anything is unclear or ambiguous, ask clarifying questions now
   - If clarifying questions were needed above, get user approval on the resolved answers. If no clarifications were needed, proceed without a separate approval step — plan scope is the plan's authority, not something to renegotiate
   - **Do not skip this** - better to ask questions now than build the wrong thing
   - **Do not edit the plan body during execution.** The plan is a decision artifact; progress lives in task state, verification evidence, trace records, and the final held-publication handoff, not the plan. `ce-work` does not mutate the plan — whether it shipped is derived from the later controlled TraceWeaver publication route, not recorded in the doc. Legacy plans may contain `- [ ]` / `- [x]` marks on unit headings or a `status:` field — ignore them as state; per-unit completion is determined during execution by reading the current file state.

2. **Setup Environment**

   First, check the current branch:

   ```bash
   current_branch=$(git branch --show-current)
   default_branch=$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@')

   # Fallback if remote HEAD isn't set
   if [ -z "$default_branch" ]; then
     default_branch=$(git rev-parse --verify origin/main >/dev/null 2>&1 && echo "main" || echo "master")
   fi
   ```

   **If already on a feature branch** (not the default branch):

   First, check whether the branch name is **meaningful** — a name like `feat/crowd-sniff` or `fix/email-validation` tells future readers what the work is about. Auto-generated worktree names (e.g., `worktree-jolly-beaming-raven`) or other opaque names do not.

   If the branch name is meaningless or auto-generated, suggest renaming it before continuing:
   ```bash
   git branch -m <meaningful-name>
   ```
   Derive the new name from the plan title or work description (e.g., `feat/crowd-sniff`). Present the rename as a recommended option alongside continuing as-is.

   Then ask: "Continue working on `[current_branch]`, or create a new branch?"
   - If continuing (with or without rename), proceed to step 3
   - If creating new, follow Option A or B below

   **If on the default branch**, choose how to proceed:

   **Option A: Create a new branch**
   ```bash
   git pull origin [default_branch]
   git checkout -b feature-branch-name
   ```
   Use a meaningful name based on the work (e.g., `feat/user-authentication`, `fix/email-validation`).

   **Option B: Use a worktree (recommended for parallel development)**
   ```bash
   skill: ce-worktree
   # Ensures isolation: detects an existing worktree, prefers the harness's
   # native worktree tool, else creates one from the default branch
   ```

   **Option C: Continue on the default branch**
   - Requires explicit user confirmation
   - Only proceed after user explicitly says to continue on `[default_branch]`
     under TraceWeaver no-publication mode
   - Never stage, commit, push, or publish directly from `ce-work`

   **Recommendation**: Use worktree if:
   - You want to work on multiple features simultaneously
   - You want to keep the default branch clean while experimenting
   - You plan to switch between branches frequently

3. **Create Task List** _(skip if Phase 0 already built one, or if Phase 0 routed as Trivial)_
   - Use the platform's task-tracking capability when available (`TaskCreate`/`TaskUpdate`/`TaskList` in Claude Code, `update_plan` in Codex, or the equivalent on other harnesses) to break the plan into actionable tasks. If none is available, continue normally without simulating a task list in chat
   - Derive tasks from the plan's implementation units, dependencies, files, test targets, and verification criteria
   - When the plan defines U-IDs for Implementation Units, name each task from a brief, outcome-led form of the unit's Goal and append the stable U-ID (e.g., "Add parser coverage (U3)"). Never use a bare U-ID or lead with the identifier; the user should understand the work before the traceability label. Aim for five words or fewer before the ID
   - When the full unit list is visible, do not repeat ordinal counts such as "unit 1 of 5" in every task. Add an ordinal only when the harness exposes the current task without the surrounding list and the count materially improves orientation
   - Carry each unit's `Execution note` into the task when present
   - For each unit, read the `Patterns to follow` field before implementing — these point to specific files or conventions to mirror
   - Use each unit's `Verification` field as the primary "done" signal for that task
   - Do not expect the plan to contain implementation code, micro-step TDD instructions, or exact shell commands
   - Include dependencies between tasks
   - Prioritize based on what needs to be done first
   - Include testing and quality check tasks
   - Keep tasks specific and completable

4. **Choose Execution Engine, then Strategy**

   **Route resolution is a mandatory pre-write gate.** Before any implementation write, native worker dispatch, or implementation commit, read `references/execution-engines.md`; inspect applicable live/session/project intent, any typed caller binding, and `.compound-engineering/config.local.yaml` when it exists; then resolve and record the engine. Do not infer native execution merely because no typed carrier was supplied. Native is eligible only after this gate finds no higher-authority cross-model selection or exhausts a `prefer` route under the reference's fallback contract.

   First pick the **engine** that runs implementation: inline/subagent, goal-mode, dynamic-workflow, or cross-model execution. When no applicable live intent, typed caller binding, or enabled standing configuration selects cross-model execution, native execution remains the default inline/subagent path. Goal-mode and dynamic-workflow remain limited to implementation-ready unified code plans and are usable only when the host exposes a callable primitive for them — Codex exposes `create_goal` (a skill can start a goal directly), while Claude Code exposes no goal tools, so on Claude Code they are prompt-emission only (never invoked from inside this skill). Prefer dynamic-workflow over goal-mode for large fan-out plans (many independent U-IDs, codebase-wide sweeps, migrations, adversarial cross-checking). The loaded reference defines authority-and-scope route resolution, the ordered standing preference contract, host-capability probe, plan-shape selection table, copyable goal-mode/`ultracode:` prompts, and resume-tail rules. An engine choice never changes tail ownership — after implementation, resume standalone quality gates in normal use, or return the return-to-caller envelope when invoked by `lfg`. Legacy and bare-prompt code work otherwise use the inline/subagent engine directly.

   If and only if cross-model execution is selected, you must read `references/cross-model-execution.md` before any repository content, bounded mutation authority, or other material crosses the fixed route. That reference defines the fixed-route transaction, controller commands, failure stops, and receipts. Do not approximate it with an ordinary subagent dispatch.

   **A successful controller `init` locks that unit to the selected cross-model engine.** From that point, advance it through the controller protocol or return blocked with its recovery path. Never reclassify it as trivial, abandon it for speed, or implement it natively unless the protocol later returns an explicit fallback authorization.

   For a bare prompt with no resolved plan, the loaded reference requires a private **bounded implementation brief** before controller initialization: synthesize only the concrete request, discovered scope, acceptance/verification, inherited constraints, exclusions, and conservative unit breakdown. Do not send raw conversation history. If those fields cannot be populated without guessing, do not egress; return to Phase 0 clarification or planning. This bridge is identical for explicit and automatically selected invocations.

   For the inline/subagent engine, **prefer subagents for any structured multi-unit plan** — each worker gets a fresh context window for one unit. **Parallelize independent units whenever it is safe**; fall back to serial only when parallel isn't safe or the harness can't isolate concurrent writes. Let the plan's `Dependencies` and `Files` drive batching: run an independent dependency layer together, then the next.

   **TraceWeaver subagent constraints** — apply in every isolation mode:
   - Instruct each subagent: "Do not stage files (`git add`), create commits,
     push branches, publish, or open/update PRs. Return changed files,
     verification performed, and any unresolved gaps to the orchestrator."
   - In shared-directory fallback, also instruct subagents not to run the full
     project test suite concurrently. The orchestrator handles combined
     validation after each batch.
   - With worktree isolation active, subagents may run their unit's targeted
     tests inside the isolated worktree, but they still must not stage, commit,
     push, or publish. Any branch created by the harness is an implementation
     workspace only, not a publication branch.

   **Permission mode:** Omit the `mode` parameter when dispatching subagents so the user's configured permission settings apply. Do not pass `mode: "auto"` — it overrides user-level settings like `bypassPermissions`.

   **After each subagent completes (serial mode):**
   1. Review the subagent's diff — verify changes match the unit's scope and `Files:` list
   2. Run the relevant test suite to confirm the tree is healthy
   3. If tests fail, diagnose and fix before proceeding — do not dispatch dependent units on a broken tree
   4. Update the task list (do not edit the plan body — progress is carried by the task state and held-publication handoff)
   5. Dispatch the next unit

   **After all parallel subagents in a batch complete (worktree-isolated mode):**
   1. Wait for every subagent in the current parallel batch to finish.
   2. For each completed subagent, in dependency order: review the worktree's
      diff against the orchestrator's branch. Do not stage or commit inside the
      subagent worktree.
   3. Integrate accepted changes only as an uncommitted diff in the orchestrator
      workspace using harness-supported no-commit patch integration, or rerun
      the unit serially in the orchestrator workspace when patch integration is
      unsafe. Do not merge subagent branches or create merge commits from
      `ce-work`.
   4. After each accepted integration, run the relevant test suite. If tests
      fail, diagnose and fix before integrating the next unit.
   5. Update the task list; progress is carried by changed files, verification
      evidence, and held-publication handoff entries.
   6. After integration, remove each subagent's worktree and delete its branch
      only when doing so will not discard unintegrated work. Use the absolute
      path and branch name returned in the subagent's result.
      - Unlock the worktree first — the harness locks per-subagent worktrees: `git worktree unlock <absolute-path>`
      - Remove the worktree: `git worktree remove <absolute-path>`
      - Delete the branch: `git branch -d <branch-name>` (the branch outlives the worktree by default and accumulates as orphans if not cleaned up; `-d` lowercase refuses to delete unmerged branches, which is the safety we want — if it fails, investigate before forcing)
   7. Dispatch the next batch of independent units, or the next dependent unit.

   **After all parallel subagents in a batch complete (shared-directory fallback):**
   1. Wait for every subagent in the current parallel batch to finish before acting on any of their results
   2. Cross-check for discovered file collisions: compare the actual files modified by all subagents in the batch (not just their declared `Files:` lists). Subagents may create or modify files not anticipated during planning — this is expected, since plans describe *what* not *how*. A collision only matters when 2+ subagents in the same batch modified the same file. In a shared working directory, only the last writer's version survives — the other unit's changes to that file are lost. If a collision is detected, keep non-colliding changes as uncommitted work and re-run the affected units serially for the shared file so each builds on the other's current work.
   3. For each completed unit, in dependency order: review the diff, run the relevant test suite, and record the changed files plus proposed commit boundary in the held-publication handoff. Do not stage or commit.
   4. If tests fail after a unit's changes, diagnose and fix before moving to the next unit.
   5. Update the task list (do not edit the plan body — progress is carried by task state, changed files, and verification evidence)
   6. Dispatch the next batch of independent units, or the next dependent unit

### Phase 2: Execute

1. **Task Execution Loop**

   For each task in priority order:

   ```
   while (tasks remain):
     - Mark task as in-progress
     - Read any referenced files from the plan or discovered during Phase 0
     - **If the unit's work is already present and matches the plan's intent** (files exist with the expected capability, or the unit's `Verification` criteria are already satisfied by the current code), the work has likely shipped on a prior branch or session. Verify it matches, mark the task complete, and move on. Do not silently reimplement.
     - Look for similar patterns in codebase
     - Find existing test files for implementation files being changed (Test Discovery — see below)
     - Implement following existing conventions
     - Add, update, or remove tests to match implementation changes (see Test Discovery below)
     - Run System-Wide Test Check (see below)
     - Run tests after changes
     - Assess testing coverage: did this task change behavior? If yes, were tests written or updated? If no tests were added, is the justification deliberate (e.g., pure config, no behavioral change)?
     - Mark task as completed
    - Evaluate for an incremental checkpoint (see below)
   ```

   When a unit carries an `Execution note`, honor it. For test-first units, write the failing test before implementation for that unit. For characterization-first units, capture existing behavior before changing it. For units without an `Execution note`, proceed pragmatically.

   Guardrails for execution posture:
   - Do not write the test and implementation in the same step when working test-first
   - Do not skip verifying that a new test fails before implementing the fix or feature
   - Do not over-implement beyond the current behavior slice when working test-first
   - Skip test-first discipline for trivial renames, pure configuration, and pure styling work

   **Test Discovery** — Before implementing changes to a file, find its existing test files (search for test/spec files that import, reference, or share naming patterns with the implementation file). When a plan specifies test scenarios or test files, start there, then check for additional test coverage the plan may not have enumerated. Changes to implementation files should be accompanied by corresponding test updates — new tests for new behavior, modified tests for changed behavior, removed or updated tests for deleted behavior.

   **Per-harness integration (examples — the universal flow above is the contract):**
   - **Harness-owned worktree/branch:** integrate one branch in dependency order, verify, and commit before the next; on conflict abort and re-run or explicitly resolve that unit against the advanced tree.
   - **Harness-owned uploaded change set:** accept one isolated result, inspect and verify it, commit it canonically, then release the worker before the next result.
   - **Shared workspace:** no parallel batch is permitted; use the serial path.
   - **External cross-model workspace:** follow the conditionally loaded cross-model parallel-wave protocol and controller receipts; ordinary branch-merge shortcuts do not apply.

#### Phase 2 continuation: Incremental checkpoints

Before implementing the first task, you must read `references/implementation-loop.md`. Follow that reference for every task's evidence choice, implementation, verification, and completion stops before moving to incremental commits.

2. **Incremental Checkpoints**

   After completing each task, evaluate whether to record an incremental
   checkpoint for the later controlled publication route:

   | Record a checkpoint when... | Don't record a checkpoint when... |
   |----------------|---------------------|
   | Logical unit complete (model, service, component) | Small part of a larger unit |
   | Tests pass + meaningful progress | Tests failing |
   | About to switch contexts (backend → frontend) | Purely scaffolding with no behavior |
   | About to attempt risky/uncertain changes | Would need a "WIP" commit message |

   **Heuristic:** "Can I write a proposed commit message that describes a complete, valuable change? If yes, record the boundary. If the message would be 'WIP' or 'partial X', wait."

   If the plan has Implementation Units, use them as a starting guide for later
   commit boundaries — but adapt based on what you find during implementation. A
   unit might need multiple later commits if it's larger than expected, or small
   related units might land together. Use each unit's Goal to inform the
   proposed commit message.

   **Checkpoint workflow:**
   1. Verify tests pass (use the project's test command).
   2. Record the files related to this logical unit.
   3. Draft a conventional proposed commit message, e.g.
      `feat(scope): description of this unit`.
   4. Keep files unstaged and uncommitted. Commit creation belongs to the later
      controlled TraceWeaver publication route.

   **Handling integration conflicts:** If conflicts arise while integrating
   parallel work, resolve them immediately or rerun the affected unit serially.
   Incremental checkpoints make conflict review easier because each proposed
   boundary is small and focused.

   **Note:** Incremental checkpoints use clean proposed conventional messages without attribution footers. The later controlled publication route decides final commit/PR attribution.

   **Parallel subagent mode:** Publication remains held in every isolation mode
   (see Phase 1 Step 4):
   - **Worktree-isolated:** subagents return diffs and verification evidence;
     they do not stage, commit, push, or publish.
   - **Shared-directory fallback:** subagents return changed files and
     verification notes; the orchestrator records proposed commit boundaries
     after the batch completes without staging or committing.

3. **Follow Existing Patterns**

   - The plan should reference similar code - read those files first
   - Match naming conventions exactly
   - Reuse existing components where possible
   - Follow the project's coding standards already in your context
   - When in doubt, grep for similar implementations

4. **Test Continuously**

   - Run relevant tests after each significant change
   - Don't wait until the end to test
   - Fix failures immediately
   - Add new tests for new behavior, update tests for changed behavior, remove tests for deleted behavior
   - **Unit tests with mocks prove logic in isolation. Integration tests with real objects prove the layers work together.** If your change touches callbacks, middleware, or error handling — you need both.

5. **Simplify as You Go**

   After completing a cluster of related implementation units (or every 2-3 units), review recently changed files for simplification opportunities — consolidate duplicated patterns, extract shared helpers, and improve code reuse and efficiency. This is especially valuable when using subagents, since each agent works with isolated context and can't see patterns emerging across units.

   Don't simplify after every single unit — early patterns may look duplicated but diverge intentionally in later units. Wait for a natural phase boundary or when you notice accumulated complexity.

   If **`ce-simplify-code`** is available, invoke it at phase boundaries (especially before Phase 3 when the diff is >=30 lines). Otherwise, review the changed files yourself for reuse and consolidation opportunities.

   When the plan carries `session-settled:`-labeled KTDs, pass the plan path as structure-pin context, not as the simplification scope, with the one-line constraint that labeled KTDs are structure pins the simplification must preserve (e.g., deliberate duplication stays duplicated).

6. **Figma Design Sync** (if applicable)

   For UI work with Figma designs:

   - Implement components following design specs
   - Read `references/agents/figma-design-sync.md` and dispatch a generic subagent seeded with that local prompt to compare implementation against the Figma design. Do not dispatch a standalone agent by type/name.
   - Fix visual differences identified
   - Repeat until implementation matches design

7. **Frontend Design Guidance** (if applicable)

   For UI tasks without a Figma design -- where the implementation touches view, template, component, layout, or page files, creates user-visible routes, or the plan contains explicit UI/frontend/design language:

   - Apply the frontend guidance embedded in this skill and the active repo instructions: preserve existing design-system conventions, use real UI controls and states, keep layouts responsive, and verify text does not overflow or overlap.
   - When browser tooling is available, inspect the changed UI at desktop and mobile widths before final validation. If no browser access is available, do a code-level responsive/layout review and record that browser verification was unavailable.
   - Phase 4's screenshot capture still applies when the change is user-visible.

8. **Track Progress**
   - Keep the task list updated as you complete tasks
   - Note any blockers or unexpected discoveries
   - Create new tasks if scope expands
   - Keep user informed of major milestones
   - When the plan defines U-IDs for Implementation Units, or the plan or origin document carries stable R-IDs (and optionally A/F/AE IDs), reference them in blockers, deferred-work notes, task summaries, and final verification — not routine status updates. U-IDs anchor units across plan edits; R/A/F/AE anchor product intent across the brainstorm-plan handoff. Use the IDs the plan supplies and do not invent ones it does not. This preserves traceability without burying signal under noise.

### Phase 3-4: Quality Check and Held Publication Handoff

When all Phase 2 tasks are complete and execution transitions to quality check,
continue in TraceWeaver no-publication mode. Do not read or load
`references/shipping-workflow.md`, `ce-commit`, or `ce-commit-push-pr` unless a
controlled TraceWeaver publication route has already authorized that exact
target. The shipping workflow remains upstream CE reference material only.

**Code review tiers:** Tier 1 when the harness has built-in review. Tier 2 only when the escalation criteria below match — not because Tier 1 is missing.

**Review is two steps — review, then fix.** `ce-code-review` is review-only. It returns findings (markdown or `mode:agent` JSON); it never edits the checkout, commits, or applies fixes.

When Tier 2 applies:

1. **Review** — Invoke the `ce-code-review` skill (invocation command in `references/review-findings-followup.md` § Fallback). Use `mode:agent` in orchestrated workflows; pass `plan:<path>` when you have a plan and `base:<ref>` when the merge base is already known.
2. **Apply fixes** — Load `references/review-findings-followup.md`. Filter eligibility on JSON only, **batch applicable findings by file**, dispatch fix subagents (parallel when file sets are disjoint). The orchestrator integrates diffs without staging or committing, runs tests, and records the changed files and proposed publication handoff — it does not pre-investigate findings.
3. **Residual Work Gate** — Only after followup; unresolved actionable findings go through the held residual-work gate described by the TraceWeaver publication handoff.

Tier 1 harness-native review may still fix inline; Tier 2 always separates review from apply.

## Return-to-Caller Mode

`mode:return-to-caller [implementation_engine:<compact-json>] [implementation_run:<safe-id>] <plan-path>`
(legacy alias: `mode:caller-owned-tail`) is reserved for TraceWeaver-controlled
orchestrators such as `tw-auto` that own the later review and publication gates.
In this mode `ce-work` performs implementation and local verification only,
including mid-implementation simplification, then returns a structured summary
without reading the standalone shipping workflow or creating commits.

Return:

- `status`: `complete`, `blocked`, or `failed`
- `plan_path`
- `changed_files`
- `u_ids_attempted`
- `u_ids_completed`
- `verification_results`
- `verification_evidence`: one entry per attempted behavior-bearing unit, plus
  any non-behavioral unit where tests were intentionally skipped; include
  existing tests inspected, tests added or changed, RED/characterization
  evidence when applicable, verification commands/results, and any exception
- `implementation_engine_binding`: resolved one-run mode, target, model, and
  source, or `null` for native execution
- `requested_route` and `actual_route`
- `requested_model` and receipt-attributed `actual_model`, or `unverified`
- `fallback_reason`
- `run_id`
- `source_kind` and `source_digest`
- `unit_receipts`: route, model, isolated process, integration, verification,
  uncommitted-change, and cleanup state for each attempted unit
- `plan_checkpoint`: always `null` in TraceWeaver no-publication mode
- `blockers`
- `recovery_path`
- `settled_decision_conflicts`
- `behavior_change`
- `standalone_shipping_skipped: true`
- `publication_state: held_uncommitted`

Return `status: complete` only when behavior-bearing work has verification
evidence or a deliberate approved exception. Engine selection through
`references/execution-engines.md` still applies, but only for implementation.
The selected engine must return verified uncommitted changes; it must not
commit, advance refs, open a PR, or run the caller-owned publication tail.

## Key Principles

### Start Fast, Execute Faster

- Get clarification once at the start, then execute
- Don't wait for perfect understanding - ask questions and move
- The goal is to **finish the feature**, not create perfect process

### The Plan is Your Guide

- Work documents should reference similar code and patterns
- Load those references and follow them
- Don't reinvent - match what exists
- A KTD carrying a `session-settled:` annotation (classes `user-directed` / `user-approved`) records a decision the user already made — it is not yours to improve. This scopes to labeled KTDs only: details the plan leaves open remain your judgment, and a real defect discovered inside a settled approach is still surfaced at full strength — the label never suppresses defect evidence. If implementation reveals a labeled decision is invalidating-grade unworkable (infeasible, wrong-thing, destructive), that is a genuine blocker: surface it rather than silently working around or "fixing" the decision

### Test As You Go

- Run tests after each change, not at the end
- Fix failures immediately
- Continuous testing prevents big surprises

### Quality is Built In

- Follow existing patterns
- Write tests for new code
- Run linting before the held publication handoff
- Review when Tier 1 is available or Tier 2 criteria match; keep publication held

### Finish Complete Features

- Mark all implementation tasks ready for review before moving on
- Don't leave features 80% done
- A complete, verified handoff beats an incomplete implementation with a
  premature publication claim

## Common Pitfalls to Avoid

- **Analysis paralysis** - Don't overthink, read the plan and execute
- **Skipping clarifying questions** - Ask now, not after building wrong thing
- **Ignoring plan references** - The plan has links for a reason
- **Testing at the end** - Test continuously or suffer later
- **Forgetting to track progress** - Update task status as you go or lose track of what's done
- **80% done syndrome** - Finish the feature, don't move on early
- **Skipping review without reason** — Use Tier 1 when available; escalate to Tier 2 only on the criteria above; document when both are skipped
- **Re-scoping the plan into human-time phases** - The plan's Implementation Units define the scope of execution. Do not estimate human-hours per unit, propose multi-day breakdowns, or ask the user to pick a subset of units for "this session". Agents execute at agent speed, and context-window pressure is addressed by subagent dispatch (Phase 1 Step 4), not by phased sessions. If a plan-file input is genuinely too large for a single execution, say so plainly and suggest the user return to `/ce-plan` to reduce scope — don't invent session phases as a workaround. For bare-prompt input, Phase 0's Large routing already handles oversized work
