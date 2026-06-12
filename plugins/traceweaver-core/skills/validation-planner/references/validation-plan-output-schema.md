# Validation Plan Output Schema

Use this structured output for validation planning results and
validation-closure judgments.

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

## Outcome Meanings

| Outcome | Meaning |
|---|---|
| `pass` | A named rater observed the acceptance signal in a representative scenario; evidence is linked. |
| `fail` | The scenario ran and the acceptance signal was not observed; route to change control or scope reduction. |
| `partial` | Some scenarios or criteria passed; the unmet remainder is recorded and routed, not dropped. |
| `blocked` | The scenario cannot run yet; the blocker, owner, and unblock condition are recorded. |
| `deferred` | Validation is postponed under an approved gap with owner, trigger, expected evidence, and release impact. |

## Field Meanings

| Field | Meaning |
|---|---|
| `authority_status` | Whether this output is candidate material or carries approved authority; planning outputs start as `candidate`. |
| `decision` | The skill-level decision for the claim under review: an outcome above, or `held` when hold conditions apply. |
| `decision_rationale` | Why the decision was reached, in terms of the gate and hold conditions. |
| `hold_conditions` | The specific unmet conditions that keep the decision held, and what would clear them. |
| `recommended_next_skill` | The handoff domain when the issue belongs to another knowledge domain. |
| `validation_plan.validation_method` | One of the validation evidence types from the operating model. |
| `validation_plan.success_criteria` | Observable acceptance criteria in the intended context. |
| `validation_plan.owner` | The person or role accountable for executing the plan and closing the claim. |
| `stakeholder_or_rater_profile.relationship_to_work` | How the rater relates to the implementation; basis for the independence judgment. |
| `stakeholder_or_rater_profile.independence_note` | Whether the rater is independent of the work, and if not, who accepted the dependence. |
| `stakeholder_or_rater_profile.representative_reason` | Why this rater stands for the intended user, operator, customer, or approver. |
| `validation_scenario_matrix[].acceptance_signal` | The observable result that counts as acceptance for the scenario. |
| `validation_scenario_matrix[].evidence_path` | Where the result record or approval evidence lives or will live. |
| `adoption_evidence_record.result` | The recorded outcome for an executed scenario, using the outcomes above. |
| `adoption_evidence_record.approval_package_inputs` | Evidence items this record contributes to a release or acceptance decision. |
| `adoption_evidence_record.deferred_trigger` | The trigger that starts deferred validation, or `null` when not deferred. |
