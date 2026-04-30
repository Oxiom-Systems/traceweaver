# Output Schema

```yaml
skill_name: baseline-configuration-control
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

baseline_record:
  baseline_id: BASE-001
  baseline_type: final_candidate
  candidate_ref: ""
  branch_or_tag: ""
  artifact_hash: ""
  controlled_file_set: []
  package_scope: []
  owner: ""
  status: candidate

final_candidate_evidence_index:
  verification_records: []
  validation_records: []
  review_records: []
  gate_records: []

fork_diff_classification:
  diff_source: ""
  files_changed: []
  classification: reset_required
  affected_gates: []
  impact_review_ref: null

stale_gate_report:
  gate_id: ""
  prior_status: approved
  new_status: held
  stale_reason: ""
  reset_required: true
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
