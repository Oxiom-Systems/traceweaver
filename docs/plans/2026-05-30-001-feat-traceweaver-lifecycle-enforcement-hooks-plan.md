---
title: "feat: TraceWeaver lifecycle enforcement hooks"
type: feat
status: proposed_planning_requirements_review_pending
date: 2026-05-30
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: f48d98c924f051004d0352a7680366bf4f89748d4c01013f23da1a84ff97adda
---

<!-- TRACEWEAVER: file-role=lifecycle-enforcement-hooks-plan; req=REQ-TW-010; trace=TRACE-TW-003; ver=VER-TW-005 -->
<!-- TRACEWEAVER: file-role=lifecycle-enforcement-hooks-plan; req=REQ-TW-027; trace=TRACE-TW-013; ver=VER-TW-014 -->

# TraceWeaver Lifecycle Enforcement Hooks Plan

## Summary

TraceWeaver Core packages a systems-engineering lifecycle as a suite of `tw-*`
skills and a controlled-autonomy surface (`tw-auto`). The skills carry clear
"when to use / when not to use" guidance and explicit gates: requirements
quality review, authority gate before behavior change, traceability check before
completion claims, and a publication boundary before commit/push/PR.

The observed gap is that host harnesses — Codex CLI and Claude Code — do not
reliably invoke those gates at the right moment. A skill body can *advise* that
`tw-authority-gate` run before an edit, but nothing *makes* it run. When the
model skips the route, the lifecycle is silently bypassed and the user only
finds out at review time (or never).

This plan adds **host lifecycle hooks** as a deterministic enforcement layer on
top of the existing advisory skills. Hooks fire on host events the model cannot
skip — session start, subagent start, prompt submit, and (critically) *before*
each tool call — and either inject the required TraceWeaver context or block the
tool call until the relevant gate state exists.

Hooks are an **enforcement mechanism**, not a new lifecycle. They do not replace
the skills; they make the skills' existing rules non-bypassable.

## Operating Mode

Mode: Requirements-quality preflight Mode planning. This plan touches a *held*
claim.

This plan does not yet have an approved requirement that authorizes shipping an
enforcing hook surface. The current accepted baseline keeps **enforcing mode**
held:

- `requirements.md`: "`enforcing` cannot be the default or claimed until
  dynamic/runtime validation approves enforcing mode."
- `traceweaver-runtime-policy.md`: "`enforcing`: held until dynamic/runtime
  validation proves blocking behavior."
- The active Intent Contract lists `enforcing mode` in every recent
  `*_held_scope`.

Therefore this plan is a **planning input only**. Before any hook that can
*deny* a tool call is implemented, run `tw-requirements-review` to promote the
proposed requirement in the Authority Capsule below. Until then, only the
non-blocking (context-injecting, advisory) hook subset may be built, and even
that must be installed disabled-by-default behind explicit opt-in.

If implementation discovers that enforcement needs behavior beyond the proposed
requirement, pause for `tw-requirements-review` before continuing.

## Authority Capsule

Accepted baseline:

- Baseline ID: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `f48d98c924f051004d0352a7680366bf4f89748d4c01013f23da1a84ff97adda`

Governing accepted requirements (constraints this plan must not violate):

- `REQ-TW-010`: `requirements-reviewer` and `systems-engineering-traceability`
  must remain upstream-neutral Core skills and must **not depend on CE commands,
  prompts, reviewer agents, or plugin-specific lifecycle hooks**. Hooks must
  therefore live at the *packaging/wrapper* layer and degrade to no-ops when
  absent; the two neutral Core skills must keep working with hooks fully
  removed.
- `REQ-TW-027`: flow-specific warning, gap-routing, and held-claim runtime
  behavior remains held for wrapper/runtime proof. Enforcing hook behavior is in
  this held band.
- Runtime policy: `traceweaver_mode` is `off | advisory | enforcing`, default
  `advisory`; `enforcing` cannot be default or claimed until runtime validation
  passes.

Proposed requirement (candidate — NOT yet approved; requires
`tw-requirements-review`):

- `REQ-TW-069` (candidate): "TraceWeaver may package host lifecycle hooks
  (Claude Code and Codex) that deterministically (a) inject TraceWeaver
  authority/traceability context at session, subagent, and prompt boundaries and
  (b) when `traceweaver_mode: enforcing` is set in a consuming project's
  `.traceweaver/intent-contract.yml`, block behavior-changing tool calls that
  lack a recorded authority-gate pass. Hooks must default to advisory
  (non-blocking), must be a packaging-layer concern, must degrade to no-ops when
  the host, plugin, or state files are absent, and must never block the
  publication-boundary stop that `tw-auto` already owns."

Reserved proof chain (to be confirmed at requirements promotion, placeholders
until then):

- Verification method: hook fixture smokes + host discovery smokes with runtime
  execution gated by `TRACEWEAVER_HOST_RUNTIME_EXEC`.
- Validation question: see "Validation Question" below.

## Problem Frame

The lifecycle is currently enforced only by persuasion:

- `tw-auto`'s controlled-autonomy policy says it "must run `tw-authority-gate`
  before implementation" and "must run `tw-traceability-check` before completion
  claims" — but this is model-followed text, not host-enforced.
- The lifecycle orchestrator routes work, but a host can ignore the route.
- Codex and Claude Code both let the model call `Edit`/`Write`/`Bash`/
  `apply_patch` directly without ever entering a `tw-*` skill.
- Subagents spawned with a bounded prompt (the user's exact concern) inherit
  none of the lifecycle state unless something injects it at spawn time.

The result is "leaky enforcement": the gates exist, are well-specified, and are
skipped in practice on real harnesses.

Hooks close this because they are host-level, event-driven, and fire whether or
not the model chooses to cooperate.

## Hook Capability Review (host research)

Both target hosts converged on a near-identical hook model, which makes a
shared design viable.

### Claude Code hooks

- **Config surfaces**: `~/.claude/settings.json`, project `.claude/settings.json`,
  `.claude/settings.local.json`, and — relevant here — **plugin-bundled
  `hooks/hooks.json`** at the plugin root, wrapped as `{ "hooks": { ... } }`.
- **Events** (the ones this plan uses):
  - `SessionStart` (matcher on `source`: `startup|resume|clear|compact`) —
    inject lifecycle context, may set `reloadSkills`.
  - `SubagentStart` / `SubagentStop` (matcher on agent type) — give bounded
    subagents their authority context at spawn.
  - `UserPromptSubmit` — inject current authority/traceability state alongside
    the prompt.
  - `PreToolUse` (matcher on `tool_name`, e.g. `Edit|Write|MultiEdit`) — **can
    block**.
  - `PostToolUse` (matcher on `tool_name`) — record that an edit happened so the
    traceability check knows there is unverified work.
  - `Stop` — last-chance reminder if completion is claimed without a
    traceability pass.
- **Blocking / decision** (PreToolUse): either `exit 2` with a stderr reason, or
  `exit 0` with JSON:

  ```json
  {
    "hookSpecificOutput": {
      "hookEventName": "PreToolUse",
      "permissionDecision": "deny",
      "permissionDecisionReason": "TraceWeaver: behavior-change edit without a recorded authority-gate pass.",
      "additionalContext": "Run tw-authority-gate (or tw-auto) to record authority before editing."
    }
  }
  ```

  `permissionDecision` ∈ `allow | deny | ask | defer`. `additionalContext` feeds
  the next model request. `updatedInput` can rewrite tool input.
- **Context injection** (SessionStart / UserPromptSubmit): plain stdout text, or
  JSON `additionalContext`. SessionStart also supports `reloadSkills: true`.
- **Stdin**: JSON with `session_id`, `cwd`, `hook_event_name`, and for tool
  events `tool_name` + `tool_input`. `${CLAUDE_PLUGIN_ROOT}` resolves the plugin
  root inside `command`.
- **Trust**: Claude Code prompts the user to trust repo/plugin hooks before they
  run.

### Codex CLI hooks

- **Config surfaces**: `hooks.json` files or inline `[hooks]` tables in
  `config.toml` next to active config layers; **installed plugins can bundle a
  default `hooks/hooks.json`** through the plugin manifest. All matching hook
  sources load (higher layers do not replace lower ones).
- **Events**: `SessionStart`, `SubagentStart` (thread/subagent scope);
  `UserPromptSubmit`, `PreToolUse`, `PermissionRequest`, `PostToolUse`,
  `PreCompact`, `PostCompact`, `SubagentStop`, `Stop` (turn scope).
- **PreToolUse scope**: intercepts Bash, file edits via `apply_patch`, and MCP
  tool calls.
- **Matcher**: regex string; `"*"`, `""`, or omitted matches all.
- **Blocking / decision**: same `hookSpecificOutput` shape as Claude Code, e.g.
  `{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision":
  "deny", "permissionDecisionReason": "..."}}`. One JSON object on stdin, JSON on
  stdout.
- **Concurrency caveat**: multiple hooks for the same event launch concurrently,
  so one hook cannot stop another *hook* from starting — but a hook can still
  deny the underlying *tool call*. Design implication: TraceWeaver should ship
  **one** PreToolUse gate handler per event rather than several that assume
  ordering.
- **Trust**: installing/enabling a plugin does not auto-trust its hooks; Codex
  skips plugin-bundled hooks until reviewed via `/hooks`.

### Cursor and Antigravity

- **Cursor**: compatibility-preview only in 0.2.x; no proven runtime/hook path.
  Hooks are **held** for Cursor until a Cursor runtime validation record exists.
- **Antigravity (Gemini)**: installer materializes skills only; no equivalent
  documented lifecycle-hook contract today. Hooks are **held** for Antigravity.
- Both must keep working with skills alone; the hook layer is additive and
  host-gated.

### Convergence

Claude Code and Codex share: plugin-bundled `hooks/hooks.json`, the same event
names for our needs, the same `hookSpecificOutput` / `permissionDecision` deny
shape, the same stdin JSON, and a trust-before-run model. This lets one set of
**host-neutral handler scripts** back both hosts, with only thin per-host
`hooks.json` manifests differing.

## Design

### Principle: hooks enforce state, skills create state

Hooks are stateless shell commands that fire fast and cannot themselves run the
lifecycle. So the lifecycle skills must **record machine-readable gate state**,
and hooks **read** that state to decide allow/deny/inject.

State lives under the consuming project's existing `.traceweaver/` tree (already
created by `tw-auto` bootstrap):

```text
.traceweaver/
  intent-contract.yml          # adds: traceweaver_mode, hook_enforcement block
  state/
    authority-gate.json        # last authority-gate pass: baseline id/hash, scope, ts
    traceability.json          # last traceability-check pass + dirty-since marker
    session.json               # per-session lifecycle position (advisory)
```

- `tw-authority-gate` / `tw-auto` write `state/authority-gate.json` when a gate
  passes (citing baseline id+hash and the authorized scope).
- `tw-traceability-check` writes `state/traceability.json` on a clean pass; any
  `PostToolUse` edit sets a `dirty: true` marker so the next completion claim is
  blocked until re-checked.
- Hooks only ever *read* this state. If the state dir or `intent-contract.yml`
  is missing, hooks **no-op** (advisory passthrough) — this is what keeps
  REQ-TW-010 intact: the neutral Core skills never *depend* on hooks, and hooks
  never *require* the skills.

### Gate → event mapping

| Lifecycle intent | Host event | Hook behavior |
| --- | --- | --- |
| Give every session the lifecycle frame + current authority state | `SessionStart` | Inject `additionalContext`: baseline id/hash, mode, "route work through tw-* skills", `reloadSkills` (Claude). |
| Give each bounded subagent its authority context | `SubagentStart` | Inject the same capsule so spawned agents are not blank. |
| Remind on each turn what state we are in | `UserPromptSubmit` | Inject compact authority/traceability status + next recommended `tw-*` command. |
| Stop behavior-change edits without authority | `PreToolUse` (`Edit\|Write\|MultiEdit\|apply_patch\|Bash`) | If `mode == enforcing` AND target looks behavior-changing AND no fresh `authority-gate.json` covering scope → `deny` with reason + `additionalContext` telling the model to run `tw-authority-gate`/`tw-auto`. Else `defer`/`allow` (advisory: `allow` + warning context). |
| Mark work as needing verification | `PostToolUse` (same matcher) | Set `traceability.json.dirty = true`. Never blocks. |
| Catch "done" claims without a traceability pass | `Stop` | If `dirty` and no fresh traceability pass → inject reminder (advisory) / soft-block (enforcing) to run `tw-traceability-check`. |

### What "behavior-changing" means (PreToolUse classifier)

To avoid blocking benign edits (docs, the `.traceweaver/` records themselves,
the matrix), the PreToolUse handler classifies the target:

- Always allow: writes under `.traceweaver/`, `docs/`, `*.md` authority/trace
  artifacts, and the matrix (these are how the model *records* authority).
- Treat as behavior-change: source/code edits and `Bash` mutations outside the
  allow-list.
- Unknown → advisory warn, never hard-deny, even in enforcing mode (fail open,
  log to `state/session.json`). This bias-to-allow keeps false positives from
  bricking a session.

### Mode ladder (respects the held claim)

- `off`: hooks installed but inert.
- `advisory` (default, shippable now under the proposed requirement's
  non-blocking subset): hooks only **inject context** and **warn**; never deny.
- `enforcing` (held): PreToolUse/Stop may **deny**. Ships disabled; cannot be
  default; only a consuming repo's `.traceweaver/intent-contract.yml` may opt in,
  and only after the runtime-validation gate for enforcing mode passes.

## Implementation Units

### U1 — Proposed requirement + policy (authority first)

- Run `tw-requirements-review` to promote `REQ-TW-069` (candidate above) or an
  amended form.
- Update `plugins/traceweaver-core/references/traceweaver-runtime-policy.md` and
  `traceweaver-controlled-autonomy-policy.md` with a "Hook Enforcement Layer"
  section describing the mode ladder, the state files, and the REQ-TW-010
  no-op-when-absent invariant.
- Add `hook_enforcement` + `traceweaver_mode` keys to the
  `intent-contract-template.yml`.
- **Gate**: no hook code that can deny ships until this unit's requirement is
  approved.

### U2 — State contract + shared handler scripts (host-neutral)

- Define `.traceweaver/state/*.json` schemas as templates under
  `plugins/traceweaver-core/references/`.
- Add host-neutral handler scripts (one per concern) under a new
  `plugins/traceweaver-core/hooks/` dir, e.g.:
  - `tw-hook-session-context` (SessionStart/SubagentStart/UserPromptSubmit)
  - `tw-hook-pretool-authority-gate` (PreToolUse)
  - `tw-hook-posttool-mark-dirty` (PostToolUse)
  - `tw-hook-stop-traceability` (Stop)
- Scripts read stdin JSON, read `.traceweaver/` state, emit the host-shared
  `hookSpecificOutput` JSON. They must:
  - no-op (exit 0, no decision) when `.traceweaver/` or mode config is absent;
  - never deny when `mode != enforcing`;
  - be POSIX `sh`/`bash` portable and dependency-light (`jq` optional with a
    pure-shell fallback).

### U3 — Skill writes that produce gate state

- Update `tw-authority-gate` and `tw-auto` SKILL bodies to write
  `state/authority-gate.json` on a pass (with baseline id/hash + authorized
  scope + timestamp).
- Update `tw-traceability-check` to write `state/traceability.json` on a clean
  pass and clear the `dirty` marker.
- Keep `requirements-reviewer` and `systems-engineering-traceability` **untouched
  by hook coupling** (REQ-TW-010).

### U4 — Claude Code packaging

- Add `plugins/traceweaver-core/hooks/hooks.json` (the `{ "hooks": {...} }`
  wrapper) wiring the events above to `${CLAUDE_PLUGIN_ROOT}/hooks/tw-hook-*`.
- Marketplace install picks it up; document the trust prompt and
  `/reload-plugins`.
- Extend the `examples/claude-code-on-web/` kit so web sessions get the hooks
  too (the kit already ships a `SessionStart` hook — extend its `settings.json`
  rather than duplicate).

### U5 — Codex packaging + installer

- Add a Codex `hooks/hooks.json` (or manifest reference) so
  `src/index.ts install --to codex --include-skills` materializes hooks next to
  the skills under `~/.codex/...`.
- Extend `installCodexSkills` to copy the `hooks/` tree and record it in
  `install-manifest.json` (new `hooks` field + count, mirroring `skills`/
  `agents`). Preserve the existing ownership-marker / no-overwrite safety model.
- Antigravity (`installAntigravitySkills`) and Cursor: explicitly **skip** hook
  materialization and record `hooks_held: true` in the manifest, so the held
  status is machine-visible.

### U6 — Smoke + fixture validation

- New `scripts/traceweaver-smoke-hooks` fixture smoke: feed canned stdin JSON
  for each event into each handler and assert the emitted decision JSON
  (allow/deny/inject) for `off` / `advisory` / `enforcing` and for
  missing-state no-op.
- Extend `traceweaver-smoke-codex-discovery` and the Claude validate path to
  assert the `hooks/hooks.json` is present and parseable (static), with live
  hook execution gated behind `TRACEWEAVER_HOST_RUNTIME_EXEC=1` (held).
- Add the deny-path runtime proof to the **held** runtime-validation backlog —
  this is the evidence that, once passing, unlocks enforcing mode per the
  runtime policy.

### U7 — Docs + CHANGELOG

- README: a "Lifecycle enforcement hooks (alpha, advisory)" subsection per host,
  with the trust-prompt caveat and the mode ladder.
- CHANGELOG entry scoped to the advisory subset; enforcing mode noted as held.

## Sequencing and Gates

1. U1 (requirement + policy) — **blocks everything that can deny**.
2. U2 + U3 (state contract, handlers, skill writes) — buildable as advisory.
3. U4 + U5 (packaging) — ship advisory hooks disabled-safe.
4. U6 (smokes) — static now; deny-path runtime proof held.
5. U7 (docs).
6. Separate, later: enforcing-mode runtime validation gate → only then may
   `enforcing` be claimed/allowed.

Stop and return to `tw-requirements-review` if any unit needs authority beyond
REQ-TW-069 as approved.

## Risks and Mitigations

- **Held-claim violation**: shipping a deny-capable hook as default would breach
  the enforcing-mode hold. Mitigation: advisory default, enforcing opt-in only,
  gated on its own runtime validation; U1 is a hard predecessor.
- **REQ-TW-010 regression**: coupling the neutral Core skills to hooks.
  Mitigation: hooks read state only; absent state = no-op; the two neutral
  skills get no hook dependency.
- **False-positive blocking** bricking sessions. Mitigation: narrow
  behavior-change classifier, allow-list for authority/doc/`.traceweaver` writes,
  fail-open on unknown, advisory-first rollout.
- **Trust friction**: both hosts require trusting plugin hooks; silent failure
  if untrusted. Mitigation: document the trust step; SessionStart context states
  whether enforcement is active so the user can tell.
- **Codex hook instability** (reports of hooks not firing after some desktop
  updates) and **concurrent-hook** semantics. Mitigation: one gate handler per
  event; treat hooks as a hardening layer, not the sole guarantee — skills still
  carry the rules.
- **Cross-host drift**: two `hooks.json` manifests. Mitigation: single shared
  handler-script set; manifests are thin wiring only; a smoke asserts both wire
  the same handlers.

## Held Claims (unchanged by this plan)

- Enforcing authority-gate behavior remains held until runtime validation.
- Cursor and Antigravity hook support remains held.
- Autonomous commit/push/PR remains held; hooks must not weaken the existing
  publication-boundary stop owned by `tw-auto`.

## Validation Question

When TraceWeaver hooks are installed and trusted on Codex and Claude Code, does a
behavior-changing edit attempted without a recorded authority-gate pass get a
deterministic TraceWeaver response (context injection in advisory mode; a
blocking deny with an actionable next `tw-*` command in enforcing mode) — while
docs/authority/`.traceweaver` writes, hook-less hosts, and missing-state projects
continue to work unchanged?

## Next Step

Run `tw-requirements-review` to accept or amend `REQ-TW-069` and record the
authority that unlocks U2–U7. Do not implement any deny-capable hook before that
review passes; the advisory context-injection subset may be prototyped in
parallel as planning input, disabled by default.
