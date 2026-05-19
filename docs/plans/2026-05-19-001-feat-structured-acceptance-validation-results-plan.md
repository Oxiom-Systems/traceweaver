---
title: "feat: structured acceptance validation result records"
type: feat
status: static_implementation_added_verification_passed_code_review_passed_status_hash_doc_review_passed
date: "2026-05-19"
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3
---

<!-- TRACEWEAVER: file-role=structured-acceptance-validation-plan; req=REQ-TW-055; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: file-role=structured-acceptance-validation-plan; req=REQ-TW-056; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: file-role=structured-acceptance-validation-plan; req=REQ-TW-063; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: file-role=structured-acceptance-validation-plan; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->

# Structured Acceptance Validation Result Records Plan

Plan ID: TW-PLAN-2026-05-19-STRUCTURED-ACCEPTANCE-VALIDATION-001
Owner: Oxiom Systems
Date: 2026-05-19
Status: static_implementation_added_verification_passed_code_review_passed_status_hash_doc_review_passed

## Summary

Add a parseable structured metadata block to every system acceptance validation
result record so `tw-traceability-check` can later verify requirement closure
claims deterministically. Then add a gated `tw-auto` / `tw-work` behavior slice
that detects requirement closure claims and either creates a validation artifact
template plus traceability-matrix rows or stops with a held-validation record
requirement before allowing complete/done wording.

The current `REQ-TW-066` acceptance pack defines the required FAT/ATP-style
closure fields in Markdown tables. That is reviewable by a human, but it is not
yet a deterministic contract for a scanner or for `tw-auto` / `tw-work` closure
routing. This plan keeps the human-readable Markdown while adding YAML
frontmatter and a fixed `structured_acceptance` section that a script can parse
without guessing from prose.

## Operating Mode

Mode: Authority Baseline Mode planning.

This work changes validation artifact shape and future traceability-check
behavior. It may become implementation input only after scoped `/tw-doc-review`
accepts this plan and confirms that the existing requirements are sufficient.

Requirements-quality preflight:

- `REQ-TW-066` already requires closure records to include functional
  acceptance evidence, applicable non-functional acceptance evidence, tested
  baseline or artifact version, observed result, final disposition, owner,
  evidence location, next trigger, and held-validation fallback.
- `REQ-TW-055` already requires structured traceability findings for missing
  verification or validation paths.
- `REQ-TW-056` already requires `tw-auto` to run the TraceWeaver closure loop,
  update trace/matrix/evidence records, stop at clean accepted or explicit
  held/blocked states, and avoid inventing authority.
- `REQ-TW-063` already requires bounded structured audit findings with detector
  evidence source, confidence, supported scope, and limitations.
- No new requirement is proposed for this slice if reviewers agree that a
  parseable schema plus closure-claim routing is the implementation mechanism
  for `REQ-TW-056` and `REQ-TW-066`.
- If reviewers judge deterministic parsing, validation-template creation, or
  matrix-row proposal behavior to be broader than existing authority, planning
  must stop and route to `/tw-requirements-review` for a new candidate
  requirement before implementation.

## Authority Capsule

Accepted baseline:

- Baseline ID: `REQ-BASELINE-2026-04-30-001`
- Baseline hash:
  `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`

Planning authority:

- `REQ-TW-055`: traceability failures must emit structured findings and must
  block traceability-complete or release claims when missing validation remains.
- `REQ-TW-056`: `tw-auto` owns the normal closure loop, including trace and
  evidence updates, and must stop at clean accepted state, held/blocked state,
  or human-decision pause.
- `REQ-TW-063`: semantic/audit findings must stay bounded, structured, and
  evidence-backed.
- `REQ-TW-066`: requirement closure claims must link original need and
  requirement to FAT/ATP-style functional and non-functional acceptance evidence
  or to a complete held-validation record.
- `TRACE-TW-049`: system acceptance closure evidence pack.
- `ATP-TW-033`: system acceptance closure evidence pack inspection.
- `RESULT-TW-033`: current acceptance-closure mechanism result.
- `VER-TW-062`: current system acceptance closure pack inspection.
- `VAL-TW-012`: validation question for whether original need and requirement
  closure is addressed, partial, held, or failed.

Reserved implementation proof chain for this slice:

- Artifact: `ART-TW-064`
- Trace: `TRACE-TW-050`
- ATP: `ATP-TW-034`
- Result: `RESULT-TW-034`
- Verification: `VER-TW-063`
- Validation: `VAL-TW-012`

Validation question:

Can `tw-traceability-check` determine from a validation result artifact,
without prose inference, whether a requirement closure claim has complete
functional acceptance evidence, applicable non-functional acceptance evidence,
tested baseline or artifact version, observed result, disposition, owner,
evidence location, next trigger, or a complete held-validation fallback?

## Required Artifact Shape

Every system acceptance validation result must keep a human-readable Markdown
body and add YAML frontmatter with a `structured_acceptance` object.

Minimum frontmatter shape:

```yaml
---
record_type: traceweaver_acceptance_result
schema_version: 1
result_id: SAR-TW-001
requirement_id: REQ-TW-066
need_ids:
  - NEED-TW-001
  - NEED-TW-003
linked_trace_id: TRACE-TW-049
linked_atp_id: ATP-TW-033
linked_result_id: RESULT-TW-033
linked_verification_id: VER-TW-062
linked_validation_id: VAL-TW-012
owner: Oxiom Systems
date: "2026-05-19"
status: partial
structured_acceptance:
  closure_claim: TraceWeaver has a system acceptance closure record.
  functional_acceptance_evidence:
    status: present
    evidence:
      - docs/validation/traceweaver-system-acceptance-results.md
  non_functional_acceptance_evidence:
    status: present
    applicability: applicable
    evidence:
      - traceability-matrix.md
  tested_baseline_or_artifact_version: a1219e9
  observed_result: Required fields and held-validation fallback are present.
  final_disposition: partial
  evidence_location:
    - docs/validation/traceweaver-system-acceptance-results.md
  next_trigger: First real closure claim using the acceptance pack.
  held_validation:
    required: true
    owner: Oxiom Systems
    reason: Runtime enforcement and retrospective broad validation remain held.
    evidence_location:
      - docs/validation/traceweaver-system-acceptance-results.md
    closure_boundary: Runtime enforcement, release, publication, and broad retrospective validation remain held.
    next_trigger: First real closure claim or scoped review finding.
---
```

Allowed `final_disposition` values:

- `pass`
- `partial`
- `held`
- `fail`

Allowed evidence status values:

- `present`
- `not_applicable`
- `held`
- `missing`

Rules:

- `functional_acceptance_evidence.status` must be `present` for `pass`.
- `non_functional_acceptance_evidence.status` must be `present` or
  `not_applicable` for `pass`.
- `not_applicable` must include a rationale.
- `partial`, `held`, and `fail` must include either incomplete evidence details
  or a complete `held_validation` object.
- `held_validation.required: true` requires owner, reason, evidence location,
  closure boundary, and next trigger.
- The Markdown body may duplicate the structured fields for readability, but
  the YAML block is the parseable source of truth.

## Implementation Plan

### Slice 1: Structured Acceptance Result Parser

1. Update `docs/validation/traceweaver-system-acceptance-plan.md` to define the
   structured YAML schema and disposition rules.
2. Update `docs/validation/traceweaver-system-acceptance-results.md` to use the
   schema while preserving the readable result summary.
3. Add a focused parser/checker under the `tw-traceability-check` surface. The
   implementation may be a new script or a mode in an existing smoke, but it
   must parse YAML frontmatter through Ruby YAML or an equivalent structured
   parser, not ad hoc prose matching.
4. Add fixtures for:
   - complete `pass`;
   - `partial` with complete held-validation record;
   - `held` with complete held-validation record;
   - missing functional acceptance evidence;
   - non-functional evidence marked `not_applicable` without rationale;
   - invalid final disposition;
   - missing owner, evidence location, or next trigger.
5. Add a smoke command that verifies valid fixtures pass and invalid fixtures
   produce structured findings.
6. Update `tw-traceability-check` instructions so validation-result artifacts
   under review are checked for the structured acceptance schema before a
   requirement closure claim can be called complete.
7. Update `traceability-matrix.md` with `ART-TW-064`, `TRACE-TW-050`,
   `ATP-TW-034`, `RESULT-TW-034`, and `VER-TW-063` after implementation.

### Slice 2: `tw-auto` / `tw-work` Closure-Claim Routing

After Slice 1 has a reviewed parser/checker, update `tw-auto` and `tw-work`
so closure claims cannot bypass FAT/ATP-style validation evidence.

Required behavior:

1. Detect requirement closure claims in task text, plan output, worker result
   text, review summaries, and proposed matrix/status updates. Detection should
   include phrases such as `complete`, `closed`, `done`, `accepted`, `closure`,
   `requirement satisfied`, and explicit requirement-status updates.
2. When a closure claim is detected, identify the linked requirement ID,
   stakeholder need ID, trace ID, ATP/result/verification/validation IDs when
   known, owner, evidence locations, and current baseline or artifact version.
3. If a complete structured acceptance result already exists and passes the
   Slice 1 checker, allow the closure flow to continue to traceability and
   review without changing the result.
4. If the closure claim has enough authority to scaffold evidence but lacks a
   result artifact, have `tw-work` create a validation result template under
   `docs/validation/` and propose matching `traceability-matrix.md` rows for
   artifact, trace, ATP, result, verification, validation, and Code Anchor
   Evidence where applicable.
5. If the closure claim lacks enough authority to scaffold safely, stop with a
   held-validation record requirement. The stop must name the owner, missing
   fields, blocked closure claim, closure boundary, evidence location to create,
   and next trigger.
6. `tw-auto` must treat this as part of its normal closure loop: route to
   `tw-work` for template/matrix creation when safe, then route through
   `tw-traceability-check`, `tw-code-review` when behavior/code changed, and
   scoped `tw-doc-review` when authority/status/hash docs changed.
7. `tw-auto` and `tw-work` must not mark the requirement, task, PR, release, or
   implementation as complete when the structured acceptance checker fails,
   when held-validation fields are incomplete, or when a complete held boundary
   has not been recorded.

Fixture coverage:

- `tw-work` closure claim with existing valid structured result continues.
- `tw-work` closure claim with enough authority creates a validation result
  template and matrix-row proposal.
- `tw-work` closure claim with missing requirement ID stops with a
  held-validation requirement.
- `tw-work` closure claim with missing owner or next trigger stops with a
  held-validation requirement.
- `tw-auto` closure loop routes from closure claim to `tw-work`, then
  `tw-traceability-check`, and then scoped review.
- `tw-auto` cannot emit complete/done wording when the structured acceptance
  checker reports missing evidence.

The first implementation of this slice may be static/advisory skill behavior
plus deterministic fixtures only. Live runtime enforcement, arbitrary
new-project automatic artifact creation, publication, package/release, and
active-host claims remain held until separate runtime or dogfood proof accepts
them.

## Verification Plan

Run, at minimum:

```text
ruby -e 'require "yaml"; YAML.load_file(".traceweaver/intent-contract.yml"); puts "yaml ok"'
git diff --check
bash -n <new-or-updated-smoke-script>
<new-or-updated-smoke-script>
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --mode implementation --changed-file <changed files>
```

Expected verification:

- valid structured acceptance result fixture passes;
- missing required fields emit structured findings;
- invalid disposition emits a structured finding;
- missing held-validation details emit structured findings;
- prose-only validation records do not satisfy deterministic closure checks;
- `tw-work` closure-claim fixtures either create the expected validation
  template/matrix proposal or stop with the expected held-validation
  requirement;
- `tw-auto` closure-loop fixtures route closure claims through structured
  acceptance checking and block complete/done wording when validation evidence
  is missing;
- implementation-mode code anchor scan reports no findings for changed
  behavior-bearing files and verification artifacts.

## Held Scope

This plan does not claim:

- runtime enforcement in live agent sessions;
- live automatic creation of validation artifacts by `tw-auto` or `tw-work` in
  arbitrary new projects;
- broad retrospective validation of existing requirements;
- Vestro/R31 dogfood validation;
- package, release, upstream, or clean-replacement readiness;
- publication, PR creation, or remote mutation.

Static/advisory `tw-auto` / `tw-work` closure-claim routing may be implemented
as Slice 2 only after Slice 1 schema/checker behavior is reviewed or in the same
implementation PR when the review explicitly accepts the combined scope. Live
runtime creation in arbitrary projects remains held.

## Review Evidence

Scoped document review:
`TW-DOC-REVIEW-2026-05-19-STRUCTURED-ACCEPTANCE-VALIDATION-PLAN-CLEAN-001`.

Review result: clean after quoting date-like YAML values in the example
frontmatter so Ruby `YAML.safe_load` can parse the sample without permitted
classes.

Implementation authority: this review accepted the combined Slice 1 and Slice 2
static/advisory implementation scope under `REQ-TW-055`, `REQ-TW-056`,
`REQ-TW-063`, and `REQ-TW-066`, with runtime enforcement and arbitrary-project
artifact creation held.

Implementation result on 2026-05-19: static/advisory checker, fixtures,
wrapper routing text, validation docs, Intent Contract status fields, and matrix
proof-chain rows were added. Acceptance-result smoke, current-result parsing,
TW skill behavior smoke, YAML parse, diff check, and implementation-mode
code-anchor scan passed. Code review passed as
`TW-CODE-REVIEW-2026-05-19-STRUCTURED-ACCEPTANCE-VALIDATION-NFR-EVIDENCE-CLEAN-001`;
scoped status/hash doc review passed as
`TW-DOC-REVIEW-2026-05-19-STRUCTURED-ACCEPTANCE-VALIDATION-STATUS-HASH-CLEAN-001`.

## Acceptance Criteria

- A validation result Markdown file contains parseable structured metadata for
  all `REQ-TW-066` closure fields.
- `tw-traceability-check` has a deterministic check for the structured
  acceptance schema.
- Missing or invalid acceptance evidence produces structured findings with
  affected requirement, trace, ATP/result/verification/validation IDs, evidence
  location, claim impact, and remediation.
- A requirement closure claim cannot be treated as traceability-complete when
  the structured acceptance block is absent, malformed, incomplete, or
  contradicted by the disposition rules.
- `tw-auto` and `tw-work` detect closure claims and either route to an existing
  valid structured acceptance result, scaffold a validation result template plus
  matrix-row proposal when authority is sufficient, or stop with a complete
  held-validation record requirement.
- `tw-auto` and `tw-work` do not emit complete/done closure wording when
  structured acceptance evidence is missing or invalid.
- Human-readable Markdown remains available for reviewers.

## Next TraceWeaver Step

Status/hash review is recorded clean. Keep runtime enforcement, arbitrary-project
artifact creation, broad retrospective validation, publication,
package/release/upstream readiness, clean replacement, and Vestro/R31 dogfood
held until separately planned, implemented, and reviewed.
