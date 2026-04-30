# Examples

## Clean Route

Input:

```text
User gives stakeholder feedback for a new workflow.
```

Route:

```yaml
current_state: source_capture
next_skill: needs-and-requirements-capture
route_reason: "Raw stakeholder intent must be preserved before requirement review."
decision: held
hold_conditions:
  - "Implementation is held until approved authority exists."
```

## Implementation Requested From Vague Idea

Input:

```text
Build a better setup flow.
```

Finding:

- no stakeholder/source record
- no candidate need
- no approved requirement

Route:

```yaml
next_skill: needs-and-requirements-capture
route_mode: hold
```

## Approved Exception Route

Input:

```text
Proceed with discovery build under approved GAP-DISC-001.
```

Route:

```yaml
route_mode: exception_path
next_skill: baseline-configuration-control
exceptions:
  - GAP-DISC-001
hold_conditions:
  - "Scope may not exceed approved discovery boundary."
```
