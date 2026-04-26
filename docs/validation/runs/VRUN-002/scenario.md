# VRUN-002 Scenario

Scenario ID: VRUN-002

Scenario: Existing module audit

Purpose: Prove the traceability skill finds dark-code candidates, missing
validation paths, missing authority links, and unapproved inferred requirements
in an existing module.

Date / session: 2026-04-26 / VRUN-002 dummy validation

## Starting State

Starting repository: `.context/validation/VRUN-002/seed-repo`

Starting commit: `29e309d4b9b4b1424ace91560125fd5ad6155814`

Starting branch/worktree:

- Baseline: `.context/validation/VRUN-002/baseline-repo`
- TraceWeaver Audit: `.context/validation/VRUN-002/traceweaver-repo`

Both runs started from the same seed commit.

## Baseline Workflow

Workflow: Existing Agent Skills review style without explicit
`systems-engineering-traceability`.

Exact baseline prompt:

```text
Use normal Agent Skills review workflow. Do not explicitly use
systems-engineering-traceability.

Task: Audit the existing discount policy module. The module has working tests
but no requirements, owner record, validation path, or policy source document.
Identify unclear behavior, missing tests, ownership concerns, and release risks.
Do not change production code.
```

## TraceWeaver Workflow

Workflow: `systems-engineering-traceability` in Audit mode.

Exact TraceWeaver prompt:

```text
Use systems-engineering-traceability in Audit mode.

Task: Audit the existing discount policy module. The module has working tests
but no requirements, owner record, validation path, or policy source document.
Identify dark-code candidates, missing authority links, missing verification or
validation evidence, draft inferred requirements, traceability debt, and human
decisions. Do not invent approved authority and do not recommend deletion solely
because traceability is missing. Do not change production code.
```

## Artifacts Available At Start

- `README.md`
- `package.json`
- `src/discounts.js`
- `test/discounts.test.js`

## Timing Method

Timing used `/usr/bin/time -p npm test` for test execution time only.

End-to-end authoring elapsed time was not measured because both runs were
performed inside one Codex session and would not be a fair human workflow timing
sample.

## Validation Control Notes

- Baseline output was created before TraceWeaver Audit output.
- Both runs used the same starting commit and same module audit target.
- This was a dummy validation run, not a production project run.
- Human usefulness/noise and confidence ratings still need confirmation by the
  project owner before this run should be treated as fully closed.
