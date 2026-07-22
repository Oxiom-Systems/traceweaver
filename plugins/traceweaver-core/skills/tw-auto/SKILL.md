---
name: tw-auto
description: Advisory TraceWeaver workflow-profile and capsule router. It selects bounded child work but never implements directly.
argument-hint: "[task or accepted plan path]"
disable-model-invocation: false
---

<!-- TRACEWEAVER: file-role=advisory-profile-router; req=REQ-TW-082; req=REQ-TW-083; req=REQ-TW-084 -->

# TraceWeaver Auto

## Purpose

`tw-auto` is an advisory profile and capsule router. It is a read-only master:
it may inspect authority, select/freeze a workflow profile, create bounded child
capsules, record harness receipts, and return held results. It does not edit,
build, test, stage, commit, deploy, browse, dogfood, or implement as a fallback.
It has no direct implementation path.

## Profile Selection Before Any Builder Dispatch

Create one `tw-workflow-profile/1` profile from
`references/workflow-profile-template.yml` before dispatching a builder. Select
the first applicable profile deterministically:

| Profile | Selection | Required controls |
| --- | --- | --- |
| L0 | Documentation, generated, or mechanical no-behavior change | Deterministic check when applicable; no V&V and no multi-agent review. |
| L1 | Narrow low-consequence behavior | Compact authority reference, focused verification, fresh verifier, one independent reviewer. |
| L2 | Cross-module, API, data-flow, or deployment-facing behavior | Full work-item capsule, fresh verifier, one reviewer and at most one justified specialist. |
| L3 | Money, security, destructive action, release, external side effect, or unclear authority | Full V&V, strongest independent reviewer, explicit rollback, owner-held decisions; no more than three reviewer personas. |

The profile records risk, selected controls, child roles, model availability,
choice and rationale, reviewer cap, repair-cycle cap, deploy requirement,
dogfood requirement, estimated delivery, derived target/ceiling, revision, and
canonical hash. An unavailable model is recorded with its consequence and routes
to hold or a bounded child; `tw-auto` never implements as a fallback.

The profile becomes immutable at the first builder dispatch. A later control or
reviewer expansion returns `refused_profile_immutable`. Escalation creates a
new revision with an explicit reason and a new profile hash; it never mutates
the started revision silently.

## Harness Accounting

The orchestration harness, not a child, records monotonic time at every child
dispatch and return. Each child capsule declares its fixed category and maximum
timebox:

- `delivery`: implementation, focused verification, build, authorized
  deployment, or dogfood;
- `process`: authority, planning, coordination, generic review, validation,
  matrix/registry administration, or release evidence; and
- `unclassified`: counted as process until a reviewer resolves it.

Before dispatch, project the candidate's *full* timebox into its category.
`estimated_process_target_minutes = 0.25 * estimated_delivery_minutes`; at that
target, stop optional artifacts and duplicate reviews and choose delivery or a
held result. `estimated_process_ceiling_minutes = estimated_delivery_minutes`;
refuse a process child whose full-timebox projection crosses it. These are
in-flight planning guards, not terminal acceptance calculations.

Every receipt records profile revision/hash, category, child timebox, monotonic
elapsed time, cumulative process/delivery/unclassified time, actual ratio, and
next-child projection. At terminal evaluation,
`actual_process_minutes <= 0.25 * actual_delivery_minutes` meets the target.
Whenever `actual_process_minutes > actual_delivery_minutes`, return
`held_process_budget`, including delivery underrun. No in-task exception exists.

## Routing

1. Load approved authority and select/freeze the profile.
2. Create only the bounded capsule(s) permitted by its child roles and caps.
3. Dispatch a child; record harness dispatch/return receipts and apply the
   projection guards before every dispatch.
4. Route a builder capsule to `tw-work`; route verification, review, authorized
   deployment, and dogfood only to their profiled child roles.
5. At a hold, cap, unavailable-model, immutable-profile, or budget breach,
   return the precise held/refusal result. Do not expand the profile or take over
   child work.

## Output

Return the profile revision/hash and selected fields, child capsule routing,
monotonic receipts, estimate guards, actual accounting, and one truthful state:
`routed`, `refused_profile_immutable`, `refused_estimated_process_ceiling`, or
`held_process_budget`. Deployment and dogfood remain separate child receipts;
neither is implied by implementation or verification.
