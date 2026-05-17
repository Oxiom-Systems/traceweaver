---
title: "feat: TraceWeaver model default policy"
type: feat
status: implementation-code-review-passed-status-hash-doc-review-pending
date: 2026-05-12
---

# feat: TraceWeaver model default policy

## Summary

Make TraceWeaver's packaged runtime model policy explicit and testable:

- Codex plugin/runtime defaults to `gpt-5.5` with `medium` reasoning.
- Claude plugin/runtime defaults to Sonnet.
- Imported CE-derived component bodies remain upstream-aligned and are not edited
  to carry TraceWeaver model defaults.
- Model defaults are owned by TraceWeaver packaging, installer metadata,
  wrapper policy, and smoke coverage.

This plan is candidate implementation input. It does not approve runtime
parity, publication, clean CE replacement, release readiness, or CE component
body edits.

## Operating Mode

Implementation Gate Mode planning with an Authority Baseline Mode preflight.

The requested policy changes the packaged runtime contract, so implementation
must first add and review an explicit requirement before treating this plan as
accepted implementation authority. After that review closes, implementation
must stay in TraceWeaver-owned packaging, installer, wrapper, and smoke files.

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Current related requirements:
  - `REQ-TW-016`: Codex install command and installer materialization.
  - `REQ-TW-041`: standalone plugin must make TraceWeaver the normal path.
  - `REQ-TW-043`: CE-compatible surfaces remain controlled or clearly held.
  - `REQ-TW-052`: TW wrapper backlog and wrapper behavior contracts.
  - `REQ-TW-057`: operating modes and implementation-gate discipline.
  - `REQ-TW-059`: CE-derived components are imported implementation components
    and must not be edited without reviewed overlay/fork records.
- New candidate requirement to add and review:
  - `REQ-TW-060`: TraceWeaver must define platform model defaults in
    TraceWeaver-owned packaging and installer policy. Codex defaults to
    `gpt-5.5` with `medium` reasoning; Claude defaults to Sonnet. These defaults
    must not be embedded by editing imported CE-derived component bodies.
- New candidate proof chain reserved for this plan:
  - Artifact: `ART-TW-057`
  - Trace: `TRACE-TW-043`
  - ATP: `ATP-TW-027`
  - Result: `RESULT-TW-027`
  - Verification: `VER-TW-055`

Validation question: Can a fresh TraceWeaver install expose the correct
Codex/Claude default model policy through TraceWeaver-owned packaging and
installer evidence, without changing imported CE-derived skill bodies or
overclaiming host runtime enforcement?

## Problem Frame

TraceWeaver currently has runtime smoke defaults moving toward `gpt-5.5` and
`medium`, but there is no single reviewed product rule that says where model
defaults live, how they are packaged, and how Claude defaults differ from Codex.

The risk is split behavior:

- Codex smokes may default to `gpt-5.5 medium`, while plugin metadata or install
  evidence says nothing.
- Claude plugin packaging may inherit whatever host/model default is present,
  while users expect Sonnet.
- Imported `ce-*` component bodies could be edited locally to force model
  behavior, creating upstream merge pain and violating `REQ-TW-059`.

The product behavior should be simple: TraceWeaver owns model default policy at
the wrapper/package boundary; CE-derived internals remain imported engines.

## Requirements For This Slice

- R1. Add `REQ-TW-060` for platform model defaults and review it through
  `tw-requirements-review` and scoped `tw-doc-review` before implementation is
  accepted.
- R2. Define a TraceWeaver-owned model default policy record, preferably under
  `plugins/traceweaver-core/references/`, naming:
  - Codex default model: `gpt-5.5`
  - Codex default reasoning effort: `medium`
  - Claude default model family: `sonnet`
  - Unsupported-host behavior: record policy and hold runtime enforcement
    instead of mutating unknown host config.
- R3. Update the Codex installer to materialize and record this policy in the
  install manifest without modifying imported CE-derived `ce-*` skill bodies.
- R4. Update Codex smokes to assert the installed policy and runtime smoke
  defaults agree: `TRACEWEAVER_CODEX_MODEL` defaults to `gpt-5.5` and
  `TRACEWEAVER_CODEX_REASONING_EFFORT` defaults to `medium`.
- R5. Update Claude plugin packaging only through TraceWeaver-owned metadata,
  wrapper policy, or install evidence. If Claude plugin manifest support for
  model defaults is not proven locally, record Sonnet as policy intent and keep
  runtime enforcement held.
- R6. Add CE-body-drift protection to the proof: fail the model-default smoke if
  imported `plugins/traceweaver-core/skills/ce-*` component bodies changed for
  this policy without a reviewed overlay/fork record.
- R7. Keep user override support: environment variables or explicit host config
  may override the default, but TraceWeaver evidence must still show the packaged
  default policy.

## Scope

### In Scope

- `requirements.md`, `.traceweaver/intent-contract.yml`,
  `traceability-matrix.md`, and validation evidence updates for `REQ-TW-060`.
- A TraceWeaver-owned model-default policy reference.
- Codex installer manifest output and install/discovery smoke coverage.
- Runtime smoke defaults already used by TraceWeaver harnesses:
  `TRACEWEAVER_CODEX_MODEL=gpt-5.5` and
  `TRACEWEAVER_CODEX_REASONING_EFFORT=medium`.
- Claude plugin policy metadata or evidence, limited to what the local plugin
  package format can prove.
- Code Anchor Evidence rows for changed behavior-bearing scripts or wrapper
  files.

### Out Of Scope

- Editing imported `ce-*` skill bodies for model defaults.
- Claiming the host will always honor a model default unless a supported host
  config path and smoke prove it.
- Changing user global Codex or Claude config without explicit user action.
- Publication, PR creation, release readiness, clean replacement, Vestro
  dogfood, or broad runtime parity.

## Design

### Policy File

Add a TraceWeaver-owned policy record such as:

```text
plugins/traceweaver-core/references/traceweaver-model-defaults.md
```

The file should define the platform defaults, override rules, host-enforcement
boundary, and CE-body-edit boundary. It is TraceWeaver source, not an imported
CE component.

### Installer Manifest

Extend `src/index.ts` so `install-manifest.json` records model policy, for
example:

```json
{
  "modelDefaults": {
    "codex": {
      "model": "gpt-5.5",
      "reasoningEffort": "medium",
      "enforcement": "traceweaver_policy_and_smoke_default"
    },
    "claude": {
      "model": "sonnet",
      "enforcement": "plugin_policy_or_held_if_host_manifest_unsupported"
    }
  }
}
```

Do not write host global model config in this slice unless the host-supported
field and smoke behavior are proven. Recording policy is acceptable; claiming
host enforcement is not.

### Codex Smokes

Update deterministic smokes to check:

- install manifest contains the Codex default model and reasoning effort;
- runtime smoke scripts emit `gpt-5.5` and `medium` when no override is set;
- overrides still work when `TRACEWEAVER_CODEX_MODEL` or
  `TRACEWEAVER_CODEX_REASONING_EFFORT` is supplied;
- no imported `ce-*` skill body changed as part of the model-default policy.

### Claude Packaging

Inspect `.claude-plugin/plugin.json` and local Claude plugin support before
adding any manifest field. If there is no verified supported field, add the
Sonnet policy to TraceWeaver-owned reference/default prompt guidance and record
Claude runtime enforcement as held.

If a supported Claude plugin model field exists, update only
`.claude-plugin/plugin.json` or TraceWeaver-owned packaging metadata and add a
smoke/static parse proving the field.

### CE Body Boundary

The implementation must not edit:

```text
plugins/traceweaver-core/skills/ce-*/SKILL.md
plugins/traceweaver-core/skills/ce-*/references/**
plugins/traceweaver-core/agents/ce-*.agent.md
```

unless a separate reviewed overlay/fork record is created first. This slice
should not need such a record.

## Implementation Units

### U1: Add And Review Requirement

Goal: make the policy explicit before implementation claims depend on it.

Files:

- `requirements.md`
- `.traceweaver/intent-contract.yml`
- `traceability-matrix.md`
- validation evidence records
- this plan

Actions:

- Add `REQ-TW-060`.
- Add `ART-TW-057`, `TRACE-TW-043`, `ATP-TW-027`, `RESULT-TW-027`, and
  `VER-TW-055`.
- Record held claims: runtime enforcement, publication, clean replacement,
  release readiness, host global config mutation, and CE body edits.
- Run `tw-requirements-review` scoped to `REQ-TW-060`.
- Run `tw-doc-review` scoped to the requirement/status update.

Exit criteria:

- Requirement and proof-chain rows are coherent and reviewed.
- Implementation remains held until U2 starts from the reviewed state.

### U2: Add TraceWeaver-Owned Model Policy

Goal: create the source of truth without touching imported CE bodies.

Files:

- `plugins/traceweaver-core/references/traceweaver-model-defaults.md`
- any skill-local copies only if a wrapper cannot resolve plugin-level
  references in installed/direct-callable mode.

Actions:

- Define Codex and Claude defaults.
- Define override behavior and held host-enforcement boundaries.
- Define imported CE component no-edit rule.
- Add Code Anchor Evidence if the policy file is behavior-bearing for review.

Exit criteria:

- Policy is readable from packaged and direct-callable install paths, or the
  install smoke records a held resolver gap.

### U3: Installer And Manifest Policy

Goal: make fresh installs carry the model policy.

Files:

- `src/index.ts`
- `scripts/traceweaver-smoke-codex-discovery`
- `scripts/traceweaver-smoke-codex-host-registry`
- `scripts/traceweaver-smoke-codex-separate-home-runtime`

Actions:

- Add `modelDefaults` to `install-manifest.json`.
- Assert the manifest default values in isolated install/discovery smoke.
- Assert runtime smoke default output remains `gpt-5.5` and `medium`.
- Add override checks if cheap and deterministic.

Exit criteria:

- Fresh isolated Codex install records the model policy and smoke defaults.
- Runtime invocation remains held unless separately enabled and proven.

### U4: Claude Policy Surface

Goal: encode Sonnet default policy without overclaiming host enforcement.

Files:

- `plugins/traceweaver-core/.claude-plugin/plugin.json`
- TraceWeaver-owned policy/reference files
- a smoke or static parse script if needed

Actions:

- Check whether the local Claude plugin format supports a model default field.
- If supported, add the field and static validation.
- If unsupported or unverified, record Sonnet as TraceWeaver policy and keep
  host enforcement held.

Exit criteria:

- The package visibly carries Sonnet policy.
- Any unproven host enforcement remains explicitly held.

### U5: CE Body Drift Guard

Goal: prove model policy did not modify imported CE bodies.

Files:

- existing install/discovery smoke or a small dedicated model-policy smoke
- CE upstream/source inventory evidence if already available

Precondition:

- The model-default implementation scope must be isolated from pre-existing or
  unrelated imported CE body changes. If any changed or staged file under
  `plugins/traceweaver-core/skills/ce-*` or
  `plugins/traceweaver-core/agents/ce-*` is not part of a reviewed
  `REQ-TW-059` overlay/fork record, exclude it from the model-policy review set
  before this proof can close.

Actions:

- Compare changed files against `plugins/traceweaver-core/skills/ce-*` and
  `plugins/traceweaver-core/agents/ce-*`.
- Fail if model-default work changed CE bodies without an overlay/fork record,
  or if unrelated CE body edits remain mixed into the scoped model-policy
  artifact set.
- Keep generated installer artifacts out of the repo unless already tracked.

Exit criteria:

- Smoke proves no CE body edits for this policy and no unrelated CE body edits
  are included in the reviewed model-policy scope.

### U6: Review And Record

Goal: close only the scoped behavior/status gate.

Commands:

```text
/tw-code-review scoped to TraceWeaver model default policy, installer manifest,
Codex/Claude packaging metadata, smokes, Code Anchor Evidence, and CE-body drift
guard.

/tw-doc-review scoped only to the REQ-TW-060 model-default status/hash update.
```

Exit criteria:

- Code review passes or findings are fixed.
- Doc review records the scoped status/hash update once.
- Runtime, publication, release, clean replacement, host global config mutation,
  and CE body edits remain held unless separately proven.

## Verification

Required deterministic checks:

- Parse plugin manifests:
  - `plugins/traceweaver-core/.codex-plugin/plugin.json`
  - `plugins/traceweaver-core/.claude-plugin/plugin.json`
- Run isolated Codex install/discovery smoke.
- Run runtime-disabled Codex host and skill behavior smokes.
- Verify smoke output includes:
  - `gpt-5.5`
  - `medium`
  - model policy from install manifest
- Verify Claude package policy says Sonnet or records enforcement held.
- Run code-anchor scanner on changed behavior-bearing files.
- Run `git diff --check`.

## Held Claims

- Runtime invocation proof.
- Host global model-config mutation.
- Claude host enforcement unless a supported field and smoke prove it.
- Publication, commit, push, PR, release, clean replacement, Vestro dogfood,
  R31, and upstream-ready claims.
- CE-derived component body edits without reviewed overlay/fork record.

## Next Step

The REQ-TW-060 requirements review, authority doc review, implementation code
review, and implementation status/hash doc review are recorded clean. Next work
should move to the next held product proof without reopening this gate unless
the model-default artifact identity changes:

```text
/tw-auto continue TraceWeaver dogfood on the next active held proof gate, with
runtime enforcement, publication, clean replacement, package/release claims, and
CE-derived body edits still held unless their own reviewed proof closes them.
```
