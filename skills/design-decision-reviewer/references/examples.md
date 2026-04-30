# Examples

## Clean Design Decision

Decision:

```text
ADR-012 selects file-based skill discovery for Light v0.1.
```

Good record:

```yaml
authority_trace:
  requirements:
    - SREQ-RUN-001
tradeoff_summary:
  selected_option: "file-based discovery"
  alternatives_considered:
    - "registry service"
    - "hardcoded skill map"
  rationale: "Matches package scope and avoids service dependency for Light v0.1."
downstream_impacts:
  verification:
    - VER-PLAN-RUN-001
```

## Weak Design Decision

Bad:

```text
Use Postgres because the agent prefers it.
```

Finding:

- no authority trace
- no alternatives
- no tradeoff
- possible implementation bias

Better:

Link to approved requirement or constraint, compare alternatives, and identify
downstream V&V and baseline impacts.

## Approved Temporary Decision

Input:

```text
Manual package sync is used until runtime packaging automation is ready.
```

Disposition:

```yaml
decision: approved_with_exception
exceptions:
  - GAP-PKG-001
recommended_next_skill: risk-gap-change-control
```
