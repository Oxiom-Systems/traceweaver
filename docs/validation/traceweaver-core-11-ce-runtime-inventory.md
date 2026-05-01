# TraceWeaver Core 11 CE Runtime Inventory

Status: `SOURCE_INVENTORY_RECORDED_ONLY`

Date/session: 2026-04-30, `ce:work`, branch
`codex/traceweaver-u6-unblock-next`

This record pins the Compound Engineering runtime surface considered for the
TraceWeaver clean-swap plan. U6b Unit 2 consumes this inventory for static
materialization evidence, but this record alone does not prove CE runtime
loading, approve a clean swap, or create U7 release claims.

## Decision Record

Record ID: `TWCORE-CE-RUNTIME-INVENTORY-2026-04-30-001`

Decision state: `source_pin_recorded_for_u6b_unit2_static_materialization`

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
| Source version | `3.3.2` |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source license | MIT, from source plugin manifest |
| Source basis | Locally installed Compound Engineering plugin cache for version `3.3.2` |
| Upstream commit/tag | `compound-engineering-v3.3.2` / `cli-v3.3.2` at commit `e5b397c9d1883354f03e338dd00f98be3da39f9f` |
| Full cache file count | 223 files |
| Skills file count | 166 files |
| Agent file count | 49 files |
| Full cache aggregate fingerprint | `53e5dfdb773f9120b7854a12b0d666666220a26fb2cde66fa0b87b8fdfa764f4` over sorted SHA-256 output |

Manifest/support hashes:

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.codex-plugin/plugin.json` | `8e205d84f2b91a1e8776d885be3c5d6c596139b3211ae4f289365f3e2e6ff47b` | Source metadata only |
| `.claude-plugin/plugin.json` | `a79fcea68dc3fd985442008f1fb39bdfff676705062b23be9f35a7ca1000cb56` | Source metadata only |
| `.cursor-plugin/plugin.json` | `f903964f335d42168c9f6af8f1835f73dc28f3043a67ebbc33d50b2bdc3e3c93` | Source metadata only |
| `README.md` | `1e7499a0d7521657ea070ae0735be251b27d2d8476276a923697720391b2b68e` | Source documentation only |

## Selected CE Skill Scope

This first inventory selects the CE workflow-continuity surface needed before a
TraceWeaver plugin can plausibly replace the installed CE plugin. Optional CE
skills outside this table remain out of the clean-swap runtime scope unless a
later inventory adds them.

| Source file | SHA-256 | Class |
| --- | --- | --- |
| `skills/ce-brainstorm/SKILL.md` | `b70007d3cf7ed68e64a7f581bd644a2a3e13858c8e826273dd04084cea005aab` | selected skill file |
| `skills/ce-brainstorm/references/handoff.md` | `f0de3b8b0ff904ee298bb26b997a220990328c1324728ff6d1aeddd6ff8ebf79` | selected skill file |
| `skills/ce-brainstorm/references/requirements-capture.md` | `8939c49ea0389c8f2fb9ebccc70b3cba035a6d3dc6011ae515944eec7fbf8929` | selected skill file |
| `skills/ce-brainstorm/references/synthesis-summary.md` | `fc7cf43a16faa05c5f95838d8afe8ca863333d0c1dbc6e4fed106765050acf40` | selected skill file |
| `skills/ce-brainstorm/references/universal-brainstorming.md` | `29237d360655574d6cb52e5c33ae5c8f1932130c179a5fdcf304cf6bf631a20a` | selected skill file |
| `skills/ce-brainstorm/references/visual-communication.md` | `ceaeb6715ed1b263047f909458e799147b863ac143559ff995092b62adb022c6` | selected skill file |
| `skills/ce-code-review/SKILL.md` | `ac9876047f5264aa818335c24f0a7e800eec1f4e62c995cd26a0fc3579881af4` | selected skill file |
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
| `skills/ce-commit-push-pr/SKILL.md` | `adb23b4d7d49e426dd2dbccf5979bb3249c3faf413e6dbf3a9441ccd3e8d6d3d` | selected skill file |
| `skills/ce-commit-push-pr/references/branch-creation.md` | `5e5d85ab28f85c2619b66db8dbfdb3a4b5f25baa3d358db13a6ebee378a033c2` | selected skill file |
| `skills/ce-commit-push-pr/references/pr-description-writing.md` | `0acab6f2e3a1b845167b222d33d16bfca86bd5696fde01b3e5708406d63b9a0f` | selected skill file |
| `skills/ce-commit/SKILL.md` | `eec541dafdcc2aaa60de8eabcf3908df784ec4cf271e4303f89a7212c999c4af` | selected skill file |
| `skills/ce-compound-refresh/SKILL.md` | `9f27a479d1f95f5233fa4d998d74b1ddd9da6499150bedb54a4f1d9ef58ca8fd` | selected skill file |
| `skills/ce-compound-refresh/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file |
| `skills/ce-compound-refresh/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file |
| `skills/ce-compound-refresh/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file |
| `skills/ce-compound-refresh/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file |
| `skills/ce-compound/SKILL.md` | `0c07a5487a5d4f63b5552d065d7e12d67545eb846dda923b994de9c8de1d3ec3` | selected skill file |
| `skills/ce-compound/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file |
| `skills/ce-compound/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file |
| `skills/ce-compound/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file |
| `skills/ce-compound/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file |
| `skills/ce-debug/SKILL.md` | `6bc5dd51457bb4a640f15b12609912b53bda193699def51e3bfce5966dabd11a` | selected skill file |
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
| `skills/ce-plan/SKILL.md` | `e8e3fc6c0a79a978f2c200c5fc5ee50d954ac25bdf309fdb5832f8bdaaf88b78` | selected skill file |
| `skills/ce-plan/references/deepening-workflow.md` | `bcb2482d4a0d4b202423ec30fc58ca4941e6fbf2942ded7492e156e896e1098a` | selected skill file |
| `skills/ce-plan/references/plan-handoff.md` | `0e5f5da875b2b964153edd78384d8c3ebbd8c17c4ec23ee69f76ef7ca36e89c1` | selected skill file |
| `skills/ce-plan/references/synthesis-summary.md` | `f45b93824b5cd6c1a6f5ecd5e7f8837efa497c5e5f3ed02a9238e1ae44843f1f` | selected skill file |
| `skills/ce-plan/references/universal-planning.md` | `f695ade35efa94a5a78dbf0fe804d13e1ddc4962ed094d4f589778fe63c14473` | selected skill file |
| `skills/ce-plan/references/visual-communication.md` | `8be4218e902928df8a6aa2170de6ce0e307171064559a27e94c93cc3f69220c2` | selected skill file |
| `skills/ce-resolve-pr-feedback/SKILL.md` | `fdd38807756625b347c1b3ac8f06fac3b52d00e9fd967d46d899bc4a92a1e603` | selected skill file |
| `skills/ce-resolve-pr-feedback/scripts/get-pr-comments` | `bb1781bf137aeb2589c15d73d3960188107ba32a25ff7a9cfd61007268774a66` | selected skill file |
| `skills/ce-resolve-pr-feedback/scripts/get-thread-for-comment` | `789fd1e31925894ce3ec86b0a4cfbfb3936503ecf446590d9e6236ff241b1a83` | selected skill file |
| `skills/ce-resolve-pr-feedback/scripts/reply-to-pr-thread` | `cbe0f6ff8331857ec8a27e2765d9abda08e166e63e32d1378787e6654b5ed1d3` | selected skill file |
| `skills/ce-resolve-pr-feedback/scripts/resolve-pr-thread` | `a2582a71110c49ad66e66c4954d0647d0ab0597838409e1f4896ac8f6b90d83f` | selected skill file |
| `skills/ce-session-extract/SKILL.md` | `05c6a86282fd8a49ffb715e2e80b81ecd80aa88c84e6528fcfb92443049c1cd5` | selected skill file |
| `skills/ce-session-extract/scripts/extract-errors.py` | `e0624f1d168023e0866f4b764be7c88f88d815fff6102606f6b7e871e11bd3a5` | selected skill file |
| `skills/ce-session-extract/scripts/extract-skeleton.py` | `190e87b38be2385108a429f5aa502663240fdabfb9c8670939fe40be9e7b06df` | selected skill file |
| `skills/ce-session-inventory/SKILL.md` | `de08c87a9e0c500e87311734f2b22e6cb7245b935cfdbdef5cbbc7125825c08b` | selected skill file |
| `skills/ce-session-inventory/scripts/discover-sessions.sh` | `34d3e132073bc438db8fc1eb63f5d343f3da5afb3099b1bc4182adedd897b08a` | selected skill file |
| `skills/ce-session-inventory/scripts/extract-metadata.py` | `f3d0931cb37c65ce84d43eb4764d8d533fbaf4dc342a5ae38a6d8fcfd96fd0a0` | selected skill file |
| `skills/ce-sessions/SKILL.md` | `f13c6b143097e13705d521cee152672f0b599057b2c0e4fc87b7af61c61f9553` | selected skill file |
| `skills/ce-setup/SKILL.md` | `328f97634a1e1196d7ea0b5101547d1a28a7cb8dacd7509df631104e35864c05` | selected skill file |
| `skills/ce-setup/references/config-template.yaml` | `beb8f47c2be8866a58c64676693ffc5be2803a7c0a373eaffedbba94fd4dd15f` | selected skill file |
| `skills/ce-setup/scripts/check-health` | `631a56e3977ce45cfd9b997cc7d1a93b74468ed21e8bbde940f681eb822f4515` | selected skill file |
| `skills/ce-test-browser/SKILL.md` | `a7240cf469d410b2ee46fbf24ef19cf70becaefa55549b13a0d4eaa63166a71f` | selected skill file |
| `skills/ce-test-xcode/SKILL.md` | `27945c9e4a4c72543988698699f5d08d3a7a04d94d1ca7d49b425b9cb169a544` | selected skill file |
| `skills/ce-work/SKILL.md` | `0e8be1234cc8ba7516f756b85d1b80e14b8d15e3e59b137045f9fe100e5bfa8e` | selected skill file |
| `skills/ce-work/references/shipping-workflow.md` | `01e809cb737d8bf6e4e54a81f8dec4f0dfef42eb1866e956a6ab0ab410420264` | selected skill file |
| `skills/ce-work/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file |
| `skills/ce-worktree/SKILL.md` | `9ae6645f6790713a7e01cf2de11791a870c7567b294140cab62b537ac13b8615` | selected skill file |
| `skills/ce-worktree/scripts/worktree-manager.sh` | `ab6940c3f2ad78e6f24f09a9c5edc9eb26c0c873fd36a6e03e64bb44d0a3f826` | selected skill file |
| `skills/lfg/SKILL.md` | `861c12ca9db6d7b108dde41ac41d0e6cc9e8b2449cbf08b03fa6702db12fcf40` | selected skill file |
| `skills/lfg/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file |

## CE Agent Continuity Inventory

All source-present CE agent files are selected for continuity analysis because
CE review, document-review, research, and compound workflows can route through
conditional agent personas. U6b Unit 2 records Codex install materialization;
agent-backed workflow behavior remains held until runtime transcript proof.

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `agents/ce-adversarial-document-reviewer.agent.md` | `64f53b939d70fef8b98081e0e716ac57245a4223f4693b50b68a341d6735d400` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-adversarial-reviewer.agent.md` | `10c048173c86e8cdbf295fb6e7f04595902466dad201bf56d29e23fcc317a8bc` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-agent-native-reviewer.agent.md` | `51e1529ae2900178b255595e20335fbb8a8bf27c7005b41a681944c5f13b998a` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-ankane-readme-writer.agent.md` | `a0ed6f5bc201c53d616cc6eb6e214ab6d3a7927d255b8f447cee07d254d5b8a6` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-api-contract-reviewer.agent.md` | `a72c578e0ef9ec36b5e8038b4e21685df73e99d4bc16227f717d104bfdbfeb0a` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-architecture-strategist.agent.md` | `fc4b7f1509c18abc21733a41214a7e946780de8900c53cf04de2186685550215` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-best-practices-researcher.agent.md` | `14896ea6d69adae21df8d038f38887c2b12aa415a094e4f891ef24d28fd5ac93` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-cli-agent-readiness-reviewer.agent.md` | `c99138467f488e9f7af9937216e2f0ef672dc72bfe50d655eeb11ec85a456fb5` | source-absent agent file; excluded from Unit 2 materialization and clean-swap claims |
| `agents/ce-cli-readiness-reviewer.agent.md` | `f73483e93ea2b74fd60222a51bd7192b6bd8a2f9f4f186ddfd6b57215e999c3c` | source-absent agent file; excluded from Unit 2 materialization and clean-swap claims |
| `agents/ce-code-simplicity-reviewer.agent.md` | `63cb66c233586601d9d34b1d2cb1fed19bb5c23b5c44b96233f7cad0301df1ce` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-coherence-reviewer.agent.md` | `f37c49be80d20673f189f08184000dfe4d842c384436bd9141ae0ef9cacad354` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-correctness-reviewer.agent.md` | `ad9109c34c38e6992f5b1a48090d97b8a66b5f943a9d0525ad290325a3aa3254` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-data-integrity-guardian.agent.md` | `347d596bf1e88296bd0caddb7de32a9b9ea2ac8f849d09aa3323d346310a2a86` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-data-migration-expert.agent.md` | `9cf8dcb6441db0aa1e934ce15e4ae207b12ee35634317d78e61e1615d6bfa05e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-data-migrations-reviewer.agent.md` | `36ac2a80f35717cb67cc5a0b0e70715333ecf79cc377a95b2094b5c67069b09e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-deployment-verification-agent.agent.md` | `0706a19e1d01db7654dafe01a1239d6e03703323686b481e0a10fc06b1442633` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-design-implementation-reviewer.agent.md` | `3d9a37f8989cb06e9fa9716376ff746c3d5d3405ecaca3b282b09bad08e398da` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-design-iterator.agent.md` | `f64f4cff3108dcf701f94995ec6626f9fd7422b733426fce8a0c105bc4a72bd5` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-design-lens-reviewer.agent.md` | `c8715d27a842e54d005a5e034a04880f95a84b9430a061162975b585c544de28` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-dhh-rails-reviewer.agent.md` | `4a47d70cf5c6a1ccb00a3db9f9979a45e8e422bbd4844a178ce708df349044ac` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-feasibility-reviewer.agent.md` | `3473e9b00cbaa0ffa11f85548cabc27ffd1d0db17d2fc27e66b556a42ab36b01` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-figma-design-sync.agent.md` | `652a4c95ce6339bd718b95bbb22a4bc00e837d553653b283e7369cc0d4a198a7` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-framework-docs-researcher.agent.md` | `67aef22bd96b2c5d3390fc7d1d5d7a9208619bc0b116c447f42cf3c36e8bc244` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-git-history-analyzer.agent.md` | `d51fdbc3042e02fe5dbc048009e18696780c6d10e2e00c58f3d7e6a49f49974b` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-issue-intelligence-analyst.agent.md` | `fa3cbc5a329937777eef03c4825e4b02a4f00ca6e5b9e01637a72ce89e8cb17f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-julik-frontend-races-reviewer.agent.md` | `0268819b5b703e06cd5ec5b9bf1c0dfe82a681053bab4c6d353dafa96079df6f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-kieran-python-reviewer.agent.md` | `0342cac76d65e1b08846511702dee22c7a0dcee86cc419103281e0729c916fa4` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-kieran-rails-reviewer.agent.md` | `211521d4917516e599ec3ba36e6e1a77851f51c3987bc8bd35b427373444b41f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-kieran-typescript-reviewer.agent.md` | `dbc1408f8fe363b54faa189258b2d36069b138ff234916ef8fecfa83a6c9dcb9` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-learnings-researcher.agent.md` | `6daea986282d0206e93242a30c2359a096228c14a221f0672a181f351188bfbd` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-maintainability-reviewer.agent.md` | `961aa326d70c5aacffd0da239373b369030661a7c85c41556c4187b81b850cde` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-pattern-recognition-specialist.agent.md` | `1b956a44a75bcc6ec2a0e2d848d77b5b95290eaffe4bc291b2fbfa9e98800fc9` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-performance-oracle.agent.md` | `e293484072ffc06cf72a2e78e8c8934a966e91b98fe2029d58142941b7b14e18` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-performance-reviewer.agent.md` | `efbc47187e7c1db5d6a866af85cbd17793b050c9eb17562a1fb640af653e74a6` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-pr-comment-resolver.agent.md` | `c3364f9dccd9cecb75504b759baf74c246b7df24740e8aa0a171fe604099d9df` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-previous-comments-reviewer.agent.md` | `c098443eb8049f1bfcc41906daf9635408eb2f16cd7449eac2d110b975d62a25` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-product-lens-reviewer.agent.md` | `3640eb11e238ffad994e0c182723b27550dadbdf262972af62c3f8da567b8d4e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-project-standards-reviewer.agent.md` | `912946be877ee20974fbb32f312a1811af945bb0668fc786ff99fba8167d473e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-reliability-reviewer.agent.md` | `fc932495cc074f830c61324ea66066927756d7fba995b2d13023aa3a5b732354` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-repo-research-analyst.agent.md` | `f2ee62dd210e8d429a88bb531fa0939925288191dd7ac5678e6d74b2142f8135` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-schema-drift-detector.agent.md` | `bc82f0d9f07ed6fec40b88465f882e51a472c4dcb3992bd85a68db2fc215112f` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-scope-guardian-reviewer.agent.md` | `a1f85b17849c59b156f15380f2e47f6c84ac44830796a86e11fb93be8f317280` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-security-lens-reviewer.agent.md` | `d8bba13fda6e05b8e68ec874235563bd8d2af5d1ec1c80635b07c73250de1eef` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-security-reviewer.agent.md` | `b44acfab82dab3c0dd03a3a9df523fefad63b7065577cbe97af889aabcf02fdd` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-security-sentinel.agent.md` | `0c7abeb915f31cc28190e8a21f15a3582985bb2951b32ac5253627c845a05240` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-session-historian.agent.md` | `2234452d517bc868c495cc1bbd8218e2384017124e49bc7c89b3b0a5e0e6bf5e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-slack-researcher.agent.md` | `d84530b1acad8195be22c40c91b18f88d51b06884eb4c49ae220dd25573c12bd` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-spec-flow-analyzer.agent.md` | `b135a42e802bd85e5f0db2556c1bbaf72ed61f9510a996e1e4bcdfa2d4ab1a3d` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-swift-ios-reviewer.agent.md` | `4fc98bc377c11b8181c4da695435e1b50e16b0e244721cb6a5de24eef7e62299` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
| `agents/ce-testing-reviewer.agent.md` | `251aebac37d54edc4356485d6f37711bc58839d8a9920a337ae93de51a90e50e` | selected agent file; U6b Unit 2 install observed as Codex agent TOML |
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
