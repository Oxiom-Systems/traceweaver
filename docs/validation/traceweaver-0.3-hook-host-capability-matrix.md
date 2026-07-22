---
id: TW-HOOK-CAPABILITY-MATRIX-2026-07-22-001
status: static_capability_discovery_complete_runtime_firing_held
date: 2026-07-22
owner: Oxiom Systems
requirements: [REQ-TW-079, REQ-TW-080, REQ-TW-081]
trace: TRACE-TW-060, TRACE-TW-061, TRACE-TW-062
verification: VER-TW-080, VER-TW-081, VER-TW-082
validation: VAL-TW-022, VAL-TW-023, VAL-TW-024
---

# TraceWeaver 0.3 Hook Host-Capability Matrix

This is a host-capability and static-artifact record, not a runtime transcript.
`Supported` means the inspected host exposes the named equivalent event and
configuration mechanism. It does **not** mean this plugin's hook fires in a
live session. Runtime firing remains held for every supported cell.

| Host | SessionStart equivalent (REQ-TW-079) | PreToolUse equivalent (REQ-TW-080) | Static evidence | Runtime status |
| --- | --- | --- | --- | --- |
| Claude Code | `supported` | `supported` | Local Claude plugin-development documentation specifies plugin-root `hooks/hooks.json`, `SessionStart`, `PreToolUse`, stdin JSON, `${CLAUDE_PLUGIN_ROOT}`, and the `hookSpecificOutput.additionalContext` payload shape. The pinned superpowers `hooks/hooks.json` demonstrates the portable SessionStart manifest mechanism. | Held: fixture/schema verification only; no live TraceWeaver session observed. |
| Cursor | `supported` | `supported` | Pinned superpowers `hooks/hooks-cursor.json` supplies the Cursor v1 lowercase `sessionStart` mechanism and `CURSOR_PLUGIN_ROOT` branch; its `session-start` source emits `additional_context`. The installed planning-with-files Cursor hook manifest also configures `preToolUse` for `Write|Edit`. | Held: fixture/schema verification only; no live TraceWeaver session observed. |
| Codex | `supported` | `unproven` | Local `~/.codex/hooks.json` configures `SessionStart`; its installed command emits `hookSpecificOutput.additionalContext`. For PreToolUse, the current Codex binary contains only partial binary-string evidence: `PreToolUse*Wire` JSON-schema structs and `CLAUDE_PLUGIN_ROOT` strings. There is no documented or active schema/configuration surface for that event, so this does not meet the supported bar. See the Codex discovery record. | Held: SessionStart has local configuration and payload evidence but no live TraceWeaver session; PreToolUse is unproven and no write hook was observed. |

## Static Artifact Boundary

Claude Code and Cursor are wired by the Unit 3 plugin artifacts
`plugins/traceweaver-core/hooks/hooks.json` and
`plugins/traceweaver-core/hooks/hooks-cursor.json`. Codex SessionStart is
supported by the locally inspected user configuration mechanism, but this unit
does not alter the existing `.codex-plugin/plugin.json` manifest or install a
user-level `~/.codex/hooks.json` entry. Codex PreToolUse remains unproven: its
binary strings do not establish a documented or active configuration/schema
surface. Installation, trust registration, and runtime firing are separately
held.

Open/held risk: the Codex plugin loader may auto-adopt `hooks/hooks.json` at
install time. Pinned superpowers declares `"hooks": {}` in its Codex manifest
to suppress that possible auto-discovery of its Claude-oriented manifest.
Installation and registration behavior are untested and held; decide explicit
suppression versus adoption before any Codex install work.

## Evidence References

- Pinned mechanism source: `~/.graphify/repos/obra/superpowers` at
  `d884ae04edebef577e82ff7c4e143debd0bbec99`:
  `hooks/session-start`, `hooks/hooks.json`, `hooks/hooks-cursor.json`, and
  `hooks/run-hook.cmd`.
- Claude Code local CLI: `claude plugin validate --help`; installed
  plugin-development hook documentation under
  `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/`.
- Cursor: pinned superpowers Cursor manifest and installed
  planning-with-files `.cursor/hooks.json`.
- Codex: `codex --help`, `codex plugin --help`, local `~/.codex/hooks.json`,
  and current Codex binary strings. The PreToolUse strings are partial
  binary-string evidence only (`PreToolUse*Wire` JSON-schema structs and
  `CLAUDE_PLUGIN_ROOT`); they are not a documented or active schema surface.

## Held Claims

- Every per-host/per-event runtime-firing claim is held.
- Enforcing or blocking behavior is held; the PreToolUse hook is advisory and
  must exit zero.
- Codex plugin installation, hook-trust registration, and TraceWeaver-specific
  Codex configuration are held; no user configuration is modified by this unit.
- Codex plugin-loader adoption of `hooks/hooks.json` is untested and held;
  explicit suppression versus adoption must be decided before Codex install
  work.
