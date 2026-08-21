---
record_type: candidate_validation_definition
date: "2026-08-21"
scope: "static review candidate only"
requirements: [REQ-TW-088]
validation: [VAL-TW-034, VAL-TW-037]
status: held_for_independent_owner_observation
---

# 0.4.0 PR2 Candidate Validation Boundary

The deterministic smokes establish implementation prerequisites only. They do
not substitute for independent owner observation of a representative accepted
change cycle (VAL-TW-034), nor for the held Vestro/Air Router semantic-HTML
comparison and cutover/rollback validation (VAL-TW-037).

The next validation trigger is a separately authorized, independently observed
scope after scoped review. Until then, runtime, active-host, CI attestation,
canonical-HTML migration, consumer cutover, publication, release, deployment,
and Vestro/Air Router claims remain held.
