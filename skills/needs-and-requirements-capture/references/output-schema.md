# Output Schema

```yaml
skill_name: needs-and-requirements-capture
skill_version: "0.1"
source_inputs: []
authority_status: candidate
baseline_reference: ""
trace_links: []
evidence_links: []
risks: []
gaps: []
exceptions: []
change_impacts: []
decision: held
decision_rationale: ""
recommended_next_skill: requirements-reviewer
hold_conditions: []

capture_id: CAP-001
source:
  stakeholder: ""
  artifact: ""
  original_text: ""
reframed_need:
  id: NEED-001
  text: ""
  status: candidate
candidate_requirements:
  - id: UREQ-001
    type: user_requirement
    text: ""
    status: draft
assumptions:
  - id: ASM-001
    text: ""
constraints:
  - id: CON-001
    text: ""
    source: ""
success_signals:
  - id: SIG-001
    text: ""
failure_signals:
  - id: FAIL-001
    text: ""
open_questions:
  - id: Q-001
    question: ""
handoffs:
  requirements_review: []
  traceability: []
  risk_gap_change_control: []
human_clarification_required: false
```

## Status Values

- `candidate`
- `draft`
- `needs_clarification`
- `ready_for_requirement_review`
- `rejected`
