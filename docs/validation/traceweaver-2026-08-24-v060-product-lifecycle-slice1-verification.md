---
id: RESULT-TW-051-SLICE-1
status: passed_component_green_integrated_review_and_release_held
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-130, REQ-TW-132, REQ-TW-137
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-slice1-verification; req=REQ-TW-130,REQ-TW-132,REQ-TW-137; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Slice 1 — Lifecycle Schema And Source Registration

## Disposition

Slice 1 component verification passed. Core 0.6.0 now packages a closed
federated lifecycle-record envelope, deterministic ordered source registry,
immutable source-observation receipt, and the callable `tw-lifecycle` integrity
surface. Source receipts and generated checks have `authority_effect: none`;
imported, external, evidence, and derived records cannot promote themselves to
accepted authority.

This result is GREEN component evidence, not integrated review, product
validation, semantic-HTML cutover, publication, or release readiness.

## Test-first evidence

Before implementation, the focused command exited `1` with:

```text
v060_lifecycle_schema_smoke=failed reason=missing_integrity_executable
```

The RED observation is retained in
`docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-red-evidence.md`.

## GREEN execution

```sh
scripts/traceweaver-smoke-v060-lifecycle-schema
scripts/traceweaver-smoke-skill-execution-contract
scripts/traceweaver-smoke-installer-transaction
scripts/traceweaver-smoke-codex-discovery
scripts/traceweaver-smoke-antigravity-discovery
```

Observed results:

```text
v060_lifecycle_schema_smoke=pass
v060_lifecycle_schema_contracts=pass
v060_lifecycle_source_registry_positive=pass
v060_lifecycle_source_registry_negative=pass
v060_lifecycle_source_receipt_determinism=pass
v060_lifecycle_record_envelope=pass
v060_lifecycle_human_acceptance_boundary=pass
skill-execution-contract: PASS
installer_transaction_smoke=pass
codex_discovery_smoke=pass
installed_packaged_skill_directory_count=55
installed_callable_skill_directory_count=29
installed_reference_file_count=40
antigravity_discovery_smoke=pass
```

The positive path covers exact local Markdown, YAML, and strict static HTML
plus an immutable external-record stub. Repeated registry, receipt, and record
checks are byte-identical. The negative corpus rejects duplicate IDs,
conflicting authoritative field ownership, mutable sources, stale digests,
path escape, recursive registration, mixed generations, ambiguous case/name
normalization, missing provenance, external authority promotion, active/remote
HTML, unregistered required locators, open relationship vocabulary, and derived
accepted-state promotion.

## Callable route

The first prepared route invocation,
`TW-LIFECYCLE-2026-08-24-V060-SLICE1-001`, correctly stopped as
`invalid_contract` because an overly broad prose locator was interpreted as a
missing packaged reference. The skill text and generated SEC metadata were
repaired once. Fresh invocation
`TW-LIFECYCLE-2026-08-24-V060-SLICE1-002` then resolved with receipt
`sha256:6a6b1a1a1ec4dba67de2c0d43d6fad23b79cce616a406e052e05a54602e9ef41`,
route profile `implementation`, no child dispatch, no served-model claim, and
no authority promotion.

The shadow model-context inventory now records 29 top-level callables and 88
declared routes. The historical Core 0.5.0 oracle adequacy review is not
silently relabeled as review of this new route; its 0.6.0 successor binding
remains held for the one final integrated mixed-candidate review.

## Artifact identities

| Artifact | SHA-256 |
| --- | --- |
| `plugins/traceweaver-core/references/lifecycle/source-registry.schema.json` | `a004f6d766b29913338a697c803992a908482c44b5805fea06a48a675664797e` |
| `plugins/traceweaver-core/references/lifecycle/lifecycle-record.schema.json` | `2e9597424002948d7c6c222f1f7728527c881033e6c15a751a21656917348619` |
| `plugins/traceweaver-core/references/lifecycle/source-receipt.schema.json` | `173bfe8c49716e3338d8398d87b055f146ae847ad4135e7c08b4abc2ec619a89` |
| `plugins/traceweaver-core/skills/tw-lifecycle/SKILL.md` | `551f14200634a84f9cf2d2444a7fbb35f419d6114c1b47a5545f0c8a51b82f31` |
| `plugins/traceweaver-core/skills/tw-lifecycle/scripts/traceweaver-lifecycle-integrity` | `a010285d2e59fbde6088b766104a98354ada1f82fec36a8a267b4c926cc784b2` |
| `scripts/traceweaver-smoke-v060-lifecycle-schema` | `0fae17881e63c9fe2a6181d6f8b3a4cc635d3266562c4a3689352daed635fc8f` |
| generated SEC registry | `ef89177f3a6799d27adbc652683bed7cb4f2818a855b4c761e9d4c974fb0c9ef` |
| canonical model-context map file | `861d05408f57a085e4f3f157ce66d0c42c33c9d817fbdac6bd610b954f68460a` |
| canonical model-context semantic digest | `sha256:4e4157b75b4f5542b709628d8d311e7cf59d61084f406ad6d144869b833c1718` |
| inventory digest | `sha256:426176c6fa2d1d4c9b430739c81c01db4122016930a2f677c41906bab85d0d64` |

## Next gate

Proceed to Slice 2 V&V-at-capture, truth-stage evidence, stale-evidence
propagation, and acceptance-pack records through retained `tw-auto`. Keep the
single integrated review and every product/release gate held.
