# TraceWeaver System Acceptance Closure Plan

<!-- TRACEWEAVER: file-role=system-acceptance-plan; req=REQ-TW-066; trace=TRACE-TW-049; ver=VER-TW-062 -->
<!-- TRACEWEAVER: file-role=structured-system-acceptance-plan; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->

Plan ID: SAP-TW-001
Linked requirement: REQ-TW-066
Linked ATP: ATP-TW-033
Owner: Oxiom Systems
Status: template_added_initial_use_pending

## Purpose

This plan defines the FAT/ATP-style evidence required before a requirement closure claim can be treated as complete. It supplements traceability rows with acceptance proof that lets a reviewer decide whether the original stakeholder need and requirement are addressed, partially addressed, held, or failed.

## Required Closure Fields

Every requirement closure record must include:

| Field | Required | Meaning |
| --- | --- | --- |
| `need_id` | yes | Original stakeholder need linked to the closure claim. |
| `requirement_id` | yes | Requirement being closed. |
| `closure_claim` | yes | Exact claim being made about the requirement. |
| `functional_acceptance_evidence` | yes | FAT/ATP-style evidence that the functional behavior was exercised or inspected. |
| `non_functional_acceptance_evidence` | when applicable | Evidence for non-functional concerns such as reliability, performance, safety, security, usability, compatibility, maintainability, or provenance. |
| `tested_baseline_or_artifact_version` | yes | Baseline, artifact version, commit, fixture, or document revision under test. |
| `observed_result` | yes | What was actually observed, not what was expected. |
| `final_disposition` | yes | One of `pass`, `partial`, `held`, or `fail`. |
| `owner` | yes | Person or organization responsible for the closure decision. |
| `evidence_location` | yes | File, issue, log, test result, validation record, or evidence URL. |
| `next_trigger` | yes | Next event that reopens or advances the closure. |

## Structured Result Frontmatter

Every system acceptance result must include YAML frontmatter with
`record_type: traceweaver_acceptance_result` and a `structured_acceptance`
object. The YAML block is the parseable source of truth for deterministic
traceability checks; the Markdown body remains the reviewer-readable copy.

Required top-level fields:

- `record_type`
- `schema_version`
- `result_id`
- `requirement_id`
- `need_ids`
- `linked_trace_id`
- `linked_atp_id`
- `linked_result_id`
- `linked_verification_id`
- `linked_validation_id`
- `owner`
- `date`
- `status`
- `structured_acceptance`

Required `structured_acceptance` fields:

- `closure_claim`
- `functional_acceptance_evidence`
- `non_functional_acceptance_evidence`
- `tested_baseline_or_artifact_version`
- `observed_result`
- `final_disposition`
- `evidence_location`
- `next_trigger`
- `held_validation` when evidence is partial, held, failed, missing, or marked
  as held-validation required

Allowed evidence status values are `present`, `not_applicable`, `held`, and
`missing`. A `not_applicable` non-functional evidence status must include a
scoped rationale.

## Held-Validation Record

When acceptance evidence is unavailable, incomplete, or not yet applicable, the closure must include:

| Field | Required | Meaning |
| --- | --- | --- |
| `held_validation_owner` | yes | Owner responsible for resolving the held validation. |
| `held_reason` | yes | Why evidence is unavailable or insufficient. |
| `held_evidence_location` | yes | Where the current held state is recorded. |
| `closure_boundary` | yes | Claim that remains blocked or limited. |
| `next_trigger` | yes | Concrete event that can restart validation. |

## Disposition Rules

- `pass`: Functional evidence is present, applicable non-functional evidence is present, and the observed result supports the closure claim.
- `partial`: Some acceptance evidence supports part of the claim, but at least one required behavior, condition, environment, or non-functional concern remains incomplete.
- `held`: Evidence is unavailable, intentionally deferred, or outside the current tested baseline, and a held-validation record is complete.
- `fail`: Evidence contradicts the closure claim or shows the requirement is not addressed.

## Initial Application

REQ-TW-066 is first applied to TraceWeaver authority/status records only. It adds the closure evidence pack and proof-chain rows, but does not retroactively validate all previous requirements. Existing runtime, release, clean-replacement, Vestro/R31, and publication claims remain held unless separate acceptance records close them.
