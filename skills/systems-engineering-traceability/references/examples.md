# Examples

## Orphan Behavior

Bad input:

```text
TASK-004: Add admin export endpoint.
```

Finding:

- task is not authority
- no approved requirement
- no validation path

Why it fails:

The implementation would be traceable only to work intent, not approved system
authority.

Better version:

```yaml
need_id: NEED-AUD-001
requirement_id: SREQ-AUD-003
task_ids:
  - TASK-004
implementation_refs:
  - src/admin/export.ts
verification:
  method: test
  evidence_id: VER-AUD-003
validation:
  evidence_id: VAL-AUD-001
```

Verification method:

API authorization and export-content tests.

Validation path:

Compliance reviewer confirms exported data supports audit workflow.
