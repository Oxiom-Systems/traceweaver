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

Terminal states are `missing_contract`, `invalid_contract`,
`stale_contract`, `ambiguous_contract`, `held_model_unavailable`, and
`held_model_unattested`. A held receipt is not evidence of a served model or
of authority acceptance. `lfg` is an alias to `tw-auto`; it remains separately
registered so a caller cannot bypass the contract lookup.

PR1 intentionally has no `tw-graph` entry. A later PR can add one lexical
entry and raise `callable_count` without changing the resolver schema.
