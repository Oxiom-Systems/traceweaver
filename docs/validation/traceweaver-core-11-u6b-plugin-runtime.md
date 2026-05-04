# TraceWeaver Core 11 U6b Plugin Runtime Evidence

Status: `PASSED_ALPHA_INSTALL_SMOKE_STATIC_LOADING_AND_U6B_UNIT2_STATIC_MATERIALIZATION`

Date/session: 2026-04-30 and 2026-05-01, `ce:work`, branch
`codex/traceweaver-u6-unblock-next`

U6b materializes the bounded U6a scope as an installable TraceWeaver Core alpha
plugin. This record proves package surface, isolated install, selected skill
materialization, selected reference materialization, and adapter routing from
static plugin files. It does not prove dynamic no-forced discovery, release
readiness, upstream readiness, all-Core runtime scope, or R31 completion.

## Decision Record

Record ID: `TWCORE-U6B-RUNTIME-2026-04-30-001`

Decision state:
`passed_alpha_install_smoke_static_loading_and_u6b_unit2_static_materialization`

U6b alpha gate:
`U6b_alpha_install_static_materialization_for_exact_scope: PASSED`

U6b Unit 2 gate:
`U6b_unit_2_ce_compatible_static_materialization: PASSED`

U7 eligible: `pending_review_closure`

Runtime authority commit:
`696548694dd40ce298d77e603db069934b58f645`

Runtime subset: `light-v0.1-authority-traceability`

Plugin path: `plugins/traceweaver-core`

Allowed use:

- continue local TraceWeaver Core alpha plugin iteration;
- prepare U7 release claim records only after refreshed code and document review
  close cleanly for this U6b Unit 2 package surface;
- use U9 or later runtime testing to prove dynamic discovery and invocation.

Held claims:

- dynamic no-forced runtime discovery;
- slash-command availability;
- real runtime invocation transcript;
- package-ready or release-ready status;
- upstream-ready status;
- full Core 11 runtime suite;
- enforcing mode;
- autonomous commit, push, or PR publication;
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
| Advisory automation skill | `plugins/traceweaver-core/skills/tw-auto/SKILL.md` | Added after U6b Unit 2 as a selected package-scope addition; static materialization evidence is recorded in `docs/validation/traceweaver-controlled-autonomy-alpha.md`; runtime behavior remains held. |
| Prompt/command surface | N/A | Not included in this alpha; installed manifest records `prompts: []`. |

U6b Unit 2 adds selected CE-compatible workflow skills and CE agent files from
the source-pinned inventory. The isolated Codex install converts those source
agent files into installed Codex agent TOML files. This proves package and
install materialization only; it does not prove clean CE replacement or
agent-backed workflow equivalence.

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
| `plugins/traceweaver-core/skills/using-agent-skills/SKILL.md` | `64c7c37f62e4631cf5d47498566fc63c971e722599ac6017484791e7768e7c13` | Agent Skills candidate | Selected routing context only; packaged TraceWeaver equivalents are listed. |
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

## Initial U6b Alpha Install Smoke

This section preserves the initial U6b-alpha install evidence for the small
TraceWeaver authority-control scope. The later Unit 2 section records the
expanded CE-compatible install manifest and installed file counts.

Documented command:

```sh
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

Smoke-test command shape:

```sh
bun run src/index.ts install ./plugins/traceweaver-core --to codex --codexHome <TEMP_CODEX_HOME> --include-skills
```

`src/index.ts` is a repository-local self-contained Codex installer for this
alpha. `--include-skills` is required for this alpha smoke test; without it, the
installer fails closed and does not produce a partial install that omits the
selected skill directories.

Observed result:

```text
Installed traceweaver-core to <TEMP_CODEX_HOME>
```

Initial installed manifest excerpt:

```text
plugin=traceweaver-core
target=codex
includeSkills=true
skills=27 namespaced entries under <TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/
callableSkills=27 direct entries under <TEMP_CODEX_HOME>/.codex/skills/
agents=49 TOML entries under <TEMP_CODEX_HOME>/.codex/agents/traceweaver-core/
prompts=[]
```

Installed selected skill files were observed under:

```text
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/
<TEMP_CODEX_HOME>/.codex/skills/
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
<TEMP_CODEX_HOME>/.codex/skills/tw-auto/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/lfg/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/tw-grill/SKILL.md
```

The install smoke used `--include-skills` so the standalone converter copied
skill directories into the isolated Codex home. Native plugin loading may use a
different runtime path, so this record proves alpha install/materialization only.

Alpha install evidence checklist:

| Check | Result |
| --- | --- |
| Plugin manifest parses | Pass: `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, and `.cursor-plugin/plugin.json` parse as JSON. |
| Documented install command materializes selected skills | Pass: README command includes `--include-skills`; the isolated smoke used the repo-local `src/index.ts` self-contained installer with the same install arguments plus `--codexHome <TEMP_CODEX_HOME>`. |
| Installed plugin contains selected skills | Pass: `requirements-reviewer`, `systems-engineering-traceability`, `using-agent-skills`, and `tw-*` adapter skill directories were observed under `<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/`, with direct callable copies under `<TEMP_CODEX_HOME>/.codex/skills/`. |
| Installed plugin contains selected references | Pass: every selected `requirements-reviewer` reference, every selected `systems-engineering-traceability` skill-local reference, and `requirements-reviewer/agents/openai.yaml` were observed after install. |
| Installed manifest records no prompts | Pass: installed manifest records `"prompts": []`. |
| Selected installed file hashes match U5.5/U6a static authority or approved package-only hygiene delta | Pass: selected installed hashes match the U6b selected-runtime-file table, including approved public-hygiene package hashes for redacted package copies. |
| Private/source-name leakage scan | Pass: no private paths, non-public candidate locators, protected source names, or unsupported standards-conformance strings were observed in plugin files or the isolated install. |

## U6b Unit 2 CE-Compatible Static Materialization

Record ID: `TWCORE-U6B-UNIT2-2026-05-01-001`

Decision state: `passed_ce_compatible_static_materialization_source_pinned`

CE source pin:

```text
source_repository: https://github.com/EveryInc/compound-engineering-plugin
source_version: 3.4.1
source_tags: compound-engineering-v3.4.1, cli-v3.4.1
source_commit: d685f0794863a73ae3ca3620d2ae747510e9eaa0
license: MIT
aggregate_fingerprint: 6892159ad685e59230514f9e58fb7ffd06052d84da643c73ac95b787e3c60d23
```

Materialized package scope:

| Class | Count / paths | Decision |
| --- | --- | --- |
| Selected CE-compatible skill/support files | 73 files under selected `skills/ce-*` and `skills/lfg` directories | Package-present and hash-aligned to `docs/validation/traceweaver-core-11-ce-runtime-inventory.md`. `skills/lfg/SKILL.md` is an approved TraceWeaver alias delta that delegates to `tw-auto`, not raw CE autopilot. |
| Selected CE source agents | 49 files under `plugins/traceweaver-core/agents/` | Package-present and installed as Codex agent TOML in isolated smoke. |
| Source-absent CE inventory agents | None in the refreshed `3.4.1` selected inventory | No source-absent CE agent exceptions are recorded for the refreshed inventory. |
| TraceWeaver authority templates | `intent-contract-template.yml`, `authority-baseline-template.yml`, `task-capsule-template.yml`, `trace-record-template.yml`, `gap-template.yml`, `change-template.yml`, `exception-template.yml`, `traceweaver-runtime-policy.md` | Package-present and parse-checked where YAML applies. |
| Prompt/command surface | `prompts: []` | Still held; this alpha installs skills and agents, not slash commands. |

Static scope audit:

```text
scripts/traceweaver-audit-plugin-scope
selected_files=122
packaged_ce_files=122
missing=none
extra=none
traceweaver_required_files=30
traceweaver_missing=none
hash_mismatches=none
traceweaver_hash_mismatches=none
```

CE support-closure audit:

```text
scripts/traceweaver-audit-ce-closure
skill_entrypoints=19
selected_ce_files_scanned=73
support_references_checked=53
missing=none
untracked=none
```

Manifest and template parse:

```text
parse_ok=plugins/traceweaver-core/.codex-plugin/plugin.json
parse_ok=plugins/traceweaver-core/.claude-plugin/plugin.json
parse_ok=plugins/traceweaver-core/.cursor-plugin/plugin.json
parse_ok=plugins/traceweaver-core/references/intent-contract-template.yml
parse_ok=plugins/traceweaver-core/references/authority-baseline-template.yml
parse_ok=plugins/traceweaver-core/references/task-capsule-template.yml
parse_ok=plugins/traceweaver-core/references/trace-record-template.yml
parse_ok=plugins/traceweaver-core/references/gap-template.yml
parse_ok=plugins/traceweaver-core/references/change-template.yml
parse_ok=plugins/traceweaver-core/references/exception-template.yml
```

Isolated Unit 2 install command:

```sh
bun run src/index.ts install <TRACEWEAVER_REPO>/plugins/traceweaver-core --to codex --codexHome <TEMP_CODEX_HOME> --include-skills
```

Observed install summary:

```text
Installed traceweaver-core to <TEMP_CODEX_HOME>
skill_md_count=27
agent_toml_count=49
prompts=[]
```

Installed CE agent manifest entries:

```text
ce-adversarial-document-reviewer.toml
ce-adversarial-reviewer.toml
ce-agent-native-reviewer.toml
ce-ankane-readme-writer.toml
ce-api-contract-reviewer.toml
ce-architecture-strategist.toml
ce-best-practices-researcher.toml
ce-code-simplicity-reviewer.toml
ce-coherence-reviewer.toml
ce-correctness-reviewer.toml
ce-data-integrity-guardian.toml
ce-data-migration-expert.toml
ce-data-migrations-reviewer.toml
ce-deployment-verification-agent.toml
ce-design-implementation-reviewer.toml
ce-design-iterator.toml
ce-design-lens-reviewer.toml
ce-dhh-rails-reviewer.toml
ce-feasibility-reviewer.toml
ce-figma-design-sync.toml
ce-framework-docs-researcher.toml
ce-git-history-analyzer.toml
ce-issue-intelligence-analyst.toml
ce-julik-frontend-races-reviewer.toml
ce-kieran-python-reviewer.toml
ce-kieran-rails-reviewer.toml
ce-kieran-typescript-reviewer.toml
ce-learnings-researcher.toml
ce-maintainability-reviewer.toml
ce-pattern-recognition-specialist.toml
ce-performance-oracle.toml
ce-performance-reviewer.toml
ce-pr-comment-resolver.toml
ce-previous-comments-reviewer.toml
ce-product-lens-reviewer.toml
ce-project-standards-reviewer.toml
ce-reliability-reviewer.toml
ce-repo-research-analyst.toml
ce-schema-drift-detector.toml
ce-scope-guardian-reviewer.toml
ce-security-lens-reviewer.toml
ce-security-reviewer.toml
ce-security-sentinel.toml
ce-session-historian.toml
ce-slack-researcher.toml
ce-spec-flow-analyzer.toml
ce-swift-ios-reviewer.toml
ce-testing-reviewer.toml
ce-web-researcher.toml
```

Agent identity rule: each installed TOML entry above must map to a selected
source agent in `docs/validation/traceweaver-core-11-ce-runtime-inventory.md`
by replacing `.toml` with `.agent.md` under `plugins/traceweaver-core/agents/`.
The two source-absent CLI readiness agents are intentionally absent from both
the package and installed manifest.

Observed identity check:

```text
agent_identity_check installed=49 source=49 missing=none extra=none
```

Source-agent-to-installed-TOML identity table:

| Source agent file | Installed Codex agent entry | Source SHA-256 |
| --- | --- | --- |
| `plugins/traceweaver-core/agents/ce-adversarial-document-reviewer.agent.md` | `ce-adversarial-document-reviewer.toml` | `64f53b939d70fef8b98081e0e716ac57245a4223f4693b50b68a341d6735d400` |
| `plugins/traceweaver-core/agents/ce-adversarial-reviewer.agent.md` | `ce-adversarial-reviewer.toml` | `ad6661421f47a93d43670c42617cc4a83ea6ac5578824deeca8ffa463166da43` |
| `plugins/traceweaver-core/agents/ce-agent-native-reviewer.agent.md` | `ce-agent-native-reviewer.toml` | `51e1529ae2900178b255595e20335fbb8a8bf27c7005b41a681944c5f13b998a` |
| `plugins/traceweaver-core/agents/ce-ankane-readme-writer.agent.md` | `ce-ankane-readme-writer.toml` | `a0ed6f5bc201c53d616cc6eb6e214ab6d3a7927d255b8f447cee07d254d5b8a6` |
| `plugins/traceweaver-core/agents/ce-api-contract-reviewer.agent.md` | `ce-api-contract-reviewer.toml` | `534b07d70677f8c71f6bbe9aecc12c78367087be60308cb937d7e1c9824c377c` |
| `plugins/traceweaver-core/agents/ce-architecture-strategist.agent.md` | `ce-architecture-strategist.toml` | `fc4b7f1509c18abc21733a41214a7e946780de8900c53cf04de2186685550215` |
| `plugins/traceweaver-core/agents/ce-best-practices-researcher.agent.md` | `ce-best-practices-researcher.toml` | `14896ea6d69adae21df8d038f38887c2b12aa415a094e4f891ef24d28fd5ac93` |
| `plugins/traceweaver-core/agents/ce-code-simplicity-reviewer.agent.md` | `ce-code-simplicity-reviewer.toml` | `46d0c51deba4d370ca729ad0138c535395d170c0547070c4b1d9dd8d5ee30f64` |
| `plugins/traceweaver-core/agents/ce-coherence-reviewer.agent.md` | `ce-coherence-reviewer.toml` | `f37c49be80d20673f189f08184000dfe4d842c384436bd9141ae0ef9cacad354` |
| `plugins/traceweaver-core/agents/ce-correctness-reviewer.agent.md` | `ce-correctness-reviewer.toml` | `caefb6555ebac3f2d4987cd9393e72b038e503fc5d0e2bc9a6f2cbf04f8e805f` |
| `plugins/traceweaver-core/agents/ce-data-integrity-guardian.agent.md` | `ce-data-integrity-guardian.toml` | `347d596bf1e88296bd0caddb7de32a9b9ea2ac8f849d09aa3323d346310a2a86` |
| `plugins/traceweaver-core/agents/ce-data-migration-expert.agent.md` | `ce-data-migration-expert.toml` | `9cf8dcb6441db0aa1e934ce15e4ae207b12ee35634317d78e61e1615d6bfa05e` |
| `plugins/traceweaver-core/agents/ce-data-migrations-reviewer.agent.md` | `ce-data-migrations-reviewer.toml` | `30fc7f9defa3ef3946bce46a6179bd3b2fb3a77db1413d54b3f4645577c32be0` |
| `plugins/traceweaver-core/agents/ce-deployment-verification-agent.agent.md` | `ce-deployment-verification-agent.toml` | `0706a19e1d01db7654dafe01a1239d6e03703323686b481e0a10fc06b1442633` |
| `plugins/traceweaver-core/agents/ce-design-implementation-reviewer.agent.md` | `ce-design-implementation-reviewer.toml` | `f311855c5d11654a727f145c371b22f38469e6356448580ed1e2cfaae087ed92` |
| `plugins/traceweaver-core/agents/ce-design-iterator.agent.md` | `ce-design-iterator.toml` | `f64f4cff3108dcf701f94995ec6626f9fd7422b733426fce8a0c105bc4a72bd5` |
| `plugins/traceweaver-core/agents/ce-design-lens-reviewer.agent.md` | `ce-design-lens-reviewer.toml` | `c8715d27a842e54d005a5e034a04880f95a84b9430a061162975b585c544de28` |
| `plugins/traceweaver-core/agents/ce-dhh-rails-reviewer.agent.md` | `ce-dhh-rails-reviewer.toml` | `94e579ec789c25fe76d44abe8dc1801093e653fc999c2ea6f6bd6ce70fb10cd1` |
| `plugins/traceweaver-core/agents/ce-feasibility-reviewer.agent.md` | `ce-feasibility-reviewer.toml` | `3473e9b00cbaa0ffa11f85548cabc27ffd1d0db17d2fc27e66b556a42ab36b01` |
| `plugins/traceweaver-core/agents/ce-figma-design-sync.agent.md` | `ce-figma-design-sync.toml` | `652a4c95ce6339bd718b95bbb22a4bc00e837d553653b283e7369cc0d4a198a7` |
| `plugins/traceweaver-core/agents/ce-framework-docs-researcher.agent.md` | `ce-framework-docs-researcher.toml` | `67aef22bd96b2c5d3390fc7d1d5d7a9208619bc0b116c447f42cf3c36e8bc244` |
| `plugins/traceweaver-core/agents/ce-git-history-analyzer.agent.md` | `ce-git-history-analyzer.toml` | `d51fdbc3042e02fe5dbc048009e18696780c6d10e2e00c58f3d7e6a49f49974b` |
| `plugins/traceweaver-core/agents/ce-issue-intelligence-analyst.agent.md` | `ce-issue-intelligence-analyst.toml` | `fa3cbc5a329937777eef03c4825e4b02a4f00ca6e5b9e01637a72ce89e8cb17f` |
| `plugins/traceweaver-core/agents/ce-julik-frontend-races-reviewer.agent.md` | `ce-julik-frontend-races-reviewer.toml` | `8d1668c7d2fd0dba34ba8fff5e94c057859567eaf59b0e63c77443120486f3ae` |
| `plugins/traceweaver-core/agents/ce-kieran-python-reviewer.agent.md` | `ce-kieran-python-reviewer.toml` | `38140007e1a3748163bb6fe9ef42badb6f71119ac2ab3d5b93f7f8b7b4c6470a` |
| `plugins/traceweaver-core/agents/ce-kieran-rails-reviewer.agent.md` | `ce-kieran-rails-reviewer.toml` | `dec3e0981e18beb9beed0c09c86e46e34db5e3096cfb630bc525082e191132d7` |
| `plugins/traceweaver-core/agents/ce-kieran-typescript-reviewer.agent.md` | `ce-kieran-typescript-reviewer.toml` | `8fa842d6bb6fe3fc535b38d51de590acdc1f2289eba88c330a5d94e9e8d738da` |
| `plugins/traceweaver-core/agents/ce-learnings-researcher.agent.md` | `ce-learnings-researcher.toml` | `6daea986282d0206e93242a30c2359a096228c14a221f0672a181f351188bfbd` |
| `plugins/traceweaver-core/agents/ce-maintainability-reviewer.agent.md` | `ce-maintainability-reviewer.toml` | `569f9876055aec23d9e1273bb10e484ec52dc3fec2a2e99c96275e98479da2e1` |
| `plugins/traceweaver-core/agents/ce-pattern-recognition-specialist.agent.md` | `ce-pattern-recognition-specialist.toml` | `1b956a44a75bcc6ec2a0e2d848d77b5b95290eaffe4bc291b2fbfa9e98800fc9` |
| `plugins/traceweaver-core/agents/ce-performance-oracle.agent.md` | `ce-performance-oracle.toml` | `e293484072ffc06cf72a2e78e8c8934a966e91b98fe2029d58142941b7b14e18` |
| `plugins/traceweaver-core/agents/ce-performance-reviewer.agent.md` | `ce-performance-reviewer.toml` | `3f0c6b2bb575cea20aa63ae4d19da3c6e446b332f40294acb70783e63257c889` |
| `plugins/traceweaver-core/agents/ce-pr-comment-resolver.agent.md` | `ce-pr-comment-resolver.toml` | `c3364f9dccd9cecb75504b759baf74c246b7df24740e8aa0a171fe604099d9df` |
| `plugins/traceweaver-core/agents/ce-previous-comments-reviewer.agent.md` | `ce-previous-comments-reviewer.toml` | `12f2892a6c3dc692bdf24983ab9e9b4dbb6ec790cb29f629ca197a178712818e` |
| `plugins/traceweaver-core/agents/ce-product-lens-reviewer.agent.md` | `ce-product-lens-reviewer.toml` | `3640eb11e238ffad994e0c182723b27550dadbdf262972af62c3f8da567b8d4e` |
| `plugins/traceweaver-core/agents/ce-project-standards-reviewer.agent.md` | `ce-project-standards-reviewer.toml` | `9cb91e597ba872ebf495d05760d48cd59e3cf89e23010fd06e465c04b51f89d0` |
| `plugins/traceweaver-core/agents/ce-reliability-reviewer.agent.md` | `ce-reliability-reviewer.toml` | `089af007af6a7eae91d08dba5b5b169209c700ace7ea5a6715b05d54b870a462` |
| `plugins/traceweaver-core/agents/ce-repo-research-analyst.agent.md` | `ce-repo-research-analyst.toml` | `f2ee62dd210e8d429a88bb531fa0939925288191dd7ac5678e6d74b2142f8135` |
| `plugins/traceweaver-core/agents/ce-schema-drift-detector.agent.md` | `ce-schema-drift-detector.toml` | `bc82f0d9f07ed6fec40b88465f882e51a472c4dcb3992bd85a68db2fc215112f` |
| `plugins/traceweaver-core/agents/ce-scope-guardian-reviewer.agent.md` | `ce-scope-guardian-reviewer.toml` | `a1f85b17849c59b156f15380f2e47f6c84ac44830796a86e11fb93be8f317280` |
| `plugins/traceweaver-core/agents/ce-security-lens-reviewer.agent.md` | `ce-security-lens-reviewer.toml` | `d8bba13fda6e05b8e68ec874235563bd8d2af5d1ec1c80635b07c73250de1eef` |
| `plugins/traceweaver-core/agents/ce-security-reviewer.agent.md` | `ce-security-reviewer.toml` | `2ba75e811070a721c3d2d74b282658a083dbd0c6c69ce36d1d8513a22260068c` |
| `plugins/traceweaver-core/agents/ce-security-sentinel.agent.md` | `ce-security-sentinel.toml` | `0c7abeb915f31cc28190e8a21f15a3582985bb2951b32ac5253627c845a05240` |
| `plugins/traceweaver-core/agents/ce-session-historian.agent.md` | `ce-session-historian.toml` | `2234452d517bc868c495cc1bbd8218e2384017124e49bc7c89b3b0a5e0e6bf5e` |
| `plugins/traceweaver-core/agents/ce-slack-researcher.agent.md` | `ce-slack-researcher.toml` | `d84530b1acad8195be22c40c91b18f88d51b06884eb4c49ae220dd25573c12bd` |
| `plugins/traceweaver-core/agents/ce-spec-flow-analyzer.agent.md` | `ce-spec-flow-analyzer.toml` | `b135a42e802bd85e5f0db2556c1bbaf72ed61f9510a996e1e4bcdfa2d4ab1a3d` |
| `plugins/traceweaver-core/agents/ce-swift-ios-reviewer.agent.md` | `ce-swift-ios-reviewer.toml` | `13ce43d7bb5e659631f960bb52a23e2ab2e0b714e6a902a7f4cbd25e1e9e2633` |
| `plugins/traceweaver-core/agents/ce-testing-reviewer.agent.md` | `ce-testing-reviewer.toml` | `049cb1e6b47bd88c820a707655f50ad613b5811c1f4245cd9252d65a2a171f31` |
| `plugins/traceweaver-core/agents/ce-web-researcher.agent.md` | `ce-web-researcher.toml` | `f1152ea936092884fed55ff541c5b5dc53fbe1b185eae4d4c421a1676d27697e` |

Selected installed paths checked:

```text
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/agents/openai.yaml
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirement-language-rules.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/requirement-types-and-attributes.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/requirements-reviewer/references/verification-validation-guide.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/systems-engineering-traceability/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/ce-plan/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/ce-work/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/ce-code-review/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/ce-doc-review/SKILL.md
<TEMP_CODEX_HOME>/.codex/agents/traceweaver-core/ce-correctness-reviewer.toml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/install-manifest.json
```

CE workflow claim classes:

| Workflow surface | Unit 2 claim class | Held boundary |
| --- | --- | --- |
| `ce-brainstorm`, `ce-plan`, `ce-work`, `ce-code-review`, `ce-doc-review`, `ce-compound` | `static_package_and_install_materialized` | Runtime-equivalent behavior and TraceWeaver-integrated workflow behavior remain held for U9. |
| `ce-resolve-pr-feedback`, `ce-commit`, `ce-commit-push-pr`, `ce-compound-refresh`, `ce-sessions`, `ce-session-inventory`, `ce-session-extract`, `ce-test-browser`, `ce-test-xcode`, `ce-worktree`, `ce-setup`, `ce-debug` | `static_package_and_install_materialized` | Runtime invocation, environment/tool integration, publication, and clean replacement remain held for U9; packaged publication-capable surfaces stop or draft only in alpha. |
| `lfg` | `static_package_and_install_materialized_as_traceweaver_alias` | Package file delegates to `tw-auto`; runtime alias invocation, clean replacement, and runtime equivalence remain held for U9. |
| CE reviewer/research agents | `installed_as_codex_agent_toml` | Agent-backed behavior, persona selection, and parity with the installed CE plugin remain held until runtime transcript proof. |

Hygiene scan: no actual local user paths, local cache paths, non-public
candidate locators, protected source names, or unsupported standards-conformance
claims were found in the plugin package. Generic CE examples that show
placeholder absolute paths remain accepted as upstream CE instructional text,
not TraceWeaver provenance.

Review finding closure:

| Finding | Closure evidence |
| --- | --- |
| Unit 2 stale-reset inputs | Closed by the stale reset rule below, which now covers CE source pin drift, CE inventory/hash drift, support-closure audit failure, installed CE agent/template drift, selected CE package-scope changes, selected file drift, install-command drift, and premature dynamic/release/runtime claims. |
| Exact installed CE agent identity | Closed by the installed TOML manifest, source-agent-to-installed-TOML identity table, source hashes, and `agent_identity_check installed=49 source=49 missing=none extra=none`. |
| Stale no-agent failure text | Closed by routing/failure boundaries that explicitly state the placeholder agent file was removed and only 49 selected CE source agents install as Codex agent TOML files. |
| U7 Unit 2 handoff scope | Closed by the U7 handoff below, which covers selected TraceWeaver authority skills, selected CE-compatible workflow skills, selected CE source agents, and Intent Contract templates while keeping runtime-equivalence, clean replacement, dynamic discovery, slash commands, enforcing mode, full Core 11, and conformance claims held. |

U7 effect:
`U7_eligible_for_narrow_alpha_claims: pending_review_closure`

## Controlled-Autonomy Package-Scope Addendum

Record ID: `TWCORE-CONTROLLED-AUTONOMY-ALPHA-2026-05-01-001`

Evidence path: `docs/validation/traceweaver-controlled-autonomy-alpha.md`

This addendum materializes `tw-auto` as an advisory controlled-autonomy skill
after U6b Unit 2 and changes the packaged `lfg` entrypoint into a
TraceWeaver-controlled compatibility alias for `tw-auto`. It adds static package
files only:

- `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- `plugins/traceweaver-core/skills/lfg/SKILL.md`
- `plugins/traceweaver-core/skills/tw-auto/references/requirements-baseline-template.md`
- `plugins/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml`
- `plugins/traceweaver-core/skills/tw-auto/references/traceweaver-controlled-autonomy-policy.md`
- `plugins/traceweaver-core/skills/tw-auto/references/automation-loop-state-template.yml`
- `plugins/traceweaver-core/skills/tw-auto/references/traceability-matrix-bootstrap-template.md`
- `plugins/traceweaver-core/references/requirements-baseline-template.md`
- `plugins/traceweaver-core/references/intent-contract-template.yml`
- `plugins/traceweaver-core/references/traceweaver-controlled-autonomy-policy.md`
- `plugins/traceweaver-core/references/automation-loop-state-template.yml`
- `plugins/traceweaver-core/references/traceability-matrix-bootstrap-template.md`
- updated `traceweaver-runtime-policy.md`, plugin manifests, README files, and
  traceability matrix rows.

This addendum does not prove runtime invocation, runtime-equivalent CE behavior,
clean CE replacement, slash commands, enforcing behavior, or autonomous
commit/push/PR publication. U7 may not include `tw-auto` or `lfg` alias release
claims until the addendum's static checks, install smoke, code review, and
document review are recorded.

Held after Unit 2:

- dynamic no-forced discovery;
- runtime invocation transcript;
- slash-command/prompt claims;
- clean CE replacement;
- TraceWeaver-integrated CE workflow behavior;
- full Core 11 runtime suite;
- enforcing mode;
- autonomous commit, push, or PR publication;
- release-ready, package-ready, and upstream-ready claims.

## Routing and Failure Boundaries

Static routing evidence:

- `tw-requirements-review` routes to `requirements-reviewer`;
- `tw-authority-gate` routes to `requirements-reviewer` and
  `systems-engineering-traceability`;
- `tw-traceability-check` routes to `systems-engineering-traceability` and
  conditionally `requirements-reviewer`.

Failure and packaging behavior observed during install smoke:

- a placeholder `agents/README.md` was treated as a runtime agent by the
  installer and produced an unintended installed agent entry;
- the placeholder file was removed before Unit 2, so only the 49 selected CE
  source agents install as Codex agent TOML files;
- the systems traceability support references and `tw-auto` controlled-autonomy
  references were copied into skill-local `references/` directories so Codex
  converter installs do not drop selected support files that are top-level in
  the package source.

Dynamic invocation, reference-open transcript, and no-forced skill discovery
remain unproven.

## Hygiene

Public hygiene scan for the alpha plugin surface checked for private paths,
private repo names, non-public candidate locators, raw extraction paths, and
unsupported release claims. The plugin alpha keeps standards-source hygiene and
release-claim approval held for U7/U8/U9.

## U7 Handoff

U7 may begin release-claim record creation for narrow alpha install/static
materialization claims only:

```text
claim_id: TW-CLAIM-PLUGIN-ALPHA-STATIC-MATERIALIZATION
gate_state: approved
allowed_use:
  - installable alpha with selected TraceWeaver authority skills
  - selected CE-compatible workflow skills package-present and installed
  - selected CE source agents installed as Codex TOML files
  - Intent Contract, task capsule, trace record, gap, change, exception, and policy templates package-present
blocked_claims:
  - slash commands available
  - dynamic no-forced discovery proven
  - runtime-equivalent CE workflow behavior
  - clean CE replacement
  - enforcing authority gate behavior
  - full 11-skill runtime suite
  - external-standards conformance
close_condition: U6b-alpha and U6b Unit 2 evidence accepted
reopen_condition: plugin manifest, install command, selected skills, selected references, selected CE files, selected agents, templates, source pin, or package layout changes
```

Dynamic runtime discovery: `HELD_FOR_U6B_DYNAMIC_OR_U9`

Slash-command claims: `HELD`

Release runtime claims: `HELD`

## Stale Reset Rule

This U6b record resets to `held` if any selected runtime file hash changes, the
runtime authority commit changes, the CE source pin changes, the CE inventory or
selected CE file hashes drift, the plugin manifest changes, documented install
command changes, adapter routing changes, selected CE package scope changes,
Intent Contract/template files drift without updated evidence, `tw-auto`, the
`lfg` compatibility alias, or their controlled-autonomy policy/templates or
skill-local controlled-autonomy references drift without updated evidence,
installed CE agent identity differs from the selected manifest above, install
smoke cannot be reproduced, the CE
support-closure audit fails, dynamic discovery is claimed from static evidence,
non-selected Core or CE skills are added without a new scope decision, or
release/upstream/package-ready/runtime-equivalence, enforcing-mode,
slash-command, or autonomous commit/push/PR claims are made before U7/U8/U9.
