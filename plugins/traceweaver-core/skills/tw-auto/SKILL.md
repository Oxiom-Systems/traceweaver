---
name: tw-auto
description: TraceWeaver-controlled autonomous alpha workflow. Use when you want CE-style plan/work/review/publication iteration with Intent Contract, authority, traceability, verification, and publication-route controls.
argument-hint: "[feature description or plan path]"
disable-model-invocation: true
---

<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-056; trace=TRACE-TW-031; ver=VER-TW-040 -->
<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-056; trace=TRACE-TW-042; ver=VER-TW-054 -->
<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-056; trace=TRACE-TW-045; ver=VER-TW-057 -->
<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-056; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Auto

## Purpose

Run a bounded CE-style engineering loop while preserving TraceWeaver authority
control. This alpha is advisory and static: it coordinates the workflow,
bootstraps missing authority files for new projects, records trace evidence, and
defaults to stopping before publication unless the controlled TraceWeaver
publication route explicitly passes.

Use `tw-auto` instead of `lfg` when the work must preserve stakeholder intent,
approved requirements, traceability, verification, validation questions, and
next-step handoffs.

The goal is to preserve the useful CE rhythm while adding TraceWeaver authority:
idea and brainstorm produce reviewed requirements, plans/work/reviews cite
authority, and every meaningful behavior-bearing unit updates trace evidence or
is routed as dark behavior, a proposed requirement, a gap, a change, an
exception, an accepted risk, a clarification, or a removal candidate.

## Required Authority Inputs

Before planning or implementation, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/trace-anchor-authoring.md` when behavior-bearing code
  or verification artifacts are changed
- skill-local `references/traceweaver-wrapper-handoff-discipline.md`
- relevant task capsule, gap, change, or exception records under `.traceweaver/`

If `requirements.md` or `.traceweaver/intent-contract.yml` is missing, enter
authority bootstrap mode before planning or implementation:

1. Summarize the user's request into stakeholder needs, candidate requirements,
   assumptions, exclusions, risks, validation questions, and open decisions.
   Redact secrets, credentials, personal data, private file paths, proprietary
   transcript text, and unrelated project details before writing root authority
   files. Do not copy raw chat, session, transcript, or private source material
   into likely tracked files.
2. Ask for human confirmation before creating or overwriting root
   `requirements.md`, `traceability-matrix.md`, or
   `.traceweaver/intent-contract.yml`. If confirmation is unavailable, stop and
   report a bootstrap gap instead of writing files.
3. Create a root `requirements.md` draft baseline from the redacted summary and
   the skill-local `references/requirements-baseline-template.md` bundled with
   `tw-auto`.
4. Create `.traceweaver/intent-contract.yml` from the draft baseline and the
   skill-local `references/intent-contract-template.yml` bundled with
   `tw-auto`.
5. Create a root `traceability-matrix.md` from the draft baseline and Intent
   Contract using the skill-local
   `references/traceability-matrix-bootstrap-template.md` bundled with
   `tw-auto`.
6. Store any raw prompt/source material only in an explicitly private ignored
   evidence location or external record chosen by the user; never persist it in
   public docs, PR bodies, issues, or root authority files.
7. Stop with suggested next step: run `tw-requirements-review`, then review or
   approve the baseline before implementation.

If only `traceability-matrix.md` is missing, create a bootstrap matrix from the
project's accepted `requirements.md` and `.traceweaver/intent-contract.yml`
before implementation starts, then run `tw-traceability-check` before continuing.

## Skill Resolution

Before invoking any workflow skill, resolve its name against the host
available-skills list. The accepted resolution must be the TraceWeaver-packaged
entry for that skill, whether the host exposes it as a bare name or a
plugin-scoped/namespaced name. Do not guess a bare short name if the host exposes
a plugin-scoped or namespaced entry.

Required resolutions:

- `tw-brainstorm`
- `tw-plan`
- `tw-authority-gate`
- `tw-work`
- `tw-traceability-check`
- `tw-debug`
- `tw-code-review`
- `tw-doc-review`
- `tw-compound`
- `tw-compound-refresh`
- `tw-resolve-pr-feedback`
- `tw-sessions`
- `tw-test-browser`
- `tw-test-xcode`
- `tw-setup`
- `tw-worktree`

Publication intent must resolve TraceWeaver-owned publication wrappers before
any CE publication engine is considered:

- `tw-commit`
- `tw-commit-push-pr`

If any required skill is unavailable as a TraceWeaver-packaged entry in the
host's available-skills list, stop and report the missing skill as an
install/package gap. Do not fall back to an external raw CE path, globally
installed CE plugin, or unlisted skill name.

`tw-plan` may delegate to the TraceWeaver-packaged `ce-plan` engine after it
loads authority and requirements are plan-ready. `tw-auto` must not invoke raw
`ce-plan` directly as the planning wrapper.

Source-evidence, learning, session, verification, setup, worktree, and PR
feedback routes must also use TraceWeaver wrappers. `tw-brainstorm` delegates
to packaged `ce-brainstorm` as source evidence; `tw-compound` and
`tw-compound-refresh` delegate to packaged learning engines without approving
authority changes; `tw-sessions` delegates to packaged `ce-sessions` and may
use hidden/internal packaged `ce-session-inventory` and `ce-session-extract`
helpers; `tw-test-browser` and `tw-test-xcode` produce linked verification
evidence through packaged CE test engines; `tw-setup` and `tw-worktree` keep
host and git mutation local/held; and `tw-resolve-pr-feedback` handles local
feedback repair while remote mutation and publication remain routed through
controlled publication wrappers.

## Reviewer Subagent Capacity

When a resolved review skill dispatches reviewer subagents, manage reviewer
capacity as part of the TraceWeaver loop instead of treating capacity errors as
review completion.

- Before starting review, record the intended reviewer set and the host's
  observed active-agent limit when it can be discovered.
- Dispatch reviewers with bounded parallelism. Keep undispatched reviewers in a
  pending queue rather than dropping them.
- If dispatch returns an active-agent or thread-limit error such as
  "agent thread limit reached", classify it as backpressure. Do not mark that
  reviewer as failed and do not claim the review is clean.
- When a reviewer completes, collect its findings, close that reviewer agent if
  the host exposes an agent-close action, then start the next pending reviewer.
- Continue until every intended reviewer is completed, explicitly skipped by a
  human decision, or the host cannot free capacity after completed reviewers are
  closed.
- If capacity cannot be freed, stop the automation before commit, push, PR, U9,
  runtime, or release claims. Report partial review coverage, the reviewers that
  completed, reviewers still pending, and the exact capacity blocker.
- Main-thread fallback is allowed only as degraded evidence. It must be labeled
  as degraded coverage and cannot close a gate that requires the missing
  reviewer persona. A human may accept the limitation only by recording an
  explicit limitation or held condition with owner, scope, affected gate, and
  next review condition; that acceptance does not close U9, runtime, release, or
  required-review gates.

## Workflow

1. Read the request and identify the intended stakeholder outcome.
2. Load or bootstrap the required authority files.
3. Classify the run as Authority Baseline Mode, Implementation Gate Mode, or
   Publication Mode using the skill-local operating-mode policy. Pause for
   human clarification when requirements are unclear, contradictory,
   incomplete, missing, or require material authority change.
4. Confirm the current baseline ID, baseline hash, requirements authority, and
   Intent Contract authority.
5. Run or create the planning step using the resolved TraceWeaver planning
   wrapper (`tw-plan`) and keep the plan bounded to approved authority. The
   wrapper may delegate to packaged `ce-plan` only after TraceWeaver authority
   and requirements-quality preflight pass or are explicitly held.
6. When the request needs ideation, session history, learning capture, PR
   feedback repair, setup, worktree creation, browser verification, or Xcode
   verification, route through `tw-brainstorm`, `tw-sessions`, `tw-compound`,
   `tw-compound-refresh`, `tw-resolve-pr-feedback`, `tw-setup`, `tw-worktree`,
   `tw-test-browser`, or `tw-test-xcode` instead of raw CE skills.
7. Run the resolved `tw-authority-gate` before implementation.
8. If authority is missing, stop and create a gap, change, exception candidate,
   accepted-risk candidate, or clarification record. Do not implement from an
   assumption.
9. Run implementation using the resolved TraceWeaver implementation worker
   (`tw-work`) only in TraceWeaver controlled publication-gated mode and only
   while authority remains clear. `tw-work` may invoke the TraceWeaver-packaged
   `ce-work` coding engine, but `tw-auto` must treat `tw-work` as the work-loop
   owner for authority visibility, trace-anchor authoring, verification,
   matrix-evidence updates, and no-publication handoff. Pass the authority
   capsule, verification target, matrix-update requirement, changed-file scope,
   and the explicit instruction that `tw-work` must run automatic trace-anchor
   authoring before review: scanner on changed behavior-bearing files and linked
   tests/fixtures/smokes, helper-applied source anchors plus matching Code
   Anchor Evidence rows for unambiguous mappings, scanner rerun, verification,
   and review-staging of only the completed work/evidence scope needed for
   coherent `tw-code-review` / `tw-doc-review` handoff. Neither `tw-work` nor
   its underlying `ce-work` step may create commits, push, open PRs, update plan
   status to completed, or load `ce-commit`, `ce-commit-push-pr`, or Phase 4
   shipping unless the controlled TraceWeaver publication route authorizes that
   specific publication target.
10. For changed behavior-bearing implementation or verification artifacts, run
   trace-anchor authoring as part of the work loop: scan changed files, propose
   anchors and Code Anchor Evidence rows, apply only unambiguous mappings in an
   authorized work-loop context, skip per-artifact ambiguous anchor writes while
   recording unresolved mapping candidates, rerun the scanner with those records,
   and pause for human input only when task authority, requirement meaning,
   verification authority, accepted scope, or material authority is unclear,
   contradictory, incomplete, missing, stale, or implies a material authority
   change. Unresolved per-artifact mapping findings must block
   traceability-complete, review acceptance, done, publication, and release
   claims until resolved or explicitly held.
11. After each meaningful work cycle, update:
   - `.traceweaver/trace-records/<task-or-run-id>-trace.yml`
   - `traceability-matrix.md`
   - loop-state evidence shaped by the skill-local
     `references/automation-loop-state-template.yml` when a run record is
     created
12. Unless the user explicitly asked to stop after `tw-work`, continue after
   the `tw-work` handoff and run the resolved `tw-traceability-check` before
   claiming work/review completion.
13. Run the resolved relevant TraceWeaver review wrapper:
   - `tw-debug` for debugging, failing-test, regression, incident, or broken
     behavior investigation. It delegates to TraceWeaver-packaged `ce-debug`
     under no-publication mode and returns changed files, verification evidence,
     traceability status, and held claims back to this loop;
   - `tw-code-review` for code-like skill, script, policy, manifest,
     validation, runtime, or behavior-bearing changes. It must run or require
     `tw-traceability-check` before delegating to `ce-code-review`;
   - `tw-doc-review` for requirements, plans, docs, evidence, and matrix
     changes. It must run or require `tw-requirements-review` for
     requirements/authority text and trace/hash/status consistency checks for
     authority records before delegating to `ce-doc-review`.
14. During review, apply the reviewer subagent capacity rules above so pending
    reviewer personas are queued, completed agents are closed, and capacity
    backpressure is reported instead of mistaken for success.
15. Classify findings with the severity policy in the skill-local
    `references/traceweaver-controlled-autonomy-policy.md`.
16. Continue review-fix cycles only while:
    - authority remains clear;
    - verification can pass;
    - matrix and trace records can be updated;
    - no repeated blocking finding or no-progress state occurs;
    - the review-fix cycle budget is not exceeded.
17. Stop before publication by default. Review-staging a scoped completed work
    set for review identity is allowed under `tw-work`, but commit, push, branch
    creation, or PR create/update actions are publication and may run only
    through the controlled TraceWeaver publication route and the TraceWeaver-owned
    publication wrappers: `tw-commit` for commit intent and `tw-commit-push-pr`
    for push/PR intent. Requirements review is required
    when requirements, authority, validation intent, release claims, or
    publication policy changed; normal code publication does not need a new
    requirements gate when approved authority is unchanged. The publication
    route must prove matrix/trace coherence, verification evidence,
    blocking-review closure, staged-tree identity, explicit target,
    credential/remote boundary, and human confirmation for that target or a
    reviewed Intent Contract publication override. Report the evidence status
    and the next command, review, or human decision required.

## Post-Work Review Closure

`tw-auto` must treat a successful `tw-work` return as a transition, not a
terminal state. In the normal task/plan flow, `tw-auto` continues from
`tw-work` into post-work review closure without asking the user to manually run
the next wrapper command.

After `tw-work` returns changed files, verification evidence, trace-anchor
authoring status, matrix evidence changes, or review-staging output, `tw-auto`
must:

1. Run or require `tw-traceability-check` on the exact changed work package.
2. Run `tw-code-review` when behavior-bearing code, skills, scripts, fixtures,
   tests, manifests, runtime harnesses, or validation surfaces changed.
3. Route repairable code-review findings through one bounded `tw-work` repair
   pass when authority remains clear, then rerun the same scoped review.
4. Record a clean code review once when it passes. Do not rerun clean reviews
   only to polish historical wording.
5. Run scoped `tw-doc-review` only when requirements, plans, matrix, Intent
   Contract, validation evidence, status fields, hash fields, or review-result
   records changed for the current gate.
6. Record a clean scoped doc review once when it passes, then stop clean or
   continue to the next already-approved gate.

The explicit stop override is narrow. If the user says "run only through
tw-work", "stop after implementation", "do not review", or equivalent,
`tw-auto` stops after `tw-work`, reports review as held, and must not claim
done, traceability-complete, review-complete, publication-ready, release-ready,
runtime-equivalent, or clean replacement.

`tw-auto` must stop instead of continuing post-work closure when `tw-work`
reports unclear, missing, contradictory, incomplete, stale, or changed
authority; unresolved P0/P1 traceability findings that need human authority;
failed verification that is not repairable within the bounded cycle; reviewer
capacity or missing skill availability that prevents trustworthy review; or any
next action that would commit, branch, push, open/update a PR, deploy, release,
mutate a remote, or publish. Those actions remain controlled publication route
work only.

## Planned Closure Loop

REQ-TW-056 candidate behavior: `tw-auto` should be the user-facing orchestrator
for a task or plan, not another manual handoff in the
work/review/fix/review chain. When implemented and proven, `tw-auto` should run
the closure loop itself: authority gate, `tw-work`, TraceWeaver-packaged
`ce-work` as the underlying implementation engine,
trace/matrix/evidence updates, `tw-traceability-check`, `tw-code-review`,
`tw-doc-review`, bounded finding repair, refreshed hashes, and final clean or
held-state reporting.

`tw-auto` must not edit, reinterpret, or silently broaden requirements to keep
the loop moving. If requirements are unclear, contradictory, incomplete,
missing, or require a material authority change, pause the loop and ask the
user for clarification or route to requirements review. Resume implementation
only after the authority source, allowed scope, verification method, and
validation question are clear.

Ambiguous per-artifact trace-anchor mappings are not unclear requirements. When
task authority, requirement meaning, verification authority, and accepted scope
are clear, `tw-auto` must let `tw-work` skip that specific anchor mutation,
continue other unambiguous anchors, and require `tw-traceability-check` to report
the unresolved mapping as a blocking `CTA-UNRESOLVED-ANCHOR-MAPPING` structured
finding before review, done, publication, or release claims can pass.

Until deterministic fixtures and runtime proof accept REQ-TW-056, treat this as
a design note only. Do not claim autonomous closure, automatic review repair,
project-level trace writes, publication, clean CE replacement, release
readiness, human-decision pause behavior, or runtime parity from this note.

## Review-Staging Closure Loop

When the current work package has passed implementation verification and
`tw-traceability-check`, but review acceptance is blocked only by artifact
identity, `tw-auto` must keep driving the loop instead of handing the next
command back to the user. Artifact-identity blockers include scoped files that
are untracked, staged files with additional unstaged changes, required review
files missing from the index, stale staged hashes for reviewed artifacts, or a
review target that changed after a clean review was recorded.

For those identity-only blockers, `tw-auto` routes to `tw-work` Review-Staging
Mode with the exact scoped file list and the intended review route. The scoped
file list may contain only files from the current work package: changed
behavior-bearing files, linked tests/fixtures/smokes, `traceability-matrix.md`
Code Anchor Evidence rows, and status/evidence/hash files for the same review
gate. `tw-auto` must then rerun the correct TraceWeaver review wrapper:
`tw-code-review` for code-like skill/script/fixture changes, `tw-doc-review`
for authority/status/hash/evidence changes, or both when both surfaces changed.

If the scoped review passes, `tw-auto` records the clean review once, refreshes
only the required status/hash fields for that gate, asks `tw-work` to
review-stage that exact recording set when needed, and stops clean or proceeds
to the next already-approved gate. If the review returns housekeeping-only
findings, `tw-auto` may perform one bounded repair/record pass and rerun the
same scoped review once. Repeated status churn or no material progress is a
stop condition.

`tw-auto` must not review-stage around real blockers: unclear requirements,
contradictory authority, changed accepted scope, unapproved runtime or
publication claims, unsafe behavior, failed verification, unresolved
traceability blockers, imported CE component body drift, or any finding that
requires requirements review. Those cases stop with the blocking finding and
the exact human or authority decision needed.

## Highest-Level Handoff Discipline

`tw-auto` owns the normal TraceWeaver loop. It must not hand the user a
standalone lower gate as the next action when it can continue through a
higher-level wrapper itself.

When a scoped review passes after an identity-only repair, `tw-auto` continues
to the next approved wrapper step instead of stopping with that command as a
manual instruction. When `tw-work` completes, `tw-auto` continues to
`tw-traceability-check`, `tw-code-review`, and scoped `tw-doc-review` when the
changed files require those reviews.

Normal next commands must be the highest-level executable wrapper:

- `/tw-auto ...` for multi-step task closure;
- `/tw-work ...` for bounded implementation or review-staging repair;
- `/tw-code-review ...` for code-like review;
- `/tw-doc-review ...` for authority/status/hash acceptance;
- `/tw-commit-push-pr ...` only for explicit publication intent after
  publication gates are in scope.

Standalone `tw-requirements-review`, `tw-authority-gate`, or
`tw-traceability-check` may be recommended only when the user explicitly asks
for that diagnostic/audit/baseline gate, or when no higher wrapper can proceed
without a human authority decision. In that case, state why the lower gate is
standalone.

## Stop Conditions

Stop immediately when any of these are true:

- no approved requirement or approved exception authorizes the change;
- stakeholder intent or validation question is missing;
- required authority files cannot be found or bootstrapped;
- a meaningful behavior-bearing unit cannot be linked to authority and
  verification evidence, except that a per-artifact trace-anchor mapping
  ambiguity may be skipped by `tw-work` and surfaced by `tw-traceability-check`
  as a blocking unresolved-mapping finding;
- behavior appears useful or logical but no approved requirement captures it;
- requirements are unclear, contradictory, incomplete, or need a material
  authority change before implementation can continue;
- behavior duplicates or expands existing behavior without authority;
- tests or approved verification fail twice for the same work cycle;
- required reviewer personas remain pending because host agent capacity could
  not be freed;
- P0/P1 review findings remain open;
- a P2 finding affects authority, test coverage, traceability, validation,
  release claims, security, data integrity, or runtime safety;
- the same blocking finding repeats after a fix cycle;
- no material diff or trace update occurs in a fix cycle;
- gap/change/exception/trace-record writes fail;
- unapproved commit, push, PR, release, clean-replacement, slash-command,
  enforcing-mode, or runtime-equivalence claims would be required to proceed.

## Severity Policy

- P0 and P1 always block completion.
- P2 blocks when related to authority, requirements, tests, traceability,
  validation, release claims, security, data integrity, or runtime safety.
- P3 may be recorded as non-blocking debt only when authority is clear,
  verification passed, an owner is named, and the next step is recorded.

## Output

Always return:

- baseline ID and hash used;
- authority status;
- matrix status;
- implementation files changed or proposed;
- verification evidence and result;
- review coverage, including completed reviewers, pending reviewers, skipped
  reviewers, capacity backpressure, and any degraded main-thread fallback;
- validation question carried forward;
- open gaps, dark behavior, held claims, and review findings;
- stop reason or continue reason;
- highest-level next TraceWeaver wrapper command, or the exact human decision
  that blocks continuation.

## Alpha Boundary

The packaged TraceWeaver `lfg` skill is a compatibility alias for `tw-auto`.
It must not run the raw CE autopilot path. Direct selected `ce-*` skills remain
manual-continuity implementation components for alpha, but invoking them does
not close TraceWeaver authority, traceability, verification, or validation gates
by itself.

`tw-auto` and the `lfg` alias must not claim clean CE replacement, enforcing
behavior, slash commands, dynamic discovery, runtime equivalence, release
readiness, or commit/push/PR automation until later evidence gates approve
those claims.
