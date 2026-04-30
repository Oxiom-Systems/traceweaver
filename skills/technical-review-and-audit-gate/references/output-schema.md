# Output Schema

```yaml
skill_name: technical-review-and-audit-gate
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
