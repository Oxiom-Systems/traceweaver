# Needs And Requirements Capture Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for capturing what a stakeholder
actually asked for and separating raw wording from candidate needs,
requirements, assumptions, constraints, and success signals before anything
becomes implementation authority. It is original TraceWeaver guidance and does
not by itself promote a runtime skill, package manifest, or release claim.

Requirement basis: GAP-TW-2026-06-12-007 and
`docs/validation/candidate-baseline-review-needs-and-requirements-capture-2026-06-12.md`.
This guide closes the elicitation gap flagged as finding K5 in
`docs/validation/traceweaver-framework-design-review-2026-06-12.md`.

## Core Question

What did the stakeholder actually ask for?

## Use When

Use needs capture at the start of planning or document review; when a
stakeholder request, product note, issue, or meeting note may contain needs
or candidate requirements; and before requirement quality review or
implementation authority is considered.

Do not use it to approve requirements, to turn vague stakeholder wording
directly into implementation authority, or to decide design or verification
evidence.

## Required Inputs

- raw source text or original stakeholder wording
- source pointer, stakeholder role, context, and operating situation when known
- known assumptions, constraints, risks, success signals, or open questions

## Expected Outputs

- source intent record preserving original wording
- stakeholder need candidates and candidate requirements with stable IDs
- assumptions, constraints and drivers, risk candidates
- success and failure signals
- open questions
- validation intent placeholders

## Decision Rules

- Preserve the stakeholder's original wording as evidence; reframe it
  separately in TraceWeaver terms.
- A need describes why an outcome matters; a requirement states what must be
  true.
- A goal is not a requirement until it has actor, context, obligation, and an
  evidence path.
- A design suggestion is not a requirement unless it is approved as a
  constraint.
- An assumption must stay visible until it is validated, retired, or
  converted into a risk or gap.
- A constraint must carry its source, reason, and authority state.
- Candidate needs and candidate requirements are not implementation
  authority; mark status `candidate` or `draft`, never approved by inference.
- A missing stakeholder, context, or success signal requires clarification;
  hold when the missing item is material to scope.
- A captured need explains why work may matter; it does not authorize
  implementation until approved requirements, decisions, risk controls, or
  gaps exist.

## Elicitation Guidance

For each stakeholder input, draw out and record:

- Stakeholder and source: who asked, in what artifact, in what role.
- Intended user or operator: who the outcome is for, which may differ from
  who asked.
- Operating context: the situation in which the outcome must hold, not just
  the artifact it touches.
- Problem or opportunity, and the desired outcome in the stakeholder's own
  terms.
- Success signal: how the stakeholder would recognize success; failure signal
  when one is identifiable.
- Need versus want versus solution: when the input names a mechanism, capture
  the mechanism as a design suggestion and elicit the underlying need it
  serves.
- Conflict surfacing: when the reframed text drifts from the original
  wording, or a design suggestion may actually be a hard constraint, surface
  the conflict and ask which meaning controls; do not pick silently.

A weak capture converts "make onboarding better" directly into
implementation work. A clean capture preserves "The dashboard takes too long
when I check incidents", reframes it as a candidate need with a stable ID,
records the acceptable response-time target as an open question, and routes
the draft requirement to review.

## Checklist

- original wording preserved; stakeholder or source identified
- intended user or operator identified
- context or operating situation captured
- problem or opportunity and desired outcome captured
- success signal captured; failure signal captured when available
- assumptions, constraints, risks, and design suggestions separated
- candidate needs and candidate requirements have stable IDs
- candidate or draft status is explicit; open questions are listed
- no item is marked approved by inference

## Hold When

Hold capture and ask when:

- original wording is missing;
- the stakeholder is unknown, or actor or context is unknown and material;
- the desired outcome is unclear or success cannot be recognized;
- original wording conflicts with the reframed text;
- a design suggestion may be a hard constraint;
- need, requirement, assumption, and design solution are mixed together and
  cannot be separated;
- the agent would need to invent scope.

## Handoffs

| Captured Item | Next Skill |
|---|---|
| Candidate requirement | `requirements-reviewer` |
| Requirement approved after review | `systems-engineering-traceability` |
| Assumption, risk, or gap | `risk-gap-change-control` |
| Validation signal or intent | `validation-planner` |
| Design suggestion | `design-decision-reviewer` |

## Summary Output Shape

```yaml
skill_name: needs-and-requirements-capture
decision: held
capture_id: CAP-001
source: {stakeholder: "", artifact: "", original_text: ""}
reframed_need: {id: NEED-001, text: "", status: candidate}
candidate_requirements:
  - {id: UREQ-001, type: user_requirement, text: "", status: draft}
assumptions: [{id: ASM-001, text: ""}]
constraints: [{id: CON-001, text: "", source: ""}]
success_signals: [{id: SIG-001, text: ""}]
failure_signals: [{id: FAIL-001, text: ""}]
open_questions: [{id: Q-001, question: ""}]
recommended_next_skill: requirements-reviewer
human_clarification_required: false
```

Status values: `candidate`, `draft`, `needs_clarification`,
`ready_for_requirement_review`, `rejected`.
