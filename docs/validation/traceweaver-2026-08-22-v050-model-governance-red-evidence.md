---
id: RED-TW-2026-08-22-V050-MODEL-GOVERNANCE-001
status: expected_failure_recorded_before_implementation
date: 2026-08-22
work_item: TW-PLAN-2026-08-22-V050-MODEL-GOVERNANCE-001
requirements: REQ-TW-109..123
acceptance_test: ATP-TW-049
verification: VER-TW-092
baseline_hash_sha256: dae781e0cc1793798378f5af81a99503581e83dfbc9ce38876c465f4521f6300
released_base_sha: e1b2886ea51ceae03249c4ae09ff75308678970a
---

# TraceWeaver Core 0.5.0 Model-Governance RED Evidence

The model-context acceptance smoke and the frozen 72-case ATP-TW-049 manifest
were created and executed before the map, compiler, receipt validator,
installer projection, or release implementation existed. The manifest covers
every requirement in `REQ-TW-109..123`, freezes exact fixture names and
expected outcomes, and freezes nine installer failure phases across
pre-existing and absent targets.

Command:

```bash
scripts/traceweaver-smoke-model-context-routing
```

Observed exit status: `1` (expected failure).

Observed consolidated output:

```text
model_context_red_group=map_inventory reason=missing_map_mirror_or_generator
model_context_red_group=compiler_minimization reason=missing_shadow_compiler
model_context_red_group=receipt_integrity reason=missing_shadow_receipt_validator
model_context_red_group=v1_invariance reason=missing_v1_compatibility_fixtures
model_context_red_group=source_oracle reason=missing_complete_oracle_fixture
model_context_red_group=installer_transaction reason=missing_failure_injection_contract
model_context_red_group=release_readiness_v2 reason=missing_integrated_readiness_schema
model_context_red_group=profile_projection reason=missing_packaged_model_context_profile
model_context_red_group=sec_projection reason=missing_sec_map_binding
model_context_red_total=9
```

Each failure is relevant and specific to a frozen acceptance group. The smoke
validated that the case manifest has unique IDs and covers all fifteen
requirements before reporting the nine missing implementation surfaces. No
production or package implementation file had been added when this evidence
was captured.

GREEN requires all 72 frozen cases, both states for every installer failure
phase, the same full smoke, and the complete VER-TW-092 command set to pass on
the exact release candidate. A removed, renamed, weakened, or skipped frozen
case fails ATP-TW-049.
