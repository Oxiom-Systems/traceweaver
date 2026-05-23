# TraceWeaver Plugin 0.1 Release Metadata Record

Status: `STATIC_MARKETPLACE_METADATA_PREPARED_PUBLICATION_HELD`

Date/session: 2026-05-23, Codex, branch `main`

Record ID: `TWCORE-PLUGIN-0.1-RELEASE-METADATA-2026-05-23-001`

Beads issue: `TraceWeaver-8s5`

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- authority source: `requirements.md`
- relevant requirements: REQ-TW-016, REQ-TW-020, REQ-TW-024, REQ-TW-041,
  REQ-TW-043, REQ-TW-060
- traceability source: `traceability-matrix.md`

## Decision

TraceWeaver Core 0.1 metadata is prepared for Codex and Claude Code
marketplace installation and update flows.

This record does not approve runtime-driver invocation, clean CE replacement,
release-ready status, upstream-ready status, R31 validation closure,
slash-command availability, enforcing mode, unconstrained-host support, or
autonomous publication.

## Prepared Artifacts

- `.agents/plugins/marketplace.json`: Codex marketplace entry for
  `traceweaver-core`.
- `.claude-plugin/marketplace.json`: Claude Code marketplace metadata updated
  to 0.1.0.
- `plugins/traceweaver-core/.codex-plugin/plugin.json`: Codex plugin manifest
  updated to 0.1.0 and constrained to loader-safe fields.
- `plugins/traceweaver-core/.claude-plugin/plugin.json`: Claude Code plugin
  manifest updated to 0.1.0.
- `plugins/traceweaver-core/.cursor-plugin/plugin.json`: peer manifest version
  updated to 0.1.0 for consistency.
- `plugins/traceweaver-core/skills/ce-setup/SKILL.md`,
  `plugins/traceweaver-core/skills/ce-test-xcode/SKILL.md`,
  `plugins/traceweaver-core/skills/lfg/SKILL.md`, and
  `plugins/traceweaver-core/skills/tw-auto/SKILL.md`: frontmatter adjusted so
  the Codex plugin validator accepts the packaged skill set.
- `scripts/traceweaver-smoke-codex-discovery`: model-default checks now require
  loader-safe plugin manifests and verify model policy through the install
  manifest plus packaged policy reference.
- `README.md`, `plugins/traceweaver-core/README.md`, and `CHANGELOG.md`:
  install, update, release, and held-claim instructions.

## Update Behavior

Claude Code resolves plugin update identity from `plugin.json` version before
marketplace-entry version, so the Claude manifest must be bumped for each
release. Codex uses the repo marketplace entry to locate
`plugins/traceweaver-core`; the Codex plugin manifest carries the release
version.

The intended release tag for this package is:

```text
traceweaver-core--v0.1.0
```

## Verification Plan

Observed checks for this metadata update:

```text
python3 -m json.tool ...: pass for Codex/Claude/Cursor plugin and marketplace JSON
python3 /Users/hanneszietsman/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py plugins/traceweaver-core: pass
claude plugin validate --strict .: pass
claude plugin validate --strict plugins/traceweaver-core: pass
claude plugin tag --dry-run --force plugins/traceweaver-core: pass, computed traceweaver-core--v0.1.0
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery: pass
TRACEWEAVER_CODEX_EXEC_TIMEOUT_SECONDS=10 scripts/traceweaver-smoke-codex-separate-home-runtime: pass with isolated runtime invocation held for auth-required timeout
scripts/traceweaver-smoke-controlled-publication: pass
TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior: pass with active-host stale surfaces held
implementation-mode code-anchor scan over changed files: pass
scripts/traceweaver-smoke-code-traceability: pass
scripts/traceweaver-generate-traceability-views --root .: pass
scripts/traceweaver-smoke-traceability-generated-views: pass
git diff --check: pass
```

Run these checks again before tagging or publishing a release:

```sh
python3 /Users/hanneszietsman/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py plugins/traceweaver-core
claude plugin validate .
claude plugin validate plugins/traceweaver-core
claude plugin tag --dry-run plugins/traceweaver-core
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery
TRACEWEAVER_CODEX_EXEC_TIMEOUT_SECONDS=10 scripts/traceweaver-smoke-codex-separate-home-runtime
scripts/traceweaver-smoke-controlled-publication
git diff --check
```

Only create and push `traceweaver-core--v0.1.0`, or create a GitHub Release,
after the controlled publication route is clean for the exact release commit.

## Held Claims

- runtime-driver invocation;
- clean CE replacement;
- package-ready, release-ready, or upstream-ready status beyond this static
  metadata preparation record;
- R31 real-project validation closure;
- slash-command or prompt availability;
- enforcing authority gate behavior;
- autonomous commit, push, PR, or release publication;
- unconstrained-host support.

## Suggested Next Step

Run the verification plan above, then use the controlled publication route for
the exact release commit. If it is clean, create the Claude Code plugin tag with
`claude plugin tag plugins/traceweaver-core --message "TraceWeaver Core %s"` and
publish the matching GitHub release.
