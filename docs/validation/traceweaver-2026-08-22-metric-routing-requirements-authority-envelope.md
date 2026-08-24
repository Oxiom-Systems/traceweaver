---
id: TW-METRIC-ROUTING-ENVELOPE-2026-08-22-001
status: proposed_single_owner_acceptance_required
date: 2026-08-22
owner: Oxiom Systems
released_baseline: traceweaver-core--v0.5.0
released_baseline_sha: 3a1f3c56b093e61b88e9f6282637878e8ebbf163
requirements_baseline_id: REQ-BASELINE-2026-04-30-001
requirements_baseline_hash_sha256: 42ceb76c7ee5d794f1a9e426e24ddfff3913a7f363b9ad33d57c9c929df0c1d5
requirements_review_id: TW-REQ-REVIEW-2026-08-22-METRIC-ROUTING-001
authority_gate_id: TW-AUTH-GATE-2026-08-22-METRIC-ROUTING-001
change_candidate_id: CHG-TW-2026-08-22-003
proposed_requirements: REQ-TW-124..129
proposed_evidence_chain: ART-TW-080/TRACE-TW-073/ATP-TW-050/RESULT-TW-050/VER-TW-093/VAL-TW-041
release_allocation: unassigned_post_0_5_0
implementation_authority: held_pending_owner_acceptance_master_root_promotion_new_baseline_and_clean_scoped_review
active_cutover: held_separate_future_decision
---

<!-- TRACEWEAVER: file-role=metric-routing-requirements-authority-envelope; req=REQ-TW-124,REQ-TW-129; trace=TRACE-TW-073; ver=VER-TW-093; val=VAL-TW-041 -->

# Metric-Routing Requirements And Authority Envelope

## Outcome

This envelope is the one consolidated requirements and authority decision for
the metric-routing work that follows TraceWeaver Core 0.5.0. It does not reopen
the released 0.5.0 candidate and does not start implementation.

The released starting point is exact:

- release: `traceweaver-core--v0.5.0`;
- commit: `3a1f3c56b093e61b88e9f6282637878e8ebbf163`;
- declared routes: 87;
- complete source-oracle dispositions: 522 cells;
- current routing authority: v1;
- current metric result: structural eligibility only; and
- current quantitative result: no route is qualified for token sufficiency,
  material token savings, quality equivalence, or active cutover.

The next work must measure actual per-route executions, compare matched control
and candidate runs, judge quality independently, determine observed budget and
overflow sufficiency, and promote only exact evidence-backed route cells. It
must not infer results from the 0.5.0 structural map.

## Owner Source And Scope

Oxiom Systems directed the agent to merge PR #60 when authorized and then begin
the metric-routing requirements/authority envelope. Earlier owner direction
also requires the workflow to converge through one requirements/authority
decision, one plan/document review, implementation, one consolidated core
review and repair pass, and controlled publication instead of many narrow
review cycles.

This envelope therefore combines measurement, comparison, quality, sufficiency,
overflow, qualification, and claim control into one requirement set and one
future implementation plan.

### In scope

- trusted per-invocation token, context, latency, outcome, retry, child, shard,
  and overflow observations;
- exact skill/model-route evaluation cells;
- preregistered matched control/candidate comparisons;
- independent quality-equivalence assessment;
- observed budget and overflow sufficiency;
- route-cell qualification, expiry, reset, and coverage reporting; and
- honest per-route results and held claims.

### Out of scope

- changing the released 0.5.0 tag or release assets;
- changing the owner-approved model-role or risk-effort policy;
- cheaper-model selection or model downgrade;
- active routing, active descendant enforcement, or active cutover;
- prompt, tool-result, secret, or repository-content capture in telemetry;
- global savings or quality claims from partial route coverage; and
- assigning a follow-on release number before owner approval.

## Reused Controlling Authority

This shadow-evidence work extends, rather than replaces, the released chain:

- `INTENT-TW-011` and `NEED-TW-013`;
- `REQ-TW-109..123`, especially `REQ-TW-113..120`, `REQ-TW-122`, and
  `REQ-TW-123`;
- `REQ-TW-060` for independently attested served-model evidence;
- `DEC-TW-009` and `RISK-TW-011`; and
- `ART-TW-079 / TRACE-TW-072 / ATP-TW-049 / RESULT-TW-049 / VER-TW-092 /
  VAL-TW-040`.

The deferred `INTENT-TW-009..010`, `NEED-TW-009..012`, `REQ-TW-093..108`,
`DEC-TW-004..008`, `IF-TW-001..005`, `RISK-TW-001..010`, and their
`ART-TW-078` evidence chain remain reserved and are not reused.

## Proposed Requirements

All six requirements are proposed as one approval unit. Their implementation
may be planned together only after one owner acceptance, completed master-root
promotion, a new canonical baseline identity, and one clean scoped document
review all pass.

| ID | Type | Atomic obligation | Verification method | Validation question | Status |
| --- | --- | --- | --- | --- | --- |
| `REQ-TW-124` | Operational / evidence integrity | Every execution used for qualification shall carry one canonical `IF-TW-006` observation plus an independently signed, execution-bound measurement attestation produced by a qualified collector outside the evaluated compiler and agent. The attestation shall bind provider/host request and response identities, served-model evidence, token/accounting fields, monotonic clock source, latency, execution topology, outcome, and overflow. Estimated, unsigned, self-attested, replayed, or incompletely bound values may be reported but shall not qualify a route. Counts, enums, digests, and repository-contained locators are allowed; prompt, tool-result, secret, and source-content bytes are prohibited. | Schema, collector trust, signature, execution binding, canonicalization, duplicate, replay, tamper, accounting, clock, missing-field, estimated/self-attested, and content-leak negative fixtures. | Can an owner establish what actually ran and what it cost without trusting the evaluated agent or exposing task content? | Proposed |
| `REQ-TW-125` | System / evaluation control | Before any replay used for qualification, TraceWeaver shall freeze a versioned matched-evaluation policy that binds exact route-cell identity, control and candidate definitions, scenario corpus, single-axis pairing invariants, pilot-versus-qualification use, power/confidence method, minimum and maximum valid-pair counts, stopping rule, admissible exclusions, absolute quality floors, non-inferiority margins, token-materiality threshold, latency limit, blinding/inter-rater rule, aggregation rule, expiry, and reset triggers. A changed policy shall create a new identity and shall not mix evidence with its predecessor. | Policy completeness, pre-registration, power/confidence, single-axis pair, pilot non-qualification, drift, post-hoc exclusion, cross-policy mixing, stopping, retry-limit, and reset fixtures. | Are comparisons fixed before results are visible, sufficiently powered for their claim, and attributable to the budget/context change rather than another changed axis? | Proposed |
| `REQ-TW-126` | Quality / validation control | A candidate shall pass quality equivalence only when every hard authority, source-completeness, evidence, safety, and terminal-correctness invariant passes; every scored candidate dimension meets the frozen absolute floor; and the preregistered one-sided paired non-inferiority bound meets the accepted margin. Judgment-bearing dimensions shall be scored blind by at least two independent evaluators and shall meet the frozen inter-rater agreement floor before use. A token or latency improvement shall never compensate for a hard-invariant, absolute-floor, agreement, or non-inferiority failure. | Seeded authority/source/evidence/terminal regressions, absolute-floor, blinded dual scoring, inter-rater, confidence/margin boundary, evaluator-independence, and compensation-prohibition fixtures. | Does the smaller allocation preserve both an acceptable absolute outcome and the judgment quality of its matched control? | Proposed |
| `REQ-TW-127` | Performance / claim control | TraceWeaver shall calculate whole-workflow input, output, cached-input, and total-token deltas plus monotonic latency deltas only from valid `REQ-TW-124`-attested matched pairs. It shall report absolute values, percentages, valid/invalid pair counts, exclusions, uncertainty intervals, and distribution summaries per exact route cell. A material-savings or acceptable-latency result shall require the preregistered `DEC-TW-010` confidence bound and threshold; partial coverage, pilot data, or underpowered cells shall not support a material, global, or route-family claim. | Arithmetic, cached-input, child/retry/shard aggregation, attestation, latency-clock, confidence/threshold boundary, pilot/underpowered hold, invalid-pair exclusion, per-cell isolation, and partial-coverage claim fixtures. | Are reported savings and latency outcomes actual, materially bounded with uncertainty, and limited to the exact routes measured? | Proposed |
| `REQ-TW-128` | Functional / operational | A packet-budget/delivery cell shall be marked observed-sufficient only when every required positive qualification scenario completes its intended task with valid attested measurement, quality equivalence, complete authority/source/evidence delivery, and no budget-class promotion or context/judgment hold. Locator, shard, or re-isolation behavior counts only when it is part of the preregistered cell strategy and its full cost is attributed. Negative held/error scenarios verify safe control behavior but shall never count toward sufficiency or the positive-scenario sample minimum. Prohibited truncation, deletion, downgrade, lossy compaction, and unbounded retry shall fail the cell. | Positive nominal/boundary completion, declared locator/shard/re-isolation, promotion, retry, negative safe-hold, prohibited-overflow, sample-separation, and cost-attribution fixtures. | Does the proposed cell complete representative intended work without treating a safe refusal or hidden promotion as evidence of sufficiency? | Proposed |
| `REQ-TW-129` | State / configuration control | Qualification shall be recorded per exact route, served-model and measurement attestation, risk effort, budget/delivery strategy, map, profile, SEC, source oracle, capability, tokenizer, evaluation policy, corpus, and cell-validation identity. Only a structurally eligible cell with current `REQ-TW-124..128` verification and cell-specific `VAL-TW-041` acceptance may transition to `qualified`; no parent, alias, sibling, aggregate, mechanism-only validation, or historical result may confer qualification. Expired or changed evidence shall deterministically return the cell to `structurally_eligible` when structural checks remain current or to `unqualified` otherwise. Qualification shall remain advisory until a separate owner-approved active-cutover gate passes. | Promotion, incomplete verification/validation, inheritance, alias, cross-cell, expiry, capability/tokenizer/profile/oracle/policy drift, downgrade-state, coverage, and cutover-boundary fixtures. | Can every qualified recommendation be traced to current technical and stakeholder evidence for that exact cell without silently activating it? | Proposed |

## Proposed Interface Specification

`IF-TW-006` is the candidate interface specification allocated by
`REQ-TW-124..129`; it is not a seventh source of implementation authority. It
defines two canonical, versioned, append-only evidence envelopes:

1. `tw-model-context-observation/1`, one per execution, binding baseline,
   invocation/pair/cell, route and lineage, map/profile/SEC/oracle/capability/
   tokenizer identities, requested and served model plus attestation, risk
   effort, budget/delivery, host observation class, qualified collector and
   trust-root identity, signature and execution binding, input/output/cached and
   phase accounting, planned/actual context, monotonic latency and separated
   harness overhead, attempts/children/retries/continuations/shards, overflow,
   terminal result, authority/source/evidence completeness, artifact digests,
   and privacy classification; and
2. `tw-model-context-qualification/1`, one per exact cell and evaluation-policy
   identity, binding corpus, valid/invalid pair counts, exclusions, quality
   results, token/context/latency summaries, sufficiency, qualification
   transition or reset, route coverage, reviewer identity/relationship, and
   allowed and held claims.

Both identities are SHA-256 over recursively key-sorted JSON with array order
preserved and the record's own identity field excluded. The observation also
requires a signature verifiable against an owner-approved collector trust root;
the digest proves byte integrity but never measurement truth by itself.
Non-identical duplicate identities, replay, cross-cell reuse, protected
mutation, missing provenance, or invalid signature are invalid. This interface
specification is proposed, not approved.

## Proposed Design Decision

`DEC-TW-010` proposes a measurement-first, matched-pair, per-route-cell policy.
It keeps model role, risk effort, tools, authority, required sources, scenario,
and environment invariant while evaluating one packet-budget/delivery candidate
against its control. Model-role experiments require a separate amendment.

To keep early harness work token-proportionate without weakening later claims,
the recommended evaluation defaults are:

- use three valid matched pairs only as a pilot for schema, collector,
  feasibility, and variance discovery; pilot data cannot qualify a cell or
  support equivalence, sufficiency, savings, or latency claims;
- before qualification, preregister a paired power analysis with one-sided
  `alpha <= 0.05`, power `>= 0.80`, and at least ten valid positive-scenario
  pairs per exact cell; freeze the resulting larger minimum when required;
- stop immediately on a hard invariant, provenance, signature, content-leak,
  absolute-quality-floor, or safe-control failure;
- cap invalid-pair replacement at the preregistered lower of one pair or 10%
  of the qualification sample, record every invalid pair, and prohibit
  post-result exclusions;
- require 100% hard-invariant success and candidate score `>= 3` on every
  applicable 0--4 rubric dimension;
- for judgment-bearing dimensions, use at least two independent evaluators
  blinded to control/candidate allocation and require weighted Cohen's kappa
  `>= 0.80` before scores enter the result;
- require the one-sided 95% lower confidence bound of the paired quality-score
  difference to be `>= -0.25` on every applicable dimension;
- require the 95% lower confidence bound of paired median whole-workflow token
  reduction to be `>= 20%` for a material-savings claim;
- require the 95% upper confidence bound of the paired median monotonic-latency
  ratio to be `<= 1.20` for efficiency eligibility; and
- qualify and validate only the exact cells evaluated; leave every other cell
  unchanged.

These values are proposed defaults for one owner decision. The owner may amend
them before acceptance without opening six separate requirement cycles.

## Proposed Risks

| ID | Risk | Control | Status |
| --- | --- | --- | --- |
| `RISK-TW-012` | Biased, pooled, incomplete, estimated, underpowered, or unattested evidence falsely qualifies a route or exaggerates savings. | Frozen policy/corpus, exact-cell identity, matched single-axis pairs, preregistered power/confidence/stopping rules, bounded replacement, blinded dual quality review, absolute floors, complete negative results, no inheritance, and deterministic reset. | Proposed; implementation and claims held. |
| `RISK-TW-013` | Metric capture leaks task content or instrumentation changes, fabricates, or double-counts the behavior being measured. | Content-free schemas, counts/digests/locators only, qualified independent signed collector, execution binding, privacy negatives, separated harness overhead, exact phase accounting, tamper/replay rejection, and owner-visible invalid runs. | Proposed; implementation and claims held. |

## Proposed Evidence Chain

| ID | Purpose | Current state |
| --- | --- | --- |
| `ART-TW-080` | Metric observation, matched evaluation, qualification ledger, and per-route results package. | Candidate |
| `TRACE-TW-073` | `NEED-TW-013 -> REQ-TW-124..129 -> DEC-TW-010 / IF-TW-006 / RISK-TW-012..013 -> ART-TW-080 -> ATP-TW-050 -> RESULT-TW-050 -> VER-TW-093 -> VAL-TW-041`. | Draft |
| `ATP-TW-050` | Frozen schema, provenance, pairing, quality, accounting, sufficiency, overflow, promotion/reset, privacy, and claim-boundary procedures. | Planned after approval |
| `RESULT-TW-050` | Exact raw observation and qualification results bound to a tested ref and policy/corpus identity. | Pending |
| `VER-TW-093` | Same-candidate deterministic and host-evidence verification result for `REQ-TW-124..129`. | Pending |
| `VAL-TW-041` | Oxiom Systems accepts or rejects whether measured route recommendations preserve intended quality while reducing context cost. | Planned; owner decision required |

## Requirements Quality Review

Review ID: `TW-REQ-REVIEW-2026-08-22-METRIC-ROUTING-001`

### Summary

Reviewed: 6 proposed requirements

Approved-quality: 6

Needs revision: 0

Blocked: 0

Reclassify: 0

The requirements are singular at the evidence-control level, trace to the
released model-governance need, separate verification from validation, define
objective negative and boundary evidence, and retain implementation neutrality.
The `IF-TW-006` schema is an allocated interface specification, not a seventh
requirement. Exact methodology defaults are isolated in proposed design
decision `DEC-TW-010` so the owner can approve or amend them once without
rewriting the six obligations.

| Requirement | Type | Score | Review status |
| --- | --- | ---: | --- |
| `REQ-TW-124` | Operational / evidence integrity | 5/5 | Can approve |
| `REQ-TW-125` | System / evaluation control | 5/5 | Can approve |
| `REQ-TW-126` | Quality / validation control | 5/5 | Can approve |
| `REQ-TW-127` | Performance / claim control | 5/5 | Can approve |
| `REQ-TW-128` | Functional / operational | 5/5 | Can approve |
| `REQ-TW-129` | State / configuration control | 5/5 | Can approve |

There are no requirement-quality blockers. `Can approve` is not approval: the
owner has not yet accepted the exact IDs, interface, decision values, risks, or
evidence chain.

### Independent challenge and retained-finding repair

One independent authority/requirements challenge found eight blocking or major
issues. They were repaired together in this same review series:

| Retained issue | Repair |
| --- | --- |
| Draft side documents could bypass the master authority roots. | Owner acceptance now authorizes only one controlled promotion into `requirements.md`, root `traceability-matrix.md`, and the Intent Contract with a new baseline hash and one scoped document review. Planning waits for that promotion. |
| The uncommitted documents were falsely pinned to the released commit and classified `no_impact`. | The released commit is now the starting ref only; the candidate ref/tree digest remains explicitly pending. The authority delta is `impact_reviewed`; the immutable release tag remains unaffected. |
| One acceptance appeared to unhold replay, collection, and quantitative claims. | Deterministic harness implementation, bounded provider replay, evidence acceptance, `EXC-TW-016` reduction/closure, publication, and cutover are separate gates. |
| Digests were treated as proof of measurement truth. | `REQ-TW-124 / IF-TW-006` now require an independent signed execution-bound collector attestation; digests prove integrity only. |
| `IF-TW-006` was ambiguously treated as an unreviewed seventh requirement. | It is explicitly an interface specification allocated by the six requirements. |
| Three-to-five pairs and medians could not prove equivalence or materiality. | Three pairs are pilot-only; qualification requires preregistered power/confidence, at least ten valid pairs, absolute quality floors, blinded dual scoring, inter-rater agreement, and one-sided confidence bounds. |
| Safe held/error outcomes could count as budget sufficiency. | Positive qualification scenarios and negative safety controls are separated; safe holds never count toward sufficiency. |
| Representative B0--B3 validation could overgeneralize to exact cells. | Representative review validates the mechanism only; every qualified cell needs current cell-specific `VAL-TW-041` acceptance or an approved proxy result. |

## Authority Gate

Gate ID: `TW-AUTH-GATE-2026-08-22-METRIC-ROUTING-001`

Decision: `Human decision`

| Gate input | Result |
| --- | --- |
| Stakeholder source | Pass: explicit owner direction to begin this envelope. |
| Current authority | Pass: released `INTENT-TW-011 / NEED-TW-013 / REQ-TW-109..123` chain is pinned. |
| Requirement quality | Pass: all six proposed requirements are approval-ready. |
| Traceability | Pass as Draft: `TRACE-TW-073` and the complete proposed evidence chain are allocated without ID collision. |
| Verification path | Pass as Planned: `ATP-TW-050 / RESULT-TW-050 / VER-TW-093`. |
| Validation path | Pass as Planned: `VAL-TW-041`, owned by Oxiom Systems. |
| Baseline identity | Pass: released 0.5.0 tag and merge SHA are exact; follow-on release allocation remains unassigned. |
| Approval evidence | Held: no owner acceptance yet names `REQ-TW-124..129`, `DEC-TW-010`, `IF-TW-006`, `RISK-TW-012..013`, and the evidence chain. |

Allowed now:

- keep this envelope and its draft traceability record;
- inspect and amend the proposed values; and
- perform document-only verification of the envelope.

One owner acceptance authorizes only the consolidated authority-baseline
promotion transaction: insert the exact accepted requirements and statuses into
`requirements.md`, the root matrix, and the Intent Contract; compute one new
canonical baseline hash; pin one committed/tree-digest candidate; and run one
scoped document review. It does not make these side documents implementation
authority by themselves.

Held until owner acceptance, completed authority-root promotion, new baseline
identity, and clean scoped document review:

- implementation planning that treats `REQ-TW-124..129` as approved authority;
- schema, compiler, validator, workflow-profile, receipt, installer, or runtime
  behavior changes.

Held even after authority acceptance and deterministic harness implementation:

- provider replay, host instrumentation activation, or metric collection until
  the approved plan defines an exact provider/host, cells, corpus, sample and
  retry ceilings, external effects, spend/time bounds, evidence paths, and a
  separate bounded replay authorization under `REQ-TW-120`;
- any sufficiency, savings, quality-equivalence, or qualification claim until
  current `RESULT-TW-050 / VER-TW-093 / VAL-TW-041` pass and `EXC-TW-016` is
  explicitly reduced or closed for the exact cells;
- publication/release until a separate controlled publication decision; and
- active routing, enforcement, and cutover until their future owner gate.

After owner acceptance, first perform the single authority-root promotion and
one scoped document review. When that promoted baseline passes, the
highest-level next step is one `/tw-plan` for the complete deterministic
`ART-TW-080` harness and V&V package. The plan must preserve one document
review, one implementation batch, one consolidated code-review/repair series,
one separately bounded replay authorization, and a separate publication
decision.

## Baseline And Change-Control Disposition

```yaml
skill_name: baseline-configuration-control
decision: held
baseline_record:
  baseline_id: TW-METRIC-ROUTING-BASELINE-CANDIDATE-2026-08-22-001
  baseline_type: controlled_document_set
  candidate_ref: pending_committed_or_tree_digest_candidate
  branch_or_tag: codex/metric-routing-authority-envelope
  artifact_hash: pending_committed_or_tree_digest_candidate
  starting_ref: 3a1f3c56b093e61b88e9f6282637878e8ebbf163
  controlled_file_set:
    - docs/validation/traceweaver-2026-08-22-metric-routing-requirements-authority-envelope.md
    - docs/traceability/metric-routing.md
  package_scope: []
  owner: Oxiom Systems
  status: candidate
final_candidate_evidence_index:
  verification_records: []
  validation_records: []
  review_records: [TW-REQ-REVIEW-2026-08-22-METRIC-ROUTING-001]
  gate_records: [TW-AUTH-GATE-2026-08-22-METRIC-ROUTING-001]
predecessor_evidence:
  baseline: traceweaver-core--v0.5.0
  verification_records: [VER-TW-092]
  validation_records: [VAL-TW-040]
fork_diff_classification:
  diff_source: traceweaver-core--v0.5.0
  files_changed:
    - docs/validation/traceweaver-2026-08-22-metric-routing-requirements-authority-envelope.md
    - docs/traceability/metric-routing.md
  classification: impact_reviewed
  affected_gates: [metric-routing-authority-baseline]
  impact_review_ref: TW-REQ-REVIEW-2026-08-22-METRIC-ROUTING-001
stale_gate_report:
  gate_id: traceweaver-core--v0.5.0-release
  prior_status: passed
  new_status: current
  stale_reason: candidate documents are outside the released tag and package
  reset_required: false
change_reset_decision:
  change_ref: CHG-TW-2026-08-22-003
  classification: impact_reviewed
  affected_gates: [metric-routing-authority-baseline]
  reset_applied: false
  impact_review_ref: TW-REQ-REVIEW-2026-08-22-METRIC-ROUTING-001
hold_conditions:
  - committed or tree-digest candidate identity for the controlled document set
  - single owner acceptance of the complete proposed authority set
  - promotion into master authority roots with a new canonical baseline hash
  - one clean scoped document review of the promoted baseline
  - follow-on implementation plan before behavior changes
```

## Single Owner Decision Requested

One acceptance is sufficient:

> Oxiom Systems accepts `REQ-TW-124..129`, `DEC-TW-010`, `IF-TW-006`,
> `RISK-TW-012..013`, and
> `ART-TW-080/TRACE-TW-073/ATP-TW-050/RESULT-TW-050/VER-TW-093/VAL-TW-041`
> as the exact proposed shadow metric-routing authority delta based on
> TraceWeaver Core 0.5.0 commit `3a1f3c56`; accepts or amends the evaluation
> defaults in `DEC-TW-010`; authorizes one controlled promotion into
> `requirements.md`, the root traceability matrix, and the Intent Contract with
> a new baseline hash and one scoped document review; and, only after that
> promoted baseline passes, authorizes one consolidated plan and deterministic
> harness implementation/review cycle. Provider replay and metric collection
> remain held for a later exact bounded authorization under `REQ-TW-120`;
> quantitative claims remain held until evidence passes and `EXC-TW-016` is
> explicitly reduced or closed; publication and active cutover remain
> separately held.

Release allocation may be decided in that acceptance or deferred until the
implementation candidate is verified. It is not silently assigned here.
