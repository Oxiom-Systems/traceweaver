# Examples

## Weak Requirement Exception

Bad input:

```text
Proceed with SREQ-010 even though "robust" is not defined.
```

Finding:

- weak requirement
- unverifiable
- uncontrolled exception

Why it fails:

Proceeding silently turns weak wording into hidden authority.

Better version:

```yaml
record_id: GAP-ROB-001
record_type: weak_requirement_exception
affected_items:
  requirements:
    - SREQ-010
reason: "Performance threshold cannot be finalized until production-like load profile is available."
allowed_scope: "Implementation may add retry and timeout instrumentation only."
owner: "platform lead"
review_condition: "Replace with measurable reliability requirement before release candidate."
expiry_or_trigger: "Before RC-1"
decision: accept
status: open
```

Verification method:

Inspection confirms implementation stayed within allowed scope.

Validation path:

Deferred until measurable reliability scenario is approved.
