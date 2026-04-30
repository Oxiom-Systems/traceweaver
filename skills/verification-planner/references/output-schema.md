# Output Schema

```yaml
skill_name: verification-planner
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

verification_plan:
  plan_id: VER-PLAN-001
  requirement_ids: []
  verification_scope: ""
  method: test
  success_criteria: []
  target_environment: ""
  tested_ref_required: true
  owner: ""
  status: draft

verification_cross_reference_matrix:
  - requirement_id: SREQ-001
    method: test
    procedure_ref: ATP-001
    expected_result: ""
    evidence_required: []
    target_environment: ""
    harness_equivalence: ""

execution_record_template:
  execution_id: VER-001
  procedure_or_command: ""
  tested_ref: ""
  date_or_session: ""
  actual_result: ""
  outcome: blocked
  evidence_path: ""
  deviations: []
```

## Outcomes

- `pass`
- `fail`
- `partial`
- `blocked`
- `deferred`
