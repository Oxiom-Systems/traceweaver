---
name: tw-vv-define
description: Profile-aware TraceWeaver V&V definition skill. Use it for L1 compact work-item evidence and L2/L3 full V&V capsules before tw-work.
argument-hint: "[accepted plan path or work-item ID]"
---

<!-- TRACEWEAVER: file-role=vv-definition-gate-skill; req=REQ-TW-077; trace=TRACE-TW-058; ver=VER-TW-078 -->
<!-- TRACEWEAVER: file-role=vv-definition-gate-skill; req=REQ-TW-076; trace=TRACE-TW-057; ver=VER-TW-077 -->

# TraceWeaver V&V Define

## Purpose

Own the V&V (verification and validation) definition phase that
REQ-TW-076/REQ-TW-077 insert between an accepted plan and `tw-work` only when
the selected workflow profile requires it. L0 has no V&V capsule. L1 emits one
compact work-item capsule. L2/L3 retain the existing full `tw-vv-capsule/1`
contract, including executable verification, RED evidence, and validation
artifacts.

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

1. **Select the frozen profile's V&V path.** Do not add controls after builder
   dispatch. L0 records no V&V capsule or exception ceremony and uses only its
   applicable deterministic check. L1 creates exactly one `tw-vv-compact/1`
   work-item capsule containing an authority reference, focused verification,
   one validation question, and expected evidence. It must not create
   per-requirement validation documents. L2 and L3 use the full v1 path below;
   L3 additionally records rollback and owner-decision controls.
2. **Confirm the authority appropriate to the profile.** Identify the accepted
   plan and baseline hash. L1 needs one approved work-item authority reference;
   L2/L3 additionally identify the in-scope requirement IDs. If the applicable
   authority cannot be confirmed, stop and return the missing authority.
3. **Use the selected profile's evidence shape.** For L1, choose one focused
   verification artifact, state one work-item validation question, name the
   expected evidence, and retain the profile's one independent reviewer. Do
   not derive RED evidence, IDs, or validation documents per requirement. For
   L2/L3, derive the full V&V artifacts per in-scope requirement: executable
   verification, pre-implementation RED evidence, linked `REQ-*`/`TRACE-*`/
   `VER-*` IDs, and a validation definition artifact with its `VAL-*` ID.
4. **Route only the required review controls.** L1 uses its profiled focused
   verification and independent reviewer; it does not invoke document and code
   review per artifact. L2/L3 route validation artifacts through
   `tw-doc-review` and executable verification content through `tw-code-review`.
   A full artifact is not usable until its required review passes or is held.
5. **Emit the profile-appropriate result.** L0 emits no capsule. L1 emits one
   `tw-vv-compact/1` capsule with `workflow_profile: L1`, `authority_ref`,
   `focused_verification`, `validation_question`, and `expected_evidence`.
   L2/L3 emit the compatible `tw-vv-capsule/1` format; L3 also includes
   rollback and owner-decision high-risk controls. Run the checker and require
   a pass before handing an L1-L3 capsule to `tw-work`.
6. **Stop conditions.** If the applicable authority, focused verification, or
   full-capsule ID/artifact basis is missing, do not invent it. Record a gap or
   clarification request and stop rather than silently omitting the required
   evidence.

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
- `tw-vv-define` must not silently skip applicable authority: L1 stops on a
  missing work-item authority reference; L2/L3 stop on an in-scope requirement
  without approved authority and record a gap or clarification.
- `tw-vv-define` does not claim runtime-enforced, enforcing, or
  slash-command-driven behavior. Its contract is a static/advisory skill
  instruction plus a deterministic fixture-checkable capsule validator.

## Output

Return:

- selected profile and the proportional route (L0 no capsule, L1 compact, or
  L2/L3 full v1)
- the accepted plan and baseline hash used
- L0: deterministic-check status only, with no capsule or exception record
- L1: compact capsule path/checker result, focused verification, validation
  question, expected evidence, and profiled reviewer status
- L2/L3: per-requirement verification + RED evidence, validation-artifact and
  required-review statuses; L3 high-risk-control status
- open gaps, clarification requests, or held claims for missing applicable
  authority or evidence
- highest-level next command: `/tw-work <plan>` with the profile's required
  evidence, or `/tw-auto <plan-or-task>` for a multi-step closure loop; when
  blocked, the exact missing authority, gap, or clarification instead

## Highest-Level Handoff Discipline

`tw-vv-define` is the required V&V step only for L1-L3; L0 routes directly to
its deterministic check. It does not replace `tw-authority-gate`,
`tw-doc-review`, `tw-code-review`, or `tw-traceability-check`: L1 uses only its
profiled reviewer, while L2/L3 orchestrate the full artifact reviews. Recommend
`/tw-work <plan>` only after the profile's evidence passes; otherwise return
`/tw-auto` or the exact human-decision pause.

## Gate

L0 has no V&V capsule gate. Do not hand an L1-L3 capsule to `tw-work` while
`traceweaver-check-vv-capsule` reports a finding. L1 requires its compact
work-item fields and profiled reviewer only. L2/L3 additionally require each
full artifact and its required review; L3 fails closed without its high-risk
controls. Do not claim that this skill or its capsule enforces, blocks, or
replaces `tw-work`'s own gates -- REQ-TW-078's `tw-work` preflight upgrade
remains a separate, still-held claim.
