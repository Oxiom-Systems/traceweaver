# Examples

## Clean Interface Review

Input:

```text
The runtime loads skills from a configured directory and reads SKILL.md plus
reference files.
```

Output:

```yaml
interface_inventory:
  - interface_id: IFACE-SKILL-LOAD
    boundary_type: runtime
    owner: "agent platform"
    inputs:
      - "skill directory"
      - "SKILL.md metadata"
    outputs:
      - "discoverable skill"
    authority_trace:
      - SREQ-RUN-001
```

## Weak Architecture Story

Bad:

```text
The agent will just know which references to load.
```

Finding:

- missing interface contract
- missing routing rule
- missing verification target

Better:

Define the metadata and reference-loading contract, then route verification to
`verification-planner`.

## Approved Integration Gap

Input:

```text
Manual sync is needed until package automation exists.
```

Disposition:

```yaml
decision: approved_with_exception
exceptions:
  - GAP-INT-001
recommended_next_skill: risk-gap-change-control
```
