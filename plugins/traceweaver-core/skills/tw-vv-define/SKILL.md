---
name: tw-vv-define
description: TraceWeaver V&V definition-phase skill. Use after an accepted plan (following tw-plan) and before tw-work to derive RED verification artifacts and a docs/validation/ validation definition artifact for each in-scope requirement, route them through review, and hand a reviewed V&V definition capsule to tw-work.
argument-hint: "[accepted plan path or work-item ID]"
---

<!-- TRACEWEAVER: file-role=vv-definition-gate-skill; req=REQ-TW-077; trace=TRACE-TW-058; ver=VER-TW-078 -->
<!-- TRACEWEAVER: file-role=vv-definition-gate-skill; req=REQ-TW-076; trace=TRACE-TW-057; ver=VER-TW-077 -->

# TraceWeaver V&V Define

## Purpose

Own the V&V (verification and validation) definition phase that
REQ-TW-076/REQ-TW-077 insert between an accepted plan and `tw-work`. `tw-vv-define`
runs after `tw-plan` has produced an accepted plan and before `tw-work` begins
mutating behavior-bearing files. For each in-scope, behavior-bearing
requirement it derives executable verification artifacts from acceptance
criteria, records expected-failing (RED) evidence, authors the
`docs/validation/` validation definition artifact, routes both through
review, and hands a reviewed V&V definition capsule to `tw-work`.

`tw-vv-define` is static/advisory planning and pre-implementation-evidence
input only. It does not approve implementation authority, does not implement
behavior, and does not itself claim runtime-enforced or enforcing behavior.
Any future claim that `tw-work` mechanically refuses to proceed without this
skill's capsule is a separate held claim (REQ-TW-078) that requires its own
runtime proof gate; this skill's own contract stays advisory.

## Required Inputs

Before deriving V&V definition artifacts, load and cite:

- the accepted plan (from `tw-plan` or an equivalent accepted plan artifact)
- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `scripts/traceweaver-check-vv-capsule` (the deterministic
  capsule validator)
- TraceWeaver-packaged `verification-planner` for the verification method,
  procedure, and evidence-path content each artifact must carry
- TraceWeaver-packaged `validation-planner` for the validation scenario,
  rater/reviewer profile, acceptance signal, and evidence-path content the
  `docs/validation/` artifact must carry
- any relevant `.traceweaver/` task, gap, change, exception, trace, or
  evidence records

`tw-vv-define` orchestrates the V&V planning content that `verification-planner`
and `validation-planner` already define; it does not duplicate or re-derive
their planning rules. It packages their output into the REQ-TW-076 artifacts
and the REQ-TW-077 capsule.

If the plan is not accepted, or authority is missing, contradictory, stale, or
incomplete, stop with a human-decision pause. Do not infer or invent
requirement IDs, trace IDs, verification IDs, or validation IDs to make the
capsule appear complete.

## Workflow

1. **Confirm plan acceptance authority.** Identify the accepted plan (from
   `tw-plan` or equivalent), its baseline hash, and the requirement IDs it
   claims to implement. If plan acceptance cannot be confirmed, stop and
   return the missing authority instead of proceeding.
2. **Derive V&V definition artifacts per in-scope requirement.** For each
   in-scope, behavior-bearing requirement:
   - Use `verification-planner` to select the verification method and derive
     an executable verification artifact (test, fixture, or smoke) from the
     requirement's acceptance criteria.
   - Run or record the artifact's current (pre-implementation) execution and
     capture expected-failing (RED) evidence at a concrete evidence path.
   - Link the artifact and RED evidence to the requirement's `REQ-*`,
     `TRACE-*`, and `VER-*` IDs.
   - For pure documentation, mechanical, generated, or vendored changes,
     record a scoped not-applicable decision (`scope` + `reason`) instead of
     an executable artifact, following the same scoped-exception pattern
     already approved for REQ-TW-065 test-first evidence.
3. **Author the validation definition artifact.** Use `validation-planner` to
   produce a `docs/validation/` validation definition artifact per in-scope
   requirement (or shared across a work item's requirements when scenarios
   overlap) containing: validation questions, FAT/ATP-style acceptance
   criteria, a named rater/reviewer profile with independence note, and
   evidence paths. Register the artifact's path against the requirement's
   `VAL-*` ID.
4. **Route artifacts through review.** Send the validation definition artifact
   through `tw-doc-review`. Send executable verification/test/fixture content
   through `tw-code-review`. Do not treat either artifact as usable V&V
   definition input until its review passes or returns an explicit held
   condition that the capsule records.
5. **Emit the V&V definition capsule.** Produce a JSON capsule following the
   schema in `scripts/traceweaver-check-vv-capsule --schema` (and the example
   at `docs/validation/examples/vv-define-capsule.example.json`), naming for
   each in-scope requirement: `req_id`, `trace_id`, `ver_id`, `val_id`,
   `verification_artifact` path, `red_evidence` path, and
   `validation_artifact` path -- or a scoped `not_applicable{scope, reason}`
   entry. Run `scripts/traceweaver-check-vv-capsule --root <repo-root>
   --capsule <capsule-path>` and require a pass before handing the capsule to
   `tw-work`.
6. **Stop conditions.** If any in-scope requirement lacks approved authority,
   a stable ID, or a clear acceptance-criteria basis for deriving a
   verification/validation artifact, do not invent one. Record a gap or
   clarification request naming the missing authority and stop before
   emitting that requirement's capsule entry. A capsule with unresolved gaps
   must say so explicitly rather than silently omitting the requirement.

## Boundaries

- `tw-vv-define` does not approve implementation authority. A passing capsule
  is planning/pre-implementation-evidence input to `tw-work`, not an
  authority-gate decision.
- `tw-vv-define` does not implement behavior-bearing code itself. Deriving a
  RED verification artifact is authoring a failing test/fixture/smoke, not
  building the feature it tests.
- `tw-vv-define` does not commit, push, publish, open PRs, or make any
  release/publication claim.
- `tw-vv-define` does not edit `traceability-matrix.md` directly. It proposes
  matrix rows (Trace/Verification/Validation evidence, Code Anchor Evidence
  where applicable) for the capsule handoff and lets the accepted
  matrix-update path (`tw-work`'s matrix-evidence step, or an orchestrator
  merge) apply them.
- `tw-vv-define` must not silently skip a requirement that lacks an approved
  authority record. Requirements without approved authority route to a gap or
  clarification record, named explicitly in the capsule output, not omitted.
- `tw-vv-define` does not claim runtime-enforced, enforcing, or
  slash-command-driven behavior. Its contract is a static/advisory skill
  instruction plus a deterministic fixture-checkable capsule validator.

## Output

Return:

- the accepted plan and baseline hash used
- per-requirement V&V definition status: verification artifact + RED evidence
  path, or scoped not-applicable decision
- validation definition artifact path(s) and their `tw-doc-review` status
- verification/fixture content `tw-code-review` status
- the emitted capsule path and `traceweaver-check-vv-capsule` result
- open gaps, clarification requests, or held claims for any requirement that
  could not be closed
- highest-level next command: `/tw-work <plan> --vv-capsule <capsule-path>`
  when the capsule passes validation and all in-scope requirements are
  covered, or `/tw-auto <plan-or-task>` for a multi-step closure loop; when
  blocked, the exact missing authority, gap, or clarification needed instead
  of a command

## Highest-Level Handoff Discipline

`tw-vv-define` is the required step between an accepted `tw-plan` output and
`tw-work`. It does not replace `tw-authority-gate`, `tw-doc-review`,
`tw-code-review`, or `tw-traceability-check`; it orchestrates calling them for
the V&V definition artifacts described above. Recommend the highest-level next
wrapper (`/tw-work ... --vv-capsule <path>` or `/tw-auto ...`) once the capsule
passes. Recommend standalone lower gates only for an explicit diagnostic or a
human-decision pause where no higher wrapper can proceed.

## Gate

Do not hand a capsule to `tw-work` while `traceweaver-check-vv-capsule`
reports any finding, while a requirement's verification or validation artifact
has not passed its required review, or while an in-scope requirement lacks
approved authority. Do not claim that this skill or its capsule enforces,
blocks, or replaces `tw-work`'s own gates -- REQ-TW-078's `tw-work` preflight
upgrade remains a separate, still-held claim.
