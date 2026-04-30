# Operating Model

## Primary Question

Does this behavior trace to approved authority and V&V evidence?

## Valid Authority

Behavior may trace to:

- approved requirement
- approved design decision
- first-class approved risk control
- approved gap with owner and review condition
- task that closes directly to one of the above

Behavior may not trace only to:

- idea
- candidate need
- draft requirement
- task with no approved parent
- review comment
- bare risk ID
- weak requirement with no recorded exception

## Decision Rules

- A task is work, not authority.
- A need explains why, but does not by itself authorize implementation.
- A requirement must be quality-reviewed or explicitly accepted with known risk.
- Verification evidence proves requirement satisfaction.
- Validation evidence proves stakeholder or operational fit.
- Missing trace links are gaps or debt, not invisible assumptions.
- Dark code is meaningful behavior with no explainable authority, evidence, or
  owner.
- Approved gaps must have owner, reason, allowed scope, review condition, and
  expiry or trigger.

## Trace Chain

```text
need -> requirement -> design decision -> task -> implementation -> verification -> validation
```

The chain may be partial during drafting, but must be explicit before behavior
is treated as engineering-complete.
