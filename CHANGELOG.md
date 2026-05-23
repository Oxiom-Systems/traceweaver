<!-- TRACEWEAVER: file-role=plugin-release-changelog; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Changelog

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
