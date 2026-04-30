# Output Schema

```yaml
skill_name: validation-planner
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

validation_plan:
  plan_id: VAL-PLAN-001
  need_ids: []
  intended_use: ""
  operating_context: ""
  validation_method: stakeholder_review
  success_criteria: []
  owner: ""
  status: draft

stakeholder_or_rater_profile:
  name_or_role: ""
  relationship_to_work: ""
  independence_note: ""
  representative_reason: ""

validation_scenario_matrix:
  - scenario_id: VAL-SCEN-001
    need_id: NEED-001
    scenario: ""
    acceptance_signal: ""
    evidence_path: ""
    status: planned

adoption_evidence_record:
  record_id: VAL-001
  scenario_id: VAL-SCEN-001
  rater_or_source: ""
  result: blocked
  approval_package_inputs: []
  deferred_trigger: null
```

## Outcomes

- `pass`
- `fail`
- `partial`
- `blocked`
- `deferred`
