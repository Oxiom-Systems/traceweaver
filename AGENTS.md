# AGENTS.md

## Codex Global Memory

This repo uses the global Codex memory system configured in `~/.codex/AGENTS.md`.

At session start:
- Read `~/.codex/memory/memory.md`.
- Read `~/.codex/memory/projects.md`.
- If a mapped project memory exists under `~/.codex/memory/projects/`, read its `MEMORY.md`.
- Load `~/.codex/memory/tools/beads.md` when using Beads.

Do not copy global memory rules into this repo; keep durable cross-project notes in `~/.codex/memory/`.

## Beads Issue Tracking

`bd` is installed globally and is available for dependency-aware task tracking.

Use Beads only if this repo has `.beads/`, this file is later updated to require Beads, or the user explicitly asks for `bd`/Beads work. When active:
- Run `bd prime` first.
- Use `bd ready --json`, `bd show <id> --json`, and other `--json` output for agent-readable state.
- Do not use `bd edit`; use `bd update` flags.
- Do not run `bd init` unless the user asks to initialize Beads for this repo.

## TraceWeaver Current Workflow

The current productization path is U6 before U7. Do not start U7 release-claim
records until U6b Unit 2 is patched, executed, and reviewed.

TraceWeaver's current core architecture is Intent Contract centered. Skills are
capabilities, not authority. Every behavior-changing agent handoff must be able
to cite stakeholder intent, an approved requirement or approved exception,
verification method, validation question, and current baseline version.

Use `requirements.md` as the master controlled requirements baseline. The
brainstorm requirement documents under `docs/brainstorms/` are source evidence
and rationale; they are not the controlling baseline by themselves.

Recommended next CE command sequence:

1. Use `/ce-doc-review` against `requirements.md` before treating it as accepted
   planning authority for U6b Unit 2 or U7 claims.
2. Use `/ce-doc-review` against
   `docs/plans/2026-04-30-001-feat-traceweaver-clean-ce-plugin-swap-plan.md`
   if the Unit 2 plan changes again. The current Unit 2 plan requires a CE
   upstream source pin before vendoring selected CE files and requires a
   transitive CE reference-closure audit for selected `references/`, `scripts/`,
   and `assets/` paths. It also requires Intent Contract templates and advisory
   authority-gate guidance.
3. Use `/ce:work` on Unit 2 after the plan patch is committed. Unit 2
   materializes the selected CE-compatible runtime surface inside
   `plugins/traceweaver-core` using
   `docs/validation/traceweaver-core-11-ce-runtime-inventory.md` as authority.
4. Run `/ce-doc-review` against the updated Unit 2 evidence before moving to U7.
5. Start U7 only after Unit 2 passes review. U7 claims must stay narrow:
   installable alpha and advisory/static install evidence may be approved if
   proven; clean CE replacement, dynamic discovery, slash commands, and full
   Core 11 runtime remain held until later proof.

Keep `traceweaver_mode` defaulting to `advisory` for alpha. Do not silently
rewrite CE behavior, do not invent CE workflow files, do not copy CE files
outside the recorded inventory without a new validation delta, and do not let
agent assumptions become implementation authority. If no approved requirement or
approved exception exists, create a gap, proposed requirement, change,
exception, accepted-risk candidate, or clarification record.
