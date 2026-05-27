---
title: "feat: Automate tw-auto review-staging closure loop"
type: feat
status: candidate
date: 2026-05-08
---

# feat: Automate tw-auto review-staging closure loop

## Summary

Teach `tw-auto` to drive the missing review-staging and review rerun loop that
users are currently performing manually:

```text
tw-auto -> tw-work -> trace anchors -> tw-traceability-check ->
review-staging -> tw-code-review / tw-doc-review -> bounded repair/record ->
clean, held, blocked, or human-decision stop
```

The immediate product gap is not a missing requirement. REQ-TW-056 already says
`tw-auto` owns the full closure loop, and REQ-TW-057 already defines
Review-Staging Mode. The gap is implementation and proof: `tw-auto` can describe
the next wrapper command, but it does not yet reliably detect split review
identity, ask `tw-work` to stage the exact scoped set, rerun the right review,
record a clean result once, and continue without manual wrapper cycling.

This plan is candidate implementation input. It does not approve runtime parity,
publication, clean CE replacement, Vestro use, release readiness, or broad
authority polishing.

---

## Operating Mode

Implementation Gate Mode planning with a Review-Staging Mode implementation
slice.

Authority Baseline Mode is required only if implementation discovers that the
requirements themselves need to change, the accepted scope is contradictory, a
held runtime/publication claim would be over-authorized, or the current active
review gate identity changes. Status/hash wording repairs remain housekeeping
unless they change allowed behavior, current gate identity, runtime/publication
claims, or material authority.

---

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `f48d98c924f051004d0352a7680366bf4f89748d4c01013f23da1a84ff97adda`
- Primary requirements:
  - `REQ-TW-053`: review-staging is not publication; publication remains gated
  - `REQ-TW-054`: trace anchors and Code Anchor Evidence are implementation evidence
  - `REQ-TW-055`: traceability failures must be structured findings
  - `REQ-TW-056`: `tw-auto` owns the full closure loop
  - `REQ-TW-057`: operating modes and Review-Staging Mode
  - `REQ-TW-058`: ambiguous per-artifact anchor mappings are skipped and reported
- Supporting evidence:
  - `VER-TW-040`: review-wrapper and `tw-auto` static behavior fixture set
  - `VER-TW-044`: trace-anchor authoring helper and narrow project-write allowance
  - `VER-TW-045`: active-host filesystem/hash reconciliation evidence
  - `VER-TW-050`: non-blocking ambiguous trace-anchor fixture proof
  - `VER-TW-051`: controlled `tw-auto` runtime-driver fixture harness, still held
- New candidate proof chain reserved for this plan:
  - Artifact: `ART-TW-056`
  - Trace: `TRACE-TW-042`
  - ATP: `ATP-TW-026`
  - Result: `RESULT-TW-026`
  - Verification: `VER-TW-054`

These IDs are reserved for this review-staging closure-loop proof only. Do not
overload the runtime-driver proof chain (`ART-TW-053` / `TRACE-TW-039` /
`VER-TW-051`) or the anchor/alias clarity proof chain (`ART-TW-055` /
`TRACE-TW-041` / `VER-TW-053`).

Validation question: Can a user hand `tw-auto` a task or reviewed plan and have
TraceWeaver complete the review-staging/review/record loop without manually
alternating `/tw-work`, `/tw-code-review`, `/tw-doc-review`, and follow-up
recording commands, while still stopping on real authority, traceability,
runtime, publication, or code-safety blockers?

---

## Problem Frame

Current behavior is still too manual:

- `tw-work` can perform review-staging when explicitly told the scoped set.
- `tw-doc-review` correctly blocks split staged/working-tree authority identity.
- `tw-auto` can name the next wrapper command, but does not yet turn that
  finding into an automatic bounded action.

That means a normal task can still degrade into:

```text
/tw-work
/tw-doc-review
/tw-work stage exact set
/tw-doc-review
/tw-work record clean review
/tw-doc-review again if hashes changed
```

The product behavior should be:

```text
/tw-auto <task or plan>
```

and `tw-auto` owns the closure loop until one of the real stop conditions is
reached.

---

## Requirements For This Slice

- R1. `tw-auto` must detect split review identity for the current scoped work
  package: staged/unstaged mismatch, untracked reviewed artifacts, stale staged
  artifact hashes, or missing files from the review scope.
- R2. When implementation/verification/traceability pass and the only blocker
  is coherent review identity, `tw-auto` must route to `tw-work` Review-Staging
  Mode with an explicit file list.
- R3. Review-staging must be exact-scope only: changed implementation files,
  linked tests/fixtures/smokes, Code Anchor Evidence rows, and scoped
  status/evidence files for that same work item. It must not stage broad
  unrelated authority churn.
- R4. After review-staging, `tw-auto` must rerun the correct review wrapper:
  `tw-code-review` for behavior/code/script/skill changes, `tw-doc-review` for
  authority/status/hash/evidence changes, or both when the scoped set contains
  both surfaces.
- R5. If review passes, `tw-auto` must record the clean review once, refresh only
  required status/hash fields for that gate, review-stage that exact status set
  when needed, and stop clean or proceed to the next already-approved gate.
- R6. If review returns housekeeping-only findings, `tw-auto` may perform one
  bounded repair/record pass and rerun the scoped review once. It must stop on
  repeated no-progress or repeated status-only churn.
- R7. `tw-auto` must stop instead of staging when findings indicate unclear
  requirements, contradictory authority, changed accepted scope, unapproved
  runtime/publication claims, unsafe code behavior, failed verification, or
  unresolved traceability blockers.
- R8. Deterministic fixtures must prove the route without claiming broad runtime
  parity. Active-host runtime invocation remains held unless a separate sparse
  runtime proof passes.

---

## Scope

### In Scope

- `tw-auto` instruction updates for review-staging detection, review routing,
  bounded repair, and clean-review recording.
- `tw-work` instruction/reference updates only if needed to expose a clearer
  Review-Staging Mode contract for `tw-auto`.
- Deterministic fixtures for split staged/working-tree state, untracked review
  artifacts, clean review-staging, review rerun, clean recording, housekeeping
  repair, and real-blocker stop conditions.
- Smoke coverage in `scripts/traceweaver-smoke-tw-skill-behavior` or a new
  dedicated smoke if the existing harness becomes too broad.
- Code Anchor Evidence rows for any changed behavior-bearing skill/script or
  fixture files.
- Scoped `tw-code-review` and scoped `tw-doc-review` of this implementation.

### Out Of Scope

- Real commit, push, PR, release, remote mutation, or publication.
- Vestro dogfood.
- Runtime parity or autonomous invocation proof beyond deterministic fixtures.
- Requirements rewriting.
- Editing imported CE-derived component bodies.
- Broad authority-status cleanup unrelated to this proof chain.

---

## Design

### Review Scope Model

`tw-auto` should maintain a loop state with:

```text
work_package_id
authority_baseline_id
authority_baseline_hash
requirements
trace_ids
verification_ids
changed_files
verification_commands
traceability_status
review_scope_files
review_routes
review_staging_status
review_results
recording_status
held_claims
stop_reason
```

The review scope is explicit and computed from:

- implementation files changed by the current work package;
- linked tests, fixtures, and smokes;
- Code Anchor Evidence rows and matrix rows touched for those files;
- validation/evidence/status files touched for the current proof chain;
- plan files when the plan is the reviewed implementation authority.

### Split Identity Detection

Before review acceptance, `tw-auto` must detect:

- file is in review scope and untracked;
- file is staged and has additional unstaged changes;
- file is required by the review scope but missing from the index;
- evidence hash/status points to a different artifact identity than the reviewed
  staged file;
- review target changed after a clean review was recorded.

If the only blocker is split review identity and the scope is otherwise clear,
`tw-auto` routes to:

```text
/tw-work review-stage <explicit scoped file list>
```

or the equivalent packaged `tw-work` step in fixture/runtime form.

### Review Routing

Route to:

- `tw-code-review` when scoped files include behavior-bearing source, skills,
  scripts, tests, fixtures, or smokes.
- `tw-doc-review` when scoped files include requirements, plans, matrices,
  Intent Contracts, evidence records, validation records, review-result/status
  rows, or hashes.
- both when both surfaces changed, with code review before authority doc review
  unless the doc change is a prerequisite authority update.

### Bounded Repair

`tw-auto` may repair:

- stale status that points at a closed current gate;
- missing Code Anchor Evidence row for an already-authored source anchor;
- missing staged identity for exact review scope;
- stale hash/status field that is mechanically derived from scoped files;
- next-step text that routes back to a just-closed review gate.

`tw-auto` must not repair without human/requirements review:

- requirement meaning;
- accepted scope;
- verification authority;
- validation intent;
- runtime/publication permission;
- imported CE component body drift;
- security/safety/data-integrity code behavior;
- repeated review findings that show no-progress.

---

## Implementation Units

### U1. Record Review-Staging Closure Proof Authority

**Goal:** Add the proof chain rows for `ART-TW-056` / `TRACE-TW-042` /
`ATP-TW-026` / `RESULT-TW-026` / `VER-TW-054`.

**Files:**

- Modify: `traceability-matrix.md`
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`

**Acceptance:**

- The authority records identify this as deterministic review-staging closure
  proof, not broad runtime parity.
- Existing runtime, publication, clean replacement, Vestro, release/package,
  upstream, and unconstrained-host claims remain held.
- No requirements text changes are made unless a scoped requirements review is
  explicitly opened.

### U2. Update tw-auto Closure Loop Instructions

**Goal:** Make `tw-auto` explicitly own split review-scope detection,
review-staging handoff, review rerun, clean recording, and bounded repair.

**Files:**

- Modify: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-auto/references/traceweaver-operating-modes.md`
- Modify: `plugins/traceweaver-core/skills/tw-auto/references/trace-anchor-authoring.md`
  only if needed for the post-work trace-anchor handoff.

**Acceptance:**

- `tw-auto` no longer stops after merely naming `/tw-work stage ...` when the
  scoped set is clear and review-staging is allowed.
- `tw-auto` still pauses on unclear requirements or material authority changes.
- `tw-auto` distinguishes housekeeping repair from product/blocking gates.

### U3. Tighten tw-work Review-Staging Handoff Contract

**Goal:** Ensure `tw-work` exposes the exact review-staging contract `tw-auto`
needs without broadening publication authority.

**Files:**

- Modify: `plugins/traceweaver-core/skills/tw-work/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-work/references/traceweaver-operating-modes.md`
  if the policy copy needs the same wording.

**Acceptance:**

- `tw-work` may stage only the exact scoped review set requested by `tw-auto`.
- Review-staging still cannot commit, push, PR, mutate remotes, or claim
  publication.
- `tw-work` returns the staged file list and any held reason to `tw-auto`.

### U4. Add Deterministic Closure-Loop Fixtures

**Goal:** Prove the behavior without relying on live model compliance.

**Files:**

- Add/modify fixtures under `fixtures/tw-skill-behavior/`, for example:
  - `tw-auto-review-staging-split-scope/loop-state.txt`
  - `tw-auto-review-staging-untracked-plan/loop-state.txt`
  - `tw-auto-review-staging-clean-record/loop-state.txt`
  - `tw-auto-review-staging-housekeeping-repair/loop-state.txt`
  - `tw-auto-review-staging-real-blocker-stop/loop-state.txt`
- Modify: `scripts/traceweaver-smoke-tw-skill-behavior`
- Add Code Anchor Evidence rows for new fixtures/smokes.

**Acceptance:**

- Split staged/working-tree identity routes to `tw-work` Review-Staging Mode.
- Untracked plan/evidence file in the scoped review set is staged before review.
- Clean code review routes to single recording step, not repeated review churn.
- Clean doc review routes to single status/hash recording step, not broad
  authority polishing.
- Housekeeping-only finding is repaired once and rerun once.
- Real blockers stop with a held/blocked next action and are not staged around.

### U5. Verify With Smokes And Reviews

**Goal:** Close this as reviewed deterministic behavior input.

**Commands:**

```sh
scripts/traceweaver-smoke-tw-skill-behavior
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --mode implementation --changed-file <each changed behavior-bearing file>
```

Scoped code review passed as
`TW-CODE-REVIEW-2026-05-08-TW-AUTO-REVIEW-STAGING-CLOSURE-LOOP-CLEAN-001`.
Scoped status/hash doc review passed as
`TW-DOC-REVIEW-2026-05-08-TW-AUTO-REVIEW-STAGING-CLOSURE-LOOP-STATUS-HASH-CLEAN-001`.
The reviewed authority state accepts deterministic static fixture input only;
live runtime, publication, Vestro dogfood, clean replacement, release/package,
upstream readiness, R31, and unconstrained-host claims remain held.

Prior scoped command:

```text
/tw-doc-review scoped only to the review-staging closure-loop status/hash update
```

**Acceptance:**

- Smoke passes for deterministic fixtures.
- Trace-anchor scanner passes for the changed behavior-bearing scope or emits
  only explicitly held unresolved mappings.
- Code review has no P0/P1 findings and is recorded once as
  `TW-CODE-REVIEW-2026-05-08-TW-AUTO-REVIEW-STAGING-CLOSURE-LOOP-CLEAN-001`.
- Doc review accepted only the scoped status/hash update as
  `TW-DOC-REVIEW-2026-05-08-TW-AUTO-REVIEW-STAGING-CLOSURE-LOOP-STATUS-HASH-CLEAN-001`.
- `VER-TW-054` records deterministic fixture behavior only; live runtime
  remains held.

---

## Fixture Matrix

| Fixture | Expected `tw-auto` behavior | Blocking condition |
| --- | --- | --- |
| split scoped review set | Detect split identity, route exact file list to `tw-work` review-staging, rerun review | Blocks if scope includes unrelated files |
| untracked reviewed plan | Include the plan in review-staging when it is part of authority scope | Blocks if plan is untracked at review acceptance |
| clean code review | Record clean code review once, refresh status, continue or stop clean | Blocks if same review is rerun without changes |
| clean doc review | Record clean doc review once, refresh hashes/status only for the gate | Blocks if broad authority polishing starts |
| housekeeping finding | Repair once and rerun once | Blocks on repeated no-progress |
| unclear requirement | Pause for user or `tw-requirements-review` | Must not stage around it |
| runtime/publication overclaim | Stop held/blocked | Must not mark runtime/publication as passed |
| unsafe code finding | Stop for implementation repair | Must not record clean review |

---

## Held Claims

- Active-host runtime invocation remains held unless a separate sparse runtime
  proof passes.
- Publication remains held unless the controlled publication route is invoked
  and passes.
- Vestro dogfood remains held.
- Clean CE replacement remains held.
- Release/package/upstream readiness remains held.
- R31 and unconstrained-host support remain held.

---

## Next Command

Run:

```text
/tw-doc-review docs/plans/2026-05-08-002-feat-tw-auto-review-staging-closure-loop-plan.md
```

If the plan review passes, run:

```text
/tw-work docs/plans/2026-05-08-002-feat-tw-auto-review-staging-closure-loop-plan.md
```
