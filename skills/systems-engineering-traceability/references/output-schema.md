# Output Schema

## Trace Row

```yaml
skill_name: systems-engineering-traceability
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

trace_row:
  trace_id: TRACE-001
  need_id: NEED-001
  requirement_id: SREQ-001
  authority_type: approved_requirement
  authority_status: approved
  design_decision_id: ADR-001
  task_ids:
    - TASK-001
  implementation_refs:
    - path: ""
  verification:
    method: test
    evidence_id: VER-001
    status: planned
  validation:
    evidence_id: VAL-001
    status: planned
  gaps:
    - GAP-001
  risks:
    - RISK-001
  owner: ""
  trace_status: open
```

## Finding

```yaml
finding_id: TRACE-FIND-001
behavior_ref: ""
issue_type: orphan_behavior
severity: block
authority_found: false
missing_links:
  - approved_authority
  - verification
traceability_impact: "Implementation cannot be treated as engineering-complete."
recommended_action: "Create or approve authority, or remove/defer behavior."
human_decision_required: true
```
