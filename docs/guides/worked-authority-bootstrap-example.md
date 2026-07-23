# Worked Authority Bootstrap Example

<!-- TRACEWEAVER: file-role=worked-bootstrap-example; req=REQ-TW-042; trace=TRACE-TW-021; ver=VER-TW-030 -->
<!-- TRACEWEAVER: file-role=worked-bootstrap-example; req=REQ-TW-015; trace=TRACE-TW-053; ver=VER-TW-068 -->

Use this example when the README says TraceWeaver expects authority files and
you want to know what "enough to start" looks like.

Bootstrap mode is expected to create draft authority files and stop. It is not
a blocker, and it is not saying the project is broken. It is saying the agent
does not yet have reviewed authority to implement behavior.

## Example Prompt

```text
tw-auto "bootstrap TraceWeaver authority for a CLI that exports monthly invoice totals to CSV; do not implement yet"
```

After a good bootstrap, the project should have this shape:

```text
requirements.md
traceability-matrix.md
.traceweaver/
  intent-contract.yml
  trace-records/
```

The first three files answer one question: if an agent changes behavior later,
what proves it was allowed to do that?

## The Short Story

Imagine a stakeholder asks for "CSV export". An agent can easily build a
reasonable export that passes tests, but it might export every customer field
when the stakeholder only wanted monthly invoice totals. The code works, but
the decision is untraceable.

Proof of authority is the visible link that prevents that drift:

```text
stakeholder intent
-> approved requirement or approved exception
-> bounded task
-> verification method
-> validation question
-> shipped claim or held claim
```

## Minimal `requirements.md`

```markdown
# Requirements Baseline: Invoice CSV CLI

## Baseline State

| Field | Value |
| --- | --- |
| Baseline ID | BASELINE-2026-06-25-001 |
| Baseline status | draft_controlled_baseline |
| Owner | Finance Ops |
| TraceWeaver mode | advisory |

## Source Evidence

| Source ID | Artifact or conversation record | Role |
| --- | --- | --- |
| SRC-001 | Finance Ops request, 2026-06-25 | Stakeholder intent source |

## Stakeholder Intent

| Intent ID | Stakeholder intent | Validation question | Source |
| --- | --- | --- | --- |
| INTENT-001 | Finance Ops needs a monthly CSV of invoice totals for reconciliation. | Can Finance Ops reconcile a monthly batch without manual copy-paste? | SRC-001 |

## Approved Requirements

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | The CLI shall export invoice number, customer account ID, invoice date, and invoice total for a selected month. | INTENT-001 | test | Can Finance Ops reconcile a monthly batch without manual copy-paste? | SRC-001 | draft |

## Open Gaps, Changes, And Clarifications

| ID | Type | Linked intent | Linked requirement | Proposed disposition | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GAP-001 | clarification | INTENT-001 | REQ-001 | Confirm whether customer names or email addresses are excluded from the export. | Finance Ops | open |
```

The important part is not the table formatting. The important part is that the
intent, requirement, verification method, validation question, and open gap are
visible before implementation starts.

## Minimal `.traceweaver/intent-contract.yml`

```yaml
intent_contract_id: IC-2026-06-25-001
contract_status: draft
contract_type: project_authority_baseline
owner: Finance Ops

baseline_id: BASELINE-2026-06-25-001
baseline_source: requirements.md
traceweaver_mode: advisory

authority_rule:
  invariant: >-
    No agent may implement, review, or modify meaningful behavior unless it can
    cite stakeholder intent, an approved requirement or approved exception, a
    verification method, a validation question, and the current baseline.

stakeholder_intent:
  - id: INTENT-001
    source: SRC-001
    summary: Finance Ops needs a monthly CSV of invoice totals for reconciliation.
    validation_question: Can Finance Ops reconcile a monthly batch without manual copy-paste?

approved_requirements:
  - id: REQ-001
    intent_ids: [INTENT-001]
    statement: Export invoice number, customer account ID, invoice date, and invoice total for a selected month.
    authority_status: draft
    verification_method: test
    validation_method: stakeholder_review
    validation_question: Can Finance Ops reconcile a monthly batch without manual copy-paste?
    acceptance_criteria:
      - CSV contains only approved columns.
      - CSV can be filtered by month.
      - Export command has a repeatable test fixture.

approved_exceptions: []
held_claims:
  - no implementation until requirements review promotes REQ-001

must_not_change:
  - Do not export customer email addresses unless a reviewed requirement adds them.

blocked_assumptions:
  - id: ASM-001
    statement: Customer names and email addresses might be useful in the CSV.
    action: clarification_needed
```

The Intent Contract is the agent-facing version of the baseline. It gives the
agent a compact authority capsule to load before it plans or changes behavior.

## Minimal `traceability-matrix.md`

```markdown
# Traceability: Invoice CSV CLI

## System Context

System: Invoice CSV CLI
Mode: Advisory alpha
Status: bootstrap_pending_review

## Stakeholder Needs

| ID | Intent ID | Need | Source | Success Signal | Status |
| --- | --- | --- | --- | --- | --- |
| NEED-001 | INTENT-001 | Finance Ops can reconcile monthly invoice totals from CSV. | SRC-001 | Monthly reconciliation can be performed without manual copy-paste. | Draft |

## Requirements

| ID | Type | Requirement Summary | Source Need | Verification Method | Validation Path | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | Functional | Export approved invoice total fields for a selected month. | NEED-001 | test | VAL-001 | Finance Ops | Draft |

## Traceability Matrix

| Trace ID | Owner | Need | Requirement | Authority | Plan / Task | Implementation | Verification | Validation | Status | Gap / Debt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRACE-001 | Finance Ops | NEED-001 | REQ-001 | draft requirement | pending | pending | VER-001 | VAL-001 | Draft | GAP-001 |

## Verification Evidence

| ID | Requirement | Method | Procedure / Command | Result | Evidence Path | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| VER-001 | REQ-001 | test | pending | Pending | pending | Add before implementation closes. |

## Validation Evidence

| ID | Source Need | Scenario | Acceptance Signal | Result | Owner |
| --- | --- | --- | --- | --- | --- |
| VAL-001 | NEED-001 | Finance Ops reconciles one monthly batch from CSV. | Stakeholder confirms the CSV solves the reconciliation workflow. | Planned | Finance Ops |
```

The matrix starts sparse. That is fine. It becomes more useful when plans,
implementation files, tests, reviews, and validation records are linked to the
same rows.

## What Happens Next

Run requirements review before implementation:

```text
tw-requirements-review
```

If the review says the draft is weak, update the source evidence, requirements,
or gaps first. If the review promotes the requirement and the implementation
scope is clear, continue with:

```text
tw-plan
tw-authority-gate
tw-work
```

For the full templates, see:

- [requirements baseline template](../../plugins/traceweaver-core/references/requirements-baseline-template.md)
- [Intent Contract template](../../plugins/traceweaver-core/references/intent-contract-template.yml)
- [traceability matrix bootstrap template](../../plugins/traceweaver-core/references/traceability-matrix-bootstrap-template.md)
