---
id: TW-REQ-REVIEW-2026-08-11-REQ-TW-060-088-AUTHORITY-BASELINE-001
title: Sol/Terra Routing and tw-graph Authority Projection Requirements Review
status: requirements_quality_passed_pending_scoped_tw_doc_review_no_implementation_runtime_or_publication_authority
date: 2026-08-11
owner: Oxiom Systems
review_type: requirements_quality
scope: REQ-TW-060 and REQ-TW-088 authority-baseline amendment
authority_effect: baseline_candidate_only
req_tw_060_type: system_requirement_with_owner_approved_routing_and_attestation_constraints
req_tw_088_type: system_requirement_with_owner_approved_projection_and_freshness_constraints
repair_state: retained_tw_doc_review_findings_applied_2026_08_12_pending_scoped_tw_doc_review_rerun
owner_decision_id: TW-OWNER-DECISION-2026-08-11-REQ-TW-060-088-001
candidate_amendment_id: REQ-AMEND-CANDIDATE-2026-08-11-001
reviewed_base_commit: fdec46bd9a59fb3ce17cc532209874356e06775d
reviewed_base_requirements_canonical_sha256: bc79fb669626f1cfddfdd98ac883d4abd90ba05c4a6e2f532b891d00fac68d7a
candidate_baseline_hash_sha256: 0439e9704e760842794c9b3085f96fcddccbec927caf9c11f682742393a68020
intent_contract_sha256: 955d8af7d1919d8466177935d471b60fdefa8e7e33d7d83d0cbf5fe6ea4bbeda
traceability_matrix_sha256: 84c1ad1932cf9103dc85e462740d02e6fde7654c91a72aa03ffa2561d7ed0d5b
beads_issue: TraceWeaver-8inl
publication_boundary: >
  No implementation, runtime or model enforcement, CI or hook mutation,
  Git or PR mutation, release, deployment, Graphify mutation, or publication
  authority follows from this review.
---

# REQ-TW-060 and REQ-TW-088 Authority-Baseline Requirements Review

## Verdict

REQ-TW-060 and REQ-TW-088 each score 5/5 after the owner-directed revisions and
the retained document-review repairs below. Their requirements quality passes
as a candidate baseline amendment, but the scoped `/tw-doc-review` must be rerun
on the repaired exact four-file identity before either requirement can drive
implementation. This record does not authorize a routing adapter, `tw-graph`,
lifecycle integration, CI, hooks, host/model mutation, runtime claims, or
publication.

The decision authority is the owner's explicit 2026-08-11 direction. The main
thread performed the controlling requirements review. Terra-requested children
supplied advisory requirements-quality, conflict-map, trace/V&V-ID-map, and
final patch-sanity inputs only; because the host supplied no independent
served-model attestation, their receipts are `held_model_unattested` and their
outputs are not used as independent review, verification, completion, or
publication evidence.

## Reviewed Authority Inputs

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- this dated requirements-review record
- owner direction dated 2026-08-11
- reviewed repository base `fdec46bd9a59fb3ce17cc532209874356e06775d`

The primary checkout was dirty, so the patch was prepared in the isolated
`codex/req060-088-authority-baseline` worktree. The four files above are the
entire authorized mutation scope.

## Requirement Quality

| Requirement | Type | Score | Outcome | Why it is testable and authority-safe |
| --- | --- | ---: | --- | --- |
| REQ-TW-060 | System requirement with owner-approved routing and attestation constraints | 5/5 | requirements quality passed | It fixes the main and child models, L0-L3 reasoning map, explicit native-child dispatch shape, unavailable/unattested/mismatch outcomes, receipt and dispatch identities, independently bound attestation, CI rejection boundary, and host/out-of-scope boundary. |
| REQ-TW-088 | System requirement with owner-approved projection and freshness constraints | 5/5 | requirements quality passed | It fixes the authoritative inputs, derived projection boundary, derived hashed manifest closure, operations, provenance fields, one-refresh lifecycle, mandatory PR completeness/freshness failures, no-hook boundary, and Graphify-independent behavior. |

The two requirements are related but independently verifiable: model-routing
failure cannot be hidden by graph freshness, and graph freshness cannot attest
the model that served a child.

## Owner Decisions Incorporated

### REQ-TW-060 central model-routing contract

- `codex_main_model: gpt-5.6-sol`
- `codex_subagent_model: gpt-5.6-terra`
- `codex_subagent_reasoning_effort: risk_selected`
- `sol_allowed_for_subagents: false`
- `terra_unavailable_consequence: held_model_unavailable`
- L0=`low`, L1=`medium`, L2=`high`, and L3=`xhigh`.
- Every TraceWeaver-dispatched native Codex child explicitly receives
  `model: gpt-5.6-terra`, the frozen profile effort, and `fork_turns: none` or
  a bounded positive value. Sol, Luna, model inheritance, full-history
  inheritance, and silent fallback are prohibited for those children.
- Every receipt records its receipt identity, task/dispatch identity, role,
  profile hash, requested and served models, requested effort, fork bound,
  capability evidence, and outcome.
- Only independent host or execution attestation proves the served model.
  The attestation binds an immutable attester identity and execution/request
  identity to exactly one receipt plus its task/dispatch, profile, requested and
  served models, effort, and fork. Dispatch acceptance, inheritance, child
  self-report, replayed evidence, cross-receipt evidence, or incompletely bound
  evidence does not prove service. Missing or invalid attestation records
  `served_model: unattested` and `held_model_unattested`; mismatch records
  `held_model_mismatch`. A held child output cannot support verification,
  review, completion, or publication.
- CI must reject forbidden behavior only in TraceWeaver-owned route, profile,
  fixture, and dispatch surfaces, including replayed, cross-receipt, or unbound
  attestation. Imported CE-derived bodies remain unchanged, and agents launched
  outside TraceWeaver remain host-controlled.
- The `gpt-5.6-sol` main-model name is not the historical independent reviewer
  identity called `Sol ACCEPT` and can never activate or satisfy EXC-TW-011.

This belongs in the central model-routing/workflow-profile contract, not in a
new skill. Non-native cross-model adapters require separate authority.

### REQ-TW-088 derived `tw-graph` contract

- One TraceWeaver-owned control surface owns deterministic `build`, `check`,
  `refresh`, and query behavior for a repository-local rebuildable graph and a
  versioned freshness manifest.
- Controlled sources are `requirements.md`, `traceability-matrix.md`,
  `.traceweaver/intent-contract.yml`, and every repository-local trace,
  evidence, validation, and code-anchor artifact referenced directly or
  transitively from those authoritative inputs.
- The versioned manifest is a derived, hashed inventory of every
  repository-local artifact in that reference closure. It cannot manually
  select or limit canonical source scope.
- `status`, `search`, `related`, `path`, `impact`, and `duplicate-candidate`
  return canonical source locators so normal relationship discovery does not
  depend on repository-wide grep.
- Authority remains separated: requirements definitions/status live in
  `requirements.md`; trace/evidence relationships live in the matrix; owner
  decisions and allowed/held scope live in the Intent Contract.
- The graph is derived and cannot write, approve, merge, delete, supersede, or
  attest authority. Nodes and edges carry identifier, source locator/hash,
  baseline hash, schema version, producer, and freshness state.
- Wrappers run one refresh after a completed change cycle that accepts
  authority, trace, evidence, or verified-behavior changes, and run
  `tw-graph check` before review completion or publication.
- These are explicit wrapper lifecycle calls. No global, Git, or host hook is
  silently installed or mutated.
- A PR workflow must rebuild/check deterministically and fail missing,
  malformed, non-reproducible, provenance-incomplete, or stale output; an
  omitted reachable artifact; an orphaned or unresolvable manifest entry; or a
  manifest/source/baseline hash mismatch.

REQ-TW-089 and REQ-TW-090 remain optional Graphify enrichment. Graphify may add
code or semantic context, but its absence, degradation, or staleness cannot
block canonical-source operation, satisfy the mandatory `tw-graph` freshness
check, or become authority/evidence. The 2026-07-23 Graphify review remains
historically valid for that optional scope; only its then-current
classification of REQ-TW-088 as a future SQLite mirror is superseded here.

## Conflict Resolution

| Finding | Resolution |
| --- | --- |
| The prior REQ-TW-060 required `gpt-5.5`/`medium` and Claude Sonnet. | The stable requirement ID now defines the Sol-main/Terra-child contract. The prior evidence is explicitly historical and non-attesting. |
| Existing routing material permitted Sol reviewers, Luna fallback, inheritance, and unbounded history. | The requirement prohibits those routes for every TraceWeaver-dispatched native Codex child; implementation remains held. |
| A dispatch acknowledgement could be mistaken for served-model proof. | Independent host/execution attestation is mandatory; absence yields `held_model_unattested`. |
| Generic or replayed attestation could be reused across children or tasks. | Attestation must bind immutable attester and execution/request identities to exactly one receipt, task/dispatch, profile, model pair, effort, and fork; replayed, cross-receipt, or unbound evidence is treated as unattested. |
| REQ-TW-088 was a nonmandatory future SQLite mirror. | It now defines a mandatory derived `tw-graph` contract while leaving implementation and runtime held. |
| A manually reduced manifest could pass freshness while hiding reachable authority references. | The manifest is a derived hashed reference-closure inventory, and the PR check fails omitted reachable artifacts, orphaned/unresolvable entries, and manifest/source/baseline mismatches. |
| Optional Graphify records said the internal mirror remained unauthorized. | The optional Graphify chain is preserved but is now explicitly separate from, and non-attesting for, `tw-graph`. |
| The U0 graph follow-on and historical `Sol ACCEPT` chain could be conflated with the new contracts. | REQ-TW-088 is removed from TRACE-TW-063/VER-TW-083/VAL-TW-031, and Sol-main is explicitly unable to satisfy EXC-TW-011. |

## Trace and V&V Allocation

| Requirement | Trace | Verification | Validation | Current state |
| --- | --- | --- | --- | --- |
| REQ-TW-060 | TRACE-TW-065 | VER-TW-085 | VAL-TW-033 | Allocated; implementation, CI, runtime, and served-model attestation held. |
| REQ-TW-088 | TRACE-TW-066 | VER-TW-086 | VAL-TW-034 | Allocated; `tw-graph`, lifecycle, PR CI, runtime, and hooks held. |

No ART, ATP, RESULT, or Code Anchor Evidence record is allocated because this
is an authority-only amendment. ART-TW-057 / TRACE-TW-043 / ATP-TW-027 /
RESULT-TW-027 / VER-TW-055 remain historical evidence for the superseded
2026-05 policy. REQ-TW-089/090 retain ART-TW-071 / TRACE-TW-064 /
ATP-TW-041 / RESULT-TW-041 / VER-TW-084 / VAL-TW-032 as the separate optional
Graphify chain.

VER-TW-077 and VER-TW-079 already have duplicate canonical definitions in the
reviewed base. This pre-existing debt is not caused or repaired by this bounded
patch and does not collide with VER-TW-085/086.

## Verification and Validation Definitions

VER-TW-085 must exercise exact contract parsing, L0-L3 positive routes,
explicit Terra/fork-bound dispatch, receipt and task/dispatch identities, Terra
unavailable, acknowledgement-only, model mismatch, replayed/cross-receipt/
incompletely bound attestation, and negative Sol/Luna/inheritance/full-history
routes. The CI fixture must reject every forbidden TraceWeaver-owned route or
attestation state. VAL-TW-033 must show representative L0 and L3 receipts whose
independent attestation is bound to the exact receipt, dispatch, profile, model
pair, effort, and fork, while preserving unavailable/unattested/mismatch truth
without silent fallback.

VER-TW-086 must prove deterministic double-build output, stale controlled-input
failure until one refresh, excluded-input stability, one refresh per accepted
change cycle, derived manifest reference-closure completeness, omitted-reachable
artifact and orphaned/unresolvable-entry failures, manifest/source/baseline
mismatch failures, PR freshness fail/pass behavior, provenance completeness,
and the same mandatory behavior with Graphify absent. VAL-TW-034 must follow one
representative PR change through incomplete/stale failure, refresh, complete
fresh pass, and canonical-source navigation without treating the graph or
manifest as authority.

These are allocated definitions, not executed verification or validation
results.

## Child Dispatch Receipts

All four review children were requested explicitly with
`model: gpt-5.6-terra`, L2=`high`, and `fork_turns: none`. The host returned no
independent served-model attestation.

| Role | Profile hash | Requested model | Served model | Effort | Fork bound | Capability evidence | Outcome |
| --- | --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-060 requirements-quality review | unavailable; authority-only task profile not materialized | `gpt-5.6-terra` | `unattested` | `high` | `none` | explicit dispatch request only | advisory only; `held_model_unattested`; not independent review evidence |
| authority conflict map | unavailable; authority-only task profile not materialized | `gpt-5.6-terra` | `unattested` | `high` | `none` | explicit dispatch request only | advisory only; `held_model_unattested`; not independent review evidence |
| trace and V&V ID map | unavailable; authority-only task profile not materialized | `gpt-5.6-terra` | `unattested` | `high` | `none` | explicit dispatch request only | advisory only; `held_model_unattested`; not independent review evidence |
| final four-file patch sanity review | unavailable; authority-only task profile not materialized | `gpt-5.6-terra` | `unattested` | `high` | `none` | explicit dispatch request only | advisory clean; `held_model_unattested`; not the formal `/tw-doc-review` gate |

## Post-Patch Mechanical Checks

- Canonical requirements hash recomputation matches
  `0439e9704e760842794c9b3085f96fcddccbec927caf9c11f682742393a68020`
  in both authority files.
- Intent Contract YAML and both Markdown frontmatters parse successfully.
- `git diff --check` passes.
- TRACE-TW-065/066, VER-TW-085/086, and VAL-TW-033/034 each have one primary
  definition.
- A temporary, non-workspace generated-view build succeeds and includes the six
  new records.
- `scripts/traceweaver-smoke-code-traceability` passes.
- The committed generated traceability views and bounded Intent snapshot are
  stale by design after the source-authority change. Their drift checks fail as
  expected. They were not regenerated because the owner limited mutation to
  these four files. This remains a visible held condition for the next scoped
  review; it is not reported as passing verification.

## Authority and Publication Boundary

This review authorizes only the controlled four-file candidate baseline patch
and allocation of TRACE-TW-065/066, VER-TW-085/086, and VAL-TW-033/034. It does
not authorize:

- a central routing adapter or model/host configuration mutation;
- `tw-graph`, a schema, manifest, projection artifact, or query runtime;
- wrapper lifecycle changes, PR workflow/CI changes, or hook installation;
- Graphify installation, provider keys, semantic extraction, global graph
  mutation, or freshness attestation;
- staging, commit, push, PR mutation, merge, release, deployment, or
  publication.

## Required Next Gate

Run `/tw-doc-review` on the repaired exact four-file patch. If that review is
clean, a separate plan and V&V definition may propose implementation of
REQ-TW-060 or REQ-TW-088. Until then, the correct state is requirements-quality
repair applied, scoped document review pending, and implementation held.
