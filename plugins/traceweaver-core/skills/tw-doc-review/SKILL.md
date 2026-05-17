---
name: tw-doc-review
description: TraceWeaver-controlled document review wrapper. Use when reviewing requirements, plans, matrices, Intent Contracts, validation records, evidence records, or authority documents that may become TraceWeaver implementation authority.
---

<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-050; trace=TRACE-TW-023; ver=VER-TW-032 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Document Review

## Purpose

Run document review as a TraceWeaver-controlled review step instead of a raw CE
document review. This wrapper preserves the CE document-review behavior while
requiring requirement-quality and authority/traceability checks when a document
can affect implementation authority or accepted evidence.

## Required Authority Inputs

Before review, load and cite:

- `requirements.md` when present
- `traceability-matrix.md` when present
- `.traceweaver/intent-contract.yml` when present
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/trace-anchor-authoring.md` when the document review
  concerns code-anchor hierarchy, authoring policy, or matrix Code Anchor
  Evidence updates
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
3. If the document contains requirements, acceptance criteria, planning
   statements, authority claims, held-claim changes, or validation questions,
   run `tw-requirements-review` before CE document review.
4. If the document changes a matrix, Intent Contract, validation/evidence record,
   status field, hash, review scope, accepted scope, or held claim, run
   `tw-traceability-check` or require an explicit trace/matrix consistency check
   before accepting the document as TraceWeaver input.
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

If the document review is clean, recommend `/tw-work record ...` for the clean
review state and scoped status/hash refresh. If the document is blocked by
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

## Gate

Do not allow weak, ambiguous, unverifiable, source-free, stale, or unreviewed
requirements or authority records to become implementation authority. Do not
claim accepted authority-state review when required files are untracked,
unstaged, hash-stale, or split between staged and unstaged versions.

Do not collapse structured TraceWeaver findings into prose-only summaries.
Report them before CE document-review findings so stale authority or held claims
cannot be hidden by a clean CE review.
