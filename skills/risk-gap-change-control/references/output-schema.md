# Output Schema

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

## Record Types

- `approved_gap`
- `accepted_risk`
- `weak_requirement_exception`
- `requirement_change`
- `deferred_verification`
- `deferred_validation`
- `traceability_debt`
- `baseline_delta`
