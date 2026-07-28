<!-- TRACEWEAVER: file-role=ce-upstream-source-inventory; req=REQ-TW-017; trace=TRACE-TW-005; ver=VER-TW-009 -->
# CE Upstream Source Inventory

Record ID: `TWCORE-CE-SOURCE-PIN-2026-07-28-001`

This package includes a selected Compound Engineering compatibility surface for
TraceWeaver Core static materialization refreshed to CE 3.20.0, with
`ce-sessions` explicitly held at the prior reviewed selected surface and
TraceWeaver-owned `lfg` preserved as a `tw-auto` alias.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source version | `3.20.0` |
| Source tags | `compound-engineering-v3.20.0` |
| Source commit | `5c7cb347d0686663743b87cd7227246ba24f7fa7` |
| Source commit date | `2026-07-22T07:13:29-07:00` |
| Source license | MIT, from source plugin manifest |
| Capture date | 2026-07-28 |
| Source basis | upstream tag fetched from GitHub and folded into the selected TraceWeaver package surface by three-way refresh |
| Full source tree entries | 735 entries: 732 regular files plus 3 symlinks |
| Skills file count | 277 regular files under `skills/` |
| Skill-local agent/persona reference count | 66 regular files under `skills/*/references/agents/` and `skills/*/references/personas/` |
| Upstream main observed after fetch | `a9f6d530d4446d805a3100387dedd86268d7e695` |
| Full regular-file aggregate fingerprint | `a8a6a89112106021edd7bd77d02f6048ba39c808f17579ac9d55a784c2d3aaa8` over lexically sorted SHA-256 lines with root-relative paths for 732 regular files |

## Selected Refresh Decision

On 2026-07-28, upstream `EveryInc/compound-engineering-plugin` was fetched
again after the TraceWeaver Core 0.3.1 release. The latest observed upstream
release tag was `compound-engineering-v3.20.0` at
`5c7cb347d0686663743b87cd7227246ba24f7fa7`.

TraceWeaver refreshed the selected CE-compatible component directories that
still exist upstream. The selected surface now records 196 packaged CE skill
files: 188 refreshed or TraceWeaver-overlaid files plus 8 held `ce-sessions`
files. The TraceWeaver-owned `lfg` alias adds 2 package files outside that
upstream-selected count.

The following decisions are explicit:

- `ce-sessions` is held at the prior reviewed selected surface because CE
  3.20.0 does not provide it as a top-level upstream skill and `tw-sessions`
  still delegates to the packaged compatibility engine.
- `skills/lfg/SKILL.md` remains a TraceWeaver alias to `tw-auto`; upstream CE
  `lfg` is not selected and raw CE autopilot is not packaged as the user-facing
  TraceWeaver route.
- upstream-only CE 3.20.0 skills (`ce-babysit-pr`, `ce-dogfood`, `ce-explain`,
  `ce-handoff`, `ce-optimize`, `ce-polish`, `ce-pov`, `ce-product-pulse`,
  `ce-promote`, `ce-proof`, `ce-riffrec-feedback-analysis`,
  `ce-simplify-code`, `ce-sweep`, and upstream `lfg`) remain held/unselected
  pending wrapper/backlog classification and TraceWeaver authority review.
- selected standalone `agents/` files are retained as legacy static material
  from the prior selected inventory; CE 3.20.0 skill-local agent/persona
  references are recorded in the selected skill table instead of being treated
  as root agent runtime proof.

## Manifest And Support Hashes

| Source file | SHA-256 | Decision |
| --- | --- | --- |
| `.agents/plugins/marketplace.json` | `78a5b4d7f8e8c410f2c17317744dbb2c7023fc77e6d76b0c6f5448911033c119` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.agy/plugin.json` | `08d9ecea385d331e467feac7883f69d86ae6984062f252fc23417c6358023002` | source support symlink to root `plugin.json`; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.claude-plugin/plugin.json` | `5d934a51e74c504782183461cca84c7820eda29e006d9e7be018b29595b179b1` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.codex-plugin/plugin.json` | `66a24a32d63bee2fb7d49034c2384ebba086794db86a6e5f818ff830d5bdd342` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.cursor-plugin/plugin.json` | `bf8a14cd9fd4d730b31931b3a9f5d9e9d99133e7f6b58e0d22a5d34f862cbd5d` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `.opencode/plugins/compound-engineering.js` | `04dbfa78837ee3c5ef4ecca0b46c662f47581b4e6c45974cc6b99a7688d65168` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |
| `README.md` | `25cae4aace95da623346cc545ca1982722188004801def69207134179593f8a4` | source support file; upstream package provenance recorded, TraceWeaver public/runtime claims still controlled by local records |

## Selected File Authority

The controlling selected-file list and hashes are recorded in
`docs/validation/traceweaver-core-11-ce-runtime-inventory.md`.

Unit 2 materializes only selected CE files from that inventory. Adding any CE
file outside that inventory requires a validation delta before it can be
treated as package authority.

## Agent Boundary

CE 3.20.0 carries agent/persona material in skill-local references. The
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

Next recommended step: complete independent code/document review and exact
release evidence, then use `tw-commit-push-pr` with a single-use capsule for the
exact TraceWeaver Core 0.3.2 branch and PR. After green live checks, issue a
separate merge-only capsule, merge, and verify the automatic tag and GitHub
Release against the merge commit. Deployment, package-ready, release-ready,
runtime-equivalence, clean-replacement, upstream-ready, and
autonomous-publication claims remain held.
