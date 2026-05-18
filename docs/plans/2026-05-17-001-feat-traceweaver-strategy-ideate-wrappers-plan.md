---
title: "feat: TraceWeaver strategy and ideation wrappers"
type: feat
status: requirements_review_passed_authority_doc_review_passed_implementation_pending
date: 2026-05-17
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3
---

<!-- TRACEWEAVER: file-role=strategy-ideate-wrapper-plan; req=REQ-TW-051; trace=TRACE-TW-047; ver=VER-TW-060 -->
<!-- TRACEWEAVER: file-role=strategy-ideate-wrapper-plan; req=REQ-TW-052; trace=TRACE-TW-047; ver=VER-TW-060 -->
<!-- TRACEWEAVER: file-role=strategy-ideate-wrapper-plan; req=REQ-TW-064; trace=TRACE-TW-047; ver=VER-TW-060 -->

# TraceWeaver Strategy and Ideation Wrappers Plan

## Summary

TraceWeaver should expose `tw-strategy` and `tw-ideate` as TraceWeaver-owned
front-door wrappers for early product direction and idea generation.

Both wrappers are source-evidence and grounding surfaces only. They may help
shape stakeholder intent, candidate needs, options, risks, validation questions,
and brainstorm input, but they must not approve implementation authority,
rewrite requirements, or override `requirements.md` and the Intent Contract.

`tw-auto` may route to these wrappers before `tw-brainstorm` when the user's
request is upstream of requirements or when project bootstrap context is
missing. Once controlled requirements exist, implementation authority remains
`requirements.md`, `.traceweaver/intent-contract.yml`, approved exceptions, and
reviewed traceability records.

## Operating Mode

Mode: Authority Baseline Mode planning.

Existing authority identifies `ce-ideate` and `ce-strategy` as held future
surfaces. This plan selects them as candidate TraceWeaver wrapper surfaces, but
it does not authorize implementation until the strategy/ideation wrapper
authority update is reviewed.

Requirements-quality preflight:

- Existing `REQ-TW-051` requires explicit classification, provenance,
  authority status, wrapper behavior, and held claims before any missing CE
  surface is implied as supported.
- Existing `REQ-TW-052` requires a wrapper backlog entry and behavior contract
  for every selected wrapper.
- This plan introduces candidate `REQ-TW-064` to make strategy and ideation
  source-evidence behavior explicit before implementation.

If reviewers decide that existing `REQ-TW-051` and `REQ-TW-052` are sufficient
without a new requirement, `REQ-TW-064` may be omitted during authority update.
If the wrapper semantics materially broaden TraceWeaver behavior, record and
review `REQ-TW-064` before implementation work starts.

## Authority Capsule

Accepted baseline:

- Baseline ID: `REQ-BASELINE-2026-04-30-001`
- Baseline hash:
  `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`

Existing authority:

- `REQ-TW-041`: TraceWeaver must be productized as a standalone plugin, not a
  secondary helper that requires raw CE invocation.
- `REQ-TW-043`: direct CE invocation does not satisfy TraceWeaver authority,
  traceability, verification, or validation closure.
- `REQ-TW-044`: selected CE method steps must be wrapped or repackaged with
  systems-engineering controls.
- `REQ-TW-045`: idea and brainstorm flow may create or update the first
  controlled authority set, but source material is not authority until reviewed.
- `REQ-TW-048`: `tw-grill` is optional post-ideation source evidence and does
  not approve implementation authority.
- `REQ-TW-051`: held CE surfaces, including `ce-ideate` and `ce-strategy`, need
  reviewed classification, provenance, wrapper behavior, and held claims.
- `REQ-TW-052`: selected wrapper behavior must define authority preflight,
  requirements-quality checks when applicable, traceability, verification,
  validation, allowed outputs, blocked outputs, publication boundary, and held
  claims.
- `REQ-TW-056`: `tw-auto` owns the normal closure loop and stops for unclear or
  changed authority.
- `REQ-TW-059`: CE-derived components are imported implementation engines only;
  user-facing entrypoints must be TraceWeaver-owned wrappers or approved aliases.
- `REQ-TW-061`: every user-facing `tw-*` skill must have task-scoped guidance
  and distilled systems-engineering knowledge.

Candidate requirement:

- `REQ-TW-064`: TraceWeaver must expose strategy and ideation workflow through
  TraceWeaver-owned wrappers when those surfaces are selected for packaging.
  `tw-strategy` maintains product strategy as grounding/source evidence only.
  `tw-ideate` generates and critiques candidate ideas as source evidence only.
  Neither wrapper may approve implementation authority, rewrite requirements,
  override the Intent Contract, or claim validation. `tw-auto` may route to
  them before `tw-brainstorm` when the request is upstream of requirements, but
  implementation authority remains controlled requirements, approved
  exceptions, the Intent Contract, and reviewed traceability evidence.

Reserved proof chain for this implementation:

- Artifact: `ART-TW-061`
- Trace: `TRACE-TW-047`
- ATP: `ATP-TW-031`
- Result: `RESULT-TW-031`
- Verification: `VER-TW-060`

Validation question:

Can a user start upstream of requirements with strategy or ideation, keep that
output as source evidence only, and then move through `tw-brainstorm`,
requirements review, planning, work, and review without strategy or ideation
silently becoming implementation authority?

## Problem Frame

The README now explains that `tw-auto` is a valid starting point when users want
TraceWeaver to drive the workflow, and that `STRATEGY.md` is grounding context
when present. The product surface is still incomplete:

- `ce-ideate` and `ce-strategy` are still classified as held future surfaces in
  the CE skill-surface inventory.
- TraceWeaver has `tw-brainstorm`, `tw-grill`, `tw-plan`, and `tw-auto`, but no
  TraceWeaver-owned strategy or ideation entrypoint.
- Users can reasonably expect strategy and ideation to exist because upstream
  CE has those surfaces, and because product strategy is useful before
  brainstorm.
- Without explicit wrappers, agents may treat `STRATEGY.md`, ideation output,
  or strategy notes as authority, or may route users back to unwrapped CE.

The fix is to add wrappers with a narrow source-evidence boundary, not to make
strategy or ideation part of the accepted requirements baseline by themselves.

## Required Behavior

### `tw-strategy`

`tw-strategy` is the TraceWeaver-owned strategy wrapper.

Inputs may include a target problem, product approach, user/persona, success
metrics, active tracks, constraints, a current `STRATEGY.md`, and relevant
authority files.

Required behavior:

- Load `requirements.md`, `traceability-matrix.md`,
  `.traceweaver/intent-contract.yml`, and `STRATEGY.md` when present.
- If controlled requirements exist, compare strategy changes against accepted
  requirements and Intent Contract constraints.
- Create or update `STRATEGY.md` only as source evidence and grounding.
- Record strategy drift, conflicts, missing intent, candidate requirements,
  validation questions, and non-goals as source-evidence output.
- Route candidate requirement changes to `tw-requirements-review` or the next
  higher wrapper that owns that review.
- Recommend `tw-ideate`, `tw-grill`, `tw-brainstorm`, or `tw-auto` as the next
  command based on the user's goal.

Blocked behavior:

- Do not approve requirements or implementation authority.
- Do not silently update `requirements.md`, the Intent Contract, or the matrix.
- Do not implement code, tests, runtime harnesses, commits, PRs, releases, or
  publication actions.
- Do not claim validation, release readiness, clean replacement, runtime
  execution, or full CE parity.

### `tw-ideate`

`tw-ideate` is the TraceWeaver-owned ideation wrapper.

Inputs may include a product strategy, rough idea, problem statement, user
feedback, domain context, constraints, and existing authority files.

Required behavior:

- Read `STRATEGY.md` as grounding when present.
- Read accepted requirements, the Intent Contract, and the traceability matrix
  when present.
- Generate and critique candidate ideas, then rank or select the strongest
  candidates for deeper exploration.
- Identify assumptions, unknowns, risks, validation questions, and likely
  requirements gaps.
- Route selected ideas to `tw-grill` or `tw-brainstorm`.
- Route authority-impacting changes to requirements review instead of turning
  them into implementation input.

Blocked behavior:

- Do not create implementation plans as accepted authority.
- Do not write product requirements as approved requirements.
- Do not override accepted requirements or approved must-not-change boundaries.
- Do not implement, stage, commit, push, PR, deploy, publish, or claim release
  readiness.

### `tw-auto` Routing

`tw-auto` may route to upstream source-evidence wrappers before brainstorm:

- Strategy maintenance or product-positioning request: run or recommend
  `tw-strategy`.
- Big-picture idea generation request: run or recommend `tw-ideate`.
- Selected idea needing interrogation: run or recommend `tw-grill`.
- Candidate requirements or user needs: run or recommend `tw-brainstorm` and
  requirements review as appropriate.
- Approved implementation plan or task: skip strategy and ideation unless the
  request explicitly asks for upstream product direction.

`tw-auto` must keep strategy and ideation outputs out of the implementation
authority chain until they are promoted through reviewed requirements or
approved exceptions.

## Manual Workflow

Recommended manual flow:

```text
tw-strategy -> tw-ideate -> tw-grill -> tw-brainstorm ->
tw-requirements-review -> tw-plan -> tw-doc-review -> tw-work ->
tw-code-review/tw-doc-review -> tw-commit-push-pr when publication is requested
```

Users may skip strategy, ideation, or grill when the work already has accepted
requirements and clear implementation authority.

## Implementation Units

### U1: Authority Update

Update the controlled authority set before wrapper implementation:

- Add or confirm `REQ-TW-064`.
- Add `ART-TW-061`, `TRACE-TW-047`, `ATP-TW-031`, `RESULT-TW-031`, and
  `VER-TW-060` rows.
- Classify `ce-strategy` and `ce-ideate` from held future surfaces to selected
  TraceWeaver wrapper surfaces.
- Record that strategy/ideation remain source evidence only.
- Keep runtime, publication, release, clean replacement, and CE body edits held.

Required gate: `tw-requirements-review` if `REQ-TW-064` or any authority text is
added or changed, followed by scoped `tw-doc-review`.

### U2: Package Internal CE-Derived Engines

Package the selected CE-derived implementation components as internal engines:

- Add TraceWeaver-packaged `ce-strategy`.
- Add TraceWeaver-packaged `ce-ideate`.
- Record upstream source identity, source hashes, and classification.
- Do not expose raw `ce-strategy` or `ce-ideate` as user-facing workflow.
- Do not edit CE-derived bodies unless a reviewed overlay/fork record exists.

### U3: Add TraceWeaver Wrappers

Add user-facing wrappers:

- `plugins/traceweaver-core/skills/tw-strategy/SKILL.md`
- `plugins/traceweaver-core/skills/tw-ideate/SKILL.md`

Each wrapper must include:

- task-scoped start prompt;
- required authority inputs;
- source-evidence boundary;
- allowed outputs;
- blocked outputs;
- next-command handoff discipline;
- no-publication boundary;
- trace anchor comments;
- distilled systems-engineering guidance relevant to strategy or ideation.

### U4: Wire Routing and Discovery

Update routing surfaces:

- `tw-auto` strategy/ideation route selection before brainstorm.
- `using-agent-skills` or equivalent skill-surface guidance.
- README workflow and skill inventory.
- install/discovery and host-registry smokes.
- standalone packaging proof that user-facing flow is `tw-*`, not raw `ce-*`.

### U5: Add Deterministic Fixtures

Add fixtures that prove source-evidence boundaries:

- `tw-strategy` bootstrap with no authority files creates strategy evidence and
  stops before implementation authority.
- `tw-strategy` with accepted requirements flags conflicting strategy as a
  candidate change, not an approved baseline update.
- `tw-ideate` reads `STRATEGY.md` and emits ranked source-evidence ideas with
  assumptions and validation questions.
- `tw-ideate` conflict with requirements routes to requirements review.
- `tw-auto` routes strategy and ideation prompts to the wrappers before
  brainstorm and skips them for already-approved implementation tasks.
- no-publication fixture proves no commit, push, PR, deploy, or release action.

### U6: Review and Status Closure

After implementation:

- Run implementation-mode traceability check on wrapper files, fixtures, smokes,
  README, matrix rows, and evidence records.
- Run `tw-code-review` scoped to the wrapper implementation, fixtures, routing,
  discovery/host smokes, and Code Anchor Evidence.
- Record the clean code review once if clean.
- Run scoped `tw-doc-review` only for authority/status/hash updates.
- Keep runtime invocation, package/release, clean replacement, autonomous
  publication, Vestro/R31 dogfood, and full runtime-driver claims held unless
  separately proven.

## Verification Targets

Required deterministic checks:

- `scripts/traceweaver-smoke-tw-skill-behavior`
- `scripts/traceweaver-smoke-codex-discovery`
- `TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-host-registry`
- `scripts/traceweaver-smoke-codex-separate-home-runtime` when packaging state
  changes.
- `plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors`
  over changed behavior-bearing files.
- `git diff --check`

Runtime prompt invocation may remain held unless a separate runtime proof binds
decisions to the loaded TraceWeaver skill identity.

## Held Claims

This plan does not claim:

- `tw-strategy` or `tw-ideate` implementation exists;
- strategy or ideation output is implementation authority;
- requirements were approved or changed;
- runtime invocation of either wrapper is proven;
- `tw-auto` full runtime-driver proof is closed;
- release readiness, package publication, clean CE replacement, or
  unconstrained-host support;
- Vestro/R31 dogfood readiness;
- CE-derived component body edits are allowed without a reviewed overlay/fork
  record.

## Suggested Next Steps

1. Treat requirements review
   `TW-REQ-REVIEW-2026-05-17-REQ-TW-064-STRATEGY-IDEATE-WRAPPERS-CLEAN-001`
   and authority/status doc review
   `TW-DOC-REVIEW-2026-05-17-REQ-TW-064-STRATEGY-IDEATION-WRAPPER-AUTHORITY-STATUS-CLEAN-001`
   as passed for this planning input.
2. Run:

   ```text
   /tw-work docs/plans/2026-05-17-001-feat-traceweaver-strategy-ideate-wrappers-plan.md
   ```

3. Keep runtime, active-host currentness, publication, release/package/upstream,
   clean replacement, Vestro/R31, unconstrained-host support, and CE body edits
   held until their own proof gates pass.

4. After requirements and plan authority are accepted, run:

   ```text
   /tw-work docs/plans/2026-05-17-001-feat-traceweaver-strategy-ideate-wrappers-plan.md
   ```
