# Baseline Control Output Schema

Use this schema for baseline and configuration-control findings. Defaults are
conservative: an unclassified change is `reset_required` and an unproven
baseline decision is `held`.

```yaml
skill_name: baseline-configuration-control
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

change_reset_decision:
  change_ref: ""
  classification: reset_required
  affected_gates: []
  reset_applied: true
  impact_review_ref: null
```

## Required Fields

| Field | Purpose |
|---|---|
| `baseline_record.baseline_id` | Stable baseline key |
| `baseline_record.candidate_ref` | The one controlling ref for gates, scope, and evidence |
| `baseline_record.controlled_file_set` | Explicit controlled scope |
| `final_candidate_evidence_index` | Evidence records tied to the candidate ref |
| `fork_diff_classification.classification` | Exactly one diff class per change set |
| `stale_gate_report` | One per gate affected by post-evidence change |
| `change_reset_decision` | Whether the change reset gates or an impact review kept them |
| `decision` | Overall baseline decision; `held` until proven |
| `decision_rationale` | Why the decision holds for this candidate ref |
| `recommended_next_skill` | Handoff target when findings leave this skill's authority |
| `hold_conditions` | The exact conditions keeping the decision at `held` |

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

## Classification Values

`fork_diff_classification.classification` and
`change_reset_decision.classification` use exactly one of:

- `no_impact`
- `impact_reviewed`
- `reset_required`
- `blocked`
- `superseded`
