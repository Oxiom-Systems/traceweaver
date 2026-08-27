---
id: VAL-TW-042-V060-RELEASE-CANDIDATE-ACYCLIC-FINAL-EXACT-RESULT-2026-08-27-001
status: accepted_exact_candidate_publication_separately_gated
date: 2026-08-27
owner: Oxiom Systems
functional_scope_digest: sha256:4de43ade6ac8d15e278cef68f2e94b2c1eec5e5f9a919f8696f71e0f51debcec
functional_scope_path_count: 102
requirements_baseline_hash_sha256: 94b7980db1ec9ed18b1fcc1902818d1d87c4de67f80f65e1e4782c0c824a3bdf
result_json_sha256: 34cab7fbe3017568eecab3cb40f341c1c65f2fea89ff43bb59d34c9a2e10acd0
change_id: CHG-TW-2026-08-27-006
exception_id: none
authority_effect: none
publication_authority: conditional_exact_candidate_only
---

<!-- TRACEWEAVER: file-role=v060-release-candidate-exact-product-result; req=REQ-TW-136,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VAL-TW-042 Core 0.6.0 final acyclic product result

## Accepted disposition

Both fresh source-derived machine cells pass on the frozen 102-path Core 0.6.0
functional candidate. Under approved `CHG-TW-2026-08-27-006`, each cell is
accepted because it reproduces the previously accepted immutable product
revision, thresholds, truth-stage behavior, and recorded limitations with no
new or worsened limitation. The exact product validator passed
`docs/validation/traceweaver-2026-08-27-v060-product-lifecycle-product-validation-result-release-candidate-acyclic-final-exact.json`
with SHA-256
`34cab7fbe3017568eecab3cb40f341c1c65f2fea89ff43bb59d34c9a2e10acd0`.

## Exact bindings

- Functional scope:
  `sha256:4de43ade6ac8d15e278cef68f2e94b2c1eec5e5f9a919f8696f71e0f51debcec`
  across 102 paths.
- Requirements baseline:
  `sha256:94b7980db1ec9ed18b1fcc1902818d1d87c4de67f80f65e1e4782c0c824a3bdf`.
- Vestro revision: `8bc3b724f56cc72f08f8162c783a7f8e2816b990`.
- Air Router revision: `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b`.
- Consumer mutation: none; all controlled changes occurred in disposable
  copies.

## Fresh machine results

| Cell | Actual source census | Recovered task links | Direct seeded impact | Route timings | False promotions | Raw receipt |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| Vestro | 3 sources; 626 records; 2,657 relationships | 698 / 698 (100%) | 21 / 21 | Markdown 4/4/4 ms; strict HTML 4/4/4 ms | 0 authority; 0 truth-stage | `sha256:7c087941da25426f7410dbf4d916a4a3f565a07ad98dcf950a8c09036f0c3173` |
| Air Router | 4 sources; 719 records; 5,584 relationships | 820 / 820 (100%) | 52 / 52 | Markdown 6/6/6 ms; strict HTML 5/5/6 ms | 0 authority; 0 truth-stage | `sha256:507233d09be8a3c9ea99fa5b73a0470dbb9fd4e24c70bcec82ebf9638c306f66` |

Air Router binds non-code source `SRC-AIR-042` and artifact
`AIR-ROUTER-PHASE25-DIAGNOSTIC-LAB-002` through impact and acceptance-pack
evidence. The new acyclic staging repair changes only the frozen candidate
digest and its dependent hub or strict-HTML digests. Semantic outputs, counts,
product revisions, truth-stage holds, and recorded limitations remain
unchanged.

## Limitations

- The pinned Vestro worktree has 144 observed dirty entries and remains bound
  to revision `8bc3b724f56cc72f08f8162c783a7f8e2816b990` plus worktree-state digest
  `sha256:c564ca26eb968342e1602fd160da6f0c1bfafb159a2024d86964fcf04bee16d5`.
- The pinned Air Router worktree has 210 observed dirty entries and remains
  bound to revision `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b` plus worktree-state digest
  `sha256:4f06cca8d20f20b6ce1aa4f54fdd3a6d12666d0b9e1b28b2722a7c7fcb8a9417`.
- Direct relationships are source co-mentions. Registered-source membership
  is explicitly labelled when used for graph closure and is not presented as
  direct semantic evidence.
- Trial changes occurred only in disposable copies. This result does not prove
  deployment, runtime health, semantic-HTML authority cutover, publication,
  or release.

## Authority used

`CHG-TW-2026-08-27-006` authorizes acceptance of a fresh Vestro or Air Router
cell when it reproduces the accepted immutable revision, thresholds,
truth-stage behavior, and limitations without a new limitation. Both cells
satisfy that condition. The owner separately directed TraceWeaver to release
Core 0.6.0 now and reserve Core 0.6.1 for later fixes.

## Next gate

Bind this exact accepted result into the V&V capsule, then continue the same
integrated Terra reviewer once for frozen-candidate verification only.
Publication remains held until the single-use publication capsule is validated
and consumed.
