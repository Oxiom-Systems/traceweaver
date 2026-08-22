---
id: TW-PLAN-2026-08-22-V050-MODEL-GOVERNANCE-001
title: TraceWeaver Core 0.5.0 shadow model-governance implementation and release
status: accepted_doc_review_passed
date: 2026-08-22
owner: Oxiom Systems
workflow_profile: L3
branch: codex/v050-model-context-routing
released_base_sha: e1b2886ea51ceae03249c4ae09ff75308678970a
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: dae781e0cc1793798378f5af81a99503581e83dfbc9ce38876c465f4521f6300
authorized_by: TW-DECISION-2026-08-22-V050-MODEL-GOVERNANCE-DIRECT-DELIVERY-001
change_id: CHG-TW-2026-08-22-002
requirements: REQ-TW-109..123
trace: TRACE-TW-072
artifact: ART-TW-079
acceptance_test: ATP-TW-049
verification: VER-TW-092
validation: VAL-TW-040
release_target: traceweaver-core--v0.5.0
current_execution_boundary: prepare_ready_to_merge_do_not_merge_tag_or_release
---

<!-- TRACEWEAVER: file-role=v050-model-governance-plan; req=REQ-TW-109,REQ-TW-123; trace=TRACE-TW-072; ver=VER-TW-092; val=VAL-TW-040 -->

# TraceWeaver Core 0.5.0 Shadow Model-Governance Plan

## Outcome

Ship one reviewed TraceWeaver Core 0.5.0 release containing a deterministic,
installable, shadow-only model/context governance map and compiler. The release
lets maintainers inspect the smallest structurally eligible context hypothesis
for every registered TraceWeaver route, understand exact source and overflow
holds, and validate receipt integrity while current v1 dispatch remains
authoritative.

This is the entire 0.5.0 product scope. The unfinished product-lifecycle and
semantic-HTML Slices 1--8 remain deferred on their historical worktree. Active
routing cutover, active descendant enforcement, served-model attestation,
provider replay qualification, token savings/sufficiency, and quality
equivalence remain held.

The current execution terminal is an exact, green, merge-ready PR. Per the
owner's later direction, this run must not merge that PR, create a tag or
GitHub Release, or trigger/claim the automatic post-merge release receipt.
Those actions require a later explicit owner go-ahead; they are not silently
inferred from the product release authority in this plan.

## Authority And Success Boundary

Implementation is authorized by
`TW-DECISION-2026-08-22-V050-MODEL-GOVERNANCE-DIRECT-DELIVERY-001` and
`CHG-TW-2026-08-22-002` against baseline
`REQ-BASELINE-2026-04-30-001` / `sha256:dae781e0...f6300`.

Success requires all of the following on one exact candidate:

- `REQ-TW-109..123` remain approved and unchanged;
- the canonical and skill-local map/profile projections are byte-identical;
- all SEC callables, the `lfg` alias, registered CE descendant prompts, and
  declared generic descendant templates appear exactly once;
- map/profile/source-oracle/receipt validation, accounting boundaries,
  deterministic overflow, v1 invariance, and honest eligibility holds pass;
- injected installer failures restore complete prior installed bytes and modes;
- the existing routing, SEC, bootstrap, discovery, reconciliation, release,
  graph, and full verification suites pass;
- one consolidated code review has no open P0/P1 findings after at most one
  routine repair cycle;
- traceability, graph freshness, package projection, exact version metadata,
  owner proxy validation, and PR checks pass on the merge-ready candidate;
- the automatic release workflow and receipt boundary pass static verification,
  while the actual post-merge receipt remains unexecuted under the current stop;
  and
- public release text states shadow-only/v1-authoritative boundaries and makes
  none of the held claims.

## Architecture

The central control chain is:

```text
workflow-profile (experimental values/capability snapshot)
        +
SEC registry (callable/alias authority and v1 model route)
        +
model-context map (declared routes, independent axes, source oracle)
        |
        v
shadow compiler -> canonical plan/final receipt -> receipt validator
        |
        +-- invalid/incomplete: exact held shadow outcome
        +-- eligible: advisory recommendation only

v1 native-child dispatch remains authoritative and unchanged
```

The map references the SEC registry identity but does not contain the SEC file
digest. The SEC stores and validates the map path/schema/digest, so digest
direction is acyclic. Each receipt independently binds the physical SEC,
profile, map, inventory, oracle, and source-manifest digests.

Shadow receipts are separate `tw-model-context-receipt/1` artifacts created
only by explicit shadow compilation. They may carry a link to a v1 identity,
but no v1 resolver, native-child, terminal, or review-series envelope gains a
field or changes its schema, canonical identity, bytes, or outcome. Frozen
legacy-consumer and byte-comparison fixtures enforce that boundary.

Imported `ce-*` bodies are read-only inputs to the declared-route generator.
The generator uses a closed grammar: SEC contracts; descendant prompt files
under the eleven approved imported engines' `references/agents/` and
`references/personas/`; and an explicit map-owned generic-family list for
roles without a prompt file. It never claims those templates are observed
runtime instances.

## Frozen Selection And Source Contract

The source-oracle taxonomy is closed to six categories:

1. `controlling_authority`
2. `task_scope`
3. `skill_contract`
4. `implementation_dependencies`
5. `current_external_sources`
6. `accepted_evidence`

Every route requires categories 1--3. Implementation, review, and publication
routes additionally require 4 and 6. Category 5 is required whenever the SEC,
route, or task declares temporally unstable or external facts. Every category
appears exactly once as `satisfied`, `excluded_by_authority`, or `held`.
Satisfied categories contain at least one exact source. Exclusions require a
specific authority ID and rationale; categories 1--3 cannot be excluded. A
held category prevents structural eligibility. Empty, all-excluded,
compiler-authored, duplicate-category, or unexplained oracles are invalid.

The top-level route floors are the exact B0--B3 lists in the controlling owner
decision and REQ-TW-114. `lfg` resolves to the `tw-auto` B3 route. Descendants
inherit the canonical parent floor unless an authority-approved override is
enumerated in the map. Starting at the floor, the compiler checks classes in
ascending order and selects the first class whose source closure passes and
whose packet input, requested reserved output, assembled-input proposal
ceiling, and 272,000-token capability context-window checks all pass. An
all-B3 mutation or selecting a higher class when a lower class is eligible is
invalid.

## Experimental Profile

The existing `tw-workflow-profile/1` templates gain a `model_context` block:

- schema `tw-model-context-profile/1`;
- mode `advisory_shadow_compile` and authoritative runtime `v1`;
- B0=`32000/4000`, B1=`64000/8000`, B2=`128000/16000`,
  B3=`192000/24000` packet-input/reserved-output caps;
- host/system/tool reserve `32000`, assembled target `224000`, proposal ceiling
  `240000`, and pricing refresh sentinel `272000`;
- frozen capability/tokenizer snapshot identity and explicit `unqualified` or
  `structurally_eligible` state only;
- frozen capability context-window hypothesis of `272000` tokens;
- maximum shard fan-out and depth; and
- active cutover disabled.

The values are released as revision-controlled hypotheses. No profile value is
called sufficient or qualified in 0.5.0.

## Implementation Units

### U1 — Map, Inventory, Compiler, And Receipt Integrity

Dependencies: accepted plan/doc/V&V authority package.

Owned files:

- `plugins/traceweaver-core/references/model-context-map.yml`
- `plugins/traceweaver-core/skills/tw-auto/references/model-context-map.yml`
- `plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-generate-model-context-map`
- `plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-compile-model-context-route`
- `plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-validate-model-context-receipt`
- `fixtures/model-context-routing/`
- `scripts/traceweaver-smoke-model-context-routing`

Work:

1. Encode the already-frozen canonical map, independent axes, exact top-level
   B floors, six-category source taxonomy/derivation rules, descendant
   discovery grammar, generic families, qualification/claim boundaries, and
   digest. The builder may not choose a different taxonomy or floor map.
2. Generate/validate lexical top-level, alias, prompt-derived descendant, and
   generic-family route records from the clean package bytes.
3. Compile an advisory route using exact accounting equations, source-manifest
   recall/delivery checks, promotion/locator/shard/hold ordering, profile
   fan-out/depth limits, and v1-invariance fields.
4. Emit separate `tw-model-context-receipt/1` plan/final envelopes and validate digest,
   mutation, duplicate/replay ledger, baseline/invocation/route/lineage, and
   source identity without claiming external authenticity.
5. Cover positive, cap -1/equal/+1, capability-derived, omission, stale,
   traversal, duplicate, unknown, alias, overflow, truncation, retry, receipt
   tamper/replay, observation, eligibility, and invariance cases.

Verification: focused smoke and Ruby syntax; the smoke is ATP-TW-049's primary
executable artifact.

### U2 — Central Registry And Bootstrap Projection With V1 Invariance

Dependencies: U1.

Owned files:

- both `workflow-profile-template.yml` copies;
- `plugins/traceweaver-core/references/skill-execution-contracts.yml`;
- SEC generator/resolver under `tw-auto/scripts/`;
- bootstrap helper/templates; and
- focused existing routing/profile/SEC/bootstrap and legacy-consumer smokes.

Work:

1. Add the experimental profile while preserving v1 model/effort fields.
2. Bind the SEC registry to the map schema/path/digest in a top-level extension
   that the v1 resolver ignores unless shadow compilation is explicitly
   requested. Preserve byte-identical ordinary v1 resolver output.
3. Leave native-child, terminal, and persistent review-series v1 receipts
   unchanged. A separately stored shadow receipt may link to their existing
   identity but is never embedded in them.
4. Project the map/profile during bootstrap without making it project authority
   or enabling active cutover.
5. Regenerate SEC skill hashes after any TraceWeaver-owned skill changes.

Verification: canonical/mirror byte parity, strict legacy-consumer fixtures,
and byte comparisons prove ordinary v1 schemas, identities, bytes, and outcomes
remain identical.

### U3 — Transactional Installation And Package Projection

Dependencies: U1; may proceed alongside U2 on disjoint implementation files.

Owned files:

- `src/index.ts`
- isolated Codex/Antigravity install and host-reconciliation smokes/fixtures

Work:

1. Add plugin version and map schema/path/digest plus capability/profile
   metadata to the install manifest.
2. Wrap the complete installed projection—packaged skills, direct callables,
   references, agents, plugin/install manifests, and generated routing
   artifacts—in a recoverable transaction.
3. Add controlled failure injection after each material phase and restore
   prior bytes and POSIX modes exactly on any failure.
4. Preserve conflict/ownership checks and do not overwrite unowned targets.

Verification: isolated install success and byte/mode tree-digest equality for
each injected failure point on pre-existing and empty installs.

### U4 — Integrated Release Readiness, Documentation, And Metadata

Dependencies: U1--U3.

Owned files:

- `scripts/traceweaver-check-release-readiness`
- `scripts/traceweaver-smoke-release-readiness`
- `fixtures/release-readiness/`
- `.github/workflows/smoke-tests.yml`
- the five plugin/marketplace manifests
- `README.md`, `plugins/traceweaver-core/README.md`,
  `docs/guides/using-traceweaver.md`, and `CHANGELOG.md`
- `docs/validation/traceweaver-plugin-0.5.0-release-candidate.md`

Work:

1. Add backward-compatible release-readiness schema v2 for one integrated
   candidate; do not reuse the 0.4.0 PRs as fake prerequisites.
2. Add the model-context smoke to CI and exact candidate readiness fixtures.
3. Bump all five manifests to 0.5.0 and update current install/tag guidance.
4. Document the map, B0--B3 hypotheses, inspection commands, honest holds,
   v1-authoritative behavior, deferred active cutover, and rollback boundary.
5. Create the exact release-candidate record with a fixed scope digest that
   excludes itself and `.traceweaver/tw-graph-freshness.json`.

Verification: release manifest equality, readiness positive/negative fixtures,
public-held-claim scan, package validation, full smoke suite, and exact diff.

### U5 — One Consolidated Review, Repair, Verification, And Release

Dependencies: U1--U4 complete.

Owned records:

- one consolidated code-review record;
- `RESULT-TW-049`, `VER-TW-092`, and VAL-TW-040 result records;
- final authority/matrix/Intent/view/graph reconciliation;
- exact publication and merge capsules; and
- post-merge automatic release receipt verification.

Work:

1. Run traceability plus one consolidated correctness/maintainability/testing/
   project-standards review with conditional security/reliability/API/data
   lenses only where the diff requires them.
2. Repair all P0/P1 findings and genuine regressions in one routine repair
   cycle; rerun retained findings and the complete verification set.
3. Have an owner-appointed independent rater perform VAL-TW-040 proxy
   validation using an isolated install and representative B0--B3 routes, and
   separately disposition every real release-oracle route/category cell.
   Record acceptance or hold honestly; do not convert it into
   savings/sufficiency validation.
4. Reconcile the bounded `TRACE-TW-072` chain, roots, generated views/current
   snapshot, graph receipt, fixed candidate digest, and exact release readiness
   without semantic edits after final freshness. Keep the pre-existing global
   closure backlog visible and non-gating; make no whole-baseline closure claim.
5. Commit and push the exact candidate under one publication capsule, create
   the PR, wait for checks/review, resolve any blocking feedback inside the
   same review series, and prove the PR is genuinely ready to merge.
6. Stop before merge. A future explicit owner direction may authorize a
   merge-only capsule; only after that future merge may the main-only workflow
   create `traceweaver-core--v0.5.0` and `release-runtime-receipt.json` and may
   the tag/GitHub Release identity be verified. Never create the tag manually.

## Verification Commands

Focused and regression commands include:

```bash
scripts/traceweaver-smoke-model-context-routing
scripts/traceweaver-smoke-workflow-profile
scripts/traceweaver-smoke-skill-execution-contract
scripts/traceweaver-smoke-terra-routing
scripts/traceweaver-smoke-bootstrap-project
scripts/traceweaver-smoke-review-series-convergence
scripts/traceweaver-smoke-release-readiness
bash scripts/traceweaver-check-release-manifest-versions --expect 0.5.0
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery
TRACEWEAVER_CODEX_EXEC_TIMEOUT_SECONDS=10 scripts/traceweaver-smoke-codex-separate-home-runtime
scripts/traceweaver-smoke-antigravity-discovery
scripts/traceweaver-smoke-codex-host-reconciliation
scripts/traceweaver-smoke-verify
claude plugin validate --strict plugins/traceweaver-core
ruby scripts/traceweaver-audit-ce-closure
```

The complete preimplementation case inventory and expected outcomes are frozen
in `fixtures/model-context-routing/acceptance-cases.yml`; implementation may
add tests but may not remove, rename, weaken, or silently skip a frozen case.
Installer failure injection is fixed after preflight snapshot, skills,
references, agents, direct callables, generated routing, plugin manifest,
install-manifest write, and reconciliation cleanup, on both pre-existing and
absent targets. The exact final command set is frozen in the V&V definition
and verification result. Network/live-host commands may run only where
explicitly applicable; unavailable external validation is held, never
replaced with a local claim.

## Rollback

Before publication, rollback is `git revert` of the integrated candidate or
abandoning its branch/PR. Installer rollback is automatic and byte/mode-exact
for the complete touched installed projection. After release, the repository
rollback is a reviewed revert/patch release; installed users may reinstall the
previous 0.4.0 package. No 0.5.0 procedure enables active cutover, so there is
no runtime routing state to roll back.

## Review And Change Policy

This plan receives one scoped document review. Implementation receives one
consolidated code-review series and at most one routine repair cycle. The
review focuses on correctness, security of untrusted paths/digests, rollback,
determinism, test adequacy, v1 invariance, and held-claim honesty.

A new requirement, changed stakeholder intent, active-cutover proposal, cheaper
model, imported CE body edit, or material scope expansion requires new owner
authority. A repair that preserves these accepted requirements remains inside
this plan and review series.

## Next Step

Create and validate the L3 V&V capsule with real RED evidence, run the single
scoped requirements/authority plus plan/document review, then run the authority
gate. Only a pass hands this plan to implementation.
