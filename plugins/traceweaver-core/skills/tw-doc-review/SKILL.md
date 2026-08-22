---
name: tw-doc-review
description: Standalone TraceWeaver authority/document review. Use only for authority-only or document-only semantic changes; mixed implementation candidates are reviewed once through tw-code-review.
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-doc-review`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-050; trace=TRACE-TW-023; ver=VER-TW-032 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-086; req=REQ-TW-087 -->
<!-- TRACEWEAVER: file-role=review-series-document-review-wrapper; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->
<!-- TRACEWEAVER: file-role=standalone-document-review-boundary; req=REQ-TW-056,REQ-TW-082,REQ-TW-083,REQ-TW-086,REQ-TW-087; trace=TRACE-TW-031,TRACE-TW-067; ver=VER-TW-040,VER-TW-087 -->

# TraceWeaver Document Review

## Purpose

Review an authority-only or document-only semantic candidate in one independent
context. This wrapper preserves useful CE document-review behavior while
including requirement-quality and authority/traceability lenses.

Load the `consolidated_delivery` block from the packaged sibling
`<skills-root>/tw-auto/references/workflow-profile-template.yml`. Do not invoke
this skill for a mixed candidate containing implementation plus relevant
normative documents; `tw-code-review` covers that entire frozen candidate in
one integrated reviewer context.

In standalone mode, imported CE checklists and personas are lenses inside the
single Terra reviewer. `ce-doc-review` must not spawn nested reviewer
subagents.

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
mechanical closure dispatch no reviewer; bookkeeping without a matching
accepted review remains review-required.

Use exactly one reviewer identity. Treat personas as lenses in that context.
Return all eligible P0/P1 and blocking P2 findings together for one batched Sol
repair, then resume the same reviewer identity once for targeted closure.
Non-blocking P2/P3 does not cause another turn. The normal automatic budget is
two reviewer turns and one repair batch; unchanged blockers without evidence progress
return `held_no_progress`.
Only a fresh explicit owner or approved change-control decision may invoke the
REQ-TW-037/056/057 severe-blocker exception outside that automatic budget.

## Required Authority Inputs

Before review, load and cite:

- `requirements.md` when present
- `traceability-matrix.md` when present
- `.traceweaver/intent-contract.yml` when present
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/trace-anchor-authoring.md` when the document review
  concerns code-anchor hierarchy, authoring policy, or matrix Code Anchor
  Evidence updates
- skill-local `references/design-decision-reviewer-guide.md` when the document
  under review contains ADRs, design rationale, alternatives or tradeoff
  records, or unrecorded design decisions
- relevant validation, gap, change, exception, task, or trace records for the
  document being reviewed

If a fresh project lacks these files, treat the review as authority bootstrap or
requirements-quality review only. Do not let draft text become implementation
authority until the authority files exist and review passes.

## Workflow

1. Confirm the scope is authority-only or document-only. If it is part of a
   mixed implementation candidate, stop this route and include the document in
   the one integrated `tw-code-review` scope without another dispatch.
2. Identify the document type: requirements, plan, matrix, Intent Contract,
   validation record, evidence record, release note, or other authority-adjacent
   document.
3. Classify the review target using the operating-mode policy. Treat unrelated
   historical wording drift as non-blocking debt unless it changes accepted
   scope, pending gate, held claims, runtime/publication claims, artifact
   identity, or material authority.
4. Apply `tw-requirements-review` as a lens in this same reviewer context only when normative
   requirement meaning, accepted scope, validation intent, allowed/held
   behavior, must-not-change constraints, or publication policy changed.
5. Use the persistent review-series controller for the supplied generation.
   Discovery is valid only for an explicitly authorized new generation;
   otherwise resume the current repair-verification attempt. Bookkeeping-only
   changes use `evaluate_reuse` and stop without a reviewer only after the four
   semantic inputs match an existing accepted review and no new blocker exists.
   For a matrix or Intent Contract change that alters normative authority,
   apply the `tw-traceability-check` rules as another lens in this same review
   context; do not dispatch a second reviewer.
6. Apply the packaged `ce-doc-review` method only after the requirement-quality and authority/trace
   preflight is passable, or after remaining limits are explicitly recorded as
   held conditions.
7. Keep `ce-doc-review` in TraceWeaver no-publication mode. It may report
   findings and policy-allowed local fixes, but it must not stage, commit, push,
   open PRs, update PRs, or claim release/clean-replacement readiness.
8. Report structured traceability/hash/status findings before CE document-review
   findings. Preserve severity, status, affected IDs, file/line anchors when
   available, claim impact, and remediation.
9. Report document-review findings together with requirement-quality status,
   traceability/hash/status consistency, accepted scope, held claims, and the
   next required command or human decision.

## Highest-Level Handoff Discipline

`tw-doc-review` owns requirements-review and trace/hash/status consistency
checks for document authority review. Do not return standalone
`tw-requirements-review` or `tw-traceability-check` as the normal next user
command when those checks are embedded in the document review path.

If the document review is clean, return terminal semantic acceptance; the
retained primary records bookkeeping atomically and mechanically with no
reviewer. If the document is blocked by
requirements quality or authority identity, recommend the highest-level wrapper
that can repair it, normally `/tw-work ...` for an accepted authority patch or
`/tw-auto ...` for a multi-step loop. Recommend standalone lower gates only for
explicit diagnostics, audit, baseline-authority review, or a human-decision
pause where no higher wrapper can proceed.

## Output

Return:

- document(s) reviewed
- document type and authority role
- `tw-requirements-review` result when applicable
- `tw-traceability-check` or trace/hash/status consistency result when applicable
- structured traceability/hash/status findings, preserving file/line anchors
  when available
- CE document-review coverage and findings
- accepted scope and held claims
- whether the document may be used as accepted TraceWeaver input
- highest-level next TraceWeaver wrapper command, review, or human decision
- review identity and accepted-review reuse result
- selected reviewer personas, active-reviewer count, and repair-cycle result
- terminal receipt reference when this review contributes to terminal state

## Post-Terminal tw-graph Lifecycle

Load `references/tw-graph-lifecycle.md` before applying this lifecycle.

Do not refresh generated graph state during semantic review. After terminal
acceptance, the retained primary performs the required `tw-graph` refresh/check
mechanically and atomically with other bookkeeping. That output cannot reopen
review. Optional Graphify cannot satisfy the mandatory authority-graph check.

## Gate

Do not allow weak, ambiguous, unverifiable, source-free, stale, or unreviewed
requirements or authority records to become implementation authority. Do not
claim accepted authority-state review when required files are untracked,
unstaged, hash-stale, or split between staged and unstaged versions.

Do not collapse structured TraceWeaver findings into prose-only summaries.
Report them before CE document-review findings so stale authority or held claims
cannot be hidden by a clean CE review.
