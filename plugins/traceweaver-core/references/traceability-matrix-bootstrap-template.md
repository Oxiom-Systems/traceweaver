# Traceability: [Project Name]

## System Context

System: [project or product name]
Scope: [accepted baseline id]
Owner: [owner]
Mode: Advisory alpha
Status: bootstrap_pending_review
Last updated: YYYY-MM-DD

Success signal: every meaningful behavior-bearing unit traces to stakeholder
intent, approved requirement or approved exception, verification evidence, and
validation question.

Failure signal: implementation, review, release claim, or agent behavior exists
without approved authority or an explicit gap/held claim.

Baseline:

- requirements authority: `requirements.md`
- Intent Contract: `.traceweaver/intent-contract.yml`
- baseline ID: `[baseline id]`
- baseline hash: `[baseline hash]`

This bootstrap matrix must be filled from the consuming project's accepted
`requirements.md` and `.traceweaver/intent-contract.yml`. Do not copy
TraceWeaver Core project requirement IDs into another project.

## Stakeholder Needs

| ID | Intent ID | Need | Source | Success Signal | Status |
| --- | --- | --- | --- | --- | --- |
| NEED-001 | INTENT-001 | [from Intent Contract] | `requirements.md` | [validation signal] | Draft |

## Requirements

| ID | Type | Requirement Summary | Source Need / Parent | Verification Method | Validation Path | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | [type] | [approved requirement] | NEED-001 | [test/inspection/analysis/demonstration] | VAL-001 | [owner] | Draft |

## Traceability Matrix

| Trace ID | Owner | Need | Requirement | Authority | Plan / Task | Implementation | Verification | Validation | Status | Gap / Debt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRACE-001 | [owner] | NEED-001 | REQ-001 | approved requirement | [plan/task] | [file/function/skill] | VER-001 | VAL-001 | Draft | [gap/debt if any] |

## Verification Evidence

| ID | Requirement | Method | Procedure / Command | Tested Ref | Result | Evidence Path | Date / Session | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VER-001 | REQ-001 | [method] | [command or inspection] | [artifact] | Pending | [path] | YYYY-MM-DD | [notes] |

## Validation Evidence

| ID | Source Need | Scenario / Intended Use | Stakeholder / Representative | Acceptance Signal | Evidence Path | Result | Owner | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAL-001 | NEED-001 | [scenario] | [stakeholder] | [signal] | [path] | Planned | [owner] | [notes] |

## Traceability Debt

| Debt ID | Description | Affected IDs | Risk | Owner | Action | Status |
| --- | --- | --- | --- | --- | --- | --- |
| TD-001 | Bootstrap matrix needs review and project-specific rows. | all | Missing trace rows may hide dark behavior. | [owner] | Run `tw-traceability-check` and update matrix. | Open |

## Dark-Behavior Candidates

| Candidate | Location | Why Flagged | Suggested Action | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| DARK-001 | [artifact] | No accepted trace row yet. | Add authority, implementation, verification, and validation links. | [owner] | Open |

## Behavior-Bearing Unit Gate

After this matrix is accepted, every new or changed meaningful behavior-bearing
unit must update this matrix before the associated work, review, or release task
can close.

Minimum row fields:

- approved requirement or approved exception;
- stakeholder intent ID;
- implementation location;
- verification evidence or approved verification gap;
- validation question or validation evidence path;
- status and open debt, gap, or held claim.

## Suggested Next Step

Run `tw-requirements-review` and `tw-traceability-check` to promote this
bootstrap matrix into an accepted project traceability matrix.
