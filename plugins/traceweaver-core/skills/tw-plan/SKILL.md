---
name: tw-plan
description: TraceWeaver-controlled planning guidance. Use as an embedded phase of consolidated delivery, or standalone only when the user explicitly requests a plan artifact or planning-only result.
argument-hint: "[feature description, requirements doc path, or plan path]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

For a standalone `tw-plan` invocation, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-plan`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation. When `tw-plan` is an embedded phase of `tw-auto`, use
the already resolved parent invocation; do not create another invocation or
model dispatch.

<!-- TRACEWEAVER: file-role=planning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-036; ver=VER-TW-046 -->
<!-- TRACEWEAVER: file-role=planning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=optional-graphify-planning-route; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: entrypoint=graphify_planning_orientation; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: file-role=consolidated-planning-phase; req=REQ-TW-056,REQ-TW-082,REQ-TW-083,REQ-TW-086,REQ-TW-087; trace=TRACE-TW-031,TRACE-TW-067; ver=VER-TW-040,VER-TW-087 -->

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

## Consolidated Delivery Route

Load the `consolidated_delivery` block from the packaged sibling
`<skills-root>/tw-auto/references/workflow-profile-template.yml`. For normal
approved behavior or a mixed candidate, planning is a compact embedded phase
performed by the retained `gpt-5.6-sol` main session. It dispatches no planning
child, creates no plan artifact, and does not trigger plan document review.

Use standalone mode only when the user explicitly requests a plan artifact or
planning-only result, or when material normative authority must change before
implementation. A complex implementation does not by itself require
standalone planning.

## Native Child Routing

Only a separately authorized standalone planning call may need a native child.
Before that call, run the packaged
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

In consolidated delivery, apply that preflight in the retained main context;
it is not a requirements-review child. Accepted unchanged authority is cited
once and is not reviewed again.

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
6. In consolidated delivery, return the compact plan directly to the same Sol
   context and continue into the `tw-work` phase without a child, artifact, or
   document-review handoff.
7. In explicitly standalone mode only, delegate to the TraceWeaver-packaged
   `ce-plan` engine after the preflight. Keep it in no-publication mode; it may
   create or update the requested plan artifact but may not implement or
   publish.
8. Return the accepted authority scope, held claims, verification targets, and
   unresolved authority gaps in the form appropriate to the selected mode.

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

In consolidated delivery, remain in the same `/tw-auto` invocation and proceed
to the embedded `tw-work` phase with proportional V&V/test-first setup. Do not
emit `/tw-doc-review`, `/tw-vv-define`, or `/tw-work` as separate user or child
handoffs. For an explicitly requested standalone plan, return the plan to the
user; review it only when it changes normative authority. Recommend standalone
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
