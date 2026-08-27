---
id: RESULT-TW-051-SLICE-4
status: passed_component_green_real_product_and_authority_cutover_held
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-131, REQ-TW-132, REQ-TW-133, REQ-TW-134, REQ-TW-138
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-slice4-verification; req=REQ-TW-131,REQ-TW-132,REQ-TW-133,REQ-TW-134,REQ-TW-138; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Slice 4 — Strict Semantic HTML And Cutover Boundary

## Disposition

Slice 4 component verification passed. The lifecycle projector accepts only a
current deterministic lifecycle graph and its exact registry/record closure.
It renders accessible, offline, printable semantic HTML with every stable ID,
controlled field, source/baseline identity, lifecycle state, and typed
relationship visibly recoverable without scripts, CSS interpretation, a
network, or repository search.

One `tw-lifecycle-html/1` manifest binds the parser lock, graph, source closure,
baseline, record bytes, exact original HTML article spans, visible text,
relationships, page bytes, and authority role. Two builds are byte-identical.
Generated HTML is always `derived_non_authoritative` with
`authority_effect: none`.

The separate cutover gate requires a closed independently reproduced
reader/writer census, migration of every censused consumer, parity,
accessibility, security, usability, rollback evidence, no holds, and one named
owner decision. Rollback rehearsal can create its evidence without circularly
requiring that evidence first. It is restricted to a marked disposable fixture
and restores the complete prior generation after both success and injected
failure.

## Test-first evidence

Before implementation, the focused smoke exited `1` with:

```text
v060_lifecycle_html_smoke=failed reason=missing_project_executable
```

## GREEN execution

```sh
scripts/traceweaver-smoke-v060-lifecycle-html
scripts/traceweaver-smoke-v060-lifecycle-cutover
scripts/traceweaver-smoke-v060-lifecycle-schema
scripts/traceweaver-smoke-v060-lifecycle-graph
scripts/traceweaver-smoke-v060-lifecycle-closure
scripts/traceweaver-smoke-skill-execution-contract
```

```text
v060_lifecycle_html_smoke=pass
v060_lifecycle_html_parser_and_span_pin=pass
v060_lifecycle_html_projection_parity=pass
v060_lifecycle_html_accessible_offline_print=pass
v060_lifecycle_html_active_hidden_remote_refusal=pass
v060_lifecycle_html_stale_and_hand_edit_refusal=pass
v060_lifecycle_cutover_smoke=pass
v060_lifecycle_cutover_default_held=pass
v060_lifecycle_consumer_census_closed_boundary=pass
v060_lifecycle_atomic_rehearsal=pass
v060_lifecycle_full_rollback=pass
v060_lifecycle_mixed_generation_refusal=pass
skill-execution-contract: PASS
```

Negative fixtures reject missing/mismatched parser dependencies, HTML5 parser
errors, ambiguous or nested record spans, active elements, events, remote or
encoded URLs, URL rewriting, forms, frames and embedding, hidden attributes or
CSS, comments containing hidden meaning, broken links, duplicate IDs, missing
visible stable IDs, stale graph/record bytes, hand edits, incomplete census,
unmigrated readers/writers, failed evidence, missing owner decision, remaining
holds, manifest mismatch, mixed generation, unsafe rehearsal roots, transaction
residue, and rollback mismatch.

## Parser and source-span boundary

The package pins Nokogiri `1.13.8`, `Nokogiri::HTML5`, libgumbo
`1.0.0-nokogiri`, and source adapter
`traceweaver-generated-html-source-span/1`. The adapter maps a parser-verified
unique visible record ID to its exact original UTF-8 start/end article bytes;
it never DOM-reserializes controlled content. The projector fails closed if the
runtime differs from the lock.

This explicit dependency must be installed in protected CI and clean-reinstall
evidence before release. A missing gem is a hold, not a reason to fall back to
regex-only cutover validation.

## Callable route

After regenerating the SEC registry from the completed Slice 4 skill text,
invocation `TW-LIFECYCLE-2026-08-24-V060-SLICE4-001` resolved exactly once at
risk `L3` against integration baseline
`e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33`. Receipt
`sha256:f286e5b29638ed394c30a94772d8fb94e7818d73332e11a8cd48d04b5172b38d`
records the implementation route, no child dispatch, no served-model claim,
no authority promotion, and terminal graph refresh deferred until integrated
review.

## Artifact identities

| Artifact | SHA-256 |
| --- | --- |
| `plugins/traceweaver-core/references/lifecycle/semantic-html-parser-lock.json` | `c9ee7d53dfc353f03c1357f9fbcd7588a9e1126d518e3012497097fda6acecf5` |
| `plugins/traceweaver-core/references/lifecycle/semantic-html.schema.json` | `c8c26fe22084c66a16faa952c9731c6f28c0b1f55592eaaaac585f91f6322123` |
| `plugins/traceweaver-core/references/lifecycle/cutover-gate.schema.json` | `cb9f1df770f20d8bae25c4059438a0729eecd86b7bbf31d2446e4ff9d0ef813f` |
| `plugins/traceweaver-core/skills/tw-lifecycle/scripts/traceweaver-lifecycle-project` | `95f695ac6388d816d6962c554a069c4eb938bce41b60868d028cf810bfcb4d56` |
| `plugins/traceweaver-core/skills/tw-lifecycle/scripts/traceweaver-lifecycle-cutover` | `40aeb75e2b053dbf88209bccb6e1748ffc89d96bea051e2fee0a8ca940a756a0` |
| `scripts/traceweaver-smoke-v060-lifecycle-html` | `b3fb681d360b2824735f5e858ab171964a03e4310a5fda29056f3a77dddbf2ff` |
| `scripts/traceweaver-smoke-v060-lifecycle-cutover` | `3bcdf249de2546e55e27cba1bcabae70a581bb5caaa14746e1696c55894f03de` |
| `plugins/traceweaver-core/skills/tw-lifecycle/SKILL.md` | `90bb11d21b3f6751f310be15d2f060b606493dbbfd3f808dabb02d7f825bb867` |
| generated SEC registry | `394bdf515218056357eac9f45bf0ac7e67cd9802002785f5316107defe351a93` |

These are point-in-time Slice 4 identities. Later authorized slices may update
the shared lifecycle skill and generated SEC registry; final evidence binds the
complete candidate.

## Held claims and next gate

The release-gate state is recorded separately in
`docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-semantic-html-release-gate.md`.
No repository authority cutover occurred. Real Core consumer census/migration,
representative-product usability, owner cutover acceptance, integrated review,
terminal graph freshness, publication, and release remain held.

Proceed to Slice 5 product-source capture, prepared human confirmation,
approved one-time change application, downstream staleness, and no-change
mechanical closure.
