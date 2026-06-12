---
name: technical-review-and-audit-gate
description: Judges whether work is ready to pass a lifecycle gate by checking entry criteria, exit criteria, evidence completeness, review-lens coverage, action-item disposition, and risk state, then issuing a proceed, hold, reduce, or reject decision. Use when deciding whether work may pass an implementation, merge, release, runtime-promotion, baseline-update, audit, or closure gate, when review lenses disagree or evidence is incomplete, or when open risks, gaps, or stale evidence must be converted into an explicit gate decision.
---

<!-- TRACEWEAVER: file-role=distilled-review-audit-gate-knowledge-skill; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Technical Review And Audit Gate

## Overview

Convert TraceWeaver reviews into evidence-backed lifecycle gates instead of
informal approval impressions. This skill does not summarize standards or
source documents; it applies distilled TraceWeaver gate rules to work that
wants to proceed.

Core question:

```text
Is this work ready to proceed through the next gate?
```

If not, say exactly what is held, why it is held, and what evidence or
decision would release it. A gate output that cannot name its held items is
not a gate output.

## Reference Loading

Always load `references/review-audit-gate-operating-model.md`,
`references/review-audit-gate-checklist.md`, and
`references/review-audit-gate-output-schema.md` for substantive gate reviews.

- Load `tests/review-audit-gate-examples.md` when calibrating gate decisions
  or producing example-backed rationale.
- Load `references/source-basis.md` only when the user asks where the rules
  came from or when updating the distilled knowledge base.

Do not reproduce licensed source text, source tables, source diagrams, or long
quoted passages. Public output must use original TraceWeaver wording.

## Process

### 1. Identify The Gate

Before judging anything, record:

- gate name and gate ID
- lifecycle stage (idea, requirements, design, implementation, merge,
  release, runtime promotion, baseline update, closure, audit)
- candidate baseline or ref under review
- review mode: `lite`, `normal`, or `audit` (defined in the operating model)
- decision authority: who may accept the gate outcome
- the required review lens set for this gate, taken from the gate definition

If the gate, candidate ref, review mode, or decision authority cannot be
identified, the gate is held before any criteria are examined.

### 2. Check Entry Criteria

Entry criteria decide whether review can start. Check them before reading any
exit claim. If entry criteria are not met, hold the gate and stop; do not
spend review effort polishing exit findings for work that was not ready to be
reviewed.

### 3. Build The Evidence Index

Collect references to the records the decision will stand on:

- traceability records (requirements, matrix rows, code/test anchors)
- baseline and configuration records for the candidate ref
- verification records and results
- validation and acceptance records
- prior review records and findings
- risk, gap, change, and exception records

Index entries must point at recorded artifacts, not at recollections or chat
summaries. Evidence that predates the candidate ref must be flagged as stale.

### 4. Check Review Lenses And Exit Criteria

Walk the required lens set from the gate definition. A clean result from one
lens does not clear other required lenses; an unknown lens set is itself a
hold. Then check each exit criterion against the evidence index: every exit
criterion gets a status and either an evidence reference or an explicit hold.

### 5. Classify Open Actions And Risk State

Classify every open action item as exactly one of:

- blocker
- accepted exception
- follow-up
- not relevant

Reclassifying a blocker as follow-up requires the decision authority's
approval, not reviewer convenience. Record risk readiness: open risks,
accepted risks, and unresolved gaps, each with a disposition traceable to a
risk/gap/change record.

### 6. Decide And Report

Decide exactly one of `proceed`, `hold`, `reduce`, or `reject`, with a
rationale grounded in the evidence index. Emit the gate report using the
output schema, including the decision-to-status mapping. The output must say
what is ready, what is held, and which evidence supports the decision.

## Authority Boundary

This skill recommends `proceed`, `hold`, `reduce`, or `reject` based on
recorded evidence. It does not:

- create the baseline under review
- create missing authority, requirements, tests, or validation scenarios
- waive gaps or approve exceptions outside risk/gap/change control
- replace the human or project decision authority for a gate
- treat no response as approval

## Handoff Rules

| Gate Issue | Next Skill |
|---|---|
| Candidate ref inconsistent or baseline stale | `baseline-configuration-control` |
| Missing trace authority | `systems-engineering-traceability` |
| Requirement not good enough | `requirements-reviewer` |
| Open risk, gap, or waiver uncontrolled | `risk-gap-change-control` |
| Missing proof plan | `verification-planner` / `validation-planner` |
| Required lenses now complete after a hold | re-run `technical-review-and-audit-gate` |

## Integration With TraceWeaver

`tw-audit` routes audit entry/exit criteria, evidence expectations, and gate
outcomes through this skill; the skill-local guide in `tw-audit` is the
summary, this skill is the full model.

- Gate decisions feed TraceWeaver evidence records: a recorded gate outcome
  becomes a review record under `docs/validation/` and an entry in the
  evidence index of later gates.
- Gate decisions feed `traceability-matrix.md` status: a `hold` or `reject`
  keeps the affected requirement or claim out of complete/closed status; a
  `proceed` or `reduce` supports - but does not itself set - status change
  through the normal authority path.
- A gate decision is evidence, not requirement approval. Passing a gate never
  promotes a candidate requirement to approved authority and never mutates
  `requirements.md` or the Intent Contract baseline; those remain controlled
  decisions of the project owner.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "Everyone already looked at it." | Informal impressions are not gate evidence; the gate needs recorded criteria status with linked records. |
| "Nobody objected, so it's approved." | No response is not approval; a gate needs an identified decision authority and a recorded decision. |
| "The tests pass, so the gate passes." | A clean verification lens does not clear traceability, validation, baseline, or risk lenses. |
| "We'll fix the blockers after merge." | Converting a blocker into a follow-up without approval turns a hold into an unapproved proceed. |
| "The baseline drift is small." | An inconsistent candidate ref means the evidence may describe something other than what proceeds. |
| "Holding would slow the team down." | `reduce` exists for exactly this: a smaller approved scope proceeds while the held scope stays held. |
| "It passed the last gate." | Each gate has its own entry criteria, lens set, and evidence; prior gates are evidence inputs, not pre-approvals. |

## Red Flags

- Gate request with no named gate, lifecycle stage, candidate ref, or
  decision authority
- Review mode unstated, or audit-grade claims made from a `lite` review
- "Approved" claims with no recorded decision or evidence link
- Exit-criteria claims whose evidence index entries are empty
- Evidence that predates the candidate ref under review
- A single clean lens used to imply overall readiness
- Open action items with no owner or disposition
- Blockers silently renamed to follow-ups
- Exception claims with no risk, gap, or change record ID
- Candidate ref that differs between sections of the same report
- Risk, gap, or stale-evidence state reported as "unknown" alongside a
  `proceed` decision

## Verification

Before finishing the gate review, confirm:

- [ ] Gate name, lifecycle stage, candidate ref, review mode, and decision
      authority are recorded.
- [ ] Entry criteria were checked before any exit claim was judged.
- [ ] Every exit criterion has a status and an evidence reference or an
      explicit hold.
- [ ] Every open action is classified as blocker, accepted exception,
      follow-up, or not relevant.
- [ ] Required review lenses are complete or the gate is held.
- [ ] Risk, gap, and exception state is recorded with dispositions, not
      assumed.
- [ ] The decision is exactly one of `proceed`, `hold`, `reduce`, or
      `reject`, with rationale grounded in the evidence index.
- [ ] The output states what is ready, what is held, and which evidence
      supports the decision.
- [ ] No part of the decision relies on silence, informal impressions, or
      unrecorded approvals.
