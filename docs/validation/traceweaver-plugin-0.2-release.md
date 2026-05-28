# TraceWeaver Plugin 0.2 Release Metadata Record

Status: `STATIC_MARKETPLACE_METADATA_PREPARED_0_2_0_0_2_1_AND_0_2_2_PUBLICATION_COMPLETE_RUNTIME_CLAIMS_HELD`

Date/session: 2026-05-25, Codex, branch
`codex/guide-0.2-antigravity-release` worktree

Record ID: `TWCORE-PLUGIN-0.2-RELEASE-METADATA-2026-05-25-001`

Beads issue: `TraceWeaver-0qg`

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- authority source: `requirements.md`
- relevant requirements: REQ-TW-016, REQ-TW-020, REQ-TW-023, REQ-TW-024,
  REQ-TW-041, REQ-TW-043, REQ-TW-056, REQ-TW-060, plus REQ-TW-068 as
  candidate/planning input for Antigravity local install metadata
- traceability source: `traceability-matrix.md`

## Decision

TraceWeaver Core 0.2 metadata is prepared so Codex, Claude Code, and
Antigravity local-install users who update to `0.2.0` receive both the current
PR badge label template and the Antigravity plugin update.

This record includes the current PR badge label template change so the next
plugin package carries the latest visible PR-description output.

This record includes the `tw-auto` approval-only handoff repair so
record/approval-only runs that explicitly say "do not implement" still stop
with the next wrapper command or blocker.

This record also includes the PR #27 `tw-auto` publication-boundary next-step
repair so requests that say "stop before commit/push/PR" still continue through
post-work traceability/review closure before stopping at the publication
boundary with the next wrapper command or blocker.

Antigravity local install metadata is included under REQ-TW-068
candidate/planning input. This record does not promote REQ-TW-068 to approved
baseline authority.

This record does not approve runtime-driver invocation, clean CE replacement,
package-ready status, release-ready status, upstream-ready status, R31 validation closure,
slash-command availability, enforcing mode, unconstrained-host support, or
autonomous publication. The exact `traceweaver-core--v0.2.0` tag and GitHub
release were published after PR #27 was merged and the release-scope refresh
checks passed.

Post-release evidence:

- tag: `traceweaver-core--v0.2.0`
- release URL: <https://github.com/Oxiom-Systems/traceweaver/releases/tag/traceweaver-core--v0.2.0>
- release commit: `fc1d3058a0cc98fb3187e7576ec13320e4879aa8`
- release record: `.traceweaver/trace-records/2026-05-25-plugin-0.2-release-publication.yml`

## Prepared Artifacts

- `.agents/plugins/marketplace.json`: Codex marketplace entry remains pointed at
  `traceweaver-core`.
- `.claude-plugin/marketplace.json`: Claude Code marketplace metadata updated
  to 0.2.0.
- `plugins/traceweaver-core/.codex-plugin/plugin.json`: Codex plugin manifest
  updated to 0.2.0.
- `plugins/traceweaver-core/.claude-plugin/plugin.json`: Claude Code plugin
  manifest updated to 0.2.0.
- `plugins/traceweaver-core/.antigravity-plugin/plugin.json`: Antigravity peer
  manifest updated to 0.2.0.
- `plugins/traceweaver-core/.cursor-plugin/plugin.json`: Cursor peer manifest
  updated to 0.2.0 for consistency; Cursor runtime support remains held.
- `src/index.ts` and `scripts/traceweaver-smoke-antigravity-discovery`:
  Antigravity installed-version output and smoke expectation updated to 0.2.0.
- `plugins/traceweaver-core/skills/ce-commit-push-pr/references/pr-description-writing.md`:
  PR badge guidance updated to Tracewaver Compound Engineering.
- `plugins/traceweaver-core/skills/tw-auto/SKILL.md`,
  `scripts/traceweaver-smoke-tw-skill-behavior`, and
  `fixtures/tw-skill-behavior/tw-auto-approval-only-stop/loop-state.txt`:
  approval-only handoff guidance and deterministic regression fixture added.
- `fixtures/tw-skill-behavior/tw-auto-post-work-stop-before-publication/loop-state.txt`
  and `.traceweaver/trace-records/2026-05-25-tw-auto-publication-boundary-next-step.yml`:
  publication-boundary next-step handoff guidance, fixture proof, and review
  evidence added by PR #27.
- `README.md`, `plugins/traceweaver-core/README.md`, and `CHANGELOG.md`:
  install, update, release, and held-claim instructions updated for 0.2.0.

## Update Behavior

Claude Code resolves plugin update identity from `plugin.json` version before
marketplace-entry version, so the Claude manifest must be bumped for each
release. Codex uses the repo marketplace entry to locate
`plugins/traceweaver-core`; the Codex plugin manifest carries the release
version. Antigravity local installs copy the Antigravity manifest and installed
version file into `$HOME/.gemini/config/plugins/traceweaver-core`.

The intended release tag for this package is:

```text
traceweaver-core--v0.2.0
```

## Verification Plan

Observed checks for this metadata update:

```text
python3 -m json.tool ...: pass for Codex/Claude/Antigravity/Cursor plugin and marketplace JSON
YAML parse for Intent Contract and 0.2 trace record: pass
Codex plugin validator: pass
claude plugin validate --strict .: pass
claude plugin validate --strict plugins/traceweaver-core: pass
claude plugin tag --dry-run --force plugins/traceweaver-core: pass, computed traceweaver-core--v0.2.0 without creating or pushing a tag
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery: pass
TRACEWEAVER_CODEX_EXEC_TIMEOUT_SECONDS=10 scripts/traceweaver-smoke-codex-separate-home-runtime: pass with isolated install/model/default/auth-boundary checks and runtime invocation held because isolated Codex exec has no auth copy
scripts/traceweaver-smoke-antigravity-discovery: pass
scripts/traceweaver-smoke-controlled-publication: pass
TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior: pass with approval-only stop regression fixture and existing active-host stale-surface held notes
publication-boundary next-step repair from PR #27: pass with deterministic fixture and trace record
implementation-mode code-anchor scan over changed files, including PR #27 fixture/evidence: pass with code_traceability_findings=0
scripts/traceweaver-generate-traceability-views --root .: pass
scripts/traceweaver-smoke-traceability-generated-views: pass
git diff --check: pass
```

Run these checks again before tagging or publishing a release:

```sh
python3 -m json.tool .agents/plugins/marketplace.json
python3 -m json.tool .claude-plugin/marketplace.json
python3 -m json.tool plugins/traceweaver-core/.codex-plugin/plugin.json
python3 -m json.tool plugins/traceweaver-core/.claude-plugin/plugin.json
python3 -m json.tool plugins/traceweaver-core/.antigravity-plugin/plugin.json
python3 -m json.tool plugins/traceweaver-core/.cursor-plugin/plugin.json
# The older local Codex plugin-validator helper path was absent on the release
# host; use JSON validation plus the available Claude/plugin manifest checks.
claude plugin validate --strict .
claude plugin validate --strict plugins/traceweaver-core
claude plugin tag --dry-run --force plugins/traceweaver-core
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery
TRACEWEAVER_CODEX_EXEC_TIMEOUT_SECONDS=10 scripts/traceweaver-smoke-codex-separate-home-runtime
scripts/traceweaver-smoke-antigravity-discovery
scripts/traceweaver-smoke-controlled-publication
TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --mode implementation --changed-file plugins/traceweaver-core/skills/tw-auto/SKILL.md --changed-file scripts/traceweaver-smoke-tw-skill-behavior --changed-file fixtures/tw-skill-behavior/tw-auto-approval-only-stop/loop-state.txt --changed-file traceability-matrix.md
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --mode implementation --changed-file docs/validation/traceweaver-plugin-0.2-release.md --changed-file .traceweaver/trace-records/2026-05-25-plugin-0.2-release-metadata.yml --changed-file .traceweaver/trace-records/2026-05-25-tw-auto-publication-boundary-next-step.yml --changed-file traceability-matrix.md --changed-file plugins/traceweaver-core/skills/tw-auto/SKILL.md --changed-file scripts/traceweaver-smoke-tw-skill-behavior --changed-file fixtures/tw-skill-behavior/tw-auto-post-work-stop-before-publication/loop-state.txt
scripts/traceweaver-generate-traceability-views --root .
scripts/traceweaver-smoke-traceability-generated-views
git diff --check
```

## Held Claims

- runtime-driver invocation;
- clean CE replacement;
- package-ready, release-ready, or upstream-ready status beyond this static
  metadata preparation and exact 0.2.0 GitHub release publication record;
- R31 real-project validation closure;
- slash-command or prompt availability;
- enforcing authority gate behavior;
- autonomous commit, push, PR, or future release publication;
- unconstrained-host support.

## Suggested Next Step

Use `.traceweaver/trace-records/2026-05-25-plugin-0.2-release-publication.yml`
as the post-release evidence record for 0.2.0. The later REQ-TW-069
requirements-quality ranking runtime-output proof requires a new `0.2.1`
release scope, recorded separately in
`.traceweaver/trace-records/2026-05-26-plugin-0.2.1-release-metadata.yml`.

## 0.2.1 Update Scope

TraceWeaver Core 0.2.1 is a scoped patch release for REQ-TW-069:

- `tw-requirements-review` explicitly reports 0-5 requirement quality scores,
  default outcomes, score-as-triage-only boundaries, and requirement-set quality
  findings.
- Active-host proof now covers installed `tw-requirements-review` skill-file
  identity and one bounded runtime-output fixture.
- Codex, Claude Code, Antigravity, and Cursor peer manifests carry version
  `0.2.1`.
- Antigravity local install writes `installed_version.json` with `0.2.1`.

This update still does not approve package-ready, release-ready,
upstream-ready, clean replacement, enforcing behavior, slash-command support,
unconstrained-host support, broad real-document runtime behavior, or autonomous
publication.

Observed 0.2.1 verification on 2026-05-26:

- JSON validation passed for marketplace and peer plugin manifests.
- YAML parse passed for Intent Contract and release trace records.
- `claude plugin validate --strict .` passed.
- `claude plugin validate --strict plugins/traceweaver-core` passed.
- `claude plugin tag --dry-run --force plugins/traceweaver-core` passed and
  computed `traceweaver-core--v0.2.1`.
- Codex discovery, Antigravity discovery, controlled-publication, TW skill
  behavior, active-host `tw-requirements-review` skill-file-read,
  active-host runtime-output fixture, code traceability, generated-view drift,
  and `git diff --check` passed.
- Separate-home Codex install passed and runtime remained expected-held without
  copied auth in the isolated `CODEX_HOME`.

Publication is confirmed complete for `traceweaver-core--v0.2.1`: read-only
checks reported non-draft GitHub release `TraceWeaver Core 0.2.1` published at
2026-05-27T10:17:58Z and remote tag
`35b3f850681a1fea571a3148950525a364457e7d`.

## 0.2.2 Update Scope

TraceWeaver Core 0.2.2 is a scoped patch release for install/update guidance
and selected Compound Engineering 3.9.0 continuity evidence:

- Codex, Claude Code, Antigravity, and Cursor peer manifests carry version
  `0.2.2`.
- Claude marketplace metadata carries version `0.2.2`.
- README and plugin README install examples use the pinned
  `traceweaver-core--v0.2.2` release snapshot.
- Antigravity local install writes `installed_version.json` with `0.2.2`.
- The selected CE-derived implementation component inventory remains pinned to
  `compound-engineering-v3.9.0` / `cli-v3.9.0` at
  `e2c9cd23525eeb1ecddd637e027d53b02f892e7b`.

Wrapper delta check against the CE 3.5.0 baseline:

- The redacted CE 3.5.0 baseline cache has 39 skill directories, including
  `lfg`.
- TraceWeaver packages 18 selected `ce-*` implementation component skill
  directories plus the TraceWeaver-owned `lfg` alias.
- The CE 3.5.0 split session helpers `ce-session-extract` and
  `ce-session-inventory` are not selected in the CE 3.9.0 package surface;
  `tw-sessions` routes through selected `ce-sessions`.
- The remaining CE 3.5.0 surfaces not packaged as selected TraceWeaver CE
  components remain held or out of scope until separately classified, wrapped,
  proven, and reviewed.
- `scripts/traceweaver-classify-ce-replacement` was run during 0.2.2 prep and
  returned `failed_static_readiness` with stale classifier rows and unclassified
  newer `tw-*` wrapper surfaces. That result is recorded as a held wrapper
  classifier refresh need, not as clean replacement evidence.

This update still does not approve package-ready, release-ready,
upstream-ready, clean replacement, enforcing behavior, slash-command support,
unconstrained-host support, broad runtime behavior, runtime-equivalent CE
behavior, R31 real-project validation closure, Vestro dogfood evidence, or
autonomous publication.

Observed 0.2.2 verification is recorded in
`.traceweaver/trace-records/2026-05-27-plugin-0.2.2-release-metadata.yml`.

Publication is confirmed complete for `traceweaver-core--v0.2.2`: PR #30
merged to `main` at `718465c64f3aec8b100f07065a1b5a738affddd6`, the remote
annotated tag resolves to tag object
`8df4536034f293c3aedb8793ea7d2dafe1bc387e` and peels to the same merge commit,
and read-only GitHub Release checks reported non-draft, non-prerelease release
`TraceWeaver Core 0.2.2` published at `2026-05-27T21:59:38Z`.

Post-release publication evidence is recorded in
`.traceweaver/trace-records/2026-05-28-plugin-0.2.2-release-publication.yml`.
Future release publication beyond the explicit 0.2.2 tag/GitHub Release remains
held until a separate exact target and controlled publication route pass.
