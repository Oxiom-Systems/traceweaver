# TraceWeaver 0.3 Unit 4 — Proposed REQ-TW-078 Evidence Updates

Status: proposed evidence rows only. This document does **not** modify
`traceability-matrix.md` or promote REQ-TW-078. The controlled matrix remains
the authority record; an orchestrator may apply these updates only after the
required requirements and scoped document reviews accept the applicable
candidate authority.

## Scope

Unit 4 adds static/advisory routing only:

- `tw-work` consumes a review-passed V&V definition capsule before a
  behavior-bearing mutation, or a recorded scoped REQ-TW-076 not-applicable or
  approved-exception decision;
- `tw-plan` hands accepted behavior-bearing plans to `tw-vv-define` before
  `tw-work`;
- `tw-auto` places `tw-vv-define` between planning and its authority/work loop;
- the deterministic behavior smoke records the missing-capsule stop route.

No row below supports runtime refusal, host enforcement, release readiness,
clean replacement, dynamic discovery, or publication claims. Those claims stay
held.

## Proposed `TRACE-TW-059` Update

Apply this as a replacement for the placeholder Unit 1 implementation/evidence
content after the required review gates pass:

| Trace ID | Implementation | Verification | Validation | Status | Gap / Debt |
| --- | --- | --- | --- | --- | --- |
| TRACE-TW-059 | `plugins/traceweaver-core/skills/tw-work/SKILL.md` V&V Definition Preflight and refusal/red-flag policy; `tw-plan`/`tw-auto` routing to `tw-vv-define`; `fixtures/tw-skill-behavior/tw-work-missing-vv-definition/` | VER-TW-079 | VAL-TW-021 | Static/advisory fixture and instruction evidence proposed; runtime refusal/enforcement held | Matrix merge remains held until the candidate authority's required reviews and orchestrator merge. |

## Proposed `VER-TW-079` Evidence Row

| ID | Requirement | Method | Procedure / Command | Tested Ref | Result | Evidence Path | Date / Session | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VER-TW-079 | REQ-TW-078 | Static wrapper-instruction inspection and deterministic fixture smoke | `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior` | `tw-work` V&V Definition Preflight, refusal rule/red-flag table, `tw-plan`/`tw-auto` routing, and missing-capsule fixture | Pass for static/advisory fixture evidence after Unit 4 green run | `scripts/traceweaver-smoke-tw-skill-behavior`; `fixtures/tw-skill-behavior/tw-work-missing-vv-definition/worker-result.txt`; Unit 4 commit records | 2026-07-22 | The smoke demonstrates policy-text/fixture behavior only. It does not prove a live host blocks writes or invokes the routing dynamically. |

## Proposed `VAL-TW-021` Evidence Row

| ID | Source Need | Scenario / Intended Use | Stakeholder / Representative | Acceptance Signal | Evidence Path | Result | Owner | Deferred Trigger / Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAL-TW-021 | NEED-TW-001; NEED-TW-002; NEED-TW-003; NEED-TW-005; NEED-TW-008 | A behavior-bearing work item reaches `tw-work` without its V&V definition capsule. | Oxiom Systems | The fixture states `stop_before_mutation`, blocks `ce-work`, and routes through `tw-auto` to `tw-vv-define`; the smoke verifies the corresponding static policy text. | `fixtures/tw-skill-behavior/tw-work-missing-vv-definition/worker-result.txt`; `scripts/traceweaver-smoke-tw-skill-behavior` | Held for representative/live validation | Oxiom Systems | Static/advisory evidence only. A host-runtime proof and representative user validation are separate held gates. |

## Provenance Note

The `tw-work` refusal and red-flag mechanism is original TraceWeaver wording
adapted from the implementation-discipline mechanism inspected in
obra/superpowers at pinned commit `d884ae04`. No source sentences are copied.

## Orchestrator Merge Conditions

1. Confirm the reviewed authority status for REQ-TW-078 and its matrix proposal.
2. Run the listed smoke from the final reviewed commit.
3. Record the final commit/evidence identifiers in the controlled matrix.
4. Keep runtime/enforcement wording held unless a separate active-host proof
   records it.
