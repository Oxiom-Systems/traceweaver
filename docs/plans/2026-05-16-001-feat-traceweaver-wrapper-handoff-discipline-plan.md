---
title: "feat: TraceWeaver wrapper handoff discipline"
type: feat
status: implemented_static_code_review_passed_status_hash_doc_review_passed
date: 2026-05-16
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3
---

<!-- TRACEWEAVER: file-role=wrapper-handoff-discipline-plan; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=wrapper-handoff-discipline-plan; req=REQ-TW-056; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Wrapper Handoff Discipline Plan

## Summary

TraceWeaver wrappers already embed lower authority, requirements, and
traceability gates in the normal flow. In practice, some wrapper outputs still
recommend standalone lower gates such as `tw-authority-gate`,
`tw-requirements-review`, or `tw-traceability-check` as the next user action
when a higher-level wrapper should own that gate internally.

This plan makes next-step discipline explicit: user-facing TraceWeaver skills
must recommend the highest-level executable wrapper for the user's current
workflow. Standalone lower gates remain available only for explicit diagnostics,
audit runs, baseline-authority review, or when the user directly asks for that
specific gate.

## Operating Mode

Mode: Implementation Gate Mode planning.

Requirements-quality preflight: satisfied by existing reviewed authority for
REQ-TW-052, REQ-TW-056, REQ-TW-057, and REQ-TW-061. This plan does not create a
new requirement and must not broaden runtime, publication, release, replacement,
or CE-body-edit authority.

If implementation discovers that the lower-gate semantics themselves must
change, or that a wrapper needs new authority beyond the accepted requirements
listed below, pause for `tw-requirements-review` before continuing.

## Authority Capsule

Accepted baseline:

- Baseline ID: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`

Primary requirements:

- `REQ-TW-052`: user-facing CE-derived workflows must route through
  TraceWeaver wrappers with authority preflight, traceability, verification,
  held claims, and publication boundaries.
- `REQ-TW-056`: `tw-auto` must own the full work, trace, review, repair, and
  stop loop so users do not manually alternate worker and review commands.
- `REQ-TW-057`: operating modes must prevent broad review-record churn while
  preserving authority, traceability, review-staging, and publication gates.
- `REQ-TW-061`: every user-facing `tw-*` skill must carry task-scoped guidance
  and systems-engineering knowledge.

Related requirements:

- `REQ-TW-054`: code/test trace anchors and traceability findings remain part
  of the implementation closure loop.
- `REQ-TW-058`: ambiguous per-artifact anchor mappings are skipped, reported by
  traceability findings, and do not stop unrelated unambiguous work.
- `REQ-TW-059`: CE-derived components are internal implementation engines only;
  users enter through TraceWeaver-owned wrappers.

Reserved proof chain for this implementation:

- Artifact: `ART-TW-060`
- Trace: `TRACE-TW-046`
- ATP: `ATP-TW-030`
- Result: `RESULT-TW-030`
- Verification: `VER-TW-059`

Validation question:

Can each user-facing TraceWeaver wrapper return a concrete highest-level next
command that advances or stops the workflow without sending users into manual
lower-gate cycling, while still preserving explicit standalone diagnostics and
baseline-authority review paths?

## Problem Frame

The current product behavior is close but still leaky:

- `tw-plan`, `tw-work`, `tw-code-review`, `tw-doc-review`, and `tw-auto` embed
  the lower gates, but outputs can still suggest running those lower gates
  manually as the next action.
- In Vestro dogfood, this shows up as results that diagnose an authority gap and
  then say "run `tw-authority-gate`" or "run `tw-requirements-review`" instead
  of giving the exact next wrapper command that will record or repair the
  authority state.
- Users then have to interpret the system-engineering route themselves, which
  defeats the purpose of TraceWeaver as the orchestration surface.

The fix is not to remove lower gates. The fix is to make them internal to the
right wrapper by default and make standalone lower-gate suggestions exceptional
and explicit.

## Required Behavior

### Highest-Level Next Wrapper Rule

Every user-facing `tw-*` skill output must end with an executable next command
or an explicit held condition.

For normal work:

- Multi-step task, plan, or bug loop: recommend `/tw-auto ...`.
- Bounded approved implementation patch: recommend `/tw-work ...`.
- Code or behavior review only: recommend `/tw-code-review ...`.
- Requirements, plan, matrix, Intent Contract, or evidence acceptance: recommend
  `/tw-doc-review ...`.
- Commit, push, PR, or publication: recommend `/tw-commit-push-pr ...` only
  after publication gates are explicitly in scope.

Standalone lower gates are allowed as the next command only when:

- the user explicitly asked for that gate;
- the run is a diagnostic dry run;
- the run is an audit or baseline-authority review;
- implementation is not authorized and the only safe next action is a
  requirements-quality or baseline-authority review.

Even in those cases, the output must say why the lower gate is standalone.

### Embedded Gate Contract

The higher wrappers must own these lower checks:

- `tw-plan` owns requirements-quality preflight before packaged `ce-plan`.
- `tw-work` owns authority preflight, trace-anchor authoring, scanner checks,
  verification, and review-staging handoff before packaged `ce-work` output is
  treated as reviewable work.
- `tw-code-review` owns `tw-traceability-check` before packaged
  `ce-code-review`.
- `tw-doc-review` owns requirements-review and trace/hash/status consistency
  checks when applicable before packaged `ce-doc-review`.
- `tw-auto` owns the end-to-end loop: authority, work, trace anchors,
  traceability check, code review, doc review when changed, bounded repairs,
  review recording, and stop conditions.

### Output Contract

Wrapper outputs must not end with vague instructions such as:

- "resolve the authority gap";
- "fix the requirements";
- "run the appropriate gate";
- "run `tw-authority-gate` then `tw-work`" for normal implementation work.

They must instead end with a concrete command, for example:

```text
Next step:
/tw-auto implement the bounded notification-kind taxonomy fix, preserving the
accepted baseline and stopping for any requirement change.
```

Or:

```text
Next step:
/tw-work to record REQ-VESTRO-RUNTIME-009 in REQUIREMENTS.md,
.traceweaver/intent-contract.yml, and traceability-matrix.md, then run scoped
/tw-doc-review for the baseline/status update.
```

If the correct action is to stop, the output must state:

- stop reason;
- held claims;
- exact missing authority or decision;
- the one next command or human decision that can unblock it.

## Implementation Units

### U1: Shared Handoff Policy

Create or update a TraceWeaver-owned handoff policy reference that defines:

- highest-level next wrapper rule;
- embedded lower-gate contract;
- standalone lower-gate exceptions;
- exact-command output template;
- stop/held output template;
- examples for TraceWeaver and Vestro dogfood.

The policy must be reachable from callable skill roots, not only from a
plugin-level reference path that direct-callable skill copies may not resolve.

Expected files:

- `plugins/traceweaver-core/skills/tw-auto/references/traceweaver-wrapper-handoff-discipline.md`
- skill-local copies or resolver-backed references for other dependent
  user-facing wrappers, as needed.

### U2: Wrapper Prompt Updates

Update user-facing wrappers so their Output or Gate sections enforce the
highest-level command rule.

Primary targets:

- `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- `plugins/traceweaver-core/skills/tw-plan/SKILL.md`
- `plugins/traceweaver-core/skills/tw-work/SKILL.md`
- `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`
- `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`
- `plugins/traceweaver-core/skills/tw-debug/SKILL.md`
- `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md`
- `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md`
- `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md`

Secondary wrapper surfaces should be updated if their output contracts can
recommend lower gates directly.

Do not edit packaged CE-derived component bodies. Any change to CE-derived
content requires an explicit reviewed overlay/fork record under REQ-TW-059 and
is out of scope for this plan.

### U3: Deterministic Handoff Fixtures

Extend `scripts/traceweaver-smoke-tw-skill-behavior` with deterministic
fixtures that fail when normal wrapper outputs recommend standalone lower gates
instead of the highest-level next wrapper.

Required positive fixtures:

- `tw-debug` bounded behavior issue returns `/tw-auto ...` or `/tw-work ...`,
  not standalone `tw-authority-gate`.
- `tw-plan` accepted unchanged authority returns `/tw-work ...` or
  `/tw-auto ...`, not standalone `tw-requirements-review`.
- `tw-work` completed implementation returns `/tw-code-review ...`, not
  standalone `tw-traceability-check`.
- `tw-code-review` clean result returns `/tw-work record ...` or the next
  scoped `/tw-doc-review ...` when authority/status files changed.
- `tw-doc-review` clean result returns `/tw-work record ...`, not another
  broad doc review.
- `tw-auto` blocked authority result returns the next highest wrapper or exact
  human decision, not only "fix authority".

Required exception fixtures:

- explicit diagnostic request may recommend `/tw-authority-gate`;
- explicit audit request may recommend `/tw-traceability-check`;
- explicit baseline-authority review may recommend `/tw-requirements-review`.

The smoke should report structured fields such as:

- `wrapper_handoff_discipline=pass`;
- `lower_gate_suggestions_normal_flow=0`;
- `standalone_lower_gate_exception_cases=pass`;
- `next_command_executable=pass`.

### U4: Trace Anchors And Matrix Rows

Add or refresh coarse anchors and Code Anchor Evidence rows for changed
wrapper skill files, handoff policy references, fixtures, and smokes.

Use accepted unambiguous mappings:

- requirement: `REQ-TW-052`, `REQ-TW-056`, `REQ-TW-057`, and `REQ-TW-061`
  as applicable;
- trace: `TRACE-TW-046`;
- verification: `VER-TW-059`;
- proof chain: `ART-TW-060`, `ATP-TW-030`, `RESULT-TW-030`, `VER-TW-059`.

If any file-level mapping is ambiguous, skip that anchor write and let
`tw-traceability-check` emit a structured finding. Do not invent requirements,
trace IDs, verification IDs, or artifact roles.

### U5: Verification And Review

Required local verification:

- `scripts/traceweaver-smoke-tw-skill-behavior`
- `plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors`
  on changed behavior-bearing files and linked fixtures/smokes
- `git diff --check`

Required reviews:

- Scoped `tw-code-review` passed as
  `TW-CODE-REVIEW-2026-05-16-WRAPPER-HANDOFF-DISCIPLINE-CLEAN-001` for the
  TraceWeaver wrapper handoff discipline policy, wrapper prompt updates,
  deterministic handoff fixtures, smoke updates, Code Anchor Evidence rows, and
  ART-TW-060 / TRACE-TW-046 / ATP-TW-030 / RESULT-TW-030 / VER-TW-059 proof
  rows.
- `/tw-doc-review scoped only to the wrapper handoff discipline status/hash
  update` when authority/status/hash files change.

## Acceptance Criteria

- Normal wrapper outputs recommend the highest-level executable next wrapper.
- Lower gates are described as embedded checks inside higher wrappers, not as
  the normal user-facing next action.
- Standalone `tw-requirements-review`, `tw-authority-gate`, and
  `tw-traceability-check` recommendations appear only in explicit diagnostic,
  audit, or baseline-authority review cases.
- All normal stop states include exact blocker, held claims, and the next
  command or human decision.
- Deterministic smokes fail on lower-gate cycling regressions.
- Code Anchor Evidence links changed wrapper and fixture files to
  `REQ-TW-052`, `REQ-TW-056`, `REQ-TW-057`, or `REQ-TW-061` through
  `TRACE-TW-046` and `VER-TW-059`.

## Held Claims

This plan does not prove or authorize:

- full runtime-driver decision binding;
- publication, commit, push, PR, or release;
- clean replacement;
- Vestro dogfood completion;
- unconstrained-host support;
- CE-derived body edits without reviewed overlay/fork records;
- autonomous handling of every future authority contradiction.

## Suggested Next Step

Next safe step: treat wrapper handoff active-host filesystem/hash currentness as
reviewed after `TW-CODE-REVIEW-2026-05-16-WRAPPER-HANDOFF-ACTIVE-HOST-CURRENTNESS-CLEAN-001`
and `TW-DOC-REVIEW-2026-05-16-WRAPPER-HANDOFF-ACTIVE-HOST-CURRENTNESS-STATUS-HASH-CLEAN-001`;
move next to the runtime-driver decision-binding boundary only if that proof can
bind decisions to the loaded `tw-auto` identity.

Keep runtime invocation, publication, Vestro, release/package/upstream readiness,
clean replacement, R31, and unconstrained-host claims held until separate proof
closes those gates.
