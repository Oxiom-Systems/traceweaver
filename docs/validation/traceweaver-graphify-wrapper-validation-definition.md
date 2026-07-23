---
id: VAL-TW-032
title: Optional Graphify Wrapper Validation Definition
status: passed_owner_accepted_representative_scenario
date: 2026-07-23
owner: Oxiom Systems
requirements:
  - REQ-TW-089
  - REQ-TW-090
trace: TRACE-TW-064
---

# Optional Graphify Wrapper Validation Definition

## Validation Question

Does opportunistic Graphify use make TraceWeaver orientation and impact work
more useful without making Graphify feel mandatory, authoritative, or noisy?

## Intended Use And Context

A contributor runs normal TraceWeaver wrapper workflows in a repository. The
machine may have no Graphify installation, may have Graphify without a local
graph, or may have a usable graph. The contributor should receive relationship
context where it helps and the same source-based TraceWeaver outcome where it
does not.

## Representative Scenario

The owner reviews two walkthroughs of the same bounded code change:

1. Graphify is unavailable. `tw-plan` and `tw-work` continue from repository
   sources and report a concise installation recommendation.
2. Graphify is installed. Planning/review run a scoped graph search, `tw-work`
   refreshes once after focused verification, and the terminal receipt shows
   the root, explicit graph path, commands, and outcomes without treating them
   as authority. If the changed files include semantic-backed documents, the
   receipt reports `semantic_refresh_held`.

## Acceptance Criteria

- Both walkthroughs reach the same TraceWeaver authority, verification,
  validation, and review boundary.
- The Graphify-present walkthrough surfaces at least one useful relationship or
  explicitly records `no_useful_graph_context`; it does not invent an edge.
- A successful code/AST update does not claim changed Markdown or other
  semantic-backed content is fresh; it reports `semantic_refresh_held` until a
  separately authorized semantic refresh exists.
- The Graphify-absent walkthrough does not stop, downgrade, or mislabel the
  underlying TW result.
- The owner judges the recommendation and receipts concise enough that they do
  not add a new manual loop.
- No walkthrough treats graph output as a requirement, source-code fact,
  verification result, validation evidence, review pass, or completion gate.

## Rater Profile

- Name/role: TraceWeaver owner and primary workflow user.
- Relationship to work: requester and decision owner; not the implementation
  agent.
- Independence: independent of the wrapper edits and deterministic smoke.
- Representativeness: directly represents the user deciding whether Graphify
  reduces orientation effort without becoming mandatory process.

## Evidence Path

The executed scenario and owner disposition are recorded in
`docs/validation/traceweaver-graphify-wrapper-results.md` and the two structured
acceptance results for REQ-TW-089 and REQ-TW-090.

## Current Decision

`pass` for the bounded representative scenario. The owner reviewed both
walkthroughs and explicitly accepted them at `2026-07-23T07:38:48Z`. The broad
exploratory query's noise and version warnings remain recorded limitations.
Live-host behavior, automatic semantic freshness, release, deployment, and
general productivity remain outside this validation decision.
