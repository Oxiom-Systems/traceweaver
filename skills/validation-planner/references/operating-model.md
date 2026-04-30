# Operating Model

## Primary Question

How will we prove we built the right thing?

## Decision Rules

- Validation checks the result against stakeholder need, intended use, and
  operating context.
- Verification can inform validation, but it does not replace it.
- Representative context matters: the rater, stakeholder, user, operator, or
  approved proxy must be identified.
- The relationship of the rater to the work must be visible.
- Acceptance criteria must describe observable success in context.
- Deferred validation is allowed only as a controlled gap with owner, trigger,
  expected evidence, and release impact.
- Failed or partial validation drives change control or scope reduction.

## Validation Evidence Types

- stakeholder review
- representative-user scenario
- operational dry run
- acceptance test with representative actor
- beta/adoption telemetry with target and interpretation rule
- approval package review

## Handoff Rules

| Validation Issue | Next Skill |
|---|---|
| Need unclear | `needs-and-requirements-capture` |
| Requirement mismatch | `requirements-reviewer` |
| Implementation proof missing | `verification-planner` |
| Deferred validation | `risk-gap-change-control` |
| Release decision needed | `technical-review-and-audit-gate` |
