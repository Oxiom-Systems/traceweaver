---
id: VAL-TW-042-REAL-PRODUCT-DEPTH-RESULT-2026-08-24-001
status: machine_routes_passed_exact_owner_disposition_pending
date: 2026-08-24
owner: Oxiom Systems
functional_scope_digest: sha256:b17b50d4801e038de96e31644f28b616e615afc9bfee79539558249aa156c8a6
requirements_baseline_hash_sha256: bd4f0d75ceb05f8da4f489218f134df4ff79a6271c4d8c4a9bd2d9b89b47e6bd
result_json_sha256: 521531c448cb1190c941202cf29742729b98f3e2cb6e67d9d285240c83958e85
change_id: CHG-TW-2026-08-24-001
exception_id: EXC-TW-018
authority_effect: none
---

# VAL-TW-042 corrected real-product-depth result

## Disposition

The corrected source-derived Vestro and Air Router machine routes passed on
the exact 72-path functional candidate. Product and release acceptance remain
held until Hannes Zietsman explicitly accepts or rejects both non-compensable
cells and the exact candidate.

The controlling JSON candidate is
`docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-product-validation-result-real-product-depth.json`
at
`sha256:521531c448cb1190c941202cf29742729b98f3e2cb6e67d9d285240c83958e85`.
The earlier fixed eight-record result remains rejected historical evidence and
is not overwritten or reinterpreted.

## Exact candidate and source bindings

- Functional scope:
  `sha256:b17b50d4801e038de96e31644f28b616e615afc9bfee79539558249aa156c8a6`
- Requirements baseline:
  `sha256:bd4f0d75ceb05f8da4f489218f134df4ff79a6271c4d8c4a9bd2d9b89b47e6bd`
- Vestro revision: `8bc3b724f56cc72f08f8162c783a7f8e2816b990`
- Air Router revision: `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b`
- Corrected source-baseline receipt:
  `sha256:f6406867be68b99b0cfa89f7ecf33130821d7d6d7fae1ccd135d7c6da4c6d22e`
- Consumer mutation: none; all changes occurred in disposable copies.

## Independent cell results

| Cell | Actual source census | Recovered task links | Direct seeded impact | Route median | False promotions | Raw receipt |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| Vestro | 3 sources; 626 records; 2,657 relationships | 698 / 698 (100%) | 21 / 21 | Markdown 5 ms; strict HTML 4 ms | 0 authority; 0 truth-stage | `sha256:f2cab94888926cfd6082cc65e4f6cebead80f030c7032fb2d63c054490b95ae1` |
| Air Router | 4 sources; 719 records; 5,584 relationships | 820 / 820 (100%) | 52 / 52 | Markdown 7 ms; strict HTML 5 ms | 0 authority; 0 truth-stage | `sha256:6b22211927e6904f4bc79448b03e5720423b5613dcc59694495b987dc580307f` |

Both cells passed source registration, candidate capture, duplicate navigation,
impact navigation, V&V-before-work, stale-evidence routing, strict HTML
navigation, and complete acceptance-pack recovery. Vestro invalidated three
actual result records after the disposable change. Air Router invalidated
`VAL-AIR-010` and kept exact non-code source `SRC-AIR-042` plus
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

## Expected held validator result

The exact validator currently returns only:

```text
product_validation_finding=cell_not_independently_accepted detail=Vestro
product_validation_finding=cell_not_independently_accepted detail=Air Router
product_validation_finding=owner_disposition_not_accepted
```

Machine integrity, source bindings, recovery, non-compensation, non-code
artifact, timing, false-promotion, and content-digest checks otherwise pass.

## Exact owner decision requested

To accept this candidate, the owner may state:

> Accept corrected Vestro and Air Router product cells and VAL-TW-042 for functional scope sha256:b17b50d4801e038de96e31644f28b616e615afc9bfee79539558249aa156c8a6, raw digests sha256:f2cab94888926cfd6082cc65e4f6cebead80f030c7032fb2d63c054490b95ae1 and sha256:6b22211927e6904f4bc79448b03e5720423b5613dcc59694495b987dc580307f, with the recorded limitations acknowledged; publication remains separately gated.

Rejection must identify the failed cell and deficiency. No product can
compensate for the other.

## Next gate

Obtain the exact owner disposition. Only after acceptance may the one allowed
targeted continuation of the existing integrated Terra reviewer run.
