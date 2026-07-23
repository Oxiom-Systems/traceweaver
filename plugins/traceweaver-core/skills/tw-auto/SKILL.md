---
name: tw-auto
description: Advisory TraceWeaver workflow-profile and capsule router. It selects bounded child work but never implements directly.
argument-hint: "[task or accepted plan path]"
disable-model-invocation: false
---

<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-082; req=REQ-TW-083; req=REQ-TW-084 -->
<!-- TRACEWEAVER: file-role=advisory-profile-router; req=REQ-TW-086; req=REQ-TW-087 -->
<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-056; trace=TRACE-TW-031; ver=VER-TW-040 -->

# TraceWeaver Auto

## Purpose

`tw-auto` is an advisory profile and capsule router. It is a read-only master:
it may inspect authority, select/freeze a workflow profile, create bounded child
capsules, record harness receipts, and return held results. It does not edit,
build, test, stage, commit, deploy, browse, dogfood, or implement as a fallback.
It has no direct implementation path.

## Project Bootstrap Routing

When project-local orchestration files are absent, `tw-auto` may route to the
deterministic `tw-setup` bootstrap helper. This is advisory routing only:
`tw-auto` does not create files or implement as a fallback. The helper creates
the master contract, bootstrap receipt, and workflow profile; authority drafts
remain held unless explicitly owner-authorized. The master remains read-only and
only a named capsule-bounded child role may activate. Until fresh host proof
exists, report `template_manual_launch_only`; deployment and Chrome dogfood are
separate authorized child receipts.

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

## Planning-Wrapper Route

Before any V&V or builder dispatch, the read-only master must route meaningful
work through a named planning child running `tw-plan`; it must not invoke raw
`ce-plan` directly or synthesize an implementation plan itself. Freeze the
selected profile revision/hash, permitted child roles, and selected model before
creating that planning capsule. The capsule must bind the baseline/authority
identity, requested scope, verification method, validation question, and held
claims to the same frozen profile used by later children.

The `tw-plan` child performs the requirements-quality and authority preflight,
then may delegate planning to the TraceWeaver-packaged `ce-plan` engine under
its own no-publication boundary. It returns either an authority-held result or a
plan whose accepted scope, verification/validation intent, and held claims are
bound to the frozen profile. The master records the child receipt and may route
proportional V&V only after that result is passable. A failed, unclear, stale,
or broadened planning result returns a held state; the master does not repair,
reinterpret authority, or bypass `tw-plan`.

## V&V Definition Phase

After a passable `tw-plan` result and before a builder or authority handoff, the
master dispatches a profiled `tw-vv-define` child. L0 records that V&V is not
applicable without exception ceremony; L1 creates one compact work-item capsule
with focused verification and one validation question; L2/L3 create the full
v1 capsule with L3 high-risk controls. The `tw-vv-define` child returns the
reviewed capsule and RED evidence reference bound to the frozen profile.

Only then may the master route the resolved `tw-authority-gate` child for the
specific builder handoff. Missing, unreviewed, or mismatched V&V evidence is a
held result; it never permits the master to implement, weaken the preflight, or
claim runtime enforcement.

## Delegated Workflow Routes

The master selects only the frozen, profile-permitted child route below. It
does not perform that route's work itself, and a child may not broaden the
approved scope, mutate authority, publish, deploy, or dogfood unless its
separate capsule explicitly permits the action.

- For unclear product direction, route a source-evidence child to `tw-strategy`
  before `tw-brainstorm`; for ideation requests, route `tw-ideate` before
  `tw-grill` or `tw-brainstorm`. An already approved implementation request may
  skip those source-evidence routes. Never invoke raw CE strategy or ideation.
- For a project assessment, route `tw-audit`; for unclear, contradictory, or
  changed requirements, route `tw-requirements-review` and/or
  `tw-authority-gate`. The master must not edit, reinterpret, or silently broaden requirements; when authority cannot be resolved, pause the loop and ask the stakeholder for the required decision.
- Use the planning child `tw-plan`, then the profile-proportional V&V child,
  then `tw-work` for a capsule-bounded implementation child. `tw-work` may use
  its packaged CE implementation engine, but the master never implements as a
  fallback.
- Route behavior/authority evidence to `tw-traceability-check`; route
  investigation to `tw-debug`; route learning evidence to `tw-compound` or
  `tw-compound-refresh`; route historical-session evidence to `tw-sessions`;
  and route browser or Xcode verification only to `tw-test-browser` or
  `tw-test-xcode` with requirement, trace, and verification IDs. Unlinked
  verification is exploratory or held, not completion evidence.
- Route code findings to `tw-code-review`, authority/document findings to
  `tw-doc-review`, and review feedback to `tw-resolve-pr-feedback`. A bounded finding repair is a new frozen child capsule; it never authorizes the master
  to repair code or authoring evidence itself.
- Route project bootstrap/diagnostics to `tw-setup` and isolated local workspace
  setup to `tw-worktree`. Host mutation, commits, pushes, PRs, tags, releases,
  deployments, and dogfood require their own authority and child role.
- `tw-commit` and `tw-commit-push-pr` are publication routes only. This master
  returns their held boundary and never stages, commits, pushes, opens a PR,
  tags, releases, or mutates a remote.

For behavior anchors, the implementation child may skip per-artifact ambiguous anchor writes and return `CTA-UNRESOLVED-ANCHOR-MAPPING`; that finding remains
visible while clear scoped work can continue. It is not permission for the
master to infer an anchor or claim completion.

## Review-Staging Closure Loop

After a child changes an approved work package, the master routes its bounded
traceability, code-review, and document-review children in profile order. The
master does not review; it carries only the frozen identity and receipts.

### Artifact-identity blockers

Review staging is allowed only after the relevant evidence is present in the
exact scoped file list and the review identity is coherent. Untracked authority
or plan files, split authority/evidence identities, or blocking findings return
held. The master records the clean review once when that identical review passes;
it does not repeat a clean review without a changed identity. A
housekeeping-only repair may run once within the frozen repair cap, but the
master must not review-stage around real blockers.

## Post-Work Review Closure

The master treats a successful `tw-work` return as a transition, not a terminal
state. Unless an authority or verification blocker is returned, continue after
the implementation child. Run or require `tw-traceability-check` through its
named child, then Run `tw-code-review` through its review child for
behavior-bearing changes. Run scoped `tw-doc-review` only when authority, plan,
matrix, status, hash, validation, or review evidence changed. These are child
routes, not user handoffs; returning only a manual review command is a post-work closure regression.

An explicit stop override such as "stop after implementation" stops those child
routes, reports review as held, and forbids a done or release-ready claim.
The publication-boundary wording such as "stop before commit/push/PR" is not that
override: review closure continues, then the master holds publication. It must not end with only the implementation summary; it returns the receipt facts, held boundary, and highest permitted next route.

## Approval-Only Stop Handoff

When the request is approval-only, the master records an approval-only authority stop and does not dispatch implementation. It returns the explicit boundary, authority state, and the highest-level next wrapper command that continues from the approved authority, or the human blocker when no child may proceed.

## Closure-Claim Validation Loop

For a request, plan, receipt, or review that uses complete, done, or accepted wording, the master routes the claim through the `tw-work` child, the structured acceptance result checker, `tw-traceability-check`, and the scoped review child. The required result must identify the requirement, evidence, owner, boundary, and next trigger. If the acceptance result is missing, invalid, or held, refuse complete/done/accepted wording and return a held validation receipt; creating runtime artifacts or treating fixture evidence as live proof remains held.

## Highest-Level Handoff Discipline

Normal flow keeps gates embedded in their owning wrapper: do not emit a lower
gate as a substitute for an executable child route. Standalone
`tw-requirements-review`, `tw-authority-gate`, or `tw-traceability-check` is
reserved for the diagnostic or authority exceptions above. Every terminal receipt
names the next permitted wrapper or the held condition.

## Routing

1. Load approved authority, select/freeze the profile, permitted child roles,
   and selected model, then create only the bounded capsules allowed by them.
2. Dispatch the planning child to `tw-plan`; record its dispatch/return receipt
   and apply the projection guards before every dispatch.
3. After a passable `tw-plan` result, route proportional V&V before a builder:
   L0 has no capsule and no exception
   ceremony; L1 routes one compact work-item capsule with focused verification
   and one validation question; L2/L3 route the full v1 capsule, with L3
   high-risk controls. Route a builder capsule to `tw-work`; route
   verification, review, authorized deployment, and dogfood only to their
   profiled child roles.
4. At a hold, cap, unavailable-model, immutable-profile, or budget breach,
   return the precise held/refusal result. Do not expand the profile or take over
   child work.

## Scoped Review and Terminal Routing

For a profiled review child, route only the review identity and fan-out defined
by `references/scoped-review-protocol.md`. The identity is baseline hash,
profile hash, changed-file digest, and verification digest. If it matches an
accepted review, route receipt reuse rather than another generic review;
matrix/status/projection-only changes do not create a new changed-file digest.

The master routes, but never performs, review, repair, deployment, browser
dogfood, or terminal acceptance. It enforces the profiled reviewer and repair
caps in the child capsule: one routine independent reviewer, at most two active
reviewers, at most three personas, validators only for P0/P1 or disputed P2,
and no more than two repair cycles. It routes P0/P1 repair, the contested-P2
path, and `held_no_progress`; routine P2/P3 do not gain an extra cycle.

Route terminal reporting to `references/terminal-receipt-template.yml`. Report
`ready_for_authorized_deploy` when only authorized deployment evidence remains,
`held_dogfood` when required browser dogfood evidence remains, and `complete`
only when every required fact has passed. Never infer deployment or dogfood from
implementation, verification, or review.

## Output

Return the profile revision/hash and selected fields, child capsule routing,
monotonic receipts, estimate guards, actual accounting, and one truthful state:
`routed`, `refused_profile_immutable`, `refused_estimated_process_ceiling`,
`held_process_budget`, `held_no_progress`, `ready_for_authorized_deploy`, or
`held_dogfood`. `complete` is a child-receipt result only, never a master
inference. Deployment and dogfood remain separate child receipts; neither is
implied by implementation or verification.
