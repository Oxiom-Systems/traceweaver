---
date: 2026-04-25
topic: systems-engineering-traceability-skill
---

# Systems Engineering Traceability Skill Requirements

## Problem Frame

AI coding agents can generate working code faster than teams can preserve the engineering record that explains why the code exists. This creates dark code: meaningful behavior, interfaces, configuration, scripts, or workflows that cannot be traced to a stakeholder need, requirement, design decision, verification evidence, validation evidence, or accountable owner.

The project needs a lightweight Agent Skills contribution that manages systems engineering traceability flow for agent-generated software work. The skill should extend the existing `spec -> plan -> build -> test -> review -> ship` lifecycle with a practical chain:

`Idea / Intent -> Need -> Requirement -> Design -> Implementation -> Verification -> Validation -> Change Control`

Brainstorming and idea refinement create candidate ideas, needs, assumptions,
risks, and success signals. They do not create implementation authority.

It should also trace the engineering documents themselves so the record can be followed from `requirements.md` to `plan.md`, the traceability artifact, the acceptance test plan/procedure, and the final acceptance or verification results.

The skill also needs practical setup and maintenance tooling, expressed first as agent-executable workflow and Markdown artifacts rather than executable automation. In systems engineering terms:

- The traceability matrix is the authoritative audit record.
- Mermaid diagrams are derived views that help humans understand relationships.
- Stable IDs are the connective tissue across requirements docs, plans, traceability docs, code, tests, ATPs, results, reviews, and change requests.
- The agent is the traceability maintainer.

The immediate goal is not to ship a large systems engineering framework. The immediate goal is to define an upstreamable skill that is specific, verifiable, battle-tested, and minimal enough to be accepted by `addyosmani/agent-skills`.

Primary source: `docs/specs/systems-engineering-traceability-agent-skill.md`

The agent-facing systems engineering guidance must be original distilled project writing. Raw standards, handbooks, source PDFs, extraction notes, and long copied excerpts belong only in the ignored local source cache at `.source-materials/`. Until licensed ground-truth sources are available, provisional distilled guidance may be drafted from public knowledge and public references, but it must be marked provisional and must not claim standards compliance.

TraceWeaver has three architecture layers:

| Layer | Purpose | Names |
|---|---|---|
| Core skills | Portable, upstream-neutral capabilities usable in any agentic workflow | `requirements-reviewer`, `systems-engineering-traceability` |
| Core lifecycle guidance | Explains how core skills work together from idea to change control | `traceweaver-operating-model`, matrix template, requirements/V&V guide, risk/gap/change-control guide |
| Compound Engineering adapter | Wires core capabilities into Compound Engineering workflows, prompts, agents, and delegation | TraceWeaver CE, `ce-traceability`, `ce-traceability-reviewer`, CE hooks |

If a capability can be used in any agentic workflow, it belongs in TraceWeaver
Core. If it only exists to wire Compound Engineering commands, prompts,
reviewers, or lifecycle hooks, it belongs in TraceWeaver CE.

---

## Primary Users and MVP Use Cases

- A1. Upstream maintainers and reviewers: need a small, reviewable skill contribution that fits Agent Skills conventions.
- A2. AI coding agents: need clear instructions for setting up and maintaining traceability while work moves through spec, plan, build, test, review, and ship.
- A3. Human code reviewers and maintainers: need to answer why behavior exists, what requirement it satisfies, how it is verified, and how it will be validated.

MVP use cases:

- A coding agent reads a concise operating model that explains the lifecycle chain and authority rules before applying the skill.
- A coding agent starts a meaningful feature and sets up a traceability artifact before implementation begins.
- A coding agent updates the traceability matrix as requirements, design, tasks, code, tests, and validation evidence change.
- A coding agent keeps the document chain connected from requirements document to plan, traceability matrix, acceptance test plan/procedure, and acceptance or verification results.
- A reviewer audits an existing module or PR and flags missing links, dark-code candidates, and required human decisions.
- A human reviewer reads a Mermaid diagram to understand the relationship map, while relying on the Markdown matrix as the source of truth.

---

## Key Flows

- F1. Setup traceability for a new feature
  - **Trigger:** A new feature, module, service, interface, automation, or agent workflow is started.
  - **Actors:** A2, A3
  - **Steps:** Choose traceability depth, capture system context, assign an ID prefix, create or update `docs/traceability/[scope].md`, define needs and requirements, create the first matrix rows, and add an initial Mermaid relationship view.
  - **Outcome:** The agent can begin planning or implementation with an explicit traceability record already in place.
  - **Covered by:** R1, R2, R4, R5, R6, R7, R8

- F2. Maintain traceability during implementation
  - **Trigger:** A requirement, design decision, task, implementation artifact, test, validation path, or meaningful behavior changes.
  - **Actors:** A2, A3
  - **Steps:** Update affected matrix rows, link tasks and implementation artifacts, record verification evidence, record validation evidence or a validation plan, and flag unresolved gaps.
  - **Outcome:** The traceability record evolves with the system instead of being reconstructed after the fact.
  - **Covered by:** R1, R2, R8, R9, R10, R11, R12, R13

- F3. Audit unclear code or agent-generated work
  - **Trigger:** A PR, module, function group, configuration, test, or workflow lacks an obvious reason, owner, requirement, verification evidence, or validation path.
  - **Actors:** A2, A3
  - **Steps:** Search for linked needs, requirements, decisions, tests, validation evidence, and owners; classify dark-code candidates; create gaps; and request human decisions where traceability cannot be recovered safely.
  - **Outcome:** Missing traceability is visible as engineering work, not hidden as undocumented implementation.
  - **Covered by:** R14, R15, R16, R17

- F4. Use the visual map without losing the audit record
  - **Trigger:** A reviewer needs to understand relationships across needs, requirements, design, implementation, verification, and validation.
  - **Actors:** A2, A3
  - **Steps:** Generate or maintain a Mermaid diagram from the same IDs used in the matrix, keep the diagram compact, and treat the matrix as authoritative when the diagram and table disagree.
  - **Outcome:** The diagram improves comprehension without becoming a competing source of truth.
  - **Covered by:** R6, R7, R8

- F5. Trace the engineering document chain
  - **Trigger:** A requirements doc, plan, ATP, or results artifact is created or updated for a feature or change.
  - **Actors:** A2, A3
  - **Steps:** Link requirement IDs from the requirements doc to plan tasks, traceability rows, ATP entries, and final result records; flag missing documents or stale links as traceability gaps.
  - **Outcome:** A reviewer can move from `requirements.md` to `plan.md` to the traceability matrix to the ATP and results without guessing which artifact proves what.
  - **Covered by:** R34, R35, R36

---

## Requirements

**Managed Systems Engineering Flow**
- R1. The skill must manage traceability across the agent lifecycle, not merely produce a documentation artifact after implementation.
- R2. The skill must guide agents through the flow from stakeholder need to requirement, design decision, implementation artifact, verification evidence, and validation evidence or approved validation path.
- R3. The skill must distinguish verification from validation: verification proves the implementation satisfies the requirement; validation proves the solution satisfies the original stakeholder need.
- R4. The skill must define invocation and depth-selection rules, including when not to use the skill. Lite should be the default for ordinary feature and bug work, Standard for ambiguous behavior, interface, or data-flow changes, and Audit for high-risk, release-critical, compliance-sensitive, or owner-unclear work.
- R5. The MVP must satisfy lifecycle management through Core skill trigger conditions, checkpoints, and completion gates. Slash-command wiring, lifecycle-skill patches, Compound Engineering hooks, and automatic activation are adapter or follow-up work unless maintainers explicitly request them.
- R6. The skill must define explicit checkpoints before planning, building, testing, review, and shipping, including what trace links must be created, updated, or blocked at each checkpoint.

**Traceability Setup and Maintenance Tooling**
- R7. The skill must support stable IDs for meaningful needs, user requirements, system requirements, design decisions, tasks, implementation references, verification evidence, validation evidence, risks, gaps, and human decisions.
- R8. The skill must recommend feature-scoped ID prefixes where useful, such as `NEED-AUTH-001`, `SREQ-AUTH-001`, `ADR-AUTH-001`, `TASK-AUTH-001`, `VER-AUTH-001`, and `VAL-AUTH-001`.
- R9. The skill must define a lightweight Markdown traceability matrix as the authoritative artifact linking requirements to source needs, design decisions, tasks, implementation, verification, validation, owner, status, and gaps.
- R10. The skill must define Mermaid diagrams as generated or maintained visual views of the matrix, not as the source of truth.
- R11. The skill must provide setup guidance for a traceability artifact at `docs/traceability/[scope].md` or an equivalent repo-local location when the project already has a traceability convention.
- R12. The traceability artifact must be able to include system context, stakeholder needs, requirements, design decisions, the traceability matrix, Mermaid diagram, verification evidence, validation evidence, traceability gaps, dark-code candidates, and required human decisions.
- R13. The skill must allow private helpers to inherit traceability through the feature, module, interface, or behavior they support instead of requiring line-by-line tracing.

**Evidence, Validation, and Approval**
- R14. The skill must record verification evidence using concrete commands, results, paths, dates or sessions, and notes where applicable.
- R15. The skill must record validation evidence or an explicit validation plan with owner and status when validation cannot happen before merge.
- R16. The skill must keep verification evidence separate from validation evidence, even when the same artifact contributes to both.
- R17. Human approval for agent-inferred requirements must record approver, date or session, source artifact, affected requirement IDs, and resulting status before an inferred requirement can move out of `Draft`.

**Dark Code and Impact Control**
- R18. The skill must define dark-code candidates as meaningful artifacts whose reason, requirement, design rationale, test evidence, validation path, owner, or removal impact is unclear.
- R19. The skill must classify dark-code candidates as keep and document, test and verify, validate, deprecate, remove, or escalate.
- R20. The skill must require impact analysis when linked requirements, interfaces, architecture, data flows, risk controls, or externally observable behavior change.
- R21. For ordinary implementation changes that do not affect those triggers, the skill should require a trace update or verification note rather than a full impact analysis.
- R22. The skill must prevent fake traceability by treating agent-inferred requirements as drafts until a human approves them with recorded evidence.

**Agent Skills Upstream Fit**
- R23. The first upstream contribution must be a focused MVP skill, not a broad systems engineering framework.
- R24. The MVP must follow upstream skill anatomy: frontmatter, overview, when-to-use, process, rationalizations, red flags, and verification.
- R25. The MVP must avoid duplicating existing skill content and should reference related skills where needed.
- R26. Supporting references and templates must live in top-level `references/`, not inside the skill directory, for the upstream `addyosmani/agent-skills` contribution.
- R27. The TraceWeaver Core MVP must include `skills/requirements-reviewer/SKILL.md`, `skills/systems-engineering-traceability/SKILL.md`, `references/systems-engineering-traceability-operating-model.md`, `references/traceability-matrix-template.md`, `references/requirements-and-vv-guide.md`, `references/risk-gap-and-change-control-guide.md`, and README/index discoverability updates if required. The two companion guides are mandatory runtime guidance for the Core MVP, not optional extras. Upstream PR packaging may be reduced only through an explicit scope decision; the matrix template and operating model remain required for a usable traceability MVP.
- R28. The first PR must exclude `/trace`, systems engineer persona, broad lifecycle patches, executable metrics automation, high-assurance variants, and full systems engineering theory.

**Adoption and Validation Strategy**
- R29. The project must verify current upstream contribution rules, recent accepted skill patterns, and maintainer appetite before finalizing the PR shape.
- R30. The project must open an issue or RFC before the first PR, framing the work as a lightweight traceability workflow for agent-generated behavior.
- R31. The project must test the skill in a fork before the first upstream PR on at least one real feature, one unclear existing module, and one low-risk change where Lite mode should avoid over-process.
- R32. The project must capture concrete evidence from fork testing, such as dark-code candidates, missing validation paths, missing requirement links, unclear design decisions, false positives, confusing guidance, time or step overhead, and reviewer confidence.
- R33. Follow-up work may add `/trace`, systems engineer persona, lifecycle skill patches, high-assurance variants, executable diagram generation, and metrics only after maintainers accept or request the core skill.

**Document Chain, ATP, and Results**
- R34. The skill must make document-to-document traceability explicit for projects that use separate artifacts, linking requirements documents, planning documents, traceability matrices, acceptance test plans/procedures, and final result records.
- R35. The traceability artifact must support links to source requirement docs, plan/task docs, ATP entries, and acceptance or verification result artifacts without requiring a heavyweight requirements database.
- R36. The skill must treat missing, stale, or contradictory links between requirements, plans, ATPs, and results as traceability gaps that require update, evidence, or human decision.

**Source Basis and Distillation Control**
- R37. The project must maintain an ignored local source cache at `.source-materials/` for licensed standards, public reference downloads, extraction notes, checksums, and source inventories used to create distilled guidance.
- R38. Committed project artifacts must not include raw standards, handbook PDFs, screenshots, copied tables, long excerpts, or local extraction notes from `.source-materials/`.
- R39. The agent-facing operating model must be original project-specific writing that cites official or public source pages where possible and does not reproduce ISO, IEEE, INCOSE, or other protected source text.
- R40. If licensed ground-truth sources are not yet available, provisional operating-model guidance may be drafted from public knowledge and public references, but uncertain source-derived claims must be marked provisional and must not claim standards compliance.
- R41. The upstream MVP must separate the concise operating model from the traceability matrix template so lifecycle authority rules, source hierarchy, and provisional-distillation boundaries are not buried inside the matrix example.
- R42. Runtime reference copies are not considered synced until the source-to-runtime mapping, version stamp, checksum, reviewer, review session, and implementation commit are recorded.

**Requirements Quality Control**
- R43. The system must provide a `requirements-reviewer` capability that reviews stakeholder needs, user requirements, system requirements, success criteria, acceptance criteria, and agent-reframed requirements for quality before they may become approved implementation authority.
- R44. The requirements-reviewer must assess whether each candidate requirement is clear, singular, necessary, feasible, verifiable, validation-aware, traceable to source, implementation-neutral unless intentionally constrained, and written at the correct level of abstraction.
- R45. A requirement may become approved authority only when it passes requirements-reviewer and receives the project's normal approval record, or when the weak requirement is converted into an approved exception. Human acceptance of a weak, ambiguous, unverifiable, implementation-biased, or incomplete requirement does not by itself make that item an approved requirement.
- R46. If a weak requirement is intentionally accepted, it must be recorded as an approved gap, accepted risk, design decision, change-control exception, or validation gap. The exception record must include owner, approved by, date/session, allowed use, review condition, and rationale.
- R47. Requirements-reviewer findings must record requirement ID, original source text, reframed text when applicable, failed quality checks, severity, approval readiness, traceability impact, recommended action, and accepted-risk or exception evidence when needed.
- R48. Requirements-reviewer determines whether a requirement is good enough to become authority. Systems-engineering-traceability determines whether meaningful behavior traces to approved authority. Both checks are required when requirements or success criteria authorize implementation.
- R49. When an agent converts an idea, vague stakeholder statement, or candidate need into a requirement or success criterion, it must preserve the original wording, source, agent reframe, assumptions introduced, rationale for the reframe, requirements-reviewer result, and approval state. The reframed requirement remains `Draft` until requirements-reviewer confirms it preserves intent and a human approval record accepts it.
- R50. Skill routing must be cumulative for lifecycle work. Requirements, success criteria, stakeholder needs, acceptance criteria, and agent-reframed requirements must route through `requirements-reviewer`. When the same work also affects meaningful behavior or implementation authority, it must also route through `systems-engineering-traceability`. A broad traceability match must not bypass requirements quality review.

**Architecture Boundary**
- R51. `requirements-reviewer` and `systems-engineering-traceability` are TraceWeaver Core skills. They must remain upstream-neutral and must not depend on Compound Engineering commands, prompts, reviewers, or plugin-specific lifecycle hooks.
- R52. TraceWeaver Core lifecycle guidance must explain how the core skills work together across idea / intent, candidate needs, draft requirements, requirements quality review, approved requirements or approved exceptions, design decisions, implementation, verification, validation, and change control.
- R53. TraceWeaver CE is the Compound Engineering adapter. CE-specific wrappers such as `ce-traceability`, `ce-traceability-reviewer`, and any future `ce-requirements-reviewer` may wire the core capabilities into CE workflows, but they must not become the source definition of the core capabilities.

---

## Acceptance Examples

- AE1. **Covers R7, R8, R9, R11, R12.** Given an agent starts work on authentication, when it invokes the skill in Standard mode, it creates or updates `docs/traceability/authentication.md`, assigns feature-scoped IDs, records system context, and creates initial matrix rows before implementation begins.
- AE2. **Covers R9, R10.** Given a traceability matrix and Mermaid diagram disagree, when a reviewer asks which is authoritative, the agent treats the Markdown matrix as the source of truth and updates the diagram to match it.
- AE3. **Covers R13, R20, R21.** Given a private helper changes without altering externally observable behavior, when the agent updates traceability, it links the helper through its parent module or feature and records a verification note instead of forcing a full impact analysis.
- AE4. **Covers R17, R22.** Given an agent infers a new requirement while auditing code, when no human has approved it, the agent records it as `Draft` and creates a required human decision instead of presenting it as accepted traceability.
- AE5. **Covers R31, R32.** Given fork validation is run before the upstream PR, when the skill finds traceability gaps, the validation report records both useful findings and noise indicators such as false positives, confusing guidance, and workflow overhead.
- AE6. **Covers R34, R35, R36.** Given a feature has `requirements.md`, `plan.md`, an ATP, and result output, when the agent updates traceability, the matrix links the relevant requirement IDs to the plan tasks, ATP entries, result records, and any missing or stale document links are listed as gaps.
- AE7. **Covers R37-R41.** Given an agent drafts the operating model before licensed ground-truth sources are available, when it commits project guidance, it writes original provisional language, cites official or public source pages, keeps raw source material in `.source-materials/`, and does not claim standards compliance.
- AE8. **Covers R43-R49.** Given an agent reframes a vague stakeholder statement into success criteria, when the criteria may authorize implementation, requirements-reviewer preserves the original wording and source, reviews the reframe for quality and intent preservation, leaves the reframe in `Draft` until approval, and blocks weak requirements from becoming approved requirements unless they are converted into approved exceptions.
- AE9. **Covers R50.** Given a lifecycle prompt includes both requirements or success criteria and meaningful behavior, when skill discovery runs, the agent routes through both requirements-reviewer and systems-engineering-traceability instead of stopping after the first broad match.
- AE10. **Covers R51-R53.** Given a CE adapter needs traceability in `ce-work` or `ce-doc-review`, when it is implemented, it wraps or invokes the Core skills instead of redefining requirements quality or traceability rules inside CE-specific guidance.

---

## Success Criteria

- The requirements document is clear enough that planning does not need to invent product behavior, scope boundaries, tooling purpose, or success criteria.
- The MVP can be explained in one sentence: a lightweight traceability skill that helps agents set up and maintain the chain explaining why behavior exists, what requirement it satisfies, how it is verified, and how it is validated.
- The planned first PR has a small review surface and avoids bundled concerns.
- The skill requirements preserve systems engineering value without adding heavyweight process.
- The operating model is clearly defined as original distilled agent-facing guidance, distinct from both source materials and the matrix template.
- The traceability matrix is clearly defined as the audit record, the Mermaid diagram as the visual map, the IDs as the linking mechanism, and the agent as the maintainer.
- The artifact chain from requirements doc to plan doc to traceability matrix to ATP and results is explicit enough for a reviewer to audit.
- The plan includes a validation loop using a fork and real project evidence before upstream PR submission.
- The requirements-reviewer capability is defined as a first-class lifecycle quality gate before requirements become implementation authority.
- Requirements-quality routing and traceability routing are cumulative when both apply to the same lifecycle work.
- Requirements-reviewer and systems-engineering-traceability are clearly defined as Core capabilities, while TraceWeaver CE is clearly defined as the Compound Engineering adapter.

---

## Scope Boundaries

- The first PR will not add `/trace`.
- The first PR will not add a systems engineer persona.
- The first PR will not patch every existing skill.
- Any idea-refinement or requirements/traceability routing work after the
  validated U2-U5 slice must be recorded as a separate scope-change candidate
  before packaging. Broader persona-awareness and non-essential persona wiring
  remain follow-up work unless separately authorized by new requirements.
- The first PR will not implement MBSE, SysML, DOORS, or a requirements database.
- The first PR will not require tracing every private helper or every line of code.
- The first PR will not add executable automation for generating diagrams, calculating metrics, or enforcing traceability gates.
- The first PR will not claim acceptance evidence until the skill has been tested in a fork.
- The first PR will not commit raw source materials, licensed standards, handbook PDFs, extraction notes, or long copied excerpts.
- The TraceWeaver Core bundle must include the core skills, a concise operating model, a concise traceability matrix template, the requirements/V&V guide, and the risk/gap/change-control guide. If the upstream PR is packaged smaller than Core, that reduction must be recorded as a scope decision.
- Compound Engineering-specific hooks, reviewers, delegation payloads, and CE wrappers belong to TraceWeaver CE, not the Core source definition.
- Human acceptance of weak, ambiguous, unverifiable, implementation-biased, or incomplete requirements must create an approved exception record, not an approved requirement.

---

## Key Decisions

- Use `systems-engineering-traceability` as the skill name: it is explicit, searchable, and broad enough to cover requirements, V&V, impact analysis, traceability setup, traceability maintenance, and dark-code detection.
- Start with a focused MVP: upstream review feedback on similar contributions favors small PRs with one concern.
- Treat the Markdown traceability matrix as the authoritative artifact.
- Treat Mermaid diagrams as derived visual views, useful for comprehension but not authoritative.
- Use stable IDs as the linking mechanism across requirements, design, tasks, implementation, tests, validation evidence, gaps, and human decisions.
- Treat ATP as the acceptance test plan/procedure and result records as explicit evidence artifacts that must link back to requirement IDs.
- Use Markdown artifacts first: they fit Agent Skills conventions and are easy for agents and humans to maintain.
- Use a separate operating-model reference for original distilled lifecycle rules, source hierarchy, candidate-vs-approved authority, and provisional guidance boundaries.
- Include the traceability matrix template in the MVP. Lite/Standard/Audit modes may change the amount of detail required in a project row, but they do not make the matrix artifact optional once the skill is used.
- Use `.source-materials/` only as an ignored local cache for source material and scratch notes; committed project guidance must be original writing.
- Treat validation plans as acceptable before merge when real validation depends on later stakeholder review, staged rollout, telemetry, or production use.
- Treat inferred requirements as `Draft` until human-approved to reduce fake traceability.
- Keep executable tooling out of the first PR unless maintainers explicitly ask for it.

---

## Alternatives Considered

- Full systems engineering framework in one PR: rejected because it would likely look too large and enterprise-heavy.
- Immediate `/trace` command: deferred because command workflow should follow acceptance of the core skill.
- Immediate systems engineer persona: deferred because persona wiring is an independent concern and should not be bundled with the first PR.
- Executable traceability tooling in the first PR: deferred because the upstreamable MVP should prove the workflow and artifacts before adding automation.
- Diagram as source of truth: rejected because diagrams are easier to read but weaker as audit records than tables with explicit evidence fields.
- Function-level traceability: rejected for v1 because it creates too much overhead; trace meaningful behavior, interfaces, data flows, modules, and risk controls instead.

---

## Dependencies / Assumptions

- The upstream repository continues to accept new skills that are specific, verifiable, battle-tested, and minimal.
- Current upstream contribution rules and recent accepted skill patterns must be rechecked before opening the PR.
- `docs/distilled/` is the source of truth for public TraceWeaver guidance. The requirements/spec/plan govern project scope and packaging decisions. A project traceability matrix remains the source of truth for that project's trace links, status, evidence, gaps, and human decisions.
- Local source materials and extraction notes remain outside git in `.source-materials/`; committed docs cite public or official source pages rather than local private files.
- A fork of `addyosmani/agent-skills` will be available for testing before opening the upstream PR.
- Fork testing can produce concrete evidence that the skill finds useful traceability gaps without creating too much process overhead.
- Representative or dummy validation runs may verify workflow shape and evidence capture, but they do not satisfy R31. R31 remains open until the three pre-registered real validation scenarios are completed.
- Mermaid is acceptable as a Markdown-rendered visual view in downstream repos, but the skill must remain useful where Mermaid rendering is unavailable.

---

## Outstanding Questions

### Resolve Before Planning

None.

### Deferred to Planning

- [Affects R27][Resolved] The first PR includes the separate traceability matrix template. A skill-only MVP without matrix guidance is not acceptable because it would make traceability optional or unusable.
- [Affects R31][Needs research] Identify which real projects or modules should be used for fork validation.
- [Affects R29, R30][Needs research] Verify current upstream contribution rules, recent accepted skill patterns, and issue/RFC framing before opening the upstream proposal.
- [Affects R10, R33][Technical] Decide whether Mermaid diagrams are hand-maintained in the MVP template or described as generated views for future executable tooling.
- [Affects R37-R41][Source control] Replace any provisional operating-model guidance with ground-truth-reviewed wording once licensed sources are available in `.source-materials/`.

---

## Next Steps

-> /ce:plan for structured implementation planning
