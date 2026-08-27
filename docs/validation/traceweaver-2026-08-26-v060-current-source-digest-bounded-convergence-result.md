---
id: RESULT-TW-2026-08-26-V060-CURRENT-SOURCE-DIGEST-BOUNDED-CONVERGENCE-001
status: passed_terminal_publication_held
date: 2026-08-26
owner: Oxiom Systems
route: tw-auto_bounded_convergence_window
attempts_used: 2
attempt_cap: 2
command: scripts/traceweaver-smoke-model-context-routing
exit_status: 0
reviewer_identity: terra-integrated-reviewer:root-v060-integrated-review
oracle_digest: sha256:c69dd799fa97598c354d5108f2bc83430a2b752ecc01f1101e486c162b78c74f
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-current-source-digest-bounded-convergence-result; req=REQ-TW-110,REQ-TW-116,REQ-TW-123,REQ-TW-130,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-072,TRACE-TW-074; ver=VER-TW-092,VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 current-source digest bounded-convergence result

## Terminal result

**PASSED / PUBLICATION HELD.** The owner directed TraceWeaver to apply the
bounded-convergence guide through `tw-auto` for the remaining source-digest
rebinding, without rerunning `tw-authority-gate` after each in-scope failure,
while preserving the publication hold.

The window used both authorized full verification attempts. Attempt 1 proved
that the former `MC110_EXACT_ROUTE` requirements-digest failure was closed,
then stopped at `MC110_V1_BYTE_INVARIANCE` on 24 stale derived SEC receipt
digests. The only continuation repair rebound those 24 expectations to the
current bytes for four risk levels of `lfg`, `tw-authority-gate`, `tw-auto`,
`tw-plan`, `tw-vv-define`, and `tw-work`. The focused failing case then passed.
Attempt 2 passed all 72 cases and ended with:

```text
model_context_routing_smoke=pass cases=72
```

No third attempt, authority-gate rerun, product mutation, publication action,
stage, commit, push, PR, merge, tag, release, or deployment occurred.

## Frozen window

| Field | Value |
| --- | --- |
| Worktree | `/Users/hanneszietsman/CrypotAI/TraceWeaver/.worktrees/codex/v050-product-intent-plm-plan` |
| Branch / HEAD | `codex/v050-product-intent-plm-plan` / `e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33` |
| Frozen semantic scope | Current-source/model-context dependency and digest closure only |
| Verification | `scripts/traceweaver-smoke-model-context-routing` |
| Pass condition | exit 0 and `model_context_routing_smoke=pass cases=72` |
| Attempt budget | 2 full attempts |
| Allowed continuation repair | Mechanical current-byte locator or derived receipt digest rebinding with no behavior, authority, or claim change |
| Stop conditions | semantic or authority change, unsafe/out-of-scope finding, budget exhaustion, or success |
| Publication | separately held |

Authority, product intent, accepted limitations, semantic-cutover boundaries,
runtime claims, deployment claims, release claims, and publication claims were
not rewritten between attempts.

## Static source closure and retained-review closure

Before the first full attempt:

- the canonical and packaged model-context oracle copies were byte-identical;
- the oracle contained 88 routes, 6 categories, 528 route/category cells,
  0 open cells, and 6 bounded-convergence-guide cells;
- 1,949 physical locator bindings across both oracle copies and the seven
  model-context fixtures matched current repository bytes; and
- implementation-mode code-anchor inspection and the bounded diff check passed
  with zero findings.

The existing integrated Terra reviewer continued under the same identity,
`terra-integrated-reviewer:root-v060-integrated-review`, and closed both retained
findings `P1-BCW-001` and `P1-BCW-002`. It reported 0 open P0/P1 findings,
checked 767 fixture locator bindings with 0 mismatches, and explicitly
authorized the reviewer-bound canonical oracle write. The canonical write was
then mirrored byte-for-byte.

| Oracle property | Terminal value |
| --- | --- |
| Canonical/mirror file SHA-256 | `fe07aabfe64af77b1bc50fc451a354388896c29f048e035f1b0b2c6f69bf7e75` |
| Internal oracle digest | `sha256:c69dd799fa97598c354d5108f2bc83430a2b752ecc01f1101e486c162b78c74f` |
| Routes / cells / open | `88 / 528 / 0` |
| Bounded-convergence guide cells | `6` |

## Attempts

### Attempt 1 of 2

The full command exited 1 after these relevant results:

```text
model_context_case=MC110_EXACT_ROUTE expected=pass_one_route actual=pass
model_context_case=MC110_ALIAS_ROUTE expected=pass_alias_to_tw_auto actual=pass
model_context_case=MC110_ZERO_ROUTE expected=held_model_context_route_invalid actual=pass
model_context_case=MC110_MULTIPLE_ROUTE expected=held_model_context_route_invalid actual=pass
v1 byte drift lfg/L0
```

The host also emitted an unrelated `io-console` native-extension warning. The
actual assertion was the derived receipt byte drift, not that warning.

Read-only comparison of all 116 SEC expectations found exactly 24 mismatches:
the six guide-governed routes at `L0` through `L3`. No schema, receipt shape,
route outcome, behavior, or authority changed. Rebinding only those 24
`bytes_sha256` values was therefore an anticipated mechanical source-digest
repair inside the remaining budget.

The focused confirmation passed:

```text
model_context_case=MC110_V1_BYTE_INVARIANCE expected=pass_byte_identical_without_explicit_shadow_invocation actual=pass
model_context_routing_smoke=pass cases=1
```

### Attempt 2 of 2

The same full command exited 0. All 72 cases passed, including exact routing,
v1 byte invariance and strict-consumer compatibility, exact inventory,
six-category oracle closure, delivery boundaries, receipt integrity,
advisory/no-publication boundaries, installer rollback, release-readiness
holds, and independent complete oracle review.

## Terminal candidate hashes

| Path | SHA-256 |
| --- | --- |
| `traceability-matrix.md` | `3d8de7e4cfb3501585cc857f00308795e1bcafbe52730a3a5d08851856292781` |
| `scripts/traceweaver-refresh-v060-model-context-oracle` | `95ade04ac55ae2cbaeef6578d76eff271a7b1b18db97d0a715d7eaf281d14c6b` |
| `scripts/traceweaver-smoke-model-context-routing` | `483b5fc00cf060de37096d0aecc4a6e9335cd3f504e0cb62e80b8ee2b4900a97` |
| `fixtures/model-context-routing/oracle-review-complete.json` | `83bb940c1c2ce86ecd81e810561d89529cf47e55754f77ffd258cde2b1e16447` |
| `fixtures/model-context-routing/source-manifest-complete.json` | `f37c4f1752a3a69e09f98bd329485719017c0a7580da7071fc3254bf39080c1b` |
| `fixtures/model-context-routing/source-manifest-delivery-direct.json` | `87bd293d75da48fc4694361b22481aa38379f94b9a691ff6dfaa51a7fc0b5804` |
| `fixtures/model-context-routing/source-manifest-delivery-locator.json` | `13eb8a6805e3bf398e1b3d55e0ac860997970a7768d3befdc9437bf4e5645ce2` |
| `fixtures/model-context-routing/source-manifest-delivery-shard.json` | `23f05c44b636a5efe854e0d01f74097c7a4ad511c979e668ef12108af7d69e0f` |
| `fixtures/model-context-routing/source-manifest-temporal-external-excluded.json` | `cdd073bace8940bfa2e18379b28cf0a70aa7990049870371ce9785badaa064e9` |
| `fixtures/model-context-routing/source-manifest-temporal-external-required.json` | `b2dbac1a409ab04a556beecbe3fb736f31558f7c77afb07384e6ba59ec02f038` |
| `plugins/traceweaver-core/references/model-context-oracle-adequacy-review.json` | `fe07aabfe64af77b1bc50fc451a354388896c29f048e035f1b0b2c6f69bf7e75` |
| `plugins/traceweaver-core/skills/tw-auto/references/model-context-oracle-adequacy-review.json` | `fe07aabfe64af77b1bc50fc451a354388896c29f048e035f1b0b2c6f69bf7e75` |
| `fixtures/model-context-routing/v1-receipts.json` | `8fd2096768d82f56c7e3d61ac9a9b020a08daef23e5e5af99b172409ec32d1e7` |

This terminal evidence file is intentionally not an input to the verified
oracle or fixtures. Recording the result therefore cannot invalidate the
candidate identity that produced it.

## Preserved boundaries

- Released `traceweaver-core--v0.5.0` was not modified or republished.
- The mixed root remains on `codex/lean-convergence` at observed HEAD
  `f7c3f0451142f1c72f8eb9bf121648f5b1575d5e`; no root write was made.
- Accepted Vestro and Air Router product limitations remain unchanged; this
  window did not rebind or mutate either product repository.
- Semantic cutover, runtime, deployment, release-ready, staging, commit, push,
  PR, merge, tag, GitHub Release, and publication remain held.

## Next controlled step

Use the clean 72-case result as input to a fresh exact Vestro and Air Router
product-evidence rebinding, preserving the accepted limitations and keeping
publication separately gated. Do not rerun this bounded window or reopen its
closed reviewer findings.
