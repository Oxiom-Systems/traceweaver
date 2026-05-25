# TraceWeaver Plugin 0.2 Release Metadata Record

Status: `STATIC_MARKETPLACE_METADATA_PREPARED_PUBLICATION_AUTHORIZED`

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
release are authorized after PR #27 was merged and the release-scope refresh
checks pass.

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
python3 /Users/hanneszietsman/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py plugins/traceweaver-core
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

Run the verification plan above, commit and push this release-scope refresh, then
create the exact `traceweaver-core--v0.2.0` GitHub release from the refreshed
main commit. Do not create `0.2.1` for this scope.
