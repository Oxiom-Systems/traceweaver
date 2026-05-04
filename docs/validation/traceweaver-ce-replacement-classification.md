# TraceWeaver CE Replacement Classification Evidence

Status: `UNITS1_4_STATIC_READINESS_ACCEPTED`

Date/session: 2026-05-04, `ce:work`

Record ID: `TWCORE-CE-REPLACEMENT-CLASSIFICATION-2026-05-04-001`

Unit 0 review evidence:
`CE-DOC-REVIEW-2026-05-04-UNIT0-CE-REPLACEMENT-CLASSIFICATION-CLEAN-001`

Unit 0 review result: passed with no findings.

Units 1-4 implementation evidence:
`TWCORE-CE-REPLACEMENT-CLASSIFIER-GENERATED-2026-05-04-001`

Units 1-4 review evidence:
`CE-DOC-REVIEW-2026-05-04-UNITS1-4-CE-REPLACEMENT-CLASSIFICATION-CLEAN-001`

Units 1-4 review result: passed with no findings.

Units 1-4 review state: accepted as static-readiness implementation input.

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- baseline hash:
  `6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`
- authority source: `requirements.md`, REQ-TW-014, REQ-TW-020,
  REQ-TW-033 through REQ-TW-048
- Intent Contract: `.traceweaver/intent-contract.yml`
- matrix authority: `traceability-matrix.md`
- plan authority:
  `docs/plans/2026-05-04-001-feat-ce-replacement-inventory-classifier-plan.md`
- plan review evidence:
  `CE-DOC-REVIEW-2026-05-04-CE-REPLACEMENT-CLASSIFIER-PLAN-CLEAN-001`

## Decision

Unit 0 records the required Unit 1A product checkpoint for the CE replacement
classifier before any broad full-surface classification work begins.

Decision: `narrow_to_core_method`

Scope mode: `current_core_with_broad_surface_held`

Unit 0 is accepted as implementation input for Units 1 through 4 only.

This means the next classifier implementation may create and check current/core
TraceWeaver and CE-method classifications, plus held skeleton rows for broad
upstream CE surfaces. It may not perform or accept exhaustive 37-skill and
whole-plugin classification as implementation authority unless this checkpoint
is superseded by reviewed `full_surface_supported` evidence or an accepted
`product_exception`.

## Product Checkpoint

The full CE roadmap requires the early product checkpoint to record the decision
owner, evidence sources, representative user/workflow signals, non-core CE
skills requested, core-method alternative considered, and a pass/fail threshold.
It defaults to `narrow_to_core_method` unless evidence shows at least three
non-core CE surfaces are needed by real or representative users for the target
TraceWeaver workflow, or an accepted product exception authorizes broader policy
work despite weak demand evidence.

| Field | Value |
| --- | --- |
| Checkpoint ID | `TWCORE-CE-REPLACEMENT-UNIT1A-CHECKPOINT-2026-05-04-001` |
| Decision owner | Oxiom Systems |
| Decision | `narrow_to_core_method` |
| Scope mode | `current_core_with_broad_surface_held` |
| Pass threshold | At least three non-core CE surfaces needed by real or representative users for the target TraceWeaver workflow, or an accepted product exception. |
| Accepted product exception | None |
| Non-core CE surfaces requested | None recorded with enough specificity to pass the threshold. |
| Core-method alternative | Selected. Focus on idea/intent deepening, brainstorm/source evidence, requirements baseline, plan, authority gate, work, traceability check, review, verification/validation handoff, publication stop, and compound learning. |
| Review state | Passed with no findings: `CE-DOC-REVIEW-2026-05-04-UNIT0-CE-REPLACEMENT-CLASSIFICATION-CLEAN-001`. |

Representative signals:

- The user asked for a mechanical CE replacement inventory and classification
  before removing CE and relying on TraceWeaver-installed skills.
- The accepted product intent requires TraceWeaver to preserve the simple CE
  method while embedding authority, traceability, verification, validation, and
  change control.
- Current reviewed evidence records host conflicts and held runtime claims; it
  does not yet show demand for at least three specific non-core CE surfaces.

## Allowed Use

- Create the controlled classification schema and fixtures.
- Classify the current/core TraceWeaver method path.
- Keep currently packaged support/non-core surfaces held with explicit blockers
  and reopen conditions until Units 1 through 4 prove their wrapper, stop,
  absence, or read-only state.
- Generate held skeleton rows for broad upstream CE surfaces with blockers,
  dependency/consumer checks, allowed claims, held claims, and reopen triggers.
- Use this accepted Unit 0 evidence as implementation input for Units 1 through
  4 only.

## Held Claims

- exhaustive full CE 3.4.1 skill and whole-plugin classification as accepted
  authority;
- host CE plugin or skill removal;
- successful active-host TraceWeaver install;
- real `tw-auto`, `lfg`, `tw-grill`, or direct `ce-*` runtime invocation;
- clean CE replacement;
- runtime-equivalent CE workflow behavior;
- enforcing authority gate behavior;
- slash-command or prompt availability;
- autonomous commit, push, PR, release, or update behavior;
- release-ready, package-ready, upstream-ready, or R31-complete status.

## Current/Core Surface Classifications

These are controlled static classifications for Units 1 through 4, not runtime
authority. The checker requires each row to carry authority evidence,
side-effect category, rationale, disconfirming test, confidence, close
condition, and reviewer evidence before it can report static readiness.

| Surface | Classification | Path | Evidence state |
| --- | --- | --- | --- |
| `tw-grill` | Held | `plugins/traceweaver-core/skills/tw-grill/SKILL.md` | Static proven / runtime held |
| `ce-brainstorm` | Held | `plugins/traceweaver-core/skills/ce-brainstorm/SKILL.md` | Provisional target |
| `ce-plan` | Held | `plugins/traceweaver-core/skills/ce-plan/SKILL.md` | Runtime held |
| `tw-requirements-review` | Held | `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | Static proven / runtime held |
| `requirements-reviewer` | Held | `plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` | Static proven / runtime held |
| `tw-authority-gate` | Held | `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | Static proven / runtime held |
| `ce-work` | Held | `plugins/traceweaver-core/skills/ce-work/SKILL.md` | Runtime held |
| `tw-traceability-check` | Held | `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` | Static proven / runtime held |
| `systems-engineering-traceability` | Held | `plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md` | Static proven / runtime held |
| `ce-doc-review` | Held | `plugins/traceweaver-core/skills/ce-doc-review/SKILL.md` | Runtime held |
| `ce-code-review` | Held | `plugins/traceweaver-core/skills/ce-code-review/SKILL.md` | Runtime held |
| `ce-test-browser` | Held | `plugins/traceweaver-core/skills/ce-test-browser/SKILL.md` | Runtime held |
| `ce-test-xcode` | Held | `plugins/traceweaver-core/skills/ce-test-xcode/SKILL.md` | Runtime held |
| `ce-compound` | Held | `plugins/traceweaver-core/skills/ce-compound/SKILL.md` | Runtime held |
| `ce-compound-refresh` | Held | `plugins/traceweaver-core/skills/ce-compound-refresh/SKILL.md` | Runtime held |
| `lfg` | Aliased | `plugins/traceweaver-core/skills/lfg/SKILL.md` | Static proven / runtime held |
| `tw-auto` | Held | `plugins/traceweaver-core/skills/tw-auto/SKILL.md` | Static proven / runtime held |
| `using-agent-skills` | Held | `plugins/traceweaver-core/skills/using-agent-skills/SKILL.md` | Static proven / runtime held |

## Current Packaged Held Surfaces

These surfaces are currently packaged and callable, so they are not hidden
inside broad future scope. Unit 0 keeps them explicit as current packaged
support/non-core surfaces with blockers and reopen conditions.

| Surface | Path | Blocker | Allowed claim | Held / reopen condition |
| --- | --- | --- | --- | --- |
| `ce-commit` | `plugins/traceweaver-core/skills/ce-commit/SKILL.md` | Commit behavior has publication side effects and needs authority, trace, verification, review, and release-boundary gates. | Current packaged manual continuity only | Hold commit publication authority, runtime equivalence, and clean replacement until Units 1 through 4 prove wrapper, stop, absence, or read-only behavior and publication gates. |
| `ce-commit-push-pr` | `plugins/traceweaver-core/skills/ce-commit-push-pr/SKILL.md` | Commit, push, and PR behavior crosses publication boundaries and needs authority, trace, verification, review, release, and human-approval gates. | Current packaged manual continuity only | Hold autonomous publication, pull request authority, runtime equivalence, and clean replacement until Units 1 through 4 prove wrapper, stop, absence, or read-only behavior and publication gates. |
| `ce-debug` | `plugins/traceweaver-core/skills/ce-debug/SKILL.md` | Debug and defect-resolution work can change behavior and needs a defect, requirement, gap, exception, test, and trace route. | Current packaged manual continuity only | Hold implementation authority, runtime equivalence, and clean replacement until Units 1 through 4 prove defect-source routing, test evidence, trace updates, and authority stops. |
| `ce-resolve-pr-feedback` | `plugins/traceweaver-core/skills/ce-resolve-pr-feedback/SKILL.md` | PR feedback resolution can mutate scope, evidence, review state, and publication readiness, so it needs authority and release-boundary guards. | Current packaged manual continuity only | Hold implementation authority, review closure authority, publication authority, and clean replacement until Units 1 through 4 prove feedback provenance, authority gates, trace updates, and held publication stops. |
| `ce-session-extract` | `plugins/traceweaver-core/skills/ce-session-extract/SKILL.md` | Session extraction is source-evidence ingestion and needs privacy, provenance, retention, and authority-boundary policy. | Current packaged manual continuity only | Hold source authority, implementation authority, and clean replacement until Units 1 through 4 prove privacy/provenance handling and prevent session material from becoming authority without review. |
| `ce-session-inventory` | `plugins/traceweaver-core/skills/ce-session-inventory/SKILL.md` | Session inventory discovers candidate source evidence and needs privacy, provenance, retention, and authority-boundary policy. | Current packaged manual continuity only | Hold source authority, implementation authority, and clean replacement until Units 1 through 4 prove privacy/provenance handling and prevent session material from becoming authority without review. |
| `ce-sessions` | `plugins/traceweaver-core/skills/ce-sessions/SKILL.md` | Session search can surface candidate source evidence and needs privacy, provenance, retention, and authority-boundary policy. | Current packaged manual continuity only | Hold source authority, implementation authority, and clean replacement until Units 1 through 4 prove privacy/provenance handling and prevent session material from becoming authority without review. |
| `ce-setup` | `plugins/traceweaver-core/skills/ce-setup/SKILL.md` | Setup and health-check behavior can mutate or report environment state and needs pre/post evidence plus authority-stop rules. | Current packaged manual continuity only | Hold environment readiness authority, implementation authority, and clean replacement until Units 1 through 4 prove setup operations, environment claims, and stop boundaries. |
| `ce-worktree` | `plugins/traceweaver-core/skills/ce-worktree/SKILL.md` | Worktree behavior mutates repository/workspace state and needs pre/post evidence, branch policy, and authority-stop rules. | Current packaged manual continuity only | Hold workspace mutation authority, implementation authority, and clean replacement until Units 1 through 4 prove workspace mutation boundaries, trace updates, and held publication stops. |

## Package Support Held Surfaces

Package support surfaces are discovered from plugin manifests and held until
reviewed evidence proves they preserve authority gates and stale-reset behavior.

| Surface | Manifest | Blocker | Allowed claim | Held / reopen condition |
| --- | --- | --- | --- | --- |
| `interface.defaultPrompt` | `.codex-plugin/plugin.json` | Codex default prompts steer agent behavior and need authority-boundary review before U9 or host-removal readiness. | Current packaged advisory routing only | Hold default prompt authority, runtime invocation, and clean replacement until reviewed evidence proves prompt routing preserves TraceWeaver authority gates and held publication stops. |

## Broad-Surface Held Skeletons

Broad surfaces remain held until the checkpoint is reopened by reviewed demand
evidence or an accepted product exception. These are held planning skeletons
only; they do not authorize broad compatibility, runtime equivalence, release
readiness, or clean replacement. The controlled YAML records one held skeleton
row per upstream CE skill, with optional grouping only in prose.

| Surface | Group | Held reason |
| --- | --- | --- |
| `ce-agent-native-architecture` | Agent native | Architecture guidance requires separate authority, design, validation, and provenance routing. |
| `ce-agent-native-audit` | Agent native | Audit scoring requires separate authority, validation, and score provenance routing. |
| `ce-frontend-design` | Design/UI | Frontend design guidance requires UI validation evidence, artifact provenance, and release-claim controls. |
| `ce-polish-beta` | Design/UI | Browser-polish workflows require runtime and UI validation boundaries. |
| `ce-demo-reel` | Design/UI | Demo capture touches artifact provenance and publication boundaries. |
| `ce-ideate` | Ideation/strategy | Ideation can create candidate source evidence and needs provenance and baseline-promotion routing. |
| `ce-strategy` | Ideation/strategy | Strategy work can create product-source evidence and needs stakeholder-intent routing. |
| `ce-product-pulse` | Ideation/strategy | Product-signal reporting needs privacy, provenance, and authority routing. |
| `ce-optimize` | Optimization | Optimization needs metric authority, regression validation, and rollback boundaries. |
| `ce-simplify-code` | Optimization | Simplification needs traceability, regression validation, and rollback boundaries. |
| `ce-proof` | Proof/release | Proof loops touch validation and publication boundaries. |
| `ce-release-notes` | Proof/release | Release notes touch publication and R31 release claims. |
| `ce-slack-research` | Connectors/reporting | Slack research needs external-source provenance, privacy, and trust-boundary controls. |
| `ce-report-bug` | Connectors/reporting | Bug reporting needs defect/source-record policy, provenance, and trust-boundary controls. |
| `ce-update` | Update/delegate | Update flows mutate package boundaries and need update policy and publication stops. |
| `ce-work-beta` | Update/delegate | Delegated work mutates execution boundaries and needs subagent authority slices. |

## Upstream Out-Of-Scope Surfaces

These upstream CE 3.4.1 skills are deliberately represented so later checker
work can distinguish intentional exclusion from forgotten or unclassified
surfaces.

| Surface | Upstream path | Out-of-scope blocker | Dependency / consumer gate | Allowed claim | Held / reopen condition |
| --- | --- | --- | --- | --- | --- |
| `ce-clean-gone-branches` | `skills/ce-clean-gone-branches/SKILL.md` | Git branch hygiene is outside the authority-preserving TraceWeaver alpha workflow and is not packaged in the current TraceWeaver surface. | Not applicable; no current TraceWeaver consumer. | Deliberately out of scope for Unit 0 current/core work. | Hold clean replacement, runtime equivalence, and host removal readiness until reviewed demand evidence, a new requirement, or an accepted product exception makes branch-cleanup behavior part of the TraceWeaver-controlled method. |
| `ce-dhh-rails-style` | `skills/ce-dhh-rails-style/SKILL.md` | Framework-specific Rails style guidance is outside the baseline authority-preserving TraceWeaver alpha workflow and is not packaged in the current TraceWeaver surface. | Not applicable; no current TraceWeaver consumer. | Deliberately out of scope for Unit 0 current/core work. | Hold clean replacement, runtime equivalence, and host removal readiness until reviewed demand evidence, a new requirement, or an accepted product exception makes framework-specific Rails style behavior part of the TraceWeaver-controlled method. |
| `ce-gemini-imagegen` | `skills/ce-gemini-imagegen/SKILL.md` | External image-generation provider behavior is outside the baseline authority-preserving TraceWeaver alpha workflow and is not packaged in the current TraceWeaver surface. | Not applicable; no current TraceWeaver consumer. | Deliberately out of scope for Unit 0 current/core work. | Hold clean replacement, runtime equivalence, and host removal readiness until reviewed demand evidence, a new requirement, or an accepted product exception makes external image-generation behavior part of the TraceWeaver-controlled method. |

## Stale Reset

This record resets to held if:

- the requirements baseline hash changes;
- the plan review evidence is superseded;
- Unit 1A checkpoint evidence changes;
- non-core CE demand evidence adds or removes requested surfaces;
- an accepted product exception is added, changed, expires, or is withdrawn;
- the TraceWeaver packaged skill surface changes;
- the CE upstream source version, commit, tag, or aggregate fingerprint changes;
- the host-visible skill surface changes.

## Next Step

Use the accepted Units 1 through 4 static-readiness evidence as input to plan
Unit 5 host-removal readiness checking and Unit 6 authority-record handoff. Do
not remove host CE, claim runtime invocation, or claim clean replacement from
this record. Host CE removal, runtime invocation, clean replacement, enforcing
behavior, publication, release-ready, package-ready, upstream-ready, and R31
claims remain held.

<!-- BEGIN TRACEWEAVER CE REPLACEMENT GENERATED EVIDENCE -->
## Generated CE Replacement Classifier Evidence

Generated: 2026-05-04T14:34:41Z

Checker status: `passed_static_readiness`

Scope mode: `current_core_with_broad_surface_held`

Unit 0 review evidence:
`CE-DOC-REVIEW-2026-05-04-UNIT0-CE-REPLACEMENT-CLASSIFICATION-CLEAN-001`

Baseline:
`REQ-BASELINE-2026-04-30-001` /
`6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`

CE source pin:
`TWCORE-CE-SOURCE-PIN-2026-05-01-002` /
version `3.4.1` /
commit `d685f0794863a73ae3ca3620d2ae747510e9eaa0` /
aggregate fingerprint `6892159ad685e59230514f9e58fb7ffd06052d84da643c73ac95b787e3c60d23`

### Blockers First

- No static/readiness blockers found for Units 1-4 current/core scope.

Held claims:

- runtime invocation
- enforcing authority gates
- publication
- release-ready
- package-ready
- upstream-ready
- host CE removal
- clean replacement
- runtime-equivalent CE behavior
- R31-complete status

### Counts

| Count | Value |
| --- | ---: |
| Upstream CE skills represented | 37 |
| Upstream `lfg` represented | 1 |
| Packaged TraceWeaver skills | 27 |
| Current/core rows | 18 |
| Current packaged held rows | 9 |
| Package support held rows | 1 |
| Broad held rows | 16 |
| Out-of-scope rows | 3 |
| Direct callable skills | 27 |
| Selected agent files | 49 |
| Prompt surfaces discovered | 0 |
| Command surfaces discovered | 0 |
| Default prompt surfaces discovered | 1 |
| MCP/app connector surfaces discovered | 0 |
| Install metadata surfaces discovered | 3 |
| External dependencies discovered | 0 |
| Hidden rows | 0 |
| Held rows | 43 |
| Plugin manifests discovered | 3 |
| Plugin references discovered | 18 |
| Host-visible skills scanned | 0 |
| Unclassified rows | 0 |

Generated JSON:
`.traceweaver/ce-replacement-classification.generated.json`

Runtime invocation, enforcement, publication, release-ready, clean-replacement,
host CE removal, package-ready, upstream-ready, and R31 claims remain held.
<!-- END TRACEWEAVER CE REPLACEMENT GENERATED EVIDENCE -->
