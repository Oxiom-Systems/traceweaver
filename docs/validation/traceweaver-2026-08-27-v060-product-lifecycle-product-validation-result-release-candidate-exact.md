---
id: VAL-TW-042-V060-RELEASE-CANDIDATE-EXACT-RESULT-2026-08-27-001
status: accepted_exact_candidate_publication_capsule_gated
date: 2026-08-27
owner: Oxiom Systems
functional_scope_digest: sha256:acba7410b62bb8d3426f157bf2dc1d51277443440d74b005569735b7dc887c88
functional_scope_path_count: 102
requirements_baseline_hash_sha256: 94b7980db1ec9ed18b1fcc1902818d1d87c4de67f80f65e1e4782c0c824a3bdf
result_json_sha256: f2a8c8ca705366c9c853d8e880e8b39db917bf6276d0e98d27e5354e348738db
change_id: CHG-TW-2026-08-27-006
exception_id: none
authority_effect: none
publication_authority: conditional_exact_candidate_only
---

<!-- TRACEWEAVER: file-role=v060-release-candidate-exact-product-result; req=REQ-TW-136,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VAL-TW-042 Core 0.6.0 release-candidate exact product result

## Accepted disposition

Both fresh source-derived machine cells pass on the frozen 102-path Core 0.6.0
functional candidate. Under approved `CHG-TW-2026-08-27-006`, each cell is
accepted because it reproduces the previously accepted immutable product
revision, thresholds, truth-stage behavior, and recorded limitations with no
new or worsened limitation. The validator passed the exact result at
`docs/validation/traceweaver-2026-08-27-v060-product-lifecycle-product-validation-result-release-candidate-exact.json`
with SHA-256
`f2a8c8ca705366c9c853d8e880e8b39db917bf6276d0e98d27e5354e348738db`.

## Exact bindings

- Functional scope:
  `sha256:acba7410b62bb8d3426f157bf2dc1d51277443440d74b005569735b7dc887c88`
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
| Vestro | 3 sources; 626 records; 2,657 relationships | 698 / 698 (100%) | 21 / 21 | Markdown 5/5/5 ms; strict HTML 4/4/4 ms | 0 authority; 0 truth-stage | `sha256:d71556be41180d10dfeef769a0a81fd089811ba1690e726f30f4ef065cab0365` |
| Air Router | 4 sources; 719 records; 5,584 relationships | 820 / 820 (100%) | 52 / 52 | Markdown 6/6/6 ms; strict HTML 5/5/6 ms | 0 authority; 0 truth-stage | `sha256:655814696df8b552e45c51a396ea56f18a6b82af52064a32d3a948ee73345dfc` |

Air Router binds non-code source `SRC-AIR-042` and artifact
`AIR-ROUTER-PHASE25-DIAGNOSTIC-LAB-002` through impact and acceptance-pack
evidence. Compared with the last accepted cells, the only changes are the new
candidate digest, dependent hub/strict-HTML output digests, and an improved
Vestro strict-HTML timing sample. All semantic outputs, counts, product
revisions, truth-stage holds, and limitations are unchanged.

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
cell only when it reproduces the accepted immutable revision, thresholds,
truth-stage behavior, and limitations without a new limitation. Both cells
satisfy that condition. The owner separately directed TraceWeaver to release
Core 0.6.0 now and reserve Core 0.6.1 for later fixes.

## Next gate

Bind this exact accepted result into the V&V capsule, then continue the same
integrated Terra reviewer once for frozen-candidate verification only.
Publication remains held until the single-use publication capsule is validated
and consumed.
