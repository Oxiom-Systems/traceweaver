---
title: "feat: Wire non-blocking trace-anchor authoring through tw-auto"
type: feat
status: active
date: 2026-05-07
---

# feat: Wire non-blocking trace-anchor authoring through tw-auto

## Summary

Implement deterministic fixture proof and skill wiring for the reviewed
REQ-TW-058 behavior: `tw-auto` owns the normal implementation loop, `tw-work`
adds unambiguous trace anchors and matrix Code Anchor Evidence, ambiguous
per-artifact anchor writes are skipped without guessing, and
`tw-traceability-check` emits structured findings that block traceability-complete
or review acceptance until resolved or explicitly held.

This is Implementation Gate Mode planning. The requirement update already passed
scoped requirements and authority doc review as
`TW-DOC-REVIEW-2026-05-07-REQ-TW-058-NON-BLOCKING-TRACE-ANCHOR-AUTHORITY-CLEAN-001`.
The plan must not reopen broad authority polishing. Runtime closure-loop,
Vestro dogfood, publication, clean replacement, release/package/upstream
readiness, R31, and unconstrained-host claims remain held.

---

## Problem Frame

TraceWeaver can now author coarse anchors when mappings are unambiguous, but the
loop still behaves too manually. The intended product behavior is that a user
can hand `tw-auto` a task or plan and the system handles authority, work,
trace-anchor authoring, trace checking, review, and repair routing without
forcing a manual work/review/status loop.

The corrected REQ-TW-058 behavior is deliberately narrower than "pause on any
ambiguity." Task authority, requirement meaning, verification authority, and
material authority changes still pause. But per-artifact trace-anchor ambiguity
should not stop unrelated clear work: `tw-work` should skip that one anchor
mutation, preserve the unresolved mapping candidate, continue clear anchors, and
let `tw-traceability-check` report a blocking structured finding before review
or completion can pass.

---

## Authority Capsule

- Operating mode: Implementation Gate Mode planning.
- Baseline authority: `.traceweaver/intent-contract.yml`
  `candidate_requirements_working_hash_sha256=60e59d1a5f80ce3f8b71884f4427ac0a6c365db4accfdf9f483d8ec6d4aaf810`.
- Primary requirements: REQ-TW-054, REQ-TW-055, REQ-TW-056, REQ-TW-057,
  REQ-TW-058.
- Existing reviewed proof:
  - REQ-TW-054 authoring allowance: `TW-DOC-REVIEW-2026-05-06-REQ-TW-054-AUTHORING-ALLOWANCE-CLEAN-001`.
  - Trace-anchor/TDD chain code review: `TW-CODE-REVIEW-2026-05-07-TRACE-ANCHOR-TDD-CHAIN-CLEAN-001`.
  - REQ-TW-058 authority review: `TW-DOC-REVIEW-2026-05-07-REQ-TW-058-NON-BLOCKING-TRACE-ANCHOR-AUTHORITY-CLEAN-001`.
  - REQ-TW-058 status-aware trace-authority repair code review:
    `TW-CODE-REVIEW-2026-05-07-TRACE-AUTHORITY-STATUS-AWARE-CLEAN-001`.
- Existing matrix chain:
  - REQ-TW-054, REQ-TW-056, REQ-TW-057, and REQ-TW-058 currently contain
    legacy future ATP-TW-021 and future RESULT-TW-021 placeholders for the
    non-blocking ambiguity work. Those IDs collide with the wrapper-completion
    proof chain and must be repaired by this implementation-status update.
  - VER-TW-049 records the reviewed requirement update only.
- Proposed implementation proof chain for this plan:
  - Artifact: ART-TW-052
  - Trace: TRACE-TW-038
  - ATP: ATP-TW-022
  - Result: RESULT-TW-022
  - Verification: VER-TW-050

These proposed IDs are planning targets only until the matrix and Intent
Contract record them in a reviewed status/hash update.

---

## Requirements

- R1. `tw-auto` must route normal implementation through `tw-work` so the
  work loop owns trace-anchor authoring before review.
- R2. `tw-work` must derive changed behavior-bearing files, linked
  tests/fixtures/smokes, and untracked new files, then run the code-anchor
  scanner before authoring.
- R3. `tw-work` must apply anchors only when requirement, trace, verification,
  validation path, artifact role, target path, anchor level, and existing anchor
  state are unambiguous from accepted authority.
- R4. When only a per-artifact trace-anchor mapping is ambiguous, `tw-work` must
  skip that anchor mutation without guessing, record the unresolved mapping
  candidate, continue other unambiguous anchors, and hand the unresolved mapping
  to `tw-traceability-check`.
- R5. `tw-traceability-check` must emit structured findings for unresolved
  mapping candidates and block traceability-complete, code-review acceptance,
  engineering-complete, publication, or release-ready claims when the unresolved
  mapping affects changed behavior or verification.
- R6. Task authority, requirement meaning, verification authority, material
  authority changes, stale authority, or contradictory authority must still
  pause for human or requirements-review input.
- R7. Deterministic fixtures must prove the clean path, skip-and-find path,
  task-authority pause path, scanner recheck, review-staging handoff, and
  review-wrapper preflight behavior.
- R8. Runtime invocation, Vestro project writes, publication, clean replacement,
  release/package/upstream readiness, R31, and unconstrained-host claims remain
  held after static fixture proof.

---

## Scope Boundaries

- Do not change requirements in this implementation slice.
- Do not add a new public `tw-tracer` command.
- Do not make `tw-traceability-check` mutate files during normal review/check
  use.
- Do not make `tw-code-review` or `tw-doc-review` mutate files.
- Do not annotate every helper or private subfunction.
- Do not treat skipped ambiguous anchors as success. They are unresolved
  traceability findings and must block done/review/publication claims.
- Do not claim active-session prompt-registry completeness or runtime skill
  invocation from static smoke output.
- Do not include whole-repo historical anchor debt in default implementation
  gates; keep the default scope to changed behavior-bearing files and linked
  verification artifacts.

---

## Context & Patterns

- `plugins/traceweaver-core/skills/tw-auto/SKILL.md` is the orchestration
  surface that should own the closure loop.
- `plugins/traceweaver-core/skills/tw-work/SKILL.md` already defines the
  work-loop responsibilities, review-staging boundary, and helper command
  contract.
- `plugins/traceweaver-core/skills/tw-work/references/trace-anchor-authoring.md`
  currently says unclear mapping pauses; this must be narrowed so per-artifact
  ambiguity is skipped and surfaced as a finding, while authority ambiguity
  still pauses.
- `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` and
  `plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors`
  are the correct surfaces for structured unresolved-mapping findings.
- `plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-author-code-anchors`
  must remain the source-anchor plus matrix-row transaction helper.
- `scripts/traceweaver-smoke-code-trace-authoring` proves helper-level authoring
  behavior.
- `scripts/traceweaver-smoke-code-traceability` proves scanner behavior.
- `scripts/traceweaver-smoke-tw-skill-behavior` proves wrapper and loop
  contracts.
- `traceability-matrix.md` Code Anchor Evidence is the navigable source-to-test
  proof surface.

---

## Key Decisions

- Keep this as `tw-auto` / `tw-work` loop behavior, not a separate user command.
  The user-facing goal is fewer manual steps.
- Treat per-artifact anchor ambiguity as a traceability finding, not a global
  work pause. This keeps implementation moving while preserving the rule that
  incomplete traceability blocks review/done claims.
- Keep authority ambiguity as a pause. If the requirement, verification, or
  accepted scope itself is unclear, agents must stop instead of creating
  inferred authority.
- Keep mutation in `tw-work` only. `tw-traceability-check` reports, and
  `tw-code-review` gates.
- Fixture-first proof comes before active-host/runtime claims. Static fixture
  success can open implementation evidence, but not runtime readiness.
- Use changed-file scope by default. Whole-repo anchor cleanup remains an audit
  or baseline-debt mode.

---

## Implementation Units

- U1. **Record the implementation proof chain**

**Goal:** Add the ART/TRACE/ATP/RESULT/VER rows for the REQ-TW-058 fixture proof
and repair the related REQ-TW-054/056/057/058 future proof placeholders without
changing requirement meaning.

**Requirements:** R1, R4, R5, R7, R8

**Dependencies:** None

**Files:**
- Modify: `traceability-matrix.md`
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

**Approach:**
- Add ART-TW-052 / TRACE-TW-038 / ATP-TW-022 / RESULT-TW-022 / VER-TW-050 as
  the planned deterministic fixture proof chain.
- Replace the stale future ATP-TW-021 / RESULT-TW-021 placeholders for
  REQ-TW-054, REQ-TW-056, REQ-TW-057, and REQ-TW-058 with ATP-TW-022 /
  RESULT-TW-022 so this proof chain remains distinct from the wrapper-completion
  chain.
- Keep VER-TW-049 as the already-reviewed authority-update record.
- State that implementation, runtime, Vestro, publication, and release claims
  remain held until later proof.

**Test scenarios:**
- Happy path: matrix links REQ-TW-058 to the planned fixture proof chain.
- Error path: no row implies runtime, publication, Vestro, or clean replacement
  readiness.
- Regression: old "pending requirements/doc review" wording is not reused for
  REQ-TW-058 after the clean review ID.

**Verification:**
- Intent Contract YAML parses.
- Scoped `tw-doc-review` passes for the proof-chain/status update.

---

- U2. **Define non-blocking authoring semantics in skill references**

**Goal:** Update skill-local authoring and operating-mode policy so `tw-work`
knows when to skip ambiguous per-artifact anchors and when to pause.

**Requirements:** R2, R3, R4, R5, R6

**Dependencies:** U1

**Files:**
- Modify: `plugins/traceweaver-core/skills/tw-work/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-work/references/trace-anchor-authoring.md`
- Modify: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-auto/references/trace-anchor-authoring.md`
- Modify: `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`

**Approach:**
- Split ambiguity into two categories:
  - authority ambiguity: pause and route to human or requirements review;
  - per-artifact anchor ambiguity: skip that mutation, record unresolved mapping,
    continue clear anchors, and require `tw-traceability-check` finding output.
- Update `tw-auto` to describe the normal loop:
  authority gate -> `tw-work` -> scan -> author clear anchors -> skip ambiguous
  anchors -> traceability findings -> verification -> review-staging ->
  `tw-code-review`.
- Update `tw-code-review` so unresolved mapping findings block acceptance but do
  not route agents back to broad authority review unless the finding changes
  requirement meaning or accepted scope.

**Test scenarios:**
- Happy path: a clear mapping is described as applyable by `tw-work`.
- Error path: unclear task authority still pauses before work.
- Error path: unclear verification authority pauses instead of producing a
  skipped anchor.
- Regression: per-artifact ambiguity does not tell `tw-work` to stop all clear
  anchor writes.

**Verification:**
- Static skill-behavior smoke proves the required wording and routing contract.

---

- U3. **Extend scanner output for unresolved mapping candidates**

**Goal:** Let `tw-traceability-check` consume skipped ambiguous anchor records
and emit structured findings.

**Requirements:** R4, R5, R7

**Dependencies:** U2

**Files:**
- Modify: `plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors`
- Modify: `plugins/traceweaver-core/skills/tw-traceability-check/references/code-trace-anchor-contract.md`
- Modify: `scripts/traceweaver-smoke-code-traceability`
- Create: `fixtures/code-traceability/unresolved-anchor-mapping/requirements.md`
- Create: `fixtures/code-traceability/unresolved-anchor-mapping/src/feature.sh`
- Create: `fixtures/code-traceability/unresolved-anchor-mapping/traceability-matrix.md`
- Create: `fixtures/code-traceability/unresolved-anchor-mapping/traceweaver-unresolved-mappings.jsonl`

**Approach:**
- Define a deterministic unresolved-mapping input record format that can be
  produced by `tw-work` and consumed by the scanner.
- Emit a structured finding with severity, status, affected requirement/trace
  candidates when known, file path, missing authority fields, blocked claim,
  and remediation.
- Ensure unresolved mapping findings block `code_traceability_status=pass`.
- Keep JSONL/Markdown output compatible with existing structured-finding
  expectations.

**Test scenarios:**
- Happy path: unresolved per-artifact mapping creates one P1 structured finding.
- Error path: unresolved mapping affecting a changed test blocks review because
  verification trace is incomplete.
- Edge case: unresolved mapping for a non-behavior file is either ignored or
  reported as non-blocking only when the file is outside the changed
  behavior-bearing scope.
- Regression: a complete anchor chain still passes with zero findings.

**Verification:**
- `scripts/traceweaver-smoke-code-traceability` passes and includes blocked
  unresolved-mapping output.

---

- U4. **Extend authoring helper and tw-work fixture behavior**

**Goal:** Prove `tw-work` applies clear anchors, skips ambiguous ones, records
unresolved candidates, and leaves traceability blocked until findings are
resolved.

**Requirements:** R2, R3, R4, R5, R6, R7

**Dependencies:** U2, U3

**Files:**
- Modify: `plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-author-code-anchors`
- Modify: `scripts/traceweaver-smoke-code-trace-authoring`
- Modify: `scripts/traceweaver-smoke-tw-skill-behavior`
- Create: `fixtures/code-trace-authoring/non-blocking-ambiguous-anchor/requirements.md`
- Create: `fixtures/code-trace-authoring/non-blocking-ambiguous-anchor/src/clear_feature.sh`
- Create: `fixtures/code-trace-authoring/non-blocking-ambiguous-anchor/src/ambiguous_feature.sh`
- Create: `fixtures/code-trace-authoring/non-blocking-ambiguous-anchor/tests/test_clear_feature.sh`
- Create: `fixtures/code-trace-authoring/non-blocking-ambiguous-anchor/traceability-matrix.md`
- Create: `fixtures/tw-skill-behavior/tw-work-trace-authoring-skip-ambiguous/worker-result.txt`

**Approach:**
- Build a fixture with one clear changed file and one ambiguous changed file.
- Require the helper/work loop to apply the clear anchor plus matching Code
  Anchor Evidence.
- Require the ambiguous target to produce an unresolved mapping record with no
  source mutation.
- Rerun scanner and require a structured unresolved-mapping finding.
- Prove the final work state is "blocked by traceability finding" rather than
  "passed" or "global pause."

**Test scenarios:**
- Happy path: clear source anchor and verification anchor are applied.
- Happy path: matrix Code Anchor Evidence is updated for the clear target only.
- Non-blocking path: ambiguous target is skipped and recorded.
- Blocking review path: scanner emits unresolved mapping finding and blocks pass.
- Error path: ambiguous task authority still pauses before authoring.
- Regression: helper does not hand-edit around its own pause/refusal.
- Regression: helper does not write outside the fixture root.

**Verification:**
- `scripts/traceweaver-smoke-code-trace-authoring` passes.
- `scripts/traceweaver-smoke-tw-skill-behavior` passes with runtime disabled.

---

- U5. **Wire tw-auto loop fixtures**

**Goal:** Prove `tw-auto` routes the non-blocking authoring loop through
`tw-work` and `tw-traceability-check`.

**Requirements:** R1, R4, R5, R6, R7

**Dependencies:** U3, U4

**Files:**
- Modify: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Modify: `fixtures/tw-skill-behavior/tw-auto-clean-task/loop-state.txt`
- Create: `fixtures/tw-skill-behavior/tw-auto-non-blocking-anchor-ambiguity/loop-state.txt`
- Create: `fixtures/tw-skill-behavior/tw-auto-authority-ambiguity-pause/loop-state.txt`
- Modify: `scripts/traceweaver-smoke-tw-skill-behavior`

**Approach:**
- Add a clean fixture route that includes:
  `tw-authority-gate -> tw-work -> tw-traceability-check -> tw-code-review`.
- Add a non-blocking ambiguity fixture route where `tw-work` skips one ambiguous
  anchor, scanner reports structured findings, and `tw-auto` stops with a held
  traceability-blocked state.
- Add an authority ambiguity fixture route where `tw-auto` pauses before work.
- Ensure the smoke differentiates "held unresolved traceability" from "passed."

**Test scenarios:**
- Happy path: clean task can continue to `tw-code-review`.
- Non-blocking ambiguity path: clear anchors are recorded, ambiguous candidate
  is reported, and review acceptance is blocked.
- Pause path: missing requirement meaning pauses before `tw-work`.
- Regression: `tw-auto` does not route directly to raw `ce-work`.
- Regression: `tw-auto` does not claim completion after unresolved mapping
  findings.

**Verification:**
- `scripts/traceweaver-smoke-tw-skill-behavior` passes with runtime disabled.

---

- U6. **Review-staging and status/hash handoff**

**Goal:** Make the changed implementation, fixtures, matrix evidence, and
status/hash records coherent for review without treating staging as publication.

**Requirements:** R5, R7, R8

**Dependencies:** U1 through U5

**Files:**
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `traceability-matrix.md`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Possibly modify: `docs/plans/2026-05-05-002-feat-tw-skill-behavior-audit-plan.md`

**Approach:**
- Record smoke outputs and file hashes once after the implementation fixtures
  pass.
- Use `tw-work` review-staging only for the exact changed files and evidence
  records in this plan.
- Do not stage unrelated authority docs or historical baseline wording.
- Keep runtime, Vestro, publication, clean replacement, release/package/upstream
  readiness, R31, and unconstrained host support held.

**Test scenarios:**
- Happy path: staged artifact identity matches recorded hashes.
- Error path: split staged/unstaged authority files block accepted review.
- Regression: status/hash updates do not reopen broad historical wording unless
  they contradict this gate or over-authorize behavior.

**Verification:**
- `git diff --check` passes for scoped files.
- Intent Contract YAML parses.
- Scoped `tw-code-review` passes for behavior-bearing files and smokes.
- Scoped `tw-doc-review` passes for status/hash update only if code review is
  clean.

---

## Verification Plan

Run these during implementation, scoped to this plan:

- `ruby -ryaml -e 'YAML.load_file(".traceweaver/intent-contract.yml")'`
- `scripts/traceweaver-smoke-code-traceability`
- `scripts/traceweaver-smoke-code-trace-authoring`
- `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior`
- `git diff --check`
- `/tw-code-review scoped to REQ-TW-058 non-blocking trace-anchor authoring loop implementation, fixtures, smokes, and Code Anchor Evidence` passed as `TW-CODE-REVIEW-2026-05-07-TRACE-AUTHORITY-STATUS-AWARE-CLEAN-001`.
- `/tw-doc-review scoped only to the REQ-TW-058 implementation status/hash update`
  passed as `TW-DOC-REVIEW-2026-05-07-REQ-TW-058-IMPLEMENTATION-STATUS-HASH-CLEAN-001`.

---

## Review And Handoff

This plan should go through `/tw-doc-review` before implementation. If clean,
the next implementation command is:

```text
/tw-work docs/plans/2026-05-07-002-feat-non-blocking-trace-anchor-loop-plan.md
```

Current review handoff after implementation and scoped code review:

```text
REQ-TW-058 implementation status/hash doc review passed as TW-DOC-REVIEW-2026-05-07-REQ-TW-058-IMPLEMENTATION-STATUS-HASH-CLEAN-001; active-host runtime, Vestro dogfood, publication, release/package/upstream readiness, R31, and unconstrained-host claims remain held.
```

---

## Held Claims

- Active-host runtime invocation of the full `tw-auto` loop remains held.
- Active-session prompt-registry completeness remains held.
- Vestro writes remain held until Vestro has its own accepted project-write
  allowance.
- Publication, commit, push, PR, remote mutation, release readiness, clean CE
  replacement, package readiness, upstream readiness, R31, and unconstrained-host
  claims remain held.
- Whole-repo historical trace-anchor debt remains audit/baseline debt unless
  touched by the current implementation scope.
