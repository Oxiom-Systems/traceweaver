---
id: VER-TW-093
title: Deterministic Metric-Routing Harness Verification Definition
status: defined_preimplementation_offline_component
date: 2026-08-23
owner: Oxiom Systems
work_item: TraceWeaver-qn57
requirements: REQ-TW-124..129
trace: TRACE-TW-073
acceptance_test: ATP-TW-050
baseline_hash_sha256: aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5
plan_hash_sha256: 4c2228674358df3be0ccbd3e6d37df267cb9a96cdb888fa34a17c619603f2bed
workflow_profile_hash: sha256:de1b8121909d9f7c2fdedaa637e6f812ed83b8a88459dc886e627df5cc5bbeef
---

# VER-TW-093 — Deterministic Metric-Routing Harness Verification Definition

## Objective And Boundary

Verify the offline `ART-TW-080` decision machinery against the complete frozen
`ATP-TW-050` inventory: privacy-preserving signed fixture inputs, frozen
matched-pair policy, quality conjunction, whole-workflow accounting, positive
sufficiency, and exact-cell reset/claim holds. The target is repository-local
Ruby standard library code and synthetic files only. It is not equivalent to a
provider, host, collector, served-model attester, live execution, spend, or
stakeholder validation.

## Method, Setup, And Procedure

Primary method: deterministic test. Secondary methods: inspection for canonical
reference/mirror parity and analysis for exact rational power, order-statistic,
kappa, and threshold calculations.

At the candidate ref, run:

```text
scripts/traceweaver-smoke-metric-routing-harness
scripts/traceweaver-smoke-metric-routing-harness --case MR124_VALID_TRUSTED_ATTESTATION
scripts/traceweaver-smoke-metric-routing-harness --case MR125_PILOT_NONQUALIFYING
scripts/traceweaver-smoke-metric-routing-harness --case MR126_QUALITY_CONJUNCTION
scripts/traceweaver-smoke-metric-routing-harness --case MR127_VALID_ACCOUNTING_INTERVAL
scripts/traceweaver-smoke-metric-routing-harness --case MR128_NEGATIVE_DOES_NOT_SUFFICE
scripts/traceweaver-smoke-metric-routing-harness --case MR129_EXACT_CELL_RESET
```

The smoke first validates the exact frozen SHA-256 identities of
`acceptance-cases.yml` and `golden-statistics.yml`, then recomputes every
declared sign-design, order-statistic, raw-rating pairwise-kappa, and threshold
constant. It rejects duplicate, missing, renamed, skipped, unknown, relocated,
or weakened frozen cases before it reads a production artifact. During this pre-builder phase the
expected actual result is a nonzero, named missing-group hold; the observed
RED record is [metric-routing-harness-red.txt](evidence/metric-routing-harness-red.txt).
Once the production groups exist, each full or single-case invocation runs the
evaluator under an inherited-environment-free, credential-free process with a
deterministic Ruby no-network/subprocess guard. The smoke checks canonical JSON
stdout and its self-identity, stores the exact bytes in a fresh temporary state
directory, and then gives only that evidence path to the independent validator.
The validator must return canonical JSON bound to both the evaluator evidence
identity and SHA-256 of the exact immutable bytes. The canonical/mirror
reference must also bind the complete frozen fixture locator set to current
content SHA-256 values. Both stages must exit successfully, emit the selected
case ID and exact named outcome, and leave no frozen case skipped.

## ATP-TW-050 Requirement Coverage

| Requirement | Verification focus | Success criterion |
| --- | --- | --- |
| REQ-TW-124 | independent signature, execution binding, replay, privacy, safe locators | valid synthetic attestation only; unsafe/self/replayed/content-bearing inputs hold. |
| REQ-TW-125 | frozen policy/corpus, matched pairs, pilot/power/stopping/exclusion | only exact policy-bound pairs enter; pilot and protocol violations hold. |
| REQ-TW-126 | hard floors, blinded independence, kappa, non-inferiority | every conjunct passes; efficiency never compensates for quality failure. |
| REQ-TW-127 | complete workflow accounting and uncertainty | valid pairs only, exact inclusive token/latency bounds, no double count. |
| REQ-TW-128 | successful declared positive scenario | fixture-only positive predicate can pass; negatives/overflow/hidden promotion hold. |
| REQ-TW-129 | exact-cell identity, expiry/reset, nontransferability | synthetic predicate is isolated; drift/inheritance/cross-cell evidence holds or resets. |

## Evidence Record Contract

The eventual `VER-TW-093` record must bind candidate/tree, baseline, plan,
profile, policy, corpus, exact cell, trust/key, method suite, command, expected
result, actual result, exit status, deviations, and evidence locator. It must
distinguish `pass`, `fail`, `partial`, `blocked`, and `deferred`. A successful
fixture run is only deterministic component evidence; the independently
attested host portion of VER-TW-093 remains pending.

## Hold And Handoff

Any missing group, invariant failure, untracked or digest-drifted fixture,
environment/network guard failure, evidence-handoff mismatch, drift, or skipped case
is a verification hold routed to the controlled change/gap path. Do not use
this harness to claim RESULT-TW-050, quality equivalence, observed sufficiency,
quantitative savings, a qualified route, publication, release, or cutover.
