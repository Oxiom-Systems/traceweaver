---
record_type: traceweaver_authority_gate
schema_version: 1
gate_id: TW-AUTH-GATE-2026-08-21-REQ-TW-037-056-057-CONVERGENCE-IMPLEMENTATION-001
date: "2026-08-21"
owner: Oxiom Systems
status: authorized_bounded_implementation_only
requirements: [REQ-TW-037, REQ-TW-056, REQ-TW-057]
trace_id: TRACE-TW-067
verification_id: VER-TW-087
validation_id: VAL-TW-035
accepted_authority_receipt: docs/validation/traceweaver-2026-08-21-lean-convergence-formal-authority-acceptance.md
accepted_review_identity: sha256:176c62102ae36bd73fbe408d131d5aadc4b53805e4c4e96b74c14645d331646d
baseline_hash_sha256: 6029a74f969c8f08efac96c6acb30cdd0078b4b798e5cebc1d7061aef6194d5a
publication_authority: none
---

# Lean-Convergence Implementation Authority Gate

## Decision

Oxiom Systems authorizes one bounded implementation slice for the formally
accepted REQ-TW-037, REQ-TW-056, and REQ-TW-057 meaning. Work is limited to the
persistent review-series ledger/controller, deterministic review router,
logical canonical-protocol resolution, canonical/mirror policy consolidation,
cross-wrapper state handoff, terminal/workflow receipt fields, deterministic
ATP-TW-042 fixtures, their CI invocation, and the evidence needed to execute
VER-TW-087.

This gate does not authorize Terra routing, `tw-graph`, Graphify behavior,
semantic HTML, integrated product validation, release automation, publication,
release, deployment, broad runtime equivalence, or clean replacement.

## Implementation contract

- Accepted-review identity is derived from exactly
  `semantic_authority_digest`, `behavior_digest`, `verification_digest`, and
  `policy_epoch`.
- Raw hashes, paths, process/Git coordinates, generated views, Graphify state,
  installation state, and publication preparation remain audit metadata.
- An existing matching accepted review is required before zero-review
  `mechanical_closure`; otherwise review remains required.
- Applicable authority meaning changes route one document reviewer. Behavior,
  linked-test, or meaningful verification changes route one code reviewer.
- One discovery and one routine repair-verification cycle are available. One
  final cycle requires an owner- or approved change-control-authority receipt
  bound to the series, retained finding fingerprint, P0/P1/blocking-P2 severity
  and context, authorization reason, and final-cycle limit.
- Repair verification revisits only retained findings and genuine in-scope
  repair regressions. Non-blocking wording/style debt cannot open another
  cycle.

## Allowed writes

- `plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-review-series`
- `plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-route-review`
- canonical and `tw-auto`-packaged mirrors of the scoped-review protocol,
  controlled-autonomy policy, automation-loop state, terminal receipt, and
  workflow profile
- convergence handoff clauses in `tw-auto`, `tw-work`, `tw-doc-review`, and
  `tw-code-review`
- `scripts/traceweaver-smoke-review-series-convergence` and only proven-needed
  corrections to scoped-review, workflow-profile, no-publication, and
  runtime-disabled TW-skill smokes
- the convergence step in `.github/workflows/smoke-tests.yml`
- this gate, the accepted convergence V&V files, RED/GREEN evidence,
  RESULT-TW-042 / VER-TW-087 status, and mechanically refreshed authority
  projections

No other working-tree file is authorized by this gate.

## Required gates

1. Current expected-failing ATP-TW-042 evidence before controller mutation.
2. Reviewed V&V definition and valid V&V capsule.
3. Green convergence, scoped-review, workflow-profile, no-publication, and
   runtime-disabled TW-skill smokes.
4. Code-anchor and traceability closure for behavior-bearing paths.
5. One bounded code review. Only retained blocking findings or genuine repair
   regressions may enter one routine repair-verification cycle.
6. No staging or publication until a later explicit capsule.

## Next command

`/tw-work` implement only this convergence slice and execute VER-TW-087. Keep
all later pillars and publication held.
