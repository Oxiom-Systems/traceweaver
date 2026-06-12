---
name: risk-gap-change-control
description: Controls approved gaps, accepted risks, weak-requirement exceptions, traceability debt, deferred verification or validation, and requirement changes so known weaknesses stay visible, owned, bounded, and reviewable. Use when work cannot meet the normal authority, traceability, V&V, or baseline path, when requirements, assumptions, risks, gaps, or evidence status change, when a weak requirement is intentionally accepted for limited use, or when gap, change, or exception records need classification, impact analysis, or disposition.
---

<!-- TRACEWEAVER: file-role=distilled-risk-gap-change-knowledge-skill; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Risk Gap Change Control

## Overview

Control exceptions, risks, gaps, weak requirements, deferred evidence, and
authority changes so known weaknesses remain visible, owned, bounded, and
reviewable. This skill does not summarize standards or source documents; it
applies distilled TraceWeaver rules to deviations from the approved authority
path.

Core question:

```text
How do we handle approved gaps, accepted risks, weak requirements, and
requirement changes?
```

If a deviation cannot be recorded as an explicit, owned, bounded, and
reviewable exception, it is not controlled - block or escalate instead of
letting it become hidden authority.

Do not use this skill:

- to close a gap without approval
- to hide a known weakness as ordinary follow-up
- to silently update approved authority

## Reference Loading

Always load `references/risk-gap-change-operating-model.md`,
`references/risk-gap-change-checklist.md`, and
`references/risk-gap-change-output-schema.md` for substantive risk, gap,
exception, or change-control work.

- Load `tests/risk-gap-change-examples.md` when calibrating findings or
  showing what a controlled versus uncontrolled record looks like.
- Load `references/risk-gap-and-change-control-guide.md` (skill-local copy of
  the distilled guide) when the work touches traceability-matrix rows
  (`RISK-*` / `GAP-*` / `TD-*` row shapes), dark-code candidate
  classification, or brownfield dependencies.
- Load `references/source-basis.md` only when the user asks where the rules
  came from or when updating the distilled knowledge base.

Do not reproduce licensed source text, source tables, source diagrams, or long
quoted passages. Public output must use original TraceWeaver wording.

## Process

### 1. Identify The Exception Or Change

Gather the deviation and its context before judging it:

- the risk, gap, exception, weak requirement, deferred evidence item, or
  change request itself
- the affected need, requirement, design decision, implementation, V&V,
  baseline, owner, and approval context

If the affected authority cannot be identified, that is itself a finding:
record the missing link, do not invent one.

### 2. Classify The Record Type

Classify each deviation as exactly one of:

- approved gap
- accepted risk
- weak requirement exception
- deferred verification
- deferred validation
- requirement change
- traceability debt
- baseline delta

Use the definitions in `references/risk-gap-change-operating-model.md`. Do
not blur types: a risk is not a gap, debt is not permission, and a weak
requirement exception does not make the requirement good.

### 3. Record The Controlled Fields

For every record capture: owner, reason, impact, allowed scope, review
condition, and expiry or closure trigger. Allowed scope must name both what
work may proceed and what remains blocked. Unowned exceptions are not
approved.

### 4. Link Affected Items

Link the record to every affected need, requirement, design decision,
implementation reference, verification item, validation item, and baseline
item. A requirement change must identify affected needs, downstream
requirements, design decisions, implementation, verification, validation,
risks, and baseline - impact analysis that skips V&V, traceability, or
baseline is incomplete and blocks the change.

### 5. Decide

Choose exactly one outcome per record:

| Outcome | Meaning |
|---|---|
| `accept` | Controlled exception approved with owner and review condition |
| `revise` | Requirement, trace, or evidence needs correction |
| `defer` | Allowed later with trigger, owner, and expected evidence |
| `block` | Too risky or uncontrolled |
| `escalate` | Human decision required |
| `close` | Debt/gap resolved with evidence |

`accept` requires recorded human approval evidence. Deferred verification or
validation requires owner, trigger, expected evidence, and accepted risk -
deferred validation is never permanently acceptable.

### 6. Emit The Record

Emit the change, gap, risk, or exception record using
`references/risk-gap-change-output-schema.md`, including follow-up actions
and traceability impact. Run `references/risk-gap-change-checklist.md` over
the record before treating it as controlled.

### Gate

An exception is only controlled when it is explicit, owned, bounded,
reviewed, and linked to affected authority and evidence.

## Authority Boundary

This skill records and controls exceptions. It does not make weak authority
good or approve risk without the required human/project decision evidence.

This skill owns:

- approved gap records
- accepted risk records
- weak requirement exceptions
- requirement change records
- review conditions, expiry, and re-approval triggers
- traceability debt disposition

This skill does not own:

- inventing authority
- approving risk by itself
- rewriting requirements without review
- running verification or validation

Hold or fail the work when:

- an exception has no owner, allowed scope, approval, trigger, or closure
  criteria
- a risk or gap record hides missing authority - the operational test: if
  work proceeds on the record alone, the record is hiding missing authority
- change impact analysis skips V&V, traceability, or baseline
- deferred validation is treated as permanently acceptable

## Handoff Rules

- Requirement wording issues go to `requirements-reviewer`.
- Trace row updates go to `systems-engineering-traceability`.
- Baseline deltas go to `baseline-configuration-control`.
- Verification gaps go to `verification-planner`.
- Validation gaps go to `validation-planner`.

## Integration With TraceWeaver

This skill is used by `systems-engineering-traceability` when matrix work
surfaces risk controls, approved gaps, traceability debt, or change-control
triggers, and by `tw-audit` when checking gap, exception, and change closure
before cleanup, completion, or release claims. The `tw-*` wrappers route
gap, change, and exception handling here.

Records route to the project's `.traceweaver/` gap, change, and exception
records using the plugin templates:

- gaps -> `.traceweaver/gaps/` shaped on
  `plugins/traceweaver-core/references/gap-template.yml`
- changes -> `.traceweaver/changes/` shaped on
  `plugins/traceweaver-core/references/change-template.yml`
- exceptions -> `.traceweaver/exceptions/` shaped on
  `plugins/traceweaver-core/references/exception-template.yml`

A recorded gap is a held condition, not permission: no meaningful
implementation may use a gap record as authority until it is promoted to an
approved requirement or approved exception, and an approved exception is
valid only inside its recorded allowed scope and review condition.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "We logged it, so we can proceed." | A recorded gap is a held condition, not permission; only an approved record with owner, scope, and review condition allows bounded work. |
| "Everyone knows this requirement is weak; just build it." | Proceeding silently turns weak wording into hidden authority; record a weak requirement exception with allowed scope and expiry instead. |
| "We'll validate it later." | Deferral needs owner, trigger, expected evidence, and accepted risk; deferred validation without a trigger is a block condition. |
| "It's a small requirement change; no impact analysis needed." | A requirement change must identify affected needs, requirements, design, implementation, V&V, risks, and baseline before approval. |
| "The risk is obvious, no owner needed." | Unowned exceptions are not approved; an exception without an owner is uncontrolled. |
| "We can clean up the gap record after release." | Approved gaps carry review conditions and expiry; an expired or out-of-scope gap is no longer valid authority. |
| "Marking it as debt closes the issue." | Traceability debt is visible work, not authority; open debt must not be cited to justify implementation. |

## Red Flags

- An exception, gap, or risk record with no owner, allowed scope, approval,
  review condition, or expiry/closure trigger
- Work proceeding with only a `RISK-*`, `GAP-*`, or `TD-*` label and no
  approved record behind it
- "Accept missing validation for now" with no owner or trigger
- A requirement change merged without linked impact on V&V, traceability, or
  baseline
- Human approval assumed, implied, or "obvious" but not recorded
- An approved gap cited outside its recorded allowed scope or after its
  expiry condition
- A weak requirement treated as fixed because an exception exists
- Exception records edited to widen scope without re-approval
- A known weakness filed as ordinary follow-up work so it stops being visible

## Verification

Before finishing risk, gap, exception, or change-control work, confirm:

- [ ] Every deviation is classified as exactly one record type.
- [ ] Every record names an owner, reason, impact, allowed scope, review
      condition, and expiry or closure trigger.
- [ ] Every record links the affected needs, requirements, design,
      implementation, verification, validation, and baseline items.
- [ ] Every record carries exactly one outcome: `accept`, `revise`, `defer`,
      `block`, `escalate`, or `close`.
- [ ] Accepted records carry recorded human approval evidence.
- [ ] Deferred V&V records carry owner, trigger, expected evidence, and
      accepted risk.
- [ ] No record is cited as authority beyond its approved scope, and no gap
      record is treated as permission.
- [ ] Records are emitted in the output schema and routed to the
      `.traceweaver/` gap, change, or exception templates.
- [ ] Findings and rewrites use original TraceWeaver wording.
