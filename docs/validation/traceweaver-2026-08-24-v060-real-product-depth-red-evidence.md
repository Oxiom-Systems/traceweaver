---
evidence_id: TW-RED-2026-08-24-V060-REAL-PRODUCT-DEPTH-001
status: red_confirmed_bounded_correction_green_passed
change_id: CHG-TW-2026-08-24-001
exception_id: EXC-TW-018
authority_gate_id: TW-AUTH-GATE-2026-08-24-V060-REAL-PRODUCT-DEPTH-001
requirements_baseline_hash_sha256: bd4f0d75ceb05f8da4f489218f134df4ff79a6271c4d8c4a9bd2d9b89b47e6bd
workflow_profile_revision: 2
workflow_profile_hash: sha256:68b130c712098cbbe389c42e53d8539f810d0e4ad793a60fb0d123ab1cfe4dbc
authority_effect: none
---

# Core 0.6.0 real-product-depth correction RED evidence

## Purpose

This record proves, before the bounded correction, that the rejected fixed
eight-record representative route does not satisfy the owner-approved
source-derived real-product-depth validation method. The check operates on the
pinned, read-only Vestro and Air Router product sources and writes only to a
temporary directory beneath this TraceWeaver worktree.

## Exact pre-correction inputs

- Focused smoke: `scripts/traceweaver-smoke-v060-real-product-depth`
  - SHA-256: `f73a75d37664b86aae61f9f960730e66f0fafe83ca42be4fb5d916717cd96a7d`
- Rejected trial runner: `scripts/traceweaver-run-v060-representative-product-trials`
  - SHA-256: `604001c228edae954803c8c2752ec32104d8fac9a44341fed3fd0a39c3b4ea96`
- Requirements baseline: `sha256:bd4f0d75ceb05f8da4f489218f134df4ff79a6271c4d8c4a9bd2d9b89b47e6bd`
- Workflow profile: revision `2`, canonical profile hash
  `sha256:68b130c712098cbbe389c42e53d8539f810d0e4ad793a60fb0d123ab1cfe4dbc`

## RED execution

Command:

```text
scripts/traceweaver-smoke-v060-real-product-depth
```

Observed exit status: `1`.

Observed output:

```text
v060_real_product_depth_smoke=failed finding=missing_source_census details=Air Router
```

## Finding

The current runner completed its legacy machine route but emitted no
source-derived census. It therefore could not prove that its graph cardinality,
record provenance, relationships, seeded impacts, or per-task recovery counts
came from the actual authorized product lifecycle sources. This is the expected
RED state for `REQ-TW-136`, `REQ-TW-144`, `TRACE-TW-074`, `VER-TW-094`, and
`VAL-TW-042` under the approved change and exception.

## Bounded work authorization

`CHG-TW-2026-08-24-001` and `EXC-TW-018` authorize exactly one correction to
the representative trial runner, this focused smoke, and their evidence. They
do not authorize Core packaged behavior changes, consumer mutation, product or
reviewer scope expansion, acceptance, publication, release, or deployment.

## GREEN execution

Corrected runner SHA-256:
`909c099997f9aca0c49cb22eaebb13f5a2c8ab42dc476cb525ef2e4267b195a3`.

The same command completed with exit status `0`:

```text
v060_real_product_depth_smoke=passed
v060_real_product_depth_source_census=passed
v060_real_product_depth_provenance=passed
v060_real_product_depth_graph_binding=passed
v060_real_product_depth_task_counts=passed
v060_real_product_depth_authority_effect=none
```

The GREEN route imports actual pinned source records, labels inferred
registered-source baseline membership, binds graph cardinality to the imported
census, derives each task count from its own recovered route, and keeps the
consumer repositories read-only.

## Next step

Regenerate the exact Vestro and Air Router product-validation candidate bound
to corrected functional-scope digest
`sha256:b17b50d4801e038de96e31644f28b616e615afc9bfee79539558249aa156c8a6`,
then obtain explicit owner disposition before reviewer continuation.
