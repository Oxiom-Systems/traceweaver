---
name: tw-code-review
description: TraceWeaver-controlled code review wrapper. Use when reviewing code, scripts, skill behavior, manifests, runtime harnesses, or behavior-bearing changes that must first pass traceability checks before CE code review.
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-code-review`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-049; trace=TRACE-TW-023; ver=VER-TW-032 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-065; trace=TRACE-TW-048; ver=VER-TW-061 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-086; req=REQ-TW-087 -->
<!-- TRACEWEAVER: file-role=review-series-code-review-wrapper; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->
<!-- TRACEWEAVER: file-role=optional-graphify-code-review-route; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: entrypoint=graphify_review_impact_search; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->

# TraceWeaver Code Review

## Purpose

Run code review as a TraceWeaver-controlled review step instead of a raw CE
review. This wrapper preserves the CE reviewer behavior while requiring
authority, traceability, verification, validation, and held-claim checks before
review findings can be treated as accepted TraceWeaver input.

## Native Child Routing

Before any TraceWeaver-owned native Codex reviewer call, run the packaged
sibling `tw-auto/scripts/traceweaver-route-native-child` against the canonical
workflow-profile contract. Use only its explicit dispatch parameters and
finalize its receipt with independent host/execution attestation. A held route
makes reviewer output ineligible for acceptance; never inherit a model, fall
back, or edit an imported CE-derived body to bypass the overlay.

## Scoped Review Identity

Resolve the packaged sibling
`<skills-root>/tw-auto/references/scoped-review-protocol.md`, verify it matches
the registered canonical protocol version and digest, then create or resume the
explicitly authorized generation through
`<skills-root>/tw-auto/scripts/traceweaver-review-series`. Carry generation,
series, frozen scope, attempt, distinct dispatch, ledger digest, eligible
blockers, the four semantic accepted-review inputs, audit metadata, and
remaining budget. Exact accepted-review reuse and verified post-acceptance
mechanical closure with no new blocker dispatch zero reviewers; bookkeeping
without a matching accepted review remains review-required.

Use exactly one review-bearing dispatch and one reviewer persona for the
attempt. When specialist or validator concerns apply, include them in that
reviewer's bounded concern set; do not dispatch another reviewer. P0/P1 and
blocking P2 findings route inside the current
repair-verification attempt; non-blocking P2/P3 findings do not create another
cycle. A disputed P2 follows the contested-P2 decision path. Stop after one
routine repair-verification cycle, or sooner for unchanged blocked work, with
`held_no_progress`. One final cycle requires an explicit receipt-bound exception
authorized by the owner or approved change-control authority; two is
the absolute maximum.

## Required Authority Inputs

Before review, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/architecture-and-interface-reviewer-guide.md` when
  the reviewed change crosses interface boundaries or alters contracts,
  external dependencies, or integration assumptions
- relevant `.traceweaver/` gap, change, exception, task, or trace records when
  the changed behavior depends on them

If any required authority input is missing, stale, or insufficient for the
reviewed change, stop and report the missing authority. Do not run raw
`ce-code-review` as a substitute for TraceWeaver closure.

## Workflow

1. Identify the code, script, skill, manifest, runtime harness, or
   behavior-bearing diff under review.
2. Identify the claimed requirement, authority source, implementation links,
   test-first evidence, verification evidence, validation question, and held
   claims.
3. Classify the review target using the operating-mode policy. In
   Implementation Gate Mode, pass the changed behavior-bearing files plus
   linked tests, fixtures, and smokes to `tw-traceability-check` for code-anchor
   scanning. Use whole-repo scanner output only for audit/baseline debt unless
   publication or release claims depend on it.
4. Run `tw-traceability-check` on the review target before CE review.
5. If `tw-traceability-check` returns blocked, needs revision, missing
   test-first evidence, missing verification, missing validation, dark behavior,
   stale evidence, or an unsupported done/release claim, stop before accepted
   code review and report the exact structured traceability findings before any
   CE findings.
6. If the only blocker is missing code/test anchors with unambiguous reviewed
   authority, report the trace-anchor authoring path and route back to
   `tw-work` through `tw-auto`. If the blocker is
   `CTA-UNRESOLVED-ANCHOR-MAPPING`, keep code review acceptance blocked and
   report the unresolved mapping without routing agents to broad authority
   review unless the finding changes task authority, requirement meaning,
   verification authority, or accepted scope. Do not rewrite source or matrix
   files from `tw-code-review`.
7. Run `ce-code-review` only after the traceability check is passable or the
   remaining limitation is explicitly recorded as an approved held condition.
8. Keep `ce-code-review` in TraceWeaver no-publication mode. It may report
   findings and policy-allowed local fixes, but it must not stage, commit, push,
   open PRs, update PRs, or claim release/clean-replacement readiness.
9. Report code-review findings together with the traceability result, test-first
   evidence, verification evidence, validation path, held claims, and next
   required review or human decision.

## Optional Graphify Review Context

When review scope includes cross-file impact, dependency, call-path, or
relationship claims, locate the packaged sibling
`tw-auto/scripts/traceweaver-graphify-advisory` helper and run an applicable
`affected --root`, `path --root`, or `query --root` search before direct source inspection.
Verify every candidate against the diff, source, tests, and
authority evidence before reporting a finding. On
`graphify_status=degraded`, `not_installed`, or
`no_useful_graph_context`, continue the review without downgrading its normal
source-based coverage and retain the receipt. Graphify output is derived and is not authority.
It is not a review finding or review-pass evidence.

## Highest-Level Handoff Discipline

`tw-code-review` owns the traceability preflight for code-like review. Do not
return standalone `tw-traceability-check` as the normal next user command unless
the user explicitly asked for a traceability diagnostic or audit.

If review is blocked by missing unambiguous anchors, route the next action to
`/tw-work ...` or `/tw-auto ...` so the work loop can author anchors and rerun
review. If review is clean, record the accepted review and its bookkeeping
atomically. Route scoped
`/tw-doc-review ...` only when normative semantic authority changed, never for
status/hash/receipt/projection/index bookkeeping alone.
If unresolved mappings or authority problems block acceptance, return the exact
human decision or highest-level wrapper needed to repair the work.

## Output

Return:

- review target
- baseline ID/hash and authority used
- `tw-traceability-check` result
- structured traceability findings, preserving severity, status, affected IDs,
  file/line anchors when available, claim impact, and remediation
- CE code-review coverage and findings
- test-first evidence reviewed, or approved not-applicable/exception status
- verification evidence reviewed
- validation question/path reviewed
- open gaps, dark behavior, held claims, and unsupported claims
- whether the review may be used as accepted TraceWeaver input
- highest-level next TraceWeaver wrapper command, review, or human decision
- review identity and whether accepted review was reused
- selected reviewer personas, active-reviewer count, and repair-cycle result
- terminal receipt reference when this review contributes to terminal state

## Mandatory tw-graph Lifecycle

Load `references/tw-graph-lifecycle.md` before applying this lifecycle.

Require a passing `tw-graph check` before clean review completion. Read-only
review never refreshes stale output; it returns the finding to the owning cycle.
Optional Graphify cannot satisfy this mandatory check.

## Gate

Do not claim engineering-complete, package-ready, release-ready, upstream-ready,
clean CE replacement, enforcing behavior, publication readiness, or PR readiness
from `tw-code-review` unless the traceability, verification, validation, and
publication gates have separately passed.

Do not collapse structured TraceWeaver findings into prose-only summaries.
Report them before CE code-review findings so blocked or held traceability
claims cannot be hidden by a clean CE review.
