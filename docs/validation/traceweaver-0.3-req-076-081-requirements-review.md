---
id: TW-REQ-REVIEW-2026-07-22-REQ-TW-076-081-001
title: TraceWeaver 0.3 Validation-First Candidate Requirements Review
status: needs_revision_no_authority_promotion
date: 2026-07-22
owner: Oxiom Systems
review_type: requirements_quality
scope: REQ-TW-076 through REQ-TW-081 and proposed 0.3 matrix rows
authority_effect: none
publication_boundary: >
  This review is a requirements-quality gate only. It does not merge proposed
  matrix rows, approve runtime or enforcing claims, or authorize implementation.
---

# Requirements Quality Review — REQ-TW-076 through REQ-TW-081

## Summary

Reviewed: 6 real requirements

| Outcome | Count |
| --- | ---: |
| Can approve (quality only) | 5 |
| Needs revision | 1 |
| Blocked | 0 |
| Human decision | 0 |
| Reclassify | 0 |

Review basis:

- controlling baseline: `REQ-BASELINE-2026-04-30-001`
  (`requirements.md:2-7`);
- reviewed repository commit: `a8d23584aed30aaaa760d8d2234969efe563713c`;
- reviewed source hashes: `requirements.md`
  `250559cbea856902e9ff23f0e2f9fed7edf02101df51ba4fd5599f96aab781af`;
  proposed rows
  `7a11224a21e5f19a1dc4b7f86654d377ecf455b53725794389cb6cab2ba27cf0`.

The candidates are all correctly classified as candidate workflow, software,
or interface/operational requirements rather than tasks or evidence. Their
stakeholder source, existing intent/need trace, proposed owner, stable ID
allocation, verification method, validation question, and held-claim boundary
are supplied by `requirements.md` and the proposed matrix rows
(`requirements.md:385-390`; `docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:27-32,47-85`).

Five candidates are approval-quality statements. REQ-TW-079 needs revision:
its required Codex fixture set is unconditional, while REQ-TW-081 forbids
fixtures for any `unsupported-gap` or `unproven` host/hook cell. This is a
set-level conflict in the proposed verification contract.

## Authority Boundary

No reviewed candidate is implementation authority yet. The candidate-program
preamble explicitly says that none is approved, reviewed, or implementation
authority and requires both this review and a scoped `/tw-doc-review` before
implementation or matrix merge (`requirements.md:375-381`). The authoritative
matrix likewise records the whole set as candidate planning input only and
requires both gates before any `tw-vv-define`, `tw-work` preflight, hook, or
matrix-merge work (`requirements.md:420`).

This record does **not**:

- merge `TRACE-TW-057..062`, `VER-TW-077..082`, or `VAL-TW-019..024` into
  `traceability-matrix.md`;
- approve hook runtime firing, runtime enforcement, or `traceweaver_mode:
  enforcing` claims;
- authorize implementation, hook authoring, fixture authoring, release, or
  publication.

## Requirement Quality Scores

| Requirement | Type | Score | Outcome | Quality decision |
| --- | --- | ---: | --- | --- |
| REQ-TW-076 | Workflow / V&V system requirement | 5/5 | Can approve | Clear mandatory pre-implementation V&V phase, objective review conditions, scoped exception route, named verification, and validation question. |
| REQ-TW-077 | Software workflow-skill requirement | 5/5 | Can approve | Clear sequenced capability, capsule contents, verification artifacts, validation path, and non-authority boundary. |
| REQ-TW-078 | Workflow-gate requirement | 5/5 | Can approve | Clear prerequisite/exception predicate and correct static/advisory-versus-runtime-held boundary. |
| REQ-TW-079 | Interface / operational hook requirement | 3/5 | Needs revision | Clear advisory scope and host-gap intent, but its mandatory all-host fixture verification conflicts with REQ-TW-081's capability-state prohibition. |
| REQ-TW-080 | Interface / operational hook requirement | 5/5 | Can approve | Clear non-blocking behavior, positive/negative pass criteria, and conditional Codex discovery boundary. |
| REQ-TW-081 | Capability-matrix / evidence requirement | 5/5 | Can approve | Clear closed state vocabulary, supported-cell evidence rule, non-supported prohibition, and per-cell runtime-held boundary. |

A `Can approve` result is quality-only. It does not override the present
`candidate_for_review` status or the required scoped `/tw-doc-review`.

## Detailed Assessment

### REQ-TW-076 — Can approve (5/5)

- **Classification:** workflow / V&V system requirement.
- **Quality:** The phase trigger, required RED evidence, validation-definition
  artifact, review route, and narrowly scoped not-applicable path are explicit
  (`requirements.md:385`). Its verification method defines inspection, fixture
  smoke, and review evidence; its validation question asks whether intent
  validation occurs before implementation (`requirements.md:385`).
- **Trace and authority:** TRACE/VER/VAL allocation and Oxiom Systems ownership
  are proposed but not live (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:27,47,65,80`). The requirement correctly holds those rows and all gate implementation.
- **V&V / held boundary:** Verification is not presented as validation, and the
  proposed validation scenario remains held until implementation exists.

### REQ-TW-077 — Can approve (5/5)

- **Classification:** software workflow-skill requirement.
- **Quality:** The required position between accepted planning and `tw-work`,
  capsule fields, review routing, and missing-authority gap/clarification route
  are explicit (`requirements.md:386`). The text correctly states that skill
  output is not implementation authority.
- **Trace and V&V:** The proposed row supplies an owner, source needs, planned
  verification ID, and validation ID (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:48,66,81`). The verification method names a deterministic fixture, schema example, and install/discovery check rather than treating a unit test as validation.
- **Held boundary:** Implementation, discovery, and capsule runtime behavior
  remain explicitly held (`requirements.md:386`).

### REQ-TW-078 — Can approve (5/5)

- **Classification:** workflow-gate requirement.
- **Quality:** The only allowable pre-mutation predicates are a reviewed,
  matrix-linked V&V definition plus RED evidence, or a scoped decision/approved
  exception (`requirements.md:387`). The phrase “refuse” is correctly bounded
  to an advisory policy/skill-instruction contract, with runtime enforcement
  held.
- **Trace and V&V:** The proposed matrix row identifies owner, source needs,
  verification, validation, and a held static-only boundary
  (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:49,67,82`).

### REQ-TW-079 — Needs revision (3/5)

- **Classification:** interface / operational hook requirement.
- **Quality:** The advisory-only scope, injected content, source pin,
  adapt/cherry-pick/no-rebase constraint, host-gap behavior, verification
  method, and validation question are otherwise clear (`requirements.md:388`).
- **Finding:** REQ-FIND-001 below. The conflict is confined to the all-host
  fixture requirement and is resolvable without changing the stakeholder
  outcome: capability discovery must allocate the fixture obligation only to
  `supported` cells.
- **Held boundary:** The stated non-blocking/non-mutating/non-enforcing boundary
  remains correct and must be preserved on revision.

### REQ-TW-080 — Can approve (5/5)

- **Classification:** interface / operational hook requirement.
- **Quality:** The trigger, missing-evidence condition, required advisory
  warning, non-blocking result, and future enforcing boundary are objective
  (`requirements.md:389`). Positive and negative fixture expectations include
  observable output and exit status.
- **Trace and V&V:** The proposed row records Claude/Cursor scope, conditional
  Codex discovery, verification artifacts, validation scenario, owner, and held
  runtime/enforcing status (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:51,69,84`).

### REQ-TW-081 — Can approve (5/5)

- **Classification:** capability-matrix / evidence requirement.
- **Quality:** The three permitted states are closed and defined; the
  supported-cell static evidence rule, unsupported/unproven prohibition, Codex
  discovery record, and per-cell runtime-proof boundary are explicit
  (`requirements.md:390`).
- **Trace and V&V:** The proposed matrix and evidence rows keep capability
  discovery, static proof, and live runtime proof separate
  (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:52,70,85`).

## Findings

```yaml
finding_id: REQ-FIND-001
requirement_id: REQ-TW-079
requirement_text: >
  REQ-TW-079 requires static JSON schema validation against Claude, Cursor, and
  Codex per-host payload fixtures, each with the expected session-start JSON
  shape.
requirement_type: interface_operational_hook_requirement
quality_score: 3
severity: major
failed_checks:
  - conflict
issue: >
  The REQ-TW-079 verification method unconditionally requires a Codex fixture
  directory and smoke coverage for all three hosts. REQ-TW-081 instead forbids
  authoring or claiming manifests and fixtures for every unsupported-gap or
  unproven host/hook cell. Before discovery, every cell can be unproven; after
  discovery, Codex can be unsupported-gap. Both rules cannot govern the same
  Codex fixture obligation.
evidence:
  - >
    requirements.md:388 requires fixture directories for claude, cursor, and
    codex, followed by a smoke that exercises all three fixture sets.
  - >
    requirements.md:390 says manifests and fixtures must not be authored or
    claimed for unsupported-gap or unproven cells.
  - >
    docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:68
    repeats the all-three fixture verification for VER-TW-080.
  - >
    docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:70
    repeats that fixture evidence is limited to supported cells only for
    VER-TW-082.
recommended_action: rewrite
suggested_rewrite: >
  Make REQ-TW-079's manifest, fixture, schema, and smoke obligations conditional
  on the REQ-TW-081 capability matrix state: first record discovery for every
  host/hook cell; author and exercise those artifacts only for supported cells;
  record unsupported-gap or unproven cells as discovery evidence and held
  coverage. Update the corresponding VER-TW-080 proposal consistently.
verification_concern: >
  An all-host smoke cannot be a valid required pass criterion while the
  controlled matrix prohibits fixtures for a non-supported host cell.
validation_concern: >
  VAL-TW-022 allows an honest host-capability gap, but the conflicting fixture
  wording can pressure implementation to imply Codex coverage instead.
traceability_impact: >
  REQ-TW-079 and proposed TRACE-TW-060/VER-TW-080/VAL-TW-022 must not become
  implementation authority or be merged into the authoritative matrix until
  their capability-state-dependent verification contract is consistent.
human_approval_required: false
```

### Findings by severity

| Severity | Count |
| --- | ---: |
| Block | 0 |
| Major | 1 |
| Minor | 0 |
| Note | 0 |

## Requirement-Set Quality And Traceability Impact

- **No duplicate or authority-boundary conflict found** among REQ-TW-076,
  REQ-TW-077, REQ-TW-078, and REQ-TW-080. REQ-TW-078's advisory skill-policy
  refusal and REQ-TW-080's non-blocking host warning are different control
  surfaces, so they do not conflict (`requirements.md:387,389`).
- **Held-claim boundary is sound** for static/advisory policy, non-blocking hooks,
  non-enforcement, and per-host runtime proof. The candidates do not claim that
  static fixture evidence proves live runtime behavior (`requirements.md:387-390`).
- **Proposed rows remain allocations, not matrix state.** The proposal says it
  neither amends the matrix nor makes IDs live (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:3-10`), and requires both reviews before merge (`docs/plans/2026-07-22-traceweaver-0.3-validation-first-matrix-proposals.md:89-96`).

## Overall Verdict

**NEEDS_REVISION — NOT AUTHORITY-READY.**

REQ-TW-079 must be revised to make its fixture obligations conditional on the
REQ-TW-081 capability matrix, and the matching VER-TW-080 proposal must be kept
consistent. Until then, the six-candidate set fails as a whole because the
proposal's merge rule requires every candidate to pass requirements review.

After that revision, rerun `/tw-requirements-review` on REQ-TW-079 and the
affected proposed rows, then run the required scoped `/tw-doc-review` across the
candidate baseline and proposal. Only clean completion of both gates can make a
later matrix merge and bounded implementation planning eligible; it still does
not approve runtime, enforcing, release, or per-host live-hook claims.

## Review Method

Manual/static run of the packaged `tw-requirements-review` adapter and its
`requirements-reviewer` knowledge skill. The review classified candidate types,
checked identity/source/owner/status/V&V/validation/held boundaries, applied the
0–5 score as triage only, and separated verification from validation. No runtime
hook, skill, fixture, matrix-merge, or implementation claim was executed or
made.

## Suggested Next Step

**Do not proceed to implementation or matrix merge.** Revise the REQ-TW-079
fixture wording and VER-TW-080 proposed verification row to obey REQ-TW-081's
capability-state rule, then rerun `/tw-requirements-review` followed by scoped
`/tw-doc-review`.
