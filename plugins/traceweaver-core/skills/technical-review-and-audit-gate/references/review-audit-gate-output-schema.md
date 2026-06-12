# Review And Audit Gate Output Schema

Use this schema for gate reports unless the user asks for another format.

```yaml
skill_name: technical-review-and-audit-gate
skill_version: "0.2"
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

gate_readiness_report:
  gate_id: GATE-001
  gate_name: ""
  lifecycle_stage: ""
  review_mode: lite
  candidate_ref: ""
  decision_authority: ""
  decision: hold

entry_criteria_status:
  - criterion: ""
    status: held
    evidence_ref: null

exit_criteria_status:
  - criterion: ""
    status: held
    evidence_ref: null

action_item_status:
  blockers: []
  accepted_exceptions: []
  follow_ups: []
  not_relevant: []

evidence_index:
  baseline_records: []
  trace_records: []
  verification_records: []
  validation_records: []
  review_records: []

risk_readiness_status:
  open_risks: []
  accepted_risks: []
  unresolved_gaps: []
```

## Field Vocabularies

Two vocabularies are used deliberately; do not mix them per field.

| Field | Vocabulary |
|---|---|
| `gate_readiness_report.decision` | Gate decision verbs: `proceed`, `hold`, `reduce`, `reject` |
| top-level `decision` | Shared status values (below) |
| `entry_criteria_status[].status`, `exit_criteria_status[].status` | Shared status values (below) |
| `authority_status` | Shared status values (below) |

## Decision-To-Status Mapping

The top-level `decision` mirrors the gate decision through this mapping:

| `gate_readiness_report.decision` | top-level `decision` |
|---|---|
| `proceed` | `approved` |
| `hold` | `held` |
| `reduce` | `reduced` |
| `reject` | `rejected` |

## Shared Status Values

- `draft`
- `candidate`
- `approved`
- `approved_with_exception`
- `rejected`
- `held`
- `reduced`
- `superseded`
- `stale`

## Required Fields

| Field | Purpose |
|---|---|
| `gate_readiness_report` | Gate identity: ID, name, stage, mode, candidate ref, decision authority, gate decision |
| `entry_criteria_status` | Per-criterion status with evidence reference; decides whether review could start |
| `exit_criteria_status` | Per-criterion status with evidence reference; decides whether work can proceed |
| `action_item_status` | Open actions classified as blockers, accepted exceptions, follow-ups, or not relevant |
| `evidence_index` | Recorded artifacts the decision stands on, grouped by record type |
| `risk_readiness_status` | Open risks, accepted risks, and unresolved gaps with dispositions |
| `decision` / `decision_rationale` | Mapped status plus the evidence-grounded reason |
| `hold_conditions` | Named held items when the decision is not `approved` |
| `exceptions` | Risk/gap/change record IDs that scope out missing evidence or reduce scope |
| `recommended_next_skill` | Handoff per the skill's handoff rules, or `null` |

## Output Rules

- Empty evidence groups under `evidence_index` are findings when the gate's
  lens set requires that record type.
- A `reduce` decision must list its approving record under `exceptions`.
- `hold_conditions` must name resolvable items: missing record, unmet
  criterion, unclassified action, or unknown state - not "needs more review".
