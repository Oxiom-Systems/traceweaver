# Risk Gap Change Output Schema

Use structured records and findings for risk, gap, exception, and change
work. Prefer one controlled record per deviation and one finding per distinct
issue.

## Session Envelope And Controlled Record

```yaml
skill_name: risk-gap-change-control
skill_version: "0.1"
source_inputs: []
authority_status: candidate
baseline_reference: ""
trace_links: []
evidence_links: []
assumptions: []
risks: []
gaps: []
exceptions: []
change_impacts: []
decision: held
decision_rationale: ""
recommended_next_skill: null
hold_conditions: []

controlled_record:
  record_id: GAP-001
  record_type: approved_gap
  title: ""
  affected_items:
    needs: []
    requirements: []
    design_decisions: []
    implementation_refs: []
    verification: []
    validation: []
  reason: ""
  impact: ""
  allowed_scope: ""
  record_decision: accept
  owner: ""
  approval:
    approver: ""
    date_or_session: ""
  review_condition: ""
  expiry_or_trigger: ""
  follow_up_actions: []
  traceability_impact: ""
  status: open
```

Field notes:

- `decision` (envelope) is the session outcome; `record_decision` (per
  record) is the disposition of that record. Use `record_decision` in every
  controlled record and example.
- `record_decision` must be exactly one of `accept`, `revise`, `defer`,
  `block`, `escalate`, or `close`.
- `approval` must carry real approver evidence when `record_decision` is
  `accept`; an empty approval block with `accept` is a block condition.
- `allowed_scope` must state both what may proceed and what remains blocked.

## Finding

```yaml
finding_id: RGC-FIND-001
issue_type: uncontrolled_gap
severity: block
affected_item: SREQ-001
issue: "Requirement is unverifiable but no accepted gap or risk record exists."
recommended_action: "Revise requirement or create approved gap with owner and review condition."
human_decision_required: true
```

| Field | Purpose |
|---|---|
| `finding_id` | Stable finding key |
| `issue_type` | Machine-readable issue tag |
| `severity` | `block`, `major`, `minor`, or `note` |
| `affected_item` | Need, requirement, record, or artifact affected |
| `issue` | Plain explanation |
| `recommended_action` | What must happen before the deviation is controlled |
| `human_decision_required` | `true` when acceptance or scope cannot be inferred safely |

Issue type tags:

- `uncontrolled_gap`
- `unowned_exception`
- `unbounded_scope`
- `missing_approval_evidence`
- `missing_review_condition`
- `missing_expiry_or_trigger`
- `gap_cited_as_authority`
- `change_without_impact_analysis`
- `deferred_vv_without_trigger`
- `deferred_validation_treated_as_permanent`
- `expired_or_out_of_scope_exception`
- `debt_cited_as_authority`

## Record Types

- `approved_gap`
- `accepted_risk`
- `weak_requirement_exception`
- `requirement_change`
- `deferred_verification`
- `deferred_validation`
- `traceability_debt`
- `baseline_delta`

## Routing To TraceWeaver Records

When emitting records into a TraceWeaver-managed project, shape them on the
plugin templates and write them to the project record directories:

| Record types | Directory | Template |
|---|---|---|
| `approved_gap`, `traceability_debt` (when tracked as gap follow-up) | `.traceweaver/gaps/` | `plugins/traceweaver-core/references/gap-template.yml` |
| `requirement_change`, `baseline_delta` | `.traceweaver/changes/` | `plugins/traceweaver-core/references/change-template.yml` |
| `accepted_risk`, `weak_requirement_exception`, `deferred_verification`, `deferred_validation` | `.traceweaver/exceptions/` | `plugins/traceweaver-core/references/exception-template.yml` |

The template's implementation rule carries through: a recorded gap is a held
condition, not permission, until promoted to an approved requirement or
approved exception.
