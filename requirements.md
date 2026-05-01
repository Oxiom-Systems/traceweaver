---
id: TW-REQ-MASTER-2026-04-30-001
status: accepted_controlled_baseline
date: 2026-04-30
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 99d500e510048786fa3ac5eadf61caffd44ffb520bf61daf2a29688472033211
acceptance_state: accepted
acceptance_review_id: CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001
accepted_at: 2026-04-30
owner: Oxiom Systems
---

# TraceWeaver Master Requirements

This is the accepted master traceable requirements baseline for TraceWeaver
Core. It is the planning authority index for product, skill, plugin, and
validation work at `REQ-BASELINE-2026-04-30-001`.

Source brainstorm documents remain evidence and rationale. This file converts
that evidence into controlled requirements with stable IDs, stakeholder intent,
verification methods, validation questions, and current status.

## Baseline Acceptance

This baseline is accepted planning authority for the approved requirements
below. Acceptance requires all of the following to be recorded in this file or
in a cited validation record:

- `status: accepted_controlled_baseline`;
- `acceptance_state: accepted`;
- a reproducible `baseline_hash_sha256` produced by the canonical hash
  procedure below;
- the `/ce-doc-review` evidence ID and date that accepted the baseline or
  recorded closure of blocking findings;
- per-requirement status promotion from `candidate_for_review` to `approved`,
  `held`, or `superseded`.

Acceptance evidence:

- review evidence: `CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001`;
- review command: `/ce-doc-review requirements.md`;
- review result: no findings after P2 schema ambiguity closure;
- accepted date: 2026-04-30.

U6 implementation artifacts, U7 claim records, Intent Contracts, and task
capsules must cite the accepted `baseline_id` and `baseline_hash_sha256`.

Canonical baseline hash procedure:

1. Start from the candidate accepted `requirements.md` content using LF line
   endings and UTF-8 bytes.
2. Replace only the frontmatter value of `baseline_hash_sha256` with the literal
   placeholder `CANONICAL_HASH_PLACEHOLDER`.
3. Compute `shasum -a 256 requirements.md` over that canonicalized content.
4. Record the resulting hash in `baseline_hash_sha256` and cite the review or
   validation record that reproduced the same command.

Open-gap acceptance decisions:

| Open gap | Acceptance effect | Required closure evidence |
| --- | --- | --- |
| Baseline hash procedure | Closed for baseline acceptance. | `baseline_hash_sha256` recorded with review evidence after a clean `/ce-doc-review`. |
| Intent Contract schema definition | Closed for baseline acceptance. | Schema section and linked requirements exist in this baseline. |
| Intent Contract template materialization | Blocks U6b Unit 2, not baseline acceptance. | Package/template file-list evidence and install/static materialization evidence. |
| Meaningful-behavior and minimal-capsule examples | Blocks U6b Unit 2, not baseline acceptance. | Template examples or wrapper guidance covering meaningful and low-risk changes. |
| CE upstream source pin or accepted local-cache limitation | Blocks CE vendoring and U7 claims; baseline acceptance may proceed with the gap held. | Upstream commit/tag source pin, or complete accepted local-cache limitation record. |
| CE transitive closure audit | Blocks U6b Unit 2 for selected CE workflow materialization. | Static closure audit for selected `references/`, `scripts/`, and `assets/` paths. |
| CE agent continuity | Blocks agent-backed CE behavior and clean replacement claims; baseline acceptance may proceed with the gap held. | Selected agent package/install evidence, or per-surface limitation and claim downgrade record. |
| Advisory UX runtime behavior | Blocks Unit 3/U9 runtime behavior claims, not Unit 2 static policy work. | Runtime or wrapper evidence proving warning, gap-routing, held-claim, and unchanged-CE behavior. |
| Dynamic discovery and runtime invocation | Blocks U6b-dynamic/U9, release-ready, and clean replacement claims. | Observed runtime transcript or accepted later limitation. |

## Authority Rule

TraceWeaver Core is a systems-engineering control layer for agentic software
development. Its purpose is to preserve intent, authority, and traceability as
agents move from stakeholder needs to requirements, plans, code, tests, and
release decisions.

Core invariant:

```text
No agent may implement, review, or modify behavior unless it can point to:
1. stakeholder intent,
2. approved requirement or approved exception,
3. verification method,
4. validation question,
5. current baseline version.
```

Agents may help create requirements, plans, code, tests, and evidence, but they
may not silently promote their own interpretation into authority.

Bootstrap exception: before this baseline was accepted, the draft authorized
only baseline-formation work, including reviewing this file, resolving review
findings, creating the first Intent Contract draft, and recording acceptance
evidence. That bootstrap path is closed by this accepted baseline and does not
authorize implementation, U7 release claims, clean CE replacement claims, or
runtime enforcement claims.

## Alpha Intent Contract Schema

The alpha authority model is file-based. The plugin package must provide
templates, and consuming repositories create project-specific records under
`.traceweaver/`.

Minimum consuming-repo artifact paths:

```text
.traceweaver/intent-contract.yml
.traceweaver/task-capsules/
.traceweaver/trace-records/
.traceweaver/gaps/
.traceweaver/changes/
.traceweaver/exceptions/
```

Minimum `intent-contract.yml` fields:

- `intent_contract_id`;
- `baseline_id`;
- `baseline_hash_sha256`;
- `traceweaver_mode`;
- `stakeholder_intent[]` with `id`, `source`, `summary`, and
  `validation_question`;
- `approved_requirements[]` with `id`, `intent_ids`, `statement`,
  `authority_status`, `verification_method`, `validation_method`,
  `validation_question`, and `acceptance_criteria`;
- `approved_exceptions[]` with `id`, `linked_requirement`, `reason`, `owner`,
  `decision_source`, and `revisit_trigger`;
- `must_not_change[]`;
- `blocked_assumptions[]`.

Minimum task-capsule fields:

- `task_id`;
- `baseline_id`;
- `baseline_hash_sha256`;
- `authorized_by`;
- `intent_served`;
- `verification_required`;
- `validation_question`;
- `must_not_change`;
- `open_assumptions`;
- `next_step`.

Minimum gap, change, and exception records must include `id`, `linked_intent`,
`reason`, `proposed_disposition`, `owner`, `review_gate`, and `status`.
Change and exception records must include `linked_requirement`. Gap records may
set `linked_requirement: null` only when the gap exists because no approved
requirement exists yet; those pre-authority gaps must include
`proposed_requirement_id` or `clarification_question_id` so the record can be
promoted, rejected, or closed without inventing authority.

`traceweaver_mode` values are `off`, `advisory`, and `enforcing`. Alpha default
is `advisory`. A consuming repository may override the plugin default only in
`.traceweaver/intent-contract.yml`. `enforcing` cannot be the default or claimed
until dynamic/runtime validation approves enforcing mode.

## Source Artifacts

| Source ID | Artifact | Content SHA-256 | Review evidence | Role |
| --- | --- | --- | --- | --- |
| SRC-REQ-001 | `docs/brainstorms/2026-04-25-systems-engineering-traceability-skill-requirements.md` | `35e347980e92bf08051cbb1b8f8f9adbd27fd6bdad8fdca10c665b3be70a7278` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | Original systems-engineering traceability and Intent Contract requirements. |
| SRC-REQ-002 | `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md` | `89e5ecfc04a18a047de5d618f72e522ff0f5bdeac4460b17cac33bc0b95ff94a` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | Core 11 taxonomy, CE adapter boundary, and Intent Contract taxonomy requirements. |
| SRC-PLAN-001 | `docs/plans/2026-04-30-001-feat-traceweaver-clean-ce-plugin-swap-plan.md` | `bf69e08e07cc331a59ce55b11c8f6980f756920b8afec32c3aefe2381fc8d0b1` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | Active U6 Unit 2 plan for CE-compatible plugin materialization. |
| SRC-VAL-001 | `docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md` | `c2e10ddec916c4a643f2e600b95fb6e8c710a45f4595f7ed38f0f02fd11f80c5` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | U5.5 reduced static scope evidence. |
| SRC-VAL-002 | `docs/validation/traceweaver-core-11-u6a-runtime-scope.md` | `37b07e06109984aa49201869447d9703b0ec00c6997a7085ad1314e306bceb47` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | U6a static runtime-scope decision. |
| SRC-VAL-003 | `docs/validation/traceweaver-core-11-u6b-plugin-runtime.md` | `9f6808e7902d6436dfdf6036049bfe21249d6eeaa84266e1e2314971e4f9e3cf` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | U6b alpha static install/materialization evidence. |
| SRC-VAL-004 | `docs/validation/traceweaver-core-11-ce-runtime-inventory.md` | `1d497b19db33602a5fa2fa92e33286f3afac2d230a1a3e14a6d3a273fb9f26c1` | CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001 | CE 3.3.2 runtime inventory for clean-swap planning. |

If any source artifact changes after baseline acceptance, the changed source may
not update requirement authority until a validation delta records the new source
hash, affected requirements, review evidence, and stale-reset decision.

## Stakeholder Intent

| Intent ID | Stakeholder intent | Validation question |
| --- | --- | --- |
| INTENT-TW-001 | Preserve the stakeholder's original intent through agentic planning, implementation, review, and release decisions. | Can a reviewer trace each meaningful behavior change back to what the stakeholder actually wanted? |
| INTENT-TW-002 | Prevent agents from silently converting their own assumptions into implementation authority. | When an agent assumes something, is it recorded as a question, proposed requirement, exception, risk, or rejected assumption instead of implemented silently? |
| INTENT-TW-003 | Provide a lightweight systems-engineering workflow that is usable by coding agents without requiring a heavyweight requirements database. | Can a normal repo use file-based TraceWeaver artifacts to control requirements, traceability, evidence, and changes? |
| INTENT-TW-004 | Preserve the Compound Engineering workflow while adding TraceWeaver authority controls. | Can users keep CE planning, work, review, and compound workflows while TraceWeaver records authority warnings and held claims? |
| INTENT-TW-005 | Ship only claims that have evidence, and keep unproven runtime/release claims explicitly held. | Are alpha, static, dynamic, release, upstream, and clean-replacement claims separated in validation records? |
| INTENT-TW-006 | Keep public artifacts clean of private provenance, protected source text, and unsupported compliance claims. | Do public docs and plugin files avoid private paths, protected source names, copied source text, and unsupported standards-conformance language? |

## Master Requirements

Status values:

- `approved`: accepted as planning authority for the named baseline version.
- `candidate_for_review`: captured in a draft baseline and pending
  `/ce-doc-review` acceptance before it may drive U6 implementation or U7
  claims.
- `candidate`: captured but needs review or later scope decision.
- `held`: explicitly not approved for implementation or release claims yet.
- `superseded`: replaced by a later requirement or accepted baseline.

### Authority And Intent

Meaningful behavior means any change that can affect skill instructions,
workflow routing, installed artifacts, validation claims, public docs,
release/package claims, source provenance, user-visible behavior, or the
authority chain itself. Uncertain cases are meaningful until explicitly recorded
otherwise. Low-risk or documentation-only work may use a minimal Intent Capsule,
but the lighter form does not weaken authority: a meaningful change still must
cite an approved requirement, approved exception, or explicit gap/change
proposal that blocks implementation until approved.

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-001 | TraceWeaver must define an Intent Contract as the controlled authority baseline for agent work. | INTENT-TW-001, INTENT-TW-002 | Inspection of `requirements.md`, Intent Contract templates, and plugin docs. | Does every agent-facing workflow identify the authority baseline before behavior changes? | SRC-REQ-001 R54-R62; SRC-REQ-002 R7a-R7c | approved |
| REQ-TW-002 | No agent may implement, review, or modify behavior unless it can cite stakeholder intent, approved requirement or exception, verification method, validation question, and current baseline version. | INTENT-TW-001, INTENT-TW-002 | Inspection of wrapper prompts, task capsule template, and trace records. | Are unauthorized changes routed to gaps/changes/exceptions instead of implementation? | SRC-REQ-001 R54-R62; SRC-REQ-002 R19-R22 | approved |
| REQ-TW-003 | Agent assumptions must not become implementation authority. They must become an open question, proposed requirement, approved exception, accepted risk, or rejected assumption. | INTENT-TW-002 | Inspection of authority-gate guidance and gap/change/exception templates. | Can reviewers see each assumption's disposition? | SRC-REQ-001 R57-R60; SRC-REQ-002 R7c | approved |
| REQ-TW-004 | Every meaningful task must have an Intent Capsule or equivalent bounded work package naming `authorized_by`, `intent_served`, `verification_required`, `validation_question`, `must_not_change`, and open assumptions. | INTENT-TW-001, INTENT-TW-002 | Inspection of task capsule template and wrapper guidance. | Does each task carry enough authority context to prevent drift? | SRC-REQ-001 R56-R61; SRC-REQ-002 R7b, R21 | approved |
| REQ-TW-024 | TraceWeaver must classify changes conservatively: skill instructions, workflow routing, installed artifacts, validation claims, public docs, release/package claims, source provenance, user-visible behavior, and authority-chain changes are meaningful by default. | INTENT-TW-001, INTENT-TW-002 | Inspection of wrapper guidance, task capsules, and trace records. | Can agents avoid authority controls by labeling support or documentation work as non-meaningful? | 2026-04-30 baseline review finding; SRC-REQ-001 R18-R22 | approved |
| REQ-TW-025 | Advisory alpha must support a minimal Intent Capsule for low-risk or documentation-only work, containing at least baseline ID/hash, approved requirement or approved exception, stated intent, verification/review step, and next-step handoff. If approved authority does not exist, the capsule may only create a gap/change/clarification proposal and must block implementation until that proposal is approved. | INTENT-TW-003, INTENT-TW-005 | Inspection of templates and example task capsules. | Can contributors use TraceWeaver without turning every low-risk edit into a heavyweight requirements exercise or bypassing authority? | 2026-04-30 baseline review finding; SRC-PLAN-001 | approved |
| REQ-TW-031 | Unit 2 must materialize the alpha Intent Contract template set and schema defined in this baseline, including `intent-contract.yml`, task capsules, trace records, gaps, changes, and exceptions under `.traceweaver/`. | INTENT-TW-001, INTENT-TW-003 | Inspection of package templates, consuming-repo template paths, and schema fields. | Can implementers create authority records without inventing schema decisions during U6b Unit 2? | 2026-04-30 baseline review finding; SRC-PLAN-001 | approved |

### Traceability And Evidence

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-005 | TraceWeaver must maintain a controlled chain from stakeholder intent to captured needs, reviewed requirements, approved authority or exception, implementation, verification, validation, and change control. | INTENT-TW-001, INTENT-TW-003 | Inspection of operating model, traceability template, and U6/U9 evidence. | Can a reviewer traverse the chain without guessing? | SRC-REQ-001 R1-R6, R34-R36; SRC-REQ-002 lifecycle placement | approved |
| REQ-TW-006 | Meaningful behavior without approved intent, requirement or exception trace must be classified as dark behavior. | INTENT-TW-001, INTENT-TW-002 | Review of traceability-check guidance and review evidence. | Are untraced behaviors removed, linked, or approved as exceptions? | SRC-REQ-001 R18-R22, R60; SRC-REQ-002 R22 | approved |
| REQ-TW-007 | TraceWeaver must keep verification evidence separate from validation evidence and must carry validation questions with tasks. | INTENT-TW-001, INTENT-TW-003 | Inspection of templates and trace records for distinct verification and validation fields. | Does passing tests still leave the stakeholder-value question visible? | SRC-REQ-001 R3, R14-R16, R61 | approved |
| REQ-TW-008 | The Markdown traceability matrix is the authoritative audit record; diagrams are derived views only. | INTENT-TW-003 | Inspection of traceability matrix template and operating-model guidance. | If a diagram and matrix disagree, does the matrix control? | SRC-REQ-001 R9-R12 | approved |

### Core Skill Architecture

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-009 | TraceWeaver Core must target the eleven-skill systems-engineering suite in controlled promotion increments. | INTENT-TW-003, INTENT-TW-005 | Inspection of skill folders, taxonomy requirements, and promotion records. | Is the full suite visible without claiming all skills are runtime-ready? | SRC-REQ-002 R1-R15 | approved |
| REQ-TW-010 | `requirements-reviewer` and `systems-engineering-traceability` must remain upstream-neutral Core skills and must not depend on CE commands, prompts, reviewer agents, or plugin-specific lifecycle hooks. | INTENT-TW-003, INTENT-TW-004 | Inspection of selected skill content and CE wrapper boundaries. | Can the Core skills be used outside CE? | SRC-REQ-001 R51-R53; SRC-REQ-002 R2-R3 | approved |
| REQ-TW-011 | U6b Unit 2 alpha materialization must include only the selected authority foundation for the current scope: `requirements-reviewer`, `systems-engineering-traceability`, Intent Contract templates, advisory authority-gate guidance, and selected CE-compatible surfaces approved by scope records. | INTENT-TW-001, INTENT-TW-003 | Inspection of taxonomy, requirements, staged runtime records, and installed plugin paths. | Does the first alpha slice define authority without pulling the full Core suite into runtime scope? | SRC-REQ-002 R4-R7c; SRC-VAL-002; SRC-VAL-003 | approved |
| REQ-TW-012 | Runtime scope must stay staged: U6 alpha may include only selected Light v0.1 runtime skills and later selected CE-compatible surfaces until new scope decisions approve more. | INTENT-TW-005 | Inspection of U5.5, U6a, U6b, and promotion records. | Are non-selected Core 11 skills held until separately scoped? | SRC-VAL-001; SRC-VAL-002; SRC-VAL-003 | approved |
| REQ-TW-026 | Needs capture and risk/gap/change-control runtime materialization remain future or separately scoped Core batch work unless a later accepted scope decision selects them. They may appear as templates or held routing targets in advisory alpha. | INTENT-TW-003, INTENT-TW-005 | Inspection of scope records, plugin package, and held-claim records. | Can U6b Unit 2 proceed without silently expanding into the full Core 11 suite? | 2026-04-30 baseline review finding; SRC-REQ-002 R4-R15 | approved |

### CE Adapter And Plugin Alpha

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-013 | TraceWeaver CE wrappers must wrap or invoke Core skills; they must not redefine requirements quality, traceability authority, risk/gap handling, verification, validation, or baseline rules. | INTENT-TW-004 | Inspection of CE wrapper skills and plugin docs. | Can CE adapter code be changed without changing Core semantics? | SRC-REQ-001 R53; SRC-REQ-002 R16-R22 | approved |
| REQ-TW-014 | TraceWeaver must preserve selected CE workflow skill names for compatibility while keeping clean CE replacement claims held until runtime proof exists. | INTENT-TW-004, INTENT-TW-005 | Install smoke and U9 runtime proof. | Can users keep their CE workflow without TraceWeaver overclaiming replacement? | SRC-PLAN-001; SRC-VAL-004 | approved |
| REQ-TW-015 | The plugin README and manifests must describe alpha skill invocation accurately and must not advertise slash commands unless prompt/command files are installed and proven. | INTENT-TW-005 | Inspection of plugin README, manifests, and install manifest. | Does a user get exactly what the docs say they get after install? | SRC-VAL-003; plugin README | approved |
| REQ-TW-016 | The documented Codex install command for alpha must materialize selected skills using `--include-skills`. | INTENT-TW-004, INTENT-TW-005 | Isolated install smoke using the README command. | Can a developer copy the command and get usable skills? | SRC-VAL-003 | approved |
| REQ-TW-017 | Unit 2 must resolve CE upstream source pin before vendoring selected CE files, or record an accepted local-cache-only limitation that keeps CE vendoring/release claims held. | INTENT-TW-005, INTENT-TW-006 | Inspection of CE source inventory and package-local source map. | Is copied CE content traceable to a source authority or explicitly limited? | SRC-PLAN-001; SRC-VAL-004 | approved |
| REQ-TW-018 | Unit 2 must prove transitive closure for selected CE support files referenced by `SKILL.md` files under `references/`, `scripts/`, and `assets/`. | INTENT-TW-004, INTENT-TW-005 | Static closure audit and isolated install path check. | Can a selected CE skill run without dangling support-file references? | SRC-PLAN-001 | approved |
| REQ-TW-027 | U6b Unit 2 must define static advisory policy only: held-claim language, unchanged-CE-surface identification, template guidance, and no-enforcement disclaimers. Flow-specific warning, gap-routing, and held-claim runtime behavior for CE planning, work, review, and compound flows remains held for Unit 3/U9 wrapper/runtime proof. | INTENT-TW-004, INTENT-TW-005 | Inspection of CE wrapper docs, adapter skills, and smoke evidence. | Can users understand what TraceWeaver adds without mistaking static advisory policy for proven runtime behavior? | 2026-04-30 baseline review finding; SRC-PLAN-001 | approved |
| REQ-TW-028 | Unit 2 must either materialize selected CE agent files required by selected CE workflow surfaces and record package/install evidence, or record an explicit limitation that enumerates each affected CE workflow surface and allowed claim: `name_preserved_only`, `static_wrapper_available`, `agent_backed_unavailable`, or `runtime_equivalent_proven`. `ce-code-review` and `ce-doc-review` compatibility require required-agent evidence or an explicit held claim. | INTENT-TW-004, INTENT-TW-005 | Package file-list evidence, install evidence, or held-limitation record. | Can `ce-code-review` and `ce-doc-review` compatibility claims be evaluated without guessing whether their agents are present? | 2026-04-30 baseline review finding; SRC-VAL-004 | approved |
| REQ-TW-029 | A local-cache-only CE source limitation must record linked requirement, approver or decision source, named CE plugin install or package source, observed CE plugin version, install path, capture date, cache version or aggregate fingerprint, file inventory hashes, copied file classes, public-claim restrictions, U7 eligibility effect, stale-reset trigger, close condition, and a statement of what remains unproven without upstream source before it can substitute for an upstream CE source pin. | INTENT-TW-005, INTENT-TW-006 | Inspection of accepted limitation records and source map. | Does the local-cache path preserve provenance discipline instead of weakening the vendoring gate? | 2026-04-30 baseline review finding; SRC-PLAN-001; SRC-VAL-004 | approved |

### Claims, Validation, And Public Hygiene

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-019 | U6b-alpha must be limited to package/install/static materialization evidence; runtime invocation and dynamic no-forced discovery must remain U6b-dynamic or U9 proof. | INTENT-TW-005 | Inspection of U6a and U6b records. | Can reviewers distinguish static install evidence from runtime behavior proof? | SRC-VAL-002; SRC-VAL-003 | approved |
| REQ-TW-020 | U7 release-claim records must stay narrow: installable alpha and advisory/static install evidence may be approved if proven, while clean CE replacement, dynamic discovery, slash commands, full Core 11 runtime, and release-ready status remain held. | INTENT-TW-005 | Inspection of promotion records and U7 claim records when created. | Do release claims match the evidence actually collected? | SRC-PLAN-001; SRC-VAL-003 | approved |
| REQ-TW-021 | Public artifacts must not include private paths, protected source names, raw standards text, copied source material, or unsupported compliance claims. | INTENT-TW-006 | Hygiene scans and document review. | Could the public repo be shared without leaking private/protected source basis? | SRC-REQ-001 R37-R42; SRC-VAL-001; SRC-VAL-003 | approved |
| REQ-TW-022 | R31 real-project validation remains required before release-ready or upstream-ready claims. Representative/dummy validation does not satisfy R31. | INTENT-TW-005 | Review of validation records and R31 evidence. | Has TraceWeaver proved value on real feature, unclear module, and low-risk Lite scenarios? | SRC-REQ-001 R31-R32; SRC-VAL-003 | held |
| REQ-TW-023 | Every completed TraceWeaver task must end with suggested next steps that name the next recommended CE command, TraceWeaver gate, evidence record, or held condition. | INTENT-TW-003, INTENT-TW-005 | Inspection of task summaries, AGENTS guidance, README workflow docs, and validation records. | Can a contributor tell what should happen next without reconstructing the whole validation history? | User workflow feedback on 2026-04-30; SRC-PLAN-001 | approved |
| REQ-TW-030 | TraceWeaver alpha must default to advisory mode through a controlled policy contract. The package default must expose `traceweaver_mode: advisory`; valid values are `off`, `advisory`, and `enforcing`; consuming repositories may override only in `.traceweaver/intent-contract.yml`; smoke evidence must prove the installed package exposes the advisory default without modifying CE skill files; enforcing mode remains held until dynamic/runtime validation approves it. | INTENT-TW-004, INTENT-TW-005 | Inspection of README, adapter prompts, wrapper guidance, policy template, U6/U7/U9 records, and runtime evidence. | Do users understand alpha warnings are advisory and evidence-bound rather than proven enforcement? | 2026-04-30 baseline review finding; SRC-PLAN-001; SRC-VAL-003 | approved |
| REQ-TW-032 | TraceWeaver alpha must provide a low-friction advisory drift check for plans, reviews, or task capsules that compares proposed behavior against stakeholder intent, approved requirements or exceptions, validation questions, and baseline version, then returns clear advisory statuses such as `aligned`, `warning`, `gap`, `held_claim`, or `clarification_needed` without claiming enforcement. | INTENT-TW-001, INTENT-TW-003, INTENT-TW-004 | Inspection of adapter guidance, drift-check template, and smoke evidence when implemented. | Can users quickly detect requirement/intent drift before full TraceWeaver replacement is proven? | 2026-04-30 baseline review finding; SRC-PLAN-001 | approved |

## Current Traceability Matrix

| Requirement | Planning / implementation artifact | Verification evidence | Validation status | Open gap |
| --- | --- | --- | --- | --- |
| REQ-TW-001 - REQ-TW-004, REQ-TW-024 - REQ-TW-025, REQ-TW-031 | `docs/plans/2026-04-30-001-feat-traceweaver-clean-ce-plugin-swap-plan.md` Unit 2/3 | Pending Unit 2 templates and wrapper guidance | Advisory alpha planned | Intent Contract templates and meaningful-behavior/minimal-capsule examples not materialized yet |
| REQ-TW-005 - REQ-TW-008 | `skills/systems-engineering-traceability/`, `references/traceability-matrix-template.md` | U5 representative runs and U6b static install evidence | R31 held | Real-project validation outstanding |
| REQ-TW-009 - REQ-TW-012, REQ-TW-026 | `skills/`, `docs/validation/traceweaver-core-11-promotion-records.md` | U4 public skill-folder promotion and U5.5/U6a/U6b records | Runtime scope reduced | Non-selected Core 11 runtime held; needs capture and risk/gap/change-control runtime materialization held unless separately scoped |
| REQ-TW-013 - REQ-TW-018, REQ-TW-027 - REQ-TW-029 | `plugins/traceweaver-core/`, SRC-VAL-004 CE runtime inventory, active Unit 2 plan | SRC-VAL-004 CE runtime inventory recorded; Unit 2 pending | Clean replacement held | CE source pin or accepted local-cache limitation, CE agent continuity, closure audit, static advisory policy evidence, and runtime proof outstanding |
| REQ-TW-019 - REQ-TW-023, REQ-TW-030, REQ-TW-032 | U6a/U6b validation records, future U7/U9 records, AGENTS guidance, and task summaries | U6b alpha static install smoke passed; next-step handoff rule added | Dynamic/runtime/release/enforcement held | U7/U9 not started; advisory/enforcing split, drift-check workflow, and next-step discipline need repeated use |

## Approved Exceptions And Held Claims

| ID | Type | Linked requirement | Decision | Close condition |
| --- | --- | --- | --- | --- |
| EXC-TW-001 | Accepted limitation | REQ-TW-019 | Dynamic no-forced discovery may remain held after U6b-alpha. | U6b-dynamic or U9 records observed runtime discovery, or a later superseding limitation explicitly replaces this one. |
| EXC-TW-002 | Held claim | REQ-TW-014 | Clean CE replacement is not approved by static materialization alone. | U9 proves CE workflow continuity without installed CE plugin dependency. |
| EXC-TW-003 | Held claim | REQ-TW-015 | Slash-command availability is held because alpha installs skills, not prompts/commands. | Prompt/command files are added and install/runtime evidence proves them. |
| EXC-TW-004 | Held claim | REQ-TW-022 | Release-ready and upstream-ready claims are held until R31 and later release gates pass. | R31 real-project validation and release records pass. |
| EXC-TW-005 | Closed bootstrap exception | REQ-TW-001, REQ-TW-002 | Draft baseline formation, review-finding resolution, first Intent Contract draft, and acceptance evidence were authorized before the first accepted baseline. | Closed by `CE-DOC-REVIEW-2026-04-30-REQ-MASTER-CLEAN-001` and recorded `baseline_hash_sha256`; this exception cannot authorize implementation or release claims. |
| EXC-TW-006 | Held limitation option | REQ-TW-017, REQ-TW-029 | Local-cache-only CE source use is not accepted until a limitation record with the required fields exists. | Upstream CE source pin is resolved, or a complete accepted local-cache limitation is recorded. |

## Change Control

This file is the master requirements baseline. Changes to it must:

- preserve stable requirement IDs;
- add new IDs instead of renumbering existing IDs;
- update source trace and validation questions;
- update the Current Traceability Matrix when requirement status changes;
- run `/ce-doc-review` before using the changed baseline for U6
  implementation, U7 claims, release claims, Intent Contracts, or task
  capsules.

## Next Required Work

1. Create `.traceweaver/intent-contract.yml` from this accepted baseline.
2. Use `/ce:plan` or the existing U6b Unit 2 plan to materialize the
   TraceWeaver alpha Intent Contract templates.
3. Continue U6b Unit 2 static materialization against this baseline.
4. Keep CE clean-replacement, runtime invocation, enforcing mode, and release
   readiness held until their specific evidence gates pass.
