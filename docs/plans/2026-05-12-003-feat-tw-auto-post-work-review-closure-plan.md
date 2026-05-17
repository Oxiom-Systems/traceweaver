---
title: "feat: tw-auto post-work review closure"
type: feat
status: candidate
date: 2026-05-12
---

# feat: tw-auto post-work review closure

## Summary

`tw-auto` must not stop after `tw-work` when the requested outcome is a
completed TraceWeaver work package. The Vestro NLP-provider dogfood run exposed
the gap clearly: `tw-auto` ran requirements review, plan repair,
`tw-authority-gate`, and `tw-work`, then stopped with "Next step: run
`/tw-code-review`." That is still a manual CE-style handoff loop.

The intended product behavior is:

```text
tw-auto -> tw-requirements-review when needed -> tw-plan when needed ->
tw-authority-gate -> tw-work -> tw-traceability-check -> tw-code-review ->
record clean review or repair findings -> tw-doc-review only when authority,
status, hash, plan, matrix, or evidence files changed -> clean, held, blocked,
or human-decision stop
```

This plan is implementation-gate planning for existing `REQ-TW-056` behavior.
It does not approve new requirements, runtime parity, publication, clean
replacement, Vestro publication, release readiness, or broad authority cleanup.

---

## Operating Mode

Implementation Gate Mode.

The work changes TraceWeaver skill routing, deterministic fixtures, and smoke
coverage for an already reviewed planning requirement. Authority Baseline Mode
is required only if implementation discovers that `REQ-TW-056`, review-staging
authority, trace-anchor authority, or publication boundaries need to change.

Status/hash wording repairs remain housekeeping unless they change allowed
behavior, current gate identity, runtime/publication claims, or artifact
identity for this proof chain.

---

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`
- Primary requirements:
  - `REQ-TW-035`: controlled automation stops when authority is missing or changed
  - `REQ-TW-037`: review-fix loops are bounded
  - `REQ-TW-038`: behavior changes link verification evidence to the matrix
  - `REQ-TW-039`: publication is blocked until separate gates pass
  - `REQ-TW-049`: code review must route through `tw-code-review`
  - `REQ-TW-053`: review-staging is not publication
  - `REQ-TW-054`: code/test trace anchors are part of traceability
  - `REQ-TW-055`: traceability failures use structured findings
  - `REQ-TW-056`: `tw-auto` owns the full closure loop
  - `REQ-TW-057`: operating modes and Review-Staging Mode
  - `REQ-TW-058`: ambiguous per-artifact anchor mappings are skipped and reported
- Prior proof inputs:
  - `VER-TW-050`: non-blocking ambiguous trace-anchor fixture proof
  - `VER-TW-051`: `tw-auto` runtime-driver fixture, runtime held
  - `VER-TW-054`: review-staging closure-loop fixture proof
  - `VER-TW-056`: systems-engineering audit closure fixture proof
- New candidate proof chain reserved for this plan:
  - Artifact: `ART-TW-059`
  - Trace: `TRACE-TW-045`
  - ATP: `ATP-TW-029`
  - Result: `RESULT-TW-029`
  - Verification: `VER-TW-057`

Validation question: Can a user ask `tw-auto` to complete a task or plan and
have it continue automatically from `tw-work` into traceability check,
code-review, bounded fix/recording, and scoped doc-review when authority files
changed, without manually issuing the next wrapper command?

---

## Problem Frame

Current deterministic fixtures prove pieces of the loop, but dogfooding showed a
practical gap in the user-facing contract:

```text
User: tw-auto run tw-requirements-review on the NLP-provider failure authority
gap, revise the plan, then run tw-authority-gate then run tw-work.

Observed: tw-auto implemented through tw-work and stopped with "Next step: run
/tw-code-review."
```

That behavior is defensible if the user explicitly says "stop after tw-work."
It is wrong for normal `tw-auto` usage because `tw-auto` is the workflow owner,
not a wrapper command dispatcher. In the default case, `tw-work` completion is
an intermediate transition into TraceWeaver review closure.

---

## Required Behavior

### Default Continuation Rule

After `tw-work` returns implementation, verification, trace-anchor, or
review-staging output, `tw-auto` must continue unless one of these is true:

- the user explicitly asked to stop after `tw-work`;
- `tw-work` reports missing, unclear, contradictory, incomplete, or stale
  authority that requires user input or `tw-requirements-review`;
- verification failed and the failure is not repairable within the bounded
  review-fix cycle;
- traceability has unresolved P0/P1 findings that cannot be repaired without
  authority changes;
- the next action would be commit, push, PR, remote mutation, deployment,
  release, or publication;
- reviewer capacity, active-host skill availability, or runtime registry state
  prevents a trustworthy review result.

### Post-Work Closure Route

When the default continuation rule allows progress, `tw-auto` must run:

1. `tw-traceability-check` over the exact changed work package.
2. `tw-code-review` when behavior-bearing files, scripts, skills, tests,
   fixtures, smokes, manifests, or runtime harnesses changed.
3. `tw-work` repair pass when code review finds repairable issues and authority
   remains clear.
4. A single clean-review recording step when code review passes.
5. Scoped `tw-doc-review` only when requirements, plans, matrix, Intent
   Contract, validation, evidence, status, hash, or review-result files changed.
6. A single clean doc-review recording step when the scoped doc review passes.
7. Stop clean, held, blocked, or human-decision with the exact next command.

`tw-auto` must not tell the user to run `/tw-code-review` manually when it can
run the scoped review itself under the active workflow.

### Explicit Stop Override

If a user asks "run only through tw-work", "stop after implementation", "do not
review", or equivalent, `tw-auto` must stop after `tw-work` and report that
review remains required before done, publication, or release claims.

---

## Implementation Units

### U1. Strengthen `tw-auto` Post-Work Semantics

**Goal:** Make `tw-auto` treat `tw-work` completion as a transition, not a
terminal state.

**Files:**

- Modify: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-auto/references/traceweaver-operating-modes.md`

**Acceptance:**

- The workflow text explicitly says `tw-auto` continues into
  `tw-traceability-check` and `tw-code-review` after `tw-work`.
- It defines the explicit stop override.
- It keeps publication, runtime parity, clean replacement, release/package, and
  unconstrained-host claims held.

### U2. Add Post-Work Closure Fixtures

**Goal:** Prove the Vestro-exposed gap deterministically.

**Files:**

- Add fixtures under `fixtures/tw-skill-behavior/`, for example:
  - `tw-auto-post-work-code-review-continue/loop-state.txt`
  - `tw-auto-post-work-doc-review-needed/loop-state.txt`
  - `tw-auto-post-work-explicit-stop/loop-state.txt`
  - `tw-auto-post-work-code-review-finding-repair/loop-state.txt`
  - `tw-auto-post-work-authority-blocker-stop/loop-state.txt`
  - `tw-auto-post-work-vestro-transcript/loop-state.txt`
- Modify: `scripts/traceweaver-smoke-tw-skill-behavior`

**Acceptance:**

- A Vestro-like sequence ending in `tw-work` routes automatically to
  `tw-traceability-check` and `tw-code-review`.
- If authority/status/hash docs changed, the route also includes scoped
  `tw-doc-review`.
- Explicit stop after `tw-work` leaves review held and does not claim done.
- A real authority blocker stops before code review or review-staging.
- A repairable code-review finding triggers at most one bounded repair/review
  loop unless the configured review-fix budget says otherwise.

### U3. Preserve Review-Staging And Recording Boundaries

**Goal:** Reuse the existing reviewed review-staging behavior without broadening
publication authority.

**Files:**

- Modify: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-work/SKILL.md` only if the handoff
  contract needs a clearer return shape.
- Modify Code Anchor Evidence rows in `traceability-matrix.md` if changed
  behavior-bearing skill, fixture, or smoke files need anchors.

**Acceptance:**

- Review-staging remains exact-scope only.
- Clean-review recording refreshes only current gate status/hash fields.
- `tw-auto` does not reopen historical wording unless it affects current
  allowed behavior, artifact identity, runtime/publication claims, or material
  authority.
- Commit, branch, push, PR, and remote mutation still require controlled
  publication wrappers.

### U4. Verify With Static Smokes And Scoped Review

**Goal:** Close deterministic behavior proof before any runtime or Vestro claim.

**Commands:**

```sh
scripts/traceweaver-smoke-tw-skill-behavior
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors \
  --root . \
  --mode implementation \
  --changed-file plugins/traceweaver-core/skills/tw-auto/SKILL.md \
  --changed-file plugins/traceweaver-core/skills/tw-auto/references/traceweaver-operating-modes.md \
  --changed-file plugins/traceweaver-core/skills/tw-work/SKILL.md \
  --changed-file scripts/traceweaver-smoke-tw-skill-behavior \
  --changed-file fixtures/tw-skill-behavior/tw-auto-post-work-code-review-continue/loop-state.txt \
  --changed-file fixtures/tw-skill-behavior/tw-auto-post-work-doc-review-needed/loop-state.txt \
  --changed-file fixtures/tw-skill-behavior/tw-auto-post-work-explicit-stop/loop-state.txt \
  --changed-file fixtures/tw-skill-behavior/tw-auto-post-work-code-review-finding-repair/loop-state.txt \
  --changed-file fixtures/tw-skill-behavior/tw-auto-post-work-authority-blocker-stop/loop-state.txt \
  --changed-file traceability-matrix.md
```

**Review gates:**

```text
/tw-code-review scoped to tw-auto post-work review closure implementation, fixtures, smoke updates, and Code Anchor Evidence rows # passed as TW-CODE-REVIEW-2026-05-12-TW-AUTO-POST-WORK-CLOSURE-CLEAN-001
/tw-doc-review scoped only to the ART-TW-059 / TRACE-TW-045 / VER-TW-057 status/hash update # passed as TW-DOC-REVIEW-2026-05-12-TW-AUTO-POST-WORK-CLOSURE-STATUS-HASH-CLEAN-001
```

**Acceptance:**

- Smoke passes for all post-work closure fixtures.
- Traceability scanner passes or emits only explicitly held unresolved mappings.
- Code review passed as `TW-CODE-REVIEW-2026-05-12-TW-AUTO-POST-WORK-CLOSURE-CLEAN-001`.
- Status/hash doc review passed as `TW-DOC-REVIEW-2026-05-12-TW-AUTO-POST-WORK-CLOSURE-STATUS-HASH-CLEAN-001`.

### U5. Dogfood Replay On Vestro-Style Transcript

**Goal:** Make the regression visible without writing to Vestro.

**Files:**

- Add fixture text that models the observed NLP-provider sequence:

```text
tw-auto run tw-requirements-review on the NLP-provider failure authority gap,
revise the plan, then run tw-authority-gate then run tw-work
```

**Acceptance:**

- The fixture expects `tw-auto` to continue into traceability check and
  `tw-code-review` after `tw-work`.
- The fixture fails if the only output is "Next step: run /tw-code-review."
- The fixture does not claim the actual Vestro branch is reviewed, published,
  deployed, or live-verified.

---

## Out Of Scope

- Editing Vestro.
- Committing, pushing, opening PRs, deploying, or publishing.
- Proving live runtime invocation of `tw-auto`.
- Proving clean replacement of CE.
- Requirements rewrite beyond this implementation plan.
- CE-derived component body edits.
- Broad status/hash cleanup outside `ART-TW-059` / `TRACE-TW-045` /
  `VER-TW-057`.

---

## Held Claims

- Full `tw-auto` runtime-driver invocation remains held.
- Active-session prompt-registry completeness and constrained `tw-authority-gate`
  runtime invocation are now proven for the current host by
  `scripts/traceweaver-smoke-codex-host-registry`; scoped status/hash doc review
  is still pending before accepting this update.
- Vestro dogfood remains held until a Vestro-local run passes its own gates.
- Publication and release readiness remain held.
- Clean CE replacement remains held.
- Semantic audit completeness remains held.

---

## Next Command

Code review has passed as `TW-CODE-REVIEW-2026-05-12-TW-AUTO-POST-WORK-CLOSURE-CLEAN-001`, and scoped status/hash doc review has passed as `TW-DOC-REVIEW-2026-05-12-TW-AUTO-POST-WORK-CLOSURE-STATUS-HASH-CLEAN-001`. The current active-host prompt-registry/constrained-runtime proof update has clean scoped status/hash doc review recorded as `TW-DOC-REVIEW-2026-05-12-ART-TW-059-ACTIVE-HOST-PROMPT-REGISTRY-RUNTIME-STATUS-HASH-CLEAN-001`. Next:

```text
/tw-auto continue to the full tw-auto runtime-driver proof, keeping Vestro, publication, clean replacement, release/package, and unconstrained-host claims held until separately reviewed.
```
