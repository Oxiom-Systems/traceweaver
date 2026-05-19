---
record_type: traceweaver_acceptance_result
schema_version: 1
result_id: SAR-FIXTURE-HELD
requirement_id: REQ-TW-066
need_ids:
  - NEED-TW-005
linked_trace_id: TRACE-TW-050
linked_atp_id: ATP-TW-034
linked_result_id: RESULT-TW-034
linked_verification_id: VER-TW-063
linked_validation_id: VAL-TW-012
owner: Oxiom Systems
date: "2026-05-19"
status: held
structured_acceptance:
  closure_claim: Fixture requirement closure is held.
  functional_acceptance_evidence:
    status: held
    evidence:
      - fixtures/acceptance-results/held-valid.md
  non_functional_acceptance_evidence:
    status: held
    applicability: applicable
    evidence:
      - fixtures/acceptance-results/held-valid.md
  tested_baseline_or_artifact_version: fixture-held
  observed_result: Acceptance evidence is intentionally held.
  final_disposition: held
  evidence_location:
    - fixtures/acceptance-results/held-valid.md
  next_trigger: Evidence-producing run is available.
  held_validation:
    required: true
    owner: Oxiom Systems
    reason: Fixture represents a held validation boundary.
    evidence_location:
      - fixtures/acceptance-results/held-valid.md
    closure_boundary: No pass closure is allowed.
    next_trigger: Evidence-producing run is available.
---

<!-- TRACEWEAVER: file-role=acceptance-result-held-fixture; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: verifies=VER-TW-063; req=REQ-TW-066; trace=TRACE-TW-050 -->

# Valid Held Acceptance Result Fixture

This fixture proves that a held result can be valid when the held-validation
record is complete.
