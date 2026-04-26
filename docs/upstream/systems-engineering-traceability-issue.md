# Proposal: systems-engineering-traceability skill for agent-generated code

Issue URL: https://github.com/addyosmani/agent-skills/issues/103

## Summary

I would like to propose a focused new skill: `systems-engineering-traceability`.

The skill would add a lightweight traceability workflow for agent-generated behavior. It would help agents preserve the chain from idea or stakeholder intent to requirement, design decision, implementation, verification evidence, and validation evidence or validation plan.

The goal is practical: make it easier for reviewers and maintainers to answer:

- Why does this behavior exist?
- What requirement or risk control does it satisfy?
- What design decision supports it?
- Where is it implemented?
- How is it verified?
- How is it validated?
- What breaks if it is changed or removed?

This is not intended to introduce a heavyweight systems engineering framework. It is a small workflow layer that extends the existing spec, plan, build, test, review, and ship lifecycle with traceability discipline.

## Problem

AI coding agents can generate working code faster than teams can preserve the engineering record around that code. That creates a failure mode where behavior exists, tests may pass, but the team cannot easily trace the behavior back to a clear requirement, design rationale, verification result, validation path, or owner.

I have been calling this "dark code": meaningful code, configuration, tests, scripts, or interfaces that may be active, but cannot be explained or safely changed because the reason for its existence is unclear.

Existing skills already cover specification, planning, implementation, testing, documentation, review, and shipping. The gap this proposal targets is the explicit trace chain across those phases.

## Proposed MVP

First PR would stay intentionally small:

- `skills/systems-engineering-traceability/SKILL.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`
- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`
- Minimal README/index update only if needed for discoverability

The traceability matrix template is part of the MVP. The skill is not considered usable without a matrix artifact because the matrix is the audit/control surface for requirement-to-implementation-to-verification/validation traceability. The two companion guides are part of the TraceWeaver Core runtime bundle because they define requirements/V&V handling and risk/gap/change-control behavior. If maintainers push back on the larger bundle, that reopens MVP scope; these artifacts should not be silently removed.

If this issue has already been posted upstream, add a follow-up comment clarifying that the matrix template and operating-model reference are both considered required for a usable traceability MVP, and that any smaller upstream packaging is a recorded scope decision rather than a change to the TraceWeaver Core bundle.

The skill would guide agents to:

- capture or reuse stakeholder needs and requirement IDs;
- link requirements to plans, design decisions, implementation artifacts, verification evidence, and validation evidence;
- keep a lightweight Markdown traceability matrix as the audit record;
- use Mermaid only as a visual relationship view, not the source of truth;
- link requirements docs, plan docs, ATP or acceptance test procedure entries, and result records when those artifacts exist;
- separate verification from validation;
- flag untraceable behavior as a traceability gap or dark-code candidate;
- prevent fake traceability by marking inferred requirements as draft until human approval is recorded;
- run a traceability-focused review gate before treating work as engineering-complete.

## Artifact Model

The proposed artifact model is deliberately simple:

- Markdown traceability matrix: authoritative audit record for trace links, status, evidence references, gaps, and human decisions.
- Source artifacts: requirements/spec docs, ADRs, ATPs, and result records remain authoritative for their own detailed content.
- Mermaid diagram: optional visual map generated or maintained from the same stable IDs.
- Stable IDs: connective tissue across requirements, tasks, code, tests, review notes, validation evidence, gaps, and human decisions.

The matrix is not meant to replace specs, ADRs, tests, or validation records. It points to them so a reviewer can walk the chain forward and backward.

## Lifecycle Checkpoints

The skill would apply during normal agent workflow:

| Phase | Traceability question |
|---|---|
| Spec | What stakeholder need and success signal justify this behavior? |
| Plan | Which requirement IDs does each task satisfy? |
| Build | Does each meaningful implementation change still match traced intent? |
| Test | What ATP, test, or evidence proves the requirement? |
| Review | Can a reviewer walk backward and forward through the chain? |
| Ship | Is the stakeholder need validated or is a validation path approved? |

The key implementation gate would be: no meaningful new behavior without approved authority. Approved authority means an approved requirement, approved ADR/design decision, first-class approved risk control, approved traceability gap, or a task that closes directly to one of those approved authorities.

## Non-goals for the First PR

The first PR would not include:

- a `/trace` command;
- a systems engineer persona;
- broad patches across existing skills;
- executable Mermaid generation;
- metrics or CI enforcement;
- high-assurance, MBSE, SysML, DOORS, or regulated-environment variants;
- line-level or private-helper-level traceability.

The intended granularity is meaningful system behavior, public interfaces, data flows, risk controls, design decisions, tasks, tests, validation scenarios, and agent-generated changes that affect behavior.

## Validation Plan Before PR

Before opening the PR, I plan to test the skill in a fork and only package it if it proves useful and lightweight.

Validation would compare:

- baseline run: existing Agent Skills workflow only;
- traceability run: existing workflow plus `systems-engineering-traceability`.

The proposed skill should show distinct value beyond the baseline in at least two areas, such as:

- requirement links made explicit;
- plan tasks linked to requirement IDs;
- implementation artifacts linked to requirements or design decisions;
- missing verification evidence found;
- missing validation paths found;
- dark-code candidates identified;
- inferred requirements flagged for human approval;
- improved reviewer confidence;
- clearer change impact analysis.

Pass criteria would include:

- controlled evidence from all three pre-registered validation scenarios: new feature, unclear existing module, and low-risk Lite mode;
- distinct value in at least two baseline comparison areas, including at least one outcome-based signal;
- roughly 10-15% or less overhead for small or medium changes;
- fewer than roughly 25% low-value findings;
- improved reviewer confidence;
- no broad repo rewrite required;
- no invented traceability marked as approved.

If the skill only repeats what existing skills already catch, I would revise it into a smaller patch to an existing skill instead of submitting a new skill PR.

## Fit With Contribution Guidelines

The proposed first PR is designed to match the current contribution guidance:

- specific: a traceability workflow for agent-generated behavior;
- verifiable: includes concrete completion gates and validation evidence;
- battle-tested: validated in a fork before PR submission;
- minimal: one skill, one operating-model reference, one required matrix template, and only the smallest discoverability update.

I am opening this issue first to check whether this scope and framing fit the project before preparing the focused PR.
