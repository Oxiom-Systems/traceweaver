---
title: "feat: Add tw-plan wrapper and gate discipline"
type: feat
status: active
date: 2026-05-06
---

# feat: Add tw-plan wrapper and gate discipline

## Summary

Add a TraceWeaver-controlled `tw-plan` wrapper so planning uses the same TW
entrypoint pattern as work, review, debug, and publication. At the same time,
codify the operating rule that status/hash wording repairs are housekeeping
unless they change allowed behavior, runtime/publication claims, requirements,
or the current review gate.

---

## Problem Frame

TraceWeaver is trying to replace CE-style manual orchestration, but planning is
still exposed as raw `ce-plan`. That leaves a gap in the user-facing workflow:
`tw-auto` can route work/review/debug through TW wrappers, but the planning
phase still depends on a legacy CE surface. The project has also hit a repeated
review-record churn loop where harmless evidence wording and hash updates keep
becoming product-blocking gates.

---

## Requirements

- R1. Provide a `tw-plan` wrapper for meaningful planning work so users do not
  need to call raw `ce-plan` directly in the normal TraceWeaver flow.
- R2. `tw-plan` must preserve CE planning usefulness while adding TraceWeaver
  authority checks, requirements-quality routing, traceability context, and
  no-publication boundaries.
- R3. `tw-auto` must resolve and call `tw-plan` for planning instead of raw
  `ce-plan`, while keeping packaged `ce-plan` as the underlying planning engine.
- R4. Planning must pause or route to `tw-requirements-review` when
  requirements are missing, unclear, contradictory, stale, or would require
  material authority changes.
- R5. TraceWeaver must distinguish product-blocking gates from housekeeping:
  only real behavior/safety issues, authority contradictions, requirements
  changes, runtime/publication overclaims, or contradictions in the current gate
  may block progress.
- R6. Deterministic fixtures and install/discovery smokes must prove `tw-plan`
  is packaged, direct-callable, routed by `tw-auto`, and blocked correctly when
  requirements are not plan-ready.

**Authority trace:** REQ-TW-052 covers the CE wrapper backlog and explicitly
includes `ce-plan`; REQ-TW-056 covers `tw-auto` task/plan closure; REQ-TW-057
covers operating modes and scoped review to avoid broad churn; REQ-TW-050 covers
authority-document review constraints; REQ-TW-053 covers review-staging versus
publication.

---

## Scope Boundaries

- Do not implement code in this planning step.
- Do not claim autonomous planning runtime, plan completion, publication, clean
  CE replacement, or Vestro readiness from static wrapper fixtures.
- Do not make broad authority-record polishing a dependency for this slice.
- Do not use `tw-plan` to approve or rewrite requirements. It may route to
  requirements review or create a planning gap, but not silently change
  authority.
- Do not remove raw `ce-plan`; it remains packaged as the underlying planning
  engine and selected manual-continuity surface until replacement is proven.

### Deferred to Follow-Up Work

- Runtime proof that active Codex invokes `tw-plan` as a skill, not only static
  file/hash inspection.
- Vestro use of `tw-plan`, after TraceWeaver proves the wrapper in this repo.
- Clean CE replacement claim, after all required CE planning/work/review/debug
  and publication surfaces are wrapped or explicitly classified.

---

## Context & Research

### Relevant Code and Patterns

- `plugins/traceweaver-core/skills/tw-auto/SKILL.md` already resolves TW wrapper
  skills and currently lists `ce-plan` directly.
- `plugins/traceweaver-core/skills/ce-plan/SKILL.md` already contains a
  TraceWeaver Package Boundary warning and should remain the underlying CE
  planning engine.
- `plugins/traceweaver-core/skills/tw-work/SKILL.md`,
  `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`,
  `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`, and
  `plugins/traceweaver-core/skills/tw-debug/SKILL.md` provide wrapper patterns
  to mirror.
- `scripts/traceweaver-smoke-tw-skill-behavior` is the existing deterministic
  behavior-contract smoke for wrapper routing.
- `scripts/traceweaver-smoke-codex-discovery`,
  `scripts/traceweaver-smoke-codex-host-registry`, and
  `scripts/traceweaver-reconcile-codex-host-skills` are the install and
  active-host skill-surface proof points.

### Institutional Learnings

- Runtime claims stay held until fresh runtime proof exists; static/doc/code
  review does not imply runtime readiness.
- The stable machine setup uses direct CE/TW skills with external CE disabled,
  so direct-callable skill presence and `codex debug prompt-input` visibility
  matter.
- TraceWeaver review closure should be scoped: broad authority polishing is a
  cost unless it changes behavior, scope, runtime/publication claims, or the
  current gate.

### External References

- None. The work follows local TraceWeaver wrapper patterns and does not need
  external framework guidance.

---

## Key Technical Decisions

- Add `tw-plan` as a first-class wrapper, not as a `tw-auto` note only: users
  need a consistent TW entrypoint, and `tw-auto` needs a resolvable planning
  dependency.
- Keep `ce-plan` as the implementation engine: this preserves the existing plan
  quality workflow while TraceWeaver adds authority and gate discipline.
- Put anti-churn behavior in the operating-mode policy and wrapper instructions:
  the rule must affect planning, doc review, code review, and `tw-auto`
  sequencing, not just one plan document.
- Treat status/hash repairs as review-staging housekeeping unless they change
  allowed behavior or the current gate: this prevents evidence hygiene from
  blocking product progress without weakening real safety gates.

---

## Open Questions

### Resolved During Planning

- Should `tw-plan` be a new skill or only a `tw-auto` behavior? It should be a
  new skill, because users expect a TW replacement for CE planning and
  `tw-auto` needs a direct resolved wrapper.
- Should `tw-plan` approve requirements? No. It can require
  `tw-requirements-review` or stop with a gap, but approval remains an authority
  gate.

### Deferred to Implementation

- Exact `tw-plan` fixture wording can be adjusted to match the final skill text,
  as long as it proves preflight, CE delegation, pause, and no-publication
  behavior.
- Exact active-host prompt visibility for `tw-plan` depends on install/reload
  state after reconciliation.

---

## Implementation Units

- U1. **Record tw-plan and gate-discipline authority**

**Goal:** Update authority records so `tw-plan` and the anti-churn gate rule are
accepted implementation inputs without reopening broad record polishing.

**Requirements:** R1, R2, R4, R5

**Dependencies:** None

**Files:**
- Modify: `requirements.md`
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `traceability-matrix.md`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Test: `scripts/traceweaver-smoke-tw-skill-behavior`

**Approach:**
- Extend the existing REQ-TW-052/056/057 authority instead of creating a broad
  new replacement program.
- Add a narrow ART/TRACE/ATP/RESULT/VER chain for `tw-plan` wrapper fixtures.
- Record the gate-discipline rule: status/hash wording updates block only when
  they over-authorize runtime/publication, change requirements, contradict the
  current gate, or hide a real behavior/safety issue.

**Patterns to follow:**
- REQ-TW-049/050 wrapper wording in `requirements.md`.
- VER-TW-040 and VER-TW-045 rows in `traceability-matrix.md`.

**Test scenarios:**
- Happy path: authority records identify `tw-plan` as a selected TW wrapper for
  packaged `ce-plan`.
- Edge case: stale historical wording outside the current gate is recorded as
  non-blocking housekeeping, not product-blocking authority.
- Error path: runtime/publication or requirement-scope overclaims remain
  blocking.

**Verification:**
- Intent Contract parses as YAML.
- Scoped `tw-doc-review` finds no contradiction in the `tw-plan` authority and
  gate-discipline update.

---

- U2. **Add the tw-plan skill wrapper**

**Goal:** Create `tw-plan` as the TraceWeaver-controlled planning facade.

**Requirements:** R1, R2, R4

**Dependencies:** U1

**Files:**
- Create: `plugins/traceweaver-core/skills/tw-plan/SKILL.md`
- Create: `plugins/traceweaver-core/skills/tw-plan/references/traceweaver-operating-modes.md`
- Modify: `plugins/traceweaver-core/skills/ce-plan/SKILL.md`
- Test: `scripts/traceweaver-smoke-tw-skill-behavior`

**Approach:**
- Mirror the wrapper style used by `tw-work`, `tw-code-review`, and
  `tw-doc-review`.
- Require loading `requirements.md`, `traceability-matrix.md`, and
  `.traceweaver/intent-contract.yml` before meaningful planning.
- Classify planning work as authority-baseline planning or unchanged-authority
  implementation planning.
- Delegate to TraceWeaver-packaged `ce-plan` only after authority is present and
  requirements are plan-ready or explicitly held.
- Block staging, commit, push, PR, release, clean replacement, and runtime
  claims.

**Patterns to follow:**
- `plugins/traceweaver-core/skills/tw-work/SKILL.md`
- `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`
- `plugins/traceweaver-core/skills/ce-plan/SKILL.md`

**Test scenarios:**
- Happy path: approved requirements and traceability context allow delegation to
  packaged `ce-plan` under no-publication mode.
- Error path: missing requirements routes to bootstrap or
  `tw-requirements-review`, not raw planning.
- Error path: contradictory requirements pause for user input.
- Error path: planning that would change requirements stops before invoking
  `ce-plan`.

**Verification:**
- Static skill inspection proves `tw-plan` loads authority, delegates to
  packaged `ce-plan`, and preserves no-publication boundaries.

---

- U3. **Route tw-auto planning through tw-plan**

**Goal:** Make `tw-auto` resolve and use `tw-plan` in the normal closure loop.

**Requirements:** R3, R4, R5

**Dependencies:** U2

**Files:**
- Modify: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Modify: `fixtures/tw-skill-behavior/tw-auto-clean-task/loop-state.txt`
- Test: `scripts/traceweaver-smoke-tw-skill-behavior`

**Approach:**
- Replace direct `ce-plan` as a required workflow skill with `tw-plan`.
- Keep `ce-plan` referenced only as the packaged underlying engine.
- Update clean-loop fixture route to include `tw-plan` before
  `tw-authority-gate` and `tw-work`.
- Preserve pause behavior when requirements are unclear or contradictory.

**Patterns to follow:**
- Existing `tw-auto` routing for `tw-work`, `tw-code-review`, `tw-doc-review`,
  `tw-debug`, `tw-commit`, and `tw-commit-push-pr`.

**Test scenarios:**
- Happy path: `tw-auto` clean task route includes `tw-plan` and then
  `tw-authority-gate`.
- Error path: missing `tw-plan` reports install/package gap and does not fall
  back to raw external CE.
- Error path: unclear requirement fixture pauses before planning or work.

**Verification:**
- `scripts/traceweaver-smoke-tw-skill-behavior` passes with runtime disabled.

---

- U4. **Prove packaging and active-host discovery**

**Goal:** Ensure `tw-plan` is installed and discoverable like other direct TW
skills.

**Requirements:** R1, R3, R6

**Dependencies:** U2, U3

**Files:**
- Modify: `scripts/traceweaver-smoke-codex-discovery`
- Modify: `scripts/traceweaver-smoke-codex-host-registry`
- Modify: `scripts/traceweaver-reconcile-codex-host-skills`
- Modify: `scripts/traceweaver-smoke-codex-host-reconciliation`
- Test: `scripts/traceweaver-smoke-codex-discovery`
- Test: `scripts/traceweaver-smoke-codex-host-reconciliation`
- Test: `scripts/traceweaver-smoke-codex-host-registry`

**Approach:**
- Add `tw-plan` to required direct-callable skills.
- Prove its skill-local operating-mode policy is packaged and copied.
- Keep active-session prompt-registry visibility as held unless a fresh prompt
  probe proves it.
- After `tw-plan`, `tw-auto`, or `tw-work` changes, require host
  reconciliation before any "current active-host skill" claim is accepted.

**Patterns to follow:**
- Existing `tw-work`, `tw-debug`, `tw-commit`, and `tw-commit-push-pr` discovery
  checks.

**Test scenarios:**
- Happy path: isolated install contains current `tw-plan/SKILL.md` and
  skill-local references.
- Error path: active host with stale `tw-plan` reports held/stale, not pass.
- Error path: missing prompt-input visibility remains held without blocking
  static file proof.

**Verification:**
- Discovery and host-registry smokes pass or emit explicit held states matching
  the active host.

---

- U5. **Encode anti-churn gate discipline in review wrappers**

**Goal:** Prevent broad evidence-record churn from blocking normal product
progress while preserving real safety gates.

**Requirements:** R5

**Dependencies:** U1

**Files:**
- Modify: `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-work/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-auto/references/traceweaver-operating-modes.md`
- Modify: `plugins/traceweaver-core/skills/tw-work/references/traceweaver-operating-modes.md`
- Modify: `plugins/traceweaver-core/skills/tw-code-review/references/traceweaver-operating-modes.md`
- Modify: `plugins/traceweaver-core/skills/tw-doc-review/references/traceweaver-operating-modes.md`
- Modify: `plugins/traceweaver-core/skills/tw-plan/references/traceweaver-operating-modes.md`
- Test: `scripts/traceweaver-smoke-tw-skill-behavior`

**Approach:**
- Add a shared "gate significance" rule:
  - block on real behavior/safety issues;
  - block on contradictions that over-authorize runtime, publication,
    requirements, or the current accepted gate;
  - do not block product work on stale historical wording or hash refreshes that
    are outside the scoped gate and do not change allowed behavior.
- Ensure `tw-doc-review` can still block split staged/working authority sets
  when the review target is an authority-status update.
- Ensure `tw-code-review` reports stale active-host evidence when the code under
  review changes installed skill hashes, because that does affect allowed
  runtime/use claims.

**Patterns to follow:**
- REQ-TW-057 operating-mode wording.
- Existing review-staging boundary in `tw-work`.

**Test scenarios:**
- Happy path: scoped code review proceeds when only unrelated historical wording
  is stale.
- Error path: active-host currentness overclaim blocks after a skill hash
  changes.
- Error path: publication or runtime claim overreach blocks.
- Error path: requirements change routes to authority review.

**Verification:**
- Skill-behavior smoke proves the gate-significance rule is present in wrapper
  surfaces.

---

- U6. **Record reviewed status once and hand back to product flow**

**Goal:** Close this slice without restarting broad doc-review churn.

**Requirements:** R5, R6

**Dependencies:** U2, U3, U4, U5

**Files:**
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `traceability-matrix.md`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Test: `scripts/traceweaver-smoke-tw-skill-behavior`

**Approach:**
- Run scoped `tw-code-review` for `tw-plan`, `tw-auto` routing, discovery
  smokes, and gate-significance behavior.
- If code review passes, record that result once.
- Run scoped `tw-doc-review` only for the status/hash update if it changes
  allowed use or the active gate.
- Continue to active-host reconciliation and real `tw-auto`/`tw-work` dogfood
  instead of broad historical wording cleanup.

**Patterns to follow:**
- The current review-staging handoff model under REQ-TW-057.

**Test scenarios:**
- Happy path: clean code review is recorded once and next step is active-host
  reconciliation or dogfood, not another broad doc review.
- Error path: if review finds a runtime/publication/requirements overclaim, the
  status update remains blocking.

**Verification:**
- Scoped staged/working hashes match for the review set.
- Intent YAML parses.
- `tw-traceability-check` passes for changed behavior-bearing files.

---

## System-Wide Impact

- **Interaction graph:** `tw-auto` will call `tw-plan`, then
  `tw-authority-gate`, `tw-work`, `tw-traceability-check`, `tw-code-review`, and
  `tw-doc-review`. `ce-plan` remains underneath `tw-plan`.
- **Error propagation:** Missing or unclear requirements return a held planning
  state to `tw-auto`; they do not become silent plan assumptions.
- **State lifecycle risks:** Active-host currentness must be refreshed after
  skill changes; stale currentness evidence is a real blocker because it affects
  allowed use.
- **API surface parity:** `tw-plan` extends the TW wrapper family to planning,
  matching `tw-work`, `tw-code-review`, `tw-doc-review`, `tw-debug`, `tw-commit`,
  and `tw-commit-push-pr`.
- **Integration coverage:** Static fixture smokes prove routing and boundaries;
  active-host runtime remains held until a separate proof.
- **Unchanged invariants:** Requirements approval stays outside `tw-plan`; commit
  and PR actions stay outside `tw-plan` and remain publication-gated.

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| `tw-plan` becomes another manual step instead of reducing workflow friction. | Route `tw-auto` through `tw-plan` directly and keep user-facing guidance centered on `tw-auto`. |
| Anti-churn rule hides real authority contradictions. | Limit non-blocking housekeeping to stale wording/hash issues that do not change allowed behavior, runtime/publication claims, requirements, or the current gate. |
| Active-host evidence becomes stale after adding `tw-plan`. | Make host reconciliation and stale-skill held output part of the acceptance path. |
| Raw `ce-plan` remains available and users bypass TW. | Keep `ce-plan` as manual continuity but make `tw-plan` and `tw-auto` the preferred surfaces in installed skill docs and discovery smokes. |

---

## Documentation / Operational Notes

- Update any "required direct-callable skills" lists to include `tw-plan`.
- When finalizing this slice, report held runtime/active-host claims explicitly
  instead of implying `tw-plan` is runtime-proven.
- The next productive path after this plan is implemented should be scoped code
  review, active-host reconciliation, then dogfood through `tw-auto`.

---

## Sources & References

- Related requirement authority: `requirements.md`
- Matrix authority: `traceability-matrix.md`
- Intent Contract: `.traceweaver/intent-contract.yml`
- Existing workflow wrapper: `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- Underlying planning engine: `plugins/traceweaver-core/skills/ce-plan/SKILL.md`
- Existing implementation wrapper: `plugins/traceweaver-core/skills/tw-work/SKILL.md`
- Existing review wrappers: `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`, `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`
- Active-host reconciliation plan: `docs/plans/2026-05-06-003-feat-active-host-tw-auto-reconciliation-plan.md`
