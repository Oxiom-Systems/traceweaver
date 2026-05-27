<!-- TRACEWEAVER: file-role=plugin-release-changelog; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Changelog

## 0.2.1 - 2026-05-26

TraceWeaver Core 0.2.1 packages the REQ-TW-069 requirements-quality ranking
update for Codex, Claude Code, Antigravity local install/update flows, and
peer manifests.

### Added

- `tw-requirements-review` now explicitly requires 0-5 requirement quality
  scores, default outcomes, score-as-triage-only boundaries, and
  requirement-set quality findings.
- Added active-host `tw-requirements-review` proof coverage for both installed
  skill-file-read identity and a bounded runtime-output fixture.

### Changed

- Bumped Codex, Claude Code, Antigravity, and Cursor peer plugin manifests to
  `0.2.1`.
- Bumped Claude marketplace metadata to `0.2.1`.
- Updated the Antigravity installer and discovery smoke to write and verify
  installed version `0.2.1`.

### Held

- Broad real-document runtime behavior, package-ready/release-ready claims,
  runtime-driver invocation, clean CE replacement, unconstrained-host support,
  slash-command surfaces, enforcing mode, R31 validation, and autonomous
  publication remain held until their own gates pass.

## 0.2.0 - 2026-05-25

TraceWeaver Core 0.2 packages the latest alpha plugin surface for Codex,
Claude Code, and Antigravity local install/update flows.

### Changed

- Bumped Codex, Claude Code, Antigravity, and Cursor peer plugin manifests to
  `0.2.0`.
- Bumped Claude marketplace metadata to `0.2.0` so Claude Code users can pick
  up the new plugin version.
- Updated the Antigravity installer and discovery smoke to write and verify
  installed version `0.2.0`.
- Updated `tw-auto` approval-only stops so approval/record-only runs that
  explicitly say "do not implement" still name the next wrapper command or
  blocker instead of ending at approval evidence alone.
- Updated `tw-auto` publication-boundary stops so requests that say "stop before
  commit/push/PR" still continue through post-work traceability/review closure
  before naming the next wrapper command or blocker.
- Updated the PR description badge template to label the generated badge as
  Tracewaver Compound Engineering.

### Held

- Package-ready/release-ready claims, runtime-driver invocation, clean CE
  replacement, unconstrained-host support, slash-command surfaces, enforcing
  mode, R31 validation, and autonomous publication remain held until their own
  gates pass.

## 0.1.0 - 2026-05-23

TraceWeaver Core 0.1 packages the current static/advisory alpha plugin surface
for Codex and Claude Code marketplace installation.

### Added

- Codex marketplace metadata at `.agents/plugins/marketplace.json`.
- Claude Code marketplace update instructions for `traceweaver-core`.
- Release checklist and validation notes for the `traceweaver-core--v0.1.0`
  plugin tag.

### Changed

- Bumped Codex, Claude Code, and Cursor plugin manifests from
  `0.1.0-alpha.0` to `0.1.0`.
- Kept TraceWeaver policy details in packaged docs/references rather than
  custom plugin manifest fields so the Codex manifest stays loader-safe.

### Held

- Runtime-driver invocation, clean CE replacement, release-ready/upstream-ready
  status, unconstrained-host support, slash-command surfaces, enforcing mode,
  R31 validation, and autonomous publication remain held.
