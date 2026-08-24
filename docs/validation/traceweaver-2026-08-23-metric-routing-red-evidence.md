---
id: RED-TW-2026-08-23-METRIC-ROUTING-HARNESS-001
status: observed_relevant_red_prebuilder
date: 2026-08-23
work_item: TraceWeaver-qn57
requirements: REQ-TW-124..129
trace: TRACE-TW-073
verification: VER-TW-093
acceptance_test: ATP-TW-050
plan_hash_sha256: 4c2228674358df3be0ccbd3e6d37df267cb9a96cdb888fa34a17c619603f2bed
workflow_profile_hash: sha256:de1b8121909d9f7c2fdedaa637e6f812ed83b8a88459dc886e627df5cc5bbeef
---

# Metric-Routing Harness Pre-Builder RED Evidence

## Execution

`scripts/traceweaver-smoke-metric-routing-harness` was run in the repository
worktree before any assigned production evaluator, validator, reference, or
future fixture file existed. It exited `1` after validating the frozen
71-case ATP-TW-050 manifest, complete `REQ-TW-124..129` coverage, offline
boundary, and independent exact-statistics oracle.

The exact captured output is [metric-routing-harness-red.txt](evidence/metric-routing-harness-red.txt).
The Ruby environment emitted one unrelated `io-console` extension warning;
the smoke's contract status was nevertheless valid and its named blockers are
the expected pre-builder missing groups.

## Relevant Failure

The RED failure is relevant because it proves the smoke does not silently pass
without the canonical/mirrored metric-routing reference, evaluator, independent
validator, or the policy/corpus, trust/attestation, quality, accounting/
sufficiency, qualification/template, and complete frozen case-locator fixture
groups. On GREEN, the frozen
contract requires evaluator JSON evidence in a fresh temporary state directory
before the independent validator runs; the validator must bind its canonical
result to the evaluator evidence identity and exact byte SHA-256, and neither
stage can replace the other. The frozen manifest digest prevents locator swaps,
the raw-rating oracle independently derives minimum pairwise kappa, and the
future canonical reference must bind every fixture locator to its content
digest. Both scripts run with inherited environment removed and a deterministic
Ruby network/subprocess-source guard. It is not a provider,
host, credential, network, spending, qualification, or stakeholder run.

## Handoff And Hold

This record is pre-implementation evidence only. The future builder must keep
the manifest IDs, requirements, outcomes, and golden values unchanged; it may
only make the named groups present and then satisfy the frozen full and
single-case commands. `RESULT-TW-050`, completed `VER-TW-093`, per-cell
`VAL-TW-041`, and every quantitative/qualification/cutover claim remain held.

The V&V capsule remains review-pending. Do not dispatch `/tw-work` until one
integrated review records the required review evidence and the consuming gate
accepts it.
