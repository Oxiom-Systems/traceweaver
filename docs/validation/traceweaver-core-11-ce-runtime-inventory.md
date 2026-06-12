# TraceWeaver Core 11 CE Runtime Inventory

Status: `SOURCE_INVENTORY_REFRESHED_FOR_0_2_2_RELEASE_CE_3_9_0_STATIC_SCOPE`

Date/session: 2026-06-12, upstream refresh from Compound Engineering `3.12.0` on branch `claude/system-engineering-framework-review-p1zo6a`

This record pins the Compound Engineering runtime surface considered for the TraceWeaver clean-swap plan. The selected files below are static materialization evidence; this record alone does not prove CE runtime loading, approve a clean swap, or create broad release-readiness claims.

## Decision Record

Record ID: `TWCORE-CE-RUNTIME-INVENTORY-2026-05-27-001`

Decision state: `source_pin_refreshed_for_traceweaver_core_0_2_2_static_materialization_review`

Allowed use:

- preserve selected CE workflow continuity inside TraceWeaver Core;
- verify selected CE files have provenance and hashes before package publication;
- identify agent-backed CE claims that remain held until runtime behavior proof.

Held claims:

- TraceWeaver replaces Compound Engineering cleanly;
- CE agent-backed review/research behavior works without the CE plugin;
- TraceWeaver systems-engineering controls are integrated into every CE workflow;
- release-ready status and runtime-equivalent CE behavior; the recorded 0.2.2
  smokes are scoped only to install/update metadata, static provenance, and
  discovery/fixture evidence.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source version | `3.12.0` |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source license | MIT, from source plugin manifest |
| Source basis | Upstream GitHub tag fetched locally for version `3.12.0` |
| Upstream commit/tag | `compound-engineering-v3.12.0` at commit `4719dc509fdc45656a830e3ed6060f674e206076` |
| Full source file count | 243 files |
| Skills file count | 192 files |
| Agent file count | 43 files |
| Full cache aggregate fingerprint | `f7225f23ca97949dc1de63f1d347d45f9acd0395450b0efff754a3430b63c3cd` over sorted SHA-256 output |

## Manifest And Support Hashes

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.codex-plugin/plugin.json` | `11044d2b5b994b70a3447121355aaa2f98fe6a54c7015bb9db7bb24c485d9128` | source support file; plugin metadata provenance recorded, runtime/plugin enablement claim held unless separately proven |
| `.claude-plugin/plugin.json` | `0cb8e71aac27f0c161ada487933d0602d0d57c684141957d484767afddcaccef` | source support file; plugin metadata provenance recorded, runtime/plugin enablement claim held unless separately proven |
| `.cursor-plugin/plugin.json` | `f831ffec6711188d434f21b84a854b34b822c971391d6d64e031a6acb3a8639e` | source support file; plugin metadata provenance recorded, runtime/plugin enablement claim held unless separately proven |
| `README.md` | `05bd0078dcdb7b23a4535fda4167f8bf36e7d21a4e247c28fb9c4a4ce7c07a13` | source support file; upstream documentation provenance recorded, TraceWeaver public claims still controlled by local docs |

## Selected CE Skill Scope

Upstream Compound Engineering `3.12.0` has 39 skill directories. TraceWeaver packages a selected CE-compatible subset plus the TraceWeaver-owned `lfg` alias for static/manual continuity only.

| Packaged file | SHA-256 | Decision |
| --- | --- | --- |
| `skills/ce-brainstorm/SKILL.md` | `ab76c9c8ea4fe929b3acef129f30f0ed35c176c0ffff1cfbe0900f713ea8a156` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/brainstorm-sections.md` | `11732cacbdd70a8fe29ea35c118f8fc2e4a7a14bdaa57d3ed52a56eae089692b` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/handoff.md` | `710d2c48567a4a57aa5e8aec6e70d3ad4089e201a95f3396bf0a16af052b8d76` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/html-rendering.md` | `10e50cefffeab306a770bc092e556cb7af7ef387965aee34342117a1ed0c0b46` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/markdown-rendering.md` | `3e28fe6e6a5c5bb9036f8333e96c768126c547ac0e200bcf15a4f5e96b696874` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/synthesis-summary.md` | `bc2ae38e65ae93d5f068e342a77eac08f9834367819a73630564513cb1f34666` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/universal-brainstorming.md` | `fba728432bbbf61a2c607686f79e44fd4db7ca6a15677ec115b922eacdeb2885` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/SKILL.md` | `96e4360cac273fe4c53637e017a10c614cbf1992010df1284523f2c3fa100318` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/action-class-rubric.md` | `c6e635b3fc58161caa8460c770dc2f1f0391e36bb9d4045502169706c40a273d` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/diff-scope.md` | `d71929cc70539ed3c9a714c602e629ea9869b83a4957f2a6cf0a4a900ae067d1` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/findings-schema.json` | `997783556d1c4652280e2c7ae55055cb4c980917db5e3d4c940c1d865a315ce0` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/persona-catalog.md` | `a62b00f4456e2449b3eb56835b166db3b26781cdef937c7d3f491a02a82d87fb` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/review-output-template.md` | `8747bc1497219e6210eb4496147a5f8600a81311c4e3e3eb13873aa15634950f` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/subagent-template.md` | `c6113f5dd15b884e03e83b7409dca81c4355ef2f813a1bcb94a65dec06c5d131` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/validator-template.md` | `0921e1dc01fe9171b8bd56d841122f1f5818c5719f972f175b0180de1b5271aa` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/SKILL.md` | `5a9cf1129b09590110c28195b60bc060ecb88a1b09c58826ecd48bb00a4e7dae` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/references/branch-creation.md` | `e1316f4fc685ef161ee4360c2f7b654d604508b0d97a1aff79cce782302125c7` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/references/pr-description-writing.md` | `27d8d119487174a38a73a06181994836b4953dc50438fa6219b12656be32e843` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit/SKILL.md` | `18cb95e0ebc8e4e65d534e2c130fd5b8cbbfbc7d1212b73ed834784cf8e52681` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/SKILL.md` | `080c287c0101784764a0bbd56287bc4349756994cd78b36cc4a5d555225a573a` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/concepts-vocabulary.md` | `79ac66f7f9fa52d940ff71b725bce207c09cfa14269d4340b8831da8239e2c71` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/per-action-flows.md` | `f37ae3e19d1b9f6852c939d4a333a728d8cce61d7c93695a15a3748471962454` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/SKILL.md` | `8ffe9d274df0ca7d1ef1849e5dd06b2fab0fba0e70d19a4c49da73835dea39c3` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/references/concepts-vocabulary.md` | `79ac66f7f9fa52d940ff71b725bce207c09cfa14269d4340b8831da8239e2c71` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/SKILL.md` | `dc064c94b617f6aa7555d6f54e4c4e1e50344f4c90005dc9047de12a3191142b` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/references/anti-patterns.md` | `9597012ed66df7e52caa38bfaaaab886e2e48b3807f1aa89640139b907976e6b` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/references/defense-in-depth.md` | `56211e8ff51d10df8b46b58d04420ab65f1fd02ec4e4588be4b5af246cc7e046` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/references/investigation-techniques.md` | `4a3f9b18622d4724ac6f259dccffbc416799e572e7b1e6e7091c0b9bd11298af` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/SKILL.md` | `14e91257f75cde2bd25c47a05dce5073cc6122d31d6b7c97b4039b97a6fb314b` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/bulk-preview.md` | `f7fccd3015c8844b3c30bdab7618d6e888e18fcd167f08e728460964e7b56f53` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/findings-schema.json` | `d20a74985ed53841a717472783f44ded059aac0f4ceb78cedcf53437ed2fbfb7` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/open-questions-defer.md` | `47ea89291b5f0b11d28bc4feb5db7e97dbfeabde3a48c048d0a88bc623494270` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/review-output-template.md` | `a6072fb31d69add6546626cf9b2d695b87e8c59d8d1aa33f95b2aa08f1bf00c5` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/subagent-template.md` | `37cfd9309b6bb3c9b3b4f9e694cd49ed5f565a81c5a5bafeefd796aef4ee9c02` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/synthesis-and-presentation.md` | `301c9dfaff6427a55e8a66c8c4077060d7a6f6d34e16ebf0eb4017d611722831` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/walkthrough.md` | `1a74bf4503d8ce01ca969c1577002ac7fcdc4cd829e32501cd327feeee5923da` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/SKILL.md` | `c0a336ed68b7349151c361553a3145f1cf32f486dff3932966c7fb3ee4bff86a` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/html-rendering.md` | `10e50cefffeab306a770bc092e556cb7af7ef387965aee34342117a1ed0c0b46` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/ideation-sections.md` | `aa0e912e3f12804c3196f121b9e6b570bf837a0c15bc759479c75b1a405ff697` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/markdown-rendering.md` | `3e28fe6e6a5c5bb9036f8333e96c768126c547ac0e200bcf15a4f5e96b696874` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/post-ideation-workflow.md` | `8c3dae04b4f4f77b5ec2a08d3301109cb6ea25a8cfb9f6c204cf50e5533c6816` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/universal-ideation.md` | `4c47784fe6a11032c0dac7b043d592826908a0a0cfe13d0d58dcdd9b6c6ea2c2` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/web-research-cache.md` | `c72b533963c024bd9b6328b9cd48574efe20b58dd643fce467e544840b6642ea` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/SKILL.md` | `71ed95d3fcc02f6c5cdffb6ba8d8d4895f7b02ebe1f60cfcc23f64e35aaad2ea` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/approach-altitude.md` | `b5888c2a8288343dfeb2624bcc92d089acbc547126fbf7408c493676e4c7f76f` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/deepening-workflow.md` | `dc91f7c5da66d62b633a22188daffe8bfc5b0299562a3a7e16b2376de8011fb7` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/html-rendering.md` | `10e50cefffeab306a770bc092e556cb7af7ef387965aee34342117a1ed0c0b46` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/markdown-rendering.md` | `3e28fe6e6a5c5bb9036f8333e96c768126c547ac0e200bcf15a4f5e96b696874` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/plan-handoff.md` | `62bd4b10e429ae6081b212fe78c90cfaf60fdee4724e0e15b7650241c24ff98b` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/plan-sections.md` | `811dcd9ce8280cd6fc490f55e428cc55dcb16b99ca769b1defbc90fdc2de71f3` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/synthesis-summary.md` | `226c7c09a50a24fff21e4832aec3cafa741cefad1e43ceb0931aa8f652848e5c` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/universal-planning.md` | `c5e13bd9d7bda20c57d1980396217162bed3da627cb5b2e98bd3446957291dc9` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/SKILL.md` | `bcc3a89c6785392db804070b6eb6b45a7751641c43b0b918df2569362fe081c8` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/references/full-mode.md` | `72080552dece87ac3923b60cfa7d0a83d212960c88b9eca4a2c6e6d7f98ce110` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/references/targeted-mode.md` | `2cb7bb735b360f50ad5cdc32590a9c90b22b04f7528c3ac128dec1632cbf44d1` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/get-pr-comments` | `8c8ba4dfd819633e55dccf343e0ff88d68220decdecbdf409961a2489777b13f` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/get-thread-for-comment` | `14ab142891df801ba9c5032fead2431caa7a20ec682db144be685600e976bf77` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/reply-to-pr-thread` | `b11cbb9c1cf2b5c351986ea818d123e78709e46d95782a9ca093e1c12d3ecb3e` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/resolve-pr-thread` | `6a52e8f51e8a24dade140582216bd1e8119e12da081c54222d6624b532c7f6d6` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/SKILL.md` | `0b450e21fbaa72f0d4858992c32c0da04fce947361ac97b7378dd2fcc18797c5` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/evals/README.md` | `155688a498df9dac53d70b9b56d7a9e0e07d862e9f57d0959ef67bdb5ea33dbe` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/evals/evals.json` | `54c8b79168f3b0f35a04ebf6e2ea28d04051782f770266de484c68899530c4ab` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/evals/grader.md` | `c2b602e7c9107a46652a7f9a8f40dd80a21c753ede86494d0443d168bad69ce1` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/discover-sessions.sh` | `d3bbccfd78c75497dbae638af790f2578b1ebd3fe16eaf293c73f6770bd59ad8` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-errors.py` | `92eb8a329bf10821b817de356af569fad06099d0df8046f03556e9c0f1a7b5b1` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-metadata.py` | `b5ca7dd2128761a8abcf4620dd37f246515502152a064d698fb1c116111d6342` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-skeleton.py` | `76f21a2796792087c2d38d33157531d9dc039a613ab2367c00fd5a0452fdb4c9` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-setup/SKILL.md` | `626696dc061455a1320559b48ef8bced72fe8b87403d3d4d55592627c99ea6ec` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-setup/references/config-template.yaml` | `820aebb0f588f4763ad0d7d0ee4e7236f857c5ddaaec19e1d5095fa33f76417d` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-setup/scripts/check-health` | `956f34aab13552c7ecb37300368c984973d97bb368755c4dd1d62ec42389ce09` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-strategy/SKILL.md` | `faa9fde011770050f6195f31b7a8e7044a5f2f0299529015990bef8f00c06da2` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-strategy/references/interview.md` | `a1995afc344fda1de05b996a9e74ecc0073a82dc77fb716c0e1b03fc2490bb43` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-strategy/references/strategy-template.md` | `f7f8a85ce53b06604502c697daf525ee33cc37c411f33d4ead8974c3c55886f3` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-test-browser/SKILL.md` | `93e6fa00e14c9acdd08c69f2fcfc88f41a9e7556762bab58e7ea72168dedd280` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-test-xcode/SKILL.md` | `27945c9e4a4c72543988698699f5d08d3a7a04d94d1ca7d49b425b9cb169a544` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/SKILL.md` | `376191e75dd87c829f0a813359fba8ec201150c1994610b3435409b8684212f9` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/references/non-code-execution.md` | `db2b50d32c3dfa3dd1772684b76c3cf7d5384906da5aad6caa5141eebe04e3ec` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/references/review-findings-followup.md` | `8986b8ec7f82768c177297cd14224eb089b50d4c8aa4b876d054e2889bfbbda9` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/references/shipping-workflow.md` | `54292e3d9fb2748ff8c65536b5dfd316fca7706b5a93b198dcfa57fbba4a1db0` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/references/tracker-defer.md` | `2a506c56def3435ae57d705e76f5d501557e9a71189279077f586ba59060aa6c` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-worktree/SKILL.md` | `54ad044bab5207b1f860d6bab5d7460ada9cde7cac910866e1eefe21623746e7` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-worktree/scripts/worktree-manager.sh` | `8452a993bbfca2301292a770f45b8ce99d815701d1e9040b959cb9b7b09a00b0` | selected skill file; refreshed from CE 3.12.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/lfg/SKILL.md` | `46ce8f69fa0a321b8a4891a0194ba3dcd663c8cba75eab77417cbe54673047eb` | TraceWeaver alias preserved and delegates to tw-auto, no direct CE autopilot claim |
| `skills/lfg/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | TraceWeaver alias preserved and delegates to tw-auto, no direct CE autopilot claim |

## CE Agent Continuity Inventory

These agent files are statically materialized so agent-dependent CE workflows have source/provenance and hash records. This inventory does not prove that any agent loads or executes in a host runtime.

| Packaged file | SHA-256 | Decision |
| --- | --- | --- |
| `agents/ce-adversarial-document-reviewer.md` | `fdc0769dcd47c1e4b2d346591fe6b83810a3e165f0d897a76c32d3a1468391e4` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-adversarial-reviewer.md` | `6a83ebbc62d3efde58f456fba923992c27d0863599e14305651f6e03c0c380bd` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-agent-native-reviewer.md` | `51e1529ae2900178b255595e20335fbb8a8bf27c7005b41a681944c5f13b998a` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-ankane-readme-writer.md` | `a0ed6f5bc201c53d616cc6eb6e214ab6d3a7927d255b8f447cee07d254d5b8a6` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-api-contract-reviewer.md` | `534b07d70677f8c71f6bbe9aecc12c78367087be60308cb937d7e1c9824c377c` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-architecture-strategist.md` | `fc4b7f1509c18abc21733a41214a7e946780de8900c53cf04de2186685550215` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-best-practices-researcher.md` | `14896ea6d69adae21df8d038f38887c2b12aa415a094e4f891ef24d28fd5ac93` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-code-simplicity-reviewer.md` | `63cb66c233586601d9d34b1d2cb1fed19bb5c23b5c44b96233f7cad0301df1ce` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-coherence-reviewer.md` | `cb0079430a3e53f42ef5ba22f9a69c96b36057f170473b4d105529f6132fe277` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-correctness-reviewer.md` | `caefb6555ebac3f2d4987cd9393e72b038e503fc5d0e2bc9a6f2cbf04f8e805f` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-data-integrity-guardian.md` | `347d596bf1e88296bd0caddb7de32a9b9ea2ac8f849d09aa3323d346310a2a86` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-data-migration-reviewer.md` | `563542f256fb74b44ed0e04650122798e7e4e96c42088ae3789328fdaad9215c` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-deployment-verification-agent.md` | `0706a19e1d01db7654dafe01a1239d6e03703323686b481e0a10fc06b1442633` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-design-implementation-reviewer.md` | `3d9a37f8989cb06e9fa9716376ff746c3d5d3405ecaca3b282b09bad08e398da` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-design-iterator.md` | `f64f4cff3108dcf701f94995ec6626f9fd7422b733426fce8a0c105bc4a72bd5` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-design-lens-reviewer.md` | `d668da0983525703b2dad2d52c8196e17b51e1c8dcbb9436d90903ae17d3b320` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-feasibility-reviewer.md` | `a75528e42b70d65a91e101c9455b3486d7a36110a26660ae29ca98107c5e885d` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-figma-design-sync.md` | `652a4c95ce6339bd718b95bbb22a4bc00e837d553653b283e7369cc0d4a198a7` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-framework-docs-researcher.md` | `67aef22bd96b2c5d3390fc7d1d5d7a9208619bc0b116c447f42cf3c36e8bc244` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-git-history-analyzer.md` | `d51fdbc3042e02fe5dbc048009e18696780c6d10e2e00c58f3d7e6a49f49974b` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-issue-intelligence-analyst.md` | `fa3cbc5a329937777eef03c4825e4b02a4f00ca6e5b9e01637a72ce89e8cb17f` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-julik-frontend-races-reviewer.md` | `8d1668c7d2fd0dba34ba8fff5e94c057859567eaf59b0e63c77443120486f3ae` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-learnings-researcher.md` | `47b8c5b2e4bf88b7dd6466324bc4d6962a372c38d62a0c59624f9944830831c9` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-maintainability-reviewer.md` | `9ac352e3866cc2223ca9524351678ea98f091c02bf631454245a9e2937a3ac46` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-pattern-recognition-specialist.md` | `1b956a44a75bcc6ec2a0e2d848d77b5b95290eaffe4bc291b2fbfa9e98800fc9` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-performance-oracle.md` | `e293484072ffc06cf72a2e78e8c8934a966e91b98fe2029d58142941b7b14e18` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-performance-reviewer.md` | `3f0c6b2bb575cea20aa63ae4d19da3c6e446b332f40294acb70783e63257c889` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-pr-comment-resolver.md` | `c3364f9dccd9cecb75504b759baf74c246b7df24740e8aa0a171fe604099d9df` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-previous-comments-reviewer.md` | `12f2892a6c3dc692bdf24983ab9e9b4dbb6ec790cb29f629ca197a178712818e` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-product-lens-reviewer.md` | `4509942243f677eb4f5d07c097a6f7dcabff31dcae6ad357e5167409ace76aba` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-project-standards-reviewer.md` | `9cb91e597ba872ebf495d05760d48cd59e3cf89e23010fd06e465c04b51f89d0` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-reliability-reviewer.md` | `089af007af6a7eae91d08dba5b5b169209c700ace7ea5a6715b05d54b870a462` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-repo-research-analyst.md` | `f2ee62dd210e8d429a88bb531fa0939925288191dd7ac5678e6d74b2142f8135` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-scope-guardian-reviewer.md` | `cc4b1979549a3b89875896580a8a85fcd15b354a9ac5ba2505fd5c700e1dcd9c` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-security-lens-reviewer.md` | `499de68eda66690c2029040ffd9c2903520c63f5f1e0eabef0e5f8a46c9116c7` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-security-reviewer.md` | `2ba75e811070a721c3d2d74b282658a083dbd0c6c69ce36d1d8513a22260068c` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-security-sentinel.md` | `0c7abeb915f31cc28190e8a21f15a3582985bb2951b32ac5253627c845a05240` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-session-historian.md` | `172c8a57d29439a910b8b9b0dedab489bb950f9361df1254945c10029229d2d7` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-slack-researcher.md` | `4015c570add0c1e6cd75efaabe4c49d5af5f8fa5b877ed6c86c89482191bf9a0` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-spec-flow-analyzer.md` | `b135a42e802bd85e5f0db2556c1bbaf72ed61f9510a996e1e4bcdfa2d4ab1a3d` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-swift-ios-reviewer.md` | `f484902b5fe555d0c0d34146a8ba83d7709916ad815358cf5aa2edf51d5623fa` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-testing-reviewer.md` | `049cb1e6b47bd88c820a707655f50ad613b5811c1f4245cd9252d65a2a171f31` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |
| `agents/ce-web-researcher.md` | `ef4695871b326c30a35de16f3a72ef84b8a2e601947edf96d074852e43633f43` | selected agent file; refreshed from CE 3.9.0 package, agent-backed runtime behavior claim held |

## Agent-Dependent Workflow Map

| CE workflow | Agent dependency | Current decision |
| --- | --- | --- |
| `ce-code-review` | Always-on and conditional code-review agents; schema/dedup pipeline depends on agent outputs. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-doc-review` | Coherence/feasibility plus conditional document-review agents. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-compound` | Context analyzer, solution extractor, related-docs finder, optional session historian, and optional specialist reviewers. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-resolve-pr-feedback` | Feedback-resolution subagents for review-thread triage. | Clean-swap claim held until agents install/load or skill-only degradation is explicitly proven. |
| `ce-plan` and `ce-work` | May run inline, serial, or parallel subagents depending on scope. | Base skill availability can be installed first; agent-backed behavior remains held until runtime proof. |

## Stale Reset Rule

This record resets to `held` if the CE source version changes, any selected file hash changes, upstream license/provenance changes, TraceWeaver copies any CE file not listed here, CE agent files are omitted while claiming clean-swap continuity, or this static inventory is used as install/runtime proof.

Next recommended step: run `tw-traceability-check`, `tw-code-review`, and `tw-doc-review` against the 0.2.2 release scope before publication.
