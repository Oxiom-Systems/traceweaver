---
id: VER-TW-092
status: defined_preimplementation
date: 2026-08-22
owner: Oxiom Systems
work_item: TW-PLAN-2026-08-22-V050-MODEL-GOVERNANCE-001
requirements: REQ-TW-109..123
acceptance_test: ATP-TW-049
result: RESULT-TW-049
baseline_hash_sha256: dae781e0cc1793798378f5af81a99503581e83dfbc9ce38876c465f4521f6300
---

# VER-TW-092 — 0.5.0 Shadow Model-Governance Verification Definition

## Objective

Verify that the exact TraceWeaver Core 0.5.0 candidate implements
`REQ-TW-109..123`, preserves v1 behavior and imported CE bytes, installs and
rolls back transactionally, and is release-ready only for the approved
shadow-governance claims.

## ATP-TW-049 Coverage

The executable acceptance package must cover:

- canonical map/profile/schema compatibility and digest identity;
- four-axis independence, exact B0--B3 values/states/floors, ascending
  lowest-eligible selection, all-B3 rejection, and deterministic profile hash;
- exact SEC callable, alias, registered descendant-prompt, and declared
  generic-family inventory with omission/duplicate/unknown negatives;
- exact route-key/cardinality and invalid/stale outcomes;
- packet/assembled/output/planned-context arithmetic and cap -1/equal/+1;
- capability/tokenizer reset and optional pricing metadata;
- source-oracle independence, exact six-category derivation, non-empty and
  non-all-excluded closure, 100 percent recall, seeded omission, explicit
  authority exclusion, discovered dependency, and independent-reviewer
  negatives;
- direct/contained digest locator/fresh shard delivery and traversal,
  unreadable, stale, inheritance, truncation, and lossy negatives;
- deterministic promotion/locator/shard/re-isolate/terminal-hold order with
  fan-out/depth/retry limits and no model/risk downgrade;
- separate plan/final shadow-receipt canonical identity, tamper, non-identical
  duplicate, replay, baseline/invocation/route/parent/depth/lineage mismatch,
  byte-identical v1 receipts, and strict legacy-consumer compatibility;
- `host_measured|estimated|unavailable` observation and independently separate
  content/efficiency eligibility with efficiency false for 0.5.0;
- advisory no-call/no-dispatch/no-write and isolated-replay permitted-effect
  boundary, with v1/repository/install/Git/PR/release/external invariance;
- canonical/mirror equality, explicit SEC/bootstrap shadow projections,
  unchanged native-child/terminal/review-series v1 bytes, and imported CE body
  byte stability;
- complete installed projection plus failure injection after each material
  phase with prior byte/mode equality;
- integrated release-readiness schema v2, exact five-manifest version equality,
  fixed candidate scope, public held-claim scan, and automatic release boundary.

## Frozen Cases And Commands

`fixtures/model-context-routing/acceptance-cases.yml` is the authoritative
preimplementation ATP-TW-049 inventory. It names every case, fixture, expected
outcome, full command, and single-case command. Implementation may add cases
but shall not remove, rename, weaken, or skip a frozen case.

The installer rollback matrix runs each of these phases on both a pre-existing
and an absent target:

- `after_preflight_snapshot`
- `after_skills_projection`
- `after_references_projection`
- `after_agents_projection`
- `after_direct_callables_projection`
- `after_generated_routing_projection`
- `after_plugin_manifest_projection`
- `after_install_manifest_write`
- `after_reconciliation_cleanup`

The minimum same-candidate command set is the plan's Verification Commands,
the full ATP-TW-049 smoke, the named installer matrix, the release-readiness v2
smoke, and the V&V capsule checker with review required. The final result
records every case ID, command, exit status, relevant output, environment
boundary, candidate commit/tree digest, and evidence locator.

## Pass And Hold Rules

- Every deterministic ATP-TW-049 cell and applicable regression command must
  pass on the same candidate.
- Skipped required cells are failures. Environment-inapplicable live/provider
  cells remain explicit held non-claims and are not required by shadow 0.5.0.
- Existing v1 route snapshots and imported CE bodies must be byte-identical.
- Installer rollback mismatch is a release blocker.
- Any active-cutover or quantitative savings/sufficiency claim is a release
  blocker even if functional smokes pass.
- VER-TW-092 does not satisfy VAL-TW-040 or external model attestation.

The completed result is written to
`docs/validation/traceweaver-2026-08-22-v050-model-governance-verification-result.md`.
