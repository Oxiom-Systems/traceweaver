---
id: TW-RED-2026-08-24-V060-PRODUCT-LIFECYCLE-001
status: expected_failure_recorded
date: 2026-08-24
owner: Oxiom Systems
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-red-evidence; req=REQ-TW-130,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Product-Lifecycle RED Evidence

## Procedure

Run from the protected target worktree at PR61 integration base
`e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33` after Slice 0 authority and
predecessor-dogfood closure, but before Slice 1 implementation:

```sh
scripts/traceweaver-smoke-v060-product-lifecycle
```

Expected result: non-zero exit with one missing-deliverable finding for every
freshly accepted requirement `REQ-TW-130..145`. A Ruby 2.6 compatibility fault
in the first harness attempt was repaired before recording product RED; the
result below is the intended product-level failure, not a broken-test failure.

## Actual result

Exit status: `1`.

```text
v060_product_lifecycle_status=red
v060_product_lifecycle_requirements=16
v060_product_lifecycle_missing=16
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-130 path=plugins/traceweaver-core/references/lifecycle/source-registry.schema.json
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-131 path=plugins/traceweaver-core/references/lifecycle/semantic-html.schema.json
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-132 path=plugins/traceweaver-core/skills/tw-lifecycle/scripts/traceweaver-lifecycle-integrity
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-133 path=plugins/traceweaver-core/skills/tw-lifecycle/scripts/traceweaver-lifecycle-project
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-134 path=scripts/traceweaver-smoke-v060-lifecycle-cutover
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-135 path=plugins/traceweaver-core/references/lifecycle/evidence-receipt.schema.json
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-136 path=docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-product-validation-result.md
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-137 path=plugins/traceweaver-core/references/lifecycle/lifecycle-record.schema.json
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-138 path=docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-semantic-html-release-gate.md
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-139 path=scripts/traceweaver-benchmark-v060-product-lifecycle
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-140 path=scripts/traceweaver-smoke-v060-lifecycle-staleness
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-141 path=plugins/traceweaver-core/references/lifecycle/truth-stage.schema.json
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-142 path=scripts/traceweaver-smoke-v060-lifecycle-closure
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-143 path=docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-scope-rollback-verification.md
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-144 path=docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-representative-validation.md
v060_product_lifecycle_finding=missing_deliverable req=REQ-TW-145 path=docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-release-readiness.md
v060_product_lifecycle_expected=each_slice_adds_functional_proof_before_seed_green_can_contribute_to_ATP_TW_051
```

## Disposition

RED passed: the harness fails for the intended absence of all sixteen
successor deliverables. Presence-only seed green is never final ATP-TW-051
proof; each slice must add and execute its requirement-specific functional,
negative, determinism, security, performance, product-validation, or release
suite before its requirement can close.

## Slice 1 focused RED

The requirement-linked Slice 1 smoke was added and executed before the
lifecycle integrity executable or schemas existed:

```sh
scripts/traceweaver-smoke-v060-lifecycle-schema
```

Exit status: `1`.

```text
v060_lifecycle_schema_smoke=failed reason=missing_integrity_executable
```

This is the intended behavior-level RED for `REQ-TW-130`, `REQ-TW-132`, and
`REQ-TW-137`: the test contract existed and failed specifically because the
source-registry/integrity implementation was absent.

## Slice 2 focused RED

Before implementing evidence truth stages or stale-evidence behavior, the
Slice 2 smoke exited `1`:

```sh
scripts/traceweaver-smoke-v060-lifecycle-evidence
```

```text
v060_lifecycle_evidence_smoke=failed reason=missing_evidence_executable
```

This is the intended behavior-level RED for `REQ-TW-135`, `REQ-TW-140`, and
`REQ-TW-141`.

## Slice 3 focused RED

Before implementing lifecycle graph projection, closure, or query behavior,
the Slice 3 focused smoke exited `1`:

```sh
scripts/traceweaver-smoke-v060-lifecycle-graph
```

```text
v060_lifecycle_graph_smoke=failed reason=missing_graph_executable
```

This is the intended behavior-level RED for `REQ-TW-139`, `REQ-TW-140`, and
`REQ-TW-142`. The focused test contract existed and failed on the absent graph
control, before the graph schema or implementation was added.

## Slice 4 focused RED

Before implementing strict semantic HTML projection, its frozen parser/span
adapter, or the cutover gate, the Slice 4 smoke exited `1`:

```sh
scripts/traceweaver-smoke-v060-lifecycle-html
```

```text
v060_lifecycle_html_smoke=failed reason=missing_project_executable
```

This is the intended behavior-level RED for `REQ-TW-131`, `REQ-TW-132`,
`REQ-TW-133`, and `REQ-TW-138`. Atomic cutover behavior remained absent and
held at this point as required by `REQ-TW-134`.

## Slice 5 focused RED

Before implementing product-source candidate capture, visible human
confirmation, or exact-preimage approved change application, the Slice 5 smoke
exited `1`:

```sh
scripts/traceweaver-smoke-v060-lifecycle-capture
```

```text
v060_lifecycle_capture_smoke=failed reason=missing_capture_executable
```

This is the intended behavior-level RED for `REQ-TW-130`, `REQ-TW-135`,
`REQ-TW-137`, `REQ-TW-140`, and `REQ-TW-141`. The test contract existed and
failed on the absent capture/change executable before that implementation was
added.

## Slice 6 focused RED

Before implementing the combined human authority/acceptance hub and
content-addressed named-baseline pack manifest, the Slice 6 smoke exited `1`:

```sh
scripts/traceweaver-smoke-v060-lifecycle-acceptance-hub
```

```text
v060_lifecycle_acceptance_hub_smoke=failed reason=missing_acceptance_hub_executable
```

This is the intended behavior-level RED for `REQ-TW-131`, `REQ-TW-135`,
`REQ-TW-138`, `REQ-TW-140`, and `REQ-TW-141` before the hub executable and
manifest schema existed.

## Slice 7 focused RED

Before implementing the non-compensable representative-product validation
contract and result validator, the Slice 7 smoke exited `1`:

```sh
scripts/traceweaver-smoke-v060-lifecycle-product-validation
```

```text
v060_lifecycle_product_validation_smoke=failed reason=missing_product_validation_executable
```

This is the intended behavior-level RED for `REQ-TW-136` and `REQ-TW-144`.
The focused contract existed before the validator or result schema and already
required independent Vestro/Air Router cells, named raters, immutable source
authorization, raw evidence, the 95 percent recovery threshold, zero false
promotion, no HTML timing regression, an authorized Air Router non-code
artifact, and an exact owner disposition without cross-product compensation.

## Slice 8 focused RED

Before extending the release-readiness checker for the Core 0.6.0 lifecycle
assurance evidence chain, the Slice 8 release-integrity smoke exited `1`:

```sh
scripts/traceweaver-smoke-v060-release-integrity
```

```text
v060_release_integrity_smoke=failed reason=missing_release_readiness_v3
```

This is the intended behavior-level RED for `REQ-TW-143` and `REQ-TW-145`.
The focused contract requires a minor-version classification, five-manifest
equality, exact integration-base and candidate-scope binding, product
validation and integrated-review prerequisites, scope/rollback and clean
reinstall evidence, and exact-main CI/publication holds before the existing
serialized release workflow may create the tag or GitHub Release.
