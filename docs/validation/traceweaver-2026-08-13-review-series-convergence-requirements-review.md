---
id: TW-REQ-REVIEW-2026-08-13-REVIEW-SERIES-CONVERGENCE-001
title: TraceWeaver Review-Series Convergence Requirements Review
status: discovery_findings_repaired_pending_scoped_repair_verification_and_formal_authority_acceptance_no_implementation_runtime_ci_hook_cutover_or_publication_authority
review_date: 2026-08-13
authority_patch_applied_at: 2026-08-14
owner: Oxiom Systems
review_type: requirements_quality_and_authority_baseline_candidate_revision
candidate_amendment_id: REQ-AMEND-CANDIDATE-2026-08-13-001
owner_decision_id: TW-OWNER-DECISION-2026-08-13-REVIEW-SERIES-CONVERGENCE-001
requirements: [REQ-TW-037, REQ-TW-056, REQ-TW-057]
candidate_requirements_hash_sha256: 3de310fa97e795f7d2445ce33238368f3a46af099cb90871e7ff621a94c17f99
authority_effect: candidate_baseline_input_only_pending_scoped_tw_doc_review_and_formal_authority_acceptance
accepted_review_identity: none
publication_authority: none
discovery_review_outcome: blocked_3_p1_1_p2
retained_finding_repair_status: cycle_1_closed_three_findings_cycle_2_repair_applied_to_rs_protocol_digest_reuse_final_scoped_verification_pending
discovery_stage_state: consumed_1_of_1
repair_verification_cycle_state: cycle_1_verified_three_closed_one_retained_cycle_2_repair_applied_final_verification_pending
repair_verification_cycle_budget: 2_total_2_opened_0_unopened
---

# Review-Series Convergence Requirements Review

## Verdict

The initial requirements-quality pass rated the proposed revisions to
REQ-TW-037, REQ-TW-056, and REQ-TW-057 at 5/5. The later scoped
`tw-doc-review` discovery pass retained three P1 and one P2 findings, so that
initial readiness judgment no longer supports a clean or accepted review
claim. Repair-verification cycle 1 closed the three P1 fingerprints and retained
the existing P2 `RS-PROTOCOL-DIGEST-REUSE` because the reuse identity omitted
the frozen concern or governing-rule set. This cycle-2 repair binds reuse to the
complete frozen-scope identity; it does not introduce another finding or widen
the reviewed scope.

The repaired wording remains candidate authority evidence pending scoped
repair verification and separate formal authority acceptance. This record
does not implement or verify the review-series mechanism and is not an
accepted review identity, cutover decision, or publication authorization.

The change addresses the observed failure mode in which repeated
`tw-doc-review` and `tw-work` invocations rediscovered or rephrased findings,
reset local cycle accounting, and continued without a durable convergence
state. The contract makes convergence series-level rather than command-level.

## Reviewed Authority Scope

The only files authorized for this patch are:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- `docs/validation/traceweaver-2026-08-13-review-series-convergence-requirements-review.md`

The pending REQ-TW-060/088 candidate amendment and its dated review record are
preserved. REQ-TW-086 remains conditional and held under its existing
activation condition. REQ-TW-089/090 remain optional Graphify enrichment and
do not become a review ledger, convergence gate, authority source, or evidence
source. The separate semantic-HTML worktree remains candidate source evidence
only and is outside this patch.

The 2026-08-11 REQ-TW-060/088 review record remains bound to its historical
candidate hash `0439e9704e760842794c9b3085f96fcddccbec927caf9c11f682742393a68020`.
It is not rewritten by this patch. This record and the Intent Contract bind the
combined working candidate to
`3de310fa97e795f7d2445ce33238368f3a46af099cb90871e7ff621a94c17f99`.

## Requirement Quality And Repair State

| Requirement | Initial requirements-review score | Discovery disposition | Current decision |
| --- | ---: | --- | --- |
| REQ-TW-037 | 5/5 | 2/5 — Block | Retained P1/P2 semantics repaired; scoped repair verification and formal authority acceptance pending. |
| REQ-TW-056 | 5/5 | 3/5 — Revise | Cycle/dispatch, blocking-finding, and handoff semantics repaired; scoped repair verification and formal authority acceptance pending. |
| REQ-TW-057 | 5/5 | 3/5 — Revise | Generation and canonical-protocol identity semantics repaired; scoped repair verification and formal authority acceptance pending. |

No post-repair quality score or clean-review claim is asserted by this work
record. The next scoped `tw-doc-review` owns that decision.

## Reviewed Convergence Contract

### Series and attempt boundaries

One explicitly authorized review series permits one `discovery` stage followed
by at most two `repair_verification` cycles. The series survives command, run,
and session re-entry. Re-entry resumes the exact matching series and cannot
reset or extend its accounting. Explicit authority may open a new series
generation; it cannot add budget to the current series.

Every authorized generation receives an immutable `series_generation_id` and
records its predecessor series identity, or `none`, plus the authorization
reason. A later generation remains distinct even when all other frozen scope
fields match a terminal predecessor. The stable series identity is derived
from that generation, predecessor identity, and frozen scope; it is not derived
from a changed-file digest.

The series freezes:

- the originating requirements-baseline revision;
- the originating workflow-profile revision;
- the target set;
- the review objective;
- the concern or governing-rule set; and
- the registered canonical review protocol's path, version, and SHA-256 digest.

An authorized repair that changes content inside that frozen scope does not
open a new series. A change to any frozen field, or a newly raised blocker
outside those boundaries, terminates the current series as
`held_scope_expansion`. Continuing then requires explicit authority for a new
series generation.

One repair-verification cycle is the bounded logical pass containing its repair
dispatches and the resulting verification or review dispatches. It receives
one attempt identity and decrements the remaining cycle budget exactly once
when opened. Every wrapper or child call receives a separate dispatch identity
bound to the series, stage, and attempt; dispatch count does not consume extra
cycle budget.

### Durable identity and ledger

The durable ledger must retain at least:

- series generation, predecessor, series, cycle-attempt, and dispatch
  identities;
- review mode, frozen-scope identity, and canonical-protocol identity;
- finding fingerprints, dispositions, blocking dispositions, and repair
  eligibility;
- relevant evidence deltas and unresolved blocking-finding progress;
- remaining cycle budget;
- accepted-review identity, if any;
- terminal outcome; and
- authority-acceptance state.

A finding fingerprint binds the governing rule, normalized semantic anchor,
failure predicate, and claim impact. Rewording a finding without changing
those semantics does not create a new finding. A genuine repair regression
inside frozen scope may be classified as an eligible blocker, but it does not
reset or extend the series cap.

An accepted-review identity is a canonical digest over the complete frozen-scope
identity, requirements-baseline hash, workflow-profile hash, review mode,
changed-file digest, and verification digest. The frozen-scope identity covers
the target set, review objective, concern or governing-rule set, and canonical-
protocol path/version/digest. Reuse is allowed only when every input is unchanged
and no new unresolved in-scope blocker exists.

### Progress and reuse

Blocking disposition follows REQ-TW-040: P0/P1 always block, and P2 blocks when
it affects authority, requirements, tests, traceability, validation, release
claims, security, data integrity, or runtime safety. Only non-blocking P2 and
P3 debt may be recorded without opening another repair-verification cycle.

Each repair-verification cycle must reduce the unresolved in-scope blocking
fingerprint set or provide a relevant evidence delta that changes a blocking
disposition. Repeated blockers, unchanged relevant evidence, repeated
verification failure, non-monotonic blocker progress, or exhausted cycle
budget terminate as `held_no_progress` only while unresolved blockers remain.

An unchanged accepted-review identity is reusable without reviewer dispatch
only under the exact identity match above. Any frozen-scope difference,
including a concern or governing-rule-set-only change, plus any protocol,
baseline, profile, target, objective, mode, changed-file, verification, or
new-blocker difference invalidates reuse.

### Terminal receipt dimensions

The series terminal outcome and formal authority-acceptance state are separate
receipt dimensions:

- `held_scope_expansion`: evaluated first when a frozen scope field changed or
  a blocker is outside scope;
- `candidate_review_saturated`: otherwise, zero unresolved in-scope blocking
  findings;
- `held_no_progress`: otherwise, unresolved blockers remain and a progress,
  evidence, verification, or cycle-budget invariant failed; and
- `held_authority_acceptance`: formal authority acceptance or a coherent
  accepted-review identity remains outstanding.

`candidate_review_saturated` and `held_authority_acceptance` may coexist. A
saturated candidate is not an accepted authority baseline, implementation
permission, review-staging identity, or publication permission.

## Wrapper Allocation

Before a review-bearing child dispatch, `tw-auto` must create or resume the
matching series and pass the series-generation and series identities, current
stage and cycle-attempt identity, distinct dispatch identity, canonical-
protocol identity, ledger digest, eligible blocking findings, accepted-review
identity inputs, and remaining cycle budget through every `tw-doc-review` and
`tw-work` handoff. It opens and charges one repair-verification cycle once, then
maps every bounded repair and verification/review dispatch in that pass to the
same attempt identity.

Direct `tw-doc-review` and `tw-work` invocation must resolve and resume the
exact matching series. `discovery` is valid only for an explicitly authorized
new generation; later review calls operate within the current
`repair_verification` cycle. Review-Staging Mode preserves the generation,
series and attempt identities, cycle budget, canonical-protocol identity,
ledger digest, and terminal state.

Each callable wrapper must resolve one registered canonical review protocol by
path, version, and SHA-256 digest. That identity is frozen in the series and
accepted-review identity; any change invalidates reuse and triggers scope-
expansion disposition. If packaging requires a mirror, that mirror must pass
deterministic parity checking before use. Correcting the currently packaged
scoped-review-protocol path and consolidating duplicate autonomy/review policy
sources are later implementation tasks, not part of this patch.

## Discovery Finding Repair Dispositions

| Fingerprint | Severity | Repair applied | Current disposition |
| --- | --- | --- | --- |
| `RS-ID-NEW-SERIES-COLLISION` | P1 | Added immutable generation, predecessor, authorization-reason, and collision-free identity rules. | Closed by repair-verification cycle 1. |
| `RS-BUDGET-ATTEMPT-DISPATCH` | P1 | Defined one-charge logical cycles, separate child dispatch identities, and terminal precedence. | Closed by repair-verification cycle 1. |
| `RS-SEVERITY-BLOCKING-P2` | P1 | Made REQ-TW-040 blocking disposition authoritative for eligibility, progress, and saturation. | Closed by repair-verification cycle 1. |
| `RS-PROTOCOL-DIGEST-REUSE` | P2 | Froze protocol path/version/digest, then bound reuse to the complete frozen-scope identity so a concern or governing-rule-set-only change invalidates reuse. | Retained by cycle 1; cycle-2 repair applied; final scoped verification pending. |

This record provides advisory cycle accounting only: discovery is consumed,
cycle 1 closed three fingerprints and retained one, and the repair half of the
final cycle 2 is now applied with its verification half pending. Both allowed
cycles are opened; no further cycle remains. No ledger/controller, controlled
series identity, or accepted review identity is created by this document.

## V&V Allocation

| Record | Allocation | Current state |
| --- | --- | --- |
| ART-TW-072 | Exact four-file candidate authority-baseline amendment | Recorded; candidate authority only. |
| TRACE-TW-067 | Need-to-requirement-to-future-evidence chain | Recorded; scoped repair verification pending. |
| ATP-TW-042 | Deterministic cross-wrapper transition and protocol-parity procedure | Allocated; not executed. |
| RESULT-TW-042 | Result slot for ATP-TW-042 | Allocated explicitly as not executed. |
| VER-TW-087 | Deterministic convergence verification | Allocated; implementation and execution held. |
| VAL-TW-035 | Owner-observed convergent representative review series | Allocated; implementation and validation held. |

Future deterministic fixtures must prove, at minimum:

1. a new generation with the same frozen scope as a terminal predecessor has a
   distinct series identity and a correct predecessor/authorization link;
2. exactly one discovery and at most two repair-verification cycles across
   direct and `tw-auto`-mediated command/run/session re-entry;
3. one cycle containing `tw-work`, multiple child reviewers, and
   `tw-doc-review` verification is charged once while every dispatch identity
   remains distinct;
4. durable identity, finding deduplication, disposition, and budget reuse;
5. `held_no_progress` for unchanged evidence, repeated blockers, exhausted
   cycle budget, repeated verification failure, or non-monotonic progress only
   while blockers remain;
6. a final allowed cycle that closes all blockers returns
   `candidate_review_saturated`, not `held_no_progress`;
7. `held_scope_expansion` for each frozen-scope field change, including a
   canonical-protocol identity change, and for a new out-of-scope blocker;
8. zero-dispatch reuse only for an exact accepted-review identity bound to the
   complete frozen-scope identity, with every baseline/profile/protocol/target/
   objective/concern-or-rule-set/mode/content/verification change invalidating
   reuse, including a concern-only negative fixture;
9. a blocking P2 is repair-eligible and prevents saturation, while only
   non-blocking P2/P3 debt is recorded without reopening a cycle;
10. `candidate_review_saturated` at zero unresolved in-scope blocking findings;
11. simultaneous `held_authority_acceptance` when formal acceptance remains
    outstanding;
12. in-scope repair regression eligibility without cap reset; and
13. deterministic equality between the canonical protocol and each required
    packaged mirror.

## Child Review Receipts

Three independent advisory perspectives informed the requirements review.
TraceWeaver requested `gpt-5.6-terra` with high reasoning for each child. The
host supplied no independent served-model attestation, so each receipt records
`served_model: unattested` and `held_model_unattested`. Their analysis is
supporting input only, not formal review authority.

| Role | Requested model | Served model | Requested effort | Consequence |
| --- | --- | --- | --- | --- |
| Requirement quality and wording | `gpt-5.6-terra` | `unattested` | `high` | Advisory only; `held_model_unattested`. |
| Trace and authority impact | `gpt-5.6-terra` | `unattested` | `high` | Advisory only; `held_model_unattested`. |
| V&V and implementation feasibility | `gpt-5.6-terra` | `unattested` | `high` | Advisory only; `held_model_unattested`. |

## Preserved Holds

This review does not authorize:

- a review-series ledger, controller, resolver, or runtime mutation;
- the packaged scoped-review-protocol path correction;
- duplicate autonomy or review policy-source consolidation;
- deterministic transition or protocol-parity fixture implementation;
- derived-view or snapshot refresh;
- any REQ-TW-060 routing adapter, model route, or host change;
- any REQ-TW-088 `tw-graph` implementation, lifecycle refresh, or CI check;
- any REQ-TW-089/090 Graphify behavior change;
- global, Git, host, or wrapper hook installation or mutation;
- runtime, CI enforcement, semantic-HTML cutover, or authority migration;
- staging, commit, push, PR mutation, merge, release, deployment, or
  publication; or
- creation or assertion of an accepted review identity.

## Mechanical Acceptance Boundary

The four candidate files must parse and pass scoped consistency checks, and the
requirements canonical hash must match the hash recorded in the Intent
Contract and this record. Those checks establish only a coherent candidate
patch. They do not replace scoped `tw-doc-review` or formal authority
acceptance.

## Next Gate

Run scoped `/tw-doc-review` in `repair_verification` mode over the combined
candidate authority set as the verification half of the final, second
repair-verification cycle:

- `requirements.md`
- `.traceweaver/intent-contract.yml`
- `traceability-matrix.md`
- `docs/validation/traceweaver-2026-08-11-req-060-088-authority-baseline-requirements-review.md`
- `docs/validation/traceweaver-2026-08-13-review-series-convergence-requirements-review.md`

Until that review and a separate formal authority-acceptance action pass, the
candidate delta remains `held_authority_acceptance`; no implementation or
publication work may start from it.
