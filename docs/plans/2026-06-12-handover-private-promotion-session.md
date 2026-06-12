<!-- TRACEWEAVER: file-role=session-handover-plan; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Handover: Distilled-Skill Promotion in a Privileged Session

Audience: the next agent session, started with access to the private
source-material repo. Mission: execute the fresh candidate baseline reviews
for the unpromoted distilled domains and promote what passes. Everything
below is current as of branch `claude/system-engineering-framework-review-p1zo6a`
(PR #38, draft).

## 1. Session Setup (human, before starting the agent)

- Add **`Oxiom-Systems/priority-docs`** (the private repo) to the session's
  repository scope alongside `Oxiom-Systems/traceweaver`.
- Confirm the agent may read **only** `outputs/agent-skills-public-candidate/`
  (the scrubbed publication candidates) and
  `outputs/agent-skills/promoted-runtime-snapshot/` (for diffing what was
  promoted before). The private seed folders, `batches/` raw sources,
  conversions, extraction notes, and `standards-alignment-delta.md` files are
  **out of bounds** — they may contain licensed source material.
- State in the kickoff prompt that this access is granted for candidate
  baseline review per GAP-TW-2026-06-12-007. That answers the clarification
  question recorded in that gap.

## 2. Current State (what is already done)

- **Released**: `traceweaver-core--v0.2.4` is live; releases cut
  automatically when a version-bump commit lands on `main`
  (`.github/workflows/release-on-version-bump.yml`; marketplace.json
  `.metadata.version` must equal plugin.json `.version`, release notes come
  from the matching `## <version> ` CHANGELOG section).
- **PR #38 (draft, this branch)**: packaged the 4 formerly stranded guides,
  re-synced 3 drifted ones, wired load instructions into `tw-plan`,
  `tw-audit`, `tw-test-browser`, `tw-test-xcode`, `tw-authority-gate`; added
  the `traceweaver-smoke-distilled-coverage` CI gate, the
  `docs/distilled/promotion-status.md` inventory, and the review protocol.
- **Authority state**: all of this runs as advisory alpha under candidate
  authority. Gap records `GAP-TW-2026-06-12-006` and `-007` are the tracked
  candidates; promotion into `requirements.md` is a human decision and has
  NOT happened. Do not mutate `requirements.md` or the Intent Contract
  baseline without explicit human approval.

## 3. The Task: Per-Domain Candidate Baseline Review

Follow `docs/validation/candidate-baseline-review-protocol.md` exactly. One
review record per domain — no batch promotions. Queue, in leverage order:

1. **validation-planner -> runtime-skill** (validation closure 0/69 is the
   framework's worst measured metric; this is the highest-value promotion)
2. verification-planner -> runtime-skill
3. needs-and-requirements-capture -> guide first (elicitation gap, finding K5)
4. design-decision-reviewer -> guide (trade-study gap, K5)
5. technical-review-and-audit-gate -> runtime-skill
6. baseline-configuration-control -> runtime-skill
7. risk-gap-change-control -> runtime-skill
8. architecture-and-interface-reviewer -> guide
9. traceweaver-lifecycle-orchestrator -> reconcile with `tw-auto`, do not
   blindly promote (overlap decision needed; likely Human decision)

Domains 1-2 and 5-7 already have public guides in `docs/distilled/`; their
review compares the candidate skill material against the existing guide and
decides what the runtime skill adds. Domains 3, 4, 8 have no public output
yet, so hygiene review is from scratch.

Per domain: scope -> source-hygiene checklist -> `tw-requirements-review`
over the normative statements -> promotion decision -> review record at
`docs/validation/candidate-baseline-review-<domain>-<date>.md` -> promote ->
update `promotion-status.md`. Reviews of independent domains can run as
parallel subagents, but each writes its own record.

## 4. How to Promote (established patterns)

**To `runtime-skill`** — copy the `requirements-reviewer` pattern exactly:

- `plugins/traceweaver-core/skills/<name>/SKILL.md` with the core model
  INLINE (survives agents that skip references), a mandatory
  "Reference Loading" section ("Always load X, Y, Z for substantive ..."),
  TRACEWEAVER anchor comments in the header, and original TraceWeaver wording.
- Skill-local `references/` files (operating model, checklist, output schema,
  examples — rewritten, never copied).
- Wire the consuming `tw-*` wrappers to route to it by name (see how
  `tw-requirements-review` routes to `requirements-reviewer`).
- Knowledge skills are internal (NOT `tw-*` prefixed), so they are not
  directly callable and do NOT go in `expected_direct_skills`.

**To `guide-only`** — add the guide to `docs/distilled/`, copy it into
`plugins/traceweaver-core/references/` and skill-local references of its
consumers, and add load lines to the consuming SKILL.md files. The
`distilled-coverage` gate enforces packaging, byte-identity, and >=1 skill
reference automatically.

## 5. Mechanical Gotchas (will bite you if skipped)

- **Adding any skill directory** changes counts in
  `scripts/traceweaver-smoke-tw-skill-behavior`: `skill_file_total`
  (currently 47) and, if the new SKILL.md carries a TRACEWEAVER anchor,
  `anchored_skill_total` (currently 42). Bump both.
- **New `tw-*` callable skills** (only if you add wrappers) must be added to
  `expected_direct_skills` / `expected_visible_skills` / `identity_skills`
  in `scripts/traceweaver-smoke-codex-discovery` and the two arrays + the
  prompt-input line in `scripts/traceweaver-smoke-codex-host-registry`.
- **New skill-local reference files** under existing `tw-*` skills go into
  `required_skill_local_files` in `scripts/traceweaver-smoke-codex-host-registry`.
- **Adding/changing gap records or requirements status** drifts the bounded
  authority snapshot; regenerate with `scripts/traceweaver-smoke-verify --write`
  (never hand-edit `.traceweaver/intent-contract.current.yml`).
- **Update `docs/distilled/promotion-status.md`** for every promotion; the
  coverage gate greps its state column for the promotion-ratio metrics.
- Run the full local suite before pushing:
  `traceweaver-smoke-verify`, `traceweaver-smoke-distilled-coverage`,
  `traceweaver-smoke-antigravity-discovery`,
  `traceweaver-smoke-traceability-generated-views`,
  `traceweaver-smoke-code-traceability`,
  `traceweaver-smoke-controlled-publication`,
  `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 traceweaver-smoke-tw-skill-behavior`,
  `traceweaver-audit-ce-closure`. The codex-discovery smoke needs the Codex
  binary (CI has it); its static asserts run locally before that point.

## 6. Source-Hygiene Hard Lines (from the private repo's own rules)

- Rewritten original TraceWeaver wording only; no copied/closely paraphrased
  standard or handbook text, tables, checklists, examples, ordering, layout.
- No source IDs, licensed-source register rows, private paths, or page
  references in anything public.
- No claims of IEEE / ISO/IEC/IEEE / INCOSE conformance.
- Mermaid diagrams must be original TraceWeaver semantic views.
- If a candidate file fails hygiene, record the failure in the review record
  and hold that domain — do not "fix it up" inline from private seed material.

## 7. Release at the End

When promotions are merged and you want them installable: bump the version
(all four peer plugin manifests + `.claude-plugin/marketplace.json` +
`src/index.ts` `installed_version.json` writer + the antigravity smoke
assertion + README/tag references), convert CHANGELOG `## Unreleased` to
`## <version> - <date>`, merge to `main`, and the release workflow cuts the
tag and GitHub Release. `tw-update` then reports the new version to installed
harnesses.

## 8. Open Human Decisions (do not decide these yourself)

- Promote GAP-TW-2026-06-12-001..007 proposed requirements into
  `requirements.md` (owner decision; affects the verify-gate metrics).
- The `traceweaver-lifecycle-orchestrator` vs `tw-auto` overlap (queue item 9).
- Whether PR #38 merges before or together with the first promotion PR
  (recommended: merge #38 first so the coverage gate protects the promotions).
