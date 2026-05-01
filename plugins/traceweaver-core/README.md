# TraceWeaver Core Plugin

TraceWeaver Core adds systems-engineering authority control to agentic software
work. This alpha plugin wires requirement quality, traceability checks, and
selected CE-compatible workflow surfaces into planning, implementation, and
review handoffs.

TraceWeaver preserves intent, authority, and traceability as agents move from
stakeholder needs to requirements, plans, code, tests, and release decisions.
Agents may help create requirements, plans, code, tests, and evidence, but they
may not silently promote their own interpretation into authority.

The controlled chain is:

```text
stakeholder intent
-> captured needs
-> reviewed requirements
-> approved authority or approved exception
-> implementation
-> verification
-> validation
-> change control
```

Alpha behavior is advisory: missing authority, weak requirements, untraced
behavior, and validation gaps should be recorded as warnings, gaps, exceptions,
or held claims rather than silently accepted as implementation authority.

## Runtime Scope

Runtime scope: `light-v0.1-authority-traceability`

Included skills:

- `requirements-reviewer`
- `systems-engineering-traceability`
- `using-agent-skills` selected routing context
- `tw-requirements-review`
- `tw-authority-gate`
- `tw-traceability-check`
- selected CE-compatible workflow skills, including `ce-brainstorm`,
  `ce-plan`, `ce-work`, `ce-code-review`, `ce-doc-review`, `ce-compound`,
  `ce-resolve-pr-feedback`, `ce-commit`, `ce-commit-push-pr`,
  `ce-compound-refresh`, `ce-sessions`, `ce-session-inventory`,
  `ce-session-extract`, `ce-test-browser`, `ce-test-xcode`, `ce-worktree`,
  `ce-setup`, `ce-debug`, and `lfg`

Included references:

- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`
- `references/intent-contract-template.yml`
- `references/authority-baseline-template.yml`
- `references/task-capsule-template.yml`
- `references/trace-record-template.yml`
- `references/gap-template.yml`
- `references/change-template.yml`
- `references/exception-template.yml`
- `references/traceweaver-runtime-policy.md`
- `references/ce-upstream-source-inventory.md`

The same four references are also packaged under
`skills/systems-engineering-traceability/references/` so skill-local reference
loading works in Codex converter installs.

Not included yet:

- full Core 11 runtime suite
- proven agent-backed CE runtime behavior
- package-ready or release-ready claims
- upstream-ready claims
- dynamic no-forced discovery proof
- slash-command or prompt surfaces
- clean CE replacement proof
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

The selected CE-compatible skills are installed as skill directories. They are
packaged for static alpha continuity testing only; runtime-equivalent CE
replacement and agent-backed behavior remain held until U9 or later runtime
proof.

## Intent Contract Templates

TraceWeaver alpha includes file templates for consuming repositories:

```text
.traceweaver/
  intent-contract.yml
  authority-baseline.yml
  task-capsules/
  trace-records/
  gaps/
  changes/
  exceptions/
```

The packaged templates live under `references/`. They define the minimum fields
for intent contracts, task capsules, trace records, gaps, changes, and
exceptions. If no approved requirement or approved exception authorizes a
meaningful change, advisory mode records a gap, change, exception candidate, or
clarification instead of treating agent interpretation as authority.

## Installation Target

This plugin follows the Compound Engineering plugin shape and is intended to be
installed from the repository checkout during U6b proof.

Example target command:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

`--include-skills` is required for the standalone Compound Engineering
installer path used by the U6b alpha smoke test. Without it, the installer
records plugin metadata but does not copy the selected skill directories into
the Codex skills location.

U6b alpha records the install command, runtime target, selected skills
materialized, selected references materialized, static adapter routing, and
dynamic-discovery limitation. Real runtime invocation and slash-command surfaces
remain later proof work.
