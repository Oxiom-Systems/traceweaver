# TraceWeaver Operating Modes For tw-plan

<!-- TRACEWEAVER: file-role=operating-mode-policy; req=REQ-TW-057; trace=TRACE-TW-036; ver=VER-TW-046 -->

`tw-plan` may create or update planning artifacts only inside TraceWeaver
authority boundaries. It classifies each request before delegating to the
packaged `ce-plan` engine.

Use Authority Baseline Mode when planning changes requirements, accepted scope,
validation intent, release/runtime/publication claims, Intent Contract
authority, traceability records, or held conditions. In this mode, route
requirements-quality concerns to `tw-requirements-review` and keep the plan as
candidate input until authority review passes.

Use Implementation Gate Mode planning when approved authority is unchanged and
the plan decomposes already-reviewed work into bounded implementation units,
verification targets, and review handoffs. In this mode, unrelated historical
wording drift is non-blocking debt unless it contradicts the current gate or
changes allowed behavior.

Do not use `tw-plan` for Publication Mode. Commit, push, PR, release, package,
remote mutation, or publication claims must route through the controlled
TraceWeaver publication wrappers.

Pause for human input when requirements are unclear, contradictory, incomplete,
missing, stale, or need material authority change. Agents may not create,
broaden, reinterpret, or silently approve requirements to keep planning moving.

Status/hash wording updates block only when they affect allowed behavior,
requirements, artifact identity for the current gate, runtime/publication
claims, or material authority. Otherwise report them as housekeeping debt and
continue with the scoped product gate.
