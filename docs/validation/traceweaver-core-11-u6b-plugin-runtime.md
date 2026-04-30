# TraceWeaver Core 11 U6b Plugin Runtime Evidence

Status: `PASSED_ALPHA_INSTALL_SMOKE_STATIC_LOADING_ONLY`

Date/session: 2026-04-30, `ce:work`, branch
`codex/traceweaver-u6-unblock-next`

U6b materializes the bounded U6a scope as an installable TraceWeaver Core alpha
plugin. This record proves package surface, isolated install, selected skill
materialization, selected reference materialization, and adapter routing from
static plugin files. It does not prove dynamic no-forced discovery, release
readiness, upstream readiness, all-Core runtime scope, or R31 completion.

## Decision Record

Record ID: `TWCORE-U6B-RUNTIME-2026-04-30-001`

Decision state: `passed_alpha_install_smoke_static_loading_only`

U6b alpha gate:
`U6b_alpha_install_static_materialization_for_exact_scope: PASSED`

U7 eligible: `true`

Runtime authority commit:
`696548694dd40ce298d77e603db069934b58f645`

Runtime subset: `light-v0.1-authority-traceability`

Plugin path: `plugins/traceweaver-core`

Allowed use:

- continue local TraceWeaver Core alpha plugin iteration;
- use U7 to create release claim records for the alpha plugin surfaces;
- use U9 or later runtime testing to prove dynamic discovery and invocation.

Held claims:

- dynamic no-forced runtime discovery;
- slash-command availability;
- real runtime invocation transcript;
- package-ready or release-ready status;
- upstream-ready status;
- full Core 11 runtime suite;
- R31 real-project validation complete.

## Package Surface

| Surface | Path | Decision |
| --- | --- | --- |
| Codex manifest | `plugins/traceweaver-core/.codex-plugin/plugin.json` | Present; identifies `traceweaver-core` alpha and skill directory. |
| Claude manifest | `plugins/traceweaver-core/.claude-plugin/plugin.json` | Present as compatibility metadata; not runtime-proven in this record. |
| Cursor manifest | `plugins/traceweaver-core/.cursor-plugin/plugin.json` | Present as compatibility metadata; not runtime-proven in this record. |
| Plugin instructions | `plugins/traceweaver-core/AGENTS.md` | Present; constrains scope to `light-v0.1-authority-traceability`. |
| Plugin README | `plugins/traceweaver-core/README.md` | Present; documents alpha scope and held claims. |
| Adapter skill | `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | Present; routes to `requirements-reviewer`. |
| Adapter skill | `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | Present; routes to `requirements-reviewer` and `systems-engineering-traceability`. |
| Adapter skill | `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` | Present; routes to `systems-engineering-traceability` and conditionally `requirements-reviewer`. |
| Prompt/command surface | N/A | Not included in this alpha; installed manifest records `prompts: []`. |

No dedicated runtime agents are included in this alpha. Placeholder agent files
are intentionally absent because the installer treats files under `agents/` as
runtime agents.

## Selected Runtime Files

The semantic runtime files below are materialized from Agent Skills commit
`696548694dd40ce298d77e603db069934b58f645`, except for public-hygiene redactions
recorded as `TWCORE-U6B-HYGIENE-DELTA-2026-04-30-001`. Adapter skills are
independently written runtime glue and must not redefine the selected skill
semantics.

| Runtime path | SHA-256 | Source / class | Decision |
| --- | --- | --- | --- |
| `plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` | `1cd5a3cb0316bb814afda991cc7b22602849949a25772e4dc214bbf5a995a91d` | Agent Skills candidate | Selected. |
| `plugins/traceweaver-core/skills/requirements-reviewer/agents/openai.yaml` | `ebdec17ec4de718225b6e4d417123be66c6e9b4a9225278e4bff79ba1581b829` | Agent Skills candidate | Selected invocation metadata. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/requirement-language-rules.md` | `ea8ef42e7623e6d01492d6247f3678ca12997b709829759d23d19f7ca8ec3492` | Agent Skills candidate | Selected reference. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/requirement-types-and-attributes.md` | `bd4364d6118d5cac81d5ec0fac80c2af5ddb98e3cb8fb2a7a8112968bf265976` | Agent Skills candidate | Selected reference. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/requirements-quality-checklist.md` | `a044d685381f974923661702e00c6bbf188ce9eb15ebdee3c9f11089bed65e85` | Agent Skills candidate | Selected reference. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/requirements-quality-operating-model.md` | `eac57d6d0397bd5076bce40fdef4ece61456e594687dd402d7cee0d89e0e0a2e` | Agent Skills candidate | Selected reference. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/requirements-review-finding-schema.md` | `3b0ae1b832311fe6b27655e0f9a488c2ee225969da5ca999ebc597b386fef83d` | Agent Skills candidate | Selected reference. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/source-basis.md` | `29fde1872ed56ee52c408801205f8413cfd9484465481ca0f5825e05cc2ff90e` | Public-hygiene redaction delta from Agent Skills candidate | Selected reference; protected source names and internal provenance details redacted. |
| `plugins/traceweaver-core/skills/requirements-reviewer/references/verification-validation-guide.md` | `01cb0a2736997c2ad4f169756e776aac8822986df78883d2edf54af9f3374b0e` | Agent Skills candidate | Selected reference. |
| `plugins/traceweaver-core/skills/requirements-reviewer/tests/requirements-quality-examples.md` | `acaa1ae1d5d2343776623c80299bf52c92d9447b5d730eb4d85663d7defc15df` | Agent Skills candidate | Selected examples. |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md` | `e14608e14d341df67c173a0c3b03c5725cae6844991565a1d150cdbfbb898282` | Agent Skills candidate | Selected. |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/references/requirements-and-vv-guide.md` | `2079d78917d7a2cf3e0d5c85f112ce5ea7e88c6fd537fe44521713c20354201c` | Agent Skills candidate copy | Selected skill-local reference copy for Codex converter installs. |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/references/risk-gap-and-change-control-guide.md` | `bb422bf12791dc1bf3d3025fc7bcc32e3b1aafcc2bc5f0c3a3bfa97c6a4f3e79` | Agent Skills candidate copy | Selected skill-local reference copy for Codex converter installs. |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/references/systems-engineering-traceability-operating-model.md` | `4306c403e175902673c2fe223379462fc6cef758d88ecad8b1709a14de848813` | Public-hygiene redaction delta from Agent Skills candidate | Selected skill-local reference copy for Codex converter installs; protected source names and internal provenance details redacted. |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/references/traceability-matrix-template.md` | `2575a50dd1cafbe07ec9ebb19992a69777f3050054efe937a54b5de35688de3c` | Agent Skills candidate copy | Selected skill-local reference copy for Codex converter installs. |
| `plugins/traceweaver-core/skills/using-agent-skills/SKILL.md` | `a23c1c5a0eb71ba56f3d5ae9eaa0704b6f56c80df1f4e49f3169569bb1fa31c5` | Agent Skills candidate | Selected routing context only; non-selected routed skills remain excluded. |
| `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | `f45459c1144646ece057f882da5eb730ff223ec725c19041d59cc3e3c9b7c4e1` | Runtime glue | Selected adapter. |
| `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | `93d78f160ee5dd78bd7ebf5dd9cff28e9c1ec3b8f5bfe2b25474b11512e475e3` | Runtime glue | Selected adapter. |
| `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` | `c2ac0332032b577e1749bb7990b01b6875f33d81bbec31de31f52d742250b943` | Runtime glue | Selected adapter. |

The same four support references are also kept at
`plugins/traceweaver-core/references/` for repository-level inspection. The
runtime install proof depends on the skill-local copies because the Codex
converter installs skill directories.

## Public-Hygiene Delta

Delta ID: `TWCORE-U6B-HYGIENE-DELTA-2026-04-30-001`

Files:

- `plugins/traceweaver-core/skills/requirements-reviewer/references/source-basis.md`
- `plugins/traceweaver-core/skills/systems-engineering-traceability/references/systems-engineering-traceability-operating-model.md`
- `plugins/traceweaver-core/references/systems-engineering-traceability-operating-model.md`

Reason: remove protected source names, access classifications, page-reference
signals, and internal provenance details from the public plugin package while
preserving the runtime rule that TraceWeaver uses original distilled guidance
and does not reproduce or claim compliance with external standards.

Impact on runtime scope: no change to selected skills, adapter routing,
requirement-quality rules, traceability rules, or allowed U6b claim. The delta
only narrows public source-basis disclosure in the package.

Decision state: `approved_for_alpha_public_hygiene`

U5.5/U6a impact record:
`TWCORE-U55-U6B-HYGIENE-IMPACT-2026-04-30-001` in
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md`.

Stale reset: any reintroduction of protected source names, internal provenance,
page references, copied source text, or compliance claims resets this U6b record
to `held`.

## Install Smoke

Documented command:

```sh
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

Smoke-test command shape:

```sh
bun run <compound-plugin-cli> install ./plugins/traceweaver-core --to codex --codex-home <TEMP_CODEX_HOME> --include-skills
```

`--include-skills` is required for the standalone Compound Engineering
installer path used by this alpha smoke test. Without it, the installer writes
plugin metadata and `AGENTS.md` but does not materialize the selected skill
directories under the isolated Codex skills location.

Observed result:

```text
Installed traceweaver-core to <TEMP_CODEX_HOME>
```

Installed manifest:

```json
{
  "version": 1,
  "pluginName": "traceweaver-core",
  "skills": [
    "tw-authority-gate",
    "tw-requirements-review",
    "using-agent-skills",
    "systems-engineering-traceability",
    "requirements-reviewer",
    "tw-traceability-check"
  ],
  "prompts": [],
  "agents": []
}
```

Installed selected skill files were observed under:

```text
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/
```

Selected installed paths observed:

```text
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/agents/openai.yaml
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirement-language-rules.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirement-types-and-attributes.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirements-quality-checklist.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirements-quality-operating-model.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirements-review-finding-schema.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/source-basis.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/verification-validation-guide.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/tests/requirements-quality-examples.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/references/requirements-and-vv-guide.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/references/risk-gap-and-change-control-guide.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/references/systems-engineering-traceability-operating-model.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/references/traceability-matrix-template.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-authority-gate/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-requirements-review/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-traceability-check/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/using-agent-skills/SKILL.md
```

The install smoke used `--include-skills` so the standalone converter copied
skill directories into the isolated Codex home. Native plugin loading may use a
different runtime path, so this record proves alpha install/materialization only.

Alpha install evidence checklist:

| Check | Result |
| --- | --- |
| Plugin manifest parses | Pass: `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, and `.cursor-plugin/plugin.json` parse as JSON. |
| Documented install command materializes selected skills | Pass: README command includes `--include-skills`; the isolated smoke used the same install arguments plus `--codex-home <TEMP_CODEX_HOME>`. |
| Installed plugin contains selected skills | Pass: `requirements-reviewer`, `systems-engineering-traceability`, `using-agent-skills`, and `tw-*` adapter skill directories were observed under `<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/`. |
| Installed plugin contains selected references | Pass: every selected `requirements-reviewer` reference, every selected `systems-engineering-traceability` skill-local reference, and `requirements-reviewer/agents/openai.yaml` were observed after install. |
| Installed manifest records no prompts | Pass: installed manifest records `"prompts": []`. |
| Selected installed file hashes match U5.5/U6a static authority or approved package-only hygiene delta | Pass: selected installed hashes match the U6b selected-runtime-file table, including approved public-hygiene package hashes for redacted package copies. |
| Private/source-name leakage scan | Pass: no private paths, non-public candidate locators, protected source names, or unsupported standards-conformance strings were observed in plugin files or the isolated install. |

## Routing and Failure Boundaries

Static routing evidence:

- `tw-requirements-review` routes to `requirements-reviewer`;
- `tw-authority-gate` routes to `requirements-reviewer` and
  `systems-engineering-traceability`;
- `tw-traceability-check` routes to `systems-engineering-traceability` and
  conditionally `requirements-reviewer`.

Failure behavior observed during install smoke:

- a placeholder `agents/README.md` was treated as a runtime agent by the
  installer and produced an unintended installed agent entry;
- the placeholder file was removed, leaving no dedicated alpha agents;
- the systems traceability support references were copied into the skill-local
  `references/` directory so Codex converter installs do not drop selected
  references that were top-level in the source candidate.

Dynamic invocation, reference-open transcript, and no-forced skill discovery
remain unproven.

## Hygiene

Public hygiene scan for the alpha plugin surface checked for private paths,
private repo names, non-public candidate locators, raw extraction paths, and
unsupported release claims. The plugin alpha keeps standards-source hygiene and
release-claim approval held for U7/U8/U9.

## U7 Handoff

U7 may begin release-claim record creation for the alpha install/static
materialization claim only:

```text
claim_id: TW-CLAIM-PLUGIN-ALPHA-INSTALLS-SKILLS
gate_state: approved
allowed_use: installable alpha with selected skills
blocked_claims:
  - slash commands available
  - dynamic no-forced discovery proven
  - full 11-skill runtime suite
  - external-standards conformance
close_condition: U6b-alpha evidence accepted
reopen_condition: plugin manifest, install command, selected skills, selected references, or package layout changes
```

Dynamic runtime discovery: `HELD_FOR_U6B_DYNAMIC_OR_U9`

Slash-command claims: `HELD`

Release runtime claims: `HELD`

## Stale Reset Rule

This U6b record resets to `held` if any selected runtime file hash changes, the
runtime authority commit changes, the plugin manifest changes, documented install
command changes, adapter routing changes, install smoke cannot be reproduced,
dynamic discovery is claimed from static evidence, non-selected Core skills are
added without a new scope decision, or release/upstream/package-ready claims are
made before U7/U8/U9.
