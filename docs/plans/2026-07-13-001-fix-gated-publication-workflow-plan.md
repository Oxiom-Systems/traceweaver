# Gated Publication Workflow Plan

Date: 2026-07-13
Owner: Oxiom Systems
Beads: `TraceWeaver-aw3y`

## Outcome

Replace the packaged publication engine's blanket alpha hold with a controlled,
single-use execution route so a fully reviewed work package can be committed,
pushed, opened as a PR, and optionally merged without bypassing TraceWeaver.

## Authority

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Requirements: `REQ-TW-053`, `REQ-TW-059`
- Trace: `TRACE-TW-033`, `TRACE-TW-040`
- Verification: `VER-TW-042`, `VER-TW-052`
- Validation question: Can an owner publish an exact reviewed target after all
  TraceWeaver gates pass while direct CE invocation, stale evidence, target
  drift, missing credentials, and unapproved merges remain blocked?
- Owner decision: 2026-07-13 authorization to fix and release the publication
  workflow, reinstall it, and rerun the Vestro publication route.

## Design

1. Keep `tw-commit-push-pr` as the sole user-facing authority owner.
2. Issue a single-use publication authorization capsule only after authority,
   traceability, verification, review, tree identity, target, credentials, and
   explicit human confirmation pass.
3. Permit the packaged CE-derived engine to execute only the capsule's exact
   operations and target; direct invocation remains held.
4. Treat merge as separately authorized and require live PR/check verification.
5. Record the CE body change as a reviewed `REQ-TW-059` overlay/fork delta.

## Verification

- Red fixture: real publication without a capsule is blocked.
- Green fixture: clean exact-target real publication is allowed with a valid
  capsule; all existing negative cases remain blocked.
- Static skill-contract assertions cover direct-invocation blocking, capsule
  fields, exact staging/target rules, and merge/deployment boundaries.
- Run controlled-publication, skill-behavior, install/discovery, generated-view,
  plugin-validation, code-anchor, and repository smoke suites.
- Dogfood the installed candidate by publishing this branch, then verify the
  release workflow creates the exact version tag and GitHub Release.

## Held Boundaries

- A capsule does not waive failed checks or stale evidence.
- Force push, arbitrary remote mutation, and deployment claims remain blocked.
- Merge does not imply deployment; downstream workflows and health require
  separate verification.
