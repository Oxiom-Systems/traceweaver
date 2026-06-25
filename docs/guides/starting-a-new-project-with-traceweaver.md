# Starting A New Project With TraceWeaver

<!-- TRACEWEAVER: file-role=new-project-start-guide; req=REQ-TW-042; trace=TRACE-TW-021; ver=VER-TW-030 -->
<!-- TRACEWEAVER: file-role=new-project-start-guide; req=REQ-TW-045; trace=TRACE-TW-041; ver=VER-TW-053 -->
<!-- TRACEWEAVER: file-role=new-project-start-guide; req=REQ-TW-048; trace=TRACE-TW-009; ver=VER-TW-018 -->
<!-- TRACEWEAVER: file-role=new-project-start-guide; req=REQ-TW-064; trace=TRACE-TW-047; ver=VER-TW-060 -->

Use this guide when a project begins with a loose prompt, concept note,
customer request, product idea, or small implementation request and you need
TraceWeaver to preserve intent before code is written.

The first decision is not which file to edit. The first decision is how much
intent still needs to be shaped before implementation authority exists.

## Start Here

For a brand-new project with no authority files, first choose whether you want
only an authority bootstrap or a large-project discovery pass.

Use the bootstrap-only prompt when you want TraceWeaver to create the minimum
authority files and stop:

```text
tw-auto "bootstrap TraceWeaver authority for this project from <source brief>; record raw prompts privately under .traceweaver/private/prompts/; do not implement yet"
```

That command intentionally stops after the authority files exist. It does not
continue into `tw-strategy`, `tw-ideate`, `tw-grill`, `tw-brainstorm`, or
`tw-plan`.

For a big project where the implementation shape is not obvious, use the
large-project prompt instead:

```text
tw-auto "start this as a large new project from <source brief>. Bootstrap authority if needed, then follow strategy, ideation, grill, and brainstorm before planning. Produce an overarching strategy, implementation plan, risks, open decisions, validation questions, and small work-unit breakdown. Do not implement code yet."
```

`<source brief>` can be a prompt file such as `GamePrompt.md`, a product brief,
a customer email summary, or a meeting note. Raw prompts and private source
material should stay in an ignored private evidence location, not in public
authority docs.

`tw-auto` should create or update these files before implementation starts:

```text
requirements.md
traceability-matrix.md
.traceweaver/intent-contract.yml
```

If any of those files are missing, `tw-auto` is expected to stop in Authority
Baseline Mode. That is not a failure. It is TraceWeaver refusing to turn a
prompt into implementation authority without reviewed requirements.

After a bootstrap-only run, do not jump straight to `tw-work`. Pick the next
route explicitly:

```text
tw-auto "use the existing draft authority baseline and source evidence. Follow strategy, ideation, grill, and brainstorm before planning. Produce an overarching plan and small work-unit breakdown. Do not implement code yet."
```

or, for a small clear project:

```text
tw-requirements-review
```

Only continue to implementation after the baseline and plan are reviewed, or the
remaining held conditions are explicit.

## Pick The Right Entry Path

| Project shape | Use first | Why |
| --- | --- | --- |
| Big product, vague concept, new business direction, or multi-phase build | `tw-auto` with strategy, ideation, and grill routing | The project needs an overarching strategy and intent-deepening before requirements are treated as authority. |
| Several features or a medium-sized product slice with known direction but unclear scope | `tw-brainstorm` or `tw-auto` asking for brainstorm first | The work needs candidate needs, risks, assumptions, non-goals, and acceptance boundaries before planning. |
| Small, already-approved change with clear acceptance criteria | `tw-plan` after requirements review | The intent is already shaped; the plan can stay narrow and implementation-bound. |
| Existing codebase with unknown drift | `tw-audit` | The first risk is lost intent, dark behavior, duplicate behavior, missing verification, or stale authority. |

## Big Project Path

For a large new project, do not ask `tw-auto` only to bootstrap and do not ask
it to build immediately. Ask it to shape the strategy first:

```text
tw-auto "start this as a large new project from <source brief>. Bootstrap authority if needed, then follow strategy, ideation, grill, and brainstorm before planning. Create an overarching strategy, candidate product direction, open decisions, risks, validation questions, and small work-unit breakdown. Do not implement code yet."
```

Expected sequence:

```text
tw-strategy
tw-ideate
tw-grill
tw-brainstorm
tw-requirements-review
tw-plan
tw-authority-gate
tw-work
tw-traceability-check
tw-code-review
tw-doc-review
```

`tw-strategy` captures the direction. `tw-ideate` generates and ranks options.
`tw-grill` stress-tests the selected idea and exposes missing intent,
contradictions, unverifiable claims, non-goals, risks, and validation questions.
Those outputs are source evidence only. They do not approve implementation by
themselves.

The first useful deliverable for a big project is usually not code. It is:

```text
STRATEGY.md
requirements.md
traceability-matrix.md
.traceweaver/intent-contract.yml
```

Then `tw-plan` can produce a bounded first implementation slice.

## When The Grill Was Too Thin

Sometimes `tw-auto` has already produced strategy, ideation, grill notes, a
plan, and draft authority files, but the intent still feels under-specified.
Do not promote requirements yet. Run a delta/gap grill pass that compares the
existing source evidence against the current authority and asks the missing
questions before planning authority is accepted:

```text
tw-auto "use the existing <project> strategy, ideation, grill notes, plan, and authority files. Do not promote requirements yet. Run a delta/gap tw-grill interview focused on missing player fantasy, core loop, level scope, boss mechanics, progression, failure/retry, acceptance criteria, verification, and validation. Ask me questions with recommended answers, record source evidence only, then stop."
```

This path is for cases where `tw-grill` technically ran, but did not create
enough shared understanding. The next output should be source evidence only,
usually an updated grill/interview note and trace record. It still must not
approve implementation authority, promote requirements, or start `tw-work`.

## Medium Project Path

Use this path when the idea is directionally clear but the scope still needs to
be shaped:

```text
tw-brainstorm "turn <source brief> into candidate needs, assumptions, risks, non-goals, acceptance criteria, verification ideas, and validation questions"
```

Then:

```text
tw-requirements-review
tw-plan
```

This is the right path for a project that is too large for immediate planning
but does not need a full strategy pass.

## Small Plan Path

Use this path when the stakeholder need and acceptance criteria are already
clear:

```text
tw-plan "plan the approved change in <requirement or issue id>"
```

Then:

```text
tw-authority-gate
tw-work
tw-traceability-check
tw-code-review
tw-doc-review
```

If the requirement, verification method, validation question, or accepted scope
is missing, go back to `tw-requirements-review` or `tw-brainstorm` instead of
forcing the plan.

## When `tw-auto` Stops

Common first-run stops are expected:

- `requirements.md` is missing.
- `traceability-matrix.md` is missing.
- `.traceweaver/intent-contract.yml` is missing.
- the prompt asks to record raw prompts but no private location is approved;
- the request asks for implementation before stakeholder intent is reviewed;
- the source brief implies a large strategy decision but no strategy exists.

The normal answer is to approve bootstrap, keep raw prompts private, and review
the generated baseline before implementation:

```text
Approve bootstrap. Create the authority files and private prompt log, then stop for requirements review.
```

## Prompt Patterns

New project from a prompt file:

```text
tw-auto "bootstrap TraceWeaver authority for this project from GamePrompt.md; record raw prompts privately under .traceweaver/private/prompts/; do not implement yet"
```

Large project:

```text
tw-auto "start this as a large project. Follow strategy, ideation, grill, and brainstorm before planning. Produce the overarching strategy and authority bootstrap plan first; do not implement yet"
```

Existing large-project evidence, but intent still feels uncaptured:

```text
tw-auto "use the existing <project> strategy, ideation, grill notes, plan, and authority files. Do not promote requirements yet. Run a delta/gap tw-grill interview focused on missing player fantasy, core loop, level scope, boss mechanics, progression, failure/retry, acceptance criteria, verification, and validation. Ask me questions with recommended answers, record source evidence only, then stop."
```

Medium project:

```text
tw-auto "brainstorm this project into candidate requirements, risks, non-goals, verification ideas, and validation questions before planning"
```

Small approved plan:

```text
tw-plan "create an implementation plan for the approved requirement <id>"
```

Existing repo:

```text
tw-audit "audit this project for requirements authority, code traces, verification evidence, validation evidence, dark code, orphaned code, duplicate behavior, and lost intent. Report candidate findings only; do not remove or rewrite anything."
```

## Claims To Keep Held

Until implementation and verification pass, keep these claims held:

- playable MVP;
- done or complete;
- release-ready;
- publication-ready;
- autonomous `tw-auto` runtime proof;
- clean replacement of other workflow systems;
- enforcing mode.

Next recommended TraceWeaver step after a large-project bootstrap:

```text
tw-auto "use the existing draft authority baseline and source evidence. Follow strategy, ideation, grill, and brainstorm before planning. Produce an overarching plan and small work-unit breakdown. Do not implement code yet."
```

For a small project where the stakeholder need, acceptance criteria,
verification method, and validation question are already clear, continue with:

```text
tw-requirements-review
```
