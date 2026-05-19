---
record_type: traceweaver_acceptance_result
schema_version: 1
result_id: SAR-FIXTURE-PASS
requirement_id: REQ-TW-066
need_ids:
  - NEED-TW-001
linked_trace_id: TRACE-TW-050
linked_atp_id: ATP-TW-034
linked_result_id: RESULT-TW-034
linked_verification_id: VER-TW-063
linked_validation_id: VAL-TW-012
owner: Oxiom Systems
date: "2026-05-19"
status: pass
structured_acceptance:
  closure_claim: Fixture requirement closure is accepted.
  functional_acceptance_evidence:
    status: present
    evidence:
      - scripts/traceweaver-smoke-acceptance-results
  non_functional_acceptance_evidence:
    status: present
    applicability: applicable
    evidence:
      - traceability-matrix.md
  tested_baseline_or_artifact_version: fixture-pass
  observed_result: Functional and non-functional evidence are present.
  final_disposition: pass
  evidence_location:
    - fixtures/acceptance-results/pass-valid.md
  next_trigger: Schema revision or new closure claim.
---

<!-- TRACEWEAVER: file-role=acceptance-result-pass-fixture; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: verifies=VER-TW-063; req=REQ-TW-066; trace=TRACE-TW-050 -->

# Valid Passing Acceptance Result Fixture

This fixture proves that a fully populated `pass` disposition can satisfy the
structured acceptance checker.
