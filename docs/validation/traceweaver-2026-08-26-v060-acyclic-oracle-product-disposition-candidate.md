---
id: VAL-TW-042-ACYCLIC-ORACLE-FINAL-EXACT-CANDIDATE-2026-08-26-001
status: owner_accepted_promoted_to_final_exact_result
date: 2026-08-26
owner: Oxiom Systems
functional_scope_digest: sha256:22d5d66acfa3b0c5abbe27ef7d478106768ee386f45c9332a1d25f72627d8719
functional_scope_path_count: 76
requirements_baseline_hash_sha256: ae5ea38098647901926f1391c975e0db766337e12c765f18a73885f42ff74e08
change_id: CHG-TW-2026-08-26-003
exception_id: EXC-TW-020
authority_effect: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-acyclic-oracle-exact-product-disposition-candidate; req=REQ-TW-136,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VAL-TW-042 acyclic-oracle final exact product candidate

## Disposition state

Both fresh source-derived machine cells pass against the frozen 76-path
functional product. Hannes Zietsman accepted the exact decision below, and the
named-rater plus combined `VAL-TW-042` dispositions were promoted without
inheriting historical acceptance to
`docs/validation/traceweaver-2026-08-26-v060-product-lifecycle-product-validation-result-terminal-release-truth-final-exact.json`
at
`sha256:867db3991e0cdc3a0eca4835247046552ed3e29dd604b51ebf365815df860094`.

## Exact bindings

- Functional scope:
  `sha256:22d5d66acfa3b0c5abbe27ef7d478106768ee386f45c9332a1d25f72627d8719`
  across 76 paths.
- Requirements baseline:
  `sha256:ae5ea38098647901926f1391c975e0db766337e12c765f18a73885f42ff74e08`.
- Vestro revision: `8bc3b724f56cc72f08f8162c783a7f8e2816b990`.
- Air Router revision: `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b`.
- Consumer mutation: none; all controlled changes occurred in disposable
  copies.

## Independent machine results

| Cell | Actual source census | Recovered task links | Direct seeded impact | Route timings | False promotions | Raw receipt |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| Vestro | 3 sources; 626 records; 2,657 relationships | 698 / 698 (100%) | 21 / 21 | Markdown 5/5/5 ms; strict HTML 5/4/5 ms | 0 authority; 0 truth-stage | `sha256:1cc5233c3ce59dbd837857af42d830eda808389dfb68fd898afcda04a4ce219f` |
| Air Router | 4 sources; 719 records; 5,584 relationships | 820 / 820 (100%) | 52 / 52 | Markdown 6/6/6 ms; strict HTML 5/5/6 ms | 0 authority; 0 truth-stage | `sha256:8e444328ffac9b8200904951d36c7087fb143e6c9636b75dd9b6b8307374ee36` |

Air Router binds non-code source `SRC-AIR-042` and artifact
`AIR-ROUTER-PHASE25-DIAGNOSTIC-LAB-002` through impact and acceptance-pack
evidence. Both hubs remain held, their named-rater state remains pending, and
the trials made no authority change.

## Raw evidence

- `docs/validation/traceweaver-2026-08-26-v060-product-lifecycle-raw-acyclic-oracle-final-exact/vestro-lc-001-machine-observation.json`
  at
  `sha256:1cc5233c3ce59dbd837857af42d830eda808389dfb68fd898afcda04a4ce219f`.
- `docs/validation/traceweaver-2026-08-26-v060-product-lifecycle-raw-acyclic-oracle-final-exact/airrouter-lc-001-machine-observation.json`
  at
  `sha256:8e444328ffac9b8200904951d36c7087fb143e6c9636b75dd9b6b8307374ee36`.

## Limitations requiring acknowledgement

- The pinned Vestro worktree has 144 observed dirty entries and remains bound
  to revision `8bc3b724f56cc72f08f8162c783a7f8e2816b990` plus worktree-state digest
  `sha256:c564ca26eb968342e1602fd160da6f0c1bfafb159a2024d86964fcf04bee16d5`.
- The pinned Air Router worktree has 210 observed dirty entries and remains
  bound to revision `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b` plus worktree-state digest
  `sha256:4f06cca8d20f20b6ce1aa4f54fdd3a6d12666d0b9e1b28b2722a7c7fcb8a9417`.
- Direct relationships are source co-mentions. Registered-source membership
  is explicitly labelled when used for graph closure and is not represented
  as direct semantic evidence.
- Trial changes occurred only in disposable copies. These cells do not prove
  deployment, runtime health, semantic-HTML authority cutover, publication,
  or release.
- The existing Terra reviewer's one verification-only continuation,
  reviewer-bound canonical oracle, terminal release-truth GREEN, graph,
  reinstall, PR/CI, tag, and GitHub Release remain separate gates.

## Exact decision accepted

> Accept final acyclic-oracle Vestro and Air Router product cells and VAL-TW-042 for functional scope sha256:22d5d66acfa3b0c5abbe27ef7d478106768ee386f45c9332a1d25f72627d8719, raw digests sha256:1cc5233c3ce59dbd837857af42d830eda808389dfb68fd898afcda04a4ce219f and sha256:8e444328ffac9b8200904951d36c7087fb143e6c9636b75dd9b6b8307374ee36, with the recorded limitations acknowledged; publication remains separately gated.

## Next gate

The capsule is rebound to the accepted exact result. Continue only the existing
integrated Terra reviewer once for verification of `P1-005-continuation`;
publication remains separately gated.
