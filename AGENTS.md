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

U7 is accepted only for narrow static/advisory `tw-auto`, `lfg`, and README
install-command claims. Runtime, U9, release-ready, clean-replacement,
enforcing, slash-command, dynamic-discovery, autonomous-publication, and
`tw-grill` authority claims remain held.

TraceWeaver's current core architecture is Intent Contract centered. Skills are
capabilities, not authority. Every behavior-changing agent handoff must be able
to cite stakeholder intent, an approved requirement or approved exception,
verification method, validation question, and current baseline version.

Core product intent: TraceWeaver is the Compound Engineering method repackaged
with systems-engineering authority, not a bundle of adjacent TW skills plus raw
CE skills. Preserve the simple CE flow, but wrap/alias CE-derived steps so idea,
brainstorm, plan, work, review, and compound learning carry requirement quality,
authority gates, traceability-matrix updates, verification evidence, validation
questions, gap/change/exception routing, and dark-behavior detection.

Use `requirements.md` as the master controlled requirements baseline. The
brainstorm requirement documents under `docs/brainstorms/` are source evidence
and rationale; they are not the controlling baseline by themselves.

Every TraceWeaver task response must end with suggested next steps. Name the
next recommended CE command, TraceWeaver gate, evidence record, or held
condition. If the correct next action is "do not proceed," say which blocker or
review finding must close first. Do not leave the next workflow step implicit.

## TraceWeaver Skill Routing

TraceWeaver skills are advisory control surfaces for alpha. Suggest them when
the task needs intent, authority, requirements quality, traceability,
verification, validation, or held-claim routing. Do not present a `tw-*` skill
as runtime-proven automation unless a later U9/runtime record proves it.
Before suggesting a `tw-*` skill, confirm the TraceWeaver-packaged skill is
available in the host skill list. If it is not available, say it must be
installed/refreshed or use manual CE commands with TraceWeaver gates instead.

Suggest `tw-requirements-review` when:
- the user is drafting, editing, or promoting requirements, acceptance criteria,
  needs, PRDs, issue scopes, or planning statements into implementation
  authority;
- a requirement is ambiguous, unverifiable, source-free, mixed with design
  notes, or missing validation questions;
- `requirements.md` changes, REQ-TW-048 promotion is considered, or an agent is
  about to treat brainstorm/source material as authority.

Suggest `tw-authority-gate` before implementation when:
- the work changes meaningful behavior, skill instructions, workflow routing,
  installed artifacts, validation claims, public docs, release/package claims,
  provenance, or the authority chain itself;
- the claimed authority is unclear, candidate-only, stale, inferred from a task,
  or based on an agent assumption;
- the next step would otherwise proceed to `/ce:work`, implementation, review
  fixes, or task execution without citing stakeholder intent, approved
  requirement/exception, verification method, validation question, and current
  baseline hash.

Suggest `tw-traceability-check` when:
- `traceability-matrix.md` must be created, refreshed, or checked before a work
  item is called complete;
- a plan, PR, evidence record, validation record, or release claim needs a
  visible chain from need and approved authority through implementation,
  verification, and validation;
- behavior may be dark, duplicated, logical-but-uncaptured, missing tests or
  verification evidence, or missing validation questions.

Suggest `tw-auto` only for bounded advisory CE-style loops where the user wants
TraceWeaver-controlled plan/work/review iteration. Before suggesting it, make
clear that alpha `tw-auto` is static/advisory: it must load or bootstrap
`requirements.md`, `traceability-matrix.md`, and
`.traceweaver/intent-contract.yml`; it must stop for missing authority; it must
update trace evidence; and it must stop before commit, push, PR, release, or
runtime/enforcing claims.

Suggest `tw-grill` only as candidate source-evidence intent deepening until
REQ-TW-048 is promoted by requirements review. Its output may inform
requirements work, but it is not implementation authority by itself.

Recommended next CE/TW command sequence:

1. Treat U7 as narrowly accepted for static/advisory `tw-auto`, `lfg`, and
   README install-command claims only; keep runtime, U9, release-ready,
   clean-replacement, enforcing, slash-command, dynamic-discovery, autonomous
   publication, and `tw-grill` authority claims held.
2. Run `/ce-code-review` and `/ce-doc-review` on the refreshed U7 record,
   `traceability-matrix.md`, `requirements.md`, and
   `.traceweaver/intent-contract.yml` before using the refreshed authority state
   as U9 input.
3. Use `/ce:work` only for the next held blocker named by the latest review,
   matrix row, U7 record, or Intent Contract. Do not proceed to U9/runtime work
   until the refreshed authority evidence records clean review.
4. Keep REQ-TW-048 and `tw-grill` candidate/source-evidence only until a
   separate requirements review promotes them.

Keep `traceweaver_mode` defaulting to `advisory` for alpha. Do not silently
rewrite CE behavior, do not invent CE workflow files, do not copy CE files
outside the recorded inventory without a new validation delta, and do not let
agent assumptions become implementation authority. If no approved requirement or
approved exception exists, create a gap, proposed requirement, change,
exception, accepted-risk candidate, or clarification record.
