---
title: Patch TraceWeaver Core Plan Controls Before U5
type: fix
status: completed
date: 2026-04-29
origin: docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md
---

# Patch TraceWeaver Core Plan Controls Before U5

## Overview

The next safe move is a plan-control patch, not U5 execution. U4 has already
accepted the eleven public skill folders where supported by
`docs/validation/traceweaver-core-11-promotion-records.md`, so the current U5
text in
`docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`
overlaps files already promoted by U4.

This plan defines the documentation patch needed before any U5, U5.5, U6, U7,
U8, or U9 work proceeds. The patch must make U5 delta-only or no-op, force U5.5
to name the exact runtime subset before U6 packaging, and keep U4 public
skill-folder acceptance separate from runtime/package/release acceptance.

## Problem Frame

The latest review found that the Core 11 promotion plan still carries several
pre-U4 assumptions:

- U5 can be read as re-promoting files already accepted by U4.
- U5 derivative evidence is underspecified while section/hunk hashes remain
  prohibited without a checked-in hashing script.
- U5.5 still resembles the older traceability-slice validation path instead of
  defining runtime subsets for the Core 11 plan.
- U6a can inflate from "skills with U4 records" to all eleven skills by default.
- U7 does not create the `claim_id` records that U8/U9 require.
- Supporting requirements and stale evidence files can still imply that U4 is
  pending or that exception-backed promotion can replace required U4/U6/U7
  evidence.

The implementation must patch the plan controls before work resumes. It must not
start U5 or create runtime/package/release evidence.

## Requirements Trace

- Review finding: taxonomy current-state rows must separate public skill-folder
  acceptance from runtime candidate acceptance and release/package acceptance.
- Review finding: U5 must not promote files already accepted by U4.
- Review finding: U5 must have an exact target inventory or be recorded as
  no-op when no artifacts remain outside U4 paths.
- Review finding: U5 must be whole-file-only unless derivative evidence records
  are defined.
- Review finding: U5.5 must define a per-runtime-subset validation matrix before
  U6.
- Review finding: U6a default scope must be limited to the exact U5.5 accepted,
  reduced, or split runtime subset with current non-held U4 records.
- Review finding: U5 public artifacts need a hygiene scan before later
  packaging or release surfaces can consume them.
- Review finding: U5.5 public scenario records need actor data minimization.
- Review finding: U7 must create or update release claim records with stable
  `claim_id` values for U8/U9.
- Review finding: stale candidate and exception-backed promotion language must
  be verified or corrected in older planning and Beads export records.

## Scope Boundaries

- Do not start U5, U5.5, U6, U7, U8, or U9 execution.
- Do not add, modify, or re-promote public skill files under `skills/`.
- Do not create runtime packages, release records, or claim records as part of
  this plan-control patch.
- Do not alter U4 promotion evidence except to reference it accurately from
  planning and requirements documents.
- Do not treat U4 public skill-folder acceptance as runtime-ready,
  package-ready, or release-ready status.
- Do not allow exception records to satisfy U4 public skill-folder acceptance,
  U6 runtime/package authorization, or U7 public-release acceptance.

## Key Decisions

1. U5 becomes a delta-only public artifact inventory.

   U5 does not promote any file already accepted under U4. If no exact public
   artifacts remain outside the U4-promoted paths, U5 is recorded as
   no-op/closed and forward work moves to U5.5.

2. U5 is whole-file-only unless derivative evidence is explicit.

   The existing hashing rules prohibit section or hunk hashes until a checked-in
   script exists. U5 should therefore default to whole-file-only promotion. Any
   future derivative mode must carry source record, transformation, review,
   redaction, target hash, and stale-reset evidence.

3. U5.5 is the runtime-subset gate.

   U5.5 must name the exact runtime subset and validation matrix before U6 can
   stage package artifacts. The default first subset is the narrow authority and
   traceability slice, not all eleven U4-approved skills.

4. U6a consumes U5.5 subset acceptance, not raw U4 breadth.

   U4-only skills remain public skill-folder accepted but are excluded from
   runtime packaging by default.

5. U7 creates claim records for U8/U9.

   U8/U9 depend on stable `claim_id` values. U7 must therefore create or update
   one `release_claim_record` per claimed or held release surface.

## Implementation Units

### Unit 1: Fix taxonomy current-state model

Files:

- `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`

Plan:

- Update the current-state table so it has separate state axes for:
  - public skill-folder acceptance
  - runtime candidate acceptance
  - release/package acceptance
- Mark U4 public skill-folder promotion as passed for all eleven skills where
  supported by `docs/validation/traceweaver-core-11-promotion-records.md`.
- State that U4 passed does not imply runtime-ready or release-ready.
- Refresh any nearby open or deferred question text that still implies U4 is
  pending for the eleven public skill folders.

Verification:

- The taxonomy requirements no longer tell agents that U4 is pending for skills
  already covered by the U4 ledger.
- Searches for "pending U4" in current-state rows only return historical or
  clearly scoped text.

### Unit 2: Rewrite U5 as delta-only public artifact inventory

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Replace U5 with a delta-only public artifact inventory.
- State that U5 must not promote files already accepted under U4.
- Exclude these U4-covered paths from U5 deliverables:
  - `skills/*/SKILL.md`
  - `skills/*/references/source-basis.md`
  - `skills/*/references/operating-model.md`
  - `skills/*/references/checklist.md`
  - `skills/*/references/output-schema.md`
  - `skills/*/references/examples.md`
- Add an exact `u5_target_inventory` schema with:
  - `target_path`
  - `artifact_type`
  - `source_u4_record`
  - `promotion_mode`
  - `decision_state`
  - `reviewer`
  - `hygiene_scan`
- Require U5 to be recorded as `NO-OP` or `CLOSED_NO_DELTA` when no exact public
  artifact remains outside the U4-promoted paths.

Verification:

- U5 no longer lists U4-promoted skill folders or reference files as U5
  deliverables.
- U5 has either an exact target inventory or a no-op close condition.

### Unit 3: Define U5 derivative evidence and hashing limits

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Add a conservative default: U5 is whole-file-only until a checked-in
  derivative hashing/extraction script exists.
- If generated derivatives are later allowed, require a derivative evidence
  record with:
  - source U4 promotion record
  - source public-safe section
  - transformation summary
  - reviewer
  - redaction check
  - target file hash
  - stale reset rule
- Align this with the existing global hashing rule that prohibits section or
  hunk hashes until the supporting script exists.

Verification:

- U5 cannot create extract, summary, derivative, or hunk evidence without either
  whole-file promotion or a complete derivative evidence record.

### Unit 4: Add U5.5 runtime-subset validation matrix

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Replace traceability-slice-only U5.5 wording with a per-runtime-subset matrix.
- Add a matrix schema with:
  - `subset_id`
  - `subset_name`
  - `skills`
  - skill `files`
  - runtime discovery evidence
  - skill loading evidence
  - reference loading evidence
  - schema loading evidence
  - example loading evidence
  - routing behavior
  - failure behavior
  - scenario evidence
  - allowed claims
  - held claims
  - gate state
- Set the recommended first runtime subset to
  `light-v0.1-authority-traceability` with:
  - `requirements-reviewer`
  - `systems-engineering-traceability`
- State that expanding beyond the accepted U5.5 subset requires a later explicit
  scope decision and validation matrix update.

Verification:

- U5.5 names runtime subsets before U6.
- U5.5 no longer depends only on the old traceability runtime path.
- No wording defaults runtime scope to all eleven U4-approved skills.

### Unit 5: Tighten U6a default runtime scope

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Replace the current U6a default with:
  - default runtime scope is limited to the exact U5.5 accepted, reduced, or
    split runtime subset
  - each skill in that subset must also have a current non-held U4 record
  - U4-only skills are excluded from runtime packaging by default
- Preserve the rule that exception records do not satisfy U4 public
  skill-folder acceptance, U6 runtime/package authorization, or U7 release
  acceptance.

Verification:

- U6a cannot inflate from all U4-approved public skill folders to all eleven
  runtime packaged skills by default.

### Unit 6: Add U5 public hygiene scan

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Add a U5 verification requirement for public hygiene scans covering:
  - non-public provenance
  - private paths
  - source mappings
  - source IDs
  - page refs and local paths
  - non-public commits or tree IDs
  - raw distilled output
  - scenario source details
  - licensed-source names where unsafe
  - secrets and environment values
  - unsupported conformance, runtime, package, or release claims

Verification:

- U5-created public artifacts cannot become package/release inputs without
  explicit public-hygiene evidence.

### Unit 7: Add U5.5 actor data minimization

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Add a public-record minimization rule for U5.5 scenario validation.
- Allow only:
  - role category
  - pseudonymous rater ID
  - sanitized scenario ID
  - public-safe actor class
  - summarized value evidence
- Prohibit:
  - stakeholder names
  - customer names
  - project names
  - rater identities
  - raw transcripts
  - proprietary scenario details

Verification:

- U5.5 records can support runtime validation without exposing actor identities
  or proprietary scenario content.

### Unit 8: Add U7 release claim records

Files:

- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`

Plan:

- Require U7 to create or update one `release_claim_record` per claimed or held
  surface.
- Define the required record fields:
  - `claim_id`
  - `surface`
  - `gate_state`
  - `owner`
  - `allowed_use`
  - `close_condition`
  - `reopen_condition`
  - `supporting_gates`
  - `held_reason`
- State that U8/U9 may only consume claims with stable `claim_id` values and
  current supporting gates.

Verification:

- U7 creates the claim records needed by U8/U9 instead of only listing held
  claims in prose.

### Unit 9: Verify stale candidate and exception-backed promotion records

Files:

- `docs/plans/2026-04-25-001-feat-traceability-skill-mvp-plan.md`
- `.beads/issues.jsonl`

Plan:

- Check the older MVP plan for stale current-state references to `8545bf2`.
- If any current-state U5.5 guidance still points to `8545bf2`, either refresh
  it to the live candidate
  `987793dfd477bc205a0a49efe4ec1b1e31045903` or mark the section historical
  and superseded by the Core 11 promotion plan.
- Check `.beads/issues.jsonl` for language that says U6a can proceed with
  U4-approved records or explicit exceptions.
- Update Beads export text if needed so it says exception records cannot satisfy
  U4 public skill-folder acceptance, U6 runtime/package authorization, or U7
  release acceptance.

Verification:

- Searches for `8545bf2` do not return active U5.5 current-state guidance.
- Searches for exception-backed U6a wording do not return active or closed issue
  text that contradicts RF-059/RF-061 style invariants.

### Unit 10: Record review findings and rerun focused document review

Files:

- `docs/reviews/2026-04-27-u1-u55-closeout-review-findings.md`
- `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`
- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`
- `docs/plans/2026-04-25-001-feat-traceability-skill-mvp-plan.md`
- `.beads/issues.jsonl`

Plan:

- Add review-inventory rows for the plan-control findings resolved by this
  patch.
- Rerun a focused document review on the patched requirements and Core 11
  promotion plan.
- Treat any remaining U5/U5.5/U6a/U7 scope leak as blocking before U5 starts.

Verification:

- Focused review finds no remaining U4/U5 overlap, U5.5 subset ambiguity, U6a
  all-eleven default, missing U5 hygiene scan, missing U5.5 actor minimization,
  or missing U7 claim-record requirement.

## Sequencing

1. Patch taxonomy current-state wording.
2. Rewrite U5 as delta-only/no-op inventory.
3. Add U5 derivative evidence and hashing limits.
4. Add U5.5 runtime-subset validation matrix.
5. Tighten U6a default scope.
6. Add U5 public hygiene scan.
7. Add U5.5 actor data minimization.
8. Add U7 release claim records.
9. Verify stale candidate and Beads exception-backed language.
10. Record review findings and rerun focused document review.

## Test And Review Expectations

This is a documentation control patch. There are no application tests to add.
Verification is review- and scan-based:

- Current-state text must distinguish U4, runtime, package, and release states.
- U5 target inventory must exclude U4-promoted files.
- U5 must be no-op/delta-only unless exact non-U4 public artifacts are named.
- U5 derivative evidence must be whole-file-only or fully specified.
- U5.5 must name runtime subsets before U6.
- U6a must not default to all eleven U4-approved skills.
- U5 and U5.5 must include public hygiene and actor minimization rules.
- U7 must define release claim records for U8/U9.
- Stale candidate and exception-backed promotion scans must be clean or
  explicitly historical.

## Risks

- If U5 remains broad, later agents can duplicate U4 records and create
  conflicting promotion evidence.
- If U5.5 does not name a runtime subset, U6 can accidentally package all
  eleven U4-approved public folders.
- If U7 does not create claim records, U8/U9 will invent or infer claim IDs
  during release validation.
- If stale historical docs are not marked as such, agents can follow outdated
  candidate or exception-backed promotion paths.

## Acceptance Criteria

- U5 no longer overlaps U4-promoted skill reference files.
- U5 is either no-op/delta-only or has an exact target inventory.
- U5 derivative evidence is whole-file-only or fully specified.
- U5.5 defines runtime subsets before U6.
- U6a cannot inflate to all eleven U4-approved skills by default.
- Public hygiene and actor data minimization are required.
- U7 creates or updates release claim records needed by U8/U9.
- Stale candidate and exception-backed promotion wording is either corrected or
  marked historical.
- A focused document review is rerun before any U5 execution starts.
