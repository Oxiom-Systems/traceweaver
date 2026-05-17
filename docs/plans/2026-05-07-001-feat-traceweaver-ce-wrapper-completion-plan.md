---
title: "feat: Complete TraceWeaver wrappers for packaged CE continuity skills"
type: feat
status: candidate
date: 2026-05-07
---

# feat: Complete TraceWeaver wrappers for packaged CE continuity skills

## Summary

Add first-class `tw-*` wrappers for the remaining packaged CE continuity skills
that users reasonably expect after replacing the CE plugin. The goal is to make
the TraceWeaver path the normal user-facing path while keeping CE skills as
packaged implementation engines behind TraceWeaver authority, traceability,
verification, review-staging, and no-publication boundaries.

This plan is candidate implementation input. It does not approve new
requirements, runtime claims, publication claims, clean CE replacement, or Vestro
readiness.

---

## Operating Mode

Implementation Gate Mode planning.

The work decomposes already-reviewed REQ-TW-052 wrapper-backlog authority into a
bounded implementation plan. It does not change requirements or held claims. If
implementation discovers that a wrapper needs broader authority, remote
mutation, publication, runtime claims, or requirements changes, pause and route
to `tw-requirements-review` / `tw-doc-review` before continuing.

---

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`
- Primary requirements: REQ-TW-041, REQ-TW-043, REQ-TW-044, REQ-TW-052,
  REQ-TW-053, REQ-TW-054, REQ-TW-056, REQ-TW-057
- Current backlog authority: REQ-TW-052 requires every familiar CE skill to have
  a TraceWeaver route, alias, selected manual-continuity status, hidden/internal
  status, held future status, or out-of-scope decision.
- Existing evidence: VER-TW-034 records the wrapper backlog; VER-TW-040 records
  the current TW skill-behavior fixture; VER-TW-045 records active-host
  filesystem/hash currentness for the current wrapper set; VER-TW-046 records
  `tw-plan` wrapper static fixture evidence.
- New candidate chain for this plan:
  - Artifact: ART-TW-051
  - Trace: TRACE-TW-037
  - ATP: ATP-TW-021
  - Result: RESULT-TW-021
  - Verification: VER-TW-047

Validation question: Can a user invoke TraceWeaver-controlled wrappers for the
remaining packaged CE continuity workflows without bypassing authority,
traceability, verification, review-staging, or publication gates?

---

## Wrapper Set

Implement these wrappers as direct-callable TraceWeaver skills:

| CE engine | TraceWeaver wrapper | Primary role |
| --- | --- | --- |
| `ce-brainstorm` | `tw-brainstorm` | Source-evidence brainstorm and authority bootstrap planning. |
| `ce-compound` | `tw-compound` | Learning capture as source evidence, not authority rewrite. |
| `ce-compound-refresh` | `tw-compound-refresh` | Stale-learning refresh with no silent requirements mutation. |
| `ce-resolve-pr-feedback` | `tw-resolve-pr-feedback` | PR-review feedback repair under TraceWeaver review/publication gates. |
| `ce-sessions` | `tw-sessions` | Prior-session context lookup as source evidence only. |
| `ce-test-browser` | `tw-test-browser` | Browser verification evidence linked to matrix/verification IDs. |
| `ce-test-xcode` | `tw-test-xcode` | Xcode verification evidence linked to matrix/verification IDs. |
| `ce-setup` | `tw-setup` | Environment diagnostics and setup evidence with mutation boundaries. |
| `ce-worktree` | `tw-worktree` | Local worktree creation with authority and no-publication boundaries. |

Keep these packaged CE session primitives hidden/internal under `tw-sessions`
instead of making them direct-callable user-facing wrappers:

| CE engine | TraceWeaver route | Primary role |
| --- | --- | --- |
| `ce-session-inventory` | hidden/internal helper used by `tw-sessions` | Agent-facing session metadata primitive. |
| `ce-session-extract` | hidden/internal helper used by `tw-sessions` | Agent-facing session extraction primitive. |

Keep the CE skill files packaged. They are the underlying engines; they are not
accepted TraceWeaver closure paths when invoked directly.

---

## Requirements

- R1. Every wrapper must load TraceWeaver authority context before delegating:
  `requirements.md`, `traceability-matrix.md`, `.traceweaver/intent-contract.yml`,
  and relevant skill-local operating-mode policy.
- R2. Wrappers must pause when requirements are missing, unclear,
  contradictory, stale, incomplete, or imply material authority change.
- R3. Wrappers may propose requirements, gaps, changes, exceptions,
  clarification questions, or source-evidence records, but must not approve or
  rewrite requirements.
- R4. Wrappers must delegate only to TraceWeaver-packaged CE engines, not to an
  external CE plugin dependency.
- R5. Wrappers that produce verification evidence (`tw-test-browser`,
  `tw-test-xcode`) must require or report the relevant requirement, trace, and
  verification IDs so `tw-work` / `tw-code-review` can update or check matrix
  evidence.
- R6. Wrappers that inspect historical context (`tw-sessions` and its hidden
  `ce-session-inventory` / `ce-session-extract` helper route) must classify
  prior-session output as source evidence only. Prior sessions cannot override
  accepted requirements, Intent Contract state, matrix rows, or current
  verification.
- R7. Wrappers with local or remote mutation risk (`tw-resolve-pr-feedback`,
  `tw-setup`, `tw-worktree`) must name allowed local actions, blocked remote or
  publication actions, required user confirmation, and handoff to
  `tw-commit` / `tw-commit-push-pr` when publication is requested.
- R8. `tw-auto` and `using-agent-skills` must prefer the new wrappers over raw
  CE skills in TraceWeaver-controlled workflows.
- R9. Install/discovery and active-host reconciliation smokes must include the
  new wrapper set and their packaged CE dependencies.
- R10. Static fixtures must prove delegation routing, pause behavior, and held
  claims before any runtime claim is made.

---

## Scope Boundaries

In scope:

- Add the wrapper skill files under `plugins/traceweaver-core/skills/`.
- Add skill-local operating-mode references where the wrapper depends on local
  policy.
- Update `tw-auto` and `using-agent-skills` routing so TraceWeaver users see the
  TW wrappers first.
- Extend deterministic skill-behavior smoke fixtures for wrapper presence,
  delegation wording, pause behavior, and no-publication boundaries.
- Extend install/discovery and host-reconciliation smokes for packaged and
  direct-callable visibility.
- Add source anchors and Code Anchor Evidence rows for new behavior-bearing
  wrapper files when mappings are unambiguous.

Out of scope:

- Runtime proof that Codex invokes each wrapper as a loaded skill.
- Remote PR mutation, issue mutation, Slack/email mutation, branch push, commit,
  PR creation/update, or release action.
- Vestro use.
- Clean CE replacement, full CE 3.5.0 parity, release/package/upstream
  readiness, and unconstrained-host support.
- Wrapping missing CE 3.5.0 skills outside this packaged-continuity set.

---

## Design

### Wrapper Template

Each new wrapper should follow the same high-level structure:

1. Purpose and trigger surface.
2. TraceWeaver authority preflight.
3. Operating-mode classification.
4. Requirements-quality pause rule.
5. Delegation to the packaged CE engine.
6. Allowed outputs.
7. Blocked outputs and held claims.
8. Next TraceWeaver handoff.
9. Source anchor comment:
   `<!-- TRACEWEAVER: file-role=<role>; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->`

### Wrapper Categories

Source-evidence wrappers:

- `tw-brainstorm`
- `tw-compound`
- `tw-compound-refresh`
- `tw-sessions`

These wrappers can produce useful context, draft requirements, learning notes,
or session summaries. They must label outputs as source evidence until accepted
requirements, gaps, changes, or exceptions are reviewed.

`ce-session-inventory` and `ce-session-extract` remain packaged hidden/internal
helpers for `tw-sessions`; do not create direct-callable `tw-session-inventory`
or `tw-session-extract` user-facing surfaces in this slice.

Verification wrappers:

- `tw-test-browser`
- `tw-test-xcode`

These wrappers can produce verification evidence. They should require a target
requirement/trace/verification context when the test result is meant to close a
TraceWeaver gate; otherwise they must report the evidence as exploratory or
held.

Mutation-risk wrappers:

- `tw-resolve-pr-feedback`
- `tw-setup`
- `tw-worktree`

These wrappers need stronger boundaries. They may run local diagnostics,
prepare local fixes, create local worktrees, or summarize PR feedback, but must
not publish, push, resolve remote threads, update PRs, or mutate external state
unless routed through a separate controlled publication or user-confirmed remote
gate.

---

## Implementation Plan

### U1. Add Wrapper Skill Files

Create:

- `plugins/traceweaver-core/skills/tw-brainstorm/SKILL.md`
- `plugins/traceweaver-core/skills/tw-compound/SKILL.md`
- `plugins/traceweaver-core/skills/tw-compound-refresh/SKILL.md`
- `plugins/traceweaver-core/skills/tw-resolve-pr-feedback/SKILL.md`
- `plugins/traceweaver-core/skills/tw-sessions/SKILL.md`
- `plugins/traceweaver-core/skills/tw-test-browser/SKILL.md`
- `plugins/traceweaver-core/skills/tw-test-xcode/SKILL.md`
- `plugins/traceweaver-core/skills/tw-setup/SKILL.md`
- `plugins/traceweaver-core/skills/tw-worktree/SKILL.md`

Each wrapper must explicitly name the packaged CE skill it delegates to.
`tw-sessions` must also name `ce-session-inventory` and `ce-session-extract` as
hidden/internal packaged helpers that must not be exposed as direct-callable
TraceWeaver skills.

### U2. Add Skill-Local Policy References

Add `references/traceweaver-operating-modes.md` for wrappers that need local
policy access. A shared template is acceptable, but installed direct-callable
skill roots must be able to load the policy without relying on plugin-root
relative paths.

### U3. Wire TraceWeaver Routing

Update:

- `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
- `plugins/traceweaver-core/skills/using-agent-skills/SKILL.md`
- `plugins/traceweaver-core/README.md`
- install/discovery required-skill lists in the relevant smoke scripts

`tw-auto` should route planning, work, review, debug, session lookup, testing,
worktree setup, feedback repair, and learning capture through `tw-*` wrappers
when operating under TraceWeaver.

### U4. Add Deterministic Fixtures

Extend `fixtures/tw-skill-behavior/` with minimal wrapper fixture outputs:

- `tw-brainstorm-source-evidence/brainstorm-result.txt`
- `tw-compound-source-evidence/compound-result.txt`
- `tw-compound-refresh-held-authority/refresh-result.txt`
- `tw-resolve-pr-feedback-local-repair/feedback-result.txt`
- `tw-sessions-source-evidence/session-result.txt`
- `tw-sessions-hidden-helpers/helper-result.txt`
- `tw-test-browser-verification-evidence/browser-result.txt`
- `tw-test-xcode-verification-evidence/xcode-result.txt`
- `tw-setup-local-diagnostic/setup-result.txt`
- `tw-worktree-local-only/worktree-result.txt`

The fixtures should prove static delegation and boundary semantics, not runtime
skill invocation.

### U5. Extend Smokes

Extend:

- `scripts/traceweaver-smoke-tw-skill-behavior`
- `scripts/traceweaver-smoke-codex-discovery`
- `scripts/traceweaver-smoke-codex-host-registry`
- `scripts/traceweaver-smoke-codex-host-reconciliation`

The smoke must verify:

- wrapper files exist;
- packaged CE engine files exist;
- hidden/internal `ce-session-inventory` and `ce-session-extract` are available
  to `tw-sessions` without becoming required direct-callable wrapper surfaces;
- source anchors are present;
- `tw-auto` / skill routing mentions the TW wrapper route;
- negative fixtures keep source evidence, remote mutation, publication, and
  runtime claims held.

### U6. Add Trace Anchors And Matrix Evidence

Use `tw-work`'s authoring helper when mappings are unambiguous to add:

- file-level anchors for each new wrapper skill;
- verification anchors for new fixtures and smoke changes;
- Code Anchor Evidence rows for the new wrapper files and fixture/smoke paths.

Pause instead of writing if a wrapper needs a requirement beyond REQ-TW-052,
REQ-TW-053, REQ-TW-056, or REQ-TW-057.

### U7. Review And Record Once

Run:

```sh
/tw-code-review scoped to TW wrapper completion skill files, routing changes, fixtures, smokes, and Code Anchor Evidence
```

If clean, record one code-review ID against ART-TW-051 / TRACE-TW-037 /
ATP-TW-021 / RESULT-TW-021 / VER-TW-047.

Then run one scoped:

```sh
/tw-doc-review for the wrapper-completion status/hash update only
```

Do not restart broad authority polishing for unrelated historical wording unless
it changes allowed behavior, runtime/publication claims, requirements, artifact
identity for the current gate, or material authority.

### U8. Active-Host Reconciliation

After static code/doc review passes, rerun active-host reconciliation and host
registry smokes so the new direct-callable wrappers are visible/current.

Runtime behavior remains held unless a separate fresh-session runtime proof is
explicitly scoped and reviewed.

---

## Verification Plan

Minimum deterministic checks:

```sh
ruby -e 'require "yaml"; YAML.load_file(".traceweaver/intent-contract.yml"); puts "intent_yaml=parse_ok"'
scripts/traceweaver-smoke-tw-skill-behavior
scripts/traceweaver-smoke-codex-discovery
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-host-registry
scripts/traceweaver-smoke-codex-host-reconciliation
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --changed-file <each changed wrapper/smoke/fixture>
git diff --check
```

Expected static outputs:

- `tw_brainstorm_packaged_ce_delegation_fixture=pass`
- `tw_compound_packaged_ce_delegation_fixture=pass`
- `tw_compound_refresh_packaged_ce_delegation_fixture=pass`
- `tw_resolve_pr_feedback_packaged_ce_delegation_fixture=pass`
- `tw_sessions_packaged_ce_delegation_fixture=pass`
- `tw_sessions_hidden_session_helpers=pass`
- `tw_test_browser_verification_fixture=pass`
- `tw_test_xcode_verification_fixture=pass`
- `tw_setup_packaged_ce_delegation_fixture=pass`
- `tw_worktree_packaged_ce_delegation_fixture=pass`
- `tw_wrapper_completion_publication_boundary=pass`
- runtime invocation remains held unless a separate runtime proof is enabled.

---

## Risks And Controls

- Risk: adding many wrappers recreates evidence churn.
  Control: treat this as one wrapper-completion slice with one code review and
  one scoped doc review; historical wording drift is non-blocking unless it
  changes allowed behavior.
- Risk: session and compound outputs get mistaken for authority.
  Control: wrappers must label them as source evidence until reviewed authority
  changes accept them.
- Risk: `tw-resolve-pr-feedback` mutates remote PR state.
  Control: local repair and summary are allowed; remote mutation routes through
  controlled publication or explicit user-confirmed remote gate.
- Risk: `tw-worktree` changes branch/worktree state without trace.
  Control: allow local worktree creation only with explicit target and no
  commit/push/PR authority.
- Risk: test wrappers produce unlinked evidence.
  Control: require requirement/trace/verification IDs for accepted gate closure
  or mark evidence exploratory/held.

---

## Held Claims

Held until separately proven:

- active-host runtime invocation of each new wrapper;
- runtime CE delegation through each wrapper;
- remote PR mutation or review-thread resolution;
- commit, push, PR, release, package, or publication;
- Vestro use;
- clean CE replacement and full CE 3.5.0 parity;
- support for missing CE 3.5.0 skills outside this packaged-continuity wrapper
  set;
- any requirements change or authority-baseline update.

---

## Next Step

Run scoped `/tw-doc-review` on this plan. If clean, proceed with `/tw-work`
against this plan for U1-U6, then run the scoped `/tw-code-review` described in
U7.
