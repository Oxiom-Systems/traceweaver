---
id: RESULT-TW-051-SLICE-7
status: protocol_passed_product_validation_rejected
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-136, REQ-TW-144
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-slice7-verification; req=REQ-TW-136,REQ-TW-144; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Slice 7 — Representative Product Validation

## Disposition

Slice 7 protocol and machine-route component verification passed. The result
schema and validator keep Vestro and Air Router non-compensable, require exact
source and candidate identities, and refuse recovery below 95 percent, any
false authority or truth-stage promotion, HTML timing regression, missing Air
Router non-code evidence, fixture substitution, unsafe locators, owner-digest
drift, or cross-product compensation.

The real read-only Vestro and Air Router source baselines were observed at the
immutable identities in
`traceweaver-2026-08-24-v060-product-lifecycle-source-baselines.json`. Their
current Core 0.6.0 machine routes ran in disposable snapshots and changed
neither product repository.

| Cell | Required / recovered | False promotions | HTML / manual median | Product-specific evidence | State |
| --- | --- | --- | --- | --- | --- |
| `VESTRO-LC-001` | 40 / 40 | 0 | 1 ms / 1 ms | exact-source capture, duplicate and impact navigation, V&V-before-work, stale evidence, strict HTML, acceptance pack | machine route passed |
| `AIRROUTER-LC-001` | 40 / 40 | 0 | 1 ms / 1 ms | same route plus `SRC-AIR-042` visible in source, impact, and pack | machine route passed |

Every seeded impact was recovered. Both generated hubs remained held and
`authority_effect: none`. The post-repair rerun logs bind functional candidate
`sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51`.
Their current post-repair content digests are
`sha256:72443f647aa18ad3c6f3ed140f7fca37e84579613d5359d299aca2f5a6badae1`
for Vestro and
`sha256:47e299e3c9046071976138f520ed5d31484f46d2e522db7f1ea45ce4c8ac8651`
for Air Router.

## Test-first evidence

Before implementation, the focused smoke exited `1` with:

```text
v060_lifecycle_product_validation_smoke=failed reason=missing_product_validation_executable
```

## GREEN execution

```sh
scripts/traceweaver-smoke-v060-lifecycle-product-validation
scripts/traceweaver-run-v060-representative-product-trials \
  --candidate-digest sha256:<frozen-functional-scope-digest>
```

The protocol smoke passed all positive and negative cases. The exact
real-product execution passed all 16 route tasks, eight per product. Hannes
Zietsman subsequently rejected both content-addressed results as the named
representative and Oxiom Systems release owner.

## Callable route

Invocation `TW-LIFECYCLE-2026-08-24-V060-SLICE7-001` resolved exactly once at
risk `L3` against canonical requirements hash
`cd92f1472029c4e368e8e6a595a538f82773a3a3a761f2646079adeb71e99eea`.
Receipt
`sha256:8e20960551028b57370c9e52f172e9dcd5b924fc2cfb3b19c7768cdd9ecf2cde`
records no child dispatch, served-model claim, authority promotion, or
publication action.

## Rejected validation and current next gate

Current `VAL-TW-042` and `ACCEPT-LC-001` are rejected in
`traceweaver-2026-08-24-v060-product-lifecycle-product-validation-result.json`,
digest
`sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794`.
The deficiency is classified as Real-product depth. Corrective implementation
awaits explicit approval of `CHG-TW-2026-08-24-001` and `EXC-TW-018`; the
integrated-review continuation, publication, and release remain held.
