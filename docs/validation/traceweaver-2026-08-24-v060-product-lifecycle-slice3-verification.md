---
id: RESULT-TW-051-SLICE-3
status: passed_component_green_integrated_review_and_validation_held
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-139, REQ-TW-140, REQ-TW-142
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-slice3-verification; req=REQ-TW-139,REQ-TW-140,REQ-TW-142; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Slice 3 — Lifecycle Graph, Impact, And Closure

## Disposition

Slice 3 component verification passed. The provider-independent
`tw-lifecycle-graph/1` projection binds one checked source registry, one
current lifecycle generation/baseline, every registered source, canonical
lifecycle record digests, and the closed relationship set into a
content-addressed graph with `authority_effect: none`.

Stale evidence and verification/validation results retain their historical
tested baselines. Mixed baselines remain fail-closed for current records, while
the graph exposes the one current authority baseline separately from any
explicit stale evidence baseline.

The graph supplies exact-ID-first search, text search, incoming/outgoing
relationships, directed paths, bidirectional impact paths, stale-evidence and
re-verification signals, and duplicate-candidate explanations with shared
terms, source identity, provenance, and deterministic confidence. The graph is
a derived navigation index: it cannot approve, validate, accept, publish, or
replace its registered authority sources.

All 17 registered lifecycle record classes use the same projection envelope.
Every record source must exactly match the registry locator, version, digest,
and role; every relationship target must resolve in the same closure. An
immutable external reference is represented by its exact source receipt with
zero implicit fetches. One accepted-cycle refresh plus a clean deterministic
rebuild/check remains the policy. Optional Graphify context is explicitly
absent from the canonical identity and may only be non-authoritative
enrichment.

## Test-first evidence

Before implementation, the focused smoke exited `1` with:

```text
v060_lifecycle_graph_smoke=failed reason=missing_graph_executable
```

## GREEN execution

```sh
scripts/traceweaver-smoke-v060-lifecycle-graph
scripts/traceweaver-smoke-v060-lifecycle-closure
scripts/traceweaver-benchmark-v060-product-lifecycle
scripts/traceweaver-smoke-v060-lifecycle-schema
scripts/traceweaver-smoke-v060-lifecycle-evidence
scripts/traceweaver-smoke-v060-lifecycle-staleness
scripts/traceweaver-smoke-skill-execution-contract
```

```text
v060_lifecycle_graph_smoke=pass
v060_lifecycle_graph_determinism=pass
v060_lifecycle_exact_id_and_navigation=pass
v060_lifecycle_impact_invalidation=pass
v060_lifecycle_duplicate_explanations=pass
v060_lifecycle_closure_negatives=pass
v060_lifecycle_closure_smoke=pass
v060_lifecycle_closure_reproducibility=pass
v060_lifecycle_external_receipt_no_fetch=pass
v060_lifecycle_closure_freshness=pass
v060_lifecycle_omitted_orphan_stale_unsafe=pass
v060_lifecycle_schema_smoke=pass
v060_lifecycle_evidence_smoke=pass
v060_lifecycle_staleness_entrypoint=pass
skill-execution-contract: PASS
```

Negative cases reject duplicate record IDs, unresolved relationship targets,
orphan records and registered sources, mixed baselines and generations, stale
source digests, mismatched record/source identities, missing or mismatched
external receipts, unsupported closure members, symlinks and unsafe paths,
malformed/tampered graphs, authority promotion, stale accepted-cycle graphs,
and non-reproducible closure output.

The successor seed harness now reports eight remaining deliverables instead of
the original sixteen. That expected product-level RED is retained: Slices 4–8,
integrated review, representative product validation, and release evidence are
still required before `ATP-TW-051` can pass.

## Fixed-corpus performance

The published raw measurement record is
`docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-slice3-benchmark.json`
with identity
`sha256:77d61bda0c051735394a64029140211f6825ae7501eb0a9d912d06bcc6e36573`.
It uses fixed seed `TW-V060-FIXED-2000-001`, 2,000 records across all 17
lifecycle classes, 10 warmups per operation, 30 measured samples per
operation, monotonic time, process-boundary-inclusive measurements, and
nearest-rank p95.

| Operation | Observed p95 | Accepted threshold | Result |
| --- | ---: | ---: | --- |
| deterministic build | 369.846 ms | 1,500 ms | pass |
| warm exact status | 127.051 ms | 250 ms | pass |
| warm exact-ID-first search | 129.077 ms | 250 ms | pass |
| warm impact | 134.162 ms | 250 ms | pass |

The frozen baseline route registers three repository-wide searches for the
benchmark question: exact ID, text, and recursive impact-reference scans. The
graph route registers zero, a measured 100 percent reduction against the
required minimum 50 percent. Zero search remains labeled aspirational rather
than being substituted for the accepted pass criterion.

The saved evidence was independently recalculated from its 30 raw samples;
all sample counts, nearest-rank values, thresholds, and result flags match.

## Callable route

After regenerating the SEC registry from the completed Slice 3 skill text,
invocation `TW-LIFECYCLE-2026-08-24-V060-SLICE3-001` resolved exactly once at
risk `L3` against integration baseline
`e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33`. Receipt
`sha256:ebc8f65fc3dbf0aab4eed5806514beefaefc214288b271e4a3d73f62efd387fe`
records the implementation route, no child dispatch, no served-model claim,
no authority promotion, and terminal graph refresh deferred until integrated
review.

## Artifact identities

| Artifact | SHA-256 |
| --- | --- |
| `plugins/traceweaver-core/references/lifecycle/lifecycle-graph.schema.json` | `c4f9c5d539f7033bfb1d8caea5f03116424d997f5963571c14c3eaf2893fe1ce` |
| `plugins/traceweaver-core/skills/tw-lifecycle/scripts/traceweaver-lifecycle-graph` | `af8325692f74a00cf13e6fda785cfa223d38db0720a8e96d2a6b738177c7f2a7` |
| `scripts/traceweaver-smoke-v060-lifecycle-graph` | `64f7f02f2547ff9a2e5b8902df447644c06d042020cebf0427c7d039e76a1ee6` |
| `scripts/traceweaver-smoke-v060-lifecycle-closure` | `48721b488a9a8f6edacbd52cc6bd1c287a20e25b858303fc6cf76476a2794958` |
| `scripts/traceweaver-benchmark-v060-product-lifecycle` | `b096e8bf032ee017cec9f1ae09b6f95255ade1492aef4d29a992035ab38b1763` |
| raw benchmark evidence | `77d61bda0c051735394a64029140211f6825ae7501eb0a9d912d06bcc6e36573` |
| `plugins/traceweaver-core/skills/tw-lifecycle/SKILL.md` | `bafcb5b60da014db4bbd64af97d46303a2ee6f334bffbc7ac203b8f3bbe748b4` |
| generated SEC registry | `13ea8e412af994d5f1e3f570c225e93a1bf8622cc492528f9471403b8ca41b26` |

These are point-in-time Slice 3 identities. Later authorized slices may update
the shared lifecycle skill and generated SEC registry; terminal same-candidate
evidence must bind their final identities.

## Held claims and next gate

The authoritative repository-wide `tw-graph` freshness receipt remains stale
by design because Slices 1–3 changed the candidate after Slice 0. The retained
route requires one final refresh/check after the frozen complete candidate and
integrated review, not a misleading refresh after each dirty slice.

Proceed to Slice 4 strict semantic HTML, deterministic projection, parity,
consumer census, atomic cutover refusal/rollback, and release-gate evidence.
Keep authority cutover, integrated review, representative product validation,
acceptance, publication, and release held.
