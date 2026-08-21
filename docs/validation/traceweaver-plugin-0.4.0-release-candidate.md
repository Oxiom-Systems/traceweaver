---
id: TW-RELEASE-CANDIDATE-2026-08-21-0.4.0-001
status: ready_for_absent_tag_release_recovery_candidate
date: 2026-08-21
version: 0.4.0
tag: traceweaver-core--v0.4.0
flat_base: ed99fd0405d62c322ab3c415db94d9aacf3ced26
release_readiness:
  terminal_status: ready_for_version_bump
  version: 0.4.0
  candidate_scope:
    algorithm: sha256(sorted(path + NUL + git_mode + NUL + sha256(file_bytes) + LF))
    paths:
      - .claude-plugin/marketplace.json
      - .github/workflows/release-on-version-bump.yml
      - .github/workflows/smoke-tests.yml
      - CHANGELOG.md
      - README.md
      - docs/validation/traceweaver-0.4.0-consumer-validation-candidate.md
      - fixtures/release-check-runs/failed.json
      - fixtures/release-check-runs/pending.json
      - fixtures/release-check-runs/ready.json
      - fixtures/release-readiness/held-0.4.0.yml
      - fixtures/release-readiness/ready-0.4.0.yml
      - fixtures/release-readiness/scope/alpha.txt
      - fixtures/release-readiness/scope/beta.txt
      - plugins/traceweaver-core/.antigravity-plugin/plugin.json
      - plugins/traceweaver-core/.claude-plugin/plugin.json
      - plugins/traceweaver-core/.codex-plugin/plugin.json
      - plugins/traceweaver-core/.cursor-plugin/plugin.json
      - plugins/traceweaver-core/README.md
      - scripts/traceweaver-check-release-manifest-versions
      - scripts/traceweaver-check-release-readiness
      - scripts/traceweaver-evaluate-release-check-runs
      - scripts/traceweaver-smoke-release-readiness
    digest: sha256:4f8ab72a979b00102c9f82054b4f2e4f814d5138eabb379425e7b8aafa40a6d8
  runtime_identity_rule: exact_merge_sha_and_check_urls_derived_in_release_workflow
  prerequisites:
    pr1_merge_pr: "#57"
    pr1_merge_sha: f90fbd6d6560bd746aa5be3878960053052095b5
    pr1_ci_run: https://github.com/Oxiom-Systems/traceweaver/actions/runs/32463746924
    pr1_scoped_review: docs/validation/traceweaver-2026-08-21-pr1-skill-execution-contract-verification.md
    pr2_merge_pr: "#58"
    pr2_merge_sha: 4e25807cfec3a158f58fd6d4543a1a64e2ab463c
    pr2_ci_run: https://github.com/Oxiom-Systems/traceweaver/actions/runs/32471460803
    pr2_scoped_review: docs/validation/traceweaver-2026-08-21-v040-pr2-graph-html-preview-verification.md
    pr3_scoped_review: CLEAN-ROOM-V040-PR3-2026-08-21
    release_recovery_scoped_review: CLEAN-ROOM-V040-CODEQL-RECOVERY-2026-08-21
    integrated_validation: passed
    graph_freshness: passed
    consumer_validation: passed
    manifest_equality: passed
    changelog_release_notes: passed
---

# TraceWeaver Core 0.4.0 Release-Readiness Candidate

## Candidate state

This record authorizes the reconciled version-bump candidate, or one bounded
same-version absent-tag recovery after an interrupted attempt, to enter the
main-only release workflow. It is not evidence that a tag or GitHub Release
already exists. The version-bump PR merged after PRs #57 and #58. Its first
release attempt found a live CodeQL check-shape mismatch before tag creation;
the recovery candidate is based on that exact merged main state.

The repository-owned release-readiness checker parses this dated receipt before
the workflow resolves a tag. It requires the exact requested version, the
explicit terminal status `ready_for_version_bump`, real PR1/PR2 evidence, a
clean PR3 clean-room review, passed prerequisites, and a deterministic digest
of the fixed release-candidate file set. Those pre-merge conditions are now
present and mechanically checkable.

The receipt intentionally does not contain its own future commit SHA or CI URL.
Those values cannot exist until after merge and would make readiness
self-referential. The main-only workflow instead derives the checked-out merge
SHA, polls GitHub for that exact SHA's smoke and CodeQL check runs, and writes a
runtime release receipt containing their immutable URLs before publication.
The 22-file candidate digest likewise excludes this release receipt and the
derived graph-freshness receipt. The former would self-reference; the latter is
instead verified independently by the mandatory `tw-graph check`, preventing a
candidate-digest/graph-receipt circular hash dependency.

## Version coherence

The required release version is exactly `0.4.0` in all five release carriers:

1. `.claude-plugin/marketplace.json`
2. `plugins/traceweaver-core/.claude-plugin/plugin.json`
3. `plugins/traceweaver-core/.codex-plugin/plugin.json`
4. `plugins/traceweaver-core/.cursor-plugin/plugin.json`
5. `plugins/traceweaver-core/.antigravity-plugin/plugin.json`

`bash scripts/traceweaver-check-release-manifest-versions --expect 0.4.0` is the
read-only local/CI preflight. The existing serialized
`.github/workflows/release-on-version-bump.yml` remains the sole tag/release
producer and runs only on a push to `main`. It compares the checked-out
manifest version with the first parent. It exits successfully for ordinary
same-version pushes once that version tag exists; while the tag is absent, a
same-version push revalidates the matching dated receipt and resumes the
interrupted release. A version bump follows the same validated path and runs
`ruby scripts/traceweaver-check-release-readiness`; it must never be changed
into an every-merge release route.

## Required reconciliation identities

| Prerequisite | Required identity before merge | Current value |
| --- | --- | --- |
| PR1: execution contracts / Terra | merged PR number, merge SHA, exact-head CI run URL/SHA, and clean scoped review | PR #57; `f90fbd6d6560bd746aa5be3878960053052095b5`; smoke run `32463746924`; recorded verification evidence |
| PR2: graph / semantic HTML | rebased on merged PR1, merged PR number, merge SHA, exact-head CI run URL/SHA, and clean scoped review | PR #58; `4e25807cfec3a158f58fd6d4543a1a64e2ab463c`; smoke run `32471460803`; clean-room verification evidence |
| PR3: release candidate | deterministic fixed-scope digest and clean scoped review after reconciliation | 22-file non-self-referential scope `sha256:4f8ab72a979b00102c9f82054b4f2e4f814d5138eabb379425e7b8aafa40a6d8`; `CLEAN-ROOM-V040-PR3-2026-08-21` |
| Release recovery | exact live CodeQL check shape, absent tag, bounded repair, and clean scoped review | canceled pre-tag run `32474745598`; live `Analyze (actions)`, `Analyze (javascript-typescript)`, and `Analyze (python)` checks; `CLEAN-ROOM-V040-CODEQL-RECOVERY-2026-08-21` |
| Post-merge runtime | checked-out merge SHA, exact-SHA smoke and CodeQL URLs, tag state, and workflow URL | `derived_by_main_only_release_workflow` |

Do not substitute candidate receipts copied from the earlier mixed-tree base for
current-base evidence. Merge order is PR1, rebased PR2, PR3, then only the
bounded release-recovery repair if the tag is still absent.

## Documentation and release notes

- Root and plugin READMEs name `0.4.0`, its tag/install example, the new graph
  and contract quick start, compatibility notes, and the release boundaries.
- `CHANGELOG.md` contains the dated `0.4.0 - 2026-08-21` section with Added,
  Changed, Validation, and Held sections.
- The changelog extraction step must yield non-empty notes for `0.4.0` on the
  exact reconciled tree.

## Final validation prerequisites

1. Run the five-manifest preflight and release-workflow static extraction check.
2. Run applicable JSON, shell, Ruby, README-link/static, release smoke, and
   whitespace checks on the reconciled tree.
3. PR1/PR2 deterministic suites and their bounded clean-room reviews passed on
   their exact merged heads.
4. The release change cycle refreshed the tracked graph receipt once after
   final bookkeeping and `tw-graph check` passed without workflow self-healing.
5. The bounded read-only consumer procedure in
   `traceweaver-0.4.0-consumer-validation-candidate.md` recovered both complete
   closures, found actual duplicate families and impact routes, preserved every
   source hash, and recorded Vestro's explicit filename-case migration caveat.
6. The exact PR3 candidate scope digest and clean-room review are clean. The
   receipt intentionally does not predict the future merge SHA or CI URL.
7. The deterministic check-run fixtures cover the repository's live GitHub
   Actions CodeQL matrix shape as well as the legacy CodeQL check form.
8. After merge, require the main-only workflow to match its checkout to
   `GITHUB_SHA`, wait for both smoke and CodeQL on exactly that SHA, reject
   conflicting tags, and attach `release-runtime-receipt.json` to the GitHub
   Release.

## Terminal holds

- No tag/release workflow run, GitHub Release, or exact resulting-main SHA
  exists yet. After merge, the workflow must either prove the tag absent or prove
  that an existing tag resolves to the exact resulting `main` SHA; a mismatch
  terminates as `held_tag_conflict`.
- Missing, pending, or failed exact-SHA smoke/CodeQL evidence terminates the
  workflow as `held_ci_failed`; it cannot be represented as pre-merge evidence.
- An existing release without its runtime receipt terminates as
  `held_release_metadata_write_unavailable` instead of silently claiming an
  idempotent success.
- The pinned `traceweaver-core--v0.4.0` install tag is not available until the
  GitHub Release is published.
- Canonical HTML cutover, Graphify installation, live consumer runtime
  validation, independent served-model attestation, enforcement, autonomous
  publication, and REQ-TW-091 every-merge automation remain outside this
  candidate.

## Next gate

Run the release candidate checks and PR checks on this exact tree. If they pass,
merge this sole version-bump PR. Exact-merge-SHA smoke, CodeQL, tag, and GitHub
Release evidence are collected only by the post-merge workflow.
