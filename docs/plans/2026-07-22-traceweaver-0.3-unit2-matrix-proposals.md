# TraceWeaver 0.3 Validation-First Program — Proposed Matrix Rows (Unit 2)

Status: candidate proposal only. This file is **not** `traceability-matrix.md`
and does not amend it. It updates the Unit 1 placeholder rows for
`TRACE-TW-057`, `TRACE-TW-058`, `VER-TW-077`, `VER-TW-078`, `VAL-TW-019`, and
`VAL-TW-020` (originally allocated in
`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md`)
now that Unit 2 has implemented the `tw-vv-define` skill and its capsule
validator. No new IDs are allocated by this file.

This file exists so a later orchestrator/integration step can merge these
updated rows into `traceability-matrix.md`. It does not itself merge them, and
it does not promote REQ-TW-076/REQ-TW-077 beyond their current
`candidate_for_review` status in `requirements.md`.

## Scope Of This Update

Unit 2 built:

- `plugins/traceweaver-core/skills/tw-vv-define/SKILL.md`
- `plugins/traceweaver-core/skills/tw-vv-define/scripts/traceweaver-check-vv-capsule`
- `docs/validation/examples/vv-define-capsule.example.json`
- `fixtures/vv-define/{valid-capsule,missing-red-evidence,unscoped-not-applicable,valid-not-applicable}/`
- `scripts/traceweaver-smoke-vv-define`

A subsequent Unit 2 fix round (same branch) addressed an adversarial
("terra") review's REJECT findings and extended the same file set:

- Capsule schema hardening: `schema_version` must equal the literal
  `tw-vv-capsule/1`; `req_id`/`trace_id`/`ver_id`/`val_id` must match
  `^REQ|TRACE|VER|VAL-[A-Z]+-[0-9]+$` respectively; `plan_ref` must resolve to
  an existing file relative to `--root`.
- Per-requirement optional `reviews[]` ({gate, id, status, evidence_path})
  and `matrix_row_ref` fields, plus a new validator
  `--require-review-passed` mode (every verification-mode requirement must
  carry a `reviews[]` entry with status `passed` and an existing
  `evidence_path`) -- the mode `tw-work`'s REQ-TW-078 preflight will consume.
- New fixtures: `fixtures/vv-define/review-not-passed/` and
  `fixtures/vv-define/invalid-identity/`.
- New example artifact:
  `docs/validation/examples/vv-define-validation-definition.example.md`,
  and `docs/validation/examples/vv-define-capsule.example.json` now carries a
  `reviews[]`/`matrix_row_ref` example and points `validation_artifact` at
  that new example file (narrowing the schema-shape claim below, P2).
- `scripts/traceweaver-smoke-vv-define` gained assertions for all of the
  above. The fix round did not touch `traceability-matrix.md`,
  `.traceweaver/intent-contract*.yml`, `requirements.md`, or `issues.jsonl`,
  and did not act on the review's P0 (authority) finding, which the
  orchestrator handles separately at integration.

Unit 2 did **not** touch REQ-TW-078 (`tw-work` hard V&V preflight),
REQ-TW-079/080/081 (hooks, capability matrix), `traceability-matrix.md`,
`.traceweaver/intent-contract*.yml`, `requirements.md`, or any other skill or
smoke. Those rows (`TRACE-TW-059..062`, `VER-TW-079..082`, `VAL-TW-021..024`)
are unchanged from the Unit 1 proposal and are not repeated here.

## Updated `## Traceability Matrix` Rows

Same columns as the existing table: `Trace ID | Owner | Need | Requirement |
Authority | Design / ADR | Risk Control | Plan / Task | Implementation |
Verification | Validation | Status | Gap / Debt`. Only the `Implementation`,
`Status`, and `Gap / Debt` columns change from the Unit 1 proposal; other
columns are repeated unchanged for merge convenience.

| Trace ID | Owner | Need | Requirement | Authority | Design / ADR | Risk Control | Plan / Task | Implementation | Verification | Validation | Status | Gap / Debt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRACE-TW-057 | Oxiom Systems | NEED-TW-001; NEED-TW-003; NEED-TW-005; NEED-TW-008 | REQ-TW-076 | Candidate V&V definition phase authority only | Mandatory phase between accepted plan and implementation: RED verification artifacts plus a `docs/validation/` validation-definition artifact, both review-passed, before `tw-work` may start | EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-unit2-matrix-proposals.md` (this file) | `plugins/traceweaver-core/skills/tw-vv-define/SKILL.md` implements the phase's workflow; `docs/validation/examples/vv-define-capsule.example.json` shows the artifact shape; `fixtures/vv-define/` proves RED-evidence and scoped not-applicable handling | VER-TW-077 | VAL-TW-019 | Candidate requirement recorded; requirements-quality review and scoped doc review passed (2026-07-22); `tw-vv-define` skill/validator/fixtures/smoke now implemented and green; matrix merge and requirement-authority promotion remain held pending orchestrator integration | Do not claim the V&V definition phase is implementation-authority-gating (that is REQ-TW-078, still held) until requirements/doc review promotes REQ-TW-076 and REQ-TW-078's `tw-work` preflight is separately implemented and reviewed |
| TRACE-TW-058 | Oxiom Systems | NEED-TW-001; NEED-TW-003; NEED-TW-004; NEED-TW-008 | REQ-TW-077 | Candidate `tw-vv-define` skill authority only | New skill owns the V&V definition phase, hands a reviewed capsule (REQ/TRACE/VER/VAL IDs, artifact paths, RED evidence location) to `tw-work` | EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-unit2-matrix-proposals.md` (this file) | `plugins/traceweaver-core/skills/tw-vv-define/SKILL.md`; `plugins/traceweaver-core/skills/tw-vv-define/scripts/traceweaver-check-vv-capsule`; `docs/validation/examples/vv-define-capsule.example.json`; `fixtures/vv-define/`; `scripts/traceweaver-smoke-vv-define` | VER-TW-078 | VAL-TW-020 | Candidate requirement recorded; requirements-quality review and scoped doc review passed (2026-07-22); skill, validator, fixtures, example capsule, and smoke implemented and green; install/discovery-smoke enumeration update and matrix merge remain held pending orchestrator action (see "Orchestrator Follow-Ups" below) | Do not claim `tw-vv-define` is discoverable/installed via existing install or codex-discovery smokes until the orchestrator adds it to their hardcoded skill lists; do not claim `tw-work` refuses mutation without this capsule until REQ-TW-078 is separately implemented |

## Updated `## Verification Evidence` Rows

Same columns as the existing table: `ID | Requirement | Method | Procedure /
Command | Tested Ref | Result | Evidence Path | Date / Session | Notes`.

| ID | Requirement | Method | Procedure / Command | Tested Ref | Result | Evidence Path | Date / Session | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VER-TW-077 | REQ-TW-076 | Fixture smoke / doc-review-shape inspection | `scripts/traceweaver-smoke-vv-define` (validates RED-evidence non-emptiness, scoped not-applicable requirements, and, for the `docs/validation/` validation-definition artifact referenced by `validation_artifact`, only (a) that the path exists and (b) a cheap doc-review content gate confirming the four required sections -- Validation Question, Acceptance Criteria, Rater/Reviewer Profile, Evidence Path -- are present via `grep` against `docs/validation/examples/vv-define-validation-definition.example.md`; it does not validate full schema conformance of arbitrary `docs/validation/` artifacts beyond that example) | Branch `codex/tw03-unit2-vv-define`, commit range starting `ef840fb` (RED fixtures/smoke commit) through the Unit 2 fix-round implementation commit | RED confirmed (smoke failed with `vv_define_smoke_missing_required_file=...SKILL.md` before implementation; re-confirmed RED for the fix round at `vv_define_smoke_missing_required_file=...vv-define-validation-definition.example.md` before that file existed); GREEN confirmed (`vv_define_smoke=pass`, `vv_define_smoke_checker_valid_fixtures=pass`, `vv_define_smoke_checker_invalid_fixtures=pass`, `vv_define_smoke_skill_shape=pass`, exit 0) after implementation | `scripts/traceweaver-smoke-vv-define`; `fixtures/vv-define/`; `docs/validation/examples/vv-define-validation-definition.example.md` | 2026-07-22 | Unit 2 evidence, narrowed in the terra-review fix round (P2 finding: the prior wording overstated this as full `docs/validation/` artifact "schema shape" validation). Formal `tw-doc-review`/`tw-code-review` records for the artifacts themselves are not yet filed; this row records fixture/smoke evidence only. |
| VER-TW-078 | REQ-TW-077 | Skill instruction inspection / fixture smoke / capsule validator | `plugins/traceweaver-core/skills/tw-vv-define/scripts/traceweaver-check-vv-capsule` run over `fixtures/vv-define/{valid-capsule,valid-not-applicable}` (pass), `fixtures/vv-define/{missing-red-evidence,unscoped-not-applicable}` (blocked with expected finding IDs), and `docs/validation/examples/vv-define-capsule.example.json` (pass); `scripts/traceweaver-smoke-vv-define` asserts SKILL.md required anchors/sections and static/advisory wording | Same branch/commit range as VER-TW-077 | Pass: all four fixture cases and the example capsule behave as designed; `--schema` mode confirmed to print the documented field names | `plugins/traceweaver-core/skills/tw-vv-define/SKILL.md`; `plugins/traceweaver-core/skills/tw-vv-define/scripts/traceweaver-check-vv-capsule`; `docs/validation/examples/vv-define-capsule.example.json`; `fixtures/vv-define/`; `scripts/traceweaver-smoke-vv-define` | 2026-07-22 | Unit 2 evidence. Install/discovery smoke coverage for the packaged skill remains an orchestrator follow-up (see below); this row does not claim discovery-smoke coverage. |

## Validation Evidence Rows: Unchanged

`VAL-TW-019` and `VAL-TW-020` remain `Held` exactly as recorded in the Unit 1
proposal. Unit 2 produced verification (fixture/smoke) evidence only, not
stakeholder validation evidence. A named rater/reviewer has not yet judged
the `tw-vv-define` skill or capsule schema against real intended use; that
remains a separate gate.

## Orchestrator Follow-Ups (Not In Scope For This Unit)

This unit was scoped to only the paths listed above. The following changes
are needed elsewhere and are called out here instead of being made directly,
per this unit's hard constraints:

1. **`traceability-matrix.md` merge.** Apply the updated `TRACE-TW-057`,
   `TRACE-TW-058`, `VER-TW-077`, and `VER-TW-078` rows above once REQ-TW-076
   and REQ-TW-077 are promoted past `candidate_for_review`.
2. **Skill-enumeration smokes.** `scripts/traceweaver-smoke-codex-discovery`
   (and any other install/discovery smoke that hardcodes a hard-coded skill
   list, e.g. `expected_direct_skills`, `expected_visible_skills`,
   `identity_skills`, `expected_internal_packaged_skills`) does not yet list
   `tw-vv-define`. This unit did not edit that smoke, per its hard
   constraints. The orchestrator should add `tw-vv-define` to the appropriate
   list(s) and rerun `scripts/traceweaver-smoke-codex-discovery` once the
   skill is intended to be installable/discoverable.
3. **CI wiring.** `.github/workflows/smoke-tests.yml` does not yet invoke
   `scripts/traceweaver-smoke-vv-define`. The orchestrator should add a step
   for it alongside the other fixture smokes.
4. **`tw-work` hard preflight (REQ-TW-078).** Not in this unit's scope. A
   later unit must extend `tw-work`'s workflow to consume the
   `--vv-capsule <path>` capsule this skill emits, per REQ-TW-078's
   prerequisite-artifact gate design (still a held claim until implemented and
   reviewed).
