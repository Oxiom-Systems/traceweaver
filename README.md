# TraceWeaver Core

Open-source systems engineering traceability for agentic software development.

TraceWeaver Core is a systems-engineering control layer for agentic software
development. Its core role is to preserve intent, authority, and traceability as
agents move from stakeholder needs to requirements, plans, code, tests, and
release decisions.

The problem TraceWeaver solves is that agents can move very fast, but they often
blur the chain between:

```text
what the stakeholder asked for
-> what the agent interpreted
-> what got implemented
```

TraceWeaver forces a controlled chain:

```text
stakeholder intent
-> captured needs
-> reviewed requirements
-> approved authority or approved exception
-> implementation
-> verification
-> validation
-> change control
```

The key principle is:

> Agents may help create requirements, plans, code, tests, and evidence, but
> they may not silently promote their own interpretation into authority.

The current wedge is:

> Meaningful behaviour must trace to approved authority, or it is not ready to
> implement, approve, or ship.

In simple terms: TraceWeaver keeps agentic development aligned to the original
intent, proves that implementation traces back to approved requirements, and
records gaps, risks, assumptions, and changes instead of letting them become
hidden authority.

## Naming Model

| Name | Role |
|---|---|
| TraceWeaver | Overall project and product identity |
| TraceWeaver Core | Open-source method, skills, templates, and validation protocol |
| TraceWeaver CE | Compound Engineering adapter/plugin implementation |
| TraceWeaver Enterprise | Paid commercial product for larger-project governance |
| TraceWeaver Cloud | Hosted MCP/API service |
| TraceWeaver Connect | Connector layer for enterprise and cloud integrations |
| `systems-engineering-traceability` | Upstream-neutral Agent Skills skill name |
| `ce-traceability` | Compound Engineering-specific skill name |

TraceWeaver Core should stay usable without the future paid layer. The paid
layer should make the same method scalable through relationship storage,
dashboards, governance, and integrations.

## Architecture Layers

| Layer | Purpose | Names |
|---|---|---|
| Core skills | Portable, upstream-neutral capabilities usable in any agentic workflow | Core 11 suite under `skills/`; `requirements-reviewer` and `systems-engineering-traceability` remain the current runtime-candidate subset |
| Core lifecycle guidance | Explains how the core skills work together from idea to change control | `traceweaver-operating-model`, matrix template, requirements/V&V guide, risk/gap/change-control guide |
| Compound Engineering adapter | Wires the core capabilities into Compound Engineering workflows, prompts, agents, and delegation | TraceWeaver CE, `ce-traceability`, `ce-traceability-reviewer`, CE hooks |

Ownership rule:

- `requirements-reviewer` answers whether needs, requirements, success criteria,
  acceptance criteria, or reframed requirements are good enough to become
  authority.
- `systems-engineering-traceability` answers whether meaningful behaviour traces
  to approved authority, implementation, verification, and validation evidence.
- TraceWeaver CE wires those Core capabilities into Compound Engineering. CE
  wrappers must not become the source definition of the Core capabilities.

## Intent Contract

TraceWeaver's authority model is Intent Contract centered. Skills are
capabilities, not authority. Every behavior-changing agent handoff must be able
to cite:

- stakeholder intent;
- approved requirement or approved exception;
- verification method;
- validation question;
- current baseline version.

Alpha implementations can remain advisory, but missing authority must be
visible as a gap, proposed requirement, change, exception, accepted-risk
candidate, clarification record, or held claim. Agent assumptions are not
implementation authority.

The planned file-based alpha shape is:

```text
.traceweaver/
  intent-contract.yml
  authority-baseline.yml
  task-capsules/
  trace-records/
  gaps/
  changes/
  exceptions/
```

The plugin package should provide templates for consuming repositories to create
these files. It should not install project-specific authority records into a
repo automatically.

## Current State

As of 2026-04-30:

| Area | Status | Notes |
|---|---|---|
| TraceWeaver Core repo | Primary project home | `git@github.com:Oxiom-Systems/traceweaver.git` |
| Agent Skills fork | U5.5 reduced static-scope candidate | `feature/systems-engineering-traceability` branch in the Agent Skills fork at `696548694dd40ce298d77e603db069934b58f645`; selected file deltas are recorded, but dynamic no-forced runtime discovery is deferred to U6b/U9 |
| U5 validation baseline commit | `ca6ff66` | `docs: align skill tree count` |
| U5 delta inventory | `CLOSED_NO_DELTA` | No exact U5 public artifact targets remain outside the U4-promoted skill-folder paths |
| U5.5 expanded runtime candidate | `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY` | Candidate `696548694dd40ce298d77e603db069934b58f645` has file-level delta/impact records and static requirements-quality/lifecycle-discovery evidence, including referenced requirements-reviewer files, under limitation `U55-LIMIT-STATIC-DISCOVERY-001`. Dynamic discovery, package-ready, release-ready, and upstream-ready claims remain held |
| TraceWeaver Core plugin alpha | U6b install smoke passed for static loading only | `plugins/traceweaver-core` now contains plugin manifests, selected Light v0.1 runtime skills, skill-local selected references, and thin `tw-*` adapter skills. Isolated Codex install materialized the selected skills; dynamic discovery, real invocation transcript, package-ready, release-ready, upstream-ready, and R31 claims remain held |
| Intent Contract architecture | Requirements captured; implementation planned | Requirements R54-R62 and taxonomy R7a-R7c/R19-R22 define Intent Contract, Intent Capsule, advisory authority gates, dark behavior, and validation-question handoff. Runtime templates are planned for the next U6b Unit 2 materialization pass |
| Core 11 public skill folders | U4-promoted public artifacts | `skills/` contains all eleven scrubbed public-candidate skill folders; only the Light v0.1 subset has U6b alpha install-smoke evidence |
| Operating model reference | Implementation-ready candidate | `references/systems-engineering-traceability-operating-model.md` |
| Traceability matrix template | Implementation-ready candidate | `references/traceability-matrix-template.md`; matrix is mandatory for the MVP |
| Requirements and V&V guide | U6b alpha static loading evidence | `references/requirements-and-vv-guide.md`; packaged as a selected skill-local reference in `plugins/traceweaver-core`, but not package-ready or release accepted |
| Risk, gap, and change-control guide | U6b alpha static loading evidence | `references/risk-gap-and-change-control-guide.md`; packaged as a selected skill-local reference in `plugins/traceweaver-core`, but not package-ready or release accepted |
| Discovery routing | Runtime candidate evidence scope | Idea/intent lifecycle evidence is in scope as source-preservation and routing context only; `idea-refine` command wiring remains follow-up unless separately authorized. Requirements and success criteria route through `requirements-reviewer`; meaningful behavior routes through traceability as a cross-cutting hop |
| Validation record | Refreshed through U5.5 reduced static-scope handoff | U5 representative pass applies only to `ca6ff66d46f140da72f423ea3dec819f81ef5337`; U5 delta inventory is closed no-delta; U5.5 terminal state is `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY` |
| Controlled validation | Representative complete for U5 baseline | VRUN-001, VRUN-002, and VRUN-003 passed with human ratings recorded at `ca6ff66`, but R31 real-project validation remains open |
| Upstream PR packaging | Blocked before release evidence | U6b now records only alpha install smoke and static selected-skill materialization; do not claim release/upstream readiness until later gates provide dynamic runtime, release, and R31 evidence |
| TraceWeaver CE adapter | In progress | Compound Engineering adapter work is separate from the Core repo |
| TraceWeaver CE lifecycle baseline | In progress | Baseline approval and validation are not closed yet |

## TraceWeaver Core MVP Bundle

The TraceWeaver Core MVP is not just a skill prompt. The minimum usable
traceability capability is:

- `skills/requirements-reviewer/SKILL.md`
- `skills/systems-engineering-traceability/SKILL.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`
- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`
- README or index discoverability updates
- fork validation evidence from controlled scenarios

The traceability matrix is mandatory once the skill is used. Lite mode may use a
minimal matrix row, but it cannot skip the matrix artifact entirely.

The two companion guides are mandatory candidate guidance for the Core MVP, not
optional extras; runtime acceptance still depends on U5.5/U6 records.

## Upstream Packaging Boundary

The upstream `agent-skills` PR is a separate acceptance surface. It may be
packaged smaller than TraceWeaver Core if required by maintainer feedback, but
any reduction must be recorded as a scope decision. The matrix template and
operating model remain required for a usable traceability MVP.

## Guidance Pipeline

TraceWeaver uses a three-layer guidance pipeline:

| Layer | Path | Git Status | Purpose |
|---|---|---|---|
| Private source work | `.source-materials/` | Ignored | Source cache, conversions, extraction notes, and synthesis. Not for agents. |
| Public source of truth | `docs/distilled/` | Committed | Original TraceWeaver guidance developers review, edit, and evolve. |
| Runtime agent bundle | `agent-skills/references/` | Committed in the Agent Skills fork | Candidate runtime copies; not package/release accepted until U5.5/U6 records close. |

Agent implementations must not read from `.source-materials/`. Runtime
references must first come from reviewed `docs/distilled/` guidance, then be
synced into `agent-skills/references/`.

When the runtime references change, the Agent Skills implementation commit must
be refreshed, reviewed, and recorded in the validation record before that new
runtime bundle is treated as validated.

Runtime guidance is not considered synced unless the source-to-runtime mapping,
version stamp, checksum, reviewer, review session, and implementation commit are
recorded in the validation record.

## Operating Model

TraceWeaver Core uses an original, lightweight, systems-engineering-aligned
operating model for agentic software work:

```text
idea / intent
-> stakeholder need
-> user requirement
-> system requirement
-> design decision
-> implementation
-> verification
-> validation
-> change control
```

The agent-facing rules are intentionally compact:

- Brainstorming creates candidate needs, assumptions, risks, and success
  signals. It does not create implementation authority.
- Idea refinement is part of the lifecycle. Ideas are preserved as candidate
  needs, assumptions, risks, success/failure signals, open decisions, and
  not-doing boundaries before they become requirements or work.
- Planning preserves original stakeholder wording beside any agent reframe,
  marks reframed requirements as `Draft`, and uses requirements-reviewer before
  those requirements or success criteria can become approved authority.
- Planning converts approved needs and reviewed draft requirements into design
  decisions, ATP/result expectations, verification paths, and validation paths.
- Work agents may only implement meaningful behaviour when it traces to
  approved authority.
- Review findings are provenance, not authority. They become authority only
  when converted into an approved requirement change, design decision, risk
  control, or approved traceability gap.
- A task ID alone is not authority.
- A bare `RISK-*` ID is not authority.
- Verification asks whether we built it right.
- Validation asks whether we built the right thing.
- Missing traceability must be exposed, not invented.

## Approved Authority Rule

Valid approved authority means one of:

- approved requirement
- approved ADR or design decision
- first-class approved risk control
- approved traceability gap
- task ID that closes directly to one of the approved authorities above

The following are not valid authority by themselves:

- bare task ID
- bare stakeholder need
- draft requirement
- inferred requirement
- unapproved design note
- bare `RISK-*` ID
- review finding
- traceability debt item
- implementation convenience

If a link is inferred, draft, stale, ambiguous, or not approved, the behaviour
remains orphaned until human approval resolves it.

## Validation Gate

TraceWeaver Core representative validation is complete for the U2-U5 baseline
implementation slice at `ca6ff66d46f140da72f423ea3dec819f81ef5337`.

Validation status:

- `ca6ff66d46f140da72f423ea3dec819f81ef5337`: U2-U5 implementation slice
  passed representative dummy validation.
- R31 real-project validation remains open for the real feature, unclear
  existing module, and low-risk Lite-mode scenarios.
- U5.5 expanded runtime candidate: `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`. Candidate
  `696548694dd40ce298d77e603db069934b58f645` has static file-level
  delta/impact, requirements-quality, and lifecycle-discovery evidence under
  `U55-LIMIT-STATIC-DISCOVERY-001`.
- Packaging status: U6b alpha install smoke passed for static loading only.
  Dynamic discovery and real adapter invocation remain U9 or later
  U6b-dynamic testing requirements.

The validation record contains all three controlled U5 baseline runs. These are
representative dummy runs, not R31-completing real-project validation:

| Scenario | Purpose | Status |
|---|---|---|
| VRUN-001: New feature with document chain | Prove requirement-to-plan-to-implementation-to-results traceability | Representative pass; R31 real run still required |
| VRUN-002: Existing module audit | Prove the skill finds dark-code candidates and missing traceability | Representative pass; R31 real run still required |
| VRUN-003: Low-risk Lite mode | Prove Lite mode stays lightweight while still using a minimal matrix artifact | Representative pass; R31 real run still required |

The validation record must compare baseline Agent Skills behaviour against the
traceability-enabled workflow from the same starting state. It must record
distinct value, reviewer confidence, useful findings, low-value noise, and
workflow overhead.

Current validation record:

- `docs/validation/systems-engineering-traceability-fork-results.md`

## Source Materials Policy

Committed TraceWeaver artifacts must be original project writing. They may cite
official or public source pages, but they must not reproduce protected standards
or handbook text.

Local source material belongs only in:

```text
.source-materials/
```

That directory is intentionally ignored by git. It may contain licensed
standards, public downloads, extraction notes, checksums, and source inventories
used to create original distilled guidance.

Policy: public commits keep local source-processing instructions out of the
repository. Promotion and hygiene constraints are recorded in
`docs/validation/traceweaver-core-11-promotion-records.md`.

Canonical distilled guidance:

- `docs/distilled/systems-engineering-traceability-operating-model.md`
- `docs/distilled/traceability-matrix-template.md`
- `docs/distilled/requirements-and-vv-guide.md`
- `docs/distilled/risk-gap-and-change-control-guide.md`

## Repository Map

| Path | Purpose |
|---|---|
| `docs/brainstorms/` | Requirements and product framing |
| `docs/distilled/` | Public TraceWeaver source-of-truth guidance produced through controlled promotion records |
| `docs/specs/` | Source specification for the MVP skill |
| `docs/plans/` | Implementation and validation plans |
| `skills/` | U4-promoted public TraceWeaver Core skill folders; not runtime/package accepted until U6 records exist |
| `plugins/traceweaver-core/` | Installable TraceWeaver Core alpha plugin for the U6a-selected Light v0.1 runtime scope |
| `docs/upstream/` | Upstream issue and public-safe fork preflight records |
| `docs/validation/` | Fork validation protocol and results |
| `.source-materials/` | Ignored local source cache |

Related implementation workspaces:

| Workspace | Purpose |
|---|---|
| Agent Skills fork | Upstream-neutral Agent Skills candidate implementation |
| Compound Engineering plugin workspace | TraceWeaver CE / Compound Engineering adapter work |

Remote:

- `git@github.com:Oxiom-Systems/traceweaver.git`

## Near-Term Next Steps

1. Treat U6b as passed only for TraceWeaver Core alpha install smoke and static
   selected-skill materialization under `light-v0.1-authority-traceability`.
2. Record observed no-forced runtime discovery and real adapter invocation as
   U9 or later U6b-dynamic evidence before
   any dynamic discovery, package-ready, release-ready, or upstream-ready claim.
3. Complete R31 real-project validation or keep it as an explicit U7 release
   blocker.
4. Prepare U7 release-gate decisions and release claim records before any U8
   upstream-neutral package, PR, or release-note surface.
5. Continue TraceWeaver CE baseline and lifecycle integration with the Core
   validation surface as the control point.

## Product Direction

TraceWeaver Core provides the open-source method: lifecycle rules, traceability
matrix, approved-authority gate, verification/validation distinction,
brownfield debt handling, and review discipline.

TraceWeaver Enterprise is the paid commercial product for teams that need
larger-project governance, auditability, policy profiles, and integration with
existing engineering systems.

TraceWeaver Cloud is the hosted MCP/API service for agent access, hosted
traceability storage, dashboards, audit logs, and connector-backed workflows.

TraceWeaver Enterprise and TraceWeaver Cloud should provide:

- MCP and API servers
- relational traceability database
- knowledge-base access
- impact analysis
- dashboards and audit reports
- audit logs
- enterprise policy profiles
- larger-project governance
- GitHub, Jira, Linear, ReqIF, OSLC, Capella, RMF, DOORS, Jama, and Polarion
  connectors over time

The open-source version should work without those services. The paid version
should make the same control model practical at team and enterprise scale.
