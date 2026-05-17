---
id: PLAN-TW-2026-05-05-003
title: Structured Traceability Findings
status: u1_u2_u3_patch_code_review_passed_authority_doc_review_passed_runtime_held
date: 2026-05-05
owner: Oxiom Systems
branch: codex/tw-skill-behavior-audit
origin: REQ-TW-055 candidate requirement
---

# Structured Traceability Findings Plan

## Purpose

Implement and prove the first bounded behavior slice for REQ-TW-055:
`tw-traceability-check` must return actionable reviewer-style findings for
traceability failures instead of only returning a prose traceability status.

This plan is intentionally narrow. It proves structured finding generation,
fixture classification, skill instructions, and wrapper handoff behavior. It
does not claim project-level trace writes, enforcing mode, clean CE replacement,
publication, package/release readiness, upstream readiness, R31 validation, or
unconstrained host support.

## Authority Capsule

Controlling authority:

- `requirements.md` REQ-TW-055
- `.traceweaver/intent-contract.yml`
- `traceability-matrix.md` candidate chain ART-TW-042, TRACE-TW-028,
  ATP-TW-012, RESULT-TW-012, and VER-TW-037
- `traceability-matrix.md` implemented fixture proof chain ART-TW-043,
  TRACE-TW-029, ATP-TW-013, RESULT-TW-013, and VER-TW-038
- `docs/validation/traceweaver-skill-behavior-audit.md`
- `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md`
- `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`
- `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`

Current accepted input:

- REQ-TW-055 is recorded as a candidate requirement.
- Current authority records are hash-consistent and keep active-host structured
  finding runtime behavior held until a constrained runtime proof exists.
- Main-thread `/ce-code-review` on 2026-05-05 returned P1 findings for the
  structured-finding smoke harness. The complete-trace positive control and
  real-authority unchanged guard were patched; clean code-review rerun passed
  on 2026-05-06 as
  `CE-CODE-REVIEW-2026-05-06-STRUCTURED-FINDINGS-HARNESS-CLEAN-001`.
  No reviewer subagents were dispatched.
- Authority doc review passed as `CE-DOC-REVIEW-2026-05-06-SKILL-BEHAVIOR-STAGED-AUTHORITY-CLEAN-001`, so the patched fixture proof can be accepted as reviewed static TraceWeaver input.

Held while this plan executes:

- Project-level trace/matrix/gap/change/exception writes.
- Code/test trace-anchor scanner behavior and dead-TDD enforcement beyond the
  fixture cases in this plan.
- `tw-auto` autonomous review routing.
- Commit/push/PR publication.
- Clean CE replacement, enforcing behavior, release/package/upstream readiness,
  R31, and unconstrained host support.

## Requirements Trace

- REQ-TW-005: maintain the controlled chain from intent through validation.
- REQ-TW-008: use the Markdown matrix as the authoritative audit record.
- REQ-TW-046: flag untraced, duplicate, dark, or uncaptured behavior.
- REQ-TW-049: `tw-code-review` must require traceability preflight.
- REQ-TW-050: `tw-doc-review` must require requirements and trace consistency.
- REQ-TW-054: code/test anchors and dead-TDD candidates must be detectable.
- REQ-TW-055: traceability failures must become structured findings.

## Design Decisions

1. Structured findings are a small public contract, not an internal model API.
   The contract should be simple enough for skills, scripts, and human reviewers
   to inspect: severity, status, title, evidence, affected IDs, optional
   file/line anchor, claim impact, and remediation.
2. Deterministic fixture proof comes before runtime transcript proof. Fixture
   cases must derive expected findings from files on disk, not from hard-coded
   output strings alone.
3. Codex `::code-comment{...}` output is required only when a stable local file
   and line anchor exists. Cross-file or artifact-level issues should remain
   normal Markdown findings with the same structured fields.
4. P0/P1 structured findings block pass. P2 may block when authority,
   traceability, validation, release claims, runtime safety, or publication are
   affected. P3 may be non-blocking only when owner and next step are recorded.
5. Runtime proof is constrained to `tw-traceability-check` producing the agreed
   structured output on a fixture. It does not prove broader `tw-auto`,
   `tw-code-review`, or `tw-doc-review` runtime behavior.

## Implementation Units

### U1: Define Structured Finding Contract

Goal: Add a small reusable contract for structured traceability findings.

Files:

- Create: `plugins/traceweaver-core/skills/tw-traceability-check/references/structured-findings.md`
- Modify: `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

Approach:

- Define required fields: `severity`, `status`, `title`, `evidence`,
  `affected_ids`, `file`, `start`, `end`, `claim_impact`, and `remediation`.
- Define status values: `pass`, `needs-revision`, `blocked`, `held`,
  `approved-gap-required`, and `human-decision`.
- Define when to emit Codex `::code-comment{...}` versus Markdown findings.
- Keep the reference public-safe and in original TraceWeaver wording.

Test scenarios:

- Contract accepts a file-anchored missing matrix row finding.
- Contract accepts an artifact-level stale hash finding with no line anchor.
- Contract rejects a pass result when a P1 blocker remains.

Verification:

- Static inspection of the reference file.
- Later U2 fixture smoke proves the contract is machine-checkable.

### U2: Add Deterministic Fixture Cases And Smoke Harness

Goal: Prove structured finding classification without relying on LLM output.

Files:

- Create: `fixtures/structured-traceability-findings/`
- Create: `scripts/traceweaver-smoke-structured-findings`
- Modify: `traceability-matrix.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

Approach:

- Add fixture cases for:
  - complete trace pass;
  - missing requirements authority;
  - stale matrix hash;
  - missing matrix trace row;
  - missing verification evidence;
  - missing validation question;
  - unsupported release/done claim;
  - missing code/test anchor;
  - dead-TDD candidate.
- The smoke harness should inspect fixture files and emit stable key/value
  results plus a compact JSONL or Markdown findings artifact under a temporary
  directory.
- The harness must fail closed if a negative fixture does not produce at least
  one matching structured finding.
- The harness must verify that real repository authority files are unchanged.

Test scenarios:

- Missing authority produces a P1 `blocked` finding with remediation.
- Missing matrix row produces a P1 `blocked` finding linked to the affected
  requirement and trace ID.
- Missing code/test anchor produces a held or blocked finding scoped to
  REQ-TW-054/REQ-TW-055.
- Complete trace produces no P0/P1 findings and may pass.

Verification:

- Run `scripts/traceweaver-smoke-structured-findings`.
- Run `git diff --check`.

### U3: Wire Wrapper Handoff Expectations

Goal: Make `tw-code-review` and `tw-doc-review` preserve structured
traceability findings instead of collapsing them into prose.

Files:

- Modify: `plugins/traceweaver-core/skills/tw-code-review/SKILL.md`
- Modify: `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

Approach:

- `tw-code-review` must report the structured `tw-traceability-check` findings
  before CE code-review findings.
- `tw-doc-review` must report structured trace/hash/status findings before CE
  doc-review findings.
- Both wrappers must keep CE delegation held when traceability has unresolved
  P0/P1 findings or unapproved held claims.

Test scenarios:

- A blocked traceability finding prevents accepted CE review closure.
- A held traceability limitation can be reported but not converted into a pass.
- CE review findings and TW traceability findings remain distinguishable.

Verification:

- Static inspection plus U2 fixture outputs.
- `/ce-code-review` on changed skill files and smoke harness.

### U4: Constrained Runtime Transcript

Goal: Prove that active-host `tw-traceability-check` can produce the structured
finding shape on a bounded fixture prompt.

Files:

- Modify: `scripts/traceweaver-smoke-codex-host-registry`
- Modify: `docs/validation/traceweaver-u9-codex-runtime-discovery.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

Approach:

- Add an opt-in runtime probe that asks active Codex to run
  `tw-traceability-check` on one small fixture and return an exact sentinel plus
  one structured finding.
- Reject transcripts that contain unavailable/not-loaded/refusal language.
- Require the finding to name REQ-TW-055 and include severity, status, evidence,
  affected ID, claim impact, and remediation.
- Keep broader runtime claims held.

Test scenarios:

- Active host missing `tw-traceability-check` remains held.
- Transcript with unavailable/refusal text fails closed.
- Transcript with sentinel but missing required structured fields fails closed.
- Transcript with exact sentinel and required fields records constrained runtime
  pass for `tw-traceability-check` only.

Verification:

- Run the host-registry smoke in opt-in runtime mode.
- `/ce-code-review` on the runtime harness before authority acceptance.

### U5: Record Evidence And Authority State

Goal: Record the accepted scope without overclaiming broader TraceWeaver runtime
behavior.

Files:

- Modify: `.traceweaver/intent-contract.yml`
- Modify: `traceability-matrix.md`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Modify: `docs/validation/traceweaver-u9-codex-runtime-discovery.md`

Approach:

- Add artifact, trace, result, and verification rows for the structured finding
  fixture proof.
- Record code-review and doc-review IDs only after those reviews pass.
- Accept only deterministic fixture behavior and, if U4 passes, constrained
  active-host `tw-traceability-check` structured finding runtime behavior.
- Keep wrapper automation, project writes, publication, and release claims held.

Verification:

- YAML parse for `.traceweaver/intent-contract.yml`.
- Source-artifact hash check.
- `git diff --check`.
- Authority doc review passed on the final authority set as `CE-DOC-REVIEW-2026-05-06-SKILL-BEHAVIOR-STAGED-AUTHORITY-CLEAN-001` before accepting the result.

## Suggested Execution Order

1. U1 and U2 first, because the fixture harness should prove the structured
   finding contract before wrapper or runtime claims are touched.
2. U3 after U2 passes, because wrapper wording should reference proven fixture
   output shape.
3. U4 only after U1-U3 pass code review.
4. U5 last, after code review and smoke evidence exist.

## Open Questions

- Should structured findings be emitted as JSONL, Markdown, or both for the
  deterministic harness? Default recommendation: JSONL for machine checks plus
  Markdown summary for human review.
- Should P2 always block in authority files? Default recommendation: yes when
  the finding affects authority, traceability, validation, release claims,
  runtime safety, or publication.

## Acceptance Criteria

- `tw-traceability-check` has a reviewed structured-finding contract.
- Deterministic fixtures prove complete trace, missing authority, stale hash,
  missing matrix row, missing verification, missing validation, unsupported
  release claim, missing anchor, and dead-TDD classifications.
- `tw-code-review` and `tw-doc-review` preserve structured traceability
  findings in their output expectations.
- Code review passes for behavior-bearing scripts and skill files.
- Authority doc review passes for updated requirements/matrix/Intent
  Contract/evidence records.
- Accepted claims are narrowed to the proven fixture/runtime scope.
