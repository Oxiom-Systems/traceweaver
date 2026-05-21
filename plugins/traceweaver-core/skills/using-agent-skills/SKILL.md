---
name: using-agent-skills
description: Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked.
---

<!-- TRACEWEAVER: file-role=skill-routing-surface; req=REQ-TW-043; trace=TRACE-TW-033; ver=VER-TW-042 -->
<!-- TRACEWEAVER: file-role=strategy-ideation-routing-surface; req=REQ-TW-064; trace=TRACE-TW-047; ver=VER-TW-060 -->

# Using Agent Skills

## Overview

Agent Skills is a collection of engineering workflow skills organized by development phase. Each skill encodes a specific process that senior engineers follow. This meta-skill helps you discover and apply the right skill for your current task.

## Skill Discovery

When a task arrives, identify the development phase and apply the corresponding skill:

```text
Product direction or STRATEGY.md grounding -> tw-strategy as source evidence, then tw-ideate, tw-brainstorm, or tw-requirements-review
Idea generation, ranked options, or critique -> tw-ideate as source evidence, then tw-grill, tw-brainstorm, or tw-requirements-review
Vague idea or need refinement -> tw-brainstorm as source evidence, then tw-requirements-review
Intent deepening after ideation -> tw-grill as source evidence, then tw-requirements-review
New project, feature, or change -> tw-auto
Planning approved TraceWeaver work -> tw-plan
Reviewed plan with approved authority -> tw-auto, or tw-authority-gate before any delegated CE work
Project audit for traces, requirements, verification, validation, closure, or dark behavior -> tw-audit
Trace or requirement diagnostic -> tw-traceability-check, tw-requirements-review, requirements-reviewer
Code review -> tw-code-review
Document review -> tw-doc-review
Debugging -> tw-debug
Browser or Xcode verification -> tw-test-browser or tw-test-xcode
Session/source context -> tw-sessions as cited source evidence only; ce-session-inventory and ce-session-extract stay hidden/internal helpers
Learning capture or refresh -> tw-compound or tw-compound-refresh as source evidence
PR feedback repair -> tw-resolve-pr-feedback for local repair; remote mutation and publication stay held
Setup diagnostics -> tw-setup
Local worktree setup -> tw-worktree
Commit intent -> tw-commit
Push, PR, or PR-description intent -> tw-commit-push-pr
Release -> held in TraceWeaver alpha; stop before publication
```

Direct `ce-*` entrypoints in the TraceWeaver package are legacy/manual-continuity
surfaces unless a TraceWeaver wrapper delegates to them. Do not select raw
`ce-brainstorm`, `ce-plan`, `ce-work`, `ce-debug`, `ce-code-review`,
`ce-doc-review`, `ce-strategy`, `ce-ideate`, `ce-test-browser`, `ce-test-xcode`, `ce-sessions`,
`ce-compound`, `ce-compound-refresh`, `ce-resolve-pr-feedback`, `ce-setup`,
`ce-worktree`, or publication-capable CE skills as the first step for
TraceWeaver-controlled work. Start from `tw-auto` or a TraceWeaver wrapper/gate,
then treat any CE skill as delegated work under the Intent Contract,
requirements baseline, traceability matrix, and alpha publication hold.

## Cross-Cutting Traceability Rule

When work creates, changes, removes, reviews, validates, or selects ideas that
may become meaningful behavior, also use:

`systems-engineering-traceability`

This is a cross-cutting skill. It does not replace planning, implementation, testing, or review skills. It ensures meaningful behavior is linked to approved authority and does not bypass the no-orphan gate.

Use it for:

- product, project, workflow, code, or agent-behavior ideas that may become work
- new features
- changed behavior
- unclear or dark code review
- refactors that change behavior
- lifecycle sequencing
- implementation planning
- code review
- release or validation review

Do not require it for formatting-only, spelling-only, or comment-only changes that do not alter behavior.

If meaningful behavior is involved, traceability is a hop, not an optional extra.

Ideas are lifecycle inputs, not authority. When `tw-strategy`, `tw-ideate`,
`ce-brainstorm`, or `tw-grill`
produces a concept that may become work, preserve it as candidate needs,
assumptions, risks, success/failure signals, open decisions, and not-doing
boundaries. Do not let an idea, brainstorm note, roadmap thought, or review
suggestion skip directly into implementation without planning and approved
authority.

## Core Operating Behaviors

These behaviors apply at all times, across all skills. They are non-negotiable.

### 1. Surface Assumptions

Before implementing anything non-trivial, explicitly state your assumptions:

```
ASSUMPTIONS I'M MAKING:
1. [assumption about requirements]
2. [assumption about architecture]
3. [assumption about scope]
→ Correct me now or I'll proceed with these.
```

Don't silently fill in ambiguous requirements. The most common failure mode is making wrong assumptions and running with them unchecked. Surface uncertainty early — it's cheaper than rework.

### 2. Manage Confusion Actively

When you encounter inconsistencies, conflicting requirements, or unclear specifications:

1. **STOP.** Do not proceed with a guess.
2. Name the specific confusion.
3. Present the tradeoff or ask the clarifying question.
4. Wait for resolution before continuing.

**Bad:** Silently picking one interpretation and hoping it's right.
**Good:** "I see X in the spec but Y in the existing code. Which takes precedence?"

### 3. Push Back When Warranted

You are not a yes-machine. When an approach has clear problems:

- Point out the issue directly
- Explain the concrete downside (quantify when possible — "this adds ~200ms latency" not "this might be slower")
- Propose an alternative
- Accept the human's decision if they override with full information

Sycophancy is a failure mode. "Of course!" followed by implementing a bad idea helps no one. Honest technical disagreement is more valuable than false agreement.

### 4. Enforce Simplicity

Your natural tendency is to overcomplicate. Actively resist it.

Before finishing any implementation, ask:
- Can this be done in fewer lines?
- Are these abstractions earning their complexity?
- Would a staff engineer look at this and say "why didn't you just..."?

If you build 1000 lines and 100 would suffice, you have failed. Prefer the boring, obvious solution. Cleverness is expensive.

### 5. Maintain Scope Discipline

Touch only what you're asked to touch.

Do NOT:
- Remove comments you don't understand
- "Clean up" code orthogonal to the task
- Refactor adjacent systems as a side effect
- Delete code that seems unused without explicit approval
- Add features not in the spec because they "seem useful"

Your job is surgical precision, not unsolicited renovation.

### 6. Verify, Don't Assume

Every skill includes a verification step. A task is not complete until verification passes. "Seems right" is never sufficient — there must be evidence (passing tests, build output, runtime data).

## Failure Modes to Avoid

These are the subtle errors that look like productivity but create problems:

1. Making wrong assumptions without checking
2. Not managing your own confusion — plowing ahead when lost
3. Not surfacing inconsistencies you notice
4. Not presenting tradeoffs on non-obvious decisions
5. Being sycophantic ("Of course!") to approaches with clear problems
6. Overcomplicating code and APIs
7. Modifying code or comments orthogonal to the task
8. Removing things you don't fully understand
9. Building without a spec because "it's obvious"
10. Skipping verification because "it looks right"

## Skill Rules

1. **Check for an applicable skill before starting work.** Skills encode processes that prevent common mistakes.

2. **Skills are workflows, not suggestions.** Follow the steps in order. Don't skip verification steps.

3. **Multiple skills can apply.** A TraceWeaver-controlled feature implementation might involve `ce-brainstorm` -> `tw-grill` -> `systems-engineering-traceability` -> `tw-auto` -> `tw-plan` -> `tw-authority-gate` -> `tw-work` in no-publication mode -> `tw-traceability-check` -> `tw-code-review` / `tw-doc-review` in sequence.

4. **When in doubt, start with authority.** If the task is non-trivial and there is no accepted requirement, Intent Contract, or traceability row, begin with `tw-auto` bootstrap or `tw-requirements-review`.

## Lifecycle Sequence

For a complete feature, the typical skill sequence is:

```text
1. tw-strategy or tw-ideate when direction or options are needed -> Source evidence only
2. tw-brainstorm or tw-grill -> Refine ideas and preserve source evidence
3. systems-engineering-traceability -> Preserve candidate needs, authority, V&V, and no-orphan links
4. tw-requirements-review or requirements-reviewer -> Improve requirement quality
5. tw-auto or tw-plan guarded by TraceWeaver authority -> Define and plan work
6. tw-authority-gate -> Confirm approved authority before implementation
7. tw-work -> Build the authorized slice in no-publication mode
8. tw-test-browser or tw-test-xcode -> Verify runtime behavior when applicable
9. tw-traceability-check -> Prove trace links and dark-behavior handling
10. tw-code-review or tw-doc-review -> Review before closure
11. publication -> held in TraceWeaver alpha until later gates approve it
```

Not every task needs every skill. A bug fix might only need: `tw-debug` ->
`tw-work` no-publication mode when a local fix is authorized ->
`tw-traceability-check` -> `tw-code-review`.

## Quick Reference

| Phase | Skill | One-Line Summary |
|-------|-------|-----------------|
| Define | tw-strategy / tw-ideate | Capture strategy grounding and ranked ideas as source evidence |
| Define | tw-brainstorm / tw-grill | Refine ideas, challenge assumptions, and preserve source evidence |
| Define | tw-requirements-review / requirements-reviewer | Requirements and acceptance criteria before code |
| Plan | tw-auto / tw-plan | Decompose approved authority into bounded work |
| Cross-cutting | tw-audit | Project or branch audit for authority, traces, verification, validation, acceptance evidence, and candidate dark behavior |
| Cross-cutting | systems-engineering-traceability | Candidate needs, approved authority, no-orphan gate, verification, and validation links |
| Build | tw-work | Thin authorized slices in TraceWeaver no-publication mode |
| Context | tw-sessions | Source/session context as cited evidence only; hidden CE inventory/extract helpers stay internal |
| Verify | tw-test-browser / tw-test-xcode | Runtime verification when applicable |
| Learning | tw-compound / tw-compound-refresh | Capture or refresh learning as source evidence |
| PR feedback | tw-resolve-pr-feedback | Local review-feedback repair under TraceWeaver gates |
| Setup | tw-setup / tw-worktree | Local setup and worktree preparation without publication |
| Verify | tw-debug | Reproduce, localize, fix, and guard through the TraceWeaver debug wrapper |
| Review | tw-code-review / tw-doc-review | Review with TraceWeaver traceability checks |
| Ship | tw-commit / tw-commit-push-pr | TraceWeaver-owned publication wrappers; real mutation remains gated |

## Routing Examples

| Situation | Skills to consider |
|---|---|
| Product direction, STRATEGY.md, or broad option generation | `tw-strategy`, `tw-ideate`, `systems-engineering-traceability` |
| Vague product, project, workflow, or feature idea | `tw-brainstorm`, `tw-grill`, `systems-engineering-traceability` |
| New feature or changed behavior | `tw-auto`, `tw-plan`, `tw-authority-gate`, `systems-engineering-traceability` |
| Implementation work | `tw-work`, `tw-traceability-check`, `systems-engineering-traceability` |
| Debugging or failing tests | `tw-debug`, `tw-traceability-check`, `systems-engineering-traceability` |
| Code review | `tw-code-review`, `tw-traceability-check`, `systems-engineering-traceability` |
| Unclear code or dark code | `systems-engineering-traceability`, `tw-traceability-check`, `tw-code-review` |
| Commit request | `tw-commit` |
| Push, PR, or PR description request | `tw-commit-push-pr` |
| Release or shipping | `tw-commit-push-pr` for PR publication intent; release claims remain held until a reviewed release gate exists |
| Browser or Xcode verification | `tw-test-browser`, `tw-test-xcode`, `tw-traceability-check` |
| Prior session context | `tw-sessions`; hidden `ce-session-inventory` / `ce-session-extract` helper primitives only through `tw-sessions` |
| Learning capture or refresh | `tw-compound`, `tw-compound-refresh` |
| PR feedback repair | `tw-resolve-pr-feedback`, then `tw-code-review` / `tw-doc-review` |
| Local setup or worktree prep | `tw-setup`, `tw-worktree` |
