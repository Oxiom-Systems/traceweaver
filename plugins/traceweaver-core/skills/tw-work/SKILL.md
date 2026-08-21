---
name: tw-work
description: TraceWeaver-controlled implementation worker. Use when applying approved implementation work through TraceWeaver authority, code-anchor authoring, verification, traceability, and no-publication controls before review.
argument-hint: "[approved task or plan path]"
---

<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-057; trace=TRACE-TW-042; ver=VER-TW-054 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-056; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-065; trace=TRACE-TW-048; ver=VER-TW-061 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-078; trace=TRACE-TW-059; ver=VER-TW-079 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-066; trace=TRACE-TW-050; ver=VER-TW-063 -->
<!-- TRACEWEAVER: file-role=review-series-repair-wrapper; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->
<!-- TRACEWEAVER: file-role=optional-graphify-work-refresh-route; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: entrypoint=graphify_post_verification_refresh; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->

# TraceWeaver Work

## Purpose

Implement approved behavior through the TraceWeaver work loop. `tw-work` is the
TraceWeaver implementation facade that `tw-auto` calls instead of raw `ce-work`.
It keeps the familiar CE worker as the underlying coding engine, but adds the
TraceWeaver responsibilities that must happen during implementation: authority
visibility, trace-anchor authoring, verification evidence, matrix evidence, and
V&V-definition/preflight/no-publication handoff back to `tw-auto`.

Use `tw-work` for behavior-bearing code, scripts, skill instructions, fixtures,
smokes, manifests, runtime harnesses, and validation artifacts. Do not use it to
approve or rewrite requirements.

## Review-Series Repair Contract

When work belongs to a review series, resolve the packaged sibling
`tw-auto/references/scoped-review-protocol.md` and resume the supplied
generation through `tw-auto/scripts/traceweaver-review-series`. Preserve the
frozen scope, series, current repair-verification attempt, ledger digest,
eligible blocker set, evidence history, four semantic identity inputs, audit
metadata, and remaining budget. Record this `tw-work` call as a distinct
dispatch under the current attempt.

Repair only retained in-scope blockers and genuine in-scope repair regressions.
Never open discovery, reset the budget, widen scope, or turn non-blocking
wording/style debt into another cycle. One routine repair-and-rerun is
available. One final cycle requires the controller's owner- or approved
change-control-authority receipt bound to the series, retained fingerprint,
severity/context, authorization reason, and final-cycle limit.

## Native Child Routing

Before any TraceWeaver-owned native Codex builder, verifier, or repair call,
run the packaged sibling `tw-auto/scripts/traceweaver-route-native-child`
against the canonical workflow-profile contract. Use only its explicit
dispatch parameters and finalize its receipt with independent host/execution
attestation. A held route makes child output ineligible; never inherit a model,
fall back, or edit an imported CE-derived body to bypass the overlay.

## Required Inputs

Before changing meaningful behavior, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/trace-anchor-authoring.md`
- any relevant `.traceweaver/` task, gap, change, exception, trace, or evidence
  records

If authority is missing, contradictory, stale, incomplete, or requires a material
requirements change, stop with a human-decision pause. Do not infer, rewrite, or
broaden requirements to make implementation possible.

## Authority-Gate Preflight

`tw-work` is the only implementation entrypoint. Immediately before it delegates
to the TraceWeaver-packaged `ce-work` engine, it must run or require
`tw-authority-gate` for the exact approved task, plan, changed-file scope,
requirement IDs, trace IDs, verification target, validation question, baseline
ID/hash, and must-not-change boundaries.

The authority-gate result must be explicit in the work output. If the gate is
missing, stale, contradictory, incomplete, split between staged and working
state, tied to unreviewed requirements, or cannot identify the allowed
implementation scope, `tw-work` must stop before packaged `ce-work` and return
the exact missing authority or human decision needed.

When the gate passes, `tw-work` passes the approved authority capsule to
packaged `ce-work` in no-publication mode. Packaged `ce-work` remains the coding
engine only; it does not approve authority, traceability, review completion, or
publication.

## Workflow Profile Preflight

Before the first builder mutation, `tw-work` requires a frozen
`tw-workflow-profile/1` profile created by `tw-plan`. It must identify the
deterministically selected L0-L3 risk, selected controls, child roles, model
availability/choice/rationale, reviewer cap, repair-cycle cap, deploy and
dogfood requirements, estimate-derived process guards, revision, and canonical
profile hash. The profile is immutable after the first builder dispatch.

`tw-work` must not silently add controls, reviewers, or a model fallback after
building starts. It returns `refused_profile_immutable` unless a new profile
revision records the changed profile and an escalation reason. A model that is
unavailable is a hold or delegated-child condition, never an implementation
fallback.

The orchestration harness, rather than a child, owns monotonic dispatch/return
receipts. It classifies each child as `process`, `delivery`, or `unclassified`;
unclassified elapsed time counts as process until a reviewer resolves it.
Delivery is implementation, focused verification, build, authorized deployment,
and dogfood. Process includes authority/planning/coordination, generic review,
validators, matrix/registry administration, and release evidence. Before a
dispatch the harness projects the candidate's full maximum timebox. At the
estimated target it stops optional artifacts and duplicate review; at the
estimated ceiling it refuses another process child. Terminal actuals always
apply: `actual_process <= 0.25 * actual_delivery` meets target, and
`actual_process > actual_delivery` returns `held_process_budget`, including a
delivery underrun. There is no in-task exception.

## V&V Definition Preflight

Before any mutation, `tw-work` uses the frozen profile's proportional
precondition for the exact work item. L0 has no V&V capsule and no exception
ceremony; it may proceed only with the profile's applicable deterministic check.
L1 consumes exactly one compact work-item capsule (authority reference, focused
verification, one validation question, expected evidence) and must not demand a
per-requirement validation document. L2/L3 consume the full v1 preconditions:

1. a full V&V definition capsule produced by `tw-vv-define`, linked to the matrix,
   and accepted by the skill-local checker with review evidence:

   ```sh
   plugins/traceweaver-core/skills/tw-vv-define/scripts/traceweaver-check-vv-capsule \
     --root <repo-root> \
     --capsule <capsule-path> \
     --require-review-passed
   ```

   The capsule must satisfy the checker schema: each behavior-bearing
   requirement has its REQ/TRACE/VER/VAL IDs, executable verification artifact,
   expected-failing (RED) evidence, validation artifact, and review-passed
   evidence path. `tw-work` verifies this prior evidence; it does not create
   the RED artifact at work time.
2. an L1 compact capsule accepted by the same checker. Its
   `schema_version` is `tw-vv-compact/1`, its `workflow_profile` is `L1`, and
   it has no `requirements[]` or `validation_artifact` fan-out fields.

3. for L3 only, the full capsule also contains non-empty rollback and
   owner-decision high-risk controls; missing controls are
   `held_missing_control`.

For L1-L3, a missing, invalid, non-review-passed where required, or
wrong-work-item capsule is a stop before mutation and before packaged `ce-work`.
Return control to `tw-auto`, which routes the work item back to
`tw-vv-define`; do not infer a capsule, backfill RED evidence, or treat a later
test run as a substitute.

<!-- Provenance: rigor mechanism adapted in original TraceWeaver wording from
obra/superpowers test-driven-development and verification-before-completion,
pinned d884ae04; source text is not copied. -->

### Implementation Without V&V Definition: Refusal Rule

For this static/advisory alpha contract, a behavior-bearing implementation has
no authorized work-loop entry when its reviewed V&V definition or scoped
exception is absent. Stop and name the missing capsule or decision. This is a
policy/skill-instruction contract, not runtime enforcement; any claim of a
mechanically enforced host block remains held pending runtime proof.

### V&V Preflight Red Flags

| Rationalization | TraceWeaver gate consequence |
| --- | --- |
| "the test can come after" | Stop: the expected-failing verification evidence belongs to `tw-vv-define`; route back before mutation. |
| "this change is too small" | Stop unless the recorded scope is genuinely docs-only, mechanical, generated, vendored, or otherwise covered by a scoped REQ-TW-076 decision. |
| "I'll write the capsule retroactively" | Stop: a capsule assembled after mutation cannot demonstrate the required pre-mutation V&V definition sequence. |
| "the implementation is obvious" | Stop: obviousness does not replace linked acceptance criteria, RED evidence, validation definition, or review evidence. |

After the preflight passes, preserve the existing test-first evidence discipline:
use the same pre-authored verification artifact to confirm its RED evidence and
then rerun the same focused verification artifact after implementation to record
the passing result. Do not fake evidence for pure documentation, mechanical
formatting, generated, vendored, or no-behavior refactor changes; record the
scoped decision instead. Non-test or post-implementation-only verification is
allowed only when the approved requirement permits it or an approved
exception records owner, scope, reason, review condition, and next step.

## Closure-Claim Validation Gate

When `tw-work` sees a requirement closure claim in task text, plan output,
worker result text, review summaries, or proposed matrix/status updates, it must
route the claim through FAT/ATP-style structured acceptance evidence before
allowing any complete/done/accepted wording.

Closure-claim phrases include `complete`, `closed`, `done`, `accepted`,
`closure`, `requirement satisfied`, and explicit requirement-status updates.
For each detected claim, identify the requirement ID, stakeholder need ID,
trace ID, ATP/result/verification/validation IDs, owner, evidence locations, and
current baseline or artifact version when known.

If a linked structured acceptance result already exists, run
`tw-traceability-check`'s `traceweaver-check-acceptance-results` helper. A pass
allows the work loop to continue to normal traceability and review. A blocked
result stops done/closure wording and returns the structured finding.

If enough reviewed authority exists to scaffold evidence but no result artifact
exists, create a validation result template under `docs/validation/` and propose
matching `traceability-matrix.md` rows for the artifact, trace, ATP, result,
verification, validation, and Code Anchor Evidence where applicable. This
static/advisory template creation is not a runtime enforcement claim.

If the closure claim lacks enough authority to scaffold safely, stop with a
held-validation record requirement. The stop must name the owner, missing
fields, blocked closure claim, closure boundary, evidence location to create,
and next trigger.
This is a stop with a held-validation record requirement before any
complete/done/accepted wording.

## Workflow

1. Confirm the run is Implementation Gate Mode and a frozen workflow profile
   exists. If it is Authority Baseline Mode or Publication Mode, return control
   to `tw-auto` with that classification.
2. Run the authority-gate preflight above before implementation.
3. Run the V&V Definition Preflight for behavior-bearing changes. If the
   review-passed V&V capsule or recorded scoped not-applicable/approved
   exception is absent or invalid, stop before mutation and return control to
   `tw-auto` for routing to `tw-vv-define`.
4. Apply the closure-claim validation gate when the work package claims a
   requirement, task, PR, or implementation is complete, accepted, closed, or
   done. Missing or invalid structured acceptance evidence blocks completion
   wording even if implementation verification passed.
5. Invoke the TraceWeaver-packaged `ce-work` implementation flow in
   no-publication mode with the approved authority capsule, verification target,
   changed-file scope, and matrix-update requirement.
6. Build the changed-file scope from behavior-bearing files plus linked
   tests/fixtures/smokes, including newly created untracked files. Keep authority
   docs out of the code-anchor scanner unless they are explicitly part of the
   implementation review scope.
7. Run the skill-local code-anchor scanner from `tw-traceability-check` on that
   changed-file scope before review.
8. Run the automatic trace-anchor authoring loop below for scanner findings
   where the mapping is unambiguous. When only a per-artifact anchor mapping is
   ambiguous, skip that one anchor mutation, record an unresolved mapping
   candidate, and keep applying unrelated clear anchors. This is a mandatory
   `tw-work` work-loop step, not a manual follow-up for the user.
9. Rerun the scanner after authoring with any unresolved mapping records. If the
   scanner remains blocked, stop with the structured traceability finding and
   return control to `tw-auto`.
10. Run the required verification commands for the implemented slice, including
   the same focused verification artifact whose expected-failing (RED) evidence
   was recorded during `tw-vv-define`.
11. When implementation, verification, scanner, and trace/matrix updates are
   complete, `tw-work` may perform review-staging for an explicit scoped file
   list that belongs to this work item. Review-staging is allowed only to make
   `tw-code-review` / `tw-doc-review` artifact identity coherent. It is not
   publication authority.
12. Return control to `tw-auto` with changed files, staged files when
   review-staging was used, verification evidence, source-anchor changes,
   matrix evidence changes, open gaps, held claims, and the next review command.

## Authoring Rules

- Author module/file premise anchors, behavior-entrypoint anchors, and
  verification anchors at useful hierarchy boundaries.
- Do not annotate every helper or private subfunction unless it independently
  carries requirement-level behavior or a reviewed finding requires it.
- Write source anchors and matrix Code Anchor Evidence together, or accept
  neither as complete.
- Treat V&V-definition verification artifacts as first-class verification
  anchors for behavior-bearing changes. Tests added only after implementation
  may close the work only when an approved exception explains why the
  pre-mutation V&V definition was not applicable.
- Pause without mutation when task authority, requirement meaning, verification
  authority, accepted scope, or material authority is unclear, contradictory,
  incomplete, stale, missing, or implies a requirements change. When only one
  artifact's anchor mapping is ambiguous, skip that anchor write, record the
  unresolved mapping, and let `tw-traceability-check` block traceability-complete
  and review/publication claims.
- Generated, vendored, cosmetic, mechanical, or externally owned files may omit
  anchors only when matrix evidence or an approved exception records why.

## Automatic Trace-Anchor Authoring Loop

`tw-work` owns trace closure during implementation. After the underlying
TraceWeaver-packaged `ce-work` step changes behavior-bearing code, scripts,
skills, fixtures, smokes, or tests, `tw-work` must:

1. Derive the changed-file scope from staged changes, unstaged tracked changes,
   and untracked files, then narrow it to implementation files and linked
   verification artifacts for the current task.
2. Resolve the authority mapping for each target from accepted requirements,
   Intent Contract/matrix rows, task capsule, and verification evidence:
   `REQ-ID`, `TRACE-ID`, `VER-ID`, artifact role, target path, and anchor level.
3. Run `traceweaver-check-code-anchors` in implementation mode for that scoped
   file list.
4. For missing file-role, entrypoint, or verification anchors with an
   unambiguous mapping, run `traceweaver-author-code-anchors` in
   `--mode apply --work-loop` mode. Use file-level anchors for module/file
   premises, entrypoint anchors for requirement-bearing behavior entrypoints,
   and verification anchors for tests/fixtures/smokes. For per-artifact mapping
   ambiguity, run the helper with `--skip-ambiguous-mapping` and
   `--unresolved-mappings <path>` so it records the skipped target without
   mutating the source or matrix.
5. Accept the authoring result only when the helper writes the source anchor and
   the matching `traceability-matrix.md` Code Anchor Evidence row in the same
   transaction.
6. Rerun `traceweaver-check-code-anchors` on the same scoped files, passing the
   unresolved mapping JSONL when any anchor write was skipped. Require either a
   pass or an explicitly held `CTA-UNRESOLVED-ANCHOR-MAPPING` finding before
   handing the work to `tw-code-review`; unresolved mappings block review
   acceptance, done, traceability-complete, and publication claims.
7. Include all changed implementation files, verification artifacts,
   `traceability-matrix.md`, and any scoped evidence/status files in
   review-staging. Do not stage unrelated authority docs or historical baseline
   debt.

Pause without mutation and return control to `tw-auto` when task authority,
requirement meaning, verification authority, accepted scope, or material
authority is missing, ambiguous, contradictory, stale, points to a missing
verification ID, or would require changing requirements. When the ambiguity is
limited to a specific artifact's anchor mapping, do not pause the whole work
loop: skip that source/matrix mutation, record the unresolved mapping candidate,
continue other unambiguous anchors, and require `tw-traceability-check` to emit a
blocking structured finding. In a pause, report the candidate target files,
missing authority fields, scanner findings, and the exact human decision needed.
Do not hand-edit around a helper pause or invent requirement IDs to make the
scanner pass.

## Anchor Authoring Command Contract

When the scanner reports a missing anchor and the authority mapping is
unambiguous, `tw-work` must use the TraceWeaver-packaged authoring helper rather
than hand-editing source comments and matrix rows separately:

```sh
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-author-code-anchors \
  --root <repo-root> \
  --mode apply \
  --work-loop \
  --target <changed-file> \
  --matrix traceability-matrix.md \
  --anchor-level <file|entrypoint|verification> \
  --requirement <REQ-ID> \
  --trace <TRACE-ID> \
  --verification <VER-ID> \
  --role <artifact-role>
```

Use `--mode propose` first when the target mapping needs human inspection. Use
`--mode apply --work-loop` only after the requirement, trace, verification,
role, target, and current-anchor state are all clear. For behavior entrypoints,
also pass `--entrypoint <name>`. If the helper returns `pause`, `refused`, or
any non-zero status, stop without manual fallback mutation and return the
structured pause reason to `tw-auto`. If the helper returns
`skipped_unresolved_mapping`, keep the recorded JSONL evidence and rerun
`traceweaver-check-code-anchors --unresolved-mappings <path>` so the unresolved
mapping blocks acceptance as a structured finding.

## Optional Graphify Post-Verification Refresh

After focused verification passes, and only when the work package changed
behavior-bearing or trace-bearing artifacts, locate the packaged sibling
`tw-auto/scripts/traceweaver-graphify-advisory` helper and run `refresh --root
<project-root>` with one `--changed-file` argument per relevant changed path.
The helper owns exactly one root-bound `graphify update .` before review handoff.
Include its root, explicit graph path, command, and outcome in the work receipt.

Graphify failure does not block verification, traceability, or review: record
`graphify_status=degraded` or `not_installed` and continue from authoritative
repository sources. If semantic-backed documents changed, retain
`semantic_refresh_held`; a code/AST update does not prove those documents are
fresh. Graphify output is derived and is not authority. It is not verification,
validation, review evidence, or a completion gate.

## Review-Staging Boundary

`tw-work` may run `git add` only for an explicit scoped review handoff after
approved-authority implementation work is complete, verification and
`tw-traceability-check` have passed or produced an explicitly held condition,
and the exact changed-file list is known. The handoff may come from `tw-auto`
when `tw-auto` has identified split review identity as the only blocker and
passes a work-package ID, review route, and exact scoped file list. It must stage
only files it changed or files whose hash/status was refreshed for that same
review gate.

For a `tw-auto` review-staging handoff, `tw-work` must verify every requested
path belongs to the current work package, changed implementation files, linked
tests/fixtures/smokes, Code Anchor Evidence rows, or scoped status/evidence
records for the same review gate. It returns the staged path list, any refused
paths, the review route to rerun, and held claims back to `tw-auto`.

`tw-work` must stop without staging when requirements, authority, verification,
trace, target files, or review scope are unclear, contradictory, stale,
incomplete, or imply a material authority change.

Review-staging does not allow commits, branches, pushes, PRs, release claims,
publication, remote mutation, plan-complete claims, or publication-wrapper
delegation. Those actions can happen only after `tw-auto` routes through the
controlled TraceWeaver publication gate.

## Highest-Level Handoff Discipline

`tw-work` owns authority preflight, trace-anchor authoring, scanner reruns,
verification, and review-staging for the implementation slice. Do not return
standalone `tw-authority-gate` or `tw-traceability-check` as the normal next
user command after work.

When work is ready for review, return the highest-level next wrapper:
`/tw-code-review ...` for changed code-like files, scoped `/tw-doc-review ...`
only for normative semantic-authority changes, or return control to
`/tw-auto ...` when the automation loop should continue. Status/hash/receipt/projection
bookkeeping uses the deterministic `mechanical_closure` route and dispatches no
reviewer after exact accepted-review reuse. Recommend standalone lower gates only for an
explicit diagnostic, audit, baseline-authority review, or a human-decision pause
where no higher wrapper can proceed.

## Output

Return:

- authority used and baseline hash
- changed files
- trace-anchor authoring status
- matrix Code Anchor Evidence status
- verification commands and results
- structured acceptance result status when a closure claim was detected
- scanner result after implementation
- staged files, when review-staging was used
- open traceability findings or held claims
- whether work may proceed to `tw-code-review` or must pause for user input
- highest-level next TraceWeaver wrapper command or exact human decision
