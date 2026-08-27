---
id: TW-RED-2026-08-26-V060-ACYCLIC-ORACLE-001
status: passed_expected_failure
date: 2026-08-26
change_id: CHG-TW-2026-08-26-003
exception_id: EXC-TW-020
finding: P1-005-continuation
baseline_hash_sha256: ae5ea38098647901926f1391c975e0db766337e12c765f18a73885f42ff74e08
workflow_profile_revision: 4
workflow_profile_hash: sha256:a51724b649534563d09deb2f27feccee1e7dd5dd50c5e24451fb38eb677e2f6c
behavior_mutation_before_red: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-acyclic-oracle-red-evidence; req=REQ-TW-130,REQ-TW-135,REQ-TW-141,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 acyclic-oracle RED evidence

## Purpose

Reproduce `P1-005-continuation` against the owner-approved revision-4
authority before any behavior-changing repair. The expected failure is that a
post-oracle receipt is required as a pre-oracle source, so the oracle cannot be
truthfully constructed in dependency order.

## Exact pre-change identity

| Artifact | SHA-256 |
| --- | --- |
| `scripts/traceweaver-refresh-v060-model-context-oracle` | `4730ac476e5c560a0e6274d50a87c0573272afe30944bf94da7642a5d6f8d80b` |
| `scripts/traceweaver-check-release-readiness` | `13c96125895a1ee37ae64bef2cbc86caa26163c3f0bec8d0f5bfda399b6669da` |
| `scripts/traceweaver-smoke-v060-release-integrity` | `be04f088a05ab95feb9e40981d6494e84029a9bc652f9848a856dd7c393b7c92` |

All three source contracts include both downstream outputs:

- `docs/validation/traceweaver-2026-08-26-v060-terminal-release-truth-green-evidence.md`;
- `docs/validation/traceweaver-2026-08-26-v060-integrated-review-retained-finding-continuation.md`.

The exact occurrences are refresher lines 94-95, readiness lines 174-175,
and focused release-integrity smoke lines 45-46 in the pre-change files.

## No-write oracle reproduction

Command:

```text
scripts/traceweaver-refresh-v060-model-context-oracle --reviewer-id terra-integrated-reviewer:root-v060-integrated-review
```

Observed exit status: `1`.

Observed output:

```text
oracle_refresh_missing_source=docs/validation/traceweaver-2026-08-26-v060-terminal-release-truth-green-evidence.md
```

No `--write` option was supplied. No oracle or other product artifact was
created or changed.

## End-to-end focused reproduction

Command:

```text
scripts/traceweaver-smoke-v060-release-integrity
```

Observed exit status: `1`.

The isolated smoke candidate invoked its oracle refresher and stopped with the
same exact cause:

```text
oracle_refresh_missing_source=docs/validation/traceweaver-2026-08-26-v060-terminal-release-truth-green-evidence.md
```

## RED disposition

RED passes because the current product fails for the preregistered circular
source-contract reason before any authorized behavior change. Creating the
missing file as a placeholder or declaring it GREEN before release-integrity
passes would violate REQ-TW-135 and REQ-TW-141 and is prohibited.

The bounded GREEN condition is not merely removal of the missing-file error.
All of the following must hold after a fresh authority `Proceed`:

1. the refresher and v3 readiness checker use identical categorized
   pre-oracle source sets;
2. neither post-oracle receipt appears in either pre-oracle source set;
3. the focused smoke rejects reintroduction of either post-oracle receipt and
   still rejects every historical rejected product source;
4. production readiness still requires a clean exact-candidate capsule and an
   integrated-review receipt with zero open P0/P1 and the exact same reviewer
   identity as the oracle; and
5. terminal GREEN is recorded only after the end-to-end release-integrity
   smoke passes and never becomes an input to its own proof.

## Next gate

Run a scoped `/tw-doc-review` over the promoted revision-4 authority and this
RED record, then run a fresh `/tw-authority-gate`. Do not change the three
scripts unless the fresh gate returns `Proceed`.
