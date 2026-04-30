# TraceWeaver Core Plugin Instructions

These instructions apply when working under `plugins/traceweaver-core/`.

## Runtime Scope

This plugin is the TraceWeaver Core alpha runtime. It intentionally packages
only the U6a-selected `light-v0.1-authority-traceability` scope:

- `requirements-reviewer`
- `systems-engineering-traceability`
- selected `using-agent-skills` routing context
- selected top-level runtime references
- thin `tw-*` adapter skills

Do not add the full Core 11 runtime suite here without a new scope decision and
U6 evidence. Public skill folders outside this plugin remain product direction
until promoted into runtime scope.

## Authority Boundary

The adapter skills route to the core skills; they must not redefine the core
systems-engineering semantics. Keep authority-control behavior in the selected
runtime skills and references.

Do not claim package-ready, release-ready, upstream-ready, all-Core runtime, or
dynamic no-forced discovery unless a later validation record explicitly closes
those gates.
