---
id: TW-TRACEABILITY-CHECK-2026-08-23-METRIC-ROUTING-HARNESS-001
status: pass_deterministic_component_scope
date: 2026-08-24
requirements: REQ-TW-124..129
trace: TRACE-TW-073
verification: VER-TW-093-COMPONENT-2026-08-23-001
baseline: REQ-BASELINE-2026-04-30-001@aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5
review_candidate_digest: sha256:e91f6ee740acfcd4868d78cda802bf0daa38a3be8fbd5383bac4fb7b4a96db63
verification_digest: sha256:efa0154e13e006152e55c5f45138aee44a901db0116d1e776586591250e3d837
review_series: RS-GEN-2026-08-23-METRIC-ROUTING-IMPLEMENTATION-001
accepted_review_identity: sha256:2adcc4b781bb055a0ba2f4801bd95cd63f1bc0ab2cfec085c3d36d0d33d2cc6c
---

<!-- TRACEWEAVER: file-role=deterministic-metric-routing-component-traceability-check; req=REQ-TW-124,REQ-TW-125,REQ-TW-126,REQ-TW-127,REQ-TW-128,REQ-TW-129; trace=TRACE-TW-073; ver=VER-TW-093 -->

# Deterministic Metric-Routing Harness Traceability Check

## Disposition

Pass for the authorized deterministic offline component scope. The single
integrated review series is terminally clean for the exact candidate, with
accepted review identity
`sha256:2adcc4b781bb055a0ba2f4801bd95cd63f1bc0ab2cfec085c3d36d0d33d2cc6c`.
This record does not close any requirement and does not complete
`RESULT-TW-050`, `VER-TW-093`, or `VAL-TW-041`.

## Authority and Frozen Inputs

- Baseline: `REQ-BASELINE-2026-04-30-001` at SHA-256
  `aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5`.
- Accepted envelope: `TW-METRIC-ROUTING-ENVELOPE-2026-08-22-001` at document-set
  SHA-256 `879962081cb01ba9846b4f81ecb74de6892423cd5ba5817daf32558c4ed66409`.
- Consolidated plan:
  `docs/plans/2026-08-23-001-feat-deterministic-metric-routing-harness-plan.md`
  at SHA-256 `4c2228674358df3be0ccbd3e6d37df267cb9a96cdb888fa34a17c619603f2bed`.
- L3 V&V capsule:
  `docs/validation/traceweaver-2026-08-23-metric-routing-vv-capsule.json`
  at SHA-256 `821dbd27a5de0e66ccceac851341733b01c3ecbed058652719102a8481d1ced7`.
- Authority gate:
  `TW-AUTHORITY-GATE-2026-08-23-METRIC-ROUTING-HARNESS-001` at SHA-256
  `4e1ec4ebb4b03676b67351b6e584ea6a7eb6f11193cb1ce83ebbf26900774c0d`.
- Frozen acceptance manifest SHA-256:
  `c15c289205d8a392588d17f8e35a17fbdc3e5dc485346d7855a77c70e511dc1a`.
- Frozen golden-statistics SHA-256:
  `ded5bc102b15c14c23eb940e54c92c0e3ce82720fbf65ad3ed97aa7732e219d2`.
- Frozen smoke SHA-256:
  `2af738b150f32b39596fdc79c3d840a2cbdaabc1b1ff6bc30cd8466df7102942`.

## Implementation Trace

`ART-TW-080` deterministic component is represented by:

- `plugins/traceweaver-core/references/metric-routing-harness.yml` and its
  byte-identical `tw-auto` mirror;
- `traceweaver-evaluate-metric-routing` and the independently implemented
  `traceweaver-validate-metric-routing-evidence`;
- `fixtures/metric-routing-harness/`, including public-only trust material,
  real signed/mutated synthetic attestation records, observation-to-signed-
  execution binding, raw matched workflow accounting, raw quality/rater
  records, complete qualification/reset identity predicates, recomputed power,
  and closed semantic future RESULT/VER/VAL templates;
- `scripts/traceweaver-smoke-metric-routing-harness`; and
- the metric-routing smoke entry in `.github/workflows/smoke-tests.yml`.

## Test-First and Verification Evidence

The pre-builder RED command exited nonzero with exactly nine named missing
production groups. The transcript is
`docs/validation/evidence/metric-routing-harness-red.txt` and its interpretation
is recorded in
`docs/validation/traceweaver-2026-08-23-metric-routing-red-evidence.md`.

The stable candidate then produced:

```text
scripts/traceweaver-smoke-metric-routing-harness
# exit 0
# metric_routing_smoke_case_count=71
# metric_routing_smoke_status=pass

# permanent CI stress: same attestation and state directory, 24 processes
# fresh ledger:    1 fixture_predicate_passed / 23 held_attestation_replayed
# 512-KiB ledger:  1 fixture_predicate_passed / 23 held_attestation_replayed
# 1,048,577 bytes: fail closed

traceweaver-evaluate-metric-routing --root . --self-test evidence-templates
# positive_templates_validated=3; negative_mutations_rejected=31

ruby --disable-gems /private/tmp/traceweaver-metric-routing-envelope-tamper.rb
# exit 0
# metric_routing_envelope_tamper_rejected=true
```

The atomic, fsync-before-unlock replay key binds nonce, canonical attestation
digest, execution identity, and exact cell, and its ledger is capped at one
MiB. The validator independently enforces closed shapes, observation execution
binding, frozen policy and recomputed power, complete cell/prerequisite
bindings, selected fixture inventory digests, exact envelope/template fields,
held claims, and recomputed raw quality/accounting statistics. Canonical/mirror
bytes match, all inventory hashes pass, the frozen hashes above are unchanged,
and no private-key material is present.

The staged-authority requirements digest reconciliation also reran
`scripts/traceweaver-smoke-model-context-routing`; all 72 frozen model-context
cases passed without changing the routing compiler, profile, or route behavior.

## Code-Anchor Check

The implementation-mode scanner was run over both references, evaluator,
validator, frozen smoke, CI, and every fixture path. Its inspected executable,
reference, and CI surface reported:

```text
code_traceability_status=pass
code_traceability_mode=implementation
code_traceability_findings=0
```

The result includes 81 explicit reviewed prefilter exceptions rather than an
unsupported claim that the scanner parsed controlled data:

- 78 non-frozen JSON/JSONL/YAML fixture/template paths have exact per-path
  matrix rows, structured `_traceweaver` REQ/TRACE/VER metadata or equivalent
  YAML metadata, and current hashes in the canonical reference inventory; the
  current source-anchor scanner does not parse that structured data form.
- `acceptance-cases.yml`, `golden-statistics.yml`, and the executable smoke are
  immutable under the authority gate. Their exact hashes and existing
  requirement/trace/VER/ATP content were manually inspected and recorded in
  their exact matrix exception rows.

These exceptions are controlled-data/immutable-anchor compatibility records.
They do not waive behavior review, digest verification, fixture execution, or
the final integrated review.

## Closure and Claims

Structured acceptance result: not applicable. No requirement-closure claim is
made, and the six missing structured acceptance results remain correct.

Allowed claims are limited to:

- the deterministic offline portion of `ART-TW-080` is implemented locally;
- the deterministic component of `ATP-TW-050` passed all 71 frozen cases; and
- the repaired candidate passed its one-reviewer, two-turn integrated review
  with zero remaining blockers and is eligible only for deterministic
  carrier/view closure and same-candidate final verification.

Held claims remain: provider replay, host collection/instrumentation, external
calls or spend, real `RESULT-TW-050`, completed `VER-TW-093`, `VAL-TW-041`, any
measured token/latency/quality/sufficiency result, exact-cell qualification,
served-model proof, publication, release, deployment, and active cutover.

## Next Step

Regenerate the controlled traceability views, perform the single mechanical
`tw-graph` refresh/check, and re-run same-candidate deterministic verification.
If those checks remain clean, stop before `/tw-commit-push-pr`; publication and
merge still require their separate authority gate.
