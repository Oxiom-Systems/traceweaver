---
id: TW-AUTHORITY-GATE-2026-08-23-METRIC-ROUTING-HARNESS-001
status: proceed_bounded_deterministic_offline_implementation
date: 2026-08-23
owner: Oxiom Systems
work_item: TraceWeaver-qn57
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5
requirements: REQ-TW-124..129
plan: docs/plans/2026-08-23-001-feat-deterministic-metric-routing-harness-plan.md
vv_capsule: docs/validation/traceweaver-2026-08-23-metric-routing-vv-capsule.json
trace: TRACE-TW-073
verification: VER-TW-093
validation: VAL-TW-041
---

<!-- TRACEWEAVER: file-role=metric-routing-harness-implementation-authority-gate; req=REQ-TW-124,REQ-TW-125,REQ-TW-126,REQ-TW-127,REQ-TW-128,REQ-TW-129; trace=TRACE-TW-073; ver=VER-TW-093; val=VAL-TW-041 -->

# Deterministic Metric-Routing Harness Implementation Authority Gate

## Decision

PROCEED with one consolidated implementation of the deterministic, offline-only
`ART-TW-080` harness and complete local `ATP-TW-050` package. No
requirement-by-requirement or unit-by-unit authority gate is required.

The promoted baseline deliberately held implementation until a separately
accepted consolidated plan, reviewed L3 V&V definition, and later explicit
owner gate existed. Those conditions now exist. After asking what the next
step was, Oxiom Systems explicitly directed `/tw-auto` for the deterministic
metric-routing harness until implemented and ready to merge on 2026-08-23.
This is the named owner decision for this gate, not authority inferred from a
task ID or agent assumption.

The direction reduces `EXC-TW-016` only for local deterministic-offline harness
implementation, verification, traceability, and review closure. It does not
reduce any provider, host, measurement, claim, qualification, publication,
release, deployment, or cutover hold. No requirements meaning or master
authority root changes, so another requirements-review cycle is neither needed
nor authorized.

## Authority Chain

| Required authority element | Accepted evidence |
| --- | --- |
| Stakeholder intent and need | `INTENT-TW-011`; `NEED-TW-013`; explicit Oxiom Systems `/tw-auto ... until implemented and ready to merge` direction on 2026-08-23 |
| Approved requirements and controls | `REQ-TW-124..129`; `DEC-TW-010`; `IF-TW-006`; `RISK-TW-012..013`; accepted `TW-METRIC-ROUTING-ENVELOPE-2026-08-22-001` |
| Accepted baseline | `REQ-BASELINE-2026-04-30-001` / `aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5` |
| Requirements quality and promotion review | `TW-DOC-REVIEW-2026-08-23-METRIC-ROUTING-PROMOTED-BASELINE-001`, clean; each requirement previously rated 5/5 |
| Accepted implementation plan | `docs/plans/2026-08-23-001-feat-deterministic-metric-routing-harness-plan.md`; one consolidated plan review passed after one batched repair |
| Reviewed verification definition and RED | `ATP-TW-050`; `VER-TW-093`; 71-case frozen manifest; exact-statistics oracle; relevant nine-group RED; integrated V&V review passed after one batched repair |
| Validation question and owner boundary | `VAL-TW-041`; exact-cell owner acceptance remains planned and cannot be supplied by fixtures |
| Trace chain | `ART-TW-080 / TRACE-TW-073 / ATP-TW-050 / RESULT-TW-050 / VER-TW-093 / VAL-TW-041` |

## Accepted Physical Identities

| Artifact | SHA-256 / identity |
| --- | --- |
| Accepted plan | `4c2228674358df3be0ccbd3e6d37df267cb9a96cdb888fa34a17c619603f2bed` |
| Task workflow profile immutable payload | `sha256:de1b8121909d9f7c2fdedaa637e6f812ed83b8a88459dc886e627df5cc5bbeef` |
| Reviewed V&V scope | `sha256:6ffa1dd089f0a3fc5737db3a3d3da9b81c88cd0b1178958157df17651f17d78d` |
| Frozen acceptance manifest | `c15c289205d8a392588d17f8e35a17fbdc3e5dc485346d7855a77c70e511dc1a` |
| Frozen golden statistics | `ded5bc102b15c14c23eb940e54c92c0e3ce82720fbf65ad3ed97aa7732e219d2` |
| Frozen smoke | `2af738b150f32b39596fdc79c3d840a2cbdaabc1b1ff6bc30cd8466df7102942` |
| Post-review V&V capsule | `821dbd27a5de0e66ccceac851341733b01c3ecbed058652719102a8481d1ced7` |
| Integrated V&V review | `a2b9c825b1ebc219ba88252a5d6f16c1f9f3d0e9015d38ef42de3279caaf9274` |
| Authority-gate SEC receipt | `sha256:cc5426a3b195dd73c66caacc1f93a7541adb9cbc9f2a93550f25fac55d0fbf51` |

## Implementation Allowlist

The single `/tw-work` builder may create or change only what the accepted plan
and reviewed V&V contract require:

- the canonical and byte-identical skill-local
  `metric-routing-harness.yml` reference, including exact schemas, policy,
  identity rules, and the complete fixture content-digest inventory;
- the offline evaluator and independent evidence validator under the packaged
  `tw-auto` script surface;
- exactly the fixture, policy, corpus, signed-public-attestation, quality,
  accounting, sufficiency, qualification, and evidence-template locators frozen
  by `acceptance-cases.yml`; no private key may enter the repository;
- the deterministic GREEN result record and the metric-routing invocation in
  `.github/workflows/smoke-tests.yml`;
- requirement-preserving code/test trace anchors and terminal traceability,
  generated-view, current-snapshot, and graph-freshness reconciliation; and
- one consolidated implementation review, any one batched blocking repair,
  final same-candidate verification, and local ready-to-merge evidence.

The builder must not edit the frozen manifest, golden oracle, executable smoke,
plan, V&V definitions, reviewed capsule, or this gate. If those identities no
longer match, implementation stops for a controlled change rather than
weakening the test.

## Prohibited And Held

- no provider replay, provider adapter, network access, credentials, host
  instrumentation, live collection, external service, or spend;
- no real or estimated token, context, latency, sufficiency, material-savings,
  quality-equivalence, served-model, route-family, or global result claim;
- no transition of any real cell to `qualified`, and no completed
  `RESULT-TW-050`, host portion of `VER-TW-093`, or cell acceptance in
  `VAL-TW-041`;
- no v2 routing activation, runtime authority change, consumer mutation,
  deployment, or cutover; and
- no staging of task files, commit, push, PR creation/update, merge, tag,
  release, or publication. Ready-to-merge means a clean local candidate ready
  for a later explicitly authorized publication wrapper.

## Next Step

Set the frozen task profile status to `building` and run one `/tw-work` builder
for the complete allowlist. Return to `/tw-auto` for one integrated review and
same-candidate verification; stop before publication.
