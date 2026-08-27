---
id: GAP-TW-2026-08-24-V060-PRODUCT-VALIDATION-001
status: classified_real_product_depth_bounded_correction_approved
date: 2026-08-24
owner: Oxiom Systems
authority_effect: none
requirements: [REQ-TW-136, REQ-TW-144, REQ-TW-145]
validation: VAL-TW-042
functional_scope_digest: sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51
product_validation_result_digest: sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794
---

<!-- TRACEWEAVER: file-role=v060-product-validation-rejection-gap; req=REQ-TW-136,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Product-Validation Rejection Gap

## Observed disposition

On 2026-08-24, Hannes Zietsman selected the explicit reject option for the
post-repair representative validation result. The rejected result binds
functional candidate
`sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51`,
Vestro raw evidence
`sha256:72443f647aa18ad3c6f3ed140f7fca37e84579613d5359d299aca2f5a6badae1`,
Air Router raw evidence
`sha256:47e299e3c9046071976138f520ed5d31484f46d2e522db7f1ea45ce4c8ac8651`,
and result
`sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794`.

Both machine routes recovered 40/40 required links, produced zero false
authority or truth-stage promotions, found every seeded impact, and reported
1 ms medians. Those measurements are verification evidence only. The explicit
product and owner rejection controls; it grants no implementation or publication
authority, and cannot be averaged away.

## Owner classification

Hannes Zietsman selected classification 1, **Real-product depth**, on
2026-08-24. The controlling deficiency is that the trial is too synthetic and
shallow: it binds real authorized product bytes, IDs, source hashes, and
non-code evidence, but constructs a bounded eight-record lifecycle graph in a
disposable snapshot rather than ingesting and navigating the products' broader
actual lifecycle state.

This selection establishes the deficiency class. Hannes Zietsman then
explicitly approved `CHG-TW-2026-08-24-001` and `EXC-TW-018`, authorizing one
bounded validation-method correction under a new immutable L3 profile revision.

## Requirements-review result

REQ-TW-136 and REQ-TW-144 already require representative real-product trials,
actual immutable source identities, non-compensable product cells, and an
owner decision; REQ-TW-144 explicitly forbids repository-only fixtures as a
substitute. Both requirements are approval-quality. The correction is to the
validation method, not to the stakeholder need or requirement meaning.

The corrected method must build its required-record/link census from actual
source-authorized product records and relationships, preserve their exact
source locators/digests, exercise the lifecycle route against that imported
state, and expose source-derived coverage and unresolved items in the raw
result. A fixed hand-authored eight-record graph or constant five-link score per
task cannot satisfy the correction.

## Held boundary

During the approved bounded correction:

- `VAL-TW-042`, `ACCEPT-LC-001`, and release readiness remain failed/held;
- the one permitted targeted Terra continuation may not run;
- reviewer-owned model-context oracle refresh and graph freshness may not be
  claimed;
- no repair beyond the exact approved validation-method scope is authorized;
  and
- commit, push, PR, tag, GitHub Release, deployment, and runtime claims remain
  prohibited.

## Next gate

`/tw-auto` creates profile revision 2, records correction-specific RED
evidence, and routes one bounded `/tw-work` validation-method correction.
Product acceptance, reviewer continuation, and publication remain held.
