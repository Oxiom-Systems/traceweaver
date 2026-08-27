---
id: RED-TW-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-001
status: passed_expected_failure_and_isolated_exact_scope_probe
date: 2026-08-26
owner: Oxiom Systems
gap_id: GAP-TW-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-001
proposed_change_id: CHG-TW-2026-08-26-004
proposed_exception_id: EXC-TW-021
requirements: REQ-TW-110, REQ-TW-123, REQ-TW-130, REQ-TW-143, REQ-TW-145
trace: TRACE-TW-072, TRACE-TW-074
verification: VER-TW-092, VER-TW-094
validation: VAL-TW-042
current_functional_scope_digest: sha256:22d5d66acfa3b0c5abbe27ef7d478106768ee386f45c9332a1d25f72627d8719
authority_effect: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-post-oracle-ci-convergence-red-evidence; req=REQ-TW-110,REQ-TW-123,REQ-TW-130,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-072,TRACE-TW-074; ver=VER-TW-092,VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 post-oracle CI convergence RED

## Disposition

**RED reproduced; bounded isolated correction probe passed.** The accepted
Vestro and Air Router product result remains bound to the unchanged 76-path
functional scope at
`sha256:22d5d66acfa3b0c5abbe27ef7d478106768ee386f45c9332a1d25f72627d8719`.
The reviewer-bound canonical oracle is now current, but the checked-in Core
0.5.0 model-context acceptance fixtures still bind the pre-0.6.0 requirements,
map, route inventory, SEC receipts, and README digests. The production smoke
therefore fails before release readiness can be claimed.

This is not a recurrence of `P1-005-continuation`. That finding is closed
clean. It is a distinct post-oracle CI convergence gap exposed only after the
authorized canonical oracle write.

## Production RED

The real worktree command:

```sh
scripts/traceweaver-smoke-model-context-routing --case MC110_EXACT_ROUTE
```

exits `1` with `exact_route`. A direct compiler replay exposes the controlling
reason:

```text
outcome=held_source_delivery_invalid
held_reason=digest_mismatch:requirements.md
source_manifest_digest=sha256:e25976a4b0f1b982743965dede4abfdd4b6efd972704b2aacdb44c6c7c0db95b
```

The fixture records requirements digest `sha256:6cbee8...d118` while the
current file digest is
`sha256:4402cd518c708ffa90b3f076424ef75baa7b6ce7ea636fb2d9215afd20318687`.
Its map source similarly records `sha256:a8fdba...67cb` while the current map
file digest is
`sha256:861d05408f57a085e4f3f157ce66d0c42c33c9d817fbdac6bd610b954f68460a`.
The independent-complete-review case separately fails
`oracle_review_map_digest` because its 87-route / 522-cell fixture predates the
current 88-route / 528-cell oracle.

## Exact isolated correction probe

No functional file in the controlled worktree was changed. A disposable copy
under `/private/tmp` was used to establish the smallest passing delta. The
probe passed:

```text
model_context_routing_smoke=pass cases=72
```

The exact behavior-bearing scope is eleven files:

| Artifact | Current SHA-256 | Passing probe SHA-256 |
| --- | --- | --- |
| `fixtures/model-context-routing/oracle-review-complete.json` | `9111f226b67ac5b163bec96d6ee68a9e983022b745dab2cb8d7e358245088f5c` | `8896b0bb89c6455404eeab81e672f0ae73452ccf3f82178c7d64c6479e49956c` |
| `fixtures/model-context-routing/route-floors-expected.yml` | `fe9c147fab5272d942ee8ce4990597131b98c5cb1dbe4521653ab583308ae40a` | `7a1845f31ccb5896cad07d61d6118fea9543b0300e23e5cad77d846b3ad4f472` |
| `fixtures/model-context-routing/source-manifest-complete.json` | `e25976a4b0f1b982743965dede4abfdd4b6efd972704b2aacdb44c6c7c0db95b` | `9a085636bf16f6f9a2abf37f3aac245991d9f14127912b11d57c2f112e5fc27e` |
| `fixtures/model-context-routing/source-manifest-delivery-direct.json` | `309a18df3784041a0161238b534861a0bf3aa88fed1b1effcdadb467465c74df` | `47e0796897b251786a4fabf22316f5c2c67a91682fe3e7ceb9d24ed731e58199` |
| `fixtures/model-context-routing/source-manifest-delivery-locator.json` | `0efd64de35e4956284adaa0f72e0fcf263d862719c59a54fc65e307c23384d2c` | `3df4de7a03249beb42cac6719eb9c2cf281e28e3509387be404507a4e7bce3ec` |
| `fixtures/model-context-routing/source-manifest-delivery-shard.json` | `dd2c7e8377eba65d95300e18bd2e7e319501e84b6056cd8c740e55b03cf09df2` | `5f1ea08358e1db03e4b0844e9eaacc4efbdef074c0a425b8d473cc4c6e304f31` |
| `fixtures/model-context-routing/source-manifest-temporal-external-excluded.json` | `2bc9fdbe33da995c6f85d2d363dd01c6429bb862ee1c1efaffaac084e11f1b36` | `865c0f480e068ff5d7621702a48512700ec75f43aa6a7ce895bb44ccde74041d` |
| `fixtures/model-context-routing/source-manifest-temporal-external-required.json` | `517c4e7a2d8f2b78a19796cbf05142960fc681645813606e19a7ace244cbb116` | `28e989461fb4cacf9ab3f233c4627fedc75083e06165bfb0465325705054c0bf` |
| `fixtures/model-context-routing/strict-v1-consumer.rb` | `fd1ffddc5c2b6cbe27e14a79f58dd8cb165a44a9ad80b28227d1cf58fed26719` | `729e9842553e8e2bf71957fe620d9d977242490a770513fc94afe99aa8a43b22` |
| `fixtures/model-context-routing/v1-receipts.json` | `7f7b3b1fd43266142bb56f225051a7dab83fd98d89f54d27168977d3be3b977a` | `c0cad6cc0a58df3a69413fed3d3f06d0a51679e5d9552404f50c4346e8e4f3e9` |
| `scripts/traceweaver-smoke-model-context-routing` | `b0020a588a364e4fcb327a4d6d6f78bf219b111088eed281ce0982fe8c7a3ad1` | `bea58b9d23892671f5708ff865837b8b4e9bc6138901368c23398abb68f2b80a` |

The ten fixtures are deterministic rebindings to current approved inputs. The
smoke update does two things only:

1. it matches the `tw-lifecycle` direct-dependency expectation to the exact
   production oracle dependency set; and
2. it invokes the compiler copied into the deliberately tampered temporary
   package for the canonical-oracle negative, so the test cannot fall back to
   the untampered source package.

The probe-only 86-path functional digest is
`sha256:8aff017385c41c835f5621874a99a41dddd03bff465edd4c02a417d2de206768`.
It is diagnostic only: a controlled profile-revision-5 promotion would also
change authority bindings, so this digest is not a product-acceptance target.

## Authority and rollback boundary

`CHG-TW-2026-08-26-003` / `EXC-TW-020` are consumed by the prior repair,
exact-product disposition, and same-reviewer closure. They do not authorize
this eleven-file functional change. If a new exception is approved, rollback
is exact restoration of the eleven current hashes above. Core 0.5.0, Vestro,
Air Router, the mixed root worktree, semantic cutover, deployment, staging,
commit, push, PR, tag, release, and publication remain untouched and held.

## Next gate

Obtain the exact owner decision in the post-oracle CI convergence decision
packet, then run `/tw-authority-gate` against the promoted revision-5 hashes
before any of the eleven functional files are changed.
