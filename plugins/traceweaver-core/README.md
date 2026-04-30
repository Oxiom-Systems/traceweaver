# TraceWeaver Core Plugin

TraceWeaver Core adds systems-engineering authority control to agentic software
work. This alpha plugin is intentionally small: it wires requirement quality and
traceability checks into planning, implementation, and review handoffs.

## Runtime Scope

Runtime scope: `light-v0.1-authority-traceability`

Included skills:

- `requirements-reviewer`
- `systems-engineering-traceability`
- `using-agent-skills` selected routing context
- `tw-requirements-review`
- `tw-authority-gate`
- `tw-traceability-check`

Included references:

- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`

The same four references are also packaged under
`skills/systems-engineering-traceability/references/` so skill-local reference
loading works in Codex converter installs.

Not included yet:

- full Core 11 runtime suite
- dedicated TraceWeaver subagents
- package-ready or release-ready claims
- upstream-ready claims
- dynamic no-forced discovery proof
- R31 release validation

## Skill Entry Points

- `tw-requirements-review` checks whether candidate
  requirements are good enough to become implementation authority.
- `tw-authority-gate` checks whether planned work has approved
  authority before implementation starts.
- `tw-traceability-check` checks whether behavior traces to
  approved authority, implementation, verification, and validation evidence.

This alpha installs skills, not slash commands. Slash-command or prompt
surfaces require a later package record that adds command/prompt files and
proves they install.

## Installation Target

This plugin follows the Compound Engineering plugin shape and is intended to be
installed from the repository checkout during U6b proof.

Example target command:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to codex
```

U6b alpha records the install command, runtime target, selected skills
materialized, selected references materialized, static adapter routing, and
dynamic-discovery limitation. Real runtime invocation and slash-command surfaces
remain later proof work.
