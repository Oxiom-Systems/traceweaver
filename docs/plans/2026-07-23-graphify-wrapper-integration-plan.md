---
title: "feat: optional Graphify routing in TraceWeaver wrappers"
type: feat
status: implementation_verification_reviews_and_owner_validation_passed_publication_authorized
date: 2026-07-23
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_ref: fe31df6d9cf8547a57a4cdeb647d2105cdf4f7e3
beads_issue: TraceWeaver-srpk
requirements:
  - REQ-TW-089
  - REQ-TW-090
workflow_profile: L2
---

<!-- TRACEWEAVER: file-role=graphify-wrapper-integration-plan; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: file-role=graphify-wrapper-integration-plan; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->

# Optional Graphify Routing In TraceWeaver Wrappers

## Outcome

TraceWeaver will use Graphify as an optional derived map at lifecycle points
where relationship context reduces blind search. The same TW workflow must
continue from authoritative repository sources when Graphify is absent,
uninitialized, stale, or failing.

This is an L2 change because it alters routing contracts across multiple
user-facing wrappers and introduces an optional external CLI boundary. It does
not add a runtime service, provider API, internal graph database, publication
surface, deployment, or dogfood step.

## Authority Capsule

- Owner intent: direct owner instructions on 2026-07-23.
- Approved requirements: `REQ-TW-089`, `REQ-TW-090`.
- Requirements review:
  `docs/validation/traceweaver-graphify-wrapper-requirements-review.md`.
- Baseline ref: `fe31df6d9cf8547a57a4cdeb647d2105cdf4f7e3`.
- Planned proof chain:
  - artifact `ART-TW-071`;
  - trace `TRACE-TW-064`;
  - ATP `ATP-TW-041`;
  - result `RESULT-TW-041`;
  - verification `VER-TW-084`;
  - validation `VAL-TW-032`.
- Must not change:
  - Markdown and source artifacts remain authoritative;
  - TraceWeaver works when Graphify is unavailable;
  - `tw-auto` remains a read-only master;
  - no automatic installation, provider-key use, semantic extraction, global
    graph mutation, hook installation, graph publication, commit, push, PR,
    release, deploy, or dogfood behavior;
  - REQ-TW-088's internal SQLite mirror remains out of scope.

## State Contract

| State | Wrapper behavior | Receipt | Gate effect |
| --- | --- | --- | --- |
| `not_installed` | Continue from repository sources and recommend installing Graphify. | `graphify_status=not_installed` | None |
| `installed_uninitialized` | The orientation-owning child runs `graphify update .`; query only if a graph is produced. | update result plus query result | None |
| `ready` | Run a scope-specific `query`, `affected`, or `path` operation, then corroborate material conclusions in authoritative sources. | command, outcome, explicit graph path | None |
| `no_useful_graph_context` | The command succeeds but returns no material relationship context; continue from repository sources without treating this as failure. | command, empty/non-material outcome, graph path | None |
| `degraded` | Record the failed command/reason and continue from repository sources. | `graphify_status=degraded` | None |
| `semantic_refresh_held` | A code/AST update completed, but changed Markdown/text/YAML/JSON or other semantic-backed documents require a separately authorized semantic refresh. Continue from current sources and do not claim the semantic graph is fresh. | code update outcome plus changed semantic paths | None |
| `not_applicable` | Do not call Graphify when no repository relationship question or behavior/trace change exists. | `graphify_status=not_applicable` | None |

The wrappers must not quietly substitute graph output for requirements,
authority, source code, verification results, validation evidence, or review
findings.

## Lifecycle Placement

| TW surface | Graphify responsibility |
| --- | --- |
| `tw-setup` | Resolve the repository root, detect availability, report it, recommend installation when absent, and initialize the root's local code graph when installed and explicitly running project setup. |
| `tw-plan` | Before repository architecture or impact planning, call the packaged helper from the resolved repository root so a missing code graph is initialized, then query the affected concepts/files against the explicit root graph. |
| `tw-debug` | During diagnosis, call the helper to query the failing concept and use root-bound `path`/`affected` where causal or blast-radius relationships matter. |
| `tw-audit` | Call the helper for root-bound graph queries that identify candidate hubs, related/duplicate surfaces, and affected paths; treat results as candidate audit evidence only. |
| `tw-code-review` | Call the helper to query changed symbols/files and reverse impact before selecting review coverage; corroborate findings in the diff and sources. |
| `tw-traceability-check` | Call the helper to query implementation/evidence relationships for candidate missing links or dark behavior; the authoritative matrix and anchors decide the finding. |
| `tw-work` | After focused verification passes and behavior/trace artifacts changed, call the helper, which runs exactly one `graphify update .` from the resolved root before review handoff. If changed semantic-backed documents are not refreshed by that code/AST update, emit `semantic_refresh_held`. Skip when Graphify is absent or no relevant files changed. |
| `tw-auto` | Execute no Graphify commands. Carry the child wrapper's Graphify receipt in dispatch/return and terminal receipts. |

Graphify is not added to `tw-requirements-review`, `tw-authority-gate`,
`tw-vv-define`, `tw-doc-review`, or publication wrappers because a derived
relationship graph cannot establish requirement quality, approve authority,
define V&V, accept controlled documents, or authorize publication.

## Implementation Units

### U1 — RED routing smoke

Create `scripts/traceweaver-smoke-graphify-wrapper-routing` before wrapper
changes. It must fail until the packaged helper and selected wrappers expose:

- unavailable and degraded fallback language;
- deterministic PATH-stub cases for absent executable, missing graph/update
  success, query success, empty query output, update/query failure, and changed
  semantic documents;
- missing-graph initialization in every search-owning wrapper through the
  shared helper;
- root-bound search commands at orientation, diagnosis, audit, review, and
  traceability;
- exactly one post-implementation `graphify update .` contract in `tw-work`;
- a negative assertion that `tw-auto` contains no direct `graphify query`,
  `graphify path`, `graphify affected`, or `graphify update` command;
- direct-source corroboration and non-authority wording.
- repository hygiene that keeps `graphify-out/`, secrets, local agent state,
  and dependencies outside Graphify input and Git.

Record the expected failing run under
`docs/validation/evidence/graphify-wrapper-routing-red.txt`.

### U2 — Wrapper contracts

Modify only the following TraceWeaver-owned integration files:

- `plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-graphify-advisory`
  as the packaged sibling helper used by child wrappers; its location is
  packaging-only and does not authorize the `tw-auto` master to execute it;
- `tw-setup`;
- `tw-plan`;
- `tw-debug`;
- `tw-audit`;
- `tw-code-review`;
- `tw-traceability-check`;
- `tw-work`;
- `tw-auto` receipt routing.
- `.gitignore` and `.graphifyignore` for local derived-graph and secret/cache
  exclusion hygiene.

Do not edit packaged CE-derived skill bodies.

### U3 — GREEN verification and trace evidence

Run the same smoke after implementation. Record the tested ref, exact command,
actual result, and outcome in
`docs/validation/traceweaver-graphify-wrapper-results.md`. Add the reserved
matrix rows and Code Anchor Evidence for the changed behavior-bearing files.

### U4 — Scoped review

Run:

- `tw-traceability-check` over the changed wrapper and smoke files;
- `tw-code-review` over wrapper behavior and deterministic proof;
- `tw-doc-review` over requirements, plan, V&V, matrix, Intent Contract, and
  result records.

Any P0/P1, authority contradiction, missing RED evidence, or stale hash blocks
the accepted implementation claim. Live runtime invocation, publication,
release, and live-host/general-productivity validation remain held.

## Verification Plan

Primary method: deterministic test.

Command:

```sh
scripts/traceweaver-smoke-graphify-wrapper-routing
```

Expected result after implementation:

- exit status `0`;
- `graphify_wrapper_routing=pass`;
- `graphify_unavailable_fallback=pass`;
- `graphify_search_lifecycle=pass`;
- `graphify_post_work_update=pass`;
- `graphify_read_only_master=pass`;
- `graphify_authority_boundary=pass`.
- `graphify_state_fixtures=pass`;
- `graphify_root_binding=pass`;
- `graphify_semantic_refresh_boundary=pass`.

Harness equivalence: PATH stubs exercise the packaged helper's state machine,
root binding, command selection, advisory exit behavior, and receipts. Static
inspection proves which wrapper owns each helper call. The smoke does not prove
that a host invokes the skills, that a real graph is correct, or that
provider-backed semantic extraction runs.

## Validation Plan

Validation is defined in
`docs/validation/traceweaver-graphify-wrapper-validation-definition.md`.
The owner reviewed and accepted a representative walkthrough covering both
Graphify-present and Graphify-absent use at `2026-07-23T07:38:48Z`.

## Held Claims

- live host invocation of the updated skills;
- automatic runtime enforcement;
- Graphify semantic extraction or provider integration;
- graph correctness beyond Graphify's own output;
- measured token/time savings;
- REQ-TW-088 internal graph mirror;
- merge, release, deployment, or dogfood readiness;
- live-host invocation and general productivity.

## Next Step

Refresh the exact-tree authority, traceability, verification, and clean-review
gates, then use `/tw-commit-push-pr` for the explicitly authorized branch push
and PR. Merge, release, deployment, live-host reconciliation, semantic
extraction, and the REQ-TW-088 internal mirror remain outside this plan.
