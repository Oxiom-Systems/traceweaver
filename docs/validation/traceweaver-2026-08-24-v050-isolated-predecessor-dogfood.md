---
id: TW-DOGFOOD-2026-08-24-V050-ISOLATED-PREDECESSOR-001
status: passed_isolated_exact_published_predecessor_static_advisory_route
date: 2026-08-24
owner: Oxiom Systems
release_tag: traceweaver-core--v0.5.0
release_commit: 3a1f3c56b093e61b88e9f6282637878e8ebbf163
---

<!-- TRACEWEAVER: file-role=v050-isolated-predecessor-dogfood; req=REQ-TW-130,REQ-TW-143; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Exact Published Core 0.5.0 Predecessor Dogfood

## Disposition

The exact published `traceweaver-core--v0.5.0` predecessor was fetched by tag,
resolved to release commit `3a1f3c56b093e61b88e9f6282637878e8ebbf163`,
materialized from that immutable Git object, and installed into a disposable
Codex home under the protected target worktree. The active global Codex home,
the branch-local Core 0.6.0 package, and the mixed root worktree were not used
as predecessor installation evidence and were not mutated.

The isolated install succeeded with 54 packaged skills, 28 direct callable
skills, 26 internal packaged skills, 43 converted Codex agents, and 36
references. The installed `tw-authority-gate` execution contract resolved
first, followed by the installed `tw-auto` contract. Both returned
`terminal_state: resolved`, retained advisory/no-authority-promotion and
publication holds, requested no child, and made no served-model claim.

## Published release identity

| Field | Exact value |
| --- | --- |
| Git tag | `traceweaver-core--v0.5.0` |
| Tag commit | `3a1f3c56b093e61b88e9f6282637878e8ebbf163` |
| GitHub Release | `https://github.com/Oxiom-Systems/traceweaver/releases/tag/traceweaver-core--v0.5.0` |
| Published at | `2026-08-22T16:43:24Z` |
| Release state | published, non-draft, non-prerelease |
| Tagged plugin archive SHA-256 | `14c8a077e7c0238e557b5bd76b9c56651eca449db8e5ac31ca8276e6158358b8` |
| Tagged plugin tree SHA-256 | `572d3207eed7e5f4d697ba061988f09d6bd45c07ff78e00ba73390e2549d8d2d` |
| Published runtime-receipt asset SHA-256 | `b2713c0f64869fda0b652d5aca618ee9c159467b1634eb5769b0f182df90ffcc` |
| Published candidate-scope digest | `sha256:61b50906edd33f93e6d4a4fca86a8fbc6d555276e2e8c250e71d64361f6e79de` |
| Published CI state | smoke and three required CodeQL analyses recorded successful for the release SHA |

The downloaded runtime-receipt asset digest exactly matched the digest
reported by the GitHub Release API.

## Five-manifest version proof

The tagged release's own read-only checker passed with `--expect 0.5.0`.

| Manifest | Version | SHA-256 |
| --- | --- | --- |
| `.claude-plugin/marketplace.json` | `0.5.0` | `182b91741ada483e59ae431d48fbd993ecb9e207b1443554ce184388bdc70bd5` |
| `plugins/traceweaver-core/.claude-plugin/plugin.json` | `0.5.0` | `717eda2aa87ae4695ce114e70061bbde7888825850276d7e9c111e1f1095fb1e` |
| `plugins/traceweaver-core/.codex-plugin/plugin.json` | `0.5.0` | `9ffa4d5774876ec62b69c277fb31a421f496b0e579679487c96d4c3e750873bd` |
| `plugins/traceweaver-core/.cursor-plugin/plugin.json` | `0.5.0` | `56827d92f6ffcf494056d28df7fc5a82c89daf3cc632e03c5ab235a0af29982f` |
| `plugins/traceweaver-core/.antigravity-plugin/plugin.json` | `0.5.0` | `8e7def2f07d6da958736ec6990f671f350eafbe0a1e1233454e235b68c0e2b10` |

## Isolated install identity

| Artifact | SHA-256 / result |
| --- | --- |
| Install manifest | `12a10398e25f9ba852afa6289e63414cdf9059054645d4905c45543c4f77f734` |
| Installed Codex plugin manifest | `9ffa4d5774876ec62b69c277fb31a421f496b0e579679487c96d4c3e750873bd` |
| Installed model-context routing projection | `47409f9ef639f828fb64c453b623adc00780cb1cff39e69285d0c5e5a5be1a23` |
| All packaged skills, source versus installed | both `6e4345f3a280ff91a507f808f671ddca1ac531fdb1c4abfb5c8e8afabd7d14bb`; match |
| All references, source versus installed | both `ed3aa3b2bfba87190db4d4474a25707d3f8207d2db6c66aaac38039e941a6bd3`; match |
| SEC registry | `sha256:0db96c09280965cf2209ea864296c7e078aad3b7b504b81a08f51b7410129f27`; 28 callable contracts |
| Model-routing contract | `sha256:bb524b4295b24cc7b8e3e197e56589646c33bed50eaeec79585e761b63e67ead` |

The install manifest records `standalone: true`,
`externalCePluginRequired: false`, Sol as coordinator, Terra as the explicit
native-child target, risk-selected effort, and no Sol subagent route.

## Selected callable-byte proof

Tree hashes use lexical relative paths with `path + NUL + bytes + NUL`
framing. The installer-owned marker file is excluded from the callable copy
comparison.

| Callable | Tagged source tree | Isolated installed tree | Result |
| --- | --- | --- | --- |
| `tw-authority-gate` | `eaa313f8330412136fd2641c394a3626ec452002f48d1bd5b87650daa4e351a3` | same | pass |
| `tw-auto` | `76c7c06f5b325732361782a48aa4817dcba52ecf055d37de69623f20abe52083` | same | pass |
| `tw-graph` | `4aa3740ecc2f24899364f037c611cfa3d9bdda24b42071607f58b093001e52b0` | same | pass |
| `tw-update` | `1815dc78ebc2ed3f82a4152653cd6765c86a3878c0edc79c0fd024c82ec66337` | same | pass |

## Requested route dogfood

| Order | Installed Core 0.5.0 route | Invocation | Receipt | Result |
| --- | --- | --- | --- | --- |
| 1 | `tw-authority-gate` | `TW-AUTHORITY-GATE-2026-08-24-V050-ISOLATED-DOGFOOD-001` | `sha256:537d9d2ef904cb2903fd568b0686957701e9520810f9486d18dadcffe2c3db90` | resolved; advisory authority-administration route; next wrapper `tw-plan` |
| 2 | `tw-auto` | `TW-AUTO-2026-08-24-V050-ISOLATED-DOGFOOD-001` | `sha256:45aba3d2d25070cf00f000a372c9b5654bf97afeff979dbd08939007b9ed182d` | resolved; consolidated-delivery route; one Terra integrated reviewer identity and one Sol repair-batch maximum retained |

## Safety and held claims

- The disposable source/install root is
  `.traceweaver/state/v050-dogfood.EWDN38/`, an ignored target-worktree
  location. It is diagnostic and reproducible from the tag; it is not release
  authority.
- The mixed root remains on `codex/lean-convergence`; its observed status digest
  after dogfood is
  `4abb692f4a57620b93c5e6858fa478c1eca2afadd7d991bcb72313a8c8388d2e`.
  No dogfood command targeted that worktree for mutation.
- This result proves exact tagged package identity, isolated Codex projection,
  five-manifest equality, selected byte parity, and static advisory route
  resolution. It does not prove active-host replacement, provider/runtime
  behavior, served-model identity, product validation, Core 0.6.0 completion,
  publication, or release readiness.

## Next gate

Proceed with Slice 1 lifecycle schemas and source registration through the
retained advisory `tw-auto` route; keep the integrated mixed-candidate review
and all later product/release gates held.
