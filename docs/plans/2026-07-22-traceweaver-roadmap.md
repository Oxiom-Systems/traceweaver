# TraceWeaver Roadmap: 0.3.x -> 0.4+ (2026-07-22)

Status: controlled planning input only. This is not an approved requirement,
not an authority record, and not an Intent Contract entry. It sequences
already-recorded held claims, gaps, and beads into a suggested order of
work; nothing in this document promotes a requirement, authorizes runtime
behavior, or authorizes publication. Where a step needs authority it should
route through `tw-requirements-review`, `tw-authority-gate`, and/or
`tw-doc-review` before implementation, per the TraceWeaver workflow.

Source basis: `requirements.md` REQ-TW-076..081; the 0.3 owner-direction,
capability-matrix, requirements-review, and doc-review records under
`docs/validation/`; `traceability-matrix.md` rows
TRACE-TW-057..062/VER-TW-077..082/VAL-TW-019..024; and
`docs/validation/traceweaver-plugin-0.3-release.md`.

## Now — 0.3.0 Release Route

1. **Controlled PR to `main`.** Open a feature-branch PR from the
   `codex/traceweaver-0.3-validation-first` integration branch (or its
   docs-unit branch) into `dev`/`main` per the branching policy. Do not
   commit directly to `main`.
2. **Version bump at merge only.** Bump plugin/marketplace manifests and
   `CHANGELOG.md`'s implicit version reference to `0.3.0` as part of the
   merge-to-main commit, consistent with "no version bumps on feature
   branches or `dev`". Cut the `traceweaver-core--v0.3.0` tag via the
   existing `Release on version bump` workflow, following the
   `traveweaver-plugin-0.2-release.md` pattern.
3. **Post-release evidence records.** After the tag/GitHub Release publish,
   record post-release publication evidence (tag, release URL, release
   commit) in a new `.traceweaver/trace-records/2026-07-22-plugin-0.3-
   release-publication.yml`-style record, and update
   `docs/validation/traceweaver-plugin-0.3-release.md` with the confirmed
   publication result, following the 0.2 record's running-log convention.

## Next — Validation Of The Validators

4. **Dogfood `tw-vv-define` on one real work item.** VAL-TW-019 through
   VAL-TW-024 currently have fixture-level evidence only (per
   `docs/validation/traceweaver-plugin-0.3-release.md`, "Held Claims"). Pick
   one real, behavior-bearing work item and run it through
   `tw-plan -> tw-vv-define -> tw-work` end to end, producing representative
   (not just fixture) RED evidence, a real `docs/validation/` validation
   definition artifact, a real capsule handoff, and a passed
   `tw-code-review`/`tw-doc-review` pair, so VAL-TW-019..024 can cite
   real-use evidence instead of fixtures alone.
5. **Promote REQ-TW-076..081 from `candidate_for_review` to `approved`.**
   Both requirements-quality review (`docs/validation/traceweaver-0.3-req-
   076-081-requirements-review.md`) and scoped doc review
   (`docs/validation/traceweaver-0.3-req-076-081-doc-review.md`) are already
   clean. The remaining step is a baseline amendment (new
   `REQ-AMEND-*` record) plus a doc review of that amendment, consistent
   with how REQ-TW-070..075 were promoted in the 0.2.5 cycle. This is a
   `tw-requirements-review`/`tw-authority-gate` gate, not a code change.

## Per-Host Runtime Proof Gates

6. **SessionStart live-firing proofs.** For each host recorded `supported`
   in `docs/validation/traceweaver-0.3-hook-host-capability-matrix.md`
   (Claude Code, Cursor, Codex), run the existing per-host U9-style runtime
   proof route to demonstrate the SessionStart hook actually fires and is
   observed in a live agent session, and record the result per host. Static
   fixture/schema evidence (VER-TW-080) does not substitute for this.
7. **Codex PreToolUse capability resolution.** Codex x PreToolUse is
   currently `unproven`
   (`docs/validation/traceweaver-0.3-codex-hook-capability-discovery.md`):
   only partial binary-string evidence exists (`PreToolUse*Wire` structs,
   `CLAUDE_PLUGIN_ROOT`), with no documented/active schema surface. Rerun
   discovery against a current Codex release; resolve the cell to either
   `supported` (with fixture/schema/smoke evidence, then queued for its own
   runtime proof gate) or `unsupported-gap` (with a discovery-evidence
   record closing the question) per REQ-TW-081's rules.
8. **Codex plugin auto-adopt decision.** Decide, and record, whether to
   suppress or adopt Codex plugin-loader auto-discovery of
   `hooks/hooks.json` at install time (open/held risk in the capability
   matrix record): either add `"hooks": {}` to
   `.codex-plugin/plugin.json` to suppress it (the pinned-superpowers
   pattern), or explicitly adopt it with its own reviewed evidence. Do this
   before any Codex hook-installation work.

## Enforcing Mode

9. **Blocking PreToolUse variant behind its own runtime proof gate.** Any
   future blocking/enforcing PreToolUse behavior is out of scope for 0.3 and
   remains held per REQ-TW-080 and the project-wide
   `traceweaver_mode: enforcing` hold. Treat it as a separate future
   candidate requirement requiring its own requirements review, doc review,
   and runtime proof route once the advisory hook has runtime-proof evidence
   on at least one host.
10. **`traceweaver_mode: enforcing` policy work.** Define what "enforcing"
    would mean project-wide (not just for this one hook) as its own
    candidate requirement before any implementation, consistent with the
    existing held-claim boundary.

## Debt / Beads

11. **Cross-skill wording consistency (bead `TraceWeaver-6h3u`).**
    `tw-code-review`, `tw-audit`, and `tw-traceability-check` still
    reference "test-first evidence" without the newer V&V capsule
    terminology (`tw-vv-capsule/1`, `red_evidence`, capsule reviews). Align
    their wording with the 0.3 vocabulary so reviewers see one consistent
    term set across skills.
12. **Pre-existing main smoke failures (bead `TraceWeaver-ybhr`).**
    `scripts/traceweaver-smoke-no-publication` (missing "## Phase 5:
    TraceWeaver Alpha Stop Before Commit" marker in
    `ce-compound-refresh/SKILL.md`) and
    `scripts/traceweaver-smoke-systems-engineering-audit-closure` (missing
    "## Required Inputs"/"## Required Authority Inputs" section in
    `tw-update/SKILL.md`) both fail on `main` independent of the 0.3
    program. Fix both as a small, separate, reviewed change.
13. **Code Anchor Evidence rows for 0.3 artifacts.** Confirm every new 0.3
    file (the `tw-vv-define` skill and validator, both hooks, the capability
    matrix, and their fixtures/smokes) carries the code-anchor coverage
    `scripts/traceweaver-smoke-code-traceability` expects, and extend the
    generated Code Anchor Evidence views if any 0.3 artifact is not yet
    represented there.

## Later Candidates

14. **Subagent-driven-development adaptation.** Evaluate whether the
    cross-model adversarial build/review pairing pattern used for the 0.3
    program's four implementation units (builder/reviewer subagent pairs,
    orchestrator-mediated authority resolution) should become a named,
    reusable TraceWeaver workflow pattern, distinct from ad hoc per-release
    use.
15. **Stop-hook verification-before-completion hook.** Consider a further
    advisory hook, in the same non-blocking family as the SessionStart and
    PreToolUse hooks, that reminds an agent session at a stop/completion
    event to check verification evidence exists before declaring work done.
    Would need its own requirements review, doc review, and capability
    matrix entry before any implementation.
16. **Graphify-based traceability visualization.** Evaluate using
    Graphify (or an equivalent graph-based tool) to render
    `traceability-matrix.md` relationships (REQ -> TRACE -> VER/VAL, and the
    0.3 program's REQ-TW-076..081 chain specifically) as an additional
    generated view alongside the existing dashboard/JSON/Mermaid outputs,
    to reduce repository-orientation token cost per the existing
    Graphify-first guidance.

## Suggested Next Step

Start with item 1 (open the controlled PR from the integration branch into
`dev`/`main`); do not bump the version or tag before that PR merges. In
parallel, item 5 (baseline-amendment promotion of REQ-TW-076..081) can
proceed once a `tw-requirements-review`/`tw-authority-gate` pass is
scheduled, since both prerequisite reviews are already clean. Runtime,
enforcing, and Codex-installation claims (items 6-9) remain held until their
own proof gates pass; do not treat any roadmap item here as pre-authorized
implementation.
