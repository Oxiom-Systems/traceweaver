---
id: TW-RELEASE-EVIDENCE-2026-07-23-0.3.1
status: local_prepublication_verification_passed_exact_tree_review_pending
date: 2026-07-23
version: 0.3.1
tag: traceweaver-core--v0.3.1
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: bc79fb669626f1cfddfdd98ac883d4abd90ba05c4a6e2f532b891d00fac68d7a
requirements:
  - REQ-TW-020
  - REQ-TW-053
  - REQ-TW-089
  - REQ-TW-090
trace_ids:
  - TRACE-TW-006
  - TRACE-TW-033
  - TRACE-TW-064
verification_ids:
  - VER-TW-012
  - VER-TW-042
  - VER-TW-084
validation_ids:
  - VAL-TW-008
  - VAL-TW-011
  - VAL-TW-032
---

# TraceWeaver Core 0.3.1 Release Evidence

## Authority and identity

- The owner explicitly directed TraceWeaver to merge PR #49, bump the tag, and
  release on 2026-07-23.
- Feature head: `7ba5814133d3787b21e7b8f92c6b89177fac9cf0`.
- Merged PR: `https://github.com/Oxiom-Systems/traceweaver/pull/49`.
- Main merge commit: `99ee6d8e2bc27c3837d938c40553879db5e5b3b0`.
- Exact authorized patch release: TraceWeaver Core `0.3.1`,
  tag `traceweaver-core--v0.3.1`.
- Publication mechanism:
  `.github/workflows/release-on-version-bump.yml`, triggered only after the
  reviewed version-bump PR merges to `main`.
- Narrow release-claim chain: REQ-TW-020 -> TRACE-TW-006 -> VER-TW-012 ->
  VAL-TW-008.
- Controlled publication chain: REQ-TW-053 -> TRACE-TW-033 -> VER-TW-042 ->
  VAL-TW-011.
- Optional Graphify feature chain: REQ-TW-089/090 -> TRACE-TW-064 ->
  VER-TW-084 -> VAL-TW-032.

## Prepublication verification

The release branch must establish:

- all five release-facing manifests report `0.3.1`;
- current install guidance points to `traceweaver-core--v0.3.1`;
- JSON and YAML parse successfully;
- the compact L1 V&V capsule passes;
- the focused Graphify routing, Codex discovery, Antigravity discovery,
  baseline verify, and generated-view drift checks pass;
- the `traceweaver-core--v0.3.1` tag and GitHub Release are absent before
  publication;
- an independent reviewer accepts the exact staged release tree;
- the release PR's live checks pass before merge.

Local prepublication verification completed at `2026-07-23T08:18:04Z`:

| Check | Result |
| --- | --- |
| Five release-facing version values equal `0.3.1` | pass |
| Active install/tag references equal `traceweaver-core--v0.3.1` | pass |
| JSON manifests and compact capsule parse | pass |
| Intent Contract YAML parses | pass |
| Compact L1 V&V capsule validation | pass, zero findings |
| `scripts/traceweaver-smoke-graphify-wrapper-routing` | pass |
| `scripts/traceweaver-smoke-codex-discovery` | pass |
| `scripts/traceweaver-smoke-antigravity-discovery` | pass |
| `scripts/traceweaver-smoke-verify` | pass, canonical hash consistent |
| Generated traceability views and drift smoke | pass |
| `git diff --check` | pass |
| Remote `traceweaver-core--v0.3.1` tag before publication | absent |
| GitHub Release `traceweaver-core--v0.3.1` before publication | absent |

The first sandboxed Graphify refresh attempt degraded with
`refresh_failed`. The approved direct `graphify update .` retry outside the
sandbox succeeded with 6,254 nodes, 5,853 edges, and 749 communities. Graphify
also reported that document semantic extraction was not performed, so
`semantic_refresh_held` remains the honest state. `graphify-out/` is ignored and
is not release content.

The reviewed digest, release PR, live checks, and release merge commit are
recorded after those facts exist.

## Postpublication verification

After the release PR merges, the version-bump workflow must succeed, the GitHub
Release must be non-draft and non-prerelease, and the peeled
`traceweaver-core--v0.3.1` tag must equal the release merge commit.

## Held claims

This release does not prove or authorize:

- Graphify graph publication or global-graph mutation;
- automatic semantic refresh or provider-key use;
- live-host invocation or runtime enforcement;
- general time, token, or productivity improvements;
- deployment or dogfood success;
- the REQ-TW-088 internal SQLite graph mirror;
- any future merge or release.

## Current gate

`pending`: complete the independent exact-tree review, publish and merge the
version-bump PR under single-use authorization capsules, then verify the
automatic tag and GitHub Release before changing this record to `passed`.
