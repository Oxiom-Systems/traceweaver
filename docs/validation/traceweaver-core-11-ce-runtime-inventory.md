# TraceWeaver Core 11 CE Runtime Inventory

Status: `SOURCE_INVENTORY_REFRESHED_FOR_U6B_REVIEW_CE_3_8_1_STATIC_SCOPE`

Date/session: 2026-05-13, upstream refresh from Compound Engineering `3.8.1` on branch
`codex/update-ce-3.8.1`

This record pins the Compound Engineering runtime surface considered for the
TraceWeaver clean-swap plan. U6b Unit 2 consumes this inventory for static
materialization evidence, but this record alone does not prove CE runtime
loading, approve a clean swap, or create U7 release claims.

## Decision Record

Record ID: `TWCORE-CE-RUNTIME-INVENTORY-2026-05-13-001`

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
| Source version | `3.8.1` |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source license | MIT, from source plugin manifest |
| Source basis | Locally installed Codex Compound Engineering plugin cache for version `3.8.1` |
| Upstream commit/tag | `compound-engineering-v3.8.1` / `cli-v3.8.1` at commit `b07aac55b5dc6d5b940a7b194497ccd6121f62a5` |
| Full cache file count | 230 files |
| Skills file count | 173 files |
| Agent file count | 49 files |
| Full cache aggregate fingerprint | `fb3b853793720fa228b2b8a7c6fe7267c30db61d9e97111b3f96eaa883d97b72` over sorted SHA-256 output |

## Manifest And Support Hashes

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.codex-plugin/plugin.json` | `28602d1303a022e54d1f03dc9d37edc8e7b15ac35f756cb8419b3bd938c81068` | source support file; Codex plugin metadata provenance recorded, runtime/plugin enablement claim held |
| `.claude-plugin/plugin.json` | `b385631dda16f32b0d296e4968a8462a69c9a110f060b064852a160704b37e10` | source support file; Claude plugin metadata provenance recorded for compatibility only |
| `.cursor-plugin/plugin.json` | `299e322e2bb0da05bc4894a32afc73e7a1e2f7fe62e68a84e0cd1a293ac1e242` | source support file; Cursor plugin metadata provenance recorded for compatibility only |
| `README.md` | `5bdb8c035a1fb7c2a1503b241adc94cf9fb226926f7f95f8d242ad89fdff97b2` | source support file; upstream install/documentation provenance recorded, TraceWeaver public claims still controlled by local docs |

## Selected CE Skill Scope

Upstream Compound Engineering `3.8.1` has 37 skill directories. TraceWeaver packages a selected CE-compatible subset plus the TraceWeaver-owned `lfg` alias for static/manual continuity only.

The obsolete split `ce-session-extract` and `ce-session-inventory` surfaces are removed from the selected package. Session-history functionality is represented by `ce-sessions` and remains source-evidence only until separately reviewed.

| Packaged file | SHA-256 | Decision |
| --- | --- | --- |
| `skills/ce-brainstorm/SKILL.md` | `2d2082e8821dd7adb535a2996d8ea0a5bbe0d718469b8ab915a8aaae3b7fc0e6` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/handoff.md` | `710d2c48567a4a57aa5e8aec6e70d3ad4089e201a95f3396bf0a16af052b8d76` | selected skill file; TraceWeaver-preserved boundary delta, static materialization only |
| `skills/ce-brainstorm/references/requirements-capture.md` | `8939c49ea0389c8f2fb9ebccc70b3cba035a6d3dc6011ae515944eec7fbf8929` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/synthesis-summary.md` | `fc7cf43a16faa05c5f95838d8afe8ca863333d0c1dbc6e4fed106765050acf40` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/universal-brainstorming.md` | `fba728432bbbf61a2c607686f79e44fd4db7ca6a15677ec115b922eacdeb2885` | selected skill file; TraceWeaver-preserved boundary delta, static materialization only |
| `skills/ce-brainstorm/references/visual-communication.md` | `ceaeb6715ed1b263047f909458e799147b863ac143559ff995092b62adb022c6` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/SKILL.md` | `905c9774b254b7b9352aaeffdc80d91ec0eaadc628522d1e75160b213809ab6d` | selected skill file; refreshed from CE 3.8.1 package with TraceWeaver publication hold, runtime and clean-swap claims held |
| `skills/ce-code-review/references/bulk-preview.md` | `5b9c86e9c25dddd73b99eb801d4449371256ca3d92dabbc2184cea587494e489` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/diff-scope.md` | `b11a3cbee8372bc4162a2e00898e82317b37c5f56cbf456fe81c3e5fef1ff989` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/findings-schema.json` | `428386c19b1159cc69817fca9a2ee7ae3901a7cb631c19f934b2e8a74cfd724e` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/persona-catalog.md` | `e6d2582d116235a2c804b254ca9cfcd9e771be8f0ef76269e1f234001592dbdc` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/review-output-template.md` | `dd8925db634ff328146e3d79bd47ddd4a69465d3622c9ecaad4eb5dd93f15d66` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/subagent-template.md` | `dd5dfebda3e3ab5cc122d1f1ca29ca0838575803378fa38d31d8413f13d94f62` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/validator-template.md` | `2409a03bfca9016784e327d2c9b125d8a66613bdfe49b96bf52746f09a4d7f73` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-code-review/references/walkthrough.md` | `939b7a00a7fdd1df332429a1718a221d176fc03757f3daac79c0aba80025766f` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/SKILL.md` | `5a9cf1129b09590110c28195b60bc060ecb88a1b09c58826ecd48bb00a4e7dae` | selected skill file; refreshed from CE 3.8.1 package with TraceWeaver publication hold, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/references/branch-creation.md` | `e1316f4fc685ef161ee4360c2f7b654d604508b0d97a1aff79cce782302125c7` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/references/pr-description-writing.md` | `6a76d2927505bc72eb46a12c01b7a0c3c1d83eb5a07ae0042a04a66bcd464241` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-commit/SKILL.md` | `18cb95e0ebc8e4e65d534e2c130fd5b8cbbfbc7d1212b73ed834784cf8e52681` | selected skill file; refreshed from CE 3.8.1 package with TraceWeaver publication hold, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/SKILL.md` | `4b8b7e8eff97d63453f6e2bde428e15d7e140c5c100ba8030b526fdd66bd7dba` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/per-action-flows.md` | `f37ae3e19d1b9f6852c939d4a333a728d8cce61d7c93695a15a3748471962454` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound/SKILL.md` | `62065d44ca49ce04af8332cc13a3a82795f29e5240b3ed6cc12ccfe69404081b` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-compound/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-debug/SKILL.md` | `dc064c94b617f6aa7555d6f54e4c4e1e50344f4c90005dc9047de12a3191142b` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-debug/references/anti-patterns.md` | `9597012ed66df7e52caa38bfaaaab886e2e48b3807f1aa89640139b907976e6b` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-debug/references/defense-in-depth.md` | `56211e8ff51d10df8b46b58d04420ab65f1fd02ec4e4588be4b5af246cc7e046` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-debug/references/investigation-techniques.md` | `4a3f9b18622d4724ac6f259dccffbc416799e572e7b1e6e7091c0b9bd11298af` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/SKILL.md` | `0d5d82acb8986b65ba1c494f2b708c6a4f94a10a893f86501e268bb53e77b1f4` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/bulk-preview.md` | `f7fccd3015c8844b3c30bdab7618d6e888e18fcd167f08e728460964e7b56f53` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/findings-schema.json` | `d20a74985ed53841a717472783f44ded059aac0f4ceb78cedcf53437ed2fbfb7` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/open-questions-defer.md` | `4a3bb7fc26637d9e14c74a302d3c938e8faac6d18a0e565679b1bfe90b2716bb` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/review-output-template.md` | `a6072fb31d69add6546626cf9b2d695b87e8c59d8d1aa33f95b2aa08f1bf00c5` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/subagent-template.md` | `37cfd9309b6bb3c9b3b4f9e694cd49ed5f565a81c5a5bafeefd796aef4ee9c02` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/synthesis-and-presentation.md` | `301c9dfaff6427a55e8a66c8c4077060d7a6f6d34e16ebf0eb4017d611722831` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/walkthrough.md` | `1a74bf4503d8ce01ca969c1577002ac7fcdc4cd829e32501cd327feeee5923da` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-plan/SKILL.md` | `dd96d54eec7f1912928619bf2b4cbefb82a13a9e00553ef9b632f062094e4640` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-plan/references/deepening-workflow.md` | `bcb2482d4a0d4b202423ec30fc58ca4941e6fbf2942ded7492e156e896e1098a` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-plan/references/plan-handoff.md` | `62bd4b10e429ae6081b212fe78c90cfaf60fdee4724e0e15b7650241c24ff98b` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-plan/references/plan-template.md` | `adba04d2d0931b8912d18170f7b08a5e08b9026d3d173586a758dcbddd41b573` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-plan/references/synthesis-summary.md` | `b6bc295cb81bc0cf61c82ea3bce2dbee44f1dfc19da9140f84b95cb73207b895` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-plan/references/universal-planning.md` | `ef5b19c0dbefcfbdd8779ddfc5ff98e0599072f7a0fc723c6e176e1fa36303eb` | selected skill file; TraceWeaver-preserved boundary delta, static materialization only |
| `skills/ce-plan/references/visual-communication.md` | `8be4218e902928df8a6aa2170de6ce0e307171064559a27e94c93cc3f69220c2` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/SKILL.md` | `3b6496790383db003700fe888011bb3a631716ed1ddb4d930d11a4404ea65207` | selected skill file; refreshed from CE 3.8.1 package with TraceWeaver publication hold, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/references/full-mode.md` | `d9de23a09fd6f0c5ea1a8dcb58c0b74ff36d57bdb0f1e3b571852ec251653226` | selected skill file; refreshed from CE 3.8.1 package with TraceWeaver publication hold, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/references/targeted-mode.md` | `912ee1227d748a86aaceb81b6ee35215f9e14cf37c2320ea39645e52886903cf` | selected skill file; refreshed from CE 3.8.1 package with TraceWeaver publication hold, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/get-pr-comments` | `f7b9b761d4f2cc510e55dace0bd5d9d1573a3489e0dbabc35a51e91187b5a71e` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/get-thread-for-comment` | `4e45b36e9c6ffc27aa248b5c52c11625fb4e47864128920e2a46be42b73f3d7f` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/reply-to-pr-thread` | `b11cbb9c1cf2b5c351986ea818d123e78709e46d95782a9ca093e1c12d3ecb3e` | selected skill file; TraceWeaver-preserved boundary delta, static materialization only |
| `skills/ce-resolve-pr-feedback/scripts/resolve-pr-thread` | `6a52e8f51e8a24dade140582216bd1e8119e12da081c54222d6624b532c7f6d6` | selected skill file; TraceWeaver-preserved boundary delta, static materialization only |
| `skills/ce-sessions/SKILL.md` | `cee2a94d11419d204542910f4afcf78a83f23ea1c6799884f36688cc3b64bd70` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/discover-sessions.sh` | `80eaafdc887db2634f2268ccdbd063ffbed141b394ad63b7dfec160d8d587624` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-errors.py` | `4bb991194065610ae5d07e47666114e9302db482b9193b351b0584f19a862c05` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-metadata.py` | `8dd3f92b42ccac3524c8a4778287a3ab88973d1ff8c9a4a316f6a41715a96204` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-skeleton.py` | `789dbe3a78cab624be0ebb9cde4c6d85ebb3777ba7b5fa3f2db9d01e74457195` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-setup/SKILL.md` | `626696dc061455a1320559b48ef8bced72fe8b87403d3d4d55592627c99ea6ec` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-setup/references/config-template.yaml` | `beb8f47c2be8866a58c64676693ffc5be2803a7c0a373eaffedbba94fd4dd15f` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-setup/scripts/check-health` | `956f34aab13552c7ecb37300368c984973d97bb368755c4dd1d62ec42389ce09` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-test-browser/SKILL.md` | `a7240cf469d410b2ee46fbf24ef19cf70becaefa55549b13a0d4eaa63166a71f` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-test-xcode/SKILL.md` | `27945c9e4a4c72543988698699f5d08d3a7a04d94d1ca7d49b425b9cb169a544` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-work/SKILL.md` | `bc490d75d4a972355def18699bb01210d39b89c423eb9853a0d51eebf47f922e` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-work/references/shipping-workflow.md` | `01e809cb737d8bf6e4e54a81f8dec4f0dfef42eb1866e956a6ab0ab410420264` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-work/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-worktree/SKILL.md` | `bccd3015024cb040232574b9cc77a46832414266af094cb77bf844330a5c7171` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/ce-worktree/scripts/worktree-manager.sh` | `da576d1e4e377a3259f154f82c59c1f68cd2d4415fe898e2353b340c03717219` | selected skill file; refreshed from CE 3.8.1 package, runtime and clean-swap claims held |
| `skills/lfg/SKILL.md` | `ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083` | selected skill file; TraceWeaver alias preserved and delegates to tw-auto, no direct CE autopilot claim |
| `skills/lfg/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file; TraceWeaver alias preserved and delegates to tw-auto, no direct CE autopilot claim |

## CE Agent Continuity Inventory

These agent files are statically materialized so agent-dependent CE workflows have source/provenance and hash records. This inventory does not prove that any agent loads or executes in a host runtime.

| Packaged file | SHA-256 | Decision |
| --- | --- | --- |
| `agents/ce-adversarial-document-reviewer.agent.md` | `df975f661a21eb3d25113eae9dd5163bb39ae4e97c182463f78221d919325ff6` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-adversarial-reviewer.agent.md` | `ad6661421f47a93d43670c42617cc4a83ea6ac5578824deeca8ffa463166da43` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-agent-native-reviewer.agent.md` | `51e1529ae2900178b255595e20335fbb8a8bf27c7005b41a681944c5f13b998a` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-ankane-readme-writer.agent.md` | `a0ed6f5bc201c53d616cc6eb6e214ab6d3a7927d255b8f447cee07d254d5b8a6` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-api-contract-reviewer.agent.md` | `534b07d70677f8c71f6bbe9aecc12c78367087be60308cb937d7e1c9824c377c` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-architecture-strategist.agent.md` | `fc4b7f1509c18abc21733a41214a7e946780de8900c53cf04de2186685550215` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-best-practices-researcher.agent.md` | `14896ea6d69adae21df8d038f38887c2b12aa415a094e4f891ef24d28fd5ac93` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-code-simplicity-reviewer.agent.md` | `46d0c51deba4d370ca729ad0138c535395d170c0547070c4b1d9dd8d5ee30f64` | selected agent file; refreshed from CE 3.8.1 package with whitespace-only diff-check normalization, agent-backed runtime behavior claim held |
| `agents/ce-coherence-reviewer.agent.md` | `d4122521d68780b117502397767b87b839273a51a2db7fa9395b413876d882bc` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-correctness-reviewer.agent.md` | `caefb6555ebac3f2d4987cd9393e72b038e503fc5d0e2bc9a6f2cbf04f8e805f` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-data-integrity-guardian.agent.md` | `347d596bf1e88296bd0caddb7de32a9b9ea2ac8f849d09aa3323d346310a2a86` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-data-migration-expert.agent.md` | `9cf8dcb6441db0aa1e934ce15e4ae207b12ee35634317d78e61e1615d6bfa05e` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-data-migrations-reviewer.agent.md` | `30fc7f9defa3ef3946bce46a6179bd3b2fb3a77db1413d54b3f4645577c32be0` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-deployment-verification-agent.agent.md` | `0706a19e1d01db7654dafe01a1239d6e03703323686b481e0a10fc06b1442633` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-design-implementation-reviewer.agent.md` | `1e3ae74895f176f49b42aba9b98f280179964f20db2b19630a586756d049542d` | selected agent file; refreshed from CE 3.8.1 package with whitespace-only diff-check normalization, agent-backed runtime behavior claim held |
| `agents/ce-design-iterator.agent.md` | `f64f4cff3108dcf701f94995ec6626f9fd7422b733426fce8a0c105bc4a72bd5` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-design-lens-reviewer.agent.md` | `b5b09a66db81aa8272dee5e579d4c33a8c9b6ceeb17a2eb51b22f3c376b8b1c0` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-dhh-rails-reviewer.agent.md` | `94e579ec789c25fe76d44abe8dc1801093e653fc999c2ea6f6bd6ce70fb10cd1` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-feasibility-reviewer.agent.md` | `2809a89b636382d72f491a24963fe74a8a99edd4bc67e1f529d6bc92b7118bbf` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-figma-design-sync.agent.md` | `652a4c95ce6339bd718b95bbb22a4bc00e837d553653b283e7369cc0d4a198a7` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-framework-docs-researcher.agent.md` | `67aef22bd96b2c5d3390fc7d1d5d7a9208619bc0b116c447f42cf3c36e8bc244` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-git-history-analyzer.agent.md` | `d51fdbc3042e02fe5dbc048009e18696780c6d10e2e00c58f3d7e6a49f49974b` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-issue-intelligence-analyst.agent.md` | `fa3cbc5a329937777eef03c4825e4b02a4f00ca6e5b9e01637a72ce89e8cb17f` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-julik-frontend-races-reviewer.agent.md` | `8d1668c7d2fd0dba34ba8fff5e94c057859567eaf59b0e63c77443120486f3ae` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-kieran-python-reviewer.agent.md` | `38140007e1a3748163bb6fe9ef42badb6f71119ac2ab3d5b93f7f8b7b4c6470a` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-kieran-rails-reviewer.agent.md` | `dec3e0981e18beb9beed0c09c86e46e34db5e3096cfb630bc525082e191132d7` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-kieran-typescript-reviewer.agent.md` | `8fa842d6bb6fe3fc535b38d51de590acdc1f2289eba88c330a5d94e9e8d738da` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-learnings-researcher.agent.md` | `abfb4f13e8ba3298d388e13b124455751f4ab8733849fbf211c3dafb83428c8f` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-maintainability-reviewer.agent.md` | `569f9876055aec23d9e1273bb10e484ec52dc3fec2a2e99c96275e98479da2e1` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-pattern-recognition-specialist.agent.md` | `1b956a44a75bcc6ec2a0e2d848d77b5b95290eaffe4bc291b2fbfa9e98800fc9` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-performance-oracle.agent.md` | `e293484072ffc06cf72a2e78e8c8934a966e91b98fe2029d58142941b7b14e18` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-performance-reviewer.agent.md` | `3f0c6b2bb575cea20aa63ae4d19da3c6e446b332f40294acb70783e63257c889` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-pr-comment-resolver.agent.md` | `c3364f9dccd9cecb75504b759baf74c246b7df24740e8aa0a171fe604099d9df` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-previous-comments-reviewer.agent.md` | `12f2892a6c3dc692bdf24983ab9e9b4dbb6ec790cb29f629ca197a178712818e` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-product-lens-reviewer.agent.md` | `d50d387217f5be295033743b0bb6865c05aee7f648c5e6b4f70aad098d20660e` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-project-standards-reviewer.agent.md` | `9cb91e597ba872ebf495d05760d48cd59e3cf89e23010fd06e465c04b51f89d0` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-reliability-reviewer.agent.md` | `089af007af6a7eae91d08dba5b5b169209c700ace7ea5a6715b05d54b870a462` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-repo-research-analyst.agent.md` | `f2ee62dd210e8d429a88bb531fa0939925288191dd7ac5678e6d74b2142f8135` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-schema-drift-detector.agent.md` | `bc82f0d9f07ed6fec40b88465f882e51a472c4dcb3992bd85a68db2fc215112f` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-scope-guardian-reviewer.agent.md` | `16af69a80006baeaa8b23ea24c1c40a5c3b204787018e19b776227c03f0719bf` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-security-lens-reviewer.agent.md` | `887c99bd833e2f12714482aa5f146b984872193d4833812ea7832caa852b2b03` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-security-reviewer.agent.md` | `2ba75e811070a721c3d2d74b282658a083dbd0c6c69ce36d1d8513a22260068c` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-security-sentinel.agent.md` | `0c7abeb915f31cc28190e8a21f15a3582985bb2951b32ac5253627c845a05240` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-session-historian.agent.md` | `235834d3fa9c2ab110d64ea81c2b39c85311b03273cc83b91e73d659ffee76ec` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-slack-researcher.agent.md` | `b9a1d924278a8e5f6505e7b1f50b8400cab673ea800fe5f7aa6cf27b1c1dbb84` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-spec-flow-analyzer.agent.md` | `b135a42e802bd85e5f0db2556c1bbaf72ed61f9510a996e1e4bcdfa2d4ab1a3d` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-swift-ios-reviewer.agent.md` | `b666d995d06427393eedb5e6d3143c9a15fb2586972b250bf1f687c0da4a47fc` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-testing-reviewer.agent.md` | `049cb1e6b47bd88c820a707655f50ad613b5811c1f4245cd9252d65a2a171f31` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |
| `agents/ce-web-researcher.agent.md` | `3c90245b40fb23f17883b2303813572033c47bdbe3a9a4a74cdf6aea301d331a` | selected agent file; refreshed from CE 3.8.1 package, agent-backed runtime behavior claim held |

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
