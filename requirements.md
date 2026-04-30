---
id: TW-REQ-MASTER-2026-04-30-001
status: draft_controlled_baseline
date: 2026-04-30
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash: pending_after_review
owner: Oxiom Systems
---

# TraceWeaver Master Requirements

This is the master traceable requirements baseline for TraceWeaver Core. While
status is `draft_controlled_baseline`, it is the candidate authority index for
product, skill, plugin, and validation work. It becomes accepted planning
authority only after document review records no blocking findings or the
blocking findings are resolved.

Source brainstorm documents remain evidence and rationale. This file converts
that evidence into controlled requirements with stable IDs, stakeholder intent,
verification methods, validation questions, and current status.

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
4. validation intent,
5. current baseline version.
```

Agents may help create requirements, plans, code, tests, and evidence, but they
may not silently promote their own interpretation into authority.

## Source Artifacts

| Source ID | Artifact | Role |
| --- | --- | --- |
| SRC-REQ-001 | `docs/brainstorms/2026-04-25-systems-engineering-traceability-skill-requirements.md` | Original systems-engineering traceability and Intent Contract requirements. |
| SRC-REQ-002 | `docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md` | Core 11 taxonomy, CE adapter boundary, and Intent Contract taxonomy requirements. |
| SRC-PLAN-001 | `docs/plans/2026-04-30-001-feat-traceweaver-clean-ce-plugin-swap-plan.md` | Active U6 Unit 2 plan for CE-compatible plugin materialization. |
| SRC-VAL-001 | `docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md` | U5.5 reduced static scope evidence. |
| SRC-VAL-002 | `docs/validation/traceweaver-core-11-u6a-runtime-scope.md` | U6a static runtime-scope decision. |
| SRC-VAL-003 | `docs/validation/traceweaver-core-11-u6b-plugin-runtime.md` | U6b alpha static install/materialization evidence. |
| SRC-VAL-004 | `docs/validation/traceweaver-core-11-ce-runtime-inventory.md` | CE 3.3.2 runtime inventory for clean-swap planning. |

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

- `candidate_for_review`: captured in this draft baseline and pending
  `/ce-doc-review` acceptance before it may drive U6 implementation or U7
  claims.
- `candidate`: captured but needs review or later scope decision.
- `held`: explicitly not approved for implementation or release claims yet.

### Authority And Intent

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-001 | TraceWeaver must define an Intent Contract as the controlled authority baseline for agent work. | INTENT-TW-001, INTENT-TW-002 | Inspection of `requirements.md`, Intent Contract templates, and plugin docs. | Does every agent-facing workflow identify the authority baseline before behavior changes? | SRC-REQ-001 R54-R62; SRC-REQ-002 R7a-R7c | candidate_for_review |
| REQ-TW-002 | No agent may implement, review, or modify behavior unless it can cite stakeholder intent, approved requirement or exception, verification method, validation question, and current baseline version. | INTENT-TW-001, INTENT-TW-002 | Inspection of wrapper prompts, task capsule template, and trace records. | Are unauthorized changes routed to gaps/changes/exceptions instead of implementation? | SRC-REQ-001 R54-R62; SRC-REQ-002 R19-R22 | candidate_for_review |
| REQ-TW-003 | Agent assumptions must not become implementation authority. They must become an open question, proposed requirement, approved exception, accepted risk, or rejected assumption. | INTENT-TW-002 | Inspection of authority-gate guidance and gap/change/exception templates. | Can reviewers see each assumption's disposition? | SRC-REQ-001 R57-R60; SRC-REQ-002 R7c | candidate_for_review |
| REQ-TW-004 | Every meaningful task must have an Intent Capsule or equivalent bounded work package naming `authorized_by`, `intent_served`, `verification_required`, `validation_question`, `must_not_change`, and open assumptions. | INTENT-TW-001, INTENT-TW-002 | Inspection of task capsule template and wrapper guidance. | Does each task carry enough authority context to prevent drift? | SRC-REQ-001 R56-R61; SRC-REQ-002 R7b, R21 | candidate_for_review |

### Traceability And Evidence

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-005 | TraceWeaver must maintain a controlled chain from stakeholder intent to captured needs, reviewed requirements, approved authority or exception, implementation, verification, validation, and change control. | INTENT-TW-001, INTENT-TW-003 | Inspection of operating model, traceability template, and U6/U9 evidence. | Can a reviewer traverse the chain without guessing? | SRC-REQ-001 R1-R6, R34-R36; SRC-REQ-002 lifecycle placement | candidate_for_review |
| REQ-TW-006 | Meaningful behavior without approved intent, requirement or exception trace must be classified as dark behavior. | INTENT-TW-001, INTENT-TW-002 | Review of traceability-check guidance and review evidence. | Are untraced behaviors removed, linked, or approved as exceptions? | SRC-REQ-001 R18-R22, R60; SRC-REQ-002 R22 | candidate_for_review |
| REQ-TW-007 | TraceWeaver must keep verification evidence separate from validation evidence and must carry validation questions with tasks. | INTENT-TW-001, INTENT-TW-003 | Inspection of templates and trace records for distinct verification and validation fields. | Does passing tests still leave the stakeholder-value question visible? | SRC-REQ-001 R3, R14-R16, R61 | candidate_for_review |
| REQ-TW-008 | The Markdown traceability matrix is the authoritative audit record; diagrams are derived views only. | INTENT-TW-003 | Inspection of traceability matrix template and operating-model guidance. | If a diagram and matrix disagree, does the matrix control? | SRC-REQ-001 R9-R12 | candidate_for_review |

### Core Skill Architecture

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-009 | TraceWeaver Core must target the eleven-skill systems-engineering suite in controlled promotion increments. | INTENT-TW-003, INTENT-TW-005 | Inspection of skill folders, taxonomy requirements, and promotion records. | Is the full suite visible without claiming all skills are runtime-ready? | SRC-REQ-002 R1-R15 | candidate_for_review |
| REQ-TW-010 | `requirements-reviewer` and `systems-engineering-traceability` must remain upstream-neutral Core skills and must not depend on CE commands, prompts, reviewer agents, or plugin-specific lifecycle hooks. | INTENT-TW-003, INTENT-TW-004 | Inspection of selected skill content and CE wrapper boundaries. | Can the Core skills be used outside CE? | SRC-REQ-001 R51-R53; SRC-REQ-002 R2-R3 | candidate_for_review |
| REQ-TW-011 | TraceWeaver Core batch 1 must include the authority foundation: needs capture, requirements review, traceability, risk/gap/change control, and Intent Contract runtime artifacts. | INTENT-TW-001, INTENT-TW-003 | Inspection of taxonomy, requirements, and staged runtime records. | Does the first architecture slice define what may become authority? | SRC-REQ-002 R4-R7c | candidate_for_review |
| REQ-TW-012 | Runtime scope must stay staged: U6 alpha may include only selected Light v0.1 runtime skills and later selected CE-compatible surfaces until new scope decisions approve more. | INTENT-TW-005 | Inspection of U5.5, U6a, U6b, and promotion records. | Are non-selected Core 11 skills held until separately scoped? | SRC-VAL-001; SRC-VAL-002; SRC-VAL-003 | candidate_for_review |

### CE Adapter And Plugin Alpha

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-013 | TraceWeaver CE wrappers must wrap or invoke Core skills; they must not redefine requirements quality, traceability authority, risk/gap handling, verification, validation, or baseline rules. | INTENT-TW-004 | Inspection of CE wrapper skills and plugin docs. | Can CE adapter code be changed without changing Core semantics? | SRC-REQ-001 R53; SRC-REQ-002 R16-R22 | candidate_for_review |
| REQ-TW-014 | TraceWeaver must preserve selected CE workflow skill names for compatibility while keeping clean CE replacement claims held until runtime proof exists. | INTENT-TW-004, INTENT-TW-005 | Install smoke and U9 runtime proof. | Can users keep their CE workflow without TraceWeaver overclaiming replacement? | SRC-PLAN-001; SRC-VAL-004 | candidate_for_review |
| REQ-TW-015 | The plugin README and manifests must describe alpha skill invocation accurately and must not advertise slash commands unless prompt/command files are installed and proven. | INTENT-TW-005 | Inspection of plugin README, manifests, and install manifest. | Does a user get exactly what the docs say they get after install? | SRC-VAL-003; plugin README | candidate_for_review |
| REQ-TW-016 | The documented Codex install command for alpha must materialize selected skills using `--include-skills`. | INTENT-TW-004, INTENT-TW-005 | Isolated install smoke using the README command. | Can a developer copy the command and get usable skills? | SRC-VAL-003 | candidate_for_review |
| REQ-TW-017 | Unit 2 must resolve CE upstream source pin before vendoring selected CE files, or record an accepted local-cache-only limitation that keeps CE vendoring/release claims held. | INTENT-TW-005, INTENT-TW-006 | Inspection of CE source inventory and package-local source map. | Is copied CE content traceable to a source authority or explicitly limited? | SRC-PLAN-001; SRC-VAL-004 | candidate_for_review |
| REQ-TW-018 | Unit 2 must prove transitive closure for selected CE support files referenced by `SKILL.md` files under `references/`, `scripts/`, and `assets/`. | INTENT-TW-004, INTENT-TW-005 | Static closure audit and isolated install path check. | Can a selected CE skill run without dangling support-file references? | SRC-PLAN-001 | candidate_for_review |

### Claims, Validation, And Public Hygiene

| Req ID | Requirement | Intent | Verification method | Validation question | Source | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-TW-019 | U6b-alpha must be limited to package/install/static materialization evidence; runtime invocation and dynamic no-forced discovery must remain U6b-dynamic or U9 proof. | INTENT-TW-005 | Inspection of U6a and U6b records. | Can reviewers distinguish static install evidence from runtime behavior proof? | SRC-VAL-002; SRC-VAL-003 | candidate_for_review |
| REQ-TW-020 | U7 release-claim records must stay narrow: installable alpha and advisory/static install evidence may be approved if proven, while clean CE replacement, dynamic discovery, slash commands, full Core 11 runtime, and release-ready status remain held. | INTENT-TW-005 | Inspection of promotion records and U7 claim records when created. | Do release claims match the evidence actually collected? | SRC-PLAN-001; SRC-VAL-003 | candidate_for_review |
| REQ-TW-021 | Public artifacts must not include private paths, protected source names, raw standards text, copied source material, or unsupported compliance claims. | INTENT-TW-006 | Hygiene scans and document review. | Could the public repo be shared without leaking private/protected source basis? | SRC-REQ-001 R37-R42; SRC-VAL-001; SRC-VAL-003 | candidate_for_review |
| REQ-TW-022 | R31 real-project validation remains required before release-ready or upstream-ready claims. Representative/dummy validation does not satisfy R31. | INTENT-TW-005 | Review of validation records and R31 evidence. | Has TraceWeaver proved value on real feature, unclear module, and low-risk Lite scenarios? | SRC-REQ-001 R31-R32; SRC-VAL-003 | held |

## Current Traceability Matrix

| Requirement | Planning / implementation artifact | Verification evidence | Validation status | Open gap |
| --- | --- | --- | --- | --- |
| REQ-TW-001 - REQ-TW-004 | `docs/plans/2026-04-30-001-feat-traceweaver-clean-ce-plugin-swap-plan.md` Unit 2/3 | Pending Unit 2 templates and wrapper guidance | Advisory alpha planned | Intent Contract templates not materialized yet |
| REQ-TW-005 - REQ-TW-008 | `skills/systems-engineering-traceability/`, `references/traceability-matrix-template.md` | U5 representative runs and U6b static install evidence | R31 held | Real-project validation outstanding |
| REQ-TW-009 - REQ-TW-012 | `skills/`, `docs/validation/traceweaver-core-11-promotion-records.md` | U4 public skill-folder promotion and U5.5/U6a/U6b records | Runtime scope reduced | Non-selected Core 11 runtime held |
| REQ-TW-013 - REQ-TW-018 | `plugins/traceweaver-core/`, CE runtime inventory, active Unit 2 plan | U6C inventory recorded; Unit 2 pending | Clean replacement held | CE source pin, closure audit, and runtime proof outstanding |
| REQ-TW-019 - REQ-TW-022 | U6a/U6b validation records and future U7/U9 records | U6b alpha static install smoke passed | Dynamic/runtime/release held | U7/U9 not started |

## Approved Exceptions And Held Claims

| ID | Type | Linked requirement | Decision | Close condition |
| --- | --- | --- | --- | --- |
| EXC-TW-001 | Accepted limitation | REQ-TW-019 | Dynamic no-forced discovery may remain held after U6b-alpha. | U6b-dynamic or U9 records observed runtime discovery or accepted limitation. |
| EXC-TW-002 | Held claim | REQ-TW-014 | Clean CE replacement is not approved by static materialization alone. | U9 proves CE workflow continuity without installed CE plugin dependency. |
| EXC-TW-003 | Held claim | REQ-TW-015 | Slash-command availability is held because alpha installs skills, not prompts/commands. | Prompt/command files are added and install/runtime evidence proves them. |
| EXC-TW-004 | Held claim | REQ-TW-022 | Release-ready and upstream-ready claims are held until R31 and later release gates pass. | R31 real-project validation and release records pass. |

## Change Control

This file is the master requirements baseline. Changes to it must:

- preserve stable requirement IDs;
- add new IDs instead of renumbering existing IDs;
- update source trace and validation questions;
- update the Current Traceability Matrix when requirement status changes;
- run `/ce-doc-review` before using the changed baseline for U7 or release
  claims.

## Next Required Work

1. Review this master baseline with `/ce-doc-review`.
2. Create `.traceweaver/intent-contract.yml` from this baseline after review.
3. Continue U6b Unit 2 only after this master baseline is accepted as planning
   authority.
