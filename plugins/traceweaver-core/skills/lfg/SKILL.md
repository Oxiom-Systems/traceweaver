---
name: lfg
description: TraceWeaver-controlled compatibility alias for full autonomous engineering workflow. Delegates to tw-auto so CE-style automation runs under Intent Contract, authority, traceability, verification, and stop-before-commit controls.
argument-hint: "[feature description]"
disable-model-invocation: false
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill lfg`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=tw-auto-compatibility-alias-skill; req=REQ-TW-034; trace=TRACE-TW-021; ver=VER-TW-030 -->

# LFG Compatibility Alias

This installed TraceWeaver `lfg` entrypoint is not the raw Compound Engineering
autopilot. It is a compatibility alias for users who expect the CE `lfg` name
after installing TraceWeaver.

Invoke `tw-auto` with the same arguments and follow `tw-auto` exactly.

Required behavior:

1. Resolve `tw-auto` from the host's available-skills list.
2. Invoke `tw-auto` with `$ARGUMENTS`.
3. Do not run `ce-plan`, `ce-work`, `ce-code-review`, `ce-commit`,
   `ce-commit-push-pr`, or any raw CE automation path directly from this skill.
4. Do not commit, push, open a PR, claim clean CE replacement, claim runtime
   equivalence, or claim enforcing mode from this alias.
5. End with the next step reported by `tw-auto`.

If `tw-auto` is unavailable, stop and report that the TraceWeaver-controlled
automation surface is missing. Do not fall back to raw CE `lfg`.
