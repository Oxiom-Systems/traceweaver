---
id: TW-AUTH-GATE-2026-08-27-V060-PUBLICATION-001
status: proceed_conditional_exact_candidate_publication
date: 2026-08-27
decision: proceed
owner: Oxiom Systems
approved_by: Hannes Zietsman
change_id: CHG-TW-2026-08-27-006
requirements_review_id: TW-REQ-REVIEW-2026-08-27-V060-PUBLICATION-001
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 94b7980db1ec9ed18b1fcc1902818d1d87c4de67f80f65e1e4782c0c824a3bdf
work_authority: final_same_candidate_evidence_convergence_only
publication_authority: conditional_single_use_capsules_after_clean_local_gates
release_authority: exact_main_traceweaver_core_v0_6_0_workflow_only
---

<!-- TRACEWEAVER: file-role=v060-publication-authority-gate; req=REQ-TW-136,REQ-TW-141,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 publication authority gate

## Decision

**PROCEED** with one final same-candidate convergence and the controlled Core
0.6.0 publication route. Do not release 0.6.1 in this route.

Owner clarification selected this exact outcome:

> Release 0.6.0 now; use 0.6.1 only for later fixes.

This gate does not waive evidence. It authorizes PR, merge, tag, and GitHub
Release only after every exact-candidate prerequisite below passes.

## Five-field authority evaluation

| Required field | Evidence | Result |
| --- | --- | --- |
| Stakeholder intent | Ship the completed lightweight product-lifecycle assurance framework as Core 0.6.0 now; reserve 0.6.1 for later fixes | Pass |
| Approved requirement/change | REQ-TW-136/141/143/144/145 and CHG-TW-2026-08-27-006 | Pass |
| Verification method | VER-TW-094 full lifecycle/model-context/release-integrity suites, graph, reinstall, staged identity, protected-main Smoke and CodeQL | Pass / downstream execution required |
| Validation path | VAL-TW-042 fresh non-compensable product cells under the conditional unchanged-revision/unchanged-limitation disposition | Pass / downstream execution required |
| Current baseline | REQ-BASELINE-2026-04-30-001; exact hash is rebound after this controlled promotion and before final verification | Pass / mechanical rebinding required |

## Authorized sequence

1. Promote the final controlled status and freeze the functional source set.
2. Rebind physical source digests, product evidence, V&V, and the reviewer-bound
   model-context oracle once against that frozen set.
3. Run full verification, traceability, independent code review, independent
   document review, graph freshness, clean reinstall, and release readiness.
4. If clean, validate and consume one publication capsule immediately before
   staging; commit, push, and create one PR to `main`.
5. Wait for the exact PR checks. If clean, validate and consume a separate
   merge-only capsule and merge.
6. Let the exact-main release workflow create
   `traceweaver-core--v0.6.0` and the matching GitHub Release; verify both.

## Held and stop conditions

- Semantic-HTML authority cutover, deployment, runtime-health, and unsupported
  served-model claims remain held.
- The published Core 0.5.0 release and mixed root worktree remain immutable.
- A new/worsened product limitation, failed exact-candidate gate, open blocking
  finding, staged-tree drift, remote/credential conflict, failed PR check, stale
  main, or tag/release conflict stops publication.
- This gate cannot publish Core 0.6.1 and cannot rewrite any existing release.

## Next gate

Freeze and verify the exact Core 0.6.0 candidate. Only after clean review and
release-readiness evidence may `/tw-commit-push-pr` issue the single-use
publication capsule.
