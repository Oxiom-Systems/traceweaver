---
name: tw-auto
description: TraceWeaver-controlled autonomous alpha workflow. Use when you want CE-style plan/work/review iteration with Intent Contract, authority, traceability, verification, and stop-before-commit controls.
argument-hint: "[feature description or plan path]"
disable-model-invocation: true
---

# TraceWeaver Auto

## Purpose

Run a bounded CE-style engineering loop while preserving TraceWeaver authority
control. This alpha is advisory and static: it coordinates the workflow,
bootstraps missing authority files for new projects, records trace evidence, and
stops before commit, push, or PR creation.

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

- `ce-plan`
- `tw-authority-gate`
- `ce-work`
- `tw-traceability-check`
- `ce-code-review`
- `ce-doc-review`

If any required skill is unavailable as a TraceWeaver-packaged entry in the
host's available-skills list, stop and report the missing skill as an
install/package gap. Do not fall back to an external raw CE path, globally
installed CE plugin, or unlisted skill name.

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
3. Confirm the current baseline ID, baseline hash, requirements authority, and
   Intent Contract authority.
4. Run or create the planning step using the resolved selected CE-compatible
   planning skill (`ce-plan`) and keep the plan bounded to approved authority.
5. Run the resolved `tw-authority-gate` before implementation.
6. If authority is missing, stop and create a gap, change, exception candidate,
   accepted-risk candidate, or clarification record. Do not implement from an
   assumption.
7. Run implementation using the resolved selected CE-compatible work skill
   (`ce-work`) only in TraceWeaver controlled no-publication mode and only while
   authority remains clear. Pass the authority capsule, verification target,
   matrix-update requirement, and the explicit instruction that `ce-work` must
   not stage files, create commits, push, open PRs, update plan status to
   completed, or load `ce-commit`, `ce-commit-push-pr`, or Phase 4 shipping.
8. After each meaningful work cycle, update:
   - `.traceweaver/trace-records/<task-or-run-id>-trace.yml`
   - `traceability-matrix.md`
   - loop-state evidence shaped by the skill-local
     `references/automation-loop-state-template.yml` when a run record is
     created
9. Run the resolved `tw-traceability-check` before claiming work/review
   completion.
10. Run the resolved relevant CE-compatible review skill:
   - `ce-code-review` for code-like skill, script, policy, manifest, validation,
     runtime, or behavior-bearing changes;
   - `ce-doc-review` for requirements, plans, docs, evidence, and matrix
     changes.
11. During review, apply the reviewer subagent capacity rules above so pending
    reviewer personas are queued, completed agents are closed, and capacity
    backpressure is reported instead of mistaken for success.
12. Classify findings with the severity policy in the skill-local
    `references/traceweaver-controlled-autonomy-policy.md`.
13. Continue review-fix cycles only while:
    - authority remains clear;
    - verification can pass;
    - matrix and trace records can be updated;
    - no repeated blocking finding or no-progress state occurs;
    - the review-fix cycle budget is not exceeded.
14. Stop before commit, push, or PR creation. Report the evidence status and the
    next command, review, or human decision required.

## Stop Conditions

Stop immediately when any of these are true:

- no approved requirement or approved exception authorizes the change;
- stakeholder intent or validation question is missing;
- required authority files cannot be found or bootstrapped;
- a meaningful behavior-bearing unit cannot be linked to authority and
  verification evidence;
- behavior appears useful or logical but no approved requirement captures it;
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
- commit, push, PR, release, clean-replacement, slash-command, enforcing-mode,
  or runtime-equivalence claims would be required to proceed.

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
- suggested next step.

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
