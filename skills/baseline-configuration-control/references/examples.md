# Examples

## Clean Baseline

Input:

```text
Final candidate commit abc123 has package files A, B, C. Verification VER-010
and validation VAL-004 both record abc123 as tested/ref reviewed.
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

## Stale Evidence

Input:

```text
VER-020 passed at commit abc123. The skill metadata and reference loader changed
at commit def456 before release.
```

Finding:

- evidence may not apply to final candidate
- affected runtime file changed after gate
- reset required unless impact-reviewed

Better action:

Route to `verification-planner` for rerun or to
`technical-review-and-audit-gate` with a documented no-impact review.

## Approved Exception

Input:

```text
README wording changed after candidate verification.
```

Disposition:

```yaml
classification: impact_reviewed
decision: approved_with_exception
decision_rationale: "Docs-only change outside package-controlled runtime scope."
evidence_links:
  - IMPACT-BASE-004
hold_conditions: []
```
