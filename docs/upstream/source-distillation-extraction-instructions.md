# Source Distillation Extraction Instructions

These instructions control how local source materials are reviewed and turned
into bundled TraceWeaver Core guidance.

The goal is not to summarize standards for their own sake. The goal is to
extract the systems-engineering concepts TraceWeaver needs, then rewrite them
as original, agent-facing operating rules for multi-agent software development.

## Source Boundary

Local source conversions live under:

```text
.source-materials/notes/priority-docs-2026-04-26/markdown/
```

That folder is ignored by git. It may contain licensed, public, or
user-provided source material. Do not commit raw source files, converted
Markdown, screenshots, copied figures, copied tables, or long excerpts.

Committed TraceWeaver guidance must be original project writing. It may cite
official or public source pages, but it must not reproduce ISO, IEEE, INCOSE,
NASA, MIL, or other protected source text.

## Bundled Distillation Targets

Use the source material to improve these bundled artifacts:

| Target Artifact | Purpose | Distillation Role |
|---|---|---|
| `references/systems-engineering-traceability-operating-model.md` | Runtime agent-facing model | Compact lifecycle chain, agent rules, authority rules, V&V distinction, change-control discipline |
| `references/traceability-matrix-template.md` | Runtime matrix template | Required fields, statuses, authority links, verification/validation evidence, risk controls, approved gaps, traceability debt |
| `README.md` or package index | Discoverability | Clear project positioning and source-boundary language |
| Future `references/requirements-and-vv-guide.md` if needed | Optional support reference | Short original guidance for requirement quality, ATP/results, and validation scenarios if the operating model becomes too long |

Do not add a bundled source appendix that paraphrases each standard chapter by
chapter. Bundle only what agents need to operate TraceWeaver correctly.

## Source Priority

When sources overlap, use this priority order:

| Priority | Sources | Use |
|---|---|---|
| 1 | ISO/IEC/IEEE 15288:2023 and INCOSE Systems Engineering Handbook 5th Edition | Core lifecycle and systems-engineering operating model |
| 2 | INCOSE Guide to Needs and Requirements and INCOSE Guide to Verification & Validation | Requirement quality, need-to-requirement flow, V&V planning, evidence discipline |
| 3 | IEEE 15288.1-2014 and IEEE 15288.2-2014 | Application guidance, implementation detail, assessment/evidence concepts after confirming exact local meaning |
| 4 | IEEE 1471 and IEEE 1220-1998 | Architecture-description concepts, design rationale, legacy systems-engineering process concepts |
| 5 | MIL-STD-882D and MIL-STD-810F | Risk-control, safety, and test-evidence examples only where useful for generic TraceWeaver controls |
| 6 | MIL-STD-2000A and the relationship diagram PNG | Secondary context only; do not import domain-specific manufacturing or diagram content unless it improves a generic TraceWeaver relationship model |

ISO/IEC/IEEE 29148 and ISO/IEC/IEEE 15289 remain part of the desired source
basis, but do not claim they were extracted until local ground-truth copies or
approved public source pages have been reviewed.

## Extraction Workflow

Run extraction in six passes.

### Pass 1: Inventory And Scope Check

For each source, record a local-only extraction note in:

```text
.source-materials/notes/priority-docs-2026-04-26/extracts/
```

Use one note file per source. Each note should record:

- source ID
- local Markdown path
- source type: licensed, public, user-provided, or metadata-only
- extraction status
- topics reviewed
- pages or headings reviewed, if available
- whether the extracted idea is primary, supporting, conflicting, or out of scope

Do not put copied source paragraphs in the note. Use short page references and
your own interpretation.

### Pass 2: Source-Aware Extraction Notes

For each useful concept, create an extraction entry with this structure:

```markdown
### EXTRACT-<SOURCE>-<NNN>

Source: <source ID>
Local location: <page, section, heading, or search hit>
Topic: <requirements / V&V / risk / architecture / traceability / change control>
Source concept in our words: <one or two original sentences>
TraceWeaver implication: <what an agent, matrix, gate, or reviewer must do>
Target artifact: <operating model / matrix template / README / future guide>
Status: Candidate / Accepted / Rejected / Needs review
Copyright check: No copied source text, table, or diagram
```

The local extraction note may refer to page or section numbers so reviewers can
check the source. The committed artifact should cite official/public source
pages, not local private file paths.

### Pass 3: Cross-Source Synthesis

After source-specific extraction, group accepted extracts into TraceWeaver
themes:

- lifecycle chain and process checkpoints
- needs and requirements
- architecture and design decisions
- implementation authority
- verification evidence
- validation evidence
- traceability matrices and relationship completeness
- risk controls and approved gaps
- configuration, baseline, and change control
- information items and audit records
- lifecycle agent responsibilities
- tailoring modes: Lite, Standard, Audit

For each theme, identify:

- the primary source basis
- supporting sources
- conflicting interpretations, if any
- the TraceWeaver-specific decision
- the bundled artifact that needs an update

### Pass 4: Original TraceWeaver Drafting

Draft bundled guidance in TraceWeaver language, not source language.

Good TraceWeaver drafting:

- tells agents what to do
- uses stable TraceWeaver terms such as `NEED-*`, `UREQ-*`, `SREQ-*`, `ADR-*`,
  `TRACE-*`, `VER-*`, `VAL-*`, `RISK-*`, `GAP-*`, and `TD-*`
- separates candidate, draft, approved, superseded, retired, open, closed, and
  expired states
- distinguishes provenance from authority
- distinguishes verification from validation
- preserves the no-orphan gate
- explains Lite/Standard/Audit tailoring

Bad TraceWeaver drafting:

- copies source definitions or tables
- reproduces source diagrams
- describes the standard instead of telling the agent what to do
- claims full standards compliance
- treats review findings, tasks, inferred requirements, bare risks, or open
  debt as authority

### Pass 5: Copyright And Source Hygiene Review

Before committing bundled guidance, check:

- no copied table structure from a protected source
- no copied figure or diagram
- no long quotes
- no local private source paths in public-facing reference sections
- no claim that TraceWeaver implements or complies with a standard
- source basis cites official or public pages where possible
- any unverified source-derived claim is marked provisional

### Pass 6: TraceWeaver Review

Run document review on the updated bundled guidance.

The review must check:

- every new rule has a clear TraceWeaver purpose
- authority language remains consistent with the approved-authority rule
- `GAP-*` remains approved-gap authority only
- `TD-*` remains ordinary traceability debt
- `RISK-*` is valid only as a first-class approved risk control
- Lite mode still creates a minimal matrix artifact
- no source summary drift makes the runtime skill too long or too abstract

## Extraction Focus By Source

### ISO/IEC/IEEE 15288:2023 HTML Export

Extract for TraceWeaver:

- lifecycle process categories and how they relate to agent workflows
- stakeholder need, requirement, architecture/design, implementation,
  verification, validation, transition, operation, maintenance, and change
  concepts
- process tailoring and the fact that TraceWeaver must not prescribe one
  universal lifecycle methodology
- information flow between stakeholders, acquirers, suppliers, and project
  teams
- configuration, decision, risk, information, measurement, quality, and
  assurance concepts that affect traceability

Translate into:

- the TraceWeaver lifecycle chain
- lifecycle agent responsibilities
- approved-authority gates
- baseline and change-control rules
- validation as stakeholder/outcome evidence, not just test passing

Do not extract:

- normative process text
- source process tables
- exact process purpose/outcome wording

### INCOSE Systems Engineering Handbook 5th Edition

Extract for TraceWeaver:

- practical explanation of systems-engineering process flow
- tailoring guidance for different project scales and risk levels
- connections among needs, requirements, architecture, integration, verification,
  validation, transition, operation, maintenance, and disposal
- technical management practices that map to agent work: planning, decision
  management, risk management, configuration management, information
  management, measurement, quality, and assurance
- examples of lifecycle feedback loops and iterative refinement

Translate into:

- Lite/Standard/Audit mode guidance
- agent handoff rules from brainstorm to plan to work to review
- change-control questions
- reviewer checks for orphan behavior, dark code, and unvalidated behavior

Do not extract:

- handbook diagrams
- detailed chapter summaries
- original checklists or table wording

### INCOSE Guide To Needs And Requirements v1

Extract for TraceWeaver:

- distinction between stakeholder needs, user requirements, system
  requirements, and design decisions
- qualities of useful requirements
- requirement attributes that help agents and reviewers: ID, source, owner,
  rationale, status, priority, verification method, validation path, and change
  history
- handling of assumptions, constraints, derived requirements, and inferred
  requirements
- requirement baseline and approval discipline
- requirement flowdown and bidirectional traceability concepts

Translate into:

- candidate need format for brainstorming
- `UREQ-*` and `SREQ-*` matrix fields
- draft vs approved requirement status
- inferred-link blocking rules
- requirement-change workflow
- no-orphan gate wording

Do not extract:

- exact requirement-quality checklists
- example requirement statements verbatim
- source-specific templates

### INCOSE Guide To Verification And Validation v1

Extract for TraceWeaver:

- verification vs validation distinction
- planning V&V before or alongside implementation
- objective evidence expectations
- procedure/result separation
- verification methods and result records
- validation against stakeholder needs and intended use
- handling failed, deferred, or partial V&V
- independence, review, or confidence considerations where useful

Translate into:

- `VER-*` and `VAL-*` rows
- ATP/result expectations
- validation scenario records
- pass/fail/context evidence requirements
- rule that tests can verify behavior without proving stakeholder validation
- deferred validation debt and approval rules

Do not extract:

- source wording for V&V definitions
- source procedure templates
- large example records

### IEEE 15288.1-2014

Extract for TraceWeaver after confirming the local document scope:

- application guidance that helps tailor 15288 concepts to a concrete project
- practical interpretation of process responsibilities
- lifecycle adoption or transition considerations
- guidance that clarifies what evidence a process should leave behind

Translate into:

- how TraceWeaver maps systems-engineering process concepts into agent
  prompts, skills, and review artifacts
- how a project tailors the traceability matrix without making it optional
- how an agent decides when to escalate for human approval

Do not extract anything that duplicates stronger source guidance unless it
clarifies agent behavior.

### IEEE 15288.2-2014 And Introduction HTML

Extract for TraceWeaver after confirming the local document scope:

- assessment or evidence concepts that help decide whether a process is
  actually being performed
- indicators that a lifecycle control is present, missing, partial, or
  ineffective
- artifact completeness cues that can map to TraceWeaver review checks

Translate into:

- completion gates
- review findings vocabulary
- "evidence or it did not happen" rules
- validation record acceptance checks

Do not extract:

- assessment model tables
- detailed rating scales unless rewritten as TraceWeaver-specific review
  heuristics

### IEEE 1220-1998

Extract for TraceWeaver:

- older systems-engineering process concepts that still clarify requirements,
  design synthesis, analysis, verification, and control
- traceability and design-flow concepts that remain useful for software agents
- interface and integration thinking if it improves the matrix template

Translate into:

- supporting rationale for the lifecycle chain
- optional guidance for interface/dependency trace rows
- dark-code and load-bearing legacy dependency checks

Treat as secondary. Do not let older guidance override current 15288/INCOSE
alignment.

### IEEE 1471 Architecture Description Standard

Extract for TraceWeaver:

- stakeholder, concern, view, viewpoint, model, rationale, and architecture
  description concepts
- how architecture decisions should be linked to concerns and requirements
- how multiple views can represent one system without replacing the source
  authority record

Translate into:

- `ADR-*` and design-decision fields
- architecture concern and rationale fields
- rule that diagrams are derived views, while the matrix is the control record
- interface and dependency trace checks

Do not extract:

- standard architecture templates
- copied terminology blocks
- diagrams

### MIL-STD-882D Risk/Safety Material

Extract for TraceWeaver:

- risk/hazard ownership concepts
- mitigation/control discipline
- relationship among risk statement, severity or consequence, likelihood or
  probability, mitigation, verification evidence, acceptance, and residual risk
- escalation and approval expectations for safety-related controls

Translate into:

- first-class risk-control table fields
- rule that a bare `RISK-*` ID is not authority
- risk-control approval and evidence requirements
- residual-risk or accepted-risk notes where useful

Use generic project-risk language. Do not turn TraceWeaver into a safety
standard implementation unless a project explicitly opts into that domain.

### MIL-STD-810F Environmental Test Standard

Extract for TraceWeaver:

- tailoring test conditions to intended use
- documenting test setup, assumptions, configuration, procedure, result, and
  deviations
- difference between generic test execution and evidence that matches the
  operational environment

Translate into:

- validation scenario context fields
- verification run context fields
- test-result evidence quality guidance
- environmental or deployment-context validation notes for software systems

Treat as an example source for evidence discipline, not as general TraceWeaver
methodology.

### MIL-STD-2000A

Extract only if it contributes generic evidence or inspection lessons.

Likely useful categories:

- inspection record structure
- workmanship or acceptance-record discipline
- configuration-specific evidence

Do not import domain-specific manufacturing requirements into TraceWeaver Core.
If no generic lesson is found, mark this source out of scope.

### Relationship Diagram PNG

Use only as private context for thinking about relationship types among
capabilities, activities, systems, functions, and verification views.

Do not reproduce the image. If a diagram is needed in bundled docs, create a new
TraceWeaver-specific Mermaid diagram from first principles and make the matrix
the authoritative record.

## Required Distillation Themes

Each theme below should produce either a bundled artifact update or an explicit
"no change needed" decision.

### Theme 1: Lifecycle Chain

Extract:

- how needs move toward requirements
- how requirements move toward design decisions
- how designs move toward implementation
- how implementation produces verification and validation evidence
- how change control maintains the chain

Bundle as:

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

Acceptance check:

- every lifecycle agent has a small rule matching its part of the chain
- brainstorm output remains candidate input, not authority
- implementation starts only from approved authority

### Theme 2: Needs And Requirements

Extract:

- need vs requirement distinction
- requirement quality attributes
- owner/source/rationale/status fields
- handling draft, derived, and inferred requirements
- approval and baseline expectations

Bundle as:

- requirement row fields
- candidate need guidance
- draft and inferred-link blocking rules
- requirement-change control rules

Acceptance check:

- no agent can treat a stakeholder need alone as implementation authority
- no agent can silently promote an inferred requirement to approved authority

### Theme 3: Design And Architecture

Extract:

- how architecture concerns become design decisions
- how views and diagrams relate to records
- how rationale and tradeoffs should be preserved
- how interfaces and dependencies affect traceability

Bundle as:

- `ADR-*` or `DD-*` fields
- design-decision status rules
- matrix-to-diagram precedence rule
- interface/dependency trace checks

Acceptance check:

- free-text "Design:" labels do not become authority unless they map to stable
  approved decision records

### Theme 4: Verification

Extract:

- what objective evidence is needed to show implementation satisfies
  requirements
- method/procedure/result separation
- tested configuration and run context
- pass/fail/deviation recording

Bundle as:

- `VER-*` fields
- ATP/result expectations
- evidence table requirements
- rule that listed commands without outcome/context are not evidence

Acceptance check:

- verification evidence always has date/session, command or procedure, tested
  ref or artifact hash, outcome, and notes

### Theme 5: Validation

Extract:

- validation against stakeholder need, intended use, and operational context
- scenario design
- acceptance by user, owner, or representative reviewer
- handling deferred validation

Bundle as:

- `VAL-*` fields
- validation scenario templates
- validation-gap debt rules
- human rating requirements for TraceWeaver validation runs

Acceptance check:

- tests are not overclaimed as validation unless they actually exercise the
  stakeholder or intended-use question

### Theme 6: Traceability And Matrices

Extract:

- bidirectional traceability
- relationship completeness
- stable IDs
- impact analysis
- matrix vs diagram roles
- status and ownership

Bundle as:

- required matrix fields
- branch-level trace rows
- behavior-level reconciliation
- impact-analysis prompts
- stable-ID vocabulary

Acceptance check:

- Lite mode may use a minimal row, but cannot skip the matrix artifact
- every meaningful behavior maps to authority, implementation, verification,
  validation, owner, and status or explicit debt

### Theme 7: Risk Controls

Extract:

- when risk controls are first-class authority
- required risk-control fields
- mitigation/control evidence
- acceptance or residual-risk approval

Bundle as:

- Risk Controls table
- `RISK-*` validity rule
- approved-risk-control authority language

Acceptance check:

- a bare `RISK-*` ID never satisfies the no-orphan gate

### Theme 8: Approved Gaps And Traceability Debt

Extract:

- how known missing traceability can be recorded without being hidden
- when a gap can authorize limited work
- owner, scope, review condition, expiry, and approval proof

Bundle as:

- Approved Traceability Gaps table
- Traceability Debt table
- status vocabulary: Draft, Approved, Open, Closed, Expired, Superseded,
  Retired, Pending, Pass, Fail

Acceptance check:

- open debt is not authority
- an approved gap is valid only within its recorded scope and review condition

### Theme 9: Configuration And Change Control

Extract:

- baseline creation
- reproducible approval targets
- change impact analysis
- approval records
- audit trail expectations

Bundle as:

- baseline activation model
- two-step approval record rule
- change request and approval decision fields
- load-bearing legacy dependency trigger

Acceptance check:

- no baseline activation model is self-referential
- review findings are provenance until converted into approved change-control
  artifacts

### Theme 10: Agent Lifecycle Responsibilities

Extract:

- what each process actor must preserve
- how handoffs should keep evidence and decisions intact
- how review and improvement loops feed back into the process

Bundle as:

- agent rules for brainstorm, plan, work, review, validation, and compound
  learning
- delegation payload requirements
- handoff checks

Acceptance check:

- traceability starts at brainstorming
- traceability context travels with delegated implementation work
- reviewers check the chain instead of inventing missing authority

## Distillation Output Checklist

Before a source-derived update is considered ready:

- [ ] Local extraction note exists under `.source-materials/notes/`.
- [ ] Bundled wording is original TraceWeaver writing.
- [ ] The update has a clear target artifact and purpose.
- [ ] The source basis is recorded without citing private local paths in public
      docs.
- [ ] No copied protected table, diagram, checklist, or long text appears in the
      committed artifact.
- [ ] Any uncertainty is marked provisional.
- [ ] The no-orphan gate remains stricter than any summary checklist.
- [ ] Requirement, risk, gap, debt, verification, and validation statuses stay
      aligned across skill and matrix template.
- [ ] Lite mode still requires a minimal matrix artifact.
- [ ] The update has been reviewed against the source-materials policy.

## Recommended First Extraction Batch

Start with the high-value sources only:

1. INCOSE Guide to Needs and Requirements v1
2. INCOSE Guide to Verification & Validation v1
3. INCOSE Systems Engineering Handbook 5th Edition
4. ISO/IEC/IEEE 15288:2023 HTML export
5. IEEE 15288.1-2014
6. IEEE 15288.2-2014

Deliver a local synthesis note with these sections:

- candidate changes to the operating model
- candidate changes to the matrix template
- candidate additions to source-basis links
- conflicts or unclear source interpretations
- terms that should not be used because they are too source-specific or
  copyright-sensitive
- items deferred to secondary sources

Only after that synthesis is reviewed should secondary sources be mined.

## Review Questions For Each Proposed Bundled Rule

Ask these questions before committing a rule:

1. What TraceWeaver failure does this prevent?
2. Which source or source family supports the concept?
3. Is this rule original wording?
4. Is this rule necessary for an agent at runtime?
5. Does it strengthen or weaken the approved-authority gate?
6. Does it create unnecessary process in Lite mode?
7. Does it help distinguish verification from validation?
8. Does it preserve missing traceability as visible debt instead of inventing
   authority?
9. Does it need a matrix field, a skill instruction, or only explanatory text?
10. Can a reviewer audit the rule without seeing the private source file?

