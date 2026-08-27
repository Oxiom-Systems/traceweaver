---
name: tw-auto
description: TraceWeaver consolidated delivery controller. Use for approved work that should remain in one Sol main context through planning, implementation, verification, trace updates, integrated review, and at most one batched repair.
argument-hint: "[task or accepted plan path]"
disable-model-invocation: false
---

<!-- TRACEWEAVER: file-role=workflow-skill; req=REQ-TW-082,REQ-TW-083,REQ-TW-084,REQ-TW-086,REQ-TW-087; trace=TRACE-TW-031; ver=VER-TW-040 -->
<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->
<!-- TRACEWEAVER: file-role=consolidated-delivery-controller; req=REQ-TW-056,REQ-TW-082,REQ-TW-083,REQ-TW-086,REQ-TW-087; trace=TRACE-TW-031,TRACE-TW-067; ver=VER-TW-040,VER-TW-087 -->
<!-- TRACEWEAVER: file-role=review-series-orchestrator; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->
<!-- TRACEWEAVER: file-role=optional-graphify-receipt-router; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: entrypoint=graphify_child_receipt_carry; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->

# TraceWeaver Auto

## Purpose

Complete normal approved work in one retained Sol main session. The current
session owns the authority lock, compact plan, proportional V&V/test-first
setup, implementation, focused verification, trace/matrix updates, and any one
batched repair. `tw-plan` and `tw-work` are embedded phases of this invocation,
not planning or builder child dispatches.

The normal clean path has two model turns: this Sol primary and one integrated
Terra reviewer. Do not create planning, verification, traceability, specialist,
document-review, or repair children around that path.

## Skill Execution Contract

Run `<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-auto`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`.
This resolves the checklist; it is not a model dispatch.

Load the canonical `consolidated_delivery` block from
`<skills-root>/tw-auto/references/workflow-profile-template.yml`. Use
`<skills-root>/tw-auto/scripts/traceweaver-route-convergence` when a deterministic route or dispatch
count is needed.

## Required Inputs

Before meaningful behavior changes, load and cite:

- the user's current task and direct corrections;
- applicable accepted requirements or approved exception;
- `requirements.md`, `traceability-matrix.md`, and
  `.traceweaver/intent-contract.yml` when present;
- the verification method, validation question, current baseline identity, and
  held claims; and
- one frozen L0-L3 workflow profile.

Use accepted unchanged authority without reopening requirements review. If
authority is missing, contradictory, stale, or must materially change, stop
with the exact human decision or authority-only route. Never infer permission
from a skill, plan, implementation, fixture, or previous review.

## Bounded Convergence Window

When accepted work needs repeated repair and focused verification without a
semantic scope change, load
`<skills-root>/tw-auto/references/bounded-convergence-window-guide.md`. Record
one owner decision with frozen authority, candidate scope, allowed repairs,
static source-closure preflight, verification/pass condition, attempt budget,
stop conditions, evidence closure, and separate holds.

Keep the authority plane immutable during the window. An anticipated in-scope
failure consumes the attempt budget and remains in this invocation; it does not
reopen `tw-authority-gate`. Exit to change/authority control only for a semantic
scope or authority change, unsafe or out-of-scope finding, or exhausted budget.
Append attempt evidence and consolidate terminal status after the window exits;
never let gate or result outputs mutate the candidate they inspect.

## Consolidated Sol Delivery

For normal approved behavior or a mixed code/document candidate, keep these
phases in this retained Sol main context:

1. Lock the applicable authority, accepted scope, must-not-change boundaries,
   risk level, verification method, validation question, and publication hold.
2. Make a compact implementation plan in working context. Do not create a plan
   artifact, separate `tw-plan` invocation, planning child, or plan document
   review unless the user explicitly requested a standalone plan.
3. Perform proportional V&V/test-first setup. L0 uses an applicable
   deterministic check; L1 uses one compact work-item definition; L2/L3 use the
   required full controls. Run deterministic validators mechanically. Do not
   dispatch a separate planner, V&V author, or verifier.
4. Implement through the `tw-work` rules in this same context, including
   focused verification and trace-anchor/matrix updates. Do not dispatch a
   builder or separate `tw-work` child.
5. Freeze the initial semantic candidate once after implementation,
   verification, and trace updates. The frozen scope includes behavior, linked
   tests, relevant normative documents, traceability, and verification inputs;
   it excludes later receipts and bookkeeping.
6. Dispatch one integrated independent reviewer through `tw-code-review`.

The first mutation freezes the profile. A material scope or authority change
requires an explicit revised authority/profile decision; it is not a repair.

## Native Reviewer Routing

The integrated reviewer is the only native child on the normal clean path.
Before dispatch, run `tw-auto/scripts/traceweaver-route-native-child` using the
frozen profile. Request explicit `gpt-5.6-terra`, risk-selected effort, and
`fork_turns=none` or a bounded positive value. Finalize the receipt only with
trusted host/execution attestation.

The v1 invariant remains: the main model is `gpt-5.6-sol`, every native child
is `gpt-5.6-terra`, and Sol is prohibited for subagents. Terra unavailability
returns `held_model_unavailable`; model inheritance and silent fallback are
prohibited.

## Integrated Candidate Review

Use one reviewer identity and one review-bearing dispatch for the frozen mixed
candidate. That reviewer covers code, linked tests, relevant normative docs,
traceability, correctness, and every triggered security, reliability,
performance, API, data, or platform concern. Personas are lenses applied in
that one context, not extra agents. Imported `ce-code-review` and
`ce-doc-review` checklists must not spawn nested reviewer subagents.

`tw-code-review` is the combined mixed-candidate review route. Do not run
`tw-doc-review` as a second review merely because the implementation candidate
contains plans, skill instructions, matrices, requirements links, or other
normative documents. Standalone `tw-doc-review` is reserved for an
authority-only or document-only semantic change with no mixed implementation
candidate.

Use `scripts/traceweaver-review-series` to retain the candidate identity,
reviewer identity, blockers, and evidence. Exact accepted-review reuse and
post-terminal mechanical closure dispatch zero reviewers.

## One Batched Repair

If the integrated reviewer reports eligible P0/P1 or blocking P2 findings:

1. Collect all eligible blockers before editing.
2. Resume this same Sol main context and repair them in one batch.
3. Rerun only the focused deterministic verification and trace checks affected
   by the batch.
4. Freeze at most one repaired revision as a targeted delta in the same review
   series, then resume the same reviewer identity once for closure of those
   blockers and repair regressions.

The normal automatic path is at most two reviewer turns, one reviewer identity,
one repair batch, and four counted model turns. Non-blocking P2/P3 findings are recorded as
debt and do not reopen work. The same blocker without relevant evidence
progress returns `held_no_progress`; do not start a fresh reviewer or repair
series.

Do not infer another repair from severity. The existing REQ-TW-037/056/057
severe-blocker exception requires a fresh explicit owner or approved
change-control decision under the scoped-review protocol and is outside this
automatic convergence budget.

## Mechanical Terminal Closure

Load the canonical `references/tw-graph-lifecycle.md` and apply it without
duplicating or broadening its lifecycle policy.

After terminal review only, write hashes, receipts, status, matrix projections,
indexes, and generated views atomically or through deterministic helpers. These
outputs are audit metadata, excluded from semantic/behavior review identity,
and can never trigger a reviewer or repair. Reuse and `mechanical_closure`
dispatch zero models.

Optional Graphify refresh happens at most once after focused verification and
before review handoff in this same Sol context; carry its receipt without
dispatching a child. Authoritative `tw-graph refresh/check` happens at most once
after terminal acceptance as zero-model mechanical closure. Both outputs are
derived navigation/audit state, not authority, verification, validation, or a
reason to reopen review.

## Exception Routes

- A user-requested standalone plan may invoke `tw-plan` and produce a plan
  artifact. Review that artifact only if it changes normative authority.
- Authority-only or document-only semantic work may invoke `tw-doc-review` once.
- Unclear or changed authority may invoke `tw-requirements-review` or
  `tw-authority-gate`; an unchanged accepted authority citation does not.
- Explicit diagnostics may invoke `tw-traceability-check`, `tw-audit`, or
  `tw-debug`. Normal delivery performs their applicable checks internally.
- Bootstrap, worktree, browser, Xcode, deployment, dogfood, and publication
  remain separately bounded routes when genuinely required.

Do not fall back to an external raw CE path. Packaged CE-derived methods may be
used only inside their owning TraceWeaver phase and authority boundary.

## Scoped Review and Terminal Routing

Use `<skills-root>/tw-auto/references/scoped-review-protocol.md` and
`scripts/traceweaver-review-series` for the one integrated review series. Keep
semantic authority, behavior, and verification identity separate from command,
session, branch, index, receipt, status, generated-view, Graphify, and other
mechanical metadata.

Completion language requires the applicable structured acceptance,
verification, validation, traceability, and integrated-review result. A clean
review does not imply publication, deployment, dogfood, active model routing,
served-model attestation, savings, or release readiness.

## Publication Boundary

Commit, push, PR, merge, tag, release, deployment, and dogfood stay held unless
separately authorized for the exact action. A request to continue through
review does not authorize publication. Preserve the 0.5.0 shadow-only model
governance boundaries.

## Output

Return the authority lock, compact plan, changed scope, focused verification,
trace updates, frozen candidate identity, reviewer identity/turn count,
batched-repair status, mechanical closure result, held claims, and the highest
permitted next action. State `held_no_progress`, the missing authority, or the
separate publication decision when work cannot truthfully proceed.
