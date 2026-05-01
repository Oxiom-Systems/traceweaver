# TraceWeaver Core Plugin Instructions

These instructions apply when working under `plugins/traceweaver-core/`.

## Runtime Scope

This plugin is the TraceWeaver Core alpha runtime. It packages the
U6a-selected `light-v0.1-authority-traceability` scope plus selected
CE-compatible workflow-continuity files for U6b Unit 2 static materialization:

- `requirements-reviewer`
- `systems-engineering-traceability`
- selected `using-agent-skills` routing context
- selected top-level runtime references
- thin `tw-*` adapter skills
- selected CE workflow skills recorded in
  `docs/validation/traceweaver-core-11-ce-runtime-inventory.md`
- selected CE agent files when present in the pinned CE source package

Do not add the full Core 11 runtime suite here without a new scope decision and
U6 evidence. Public skill folders outside this plugin remain product direction
until promoted into runtime scope.

Do not add CE files outside the selected CE runtime inventory without a
validation delta. The CE-compatible files are packaged to preserve static
workflow names for alpha testing; they do not by themselves prove clean CE
replacement or runtime-equivalent agent behavior.

## Authority Boundary

The adapter skills route to the core skills; they must not redefine the core
systems-engineering semantics. Keep authority-control behavior in the selected
runtime skills and references.

Do not claim package-ready, release-ready, upstream-ready, all-Core runtime, or
dynamic no-forced discovery unless a later validation record explicitly closes
those gates.

TraceWeaver alpha defaults to `traceweaver_mode: advisory`. Advisory mode may
record warnings, gaps, changes, exceptions, and held claims; it must not
silently rewrite CE behavior or claim enforcement.

For meaningful behavior changes, acting agents must cite stakeholder intent,
approved requirement or approved exception, verification evidence, validation
question, and current baseline version. If no approved authority exists, create
a gap, proposed requirement, change, exception candidate, accepted-risk
candidate, or clarification record instead of implementing from assumption.

Every TraceWeaver task or evidence update should end with suggested next steps.
