# Examples

## Clean Verification Plan

Requirement:

```text
SREQ-RUN-001: The runtime package shall load the requirements-reviewer skill and
its references from the target skills directory.
```

Plan:

```yaml
method: test
target_environment: "target agent runtime"
procedure_or_command: "Run runtime discovery command and inspect loaded files."
expected_result: "Skill metadata and all referenced files are discoverable."
tested_ref_required: true
```

Validation path:

Separate. This verifies loading behavior; it does not prove users accept the
workflow.

## Weak Verification Note

Bad:

```text
Run tests.
```

Finding:

- no requirement ID
- no method
- no expected result
- no target ref
- no evidence path

Better:

Create `VER-PLAN-*` with method, setup, command/procedure, expected result,
tested ref, and result path.

## Approved Deferred Verification

Input:

```text
Target runtime is unavailable until vendor beta access.
```

Disposition:

```yaml
decision: approved_with_exception
exceptions:
  - GAP-VER-002
recommended_next_skill: risk-gap-change-control
hold_conditions:
  - "Release cannot pass until target runtime evidence exists."
```
