# Baseline Control Examples

These are original TraceWeaver examples. Do not copy examples from licensed
sources into runtime material.

## Example: Clean Baseline

Input:

```text
Final candidate commit abc123 has package files A, B, C. Verification VER-010
and validation VAL-004 both record abc123 as the tested/reviewed ref.
```

Finding:

- baseline consistent
- evidence current
- no reset required

Output:

```yaml
decision: approved
baseline_record:
  baseline_id: BASE-RC-001
  candidate_ref: abc123
  controlled_file_set:
    - package/SKILL.md
    - package/references/*.md
stale_gate_report:
  reset_required: false
```

## Example: Stale Evidence

Input:

```text
VER-020 passed at commit abc123. The skill metadata and reference loader
changed at commit def456 before release.
```

Finding:

- a runtime-controlled file changed after the gate passed
- evidence may not apply to the final candidate
- reset required unless an explicit impact review keeps the evidence

Action:

- mark the affected gate `held`, not passed
- route to `verification-planner` for a rerun, or to
  `technical-review-and-audit-gate` with a documented no-impact review

Output:

```yaml
decision: held
fork_diff_classification:
  diff_source: "abc123..def456"
  classification: reset_required
  affected_gates:
    - VER-020
stale_gate_report:
  gate_id: VER-020
  prior_status: approved
  new_status: held
  stale_reason: "Runtime-controlled files changed after the gate passed."
  reset_required: true
```

## Example: Approved Exception

Input:

```text
README wording changed after candidate verification.
```

Finding:

- changed file is outside the package-controlled runtime scope
- impact review records why runtime evidence still applies

Disposition:

```yaml
classification: impact_reviewed
decision: approved_with_exception
decision_rationale: "Docs-only change outside package-controlled runtime scope."
evidence_links:
  - IMPACT-BASE-004
hold_conditions: []
```

## Example: Inconsistent Gate Refs (TraceWeaver Release Candidate)

Input:

```text
A TraceWeaver plugin release is being prepared. The install smoke record cites
commit aaa111, the skill-behavior smoke record cites commit bbb222, and the
CHANGELOG release section names version 0.3.0 with no commit. The release PR
claims "all gates passed".
```

Finding:

- release gates reference different candidate refs
- the gates cannot prove the same product
- no single controlling ref exists for the final candidate

Action:

- hold the release claim
- pick one controlling candidate ref, re-run or impact-review the gates whose
  evidence cites a different ref, and record the reconciled refs in the
  baseline record

Output:

```yaml
decision: held
decision_rationale: "Release gates cite aaa111 and bbb222; no single controlling ref."
hold_conditions:
  - "Candidate ref inconsistent across gate records."
recommended_next_skill: technical-review-and-audit-gate
```

## Example: Authority Citing A Drifted Baseline Hash (TraceWeaver Intent Contract)

Input:

```text
An authority decision cites the bounded snapshot hash recorded in
.traceweaver/intent-contract.current.yml. Since that decision, a gap record
was added and the snapshot was regenerated, so the current snapshot hash no
longer matches the one the decision cites.
```

Finding:

- baseline identity drifted under an existing authority decision
- the decision is stale for the current baseline; it proves the old one
- work gated by that decision must not proceed on the old citation

Action:

- mark the authority decision stale and the dependent gates `held`
- re-anchor the decision against the current baseline version/hash, or record
  an impact review explaining why the gap-record change cannot affect the
  decided scope
- route requirement-level changes to `risk-gap-change-control`

Output:

```yaml
decision: held
stale_gate_report:
  gate_id: AUTH-DEC-014
  prior_status: approved
  new_status: held
  stale_reason: "Cited bounded snapshot hash superseded by regenerated Intent Contract snapshot."
  reset_required: true
recommended_next_skill: risk-gap-change-control
```
