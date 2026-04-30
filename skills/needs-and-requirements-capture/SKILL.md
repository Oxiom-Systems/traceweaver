---
name: needs-and-requirements-capture
description: Captures stakeholder needs and turns raw input into candidate needs, assumptions, constraints, success signals, and open questions. Use before requirement approval when asking what the stakeholder actually asked for.
---

# Needs And Requirements Capture

## Purpose

Preserve stakeholder intent and separate raw source wording from candidate
needs, candidate requirements, assumptions, constraints, risks, success signals,
and open questions.

## Core Question

What did the stakeholder actually ask for?

## When To Use

- At the start of planning or document review.
- When a stakeholder request, product note, issue, or meeting note may contain
  needs or candidate requirements.
- Before requirement quality review or implementation authority is considered.

## When Not To Use

- To approve requirements.
- To turn vague stakeholder wording into implementation authority.
- To decide design or verification evidence.

## Inputs Required

- Raw source text or stakeholder wording.
- Source pointer, stakeholder role, context, and operating situation when known.
- Known assumptions, constraints, risks, success signals, or open questions.

## Outputs Produced

- `source_intent_record`
- `stakeholder_need_candidates`
- `candidate_requirements`
- `assumptions`
- `constraints_and_drivers`
- `risks`
- `open_questions`
- `validation_intent_placeholders`

## Authority Boundary

This skill creates candidate lifecycle records. It does not approve authority or
convert assumptions into requirements.

## Handoff Rules

- Candidate requirements go to `requirements-reviewer`.
- Risks, gaps, assumptions, and exceptions go to `risk-gap-change-control`.
- Validation intent goes to `validation-planner`.
- Design suggestions go to `design-decision-reviewer`.

## Failure / Hold Conditions

- Original wording is missing.
- Stakeholder, actor, or context is unknown and material.
- Need, requirement, assumption, and design solution are mixed together.
- The agent would need to invent scope.

## Examples

- Clean: source wording is preserved, need is reframed, success signal and open
  questions are recorded.
- Weak: "make onboarding better" is converted directly into implementation work.

## What This Skill Owns

- Preserve original stakeholder wording.
- Separate needs from requirements, assumptions, constraints, goals, and design
  suggestions.
- Capture success/failure signals and open questions.
- Mark candidate items as candidate or draft, not approved authority.

## What This Skill Does Not Own

- Requirement approval.
- Requirement quality scoring.
- Implementation planning.
- V&V evidence.
- Design decisions.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Capture original wording without polishing away meaning.
2. Identify stakeholder, context, problem/opportunity, and intended outcome.
3. Separate needs, candidate requirements, assumptions, constraints, risks,
   success signals, failure signals, and open questions.
4. Assign stable candidate IDs.
5. Mark status as `Candidate` or `Draft`.
6. Route candidate requirements to `requirements-reviewer` before approval.

## Gate

A captured need explains why work may matter. It does not authorize
implementation until approved requirements, decisions, risk controls, or gaps
exist.
