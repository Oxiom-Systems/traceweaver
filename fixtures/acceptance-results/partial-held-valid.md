---
record_type: traceweaver_acceptance_result
schema_version: 1
result_id: SAR-FIXTURE-PARTIAL
requirement_id: REQ-TW-066
need_ids:
  - NEED-TW-001
  - NEED-TW-005
linked_trace_id: TRACE-TW-050
linked_atp_id: ATP-TW-034
linked_result_id: RESULT-TW-034
linked_verification_id: VER-TW-063
linked_validation_id: VAL-TW-012
owner: Oxiom Systems
date: "2026-05-19"
status: partial
structured_acceptance:
  closure_claim: Fixture requirement closure is partially accepted.
  functional_acceptance_evidence:
    status: present
    evidence:
      - scripts/traceweaver-smoke-acceptance-results
  non_functional_acceptance_evidence:
    status: held
    applicability: applicable
    evidence:
      - fixtures/acceptance-results/partial-held-valid.md
  tested_baseline_or_artifact_version: fixture-partial
  observed_result: Functional evidence exists; non-functional evidence remains held.
  final_disposition: partial
  evidence_location:
    - fixtures/acceptance-results/partial-held-valid.md
  next_trigger: NFR evidence becomes available.
  held_validation:
    required: true
    owner: Oxiom Systems
    reason: Non-functional evidence is outside the fixture scope.
    evidence_location:
      - fixtures/acceptance-results/partial-held-valid.md
    closure_boundary: Full closure remains held until NFR evidence is reviewed.
    next_trigger: NFR evidence review.
---

<!-- TRACEWEAVER: file-role=acceptance-result-partial-held-fixture; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: verifies=VER-TW-063; req=REQ-TW-066; trace=TRACE-TW-050 -->

# Valid Partial Acceptance Result Fixture

This fixture proves that a partial result with a complete held-validation record
is parseable and allowed as a held boundary.
