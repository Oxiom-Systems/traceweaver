<!-- TRACEWEAVER: file-role=ce-upstream-source-inventory; req=REQ-TW-017; trace=TRACE-TW-005; ver=VER-TW-009 -->
# CE Upstream Source Inventory

Record ID: `TWCORE-CE-SOURCE-PIN-2026-06-24-001`

This package includes a selected Compound Engineering compatibility surface for
TraceWeaver Core static materialization refreshed to CE 3.14.3, with
`ce-sessions` explicitly held at the prior reviewed selected surface and
TraceWeaver-owned `lfg` preserved as a `tw-auto` alias.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source version | `3.14.3` |
| Source tags | `compound-engineering-v3.14.3` |
| Source commit | `e176a6db46b3de9c4e724a3ab5d7dd1d0bf60a33` |
| Source commit date | `2026-06-24T13:33:10-07:00` |
| Source license | MIT, from source plugin manifest |
| Capture date | 2026-06-24 |
| Source basis | upstream tag fetched from GitHub and folded into the selected TraceWeaver package surface by three-way refresh |
| Full source tree entries | 527 entries: 526 regular files plus symlink `.agy/skills -> ../skills` |
| Skills file count | 196 regular files under `skills/` |
| Skill-local agent/persona reference count | 57 regular files under `skills/*/references/agents/` and `skills/*/references/personas/` |
| Upstream main observed after fetch | `1284290af27139c2df192488099626688fd4898b` |
| Full regular-file aggregate fingerprint | `eaea83aa1ba3c5cdc43f6710a595b038d9193ad841ba59441230c1c61dab9994` over sorted SHA-256 output for 526 regular files |

## Selected Refresh Decision

On 2026-06-24, upstream `EveryInc/compound-engineering-plugin` was fetched
again after the TraceWeaver Core 0.2.6 release. The latest observed upstream
release tag was `compound-engineering-v3.14.3` at `e176a6db46b3de9c4e724a3ab5d7dd1d0bf60a33`.

TraceWeaver refreshed the selected CE-compatible component directories that
still exist upstream. The selected surface now records 151 packaged skill files:
143 refreshed or TraceWeaver-overlaid files plus 8 held `ce-sessions` files.

The following decisions are explicit:

- `ce-sessions` is held at the prior reviewed selected surface because CE
  3.14.3 no longer provides it as a top-level upstream skill and `tw-sessions`
  still delegates to the packaged compatibility engine.
- `skills/lfg/SKILL.md` remains a TraceWeaver alias to `tw-auto`; upstream CE
  `lfg` is not selected and raw CE autopilot is not packaged as the user-facing
  TraceWeaver route.
- upstream-only CE 3.14.3 skills (`ce-dogfood-beta`, `ce-optimize`,
  `ce-polish`, `ce-product-pulse`, `ce-promote`, `ce-proof`,
  `ce-riffrec-feedback-analysis`, `ce-simplify-code`, `ce-work-beta`, and
  upstream `lfg`) remain held/unselected pending wrapper/backlog classification
  and TraceWeaver authority review.
- selected standalone `agents/` files are retained as legacy static material
  from the prior selected inventory; CE 3.14.3 skill-local agent/persona
  references are recorded in the selected skill table instead of being treated
  as root agent runtime proof.

## Manifest And Support Hashes

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.agents/plugins/marketplace.json` | `78a5b4d7f8e8c410f2c17317744dbb2c7023fc77e6d76b0c6f5448911033c119` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.agy/plugin.json` | `ea2aadd7846a130de36c008213bd378f895d4fa46c4843e33d774355c1e2f28d` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.claude-plugin/plugin.json` | `dea03ec4dbdfe5c4376b573d93b240e6869d7526772f4da60ba7a1f810826532` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.codex-plugin/plugin.json` | `f971b70cc4fcc4a97c7133367bf5df3fb3bfb319fd28471b67fa868a7f2009f1` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.cursor-plugin/plugin.json` | `52af57d096d59dc169c3f869af2abbf6dc4b657f7fa2bdb6405265075b57ab8c` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.opencode/plugins/compound-engineering.js` | `4e263f7c7231791577ad3211d6f026693dc15fad24c01c886f0a74d5e5d5fc99` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `README.md` | `0d58ce2f36088b5664d270025f32f880fa23f2c5332c95536a52de31aaea7b02` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |

## Selected File Authority

The controlling selected-file list and hashes are recorded in
`docs/validation/traceweaver-core-11-ce-runtime-inventory.md`.

Unit 2 materializes only selected CE files from that inventory. Adding any CE
file outside that inventory requires a validation delta before it can be
treated as package authority.

## Agent Boundary

CE 3.14.3 shifted agent/persona material into skill-local references. The
selected file inventory records those skill-local references where selected
refreshed skills use them. The older standalone `plugins/traceweaver-core/agents/`
material remains static legacy continuity evidence only. Agent-backed runtime
equivalence remains held until runtime evidence proves agent loading and
workflow behavior.

## Stale Reset

This source map resets to held if:

- the CE source version, tag, or commit changes;
- selected CE file hashes change;
- the packaged `skills/lfg/SKILL.md` alias stops delegating to `tw-auto`;
- `ce-sessions` is changed, removed, or claimed current without a new reviewed
  compatibility decision;
- the source license or package shape changes;
- TraceWeaver packages any CE file outside the selected inventory;
- static evidence is used to claim clean CE replacement, runtime-equivalent
  agent behavior, release-ready status, package-ready status, upstream-ready
  status, or publication readiness.

Next recommended step: use the controlled `tw-commit-push-pr` route for a draft
PR only. Stage only the scoped CE refresh and evidence files listed in the
PR-ready file set, exclude
`artifacts/social/traceweaver-html5-slides/animated-render/traceweaver-prompt-to-proof-html5-animated-video.mp4`,
and keep tag, release, deploy, package-ready, release-ready, runtime-driver,
clean-replacement, and broader publication claims held unless explicitly
approved.
