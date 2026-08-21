<!-- TRACEWEAVER: file-role=skill-execution-contract-guide; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

# Skill Execution Contract (SEC)

Every callable TraceWeaver skill and `lfg` resolves exactly one static contract
from `skill-execution-contracts.yml` before it performs control-path routing.
The resolver reads only that registry and the three named authority roots. It
does not search the repository, infer a missing source, merge competing
contracts, or grant authority.

The resolver emits two distinct identities:

- `static_definition_hash` is the canonical SHA-256 identity of the selected
  immutable registry definition.
- `invocation_receipt_id` identifies this particular resolver invocation and
  includes the static hash, requested skill, alias target, baseline identity,
  route, and requested model.

Successful lookup returns `resolved`. Refusal states are `missing_contract`,
`invalid_contract`, `stale_contract`, and `ambiguous_contract`. SEC lookup does
not dispatch a child and therefore cannot produce `held_model_unavailable` or
`held_model_unattested`; those states belong only to an actual native-child
route receipt. `lfg` is an alias to `tw-auto`; it remains separately registered
so a caller cannot bypass the contract lookup.

The registry generator derives anchor/reference metadata from the exact
registered `SKILL.md` paths and binds every contract to the corresponding skill
bytes. A source/package mismatch is `stale_contract`, including when a skill's
behavior changes without changing its trace anchors. The generator never
searches the repository. `tw-graph` is a normal registered callable; Graphify
remains optional enrichment.
