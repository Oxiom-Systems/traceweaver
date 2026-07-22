---
id: TW-CODEX-HOOK-DISCOVERY-2026-07-22-001
status: sessionstart_supported_pretooluse_unproven_runtime_and_installation_held
date: 2026-07-22
owner: Oxiom Systems
requirements: [REQ-TW-079, REQ-TW-080, REQ-TW-081]
trace: TRACE-TW-060, TRACE-TW-061, TRACE-TW-062
verification: VER-TW-080, VER-TW-081, VER-TW-082
---

# Codex Hook-Capability Discovery

## Question

Does the current local Codex host expose SessionStart- and PreToolUse-equivalent
command-hook surfaces suitable for the advisory TraceWeaver hooks?

## Read-Only Checks

| Check | Evidence | Result |
| --- | --- | --- |
| CLI surface | `codex --help` exposes plugin management and `--dangerously-bypass-hook-trust`; `codex plugin --help` exposes plugin management. | Hook support is an active CLI concern; CLI help does not itself document a plugin payload contract. |
| Local configured hook surface | `~/.codex/hooks.json` defines `SessionStart`, `UserPromptSubmit`, and `Stop` command hooks. | SessionStart configuration is present on this host. |
| Existing SessionStart payload | The configured memsearch `session-start.sh` emits `hookSpecificOutput.hookEventName: SessionStart` and `hookSpecificOutput.additionalContext` (and `systemMessage`). | Session-start context injection is evidenced locally. |
| PreToolUse binary-string evidence | The current `codex-darwin-arm64` vendor binary contains `PreToolUse*Wire` JSON-schema structs and `CLAUDE_PLUGIN_ROOT` strings. | Partial, insufficient binary-string evidence only. It exposes no documented or active schema/configuration surface and does not meet the supported bar. |
| Pinned external source comparison | Superpowers at `d884ae04edebef577e82ff7c4e143debd0bbec99` declares `hooks: {}` in its Codex manifest. | This suppresses possible auto-discovery of its Claude-oriented `hooks/hooks.json`; it does not prove Codex installation or registration behavior. |

The previously cited `planning-with-files/.codex/hooks.json` is a bundled
template in the Claude Code plugin marketplace cache at
`~/.claude/plugins/marketplaces/planning-with-files/.codex/hooks.json`. It was
never installed into an active `.codex/` project and is not evidence of an
active Codex PreToolUse integration.

## Result

| Cell | State | Basis |
| --- | --- | --- |
| Codex × SessionStart-equivalent | `supported` | Local `~/.codex/hooks.json`, actual configured SessionStart command, and observed local payload source. |
| Codex × PreToolUse-equivalent | `unproven` | Partial binary-string evidence only (`PreToolUse*Wire` JSON-schema structs and `CLAUDE_PLUGIN_ROOT`); no documented or active schema/configuration surface. |

## Scope and Held Status

This discovery authorizes fixture-level SessionStart payload coverage only. Unit
3 does not modify `~/.codex/`, create a Codex-specific TraceWeaver manifest,
alter `.codex-plugin/plugin.json`, accept hook trust, or observe a live
TraceWeaver hook firing. Codex PreToolUse fixture, manifest, and runtime claims
are removed or held because the event is unproven. Therefore the following
remain held:

- TraceWeaver Codex hook installation and registration;
- hook trust and dynamic discovery;
- SessionStart runtime firing and all PreToolUse capability/runtime claims;
- any blocking or enforcing action.

## Open / Held Installation Risk

The Codex plugin loader may auto-adopt `hooks/hooks.json` at install time.
Pinned superpowers suppresses this possibility with `.codex-plugin/plugin.json`
`"hooks": {}`. Codex installation and registration behavior have not been
tested and remain held. Decide explicit suppression versus adoption before any
Codex install work.

The portable session-start script retains its SDK-standard `additionalContext`
fallback for non-Claude/non-Cursor hosts. Its fixture is static evidence, not a
claim that Codex has installed or fired that script.
