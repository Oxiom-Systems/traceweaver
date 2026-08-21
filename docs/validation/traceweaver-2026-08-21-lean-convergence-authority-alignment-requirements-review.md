---
record_type: traceweaver_requirements_review
schema_version: 1
review_id: TW-REQ-REVIEW-2026-08-21-LEAN-CONVERGENCE-AUTHORITY-ALIGNMENT-001
candidate_amendment_id: REQ-AMEND-CANDIDATE-2026-08-21-001
date: 2026-08-21
owner: Oxiom Systems
status: candidate_review_saturated_held_authority_acceptance
requirements: [REQ-TW-037, REQ-TW-056, REQ-TW-057]
existing_artifact_ids: [ART-TW-072]
existing_trace_ids: [TRACE-TW-067]
existing_acceptance_test_ids: [ATP-TW-042]
existing_result_ids: [RESULT-TW-042]
existing_verification_ids: [VER-TW-087]
existing_validation_ids: [VAL-TW-035]
authority_effect: formally_accepted_as_planning_authority_only_by_separate_receipt
formal_authority_acceptance_id: TW-FORMAL-AUTHORITY-ACCEPTANCE-2026-08-21-LEAN-CONVERGENCE-001
formal_authority_acceptance_receipt: docs/validation/traceweaver-2026-08-21-lean-convergence-formal-authority-acceptance.md
accepted_review_identity: sha256:176c62102ae36bd73fbe408d131d5aadc4b53805e4c4e96b74c14645d331646d
publication_authority: none
---

# Lean-Convergence Authority Alignment Requirements Review

## Decision

The proposed revisions to REQ-TW-037, REQ-TW-056, and REQ-TW-057 each score
5/5 and can proceed as candidate authority. They replace the accepted
raw-hash/path review identity and normal two-repair-cycle policy with the
owner's 2026-08-21 convergence contract:

- accepted-review identity is the canonical digest over exactly
  `semantic_authority_digest`, `behavior_digest`, `verification_digest`, and
  `policy_epoch`;
- raw hashes, physical paths, execution coordinates, and bookkeeping remain
  visible as audit metadata but do not launch review;
- unchanged accepted meaning and identity-preserving bookkeeping after a
  matching accepted review exists dispatch zero reviewers; bookkeeping without
  that accepted review remains review-required;
- one routine repair-verification cycle is available; a second and final cycle
  requires an owner- or approved change-control-authority decision receipt
  bound to the series, retained finding fingerprint, P0/P1/blocking-P2 severity
  and context, authorization reason, and final-cycle limit; and
- repair verification revisits only retained findings and genuine in-scope
  repair regressions.

This review does not itself accept the revision, authorize implementation,
execute VER-TW-087, satisfy VAL-TW-035, or authorize staging or publication.
After this review saturated, Oxiom Systems separately accepted the reviewed
meaning as planning authority in
`TW-FORMAL-AUTHORITY-ACCEPTANCE-2026-08-21-LEAN-CONVERGENCE-001`.

## Source and scope

The controlling stakeholder source is the Oxiom Systems north-star goal issued
on 2026-08-21. The non-authoritative execution handoff at
`docs/plans/2026-08-21-traceweaver-lean-convergence-privileged-handoff.md`
corroborates the observed review-churn problem and the intended semantic
identity boundary, but does not itself supply authority.

The review is limited to:

- REQ-TW-037, REQ-TW-056, and REQ-TW-057;
- existing ART-TW-072 / TRACE-TW-067 / ATP-TW-042 / RESULT-TW-042 /
  VER-TW-087 / VAL-TW-035 records; and
- the convergence portions of `requirements.md`,
  `traceability-matrix.md`, and `.traceweaver/intent-contract.yml`.

No new controlled ART, TRACE, ATP, RESULT, VER, or VAL identifier is allocated.

## Classification and quality

| Requirement | Type | Score | Outcome |
| --- | --- | ---: | --- |
| REQ-TW-037 | System workflow invariant | 5/5 | Can approve after scoped document review and formal acceptance |
| REQ-TW-056 | Orchestration requirement | 5/5 | Can approve after scoped document review and formal acceptance |
| REQ-TW-057 | Operating-mode and wrapper-interface requirement | 5/5 | Can approve after scoped document review and formal acceptance |

The set is necessary, source-linked, mandatory, internally consistent, and
objectively verifiable. The named implementation concepts are intentional
workflow constraints, not accidental design leakage: they define the review
identity, routing boundary, repair budget, and cross-wrapper state that prevent
the user-observed non-convergent loop.

## Verification readiness

VER-TW-087 remains the verification method. The revised ATP-TW-042 must prove:

1. exact four-field semantic accepted-review identity;
2. zero-review accepted reuse and post-acceptance mechanical closure across
   sessions, branches, wrappers, review staging, and publication preparation,
   while pre-acceptance bookkeeping remains review-required;
3. one document-review dispatch for applicable authority meaning change;
4. one code-review dispatch for behavior, linked-test, or meaningful
   verification change;
5. one routine repair-verification cycle charged once across multiple bounded
   dispatches;
6. refusal of a second cycle without an owner- or approved
   change-control-authority decision receipt bound to the series, retained
   finding fingerprint, P0/P1/blocking-P2 severity and context, authorization
   reason, and final-cycle limit, including refusal of self-authorization;
7. one final second cycle when that complete explicit exception is valid;
8. retained-finding and genuine-regression-only repair scope;
9. deterministic `held_scope_expansion`, `held_no_progress`,
   `candidate_review_saturated`, and separate
   `held_authority_acceptance` states; and
10. logical canonical-protocol resolution and byte-identical packaged-mirror
    parity without using physical path or raw digest as review identity.

No implementation pass is claimed by this requirements review.

## Validation readiness

VAL-TW-035 remains the validation path. An owner-observed installed-host
scenario must show that unchanged accepted meaning and post-acceptance
bookkeeping use zero reviewers while pre-acceptance bookkeeping still requires review,
genuine changes route once, non-blocking wording/style debt does not create a
cycle, routine repair terminates after one cycle, and any second cycle is visibly
bound by an owner- or approved change-control-authority receipt to the series,
retained finding fingerprint, severe-blocker severity and context,
authorization reason, and final-cycle limit. Automated fixtures do not
substitute for that owner observation.

## Scoped document-review series

Discovery was consumed once for this exact four-file authority delta. It
retained two blocking safety predicates. Repair-verification cycle 1 revisited
only those fingerprints and found both closed with no genuine in-scope repair
regression:

| Finding fingerprint | Severity | Disposition | Closure evidence |
| --- | --- | --- | --- |
| LC-MECHANICAL-PRIOR-ACCEPTANCE | P1 | closed | REQ-TW-037 and its Intent Contract, ATP-TW-042, VER-TW-087, and VAL-TW-035 projections require a matching accepted review before zero-review `mechanical_closure`; otherwise review remains required. |
| LC-SEVERE-EXCEPTION-AUTHORITY | P1 | closed | REQ-TW-037 and its projections require an owner- or approved change-control-authority decision receipt bound to the series, retained finding fingerprint, P0/P1/blocking-P2 severity and context, authorization reason, and final-cycle limit; self-authorization is rejected. |

The series terminal is `candidate_review_saturated`. Formal acceptance is a
separate dimension, and the later acceptance receipt closes
`held_authority_acceptance` without reopening this series. This review record
does not create publication authority.

## Review execution and model boundary

This requirements-quality review and the retained-finding verification are
owned by the main coordinator route. One independent advisory coherence review
was requested as `gpt-5.6-terra` at `xhigh` effort and returned clean, but the
served model was not independently attested. Its output therefore remains
`held_model_unattested` under REQ-TW-060 and is not formal review evidence.

## Preserved holds

The following remain held:

- convergence controller, protocol, policy, wrapper, fixture, CI, runtime, and
  active-host claims under the revised authority;
- all Terra-routing implementation and served-model claims;
- mandatory `tw-graph` and any Graphify authority claim;
- semantic-HTML implementation or cutover;
- generated-view or snapshot refresh for this candidate;
- staging, commit, PR, merge, release, deployment, and publication.

## Next gate

Do not reopen document discovery. Use the separate formal-acceptance receipt as
planning authority, then require a bounded implementation authority gate before
implementing the convergence slice. Do not start later architecture pillars.
