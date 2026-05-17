---
title: "feat: TraceWeaver systems-engineering audit closure"
type: feat
status: requirements-review-passed-doc-review-passed-authority-status-hash-doc-review-passed-implementation-ready
date: 2026-05-12
---

# feat: TraceWeaver systems-engineering audit closure

## Summary

Strengthen TraceWeaver from code-anchor traceability into a fuller
systems-engineering loop:

- every user-facing `tw-*` skill has a task-scoped start prompt and access to
  the distilled systems-engineering knowledge needed for its job;
- every requirement must close with implementation trace, verification
  implementation, verification procedure, and validation procedure/evidence or
  an explicit held validation record;
- `tw-traceability-check` audit mode must go beyond simple file-anchor checks
  and report dark, obsolete, orphaned, duplicate, and similar-behavior
  candidates across a repository;
- README and docs must explain how users run the skills to gain visibility into
  dark code, obsolete code, and duplicate/similar behavior.

This plan is candidate planning input only. It does not approve new
requirements, runtime enforcement, publication, release readiness, Vestro
dogfood, broad project writes, or semantic audit claims until the review and
proof gates below close.

Requirements quality review passed as
`TW-REQ-REVIEW-2026-05-12-REQ-TW-061-063-SYSTEMS-ENGINEERING-AUDIT-CLEAN-001`.
Scoped plan document review passed as
`TW-DOC-REVIEW-2026-05-12-REQ-TW-061-063-SYSTEMS-ENGINEERING-AUDIT-PLAN-CLEAN-001`.
The current authority-record update remains staged-input only until the
matching status/hash review closes.
Scoped authority/status-hash doc review passed as
`TW-DOC-REVIEW-2026-05-12-REQ-TW-061-063-SYSTEMS-ENGINEERING-AUDIT-STATUS-HASH-CLEAN-001`.

## Operating Mode

Authority Baseline Mode first, then Implementation Gate Mode.

The requested behavior adds new product requirements and broadens what
TraceWeaver may claim about requirement closure and codebase audit visibility.
Implementation must not start until the new requirements are reviewed and the
authority records identify the accepted scope, proof chain, held claims, and
validation questions.

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Related accepted or reviewed requirements:
  - `REQ-TW-023`: completed TraceWeaver tasks must end with suggested next
    steps.
  - `REQ-TW-038`: controlled automation links behavior changes to test
    evidence by default.
  - `REQ-TW-046`: traceability checks flag dark, duplicate, unnecessary, or
    uncaptured behavior-bearing units.
  - `REQ-TW-052`: wrapper backlog requires authority, traceability,
    verification, validation, allowed-output, blocked-output, and publication
    boundaries.
  - `REQ-TW-054`: code/test trace anchors use file/module, behavior-entrypoint,
    and verification-anchor hierarchy.
  - `REQ-TW-055`: traceability failures must emit structured findings.
  - `REQ-TW-056`: `tw-auto` owns the TraceWeaver work/review/fix/review closure
    loop.
  - `REQ-TW-057`: operating modes keep implementation scans scoped and reserve
    whole-repo scans for audit/baseline mode.
  - `REQ-TW-058`: ambiguous per-artifact anchor mappings are skipped by
    `tw-work` and reported by `tw-traceability-check`.
  - `REQ-TW-059`: CE-derived skills are internal imported components; users
    enter through TraceWeaver-owned wrappers.
- New candidate requirements to add and review:
  - `REQ-TW-061`: every user-facing `tw-*` skill must carry a task-scoped start
    prompt, required authority inputs, and access to the distilled
    systems-engineering knowledge needed for that task, either skill-local or
    through an explicitly packaged internal delegated skill.
  - `REQ-TW-062`: every requirement closure claim must include implementation
    trace, verification implementation, exact verification procedure, and
    validation procedure/evidence, or an explicit reviewed held-validation
    record with owner, evidence location, and closure boundary.
  - `REQ-TW-063`: `tw-traceability-check` audit mode must emit structured,
    evidence-backed candidate findings for dark, obsolete, orphaned, duplicate,
    and similar behavior over explicitly supported artifact classes. Each
    detector must identify its evidence source, confidence, supported
    file/language scope, and known limitation. Unsupported or uninspectable
    surfaces must be reported as held or unknown audit coverage, not treated as
    clean. Audit findings are candidate evidence only and must not authorize
    removal, merge, deprecation, publication, or release readiness without
    reviewed authority or human decision.
- New proof chain reserved for this plan:
  - Artifact: `ART-TW-058`
  - Trace: `TRACE-TW-044`
  - ATP: `ATP-TW-028`
  - Result: `RESULT-TW-028`
  - Verification: `VER-TW-056`

Validation question: Can a user run TraceWeaver on a real repository and get a
bounded, explainable view of which skills enforce systems-engineering context,
which requirements are truly closed by verification and validation evidence,
and which code is dark, obsolete, orphaned, duplicate, or behaviorally similar
enough to require a keep/merge/deprecate/remove authority decision?

## Problem Frame

TraceWeaver now has useful code-anchor behavior: module/file premise anchors,
behavior-entrypoint anchors, verification anchors, and Code Anchor Evidence
rows. That is enough to stop many missing-trace and missing-verification
regressions during implementation work.

It is not enough to prove full systems-engineering visibility across a project.
Three gaps remain:

- Some user-facing wrappers still rely on delegated skills for knowledge
  context but do not themselves make required authority inputs and distilled
  knowledge access explicit.
- Requirement completion can be recorded as implemented or reviewed without a
  uniformly enforced final chain from requirement intent through verifying test
  procedure and validating real-world procedure/evidence.
- Whole-repo audit mode currently finds missing anchors and baseline debt, but
  it does not yet build a semantic capability inventory that can positively
  identify obsolete, orphaned, duplicate, or similar behavior candidates.

The product standard should be higher: TraceWeaver should preserve intent,
prove implementation, prove verification, preserve validation intent, and make
unowned code visible without blocking every normal implementation task on old
debt.

## Requirements For This Slice

- R1. Add and review `REQ-TW-061`, `REQ-TW-062`, and `REQ-TW-063` before
  implementation begins.
- R2. Define a user-facing skill prompt contract for every direct-callable
  `tw-*` skill:
  - task-scoped purpose;
  - required authority inputs;
  - required distilled knowledge references or explicit packaged internal
    delegation;
  - preflight gates;
  - output contract;
  - held claims.
- R3. Add deterministic inventory proof that all direct-callable `tw-*` skills
  satisfy the prompt/knowledge contract, including negative fixtures for a
  wrapper missing required authority inputs or distilled knowledge access.
- R4. Define a requirement closure contract that distinguishes:
  - implementation trace;
  - verification implementation;
  - verification procedure;
  - verification result/evidence;
  - validation procedure;
  - validation result/evidence;
  - held validation with owner, evidence location, and closure boundary.
- R5. Add matrix and documentation updates so requirement rows and proof rows
  can show closure status without conflating tests with validation.
- R6. Extend `tw-traceability-check` audit mode so whole-repo audit emits
  structured, evidence-backed candidate findings for explicitly supported
  artifact classes:
  - dark behavior with no current requirement authority;
  - obsolete behavior linked only to stale/superseded authority;
  - orphaned behavior with no current caller, entrypoint, or verification path;
  - duplicate or similar behavior candidates mapped to the same or overlapping
    requirement/capability;
  - anchor-only coverage that lacks verification or validation closure.
- R6a. Each semantic audit detector must report its evidence source,
  confidence, supported file/language scope, and known limitation. Unsupported
  or uninspectable surfaces must be reported as held or unknown audit coverage,
  not treated as clean.
- R7. Keep audit findings as baseline debt by default unless they touch the
  active implementation gate, support a done/runtime/publication/release claim,
  or contradict current authority.
- R8. Update README and docs to show the recommended TraceWeaver usage path for
  full visibility:
  `tw-authority-gate -> tw-work -> tw-traceability-check implementation mode ->
  tw-code-review` for normal work, and `tw-traceability-check audit mode` for
  baseline/dark-code sweeps.
- R9. Do not claim semantic audit completeness on Vestro or external projects
  until the audit mode has deterministic fixtures, scoped review, and at least
  one real-project dogfood validation.

## Scope

### In Scope

- `requirements.md`, `.traceweaver/intent-contract.yml`,
  `traceability-matrix.md`, and validation evidence updates for
  `REQ-TW-061` through `REQ-TW-063`.
- A direct-callable `tw-*` skill prompt/knowledge contract.
- Wrapper inventory smoke coverage for skill-local references and required
  authority inputs.
- Requirement closure contract and matrix guidance for verification procedure
  and validation procedure/evidence.
- `tw-traceability-check` audit-mode extension for semantic candidate findings.
- README/plugin README/docs updates explaining normal implementation checks,
  audit mode, expected outputs, and limits.
- Deterministic fixtures for dark, obsolete, orphaned, duplicate, similar,
  anchor-only, and clean cases.

### Out Of Scope

- Publication, commit, push, PR, release, package-ready, upstream-ready, or
  clean-replacement claims.
- Runtime invocation proof for autonomous audit unless separately scoped.
- Vestro dogfood acceptance; Vestro may be a later validation target only after
  TraceWeaver fixtures pass.
- Editing imported `ce-*` component bodies.
- Treating audit output as automatic removal authority. Removal, merge,
  deprecation, or keep decisions require reviewed authority or human decision.

## Design

### Skill Prompt And Knowledge Contract

Create a TraceWeaver-owned contract that every direct-callable `tw-*` skill must
satisfy. The contract should be packaged into the plugin skill surface and
checked by a deterministic smoke.

Required fields:

- `Purpose` or equivalent task-scoped start prompt;
- required authority inputs or explicit bootstrap handling;
- required references under `references/` or explicit delegation to a packaged
  internal skill that carries those references;
- workflow/preflight steps;
- output contract;
- held claims.

The inventory should classify gaps as:

- `pass`: wrapper directly satisfies the contract;
- `pass_via_packaged_delegate`: wrapper is intentionally thin but delegates to
  a packaged internal skill that satisfies the contract;
- `held`: wrapper is user-facing but lacks required prompt/knowledge elements;
- `internal`: not user-facing and excluded from the direct-callable contract.

### Requirement Closure Contract

Define the requirement closure model in docs and matrix guidance:

```text
Requirement -> Trace/Design -> Implementation Artifact -> Verification Implementation
-> Verification Procedure -> Verification Result -> Validation Procedure
-> Validation Result or Held Validation Record
```

Verification proves the requirement was built correctly. Validation proves the
requirement intent works for the user or operating context. A test command can
be verification evidence; it is not automatically validation evidence.

### Audit Mode

Keep the existing implementation scanner default as changed-file scoped.

Add a higher-level audit mode layer that consumes:

- code-anchor scanner output;
- Code Anchor Evidence rows;
- requirement and trace statuses;
- verification and validation rows;
- call/capability inventory where available;
- duplicate/similar behavior heuristics.

The audit should emit structured findings rather than mutate files. Candidate
classes:

- `TW-AUDIT-DARK-BEHAVIOR`
- `TW-AUDIT-OBSOLETE-BEHAVIOR`
- `TW-AUDIT-ORPHANED-BEHAVIOR`
- `TW-AUDIT-DUPLICATE-BEHAVIOR`
- `TW-AUDIT-SIMILAR-BEHAVIOR`
- `TW-AUDIT-ANCHOR-ONLY-COVERAGE`
- `TW-AUDIT-MISSING-VALIDATION-PROCEDURE`

Each finding should include affected requirement IDs, trace IDs, artifact path,
evidence, confidence, claim impact, and recommended authority action:
`keep_and_document`, `merge`, `deprecate`, `remove`, `create_requirement`,
`record_exception`, or `human_decision`.

### Documentation

Update public docs to make the workflow understandable:

- README: explain normal implementation traceability versus audit mode.
- Plugin README: explain user-facing skill path and held claims.
- Docs page or section: "How to use TraceWeaver to find dark, obsolete, and
  duplicate code."
- Requirements docs: capture `REQ-TW-061` through `REQ-TW-063`.

The docs must clearly state that audit findings are not automatic deletion
authority.

## Implementation Units

### U1: Add And Review Requirements

Goal: create explicit authority for the stronger systems-engineering audit
contract.

Files:

- `requirements.md`
- `.traceweaver/intent-contract.yml`
- `traceability-matrix.md`
- `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- `docs/validation/traceweaver-skill-behavior-audit.md`
- this plan

Actions:

- Add `REQ-TW-061`, `REQ-TW-062`, and `REQ-TW-063`.
- Add `ART-TW-058`, `TRACE-TW-044`, `ATP-TW-028`, `RESULT-TW-028`, and
  `VER-TW-056` rows.
- Record held scope for runtime enforcement, publication, Vestro validation,
  semantic-audit completeness, and removal authority.
- Run `tw-requirements-review` scoped to the new requirements.
- Run scoped `tw-doc-review`.

Acceptance:

- Requirements review passes or returns explicit findings.
- Doc review accepts the authority update or reports blocking contradictions.

### U2: Define Skill Prompt/Knowledge Contract

Goal: make the user-facing wrapper contract inspectable and testable.

Files:

- new or existing TraceWeaver-owned reference under
  `plugins/traceweaver-core/references/`;
- skill-local copies where direct-callable skills must resolve the contract;
- `tw-auto`, `tw-plan`, `tw-work`, `tw-code-review`, `tw-doc-review`,
  `tw-traceability-check`, `tw-requirements-review`, `tw-authority-gate`, and
  other user-facing wrappers as needed;
- install/discovery smokes.

Actions:

- Define required prompt/knowledge fields.
- Update thin wrappers where they lack explicit authority inputs or packaged
  reference/delegate statements.
- Add a deterministic inventory script or smoke assertion.
- Keep CE-derived component bodies unchanged.

Acceptance:

- Inventory reports every user-facing `tw-*` wrapper as `pass`,
  `pass_via_packaged_delegate`, or intentionally `held/internal`.
- Install/discovery smoke proves packaged references are present.

### U3: Define Requirement Closure Contract

Goal: make done mean implementation plus verification plus validation path.

Files:

- `requirements.md`
- `traceability-matrix.md`
- matrix template or guidance docs;
- README/plugin README docs;
- validation evidence.

Actions:

- Add closure status language separating verification and validation.
- Update examples so verification procedures are commands/procedures with
  expected output.
- Update validation guidance so a requirement cannot be called done without
  validation evidence or an explicit held-validation record.
- Add fixture rows for clean closure, held validation, missing verification
  procedure, and missing validation procedure.

Acceptance:

- `tw-traceability-check` can report missing verification procedure and missing
  validation procedure as structured findings.
- Docs clearly explain how a requirement reaches done.

### U4: Extend Audit Mode

Goal: move beyond missing-anchor scanning into semantic audit candidates.

Files:

- `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md`
- `plugins/traceweaver-core/skills/tw-traceability-check/scripts/`
- `plugins/traceweaver-core/skills/tw-traceability-check/references/`
- fixtures under `fixtures/`;
- smoke scripts.

Actions:

- Keep existing `--mode audit` scanner behavior.
- Add a semantic audit layer or extend the scanner with evidence-backed
  candidate classes for dark, obsolete, orphaned, duplicate, similar, and
  anchor-only behavior over explicitly supported artifact classes.
- Require every semantic audit detector to emit evidence source, confidence,
  supported file/language scope, and known limitation metadata.
- Report unsupported or uninspectable surfaces as held or unknown audit
  coverage instead of treating them as clean.
- Add fixtures:
  - clean current behavior;
  - dark behavior with no authority;
  - obsolete behavior linked to superseded/stale authority;
  - orphaned behavior with no caller/verification path;
  - duplicate behavior mapped to same requirement;
  - similar behavior needing human decision;
  - anchor-only behavior with no verification/validation closure.
- Emit JSONL and Markdown findings.

Acceptance:

- Deterministic smoke proves each finding class.
- Audit mode leaves source and authority files unchanged.
- Implementation mode remains changed-file scoped and does not block unrelated
  historical debt.

### U5: Document User Workflow

Goal: make the public guidance usable.

Files:

- `README.md`
- `plugins/traceweaver-core/README.md`
- optional `docs/` usage guide.

Actions:

- Explain when to run implementation mode versus audit mode.
- Show commands and skill prompts.
- Explain output interpretation and held claims.
- Explain that audit findings become decisions, not automatic code deletion.
- Document how this helps detect dark code, obsolete code, orphaned code, and
  duplicate/similar behavior.

Acceptance:

- Docs describe a normal implementation loop and a whole-repo audit loop.
- Docs include limits: audit can identify candidates and evidence, but human or
  reviewed authority decides removal/merge/deprecation.

### U6: Review And Record

Goal: close the static proof without overclaiming runtime.

Actions:

- Run scoped `tw-code-review` for implementation files, fixtures, smokes, and
  Code Anchor Evidence rows.
- Run scoped `tw-doc-review` only for status/hash updates when authority files
  changed.
- Record clean review IDs once if clean.
- Keep runtime/autonomous/standalone/publication/release claims held unless
  separately proven.

Acceptance:

- Code review passes.
- Status/hash doc review passes if needed.
- Matrix and evidence rows identify remaining held validation and runtime work.

## Verification Plan

- `tw-requirements-review` scoped to `REQ-TW-061` through `REQ-TW-063`.
- `tw-doc-review` scoped to the authority update.
- Wrapper contract smoke:
  - pass for complete direct wrapper;
  - pass via packaged delegate for intentionally thin wrappers;
  - block/held for missing prompt, missing required inputs, or missing
    distilled knowledge reference.
- Requirement closure smoke:
  - pass for implementation plus verification plus validation procedure/evidence;
  - block for missing verification procedure;
  - block or held for missing validation procedure depending on reviewed held
    record.
- Audit-mode smoke:
  - pass clean fixture;
  - report dark behavior;
  - report obsolete behavior;
  - report orphaned behavior;
  - report duplicate behavior;
  - report similar behavior requiring human decision;
  - report anchor-only coverage;
  - leave real repository unchanged.

## Held Claims

- Runtime invocation of audit mode remains held.
- Vestro dogfood remains held.
- Standalone-plugin release readiness remains held.
- Publication, commit, push, PR, package-ready, release-ready, upstream-ready,
  and clean-replacement claims remain held.
- Audit findings do not authorize code deletion, merge, or deprecation without
  reviewed authority or human decision.
- Semantic duplicate/similar detection is candidate-audit evidence until
  deterministic fixtures and real-project validation pass.

## Suggested Next Steps

1. Treat `REQ-TW-061` through `REQ-TW-063` and
   `ART-TW-058` / `TRACE-TW-044` / `ATP-TW-028` / `RESULT-TW-028` /
   `VER-TW-056` as deterministic static implementation input with scoped code
   review passed as
   `TW-CODE-REVIEW-2026-05-12-REQ-TW-061-063-SYSTEMS-ENGINEERING-AUDIT-CLOSURE-IMPLEMENTATION-CLEAN-001`
   and status/hash doc review passed as
   `TW-DOC-REVIEW-2026-05-12-REQ-TW-061-063-SYSTEMS-ENGINEERING-AUDIT-CLOSURE-IMPLEMENTATION-STATUS-HASH-CLEAN-001`.
2. Treat the 2026-05-12 `tw-auto` dogfood active-host reconciliation as
   filesystem/hash currentness evidence for this changed source set:
   reconciliation backed up stale `ce-debug`, `tw-authority-gate`, `tw-grill`,
   `tw-requirements-review`, and `tw-traceability-check` under
   `/Users/hanneszietsman/.codex/traceweaver-core/host-reconciliation-backups/20260512T162740Z`;
   host registry smoke reports no missing, unmarked, stale, missing
   skill-local, or stale skill-local files; TW skill behavior smoke reports
   `active_host_tw_auto_review_routing_surface=pass_host_review_routing_skill_hashes_current`.
3. Run a scoped status/hash doc review only for the active-host currentness
   evidence update if this record is used as accepted authority.
4. Keep runtime invocation, active-session prompt-registry completeness, Vestro
   dogfood, publication, package/release,
   clean replacement, semantic audit completeness, and automatic
   removal/merge/deprecation authority held until their own proof gates pass.
