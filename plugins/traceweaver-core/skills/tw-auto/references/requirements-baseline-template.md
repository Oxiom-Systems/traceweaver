---
id: TW-REQ-BASELINE-TEMPLATE
status: template
traceweaver_mode: advisory
---

# Requirements Baseline: [Project Name]

This file is the human-facing authority baseline for the project. It should live
at the repository root as `requirements.md`.

TraceWeaver rule:

```text
No agent may implement, review, or modify behavior unless it can point to:
- stakeholder intent;
- approved requirement or approved exception;
- verification method;
- validation question;
- current baseline version.
```

## Baseline State

| Field | Value |
| --- | --- |
| Baseline ID | `[REQ-BASELINE-YYYY-MM-DD-001]` |
| Baseline status | `draft_controlled_baseline` |
| Baseline hash SHA-256 | `pending_after_review` |
| Review evidence | `pending` |
| Owner | `[owner]` |
| TraceWeaver mode | `advisory` |

## Source Evidence

| Source ID | Artifact or conversation record | Content hash | Review evidence | Role |
| --- | --- | --- | --- | --- |
| SRC-001 | `[idea, brainstorm, issue, interview, document]` | `pending` | `pending` | Stakeholder intent source. |

## Stakeholder Intent

| Intent ID | Stakeholder intent | Validation question | Source |
| --- | --- | --- | --- |
| INTENT-001 | `[what the stakeholder wants]` | `[how will we know this solved the right problem?]` | SRC-001 |

## Approved Requirements

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | `[The system shall...]` | INTENT-001 | `test / inspection / analysis / demonstration` | `[validation question]` | SRC-001 | `draft` |

## Approved Exceptions And Held Claims

| ID | Type | Linked requirement | Decision | Close condition |
| --- | --- | --- | --- | --- |
| EXC-001 | `[approved exception / held claim / accepted risk]` | REQ-001 | `[decision]` | `[what closes or reopens it]` |

## Open Gaps, Changes, And Clarifications

| ID | Type | Linked intent | Linked requirement | Proposed disposition | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GAP-001 | `gap / change / clarification` | INTENT-001 | `null when no requirement exists yet` | `[proposed requirement/change/question]` | `[owner]` | `open` |

## Traceability Bootstrap

Create or update root `traceability-matrix.md` from this baseline and the
project's `.traceweaver/intent-contract.yml`. Every meaningful behavior-bearing
unit added after matrix acceptance must trace to authority and verification
evidence before work or review closes.

## Acceptance

This baseline becomes implementation authority only after review records:

- accepted baseline status;
- reproducible baseline hash or external hash record;
- source evidence hashes or pinned records;
- per-requirement status promotion;
- open gaps classified as blocking, held, or accepted limitations.

## Suggested Next Step

Run `tw-requirements-review`, then update this file with review evidence before
planning or implementation begins.
