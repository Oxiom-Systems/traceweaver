---
name: tw-grill
description: Optional TraceWeaver intent-deepening interview after ideation and before brainstorming. Use when a selected idea, plan, or design needs relentless questioning before requirements are drafted.
argument-hint: "[selected idea, plan, design, or source artifact]"
---

# TraceWeaver Grill

## Purpose

Use `tw-grill` after an ideation step and before `ce-brainstorm` when one
selected idea needs deeper interrogation before it becomes requirements source
material. Use it in bootstrap mode when no controlled authority exists yet, and
in delta/gap mode when some requirements, traceability, or Intent Contract
authority already exists but the selected idea still has unresolved gaps.
`ce:ideate` is optional external upstream CE context in this alpha; it is not
packaged in the TraceWeaver plugin unless a later scope record selects it.

This skill preserves stakeholder intent by walking the decision tree before new
planning authority exists. Existing authority narrows the interview; it does not
disable the grill. The output is source evidence only. It does not approve
requirements, exceptions, implementation, release claims, or baseline changes.

This skill is inspired by the documentation-aware grilling pattern from Matt
Pocock's MIT-licensed `grill-with-docs` skill. See
`references/upstream-notice.md` for attribution and source pin. This package does
not include copied upstream source text.

## Authority Boundary

You are not the authority.

The authority is the accepted `requirements.md`, the current Intent Contract,
approved requirements, and approved exceptions. `tw-grill` may reason, propose,
identify gaps, and capture intent, but it may not silently convert the user's
answers or your interpretation into implementation authority.

If the interview discovers missing authority, route it to one of:

- proposed requirement;
- open question;
- gap;
- change request;
- exception candidate;
- accepted-risk candidate;
- rejected assumption.

Do not proceed to implementation from `tw-grill`.

## Workflow Position

Recommended placement:

```text
idea
-> ideation source
-> tw-grill
-> ce-brainstorm
-> tw-requirements-review
-> authority-baseline record
-> ce-plan
-> tw-authority-gate
-> ce-work
-> tw-traceability-check
-> ce-code-review / ce-doc-review
-> verification evidence record
-> validation evidence record
-> ce-compound
```

## Operating Rules

1. Confirm the selected idea, plan, or design being grilled.
2. Determine the operating mode before asking broad questions:
   - use bootstrap mode only when no controlled authority set exists for the
     work area: no `requirements.md`, no `traceability-matrix.md`, no
     `.traceweaver/intent-contract.yml`, and no `.traceweaver/gaps/`,
     `.traceweaver/changes/`, or `.traceweaver/exceptions/` records;
   - use delta/gap mode whenever any controlled authority artifact exists, even
     when it has no relevant approved requirement for the selected idea.
3. In delta/gap mode, inventory existing authority first:
   - read `requirements.md` when present;
   - read `.traceweaver/intent-contract.yml` when present;
   - read `traceability-matrix.md` when present;
   - inspect `.traceweaver/gaps/`, `.traceweaver/changes/`, and
     `.traceweaver/exceptions/` when present.
4. In delta/gap mode, classify each meaningful proposed behavior or decision as
   one of:
   - `covered`;
   - `weak_requirement`;
   - `missing_intent`;
   - `missing_requirement`;
   - `missing_verification`;
   - `missing_validation`;
   - `contradiction`;
   - `changed_intent`;
   - `dark_behavior_candidate`.
5. In delta/gap mode, ask only about missing, weak, stale, contradictory, or
   dark-behavior coverage. Do not re-grill covered baseline authority unless it
   is needed to explain a conflict or stale decision.
6. Interview the user relentlessly until there is shared understanding of
   stakeholder intent, expected outcomes, non-goals, risks, constraints,
   validation questions, and unresolved decisions.
7. Walk each branch of the decision tree. Resolve dependencies between
   decisions one by one.
8. If a question can be answered by inspecting the codebase or repo documents,
   inspect the codebase instead of asking the user.
9. For each user-facing question, provide your recommended answer and why it is
   the recommended answer.
10. Check existing domain documentation while exploring:
   - if `CONTEXT-MAP.md` exists, use it to find the relevant context docs;
   - otherwise, use root `CONTEXT.md` when present;
   - check `docs/adr/` and context-local ADR folders when decisions may already
     exist.
11. Challenge terminology against existing context docs. If the user uses a term
   differently from documented project language, call out the conflict and ask
   which meaning should control.
12. Sharpen fuzzy terms into canonical project language. If a domain term is
   resolved, record the proposed `CONTEXT.md` or ADR update as source evidence
   only. Do not edit project context or authority documents until
   `tw-requirements-review` or an approved change/exception promotes the update.
13. Stress-test domain relationships with concrete scenarios and edge cases.
14. Cross-check user claims against code. If code and stated intent disagree,
    surface the contradiction before moving on.
15. Offer an ADR only when the decision is costly to reverse, surprising without
    context, and the result of a real trade-off.
16. Keep assumptions visible. Do not implement assumptions.
17. End by producing source-evidence output and suggested next steps.

## Modes

### Bootstrap Mode

Use bootstrap mode only when the work area has no controlled authority set: no
controlled requirements, no traceability matrix, no Intent Contract, and no
existing gap, change, or exception records. Produce first-pass source evidence
for:

- stakeholder intent;
- candidate requirements;
- validation questions;
- non-goals and must-not-change boundaries;
- risks and assumptions;
- authority bootstrap gaps;
- suggested `tw-requirements-review` handoff.

Bootstrap mode may recommend creating draft authority artifacts, but it must
stop before implementation or baseline approval.

### Delta / Gap Mode

Use delta/gap mode when any controlled authority exists. Existing authority is
the starting point. Compare the selected idea, plan, design, or source artifact
against that authority and grill only the unresolved delta.
If no relevant approved requirement covers the selected idea, stay in
delta/gap mode and classify the missing coverage as `missing_intent`,
`missing_requirement`, `missing_verification`, or `missing_validation` instead
of falling back to bootstrap mode.

For each unresolved item, route the outcome to one of:

- proposed requirement;
- clarification question;
- gap;
- change request;
- exception candidate;
- accepted-risk candidate;
- rejected assumption;
- validation question;
- must-not-change update.

Delta/gap output should describe the authority delta only. Do not restate the
entire baseline unless needed to explain a contradiction, changed intent, or
dark-behavior candidate.

## Output Format

Return concise sections:

- `Selected idea`: the idea being grilled.
- `Mode`: `bootstrap` or `delta_gap`, with the reason for that choice.
- `Authority inventory`: existing authority files inspected, or missing files.
- `Coverage classification`: covered, weak, missing, stale, contradictory, or
  dark-behavior items found before questioning.
- `Stakeholder intent`: what the user appears to want.
- `Recommended answers`: each question with the recommended answer.
- `Decisions resolved`: decisions made during the interview.
- `Open questions`: unresolved items that need user or stakeholder input.
- `Proposed requirements`: candidate requirement statements, not authority.
- `Gaps / risks / changes / exceptions`: items to route before planning.
- `Validation questions`: how the user will know the right thing was built.
- `Must not change`: explicit boundaries and non-goals.
- `Context updates`: domain terms or relationships added or proposed for
  `CONTEXT.md` / `CONTEXT-MAP.md`.
- `ADR candidates`: decisions that may deserve ADRs, with why they meet or fail
  the ADR threshold.
- `Source evidence`: recommended evidence path, normally
  `docs/interviews/YYYY-MM-DD-topic-grill.md`.
- `Authority boundary`: state that output is source evidence only until
  reviewed into `requirements.md`.
- `Suggested next steps`: name the next CE command, TraceWeaver gate, evidence
  record, or held condition.

## Stop Conditions

Stop and ask for a selected idea if the user has not chosen one.

In delta/gap mode, stop before broad questioning if existing authority has not
been inventoried or if the selected idea cannot be compared to the current
baseline.

Stop before implementation if the interview uncovers missing requirement
authority, changed intent, unapproved assumptions, contradictory constraints, or
scope expansion.

Stop before planning authority if the output has not gone through
`tw-requirements-review` and baseline review.

Stop before writing `CONTEXT.md` or ADR changes if the project does not already
have a clear documentation convention, if the change would imply implementation
authority, or if the user has not confirmed the resolved terminology or decision.
