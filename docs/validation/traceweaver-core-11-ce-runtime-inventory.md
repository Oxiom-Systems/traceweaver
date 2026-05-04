# TraceWeaver Core 11 CE Runtime Inventory

Status: `SOURCE_INVENTORY_REFRESHED_FOR_U6B_REVIEW`

Date/session: 2026-05-01, upstream refresh from Compound Engineering `3.4.1` on branch
`codex/traceweaver-u6-unblock-next`

This record pins the Compound Engineering runtime surface considered for the
TraceWeaver clean-swap plan. U6b Unit 2 consumes this inventory for static
materialization evidence, but this record alone does not prove CE runtime
loading, approve a clean swap, or create U7 release claims.

## Decision Record

Record ID: `TWCORE-CE-RUNTIME-INVENTORY-2026-05-01-002`

Decision state: `source_pin_refreshed_for_u6b_unit2_static_materialization_review`

Allowed use:

- plan the TraceWeaver clean-swap runtime bundle;
- decide which CE files need license/provenance/hash records before copying;
- identify agent-backed CE claims that remain held until runtime behavior proof.

Held claims:

- TraceWeaver replaces Compound Engineering cleanly;
- CE agent-backed review/research behavior works without the CE plugin;
- TraceWeaver systems-engineering controls are integrated into CE workflows;
- U7 release-claim approval for the clean swap;
- U9 runtime behavior proof for the clean swap.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source version | `3.4.1` |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source license | MIT, from source plugin manifest |
| Source basis | Upstream tag fetched from GitHub and locally installed Compound Engineering plugin cache for version `3.4.1` |
| Upstream commit/tag | `compound-engineering-v3.4.1` / `cli-v3.4.1` at commit `d685f0794863a73ae3ca3620d2ae747510e9eaa0` |
| Full cache file count | 223 files |
| Skills file count | 166 files |
| Agent file count | 49 files |
| Full cache aggregate fingerprint | `6892159ad685e59230514f9e58fb7ffd06052d84da643c73ac95b787e3c60d23` over sorted SHA-256 output |

Manifest/support hashes:

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.codex-plugin/plugin.json` | `decc9bebc0c153c64208528b26ea3fbbc8de6307b340dd780e69cd1b1490b26a` | Source metadata only |
| `.claude-plugin/plugin.json` | `98787740dca6528dad003cf8c228a13bf217dc18f3219a4404ce77ab66136c0d` | Source metadata only |
| `.cursor-plugin/plugin.json` | `22a62558de266d1c05a7aa5abdb90c3496cb9915ded9d4ef18b12d20aad30b97` | Source metadata only |
| `README.md` | `481657cfab0328b1fc952a5f0d7a11598ade20a8710112c0d7803f0b0823a519` | Source metadata only |

## Selected CE Skill Scope

This inventory selects the CE workflow-continuity surface needed before a
TraceWeaver plugin can plausibly replace the installed CE plugin for the narrow
static/advisory alpha. Optional CE skills outside this table remain out of the
clean-swap runtime scope unless a later full-surface wrapping inventory adds
them. Upstream CE 3.4.1 has 38 skill directories; this static alpha packages 27
TraceWeaver plugin skill directories, including 18 direct CE-derived directories,
the TraceWeaver `lfg` alias, and TraceWeaver-specific skills. Missing upstream
CE skills remain held for a future plan that classifies each as wrapped,
aliased, hidden, held, or out-of-scope.

The `skills/lfg/SKILL.md` row is an approved TraceWeaver package delta over the
CE source name: it is retained for familiar entrypoint continuity, but the
packaged file must delegate to `tw-auto` rather than run raw CE autopilot.
`skills/ce-plan/SKILL.md` and `skills/ce-work/SKILL.md` are approved package
deltas that add TraceWeaver package-boundary primers. They remain
legacy/manual-continuity entrypoints until wrapper sequencing is implemented and
runtime-proven.

| Source file | SHA-256 | Class |
| --- | --- | --- |
| `skills/ce-brainstorm/SKILL.md` | `b70007d3cf7ed68e64a7f581bd644a2a3e13858c8e826273dd04084cea005aab` | selected skill file |
| `skills/ce-brainstorm/references/handoff.md` | `710d2c48567a4a57aa5e8aec6e70d3ad4089e201a95f3396bf0a16af052b8d76` | selected skill file; TraceWeaver alpha guards uninstalled `ce-proof` route and prefers TraceWeaver requirements authority before planning/work |
| `skills/ce-brainstorm/references/requirements-capture.md` | `8939c49ea0389c8f2fb9ebccc70b3cba035a6d3dc6011ae515944eec7fbf8929` | selected skill file |
| `skills/ce-brainstorm/references/synthesis-summary.md` | `fc7cf43a16faa05c5f95838d8afe8ca863333d0c1dbc6e4fed106765050acf40` | selected skill file |
| `skills/ce-brainstorm/references/universal-brainstorming.md` | `fba728432bbbf61a2c607686f79e44fd4db7ca6a15677ec115b922eacdeb2885` | selected skill file; TraceWeaver alpha removes uninstalled `ce-proof` route |
| `skills/ce-brainstorm/references/visual-communication.md` | `ceaeb6715ed1b263047f909458e799147b863ac143559ff995092b62adb022c6` | selected skill file |
| `skills/ce-code-review/SKILL.md` | `66a1da73677a5fe2e5d3e6292872a2375c697704353799adf0eaa7b3a9f947f9` | selected skill file; TraceWeaver package-boundary delta; publication held |
| `skills/ce-code-review/references/bulk-preview.md` | `5b9c86e9c25dddd73b99eb801d4449371256ca3d92dabbc2184cea587494e489` | selected skill file |
| `skills/ce-code-review/references/diff-scope.md` | `b11a3cbee8372bc4162a2e00898e82317b37c5f56cbf456fe81c3e5fef1ff989` | selected skill file |
| `skills/ce-code-review/references/findings-schema.json` | `428386c19b1159cc69817fca9a2ee7ae3901a7cb631c19f934b2e8a74cfd724e` | selected skill file |
| `skills/ce-code-review/references/persona-catalog.md` | `e6d2582d116235a2c804b254ca9cfcd9e771be8f0ef76269e1f234001592dbdc` | selected skill file |
| `skills/ce-code-review/references/resolve-base.sh` | `eb9b437377d151f574ba272dbb7431581c1528bacf7b1b3df8d9a86f60c22821` | selected skill file |
| `skills/ce-code-review/references/review-output-template.md` | `6f955c760d6a2616f427158984243dc27da6ed6f37bcafc5ffc3627815e108af` | selected skill file |
| `skills/ce-code-review/references/subagent-template.md` | `dd5dfebda3e3ab5cc122d1f1ca29ca0838575803378fa38d31d8413f13d94f62` | selected skill file |
| `skills/ce-code-review/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file |
| `skills/ce-code-review/references/validator-template.md` | `2409a03bfca9016784e327d2c9b125d8a66613bdfe49b96bf52746f09a4d7f73` | selected skill file |
| `skills/ce-code-review/references/walkthrough.md` | `939b7a00a7fdd1df332429a1718a221d176fc03757f3daac79c0aba80025766f` | selected skill file |
| `skills/ce-commit-push-pr/SKILL.md` | `21385f78158777fd726a3763e56f1b9a3183c4eb24bc3a374355820286fa996c` | selected skill file; TraceWeaver alpha publication guard |
| `skills/ce-commit-push-pr/references/branch-creation.md` | `5e5d85ab28f85c2619b66db8dbfdb3a4b5f25baa3d358db13a6ebee378a033c2` | selected skill file |
| `skills/ce-commit-push-pr/references/pr-description-writing.md` | `0acab6f2e3a1b845167b222d33d16bfca86bd5696fde01b3e5708406d63b9a0f` | selected skill file |
| `skills/ce-commit/SKILL.md` | `1ba086277e311a5f2630d2f6fc8c0bd0713b07a4a3f273949e22ea6ae893cdb2` | selected skill file; TraceWeaver alpha publication guard |
| `skills/ce-compound-refresh/SKILL.md` | `8f1518e73314feed67847da627879bde918c95b0bfb1d800f2b0ad3b22e3395a` | selected skill file; TraceWeaver alpha publication guard |
| `skills/ce-compound-refresh/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file |
| `skills/ce-compound-refresh/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file |
| `skills/ce-compound-refresh/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file |
| `skills/ce-compound-refresh/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file |
| `skills/ce-compound/SKILL.md` | `0c07a5487a5d4f63b5552d065d7e12d67545eb846dda923b994de9c8de1d3ec3` | selected skill file |
| `skills/ce-compound/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file |
| `skills/ce-compound/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file |
| `skills/ce-compound/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file |
| `skills/ce-compound/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file |
| `skills/ce-debug/SKILL.md` | `6785594317d403e2aac454d07eb1545d9e1f772c1f62606b0193728e1453864e` | selected skill file; TraceWeaver alpha publication guard |
| `skills/ce-debug/references/anti-patterns.md` | `9597012ed66df7e52caa38bfaaaab886e2e48b3807f1aa89640139b907976e6b` | selected skill file |
| `skills/ce-debug/references/defense-in-depth.md` | `56211e8ff51d10df8b46b58d04420ab65f1fd02ec4e4588be4b5af246cc7e046` | selected skill file |
| `skills/ce-debug/references/investigation-techniques.md` | `4a3f9b18622d4724ac6f259dccffbc416799e572e7b1e6e7091c0b9bd11298af` | selected skill file |
| `skills/ce-doc-review/SKILL.md` | `9b197bee814542328be6153afa5cf560f638eb3fe3ea94ba62c5b66129bdc246` | selected skill file |
| `skills/ce-doc-review/references/bulk-preview.md` | `f7fccd3015c8844b3c30bdab7618d6e888e18fcd167f08e728460964e7b56f53` | selected skill file |
| `skills/ce-doc-review/references/findings-schema.json` | `d20a74985ed53841a717472783f44ded059aac0f4ceb78cedcf53437ed2fbfb7` | selected skill file |
| `skills/ce-doc-review/references/open-questions-defer.md` | `4a3bb7fc26637d9e14c74a302d3c938e8faac6d18a0e565679b1bfe90b2716bb` | selected skill file |
| `skills/ce-doc-review/references/review-output-template.md` | `1ad3c421085b05d4018a9da8b132d6c4f0fed19ddc5f5d051d8b64c158d268f7` | selected skill file |
| `skills/ce-doc-review/references/subagent-template.md` | `17290f79ede6d7e7d62bc9a62e4e4761d3181d376e6e5ef0b25572180ef4f4ea` | selected skill file |
| `skills/ce-doc-review/references/synthesis-and-presentation.md` | `5cd840b26583baf1a28358cb49348a947314b0ddbfac39866d2bbc674364f716` | selected skill file |
| `skills/ce-doc-review/references/walkthrough.md` | `be7e44a956432e9033df3ed0522fbb861d5dd48051806d67de491b3ce9cb7af0` | selected skill file |
| `skills/ce-plan/SKILL.md` | `51e97828c6c188850c74d9cbe8b1e7f4db6b5f88f6f9ecdafeaffdef1e2aaf11` | selected skill file; TraceWeaver package-boundary delta; uninstalled `ce-proof` route removed; issue publication held as draft-only |
| `skills/ce-plan/references/deepening-workflow.md` | `bcb2482d4a0d4b202423ec30fc58ca4941e6fbf2942ded7492e156e896e1098a` | selected skill file |
| `skills/ce-plan/references/plan-handoff.md` | `62bd4b10e429ae6081b212fe78c90cfaf60fdee4724e0e15b7650241c24ff98b` | selected skill file; uninstalled `ce-proof` route removed; TraceWeaver authority gate handoff |
| `skills/ce-plan/references/synthesis-summary.md` | `f45b93824b5cd6c1a6f5ecd5e7f8837efa497c5e5f3ed02a9238e1ae44843f1f` | selected skill file |
| `skills/ce-plan/references/universal-planning.md` | `ef5b19c0dbefcfbdd8779ddfc5ff98e0599072f7a0fc723c6e176e1fa36303eb` | selected skill file; TraceWeaver alpha guards uninstalled `ce-proof` route |
| `skills/ce-plan/references/visual-communication.md` | `8be4218e902928df8a6aa2170de6ce0e307171064559a27e94c93cc3f69220c2` | selected skill file |
| `skills/ce-resolve-pr-feedback/SKILL.md` | `313229520b5bc240e7ae5ca644205b2b87d2f34c15d5838677133a3666539b10` | selected skill file; TraceWeaver alpha publication guard |
| `skills/ce-resolve-pr-feedback/scripts/get-pr-comments` | `0a05dd3a2eac732b1188ea2711f424f9d5cfff6abb3e4730afabdddc124dbe1a` | selected skill file |
| `skills/ce-resolve-pr-feedback/scripts/get-thread-for-comment` | `789fd1e31925894ce3ec86b0a4cfbfb3936503ecf446590d9e6236ff241b1a83` | selected skill file |
| `skills/ce-resolve-pr-feedback/scripts/reply-to-pr-thread` | `b11cbb9c1cf2b5c351986ea818d123e78709e46d95782a9ca093e1c12d3ecb3e` | selected skill file; TraceWeaver alpha publication guard; draft-only until a real publication gate exists |
| `skills/ce-resolve-pr-feedback/scripts/resolve-pr-thread` | `6a52e8f51e8a24dade140582216bd1e8119e12da081c54222d6624b532c7f6d6` | selected skill file; TraceWeaver alpha publication guard; draft-only until a real publication gate exists |
| `skills/ce-session-extract/SKILL.md` | `05c6a86282fd8a49ffb715e2e80b81ecd80aa88c84e6528fcfb92443049c1cd5` | selected skill file |
| `skills/ce-session-extract/scripts/extract-errors.py` | `7c001e879a9872506c3d275b25a90a1e546ef0b7f46d759a359fd02eeae66cef` | selected skill file; redacts command/error output |
| `skills/ce-session-extract/scripts/extract-skeleton.py` | `693f305778b4cdd33a870ee09c4e65fc0aa78401469f056b89bd472eddc06a72` | selected skill file; redacts transcript skeleton text |
| `skills/ce-session-inventory/SKILL.md` | `de08c87a9e0c500e87311734f2b22e6cb7245b935cfdbdef5cbbc7125825c08b` | selected skill file |
| `skills/ce-session-inventory/scripts/discover-sessions.sh` | `34d3e132073bc438db8fc1eb63f5d343f3da5afb3099b1bc4182adedd897b08a` | selected skill file |
| `skills/ce-session-inventory/scripts/extract-metadata.py` | `f3d0931cb37c65ce84d43eb4764d8d533fbaf4dc342a5ae38a6d8fcfd96fd0a0` | selected skill file |
| `skills/ce-sessions/SKILL.md` | `f13c6b143097e13705d521cee152672f0b599057b2c0e4fc87b7af61c61f9553` | selected skill file |
| `skills/ce-setup/SKILL.md` | `626696dc061455a1320559b48ef8bced72fe8b87403d3d4d55592627c99ea6ec` | selected skill file |
| `skills/ce-setup/references/config-template.yaml` | `beb8f47c2be8866a58c64676693ffc5be2803a7c0a373eaffedbba94fd4dd15f` | selected skill file |
| `skills/ce-setup/scripts/check-health` | `956f34aab13552c7ecb37300368c984973d97bb368755c4dd1d62ec42389ce09` | selected skill file |
| `skills/ce-test-browser/SKILL.md` | `a7240cf469d410b2ee46fbf24ef19cf70becaefa55549b13a0d4eaa63166a71f` | selected skill file |
| `skills/ce-test-xcode/SKILL.md` | `27945c9e4a4c72543988698699f5d08d3a7a04d94d1ca7d49b425b9cb169a544` | selected skill file |
| `skills/ce-work/SKILL.md` | `4d3a91e7025f5fdedf2e454e56ab79e2d8588680a35f7d4d4a35aee933d49b36` | selected skill file; TraceWeaver package-boundary delta; no-publication mode including direct and parallel-flow publication stops |
| `skills/ce-work/references/shipping-workflow.md` | `01e809cb737d8bf6e4e54a81f8dec4f0dfef42eb1866e956a6ab0ab410420264` | selected skill file |
| `skills/ce-work/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file |
| `skills/ce-worktree/SKILL.md` | `5a1d6d9babb6e24da1af1bbe630c73306adfec8a75faa1442f611cebc804edc3` | selected skill file; `.env*` copy requires explicit opt-in |
| `skills/ce-worktree/scripts/worktree-manager.sh` | `8eddded7bc3d6865bce1fc050725760af7be8163a4431df87559f1e9f24614bf` | selected skill file; `.env*` copy requires explicit opt-in and rejects destination symlinks |
| `skills/lfg/SKILL.md` | `ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083` | selected skill file; TraceWeaver alias delta |
| `skills/lfg/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file |

## CE Agent Continuity Inventory

All source-present CE agent files are selected for continuity analysis because
CE review, document-review, research, and compound workflows can route through
conditional agent personas. U6b Unit 2 records Codex install materialization;
agent-backed workflow behavior remains held until runtime transcript proof.

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `agents/ce-adversarial-document-reviewer.agent.md` | `64f53b939d70fef8b98081e0e716ac57245a4223f4693b50b68a341d6735d400` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-adversarial-reviewer.agent.md` | `ad6661421f47a93d43670c42617cc4a83ea6ac5578824deeca8ffa463166da43` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-agent-native-reviewer.agent.md` | `51e1529ae2900178b255595e20335fbb8a8bf27c7005b41a681944c5f13b998a` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-ankane-readme-writer.agent.md` | `a0ed6f5bc201c53d616cc6eb6e214ab6d3a7927d255b8f447cee07d254d5b8a6` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-api-contract-reviewer.agent.md` | `534b07d70677f8c71f6bbe9aecc12c78367087be60308cb937d7e1c9824c377c` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-architecture-strategist.agent.md` | `fc4b7f1509c18abc21733a41214a7e946780de8900c53cf04de2186685550215` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-best-practices-researcher.agent.md` | `14896ea6d69adae21df8d038f38887c2b12aa415a094e4f891ef24d28fd5ac93` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-code-simplicity-reviewer.agent.md` | `46d0c51deba4d370ca729ad0138c535395d170c0547070c4b1d9dd8d5ee30f64` | selected agent file; U6b Unit 2 install observed as Codex agent TOML; whitespace hygiene delta |
| `agents/ce-coherence-reviewer.agent.md` | `f37c49be80d20673f189f08184000dfe4d842c384436bd9141ae0ef9cacad354` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-correctness-reviewer.agent.md` | `caefb6555ebac3f2d4987cd9393e72b038e503fc5d0e2bc9a6f2cbf04f8e805f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-data-integrity-guardian.agent.md` | `347d596bf1e88296bd0caddb7de32a9b9ea2ac8f849d09aa3323d346310a2a86` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-data-migration-expert.agent.md` | `9cf8dcb6441db0aa1e934ce15e4ae207b12ee35634317d78e61e1615d6bfa05e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-data-migrations-reviewer.agent.md` | `30fc7f9defa3ef3946bce46a6179bd3b2fb3a77db1413d54b3f4645577c32be0` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-deployment-verification-agent.agent.md` | `0706a19e1d01db7654dafe01a1239d6e03703323686b481e0a10fc06b1442633` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-design-implementation-reviewer.agent.md` | `f311855c5d11654a727f145c371b22f38469e6356448580ed1e2cfaae087ed92` | selected agent file; U6b Unit 2 install observed as Codex agent TOML; whitespace hygiene delta |
| `agents/ce-design-iterator.agent.md` | `f64f4cff3108dcf701f94995ec6626f9fd7422b733426fce8a0c105bc4a72bd5` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-design-lens-reviewer.agent.md` | `c8715d27a842e54d005a5e034a04880f95a84b9430a061162975b585c544de28` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-dhh-rails-reviewer.agent.md` | `94e579ec789c25fe76d44abe8dc1801093e653fc999c2ea6f6bd6ce70fb10cd1` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-feasibility-reviewer.agent.md` | `3473e9b00cbaa0ffa11f85548cabc27ffd1d0db17d2fc27e66b556a42ab36b01` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-figma-design-sync.agent.md` | `652a4c95ce6339bd718b95bbb22a4bc00e837d553653b283e7369cc0d4a198a7` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-framework-docs-researcher.agent.md` | `67aef22bd96b2c5d3390fc7d1d5d7a9208619bc0b116c447f42cf3c36e8bc244` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-git-history-analyzer.agent.md` | `d51fdbc3042e02fe5dbc048009e18696780c6d10e2e00c58f3d7e6a49f49974b` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-issue-intelligence-analyst.agent.md` | `fa3cbc5a329937777eef03c4825e4b02a4f00ca6e5b9e01637a72ce89e8cb17f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-julik-frontend-races-reviewer.agent.md` | `8d1668c7d2fd0dba34ba8fff5e94c057859567eaf59b0e63c77443120486f3ae` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-kieran-python-reviewer.agent.md` | `38140007e1a3748163bb6fe9ef42badb6f71119ac2ab3d5b93f7f8b7b4c6470a` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-kieran-rails-reviewer.agent.md` | `dec3e0981e18beb9beed0c09c86e46e34db5e3096cfb630bc525082e191132d7` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-kieran-typescript-reviewer.agent.md` | `8fa842d6bb6fe3fc535b38d51de590acdc1f2289eba88c330a5d94e9e8d738da` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-learnings-researcher.agent.md` | `6daea986282d0206e93242a30c2359a096228c14a221f0672a181f351188bfbd` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-maintainability-reviewer.agent.md` | `569f9876055aec23d9e1273bb10e484ec52dc3fec2a2e99c96275e98479da2e1` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-pattern-recognition-specialist.agent.md` | `1b956a44a75bcc6ec2a0e2d848d77b5b95290eaffe4bc291b2fbfa9e98800fc9` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-performance-oracle.agent.md` | `e293484072ffc06cf72a2e78e8c8934a966e91b98fe2029d58142941b7b14e18` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-performance-reviewer.agent.md` | `3f0c6b2bb575cea20aa63ae4d19da3c6e446b332f40294acb70783e63257c889` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-pr-comment-resolver.agent.md` | `c3364f9dccd9cecb75504b759baf74c246b7df24740e8aa0a171fe604099d9df` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-previous-comments-reviewer.agent.md` | `12f2892a6c3dc692bdf24983ab9e9b4dbb6ec790cb29f629ca197a178712818e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-product-lens-reviewer.agent.md` | `3640eb11e238ffad994e0c182723b27550dadbdf262972af62c3f8da567b8d4e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-project-standards-reviewer.agent.md` | `9cb91e597ba872ebf495d05760d48cd59e3cf89e23010fd06e465c04b51f89d0` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-reliability-reviewer.agent.md` | `089af007af6a7eae91d08dba5b5b169209c700ace7ea5a6715b05d54b870a462` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-repo-research-analyst.agent.md` | `f2ee62dd210e8d429a88bb531fa0939925288191dd7ac5678e6d74b2142f8135` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-schema-drift-detector.agent.md` | `bc82f0d9f07ed6fec40b88465f882e51a472c4dcb3992bd85a68db2fc215112f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-scope-guardian-reviewer.agent.md` | `a1f85b17849c59b156f15380f2e47f6c84ac44830796a86e11fb93be8f317280` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-security-lens-reviewer.agent.md` | `d8bba13fda6e05b8e68ec874235563bd8d2af5d1ec1c80635b07c73250de1eef` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-security-reviewer.agent.md` | `2ba75e811070a721c3d2d74b282658a083dbd0c6c69ce36d1d8513a22260068c` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-security-sentinel.agent.md` | `0c7abeb915f31cc28190e8a21f15a3582985bb2951b32ac5253627c845a05240` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-session-historian.agent.md` | `2234452d517bc868c495cc1bbd8218e2384017124e49bc7c89b3b0a5e0e6bf5e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-slack-researcher.agent.md` | `d84530b1acad8195be22c40c91b18f88d51b06884eb4c49ae220dd25573c12bd` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-spec-flow-analyzer.agent.md` | `b135a42e802bd85e5f0db2556c1bbaf72ed61f9510a996e1e4bcdfa2d4ab1a3d` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-swift-ios-reviewer.agent.md` | `13ce43d7bb5e659631f960bb52a23e2ab2e0b714e6a902a7f4cbd25e1e9e2633` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-testing-reviewer.agent.md` | `049cb1e6b47bd88c820a707655f50ad613b5811c1f4245cd9252d65a2a171f31` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-web-researcher.agent.md` | `f1152ea936092884fed55ff541c5b5dc53fbe1b185eae4d4c421a1676d27697e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |

## Agent-Dependent Workflow Map

| CE workflow | Agent dependency | Current decision |
| --- | --- | --- |
| `ce-code-review` | Always-on and conditional code-review agents; schema/dedup pipeline depends on agent outputs. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-doc-review` | Coherence/feasibility plus conditional document-review agents. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-compound` | Context analyzer, solution extractor, related-docs finder, optional session historian, and optional specialist reviewers. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-resolve-pr-feedback` | Feedback-resolution subagents for review-thread triage. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-plan` and `ce-work` | May run inline, serial, or parallel subagents depending on scope. | Base skill availability can be installed first; agent-backed behavior remains held until runtime proof. |

## Stale Reset Rule

This record resets to `held` if the CE source version changes, any selected file
hash changes, upstream license/provenance changes, TraceWeaver copies any CE file
not listed here, CE agent files are omitted while claiming clean-swap continuity,
or this static inventory is used as install/runtime proof.

Next recommended step: run `/ce-doc-review` against this refreshed U6b Unit 2
evidence before moving to U7 claims.
