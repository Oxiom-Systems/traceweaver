---
title: "release: TraceWeaver Core 0.3.1 Graphify wrapper integration"
type: release
status: local_verification_passed_exact_tree_review_pending
date: 2026-07-23
workflow_profile: L1
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_ref: 99ee6d8e2bc27c3837d938c40553879db5e5b3b0
requirements:
  - REQ-TW-020
  - REQ-TW-053
  - REQ-TW-089
  - REQ-TW-090
---

# TraceWeaver Core 0.3.1 Release Plan

## Outcome

Publish the already merged, verified, reviewed, and owner-accepted optional
Graphify wrapper integration as TraceWeaver Core `0.3.1`.

The release is a patch version because it adds optional advisory integration
without changing the authority model, requiring Graphify, or claiming runtime
enforcement.

## Authority

- Owner instruction on 2026-07-23: merge PR #49, bump the tag, and release.
- Merged feature commit: `7ba5814133d3787b21e7b8f92c6b89177fac9cf0`.
- Main merge commit: `99ee6d8e2bc27c3837d938c40553879db5e5b3b0`.
- Feature trace: `TRACE-TW-064`.
- Feature verification: `VER-TW-084`.
- Owner validation: `VAL-TW-032`.
- Narrow release-claim chain: REQ-TW-020 -> TRACE-TW-006 -> VER-TW-012 ->
  VAL-TW-008.
- Controlled publication chain: REQ-TW-053 -> TRACE-TW-033 -> VER-TW-042 ->
  VAL-TW-011.
- Release mechanism: REQ-TW-020, REQ-TW-053, and the reviewed
  `.github/workflows/release-on-version-bump.yml`.

## Scope

- bump Claude marketplace and Codex, Claude Code, Antigravity, and Cursor
  plugin manifests from `0.3.0` to `0.3.1`;
- update current public install and version guidance to `0.3.1`;
- add the `0.3.1` CHANGELOG entry;
- record exact release authority, verification, and held boundaries;
- refresh the canonical requirements hash, Intent Contract snapshot, matrix,
  and generated traceability views after the release-status change.

Historical `0.3.0` release evidence and one-time ratification documents remain
unchanged.

## Verification

- all five release-facing version values equal `0.3.1`;
- current public install/tag references equal
  `traceweaver-core--v0.3.1`;
- JSON/YAML parsing passes;
- focused Graphify routing smoke passes;
- Codex and Antigravity discovery smokes pass;
- baseline verify and generated-view drift checks pass;
- `traceweaver-core--v0.3.1` and a `0.3.1` GitHub Release are absent before
  publication;
- one independent exact-diff review is clean;
- the version-bump PR checks pass before merge;
- after merge, the automatic release workflow succeeds and the peeled tag
  equals the release merge commit.

## Held Boundaries

The release does not establish graph publication, live-host invocation,
automatic semantic freshness, provider-key use, global graph mutation,
general productivity, runtime enforcement, deployment, dogfood, or the
REQ-TW-088 internal graph mirror.

## Next Step

Close the independent exact-tree review, then invoke `/tw-commit-push-pr` with
a single-use exact-target capsule for the release branch. PR merge requires a
separate merge-only capsule and fresh live checks.
