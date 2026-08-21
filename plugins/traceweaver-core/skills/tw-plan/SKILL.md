---
name: tw-plan
description: TraceWeaver-controlled planning wrapper. Use when planning meaningful work that must stay bounded by requirements, Intent Contract authority, traceability, verification, validation, and no-publication controls before implementation.
argument-hint: "[feature description, requirements doc path, or plan path]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-plan`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=planning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-036; ver=VER-TW-046 -->
<!-- TRACEWEAVER: file-role=planning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=optional-graphify-planning-route; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: entrypoint=graphify_planning_orientation; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->

# TraceWeaver Plan

## Purpose

Run planning as a TraceWeaver-controlled step instead of a raw CE planning
entrypoint. `tw-plan` preserves the useful `ce-plan` planning workflow while
adding TraceWeaver authority checks, requirements-quality routing,
traceability context, operating-mode classification, and no-publication
boundaries.

Use `tw-plan` for meaningful feature, bug, workflow, review, or implementation
planning when the resulting plan may become TraceWeaver implementation input.
Do not use it to approve, rewrite, broaden, or silently reinterpret
requirements.

## Native Child Routing

Before any TraceWeaver-owned native Codex planning call, run the packaged
sibling `tw-auto/scripts/traceweaver-route-native-child` against the canonical
workflow-profile contract. Use only its explicit dispatch parameters and
finalize its receipt with independent host/execution attestation. A held route
makes child output ineligible; never inherit a model, fall back, or edit an
imported CE-derived body to bypass the overlay.

## Required Authority Inputs

Before planning meaningful behavior, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/verification-planner-guide.md` when planning the
  verification method, evidence, and pass/fail criteria for planned work
- TraceWeaver-packaged `verification-planner` for substantive verification
  planning: method selection, procedure and evidence planning, and pass/fail
  criteria beyond the summary guide
- skill-local `references/validation-planner-guide.md` when planning how the
  result will be validated against stakeholder need or acceptance signal
- TraceWeaver-packaged `validation-planner` for substantive validation
  planning: scenario, rater profile, acceptance signal, and evidence path
  beyond the summary guide
- skill-local `references/design-decision-reviewer-guide.md` when a plan
  selects between implementation approaches, records a design decision or ADR,
  or creates derived requirements from a design choice
- skill-local `references/architecture-and-interface-reviewer-guide.md` when
  planned work crosses module, runtime, package, API, or human workflow
  boundaries or introduces external dependencies or derived requirements
- relevant `.traceweaver/` task, gap, change, exception, trace, or evidence
  records

If authority files are missing, treat the run as authority bootstrap planning
only. If requirements are unclear, contradictory, incomplete, stale, missing, or
would need material change, pause or route to `tw-requirements-review` before
delegating to `ce-plan`.

## Requirements-Quality Preflight

`tw-plan` is the only planning entrypoint. Before it delegates to the
TraceWeaver-packaged `ce-plan` engine, it must run or require the
`tw-requirements-review` preflight for any new, changed, candidate, unclear,
unreviewed, or authority-impacting requirement text.

When requirements are already accepted and unchanged, `tw-plan` may cite the
existing accepted requirements-review evidence instead of rerunning the review.
That citation must identify the accepted requirement IDs, baseline hash, and
review or authority record used. If the accepted state cannot be identified,
the preflight is not satisfied and `ce-plan` must not run.

`tw-plan` must stop before packaged `ce-plan` when the preflight returns
`Needs revision`, `Blocked`, `Human decision`, `Reclassify`, missing
verification/validation mapping, or any traceability gap that would let
planning invent authority. It may propose gaps, changes, exceptions, accepted
risk candidates, or clarification questions, but it must not approve them.

## Workflow

1. Select the deterministic L0-L3 workflow profile before a builder may mutate:
   - L0: documentation, generated, or mechanical no-behavior work;
   - L1: narrow low-consequence behavior;
   - L2: cross-module, API, data-flow, or deployment-facing behavior; and
   - L3: money, security, destructive, release, external-side-effect, or
     unclear-authority work.
   Populate `references/workflow-profile-template.yml` with risk, selected
   controls, child roles, available/selected model and rationale, reviewer and
   repair caps, deploy/dogfood requirements, estimate-derived guards, and a
   canonical `profile_hash`. The selected profile is revision 1 and is frozen
   when the first builder is dispatched. An added control or reviewer after that
   point is refused unless a new revision names an escalation reason.
2. Identify whether the request is Authority Baseline Mode, Implementation Gate
   Mode planning, Review-Staging Mode, or Publication Mode using the skill-local
   operating-mode policy.
3. Stop before planning implementation details when requirements, accepted
   scope, validation intent, verification method, or must-not-change boundaries
   are unclear or contradictory.
4. Run the requirements-quality preflight above. Route requirements-quality
   problems to `tw-requirements-review`. `tw-plan` may propose gaps, changes,
   exceptions, accepted-risk candidates, or clarification questions, but must
   not approve them.
5. Confirm the baseline ID/hash, requirement IDs, trace/matrix context,
   verification target, validation question, and held claims that bound the
   planning run.
6. Delegate planning to the TraceWeaver-packaged `ce-plan` engine only after the
   requirements-quality preflight and authority context are passable, accepted
   as unchanged, or explicitly held with allowed use recorded.
7. Keep `ce-plan` in no-publication mode. It may create or update a plan
   artifact, but it must not implement code, stage files, commit, push, open
   PRs, update PRs, claim runtime readiness, or claim publication readiness.
8. Return the plan with its accepted authority scope, held claims, verification
   targets, next TraceWeaver command, and any unresolved authority gaps.

## Optional Graphify Planning Context

For a repository relationship or impact question, locate the packaged sibling
`tw-auto/scripts/traceweaver-graphify-advisory` helper and run its scoped search
before direct source inspection:

```sh
<skills-root>/tw-auto/scripts/traceweaver-graphify-advisory query --root <project-root> --question "<relationship question>"
```

The helper may report `installed_uninitialized` and initialize the local code
graph before searching. Treat `ready` context as a navigation lead that must be
corroborated against authoritative repository sources. For
`not_installed`, `no_useful_graph_context`, or `graphify_status=degraded`,
continue planning from those authoritative sources and include the helper's
recommendation or failure receipt. Graphify output is derived and is not authority.
It is not requirements, verification, validation, or a planning gate.

## Gate Discipline

Status/hash wording repairs are housekeeping unless they change allowed
behavior, requirements, current review-gate identity, runtime claims,
publication claims, or material authority. Report unrelated historical wording
drift as non-blocking debt instead of restarting broad authority polishing.

Still block planning when a contradiction would over-authorize implementation,
runtime, publication, clean replacement, requirements changes, or the current
review gate.

## Highest-Level Handoff Discipline

`tw-plan` owns requirements-quality preflight before packaged `ce-plan`. Do not
return standalone `tw-requirements-review` as the normal next user command when
accepted unchanged requirements can be cited and planning can proceed.

After plan creation or update, recommend the highest-level executable next
wrapper: normally `/tw-doc-review <plan>` for plan acceptance. The frozen
profile determines the V&V route: L0 records no capsule or exception ceremony
and goes to its applicable deterministic check; L1 uses `/tw-vv-define <plan>`
to produce one compact work-item capsule; L2/L3 use `/tw-vv-define <plan>` for
the compatible full v1 capsule. Route to `/tw-work <plan>` only with the
profile's required evidence. Do not create per-requirement validation documents
for L1.
Use `/tw-auto <plan-or-task>` for a multi-step closure loop. Recommend standalone
`tw-requirements-review` only for explicit requirements diagnostics,
baseline-authority review, or when planning is blocked because no higher wrapper
can proceed without a human authority decision.

## Output

Return:

- planning target and operating mode
- authority files loaded and baseline hash when available
- requirement IDs, trace IDs, verification IDs, and validation questions used
- `tw-requirements-review` route or result when applicable
- packaged `ce-plan` delegation status
- created or updated plan path when one exists
- held claims and non-blocking review debt
- highest-level next TraceWeaver wrapper command, review, or human decision
- frozen workflow profile revision/hash and its selected controls, child roles,
  model availability/choice/rationale, caps, and deploy/dogfood requirements

## Gate

Do not let a plan become implementation authority when requirements or authority
records are weak, ambiguous, unverifiable, stale, split, or unreviewed. Do not
claim runtime, publication, PR readiness, clean CE replacement, or release
readiness from planning.
