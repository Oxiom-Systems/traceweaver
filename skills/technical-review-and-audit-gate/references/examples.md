# Examples

## Clean Gate

Input:

```text
Implementation gate for candidate abc123. Requirements, baseline, verification
plan, and accepted risk records are linked. Entry criteria are met.
```

Decision:

```yaml
decision: proceed
decision_rationale: "Entry criteria met, evidence index complete, no open blockers."
```

## Not Clean Review Set

Input:

```text
Product lens is clean, but coherence and feasibility reviews were not run.
```

Finding:

- required review lenses incomplete
- readiness cannot be inferred

Decision:

```yaml
decision: held
hold_conditions:
  - "Coherence review missing."
  - "Feasibility review missing."
recommended_next_skill: technical-review-and-audit-gate
```

## Reduced-Scope Exception

Input:

```text
Validation for analytics adoption is deferred under approved GAP-VAL-003.
Runtime discovery verification is complete.
```

Decision:

```yaml
decision: reduced
decision_rationale: "Proceed only with runtime discovery scope; analytics adoption remains held by GAP-VAL-003."
exceptions:
  - GAP-VAL-003
```
