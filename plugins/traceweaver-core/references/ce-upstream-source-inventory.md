# CE Upstream Source Inventory

Record ID: `TWCORE-CE-SOURCE-PIN-2026-05-01-002`

This package includes a selected Compound Engineering compatibility surface for
TraceWeaver U6b Unit 2 static materialization.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source version | `3.4.1` |
| Source tags | `compound-engineering-v3.4.1`, `cli-v3.4.1` |
| Source commit | `d685f0794863a73ae3ca3620d2ae747510e9eaa0` |
| Source license | MIT, from source plugin manifest |
| Capture date | 2026-05-01 |
| Source basis | upstream tag fetched from GitHub plus locally installed plugin cache for the pinned version |
| Full cache aggregate fingerprint | `6892159ad685e59230514f9e58fb7ffd06052d84da643c73ac95b787e3c60d23` |

## Selected File Authority

The controlling file list and hashes are recorded in
`docs/validation/traceweaver-core-11-ce-runtime-inventory.md`.

Unit 2 materializes only selected CE files from that inventory. Adding any CE
file outside that inventory requires a validation delta before it can be treated
as package authority.

`skills/lfg/SKILL.md` is a selected TraceWeaver package delta over the CE source
name. It is retained for familiar entrypoint continuity, but the packaged file
must delegate to `tw-auto` and must not run raw CE autopilot directly. Its
package hash is controlled by the inventory rather than by the upstream CE
source hash.

## Agent Boundary

The pinned source package contains 49 selected CE agent files.
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

Next recommended step: review the refreshed U6b Unit 2 evidence, then create
narrow U7 alpha claims only if review stays clean.
