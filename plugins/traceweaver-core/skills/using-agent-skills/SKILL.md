---
name: using-agent-skills
description: Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked.
---

# Using Agent Skills

## Overview

Agent Skills is a collection of engineering workflow skills organized by development phase. Each skill encodes a specific process that senior engineers follow. This meta-skill helps you discover and apply the right skill for your current task.

## Skill Discovery

When a task arrives, identify the development phase and apply the corresponding skill:

```text
Vague idea or need refinement -> ce-brainstorm as source evidence, then tw-requirements-review
Intent deepening after ideation -> tw-grill as source evidence, then tw-requirements-review
New project, feature, or change -> tw-auto
Reviewed plan with approved authority -> tw-auto, or tw-authority-gate before any delegated CE work
Trace or requirement check -> tw-traceability-check, tw-requirements-review, requirements-reviewer
Code review -> tw-traceability-check, then ce-code-review with publication held
Document review -> tw-requirements-review, then ce-doc-review with publication held
Debugging -> tw-auto or tw-authority-gate before ce-debug no-publication mode
Browser or Xcode verification -> ce-test-browser or ce-test-xcode
Session/source context -> ce-sessions, ce-session-inventory, or ce-session-extract as cited evidence only
Commit, push, PR, release -> held in TraceWeaver alpha; stop before publication
```

Direct `ce-*` entrypoints in the TraceWeaver package are legacy/manual-continuity
surfaces until a wrapper is accepted. Do not select raw `ce-plan`, `ce-work`,
`ce-debug`, `ce-code-review`, `ce-doc-review`, or publication-capable CE skills as
the first step for TraceWeaver-controlled work. Start from `tw-auto` or a
TraceWeaver gate, then treat any CE skill as delegated work under the Intent
Contract, requirements baseline, traceability matrix, and alpha publication hold.

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

Ideas are lifecycle inputs, not authority. When `ce-brainstorm` or `tw-grill`
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

3. **Multiple skills can apply.** A TraceWeaver-controlled feature implementation might involve `ce-brainstorm` -> `tw-grill` -> `systems-engineering-traceability` -> `tw-auto` -> `tw-authority-gate` -> `ce-work` in no-publication mode -> `tw-traceability-check` -> `ce-code-review` / `ce-doc-review` in sequence.

4. **When in doubt, start with authority.** If the task is non-trivial and there is no accepted requirement, Intent Contract, or traceability row, begin with `tw-auto` bootstrap or `tw-requirements-review`.

## Lifecycle Sequence

For a complete feature, the typical skill sequence is:

```text
1. ce-brainstorm or tw-grill -> Refine ideas and preserve source evidence
2. systems-engineering-traceability -> Preserve candidate needs, authority, V&V, and no-orphan links
3. tw-requirements-review or requirements-reviewer -> Improve requirement quality
4. tw-auto or ce-plan guarded by TraceWeaver authority -> Define and plan work
5. tw-authority-gate -> Confirm approved authority before implementation
6. ce-work no-publication mode -> Build the authorized slice
7. ce-test-browser or ce-test-xcode -> Verify runtime behavior when applicable
8. tw-traceability-check -> Prove trace links and dark-behavior handling
9. ce-code-review or ce-doc-review -> Review before closure
10. publication -> held in TraceWeaver alpha until later gates approve it
```

Not every task needs every skill. A bug fix might only need: `ce-debug` ->
`tw-authority-gate` -> `ce-work` no-publication mode ->
`tw-traceability-check` -> `ce-code-review`.

## Quick Reference

| Phase | Skill | One-Line Summary |
|-------|-------|-----------------|
| Define | ce-brainstorm / tw-grill | Refine ideas, challenge assumptions, and preserve source evidence |
| Define | tw-requirements-review / requirements-reviewer | Requirements and acceptance criteria before code |
| Plan | tw-auto / ce-plan | Decompose approved authority into bounded work |
| Cross-cutting | systems-engineering-traceability | Candidate needs, approved authority, no-orphan gate, verification, and validation links |
| Build | ce-work | Thin authorized slices in TraceWeaver no-publication mode |
| Context | ce-sessions / ce-session-inventory / ce-session-extract | Source/session context as cited evidence only |
| Verify | ce-test-browser / ce-test-xcode | Runtime verification when applicable |
| Verify | ce-debug | Reproduce, localize, fix, and guard |
| Review | ce-code-review / ce-doc-review | Review with TraceWeaver traceability checks |
| Ship | held | Commit, push, PR, release, and clean-replacement claims remain held in alpha |

## Routing Examples

| Situation | Skills to consider |
|---|---|
| Vague product, project, workflow, or feature idea | `ce-brainstorm`, `tw-grill`, `systems-engineering-traceability` |
| New feature or changed behavior | `tw-auto`, `ce-plan`, `tw-authority-gate`, `systems-engineering-traceability` |
| Implementation work | `ce-work` no-publication mode, `tw-traceability-check`, `systems-engineering-traceability` |
| Code review | `ce-code-review`, `tw-traceability-check`, `systems-engineering-traceability` |
| Unclear code or dark code | `systems-engineering-traceability`, `tw-traceability-check`, `ce-code-review` |
| Release or shipping | Held in TraceWeaver alpha; record the publication gate or future wrapper-plan requirement |
