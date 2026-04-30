---
name: risk-gap-change-control
description: Controls approved gaps, accepted risks, weak-requirement exceptions, and requirement changes. Use when asking how to handle exceptions, deferred evidence, moving requirements, or authority changes.
---

# Risk Gap Change Control

## Purpose

Control exceptions, risks, gaps, weak requirements, deferred evidence, and
authority changes so known weaknesses remain visible, owned, bounded, and
reviewable.

## Core Question

How do we handle approved gaps, accepted risks, weak requirements, and
requirement changes?

## When To Use

- When work cannot meet the normal authority, traceability, V&V, or baseline
  path.
- When requirements, assumptions, risks, gaps, or evidence status change.
- When a weak requirement is intentionally accepted for limited use.

## When Not To Use

- To close a gap without approval.
- To hide a known weakness as ordinary follow-up.
- To silently update approved authority.

## Inputs Required

- Risk, gap, exception, weak requirement, deferred evidence item, or change
  request.
- Affected need, requirement, design, implementation, V&V, baseline, owner, and
  approval context.

## Outputs Produced

- `risk_record`
- `approved_gap_record`
- `exception_record`
- `change_request_record`
- `impact_analysis`
- `revisit_trigger`
- `owner_and_approval`

## Authority Boundary

This skill records and controls exceptions. It does not make weak authority good
or approve risk without the required human/project decision evidence.

## Handoff Rules

- Requirement wording issues go to `requirements-reviewer`.
- Trace row updates go to `systems-engineering-traceability`.
- Baseline deltas go to `baseline-configuration-control`.
- V&V gaps go to `verification-planner` or `validation-planner`.

## Failure / Hold Conditions

- Exception has no owner, allowed scope, approval, trigger, or closure criteria.
- Risk/gap hides missing authority.
- Change impact analysis skips V&V, traceability, or baseline.
- Deferred validation is treated as permanently acceptable.

## Examples

- Clean: weak requirement exception has owner, allowed scope, expiry, impact
  analysis, and release hold condition.
- Weak: "accept missing validation for now" has no owner or trigger.

## What This Skill Owns

- Approved gap records.
- Accepted risk records.
- Weak requirement exceptions.
- Requirement change records.
- Review conditions, expiry, and re-approval triggers.
- Traceability debt disposition.

## What This Skill Does Not Own

- Inventing authority.
- Approving risk by itself.
- Rewriting requirements without review.
- Running verification or validation.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify the exception or change.
2. Classify it as risk, gap, traceability debt, requirement change, weak
   requirement exception, or baseline delta.
3. Record owner, reason, impact, allowed scope, review condition, and expiry.
4. Link affected needs, requirements, design decisions, implementation, V&V, and
   baseline items.
5. Decide whether to accept, revise, defer, block, or escalate.
6. Emit change/gap/risk record using the output schema.

## Gate

An exception is only controlled when it is explicit, owned, bounded, reviewed,
and linked to affected authority and evidence.
