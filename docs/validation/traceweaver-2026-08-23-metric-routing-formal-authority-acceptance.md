---
record_type: traceweaver_formal_authority_acceptance
schema_version: 2
acceptance_id: TW-FORMAL-AUTHORITY-ACCEPTANCE-2026-08-23-METRIC-ROUTING-001
title: Metric-Routing Formal Authority Acceptance
owner: Oxiom Systems
date: "2026-08-23"
status: formally_accepted_for_controlled_master_root_promotion
authority_source: explicit owner approval in the active Codex session
accepted_envelope_id: TW-METRIC-ROUTING-ENVELOPE-2026-08-22-001
accepted_source_document_set_sha256: 879962081cb01ba9846b4f81ecb74de6892423cd5ba5817daf32558c4ed66409
accepted_requirements: [REQ-TW-124, REQ-TW-125, REQ-TW-126, REQ-TW-127, REQ-TW-128, REQ-TW-129]
accepted_decision: DEC-TW-010
accepted_interface_specification: IF-TW-006
accepted_risks: [RISK-TW-012, RISK-TW-013]
accepted_evidence_chain: [ART-TW-080, TRACE-TW-073, ATP-TW-050, RESULT-TW-050, VER-TW-093, VAL-TW-041]
starting_release: traceweaver-core--v0.5.0
starting_ref: 3a1f3c56b093e61b88e9f6282637878e8ebbf163
prior_baseline_hash_sha256: 42ceb76c7ee5d794f1a9e426e24ddfff3913a7f363b9ad33d57c9c929df0c1d5
promoted_baseline_hash_sha256: aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5
change_id: CHG-TW-2026-08-22-003
implementation_authority: held_pending_separately_accepted_consolidated_plan_and_vv_definition
provider_replay_authority: none
publication_authority: none
active_cutover_authority: none
---

<!-- TRACEWEAVER: file-role=formal-authority-acceptance-receipt; req=REQ-TW-124,REQ-TW-125,REQ-TW-126,REQ-TW-127,REQ-TW-128,REQ-TW-129; trace=TRACE-TW-073; ver=VER-TW-093; val=VAL-TW-041 -->

# Metric-Routing Formal Authority Acceptance

## Owner Decision

Oxiom Systems recorded the following decision in the active session on
2026-08-23:

> Oxiom Systems approves TW-METRIC-ROUTING-ENVELOPE-2026-08-22-001 at
> document-set SHA-256
> 879962081cb01ba9846b4f81ecb74de6892423cd5ba5817daf32558c4ed66409
> and authorizes its controlled master-root promotion.

This decision accepts the complete envelope as one authority unit. It accepts
`REQ-TW-124..129`, `DEC-TW-010`, `IF-TW-006`, `RISK-TW-012..013`, and
`ART-TW-080 / TRACE-TW-073 / ATP-TW-050 / RESULT-TW-050 / VER-TW-093 /
VAL-TW-041` without changing their accepted wording, thresholds, or held
boundaries.

## Accepted Source Snapshot

The accepted document-set digest is reproduced over the two pre-promotion
source files in lexical path order. For each file, the digest input is the
UTF-8 path, one NUL byte, the exact file bytes, and one NUL byte:

| Source file | SHA-256 |
| --- | --- |
| `docs/traceability/metric-routing.md` | `aef6f037a4db0de646c0709cfeaa421751a5b3083e2651a1c3345bbe0e2a270d` |
| `docs/validation/traceweaver-2026-08-22-metric-routing-requirements-authority-envelope.md` | `658477ec0dd95e720c3fe61c733884987d4e719ed51e1f3b73d7f94382ca105a` |

The resulting document-set SHA-256 is
`879962081cb01ba9846b4f81ecb74de6892423cd5ba5817daf32558c4ed66409`.
Later status, baseline-hash, review, or promotion bookkeeping must retain this
digest as the identity of the owner-approved source snapshot; it must not
rewrite the approval as applying to different source bytes.

## Authorized Promotion Transaction

This receipt authorizes one consolidated authority-baseline transaction:

- promote the accepted requirement, decision, interface, risk, claim-control,
  V&V, and trace links into `requirements.md`, root
  `traceability-matrix.md`, and `.traceweaver/intent-contract.yml`;
- record this receipt and `CHG-TW-2026-08-22-003` as the approval and change
  evidence;
- compute one new canonical requirements baseline hash and bind it consistently
  across the controlling roots and bounded current snapshot;
- pin an exact promoted content snapshot for one scoped document review; and
- after that review is clean, allow one consolidated `/tw-plan` against the
  promoted authority.

The promotion may update the two accepted source documents only for mechanical
approval, baseline, and review status. It may not change the accepted semantic
contract without a new owner decision bound to a new source digest.

## Preserved Holds

This acceptance does not authorize:

- metric collector, schema, compiler, validator, harness, workflow-profile,
  receipt, installer, or runtime implementation before the promoted baseline
  passes its scoped document review;
- provider replay, host instrumentation activation, metric collection, or any
  external side effect before a later exact bounded `REQ-TW-120`
  authorization names provider/host, cells, corpus, sample and retry ceilings,
  spend/time bounds, and evidence paths;
- sufficiency, material token-savings, quality-equivalence, latency,
  qualification, route-family, or global claims before current
  `RESULT-TW-050 / VER-TW-093 / VAL-TW-041` pass and `EXC-TW-016` is reduced
  or closed for the exact cells;
- active routing, descendant enforcement, or cutover; or
- commit, push, pull request, release, or other publication action.

TraceWeaver Core `0.5.0` and its evidence remain the immutable predecessor.
This authority delta does not amend the released tag or retroactively extend
`VER-TW-092 / VAL-TW-040` to metric qualification.

## Next Gate

The controlled master-root promotion and scoped review are clean under
`TW-DOC-REVIEW-2026-08-23-METRIC-ROUTING-PROMOTED-BASELINE-001`. Draft one
consolidated `/tw-plan` for `ART-TW-080 / ATP-TW-050`. Implementation remains
held until that plan and its V&V definition pass their later gates.
