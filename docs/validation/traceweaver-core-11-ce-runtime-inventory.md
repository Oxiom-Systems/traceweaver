# TraceWeaver Core 11 CE Runtime Inventory

Status: `SOURCE_INVENTORY_REFRESHED_FOR_0_2_1_RELEASE_CE_3_9_0_STATIC_SCOPE`

Date/session: 2026-05-27, upstream refresh from Compound Engineering `3.9.0` on branch `codex/traceweaver-0.2.1-release-fixes`

This record pins the Compound Engineering runtime surface considered for the TraceWeaver clean-swap plan. The selected files below are static materialization evidence; this record alone does not prove CE runtime loading, approve a clean swap, or create broad release-readiness claims.

## Decision Record

Record ID: `TWCORE-CE-RUNTIME-INVENTORY-2026-05-27-001`

Decision state: `source_pin_refreshed_for_traceweaver_core_0_2_1_static_materialization_review`

Allowed use:

- preserve selected CE workflow continuity inside TraceWeaver Core;
- verify selected CE files have provenance and hashes before package publication;
- identify agent-backed CE claims that remain held until runtime behavior proof.

Held claims:

- TraceWeaver replaces Compound Engineering cleanly;
- CE agent-backed review/research behavior works without the CE plugin;
- TraceWeaver systems-engineering controls are integrated into every CE workflow;
- release-ready or runtime-equivalent claims beyond the recorded 0.2.1 smokes.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source version | `3.9.0` |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source license | MIT, from source plugin manifest |
| Source basis | Upstream GitHub tag fetched locally for version `3.9.0` |
| Upstream commit/tag | `compound-engineering-v3.9.0` / `cli-v3.9.0` at commit `e2c9cd23525eeb1ecddd637e027d53b02f892e7b` |
| Full source file count | 229 files |
| Skills file count | 178 files |
| Agent file count | 43 files |
| Full cache aggregate fingerprint | `13fe8c0a2c5154cef8c64974f39e929f59a6c3ca652daa074e5b48f67aec6c02` over sorted SHA-256 output |

## Manifest And Support Hashes

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.codex-plugin/plugin.json` | `b8445471edea9d0d9270e6f7f4a67ab85af739f05d53aaad9092fd2ab4661cdf` | source support file; plugin metadata provenance recorded, runtime/plugin enablement claim held unless separately proven |
| `.claude-plugin/plugin.json` | `1e3e2865b6a54f25b6906521b8f001ba8fccb0b0190d2fe4adb439d168520f22` | source support file; plugin metadata provenance recorded, runtime/plugin enablement claim held unless separately proven |
| `.cursor-plugin/plugin.json` | `a8f2292a03d6ed7038b3bece6d604556e212d617f1c631059ce07bdba012cb66` | source support file; plugin metadata provenance recorded, runtime/plugin enablement claim held unless separately proven |
| `README.md` | `992f47bdc61d95b328206bbb4a946a2db3a706a5c0fe3c0cc6d5ae78672a8154` | source support file; upstream documentation provenance recorded, TraceWeaver public claims still controlled by local docs |

## Selected CE Skill Scope

Upstream Compound Engineering `3.9.0` has 38 skill directories. TraceWeaver packages a selected CE-compatible subset plus the TraceWeaver-owned `lfg` alias for static/manual continuity only.

| Packaged file | SHA-256 | Decision |
| --- | --- | --- |
| `skills/ce-brainstorm/SKILL.md` | `5fff7bc3d0c5017b0c0a8936658909db08c01c8506654b5d4db66980cf596933` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/brainstorm-sections.md` | `48a08af2971358d44c186eecd2936a95db333529a47279126e0d59cc8a6da1f4` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/handoff.md` | `710d2c48567a4a57aa5e8aec6e70d3ad4089e201a95f3396bf0a16af052b8d76` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/html-rendering.md` | `80422bfb7b6379b41f48436ed8318c499c222e19e5c254c6b160f43da525d170` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/markdown-rendering.md` | `18786ee86273606e6faae4ab0487fe2703f675f39bd95f32d5a0822ee83de090` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/synthesis-summary.md` | `bc2ae38e65ae93d5f068e342a77eac08f9834367819a73630564513cb1f34666` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-brainstorm/references/universal-brainstorming.md` | `fba728432bbbf61a2c607686f79e44fd4db7ca6a15677ec115b922eacdeb2885` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/SKILL.md` | `570792f439c59bb76942f2f3bbcffc499199fe33e931f06e4cbf74fc586b4ad9` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/bulk-preview.md` | `5b9c86e9c25dddd73b99eb801d4449371256ca3d92dabbc2184cea587494e489` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/diff-scope.md` | `b11a3cbee8372bc4162a2e00898e82317b37c5f56cbf456fe81c3e5fef1ff989` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/findings-schema.json` | `428386c19b1159cc69817fca9a2ee7ae3901a7cb631c19f934b2e8a74cfd724e` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/persona-catalog.md` | `a62b00f4456e2449b3eb56835b166db3b26781cdef937c7d3f491a02a82d87fb` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/review-output-template.md` | `f5100f99c9963d15d4b81f279bb9c837d75cb8d77b9d96d0d7a115ca8db954ff` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/subagent-template.md` | `dd5dfebda3e3ab5cc122d1f1ca29ca0838575803378fa38d31d8413f13d94f62` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/validator-template.md` | `2409a03bfca9016784e327d2c9b125d8a66613bdfe49b96bf52746f09a4d7f73` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-code-review/references/walkthrough.md` | `939b7a00a7fdd1df332429a1718a221d176fc03757f3daac79c0aba80025766f` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/SKILL.md` | `5a9cf1129b09590110c28195b60bc060ecb88a1b09c58826ecd48bb00a4e7dae` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/references/branch-creation.md` | `e1316f4fc685ef161ee4360c2f7b654d604508b0d97a1aff79cce782302125c7` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit-push-pr/references/pr-description-writing.md` | `27d8d119487174a38a73a06181994836b4953dc50438fa6219b12656be32e843` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-commit/SKILL.md` | `18cb95e0ebc8e4e65d534e2c130fd5b8cbbfbc7d1212b73ed834784cf8e52681` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/SKILL.md` | `2e60dbbd7fb7945ebcca68166f54f40cb9653d53ec61f7d4037d09de95ee3447` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/per-action-flows.md` | `f37ae3e19d1b9f6852c939d4a333a728d8cce61d7c93695a15a3748471962454` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound-refresh/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/SKILL.md` | `0f2b5c3a50b9d1b0ec7f93ef42f82d66be5274fb41237e08a1cd9bdfde320f9c` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/assets/resolution-template.md` | `8f184825c7f9e2a5bd6894e7567776cb4cf19e0c2be1c8c0589ccd73d3f00617` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/references/schema.yaml` | `f6d9e2682d9f98742dd12319c05d4715b7d7123d6585a6404deb18c6542c2c24` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/references/yaml-schema.md` | `079395c03f6abf89ac95e227ec31b9db13de6bc414ca7fbe0fc72fcbfa1a53d7` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-compound/scripts/validate-frontmatter.py` | `c165f67c1885875672d45cd447dc75968589a7bb00982c33140fe925d510cf89` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/SKILL.md` | `36a958b77983bc0f97e8b35c7012f71b767b69d2b48af77a5b84a94753c62ffd` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/references/anti-patterns.md` | `9597012ed66df7e52caa38bfaaaab886e2e48b3807f1aa89640139b907976e6b` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/references/defense-in-depth.md` | `56211e8ff51d10df8b46b58d04420ab65f1fd02ec4e4588be4b5af246cc7e046` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-debug/references/investigation-techniques.md` | `4a3f9b18622d4724ac6f259dccffbc416799e572e7b1e6e7091c0b9bd11298af` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/SKILL.md` | `14e91257f75cde2bd25c47a05dce5073cc6122d31d6b7c97b4039b97a6fb314b` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/bulk-preview.md` | `f7fccd3015c8844b3c30bdab7618d6e888e18fcd167f08e728460964e7b56f53` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/findings-schema.json` | `d20a74985ed53841a717472783f44ded059aac0f4ceb78cedcf53437ed2fbfb7` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/open-questions-defer.md` | `4a3bb7fc26637d9e14c74a302d3c938e8faac6d18a0e565679b1bfe90b2716bb` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/review-output-template.md` | `a6072fb31d69add6546626cf9b2d695b87e8c59d8d1aa33f95b2aa08f1bf00c5` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/subagent-template.md` | `37cfd9309b6bb3c9b3b4f9e694cd49ed5f565a81c5a5bafeefd796aef4ee9c02` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/synthesis-and-presentation.md` | `301c9dfaff6427a55e8a66c8c4077060d7a6f6d34e16ebf0eb4017d611722831` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-doc-review/references/walkthrough.md` | `1a74bf4503d8ce01ca969c1577002ac7fcdc4cd829e32501cd327feeee5923da` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/SKILL.md` | `8f23190c7f11e127df5d89d0320c6eb3f96be1c72006ae673a023e0aa88b2884` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/post-ideation-workflow.md` | `82fa2927c510cc84daf02cb4453daeae8d82b0ca76a2ce8473d0df4825173cf9` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/universal-ideation.md` | `331e0c652243cb2fb352e8a9cf77540bcd14b78360f598babb7087b5b898e96b` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-ideate/references/web-research-cache.md` | `4847de9649ce2e14a11a54db4fefdfbb3e72aec24fb2d8812f6fb1aa0db332b1` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/SKILL.md` | `4e8357ce7841f525bee630e9b66cb4c655b9d6d2fbdcc95a16d00909da321d0c` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/deepening-workflow.md` | `750c2a3edb26221f273dad526992e7e37511fd5e48574ed3ca9adb4897545593` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/html-rendering.md` | `80422bfb7b6379b41f48436ed8318c499c222e19e5c254c6b160f43da525d170` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/markdown-rendering.md` | `18786ee86273606e6faae4ab0487fe2703f675f39bd95f32d5a0822ee83de090` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/plan-handoff.md` | `62bd4b10e429ae6081b212fe78c90cfaf60fdee4724e0e15b7650241c24ff98b` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/plan-sections.md` | `ea38629b799daea10edd9325327dc6fa8ffca32f10227d4eb10065c2f9e8214e` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/synthesis-summary.md` | `226c7c09a50a24fff21e4832aec3cafa741cefad1e43ceb0931aa8f652848e5c` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-plan/references/universal-planning.md` | `ef5b19c0dbefcfbdd8779ddfc5ff98e0599072f7a0fc723c6e176e1fa36303eb` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/SKILL.md` | `ea51005586103df29bddd4627cd3768054fe23eee6859db77590b1a414dae072` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/references/full-mode.md` | `a4008cd8e7f920aef35970265d83f8fcc9c493910f96af1ec0a052c6fcbd0e80` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/references/targeted-mode.md` | `cc0b2ca34126683a43f1eb4cc491a074fe2b7e69a8c4ca01d596e12402abbcaf` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/get-pr-comments` | `b673b729fcaefee417b20fd75c39db69746d93c24a0df93ae0a216694f8b1812` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/get-thread-for-comment` | `9c667f06be6dbee8527129f1ee9c2ef44b52587ef03046f0a7a92b2e2d058514` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/reply-to-pr-thread` | `b11cbb9c1cf2b5c351986ea818d123e78709e46d95782a9ca093e1c12d3ecb3e` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-resolve-pr-feedback/scripts/resolve-pr-thread` | `6a52e8f51e8a24dade140582216bd1e8119e12da081c54222d6624b532c7f6d6` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/SKILL.md` | `ddea2aa046c420b6a43e78d1419bdbe877582464ade607ea269d5163219d8feb` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/discover-sessions.sh` | `d3bbccfd78c75497dbae638af790f2578b1ebd3fe16eaf293c73f6770bd59ad8` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-errors.py` | `92eb8a329bf10821b817de356af569fad06099d0df8046f03556e9c0f1a7b5b1` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-metadata.py` | `b5ca7dd2128761a8abcf4620dd37f246515502152a064d698fb1c116111d6342` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-sessions/scripts/extract-skeleton.py` | `76f21a2796792087c2d38d33157531d9dc039a613ab2367c00fd5a0452fdb4c9` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-setup/SKILL.md` | `626696dc061455a1320559b48ef8bced72fe8b87403d3d4d55592627c99ea6ec` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-setup/references/config-template.yaml` | `90ea315104b70ea4651be96f74802d78a9ff60f4d7fa843def4fcf6ec508fa9a` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-setup/scripts/check-health` | `956f34aab13552c7ecb37300368c984973d97bb368755c4dd1d62ec42389ce09` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-strategy/SKILL.md` | `faa9fde011770050f6195f31b7a8e7044a5f2f0299529015990bef8f00c06da2` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-strategy/references/interview.md` | `a1995afc344fda1de05b996a9e74ecc0073a82dc77fb716c0e1b03fc2490bb43` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-strategy/references/strategy-template.md` | `f7f8a85ce53b06604502c697daf525ee33cc37c411f33d4ead8974c3c55886f3` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-test-browser/SKILL.md` | `a7240cf469d410b2ee46fbf24ef19cf70becaefa55549b13a0d4eaa63166a71f` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-test-xcode/SKILL.md` | `27945c9e4a4c72543988698699f5d08d3a7a04d94d1ca7d49b425b9cb169a544` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/SKILL.md` | `3b599c951cfa22a99e335c07940753a7dfc18dc88045beb77172ec412f94a7be` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/references/shipping-workflow.md` | `c693b29e96ede1f23ed6373bbb2688a57c9ac29cee5a05c0448624d94e5fa1fb` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-work/references/tracker-defer.md` | `a5c6a691c868b7717e253b55b492dae047a5ead19a5f8318b72c38a42bdaaaa9` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-worktree/SKILL.md` | `54ad044bab5207b1f860d6bab5d7460ada9cde7cac910866e1eefe21623746e7` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
| `skills/ce-worktree/scripts/worktree-manager.sh` | `8452a993bbfca2301292a770f45b8ce99d815701d1e9040b959cb9b7b09a00b0` | selected skill file; refreshed from CE 3.9.0 package with TraceWeaver overlay where recorded, runtime and clean-swap claims held |
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

Next recommended step: run `tw-traceability-check`, `tw-code-review`, and `tw-doc-review` against the 0.2.1 release scope before publication.
