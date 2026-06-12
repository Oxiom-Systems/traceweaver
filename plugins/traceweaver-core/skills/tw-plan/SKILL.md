---
name: tw-plan
description: TraceWeaver-controlled planning wrapper. Use when planning meaningful work that must stay bounded by requirements, Intent Contract authority, traceability, verification, validation, and no-publication controls before implementation.
argument-hint: "[feature description, requirements doc path, or plan path]"
---

<!-- TRACEWEAVER: file-role=planning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-036; ver=VER-TW-046 -->
<!-- TRACEWEAVER: file-role=planning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->

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

1. Identify whether the request is Authority Baseline Mode, Implementation Gate
   Mode planning, Review-Staging Mode, or Publication Mode using the skill-local
   operating-mode policy.
2. Stop before planning implementation details when requirements, accepted
   scope, validation intent, verification method, or must-not-change boundaries
   are unclear or contradictory.
3. Run the requirements-quality preflight above. Route requirements-quality
   problems to `tw-requirements-review`. `tw-plan` may propose gaps, changes,
   exceptions, accepted-risk candidates, or clarification questions, but must
   not approve them.
4. Confirm the baseline ID/hash, requirement IDs, trace/matrix context,
   verification target, validation question, and held claims that bound the
   planning run.
5. Delegate planning to the TraceWeaver-packaged `ce-plan` engine only after the
   requirements-quality preflight and authority context are passable, accepted
   as unchanged, or explicitly held with allowed use recorded.
6. Keep `ce-plan` in no-publication mode. It may create or update a plan
   artifact, but it must not implement code, stage files, commit, push, open
   PRs, update PRs, claim runtime readiness, or claim publication readiness.
7. Return the plan with its accepted authority scope, held claims, verification
   targets, next TraceWeaver command, and any unresolved authority gaps.

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
wrapper: normally `/tw-doc-review <plan>` for plan acceptance, `/tw-work <plan>`
after an accepted plan, or `/tw-auto <plan-or-task>` for a multi-step closure
loop. Recommend standalone `tw-requirements-review` only for explicit
requirements diagnostics, baseline-authority review, or when planning is blocked
because no higher wrapper can proceed without a human authority decision.

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

## Gate

Do not let a plan become implementation authority when requirements or authority
records are weak, ambiguous, unverifiable, stale, split, or unreviewed. Do not
claim runtime, publication, PR readiness, clean CE replacement, or release
readiness from planning.
