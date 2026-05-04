---
title: TraceWeaver Plugin Alpha Install Command Must Materialize Skills
date: 2026-04-30
category: documentation-gaps
module: TraceWeaver plugin alpha
problem_type: documentation_gap
component: documentation
severity: high
applies_when:
  - documenting plugin install commands that are used as gate evidence
  - proving alpha package materialization with the Compound Engineering installer
  - moving from U6b-alpha install evidence into U7 release-claim records
symptoms:
  - README command installed plugin metadata but did not copy selected skill files
  - install manifest listed skills while the isolated Codex skills directory was empty
  - U6b-alpha was blocked because users could copy a non-usable install command
root_cause: inadequate_documentation
resolution_type: documentation_update
tags: [traceweaver, plugin-install, u6b-alpha, include-skills, codex, documentation]
---

# TraceWeaver Plugin Alpha Install Command Must Materialize Skills

## Context

TraceWeaver Core U6b-alpha needed to prove that the plugin was installable as a
usable alpha with the selected `light-v0.1-authority-traceability` skills. The
plugin README documented:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to codex
```

That command installed only the plugin shell in the standalone Compound
Engineering installer path used for smoke testing. In an isolated Codex home it
wrote `AGENTS.md` and the install manifest, but did not copy the selected
`SKILL.md` files into `.codex/skills/traceweaver-core/`.

The install manifest still listed skills, so the failure was easy to miss if the
verification stopped at "manifest exists" instead of checking the installed file
tree.

Session-history search found prior notes about how `ce:compound`, Codex memory,
Beads, and MemSearch fit together, but no prior session about this specific
U6b-alpha install-command failure.

## Guidance

When install documentation is used as gate evidence, the documented command must
be the command that materializes the runtime surface being claimed. For the
TraceWeaver Core alpha plugin, the README command must include
`--include-skills`:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

The isolated smoke test may add `--codex-home <TEMP_CODEX_HOME>` so it does not
touch the user's real Codex home, but the functional install arguments must
match the README command:

```bash
bun run <compound-plugin-cli> install ./plugins/traceweaver-core \
  --to codex \
  --codex-home <TEMP_CODEX_HOME> \
  --include-skills
```

The U6b-alpha evidence should record more than command success. It should record
the installed selected paths, including:

```text
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/agents/openai.yaml
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/...
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/references/...
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-authority-gate/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-requirements-review/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-traceability-check/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/using-agent-skills/SKILL.md
```

The installed manifest should still be checked, but only as one part of the
evidence:

```json
{
  "pluginName": "traceweaver-core",
  "prompts": [],
  "agents": []
}
```

`prompts: []` is expected for this alpha because it installs skills, not slash
commands.

## Why This Matters

A plugin can look installable while still being unusable if the installer writes
metadata but does not copy the runtime skill files. That creates a false gate
pass: U6b-alpha appears complete, but a developer following the README cannot
invoke the selected skills.

For TraceWeaver, this also affects gate progression. U6b-alpha can support U7
release-claim records only for static install/materialization when all of these
are true:

- plugin manifests parse;
- the documented install command succeeds;
- selected skills are present after install;
- selected references and selected agent config are present after install;
- installed manifest records `prompts: []`;
- selected file hashes match U5.5/U6a static authority or an approved
  package-only hygiene delta;
- private/source-name leakage scans are clean.

Dynamic runtime discovery, no-forced skill selection, runtime reference opening,
routing/failure behavior, slash-command availability, and release runtime claims
remain separate U6b-dynamic or U9 evidence.

## When to Apply

- When a README command is cited by validation, release, or package evidence.
- When an installer has optional flags that change whether skills, prompts, or
  agents are copied.
- When an install manifest can list runtime surfaces without proving their files
  exist on disk.
- When moving from static package materialization to release-claim records.

## Examples

Bad gate evidence:

```text
Installed traceweaver-core to <TEMP_CODEX_HOME>
Manifest lists skills: yes
Conclusion: U6b-alpha passed
```

Better gate evidence:

```text
Installed traceweaver-core to <TEMP_CODEX_HOME>
README command includes --include-skills: yes
requirements-reviewer/SKILL.md exists after install: yes
systems-engineering-traceability/SKILL.md exists after install: yes
selected references exist after install: yes
requirements-reviewer/agents/openai.yaml exists after install: yes
installed manifest records prompts: []: yes
private/source-name scan: clean
dynamic runtime claims: held
Conclusion: U6b-alpha passed for static install/materialization only
```

The important distinction is that "install command succeeds" is not enough. The
installed file tree must contain the runtime surface being claimed.

## Related

- `plugins/traceweaver-core/README.md`
- `docs/validation/traceweaver-core-11-u6b-plugin-runtime.md`
- `docs/validation/traceweaver-core-11-u6a-runtime-scope.md`
