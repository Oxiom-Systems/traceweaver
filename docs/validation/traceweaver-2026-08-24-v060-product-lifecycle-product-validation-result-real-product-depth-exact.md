---
id: VAL-TW-042-REAL-PRODUCT-DEPTH-EXACT-RESULT-2026-08-24-001
status: accepted_exact_candidate_publication_separately_gated
date: 2026-08-24
owner: Oxiom Systems
functional_scope_digest: sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875
requirements_baseline_hash_sha256: 16e4cbbeb50e8568f0190176df62e74a2bf8d5193cc557b2ae0910a1f2d4afc8
result_json_sha256: fae120261ddea78ad01d474e716e124d2f9804e42c6bdb03a1eaaee9d27da50b
change_id: CHG-TW-2026-08-24-001
exception_id: EXC-TW-018
authority_effect: none
---

# VAL-TW-042 exact corrected real-product-depth result

## Disposition

The final exact source-derived Vestro and Air Router machine routes passed on
the frozen 72-path functional candidate. Hannes Zietsman explicitly accepted
both non-compensable product cells and `VAL-TW-042`, with the recorded
limitations acknowledged. Publication remains separately gated.

The controlling JSON candidate is
`docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-product-validation-result-real-product-depth-exact.json`
at
`sha256:fae120261ddea78ad01d474e716e124d2f9804e42c6bdb03a1eaaee9d27da50b`.
The rejected fixed eight-record result and the preceding corrected run remain
historical evidence and are not overwritten or reinterpreted.

## Exact candidate and source bindings

- Functional scope:
  `sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875`
- Requirements baseline:
  `sha256:16e4cbbeb50e8568f0190176df62e74a2bf8d5193cc557b2ae0910a1f2d4afc8`
- Vestro revision: `8bc3b724f56cc72f08f8162c783a7f8e2816b990`
- Air Router revision: `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b`
- Corrected source-baseline receipt:
  `sha256:f6406867be68b99b0cfa89f7ecf33130821d7d6d7fae1ccd135d7c6da4c6d22e`
- Consumer mutation: none; all changes occurred in disposable copies.

## Independent cell results

| Cell | Actual source census | Recovered task links | Direct seeded impact | Route median | False promotions | Raw receipt |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| Vestro | 3 sources; 626 records; 2,657 relationships | 698 / 698 (100%) | 21 / 21 | Markdown 5 ms; strict HTML 5 ms | 0 authority; 0 truth-stage | `sha256:2be22dd8a353c0ef92655726b2e29fdd0ff83aa423e66372fdcd1332a68a2001` |
| Air Router | 4 sources; 719 records; 5,584 relationships | 820 / 820 (100%) | 52 / 52 | Markdown 7 ms; strict HTML 6 ms | 0 authority; 0 truth-stage | `sha256:4ceb488fbc27e0744d26b45fdf53e3cfa85e15fe437b6ac427aa08b879d55703` |

Both cells passed source registration, candidate capture, duplicate navigation,
impact navigation, V&V-before-work, stale-evidence routing, strict HTML
navigation, and complete acceptance-pack recovery. Vestro invalidated actual
results `RESULT-VESTRO-016`, `RESULT-VESTRO-017`, and `RESULT-VESTRO-024` after
the disposable change. Air Router invalidated `VAL-AIR-010` and kept exact
non-code source `SRC-AIR-042` plus
`AIR-ROUTER-PHASE25-DIAGNOSTIC-LAB-002` visible through graph impact and the
acceptance pack.

## Truthful limitations

- The pinned Vestro and Air Router worktrees contain respectively 144 and 210
  observed dirty entries. Exact worktree-state and source-inventory digests are
  bound in the corrected source-baseline receipt.
- Direct relationships are recovered from actual source co-mentions. An
  otherwise isolated stable ID is connected to an actual baseline record from
  the same registered source, explicitly labelled as registered-source
  membership rather than direct semantic evidence.
- The controlled requirement changes exist only inside disposable product
  trial copies. This result proves the representative static lifecycle route;
  it does not prove deployment, runtime health, semantic-HTML authority
  cutover, publication, or release.
- Reviewer continuation, oracle refresh, graph refresh, reinstall, PR checks,
  exact-main checks, tag, and GitHub Release remain separate gates.

## Regression result

The product-lifecycle smoke, product-validation smoke, and release-integrity
smoke all pass on the same functional candidate. After the exact owner
acceptance was recorded, the product validator passed both independent cells,
the combined owner disposition, machine integrity, source binding,
non-compensation, non-code, timing, false-promotion, and content-digest checks.

## Accepted validator result

```text
product_validation_status=passed
product_validation_cell=air_router recovery_percent=100.000 false_authority=0 false_truth_stage=0 markdown_median_ms=7.000 html_median_ms=6.000
product_validation_cell=vestro recovery_percent=100.000 false_authority=0 false_truth_stage=0 markdown_median_ms=5.000 html_median_ms=5.000
product_validation_authority_effect=none
product_validation_release_gate=passed
```

## Exact owner decision recorded

The owner stated:

> Accept corrected Vestro and Air Router product cells and VAL-TW-042 for functional scope sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875, raw digests sha256:2be22dd8a353c0ef92655726b2e29fdd0ff83aa423e66372fdcd1332a68a2001 and sha256:4ceb488fbc27e0744d26b45fdf53e3cfa85e15fe437b6ac427aa08b879d55703, with the recorded limitations acknowledged; publication remains separately gated.

## Next gate

Run the one allowed targeted continuation of the existing integrated Terra
reviewer against this exact accepted product candidate. Oracle refresh and
publication remain held pending the continuation result.
