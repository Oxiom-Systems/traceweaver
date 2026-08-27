---
id: VER-TW-093-COMPONENT-2026-08-23-001
verification: VER-TW-093
acceptance_test: ATP-TW-050
status: deterministic_component_evidence_only
date: 2026-08-24
requirements: REQ-TW-124..129
trace: TRACE-TW-073
baseline: REQ-BASELINE-2026-04-30-001@aecd891d455f71a1dbe71a8e10acd11803d88a9cd7dce6714f0bb44454bda0b5
review_candidate_digest: sha256:e91f6ee740acfcd4868d78cda802bf0daa38a3be8fbd5383bac4fb7b4a96db63
review_candidate_path_count: 114
verification_digest: sha256:efa0154e13e006152e55c5f45138aee44a901db0116d1e776586591250e3d837
---

<!-- TRACEWEAVER: file-role=metric-routing-deterministic-component-verification-result; req=REQ-TW-124,REQ-TW-125,REQ-TW-126,REQ-TW-127,REQ-TW-128,REQ-TW-129; trace=TRACE-TW-073; ver=VER-TW-093; val=VAL-TW-041 -->

# Deterministic Metric-Routing Component Verification Result

## Component Evidence

The repository-local, offline `ATP-TW-050` completed against the repaired
114-path semantic review candidate at SHA-256
`e91f6ee740acfcd4868d78cda802bf0daa38a3be8fbd5383bac4fb7b4a96db63`
on 2026-08-24 with `metric_routing_smoke_status=pass`. The digest is the
recursively path-sorted sequence of `path`, executable mode, and file SHA-256
for the full delta from released 0.5.0, excluding only generated/current-state,
verification, traceability-check, and terminal-review carriers. Its method is
deterministic test with repository-contained synthetic fixtures, a public-only
RSA fixture trust root, canonical evaluator evidence, and independently
recomputed local validator evidence. It exercises the 71 frozen cases for
`REQ-TW-124..129`.

Commands and actual result:

```text
ruby --disable-gems scripts/traceweaver-smoke-metric-routing-harness
# exit 0; metric_routing_smoke_status=pass

# execute the "Deterministic metric-routing atomic replay regression" run block
# from .github/workflows/smoke-tests.yml
# exit 0; fresh=1 accepted/23 replayed; nonempty=1/23;
# 1,048,577-byte ledger failed closed

plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-evaluate-metric-routing \
  --root . --self-test evidence-templates
# exit 0; positive_templates_validated=3; negative_mutations_rejected=31

ruby --disable-gems /private/tmp/traceweaver-metric-routing-envelope-tamper.rb
# exit 0; metric_routing_envelope_tamper_rejected=true

scripts/traceweaver-smoke-model-context-routing
# exit 0; model_context_routing_smoke=pass; 72/72 cases

scripts/traceweaver-smoke-workflow-profile
scripts/traceweaver-smoke-verify
scripts/traceweaver-smoke-no-publication
scripts/traceweaver-smoke-review-series-convergence
# exit 0 for every command
```

Expected result: every frozen case is evaluated without a skip and each
validator record binds the exact evaluator evidence bytes and identity.
Actual result: the unchanged smoke reported all 71 cases as passed. A
barrier-controlled 24-process regression over one signed attestation and one
caller-owned state directory produced exactly one accepted predicate and 23
replay holds on both fresh and 512-KiB nonempty ledgers. A ledger one byte over
the one-MiB ceiling failed closed. Observation execution identity now equals
the canonical digest of the signed execution object; policy, pair, trust,
method, reset, prerequisite-bundle, and exact-cell qualification identities are
derived and cross-compared; and the binomial powered minimum is recomputed.
The evaluator and independent validator semantically parse all three future
evidence templates, while the permanent self-test rejected 31 missing-field or
invalid-state mutations. Canonical/mirror bytes, the complete fixture
inventory, immutable manifest/golden/smoke hashes, absence of private-key
material, code-anchor scan, model-context regression, root verify, review-series
controller, workflow-profile, and no-publication checks passed. No deviation
from the deterministic component procedure was recorded.

The canonical verification bundle uses recursively key-sorted JSON and has
SHA-256
`efa0154e13e006152e55c5f45138aee44a901db0116d1e776586591250e3d837`.
It binds the 114-path behavior digest, canonical reference identity
`a6db3a7ec9cb0fd0b554591deac970572dcd14080cadaa611c46b63dc47b8b94`,
the three frozen input hashes, all counts above, 81 disclosed scanner
exceptions, and every held claim below.

Canonical bundle bytes:

```json
{"behavior_candidate":{"algorithm":"sha256(sorted(path + NUL + git_mode + NUL + sha256(file_bytes) + LF))","digest":"sha256:e91f6ee740acfcd4868d78cda802bf0daa38a3be8fbd5383bac4fb7b4a96db63","path_count":114},"frozen_inputs":{"acceptance_manifest":"sha256:c15c289205d8a392588d17f8e35a17fbdc3e5dc485346d7855a77c70e511dc1a","golden_statistics":"sha256:ded5bc102b15c14c23eb940e54c92c0e3ce82720fbf65ad3ed97aa7732e219d2","smoke":"sha256:2af738b150f32b39596fdc79c3d840a2cbdaabc1b1ff6bc30cd8466df7102942"},"held_claims":["provider_host_collection","result_tw_050","verification_tw_093_completion","validation_tw_041","qualification","quantitative_claims","publication","release","deployment","cutover"],"reference_identity":"sha256:a6db3a7ec9cb0fd0b554591deac970572dcd14080cadaa611c46b63dc47b8b94","results":{"atomic_replay":{"fresh":{"accepted":1,"replayed":23},"nonempty_512k":{"accepted":1,"replayed":23},"oversized_1048577":"failed_closed"},"canonical_mirror":"pass","code_traceability":{"findings":0,"reviewed_exceptions":81,"semantic_targets":5},"evidence_templates":{"negative_mutations_rejected":31,"positive_templates_validated":3},"full_atp":{"cases":71,"outcome":"pass"},"model_context_regression":{"cases":72,"outcome":"pass"},"no_publication":"pass","private_key_matches":0,"review_series_controller":"pass","root_verify":"pass","ruby_syntax":"pass","vv_capsule":"pass","workflow_profile":"pass"},"schema_version":"tw-metric-routing-verification-bundle/1"}
```

The tested candidate is the local semantic candidate on branch
`codex/metric-routing-authority-envelope`, based on released 0.5.0 commit
`3a1f3c56b093e61b88e9f6282637878e8ebbf163`. It is not a commit, release,
published artifact, provider execution, host execution, or served-model
attestation. Generated and terminal carriers are verified separately and do
not enter the semantic digest they derive from.

## Integrated Review Closure

The single integrated review series
`RS-GEN-2026-08-23-METRIC-ROUTING-IMPLEMENTATION-001` terminated as
`candidate_review_saturated` for the same behavior and verification digests.
All three retained P1 findings are closed, no repair regression was found, and
the controller recorded accepted review identity
`sha256:2adcc4b781bb055a0ba2f4801bd95cd63f1bc0ab2cfec085c3d36d0d33d2cc6c`.
The review record is
`docs/validation/traceweaver-2026-08-24-metric-routing-harness-integrated-code-review.md`.
The native child remained advisory because served-model attestation is
unconfigured; the coordinator independently reproduced the closure evidence
and owns the formal disposition.

## Explicit Holds

This is not a completed `VER-TW-093` execution. Provider and host collection,
`RESULT-TW-050`, completion of `VER-TW-093`, `VAL-TW-041`, qualification,
quantitative or quality claims, publication, release, deployment, and cutover
remain held. Synthetic positives prove fixture predicates only; they do not
produce a real result, qualified route, measured claim, or stakeholder
validation.

## Evidence Path

The reproducible component evidence is the frozen command above with
`fixtures/metric-routing-harness/acceptance-cases.yml`,
`fixtures/metric-routing-harness/golden-statistics.yml`, and the canonical
`ART-TW-080` reference. A later independently attested provider/host path and
cell-specific owner review are required before the held `VER-TW-093` and
`VAL-TW-041` boundaries may be reconsidered.
