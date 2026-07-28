---
id: TW-RELEASE-EVIDENCE-2026-07-28-0.3.2
status: local_verification_and_independent_review_clean_publication_pending
date: 2026-07-28
version: 0.3.2
tag: traceweaver-core--v0.3.2
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: bc79fb669626f1cfddfdd98ac883d4abd90ba05c4a6e2f532b891d00fac68d7a
requirements:
  - REQ-TW-017
  - REQ-TW-018
  - REQ-TW-020
  - REQ-TW-021
  - REQ-TW-043
  - REQ-TW-052
  - REQ-TW-053
  - REQ-TW-059
trace_ids:
  - TRACE-TW-005
  - TRACE-TW-006
  - TRACE-TW-009
  - TRACE-TW-033
  - TRACE-TW-046
verification_ids:
  - VER-TW-009
  - VER-TW-010
  - VER-TW-012
  - VER-TW-042
validation_ids:
  - VAL-TW-008
  - VAL-TW-011
---

# TraceWeaver Core 0.3.2 Release Evidence

## Authority and identity

- The owner explicitly directed TraceWeaver to check upstream, fold in the
  update, release a tag, and merge on 2026-07-28.
- Baseline: `origin/main` at
  `f9c405816ea088716d282d1b906e7d57065a6dec`.
- Upstream release: `compound-engineering-v3.20.0` at
  `5c7cb347d0686663743b87cd7227246ba24f7fa7`.
- Exact authorized release: TraceWeaver Core `0.3.2`, tag
  `traceweaver-core--v0.3.2`.
- Publication mechanism:
  `.github/workflows/release-on-version-bump.yml`, after the reviewed version
  bump lands on `main`.

## Selected refresh

- 17 selected CE-derived component directories refreshed;
- 128 upstream-selected paths changed between CE `3.14.3` and `3.20.0`:
  81 modified and 47 added;
- 188 refreshed or overlaid selected source files recorded;
- 8 `ce-sessions` compatibility files held;
- TraceWeaver-owned `lfg` preserved;
- 14 upstream-only top-level skills remain unselected, including 6 introduced
  since CE 3.14.3;
- full upstream regular-file aggregate SHA-256:
  `a8a6a89112106021edd7bd77d02f6048ba39c808f17579ac9d55a784c2d3aaa8`.

## Prepublication verification

The exact reviewed tree must establish:

- provenance and selected inventories agree;
- CE closure reports no missing or untracked selected support files;
- plugin manifests and compact V&V JSON parse;
- plugin validation, no-publication, controlled-publication, scoped review,
  code traceability, syntax, and whitespace checks pass;
- known baseline-only failures are reproduced on `origin/main` and are not
  represented as regressions fixed by this release;
- independent review accepts the exact integration and release tree;
- the remote tag and GitHub Release are absent before publication;
- live PR checks pass before merge.

Observed on the final prepublication candidate:

| Check | Result |
| --- | --- |
| `ruby scripts/traceweaver-audit-ce-closure` | pass; 19 entrypoints, 198 selected files, 119 support references, no missing/untracked |
| `claude plugin validate --strict plugins/traceweaver-core` | pass |
| `scripts/traceweaver-smoke-no-publication` | pass |
| `scripts/traceweaver-smoke-controlled-publication` | pass with sandbox GPG signing disabled for the temporary local-remote fixture |
| `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior` | pass; active-host selected CE hashes reported stale as held |
| `scripts/traceweaver-smoke-scoped-review` | pass |
| `scripts/traceweaver-smoke-code-traceability` | pass |
| implementation-mode exact changed-file scan | pass; zero findings |
| JSON, Python, shell, conflict-marker, and whitespace checks | pass |
| independent correctness review | clean after repair; no actionable findings |
| independent security review | clean after repair; no actionable findings |
| independent documentation/coherence review | clean after repair; no actionable findings |
| systems-engineering audit-closure smoke | pre-existing baseline failure reproduced on `origin/main`; tracked separately |

The exact review digest, final verification results, PR, checks, merge commit,
workflow run, and released tag identity are recorded only after those facts
exist.

## Postpublication verification

After merge, the version-bump workflow must succeed, the GitHub Release must be
non-draft and non-prerelease, and the peeled
`traceweaver-core--v0.3.2` tag must equal the merge commit on `main`.

## Held claims

This release does not prove or authorize:

- clean CE replacement or full upstream parity;
- `ce-sessions` currentness with CE `3.20.0`;
- packaging or wrapping the newly introduced upstream-only skills;
- off-host CE model execution, including code/document peer review,
  plan/brainstorm elevation, and cross-model unit-workspace implementation;
- runtime-equivalent CE behavior or active-host currentness;
- dynamic discovery, enforcing mode, or slash-command behavior;
- autonomous publication, deployment, dogfood, or productivity improvement;
- any future merge or release.

## Current gate

`ready_for_publication_capsule`: exact-tree reviews and local verification are
clean. Publish the reviewed branch/PR under one single-use capsule, wait for
green live checks, merge under a separate merge-only capsule, then verify the
automatic tag and GitHub Release.
