---
record_type: traceweaver_acceptance_result
schema_version: 1
result_id: SAR-FIXTURE-NFR-PRESENT-MISSING-EVIDENCE
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
  closure_claim: Fixture incorrectly marks NFR evidence present without evidence.
  functional_acceptance_evidence:
    status: present
    evidence:
      - scripts/traceweaver-smoke-acceptance-results
  non_functional_acceptance_evidence:
    status: present
  tested_baseline_or_artifact_version: fixture-invalid
  observed_result: NFR evidence is marked present but no evidence is linked.
  final_disposition: pass
  evidence_location:
    - fixtures/acceptance-results/nfr-present-missing-evidence.md
  next_trigger: Add NFR evidence.
---

<!-- TRACEWEAVER: file-role=acceptance-result-nfr-present-missing-evidence-fixture; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: verifies=VER-TW-063; req=REQ-TW-066; trace=TRACE-TW-050 -->

# Invalid Acceptance Result Fixture
