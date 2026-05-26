---
name: tw-requirements-review
description: TraceWeaver adapter for reviewing whether requirements, needs, acceptance criteria, or planning statements are good enough to become implementation authority. Use before planning treats requirements as approved authority.
---

<!-- TRACEWEAVER: file-role=requirements-review-wrapper-skill; req=REQ-TW-050; trace=TRACE-TW-021; ver=VER-TW-030 -->
<!-- TRACEWEAVER: file-role=systems-engineering-prompt-contract-skill; req=REQ-TW-061; trace=TRACE-TW-044; ver=VER-TW-056 -->
<!-- TRACEWEAVER: file-role=requirements-review-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Requirements Review

## Purpose

Run the TraceWeaver requirements-quality gate before a planning document,
requirements document, issue, PRD, or acceptance criteria set becomes
implementation authority.

## Runtime Scope

This adapter routes to `requirements-reviewer`. It does not replace or redefine
that skill.

## Required Inputs

Before review, load and cite:

- the candidate requirements, needs, acceptance criteria, plan language, or
  authority-changing statement under review
- `requirements.md` when present
- `traceability-matrix.md` when present
- `.traceweaver/intent-contract.yml` when present
- source basis, stakeholder intent, assumptions, verification method, validation
  question, owner, allowed use, and held-claim boundaries when available

Use the TraceWeaver-packaged `requirements-reviewer` as the distilled
requirements-quality knowledge source, including its skill-local references for
requirement types, language rules, source basis, and verification/validation
guidance.

## Process

1. Load the `requirements-reviewer` skill.
2. Review the supplied requirements, needs, acceptance criteria, or planning
   statements.
3. Classify each candidate item as requirement, need, idea, assumption, design
   note, constraint, acceptance criterion, verification evidence, validation
   evidence, or traceability gap.
4. Assign each real requirement a 0-5 quality score using the
   `requirements-reviewer` ranking model. Use the score to summarize and
   prioritize requirement quality only; do not let a numeric score override
   blocking authority, verification, validation, source, or human-decision
   gaps.
5. Mark weak, ambiguous, unverifiable, source-free, or unapproved requirements
   as `Needs revision`, `Blocked`, `Human decision`, or `Reclassify`.
6. Review set-level quality across the candidate requirements: orphaned needs,
   missing allocation, duplication, conflicts, mixed abstraction levels, and
   missing verification or validation coverage.
7. State whether the reviewed material can become implementation authority.

## Requirement Quality Ranking

For each real requirement, include the `requirements-reviewer` quality score:

| Score | Meaning | Default Outcome |
|---:|---|---|
| 5 | Clear, typed, traceable, verifiable, validatable, and approvable | Can approve |
| 4 | Mostly sound with minor metadata or wording edits | Revise |
| 3 | Understandable but incomplete, weakly testable, or missing trace/V&V detail | Revise |
| 2 | Ambiguous, compound, unverifiable, conflicting, or unsafe as authority | Block |
| 1 | Not actually a requirement or mostly a design note/idea | Reclassify |
| 0 | Contradictory, hazardous, or unusable as written | Block |

The score is a triage signal, not approval authority. Any block condition,
missing human decision, missing source basis, missing objective verification,
or missing validation path still prevents authority promotion until revised,
held by an approved gap/risk/exception, or explicitly accepted by the project
owner.

## Highest-Level Handoff Discipline

`tw-requirements-review` is a standalone lower gate only for explicit
requirements-quality diagnostics or baseline-authority review. When it is called
inside `tw-plan`, `tw-doc-review`, or `tw-auto`, those higher wrappers own the
next handoff.

After a clean requirements review, recommend the highest-level wrapper that can
record and use the result, normally `/tw-work ...` for a bounded baseline or
status patch, `/tw-doc-review ...` for scoped authority acceptance, or
`/tw-auto ...` for a multi-step plan/work/review loop. Do not end with vague
prose such as "update the requirements" without the exact wrapper command.

## Output

Return:

- requirements reviewed
- authority-ready requirements
- requirement quality scores ranked 0-5 with default outcome
- blocked requirements
- required revisions
- human decisions
- verification/validation gaps
- requirement-set quality findings
- traceability impact
- highest-level next TraceWeaver wrapper command or exact human decision

## Gate

Do not let weak or unapproved requirements become implementation authority.
If the team accepts a weak requirement, require an approved gap, accepted risk,
design decision, or change-control exception with owner, reason, allowed use,
and review condition.
