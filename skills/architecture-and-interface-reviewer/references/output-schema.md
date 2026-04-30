# Output Schema

```yaml
skill_name: architecture-and-interface-reviewer
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

architecture_review_report:
  review_id: ARCH-REV-001
  scope: ""
  operating_context: ""
  decision: hold

interface_inventory:
  - interface_id: IFACE-001
    name: ""
    boundary_type: runtime
    owner: ""
    inputs: []
    outputs: []
    contract_ref: ""
    authority_trace: []
    failure_modes: []

external_dependency_map:
  - dependency_id: DEP-001
    name: ""
    purpose: ""
    owner: ""
    risk_links: []

interface_gap_report:
  gaps: []
  derived_requirement_candidates: []
  integration_risk_records: []

architecture_to_requirement_trace:
  - architecture_item: ""
    requirement_ids: []
    design_decision_ids: []
```
