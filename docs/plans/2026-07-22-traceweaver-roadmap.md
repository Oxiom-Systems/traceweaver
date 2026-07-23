# TraceWeaver Roadmap: 0.3.x -> 0.4+ (2026-07-23)

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
`docs/validation/traceweaver-plugin-0.3-release.md`. The one-time 0.3.0
publication route is separately owner-ratified by
`docs/plans/2026-07-23-traceweaver-0.3-repair-amendment-2-release-ratification.md`
(approved SHA-256 `0b67c4bfeaf23e849a261976011e0f537437170cb2ee370fff4d0d947d8dbf1f`,
Sol receipt `SOL-AMEND2-2026-07-23-9F1BEAEF`). It does not make the historical
EXC-TW-011 activation valid. Amendment 3 (approved SHA-256
`2b079a94b94d5878201c5efd0d4badcfd3297682c64f30bdf19ad438465e7e7e`, Sol
receipt `SOL-AMEND3-2026-07-23-2B079A94`) narrowly restores the required
`tw-auto` -> `tw-plan` route without broadening the release authority.

## Now — Post-Release Prospective Measurement (U7)

1. **Dogfood `tw-vv-define` on one real work item.** VAL-TW-019 through
   VAL-TW-024 currently have fixture-level evidence only (per
   `docs/validation/traceweaver-plugin-0.3-release.md`, "Held Claims"). Pick
   one real, behavior-bearing work item and run it through
   `tw-plan -> tw-vv-define -> tw-work` end to end, producing representative
   (not just fixture) RED evidence, a real `docs/validation/` validation
   definition artifact, a real capsule handoff, and a passed
   `tw-code-review`/`tw-doc-review` pair, so VAL-TW-019..024 can cite
   real-use evidence instead of fixtures alone. This is prospective post-release
   measurement, not evidence that the 0.3.0 publication has completed dogfood.
2. **Promote REQ-TW-076..081 from `candidate_for_review` to `approved`.**
   Both requirements-quality review (`docs/validation/traceweaver-0.3-req-
   076-081-requirements-review.md`) and scoped doc review
   (`docs/validation/traceweaver-0.3-req-076-081-doc-review.md`) are already
   clean. The remaining step is a baseline amendment (new
   `REQ-AMEND-*` record) plus a doc review of that amendment, consistent
   with how REQ-TW-070..075 were promoted in the 0.2.5 cycle. This is a
   `tw-requirements-review`/`tw-authority-gate` gate, not a code change.

## One-Time 0.3.0 Release Route

3. **Controlled PR, merge, tag, and release.** Amendment 2 is the sole
   authority for this exact `0.3.0` route. It permits the reviewed integration
   branch to merge through the controlled 0.2.8 publication route; the
   version-bump workflow then creates `traceweaver-core--v0.3.0` and its GitHub
   release. It does not authorize deployment, installation, runtime enforcement,
   universal-host activation, dogfood completion, or a general overhead claim.
4. **Future release decisions.** A later release requires its own authority and
   evidence; Amendment 2 is neither reusable publication authority nor a
   release-ready claim.

## Later Runtime Proof Gates

5. **SessionStart live-firing proofs.** For each host recorded `supported`
   in `docs/validation/traceweaver-0.3-hook-host-capability-matrix.md`
   (Claude Code, Cursor, Codex), run the existing per-host U9-style runtime
   proof route to demonstrate the SessionStart hook actually fires and is
   observed in a live agent session, and record the result per host. Static
   fixture/schema evidence (VER-TW-080) does not substitute for this.
6. **Codex plugin auto-adopt decision.** Decide, and record, whether to
   suppress or adopt Codex plugin-loader auto-discovery of
   `hooks/hooks.json` at install time (open/held risk in the capability
   matrix record): either add `"hooks": {}` to
   `plugins/traceweaver-core/.codex-plugin/plugin.json` to suppress it (the pinned-superpowers
   pattern), or explicitly adopt it with its own reviewed evidence. Do this
   before any Codex hook-installation work.

## Enforcing Mode

7. **`traceweaver_mode: enforcing` policy work.** Define what "enforcing"
    would mean project-wide (not just for this one hook) as its own
    candidate requirement before any implementation, consistent with the
    existing held-claim boundary.

## Debt / Beads

8. **Cross-skill wording consistency (bead `TraceWeaver-6h3u`).**
    `tw-code-review`, `tw-audit`, and `tw-traceability-check` still
    reference "test-first evidence" without the newer V&V capsule
    terminology (`tw-vv-capsule/1`, `red_evidence`, capsule reviews). Align
    their wording with the 0.3 vocabulary so reviewers see one consistent
    term set across skills.
9. **Pre-existing main smoke failures (bead `TraceWeaver-ybhr`).**
    `scripts/traceweaver-smoke-no-publication` (missing "## Phase 5:
    TraceWeaver Alpha Stop Before Commit" marker in
    `ce-compound-refresh/SKILL.md`) and
    `scripts/traceweaver-smoke-systems-engineering-audit-closure` (missing
    "## Required Inputs"/"## Required Authority Inputs" section in
    `tw-update/SKILL.md`) both fail on `main` independent of the 0.3
    program. Fix both as a small, separate, reviewed change.
10. **Code Anchor Evidence rows for 0.3 artifacts.** Confirm every new 0.3
    file (the `tw-vv-define` skill and validator, optional SessionStart hook, the capability
    matrix, and their fixtures/smokes) carries the code-anchor coverage
    `scripts/traceweaver-smoke-code-traceability` expects, and extend the
    generated Code Anchor Evidence views if any 0.3 artifact is not yet
    represented there.

## Later Candidates

11. **Subagent-driven-development adaptation.** Evaluate whether the
    cross-model adversarial build/review pairing pattern used for the 0.3
    program's four implementation units (builder/reviewer subagent pairs,
    orchestrator-mediated authority resolution) should become a named,
    reusable TraceWeaver workflow pattern, distinct from ad hoc per-release
    use.
12. **Stop-hook verification-before-completion hook.** Consider a further
    optional advisory hook, in the same non-blocking family as SessionStart,
    that reminds an agent session at a stop/completion
    event to check verification evidence exists before declaring work done.
    Would need its own requirements review, doc review, and capability
    matrix entry before any implementation.
13. **Graphify-based traceability visualization.** Evaluate using
    Graphify (or an equivalent graph-based tool) to render
    `traceability-matrix.md` relationships (REQ -> TRACE -> VER/VAL, and the
    0.3 program's REQ-TW-076..081 chain specifically) as an additional
    generated view alongside the existing dashboard/JSON/Mermaid outputs,
    to reduce repository-orientation token cost per the existing
    Graphify-first guidance.

## Suggested Next Step

After the one-time 0.3.0 release, start with item 1: measured U7 product dogfood
on one real work item. In parallel, item 2 can proceed through its separate
`tw-requirements-review`/`tw-authority-gate` gate. Runtime, enforcing, and
Codex-installation claims remain held; no roadmap item pre-authorizes their
implementation or turns historical repair evidence into a guaranteed overhead
result.
