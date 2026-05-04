---
name: lfg
description: TraceWeaver-controlled compatibility alias for full autonomous engineering workflow. Delegates to tw-auto so CE-style automation runs under Intent Contract, authority, traceability, verification, and stop-before-commit controls.
argument-hint: "[feature description]"
disable-model-invocation: true
---

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
