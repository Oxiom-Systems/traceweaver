---
id: SRC-REQ-005
status: source_evidence_for_baseline_patch
date: 2026-05-01
owner: Oxiom Systems
review_evidence: pending /ce-doc-review
---

# TraceWeaver Grill Intent-Deepening Requirements

This record pins the workflow decision that a relentless interview step should
sit between ideation and brainstorming when a chosen idea still has unresolved
design branches, dependencies, assumptions, or stakeholder-intent ambiguity.

## Captured Intent

R1. Ideation generates and ranks candidate directions. The upstream CE
`ce:ideate` skill is one possible source, but it is optional external context in
the TraceWeaver alpha unless separately selected for packaging. Ideation does not
by itself resolve all design branches or make requirements authoritative.

R2. TraceWeaver should provide an optional `tw-grill` skill after ideation and
before brainstorming. `tw-grill` interviews the user relentlessly about one
selected idea until the design tree, dependencies, open assumptions, and
validation questions are explicit enough for structured brainstorming.

R3. `tw-grill` must answer codebase-discoverable questions by inspecting the
repository instead of asking the user.

R4. For each user-facing question, `tw-grill` must provide a recommended
answer so the user can accept, modify, or reject a concrete position rather
than answer from a blank page.

R5. `tw-grill` output is source evidence only. It may produce decided intent,
open assumptions, proposed requirements, gaps, risks, validation questions,
must-not-change boundaries, and suggested next steps, but it must not create
implementation authority. Only reviewed requirements, approved exceptions, or
accepted baseline updates become authority.

R6. The intended TraceWeaver workflow becomes:

```text
idea
-> ideation source
-> tw-grill
-> ce:brainstorm
-> tw-requirements-review
-> authority-baseline record
-> ce-plan
-> tw-authority-gate
-> ce-work
-> tw-traceability-check
-> review
-> verification
-> validation
-> ce-compound
```

R7. `tw-grill` should save or recommend saving its interview output as a
source-evidence artifact such as
`docs/interviews/YYYY-MM-DD-topic-grill.md` so downstream requirements review
can reconstruct why a requirement or exception was proposed.

R8. `tw-grill` should be inspired by the documentation-aware grilling pattern
from Matt Pocock's MIT-licensed `grill-with-docs` skill and include visible
attribution. The TraceWeaver package must not imply copied upstream source text
unless the upstream MIT notice is included as required.
The upstream source observed for this decision is:
`https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs`
at commit `b843cb5ea74b1fe5e58a0fc23cddef9e66076fb8`.

R9. While grilling, `tw-grill` should inspect existing domain documentation such
as `CONTEXT.md`, `CONTEXT-MAP.md`, and ADRs. It should challenge terminology
conflicts, sharpen fuzzy language, cross-check claims against code, and propose
context or ADR updates only as source evidence unless reviewed into authority.

R10. `tw-grill` should support two operating modes. Bootstrap mode applies when
no controlled requirements, traceability matrix, or Intent Contract exists yet,
and should extract the first stakeholder intent, candidate requirements,
validation questions, non-goals, risks, and authority bootstrap gaps. Delta/gap
mode applies when any controlled authority already exists, and should compare
the selected idea, plan, design, or source artifact against that authority
before asking broad interview questions.

R11. In delta/gap mode, existing approved authority should narrow the interview
rather than disable it. `tw-grill` should classify coverage for each meaningful
proposed behavior or decision as covered, weak requirement, missing intent,
missing requirement, missing verification, missing validation, contradiction,
changed intent, or dark-behavior candidate.

R12. In delta/gap mode, user-facing questions should focus only on missing,
weak, stale, contradictory, or dark-behavior coverage. For each question,
`tw-grill` should provide a recommended answer and route the result to a
proposed requirement, clarification question, gap, change request, exception
candidate, accepted-risk candidate, rejected assumption, validation question, or
must-not-change update.

R13. Delta/gap mode output should be source evidence for the authority delta
only. It should not restate the entire baseline unless needed to explain a
conflict, and it should not promote the delta into implementation authority
without `tw-requirements-review` and an accepted baseline or exception update.

## Non-Authority Boundary

The `tw-grill` interview is not a shortcut around `tw-requirements-review`.
Answers gathered during the interview are stakeholder-context evidence until a
later requirements review and authority-baseline update accepts them.

## Suggested Next Step

Add `tw-grill` as an optional packaged TraceWeaver skill, include upstream
credit, update the master requirements and traceability matrix, then keep runtime
and release claims held until install/review evidence is recorded.
