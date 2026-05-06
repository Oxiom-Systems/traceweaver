---
id: TW-VAL-2026-05-05-SKILL-BEHAVIOR-AUDIT
title: TraceWeaver Skill Behavior Audit
status: unit1_behavior_contracts_structured_findings_fixture_patch_code_review_passed_authority_doc_review_passed_tw_skill_behavior_fixture_smoke_passed_code_review_passed_authority_doc_review_passed_active_host_tw_traceability_check_structured_runtime_passed_authority_doc_review_passed_active_host_tw_code_doc_wrapper_file_access_observation_recorded_code_review_passed_authority_doc_review_passed
date: 2026-05-05
owner: Oxiom Systems
plan: docs/plans/2026-05-05-002-feat-tw-skill-behavior-audit-plan.md
---

# TraceWeaver Skill Behavior Audit

## Scope

This record defines the expected behavior contracts for the public TraceWeaver
skill surface before fixture and runtime audit work starts.

Reviewed authority sources:

- `requirements.md`
- `.traceweaver/intent-contract.yml`
- `traceability-matrix.md`
- `docs/validation/traceweaver-dogfood-audit.md`
- `docs/validation/traceweaver-u9-codex-runtime-discovery.md`
- `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- packaged `tw-*`, `lfg`, and selected wrapped CE continuity skill
  instructions

Private source-oracle boundary:

- The private TraceWeaver source-custody repo may be used only as private
  custody and internal quality-oracle context.
- Public TraceWeaver docs and runtime files must use original TraceWeaver
  wording.
- This record does not copy or closely paraphrase protected source material,
  source-specific tables, diagrams, source IDs, page references, or formal
  standards wording.
- This record does not claim IEEE, ISO/IEC/IEEE, INCOSE, or other formal
  standard conformance.

## Allowed Use

- Use this Unit 1 record as reviewed static behavior-contract and planning
  input for the TraceWeaver skill audit.
- Use the deterministic structured-finding fixture smoke as reviewed static
  TraceWeaver planning input. The prior code review returned P1 harness
  findings; those findings are patched, clean behavior code-review passed as
  `CE-CODE-REVIEW-2026-05-06-STRUCTURED-FINDINGS-HARNESS-CLEAN-001`, and
  authority doc-review passed as
  `CE-DOC-REVIEW-2026-05-06-SKILL-BEHAVIOR-STAGED-AUTHORITY-CLEAN-001`.
- Use the candidate REQ-TW-056 `tw-auto` closure-loop requirement and skill note
  as reviewed planning input only. `tw-auto` code review passed as
  `CE-CODE-REVIEW-2026-05-05-TW-AUTO-CLOSURE-LOOP-CLEAN-001`; runtime
  closure-loop behavior and human-decision pauses remain held until fixture and
  runtime proof exists.
- Use the deterministic TW skill behavior fixture smoke as reviewed static
  fixture input after clean behavior code review and authority doc review. It
  shows wrapper ordering, structured finding preservation, stale/blocked
  authority stops, `tw-auto` wrapper routing, and human-decision pause fixtures.
- Use the active-host `tw-traceability-check` structured runtime pass as
  constrained reviewed evidence. Authority doc review passed as
  `CE-DOC-REVIEW-2026-05-06-TW-SKILL-BEHAVIOR-ACTIVE-HOST-RUNTIME-CLEAN-001`.
  The proof reconciled the host `tw-traceability-check`,
  `tw-code-review`, `tw-doc-review`, and `tw-auto` skill copies, then required
  a live `codex exec` response to return the installed `tw-traceability-check`
  skill hash, installed structured-finding reference hash, and the expected P1
  blocked finding fields.
- Use the active-host `tw-code-review` and `tw-doc-review` prompt-satisfied
  file-access observations only as review-pending evidence. The extended smoke
  required installed wrapper skill hashes and returned the expected
  trace-blocked and stale-authority stop fields, but the updated harness still
  needs `/ce-code-review` and authority doc review before acceptance.
- Use the contracts to design runtime prompts.
- Do not use this record as proof that any active-host skill runtime behavior
  works beyond that constrained reviewed `tw-traceability-check`
  structured-finding invocation and the review-pending file-access
  observations.

## Held Claims

- real TW skill runtime invocation beyond the constrained Unit 11
  `tw-authority-gate` sentinel proof and the constrained reviewed
  active-host `tw-traceability-check` structured-finding proof plus the
  code-review-passed / authority-doc-review-passed reviewed held `tw-code-review`/`tw-doc-review`
  prompt-satisfied file-access observations, including `tw-requirements-review`,
  successful CE review delegation on clean wrapper inputs, `tw-auto`, `lfg`,
  and `tw-grill`;
- wrapped CE continuity runtime behavior beyond active-surface visibility,
  including `ce-debug`, `ce-commit`, and `ce-commit-push-pr`;
- project-level trace/matrix/gap/change/exception writes;
- code/test trace-anchor scanner behavior and dead-TDD classification;
- structured `tw-traceability-check` finding emission beyond the constrained
  active-host fixture, file/line anchoring, Codex `::code-comment` output, and
  wrapper integration;
- clean CE replacement;
- full CE 3.5.0 plugin parity or support for unclassified CE 3.5.0 surfaces;
- enforcing authority-gate behavior;
- slash-command or prompt availability claims;
- controlled publication-route behavior for stage, commit, push, PR, release, or
  publication;
- package-ready, release-ready, upstream-ready, R31, and unconstrained host
  support.

## Skill Source Hashes

| Skill | Source file | SHA-256 |
| --- | --- | --- |
| `tw-requirements-review` | `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | `f45459c1144646ece057f882da5eb730ff223ec725c19041d59cc3e3c9b7c4e1` |
| `tw-authority-gate` | `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | `93d78f160ee5dd78bd7ebf5dd9cff28e9c1ec3b8f5bfe2b25474b11512e475e3` |
| `tw-traceability-check` | `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` | `8cb10c0f9f2968d4eba6904acdff01a3a1d05fac8af2c98b35adcf3749702bb7` |
| `tw-traceability-check structured findings` | `plugins/traceweaver-core/skills/tw-traceability-check/references/structured-findings.md` | `e2b3eba34c000369f0edcc2d3e8fb5349ff247ae3822f33788563dfe3b521bdb` |
| `tw-code-review` | `plugins/traceweaver-core/skills/tw-code-review/SKILL.md` | `09fe45ab22639d46bcc6eb1af15b70c82daccc8a92f5e061301514e26ea716b4` |
| `tw-doc-review` | `plugins/traceweaver-core/skills/tw-doc-review/SKILL.md` | `49b0a74963ecdac8730c6f3622fff8b8c7507490b6eb7225917670b22e1aa2c0` |
| `tw-grill` | `plugins/traceweaver-core/skills/tw-grill/SKILL.md` | `666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90` |
| `tw-auto` | `plugins/traceweaver-core/skills/tw-auto/SKILL.md` | `3d96efca8712660a90272b3a488aa908993d59b7e082ed7a9e9c10ad406a290d` |
| `lfg` | `plugins/traceweaver-core/skills/lfg/SKILL.md` | `ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083` |
| `ce-debug` | `plugins/traceweaver-core/skills/ce-debug/SKILL.md` | `6785594317d403e2aac454d07eb1545d9e1f772c1f62606b0193728e1453864e` |
| `ce-commit` | `plugins/traceweaver-core/skills/ce-commit/SKILL.md` | `1ba086277e311a5f2630d2f6fc8c0bd0713b07a4a3f273949e22ea6ae893cdb2` |
| `ce-commit-push-pr` | `plugins/traceweaver-core/skills/ce-commit-push-pr/SKILL.md` | `21385f78158777fd726a3763e56f1b9a3183c4eb24bc3a374355820286fa996c` |

## CE 3.5.0 Source Surface Refresh

This audit uses the clean upstream Compound Engineering 3.5.0 worktree as the
current CE source surface for wrapper-backlog decisions.

| Field | Value |
| --- | --- |
| Source worktree | `/Users/hanneszietsman/CrypotAI/compound-engineering-plugin-main-3.5.0` |
| Upstream commit | `1f3c6466e4eb4e1b584c658953dfb1ca98dd3335` |
| Upstream tag observed | `compound-engineering-v3.5.0` / `cli-v3.5.0` |
| Source package version | `3.5.0` |
| Source package hash | `7c084cc6a323c0db2f504fea11629f8b023b6e6317cfac4a42143fce090d0a0b` for `package.json` |
| Codex plugin manifest hash | `57e1fc9fb85d953fd6b2f2e9f66c9d4e6596e2b93eca8f48aabbf1148c8a0ce5` |
| Source skill directories | 39 total: 38 `ce-*` directories plus upstream `lfg` |
| TraceWeaver packaged skill directories | 29 total, including 18 `ce-*` continuity directories plus TraceWeaver-native skills and aliases |
| Missing or not-TraceWeaver-packaged CE 3.5.0 directories | 20 `ce-*` directories |
| Authority status | Source-surface refresh recorded for review; full parity and clean replacement remain held. |

## CE 3.5.0 Wrapper Backlog Review

The backlog below is a authority-reviewed route classification. It does not approve
runtime behavior, publication behavior, clean replacement, or package parity.
Rows marked `selected_manual_continuity` are currently packaged CE-derived
entrypoints with TraceWeaver boundary text, but direct invocation remains legacy
manual continuity until a TW wrapper or fixture/runtime proof is accepted.

| CE surface | Current TraceWeaver state | Authority-reviewed route classification | Required next proof |
| --- | --- | --- | --- |
| `ce-brainstorm` | Packaged CE-derived skill | `selected_manual_continuity`; future source-evidence wrapper | Requirements/intent capture fixture and trace update proof. |
| `ce-plan` | Packaged with TraceWeaver boundary primer | `selected_manual_continuity`; future `tw-auto` planning phase | Authority-present and missing-authority planning fixtures. |
| `ce-work` | Packaged with TraceWeaver publication-gated boundary | `selected_manual_continuity`; future `tw-auto` work phase | Authority gate, trace write, verification, and controlled publication-route proof. |
| `ce-code-review` | Packaged CE-derived skill; `tw-code-review` candidate exists | `selected_manual_continuity`; preferred route through `tw-code-review` | Traceability preflight fixture plus CE review delegation proof. |
| `ce-doc-review` | Packaged CE-derived skill; `tw-doc-review` candidate exists | `selected_manual_continuity`; preferred route through `tw-doc-review` | Requirements-quality preflight fixture plus CE review delegation proof. |
| `ce-debug` | Packaged direct callable with TraceWeaver boundary | `selected_manual_continuity` | Bug-authority fixture, fix verification, and trace-gap proof. |
| `ce-commit` | Packaged direct callable with publication stop | `selected_manual_continuity`; future controlled publication route | Executable blocked-publication and approved-publication fixture proof before commit authority. |
| `ce-commit-push-pr` | Packaged direct callable with publication stop | `selected_manual_continuity`; future controlled publication route | Executable blocked-publication and approved-publication fixture proof before push/PR authority. |
| `ce-compound` | Packaged CE-derived skill | `selected_manual_continuity` | Learning-as-source-evidence and change-control fixture. |
| `ce-compound-refresh` | Packaged CE-derived skill | `selected_manual_continuity` | Stale-learning refresh fixture with no silent authority mutation. |
| `ce-resolve-pr-feedback` | Packaged CE-derived skill | `selected_manual_continuity` | Remote-mutation stop and feedback-to-authority fixture. |
| `ce-session-extract` | Packaged CE-derived skill | `selected_manual_continuity` | Source-evidence/provenance and redaction fixture. |
| `ce-session-inventory` | Packaged CE-derived skill | `selected_manual_continuity` | Session-source inventory provenance fixture. |
| `ce-sessions` | Packaged CE-derived skill | `selected_manual_continuity` | Prior-session context cannot override baseline fixture. |
| `ce-setup` | Packaged CE-derived skill | `selected_manual_continuity` | Environment-health read/write boundary proof. |
| `ce-test-browser` | Packaged CE-derived skill | `selected_manual_continuity` | Verification evidence linked to matrix row proof. |
| `ce-test-xcode` | Packaged CE-derived skill | `selected_manual_continuity` | Verification evidence linked to matrix row proof. |
| `ce-worktree` | Packaged CE-derived skill | `selected_manual_continuity` | Environment mutation boundary and no authority closure proof. |
| upstream `lfg` | TraceWeaver packages `lfg` alias to `tw-auto` | `alias_to_tw` | Runtime proof that alias delegates to `tw-auto`, not raw CE autopilot. |
| `ce-agent-native-architecture` | Not packaged | `held_future_surface` | Architecture advice must bind to approved design authority and verification. |
| `ce-agent-native-audit` | Not packaged | `held_future_surface` | Audit scoring must produce traceable evidence without silently creating authority. |
| `ce-clean-gone-branches` | Not packaged | `out_of_scope` for alpha | Reopen only if TraceWeaver accepts a git-hygiene requirement and mutation boundary. |
| `ce-demo-reel` | Not packaged | `held_future_surface` | Demo artifacts must be classified as validation evidence, not release proof. |
| `ce-dhh-rails-style` | Not packaged | `out_of_scope` for alpha | Reopen only for an accepted framework-style add-on requirement. |
| `ce-frontend-design` | Not packaged | `held_future_surface` | Design outputs must trace to UI requirements and validation scenarios. |
| `ce-gemini-imagegen` | Not packaged | `out_of_scope` for alpha | Reopen only with external-provider provenance and content-policy authority. |
| `ce-ideate` | Not packaged | `held_future_surface` | Idea outputs must route through `tw-grill`/requirements source-evidence controls. |
| `ce-optimize` | Not packaged | `held_future_surface` | Metrics targets, regression gates, and validation evidence must be accepted. |
| `ce-polish-beta` | Not packaged | `held_future_surface` | Runtime/UI iteration must update matrix and validation evidence. |
| `ce-product-pulse` | Not packaged | `held_future_surface` | Product telemetry must satisfy privacy/provenance and validation-source rules. |
| `ce-proof` | Not packaged | `held_future_surface` | Human proof loops must map to validation decisions and baseline authority. |
| `ce-release-notes` | Not packaged | `held_future_surface` | Release notes must be bounded by accepted U7/U9/R31 evidence and held claims. |
| `ce-report-bug` | Not packaged | `held_future_surface` | Bug reports must create defect/source records and trace to tests or gaps. |
| `ce-riffrec-feedback-analysis` | Not packaged | `held_future_surface` | User-feedback bundle analysis needs privacy/provenance and validation-source rules. |
| `ce-simplify-code` | Not packaged | `held_future_surface` | Simplification must preserve requirement links and dark-behavior controls. |
| `ce-slack-research` | Not packaged | `held_future_surface` | Connector research needs privacy/provenance and source-evidence controls. |
| `ce-strategy` | Not packaged | `held_future_surface` | Strategy may inform stakeholder intent but cannot become implementation authority directly. |
| `ce-update` | Not packaged | `held_future_surface` | TraceWeaver needs its own update policy before upstream CE update behavior is exposed. |
| `ce-work-beta` | Not packaged | `held_future_surface` | Delegate boundaries and trace evidence must be runtime-proven before exposure. |

## Behavior Contracts

| Skill | Required inputs | Required behavior | Allowed outputs | Fail-closed conditions | Evidence expectations |
| --- | --- | --- | --- | --- | --- |
| `tw-requirements-review` | Requirements, needs, acceptance criteria, planning statements, or proposed authority text. | Classify material into requirements, needs, ideas, assumptions, design notes, constraints, acceptance criteria, verification evidence, validation evidence, or traceability gaps. Identify weak, ambiguous, unverifiable, source-free, or unapproved statements before they become authority. | Authority-ready requirements, blocked requirements, required revisions, human decisions, V&V gaps, traceability impact. | A weak or unapproved requirement must not become implementation authority without an approved gap, accepted risk, design decision, or change-control exception with owner, reason, allowed use, and review condition. | Deterministic fixture cases for approved, weak, contradictory, unverifiable, and human-decision requirements; later runtime transcript comparing outputs to these classifications. |
| `tw-authority-gate` | Planned behavior or implementation task plus claimed authority, Intent Contract, requirements baseline, matrix, and relevant gap/change/exception records. | Identify the authority source, check authority quality, check the trace chain, and return proceed/reduce-scope/revise/human-decision/blocked before implementation starts. | Authority source, authority status, traceability status, missing evidence, allowed implementation scope, blocked claims, next required action. | Meaningful behavior must not proceed from task ID, agent interpretation, draft requirement, inferred requirement, stale hash, missing matrix link, missing validation question, or bare risk ID alone. | Fixture cases for authority-present, missing-authority, stale-authority, missing verification, and missing validation; runtime transcript for constrained host invocation when available. |
| `tw-traceability-check` | Plan, code, PR, document, release surface, or behavior claim plus claimed need, requirement, decision, risk, implementation links, verification, and validation evidence. | Check bidirectional traceability from need and approved authority through implementation, verification, and validation. Flag orphan behavior, dark-behavior candidates, stale evidence, missing links, unsupported done/release claims, missing code/test anchors, and dead-TDD candidates. Load the structured-finding contract and emit reviewer-style structured findings with severity, status, evidence, affected IDs, file/line anchors when available, claim impact, and remediation; use Codex `::code-comment{...}` when a stable file/line anchor exists. | Traceability status, authority chain, implementation links, verification status, validation status, gaps/risks, dark-code candidates, structured findings, optional Codex inline findings, allowed claims, held claims. | Engineering-complete, package-ready, release-ready, upstream-ready, or done claims must remain blocked or held when authority, implementation links, verification evidence, validation path, trace anchors, or structured blocker findings are missing or stale. | Fixture cases for complete trace, missing matrix row, dark behavior, missing verification, missing validation, unsupported release claim, missing code/test anchor, dead-TDD candidate, stale hash, and structured finding output. |
| `tw-code-review` | Code, scripts, skills, manifests, runtime harnesses, behavior-bearing diffs, authority files, matrix, verification evidence, and validation path. | Run or require `tw-traceability-check` before delegating to TraceWeaver-packaged `ce-code-review`; preserve structured TraceWeaver findings before CE findings; preserve CE reviewer usefulness while keeping review under TraceWeaver publication-gated constraints. | Traceability result, structured traceability findings, CE code-review findings, verification evidence, validation path, accepted scope, held claims, next step. | It must not treat raw `ce-code-review` as TraceWeaver closure when traceability is missing, blocked, stale, or held; it must not collapse structured TraceWeaver findings into prose-only summaries; it must stop before staging, committing, pushing, PR, publication, clean replacement, or release claims unless the controlled TraceWeaver publication route passes. | Fixture cases for traceability pass then CE review, missing traceability block, dark behavior block, structured finding preservation, and publication request held; runtime behavior remains held until proven. |
| `tw-doc-review` | Requirements, plans, matrices, Intent Contracts, validation records, evidence records, and authority-adjacent documents. | Run or require `tw-requirements-review` for requirements/authority text, require trace/hash/status consistency for authority records, preserve structured TraceWeaver findings before CE findings, then delegate to TraceWeaver-packaged `ce-doc-review` under publication-gated constraints. | Requirements-quality result, trace/hash/status consistency, structured traceability/hash/status findings, CE doc-review findings, accepted scope, held claims, next step. | It must not let weak, stale, untracked, unstaged, hash-split, or unreviewed documents become implementation authority; it must not collapse structured TraceWeaver findings into prose-only summaries; it must not stage, commit, push, PR, publish, or claim release readiness unless the controlled TraceWeaver publication route passes. | Fixture cases for clean requirement doc, weak requirement block, stale hash block, untracked authority file block, structured finding preservation, and accepted-scope held state; runtime behavior remains held until proven. |
| `tw-grill` | One selected idea, plan, design, or source artifact; available authority files and context docs when present. | Select bootstrap mode only when no authority set exists; otherwise use delta/gap mode. Inventory authority before broad questioning, classify unresolved coverage, inspect repo/context before asking, recommend answers, and route results to source evidence only. | Selected idea, mode, authority inventory, coverage classification, stakeholder intent, recommended answers, proposed requirements, gaps/risks/changes/exceptions, validation questions, must-not-change, source evidence, suggested next steps. | It must stop before implementation, planning authority, context/ADR edits, or baseline approval when authority is missing, changed, contradictory, weak, or source-evidence-only. It must not approve requirements or exceptions. | Fixture cases for bootstrap, delta/gap, covered idea, missing requirement, changed intent, contradiction, and dark-behavior candidate; later runtime transcript held until proven. |
| `tw-auto` | Feature description or plan path plus required authority files, matrix, Intent Contract, relevant gap/change/exception records, and TraceWeaver-packaged skill resolutions. | Orchestrate the CE-style loop under TraceWeaver control: load/bootstrap authority, require matrix, run authority gate, run CE work in publication-gated mode, update trace evidence, run traceability check, run reviews with capacity/backpressure handling, and allow publication only through the controlled publication route. Candidate REQ-TW-056 adds that `tw-auto` must own the task/plan closure loop itself: route work through `tw-authority-gate` and TraceWeaver-packaged `ce-work`, run `tw-code-review`/`tw-doc-review`, repair findings with bounded work cycles, refresh authority hashes/evidence, pause for user clarification when requirements are unclear, contradictory, incomplete, missing, or need material authority changes, and stop only at clean accepted state, explicit held/blocked state, or human-decision pause. Requirements review is required when authority, validation intent, release claims, or publication policy change; normal verified code publication does not require a new requirements gate when authority is unchanged. | Baseline/hash used, authority status, matrix status, changed/proposed files, verification evidence, review coverage, validation question, open gaps, dark behavior, structured findings, repairs attempted, held claims, stop reason, human-decision questions, suggested next step, and publication-route status when requested. | Stop for missing authority files, unclear/contradictory/incomplete requirements, missing packaged skill resolution, missing validation question, missing matrix, unresolved dark behavior, failed trace writes, failed verification, repeated blocking findings, pending required reviewers, no-progress repair cycles, unapproved requirement drift, or any unapproved need to commit/push/PR/release/claim replacement. | Fixture cases for missing authority, unclear requirement pause, contradictory requirement pause, changed authority, clean task closure, code-review finding repair, doc-review finding repair, unchanged-authority publication, missing skill resolution, missing matrix, trace-write failure, reviewer backpressure, no-progress stop, blocked publication, and approved publication route; later runtime proof required before accepting autonomous closure-loop behavior. |
| `lfg` | Same arguments as `tw-auto`, plus visible TraceWeaver-packaged `tw-auto` resolution. | Resolve and delegate to `tw-auto` with the same arguments. Do not run raw CE autopilot or direct CE work/review/commit paths. | The next step and evidence status reported by `tw-auto`. | If `tw-auto` is unavailable, stop and report a TraceWeaver automation-surface gap. Do not fall back to raw CE `lfg` or external CE plugin behavior. | Static/source inspection and deterministic delegation smoke are accepted; real runtime invocation remains held until separately proven. |
| `ce-debug` | Bug report, failing test, error message, or broken behavior plus approved defect/requirement/gap/exception source when local changes are requested. | Preserve CE debugging discipline while operating under TraceWeaver publication-gated mode: reproduce, investigate, identify root cause, propose or implement local fix only when authorized, report verification evidence and trace impacts. | Reproduction status, causal chain, fix plan or local changes, tests run, verification evidence, trace updates or trace gaps, held publication claims. | Stop before implementation when no approved defect/authority route exists; always stop before staging, committing, pushing, opening PRs, posting remote replies, or loading publication skills unless the controlled TraceWeaver publication route approves them. | Fixture cases for reproducible bug with authority, missing defect authority, local fix with tests, trace-gap after fix, and publication request blocked. Runtime behavior remains held beyond wrapper visibility. |
| `ce-commit` | Working tree state and requested commit intent plus completed TraceWeaver authority, traceability, verification, review, and publication-route gates. | Inspect status/diff and either draft a proposed commit message when the publication route is incomplete, or proceed only when the controlled publication route authorizes the exact staged tree and target. | Proposed commit message or authorized commit action, files included, missing gates, next required review or human decision. | Stop before branch mutation, staging, committing, or bypassing held publication state when authority changed, evidence is stale/split, review is blocked, or publication route is incomplete. | Static stop-marker inspection, blocked-publication smoke, and approved-publication fixture before commit authority is accepted. |
| `ce-commit-push-pr` | Working tree or PR-description context plus completed TraceWeaver publication-route gates when mutation is requested. | Draft PR text when description-only, or proceed to commit/push/PR only when the controlled publication route authorizes the exact staged tree, branch/remote, PR target, and credential boundary. | Draft PR title/body or authorized publication action, missing gates, publication-route status, next required review or human decision. | Stop before branch mutation, staging, commit, push, PR creation/update, remote comment/edit/resolve, or release claim when requirements/authority changed without review, traceability is stale, verification/review is incomplete, or the target/credential boundary is unapproved. | Static stop-marker inspection, PR-helper negative smoke, approved-publication fixture, and remote-boundary proof before publication behavior can be accepted. |

## Contract-To-Requirement Map

| Contract area | Primary requirements | Current status |
| --- | --- | --- |
| Requirements quality and authority promotion | REQ-TW-001; REQ-TW-002; REQ-TW-035; REQ-TW-042; REQ-TW-045; REQ-TW-050 | Approved authority exists for the general control; `tw-doc-review` explicit requirement is candidate with authority doc review passed. |
| Authority gate and fail-closed implementation boundary | REQ-TW-002; REQ-TW-035; REQ-TW-039; REQ-TW-043; REQ-TW-046 | Fixture evidence exists for selected cases; project-level runtime behavior held. |
| Traceability and dark-behavior detection | REQ-TW-005; REQ-TW-008; REQ-TW-038; REQ-TW-046; REQ-TW-049; REQ-TW-055 | Matrix remains authoritative; `tw-code-review` explicit requirement is candidate with authority doc review passed; structured traceability findings are candidate with authority doc review passed; code-level annotation and project-write behavior remain gaps. |
| Code/test trace anchors and dead-TDD detection | REQ-TW-038; REQ-TW-046; REQ-TW-049; REQ-TW-054 | Candidate requirement recorded for file/function/test anchors; scanner, matrix code-anchor table, fixture proof, and `tw-code-review` enforcement remain pending. |
| Structured traceability review findings | REQ-TW-005; REQ-TW-008; REQ-TW-046; REQ-TW-049; REQ-TW-050; REQ-TW-054; REQ-TW-055 | Candidate requirement and skill notes recorded for reviewer-style traceability findings; patched deterministic fixture proof has clean code review and authority doc review; active-host runtime, file/line anchoring beyond fixtures, Codex `::code-comment` output, and wrapper integration remain held. |
| Intent deepening as source evidence | REQ-TW-045; REQ-TW-048 | Static/advisory `tw-grill` scope approved; runtime and implementation-authority claims held. |
| Controlled CE-style automation | REQ-TW-033 - REQ-TW-044; REQ-TW-056 | Static/materialized guidance accepted; candidate task/plan closure-loop and human-decision pause requirement recorded; `tw-auto` runtime, autonomous closure-loop behavior, requirement-clarification pause behavior, and clean replacement held. |
| Wrapped CE continuity with controlled publication route | REQ-TW-014; REQ-TW-039 - REQ-TW-044; REQ-TW-049; REQ-TW-050; REQ-TW-053 | `tw-code-review`, `tw-doc-review`, `ce-debug`, `ce-commit`, and `ce-commit-push-pr` wrappers are packaged with TraceWeaver boundaries; runtime behavior and publication authority remain held beyond visibility until route proof passes. |
| Public-safe systems-engineering distillation | REQ-TW-021; REQ-TW-047 | Private source-oracle boundary active; formal conformance claims held. |

## Unit 1 Review State

```text
unit1_behavior_contract_status=authority_doc_review_passed_runtime_held
unit1_authority_doc_review_id=CE-DOC-REVIEW-2026-05-05-SKILL-BEHAVIOR-AUTHORITY-CLEAN-001
unit1_authority_doc_review_status=passed_no_findings
unit1_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
unit1_review_required_before_input=false
unit1_accepted_scope=reviewed_static_behavior_contracts_ce_350_inventory_wrapper_backlog_publication_route_code_anchor_requirement_structured_finding_fixture_and_tw_auto_closure_loop_planning_input_only
unit1_held_scope=real TW skill runtime invocation beyond the constrained Unit 11 tw-authority-gate sentinel proof, including tw-requirements-review, tw-traceability-check, tw-code-review, tw-doc-review, tw-auto, lfg, and tw-grill; wrapped CE continuity runtime behavior beyond active-surface visibility, including ce-debug, ce-commit, and ce-commit-push-pr; tw-auto task/plan closure-loop automation, automatic review-fix repair, and human-decision pause behavior for unclear/contradictory/missing requirements; code/test trace-anchor scanner behavior, matrix code-anchor table behavior, tw-code-review enforcement, and dead-TDD classification; structured tw-traceability-check finding emission, severity mapping, file/line anchoring, Codex code-comment output, and review-wrapper integration; project-level trace/matrix/gap/change/exception writes, clean CE replacement, enforcing behavior, slash-command or prompt availability, controlled publication-route behavior, release-ready, package-ready, upstream-ready, R31, and unconstrained host support
```

## Structured Findings Fixture State

```text
structured_findings_fixture_status=smoke_patch_code_review_passed_authority_doc_review_passed_constrained_active_host_runtime_recorded_authority_doc_review_passed
structured_findings_fixture_plan=docs/plans/2026-05-05-003-feat-structured-traceability-findings-plan.md
structured_findings_fixture_script=scripts/traceweaver-smoke-structured-findings
structured_findings_fixture_script_hash_sha256=d9a4ace96d868d45425a3ebbd34924221979eb098a7f079daf11d277248cfaed
structured_findings_fixture_prior_code_review_id=CE-CODE-REVIEW-2026-05-05-STRUCTURED-FINDINGS-CLEAN-001
structured_findings_fixture_code_review_id=CE-CODE-REVIEW-2026-05-06-STRUCTURED-FINDINGS-HARNESS-CLEAN-001
structured_findings_fixture_code_review_status=passed_no_findings_after_harness_patch
structured_findings_fixture_code_review_scope=scripts/traceweaver-smoke-structured-findings
structured_findings_fixture_code_review_coverage=main_thread_review_only_no_reviewer_subagents
structured_findings_fixture_authority_doc_review_id=CE-DOC-REVIEW-2026-05-06-SKILL-BEHAVIOR-STAGED-AUTHORITY-CLEAN-001
structured_findings_fixture_authority_doc_review_status=passed_no_findings_after_harness_patch
structured_findings_fixture_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
structured_findings_fixture_root=fixtures/structured-traceability-findings/
structured_findings_fixture_aggregate_sha256=a81c5e14f6f22ecd2749fd28c730e12169873085aa542b2ed3fa41f118af4fae
structured_findings_fixture_result=structured_findings_smoke=pass; structured_findings_total=8; structured_findings_p1_blockers=6; structured_findings_p2_held=2; structured_findings_real_repo_unchanged=pass
structured_findings_fixture_required_cases=complete_trace_pass, missing_authority_p1_blocked, stale_hash_p1_blocked, missing_matrix_row_p1_blocked, missing_verification_p1_blocked, missing_validation_p1_blocked, unsupported_release_p1_blocked, missing_anchor_p2_held, dead_tdd_p2_held
structured_findings_fixture_accepted_scope=patched_fixture_evidence_reviewed_static_input_plus_constrained_active_host_tw_traceability_check_runtime
structured_findings_fixture_held_scope=project-level trace writes, code/test trace-anchor scanner enforcement, dead-TDD classification as accepted behavior, tw-auto autonomous routing, publication behavior, clean CE replacement, enforcing behavior, release/package/upstream readiness, R31, and unconstrained host support
tw_auto_closure_loop_code_review_id=CE-CODE-REVIEW-2026-05-05-TW-AUTO-CLOSURE-LOOP-CLEAN-001
tw_auto_closure_loop_code_review_status=passed_no_findings
tw_auto_closure_loop_code_review_scope=plugins/traceweaver-core/skills/tw-auto/SKILL.md
tw_auto_closure_loop_code_review_coverage=main_thread_review_only_no_reviewer_subagents
tw_auto_closure_loop_authority_doc_review_id=CE-DOC-REVIEW-2026-05-05-SKILL-BEHAVIOR-AUTHORITY-CLEAN-001
tw_auto_closure_loop_authority_doc_review_status=passed_no_findings
tw_auto_closure_loop_accepted_scope=reviewed_candidate_requirement_and_static_skill_note_for_fixture_planning_only_no_runtime_project_writes_or_publication_until_fixture_runtime_proof
```

## TW Skill Behavior Fixture State

```text
tw_skill_behavior_fixture_status=active_host_tw_code_doc_wrapper_file_access_observation_recorded_code_review_passed_authority_doc_review_passed
tw_skill_behavior_fixture_script=scripts/traceweaver-smoke-tw-skill-behavior
tw_skill_behavior_fixture_script_hash_sha256=7a508162c9f919f0aa3938d2de24ade5ddebe1f4178647c9250a9bd5f1883307
tw_skill_behavior_fixture_root=fixtures/tw-skill-behavior/
tw_skill_behavior_fixture_aggregate_sha256=e0e9e3c2e7ab22ddc4e9d59dfb9b519a3da1ce8bb22532d87ecc9722a68ece51
tw_skill_behavior_fixture_result=tw_skill_behavior_smoke=pass; tw_code_review_traceability_preflight=pass; tw_code_review_structured_finding_preservation=pass; tw_code_review_blocked_trace_fixture=pass; tw_doc_review_requirements_preflight=pass; tw_doc_review_trace_hash_status_preflight=pass; tw_doc_review_stale_authority_fixture=pass; tw_auto_review_routing=pass; tw_auto_closure_loop_contract=pass; tw_auto_human_decision_pause_fixtures=pass; tw_traceability_check_structured_contract_static=pass; active_host_tw_traceability_check_structured_runtime=pass_constrained_fixture_structured_finding; active_host_tw_code_review_wrapper_runtime=held_prompt_satisfied_file_access_observation; active_host_tw_doc_review_wrapper_runtime=held_prompt_satisfied_file_access_observation
tw_skill_behavior_fixture_active_host_repo_tw_traceability_check_hash=8cb10c0f9f2968d4eba6904acdff01a3a1d05fac8af2c98b35adcf3749702bb7
tw_skill_behavior_fixture_active_host_observed_tw_traceability_check_hash=8cb10c0f9f2968d4eba6904acdff01a3a1d05fac8af2c98b35adcf3749702bb7
tw_skill_behavior_fixture_active_host_repo_structured_ref_hash=e2b3eba34c000369f0edcc2d3e8fb5349ff247ae3822f33788563dfe3b521bdb
tw_skill_behavior_fixture_active_host_observed_structured_ref_hash=e2b3eba34c000369f0edcc2d3e8fb5349ff247ae3822f33788563dfe3b521bdb
tw_skill_behavior_fixture_active_host_repo_tw_code_review_hash=09fe45ab22639d46bcc6eb1af15b70c82daccc8a92f5e061301514e26ea716b4
tw_skill_behavior_fixture_active_host_observed_tw_code_review_hash=09fe45ab22639d46bcc6eb1af15b70c82daccc8a92f5e061301514e26ea716b4
tw_skill_behavior_fixture_active_host_repo_tw_doc_review_hash=49b0a74963ecdac8730c6f3622fff8b8c7507490b6eb7225917670b22e1aa2c0
tw_skill_behavior_fixture_active_host_observed_tw_doc_review_hash=49b0a74963ecdac8730c6f3622fff8b8c7507490b6eb7225917670b22e1aa2c0
tw_skill_behavior_fixture_active_host_backup=/Users/hanneszietsman/.codex/traceweaver-core/host-reconciliation-backups/20260505T235311Z-tw-skill-behavior-runtime
tw_skill_behavior_fixture_active_host_artifact_dir=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/traceweaver-tw-skill-behavior.RISByM
tw_skill_behavior_fixture_active_host_exec_exit_code=0
tw_skill_behavior_fixture_active_host_tw_code_review_exec_exit_code=0
tw_skill_behavior_fixture_active_host_tw_doc_review_exec_exit_code=0
tw_skill_behavior_fixture_prior_code_review_id=CE-CODE-REVIEW-2026-05-06-TW-SKILL-BEHAVIOR-HARNESS-CLEAN-001
tw_skill_behavior_fixture_code_review_status=passed_no_findings
tw_skill_behavior_fixture_code_review_id=CE-CODE-REVIEW-2026-05-06-TW-SKILL-BEHAVIOR-WRAPPER-OBSERVATION-CLEAN-001
tw_skill_behavior_fixture_code_review_scope=scripts/traceweaver-smoke-tw-skill-behavior
tw_skill_behavior_fixture_code_review_coverage=main_thread_review_only_no_reviewer_subagents
tw_skill_behavior_fixture_authority_doc_review_status=passed_no_findings_after_wrapper_observation_code_review
tw_skill_behavior_fixture_authority_doc_review_id=CE-DOC-REVIEW-2026-05-06-TW-SKILL-BEHAVIOR-WRAPPER-OBSERVATION-AUTHORITY-CLEAN-001
tw_skill_behavior_fixture_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
tw_skill_behavior_fixture_active_host_authority_doc_review_status=passed_no_findings
tw_skill_behavior_fixture_active_host_authority_doc_review_id=CE-DOC-REVIEW-2026-05-06-TW-SKILL-BEHAVIOR-ACTIVE-HOST-RUNTIME-CLEAN-001
tw_skill_behavior_fixture_active_host_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
tw_skill_behavior_fixture_accepted_scope=reviewed_static_fixture_evidence_plus_constrained_active_host_tw_traceability_check_structured_runtime; reviewed active-host tw-code-review/tw-doc-review prompt-satisfied file-access observations recorded with code review and authority doc review passed as limitation evidence
tw_skill_behavior_fixture_held_scope=successful CE code/doc review delegation on clean wrapper inputs; tw-auto autonomous closure-loop behavior, automatic review-fix repair, human-decision pause behavior, and project-level trace writes; wrapped CE continuity runtime behavior; controlled publication, clean CE replacement, enforcing behavior, release/package/upstream readiness, R31, and unconstrained host support
```

## Manual TW Gate Run

`tw-requirements-review` was applied manually to the REQ-TW-053 publication
route update on 2026-05-05. Result: the requirement is a candidate requirement
with a clearer authority boundary after narrowing requirements review to
requirements/authority/validation-intent/release-claim/publication-policy
changes. It is not accepted implementation authority until formal doc review and
behavior proof pass.

`tw-traceability-check` was applied manually to the updated publication-route
chain. Result: REQ-TW-053 now links to ART-TW-040, TRACE-TW-026, ATP-TW-010,
RESULT-TW-010, and VER-TW-035. Held claims remain explicit for actual
publication behavior, release readiness, package readiness, upstream readiness,
clean replacement, R31, and unconstrained host support.

`tw-requirements-review` was applied manually to the proposed code/test
trace-anchor requirement on 2026-05-05. Result: the requirement is valid as a
candidate after narrowing scope to behavior-bearing files, selected high-level
functions, tests, fixtures, smoke scripts, explicit exceptions, scanner
behavior, and dead-TDD candidate detection. It is not accepted implementation
authority until formal authority doc review and later scanner/fixture proof pass.

`tw-traceability-check` was applied manually to the code/test trace-anchor
chain. Result: REQ-TW-054 links to ART-TW-041, TRACE-TW-027, ATP-TW-011,
RESULT-TW-011, and VER-TW-036. Held claims remain explicit for scanner behavior,
matrix code-anchor table behavior, code-review enforcement, and dead-TDD
classification until separate proof passes.

`tw-requirements-review` was applied manually to the proposed structured
traceability-finding requirement on 2026-05-05. Result: the requirement is valid
as a candidate after narrowing scope to traceability failures, severity/status
mapping, affected IDs, file/line anchors when available, claim impact, and
remediation. It is not accepted implementation authority until formal authority
doc review and later fixture/runtime proof pass.

`tw-traceability-check` was applied manually to the structured-finding chain.
Result: REQ-TW-055 links to the candidate chain ART-TW-042, TRACE-TW-028,
ATP-TW-012, RESULT-TW-012, and VER-TW-037, and to the implemented fixture proof
chain ART-TW-043, TRACE-TW-029, ATP-TW-013, RESULT-TW-013, and VER-TW-038.
Held claims remain explicit for active-host runtime behavior, project-level
trace writes, code-anchor enforcement, dead-TDD classification as accepted
behavior, `tw-auto` autonomous routing, `tw-auto` task/plan closure-loop
automation, human-decision pause behavior for unclear/contradictory/missing
requirements, and publication until separate proof
passes.

## Suggested Next Step

Proceed from the reviewed active-host `tw-code-review`/`tw-doc-review`
prompt-satisfied file-access limitation observations into fixture/runtime work for
`fixtures/tw-code-trace-anchors/`, the future code-trace-anchor scanner,
successful `tw-code-review`/`tw-doc-review` CE delegation on clean inputs, and
`tw-auto` closure-loop fixtures. Keep project-level writes, publication, clean
replacement, and release/package/upstream claims held until their proof gates
pass.
