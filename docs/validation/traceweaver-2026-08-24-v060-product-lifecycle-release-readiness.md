---
id: RESULT-TW-051-SLICE-8
status: passed
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-143, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
functional_scope_digest: sha256:7be6c6f6fd75290824b40ee77df58713baa3fae3502579eac3ff57876c2fe3dd
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-release-integrity-verification; req=REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Slice 8 — Release Integrity

## Disposition

The Core 0.6.0 release-integrity verification passed for functional candidate
`sha256:7be6c6f6fd75290824b40ee77df58713baa3fae3502579eac3ff57876c2fe3dd`.
Release readiness v3 binds
the exact PR61 integration base, immutable released 0.5.0 predecessor, minor
version classification, complete candidate and functional scope digests,
canonical requirements hash, product validation, one integrated review, scope
and rollback, graph freshness, clean reinstall, and the existing main-only
serialized release workflow.

All five manifests report `0.6.0`. README install examples use
`traceweaver-core--v0.6.0`, and CHANGELOG contains the dated 0.6.0 section while
the 0.5.0 history remains unchanged.

## Test-first evidence

Before implementation, the focused smoke exited `1` with:

```text
v060_release_integrity_smoke=failed reason=missing_release_readiness_v3
```

## GREEN execution

```sh
scripts/traceweaver-smoke-v060-release-integrity
scripts/traceweaver-smoke-release-readiness
bash scripts/traceweaver-check-release-manifest-versions 0.6.0
```

The release-integrity fixture passed its positive route and refused a wrong
release label, missing product validation, manifest mismatch, stale scope, and
invalid exact-SHA state. Historical 0.5.0 readiness fixtures remain green and
do not misinterpret the current 0.6.0 manifests as a 0.5.0 production candidate.

## CI boundary

The pull-request smoke workflow now runs every deterministic lifecycle suite,
the fixed performance benchmark, product-validation negatives, and release
integrity. The release workflow remains responsible for exact accepted-main
smoke and CodeQL evidence before creating the tag and GitHub Release.

## Held claims and next gate

This passed release-integrity record is not the production readiness receipt.
Product-owner
disposition, integrated review, final graph freshness, clean reinstall, exact
candidate-scope and rollback evidence, PR checks, exact-main CI, tag, GitHub
Release, deployment, and runtime health remain held. After the functional
candidate is frozen, bind this record to that digest and complete the remaining
non-compensable gates.
