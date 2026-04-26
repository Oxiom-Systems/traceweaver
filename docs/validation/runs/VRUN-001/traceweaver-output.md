# VRUN-001 TraceWeaver Output

Workflow: `systems-engineering-traceability` in Standard mode.

Starting commit: `3a031545587a643275a62a8050ddeadaf9a0e728`

Final TraceWeaver commit: `6089e99b1f59750f96bf940a6a0b226751f44b9a`

## Artifacts Produced

| Artifact | Purpose |
|---|---|
| `docs/requirements/shipping-quote.md` | Approved need and system requirements |
| `docs/plans/shipping-quote-plan.md` | Task-to-requirement plan links |
| `docs/traceability/shipping-quote.md` | Matrix from need to requirement to implementation to V&V |
| `docs/atp/shipping-quote-atp.md` | ATP entries tied to requirement IDs |
| `docs/results/shipping-quote-results.md` | Result record tied to SREQ/ATP/VER IDs |
| `src/cart.js` | `shippingQuote` implementation |
| `test/cart.test.js` | Requirement-labelled verification tests |

## Key Trace Links

| Link | Evidence |
|---|---|
| Need to requirements | NEED-SHIP-001 -> SREQ-SHIP-001, SREQ-SHIP-002 |
| Requirements to plan | SREQ-SHIP-001/SREQ-SHIP-002 -> TASK-SHIP-001, TASK-SHIP-002, TASK-SHIP-003 |
| Requirements to implementation | TRACE-SHIP-001/TRACE-SHIP-002 -> `src/cart.js#shippingQuote`, `test/cart.test.js` |
| Requirements to ATP | SREQ-SHIP-001 -> ATP-SHIP-001; SREQ-SHIP-002 -> ATP-SHIP-002 |
| Requirements to results | SREQ-SHIP-001/SREQ-SHIP-002 -> RESULT-SHIP-001 |
| Verification | VER-SHIP-001 -> `npm test` |
| Validation path | VAL-SHIP-001 accepted for dummy module validation; UI validation remains deferred debt |

## Test Evidence

Command:

```text
npm test
```

Timing:

```text
real 0.30
user 0.11
sys 0.06
```

Result summary:

```text
1..5
# tests 5
# suites 0
# pass 5
# fail 0
# cancelled 0
# skipped 0
# todo 0
```

## Observed Traceability

The TraceWeaver run created an auditable document chain:

```text
NEED-SHIP-001
-> SREQ-SHIP-001 / SREQ-SHIP-002
-> TASK-SHIP-001 / TASK-SHIP-002 / TASK-SHIP-003
-> src/cart.js#shippingQuote
-> ATP-SHIP-001 / ATP-SHIP-002
-> VER-SHIP-001
-> RESULT-SHIP-001
-> VAL-SHIP-001
```

It also recorded `TD-SHIP-001` for UI wording validation that is outside the
dummy module scope.
