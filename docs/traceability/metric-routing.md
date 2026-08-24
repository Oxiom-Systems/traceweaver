# Traceability: Metric Routing

## System Context

System: TraceWeaver Core

Subsystem: shadow model/context governance

Scope: trusted metric observation and per-route qualification after 0.5.0

Owner: Oxiom Systems

Mode: Standard

Status: Draft

Last updated: 2026-08-22

Baseline: `traceweaver-core--v0.5.0` at
`3a1f3c56b093e61b88e9f6282637878e8ebbf163`

Success signal: an owner can inspect independently signed, execution-bound,
matched, adequately powered, independently quality-scored evidence for each
qualified route cell and see why its budget is sufficient.

Failure signal: a route becomes qualified, or a savings/quality claim appears,
from estimates, pooled/partial evidence, missing sources, model drift, hidden
overflow, or inherited results.

## Stakeholder Need

| ID | Need | Stakeholder / Source | Success signal | Status |
| --- | --- | --- | --- | --- |
| `NEED-TW-013` | Contributors need a deterministic, token-proportionate, context-complete routing map and receipt contract with honest holds when completeness or sufficiency cannot be demonstrated. | Oxiom Systems; released `INTENT-TW-011` model-governance authority; 2026-08-22 metric-routing direction. | Actual per-route observations can promote exact cells without weakening quality or overclaiming coverage. | Approved need; new metric allocation Proposed |

## Requirements

The authoritative proposed text and requirements-quality review are in
`docs/validation/traceweaver-2026-08-22-metric-routing-requirements-authority-envelope.md`.

| ID | Type | Requirement summary | Source | Verification | Validation | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-TW-124` | Operational / evidence integrity | Require complete, content-free observations and independently signed, execution-bound measurement attestations; estimated, unsigned, self-attested, replayed, or incomplete values cannot qualify. | `NEED-TW-013`; `REQ-TW-060/113/118/119/120` | `ATP-TW-050` schema/trust/signature/provenance/privacy cases | `VAL-TW-041` evidence usability | Oxiom Systems | Proposed |
| `REQ-TW-125` | System / evaluation control | Freeze exact matched cells, policy, corpus, power/confidence, sample/stopping rules, thresholds, exclusions, blinding/agreement, and reset rules before replay. | `NEED-TW-013`; `REQ-TW-114/119/120/123` | `ATP-TW-050` policy/pairing/power cases | `VAL-TW-041` comparison credibility | Oxiom Systems | Proposed |
| `REQ-TW-126` | Quality / validation control | Require all hard invariants, absolute quality floors, blinded dual-evaluator agreement, and one-sided paired non-inferiority; efficiency cannot compensate for failure. | `NEED-TW-013`; `REQ-TW-116/117/122/123` | `ATP-TW-050` seeded-regression/scoring/agreement/confidence cases | `VAL-TW-041` cell-specific quality acceptance | Oxiom Systems | Proposed |
| `REQ-TW-127` | Performance / claim control | Compute per-cell token/context/latency results and uncertainty only from valid signed matched pairs; pilot, underpowered, or partial data cannot support material or broad claims. | `NEED-TW-013`; `REQ-TW-113/119/122` | `ATP-TW-050` accounting/attestation/confidence/coverage cases | `VAL-TW-041` cell-specific materiality acceptance | Oxiom Systems | Proposed |
| `REQ-TW-128` | Functional / operational | Prove cell sufficiency from successful positive scenarios, with declared delivery cost attributed; safe negative holds never count as sufficiency. | `NEED-TW-013`; `REQ-TW-114/115/117` | `ATP-TW-050` positive/negative separation and sufficiency/overflow cases | `VAL-TW-041` cell-specific intended-use acceptance | Oxiom Systems | Proposed |
| `REQ-TW-129` | State / configuration control | Promote, expire, and reset qualification per exact current, verified, cell-validated identity; never inherit, generalize, or activate qualification. | `NEED-TW-013`; `REQ-TW-112/114/118/119/122` | `ATP-TW-050` state/reset/validation/cutover cases | `VAL-TW-041` cell-specific decision trail | Oxiom Systems | Proposed |

## Design And Interface Candidates

| ID | Candidate | Linked requirements | Status |
| --- | --- | --- | --- |
| `DEC-TW-010` | Measurement-first matched pairs; three-pair pilot only; preregistered one-sided alpha/power/confidence with at least ten positive pairs for qualification; hard and absolute quality floors; blinded dual scoring and agreement; confidence-bounded 20% token and latency rules; exact-cell validation; active cutover separate. | `REQ-TW-124..129` | Proposed; owner acceptance required |
| `IF-TW-006` | Allocated interface specification for canonical observation/qualification envelopes and independently signed execution-bound measurement attestation. It is not separate authority. | `REQ-TW-124..129` | Proposed specification; owner acceptance required |

## Risk Controls

| ID | Risk | Owner | Control | Authority link | Evidence | Approval status |
| --- | --- | --- | --- | --- | --- | --- |
| `RISK-TW-012` | Biased, pooled, incomplete, estimated, underpowered, or unattested evidence creates false qualification. | Oxiom Systems | Frozen policy/corpus, exact cells, matched pairs, power/confidence/stopping rules, blinded dual scoring, absolute floors, no inheritance, deterministic reset. | `REQ-TW-125..129` | `ATP-TW-050 / VER-TW-093 / VAL-TW-041` | Proposed |
| `RISK-TW-013` | Telemetry leaks task content or instrumentation fabricates, changes, or double-counts measurement. | Oxiom Systems | Content-free schema, qualified signed collector, execution binding, separated harness overhead, exact accounting, privacy/tamper/replay negatives. | `REQ-TW-124/127` | `ATP-TW-050 / VER-TW-093` | Proposed |

A bare risk ID is not implementation authority.

## Traceability Matrix

| Trace ID | Owner | Need | Requirements | Authority | Design / Interface | Risk | Artifact | Verification | Validation | Status | Gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `TRACE-TW-073` | Oxiom Systems | `NEED-TW-013` | `REQ-TW-124..129` | Pending owner acceptance, master-root promotion, new baseline hash, and clean scoped document review | `DEC-TW-010 / IF-TW-006` | `RISK-TW-012..013` | `ART-TW-080` | `ATP-TW-050 / RESULT-TW-050 / VER-TW-093` | Per-cell `VAL-TW-041` | Draft | Implementation, replay, claims, and release allocation held |

## Document Chain

| Requirements source | Plan | ATP | Result | Status |
| --- | --- | --- | --- | --- |
| `docs/validation/traceweaver-2026-08-22-metric-routing-requirements-authority-envelope.md` | One consolidated plan after owner acceptance, master-root promotion, new baseline hash, and clean scoped document review | `ATP-TW-050` | `RESULT-TW-050` | Draft / held before promoted baseline |

## Planned ATP-TW-050 Coverage

| Case group | Requirements | Expected evidence |
| --- | --- | --- |
| Observation schema, trust root, signature/execution binding, provenance, canonical identity, tamper/replay, and content-leak negatives | `REQ-TW-124` | Invalid or unsafe observations hold qualification. |
| Frozen policy, exact cell, pair invariance, pilot separation, corpus, power/confidence, stopping, exclusions, and cross-policy negatives | `REQ-TW-125` | Only preregistered, adequately powered comparable pairs enter qualification. |
| Hard authority/source/evidence/terminal regressions, absolute floors, blinded dual scoring, agreement, and non-inferiority bounds | `REQ-TW-126` | Any hard, absolute-floor, agreement, or below-margin result fails the candidate. |
| Whole-workflow token/context/latency arithmetic, attestation, confidence/materiality boundaries, pilot/underpowered holds, and partial coverage | `REQ-TW-127` | Per-cell actual results include uncertainty; broad claims remain held. |
| Successful positive scenarios, separate safe negative controls, declared delivery, promotion, retry, and prohibited overflow | `REQ-TW-128` | Safe holds verify controls but never prove sufficiency. |
| Promotion, verification, cell validation, inheritance, alias, expiry, drift/reset, coverage, and cutover | `REQ-TW-129` | Only the exact current verified and validated cell transitions; activation remains held. |

## Result And Verification Records

| ID | Scope | Tested ref | State |
| --- | --- | --- | --- |
| `RESULT-TW-050` | Raw matched observations and qualification results for the approved cells/policy/corpus. | Not assigned | Pending |
| `VER-TW-093` | Same-candidate verification of `REQ-TW-124..129` and `ATP-TW-050`. | Not assigned | Pending |

## Validation Path

| ID | Need | Scenario | Stakeholder | Acceptance signal | Evidence | Status | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `VAL-TW-041` | `NEED-TW-013` | First inspect representative B0--B3 results to validate the mechanism; then accept or reject every proposed qualified cell through an owner-approved cell-specific review or proxy rule. | Oxiom Systems or an owner-appointed independent representative/proxy | Mechanism review may approve usability only. Each qualified cell has a current acceptance record confirming its measured-sufficient allocation preserves intent, authority, evidence, and outcome quality. | Future validation definition plus cell-indexed results bound to exact candidate, policy, corpus, and cell. | Planned | Oxiom Systems |

## Current Claims

| Claim | State | Reason |
| --- | --- | --- |
| Deterministic 0.5.0 shadow map and structural eligibility | Released / current | `VER-TW-092 / VAL-TW-040` on exact 0.5.0 tag. |
| Actual per-route token/context/latency result | Held | No `RESULT-TW-050`. |
| Observed budget sufficiency | Held | No approved policy or matched host evidence. |
| Quality equivalence | Held | No independent matched scoring. |
| Material token savings | Held | No adequately powered, confidence-bounded route cell meeting `DEC-TW-010`. |
| Qualified route cell | Held | `REQ-TW-124..129` are not approved or implemented. |
| Active routing/enforcement/cutover | Held | Separate future owner decision and runtime/rollback evidence required. |

## Human Decisions Required

| ID | Question | Recommendation | Status |
| --- | --- | --- | --- |
| `HD-MR-001` | Accept the exact authority delta and methodology, then promote it into the three master authority roots with a new baseline hash and one scoped document review? | Approve or amend once; planning starts only after the promoted baseline passes. | Open |
| `HD-MR-002` | Which release receives the verified implementation? | Defer the release number until plan or candidate review; do not alter 0.5.0. | Open / non-blocking to authority review |
| `HD-MR-003` | After deterministic harness verification, which exact provider/host, cells, corpus, sample/retry ceilings, external effects, spend/time bounds, and evidence paths may run? | Decide once from the approved plan as the separate bounded `REQ-TW-120` replay authorization. | Held until plan and harness review |

## Change Impact

The draft documents do not change the immutable released tag, package, runtime,
map, profile, SEC, receipts, installer, or claims. They are nevertheless an
authority and traceability delta classified `impact_reviewed`, not `no_impact`.
They cannot become controlling authority until promoted into `requirements.md`,
the root matrix, and the Intent Contract with a new canonical baseline hash and
a clean scoped document review. Future implementation will affect `REQ-TW-060`,
`REQ-TW-113..120`, `REQ-TW-122..123`, the model-context package, verification,
validation, risks, and release gates and must be planned against a new exact
candidate baseline. Provider replay, quantitative claims, publication, and
active cutover remain separately held.
