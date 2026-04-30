# Output Schema

```yaml
skill_name: traceweaver-lifecycle-orchestrator
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

lifecycle_route:
  route_id: ROUTE-001
  requested_action: ""
  current_state: source_capture
  authority_state: unknown
  next_skill: needs-and-requirements-capture
  route_reason: ""
  route_mode: normal

required_inputs:
  - input_name: ""
    status: missing
    source_or_owner: ""

blocking_conditions:
  - condition: ""
    owning_skill: ""
    required_resolution: ""

handoff_record:
  from_skill: traceweaver-lifecycle-orchestrator
  to_skill: ""
  artifact_refs: []
  context_summary: ""
  source_preservation_refs: []
```

## Route Modes

- `normal`
- `hold`
- `reduced_scope`
- `exception_path`
- `human_decision`
