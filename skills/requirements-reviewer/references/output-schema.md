# Output Schema

Use one finding per distinct requirement issue.

```yaml
skill_name: requirements-reviewer
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

finding_id: REQ-FIND-001
requirement_id: SREQ-001
source_text: "The system should be fast."
reframed_text: null
requirement_type: quality_requirement
parent_need_or_source: missing
owner: missing
approval_state: draft
approval_readiness: block
failed_checks:
  - vague_language
  - not_verifiable
severity: block
issue: "The requirement uses subjective performance language without workload or measurable threshold."
recommended_action: rewrite
suggested_rewrite: "The service shall return search results within 2 seconds for 95% of requests under normal operating load."
verification_method: test
validation_path: user_search_scenario
traceability_impact: "Do not use as approved authority until revised and linked to a parent need."
human_approval_required: true
```

## Severity

| Severity | Meaning |
|---|---|
| `block` | Cannot become authority as written |
| `revise` | Needs rewrite, metadata, V&V, split, or reclassification before approval |
| `advisory` | Improvement that does not block approval |

## Common Failed Checks

- `missing_id`
- `missing_type`
- `missing_parent_or_source`
- `missing_owner`
- `missing_approval_state`
- `vague_language`
- `escape_clause`
- `open_ended_list`
- `compound`
- `ambiguous`
- `not_verifiable`
- `missing_validation_path`
- `implementation_biased`
- `wrong_abstraction_level`
- `duplicate`
- `conflict`
- `not_requirement`
