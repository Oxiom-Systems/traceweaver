# VRUN-003 Scenario

Scenario ID: VRUN-003

Scenario: Low-risk Lite mode

Purpose: Prove the traceability skill avoids over-process while still requiring
a minimal matrix artifact for a small, clear documentation/discoverability
change.

Date / session: 2026-04-26 / VRUN-003 dummy validation

## Starting State

Starting repository: `.context/validation/VRUN-003/seed-repo`

Starting commit: `cfe6bb3e1f70dcc118d446c456631a67bf32fd5e`

Starting branch/worktree:

- Baseline: `.context/validation/VRUN-003/baseline-repo`
- TraceWeaver Lite: `.context/validation/VRUN-003/traceweaver-repo`

Both runs started from the same seed commit.

## Baseline Workflow

Workflow: Existing Agent Skills style without explicit
`systems-engineering-traceability`.

Exact baseline prompt:

```text
Use normal Agent Skills workflow. Do not explicitly use
systems-engineering-traceability.

Task: Make the existing CLI quick reference easier to find by adding a short
README Documentation link to docs/cli.md. This is a low-risk documentation
discoverability change. Keep the change small.
```

## TraceWeaver Workflow

Workflow: `systems-engineering-traceability` in Lite mode.

Exact TraceWeaver prompt:

```text
Use systems-engineering-traceability in Lite mode.

Task: Make the existing CLI quick reference easier to find by adding a short
README Documentation link to docs/cli.md. This is a low-risk documentation
discoverability change. Keep the change small. Add only a minimal matrix row or
equivalent accepted matrix artifact; do not create a full requirements package,
ATP, or result record unless the change grows beyond discoverability.
```

## Artifacts Available At Start

- `README.md`
- `docs/cli.md`
- `docs/contributing.md`

## Timing Method

Timing used `/usr/bin/time -p rg -n "CLI quick reference|docs/cli.md" README.md docs`
for verification command time only.

End-to-end authoring elapsed time was not measured because both runs were
performed inside one Codex session and would not be a fair human workflow timing
sample.

## Validation Control Notes

- Baseline output was created before TraceWeaver Lite output.
- Both runs used the same starting commit and same behavioral prompt.
- This was a dummy validation run, not a production project run.
- Human usefulness/noise and confidence ratings still need confirmation by the
  project owner before this run should be treated as fully closed.
