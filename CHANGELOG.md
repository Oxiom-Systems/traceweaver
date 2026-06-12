<!-- TRACEWEAVER: file-role=plugin-release-changelog; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Changelog

## 0.2.5 - 2026-06-12

Distilled-knowledge transfer and promotion release: wire stranded guides into
their consuming skills, make private-to-public knowledge promotion mechanically
checkable, execute the candidate baseline review queue (five domains promoted
to packaged knowledge skills, three to public distilled guides), and promote
the 2026-06-12 framework-review gap candidates into approved baseline
requirements REQ-TW-070 through REQ-TW-075 by project-owner decision. Runtime,
enforcing, clean-replacement, and broader release claims remain held.

### Added

- Approved requirements REQ-TW-070 - REQ-TW-075 in `requirements.md`
  (bounded authority snapshot, mechanical gates, validation-closure metric,
  explicit SE scope framing, distilled-guide coverage rule, and the
  candidate-baseline promotion protocol), promoted from gap records
  GAP-TW-2026-06-12-001..007 with owner approval on 2026-06-12; the canonical
  baseline hash was rotated and the matrix, trace, ATP, result, verification,
  and validation evidence rows (TRACE-TW-056, ATP-TW-040, RESULT-TW-040,
  VER-TW-075, VAL-TW-018) were added, with generated views and the bounded
  snapshot regenerated. GAP-TW-2026-06-12-003 was resolved with
  created-on-first-use semantics for `.traceweaver/` record directories, and
  the GAP-TW-2026-06-12-007 access-route clarification was answered
  (session-scoped private-candidate access per named review).
- README statements for the intended systems-engineering scope (REQ-TW-073)
  and for which gates are mechanical versus LLM judgment (REQ-TW-071), and a
  `tw-auto` output-contract clause naming the validation-closure ratio
  (REQ-TW-072).
- Owner decision recorded for the `traceweaver-lifecycle-orchestrator`
  overlap: do not promote; `tw-auto` stays the public orchestration surface,
  and candidate-only routing assets may fold into `tw-auto` references only
  via a later gated change.

- Five packaged distilled knowledge skills, each promoted through a per-domain
  candidate baseline review record under `docs/validation/` (source hygiene
  plus requirements-quality gate per the candidate-baseline-review protocol,
  GAP-TW-2026-06-12-007): `validation-planner`, `verification-planner`,
  `technical-review-and-audit-gate`, `baseline-configuration-control`, and
  `risk-gap-change-control`. Each follows the `requirements-reviewer` pattern
  (inline core model, mandatory reference loading, skill-local operating
  model/checklist/output schema/source basis/examples) and is routed by name
  from its consuming wrappers (`tw-plan`, `tw-audit`, `tw-test-browser`,
  `tw-test-xcode`, `tw-authority-gate`, `systems-engineering-traceability`).
- Three new public distilled guides promoted from private-only with review
  records: `needs-and-requirements-capture-guide.md` (elicitation gap, finding
  K5; wired into `tw-brainstorm` and `tw-grill`),
  `design-decision-reviewer-guide.md` (trade-study gap, K5; wired into
  `tw-plan` and `tw-doc-review`), and
  `architecture-and-interface-reviewer-guide.md` (wired into `tw-plan` and
  `tw-code-review`), each packaged centrally and skill-locally under the
  distilled-coverage gate.
- `docs/validation/candidate-baseline-review-traceweaver-lifecycle-orchestrator-2026-06-12.md`:
  overlap analysis of the private lifecycle orchestrator against `tw-auto`,
  with options laid out; the promotion/overlap decision remains held for the
  project owner.
- `scripts/traceweaver-smoke-distilled-coverage` (wired into CI): anti-stranding
  gate that fails when any `docs/distilled/` guide is missing from the packaged
  plugin references, drifted from its source of truth (central or skill-local
  copies), referenced by zero skills, or absent from the promotion-status
  inventory. Reports the domain promotion ratio.
- `docs/distilled/promotion-status.md`: inventory mapping each privately
  distilled systems-engineering domain to its public guide and runtime
  packaging state (runtime-skill / guide-only / private-only).
- `docs/validation/candidate-baseline-review-protocol.md`: the per-domain
  review protocol required before promoting any unpromoted distilled domain,
  with the current promotion queue. Tracked by GAP-TW-2026-06-12-007.
- Packaged the four stranded distilled guides (verification-planner,
  validation-planner, baseline-configuration-control,
  technical-review-and-audit-gate) into the plugin references and skill-local
  references, and wired load instructions into `tw-plan`, `tw-audit`,
  `tw-test-browser`, `tw-test-xcode`, and `tw-authority-gate`.

### Fixed

- Re-synced three previously packaged guides (requirements-and-vv,
  risk-gap-and-change-control, systems-engineering-traceability-operating-model)
  that had silently drifted behind their `docs/distilled/` source of truth,
  including skill-local copies.

## 0.2.4 - 2026-06-12

Framework engineering pass: a mechanical self-check gate plus a controlled
refresh of the vendored Compound Engineering surface. Runtime, enforcing,
clean-replacement, runtime-equivalent CE behavior, release-ready, package-ready,
and publication claims remain held.

### Added

- `tw-update` skill: an in-harness "stay current" path. It checks the installed
  TraceWeaver Core version against the latest release and prints the exact update
  command for the active harness (Claude Code, Codex, Antigravity). Added a
  dedicated **Updating** section to the README and clarified that TraceWeaver
  releases from `main` (version bump + `traceweaver-core--v<version>` tag +
  GitHub Release), so the marketplace tracks the current release rather than an
  off-limits dev branch.
- `scripts/traceweaver-smoke-verify`: a one-screen mechanical gate that
  recomputes the canonical baseline hash and asserts `requirements.md` and the
  Intent Contract agree, regenerates and drift-checks a bounded human-readable
  authority snapshot (`.traceweaver/intent-contract.current.yml`, schema under
  `.traceweaver/schema/`), and surfaces the validation-closure ratio and an
  authority-reviewability metric. Wired into the smoke-tests CI workflow.

### Changed

- Refreshed the selected Compound Engineering compatibility surface from
  upstream `compound-engineering-v3.9.0` to `compound-engineering-v3.12.0`
  (commit `4719dc5`). TraceWeaver authority overlays (package-boundary sections,
  anchors, held-publication neutering) and the temp-path redaction policy were
  preserved through a 3-way merge; 54 of 57 changed files auto-merged and 3 were
  resolved favoring upstream in the conflicting regions. Updated the source pin
  and regenerated the selected-file inventory; the CE closure audit passes.

### Held / follow-up

- The `ce-replacement-classification.yml` expected-hash records remain stale
  (pre-existing, including for unchanged `tw-*` skills) and are refreshed
  separately from this CE source update.

## 0.2.3 - 2026-05-30

TraceWeaver Core 0.2.3 documents how to make the `tw-*` skills available across
repositories and adds an optional kit for Claude Code on the web. There are no
runtime or skill-behavior changes in this release.

### Added

- `examples/claude-code-on-web/` kit: an `extraKnownMarketplaces` snippet and a
  `SessionStart` install hook that make the `tw-*` skills available in
  web/cloud sessions, which start from a fresh container without locally
  installed plugins.

### Changed

- Bumped Codex, Claude Code, Antigravity, Cursor, and Claude marketplace
  metadata to `0.2.3`.
- Updated README and plugin README install examples to use
  `traceweaver-core--v0.2.3`, and bumped the version-identity references in the
  prompt-to-proof guide and the packaged CE upstream source inventory to
  `0.2.3` (the selected CE 3.9.0 source pin is unchanged).
- Clarified in the Claude setup docs that a user-scope plugin install makes the
  `tw-*` skills available in every repository on the desktop app and in mobile
  remote-control sessions, and that web/cloud sessions need the committed kit.

### Held

- Auto-enabling a marketplace plugin in cloud sessions without a committed hook
  is not available; the web kit is a documented best-effort workaround, not a
  turn-key plugin-only install.
- Package-ready/release-ready claims, broad runtime behavior, runtime-driver
  invocation, clean CE replacement, unconstrained-host support, slash-command
  surfaces, enforcing mode, R31 validation, and autonomous publication remain
  held until their own gates pass.

## 0.2.2 - 2026-05-27

TraceWeaver Core 0.2.2 documents the CE 3.9.0 selected compatibility surface
as the intended post-publication install target for Codex, Claude Code,
Antigravity local installs, and peer manifests.

### Changed

- Bumped Codex, Claude Code, Antigravity, Cursor, and Claude marketplace
  metadata to `0.2.2`.
- Updated README and plugin README install examples to use
  `traceweaver-core--v0.2.2`.
- Clarified that selected CE-derived implementation components are refreshed
  from Compound Engineering `3.9.0`, while direct CE parity, runtime
  equivalence, and clean replacement remain held.
- Updated the Antigravity installer and discovery smoke to write and verify
  installed version `0.2.2`.

### Held

- Package-ready/release-ready claims, broad runtime behavior, runtime-driver
  invocation, clean CE replacement, unconstrained-host support, slash-command
  surfaces, enforcing mode, R31 validation, and autonomous publication remain
  held until their own gates pass.

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
