# Verification Plan Output Schema

Use this output shape for substantive verification planning unless the user
asks for another format. The plan, the cross-reference matrix, and the
execution record template are separate objects so planned proof and actual
evidence never blur together.

## Output Record

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

## Decision Values

Choose exactly one:

- `ready`: the plan passes the checklist and can guide implementation and
  execution.
- `held`: open hold conditions exist; list them in `hold_conditions` with the
  routed handoff in `recommended_next_skill`.
- `approved_with_exception`: a hold condition is consciously accepted through
  a controlled risk/gap/change record; list the record IDs in `exceptions`.

## Outcome Values

For each execution record, exactly one:

- `pass`: actual result met the expected result.
- `fail`: actual result did not meet the expected result.
- `partial`: some criteria met; remaining scope must be recorded, not assumed.
- `blocked`: the procedure could not run; record the blocker.
- `deferred`: execution intentionally postponed with owner, trigger, and an
  approved gap.

`fail`, `partial`, `blocked`, and `deferred` all require a record and a
handoff (normally `risk-gap-change-control`), never silence.

## Required Fields

| Field | Purpose |
|---|---|
| `decision` | Plan readiness: `ready`, `held`, or `approved_with_exception` |
| `hold_conditions` | Open reasons the plan is not ready |
| `verification_plan.plan_id` | Stable plan key |
| `verification_plan.requirement_ids` | Requirements this plan proves |
| `verification_plan.method` | `inspection`, `analysis`, `demonstration`, or `test` |
| `verification_plan.success_criteria` | Objective pass/fail conditions, thresholds, or inspectable artifacts |
| `verification_plan.target_environment` | Where proof must hold |
| `verification_plan.tested_ref_required` | Whether evidence must name the tested ref (default `true`) |
| `verification_plan.owner` | Accountable actor for execution and evidence |
| matrix `procedure_ref` | Named procedure, script, or ATP entry per requirement |
| matrix `expected_result` | Written before the run |
| matrix `harness_equivalence` | Equivalence statement when environment differs from target runtime, else empty |
| `execution_record_template.tested_ref` | Commit, tag, or package version actually tested |
| `execution_record_template.outcome` | One of the outcome values above |
| `execution_record_template.evidence_path` | Where the record and artifacts live |
| `execution_record_template.deviations` | Differences between planned and actual procedure |

## Matrix Linkage

The `verification_cross_reference_matrix` rows are the source for the
verification columns of `traceability-matrix.md`: requirement ID, method,
procedure ref, and evidence path must stay consistent between the two so the
matrix never claims proof the execution records cannot show.
