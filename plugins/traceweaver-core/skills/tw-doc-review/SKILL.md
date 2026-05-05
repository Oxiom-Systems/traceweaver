---
name: tw-doc-review
description: TraceWeaver-controlled document review wrapper. Use when reviewing requirements, plans, matrices, Intent Contracts, validation records, evidence records, or authority documents that may become TraceWeaver implementation authority.
---

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
- relevant validation, gap, change, exception, task, or trace records for the
  document being reviewed

If a fresh project lacks these files, treat the review as authority bootstrap or
requirements-quality review only. Do not let draft text become implementation
authority until the authority files exist and review passes.

## Workflow

1. Identify the document type: requirements, plan, matrix, Intent Contract,
   validation record, evidence record, release note, or other authority-adjacent
   document.
2. If the document contains requirements, acceptance criteria, planning
   statements, authority claims, held-claim changes, or validation questions,
   run `tw-requirements-review` before CE document review.
3. If the document changes a matrix, Intent Contract, validation/evidence record,
   status field, hash, review scope, accepted scope, or held claim, run
   `tw-traceability-check` or require an explicit trace/matrix consistency check
   before accepting the document as TraceWeaver input.
4. Run `ce-doc-review` only after the requirement-quality and authority/trace
   preflight is passable, or after remaining limits are explicitly recorded as
   held conditions.
5. Keep `ce-doc-review` in TraceWeaver no-publication mode. It may report
   findings and policy-allowed local fixes, but it must not stage, commit, push,
   open PRs, update PRs, or claim release/clean-replacement readiness.
6. Report document-review findings together with requirement-quality status,
   traceability/hash/status consistency, accepted scope, held claims, and the
   next required command or human decision.

## Output

Return:

- document(s) reviewed
- document type and authority role
- `tw-requirements-review` result when applicable
- `tw-traceability-check` or trace/hash/status consistency result when applicable
- CE document-review coverage and findings
- accepted scope and held claims
- whether the document may be used as accepted TraceWeaver input
- next required command, review, or human decision

## Gate

Do not allow weak, ambiguous, unverifiable, source-free, stale, or unreviewed
requirements or authority records to become implementation authority. Do not
claim accepted authority-state review when required files are untracked,
unstaged, hash-stale, or split between staged and unstaged versions.
