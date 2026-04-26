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
| Agent Skills fork | Implementation-ready candidate | `/Users/hanneszietsman/CrypotAI/agent-skills` on `feature/systems-engineering-traceability` |
| Latest tested candidate commit | `ca6ff66` | `docs: align skill tree count` |
| Upstream-neutral skill | Implementation-ready candidate | `skills/systems-engineering-traceability/SKILL.md` |
| Operating model reference | Implementation-ready candidate | `references/systems-engineering-traceability-operating-model.md` |
| Traceability matrix template | Implementation-ready candidate | `references/traceability-matrix-template.md`; matrix is mandatory for the MVP |
| Discovery routing | Implementation-ready candidate | `systems-engineering-traceability` is wired into `using-agent-skills` as a cross-cutting hop |
| Validation record | Refreshed to tested commit | Points at `ca6ff66d46f140da72f423ea3dec819f81ef5337` |
| Controlled validation | Technical evidence captured | VRUN-001, VRUN-002, and VRUN-003 complete pending human ratings |
| Upstream PR packaging | Blocked | Do not package until validation passes |
| TraceWeaver CE adapter | In progress | Compound Engineering adapter work is separate from the Core repo |
| TraceWeaver CE lifecycle baseline | In progress | Baseline approval and validation are not closed yet |

## MVP Contract

The TraceWeaver Core MVP is not just a skill prompt. The minimum usable
traceability capability is:

- `skills/systems-engineering-traceability/SKILL.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`
- README or index discoverability updates
- fork validation evidence from controlled scenarios

The traceability matrix is mandatory once the skill is used. Lite mode may use a
minimal matrix row, but it cannot skip the matrix artifact entirely.

## Operating Model

TraceWeaver Core uses an original, lightweight, systems-engineering-aligned
operating model for agentic software work:

```text
intent
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

TraceWeaver Core is not PR-ready or release-ready until the validation record
contains all three controlled runs:

| Scenario | Purpose | Status |
|---|---|---|
| VRUN-001: New feature with document chain | Prove requirement-to-plan-to-implementation-to-results traceability | Technical evidence captured; human rating pending |
| VRUN-002: Existing module audit | Prove the skill finds dark-code candidates and missing traceability | Technical evidence captured; human rating pending |
| VRUN-003: Low-risk Lite mode | Prove Lite mode stays lightweight while still using a minimal matrix artifact | Technical evidence captured; human rating pending |

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

## Repository Map

| Path | Purpose |
|---|---|
| `docs/brainstorms/` | Requirements and product framing |
| `docs/specs/` | Source specification for the MVP skill |
| `docs/plans/` | Implementation and validation plans |
| `docs/upstream/` | Upstream issue, fork preflight, and source policy records |
| `docs/validation/` | Fork validation protocol and results |
| `.source-materials/` | Ignored local source cache |

Related local workspaces:

| Workspace | Purpose |
|---|---|
| `/Users/hanneszietsman/CrypotAI/agent-skills` | Upstream-neutral Agent Skills candidate implementation |
| `/Users/hanneszietsman/CrypotAI/compound-engineering-plugin` | TraceWeaver CE / Compound Engineering adapter work |

Remote:

- `git@github.com:Oxiom-Systems/traceweaver.git`

## Near-Term Next Steps

1. Refresh `docs/validation/systems-engineering-traceability-fork-results.md`
   against the latest tested `agent-skills` commit.
2. Run the three controlled validation scenarios.
3. Record useful findings, false positives, reviewer confidence, and overhead.
4. Decide whether the upstream-neutral Agent Skills slice is PR-ready or needs
   revision.
5. Continue TraceWeaver CE baseline and lifecycle integration only after the
   Core validation surface is stable enough to govern the adapter work.

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
