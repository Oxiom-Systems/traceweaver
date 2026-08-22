---
id: TW-DECISION-2026-08-22-V050-MODEL-GOVERNANCE-DIRECT-DELIVERY-001
status: owner_approved_controlling_0_5_0_model_governance_authority
date: 2026-08-22
owner: Oxiom Systems
release_target: 0.5.0
released_base_sha: e1b2886ea51ceae03249c4ae09ff75308678970a
branch: codex/v050-model-context-routing
delivery_mode: one_integrated_requirements_plan_implementation_review_repair_release_cycle
runtime_mode: advisory_shadow_compile_v1_authoritative
active_cutover: deferred_outside_0_5_0
current_execution_boundary: prepare_ready_to_merge_do_not_merge_tag_or_release
---

<!-- TRACEWEAVER: file-role=owner-model-governance-authority; req=REQ-TW-109,REQ-TW-123; trace=TRACE-TW-072; ver=VER-TW-092; val=VAL-TW-040 -->

# TraceWeaver Core 0.5.0 Model-Governance Direct Delivery Authority

## Owner direction

Oxiom Systems gave the following current direction on 2026-08-22:

> I'm not ok with the narrow decision aprouch. We can approve the requirement
> and authorize it then draft the plan, doc review, inplment, core review,
> addrss issues and then release. No need to do 10+ micro narrow gated reviews
> cycle which just fans out and never get to a complete work inplmention. This
> is just for model governace

This is a direct owner scope and execution decision. It replaces the earlier
additive/subordinate routing proposal and the 0.5.0 release applicability of
the broad lifecycle Slices 1--8. It does not erase those proposals or their
history. Their identifiers and source records remain reserved for a future
lifecycle-assurance program, outside this release.

Oxiom Systems subsequently narrowed the current agent execution boundary:

> Continue until ready to merge. Do not merge

That direction authorizes completion of implementation, the one consolidated
review/repair series, verification, validation, trace/graph reconciliation,
commit, push, PR creation, and PR-check closure. This run must stop with a
genuinely merge-ready PR. It does not authorize merge, tagging, GitHub Release
creation, or the post-merge automatic release receipt. The limitation narrows
the current execution transaction; it does not revoke the approved 0.5.0
product scope or the conditional release authority available to a later,
explicit owner direction.

## Controlling decision

Oxiom Systems directly approves and authorizes:

- `INTENT-TW-011`, `NEED-TW-013`, `REQ-TW-109..123`, `DEC-TW-009`, and
  `RISK-TW-011` as the model-governance authority for TraceWeaver Core 0.5.0;
- `ART-TW-079`, `TRACE-TW-072`, `ATP-TW-049`, `RESULT-TW-049`, `VER-TW-092`,
  and `VAL-TW-040` as the shared delivery and evidence chain;
- one integrated delivery sequence: approve and normalize the controlled
  requirements, create one implementation plan and one scoped document review,
  define one L3 V&V package, implement, run one consolidated code review,
  repair blocking findings, rerun verification and traceability, then publish
  the reviewed 0.5.0 release through the controlled Git/PR/release route; and
- use of the clean worktree and branch named in the frontmatter so unfinished
  lifecycle-program artifacts do not enter the model-governance release.

Release authority is conditional on the final same-candidate verification,
review, rollback, traceability, owner-validation disposition, PR checks, and
release-receipt checks passing. A blocking finding is repaired inside this
single review cycle. A changed requirement, changed stakeholder intent, or
material scope expansion returns to owner authority; ordinary implementation
repairs do not create a new authority cycle.

For the current run, all pre-merge conditions must pass and the release
workflow/receipt boundary must be verified statically, but the post-merge tag,
release, and runtime receipt remain deliberately unexecuted.

## Product intent and need

| ID | Controlled statement | Validation question |
| --- | --- | --- |
| `INTENT-TW-011` | Release TraceWeaver Core 0.5.0 with a shadow-only model/context governance map that selects the smallest structurally eligible context allocation for each registered route without changing model identity, risk-selected reasoning effort, authority, required evidence, validation, or publication semantics. | Can maintainers inspect and replay a deterministic route recommendation while v1 behavior and every authority/evidence boundary remain unchanged? |
| `NEED-TW-013` | Contributors need a deterministic, token-proportionate, context-complete routing map and receipt contract across TraceWeaver callables and registered descendants, with honest holds when completeness or sufficiency cannot be demonstrated. | Does each route expose a bounded context hypothesis without silently omitting sources, lowering judgment, or presenting an estimate as measured sufficiency? |

## Approved requirements

| ID | Atomic obligation | Verification method | Validation question |
| --- | --- | --- | --- |
| `REQ-TW-109` | Provide one `tw-model-context-map/1` artifact with model role, risk effort, packet budget, and context completeness represented as independent fields. Canonical identity is SHA-256 over recursively key-sorted JSON with array order preserved and the digest field excluded. Reject duplicate routes, invalid enums, and digest mismatch. | Canonicalization, independence, enum, duplicate, and digest fixtures. | Can one axis change without silently changing any other axis? |
| `REQ-TW-110` | Validate v2 shadow data fail closed. A missing, stale, duplicate, unknown, schema-invalid, or digest-mismatched map/route returns `held_model_context_route_invalid` and refuses isolated replay. Shadow output is a separately invoked artifact and does not change any v1 receipt field, schema, identity, byte, or outcome. | Negative map/route fixtures plus byte-identical v1 and strict-consumer comparison. | Does invalid shadow governance remain visible without disrupting current routing? |
| `REQ-TW-111` | Generate an exact deterministic route inventory from the closed discovery grammar: every canonical `tw-*` callable, the explicit `lfg -> tw-auto` alias, every registered imported-CE descendant prompt, and every explicitly declared generic descendant family appears once with stable route ID, parent, cardinality, reachability, and isolation. | Generator freshness, seeded omission, alias, duplicate, unknown, and lexical-order fixtures. | Can an owner identify every declared route without repository-wide inference? |
| `REQ-TW-112` | Keep active descendant-enforcement claims held unless a qualified host observes every runtime descendant instance and bypass-negative tests pass. Static declarations, configuration, and compiler output never prove active enforcement. | Claim-state fixtures for declared-only, partly observed, and fully independently observed inventories. | Are runtime-enforcement claims impossible to infer from static mapping alone? |
| `REQ-TW-113` | Normalize packet input, assembled input, reserved output, planned context, and whole-workflow usage against one dated capability, tokenizer, and pricing snapshot. A snapshot change resets qualification. | Arithmetic boundaries and snapshot-change/reset fixtures. | Are token figures comparable and honest about their accounting domain? |
| `REQ-TW-114` | Store exact B0--B3 experimental caps, the approved per-route class floors listed below, ascending lowest-eligible selection, and the `unqualified -> structurally_eligible -> qualified` state model in a versioned workflow profile. Descendants inherit the parent floor unless an override is explicitly enumerated. Values are hypotheses until their matched evaluation cell passes; profile or snapshot changes reset qualification. | Exact floor, all-B3 mutation, multiple-eligible minimum, profile boundary, transition, and reset fixtures. | Is the recommendation the smallest structurally eligible hypothesis and clearly separated from proof of sufficiency? |
| `REQ-TW-115` | Resolve overflow only by deterministic class promotion, digest-checked locator delivery, bounded fresh sharding/re-isolation, or a held outcome. Freeze maximum fan-out/depth and termination. Never downgrade model/risk, delete required sources, silently truncate, or use lossy compaction. | Promotion, locator, shard, depth/fan-out, termination, truncation, and downgrade negative fixtures. | Does overflow retain required evidence and judgment rather than merely make the prompt fit? |
| `REQ-TW-116` | Freeze an owner-controlled source oracle independently of the route compiler with the exact categories `controlling_authority`, `task_scope`, `skill_contract`, `implementation_dependencies`, `current_external_sources`, and `accepted_evidence`. The first three are mandatory for every route; implementation/review/publication add dependencies and evidence; temporal/external work adds external sources. Each category appears exactly once as satisfied, authority-excluded with an ID and rationale, or held. Mandatory categories, empty/all-excluded oracles, and compiler-authored oracles cannot be excluded into eligibility. | Exact-taxonomy/derivation, oracle/manifest recall, empty/all-excluded, omission, exclusion, and discovered-dependency fixtures. | Is completeness judged against an independent, non-empty source obligation rather than the compiler's own output? |
| `REQ-TW-117` | Deliver required context only as direct readable bytes, a readable digest-checked locator, or a registered fresh shard. Reject missing, unreadable, stale, truncated, lossy, or implicitly inherited delivery. | Delivery-mode positive and negative fixtures. | Can every required source be recovered exactly in the candidate execution context? |
| `REQ-TW-118` | Emit separate canonical shadow plan/final receipts whose SHA-256 identity protects route/parent/depth, policy/profile/map identities, source coverage, isolation, accounting, observation, eligibility, and outcome fields. Reject duplicate identity, replay, protected mutation, and cross-route or parent mismatch within a work package. A shadow receipt may link to but never alter or embed itself in a v1 envelope. External signed model attestation remains governed separately by `REQ-TW-060`. | Receipt identity, tamper, replay, lineage, cross-route, v1 byte-invariance, and strict legacy-consumer fixtures. | Does the receipt make the complete decision reproducible without changing v1 or claiming external attestation? |
| `REQ-TW-119` | Record observation as `host_measured`, `estimated`, or `unavailable`; keep content/evidence eligibility separate from efficiency-claim eligibility. Only independently attested host-measured records may support savings or served-model claims. | Observation and independent-eligibility matrix fixtures. | Can useful shadow output coexist with an explicit hold on efficiency claims? |
| `REQ-TW-120` | Advisory shadow compilation performs no model call and cannot mutate authority, terminal, external, or publication state. An explicitly authorized isolated replay may call a provider and write only declared sandbox/evidence paths, records provider billing/logging state, and cannot mutate the v1 repository/control/terminal/remote/publication state. | Side-effect snapshots and denied-write/provider-state fixtures for both modes. | Can evaluation run without turning a shadow recommendation into operational authority? |
| `REQ-TW-121` | Treat installed skills, references, agents, model-map projection, and install manifest as one package transaction; at each injected failure point restore the prior bytes and mode exactly. Active-cutover rollback is outside this release. | Isolated install success plus injected-failure byte/mode comparison. | Can a failed 0.5.0 install return the user to the exact prior installed package? |
| `REQ-TW-122` | TraceWeaver Core 0.5.0 may release the reviewed shadow-governance surface after same-candidate verification, one consolidated document/code review sequence, package rollback proof, and owner-approved proxy validation. It must not claim token savings, token sufficiency, active enforcement, served-model attestation, or active cutover. Active cutover requires a future owner decision after complete live observation, attested telemetry, matched quality and material whole-workflow savings evidence, and rollback proof. | Release-readiness negatives, manifest/version checks, same-candidate digest, held-claim scan, and release receipt. | Does 0.5.0 give users a usable governance map without overclaiming what shadow evidence proves? |
| `REQ-TW-123` | Require an independent oracle-adequacy reviewer to disposition every real release-oracle category for every route. Record reviewer identity, relationship, exclusions, and uncertainty; any missing, self-reviewed, empty/all-excluded, unexplained, uncertain, or open category holds structural eligibility. Representative usability sampling never substitutes for complete oracle-category disposition. | Reviewer independence, complete real-oracle category closure, empty/all-excluded, exclusion, and uncertainty fixtures. | Is the claim of context completeness independently challengeable for every released route/category? |

## Approved design decision

`DEC-TW-009` selects a centrally versioned model-context map adjacent to the
existing Skill Execution Contract (SEC) and workflow profile. The resolver
binds SEC and map identities; imported CE bodies remain unchanged.

Rejected alternatives are embedding budgets in each skill, selecting cheaper
models by skill, one global context cap, and truncating until a prompt fits.
Those alternatives respectively duplicate policy, change the accepted model
contract, hide route differences, or remove unproven required context.

## Experimental budget map

These are released as inspectable shadow hypotheses, not as proof of token
sufficiency or provider capability:

| Class | Packet input cap | Reserved output cap | Default use |
| --- | ---: | ---: | --- |
| `B0` | 32,000 | 4,000 | Deterministic lookup, setup, update, and narrow projection. |
| `B1` | 64,000 | 8,000 | Bounded authority, session, publication-gate, and test routes. |
| `B2` | 128,000 | 16,000 | Multi-source review, research, diagnosis, and synthesis. |
| `B3` | 192,000 | 24,000 | Program planning, audit, V&V, orchestration, and multi-unit work. |

The host/system/tool reserve is 32,000 tokens, the assembled-input target is
224,000 tokens, the proposal ceiling is 240,000 tokens, and the frozen
capability context-window hypothesis is 272,000 tokens. Starting at the
authorized route floor, the compiler walks B0 through B3 and selects the first
class whose source closure, packet-input cap, requested-output cap,
assembled-input proposal ceiling, and capability context-window checks all
pass. These numbers are revision-controlled evaluation inputs, not dispatch
entitlements.

Default top-level classes are:

- `B0`: `tw-graph`, `tw-setup`, `tw-update`;
- `B1`: `tw-authority-gate`, `tw-commit`, `tw-commit-push-pr`,
  `tw-requirements-review`, `tw-sessions`, `tw-strategy`, `tw-test-browser`,
  `tw-test-xcode`, `tw-worktree`;
- `B2`: `tw-brainstorm`, `tw-code-review`, `tw-compound`,
  `tw-compound-refresh`, `tw-debug`, `tw-doc-review`, `tw-grill`, `tw-ideate`,
  `tw-resolve-pr-feedback`, `tw-traceability-check`; and
- `B3`: `tw-audit`, `tw-auto`, `tw-plan`, `tw-vv-define`, `tw-work`.

`lfg` is one alias of `tw-auto` and therefore resolves to B3 without a second
canonical route definition.

## Risk and controls

| ID | Risk | Owner | Control | Residual disposition |
| --- | --- | --- | --- | --- |
| `RISK-TW-011` | Token optimization removes required evidence or reduces judgment while presenting the result as sufficient. | Oxiom Systems | Independent axes, owner-controlled source oracle, 100% recall, deterministic overflow, v1 invariance, separate eligibility fields, independent adequacy review, and held savings/sufficiency/cutover claims. | Accepted for a shadow-only 0.5.0 release; active cutover remains held. Reset on any map/profile/capability/oracle change or discovered missing dependency. |

## Prior 0.5.0 lifecycle-program disposition

The earlier direct decision
`TW-DECISION-2026-08-22-V050-DIRECT-AUTHORITY-TRANSITION-001` and proposed
`INTENT-TW-009..010`, `NEED-TW-009..012`, `REQ-TW-093..108`,
`DEC-TW-004..008`, `IF-TW-001..005`, `RISK-TW-001..010`, Slices 1--8, and
their `ART-TW-078` evidence chain are preserved as historical/future-program
authority on their existing worktree. They are deferred outside TraceWeaver
Core 0.5.0 and are not prerequisites, release gates, or release content for
this model-governance branch. Their meanings and identifiers must not be
reused.

## Release and claim boundary

The 0.5.0 release may claim only that TraceWeaver packages a deterministic,
inspectable, shadow-only model/context map, compiler, receipts, source-oracle
checks, installer projection/rollback, and verification fixtures while v1
routing remains authoritative.

The release must keep the following claims held:

- active routing or descendant enforcement;
- independently attested served model;
- actual or material token savings;
- token sufficiency or quality equivalence;
- production/provider replay qualification;
- automatic model calls or publication from the shadow compiler; and
- the deferred lifecycle/semantic-HTML program.

The correct next action is to finish the integrated implementation, one
consolidated review/repair series, verification, validation, traceability,
commit, push, and PR checks; then stop at `ready_to_merge` until Oxiom Systems
separately authorizes merge.
