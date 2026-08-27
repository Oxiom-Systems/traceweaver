---
id: RESULT-TW-051-TERMINAL-RELEASE-TRUTH-RED-001
status: passed_expected_failure
date: 2026-08-26
change: CHG-TW-2026-08-24-002
exception: EXC-TW-019
requirements: REQ-TW-130, REQ-TW-143, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
workflow_profile_revision: 3
workflow_profile_hash: sha256:4216516563801166003354286256243b486deb4bb7a9dc8830e54f915a0a21a0
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-terminal-release-truth-red-evidence; req=REQ-TW-130,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Terminal release-truth RED evidence

## Result

The unchanged correction-specific smoke failed as expected before behavior
mutation. This is valid RED for both retained reviewer findings.

| Field | Value |
| --- | --- |
| Command | `scripts/traceweaver-smoke-v060-release-integrity` |
| Exit | `1` |
| Smoke SHA-256 | `eb851691af170babe8a1afdba05f6a38f981ec534cebf7fd8dc176bfcf89f9cb` |
| Release checker SHA-256 | `659ed6eeca18dda393fc04a211b8fe022a5afb3fdedd54a55b81221d065ae6af` |
| Oracle refresher SHA-256 | `6d4f1e1c3d9ceee49a9b8f8ba1b7e74f75087505a940ce603e55d48c289e3ba4` |
| Reviewer source SHA-256 | `9c7fd690013fd6403a5c430830b1daefcd4624bf6497cb09d0aa6bd1f7f06a1a` |

## Observed failures

1. Both release-control scripts omit the accepted exact result, exact raw
   observations, current V&V capsule, exact rollback, correction authority and
   RED evidence, focused depth smoke, targeted review, and terminal control
   records. They continue to contain the rejected fixed-route result,
   baselines, and raw observations. The smoke emitted explicit
   `missing_current_lifecycle_ref` and `retains_rejected_lifecycle_ref` failures
   for both scripts.
2. The synthetic `accepted` V&V capsule passed the production v3 path, while a
   copy of the real current capsule, rebound only to the fixture's exact
   functional/result digests, was rejected. The smoke emitted
   `real_vv_capsule_rejected_while_synthetic_passed`.

The first run initially exposed a stale matrix phrase before reaching the
target checks. That authority-carrier wording was restored without changing
behavior; the rerun reached and reproduced both intended failures.

## Expected GREEN

The same smoke must pass unchanged after the repair. Both scripts must use the
same exact lifecycle source contract with no rejected route, and the production
v3 checker must accept the real clean, exact-product-bound capsule state while
retaining all publication/runtime/cutover holds.

## Next gate

Run the scoped baseline/document review and terminal authority gate. Do not
mutate release/oracle behavior unless the gate records Proceed.
