# Examples

## Clean Validation Plan

Need:

```text
NEED-OPS-001: Operations users need to locate the right TraceWeaver skill during
planning without reading the whole package.
```

Plan:

```yaml
validation_method: representative_user_scenario
stakeholder_or_rater_profile:
  name_or_role: "engineering lead not involved in implementation"
  relationship_to_work: "target user and approver, not implementer"
scenario: "Given a planning prompt, locate the correct skill and explain why it applies."
acceptance_signal: "Rater confirms selection is correct and workflow is usable."
```

Verification link:

Runtime discovery tests may support confidence but do not replace this scenario.

## Weak Validation Claim

Bad:

```text
R31 passed because the implementer thinks adoption will be good.
```

Finding:

- implementer self-assessment
- no representative rater
- no scenario
- no acceptance evidence

Better:

Name the rater or representative, record relationship to work, define scenario,
and capture the approval/adoption evidence path.

## Approved Deferred Validation

Input:

```text
Representative beta users are not available until the limited beta starts.
```

Disposition:

```yaml
decision: approved_with_exception
exceptions:
  - GAP-VAL-004
hold_conditions:
  - "Public release held until beta validation evidence is recorded."
recommended_next_skill: risk-gap-change-control
```
