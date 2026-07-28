---
title: "release: TraceWeaver Core 0.3.2 selected CE 3.20.0 refresh"
type: release
status: local_verification_and_independent_review_clean_publication_pending
date: 2026-07-28
workflow_profile: L1
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_ref: f9c405816ea088716d282d1b906e7d57065a6dec
requirements:
  - REQ-TW-017
  - REQ-TW-018
  - REQ-TW-020
  - REQ-TW-021
  - REQ-TW-043
  - REQ-TW-052
  - REQ-TW-053
  - REQ-TW-059
---

# TraceWeaver Core 0.3.2 Release Plan

## Outcome

Publish the reviewed selected Compound Engineering compatibility refresh from
released upstream `3.14.3` to released upstream `3.20.0` as TraceWeaver Core
`0.3.2`.

This is a patch release because it refreshes the already selected internal
compatibility surface without broadening TraceWeaver's authority model,
user-facing workflow, selected top-level skill set, or alpha claims.

## Authority

- Owner instruction on 2026-07-28: check upstream, fold the update in, release
  a tag, and merge.
- Source repository:
  `https://github.com/EveryInc/compound-engineering-plugin`.
- Selected source target: tag `compound-engineering-v3.20.0`, commit
  `5c7cb347d0686663743b87cd7227246ba24f7fa7`.
- Current TraceWeaver baseline: `origin/main` at
  `f9c405816ea088716d282d1b906e7d57065a6dec`.
- Source-refresh chain: REQ-TW-017/018/021/043/052/059 -> TRACE-TW-005/009/046
  -> VER-TW-009/010.
- Narrow release-claim chain: REQ-TW-020 -> TRACE-TW-006 -> VER-TW-012 ->
  VAL-TW-008.
- Controlled publication chain: REQ-TW-053 -> TRACE-TW-033 -> VER-TW-042 ->
  VAL-TW-011.

## Scope

- three-way refresh the 17 already selected CE-derived component directories;
- retain reviewed TraceWeaver authority and publication overlays;
- retain the held `ce-sessions` compatibility engine and TraceWeaver-owned
  `lfg` alias;
- keep newly introduced upstream top-level skills outside the selected package;
- refresh provenance, hashes, selected-file inventory, closure evidence,
  manifests, release guidance, and changelog;
- publish through a reviewed PR, separate merge-only authorization, and the
  existing version-bump release workflow.

## Verification

- exact source tag, commit, tree counts, and aggregate fingerprint are recorded;
- selected CE closure and plugin validation pass;
- no-publication and controlled-publication smokes pass;
- JSON, YAML, Python, and shell syntax checks pass;
- implementation-mode changed-file trace scan passes;
- independent correctness, security, and document reviews close without P0/P1
  findings;
- all five release-facing versions equal `0.3.2`;
- active install/tag guidance equals `traceweaver-core--v0.3.2`;
- PR checks pass before merge;
- after merge, the version-bump workflow succeeds and the peeled release tag
  equals the release merge commit.

## Held Boundaries

This release does not establish clean CE replacement, full upstream parity,
off-host CE model execution (code/document peer review, plan/brainstorm
elevation, or cross-model unit-workspace implementation), runtime-equivalent
CE behavior, active-host currentness, dynamic discovery, enforcing or
slash-command behavior, autonomous publication, deployment, dogfood, or
general productivity improvement.

## Next Step

Invoke `/tw-commit-push-pr` with a single-use capsule for the exact reviewed
branch, remote, base, and tree. Wait for green live checks; merge requires a
fresh merge-only capsule.
