# CE Upstream Source Inventory

Record ID: `TWCORE-CE-SOURCE-PIN-2026-05-01-001`

This package includes a selected Compound Engineering compatibility surface for
TraceWeaver U6b Unit 2 static materialization.

## Source Pin

| Field | Value |
| --- | --- |
| Source package | Compound Engineering plugin |
| Source repository | `https://github.com/EveryInc/compound-engineering-plugin` |
| Source version | `3.3.2` |
| Source tags | `compound-engineering-v3.3.2`, `cli-v3.3.2` |
| Source commit | `e5b397c9d1883354f03e338dd00f98be3da39f9f` |
| Source license | MIT, from source plugin manifest |
| Capture date | 2026-05-01 |
| Source basis | locally installed plugin cache for the pinned version |
| Full cache aggregate fingerprint | `53e5dfdb773f9120b7854a12b0d666666220a26fb2cde66fa0b87b8fdfa764f4` |

## Selected File Authority

The controlling file list and hashes are recorded in
`docs/validation/traceweaver-core-11-ce-runtime-inventory.md`.

Unit 2 materializes only selected CE files from that inventory. Adding any CE
file outside that inventory requires a validation delta before it can be treated
as package authority.

## Agent Boundary

The pinned source package contains 49 selected CE agent files. Two previously
inventoried CLI readiness agent rows are absent from the pinned upstream tag and
the local source package:

- `agents/ce-cli-agent-readiness-reviewer.agent.md`
- `agents/ce-cli-readiness-reviewer.agent.md`

Those paths are excluded from Unit 2 materialization. CE agent-backed runtime
equivalence remains held until runtime evidence proves agent loading and
workflow behavior.

## Stale Reset

This source map resets to held if:

- the CE source version or tag changes;
- the source commit changes;
- selected CE file hashes change;
- the source license or package shape changes;
- TraceWeaver packages any CE file outside the selected inventory;
- static evidence is used to claim clean CE replacement or runtime-equivalent
  agent behavior.

Next recommended step: review the U6b Unit 2 evidence, then create narrow U7
alpha claims only if review stays clean.
