---
id: TW-AUTH-GATE-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-POST-PROMOTION-001
status: proceed_exact_eleven_file_behavior_scope_publication_held
date: 2026-08-26
decision: proceed
owner: Oxiom Systems
approved_by: Hannes Zietsman
change_id: CHG-TW-2026-08-26-004
exception_id: EXC-TW-021
gap_id: GAP-TW-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-001
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 8349b9c1d883c79a345eb7e10e86ab6e9f965805e34d894a28be44cde3a69a79
workflow_profile_revision: 5
workflow_profile_hash: sha256:52e2732d13df824411d3bdb7f9553d9e6b9d88af66b39a50c4bce187917b14e7
owner_approval_sha256: f708afc83511dd78819168b01d5c5171ee2655299db7adbee8d16496e1e9aadb
requirements_review_sha256: a7cfa2ffe509f77860856a4f8f2da626382f3b1da10cbe9453070bbb44afd0e6
document_review_sha256: 670958d6aafbcd8db84a9a9e0403dc509cbabe91d80bfff236afcfeda2e827d4
red_evidence_sha256: 699a3b6d898931a72d5066265d7ef265097fb251f02ca71bb787935612a822e7
vv_capsule_sha256: 052bec398750bf93dba9d14c7bd7763a6f8a0dbe866d11d0a5e405b81bff598e
work_authority: exact_bounded_main_thread_eleven_file_post_oracle_ci_convergence_correction_only
focused_verification_authority: scripts_traceweaver_smoke_model_context_routing_once
product_authority: fresh_exact_read_only_vestro_and_air_router_rebinding_after_functional_digest_change
reviewer_authority: held_until_fresh_exact_product_acceptance_then_one_existing_reviewer_verification_only_limited_to_eleven_file_delta
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-post-oracle-ci-convergence-post-promotion-authority-gate; req=REQ-TW-110,REQ-TW-123,REQ-TW-130,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-072,TRACE-TW-074; ver=VER-TW-092,VER-TW-094; val=VAL-TW-040,VAL-TW-042 -->

# Core 0.6.0 post-oracle CI convergence authority gate

## Decision

**PROCEED** with one main-thread correction limited to the ten named
model-context fixtures and `scripts/traceweaver-smoke-model-context-routing`.
Permit one full 72-case focused verification attempt after mutation. This is
implementation authority only; it is not reviewer, release, or publication
authority.

The earlier
`TW-AUTH-GATE-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-001` remains a
truthful historical preapproval `Human decision` result. Hannes Zietsman's
later exact approval, revision-5 controlled promotion, passed RED/probe, clean
document review, and passed review-bound V&V capsule now satisfy the missing
chain.

## Exact owner decision

> Approve CHG-TW-2026-08-26-004 and EXC-TW-021 for one profile-revision-5 main-thread post-oracle CI convergence correction only: refresh the ten named Core 0.5.0 model-context fixtures to current approved Core 0.6.0 map, oracle, SEC, README, route-inventory, and receipt bindings; and correct scripts/traceweaver-smoke-model-context-routing so its isolated canonical-oracle negative invokes the compiler copied into the tampered package and its tw-lifecycle direct-dependency expectation exactly matches the production oracle. Permit one focused verification attempt, fresh exact Vestro and Air Router product rebinding after the functional digest changes, and one verification-only continuation of the same integrated Terra reviewer limited to this eleven-file delta. Preserve the published Core 0.5.0 release, the mixed root worktree, the accepted product limitations, and every semantic-cutover, runtime, deployment, release, and publication hold; publication remains separately gated.

## Five-field authority evaluation

| Required field | Evidence | Result |
| --- | --- | --- |
| Stakeholder intent | Complete Core 0.6.0 without stale or falsely passing CI, while preserving released Core 0.5.0, the mixed root, product limitations, and all named holds | Pass |
| Approved requirement/exception | REQ-TW-110/123/130/143/145; CHG-TW-2026-08-26-004; EXC-TW-021 | Pass |
| Verification method | VER-TW-092/094; production RED; passing disposable exact-scope probe; one preregistered full 72-case model-context smoke | Pass for implementation entry |
| Validation question/path | VAL-TW-040 remains historical; VAL-TW-042 is non-compensable and requires fresh exact Vestro/Air Router disposition after the functional digest changes | Pass / downstream held |
| Current baseline/profile | requirements `sha256:8349b9c1...a79`; frozen L3 revision 5 `sha256:52e2732d...14e7`; clean review and review-passed bounded capsule | Pass |

## Gate inputs

| Input | Status |
| --- | --- |
| Exact owner approval | SHA-256 `f708afc8...aadb`; grants no publication authority |
| Requirements review | accepted clean; SHA-256 `a7cfa2ff...d0e6` |
| Three controlled roots | canonical baseline hash reproduced; generated views and bounded snapshot current |
| Workflow profile | revision 5 canonical hash reproduced; exact revision-4 predecessor bound |
| Post-oracle RED | passed expected failure and disposable exact-scope probe; SHA-256 `699a3b6d...22e7` |
| Scoped authority document review | accepted clean after one V&V-link preflight correction; zero open P0/P1/blocking P2; SHA-256 `670958d6...27d4` |
| Bounded V&V capsule | `--require-review-passed` pass; SHA-256 `052bec39...598e` |
| Eleven named behavior files | unchanged from every preregistered RED pre-change SHA-256 |

## Authorized work

The one correction attempt may:

1. replace these ten fixtures with the exact preregistered passing-probe bytes:
   `oracle-review-complete.json`, `route-floors-expected.yml`,
   `source-manifest-complete.json`, the three `source-manifest-delivery-*`
   files, the two `source-manifest-temporal-external-*` files,
   `strict-v1-consumer.rb`, and `v1-receipts.json`;
2. correct only two behaviors in
   `scripts/traceweaver-smoke-model-context-routing`: make the isolated
   canonical-oracle negative execute the compiler copied into the tampered
   package and align the `tw-lifecycle` direct-dependency expectation exactly
   with the production oracle;
3. run the complete model-context smoke exactly once, expecting
   `model_context_routing_smoke=pass cases=72`;
4. record exact post-change hashes, scope/rollback evidence, the resulting
   functional digest, and directly necessary trace/V&V status; and
5. after the functional digest freezes, run fresh read-only exact Vestro and
   Air Router product trials for explicit Oxiom Systems disposition.

## Prohibited work and claims

This gate does not authorize:

- any functional file outside the eleven named paths;
- any lifecycle behavior, public API, route family, or semantic expansion;
- a second correction or focused verification attempt;
- a new reviewer, full review, fan-out, repair subagent, second continuation,
  or use of the existing Terra reviewer before fresh exact-product acceptance;
- Vestro or Air Router mutation;
- modification, rewrite, or republication of Core 0.5.0;
- modification of the mixed root worktree on `codex/lean-convergence`;
- semantic-HTML authority cutover, served-model, runtime, deployment,
  release-ready, tag, GitHub Release, or publication claims; or
- staging for publication, commit, push, PR, merge, tag, release, deployment,
  or any external mutation.

## Dependency order after implementation

```text
one bounded eleven-file correction
  -> one full 72-case focused verification attempt
  -> exact scope/rollback record and frozen functional digest
  -> fresh read-only Vestro and Air Router product trials
  -> explicit exact-digest owner disposition with limitations acknowledged
  -> one verification-only continuation of the same Terra reviewer
  -> graph, reinstall, candidate-scope, PR and exact-main gates
  -> separate publication decision
```

Any non-clean focused result, path/hash drift, scope expansion, product
rejection, changed reviewer identity, non-clean reviewer result, or reordered
stage stops the route. EXC-TW-021 then expires; no automatic cycle follows.

## Next gate

Run `/tw-work` in the main thread for the exact eleven-file correction. Perform
the complete model-context smoke once, then stop for scope/digest evidence and
fresh product rebinding. Do not invoke the reviewer or any publication wrapper.
