---
id: VAL-TW-040
status: defined_preimplementation_owner_proxy_release_gate
date: 2026-08-22
owner: Oxiom Systems
work_item: TW-PLAN-2026-08-22-V050-MODEL-GOVERNANCE-001
need: NEED-TW-013
requirements: REQ-TW-109..123
baseline_hash_sha256: dae781e0cc1793798378f5af81a99503581e83dfbc9ce38876c465f4521f6300
---

# VAL-TW-040 — 0.5.0 Shadow Model-Governance Validation Definition

## Validation question

Can an independent maintainer install TraceWeaver Core 0.5.0, inspect and
understand its shadow model/context map, obtain deterministic route
recommendations or exact honest holds for representative B0--B3 work, and
confirm that v1 behavior remains authoritative without being led to believe
that active routing, served-model attestation, token savings/sufficiency, or
quality equivalence has been proven?

## Rater And Independence

- Decision owner: Oxiom Systems.
- Rater: an owner-appointed human maintainer or independent review agent that
  did not implement the compiler or author the source-oracle candidate used in
  the validation run. Automated fixture assertions alone are not a rater.
- The result records rater identity, relationship, tested commit, installed
  package/map/profile/SEC digests, date, evidence locator, and disposition.
- The implementation agent may prepare commands and fixtures but may not
  self-accept VAL-TW-040.

## Representative Scenarios

At one immutable candidate commit, the rater uses an isolated install and runs:

1. B0: inspect `tw-graph` or `tw-setup` mapping and explain the four independent
   axes and the unqualified/structurally-eligible boundary.
2. B1: compile a bounded authority/test route and identify required-source,
   observation, content-eligibility, and efficiency-eligibility fields.
3. B2: compile a review/diagnosis route whose default class fits and inspect
   the protected receipt and declared descendant family.
4. B3: compile `tw-plan`/`tw-work` near a cap and observe deterministic promote,
   locator, shard, or held behavior without risk/model downgrade.
5. Negative: omit a required source, tamper with a map/receipt digest, and use
   an escaping or stale locator; each candidate must hold precisely.
6. Invariance: compare the existing v1 SEC/native-child route before and after
   installing/using the shadow surface; model, effort, evidence, terminal, and
   publication fields must remain unchanged.
7. Claim boundary: inspect README/release text and identify that active cutover,
   observed enforcement, served model, savings, sufficiency, and quality
   equivalence remain held.
8. Complete oracle review: disposition every real release route/category cell,
   not only the representative scenarios, and reject empty, all-excluded,
   self-reviewed, unexplained, uncertain, or open cells.

## Pass Criteria

VAL-TW-040 passes only when the independent rater records all of the following:

- the map and route decisions are understandable without repository-wide
  inference;
- all four axes and B0--B3 experimental status are correctly understood;
- the selected class is the lowest structurally eligible class at or above the
  authorized route floor, including when multiple classes could fit;
- positive scenarios return deterministic recommendations and negative cases
  return their exact held reason;
- installed map/profile/SEC digests match the candidate release record;
- v1 behavior is unchanged;
- no held claim is presented as proven; and
- every real release route/category cell has an independent satisfied,
  authority-excluded-with-rationale, or held disposition; and
- the rater explicitly accepts the shadow-governance surface as useful for
  0.5.0 within this bounded claim set.

Any ambiguity, unexplained source exclusion, non-determinism, changed v1 field,
or inferred active/savings/sufficiency claim fails or holds release. One cell
cannot compensate for another.

## Explicit Non-Claims

This proxy validation does not validate live provider replay, active routing,
runtime descendant interception, served-model identity, actual usage, material
savings, token sufficiency, quality equivalence, production deployment, or the
deferred product-lifecycle/semantic-HTML program.

## Result Record

The result is written to
`docs/validation/traceweaver-2026-08-22-v050-model-governance-validation-result.md`
after implementation and review. Until an independent owner/rater signs that
record against the exact candidate, VAL-TW-040 remains open and release held.
