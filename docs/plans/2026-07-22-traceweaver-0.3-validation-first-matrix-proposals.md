# TraceWeaver 0.3 Validation-First Program — Proposed Matrix Rows (Unit 1)

Status: candidate proposal only. This file is **not** `traceability-matrix.md`
and does not amend it. It exists so a later orchestrator/integration step can
merge these rows into `traceability-matrix.md` after the candidate
requirements REQ-TW-076 - REQ-TW-081 (recorded in `requirements.md`) pass
`/tw-requirements-review` and a scoped `/tw-doc-review`.

None of the IDs below are live in `traceability-matrix.md` yet. They are
allocated here so later units (V&V definition phase implementation, `tw-work`
preflight, hooks) can cite stable IDs without collision.

## New ID Allocations

Highest existing IDs at the time of this proposal (checked against
`requirements.md` and `traceability-matrix.md`):

- Highest `TRACE-TW-*`: `TRACE-TW-056`
- Highest `VER-TW-*`: `VER-TW-076`
- Highest `VAL-TW-*`: `VAL-TW-018`
- Highest `REQ-TW-*`: `REQ-TW-075`

Newly allocated for this program (Unit 1):

| Requirement | Trace ID | Verification ID | Validation ID |
| --- | --- | --- | --- |
| REQ-TW-076 (V&V definition phase) | TRACE-TW-057 | VER-TW-077 | VAL-TW-019 |
| REQ-TW-077 (`tw-vv-define` skill) | TRACE-TW-058 | VER-TW-078 | VAL-TW-020 |
| REQ-TW-078 (`tw-work` hard V&V preflight) | TRACE-TW-059 | VER-TW-079 | VAL-TW-021 |
| REQ-TW-079 (SessionStart discipline hook) | TRACE-TW-060 | VER-TW-080 | VAL-TW-022 |
| REQ-TW-080 (advisory PreToolUse TDD gate hook) | TRACE-TW-061 | VER-TW-081 | VAL-TW-023 |
| REQ-TW-081 (hook host-portability evidence) | TRACE-TW-062 | VER-TW-082 | VAL-TW-024 |

No new `NEED-TW-*` or `INTENT-TW-*` IDs were allocated; the program is scoped
entirely under existing needs/intents already accepted in
`traceability-matrix.md` (`NEED-TW-001`, `NEED-TW-002`, `NEED-TW-003`,
`NEED-TW-004`, `NEED-TW-005`, `NEED-TW-007`, `NEED-TW-008`).

## Proposed `## Traceability Matrix` Rows

Same columns as the existing table: `Trace ID | Owner | Need | Requirement |
Authority | Design / ADR | Risk Control | Plan / Task | Implementation |
Verification | Validation | Status | Gap / Debt`.

| Trace ID | Owner | Need | Requirement | Authority | Design / ADR | Risk Control | Plan / Task | Implementation | Verification | Validation | Status | Gap / Debt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRACE-TW-057 | Oxiom Systems | NEED-TW-001; NEED-TW-003; NEED-TW-005; NEED-TW-008 | REQ-TW-076 | Candidate V&V definition phase authority only | Mandatory phase between accepted plan and implementation: RED verification artifacts plus a `docs/validation/` validation-definition artifact, both review-passed, before `tw-work` may start | EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-validation-first-plan.md` (to be authored by a later unit) | Not started | VER-TW-077 | VAL-TW-019 | Candidate requirement recorded; requirements review and authority doc review pending | Do not require or claim the V&V definition phase gate until requirements/doc review and a fixture/skill implementation pass |
| TRACE-TW-058 | Oxiom Systems | NEED-TW-001; NEED-TW-003; NEED-TW-004; NEED-TW-008 | REQ-TW-077 | Candidate `tw-vv-define` skill authority only | New skill owns the V&V definition phase, hands a reviewed capsule (REQ/TRACE/VER/VAL IDs, artifact paths, RED evidence location) to `tw-work` | EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-validation-first-plan.md` (to be authored by a later unit) | Not started | VER-TW-078 | VAL-TW-020 | Candidate requirement recorded; requirements review and authority doc review pending | Do not implement or claim `tw-vv-define` availability until requirements/doc review, skill authoring, and install/discovery smoke pass |
| TRACE-TW-059 | Oxiom Systems | NEED-TW-001; NEED-TW-002; NEED-TW-003; NEED-TW-005; NEED-TW-008 | REQ-TW-078 | Candidate `tw-work` hard V&V preflight authority only | Upgrades the REQ-TW-065 advisory test-first gate to a prerequisite-artifact gate requiring a review-passed V&V definition plus RED evidence, or a recorded exception, before mutation | EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-validation-first-plan.md` (to be authored by a later unit) | Not started | VER-TW-079 | VAL-TW-021 | Candidate requirement recorded; requirements review and authority doc review pending | Do not claim `tw-work` refuses mutation without a V&V definition until fixture/runtime proof passes; static/advisory only |
| TRACE-TW-060 | Oxiom Systems | NEED-TW-001; NEED-TW-002; NEED-TW-005; NEED-TW-007 | REQ-TW-079 | Candidate SessionStart discipline-injection hook authority only | Advisory hook injects mode, Authority Rule invariant, and held claims into session context at start/resume/compact for Claude Code, Cursor, and Codex | EXC-TW-002; EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-validation-first-plan.md` (to be authored by a later unit) | Not started | VER-TW-080 | VAL-TW-022 | Candidate requirement recorded; requirements review and authority doc review pending | Do not claim per-host hook runtime behavior until each host's runtime proof route passes; static manifest/payload evidence only |
| TRACE-TW-061 | Oxiom Systems | NEED-TW-001; NEED-TW-002; NEED-TW-003; NEED-TW-005 | REQ-TW-080 | Candidate advisory PreToolUse TDD gate hook authority only | Advisory, non-blocking warning on Write/Edit tool calls missing linked V&V definition/RED evidence for Claude Code and Cursor; Codex coverage held pending capability discovery | EXC-TW-002; EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-validation-first-plan.md` (to be authored by a later unit) | Not started | VER-TW-081 | VAL-TW-023 | Candidate requirement recorded; requirements review and authority doc review pending | Do not claim blocking/enforcing behavior; do not claim Codex coverage until discovery evidence exists |
| TRACE-TW-062 | Oxiom Systems | NEED-TW-002; NEED-TW-005; NEED-TW-007 | REQ-TW-081 | Candidate hook host-portability evidence authority only | Host x hook capability matrix (`supported` / `unsupported-gap` / `unproven`) crossing Claude Code, Cursor, and Codex with the REQ-TW-079/REQ-TW-080 hooks; static/discovery proof of manifest wiring and payload schema limited to `supported` cells; runtime claims held per `supported` cell until that host's own runtime proof route passes; `unsupported-gap`/`unproven` Codex cells require a discovery-evidence record and explicit held status, not implied coverage | EXC-TW-002; EXC-TW-007; EXC-TW-008 | `docs/plans/2026-07-22-traceweaver-0.3-validation-first-plan.md` (to be authored by a later unit) | Not started | VER-TW-082 | VAL-TW-024 | Candidate requirement recorded; requirements review and authority doc review pending | Do not claim runtime proof from static evidence alone; per-host runtime proof remains a separate held gate; do not author manifests/fixtures or claim coverage for `unsupported-gap`/`unproven` cells |

## Proposed `## Verification Evidence` Rows

Same columns as the existing table: `ID | Requirement | Method | Procedure /
Command | Tested Ref | Result | Evidence Path | Date / Session | Notes`.

These rows are placeholders naming the intended verification approach; no
implementation exists yet, so `Result` is `Not started` and `Evidence Path`
names the artifact expected to be created by a later unit.

| ID | Requirement | Method | Procedure / Command | Tested Ref | Result | Evidence Path | Date / Session | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VER-TW-077 | REQ-TW-076 | Fixture smoke / doc review | `scripts/traceweaver-smoke-vv-define` (to be authored); scoped `/tw-doc-review` over the `docs/validation/` validation-definition artifact | V&V definition phase policy, RED evidence ordering, validation-definition artifact schema | Not started | `scripts/traceweaver-smoke-vv-define`; `docs/validation/` validation-definition artifacts | 2026-07-22 | Placeholder allocation for Unit 1; no implementation exists. Requirements review and authority doc review remain the first gates. |
| VER-TW-078 | REQ-TW-077 | Skill instruction inspection / fixture smoke | Deterministic `tw-vv-define` capsule-handoff fixture over a future `fixtures/vv-define/` directory (to be authored), run by a future `scripts/traceweaver-smoke-vv-define` (to be authored); install/discovery smoke | `tw-vv-define` skill file, capsule handoff to `tw-work`, and a future capsule schema example at `docs/validation/examples/vv-define-capsule.example.json` | Not started | `plugins/traceweaver-core/skills/tw-vv-define/SKILL.md`; `fixtures/vv-define/`; `scripts/traceweaver-smoke-vv-define`; `docs/validation/examples/vv-define-capsule.example.json` (all to be authored) | 2026-07-22 | Placeholder allocation for Unit 1; skill does not exist yet. |
| VER-TW-079 | REQ-TW-078 | Wrapper instruction inspection / fixture smoke | Extension of `fixtures/tw-skill-behavior/tw-work-test-first-*` with a missing-V&V-definition case (to be authored) | `tw-work`, `tw-auto` preflight instructions | Not started | `fixtures/tw-skill-behavior/tw-work-vv-preflight-*` (to be authored) | 2026-07-22 | Placeholder allocation for Unit 1; upgrades REQ-TW-065 fixtures, does not replace VER-TW-061. |
| VER-TW-080 | REQ-TW-079 | Hook manifest/payload inspection | Per-host static JSON schema validation is required only for each host whose SessionStart-equivalent cell is recorded `supported` in the REQ-TW-081 capability matrix, yielding future per-host payload fixtures at `fixtures/hooks/session-start/claude/`, `fixtures/hooks/session-start/cursor/`, and `fixtures/hooks/session-start/codex/` (to be authored, supported-cell examples), each expressing the expected mode/Authority-Rule/held-claims JSON shape; for any host recorded `unsupported-gap` or `unproven` -- including Codex unless and until its SessionStart-equivalent cell is discovery-confirmed `supported` -- a discovery/gap record entry is required instead of a fixture, per REQ-TW-081, with no fixture authored or claimed for that cell; a future smoke `scripts/traceweaver-smoke-hook-session-start` (to be authored) exercises only the fixture sets of the `supported`-cell hosts | SessionStart-equivalent hook manifests for Claude Code, Cursor, Codex (supported cells only) | Not started | Hook manifest/payload files under a future `plugins/traceweaver-core/hooks/session-start/` path; `fixtures/hooks/session-start/{claude,cursor,codex}/` (supported-cell examples); `scripts/traceweaver-smoke-hook-session-start` (all to be authored) | 2026-07-22 | Placeholder allocation for Unit 1; no hook files exist yet; fixtures are authored only for `supported` cells per REQ-TW-081, with discovery/gap records for `unsupported-gap`/`unproven` cells. |
| VER-TW-081 | REQ-TW-080 | Hook fixture payloads | A positive fixture at `fixtures/hooks/pretooluse/vv-definition-present/` (to be authored: hook input payload plus expected result -- no warning, exit 0) and a negative fixture at `fixtures/hooks/pretooluse/vv-definition-missing/` (to be authored: hook input payload plus expected result -- advisory warning text, exit still 0 / non-blocking); a future smoke script `scripts/traceweaver-smoke-hook-pretooluse-tdd-gate` (to be authored) exercising both fixtures; Codex discovery-evidence record | PreToolUse-equivalent hook manifests for Claude Code, Cursor; Codex discovery record | Not started | `fixtures/hooks/pretooluse/vv-definition-present/`; `fixtures/hooks/pretooluse/vv-definition-missing/`; `scripts/traceweaver-smoke-hook-pretooluse-tdd-gate`; Codex discovery-evidence record (all to be authored) | 2026-07-22 | Placeholder allocation for Unit 1; must not claim blocking behavior. |
| VER-TW-082 | REQ-TW-081 | Host x hook capability matrix inspection / per-host manifest-schema inspection / discovery smoke reuse | Inspection of a capability matrix record at `docs/validation/traceweaver-0.3-hook-host-capability-matrix.md` (to be authored) recording the `supported`/`unsupported-gap`/`unproven` grid; dry-run/payload fixture evidence limited to `supported` cells under `fixtures/hooks/host-payloads/claude/` and `fixtures/hooks/host-payloads/cursor/` (to be authored); a Codex discovery record at `docs/validation/traceweaver-0.3-codex-hook-capability-discovery.md` (to be authored); reuse of the existing per-host discovery-smoke pattern (e.g. `scripts/traceweaver-smoke-codex-discovery`) to populate/refresh non-`supported` states | Per-host manifest paths `hooks/hooks.json` (Claude Code), `hooks/hooks-cursor.json` (Cursor), and the Codex plugin surface named by discovery (path not yet determined) | Not started | `docs/validation/traceweaver-0.3-hook-host-capability-matrix.md`; `fixtures/hooks/host-payloads/claude/`; `fixtures/hooks/host-payloads/cursor/`; `docs/validation/traceweaver-0.3-codex-hook-capability-discovery.md`; `hooks/hooks.json`; `hooks/hooks-cursor.json` (all to be authored) | 2026-07-22 | Placeholder allocation for Unit 1; runtime proof stays a separate held gate per `supported` host/hook cell; manifests/fixtures are not authored for `unsupported-gap`/`unproven` cells. |

## Proposed `## Validation Evidence` Rows

Same columns as the existing table: `ID | Source Need | Scenario / Intended
Use | Stakeholder / Representative | Acceptance Signal | Evidence Path |
Result | Owner | Deferred Trigger / Notes`.

| ID | Source Need | Scenario / Intended Use | Stakeholder / Representative | Acceptance Signal | Evidence Path | Result | Owner | Deferred Trigger / Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAL-TW-019 | NEED-TW-001; NEED-TW-003; NEED-TW-005; NEED-TW-008 | Intent validation (FAT/ATP-style acceptance) happens before implementation exists, not only at closure. | Oxiom Systems | A reviewer can see RED verification evidence and a reviewed validation-definition artifact recorded before any implementation diff for the work item. | `docs/validation/` validation-definition artifacts; matrix rows | Held | Oxiom Systems | Requires REQ-TW-076 requirements/doc review and a fixture/skill implementation before first real use. |
| VAL-TW-020 | NEED-TW-001; NEED-TW-003; NEED-TW-004; NEED-TW-008 | A user can run one TraceWeaver-owned step after plan acceptance and get a reviewed capsule handed to `tw-work`. | Oxiom Systems | `tw-vv-define` output names REQ/TRACE/VER/VAL IDs, artifact paths, and RED evidence location, and does not itself claim implementation authority. | `plugins/traceweaver-core/skills/tw-vv-define/SKILL.md` (to be authored) | Held | Oxiom Systems | Requires REQ-TW-077 requirements/doc review and skill implementation before first real use. |
| VAL-TW-021 | NEED-TW-001; NEED-TW-002; NEED-TW-003; NEED-TW-005; NEED-TW-008 | Implementation cannot start on behavior-bearing files without a review-passed V&V definition or a recorded exception. | Oxiom Systems | Fixture proof shows `tw-work` refusing mutation when the V&V definition/RED evidence is missing and proceeding when it is present or a scoped exception is recorded. | Extended `fixtures/tw-skill-behavior/tw-work-*` fixtures (to be authored) | Held | Oxiom Systems | Requires REQ-TW-078 requirements/doc review and fixture implementation; runtime enforcement stays separately held. |
| VAL-TW-022 | NEED-TW-001; NEED-TW-002; NEED-TW-005; NEED-TW-007 | An agent session starts already reminded of TraceWeaver mode, the Authority Rule, and held claims. | Oxiom Systems | Per-host dry-run fixture shows correct injected payload content for Claude Code, Cursor, and Codex, or an honest host-capability gap record where a host lacks the surface. | Hook manifest/payload files (to be authored) | Held | Oxiom Systems | Requires REQ-TW-079 requirements/doc review and hook implementation; live runtime proof remains a separate held gate per host. |
| VAL-TW-023 | NEED-TW-001; NEED-TW-002; NEED-TW-003; NEED-TW-005 | A behavior-bearing write/edit surfaces an advisory warning when no linked V&V evidence exists, without being blocked. | Oxiom Systems | Fixture proof shows the warning firing on missing evidence and staying silent when evidence is linked, for Claude Code and Cursor; Codex recorded as discovery-only. | Hook manifest/payload files and fixtures (to be authored) | Held | Oxiom Systems | Requires REQ-TW-080 requirements/doc review and hook implementation; blocking/enforcing behavior remains a separate held claim. |
| VAL-TW-024 | NEED-TW-002; NEED-TW-005; NEED-TW-007 | A reviewer can tell, per host x hook cell, whether it is `supported`/`unsupported-gap`/`unproven`, and whether a `supported` cell is statically proven only or has also passed live runtime proof. | Oxiom Systems | Host x hook capability matrix record clearly separates capability state from static manifest/schema proof and from runtime proof status; unsupported/unproven Codex cells carry a discovery-evidence record instead of implied coverage. | Host x hook capability matrix record; per-host hook evidence files (to be authored) | Held | Oxiom Systems | Requires REQ-TW-081 requirements/doc review; per-host runtime proof gates and non-`supported` capability states remain separately held. |

## Merge Instructions For The Orchestrator

1. Confirm REQ-TW-076 - REQ-TW-081 have passed `/tw-requirements-review` and a
   scoped `/tw-doc-review` in `requirements.md` before merging any row below.
2. Append the six `## Traceability Matrix` rows above (`TRACE-TW-057` through
   `TRACE-TW-062`) to the end of the existing table in `traceability-matrix.md`
   in ID order, immediately after `TRACE-TW-056`.
3. Append the six `## Verification Evidence` rows above (`VER-TW-077` through
   `VER-TW-082`) to the existing table, keeping the file's established
   (non-strictly-sequential) insertion convention; group them together for
   readability.
4. Append the six `## Validation Evidence` rows above (`VAL-TW-019` through
   `VAL-TW-024`) to the existing table in ID order, immediately after
   `VAL-TW-018`.
5. Update the `Status` frontmatter-style narrative line and `Last updated`
   date in `traceability-matrix.md` per the file's existing convention once
   real implementation or review evidence exists — do not backfill status
   claims for work that has not happened.
6. Do not mark any `Result`/`Status` cell above as passing until the cited
   script, fixture, or skill file actually exists and has been run.
