---
id: TW-REQ-REVIEW-2026-08-24-V060-REAL-PRODUCT-DEPTH-001
status: passed_existing_requirements_change_exception_approved
date: 2026-08-24
owner: Oxiom Systems
authority_effect: none
requirements: [REQ-TW-136, REQ-TW-143, REQ-TW-144]
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-real-product-depth-requirements-review; req=REQ-TW-136,REQ-TW-143,REQ-TW-144; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Real-Product-Depth Requirements Review

## Summary

Reviewed: 3 requirements. Approval-quality: 3. Needs revision: 0. Blocked
requirements: 0. The product-validation method is blocked pending a separate
change/exception decision because the frozen delivery already consumed its
single normal repair batch.

Hannes Zietsman's explicit owner classification is **Real-product depth**. The
rejected trial referenced real source bytes but constructed eight hand-authored
lifecycle records and assigned a constant five required/recovered links to each
task. That method does not establish the representative actual-product depth
required by REQ-TW-136 and REQ-TW-144.

## Requirement quality scores

| Requirement | Type | Score | Outcome |
| --- | --- | ---: | --- |
| REQ-TW-136 | validation criterion / system release requirement | 5/5 | Can remain approved; no wording change required. |
| REQ-TW-143 | delivery and configuration-control constraint | 5/5 | Can remain approved; its one-repair cap blocks unapproved additional work. |
| REQ-TW-144 | non-compensable validation-gate requirement | 5/5 | Can remain approved; repository-only fixtures are already prohibited. |

## Structured finding

```yaml
finding_id: REQ-FIND-TW-2026-08-24-V060-REAL-PRODUCT-DEPTH-001
requirement_id: REQ-TW-136,REQ-TW-144
requirement_type: validation_criterion
quality_score: 5
severity: block
failed_checks:
  - validation_method_not_representative
issue: The executed method built a fixed eight-record disposable graph and constant five-link task scores instead of measuring an actual source-derived product lifecycle census.
recommended_action: add_vv
verification_concern: The 40/40 result is self-constructed and does not prove recovery of the authorized products' actual lifecycle state.
validation_concern: The named owner rejected the exact result as too synthetic and shallow.
traceability_impact: VAL-TW-042 remains failed; no release or targeted-review authority follows.
human_approval_required: false
```

## Corrected validation-method boundary

Without changing the approved requirement meaning, a corrected trial must:

- derive a deterministic preregistered census of actual lifecycle IDs and
  direct relationships from every authorized source listed for each product;
- preserve source file, byte/digest provenance, actual record text, actual IDs,
  and relationship evidence rather than replacing them with generic titles;
- operate source registration, capture, graph, change impact, staleness,
  strict-HTML drill-down, and acceptance-pack generation against that imported
  product state;
- compute required and recovered counts from the source-derived census rather
  than fixed constants, expose unresolved items, and enforce the existing 95%
  and zero-false-promotion thresholds independently per product;
- retain the authorized Air Router non-code artifact through source, impact,
  evidence, and acceptance routes; and
- leave both consumer repositories byte- and status-unchanged.

If satisfying this boundary requires changing packaged Core behavior rather
than the validation harness and evidence only, stop for a new scope decision.

## Set-level and traceability result

The need, requirements, validation question, owner, source identity, and
verification thresholds remain coherent. The only gap was the rejected
validation method plus the exhausted normal repair/profile authority. Hannes
Zietsman explicitly approved `CHG-TW-2026-08-24-001` and `EXC-TW-018`; they now
authorize only the bounded correction defined in those records.

## Next gate

Run `/tw-authority-gate` against the approved change and exception, then create
profile revision 2 and correction-specific RED evidence before `/tw-work`.
