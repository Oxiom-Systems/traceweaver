---
id: RESULT-TW-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-FOCUSED-001
status: failed_nonclean_exact_route_requirements_digest_mismatch_route_stopped
date: 2026-08-26
owner: Oxiom Systems
change_id: CHG-TW-2026-08-26-004
exception_id: EXC-TW-021
attempt_number: 1
attempt_cap: 1
command: scripts/traceweaver-smoke-model-context-routing
exit_status: 1
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 8349b9c1d883c79a345eb7e10e86ab6e9f965805e34d894a28be44cde3a69a79
workflow_profile_revision: 5
workflow_profile_hash: sha256:52e2732d13df824411d3bdb7f9553d9e6b9d88af66b39a50c4bce187917b14e7
authority_gate_sha256: c9f03f8aa7251290d50c18ee52f7437cea992420f5b688c8f534129e14147abf
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-post-oracle-ci-convergence-focused-verification-result; req=REQ-TW-110,REQ-TW-123,REQ-TW-130,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-072,TRACE-TW-074; ver=VER-TW-092,VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 post-oracle CI convergence focused verification result

## Result

**FAILED / STOPPED.** The one focused verification attempt authorized by
`CHG-TW-2026-08-26-004` and `EXC-TW-021` was consumed. The complete
model-context smoke exited 1 at the first `MC110_EXACT_ROUTE` assertion after
six `MC109` cases completed. No rerun was made.

The route must not proceed to functional-digest acceptance, Vestro/Air Router
rebinding, Terra reviewer continuation, CI convergence, release readiness, or
publication.

## Frozen invocation

| Field | Value |
| --- | --- |
| Worktree | `/Users/hanneszietsman/CrypotAI/TraceWeaver/.worktrees/codex/v050-product-intent-plm-plan` |
| Branch / HEAD | `codex/v050-product-intent-plm-plan` / `e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33` |
| Command | `scripts/traceweaver-smoke-model-context-routing` |
| Attempt | 1 of 1 |
| Expected terminal | `model_context_routing_smoke=pass cases=72` |
| Observed terminal | Ruby `RuntimeError: exact_route` |
| Exit | 1 |
| Requirements canonical baseline | `sha256:8349b9c1d883c79a345eb7e10e86ab6e9f965805e34d894a28be44cde3a69a79` |
| Requirements physical file at attempt | `sha256:d1ce59deaf7fc74664c65a9355090e800c1061c8b06fd2969b9d48117fbce949` |
| Workflow profile | revision 5 / `sha256:52e2732d13df824411d3bdb7f9553d9e6b9d88af66b39a50c4bce187917b14e7` |

## Observed output

```text
model_context_case=MC109_CANONICAL_DIGEST expected=pass_digest_match actual=pass
model_context_case=MC109_AXIS_INDEPENDENCE expected=pass_only_requested_axis_changes actual=pass
model_context_case=MC109_UNSUPPORTED_SCHEMA expected=held_model_context_route_invalid actual=pass
model_context_case=MC109_INVALID_ENUM expected=held_model_context_route_invalid actual=pass
model_context_case=MC109_DUPLICATE_ROUTE expected=held_model_context_route_invalid actual=pass
model_context_case=MC109_DIGEST_MISMATCH expected=held_model_context_route_invalid actual=pass
-:604:in `block (2 levels) in <main>': exact_route (RuntimeError)
```

The `actual=pass` values for the negative `MC109` cases mean that each
expected rejection assertion passed; they are not false acceptance results.

## Exact eleven-file state at attempt

| Path | Post-change SHA-256 |
| --- | --- |
| `fixtures/model-context-routing/oracle-review-complete.json` | `8896b0bb89c6455404eeab81e672f0ae73452ccf3f82178c7d64c6479e49956c` |
| `fixtures/model-context-routing/route-floors-expected.yml` | `7a1845f31ccb5896cad07d61d6118fea9543b0300e23e5cad77d846b3ad4f472` |
| `fixtures/model-context-routing/source-manifest-complete.json` | `9a085636bf16f6f9a2abf37f3aac245991d9f14127912b11d57c2f112e5fc27e` |
| `fixtures/model-context-routing/source-manifest-delivery-direct.json` | `47e0796897b251786a4fabf22316f5c2c67a91682fe3e7ceb9d24ed731e58199` |
| `fixtures/model-context-routing/source-manifest-delivery-locator.json` | `3df4de7a03249beb42cac6719eb9c2cf281e28e3509387be404507a4e7bce3ec` |
| `fixtures/model-context-routing/source-manifest-delivery-shard.json` | `5f1ea08358e1db03e4b0844e9eaacc4efbdef074c0a425b8d473cc4c6e304f31` |
| `fixtures/model-context-routing/source-manifest-temporal-external-excluded.json` | `865c0f480e068ff5d7621702a48512700ec75f43aa6a7ce895bb44ccde74041d` |
| `fixtures/model-context-routing/source-manifest-temporal-external-required.json` | `28e989461fb4cacf9ab3f233c4627fedc75083e06165bfb0465325705054c0bf` |
| `fixtures/model-context-routing/strict-v1-consumer.rb` | `729e9842553e8e2bf71957fe620d9d977242490a770513fc94afe99aa8a43b22` |
| `fixtures/model-context-routing/v1-receipts.json` | `c0cad6cc0a58df3a69413fed3d3f06d0a51679e5d9552404f50c4346e8e4f3e9` |
| `scripts/traceweaver-smoke-model-context-routing` | `bea58b9d23892671f5708ff865837b8b4e9bc6138901368c23398abb68f2b80a` |

Static JSON/YAML/Ruby/shell checks and the implementation code-anchor scan were
clean before the attempt. The eleven bytes matched the preregistered disposable
probe exactly.

## Cause

The first exact route is `tw-plan`, which consumes
`fixtures/model-context-routing/source-manifest-complete.json`. That manifest
binds `requirements.md` to physical digest
`sha256:4402cd518c708ffa90b3f076424ef75baa7b6ce7ea636fb2d9215afd20318687`,
while the final revision-5 authority promotion left the physical file at
`sha256:d1ce59deaf7fc74664c65a9355090e800c1061c8b06fd2969b9d48117fbce949`.
All other `required_sources` in the complete manifest match.

The disposable probe was generated and passed before final revision-5
authority/status/hash propagation. The approved eleven probe files therefore
became stale against the controlled requirements source before the real
attempt. Preflight verified the preregistered target hashes but omitted a
current-locator digest comparison. The failure is a sequencing and preflight
defect, not a recurrence of P1-005 or P1-006.

Seven of the refreshed fixtures contain the stale requirements physical digest:
`oracle-review-complete.json`, `source-manifest-complete.json`, the three
`source-manifest-delivery-*.json` files, and the two
`source-manifest-temporal-external-*.json` files.

## Preserved boundaries

- Released `traceweaver-core--v0.5.0` was not modified or republished.
- The mixed root remains on `codex/lean-convergence` at observed HEAD
  `f7c3f0451142f1c72f8eb9bf121648f5b1575d5e`; no root write was made.
- Accepted product limitations remain unchanged.
- Vestro and Air Router repositories were not mutated.
- The existing Terra reviewer was not continued.
- Semantic cutover, runtime, deployment, release, staging, commit, push, PR,
  merge, tag, GitHub Release, and publication remain held.

## Required next decision

`EXC-TW-021` is consumed and expired. A new owner decision and fresh authority
gate are required before any fixture rebinding or second model-context smoke.
The safe order is: record the final controlled authority state first; freeze
the resulting physical `requirements.md` digest; rebind only the seven named
fixtures to that exact digest; statically prove every referenced locator
matches; then permit at most one new full 72-case attempt.
