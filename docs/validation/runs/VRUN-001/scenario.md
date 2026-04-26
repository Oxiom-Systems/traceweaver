# VRUN-001 Scenario

Scenario ID: VRUN-001

Scenario: New feature with document chain

Purpose: Prove the traceability skill maintains the chain from requirement to
plan task to implementation to ATP/results.

Date / session: 2026-04-26 / VRUN-001 dummy validation

## Starting State

Starting repository: `.context/validation/VRUN-001/seed-repo`

Starting commit: `3a031545587a643275a62a8050ddeadaf9a0e728`

Starting branch/worktree:

- Baseline: `.context/validation/VRUN-001/baseline-repo`
- TraceWeaver: `.context/validation/VRUN-001/traceweaver-repo`

Both runs started from the same seed commit.

## Baseline Workflow

Workflow: Existing Agent Skills style without explicit
`systems-engineering-traceability`.

Exact baseline prompt:

```text
Use normal Agent Skills workflow. Do not explicitly use
systems-engineering-traceability.

Task: In the cart pricing demo, add a shippingQuote helper. Customers should
see whether shipping is free before checkout. Orders at or above 5000 cents get
free shipping. Orders below that subtotal use a 695 cent standard domestic
shipping charge. Return the shipping price, whether free shipping applied, and a
short reason string. Add requirements, a plan, implementation, tests, and a
result record.
```

## TraceWeaver Workflow

Workflow: `systems-engineering-traceability` in Standard mode.

Exact TraceWeaver prompt:

```text
Use systems-engineering-traceability in Standard mode.

Task: In the cart pricing demo, add a shippingQuote helper. Customers should
see whether shipping is free before checkout. Orders at or above 5000 cents get
free shipping. Orders below that subtotal use a 695 cent standard domestic
shipping charge. Return the shipping price, whether free shipping applied, and a
short reason string. Add requirements, a plan, implementation, tests, a
traceability matrix, ATP entries, and a result record. Preserve links from need
to requirement to plan task to implementation to verification and validation.
```

## Artifacts Available At Start

- `README.md`
- `package.json`
- `src/cart.js`
- `test/cart.test.js`

## Timing Method

Timing used `/usr/bin/time -p npm test` for test execution time only.

End-to-end authoring elapsed time was not measured because both runs were
performed inside one Codex session and would not be a fair human workflow timing
sample.

## Validation Control Notes

- Baseline output was created before TraceWeaver output.
- Both runs used the same starting commit and same behavioral feature request.
- This was a dummy validation run, not a production project run.
- Human usefulness/noise and confidence ratings still need confirmation by the
  project owner before this run should be treated as fully closed.
