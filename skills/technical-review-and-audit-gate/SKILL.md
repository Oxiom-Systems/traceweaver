---
name: technical-review-and-audit-gate
description: Assesses whether work is ready to proceed through a lifecycle gate. Use for entry criteria, exit criteria, evidence readiness, review findings, and proceed/hold/reduce/reject decisions.
---

# Technical Review And Audit Gate

## Purpose

Convert TraceWeaver reviews into evidence-backed lifecycle gates instead of
informal approval impressions.

## Core Question

Is this work ready to proceed through the next gate?

## When To Use

- Before implementation, merge, release, runtime promotion, or baseline update.
- When multiple review lenses disagree or are incomplete.
- When deciding whether open risks, gaps, or stale evidence block progress.
- When a review must separate entry criteria, exit criteria, and follow-up work.

## When Not To Use

- To create the baseline under review.
- To write requirements, tests, or validation scenarios.
- To approve a technical exception without risk/gap/change control.
- To treat no response as approval.

## Inputs Required

- Gate name, lifecycle stage, review mode, and entry/exit criteria.
- Baseline or candidate ref.
- Traceability, requirement quality, V&V, risk/gap/change, and baseline records.
- Open actions, owners, blockers, and decision authority.

## Outputs Produced

- `gate_readiness_report`
- `entry_criteria_status`
- `exit_criteria_status`
- `action_item_status`
- `evidence_index`
- `risk_readiness_status`
- `decision: proceed | hold | reduce | reject`

## Authority Boundary

This skill can recommend proceed, hold, reduce, or reject based on recorded
evidence. It does not create missing authority, waive gaps, or replace the
human/project approval authority for a gate.

## Handoff Rules

- Stale baseline goes to `baseline-configuration-control`.
- Missing authority goes to `systems-engineering-traceability`.
- Weak requirement goes to `requirements-reviewer`.
- Uncontrolled risk/gap/change goes to `risk-gap-change-control`.
- Missing V&V plan goes to `verification-planner` or `validation-planner`.

## Failure / Hold Conditions

- Entry criteria are not met.
- Exit criteria are claimed but evidence is absent.
- Required review lenses are missing or not clean.
- Open blockers are converted into follow-up without approval.
- Baseline or candidate ref is inconsistent.
- Risk state, gap state, or stale-evidence state is unknown.

## Examples

- Clean: all entry criteria met, evidence linked, risks accepted or closed,
  baseline current, decision `proceed`.
- Weak: product review is clean but coherence and feasibility reviews are
  missing, decision `hold`.
- Exception: proceed reduced scope because a validation gap is approved and
  release scope excludes the unvalidated behavior.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify gate, lifecycle stage, candidate ref, and review mode.
2. Check entry criteria before reviewing exit claims.
3. Build evidence index from traceability, baseline, V&V, risk, and review
   records.
4. Classify open actions as blocker, accepted exception, follow-up, or noise.
5. Decide `proceed`, `hold`, `reduce`, or `reject`.
6. Emit gate report using the output schema.

## Gate

A gate cannot pass by silence, missing evidence, or a single clean review lens
when required criteria are incomplete. The output must say exactly what is ready,
what is held, and what evidence supports the decision.
