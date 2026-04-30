# Operating Model

## Primary Question

Is this requirement good enough to become approved implementation authority?

## Requirement Meaning

A candidate requirement is a proposed statement of what must be true. An
approved requirement is a candidate requirement that is clear enough to govern
implementation and has the project's approval evidence.

## Decision Rules

- A requirement must be necessary, singular, unambiguous, feasible,
  verifiable, traceable, implementation-neutral unless constrained, and at the
  right abstraction level.
- A sentence is not automatically a requirement. It may be a need, idea,
  assumption, task, constraint, design note, validation criterion, or evidence.
- Vague words such as "fast", "easy", "robust", "secure", "scalable", and
  "user-friendly" require measurable criteria.
- Escape clauses such as "where possible", "as needed", and "if practical"
  block approval unless governed by a clear decision rule.
- Open-ended lists such as "etc." and "including but not limited to" are not
  authority.
- Compound requirements must be split when the parts need separate evidence.
- Implementation details must be removed unless they are approved constraints.
- Unverifiable requirements are blocked or accepted only as explicit risk/gap.
- Human acceptance of a weak requirement does not make it good. It records a
  controlled exception.

## Requirement Types

Classify before review:

- stakeholder need
- user requirement
- system requirement
- software requirement
- interface requirement
- functional requirement
- quality or non-functional requirement
- performance requirement
- security requirement
- safety requirement
- operational requirement
- constraint
- validation criterion

## Approval Outcomes

| Outcome | Meaning |
|---|---|
| `can_approve` | Clear, typed, traceable, verifiable, validatable, and metadata-ready |
| `revise` | Useful requirement, but wording, metadata, trace, or V&V needs work |
| `block` | Unsafe as authority due to ambiguity, conflict, unverifiability, or missing source |
| `human_decision` | Intent, scope, conflict, or exception cannot be inferred safely |
| `reclassify` | Useful text, but not a requirement |
