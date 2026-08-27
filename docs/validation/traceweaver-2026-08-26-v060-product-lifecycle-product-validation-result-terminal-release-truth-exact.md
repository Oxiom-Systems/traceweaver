---
id: VAL-TW-042-TERMINAL-RELEASE-TRUTH-EXACT-RESULT-2026-08-26-001
status: machine_cells_passed_explicit_owner_disposition_required
date: 2026-08-26
owner: Oxiom Systems
functional_scope_digest: sha256:cabd4cfcd15fa9e86340019fbe858682647ebe6b50452649c94deb5b13100c54
functional_scope_path_count: 74
requirements_baseline_hash_sha256: 434eea9da9a22c8630a75e31e5e8898182cad4e9954111968753ec48206a3624
result_json_sha256: 8bcb2c1f24b42fb959a119d0affa706ed0b327c47bea49eb73c22bde8d85193c
change_id: CHG-TW-2026-08-24-002
exception_id: EXC-TW-019
authority_effect: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-terminal-release-truth-exact-product-result; req=REQ-TW-136,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VAL-TW-042 terminal-repair exact product result

## Disposition required

Both fresh source-derived machine cells pass on the exact 74-path terminal
repair candidate. No previous cell or owner acceptance is inherited. The
controlling candidate JSON remains held only for the named cell and owner
dispositions at
`docs/validation/traceweaver-2026-08-26-v060-product-lifecycle-product-validation-result-terminal-release-truth-exact.json`
(`sha256:8bcb2c1f24b42fb959a119d0affa706ed0b327c47bea49eb73c22bde8d85193c`).

## Exact candidate and source bindings

- Functional scope:
  `sha256:cabd4cfcd15fa9e86340019fbe858682647ebe6b50452649c94deb5b13100c54`
  across 74 functional paths.
- Requirements baseline:
  `sha256:434eea9da9a22c8630a75e31e5e8898182cad4e9954111968753ec48206a3624`.
- Vestro revision: `8bc3b724f56cc72f08f8162c783a7f8e2816b990`.
- Air Router revision: `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b`.
- Consumer mutation: none; all controlled changes occurred in disposable
  copies.

## Independent machine results

| Cell | Actual source census | Recovered task links | Direct seeded impact | Route median | False promotions | Raw receipt |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| Vestro | 3 sources; 626 records; 2,657 relationships | 698 / 698 (100%) | 21 / 21 | Markdown 5 ms; strict HTML 4 ms | 0 authority; 0 truth-stage | `sha256:813299971cf731867de2d3b32a9fe7fcbc59b93f429d2e45e58d0ce48e745987` |
| Air Router | 4 sources; 719 records; 5,584 relationships | 820 / 820 (100%) | 52 / 52 | Markdown 6 ms; strict HTML 5 ms | 0 authority; 0 truth-stage | `sha256:f9f18f14ea9960dd05daaa12c0ce637dcef5a1b5fe6cb2a39d4c400cbfd8d590` |

Air Router again binds non-code source `SRC-AIR-042` and artifact
`AIR-ROUTER-PHASE25-DIAGNOSTIC-LAB-002` through impact and acceptance-pack
evidence. The product validator reports only the expected pending acceptance
findings; machine integrity, content binding, non-compensation, timing,
non-code, and false-promotion checks are otherwise clean.

## Truthful limitations

- The pinned Vestro and Air Router worktrees retain the dirty-state and
  immutable-revision limitations already recorded in their source-baseline
  receipt; the product route reads them but does not mutate them.
- Direct relationships come from actual source co-mentions. Registered-source
  membership is explicitly labelled when needed for graph closure and is not
  presented as direct semantic evidence.
- The controlled requirement changes exist only in disposable product trial
  copies. This proves the representative static lifecycle route, not
  deployment, runtime health, semantic-HTML authority cutover, publication, or
  release.
- The retained Terra review, reviewer-bound oracle, graph, reinstall, PR/CI,
  tag, and GitHub Release remain separate gates.

## Exact owner decision requested

To accept the two non-compensable cells and `VAL-TW-042` for this exact
candidate, use:

> Accept terminal-repair Vestro and Air Router product cells and VAL-TW-042 for functional scope sha256:cabd4cfcd15fa9e86340019fbe858682647ebe6b50452649c94deb5b13100c54, raw digests sha256:813299971cf731867de2d3b32a9fe7fcbc59b93f429d2e45e58d0ce48e745987 and sha256:f9f18f14ea9960dd05daaa12c0ce637dcef5a1b5fe6cb2a39d4c400cbfd8d590, with the recorded limitations acknowledged; publication remains separately gated.

## Next gate

After explicit owner acceptance, bind the accepted state into the capsule and
matrix, rerun the validator and unchanged release-integrity smoke, then invoke
the existing integrated Terra reviewer once for the two retained findings.
