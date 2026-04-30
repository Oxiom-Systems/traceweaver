# Operating Model

## Primary Question

Is this work ready to proceed through the next gate?

## Decision Rules

- Reviews are event-driven: run the gate when entrance criteria are satisfied,
  not merely because work wants to proceed.
- Entry criteria decide whether review can start.
- Exit criteria decide whether work can proceed.
- Missing evidence is a hold unless an approved exception scopes it out.
- Open actions must be classified as blocker, accepted exception, follow-up, or
  not relevant.
- Review mode must be explicit: `lite`, `normal`, or `audit`.
- A clean result from one lens does not clear other required lenses.
- No response is not approval.

## Decisions

| Decision | Meaning |
|---|---|
| `proceed` | Criteria met and evidence supports next step |
| `hold` | Work cannot proceed until blockers or missing evidence are resolved |
| `reduce` | A smaller approved scope may proceed |
| `reject` | Candidate is not acceptable for this gate |

## Handoff Rules

| Gate Issue | Next Skill |
|---|---|
| Candidate ref inconsistent | `baseline-configuration-control` |
| Missing trace authority | `systems-engineering-traceability` |
| Requirement not good enough | `requirements-reviewer` |
| Open risk/gap/waiver | `risk-gap-change-control` |
| Missing proof plan | `verification-planner` / `validation-planner` |
