---
record_type: traceweaver_validation_definition
schema_version: 1
record_id: VAL-TW-038-2026-08-21-001
status: candidate_definition_owner_observation_held
date: "2026-08-21"
owner: Oxiom Systems
requirements: [REQ-TW-092]
trace_id: TRACE-TW-070
artifact_id: ART-TW-077
acceptance_test_id: ATP-TW-047
result_id: RESULT-TW-047
verification_id: VER-TW-090
validation_id: VAL-TW-038
accepted_review_identity: null
---

# PR1 Skill Execution Contract Validation Definition

## Question

Can an owner identify a callable skill's authority boundary, packaged inputs,
explicit Terra request, allowed writes, next wrapper, and held served-model
state from the installed SEC receipt without repository-wide rediscovery or
treating the receipt as authority?

## Method and evidence boundary

The required future observation is an installed-host walkthrough of one alias
(`lfg`) and one native-child-capable wrapper. It must confirm the receipt’s
static-definition hash differs from its invocation receipt, the requested and
served model fields remain distinct, and no independently unattested child
output is used as formal evidence.

This record defines validation only. No owner observation, accepted review,
runtime proof, independent attester custody, served-model attestation,
publication, release, or deploy outcome exists.
