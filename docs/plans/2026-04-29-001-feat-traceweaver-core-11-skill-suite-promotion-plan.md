---
title: Promote TraceWeaver Core 11-Skill Suite
type: feat
status: active
date: 2026-04-29
origin: docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md
---

# Promote TraceWeaver Core 11-Skill Suite

## Overview

TraceWeaver Core is no longer a four-skill Lite add-on. The product direction is
an eleven-skill, tailored systems-engineering suite for agentic software work.

One publishable source baseline exists, with private distillation retained only
as internal provenance evidence:

```text
internal_provenance_record: TWCORE-INT-PROV-2026-04-29-001
private_distilled_outputs_status: internal provenance only; not a promotion source

public_candidate_repo: REDACTED_NON_PUBLIC
public_candidate_path: REDACTED_NON_PUBLIC
public_candidate_commit: REDACTED_NON_PUBLIC
public_candidate_tree: REDACTED_NON_PUBLIC
public_candidate_status: recorded in non-public validation record
```

Private source provenance and internal skill outputs are recorded only
in internal validation record `TWCORE-INT-PROV-2026-04-29-001`; public and
runtime promotion consumes the scrubbed public candidate only.

This plan defines how to review and promote controlled deltas from the scrubbed
public candidate into public TraceWeaver docs, public skill artifacts, schemas,
examples, runtime packages, and release claims. The internal provenance baseline is
kept as internal evidence only and is not a normal promotion source. This plan
does not claim full external standards conformance and does not allow any skill to
silently promote an agent interpretation into authority.

## Problem Frame

The earlier public work focused on a narrow Agent Skills traceability slice:
`requirements-reviewer`, `systems-engineering-traceability`, and supporting
references. That was useful, but it now underspecifies the TraceWeaver Core
product contract.

The scrubbed public candidate includes all eleven Core skills:

1. `needs-and-requirements-capture`
2. `requirements-reviewer`
3. `systems-engineering-traceability`
4. `risk-gap-change-control`
5. `baseline-configuration-control`
6. `technical-review-and-audit-gate`
7. `verification-planner`
8. `validation-planner`
9. `architecture-and-interface-reviewer`
10. `design-decision-reviewer`
11. `traceweaver-lifecycle-orchestrator`

The next work must turn this into a controlled public product baseline without
blurring four boundaries:

- Private source material vs public/runtime authority.
- Internal distilled evidence vs scrubbed publishable candidate.
- Core skill semantics vs TraceWeaver CE adapter wiring.
- Tailored systems-engineering controls vs full standards conformance claims.

## Requirements Trace

- Taxonomy R1-R3: classify Core skills and CE adapter-only wrappers.
- Taxonomy R4-R7: preserve the authority foundation.
- Taxonomy R8-R15: promote the remaining Core skills with clean responsibility
  boundaries.
- Taxonomy R16-R18: keep CE wrappers adapter-only.
- Source baseline requirement: all eleven scrubbed public-candidate skill
  folders must preserve the agreed shape: `SKILL.md`, `references/source-basis.md`,
  `references/operating-model.md`, `references/checklist.md`,
  `references/output-schema.md`, and `references/examples.md`.
- Public-candidate requirement: publication work must promote from
  `REDACTED_NON_PUBLIC` at commit
  `REDACTED_NON_PUBLIC`, not directly from the private
  distilled baseline.
- Core principle: agents may help create needs, requirements, plans, decisions,
  code, tests, and evidence; agents may not silently decide what is
  authoritative.
- Local-only constraint from the U1.5/U2 control-gate decision in the U1-U5.5
  closeout plan: upstream-ready and public-release-ready claims remain held
  until the required gates bind to a final candidate and are rerun or
  impact-reviewed after runtime/package changes.

## Scope Boundaries

- Do not copy private files directly into runtime packages.
- Do not move private distilled material into public docs, public product-contract
  docs, `docs/distilled/`, public skill folders, schemas, examples, runtime
  files, package manifests, or release claims by default.
- Do not promote directly from internal internal outputs into
  public/live artifacts. Public promotion must use the scrubbed public candidate
  for this Core 11 scope.
- U0.5 may authorize only scrubbed-public-candidate promotion. It does not
  authorize ordinary private-to-public movement.
- Direct private-to-public movement is outside Core 11 acceptance; exception
  review records may document rejected or deferred alternatives, but they do not
  satisfy U4 public skill-folder, U6 runtime/package, or U7 public-release gates.
- Do not cite non-public source mappings, source registers, alignment deltas, source
  IDs, page references, local paths, licensed-source names, compliance claims, or
  conformance claims in public/live artifacts.
- Do not cite non-public repo names, paths, commit IDs, tree IDs, or provenance
  details in public-facing product-contract docs. Public docs may reference only
  internal provenance record `TWCORE-INT-PROV-2026-04-29-001`.
- Do not promote all eleven skills in one unreviewed package.
- Do not rename CE adapters as Core skills.
- Do not claim external standards conformance.
- Do not make `traceweaver-lifecycle-orchestrator` a giant catch-all skill.
- Do not let `baseline-configuration-control`, `technical-review-and-audit-gate`,
  `verification-planner`, or `validation-planner` become CE-only patches; they
  are Core skills with portable responsibility boundaries.

## Promotion Definition

Promotion is any movement from the scrubbed public candidate into a public or
live TraceWeaver artifact. Runtime packaging is only one promotion type. Private
distilled material is internal evidence and must not be the direct source for
public/live promotion.

Promotion includes:

- Public product-contract docs.
- Public roadmap or planning docs.
- `docs/distilled/` summaries or derivatives.
- Public skill folders.
- Schemas, examples, checklists, and operating-model extracts.
- Runtime files and package manifests.
- Public-release, upstream-ready, or runtime-ready claims.

No public-candidate-to-public movement may occur before U0.5 passes. Generated
summaries, reframes, excerpts, or rewritten derivatives still count as
promotions when they are based on the scrubbed public candidate.

## Scrubbed Public Candidate Definition

A scrubbed public candidate is independently written TraceWeaver-native content
that has been reviewed for:

- no copied or close-paraphrased protected standards or handbook text;
- no source tables, diagrams, checklists, examples, or clause summaries;
- no non-public repo, path, commit, local-file, or provenance leakage;
- no unsupported standards conformance or compliance claim;
- complete source-to-target promotion mapping before public/live promotion.

The scrubbed public candidate is the only source for Core 11 public/live
promotion. Direct private-to-public promotion is prohibited for this scope;
exception review records may document rejected or deferred alternatives, but do
not satisfy U4, U6, or U7 acceptance.

## Promotion Record Schema

Every promoted file or hunk outside the scrubbed public-candidate baseline must
have a source-to-target record. File-level records are acceptable only for
whole-file promotion; partial promotions require hunk-level or section-level
mapping.

The canonical promotion-record artifact is:

```text
docs/validation/traceweaver-core-11-promotion-records.md
```

Every promoted file, hunk, summary, generated derivative, runtime artifact,
package manifest, or release claim must append a record there before its owning
unit can pass.

Public committed promotion records are a sanitized ledger. They may include
public-safe source anchors, target paths, target hashes, redacted source fields,
and internal evidence record IDs; they must not include concrete non-public repo
names, source paths, source commits, tree IDs, local paths, raw command output, or
other non-public source locators. Concrete source locator evidence belongs only in
the access-controlled access-controlled evidence record named by `private_evidence_record`.

```text
promotion_record:
  promotion_id:
  promoted_skill:
  promotion_type: file | hunk | summary | generated-public-derivative | runtime-glue
  private_evidence_record:
  public_source_anchor:
  source_repo: public-safe value or REDACTED_NON_PUBLIC
  source_baseline_type: scrubbed-public-candidate
  source_commit: public-safe value or REDACTED_NON_PUBLIC
  source_tree: public-safe value or REDACTED_NON_PUBLIC
  source_path: public-safe value or REDACTED_NON_PUBLIC
  source_hunk_or_section:
  source_integrity_status:
  target_repo:
  target_path:
  target_hunk_or_section:
  target_commit:
  hash_algorithm: SHA-256
  canonicalization_version:
  command_used:
  command_output:
  source_hash:
  target_hash:
  public_scope_decision:
  reviewer:
  review_session_id:
  decision_state: approved | reduced | held | rejected
  stale_reset_rule:
  notes:
```

Release claims use explicit claim records rather than informal prose references:

```text
release_claim_record:
  claim_id:
  exact_claim_text:
  surface:
  claim_surface_path:
  claim_type: product-contract | runtime-ready | package-ready | upstream-ready | public-release-ready | release-note | pr-description
  gate_state: approved | reduced | split | held | blocked | rejected | superseded
  required_u4_records:
  required_u6_records:
  required_u7_record:
  supporting_gates:
  u8_artifact_identifier:
  owner:
  allowed_use:
  allowed_use_while_held:
  close_condition:
  reopen_condition:
  held_reason:
```

U8 and U9 operate on `claim_id` values. They must not close, ship, or rewrite
release claims from informal descriptions alone.

Any public, runtime, package, schema, example, or release-claim change after a
promotion review resets the affected promotion decision to `held` unless a named
reviewer records an explicit impact review in
`docs/validation/traceweaver-core-11-promotion-records.md`.

## Promotion Hashing Procedure

Promotion hashes must be reproducible.

- `hash_algorithm`: `SHA-256`.
- `canonicalization_version`: `traceweaver-promotion-hash-v1`.
- Whole-file source hash command:
  `git show <source_commit>:<source_path> | shasum -a 256`
- Whole-file target hash command:
  `git show <target_commit>:<target_path> | shasum -a 256`
- Promotion records must include `hash_algorithm`, `canonicalization_version`,
  `command_used`, `command_output`, `source_hash`, and `target_hash`.
- In public committed records, source commands, command outputs, and source
  locator values are redacted when they would expose non-public repos, paths,
  commits, trees, or local paths. The public record must then cite the
  `private_evidence_record` that contains the concrete source command/output.
- Public target commands and target command outputs remain reproducible in the
  public ledger when the target artifact is public.
- Hunk or section hashes are prohibited until a checked-in script such as
  `scripts/traceweaver/hash_promotion.py` defines stable extraction,
  normalization, and command-output rules.
- Until that script exists, partial promotion must record the section identity
  and review evidence, but only whole-file hashes may satisfy the hash fields.

## Promotion Order

The first four authority-foundation skills exist in the scrubbed public
candidate. Runtime/live candidate status differs:

- `requirements-reviewer`: live/runtime candidate exists.
- `systems-engineering-traceability`: live/runtime candidate exists.
- `needs-and-requirements-capture`: scrubbed public-candidate seed exists; no
  live/runtime candidate yet.
- `risk-gap-change-control`: scrubbed public-candidate seed exists; no
  live/runtime candidate yet.

The seven newly added skills should be reviewed and promoted in this order:

1. `baseline-configuration-control`
2. `technical-review-and-audit-gate`
3. `verification-planner`
4. `validation-planner`
5. `architecture-and-interface-reviewer`
6. `design-decision-reviewer`
7. `traceweaver-lifecycle-orchestrator`

Rationale: the current blockers are configuration-control and gate-control
problems before they are lifecycle-orchestration problems. Baseline control,
review/audit gates, verification planning, and validation planning provide the
evidence discipline needed before broader routing is promoted.

## Key Decisions

- Private source provenance and internal skill outputs are recorded only
  in internal validation record
  `TWCORE-INT-PROV-2026-04-29-001`.
- Concrete non-public source commits, tree IDs, and paths are redacted from this
  public plan.
- The product direction is eleven Core skills, not four; definitive public
  product-contract claims are held until U2 verifies the relevant scrubbed
  candidate folders, schemas, hygiene, and authority boundaries.
- Runtime/public promotion remains controlled by early review, source-to-target
  mapping, reproducible SHA-256 hashes, evidence, package anatomy, and
  validation gates.
- Every skill must state:
  - what authority it can inspect, create, route, or protect;
  - what evidence it requires;
  - what evidence it produces;
  - what it must hand off to another skill;
  - what conditions force `held`, `reduced`, `split`, `rejected`, or
    `superseded`.
- The old U5/U5.5 Agent Skills slice remains historical/current candidate
  evidence, not the full TraceWeaver Core product definition.
- Forward execution after U4 splits into U5 delta-only artifact inventory and
  U5.5 runtime-candidate subset evidence. U4 has accepted the public skill
  folders only; U5 must not re-promote U4-covered files and may close as no-op
  when no exact non-U4 public artifacts remain. U6 starts only after the exact
  runtime subset has both a U5.5 `accepted`, `reduced`, or `split` terminal
  state and current non-held U4 file-level records. U6 cannot start from U2/U3
  summaries, U4-only breadth, or exception records.

## Forward Gate Plan

This plan is currently post-U4 for public skill-folder promotion. The next
executable work is U5 delta-only public artifact inventory plus U5.5 evidence
and runtime-subset decision work. U5 must close as no-op if no exact public
artifacts remain outside U4-covered paths. U6 still must not start until the
exact runtime subset has both a U5.5 terminal state of `accepted`, `reduced`, or
`split` and current non-held U4 file-level records.

Gate order:

1. U4 source-availability preflight records the expected files, public-safe
   anchors, non-public source hash evidence, reviewer/session, missing files, and
   decision for each target skill. Status: complete for all eleven Core public
   skill folders in
   `docs/validation/traceweaver-core-11-promotion-records.md`.
2. U4 promotes only target skills whose complete scrubbed public-candidate file
   set is available with non-sensitive source anchors and reproducible whole-file
   hashes. Status: complete for all eleven Core public skill folders under
   `skills/`.
3. U5 records a delta-only public artifact inventory outside U4-promoted skill
   folder paths, or closes as no-op when no exact target artifacts remain.
4. U5.5 completes focused review, runtime-sync evidence,
   requirements-quality validation, lifecycle-discoverability validation, R31
   real-scenario validation, a per-runtime-subset validation matrix, and a
   terminal runtime-candidate state for each proposed subset.
5. U6a/U6b packages only skills in the exact U5.5 accepted, reduced, or split
   runtime-candidate subset that also have current non-held U4 records.
6. U7 records final acceptance and release-gate status.
7. U8 prepares the release or upstream-neutral PR package only for claims that
   U7 leaves non-held.
8. U9 records post-release or post-PR validation, adoption evidence, and any
   residual holds.

If a later U4 source file set is unavailable or drifts, record or refresh the U4
hold for the affected target skill and do not create or update public skill
folders from `docs/distilled/` summaries, U2 validation output, U3 summary
records, runtime files, exception records, or non-public source material.

## Implementation Units

- [x] **U0: Freeze Publishable Candidate Baseline and Promotion Scope**

**Goal:** Record the internal provenance record ID, scrubbed public-candidate
baseline, target public scope, and promotion boundaries before any
public-candidate-to-public movement or private-source exception.

**Files:**
- Modify: `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`
- Modify: `docs/reviews/2026-04-27-u1-u55-closeout-review-findings.md`
- Create or update: `docs/validation/traceweaver-core-11-promotion-records.md`

**Approach:**
- Record only the internal provenance record ID for private distilled evidence;
  do not record non-public repo names, paths, commits, tree IDs, or local paths in
  public artifacts.
- Record that internal skill outputs are not candidate skills to
  consume for public/live promotion.
- Record scrubbed public-candidate repo, commit, path, and tree hash as the
  publishable source baseline.
- Verify the local public-candidate checkout before any review or promotion
  record cites `REDACTED_NON_PUBLIC#scrubbed-public-candidate`: repository HEAD,
  candidate selector tree hash, clean tracked diff for the redacted candidate
  selector, and explicit disposition for any untracked files under that selector.
- Treat unrelated untracked files outside the candidate path as non-blocking only
  if they are named in the baseline preflight record.
- Initialize `docs/validation/traceweaver-core-11-promotion-records.md` as the
  canonical promotion-record artifact.
- Record the eleven-skill Core direction and hold definitive public
  product-contract claims until U2 passes for the claimed skills.
- Record that internal outputs remain internal provenance evidence and
  that public promotion must consume the scrubbed public candidate.
- Record that U0.5 may authorize only scrubbed-public-candidate promotion, and
  that direct private-to-public movement is outside Core 11 acceptance.
- Record that only `requirements-reviewer` and
  `systems-engineering-traceability` currently have live/runtime candidate
  status among the first four authority-foundation skills.

**Verification:**
- The plan distinguishes private distilled evidence from scrubbed
  public-candidate status and live/runtime candidate status.
- The plan distinguishes internal evidence from scrubbed publishable source.
- The public-candidate baseline preflight proves the reviewed files match
  `REDACTED_NON_PUBLIC` and tree
  `REDACTED_NON_PUBLIC`.
- The promotion-record artifact exists and is named by the plan.
- The review inventory records the current plan-control findings and their
  disposition.

- [x] **U0.25: Record Scrubbed Public Candidate Quarantine**

**Goal:** Record that the scrubbed public candidate exists in a private/quarantine
workspace and is not yet a public/live promoted artifact.

**Files:**
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`
- Update: `docs/reviews/2026-04-27-u1-u55-closeout-review-findings.md`

**Approach:**
- Record the scrubbed public-candidate path, commit, tree hash, folder count, and
  file count in the promotion-record artifact using redacted public values and
  the internal provenance record ID for concrete non-public details.
- Record that the candidate is the only normal source for promotion, but that no
  public/live artifact is promoted until later units create source-to-target
  records.
- Record public-safety hygiene evidence: no non-public source mappings, source
  registers, alignment deltas, source IDs, page references, local paths,
  licensed-source names, unsupported compliance claims, or unsupported
  conformance claims.

**Verification:**
- Candidate quarantine evidence exists before U0.5.
- No public/live promotion claim is attached to the quarantine record.
- Any drift from the recorded commit or tree resets U0.25 and downstream gates to
  `held` until rerun or impact-reviewed.

- [x] **U0.5: Early Promotion-Readiness Review Gate**

**Goal:** Run focused review before any public promotion work starts.

**Review targets:**
- `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`
- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`
- Scrubbed public-candidate source index at
  `REDACTED_NON_PUBLIC`
- Promotion-record artifact at
  `docs/validation/traceweaver-core-11-promotion-records.md`

**Gate rule:**
- No public-candidate-to-public movement may occur before U0.5 passes.
- U0.5 may approve only scrubbed-public-candidate promotion; it does not approve
  ordinary private-to-public movement.
- Direct private-to-public movement remains outside Core 11 acceptance and cannot
  satisfy U4, U6, or U7 gates.
- Public product-contract docs, public roadmap docs, `docs/distilled/` content,
  public skill artifacts, schemas, examples, runtime files, package manifests,
  and release claims all count as promotion.
- U0.5 may approve, reduce, hold, reject, or split the promotion scope.

**Verification:**
- No P1/P2 scope-control finding remains open for the promotion plan before U2,
  U1a, U1b, U3, U4, U5, U6a, or U6b begins.
- The scrubbed public candidate is the only approved source for public/live
  promotion.
- Any accepted risk, gap, or deferred promotion has owner, date/session, allowed
  use, rationale, linked authority, and review condition.

- [x] **U2: Review Scrubbed Public Candidate Shape and Shared Schema**

**Goal:** Verify all eleven scrubbed public-candidate skill folders meet the
required structure, public hygiene expectations, and shared output-schema
contract before any public promotion.

**Files:**
- Review source: scrubbed public candidate named by
  `TWCORE-INT-PROV-2026-04-29-001`
- Create or update: `docs/validation/traceweaver-core-11-skill-suite-review.md`
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`

**Approach:**
- Depend on U0.5; this unit may not create public validation output until the
  early promotion-readiness gate passes.
- Record the public-candidate source commit, tree hash, folder list, and baseline
  preflight result.
- Verify required files and required `SKILL.md` sections.
- Verify common output-schema fields.
- Verify public hygiene for the candidate: no non-public source mappings, source
  registers, alignment deltas, source IDs, page references, local paths,
  licensed-source names, compliance claims, or conformance claims.
- Check that every skill has a narrow authority boundary and handoff rules.
- Block promotion if a skill silently upgrades candidates, interpretations, or
  review findings into authority.
- Create promotion records for the validation artifact itself where it derives
  from the scrubbed public candidate.

**Verification:**
- Validation artifact records pass/fail per skill.
- Validation artifact records public hygiene pass/fail per skill.
- Any rejected or held skill has owner, reason, allowed use, and review
  condition.
- U2 has source-to-target promotion records for any public validation summary
  derived from the scrubbed public candidate.

- [x] **U1a: Optional Limited Public Direction Notice**

**Goal:** Optionally update public-facing docs with limited direction language
after U2 candidate review, without claiming accepted, promoted, runtime-ready, or
release-ready skill status.

**Files:**
- Modify: `README.md`
- Modify: `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`
- Modify: `docs/plans/2026-04-27-001-feat-traceweaver-core-taxonomy-reconciliation-plan.md`
- Modify: `docs/plans/2026-04-27-002-feat-traceability-mvp-u1-u55-closeout-plan.md`
- Modify: `docs/validation/systems-engineering-traceability-fork-results.md`

**Approach:**
- Depend on U2 review results for any skill mentioned.
- Use direction-only wording such as: "TraceWeaver Core is planned as an
  eleven-skill systems-engineering suite. Candidate skill artifacts are under
  review."
- Do not say TraceWeaver Core provides eleven accepted, promoted, runtime-ready,
  upstream-ready, or release-ready skills.
- Do not include non-public repo names, paths, commit IDs, tree IDs, local paths,
  or provenance details.
- Public docs may refer only to the scrubbed public candidate concept and
  high-level standards-informed design.
- Preserve local-only and upstream/public-release holds.
- State that scrubbed public-candidate outputs are the publishable source
  baseline, not automatic public/runtime acceptance.
- Keep CE adapter language separate.
- Create promotion records for every public doc hunk derived from the scrubbed
  public candidate.

**Verification:**
- Search finds no current product-contract claim that Core is only two or four
  skills.
- Search finds no claim that all eleven are public/runtime accepted.
- Search finds no non-public repo names, paths, commit IDs, tree IDs, local paths,
  or provenance details in public-facing docs.
- Search finds no generic private-baseline promotion language in U1a target docs:
  `private distilled`, `private source baseline`, `private outputs`,
  `private skill outputs`, or redacted repo/path/commit baseline blocks.
- Any historical or superseded private-source promotion instructions in U1a
  target docs are rewritten as non-executable and point to this Core 11
  scrubbed-public-candidate promotion plan.
- Every promoted public-doc hunk has a source-to-target promotion record.

**Closure record:**
- Date/session: 2026-04-29, `ce-doc-review` and `ce:work`, Beads issue
  `TraceWeaver-025`.
- Decision: closed as limited direction cleanup only. U1a does not promote a
  definitive product contract, public skill-folder acceptance, runtime package,
  upstream-ready claim, or release-ready claim.
- Target disposition:
  - `README.md`: retained current runtime-candidate status language; no U1a
    public-candidate hunk was promoted.
  - `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`:
    records the eleven-skill staged direction and current U2/U3 status.
  - `docs/plans/2026-04-27-001-feat-traceweaver-core-taxonomy-reconciliation-plan.md`:
    marked historical/superseded for forward execution.
  - `docs/plans/2026-04-27-002-feat-traceability-mvp-u1-u55-closeout-plan.md`:
    replaces private-baseline executable wording with internal-provenance and
    scrubbed-public-candidate boundaries.
  - `docs/validation/systems-engineering-traceability-fork-results.md`:
    preserves local-only and upstream/public-release holds.
- Promotion-record disposition: no new U1a public-doc hunk is promoted from the
  scrubbed public candidate in this closure record; later public-doc claims must
  append promotion records when they move beyond status cleanup.

- [ ] **U1b: Definitive Public Product Contract Update (`held`)**

**Goal:** Hold definitive public product-contract updates until claim-specific
acceptance records exist.

**Files:**
- Modify: `README.md`
- Modify: `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`
- Modify: `docs/plans/2026-04-27-001-feat-traceweaver-core-taxonomy-reconciliation-plan.md`
- Modify: `docs/validation/systems-engineering-traceability-fork-results.md`

**Approach:**
- U2 may support scrubbed-candidate direction language only; it does not support
  definitive public skill-folder, runtime/package, upstream-ready, or
  release-ready claims.
- Replace obsolete four-skill/Lite product-contract language only with claims
  supported by claim-specific accepted records: U2 for scrubbed-candidate
  direction, U4 for public skill-folder acceptance, U6 for runtime/package
  acceptance, U7 for final release-gate disposition, and U8 for actual
  release/PR/package surfaces.
- Preserve local-only and upstream/public-release holds.
- Do not include non-public repo names, paths, commit IDs, tree IDs, local paths,
  or provenance details.
- Keep CE adapter language separate.
- Create promotion records for every public doc hunk derived from the scrubbed
  public candidate.

**Verification:**
- Search finds no current product-contract claim that Core is only two or four
  skills.
- Search finds no claim that all eleven are public/runtime accepted unless all
  eleven have accepted U4 public skill-folder records and U6 runtime/package
  records for the claimed status.
- Search finds no non-public provenance leakage in public-facing docs.
- Every promoted public-doc hunk has a source-to-target promotion record.

**Deferred-promotion record:**
- Date/session: 2026-04-29, `ce-doc-review` and `ce:work`, Beads issue
  `TraceWeaver-025`.
- Owner: Core 11 promotion plan owner.
- Status: `held_until_u4_u6_claim_records`.
- Allowed use while held: U4 may promote public skill folders, U5 may promote
  supporting public extracts, and U6 may decide/implement bounded runtime
  packaging. Public docs may describe scrubbed-candidate direction only.
- Held claims: definitive public skill-folder availability, runtime/package
  availability, upstream-ready status, public-release-ready status, and
  all-eleven accepted/promoted status.
- Rationale: U1b claims must be backed by the same acceptance tier they assert;
  U2 proves candidate shape/hygiene only, U4 accepts public skill folders, and
  U6 authorizes runtime/package status.
- Linked authority: U2 gate, U4 public skill-folder records, U6a runtime scope
  decision, U6b runtime/package records, U7 final acceptance/release-gate
  records, U8 release/PR/package records, and
  `docs/validation/traceweaver-core-11-promotion-records.md`.
- Review condition: reopen U1b only after the claim being made has the
  claim-specific current non-held records: U4 for public skill-folder
  availability, U6 for runtime/package availability, and U7/U8 for
  upstream-ready, public-release-ready, release-note, PR, or package-surface
  claims. Exception records cannot satisfy product-contract claims for Core 11
  public skill-folder, runtime/package, or release availability.

- [x] **U3: Promote Control-Gate Docs And Summaries First**

**Goal:** Promote public docs/distilled summaries for the four urgent new skills
that close current review blockers.

**Requirement basis:**
- Governed by:
  `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`.
- Requirement trace:
  - R12: `verification-planner`
  - R13: `validation-planner`
  - R14: `technical-review-and-audit-gate`
  - R15: `baseline-configuration-control`
- Promotion order follows the taxonomy requirements recommended
  public-promotion order for the first four post-batch-1 control skills:
  `baseline-configuration-control`,
  `technical-review-and-audit-gate`, `verification-planner`, and
  `validation-planner`.
- U3 may promote only mapped public summaries or generated public derivatives
  into `docs/distilled/`. Public skill folders, runtime packages, package
  manifests, and release claims remain out of scope until U4-U6b.

**Skills:**
- `baseline-configuration-control`
- `technical-review-and-audit-gate`
- `verification-planner`
- `validation-planner`

**Files:**
- Create or modify: `docs/distilled/`
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`
- Reference only:
  `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`
- Reference only:
  `docs/validation/traceweaver-core-11-skill-suite-review.md`; U3 decisions
  belong in the promotion-record artifact, not in this U0.5/U2 validation
  artifact.
- Target runtime package files are out of scope until U6.

**Approach:**
- For baseline control, define final candidate, fork diff, stale gate, package
  scope, impact review, and baseline audit outputs.
- For review/audit gates, define entry criteria, exit criteria, success
  criteria, action closure, and proceed/revise/hold decisions.
- For verification planning, define harness evidence, target-runtime discovery,
  pass/fail criteria, and objective evidence records.
- For validation planning, define independent/representative rater evidence,
  adoption scenarios, value thresholds, and deferred validation.
- Create promotion records for every public file, summary, derivative, or hunk
  created from scrubbed public-candidate source material.

**Verification:**
- Each promoted summary maps to one U2-passed scrubbed public-candidate skill
  and to its governing taxonomy requirement, R12-R15.
- Each promoted `docs/distilled/` file, summary, generated derivative, or hunk
  has an appended record in
  `docs/validation/traceweaver-core-11-promotion-records.md` before U3 can pass.
- Whole-file summary promotions include reproducible SHA-256 hash evidence.
  Partial-summary/hunk promotions either use an approved checked-in extraction
  script or are held until U4+ records can provide stable file-level promotion
  evidence.
- Current U5.5 blockers can be mapped to an owning Core skill.
- No U3 result claims public skill-folder acceptance, runtime readiness,
  release readiness, or U4 public artifact promotion.
- Full public skill artifact acceptance remains in U4.

- [x] **U4: Promote Public Skill Artifact Folders**

**Goal:** Promote actual public skill artifact folders from the accepted scrubbed
public candidate, not only docs/distilled summaries.

**Files:**
- Create or modify public skill folders for accepted skills.
- Required per-skill files:
  - `SKILL.md`
  - `references/source-basis.md`
  - `references/operating-model.md`
  - `references/checklist.md`
  - `references/output-schema.md`
  - `references/examples.md`
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`

**Approach:**
- Before U4 starts, append a U4 source-availability preflight row for each target
  skill in `docs/validation/traceweaver-core-11-promotion-records.md`. The row
  must list expected files, non-sensitive source anchor, reproducible source hash
  command/output or access-controlled evidence record, reviewer/session, missing-file list,
  and decision.
- Start U4 only from an approved U4 source-availability preflight row. If this
  evidence package is absent or held, refresh the U4 hold record and stop U4
  execution for that target skill.
- Depend on current, non-held U0.5/U2 gate records for each promoted skill.
  U2 proves scrubbed candidate shape, schema, hygiene, authority boundaries,
  handoffs, and hold rules only; it does not by itself accept a public skill
  folder.
- Promote only U2-passed scrubbed public-candidate skills, and make U4 file-level
  promotion records the acceptance evidence for public skill folders.
- Use file-level promotion records for whole-file promotions.
- Do not use hunk/section promotion until the checked-in hash script exists.
- Keep private distilled source and exception-record rewrites out of U4 public
  skill-folder acceptance. U4 can pass only with the actual scrubbed
  public-candidate skill folder file set.

**Verification:**
- Every promoted public skill folder contains the required file set.
- Every promoted skill file has a promotion record with reproducible whole-file
  SHA-256 source and target hashes.
- Every public skill folder has a U4 approval record in
  `docs/validation/traceweaver-core-11-promotion-records.md`; U2 validation
  records and U3 summary records are insufficient for public skill-folder
  acceptance.
- If U2 is no longer current or is set to `held`, U4 promotion for affected
  skills is blocked until U2 is rerun or impact-reviewed.
- Public skill files contain no non-public provenance, non-public source mappings,
  local paths, licensed-source names, or unsupported conformance claims.
- U4 does not create public skill folders from summaries, validation output,
  runtime files, exception records, or non-public source material.
- Every U4-promoted target skill has an approved source-availability preflight
  row before any public skill folder is created or modified.

**Closure record:**
- Date/session: 2026-04-29, `ce:work`, Beads issue `TraceWeaver-96x`.
- Decision: U4 passed for all eleven public TraceWeaver Core skill folders
  created under `skills/` from the scrubbed public-candidate file set.
- Source evidence: public ledger uses non-sensitive source anchors and cites
  access-controlled evidence record `REDACTED_NON_PUBLIC_EVIDENCE` for source
  commands and source hashes.
- Target evidence: each promoted public skill file has a file-level U4 promotion
  record and SHA-256 target hash in
  `docs/validation/traceweaver-core-11-promotion-records.md`.
- Missing content status: none for U4. If any required `SKILL.md` or reference
  file is later missing, or if source/target hashes drift, the affected U4 record
  returns to held until rerun.
- Boundary: U4 approves public skill-folder availability only. It does not
  authorize runtime/package acceptance, upstream readiness, release readiness,
  or U7/U8 claims.

- [x] **U5: Delta-Only Public Artifact Inventory**

**Goal:** Identify whether any public artifacts remain outside the U4-promoted
skill folders. U5 does not promote files already accepted under U4. If no exact
target artifacts remain outside the U4-covered paths, U5 is recorded as
`NO-OP` or `CLOSED_NO_DELTA` and work proceeds to U5.5.

**Excluded U4-covered paths:**
- `skills/*/SKILL.md`
- `skills/*/references/source-basis.md`
- `skills/*/references/operating-model.md`
- `skills/*/references/checklist.md`
- `skills/*/references/output-schema.md`
- `skills/*/references/examples.md`

**Target inventory schema:**

```text
u5_target_inventory:
  - target_path:
    artifact_type:
    source_u4_record:
    promotion_mode: whole_file | generated_derivative
    decision_state: approved | reduced | held | rejected | no_op
    reviewer:
    hygiene_scan:
```

**Approach:**
- First enumerate candidate U5 target paths and reject any target under the
  excluded U4-covered paths.
- Treat already-U4-promoted schemas, examples, checklists, source-basis files,
  operating-model files, and `SKILL.md` files as U5 inputs or no-ops, not U5
  deliverables.
- Record `NO-OP` or `CLOSED_NO_DELTA` when the target inventory is empty after
  U4-covered paths are excluded.
- U5 is whole-file-only until a checked-in derivative hashing/extraction script
  exists. Hunk or section hashes still cannot satisfy U5 hash fields.
- U5 derivatives are prohibited unless the checked-in extraction/hashing script
  exists and a derivative evidence record exists with:
  - source U4 promotion record;
  - source public-safe section;
  - transformation summary;
  - reviewer;
  - redaction check;
  - target file hash;
  - stale reset rule.
- Any U5-created public artifact must pass a public hygiene scan for private
  provenance, non-public repo names, private paths, source mappings, source IDs,
  page refs, local paths, non-public commits or tree IDs, raw distilled output,
  scenario source details, unsafe licensed-source names, secrets, environment
  values, and unsupported conformance, runtime, package, or release claims.

**Verification:**
- U5 no longer lists U4-promoted skill folders or reference files as U5
  deliverables.
- Every non-no-op U5 target has an exact `u5_target_inventory` row.
- Empty target inventory records U5 as `NO-OP` or `CLOSED_NO_DELTA`.
- U5 evidence is whole-file-only unless a complete derivative evidence record
  exists.
- Every U5 public artifact has source-to-target mapping, public hygiene scan,
  and stale reset coverage.

**Closure record, 2026-04-30:** U5 is `CLOSED_NO_DELTA` in
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md`. All 66 current
files under `skills/` are U4-covered skill-folder files, and no exact U5 target
artifact remains outside those paths. U5 creates no runtime, package, upstream,
or release claim.

- [ ] **U5.5: Complete Runtime-Candidate Evidence And Decision**

**Goal:** Define and validate exact runtime subsets before U6 packaging scope is
decided, while keeping runtime-candidate acceptance separate from public
skill-folder acceptance and release readiness.

**Current state, 2026-04-30:** the first proposed runtime subset
`light-v0.1-authority-traceability` is recorded in
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md` with
`requirements-reviewer` and `systems-engineering-traceability`. The subset is
`held_pending_runtime_evidence`; U6 remains blocked until the selected candidate
commit is refreshed or proven and the missing focused review, runtime
discovery/loading, routing, failure-behavior, R31 evidence, and append-only
terminal-state handoff are recorded.

**Files:**
- Update:
  `docs/validation/systems-engineering-traceability-fork-results.md`
- Update:
  `docs/plans/2026-04-27-002-feat-traceability-mvp-u1-u55-closeout-plan.md`
- Update or create focused U5.5 validation artifacts under `docs/validation/`
  for runtime-sync evidence, requirements-quality validation,
  lifecycle-discoverability validation, and R31 real-scenario validation.
- Update: `README.md` only for runtime-candidate status, with no package-ready,
  release-ready, upstream-ready, or public-release-ready claim.
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`

**Approach:**
- Bind every U5.5 evidence record to the same final live candidate commit.
- Create or update one runtime-subset matrix per proposed U6 candidate subset.
  The default first subset is:

```text
u5_5_runtime_subset_matrix:
  subset_id: light-v0.1-authority-traceability
  subset_name: Light v0.1 authority and traceability runtime subset
  skills:
    - skill_name: requirements-reviewer
      files:
      runtime_discovery_evidence:
      skill_loading_evidence:
      reference_loading_evidence:
      schema_loading_evidence:
      example_loading_evidence:
      routing_behavior:
      failure_behavior:
      scenario_evidence:
      allowed_claims:
      held_claims:
      gate_state:
    - skill_name: systems-engineering-traceability
      files:
      runtime_discovery_evidence:
      skill_loading_evidence:
      reference_loading_evidence:
      schema_loading_evidence:
      example_loading_evidence:
      routing_behavior:
      failure_behavior:
      scenario_evidence:
      allowed_claims:
      held_claims:
      gate_state:
```

- Do not default the runtime subset to all eleven Core skills. Any expansion
  beyond the accepted U5.5 subset requires a later explicit scope decision and a
  runtime-subset matrix update.
- Run focused review of the U5.5 runtime candidate and record the disposition of
  each review finding.
- Record runtime-sync evidence for the target runtime and discovery mechanism:
  search paths, metadata parsing, skill loading, reference loading, routing,
  invocation or recommendation behavior, and failure behavior.
- Keep raw runtime logs, command traces, scenario sources, local search paths,
  environment-derived values, and reviewer/session details private unless they are
  sanitized. Committed U5.5 artifacts must use normalized relative paths, redacted
  command output where needed, and no tokens, secrets, environment variables,
  private paths, or non-public commits.
- Record requirements-quality validation for the candidate behavior that routes
  requirements, success criteria, meaningful behavior, implementation authority,
  and traceability work.
- Record lifecycle-discoverability validation without accepting
  persona-awareness, CE hooks, broad lifecycle persona guidance, or
  `idea-refine` command wiring unless separately authorized.
- Complete R31 real-scenario validation with public-safe actor data. Public
  records may include only role category, pseudonymous rater ID, sanitized
  scenario ID, public-safe actor class, and summarized value evidence. Public
  records must not include stakeholder names, customer names, project names,
  rater identities, raw transcripts, or proprietary scenario details.
- Record one terminal runtime-candidate state: `accepted`, `reduced`, `split`,
  `held`, `blocked`, `rejected`, or `superseded`.
- If the state is `accepted`, `reduced`, or `split`, identify the exact runtime
  subset eligible to proceed toward U6 after U4 exists. If the state is `held`,
  `blocked`, `rejected`, or `superseded`, U6 remains blocked for that runtime
  candidate.
- Do not use U5.5 acceptance to satisfy U4 public skill-folder acceptance or U7
  release readiness. U5.5 can authorize only the runtime-candidate state it
  explicitly records.

**Verification:**
- U5.5 focused review, runtime-sync evidence, requirements-quality validation,
  lifecycle-discoverability validation, and R31 real-scenario validation all cite
  the same final live candidate commit.
- The terminal state states whether U6 may proceed after U4 records exist.
- The terminal state is recorded per runtime subset, not as an all-Core default.
- Runtime-subset matrix rows cover runtime discovery/loading evidence, reference
  loading evidence, schema/example loading evidence, routing behavior, failure
  behavior, scenario evidence, allowed claims, held claims, and gate state.
- U5.5 records `release_gate_effect: held_until_U7` or
  `release_gate_effect: not_evaluated_for_release`; reduced/split release
  packaging classifications belong to U7/U8, not U5.5.
- Any accepted or reduced U5.5 subset has explicit excluded files, deferred
  files, and follow-up owner/condition records.
- No U5.5 record claims public skill-folder availability, upstream-ready status,
  public-release-ready status, or U6 runtime/package acceptance.
- U6a remains blocked until every runtime candidate skill also has current
  non-held U4 file-level public skill-folder records.
- U5.5 validation artifacts pass a redaction scan for raw logs, local paths,
  non-public commits, environment values, tokens, secrets, non-public provenance, and
  unsupported release/package claims before they are committed.
- U5.5 public records pass actor data minimization and contain no stakeholder
  names, customer/project names, rater identities, raw transcripts, or
  proprietary scenario details.

- [ ] **U6a: Runtime Packaging Scope Decision Gate**

**Goal:** Bound runtime packaging before implementation creates runtime files or
package manifests.

**Approach:**
- Depend on a U5.5 terminal state of `accepted`, `reduced`, or `split` for the
  relevant runtime candidate subset.
- Default runtime scope is limited to skills in the exact U5.5 accepted,
  reduced, or split runtime subset that also have current non-held U4
  file-level public skill-folder records.
- Non-selected U4-promoted Core skills are excluded from runtime packaging by
  default.
- U2 validation records and U3 `docs/distilled/` summary records are not runtime
  packaging authority.
- Do not package all eleven skills by default.
- Require explicit review approval before promoting an all-Core suite or
  upstream Agent Skills subset.
- Do not include a skill in U6a runtime scope unless it has current non-held
  U4 file-level public skill-folder promotion records.
- Name the supported runtime and discovery mechanism before equivalence passes.
- Bind planned validation gates to the same final live candidate commit.

**Verification:**
- Runtime scope decision records selected skills, excluded skills, rationale,
  reviewer, review session, and stale-reset rule.
- The decision links selected skills to the exact U5.5 accepted, reduced, or
  split runtime-subset matrix. Skills with only U4 records remain excluded by
  default.
- The decision links every runtime candidate skill to U4-approved public
  skill-folder promotion records. Exception records, U2 validation records, and
  U3 summary records cannot satisfy U6a runtime packaging authorization.
- The decision states that U2 validation records and U3 summary records cannot
  satisfy runtime packaging authorization by themselves.
- The decision states that U5.5 acceptance alone cannot satisfy U4
  public-skill-folder acceptance or U7 release readiness.
- Any all-eleven or upstream-subset packaging decision has explicit review
  approval.

- [ ] **U6b: Runtime Packaging Implementation**

**Goal:** Implement runtime packaging only for the bounded U6a scope without
overclaiming release readiness.

**Approach:**
- For every runtime file, record source path, source commit, runtime path,
  runtime commit, hash procedure, reviewer, and review session.
- Link each runtime record to the public promotion record that authorized the
  source material, or record why the runtime file is generated independently.
- Independently generated runtime files may contain only packaging or discovery
  glue. They must not contain skill semantics, examples, schemas, operating-model
  text, product-contract text, release-claim text, or substitutes for missing U4
  source files.
- Every semantic runtime file must link to current non-held U4 promotion records
  for the exact skill/file it packages. A reviewer must explicitly approve every
  `runtime-glue` record that is classified as independently generated.
- Bind final validation gates to the same final live candidate commit.

**Verification:**
- Runtime discovery evidence covers search paths, metadata parsing, skill
  loading, reference loading, routing behavior, and failure behavior.
- Any runtime/package file change resets affected gates to `held` unless
  impact-reviewed.
- Runtime files cannot rely on unmapped public-candidate material or private
  source material.
- Runtime files cannot cite private distilled source or exception-record
  rewrites as their direct promotion source for Core 11 acceptance.
- Runtime glue records are rejected if they contain skill semantics, examples,
  schemas, operating guidance, or release claims.

- [ ] **U7: Final Acceptance Review and Release-Gate Record**

**Goal:** Run final focused review after mapped public promotion and runtime
validation work, without replacing the early U0.5 authority gate.

**Review targets:**
- `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`
- `docs/plans/2026-04-29-001-feat-traceweaver-core-11-skill-suite-promotion-plan.md`
- U5.5 validation artifacts and terminal-state record.
- `docs/validation/traceweaver-core-11-skill-suite-review.md`
- `docs/validation/traceweaver-core-11-promotion-records.md`
- U1a/U1b public docs, U4 public skill folders, U6 runtime/package files, and
  release-claim surfaces that contain promoted or claimed status.

**Release claim records:**
- U7 must create or update one `release_claim_record` per claimed or held
  surface.
- Each record must include:
  - `claim_id`
  - `surface`
  - `gate_state`
  - `owner`
  - `allowed_use`
  - `close_condition`
  - `reopen_condition`
  - `supporting_gates`
  - `held_reason`
- U8 and U9 may consume only claims with stable `claim_id` values, exact
  surface binding, and current supporting gates.
- Public skill-folder or public skill-availability claims require current
  non-held U4 file-level records. Runtime/package claims require current
  non-held U6 records. Release claims require current U7 claim records and any
  U8 artifact evidence selected by U7.

**Verification:**
- No P1/P2 scope-control findings remain unhandled.
- U0.5 passed before any public promotion work started.
- Current target artifacts are scanned for non-public provenance, non-public paths
  or commits, unsupported conformance claims, and claims not backed by current
  non-held U4/U6 records.
- Every promoted public or runtime artifact has a source-to-target promotion
  record.
- Every promotion record for accepted Core 11 public/live artifacts points to
  the scrubbed public-candidate baseline.
- Accepted risks, gaps, and deferred promotions have owner, date/session,
  allowed use, rationale, linked authority, and review condition.
- U7 creates or updates release claim records for all claimed and held surfaces
  before U8 packaging.
- U7 states exactly which claims remain held before U8 packaging by stable
  `claim_id`.

- [ ] **U8: Release Package Or Upstream-Neutral PR Preparation**

**Goal:** Prepare only the release package, upstream-neutral PR, or release notes
that U7 explicitly leaves non-held.

**Files:**
- Update release notes, PR description, or package manifest artifacts selected by
  U7.
- Update: `README.md` only for claims backed by current non-held U4/U6/U7
  records.
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`

**Approach:**
- Choose the distribution path from U7: upstream-neutral PR, TraceWeaver Core
  release notes, staged runtime package, or no release while held.
- If upstream response remains `no_response`, any change to the distribution path
  requires a product-owner override record with target channel, audience,
  upstream response class, wait window or decision trigger, maintainer/adoption
  evidence status, accepted release risk, support owner, exact allowed claim
  vocabulary, and an explicit prohibition on upstream-ready or
  public-release-ready claims without external acceptance.
- Include only skills, runtime files, package manifests, examples, and claims
  backed by current non-held U4/U6/U7 records.
- Preserve upstream/public-release holds while upstream response is `no_response`
  unless the product-owner override record above changes only the distribution
  path or allowed claim vocabulary. That override cannot approve upstream-ready or
  public-release-ready claims without external acceptance.
- Keep package claims factual: candidate, held, reduced, split, runtime-ready, or
  release-ready must match the recorded gate state.
- Record any omitted skill, file, or claim with owner, rationale, and reopen
  condition.
- Generate the exact release, PR, or package artifact inventory from the real
  packaging command before publication.
- Scan the inventory and payload for non-public provenance, raw `docs/validation/`
  evidence, `.beads/`, `.memsearch/`, local-only files, non-public paths,
  non-public commits, secrets, unsupported conformance claims, and unsupported
  release claims.
- Publish only artifacts on the explicit U8 allowlist.

**Verification:**
- U8 package or PR surfaces contain no non-public provenance, non-public paths,
  non-public commits, local paths, unsupported conformance claims, or claims not
  backed by current non-held records.
- Every package file, manifest, release note, or public claim has a promotion or
  release-gate record.
- U8 does not include skills held at U4, runtime files held at U6, or claims held
  at U7.
- If no release path is allowed, U8 records `held` with the exact missing gate.
- U8 has a concrete artifact inventory, payload scan result, and allowlist before
  opening a PR, publishing release notes, or creating a staged runtime package.
- Every U8 claim references a `claim_id` from an approved release-claim record.

- [ ] **U9: Post-Release Or Post-PR Validation And Closeout**

**Goal:** Record what happened after U8 so future agents can distinguish shipped
claims, held claims, follow-up work, and adoption evidence.

**Files:**
- Update: `docs/validation/traceweaver-core-11-promotion-records.md`
- Update post-release or post-PR validation artifacts under `docs/validation/`
- Update: `docs/reviews/2026-04-27-u1-u55-closeout-review-findings.md`
- Update Beads issues for closed, held, or follow-up work.

**Approach:**
- Record the final release or PR identifier, commit, package manifest, or held
  state.
- Record post-release smoke validation for runtime discovery, skill loading,
  reference loading, routing, and failure behavior when runtime packaging shipped.
- Record adoption or maintainer feedback when available; otherwise record the
  missing actor, wait window, and decision trigger.
- Close only the claims actually released or accepted. Keep held U4/U6/U7/U8
  claims open with owner and review condition.
- Close or revise claims only by `claim_id`; do not close claims from informal
  descriptions.
- Create follow-up issues for split-out skills, deferred validation, upstream
  feedback, or post-release defects.

**Verification:**
- Post-release validation binds to the same release or PR artifact U8 produced.
- Every shipped claim can be traced back to U4/U6/U7/U8 records.
- Every held or deferred claim has an owner, allowed use while held, rationale,
  linked authority, and review condition.
- Beads status and review inventory agree on what is closed, held, split, or
  deferred.
- Every U9 closeout entry references the release or PR artifact, `claim_id`, and
  final gate state.

## Success Criteria

- Public TraceWeaver docs state the eleven-skill Core direction.
- Private source provenance is recorded in internal validation record
  `TWCORE-INT-PROV-2026-04-29-001`.
- The old four-skill/Lite framing is no longer the product contract.
- Promotion order matches the current control needs.
- Every skill keeps a narrow responsibility boundary.
- No skill can silently promote agent interpretation into authority.
- Review/validation gates remain separate from runtime-candidate acceptance.
- U0.5 occurs before any public-candidate-to-public promotion.
- U0.5 does not authorize ordinary private-to-public movement; direct
  private-to-public movement remains outside Core 11 acceptance.
- Every public doc, `docs/distilled/` artifact, public skill file, schema,
  example, runtime file, package manifest, and release claim promoted from the
  public candidate has a source-to-target promotion record.
- Definitive public product-contract claims remain held until the specific
  claimed status has current non-held U4 public skill-folder records and, for
  runtime/package claims, current non-held U6 runtime/package records; upstream,
  public-release, release-note, PR, and package-surface claims also require
  current non-held U7/U8 records.
- Runtime packaging uses a bounded U6a scope decision before U6b implementation;
  the default is limited to the exact U5.5 accepted, reduced, or split runtime
  subset whose skills also have current non-held U4 records. Non-selected
  U4-promoted Core skills are excluded by default.
- U2 validation records and U3 `docs/distilled/` summary records cannot authorize
  public skill-folder acceptance or runtime packaging by themselves.
- First-four status distinguishes scrubbed public-candidate seed status from
  live/runtime candidate status.
- No accepted Core 11 public/live artifact is promoted directly from non-public
  source material or exception-record rewrites.
- U5.5 terminal state and runtime-subset matrix are recorded before U6a packages
  any runtime candidate subset.
- U5.5 does not grade release packaging beyond `held_until_U7` or
  `not_evaluated_for_release`.
- U8 release packaging includes only claims left non-held by U7.
- U8 has a concrete artifact inventory scan and explicit allowlist before any
  release, PR, or package publication.
- U9 closeout records shipped claims, held claims, adoption evidence, and
  follow-up ownership by stable `claim_id`.
