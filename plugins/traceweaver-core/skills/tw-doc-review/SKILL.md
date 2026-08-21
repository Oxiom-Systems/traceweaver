---
name: tw-doc-review
description: TraceWeaver-controlled document review wrapper. Use when reviewing requirements, plans, matrices, Intent Contracts, validation records, evidence records, or authority documents that may become TraceWeaver implementation authority.
---

<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-050; trace=TRACE-TW-023; ver=VER-TW-032 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-086; req=REQ-TW-087 -->
<!-- TRACEWEAVER: file-role=review-series-document-review-wrapper; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->

# TraceWeaver Document Review

## Purpose

Run document review as a TraceWeaver-controlled review step instead of a raw CE
document review. This wrapper preserves the CE document-review behavior while
requiring requirement-quality and authority/traceability checks when a document
can affect implementation authority or accepted evidence.

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

Use exactly one review-bearing dispatch and one reviewer persona for the
attempt. When specialist or validator concerns apply, include them in that
reviewer's bounded concern set; do not dispatch another reviewer. Route P0/P1
and blocking P2 through the current repair-verification attempt, route
disputed P2 through its decision path, and record non-blocking P2/P3 without an
extra review cycle. Stop after one routine repair-verification cycle, or sooner
for unchanged blocked work, as `held_no_progress`. One final cycle requires an
explicit receipt-bound exception authorized by the owner or approved
change-control authority; two is the absolute maximum.

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

1. Identify the document type: requirements, plan, matrix, Intent Contract,
   validation record, evidence record, release note, or other authority-adjacent
   document.
2. Classify the review target using the operating-mode policy. Treat unrelated
   historical wording drift as non-blocking debt unless it changes accepted
   scope, pending gate, held claims, runtime/publication claims, artifact
   identity, or material authority.
3. Run `tw-requirements-review` before CE document review only when normative
   requirement meaning, accepted scope, validation intent, allowed/held
   behavior, must-not-change constraints, or publication policy changed.
4. Use the persistent review-series controller for the supplied generation.
   Discovery is valid only for an explicitly authorized new generation;
   otherwise resume the current repair-verification attempt. Bookkeeping-only
   changes use `evaluate_reuse` and stop without a reviewer only after the four
   semantic inputs match an existing accepted review and no new blocker exists.
   A matrix or Intent Contract change that alters normative authority still
   routes through `tw-traceability-check` before one document review.
5. Run `ce-doc-review` only after the requirement-quality and authority/trace
   preflight is passable, or after remaining limits are explicitly recorded as
   held conditions.
6. Keep `ce-doc-review` in TraceWeaver no-publication mode. It may report
   findings and policy-allowed local fixes, but it must not stage, commit, push,
   open PRs, update PRs, or claim release/clean-replacement readiness.
7. Report structured traceability/hash/status findings before CE document-review
   findings. Preserve severity, status, affected IDs, file/line anchors when
   available, claim impact, and remediation.
8. Report document-review findings together with requirement-quality status,
   traceability/hash/status consistency, accepted scope, held claims, and the
   next required command or human decision.

## Highest-Level Handoff Discipline

`tw-doc-review` owns requirements-review and trace/hash/status consistency
checks for document authority review. Do not return standalone
`tw-requirements-review` or `tw-traceability-check` as the normal next user
command when those checks are embedded in the document review path.

If the document review is clean, record the accepted review and scoped
bookkeeping atomically, run the mechanical consistency check, and stop without
another review dispatch. If the document is blocked by
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

## Gate

Do not allow weak, ambiguous, unverifiable, source-free, stale, or unreviewed
requirements or authority records to become implementation authority. Do not
claim accepted authority-state review when required files are untracked,
unstaged, hash-stale, or split between staged and unstaged versions.

Do not collapse structured TraceWeaver findings into prose-only summaries.
Report them before CE document-review findings so stale authority or held claims
cannot be hidden by a clean CE review.
