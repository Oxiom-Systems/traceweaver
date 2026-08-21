---
id: TW-VALIDATION-2026-08-21-0.4.0-CONSUMERS-001
status: verified_for_0_4_0_release_with_vestro_case_migration_caveat
date: 2026-08-21
scope: bounded_read_only_consumer_snapshots
---

# TraceWeaver Core 0.4.0 Consumer Validation

## Boundary

This record captures two existing, dirty consumer repositories without writing
to them, running their services, installing Graphify, or treating their current
worktrees as clean release evidence. Validation used secret-filtered temporary
copies of exactly each repository's `git ls-files --cached --others
--exclude-standard` inventory. The integrated package came from the release
branch rebased on main `4e25807cfec3a158f58fd6d4543a1a64e2ab463c`, which
contains merged PRs #57 and #58.

## Exact observed baselines

| Consumer | Branch / HEAD | Dirty entries | Canonical authority present | HTML authority files | Local Graphify graph |
| --- | --- | ---: | --- | --- | --- |
| Vestro | `codex/exit-requirements-reset` / `8bc3b724f56cc72f08f8162c783a7f8e2816b990` | 144 | `docs/VESTRO-BRIEF.md`, `REQUIREMENTS.md`/`requirements.md`, `traceability-matrix.md`, `.traceweaver/intent-contract.yml` | `requirements.html`: absent; `traceability-matrix.html`: absent | `graphify-out/graph.json`: present (`dda2d451e2141270a980e840ace8100aff6dc96b40664def01d2fe5cc5874fdb`) |
| Air Router | `docs/requirements-review` / `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b` | 210 | `requirements.md`, `traceability-matrix.md`, `.traceweaver/intent-contract.yml` | `requirements.html`: absent; `traceability-matrix.html`: absent | `graphify-out/graph.json`: present (`b9e570a502dfb662199947343aaef932700181d9b343a3dfb4f35f8d51deb469`) |

Vestro source digests observed: requirements
`f90073461cd53eddc04b3c72bb04e8a781fea018ba42400d25431fd280475a37`, matrix
`b8c55269a3ed393b2ba660c44dcb5cfb2a9aa72198b86ff3ade06c29d7ebb5a9`, and Intent
Contract `8835ee5fc7b94bc4b06720cebc17b48a07d3e2ce63da7739af23220ae44befe5`.
Its contract pins the same requirements digest.

Air Router source digests observed: requirements
`ab9221360f5a9012f254db06772d37f55de177f9e21806b24744118b11bf07fe`, matrix
`d83a9d91f8be8ad7f861d2005f4c5fa166bca3eaf334cf2511deef8ab4f4cd84`, and Intent
Contract `0ff28e810bba56ffb7becf3340bbe250be9e59d195adffa9dc90126c4285f735`.
The observed requirements digest matches its `baseline_hash_sha256` pin. The
VinilaTech portfolio root has moved independently, but Graphify orientation
correctly located the recorded product boundary at `POC/`; that nested Git
worktree still matches the recorded Air Router branch, HEAD, dirty count, and
source hashes.

## Portability finding and bounded normalization

Vestro tracks the authority file as uppercase `REQUIREMENTS.md`. On the local
case-insensitive filesystem, opening `requirements.md` reaches the same bytes,
but Git and a Linux checkout expose only the uppercase entry. `tw-graph`
correctly refused the snapshot because its 0.4.0 canonical input contract
requires exact lowercase `requirements.md`.

The Vestro validation copy therefore performed a two-step case-only rename to
`requirements.md` before graph construction. Its content hash remained
`f90073461cd53eddc04b3c72bb04e8a781fea018ba42400d25431fd280475a37`.
No source repository was changed. Existing consumers must make this one-time
tracked rename before using 0.4.0; automatic legacy-name migration is deferred
to the 0.5.0 lifecycle/import design rather than silently weakening canonical
source identity.

## Integrated results

| Measure | Vestro result | Air Router result |
| --- | --- | --- |
| Deterministic authority closure | Fresh after the explicit filename normalization; 1,912 files; graph `sha256:f716dfe695c1e441d071d182b66f7511d5f93276aea429bd150a192b49223993`; manifest `sha256:4546be28308aff92fef77826f539ed6587502db30490af9f6997619661a28186` | Fresh without normalization; 1,202 files; graph `sha256:f87737050385725a8052f8b51ffa1d50a69038102823c43e760822e1ab59a031`; manifest `sha256:ce13142e447c8353dcbfb169e2d78cd5f6212cddaf251ddabcfc1c551221ae10` |
| Required record/link recovery | 1,912 / 1,912 accepted closure members recovered (100%) | 1,202 / 1,202 accepted closure members recovered (100%) |
| Impact path | `REQ-ADMIN-UI-006` returned 31 impacted records, including `TRACE-VESTRO-008`, `TRACE-VESTRO-024`, and `TRACE-VESTRO-039` | `REQ-AIR-108` returned `TRACE-AIR-108`, `VER-AIR-108`, and `VAL-AIR-010` |
| Duplicate candidate before review | `REQ-ADMIN-UI-004` identified `REQ-GUARD-001` at score `1.0` | `REQ-FIND-AIR-001` identified 13 candidates; top included `REQ-FIND-AIR-P25-001` and `REQ-FIND-AIR-R2-001` at `0.857143` |
| Repository-wide search reduction | Selected source/impact/duplicate task corpus used three graph operations and zero repository-wide search operations instead of at least one repository-wide search per task: 100% reduction | Same: three graph operations and zero repository-wide search operations, a 100% reduction |
| Authority promotion | Source hashes were unchanged; no HTML authority files appeared; graph output remained derived | Source hashes were unchanged; no HTML authority files appeared; graph output remained derived |
| Human/operator navigation | The three tasks completed from structured graph responses with canonical locators and no manual multi-file traversal. Exact-ID search ranked the requested Vestro ID second; ranking refinement is retained for 0.5.0. | The same tasks completed from structured graph responses. Exact-ID search ranked the requested Air Router ID sixth; ranking refinement is retained for 0.5.0. |
| Terra route | The integrated deterministic routing suite explicitly requests `gpt-5.6-terra` with risk-selected effort and refuses Sol/fallback routes. Served-model state remains `unattested`, as required without host evidence. | Same package result; no consumer service or model provider was invoked. |
| Review convergence | `VER-TW-087` deterministic review-series suite passed and terminated inside its authorized budget. | Same package result. |

The measured recovery rate is 100%, exceeding the 95% target. Repository-wide
search use for the selected navigation tasks fell from at least three searches
to zero, exceeding the 50% target. The graph surfaced actual duplicate families
in both products before any new review pass.

## Candidate checks and success measures

| Measure | Exact current baseline / target | Candidate result |
| --- | --- | --- |
| Repository-wide search operations | At least one repository-wide search per selected source/impact/duplicate task; target at least 50% fewer | Passed: three graph operations, zero repository-wide searches, 100% reduction in both snapshots. |
| Duplicate discovery before review | Detect actual or deterministic duplicate candidates before another review | Passed in both snapshots with scored actual candidates. |
| Impact paths | Return requirement-to-trace/V&V impact routes with canonical locators | Passed in both snapshots. |
| Terra receipt | Explicit Terra request and risk effort; served model remains unattested without independent proof | Passed deterministic routing behavior; host service remains honestly unattested. |
| Required record/link recovery | At least 95% | Passed at 100% in both accepted closure builds. |
| Authority promotion | Zero false promotions | Passed; source hashes unchanged, HTML absent, graph derived. |
| Human navigation | Improved or non-regressed for the bounded task corpus | Passed by operator task-step comparison; exact-ID ranking refinement is carried to 0.5.0. |
| Review convergence | Within the frozen review budget | Passed by `VER-TW-087` deterministic suite. |

## Commands and evidence boundary

The integrated package executed `tw-graph build`, one lifecycle `refresh`,
`check`, `search`, `impact`, and `duplicate-candidate` against each temporary
snapshot. It also ran `scripts/traceweaver-smoke-terra-routing` and
`scripts/traceweaver-smoke-review-series-convergence`. Graphify 0.9.27 was used
only to orient to the moved Air Router product boundary; neither existing local
Graphify graph was rebuilt, modified, or treated as authority/evidence.

## Holds

- These dirty worktrees may change independently; the recorded branch, HEAD,
  dirty count, and source hashes bind this observation.
- Vestro requires the explicit tracked case-only rename described above before
  0.4.0 can operate directly on that repository.
- No live Vestro strategy, Air Router device, broker, router, provider, or model
  operation was run. Served-model attestation remains unavailable and cannot be
  promoted into formal child evidence.
- Canonical semantic-HTML cutover, automatic legacy import/migration, exact-ID
  search ranking refinement, and client acceptance validation remain 0.5.0
  work. They do not alter the 0.4.0 derived-preview boundary.
