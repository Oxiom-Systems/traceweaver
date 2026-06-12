# Review And Audit Gate Examples

These are original TraceWeaver examples. Do not copy examples from licensed
sources into runtime material. Examples show both the gate decision
(`gate_readiness_report.decision`) and the mapped top-level `decision`.

## Example: Clean Gate

Input:

```text
Implementation gate for candidate abc123. Requirements, baseline,
verification plan, and accepted risk records are linked. Entry criteria are
met.
```

Decision:

```yaml
decision: approved
decision_rationale: "Entry criteria met, evidence index complete, no open blockers."
gate_readiness_report:
  decision: proceed
```

## Example: Not Clean Review Set

Input:

```text
Product lens is clean, but coherence and feasibility reviews were not run.
```

Finding:

- required review lenses incomplete
- readiness cannot be inferred from one clean lens

Decision:

```yaml
decision: held
gate_readiness_report:
  decision: hold
hold_conditions:
  - "Coherence review missing."
  - "Feasibility review missing."
recommended_next_skill: technical-review-and-audit-gate
```

The self-handoff is deliberate: the missing lenses must be run first, then
the same gate re-runs over the completed lens set. The gate itself does not
perform the missing reviews.

## Example: Reduced-Scope Exception

Input:

```text
Validation for analytics adoption is deferred under approved GAP-VAL-003.
Runtime discovery verification is complete.
```

Decision:

```yaml
decision: reduced
decision_rationale: "Proceed only with runtime discovery scope; analytics adoption remains held by GAP-VAL-003."
gate_readiness_report:
  decision: reduce
exceptions:
  - GAP-VAL-003
```

## Example: TraceWeaver Closure Audit, Missing Validation Record

Input:

```text
tw-audit closure audit: PR claims REQ-EX-021 is complete. The traceability
matrix row links code and test anchors, verification results are recorded,
but no validation or acceptance record exists under docs/validation/ and no
approved gap defers validation.
```

Finding:

- verification lens clean; validation lens has no recorded evidence
- closure claim exceeds the evidence: complete requires validation or an
  approved deferral
- a clean verification lens does not clear the validation lens

Decision:

```yaml
decision: held
gate_readiness_report:
  gate_id: GATE-CLOSURE-REQ-EX-021
  lifecycle_stage: closure
  review_mode: audit
  decision: hold
hold_conditions:
  - "No validation or acceptance record for REQ-EX-021 under docs/validation/."
  - "No approved gap record defers validation for REQ-EX-021."
evidence_index:
  verification_records:
    - "test results linked from traceability-matrix.md row REQ-EX-021"
  validation_records: []
recommended_next_skill: validation-planner
```

Claim impact: REQ-EX-021 stays out of complete/closed status in
`traceability-matrix.md`; the gate decision is recorded as review evidence
but does not change requirement status itself.

## Example: Stale Authority Triad At A Promotion Gate

Input:

```text
Runtime promotion gate for a packaged skill. requirements.md changed two
commits ago, but the traceability-matrix.md row hashes and the recorded
candidate ref still point at the older authority state.
```

Finding:

- candidate ref inconsistent: the evidence describes a different authority
  baseline than the one that would proceed
- entry criteria not met; exit findings are not evaluated

Decision:

```yaml
decision: held
gate_readiness_report:
  gate_id: GATE-RUNTIME-PROMOTION
  lifecycle_stage: runtime promotion
  review_mode: normal
  decision: hold
hold_conditions:
  - "traceability-matrix.md hashes are stale against requirements.md."
  - "Candidate ref does not match the current authority baseline."
recommended_next_skill: baseline-configuration-control
```

After the baseline is repaired and re-recorded, the gate re-runs from entry
criteria; the earlier hold remains in the review record as evidence of the
drift.
