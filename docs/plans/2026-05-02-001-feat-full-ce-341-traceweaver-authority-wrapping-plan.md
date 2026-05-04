---
title: Full CE 3.4.1 TraceWeaver Authority Wrapping
type: roadmap
status: active
date: 2026-05-02
origin: requirements.md
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 89fb1dc59cf561302932cbc7658abc7cf3b333a9d5955f609f23efd091a87535
traceweaver_mode: advisory
---

# Full CE 3.4.1 TraceWeaver Authority Wrapping

## Overview

Roadmap the full CE 3.4.1 TraceWeaver authority-wrapping program after the
narrow static/advisory alpha. This artifact authorizes Unit 0, Unit 1, and the
Unit 2 branch selected by the Unit 1A product checkpoint only. Broad Unit 2
wrapper architecture/policy is executable only when the checkpoint supports
full-surface wrapping or an accepted product exception authorizes it. Units 3-6
are non-executable roadmap sketches until later plans are created from the
accepted Unit 0-2 evidence.

The goal is not to copy all CE skills blindly. The goal is to preserve the
simple CE method while making TraceWeaver the authority layer:

```text
idea
-> intent deepening
-> brainstorm
-> requirements baseline
-> plan
-> authority gate
-> work
-> traceability check
-> review
-> verification
-> validation
-> compound learning
```

This plan keeps the current branch's distinction intact:

```text
tw-auto = TraceWeaver-controlled path
direct ce-* = delegate, stop, be absent, or be proven read-only support
full CE replacement = future roadmap outcome, not the current static alpha
```

## Authorization Boundary

This document is a roadmap with a bounded executable front slice:

- Unit 0, Unit 1, and the Unit 2 branch selected by the Unit 1A product
  checkpoint may proceed after `requirements.md` review/hash verification is
  clean or accepted held conditions are recorded.
- Units 3-6 describe the intended rollout sequence, but they do not authorize
  wrapper implementation, runtime replacement claims, U7/U9 handoff, or broad
  package-surface changes by themselves.
- Each later wrapper family must get a separate plan or accepted amendment after
  the applicable Unit 1 inventory branch and Unit 2 policy evidence are reviewed.
- Binding future-plan policy created by this roadmap comes from the `Roadmap
  Acceptance For Later Plans` section and from accepted Unit 2 policy/evidence
  decisions that this plan explicitly names as prerequisites for later plans.
  The later unit sketches remain illustrative; later plans may change file lists
  and implementation approach, but must either satisfy those binding gates or
  amend them through accepted requirements and traceability evidence.
- Current canonical baseline verification command:
  `perl -0pe 's/^(baseline_hash_sha256: ).*$/baseline_hash_sha256: CANONICAL_HASH_PLACEHOLDER/m' requirements.md | shasum -a 256`.
  As of this plan patch, both the working tree and staged `requirements.md`
  resolve to `89fb1dc59cf561302932cbc7658abc7cf3b333a9d5955f609f23efd091a87535`.

## Requirements Trace

| Requirement | Planning implication |
| --- | --- |
| REQ-TW-033 | Group TraceWeaver authority controls with CE-compatible workflow stages so users do not need to remember separate gates. |
| REQ-TW-034 | Keep `lfg` from bypassing TraceWeaver; familiar automation names must route through `tw-auto` or an approved wrapper. |
| REQ-TW-035 - REQ-TW-040 | Automation may continue only while authority, verification, traceability, severity, and stop-before-publication gates remain clear. |
| REQ-TW-041 | TraceWeaver must become a standalone CE-based plugin, while direct CE invocations remain legacy/manual-continuity only if they delegate, stop, are absent, or are proven read-only support until wrapped. |
| REQ-TW-042 | Fresh installs need authority bootstrap before implementation. |
| REQ-TW-043 | Direct CE skills do not close TraceWeaver authority, traceability, verification, or validation by themselves. |
| REQ-TW-044 | Selected CE method steps must be wrapped or repackaged with TraceWeaver systems-engineering controls. |
| REQ-TW-045 | Idea and brainstorm flows must create or update root `requirements.md`, root `traceability-matrix.md`, `.traceweaver/intent-contract.yml`, and gap/change/exception records. |
| REQ-TW-046 | Traceability checks must flag untraced, duplicate, unnecessary, or logical-but-uncaptured behavior as dark behavior or a proposed authority change. |
| REQ-TW-047 | Public systems-engineering guidance must use original TraceWeaver wording and must not copy protected standards text or overclaim conformance. |
| REQ-TW-048 | `tw-grill` remains optional post-ideation source evidence until reviewed and promoted. |

## Intent Capsule

```yaml
task_id: TW-TASK-FULL-CE-341-AUTHORITY-WRAPPING
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 89fb1dc59cf561302932cbc7658abc7cf3b333a9d5955f609f23efd091a87535
authority_status: planning_only_runtime_held
authorized_by:
  - REQ-TW-033
  - REQ-TW-034
  - REQ-TW-035
  - REQ-TW-036
  - REQ-TW-037
  - REQ-TW-038
  - REQ-TW-039
  - REQ-TW-040
  - REQ-TW-041
  - REQ-TW-042
  - REQ-TW-043
  - REQ-TW-044
  - REQ-TW-045
  - REQ-TW-046
  - REQ-TW-047
candidate_sources:
  - REQ-TW-048
intent_served:
  - INTENT-TW-001
  - INTENT-TW-002
  - INTENT-TW-003
  - INTENT-TW-004
  - INTENT-TW-005
  - INTENT-TW-007
  - INTENT-TW-008
verification_required:
  - full CE 3.4.1 skill inventory with hashes and support closure
  - wrapper classification review
  - package manifest and install smoke
  - direct-entry bypass checks
  - wrapper runtime smoke for the approved path
  - matrix updates for every behavior-bearing wrapper
validation_question: Can a user install TraceWeaver and use familiar CE-style workflow steps while every behavior-changing step is governed by TraceWeaver authority, traceability, verification, validation, and change control?
must_not_change:
  - Do not claim clean CE replacement until runtime wrapper proof exists.
  - Do not expose raw CE entrypoints as authority-enforced workflows.
  - Do not copy protected standards text or claim IEEE/INCOSE conformance.
  - Do not let commit, push, PR, release, or update flows bypass TraceWeaver gates.
open_assumptions:
  - Upstream CE 3.4.1 source pin remains `d685f0794863a73ae3ca3620d2ae747510e9eaa0`.
  - Current TraceWeaver static alpha remains advisory until U9 runtime proof.
```

## Classification Model

| Class | Meaning | Allowed claim |
| --- | --- | --- |
| `wrapped` | TraceWeaver owns the user-facing entrypoint and invokes or reuses the CE method only after loading authority, matrix, verification, validation, and next-step controls. | TraceWeaver-controlled after static and runtime proof. |
| `aliased` | Familiar CE name delegates to a TraceWeaver wrapper, such as `lfg` delegating to `tw-auto`. | Compatibility name only; behavior claim belongs to the wrapper. |
| `hidden` | Packaged only as an internal implementation component or support dependency; not advertised and not directly invokable as a behavior-bearing workflow. | Internal support only after installed-surface audit proves it cannot bypass wrappers. |
| `held` | Useful CE capability, but blocked until source, dependency, permission, runtime, or authority proof is complete. | No user-facing claim beyond held scope. |
| `out-of-scope` | Not part of the standalone TraceWeaver alpha/replacement surface unless a later requirement adds it. | No package or workflow claim. |

### Classification Rubric

Each CE skill classification must be falsifiable. Unit 1 may not accept a row
that only says a skill is "not alpha" or "needed later." Every row in the
current/core inventory or authorized full-surface inventory must include:

- source evidence: upstream skill path or plugin-surface path, version, hash, and
  the support-closure depth required by the target class;
- authority evidence: accepted requirement or approved exception, stakeholder
  intent served, validation question, baseline id/hash, allowed behavior delta,
  and what authority the CE-derived behavior cannot create or close;
- side-effect category: read-only evidence ingestion, planning authority
  creation, code mutation, environment mutation, verification evidence,
  validation evidence, publication, external connector access, or style/provider
  add-on;
- class rationale: why the chosen class is required for the TraceWeaver workflow;
- disconfirming test: what evidence would move the skill to another class;
- confidence: high, medium, or low, with low-confidence rows held by default;
- allowed claim and held claims;
- close/reopen condition;
- evidence status: `provisional_target`, `static_proven`, `runtime_held`,
  `package_surface_held`, `runtime_proven`, or `reclassified`;
- reviewer evidence id, which may be `pending_review` before the inventory
  review runs. The accepted inventory evidence record must backfill the final
  reviewer evidence id after `/ce-doc-review` passes.

Unit 1 creates provisional target classifications and an evidence-required
matrix. It does not need to produce runtime smoke, wrapper mappings, or final
bypass proof before Unit 2 defines the wrapper contract and later units
materialize wrappers. Rows that need later proof must be marked `runtime_held`
or `package_surface_held` until the named evidence exists.

Support-closure depth is class-specific. Wrapped, aliased, and hidden surfaces
require exhaustive transitive closure for referenced support files, agents,
scripts, assets, prompts, manifests, default prompts, slash/prompt commands,
MCP/app connector declarations, install metadata, and external dependencies.
Held and out-of-scope rows require enough source, dependency, and consumer
evidence to support a provisional hold/out-of-scope classification and to
identify any preserved CE method branches they might affect. They do not prove
final non-dependency until whole-plugin surface checks, support closure, and
consumer checks are complete, or until an explicit accepted limitation records
what remains unproven. Exhaustive closure is deferred until reclassification
unless the row is installed or used as support by a selected surface.

Per-class evidence expectations:

| Class | Unit 1 classification evidence | Final closure evidence |
| --- | --- | --- |
| `wrapped` | Upstream dependency closure, authority evidence, side-effect category, target wrapper owner, disconfirming test, and held runtime evidence list. | Wrapper contract mapping, side-effect-specific stop conditions, matrix row, runtime smoke, and direct-invocation bypass check. |
| `aliased` | Alias target candidate, authority evidence, resolution risk, disconfirming test, and held runtime evidence list. | Resolution rule, proof that the alias cannot invoke raw CE behavior, runtime smoke, and direct-invocation bypass check. |
| `hidden` | Support-dependency proof, authority evidence, absence of public workflow claim, and package-surface evidence required. | Installed-surface proof that the hidden skill cannot be invoked as a user workflow. |
| `held` | Exact blocker, impacted CE workflow branches, dependency check, consumer check, allowed claim boundary, close condition, and reopen trigger. | Reclassification evidence plus the target class closure evidence. |
| `out-of-scope` | Requirement-impact statement, provisional dependency/consumer check, CE-flow impact statement, unresolved closure limits, and new-requirement trigger for reconsideration. | Whole-plugin non-dependency proof or an accepted limitation, plus new accepted requirement/exception if reclassified. |

Installed behavior-bearing CE entrypoints are not allowed to remain merely
"legacy" if they can mutate plans, code, tests, commits, PRs, release notes, or
authority records. A directly invokable CE entrypoint must satisfy one of these
states before replacement can be claimed:

1. delegate to the approved TraceWeaver wrapper;
2. stop with a held/legacy message and suggested TraceWeaver next step;
3. be absent from the installed callable surface;
4. be proven read-only support with no behavior-bearing workflow effect and no
   uncited cognitive influence on planning, review, authority, or implementation.

`Absent` must be implemented in a host-verifiable way. Manifest changes alone
are not enough when the host discovers skill directories directly. The row must
name the removal mechanism for each target host, such as deleting, moving,
renaming, or installer-excluding the skill directory, and must include discovery
smoke proving the entrypoint is no longer callable.

For user-invokable skill-like surfaces, `read_only_support` is a narrow state.
It is allowed only when the surface either stops after emitting cited
non-authority evidence or is installed as non-instructional internal support.
Any directly invokable skill that contains workflow instructions, routes agent
behavior, summarizes source evidence, or can affect later planning/review/work
must be wrapped, stopped, hidden, or held. Absence of file mutation is not enough
to prove read-only support.

## TraceWeaver-Native Load-Bearing Surface

This roadmap must classify TraceWeaver-native authority surfaces that gate the
CE wrapping program, not only upstream CE skills.

| TraceWeaver surface | Role | Required authority proof before use as bootstrap or alias target |
| --- | --- | --- |
| `tw-auto` | Controlled automation path and candidate first-run bootstrap. | Accepted authority contract, dependency-resolution proof, missing-authority stop, matrix bootstrap proof, stop-before-publication proof, bounded-loop proof, runtime smoke, close/reopen conditions, and disconfirming tests proving it does not route through raw CE behavior. |
| TraceWeaver `lfg` alias | Familiar alias that must delegate to `tw-auto`. | Alias-resolution proof that it cannot invoke raw CE autopilot, negative smoke with `tw-auto` absent, and held familiar-name compatibility when external CE exact-name interception is not proven. |
| `tw-grill` | Optional post-ideation intent-deepening/source-evidence helper. | Held/out-of-scope for Units 0-2 except current-package safety classification. It may not become implementation authority or first-run bootstrap until a later accepted plan selects it and proves source-evidence, privacy, and non-authority behavior. |

REQ-TW-048 is satisfied in this roadmap only by classifying `tw-grill` as a held
TraceWeaver-native surface. This plan does not authorize `tw-grill` promotion,
runtime invocation, or first-run/bootstrap use.

`tw-auto` may remain a static/advisory recommendation while its install evidence
is accepted, but it may not become the default first-run bootstrap or `lfg`
alias target until dependency resolution, matrix bootstrap, missing-authority
stop, publication-stop, bounded-loop, runtime smoke, and disconfirming evidence
are accepted. If any of those evidence records become stale, bootstrap/alias
target status reverts to held until revalidated.

## Full CE 3.4.1 Skill Classification

This table inventories the 37 upstream CE 3.4.1 `ce-*` skill directories plus
the upstream loader-visible `lfg` autopilot surface. Unit 1 must also inventory
the whole upstream plugin behavior surface around those skills: plugin
manifests, default prompts, prompt/slash-command registration, MCP/app connector
declarations, install metadata, top-level references/scripts/assets, agents, and
any loader-visible files that can shape behavior. Current package state is based
on `plugins/traceweaver-core/skills/` as of this plan.

| CE skill | Current package state | Target class | TraceWeaver treatment |
| --- | --- | --- | --- |
| `ce-agent-native-architecture` | Not packaged | held | Hold until architecture-review wrappers can bind architecture advice to requirements, design authority, and verification records. |
| `ce-agent-native-audit` | Not packaged | held | Hold until audit scoring can write traceability evidence and cannot silently create authority. |
| `ce-brainstorm` | Packaged direct CE-derived skill | wrapped | Add TraceWeaver wrapper so brainstorm output becomes source evidence and must route to requirements review/baseline creation before planning. |
| `ce-clean-gone-branches` | Not packaged | out-of-scope | Git hygiene is not part of the authority-preserving product path for alpha. |
| `ce-code-review` | Packaged direct CE-derived skill | wrapped | Wrap review so findings classify authority/test/traceability/dark-behavior impact and require matrix/gap updates before closure. |
| `ce-commit` | Packaged direct CE-derived skill | wrapped | Wrap so commits require clean authority, verification, traceability, review, and no held publication blockers. |
| `ce-commit-push-pr` | Packaged direct CE-derived skill | wrapped | Wrap so push/PR remains blocked until TraceWeaver release/publication gates pass. |
| `ce-compound` | Packaged direct CE-derived skill | wrapped | Wrap learning so lessons create source evidence, proposed requirements, or changes instead of silently mutating authority. |
| `ce-compound-refresh` | Packaged direct CE-derived skill | wrapped | Wrap refresh so stale learnings cannot change baseline authority without a change record. |
| `ce-debug` | Packaged direct CE-derived skill | wrapped | Wrap debug so bug fixes trace to approved requirements, defect records, tests, or explicit gaps. |
| `ce-demo-reel` | Not packaged | held | Hold until demo artifacts are treated as validation evidence and do not imply release readiness. |
| `ce-dhh-rails-style` | Not packaged | out-of-scope | Framework-specific style skill is not part of the baseline CE method replacement. |
| `ce-doc-review` | Packaged direct CE-derived skill | wrapped | Wrap document review so requirement quality, source evidence, exceptions, and baseline promotion are first-class outputs. |
| `ce-frontend-design` | Not packaged | held | Hold until UI/design validation can tie visual changes to requirements, validation scenarios, and verification evidence. |
| `ce-gemini-imagegen` | Not packaged | out-of-scope | External image-generation provider surface is not required for authority-preserving engineering workflow. |
| `ce-ideate` | Not packaged | held | Candidate wrapper after Unit 1 proves support closure and Unit 2 defines the source-evidence bootstrap contract; pair with optional `tw-grill` only after selected. |
| `ce-optimize` | Not packaged | held | Hold until metric targets, baseline authority, and regression validation can be enforced. |
| `ce-plan` | Packaged with TraceWeaver boundary primer | wrapped | Replace direct/manual planning with a wrapper that requires approved requirements or creates gaps before producing implementation plans. |
| `ce-polish-beta` | Not packaged | held | Hold until browser/runtime iteration can maintain matrix rows and validation evidence for UI changes. |
| `ce-product-pulse` | Not packaged | held | Hold until product telemetry or user-signal summaries can become validation source evidence without privacy or provenance gaps. |
| `ce-proof` | Not packaged | held | Hold until human proof loops can be mapped to validation evidence and baseline decisions. |
| `ce-release-notes` | Not packaged | held | Candidate wrapper after Unit 1 proves support closure and Unit 2 defines release-claim side effects; release notes must match approved U7/U9/R31 evidence and held claims. |
| `ce-report-bug` | Not packaged | held | Hold until bug reports can create defect/source records and route to requirements, tests, and traceability gaps. |
| `ce-resolve-pr-feedback` | Packaged direct CE-derived skill | wrapped | Wrap feedback resolution so review comments cannot authorize scope changes without approved requirements, exceptions, or change records. |
| `ce-session-extract` | Packaged direct CE-derived skill | wrapped | Wrap session extraction as source-evidence ingestion with privacy and provenance controls. |
| `ce-session-inventory` | Packaged direct CE-derived skill | wrapped | Wrap session inventory so retrieved context becomes cited source evidence, not implicit authority. |
| `ce-sessions` | Packaged direct CE-derived skill | wrapped | Wrap session search so prior discussion can inform gaps/changes but cannot override baseline authority. |
| `ce-setup` | Packaged direct CE-derived skill | wrapped | Wrap as setup/health compatibility only after preconditions, stop conditions, and pre/post environment-mutation evidence prove it cannot close authority gates. |
| `ce-simplify-code` | Not packaged | held | Candidate wrapper after Unit 1 proves support closure and Unit 2 defines code-mutation side effects; simplification must preserve requirement links and duplicate/dark behavior rules. |
| `ce-slack-research` | Not packaged | held | Hold until connector provenance, privacy, and source-evidence rules are accepted. |
| `ce-strategy` | Not packaged | held | Candidate wrapper after Unit 1 proves support closure and Unit 2 defines source-evidence behavior; strategy may feed stakeholder intent but cannot become implementation authority directly. |
| `ce-test-browser` | Packaged direct CE-derived skill | wrapped | Wrap as verification evidence writer linked to matrix rows and validation scenarios. |
| `ce-test-xcode` | Packaged direct CE-derived skill | wrapped | Wrap as platform verification evidence linked to matrix rows and validation scenarios. |
| `ce-update` | Not packaged | held | Hold until TraceWeaver has its own update policy; upstream CE update cannot directly mutate a standalone TraceWeaver package. |
| `ce-work` | Packaged with TraceWeaver boundary primer | wrapped | Replace direct/manual work with a wrapper requiring Intent Capsule authority, test/default verification, matrix update, and dark-behavior routing. |
| `ce-work-beta` | Not packaged | held | Hold external delegate workflow until authority slices, subagent boundaries, and trace evidence are runtime-proven. |
| `ce-worktree` | Packaged direct CE-derived skill | wrapped | Wrap as environment/worktree helper only after preconditions, stop conditions, and pre/post worktree-mutation evidence prove it cannot close TraceWeaver gates or imply implementation authority. |
| upstream CE `lfg` | Raw upstream CE autopilot must not be packaged as TraceWeaver-controlled behavior; TraceWeaver `lfg` alias is classified in the TraceWeaver-native surface table. | held | Hold raw CE autopilot behavior unless a later runtime plan proves it can only delegate to the accepted TraceWeaver-controlled path. |

## Scope Boundaries

Executable scope for this plan:

- Create the Unit 1A current/core inventory and product-checkpoint evidence.
  Full 37-skill and whole-plugin inventory is executable only as Unit 1B after
  the checkpoint returns `full_surface_supported` or records an accepted
  `product_exception`; otherwise broad surfaces are held with reopen triggers.
- Define the wrapper architecture, first-run/bootstrap policy, canonical naming
  rules, package-surface states, and migration/default-prompt guidance needed
  before wrapper implementation.
- Prove or hold current packaged direct CE-derived safety through Unit 0.
- Update plugin docs/default prompt so users are directed to TraceWeaver-controlled
  paths, not raw CE commands.
- Update `traceability-matrix.md` for Unit 0-2 behavior-bearing policy,
  inventory, and validation artifacts.

Roadmap-only scope in this document:

- Wrapper creation under Units 3A-4B.
- Broad install/runtime evidence for wrapped/aliased skills.
- U7/U9 claim handoff.
- Full CE replacement or clean familiar-name compatibility claims.

Roadmap-only items require separate plans or accepted amendments after Unit 0-2
evidence is reviewed.

Out of scope for this plan:

- Claiming full CE replacement before runtime proof.
- Enforcing mode.
- New slash-command or prompt-command availability unless a separate prompt
  package is added and proven. Updating existing plugin default-prompt guidance
  is in scope when it points users away from raw CE commands.
- Copying protected IEEE/INCOSE text or claiming formal conformance.
- Making external-provider or connector skills available without accepted
  privacy/provenance limitations.

## Design Decisions

1. **Use wrappers as the default.**
   Direct CE skills are useful implementation components, but the user-facing
   TraceWeaver surface must load authority and write trace evidence before and
   after CE work.

2. **Use aliases only for familiar names that delegate safely.**
   `lfg` may remain familiar only after it delegates safely to `tw-auto` and the
   required alias-resolution/runtime proof has been accepted. Other direct names
   may become aliases only after they cannot bypass TraceWeaver controls.

3. **Prevent raw direct CE bypass before claiming replacement.**
   Packaging a direct CE skill does not make it a TraceWeaver-controlled skill.
   A raw behavior-bearing CE path must delegate to a TraceWeaver wrapper, stop
   with a held/legacy message, be absent from the callable surface, or be proven
   read-only support. Documentation-only demotion is not sufficient.

4. **Classify connector/provider skills conservatively.**
   Slack, Gemini, update, and browser-polish style capabilities need privacy,
   credential, source, and runtime proof before they can join the authority path.

5. **Verification and validation are wrapper outputs.**
   Test skills do not merely run tests; TraceWeaver wrappers must link evidence
   to matrix rows and validation questions.

6. **Current package safety comes before expansion.**
   Before the full inventory can be accepted as safe to proceed, every currently
   packaged behavior-bearing CE-derived entrypoint must be absent, delegate to a
   TraceWeaver wrapper, stop with a held/legacy next step, or be proven read-only
   support. This is a temporary safety gate for the existing alpha surface, not a
   full replacement claim.

## Implementation Units

### Prerequisites

- `/ce-doc-review requirements.md` must be clean before REQ-TW-033 through
  REQ-TW-047 are used as implementation authority, or unresolved findings must
  be recorded as approved exceptions or held conditions in the baseline.
  REQ-TW-048 remains candidate source evidence until a separate requirements
  review promotes it.
- `.traceweaver/intent-contract.yml` and root `traceability-matrix.md` must be
  checked for freshness against the same baseline id/hash before Unit 0-2
  wrapper policy or package-surface decisions are accepted. If either artifact is
  stale, missing, or inconsistent with `requirements.md`, record an explicit held
  condition before proceeding.
- The root `traceability-matrix.md` behavior-bearing unit gate must remain
  active for every wrapper, alias, remediation, policy, and validation artifact
  created by this plan.

### Unit 0: Current Packaged Surface Safety Gate

Goal: prevent the current alpha package from continuing to expose raw
behavior-bearing CE bypass paths while full-surface classification work begins.

Files:

- Create or update `docs/validation/traceweaver-current-ce-surface-safety.md`.
- Modify `traceability-matrix.md` for every behavior-bearing Unit 0
  remediation row before this safety gate becomes accepted evidence.
- Modify currently packaged behavior-bearing `plugins/traceweaver-core/skills/*/SKILL.md`
  files when needed to make them delegate, stop, or become read-only support.
- Move, rename, delete, or installer-exclude currently packaged behavior-bearing
  skill directories only when needed to make an unsafe entrypoint absent in a
  named target host/discovery mode.
- Modify plugin manifests only when needed to remove unsafe current entrypoints
  from the callable package surface.
- Modify plugin docs only if a currently packaged entrypoint needs an immediate
  held/legacy warning before wrapper implementation.

Approach:

- Before modifying any packaged skill, manifest, default prompt, or package
  guidance, capture an immutable pre-remediation snapshot in the Unit 0 evidence:
  installed callable-surface list, package manifests, default prompt state,
  skill/reference/agent hashes, host discovery transcript, and direct-invocation
  behavior for every current packaged behavior-bearing entrypoint, including
  CE-derived skills, `tw-auto`, and the TraceWeaver `lfg` alias.
- Unit 0 safety evidence must be scoped by host/discovery mode. Before direct
  invocation or static inspection is accepted, name every claimed mode: Codex
  desktop, Codex CLI, Cursor, Claude plugin loader, global/local plugin
  precedence, prompt/slash-command discovery, and any other host surface this
  package intends to claim. For each mode, record direct-invocation smoke,
  static-inspection-held status, or an explicit held condition. If only one host
  is tested, Unit 0 safe-to-proceed evidence applies only to that host; all other
  host/discovery modes remain held and may not inherit the result.
- Unit 0 direct-invocation smoke must run only in an isolated safety sandbox:
  disposable workspace, isolated Codex/plugin/config home, sanitized environment
  variables, fake credentials, no real remotes or publication targets, and
  provider/network access disabled where the host permits it. Pre/post checks
  must prove the smoke did not mutate real project files, git state, credentials,
  remote URLs, authority records, validation artifacts, or external systems. Any
  entrypoint that cannot be safely exercised under these constraints must use
  static inspection only and remain blocking/held until sandboxed smoke exists.
- The sandbox must include a host-enforced isolation boundary before invoking raw
  or untrusted entrypoints: VM, container, or throwaway OS user; deny-by-default
  filesystem allowlist limited to the disposable workspace and test plugin/cache
  paths; no access to real `$HOME`, SSH keys, keychain, browser profiles,
  cloud-sync folders, git credential stores, or unrelated project paths; and
  network egress blocked and verified at the OS, firewall, or proxy layer. If the
  target host cannot enforce this isolation, Unit 0 may use static inspection
  only and must keep the entrypoint held.
- Unit 0 smoke must distinguish prevented damage from safe behavior. Evidence
  must include captured logs, instrumentation, command traces, or attempted
  side-effect detectors proving the entrypoint reached the TraceWeaver
  stop/delegate/read-only boundary before any network, provider, publication,
  credential, remote, or external mutation operation was attempted. If fake
  credentials, disabled network, or missing remotes merely block the attempted
  operation, the entrypoint remains held until a safe real-configuration
  equivalent or attempted-side-effect detector proves the control fires first.
- Unit 0 and Unit 2 safety smoke must use adversarial invocation fixtures, not
  shallow command availability checks. For each side-effect category, the
  evidence record must define the minimum prompt, disposable repository state,
  fake credential state, and expected risky action that would trigger without
  TraceWeaver controls. Required fixture families include planning authority
  creation, code mutation, worktree/environment mutation, commit/push/PR
  publication, session/source evidence ingestion, and alias fallback. Any
  side-effect category that is not exercised by a realistic fixture keeps the
  affected entrypoint or compatibility claim held.
- Before any user-visible `delegate_now`, `stop_now`, or `absent` remediation
  lands, record the interim user-facing migration target for that entrypoint:
  an accepted TraceWeaver command, an explicit held state, or a blocking
  package-surface gap. Each stop/removal message must include a suggested next
  step so existing CE users are not left with a dead familiar command.
- Before any user-visible stop, removal, or delegate remediation is accepted as
  anything more than safety-only, run or record a bounded migration-discoverability
  check for affected current entrypoints. If this check is not available in Unit
  0, mark the remediation as `safety_only_familiar_name_held` until Unit 2
  adoption smoke passes.
- Enumerate all currently packaged behavior-bearing entrypoints, including
  CE-derived skills, TraceWeaver-native `tw-*` skills, and the TraceWeaver `lfg`
  alias.
- Classify each current entrypoint as `delegate_now`, `stop_now`, `absent`, or
  `read_only_support`. `tw-auto` and TraceWeaver `lfg` must either pass the same
  current-package safety checks, including missing-authority stop,
  publication-stop, alias-target-negative smoke, and no-raw-CE-fallback proof,
  or be recorded as held current-package blockers before Unit 1 becomes
  safe-to-proceed evidence.
- `delegate_now` is allowed only when the delegate target is a pre-existing,
  already-approved TraceWeaver-controlled entrypoint with accepted authority and
  safety evidence. If no such target exists, the current entrypoint must use
  `stop_now`, `absent`, `read_only_support`, or a blocking package-surface gap
  until Unit 2 policy and a later accepted wrapper plan authorize delegation.
- For `absent`, require Unit 0 to name the target host/discovery mode and the
  concrete absence mechanism: delete, move, rename, or installer-exclude the
  skill directory, plus any manifest or installer changes required to make that
  absence host-verifiable. If no approved absence mechanism exists, the entrypoint
  must use `delegate_now`, `stop_now`, or become a blocking package-surface gap.
- For `stop_now`, require the stop text to name the TraceWeaver-controlled next
  step and prohibit implementation, review closure, publication, matrix edits,
  or authority changes.
- For `read_only_support`, require evidence that the entrypoint cannot mutate
  files, git state, authority records, matrix rows, evidence records, external
  systems, or publication surfaces.
- For `read_only_support`, also require evidence that any influence on agent
  decisions is bounded to cited source evidence, explicit non-authority context,
  or gap/change/clarification proposals. Read-only support may not steer
  planning, review closure, authority interpretation, or implementation scope as
  uncited ambient context.
- For source/session/evidence-ingestion entrypoints, require privacy and
  provenance negative checks: project/path allowlists, no credential or PII
  persistence, no unrelated-project transcript capture, explicit source citation
  for any retained evidence, and retention/deletion handling.
- For source/session/evidence-ingestion entrypoints, require hostile-content
  negative smoke before they can become safe-to-proceed evidence. The smoke must
  use transcript/source/message content that attempts authority bypass, tool
  invocation, baseline mutation, or secret exfiltration, and must prove the
  entrypoint treats the imported content as cited data only. If this cannot be
  proven in Unit 0, the entrypoint is ineligible for safe-to-proceed evidence
  until a later source-ingestion wrapper proves instruction/data separation.
- Record any current entrypoint that cannot satisfy one of these states as a
  blocking package-surface gap before Unit 1 can be accepted as safe to proceed.
- If an entrypoint cannot be made safe through Unit 0 remediation, Unit 0 must
  stop as an audit-only blocker record. Unit 1 may still produce an inventory
  with explicit blockers, but that inventory is not safe-to-proceed evidence for
  wrapper implementation or replacement claims until Unit 0 remediation passes.
- Unit 0 review evidence may not rely on packaged direct `ce-code-review` or
  `ce-doc-review` entrypoints until each review entrypoint has itself been
  remediated or held. First classify packaged `ce-code-review` and
  `ce-doc-review` as `stop_now`, `absent`, `read_only_support`, or blocking
  package-surface gaps. If a changed skill body, manifest, default prompt,
  resolver rule, package-surface behavior, or evidence record still needs review
  before a proven TraceWeaver-controlled review wrapper exists, use an
  external/manual review evidence record or a host review command proven to
  resolve outside the unproven packaged direct CE path. Keep the packaged
  `ce-code-review` and `ce-doc-review` safety claims held until
  post-remediation evidence proves they cannot run raw CE review behavior.
- After any Unit 0 remediation, capture a hashable post-remediation snapshot in
  `docs/validation/traceweaver-current-ce-surface-safety.md`: changed file list,
  skill/reference/agent hashes, manifest/default-prompt hashes, installed
  callable-surface list, direct-invocation transcript ids, stale-reset triggers,
  and every intentional package-surface delta from the pre-remediation snapshot.
- Unit 0 must update `traceability-matrix.md` before safety closure for every
  changed behavior-bearing skill body, manifest/default-prompt/package-surface
  behavior, and every entrypoint remediation state. Each row must include the
  authority requirement or approved exception, implementation location, safety
  evidence transcript or hash, verification method, validation question, held
  claims, and stale-reset trigger.

Verification:

- Pre-remediation snapshot exists and is hashable before any Unit 0 remediation
  changes are made.
- Post-remediation snapshot exists, is hashable, and compares changed files,
  manifests, callable-surface state, direct-invocation evidence, and stale-reset
  triggers against the pre-remediation snapshot.
- Host/discovery-mode table exists for Unit 0 safety evidence. Every claimed
  mode has direct-invocation smoke or static-inspection-held status; untested
  modes are explicitly held and excluded from safe-to-proceed claims.
- Current installed callable-surface audit lists every packaged behavior-bearing
  entrypoint, including CE-derived skills, `tw-auto`, and TraceWeaver `lfg`.
- Direct invocation smoke for current behavior-bearing entrypoints proves
  delegate, stop, absent, or read-only support.
- Attempted-side-effect evidence proves sandboxed no-op outcomes are not caused
  merely by fake credentials, missing remotes, disabled network, or unavailable
  providers; any attempted side effect before the TraceWeaver boundary keeps the
  entrypoint held.
- Migration-discoverability check passes for each user-visible stop, removal, or
  delegate remediation claimed as more than safety-only; otherwise familiar-name
  compatibility remains held for that entrypoint.
- Read-only support proof is accepted only for non-instructional support or
  stop-after-evidence behavior that emits cited non-authority context and then
  stops. Skill-like surfaces with workflow instructions are ineligible for direct
  `read_only_support`.
- Pre/post mutation checks show no unauthorized changes to files, git state,
  authority records, matrix rows, evidence records, external commands, or
  publication surfaces for stop/read-only cases.
- Prompt-override negative smoke proves stop/delegate surfaces cannot be
  instructed to run raw CE planning, work, review, publication, or authority
  mutation, and that raw CE instructions do not steer later work before the
  TraceWeaver stop/delegate control takes effect.
- Adversarial invocation fixture table covers every applicable side-effect
  category. Each fixture must use inputs that would trigger the risky behavior in
  raw CE behavior, and every unexercised fixture keeps the corresponding
  entrypoint held.
- Absent-state discovery smoke proves each absent entrypoint is not callable in
  the target host after the recorded removal or installer-exclusion mechanism.
- Privacy/provenance negative checks pass for current packaged entrypoints that
  can read sessions, local evidence, or source history.
- Hostile-content negative smoke passes for every current packaged
  source/session/evidence-ingestion entrypoint treated as safe-to-proceed.
- Review evidence passes for any changed skill body, manifest, default prompt,
  resolver rule, package-surface behavior, or Unit 0 evidence record, or Unit 0
  records an explicit held condition proving no behavior-bearing package files
  changed and no review-bearing evidence record is used to close safety. The
  evidence must come from a proven TraceWeaver-controlled post-remediation review
  surface, an external/manual review record, or a host review command proven not
  to resolve through the unproven packaged direct `ce-code-review` or
  `ce-doc-review` paths.
- `traceability-matrix.md` rows exist for every changed behavior-bearing Unit 0
  remediation, with authority, implementation location, safety evidence,
  verification method, validation question, held claims, and stale-reset trigger.
- `docs/validation/traceweaver-current-ce-surface-safety.md` receives
  non-circular document-review evidence by the same review-surface rule above.

### Unit 1: CE 3.4.1 Inventory And Classification Record

Goal: create the authoritative inventory needed to prevent future drift between
"selected alpha" and "full replacement" claims without committing to exhaustive
broad-surface work before product value is proven.

Files:

- Create `docs/validation/traceweaver-core-11-ce-341-full-surface-inventory.md`.
- Modify `docs/validation/traceweaver-core-11-ce-runtime-inventory.md` only to
  point to the new full-surface inventory as future scope.
- Modify `traceability-matrix.md` if the new inventory becomes accepted evidence.

Approach:

- Run Unit 1 in two phases:
  - **Unit 1A current/core inventory**: inventory current TraceWeaver packaged
    behavior-bearing entrypoints, core CE method surfaces, upstream `lfg`, and
    enough upstream/whole-plugin metadata to support the product checkpoint.
  - **Unit 1B broad inventory**: inventory all 37 upstream CE 3.4.1 `ce-*` skill
    directories and every whole-plugin behavior-bearing surface only if the
    product checkpoint returns `full_surface_supported` or records an accepted
    `product_exception`.
  If the checkpoint returns `narrow_to_core_method`, Unit 1 records uninspected
  broad surfaces as held with reopen triggers instead of completing exhaustive
  broad-surface inventory.
- Record the upstream acquisition procedure before hashing:
  - source package/repository identity;
  - canonical upstream URL or package identity;
  - version/tag/commit (`3.4.1`, `d685f0794863a73ae3ca3620d2ae747510e9eaa0`);
  - trusted fetch command and capture environment;
  - signed tag, release signature, or maintainer-verifiable commit evidence where
    available;
  - dependency lockfile, package checksum, or explicit no-lockfile limitation;
  - local cache path used for capture;
  - capture date and command;
  - hash root and normalization rules;
  - fallback limitation if the upstream source cannot be independently fetched or
    provenance cannot be verified.
- Unit 1A enumerates the current TraceWeaver packaged behavior-bearing
  entrypoints, the core CE method surfaces needed for idea/intent-deepening,
  brainstorm/source evidence, requirements baseline, plan, authority gate, work,
  traceability check, review, verification/validation handoff, publication stop,
  and compound learning, plus upstream `lfg`.
- Unit 1B, when authorized by the product checkpoint, enumerates all 37 upstream
  CE 3.4.1 `ce-*` skill directories, the upstream loader-visible `lfg`
  directory, and the whole-plugin behavior surface around them: manifests,
  default prompts, prompt/slash-command registrations, MCP/app connector
  declarations, install metadata, top-level references/scripts/assets, agents,
  and loader-visible behavior files.
- Treat all upstream CE skill bodies, prompts, references, agents, scripts,
  manifests, and loader-visible files as untrusted source data during inventory.
  Inventory tooling and reviewers may quote, hash, summarize, and classify this
  content, but must not execute embedded instructions, follow tool-use requests
  inside the source text, or allow upstream prompt text to become agent
  instructions. If this instruction/data separation cannot be proven, inventory
  classifications that depend on upstream prompt or skill content remain
  provisional/held.
- Use at least two independent discovery methods for the whole-plugin surface,
  such as filesystem traversal, manifest/default-prompt parsing, and installed
  callable-surface discovery in the target host. Record the exact commands or
  tools used, their outputs, and any mismatches.
- Record package state, target class, support-closure depth, support files when
  required by class, agent dependencies, external dependencies, and SHA-256
  hashes.
- Record which current TraceWeaver packaged files are source-identical, package
  deltas, aliases, hidden, or absent.
- Add stale-reset rules for upstream version, support closure, wrapper policy,
  and installed surface changes.
- Apply the classification rubric to every row, including authority evidence,
  provisional target class, evidence status, disconfirming tests, reversal
  triggers, and held evidence list.
- Do not mark wrapped/aliased classifications as runtime-proven in Unit 1 unless
  the exact runtime proof already exists. Unit 1 acceptance may approve the
  classification record while leaving wrapper, package-surface, and runtime
  evidence held for later units.

Verification:

- Unit 1A inventory count proves current packaged behavior-bearing entrypoint
  count, core CE method surface count, and upstream `lfg` presence for the
  product-checkpoint evidence boundary.
- Unit 1B inventory count proves `upstream_ce_skill_count=37` for `ce-*`
  directories and `upstream_loader_skill_directory_count=38` when upstream `lfg`
  is included, or records broad-surface inventory as held when Unit 1A returns
  `narrow_to_core_method`.
- Unit 1B whole-plugin inventory count proves every upstream manifest, prompt,
  prompt/slash-command registration, MCP/app connector declaration, install
  metadata file, top-level reference/script/asset, agent, and loader-visible
  behavior file was inspected or proven absent, unless broad inventory is held by
  the Unit 1A checkpoint outcome.
- Hostile-content inventory control passes for upstream CE source ingestion:
  upstream instruction-bearing content is treated as data only, embedded
  instructions/tool-use requests are not followed, and a negative fixture or
  static check attempts authority bypass, tool invocation, credential access, or
  classification manipulation. If the check is unavailable, affected
  classifications remain provisional/held.
- Independent discovery comparison proves at least two discovery methods agree
  on the behavior-bearing surface, or records each mismatch as a blocker or
  accepted limitation before the inventory can become safe-to-proceed evidence.
- Supply-chain provenance check proves the captured CE source came from the
  recorded upstream identity, or records a held provenance limitation that blocks
  wrapped/aliased/hidden closure until resolved.
- Package count proves current TraceWeaver skill directory count and direct
  CE-derived count.
- Per-class evidence table defines whether the row needs full transitive
  closure, entrypoint hash only, aggregate hash, or absence proof.
- Hash table covers every selected, wrapped, aliased, or hidden support file.
- Whole-plugin surface table proves whether CE 3.4.1 exposes behavior-bearing
  surfaces outside the 37 `ce-*` skill directories plus upstream `lfg`; any such
  surface is classified, held, or proven absent.
- Held/out-of-scope rows include dependency check, consumer check, CE-flow impact
  statement, and reopen trigger.
- Any surface installed as a non-public support dependency is classified
  `hidden`, not `out-of-scope`; `out-of-scope` requires absence from the package
  surface unless a later requirement reclassifies it.
- Wrapped/aliased rows include an evidence-required matrix and are marked
  `runtime_held` until later units produce wrapper runtime and bypass evidence.
- Unit 0 safety gate is passed before Unit 1 is treated as safe-to-proceed
  evidence for wrapper implementation or replacement claims. If Unit 0 records
  blockers, Unit 1 may still be accepted only as inventory-with-blockers.
- Unit 1A ends with an early product checkpoint comparing full-surface wrapping
  value against a smaller core-method wrapper path. If full-surface value is not
  supported, Unit 1B broad inventory, Unit 2 broad policy, and later broad plans
  must narrow to core method surfaces or record an accepted product exception
  before broad-surface work proceeds.
- The early product checkpoint must be falsifiable. It records the decision
  owner, source evidence, representative user/workflow signals, non-core CE
  skills requested, core-method alternative considered, and explicit pass/fail
  threshold. Default outcome is `narrow_to_core_method` unless evidence shows
  that at least three non-core CE surfaces are needed by real or representative
  users for the target TraceWeaver workflow, or an accepted product exception
  authorizes broader policy work despite weak demand evidence.
- `/ce-doc-review docs/validation/traceweaver-core-11-ce-341-full-surface-inventory.md`.

### Unit 2 Branching Rule

Unit 2 is executable only after the Unit 1A product checkpoint records one of
these outcomes. The branch outcome controls which Unit 2 policy work may run.

| Unit 1 checkpoint outcome | Unit 2 executable scope | Unit 2 held scope |
| --- | --- | --- |
| `full_surface_supported` | Full Unit 2 wrapper architecture and package-surface policy may proceed for the 37 upstream `ce-*` skills, upstream `lfg`, current TraceWeaver `tw-*` surfaces, and whole-plugin behavior-bearing surfaces. All Unit 2 files, side-effect categories, migration rows, coexistence checks, package-surface decisions, adoption checks, and acceptance criteria remain in scope. | Runtime enforcement, Unit 3-6 wrapper implementation, and clean replacement claims remain held until later accepted plans prove them. |
| `narrow_to_core_method` | Unit 2 may proceed only for the core TraceWeaver method path: idea/intent-deepening, brainstorm/source evidence, requirements baseline, plan, authority gate, work, traceability check, document/code review, verification/validation handoff, publication stop, and compound learning. The same policy/evidence files may be created, but every table and acceptance row must be scoped to those core surfaces. Migration rows cover only currently packaged core-method entrypoints; familiar-name compatibility beyond those rows remains held. | Non-core CE skills, broad whole-plugin replacement policy, connector/provider/style add-ons, broad familiar `ce-*` compatibility, non-core migration rows, and full-surface package decisions remain held for a later plan or accepted product exception. |
| `product_exception` | Unit 2 may proceed only within the exception's named scope. The evidence record must cite the accepted exception id, affected non-core surfaces, allowed policy decisions, and expiration/reopen trigger. | Any surface, side-effect category, migration row, compatibility claim, or package decision not named by the exception remains held. |

If the checkpoint is missing, stale, or ambiguous, Unit 2 may create only a held
policy-evidence skeleton and must not modify package-surface guidance,
manifests, or advertised workflows.

### Unit 2: Wrapper Architecture And Policy

Goal: define the reusable TraceWeaver wrapper contract and side-effect-specific
policies for the branch selected by the Unit 1A product checkpoint before
writing many wrappers.

Files:

- Create or modify `plugins/traceweaver-core/references/traceweaver-ce-wrapper-policy.md`.
- Modify `plugins/traceweaver-core/references/traceweaver-runtime-policy.md`.
- Create `docs/validation/traceweaver-ce-wrapper-policy-evidence.md` as the
  Unit 2 evidence record.
- Modify `plugins/traceweaver-core/README.md`.
- Modify `plugins/traceweaver-core/AGENTS.md` only when existing default-prompt
  guidance must point users away from raw CE commands.
- Modify plugin manifests only when needed to keep default-prompt or advertised
  workflow guidance aligned with the accepted package-surface decision table:
  `plugins/traceweaver-core/.codex-plugin/plugin.json`,
  `plugins/traceweaver-core/.claude-plugin/plugin.json`, and
  `plugins/traceweaver-core/.cursor-plugin/plugin.json`.
- Modify `README.md`.

Approach:

- Load the Unit 1A product checkpoint outcome before modifying Unit 2 policy,
  package-surface guidance, manifests, or advertised workflows. If the outcome is
  `narrow_to_core_method`, scope every Unit 2 table, migration row, side-effect
  category, compatibility check, and acceptance row to the core method path and
  record broad-surface obligations as held.
- Define pre-step obligations: load `requirements.md`,
  `.traceweaver/intent-contract.yml`, and `traceability-matrix.md`.
- Define authority outcomes: proceed, create gap, create change, create
  exception candidate, create clarification, or hold.
- Define post-step obligations: matrix update, verification evidence,
  validation question check, dark-behavior scan, suggested next step.
- Define dependency-resolution rule so wrappers use TraceWeaver-packaged skills
  and never accidentally fall back to an external CE plugin for authority
  decisions.
- Run an early external-CE coexistence spike before any familiar `ce-*`
  compatibility, `lfg` alias, clean-replacement, or external-CE interception
  claim is accepted. The spike must run in a disposable workspace with fake
  credentials, sanitized environment variables, isolated Codex/plugin home, no
  real remote publication targets, and provider/network access disabled where
  the host allows it. Install TraceWeaver beside upstream CE 3.4.1, invoke exact
  upstream CE entrypoint names, and record whether TraceWeaver can intercept,
  shadow, block, or explicitly hold those raw external paths. Pre/post mutation
  checks must prove no real project files, git state, credentials, remote URLs,
  authority records, validation artifacts, or external systems were modified.
  Unit 2 must name the supported target host/discovery modes it intends to claim
  and run this spike for each claimed mode, including global CE installed, local
  TraceWeaver installed, both plugin caches present, prompt/slash-command
	  discovery where supported, and reversed install order where the host permits
	  it. Familiar-name compatibility claims are limited to the exact host modes
	  tested. This spike is not a prerequisite for later `tw-*` wrapper plans that
	  use TraceWeaver-canonical names and keep familiar-name compatibility held.
  The spike must use a host-enforced isolation boundary equivalent to Unit 0:
  VM, container, or throwaway OS user; deny-by-default filesystem allowlist; no
  access to real user secrets, credential stores, browser profiles, cloud-sync
  folders, or unrelated projects; and blocked/verified network egress. Without
  this boundary, Unit 2 may use static inspection only and must keep
  compatibility/interception claims held.
	  If the host cannot prevent direct upstream CE invocation, Unit 2 must take a
	  hard compatibility branch before any familiar-name claim proceeds: use only
	  `tw-*` names in that host, require upstream CE removal/disablement for familiar
  `ce-*` compatibility, or block all familiar CE-name compatibility claims until
  interception/shadowing is proven. A held limitation alone is not sufficient to
  advertise familiar CE-name compatibility, but it may allow TraceWeaver-canonical
  wrapper planning to continue.
- Define wrapper policy packaging: each installed wrapper must either inline the
  mandatory policy obligations or include skill-local `references/` copied from
  approved wrapper policy/templates. Package-level references alone are not
  sufficient unless install smoke proves the host copies and resolves them.
- Define side-effect categories and required controls:
  - read-only evidence ingestion;
  - planning authority creation;
  - code mutation;
  - environment mutation;
  - verification evidence;
  - validation evidence;
  - publication;
  - external connector access;
  - style/provider add-ons.
- Keep connector/provider skills held for core-wrapper work unless a later
  accepted requirement supplies privacy, provenance, credential, evidence
  minimization, and runtime proof rules. Detailed connector/provider controls are
  part of held-skill reclassification, not a prerequisite for later core method
  wrapper plans.
- Define package-surface states for direct CE paths: delegate, stop, absent, or
  read-only support. A direct CE path that can mutate behavior may not remain
  merely "not recommended."
- Record Unit 2 decisions in
  `docs/validation/traceweaver-ce-wrapper-policy-evidence.md`: accepted naming
  table, migration table, package-surface decision table, wrapper packaging
  decision, adoption-smoke result or held condition, external-CE coexistence
  spike result or held condition, raw adoption-transcript custody result or held
  condition, manifest-validation evidence id, close/reopen conditions, and any
  claims that remain held.
- Define wrapper-equivalence policy for every wrapped or aliased CE method:
  pinned upstream behavior, prompt obligations, expected outputs, and user-visible
  workflow semantics to preserve; permitted TraceWeaver authority/traceability
  deltas; disallowed semantic drift; and the differential or regression smoke
  required before any familiar-workflow or clean-replacement claim is accepted.
- Resolve canonical user-facing names before any Unit 3 wrapper plan starts. `tw-*` names are the
  default canonical names; familiar `ce-*` names may exist only as aliases after
  the bypass check proves they cannot invoke raw CE behavior.
- Resolve the candidate first-run/bootstrap entrypoint before any Unit 3A
  wrapper plan starts. Unit 2 may name `tw-auto` as a provisional static/advisory
  candidate, but default prompt and migration docs may call it an accepted
  first-run command only after the runtime, dependency-resolution,
  matrix-bootstrap, missing-authority-stop, publication-stop, and alias-target
  proof listed in this roadmap is accepted.
- Define the minimum familiar workflow compatibility surface before any familiar
  `ce-*`, `lfg` alias, clean-replacement, or default-prompt migration claim:
  which CE-style names remain available as safe aliases, which names are
  TraceWeaver-only, which names stop with migration guidance, and what adoption
  claim each name supports. TraceWeaver-canonical `tw-*` wrapper plans may
  proceed while these familiar-name claims remain held.
- Create a migration table for current packaged CE-derived skills that records:
  canonical TraceWeaver command, optional familiar alias, stop/held message,
  documentation location, and suggested user next step.
- Add a minimal installed callable-surface audit and direct-invocation bypass
  check as a Unit 2 prerequisite for later Unit 3 wrapper plans. Unit 5 remains
  the full 37 `ce-*` plus upstream `lfg` enforcement sweep.
- Clarify default-prompt scope: existing plugin default-prompt guidance may be
  updated to direct users to controlled paths, but new prompt/slash-command
  availability remains held unless separately packaged and proven.

Verification:

- Policy inspection maps every approved obligation to REQ-TW-033 through
  REQ-TW-047 and keeps REQ-TW-048 as candidate source evidence until promoted.
- Static scan confirms docs do not claim full replacement until runtime proof.
- Name and package-surface decision table is accepted before any wrapper
  implementation unit starts. The table may mark familiar `ce-*` compatibility
  held while allowing TraceWeaver-canonical `tw-*` wrapper plans to proceed.
- Wrapper packaging rule is defined here; skill-local reference install smoke is
  required in the first wrapper unit that creates a wrapper using skill-local
  policy references.
- Migration table covers every currently packaged direct CE-derived skill.
- Migration table records an interim user-facing command, explicit held state,
  or blocking package-surface gap for every Unit 0 stop/removal/delegate change.
- Wrapper-equivalence policy is recorded for each wrapped or aliased CE method,
  including upstream behavior, prompt/output obligations, permitted TraceWeaver
  deltas, disallowed semantic drift, and differential/regression smoke required
  before familiar-workflow or clean-replacement claims.
- Minimal installed callable-surface audit and direct-invocation bypass check
  pass for the wrapper paths Unit 3 is allowed to touch.
- External-CE coexistence spike passes or records a held clean-replacement
  limitation plus a hard familiar-name compatibility decision for each claimed
  host/discovery mode before any familiar `ce-*`, `lfg` alias, clean-replacement,
  or external-CE interception claim proceeds. `tw-*` wrapper plans may proceed
  while familiar-name compatibility remains explicitly held.
- Product adoption evidence is required before accepting default-prompt
  migration, familiar-name compatibility, or first-run/bootstrap claims. It is a
  recorded task-based smoke with fresh-user and existing-CE-user prompts,
  expected commands, transcript/evidence capture, pass/fail criteria, and a rule
  that raw CE command selection or uncertainty about first-run/bootstrap keeps
  those claims held. `tw-*` wrapper plans may proceed without this evidence when
  they do not claim familiar-name or default-bootstrap readiness.
- Product adoption smoke must include a representative end-to-end job, not only
  command selection. The fresh-user and existing-CE-user runs must complete a
  small idea-to-requirements-to-plan handoff or plan-to-review handoff through
  the intended TraceWeaver path. The evidence record must capture whether users
  understood the generated artifacts, why any stop/gap occurred, the command
  count, elapsed time or step budget, number of manual artifact edits, and
  whether the handoff reached the next valid TraceWeaver gate.
- Adoption evidence must use privacy-controlled fixtures. Real-human runs must
  use sanitized fixture projects/accounts unless an explicit approval records why
  a real project is necessary. The evidence record must capture participant
  consent or internal approval, data-minimization rules, redaction of local
  paths, user identifiers, secrets, proprietary content, and credential-like
  strings before persistence, a raw-transcript minimization/deletion decision,
  and a negative scan proving validation artifacts contain no unrelated project
  data or credential-like strings.
- Raw adoption transcripts are pre-redaction custody material, not authority
  evidence. The default evidence artifact is a redacted summary, selected
  excerpts only after redaction, metrics, and the command/decision path needed to
  judge the adoption gate. Real-human adoption runs may capture raw transcripts
  only when the evidence plan proves they are necessary before capture starts and
  names the approved temporary capture location, authorized reviewers/access
  boundary, maximum raw retention period, approved capture mechanisms, deletion
  trigger, and deletion confirmation. Unredacted raw transcripts may not be
  pasted into persistent docs, PR descriptions, issues, shared chat,
  screenshots, validation artifacts, traceability matrices, requirements,
  Intent Contracts, or authority records. A negative check must prove no
  unredacted transcript content was committed or persisted outside the approved
  temporary location, including temp files, screenshots, chat exports, PR text,
  issues, shared evidence stores, and generated authority files when those media
  are used.
- Before Unit 3A or Unit 3B implementation closes, run a lightweight
  task-based adoption and simplicity smoke for the TraceWeaver-canonical `tw-*`
  core path even if familiar-name compatibility and default-bootstrap claims
  remain held. This smoke must prove the core idea/intent/brainstorm/requirements
  to plan/work/review path is understandable, has a bounded command path, has
  bounded user decisions, and still feels like the simple CE method with
  TraceWeaver authority added.
- Product adoption evidence must include a simplicity guardrail for preserving
  the CE method. The guardrail must define the maximum acceptable command path,
  maximum required user decisions before the next work/review step can proceed,
  required suggested-next-step clarity, and disconfirming behaviors such as
  repeated gate loops, unclear next command, excessive manual artifact editing,
  or users reporting that the wrapped flow no longer feels like the simple CE
  workflow with TraceWeaver authority added.
- Adoption smoke must name who satisfies the fresh-user and existing-CE-user
  roles, the minimum number of runs, whether synthetic agent runs are allowed,
  and the disconfirming behaviors that fail the gate.
- Adoption smoke must prove completion of the representative end-to-end job or
  keep the affected adoption-sensitive claim held. Choosing the correct command
  is not enough without artifact comprehension, bounded steps, bounded manual
  edits, and a valid next gate.
- Adoption evidence privacy controls pass: fixture scope, consent or internal
  approval, minimization, redaction, retention/deletion, and negative scans for
  secrets, local identifiers, proprietary content, and unrelated project data.
- Adoption-sensitive claims require at least one real human fresh-user run and
  one real human existing-CE-user run. Synthetic agent runs may supplement those
  human runs, but synthetic-only evidence keeps default-prompt migration,
  familiar-name compatibility, and first-run/bootstrap claims held.
- For any host mode where disabled provider/network access or fake credentials
  could suppress discovery, connector activation, prompt surfaces, or fallback
  behavior, Unit 2 must record a disconfirming follow-up condition and keep
  familiar-name compatibility held until an equivalent safe real-configuration
  test exists.
- Run single-document reviews for every Unit 2 policy/docs artifact that changes:
  - `/ce-doc-review plugins/traceweaver-core/references/traceweaver-ce-wrapper-policy.md`
  - `/ce-doc-review plugins/traceweaver-core/references/traceweaver-runtime-policy.md`
  - `/ce-doc-review plugins/traceweaver-core/AGENTS.md`
  - `/ce-doc-review plugins/traceweaver-core/README.md`
  - `/ce-doc-review README.md`
- Plugin manifest changes are covered by a separate package-surface validation
  check, not by `/ce-doc-review`: parse
  `plugins/traceweaver-core/.codex-plugin/plugin.json`,
  `plugins/traceweaver-core/.claude-plugin/plugin.json`, and
  `plugins/traceweaver-core/.cursor-plugin/plugin.json`; verify advertised
  commands, default guidance, install metadata, and exposed surfaces match the
  accepted package-surface decision table; and record the manifest validation
  evidence id before Unit 2 closes.
- `/ce-doc-review docs/validation/traceweaver-ce-wrapper-policy-evidence.md`.

### Later Roadmap Unit Rules

Units 3A-6 are illustrative roadmap sketches, not implementation contracts.
Their file lists, approaches, and candidate wrapper names name likely future work
so Unit 0-2 can preserve the right evidence, but they do not authorize later
implementation by themselves. Each later unit must be replanned from the accepted
Unit 0-2 evidence, current requirements baseline, and traceability matrix before
files are changed.

The `Roadmap Acceptance For Later Plans` section below is binding future-plan
policy created by this roadmap. Later plans may change implementation details,
but they must satisfy those gates or explicitly amend them through accepted
requirements and traceability evidence.

The early Unit 1A product checkpoint is an executable Units 0-2 branch gate. The
broader Open Questions checkpoint remains a later broad-rollout gate after core
method wrappers are proven.

### Unit 3A: Source-Evidence And Baseline Wrappers

Roadmap status: not executable from this document. Create a separate Unit 3A
plan after Unit 0-2 evidence is accepted.

Goal: wrap the source-evidence path from idea through requirements baseline
without letting ideas or brainstorm output become implementation authority.

Illustrative future files, not authorized by this roadmap:

- Create wrapper skills under `plugins/traceweaver-core/skills/` as selected by
  the implementation design.
- Modify direct `ce-*` skill packaging only when the wrapper policy requires a
  boundary primer, alias, or hidden/internal marker.
- Modify plugin manifests and default prompts.
- Modify `traceability-matrix.md`.

Candidate wrapper surface:

- `tw-ideate` or held/candidate wrapped `ce-ideate` only after Unit 1/2 prove it.
- `tw-brainstorm` or wrapped `ce-brainstorm` for needs, risks, assumptions, and
  gaps.
- requirements-baseline record generation using existing TraceWeaver authority
  skills/templates unless a separate `tw-authority-baseline` skill is scoped.

Future exit criteria:

- Isolated install proves wrappers and skill-local references materialize.
- If a wrapper uses skill-local policy references, install smoke proves those
  references materialize and resolve for that wrapper.
- Runtime smoke exercises fresh-project bootstrap and missing-authority stop.
- Bootstrap artifacts created for a fresh project must carry explicit
  draft/held authority state, no accepted baseline hash, required review command,
  and a hard stop preventing plan/work wrappers from treating them as
  implementation authority until review and baseline promotion complete.
- Matrix rows exist for every wrapper and changed direct CE entrypoint.
- `/ce-code-review` for skill behavior and `/ce-doc-review` for docs/evidence.

### Unit 3B: Plan, Work, And Review Wrappers

Roadmap status: not executable from this document. Create a separate Unit 3B
plan after Unit 0-2 evidence is accepted and Unit 3A naming/bootstrap decisions
are settled.

Goal: wrap planning, implementation, and review so behavior-bearing work stays
inside approved requirements, Intent Capsules, traceability rows, and
verification evidence.

Illustrative future files, not authorized by this roadmap:

- Create `tw-plan`, `tw-work`, and `tw-review` wrappers or accepted familiar
  aliases after Unit 2 resolves naming.
- Modify direct `ce-plan`, `ce-work`, `ce-code-review`, and `ce-doc-review`
  packaging only to delegate, stop, or act as read-only support.
- Modify plugin manifests/default prompts.
- Modify `traceability-matrix.md`.

Illustrative future approach:

- Planning wrapper must require approved requirements or produce a gap/change
  proposal instead of implementation authority.
- Work wrapper must require an Intent Capsule and update the matrix before work
  can close.
- Review wrapper must classify findings by authority, verification,
  traceability, dark behavior, duplicate behavior, and release-claim impact.
- Direct `ce-plan`, `ce-work`, `ce-code-review`, and `ce-doc-review` invocation
  must delegate, stop, or be absent; "legacy but runnable" is not accepted for
  behavior-bearing paths.

Future exit criteria:

- Runtime smoke exercises authorized plan/work/review path.
- Runtime smoke exercises direct invocation for every packaged behavior-bearing
  CE entrypoint in this unit.
- Matrix rows exist for wrappers and changed CE entrypoints.
- `/ce-code-review` and `/ce-doc-review` clean.

### Unit 3C: Compound-Learning Wrappers

Roadmap status: not executable from this document. Create a separate Unit 3C
plan after core method wrappers are proven.

Goal: wrap compound learning and session/source ingestion so lessons can inform
future work without silently changing authority.

Illustrative future files, not authorized by this roadmap:

- Create `tw-compound` or accepted aliases for `ce-compound`,
  `ce-compound-refresh`, `ce-sessions`, `ce-session-inventory`, and
  `ce-session-extract` after Unit 2 resolves naming.
- Modify plugin manifests/default prompts.
- Modify `traceability-matrix.md`.

Illustrative future approach:

- Learning wrappers may create source evidence, gaps, proposed requirements, or
  change records.
- Learning wrappers may not edit accepted authority without an approved baseline
  change.
- Session-derived evidence must use project/path allowlists, explicit source
  citation, secret/PII redaction before persistence, no raw transcript promotion
  into authority records, and retention/deletion rules for generated evidence.
- Session, source-history, and connector-derived content must be treated as
  untrusted data, not instructions. Wrappers must separate imported source text
  from agent instructions, quote or summarize evidence without executing embedded
  commands, require citation-bound use, and route hostile or instruction-like
  content to a gap/security note instead of following it.

Future exit criteria:

- Runtime smoke proves a learning output becomes source evidence or a proposed
  authority change, not silent authority.
- Direct invocation bypass checks pass for all packaged learning entrypoints.
- Negative privacy smoke proves unrelated-project or credential-bearing session
  content is not persisted.
- Hostile-content negative smoke uses malicious transcript/source/message
  content attempting authority bypass, tool invocation, baseline mutation, or
  secret exfiltration and proves the wrapper treats it as data only.
- Matrix rows exist for wrappers and changed CE entrypoints.

### Unit 4A: Verification Evidence Wrappers

Roadmap status: not executable from this document. Create a separate Unit 4A
plan after verification-wrapper authority is selected from Unit 1 evidence.

Goal: ensure test wrappers produce or instruct matrix-linked verification
evidence without implying release readiness.

Illustrative future files, not authorized by this roadmap:

- Wrapper skills for `ce-test-browser` and `ce-test-xcode` as authorized by Unit
  1 classification.
- Validation evidence under `docs/validation/`.
- Matrix updates in `traceability-matrix.md`.

Illustrative future approach:

- Treat test skills as verification evidence writers.
- Treat proof/product-pulse/demo-style outputs as validation evidence candidates
  only when their held classifications are closed.
- Define verification artifact minimization and redaction controls for browser
  and Xcode evidence: isolated test profiles/simulators, no credential-bearing
  screenshots/logs, redaction of tokens/cookies/local paths/device identifiers,
  and retention/deletion rules for persisted evidence artifacts.
- Keep release, commit, push, PR, and feedback-resolution behavior out of this
  unit.

Future exit criteria:

- Runtime smoke proves test wrappers write or instruct matrix-linked evidence.
- Runtime smoke proves test wrappers do not approve release/runtime claims.
- Artifact privacy negative smoke proves sensitive browser/Xcode screenshots,
  logs, traces, simulator state, cookies, auth headers, local paths, and device
  identifiers are not persisted to validation records without approved redaction.

### Unit 4B: Publication Gate Wrappers

Roadmap status: not executable from this document. Create a separate Unit 4B
plan before publication-wrapper implementation.

Goal: ensure release, commit, push, PR, and feedback-resolution wrappers stop
when invoked with missing TraceWeaver evidence, while system-level prevention
remains held for enforcing mode.

Illustrative future files, not authorized by this roadmap:

- Wrapper skills for `ce-commit`, `ce-commit-push-pr`, and
  `ce-resolve-pr-feedback` as authorized by Unit 1 classification.
- `ce-release-notes` only if Unit 1 reclassifies it from held to wrapped and
  Unit 2 defines release-claim side effects.
- `ce-proof` remains held unless a later requirement and Unit 1 reclassification
  explicitly authorize proof-loop wrapping.
- Validation evidence under `docs/validation/`.
- Matrix updates in `traceability-matrix.md`.

Illustrative future approach:

- Treat commit/push/PR as publication gates, not normal work steps.
- Require wrapper-invoked stop-before-publication whenever authority, matrix,
  review, tests, or held claims are unresolved.
- Define publication credential controls before any commit/push/PR wrapper can
  publish: allowed credential source, least-privilege scope, storage boundary,
  logging redaction, rotation/revocation expectation, environment separation,
  and failure behavior when credentials are absent or over-scoped.
- Require publication evidence to prove tokens, SSH key material, browser
  sessions, credential-bearing remote URLs, and provider auth output are not
  persisted into logs, trace records, validation artifacts, or PR descriptions.
- Keep hard prevention against raw git/GitHub/direct-tool bypass held until
  enforcing mode or repository hooks are separately scoped and proven.

Future exit criteria:

- Runtime smoke proves commit/push/PR wrappers stop when blockers exist.
- Credential negative smoke proves publication wrappers do not persist tokens,
  credential-bearing remotes, SSH key material, browser sessions, or provider
  auth output into logs or evidence records.
- If `ce-release-notes` is reclassified and authorized for this unit, runtime
  smoke proves the release-note wrapper refuses unapproved release/runtime claims.

### Unit 5: Held, Hidden, And Out-Of-Scope Surface Enforcement

Roadmap status: not executable from this document except for Unit 0-2 policy
decisions. Create a separate enforcement plan after Unit 1 inventory is accepted.

Goal: ensure skills classified as held, hidden, or out-of-scope cannot be
mistaken for available TraceWeaver-controlled workflows.

Illustrative future files, not authorized by this roadmap:

- Plugin manifests/default prompt.
- `plugins/traceweaver-core/README.md`.
- `docs/validation/traceweaver-core-11-ce-341-full-surface-inventory.md`.
- Optional package policy files under `plugins/traceweaver-core/references/`.

Illustrative future approach:

- For hidden skills, prove they are either absent from the loader-visible
  `skills/` surface or cannot be directly invoked as behavior-bearing workflows.
- For held skills, record the exact blocker and close condition.
- For out-of-scope skills, record why they are excluded and what requirement
  would be needed to reopen them.
- For held connector/provider skills, require reclassification criteria before
  any move to wrapped or aliased: approved workspace/channel/project allowlists,
  minimum necessary evidence fields, credential source/storage,
  least-privilege scopes, environment separation, rotation/revocation, no
  credential logging, provider egress disclosure, source URL/message metadata
  citation, redaction before persistence, retention/deletion rules,
  compromise/unavailability behavior, hostile-content instruction/data
  separation, and negative smoke proving out-of-scope connector content is not
  retained or executed as instructions.
- For environment-mutation wrappers or helpers such as setup or worktree flows,
  require explicit preconditions, stop conditions, and pre/post mutation evidence
  before they can remain available.
- Add an installed-surface audit that compares advertised surface to installed
  callable surface and fails if a held/out-of-scope skill is installed as an
  available workflow.
- Add direct invocation checks for every installed behavior-bearing CE entrypoint:
  each must delegate to a wrapper, stop with a held/legacy message, be absent, or
  be proven read-only support.

Future exit criteria:

- Static advertised-surface audit passes.
- Installed callable-surface audit passes.
- Direct invocation bypass matrix passes for every installed behavior-bearing
  CE entrypoint.
- Install smoke confirms no unexpected prompt/slash-command surface.
- Review confirms every one of the 37 upstream `ce-*` skills plus upstream `lfg`
  has exactly one evidence-backed classification and every whole-plugin behavior
  surface is classified, held, or proven absent.

### Unit 6: Full-Surface Runtime Smoke And Claim Handoff

Roadmap status: not executable from this document. Create a separate runtime
validation and claim-handoff plan after wrapper-family plans pass review.

Goal: prove the wrapped/aliased surface enough to prepare later U7/U9 records.

Illustrative future files, not authorized by this roadmap:

- Create `docs/validation/traceweaver-ce-341-wrapper-runtime.md`.
- Modify `docs/validation/traceweaver-controlled-autonomy-alpha.md` only if this
  supersedes a held condition.
- Modify `traceability-matrix.md`.

Illustrative future approach:

- Run blank-project bootstrap.
- Run idea/brainstorm to requirements baseline flow.
- Run plan/work/review on a controlled toy change.
- Run missing-authority stop.
- Run duplicate/dark behavior detection.
- Run verification evidence linkage.
- Run validation-question handoff.
- Run with upstream CE also installed and confirm TraceWeaver wrappers resolve
  packaged TraceWeaver dependencies, not external CE paths.
- Invoke upstream CE entrypoints by exact name when the upstream CE plugin is
  installed beside TraceWeaver. If TraceWeaver cannot intercept, shadow, or block
  those raw external entrypoints, record a held claim that clean replacement is
  not proven in environments where raw CE remains installed.
- Invoke every installed behavior-bearing CE entrypoint by exact name and confirm
  it delegates, stops, is absent, or is read-only support.
- Run wrapper-equivalence smoke for each wrapped or aliased CE method against the
  pinned CE 3.4.1 behavior contract: preserved prompt/output obligations,
  permitted TraceWeaver authority deltas, and disallowed semantic drift. Fail or
  hold familiar-workflow and clean-replacement claims when a wrapper changes CE
  method behavior beyond the accepted authority/traceability delta.
- For every stop, delegate, or read-only support case, capture pre/post mutation
  evidence for files, git state, authority records, matrix rows, evidence
  records, external commands, network/provider calls, and publication surfaces.
  Fail the smoke if unauthorized mutation happens before the stop or delegate.
- Remove or hide `tw-auto` in a negative smoke and confirm familiar aliases fail
  closed rather than falling back to raw CE automation.
- Inspect prompt/slash-command surfaces and confirm unproven raw CE workflows are
  not exposed as TraceWeaver-controlled.

Future exit criteria:

- Runtime transcript or equivalent evidence for each smoke scenario.
- Differential/regression evidence proves wrapped/aliased CE methods preserve
  pinned CE 3.4.1 behavior except for accepted TraceWeaver authority and
  traceability deltas.
- Matrix and gap/change/exception records produced by the smoke.
- `/ce-code-review` and `/ce-doc-review` clean on wrappers/evidence.

## Test Scenarios

| Scenario | Expected result |
| --- | --- |
| Fresh project with no TraceWeaver files runs the candidate first-run entrypoint after Unit 2 names one and records its proof boundary. | Draft/held `requirements.md`, `traceability-matrix.md`, and `.traceweaver/intent-contract.yml` are created or requested with no accepted baseline hash, and implementation stops for requirements review. The entrypoint is not called accepted/default unless runtime proof exists. |
| Existing CE user reads migration/default-prompt guidance after Unit 2. | The user can identify the TraceWeaver-controlled first-run path, understand which familiar names are safe aliases, and see when `tw-*` must be used instead of raw `ce-*`. |
| User invokes familiar `lfg` before alias-target proof exists. | It reports held familiar-name compatibility or fails closed with the TraceWeaver-controlled next step; raw CE autopilot does not run. |
| User invokes wrapped plan with no approved requirement. | Wrapper creates or recommends a gap/change/clarification and does not produce implementation authority. |
| User invokes wrapped work with a valid Intent Capsule. | Work proceeds only within authorized scope and produces matrix/verification handoff. |
| User invokes direct packaged `ce-work`. | It delegates to a TraceWeaver wrapper, stops with a legacy/held message, is absent, or is proven read-only support; it may not run raw behavior-changing CE work. |
| Stop-only direct CE entrypoint is invoked. | Pre/post mutation evidence proves no unauthorized file, git, authority, matrix, evidence, external-command, or publication-surface mutation occurred before the stop. |
| Review finds logical but uncaptured behavior. | Behavior is recorded as dark behavior, proposed requirement, gap, change, exception, or removal candidate. |
| Commit/push/PR is requested with unresolved P1/P2 or failed verification. | Publication wrapper stops and reports the blocker. |
| Held connector/provider skill is requested. | TraceWeaver reports held/out-of-scope status and required authority/evidence, not silent fallback. |
| Upstream CE plugin is installed beside TraceWeaver. | TraceWeaver wrappers resolve packaged TraceWeaver skills or fail closed; they do not accidentally use external CE authority. |
| User invokes upstream CE entrypoint while both plugins are installed. | TraceWeaver intercepts, shadows, blocks, or records a held clean-replacement limitation for environments where raw CE remains installed. |
| Familiar alias target is missing. | Alias fails closed and suggests the TraceWeaver-controlled entrypoint instead of falling back to raw CE. |

## Risks And Controls

| Risk | Control |
| --- | --- |
| Wrapping all CE skills creates a large surface that dilutes the core workflow. | Use staged wrapper units, per-class evidence, and side-effect taxonomy before implementation. |
| Direct CE skills bypass TraceWeaver authority. | Raw behavior-bearing paths must delegate, stop, be absent, or be read-only support; direct bypass checks are required. |
| Stop messages hide side effects that already happened. | Runtime smoke must include pre/post mutation checks before accepting any stop, delegate, or read-only support behavior. |
| Connector/provider skills leak private or unpinned evidence. | Hold external connector/provider skills until privacy and provenance limitations are accepted. |
| Raw upstream CE remains installed beside TraceWeaver. | Coexistence smoke must test direct upstream entrypoints and hold clean-replacement claims if TraceWeaver cannot intercept or block them. |
| Wrapper instructions drift from upstream CE behavior. | Preserve CE source pin and support closure, record package deltas per wrapper, and require wrapper-equivalence smoke before familiar-workflow or clean-replacement claims. |
| Static docs overclaim runtime replacement. | Require runtime smoke before clean replacement, enforcing mode, or full replacement claims. |

## Open Questions

| Question | Recommendation | Blocking? |
| --- | --- | --- |
| Should wrapped user-facing names be `tw-*`, familiar `ce-*`, or both? | Use `tw-*` as canonical and familiar `ce-*` only as aliases after they cannot bypass TraceWeaver controls. | Blocks later Unit 3 wrapper plans. |
| Should out-of-scope CE skills be omitted from install or installed hidden? | Omit by default. If a surface is required as a packaged support dependency, reclassify it as `hidden`; `out-of-scope` remains absent from the package surface. | Blocks Unit 5/package layout. |
| Should connector skills like Slack become source-evidence providers in alpha? | Hold until privacy/provenance requirements are explicit. | Not blocking core method wrappers. |
| Should framework/style skills be project-specific add-ons? | Treat as out-of-scope for standalone Core until a consuming project requirement selects them. | Not blocking core method wrappers. |
| Should TraceWeaver continue beyond core method wrappers? | Run the early Unit 1A product checkpoint before Unit 2 acceptance; if full-surface value is not supported, narrow Unit 2 and later planning to core method surfaces. Re-run a broader checkpoint after Unit 3B before later learning, verification, publication, or enforcement wrapper plans. | Blocks Unit 2 broad-surface acceptance and later broad rollout plans; does not block Unit 0 or inventory-with-blockers. |

## Acceptance Criteria

### Executable Units 0-2

- `requirements.md` review is clean, or unresolved findings are accepted as
  exceptions/held conditions, before this plan's requirements are used as
  implementation authority.
- The canonical baseline hash verification command in this roadmap is rerun and
  recorded in the next evidence update if `requirements.md` changes again.
- `.traceweaver/intent-contract.yml` and root `traceability-matrix.md` freshness
  are verified against the same baseline id/hash, or explicit held conditions are
  recorded before wrapper policy or package-surface decisions are accepted.
- Unit 0 captures a hashable pre-remediation snapshot before modifying packaged
  skill, manifest, default-prompt, or package-guidance files.
- Unit 0 captures a hashable post-remediation snapshot before accepting safety
  evidence, including changed file hashes, manifest/default-prompt hashes,
  installed callable-surface state, direct-invocation transcript ids,
  stale-reset triggers, and every intentional package-surface delta.
- Unit 0 scopes every current-package safety result by named host/discovery mode,
  including global/local plugin precedence and prompt/slash-command surfaces
  where applicable. Untested modes are explicitly held and excluded from
  safe-to-proceed evidence.
- Current packaged behavior-bearing entrypoints pass Unit 0 safety evidence
  before Unit 1 is accepted as safe to proceed: each direct path delegates,
  stops, is absent by host discovery proof, or is eligible read-only support.
- Unit 0 records an interim user-facing TraceWeaver command, explicit held
  state, or blocking package-surface gap for every user-visible stop, delegate,
  or absent remediation.
- Unit 0 records a migration-discoverability check for user-visible remediation
  or keeps familiar-name compatibility held as safety-only until Unit 2 adoption
  smoke passes.
- Unit 0 includes `tw-auto` and TraceWeaver `lfg` in current-package safety
  evidence or records them as held current-package blockers before Unit 1 becomes
  safe-to-proceed evidence.
- Unit 0 attempted-side-effect evidence proves no network, provider,
  publication, credential, remote, or external mutation operation is attempted
  before a TraceWeaver stop/delegate/read-only boundary. Sandboxed failures
  caused only by fake credentials, missing remotes, disabled network, or
  unavailable providers do not close the safety gate.
- Unit 0 direct-invocation smoke runs under host-enforced filesystem and egress
  isolation, or uses static inspection only and keeps the entrypoint held.
- Unit 0 direct-invocation and Unit 2 coexistence smoke use adversarial fixtures
  that would trigger each risky side-effect category without TraceWeaver
  controls; unexercised fixture families keep the corresponding entrypoint or
  compatibility claim held.
- Unit 0 hostile-content negative smoke passes for every source/session/evidence
  ingestion entrypoint treated as safe-to-proceed, or those entrypoints remain
  held until instruction/data separation is proven.
- Unit 0 cannot close safety evidence until non-circular review evidence passes
  for changed skill bodies, manifests, default prompts, resolver rules,
  package-surface behavior, and the Unit 0 evidence record, unless a held
  condition records that no behavior-bearing package files changed and no
  review-bearing evidence record is used to close safety. Non-circular review
  means the review surface is a proven TraceWeaver-controlled post-remediation
  entrypoint, an external/manual review evidence record, or a host review command
  proven not to resolve through the unproven packaged direct `ce-code-review` or
  `ce-doc-review` paths.
- Unit 0 cannot close safety evidence until `traceability-matrix.md` contains
  rows for every changed behavior-bearing skill body, manifest/default-prompt or
  package-surface behavior, and every entrypoint remediation state, with
  authority, implementation location, safety evidence, verification method,
  validation question, held claims, and stale-reset trigger.
- Unit 1A inventories current TraceWeaver packaged behavior-bearing entrypoints,
  core CE method surfaces, and upstream `lfg` for the product-checkpoint evidence
  boundary. Unit 1B inventories all 37 upstream CE 3.4.1 `ce-*` skill
  directories, upstream loader-visible `lfg`, and every whole-plugin
  behavior-bearing surface only when the product checkpoint returns
  `full_surface_supported` or an accepted `product_exception`; otherwise broad
  surfaces are recorded as held with reopen triggers.
- Unit 1 treats upstream CE instruction-bearing content as untrusted source data
  during inventory and records instruction/data separation evidence or keeps
  affected classifications provisional/held.
- Unit 1 uses at least two independent discovery methods and treats discovery
  mismatches as blockers or accepted limitations before the inventory becomes
  safe-to-proceed evidence.
- Unit 1 classifications include required evidence, disconfirming test,
  reopen/reversal trigger, and explicit held evidence where runtime or closure
  proof is deferred. Reviewer evidence ids may be `pending_review` before
  `/ce-doc-review`; the accepted inventory evidence record must backfill final
  reviewer evidence ids after review passes.
- Held and out-of-scope rows include blocker, allowed claim boundary, CE-flow
  impact, reopen condition, and provisional dependency/consumer checks without
  overclaiming final non-dependency.
- Unit 1A records the early product checkpoint result before Unit 1B broad
  inventory or broad Unit 2 policy work begins. If full-surface value is not
  supported, Unit 1B, Unit 2, and later planning narrow to core method surfaces
  unless an accepted product exception authorizes broad-surface policy work.
- Unit 1A product checkpoint includes decision owner, evidence sources,
  representative user/workflow signals, non-core CE surfaces requested, pass/fail
  threshold, and default-to-core outcome when evidence is weak.
- Unit 2 records one selected branch before policy work begins:
  `full_surface_supported`, `narrow_to_core_method`, or `product_exception`.
  Branch scope controls the allowed Unit 2 files, side-effect categories,
  migration rows, compatibility checks, package-surface decisions, and acceptance
  rows; any item outside the selected branch is held.
- Unit 2 produces accepted canonical naming, migration, package-surface, wrapper
  policy packaging, and minimal installed callable-surface decisions only within
  the branch selected by the Unit 1A product checkpoint before later Unit 3
  wrapper plans start.
- Unit 2 identifies a candidate first-run/bootstrap entrypoint and updates
  default prompt/migration guidance only within the evidence boundary it has
  proven; `tw-auto` and `lfg` default/alias target status remain held until their
  required runtime proof exists.
- Unit 2 includes a product adoption check before accepting migration/default
  prompt, familiar-name compatibility, or first-run/bootstrap claims: a fresh
  TraceWeaver user and an existing CE user can identify the intended
  idea/intent-deepening/brainstorm/requirements/plan/work/review path, avoid raw
  CE bypass commands, and reach the correct suggested next step without command
  confusion, gate fatigue, or fallback to unwrapped CE entrypoints. `tw-*`
  wrapper plans may proceed while those claims remain held.
- The adoption check includes a simplicity guardrail with explicit friction
  thresholds for command path length, user decision count before proceeding,
  suggested-next-step clarity, and disconfirming behaviors that show the wrapped
  flow no longer preserves the simple CE method.
- The adoption check is task-based and recorded, with prompts, expected commands,
  pass/fail criteria, and a held familiar-name compatibility outcome whenever a
  user selects raw CE commands or cannot identify the candidate first-run path.
- The adoption check includes a representative end-to-end job for fresh and
  existing CE users: idea-to-requirements-to-plan or plan-to-review, artifact
  comprehension, time or step budget, manual edit count, stop/gap understanding,
  and valid next-gate handoff.
- The adoption check uses privacy-controlled fixture projects/accounts, consent
  or internal approval, minimized capture, redaction before persistence, a
  raw-transcript minimization/deletion decision, and negative scans for secrets,
  credential-like strings, user/local identifiers, proprietary content, and
  unrelated project data.
- The adoption check records that raw adoption transcripts are temporary
  pre-redaction custody material only, not authority evidence. If raw transcript
  capture is approved as necessary, the check records the approved temporary
  capture location, authorized access boundary, maximum raw retention period,
  approved capture mechanisms, deletion trigger, deletion confirmation, no
  unredacted persistence outside temporary storage, and a negative check of
  committed docs, validation artifacts, screenshots, PR text, issues, temp
  files, chat exports, shared evidence stores, traceability matrices,
  requirements, Intent Contracts, and authority records when those media are
  used.
- The adoption check names the fresh-user and existing-CE-user roles, minimum
  runs, allowed synthetic-agent use, and disconfirming behaviors that fail the
  gate.
- Adoption-sensitive claims require at least one real human fresh-user run and
  one real human existing-CE-user run; synthetic-only evidence keeps
  default-prompt migration, familiar-name compatibility, and first-run/bootstrap
  claims held.
- Unit 2 completes the sandboxed external-CE coexistence spike or records a held
  clean-replacement limitation plus a hard familiar-name compatibility decision
  for each claimed host/discovery mode before any familiar-name compatibility,
  `lfg` alias, clean-replacement, or external-CE interception claim proceeds.
  TraceWeaver-canonical `tw-*` wrapper plans may proceed while those claims remain
  explicitly held.
- Unit 2 manifest validation evidence proves any changed plugin manifest matches
  the accepted package-surface decision table, or records a held package-surface
  condition before Unit 2 closes.
- Unit 2 coexistence-spike evidence uses host-enforced filesystem and egress
  isolation, or records static-inspection-only held compatibility/interception
  claims.
- Unit 2 evidence is recorded in
  `docs/validation/traceweaver-ce-wrapper-policy-evidence.md`, including naming,
  migration, package-surface, adoption-smoke, coexistence-spike, wrapper
  equivalence policy, manifest-validation, close/reopen, and held-claim
  decisions.

### Roadmap Acceptance For Later Plans

These criteria are binding gates for later plans unless a later accepted
requirements change or plan amendment explicitly replaces them.

- Every wrapped or aliased behavior-bearing skill has a matrix row with
  requirement authority, implementation location, verification evidence, and
  validation question before its wrapper implementation closes.
- Every wrapped or aliased CE method has wrapper-equivalence evidence before
  familiar-workflow or clean-replacement claims are accepted.
- Unit 3A/3B core `tw-*` wrapper implementation does not close until a
  lightweight task-based adoption and simplicity smoke proves the
  TraceWeaver-canonical core path remains understandable and preserves the simple
  CE method, even if familiar-name compatibility and default-bootstrap claims are
  still held.
- `tw-auto` has an accepted authority contract, dependency-resolution proof,
  runtime smoke boundary, disconfirming tests, and close/reopen conditions before
  it is used as the first-run bootstrap or `lfg` alias target.
- The installed TraceWeaver plugin does not expose raw direct behavior-bearing CE
  workflows as TraceWeaver-controlled unless they delegate, stop, are absent, or
  are proven read-only support.
- Runtime smoke proves the approved controlled path from authority bootstrap to
  review/verification handoff before clean replacement claims are created.
- Adversarial runtime smoke covers external CE plugin coexistence, direct exact
  skill invocation, missing alias targets, prompt/slash-command surfaces,
  prompt-override attempts, and pre/post mutation checks.

## Suggested Next Step

Run `/ce-doc-review docs/plans/2026-05-02-001-feat-full-ce-341-traceweaver-authority-wrapping-plan.md`.
If that review passes, run `/ce-doc-review requirements.md` and confirm the
canonical baseline hash before using REQ-TW-033 through REQ-TW-047 as
implementation authority. Keep REQ-TW-048 held as candidate source evidence
until a separate requirements review promotes it. After that baseline gate is
clean or explicitly held, run `/ce:work` on Unit 0 first to snapshot and prove the current packaged
CE-derived surface is delegate-only, stop-only, absent, or read-only support.
Then run Unit 1A to create the current/core inventory and product-checkpoint
evidence. Run Unit 1B full-surface inventory and broad Unit 2 policy only if the
checkpoint returns `full_surface_supported` or records an accepted
`product_exception`; otherwise keep Unit 2 scoped to the core method path. Do not
start a Unit 3 wrapper plan until Unit 2 resolves canonical names, migration,
wrapper policy packaging, package-surface states, and the held `tw-auto`/`lfg`
bootstrap proof boundary for the selected branch.
