<!-- TRACEWEAVER: file-role=ce-upstream-source-inventory; req=REQ-TW-017; trace=TRACE-TW-005; ver=VER-TW-009 -->
# CE Upstream Source Inventory

Record ID: `TWCORE-CE-SOURCE-PIN-2026-06-12-001`

This package includes a selected Compound Engineering compatibility surface for
TraceWeaver Core static materialization refreshed to CE 3.12.0.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source version | `3.12.0` |
| Source tags | `compound-engineering-v3.12.0` |
| Source commit | `4719dc509fdc45656a830e3ed6060f674e206076` |
| Source license | MIT, from source plugin manifest |
| Capture date | 2026-06-12 |
| Source basis | upstream tag fetched from GitHub and folded into the selected TraceWeaver package surface |
| Full cache aggregate fingerprint | `f7225f23ca97949dc1de63f1d347d45f9acd0395450b0efff754a3430b63c3cd` |

## Selected File Authority

The controlling selected-file list and hashes are recorded in
`docs/validation/traceweaver-core-11-ce-runtime-inventory.md`.

Unit 2 materializes only selected CE files from that inventory. Adding any CE
file outside that inventory requires a validation delta before it can be
treated as package authority.

`skills/lfg/SKILL.md` is a selected TraceWeaver package delta over the CE
source name. It is retained for familiar entrypoint continuity, but the
packaged file must delegate to `tw-auto` and must not run raw CE autopilot
directly. Its package hash is controlled by the inventory rather than by the
upstream CE source hash.

## Agent Boundary

The pinned source package contains 43 selected CE agent files.
CE agent-backed runtime equivalence remains held until runtime evidence proves
agent loading and workflow behavior.

## Stale Reset

This source map resets to held if:

- the CE source version or tag changes;
- the source commit changes;
- selected CE file hashes change;
- the packaged `skills/lfg/SKILL.md` alias stops delegating to `tw-auto`;
- the source license or package shape changes;
- TraceWeaver packages any CE file outside the selected inventory;
- static evidence is used to claim clean CE replacement or runtime-equivalent
  agent behavior.

Next recommended step: run the 0.2.3 release verification bundle and keep clean
replacement/runtime-equivalence claims held unless those evidence gates pass.
