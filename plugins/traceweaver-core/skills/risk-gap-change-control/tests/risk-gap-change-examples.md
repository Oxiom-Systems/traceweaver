# Risk Gap Change Examples

These are original TraceWeaver examples. Do not copy examples from licensed
sources into runtime material.

## Example: Weak Requirement Exception

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
allowed_scope: "Implementation may add retry and timeout instrumentation only; release claims remain blocked."
owner: "platform lead"
review_condition: "Replace with measurable reliability requirement before release candidate."
expiry_or_trigger: "Before RC-1"
record_decision: accept
status: open
```

Verification method:

Inspection confirms implementation stayed within allowed scope.

Validation path:

Deferred until measurable reliability scenario is approved.

## Example: Gap Record Cited As Authority (TraceWeaver)

Bad input:

```text
GAP-TW-EX-014 already documents the missing requirement for the export
endpoint, so the endpoint can be implemented now and the requirement written
later.
```

Finding:

- `gap_cited_as_authority`
- a recorded gap is a held condition, not permission
- no approved requirement or approved exception behind the work

Why it fails:

The TraceWeaver gap template carries an implementation rule: no meaningful
implementation may use the gap as authority until it is promoted to an
approved requirement or approved exception. Citing the record skips exactly
the control the record exists to enforce.

Better version (record stays held; work routes to promotion first):

```yaml
finding_id: RGC-FIND-014
issue_type: gap_cited_as_authority
severity: block
affected_item: GAP-TW-EX-014
issue: "Implementation of the export endpoint is proceeding on a gap record alone."
recommended_action: "Hold implementation. Draft the proposed requirement from the gap record, run requirements review, and obtain approval; or record an approved exception with owner, allowed scope, and expiry."
human_decision_required: true
```

The gap record itself (shaped on
`plugins/traceweaver-core/references/gap-template.yml`, routed to
`.traceweaver/gaps/`) keeps `status: open` with
`proposed_disposition: proposed_requirement` until the human decision lands.

Verification method:

Inspection confirms no implementation change closes to GAP-TW-EX-014 as its
authority link.

Validation path:

Owner confirms the promoted requirement or approved exception covers the
intended export use before the hold is lifted.

## Example: Requirement Change Without Impact Analysis (TraceWeaver)

Bad input:

```text
SREQ-EXP-003 changed: exports now run hourly instead of nightly. Updated the
requirement text in the spec. Done.
```

Finding:

- `change_without_impact_analysis`
- affected V&V, traceability, and baseline items not identified
- silent update of approved authority

Why it fails:

A requirement change must identify affected needs, downstream requirements,
design decisions, implementation, verification, validation, risks, and
baseline before the baseline is updated. Editing approved text in place is a
silent authority change.

Better version (change record shaped on
`plugins/traceweaver-core/references/change-template.yml`, routed to
`.traceweaver/changes/`):

```yaml
change_id: CHG-EXP-003
status: proposed
linked_requirement: SREQ-EXP-003
reason: "Operations need hourly export freshness for the downstream reporting workflow."
proposed_disposition: approve_change
owner: "export feature owner"
impact:
  affected_requirements:
    - SREQ-EXP-003
  affected_tasks:
    - TASK-EXP-011
  affected_tests:
    - VER-EXP-007
  affected_validation_questions:
    - VAL-EXP-002
approval:
  decision: pending
  decision_source: null
```

The authority baseline is updated only after this change is approved; the
matrix rows for VER-EXP-007 and VAL-EXP-002 are marked stale until rerun
against the hourly behavior.

Verification method:

Scheduled export test rerun against the hourly trigger after approval.

Validation path:

Reporting stakeholder confirms hourly freshness supports the intended
workflow.
