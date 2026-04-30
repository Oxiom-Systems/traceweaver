---
title: Clean Swap From Compound Engineering Plugin To TraceWeaver Core
type: feat
status: draft
date: 2026-04-30
origin: docs/validation/traceweaver-core-11-u6b-plugin-runtime.md
---

# Clean Swap From Compound Engineering Plugin To TraceWeaver Core

## Overview

TraceWeaver Core U6b-alpha now proves static install/materialization for the
selected authority-control skills. The next productization problem is different:
the installed TraceWeaver plugin must replace the existing Compound Engineering
plugin cleanly without breaking the user's CE workflow.

The target state is a single installed TraceWeaver plugin that preserves the CE
workflow surface (`ce-brainstorm`, `ce-plan`, `ce-work`, `ce-code-review`,
`ce-doc-review`, `ce-compound`, and supporting reviewer/research skills), while
adding TraceWeaver authority controls as an optional layer. Systems-engineering
enforcement can be disabled or set to advisory, but the CE agent and workflow
loop must continue to work.

This plan is not U7 execution. It defines the packaging and migration work that
must be planned before TraceWeaver claims it can replace the existing CE plugin.

## Problem Frame

The current TraceWeaver Core plugin alpha installs only the selected
`light-v0.1-authority-traceability` scope:

- `requirements-reviewer`
- `systems-engineering-traceability`
- `using-agent-skills`
- `tw-requirements-review`
- `tw-authority-gate`
- `tw-traceability-check`

That is enough for U6b-alpha static materialization, but not enough for a clean
replacement of the existing Compound Engineering plugin. If the user disables
the CE plugin and installs only the current TraceWeaver alpha, the CE workflow
skills and reviewer/research agents disappear.

The swap must therefore preserve the CE runtime surface first, then layer
TraceWeaver controls around it.

## Requirements Trace

- U6b-alpha: the TraceWeaver plugin must install selected skills with the
  documented `--include-skills` command.
- User requirement: replace the existing Compound Engineering plugin with
  TraceWeaver Core as a clean swap.
- User requirement: CE agents and workflow must continue.
- User requirement: systems-engineering controls may be disabled.
- U6a/U6b constraint: dynamic discovery, slash commands, release-ready runtime,
  and all-Core runtime claims remain held until later evidence.
- Promotion constraint: any copied CE runtime content must have pinned source,
  license/provenance, file hashes, and stale-reset records.

## Scope Boundaries

- Do not proceed to U7 release-claim records until the current U6b-alpha commit
  is accepted.
- Do not remove or disable the user's installed Compound Engineering plugin
  during planning.
- Do not claim TraceWeaver is a clean CE replacement until a self-contained
  install proves CE workflows still load.
- Do not expand the TraceWeaver systems-engineering runtime beyond the selected
  U6a/U6b scope by default.
- Do not force systems-engineering enforcement for all CE usage. The first swap
  target must allow `off`, `advisory`, and `enforcing` modes.
- Do not claim slash-command availability unless prompt/command surfaces are
  added and install proof records them.
- Do not vendor CE skills or agents without source pin, license check, file
  hash inventory, and stale-reset rules.

## Target Runtime Shape

Preferred target:

```text
plugins/traceweaver-core/
  .codex-plugin/
  .claude-plugin/
  .cursor-plugin/
  AGENTS.md
  README.md
  skills/
    ce-brainstorm/
    ce-plan/
    ce-work/
    ce-code-review/
    ce-doc-review/
    ce-compound/
    ce-*/                         # selected CE workflow/review/research skills
    requirements-reviewer/
    systems-engineering-traceability/
    tw-requirements-review/
    tw-authority-gate/
    tw-traceability-check/
    tw-ce-plan/
    tw-ce-work/
    tw-ce-code-review/
    tw-ce-doc-review/
  agents/
    ce-*.agent.md                 # only if target installer/runtime supports them
  references/
    traceweaver-runtime-policy.md
    ce-upstream-source-inventory.md
```

The core compatibility rule is that existing CE skill names continue to exist.
TraceWeaver wrapper skills may add gated workflows, but they must not make the
base CE skill names unavailable.

## CE Agent Continuity Rule

The user's CE workflow depends on more than top-level `ce-*` skill files. Review
and research workflows dispatch CE reviewer/research agents where the runtime
supports them. A clean swap must therefore prove one of these states before it
can be accepted:

1. CE agent files are installed and load in the target runtime; or
2. the target runtime has no supported agent-install surface, the affected CE
   workflows still degrade predictably to skill-only behavior, and no
   agent-backed review/research claim is made.

If neither state is proven, the swap remains a coexistence/migration mode: keep
the Compound Engineering plugin installed and do not tell users to replace it
with TraceWeaver yet.

## Runtime Modes

TraceWeaver controls should be selectable per install or per invocation through
a small policy reference, not by editing every CE skill during use.

```text
traceweaver_mode: off | advisory | enforcing
default_for_alpha: advisory
```

Mode behavior:

- `off`: CE workflow runs without TraceWeaver authority gates. TraceWeaver
  skills are installed and manually callable, but not required.
- `advisory`: CE workflow continues; TraceWeaver gates produce warnings and held
  claims when authority/traceability is weak.
- `enforcing`: wrapper workflows block meaningful implementation or release
  claims when authority, requirements quality, or traceability is missing.

The first clean swap should default to `advisory`. That gives users the CE
workflow continuity they need while making TraceWeaver controls visible.

## Key Decisions

1. Build a self-contained TraceWeaver CE distribution.

   A clean swap should not require the user to keep the Compound Engineering
   plugin installed as a hidden dependency. TraceWeaver may copy or mirror a
   pinned CE runtime subset only after license/provenance, file-hash, and
   stale-reset records are in place.

2. Preserve CE names before adding TraceWeaver wrappers.

   Existing workflows and muscle memory depend on `ce-*` skill names. The swap
   cannot rename them to `tw-*` only. TraceWeaver wrappers are additive:
   `tw-ce-plan`, `tw-ce-work`, and review wrappers can call CE skills plus
   authority gates.

3. Keep systems-engineering controls toggleable.

   Systems-engineering enforcement should not be an all-or-nothing blocker for
   adoption. The plugin can ship with advisory mode first, then allow enforcing
   mode after U9 runtime evidence.

4. Separate install proof from runtime behavior proof.

   U6b-alpha proves static materialization. U9 must later prove that CE skills,
   TraceWeaver skills, wrappers, selected references, and any agents load and
   route correctly in the target runtime.

5. Keep CE upstream upgrade path explicit.

   Vendored or mirrored CE files need a source inventory with upstream version,
   hashes, local deltas, and a refresh procedure. Otherwise TraceWeaver will
   silently fork CE and drift.

## Implementation Units

### Unit 1: CE Runtime Inventory And Source Pin

Files:

- Create: `docs/validation/traceweaver-core-11-ce-runtime-inventory.md`
- Modify: `docs/validation/traceweaver-core-11-promotion-records.md`

Plan:

- Pin the CE source version currently used for the swap baseline
  (`compound-engineering` plugin `3.3.2` unless replaced before work starts).
- Inventory required CE workflow skills:
  - `ce-brainstorm`
  - `ce-plan`
  - `ce-work`
  - `ce-code-review`
  - `ce-doc-review`
  - `ce-compound`
  - `ce-resolve-pr-feedback`
  - `ce-commit`
  - `ce-commit-push-pr`
  - required reviewer/research skills used by those workflows
- Inventory required CE agents if the target installer/runtime supports agents.
- If the target installer/runtime does not support agents, record which CE
  workflows are degraded, which claims are held, and whether the workflow still
  satisfies the user's required CE loop.
- Record license/provenance, whole-file hashes, and local delta policy.

Verification:

- Every CE file that may be copied into TraceWeaver has a source path, upstream
  version, hash, allowed use, and stale-reset rule.
- The inventory distinguishes skills needed for workflow continuity from
  optional CE extras.
- The inventory names all agent-dependent CE workflows and the proof required
  before those workflows can be claimed in the clean swap.

### Unit 2: Materialize CE-Compatible TraceWeaver Plugin

Files:

- Modify: `plugins/traceweaver-core/skills/`
- Modify: `plugins/traceweaver-core/agents/` only if agent install is supported
- Modify: `plugins/traceweaver-core/.codex-plugin/plugin.json`
- Modify: `plugins/traceweaver-core/README.md`
- Create: `plugins/traceweaver-core/references/ce-upstream-source-inventory.md`

Plan:

- Copy or mirror the approved CE runtime subset into
  `plugins/traceweaver-core/skills/` with original `ce-*` skill names preserved.
- Do not alter CE skill semantics during the first materialization pass.
- Add source inventory reference that maps each CE file to its upstream source
  and local hash.
- Keep TraceWeaver selected skills and `tw-*` adapters installed alongside CE.

Verification:

- Installing TraceWeaver with the documented command materializes both CE
  workflow skills and TraceWeaver selected skills.
- Existing CE skill names remain present after install.
- TraceWeaver selected skill hashes remain aligned with U6b-alpha authority or
  approved package-only hygiene deltas.

### Unit 3: Add TraceWeaver CE Wrapper Skills

Files:

- Create: `plugins/traceweaver-core/skills/tw-ce-plan/SKILL.md`
- Create: `plugins/traceweaver-core/skills/tw-ce-work/SKILL.md`
- Create: `plugins/traceweaver-core/skills/tw-ce-code-review/SKILL.md`
- Create: `plugins/traceweaver-core/skills/tw-ce-doc-review/SKILL.md`
- Create: `plugins/traceweaver-core/references/traceweaver-runtime-policy.md`

Plan:

- `tw-ce-plan` runs `tw-requirements-review` before CE planning treats
  requirements as authority.
- `tw-ce-work` runs `tw-authority-gate` before implementation starts when work
  changes meaningful behavior.
- `tw-ce-code-review` and `tw-ce-doc-review` run `tw-traceability-check` during
  review, while preserving the base CE review workflow.
- Add a policy reference that defines `off`, `advisory`, and `enforcing` modes.

Verification:

- Wrappers are additive and do not remove base CE skill names.
- Advisory mode never blocks CE execution; it records warnings and held claims.
- Enforcing mode blocks only meaningful behavior/release claims with missing
  authority or traceability.

### Unit 4: Swap Smoke Install

Files:

- Create: `docs/validation/traceweaver-core-11-clean-swap-runtime.md`
- Modify: `docs/validation/traceweaver-core-11-promotion-records.md`

Plan:

- Install TraceWeaver into an isolated Codex home using the documented command.
- Confirm installed manifest and file tree include:
  - CE workflow skills;
  - CE reviewer/research support skills required by workflows;
  - CE agents if the target runtime supports agent installation;
  - TraceWeaver selected skills;
  - TraceWeaver wrapper skills;
  - selected references and policy files;
  - no prompts unless prompt/command surfaces are intentionally added.
- Confirm the install works without the Compound Engineering plugin also being
  installed in the isolated home.

Verification:

- A developer can remove/disable the CE plugin, install TraceWeaver, and still
  see CE workflow skills available.
- CE agent continuity is proven, or agent-backed CE claims are explicitly held
  and the plan stays in coexistence/migration mode instead of clean-swap mode.
- The record names which CE surfaces are preserved and which are intentionally
  omitted.
- Private/source-name and license/provenance scans pass.

### Unit 5: U9 Runtime Behavior Proof

Files:

- Modify: `docs/validation/traceweaver-core-11-clean-swap-runtime.md`
- Modify: `docs/validation/traceweaver-core-11-u6b-plugin-runtime.md` only if
  scope or evidence references change

Plan:

- In a real target runtime, observe:
  - CE workflow skill invocation still works;
  - TraceWeaver selected skill invocation works;
  - wrapper skills route to both CE and TraceWeaver skills;
  - `off`, `advisory`, and `enforcing` behavior is distinguishable;
  - selected references open when required;
  - missing reference failure behavior is visible;
  - dynamic no-forced discovery is proven or explicitly held by accepted
    limitation.

Verification:

- U9 records runtime transcripts or equivalent observed evidence.
- No U9 claim depends only on static file-tree inspection.
- Slash-command claims remain held unless command/prompt files are installed and
  observed.

## Acceptance Criteria

- U6b-alpha remains committed before U7 starts.
- A clean-swap inventory records every CE file needed for workflow continuity.
- TraceWeaver plugin can be installed in an isolated environment without the CE
  plugin also installed.
- Installed TraceWeaver plugin contains CE workflow skills and TraceWeaver
  authority-control skills.
- Installed TraceWeaver plugin preserves CE agent-backed workflows where the
  target runtime supports agents; otherwise, agent-backed claims stay held and
  the result is not called a clean swap.
- Systems-engineering controls can be disabled or run advisory without breaking
  CE workflow.
- U9 runtime proof shows CE workflow continuity and TraceWeaver wrapper behavior.
- Held claims remain explicit: dynamic discovery until U9, slash commands until
  prompt/command surfaces exist, full Core 11 suite until separately scoped, and
  release-ready status until U7/U8/U9 records approve it.

## Open Questions

- Which exact CE skill subset is required for the user's daily workflow beyond
  `ce-brainstorm`, `ce-plan`, `ce-work`, `ce-code-review`, `ce-doc-review`, and
  `ce-compound`?
- Does the target Codex installer support agent files for the CE reviewers, or
  must reviewer behavior remain skill-only until an agent install path is proven?
- Should the first clean swap preserve the plugin name `traceweaver-core`, or
  should a later distribution use a distinct name such as
  `traceweaver-compound-engineering` to avoid confusing Core with the CE adapter?
- Where should mode configuration live for each runtime: a policy reference,
  plugin default prompt, user repo `AGENTS.md`, or all of the above?
- What is the accepted upstream refresh cadence for vendored CE files?
