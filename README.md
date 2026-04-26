# TraceWeaver Core

Open-source systems engineering traceability for agentic software development.

TraceWeaver Core is the public method layer for weaving traceability through
multi-agent software work. It turns intent, needs, requirements, design
decisions, implementation, verification, validation, and change control into
explicit artifacts that agents and reviewers can maintain.

The current wedge is simple:

> Meaningful behaviour must trace to approved authority, or it is not ready to
> implement, approve, or ship.

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

## Current State

As of 2026-04-26:

| Area | Status | Notes |
|---|---|---|
| TraceWeaver Core repo | Primary project home | `git@github.com:Oxiom-Systems/traceweaver.git` |
| Agent Skills fork | Implementation-ready candidate | `feature/systems-engineering-traceability` branch in the Agent Skills fork |
| U5 validation baseline commit | `ca6ff66` | `docs: align skill tree count` |
| U5.5 expanded runtime candidate | `b01dd9c` | `feat: route ideation through traceability`; scope-change candidate pending focused review and validation |
| Upstream-neutral skill | Runtime candidate | `skills/systems-engineering-traceability/SKILL.md` |
| Operating model reference | Implementation-ready candidate | `references/systems-engineering-traceability-operating-model.md` |
| Traceability matrix template | Implementation-ready candidate | `references/traceability-matrix-template.md`; matrix is mandatory for the MVP |
| Requirements and V&V guide | U5.5 runtime candidate | `references/requirements-and-vv-guide.md`; mandatory for Core, pending U5.5 review |
| Risk, gap, and change-control guide | U5.5 runtime candidate | `references/risk-gap-and-change-control-guide.md`; mandatory for Core, pending U5.5 review |
| Discovery routing | Runtime candidate | Ideas route through `idea-refine` plus `systems-engineering-traceability`; meaningful behavior routes through traceability as a cross-cutting hop |
| Validation record | Refreshed to U5 baseline and U5.5 candidate | U5 pass applies only to `ca6ff66d46f140da72f423ea3dec819f81ef5337`; `b01dd9c762d3c80d0d279aeebcbd529302b73fa1` is not validated yet |
| Controlled validation | Complete for U5 baseline | VRUN-001, VRUN-002, and VRUN-003 passed with human ratings recorded at `ca6ff66` |
| Upstream PR packaging | Blocked on U5.5 decision | Do not package `b01dd9c` until focused review, runtime-sync evidence, and lifecycle-discoverability validation are recorded |
| TraceWeaver CE adapter | In progress | Compound Engineering adapter work is separate from the Core repo |
| TraceWeaver CE lifecycle baseline | In progress | Baseline approval and validation are not closed yet |

## TraceWeaver Core MVP Bundle

The TraceWeaver Core MVP is not just a skill prompt. The minimum usable
traceability capability is:

- `skills/systems-engineering-traceability/SKILL.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`
- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`
- README or index discoverability updates
- fork validation evidence from controlled scenarios

The traceability matrix is mandatory once the skill is used. Lite mode may use a
minimal matrix row, but it cannot skip the matrix artifact entirely.

The two companion guides are mandatory runtime guidance for the Core MVP, not
optional extras.

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
| Runtime agent bundle | `agent-skills/references/` | Committed in the Agent Skills fork | Runtime-ready copies consumed by agents. |

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
- Planning converts approved or candidate needs into requirements, design
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

TraceWeaver Core validation is complete for the U2-U5 baseline implementation
slice at `ca6ff66d46f140da72f423ea3dec819f81ef5337`.

Validation status:

- `ca6ff66d46f140da72f423ea3dec819f81ef5337`: U2-U5 implementation slice
  passed validation.
- `b01dd9c762d3c80d0d279aeebcbd529302b73fa1`: expanded U5.5 runtime
  candidate pending focused review and validation.
- Packaging status: not ready for the `b01dd9c` runtime bundle until U5.5
  review, runtime-sync evidence, and lifecycle-discoverability validation are
  complete.

The validation record contains all three controlled U5 baseline runs:

| Scenario | Purpose | Status |
|---|---|---|
| VRUN-001: New feature with document chain | Prove requirement-to-plan-to-implementation-to-results traceability | Pass |
| VRUN-002: Existing module audit | Prove the skill finds dark-code candidates and missing traceability | Pass |
| VRUN-003: Low-risk Lite mode | Prove Lite mode stays lightweight while still using a minimal matrix artifact | Pass |

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

Policy:

- `docs/upstream/source-materials-policy.md`
- `docs/upstream/source-distillation-extraction-instructions.md`

Canonical distilled guidance:

- `docs/distilled/systems-engineering-traceability-operating-model.md`
- `docs/distilled/traceability-matrix-template.md`
- `docs/distilled/requirements-and-vv-guide.md`
- `docs/distilled/risk-gap-and-change-control-guide.md`

## Repository Map

| Path | Purpose |
|---|---|
| `docs/brainstorms/` | Requirements and product framing |
| `docs/distilled/` | Public TraceWeaver source-of-truth guidance distilled from private source notes |
| `docs/specs/` | Source specification for the MVP skill |
| `docs/plans/` | Implementation and validation plans |
| `docs/upstream/` | Upstream issue, fork preflight, source policy, and distillation instructions |
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

1. Run a focused document review on the completed validation record and README
   status.
2. Decide whether U5.5 accepts the expanded Agent Skills runtime candidate
   `b01dd9c762d3c80d0d279aeebcbd529302b73fa1`.
3. Record runtime-sync evidence and lifecycle-discoverability validation for
   any accepted U5.5 runtime bundle.
4. Prepare the upstream-neutral package or TraceWeaver Core release notes,
   depending on the chosen distribution path.
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
