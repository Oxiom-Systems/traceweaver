---
title: TraceWeaver 0.5.0 PLM-assurance implementation plan
type: product_and_engineering_plan
status: candidate_source_evidence_not_implementation_authority
date: 2026-08-21
owner: Oxiom Systems
release_target: 0.5.0
released_base_tag: traceweaver-core--v0.4.0
released_base_sha: e1b2886ea51ceae03249c4ae09ff75308678970a
---

# TraceWeaver 0.5.0 PLM-Assurance Implementation Plan

## Outcome

Deliver TraceWeaver Core 0.5.0 as a usable product-lifecycle assurance layer:
from client commitment and stakeholder intent to controlled requirements,
product artifacts, verification, validation, and acceptance evidence.

0.5.0 must reduce the human work needed to maintain trustworthy traceability.
It must not turn TraceWeaver into a full enterprise PLM system or reintroduce
the review/work/review bookkeeping loop removed in 0.4.0.

This plan is candidate source evidence. It groups the intended product change
so the owner can authorize one coherent 0.5.0 authority baseline before the
independent implementation slices begin.

## Product success statement

Given a versioned client or stakeholder source, a product owner can use
TraceWeaver to:

- identify commitments, needs, requirements, constraints, risks, and
  acceptance questions;
- approve only the records that truly represent agreed scope;
- see what product artifacts and evidence realize each approved requirement;
- understand the impact of a proposed change;
- detect duplicate or conflicting requirements before formal review;
- see verification, validation, and acceptance gaps without maintaining a
  second manual matrix; and
- export a static, human-readable acceptance package for a named baseline.

## In scope

- A provider-independent product-lifecycle object and relationship model.
- Controlled import/reference receipts for existing product and client source
  material.
- A single invocation preflight card compiled from each Skill Execution
  Contract.
- First-class V&V definitions, result ingestion, stale-evidence detection, and
  acceptance dispositions.
- An extended deterministic `tw-graph` covering the lifecycle model.
- The atomic strict semantic-HTML authority migration.
- A human-readable product status and acceptance hub.
- Integrated real-product validation against Vestro and VinilaTech/Air Router.
- The final reviewed post-merge release-automation increment and 0.5.0 release.

## Out of scope

- Replacing CAD, BOM, ERP, ALM, issue tracking, test-management, contract,
  e-signature, or supplier-management systems.
- Autonomous approval of commitments, requirements, risk, validation, or
  acceptance.
- Hidden installation of Graphify or any external service.
- Treating an imported document, graph, generated view, or LLM extraction as
  authority.
- Regulated-domain or standards-conformance claims without a separate scoped
  program and evidence basis.
- A general relational database authority migration in 0.5.0.
- Mandatory cloud services or provider API keys.

## Architectural model

### Lifecycle objects

The 0.5.0 schema should support these stable object classes:

| Class | Minimum fields |
| --- | --- |
| `commitment` | ID, owner, source system/path, source version/digest, applicable scope, status |
| `intent` | ID, owner, desired outcome, success measure, non-goals, source commitment |
| `need` | ID, statement, stakeholder, priority, validation intent, status |
| `requirement` | ID, type, statement, rationale, owner, verification definition, validation question, status |
| `constraint` | ID, source, constraint type, applicability, status |
| `decision` | ID, question, alternatives, decision, rationale, approver, affected objects |
| `interface` | ID, endpoints/parties, exchanged item or behavior, contract, owner, evidence |
| `risk` | ID, cause, event, consequence, owner, likelihood/impact, treatment, acceptance state |
| `change` | ID, proposed delta, reason, authority, impact set, disposition, effective baseline |
| `product_artifact` | ID, kind, owning system, canonical locator, version/digest, configuration state |
| `verification_definition` | ID, method, requirement, expected result, environment, acceptance criterion |
| `verification_result` | ID, definition, tested baseline, observed result, evidence locator, disposition |
| `validation_definition` | ID, question, stakeholder, operational context, success threshold |
| `validation_result` | ID, definition, tested baseline, observed outcome, evidence, stakeholder disposition |
| `acceptance_decision` | ID, accepting authority, accepted scope/baseline, evidence set, exceptions, decision |
| `baseline` | ID, constituent object versions, owner, effective date, status, supersession link |
| `evidence` | ID, kind, owning source, locator, version/digest, collected at, applicability |

Objects may live in different authoritative systems. TraceWeaver stores the
identity, provenance, applicable version, and link necessary to navigate and
assess them.

### Typed relationships

At minimum, the graph and authority views must distinguish:

- `commits_to`, `serves_intent`, `derives_need`, and `specifies`;
- `constrains`, `decides`, `interfaces_with`, `risks`, and `changes`;
- `realized_by` and `configured_in`;
- `verified_by` and `verification_result_for`;
- `validated_by` and `validation_result_for`;
- `accepted_by` and `accepts_baseline`;
- `supersedes`, `depends_on`, `conflicts_with`, and `duplicates_candidate`;
- `evidenced_by`, `owned_by`, and `sourced_from`.

Every relationship must preserve its source locator, source digest, producer,
authority class, baseline applicability, and freshness state. A relationship
inferred by an agent remains a candidate until a deterministic source rule or
human decision authorizes it.

### Authority federation

- The Intent Contract registers authority sources and controls owner decisions,
  policy, permissions, holds, and publication boundaries.
- Semantic HTML becomes canonical only for the requirements and trace matrix
  after atomic cutover. Other lifecycle objects may remain in their owning
  formats/systems.
- Import receipts are immutable observations of external source versions.
- Derived graph, dashboard, indexes, and exports are rebuildable and can never
  approve their source objects.
- Content digests and stable locators provide audit identity; semantic identity
  controls review reuse where meaning is unchanged.

## Skill Execution Contract evolution

0.4.0 provides a deterministic contract per callable skill. 0.5.0 should turn
that contract into one visible invocation preflight card so the agent resolves
the workflow once instead of rediscovering it.

Every skill or alias must resolve this checklist before doing work:

1. **Intent** — the commitment, intent, need, or approved requirement served.
2. **Authority** — registered controlling sources, owner, baseline, and
   applicable exceptions.
3. **Inputs** — required lifecycle object types, locators, and freshness.
4. **Trace** — relationships and evidence records that must be read or written.
5. **Model route** — main model, explicit child model, risk-selected effort,
   and attestation rule.
6. **Graph action** — read query, impact query, duplicate query, or the one
   accepted-cycle refresh.
7. **Allowed writes** — exact record classes and repository/system boundaries.
8. **Verification** — deterministic checks and evidence required for the work.
9. **Validation** — stakeholder question or adoption outcome kept visible.
10. **Holds** — conditions that stop, narrow, or prevent a claim.
11. **Exit** — terminal state and highest-level next wrapper.
12. **Receipt** — one deterministic record of what was resolved and observed.

Missing, stale, ambiguous, or multiply registered contracts must refuse before
work. Resolution should be registry/graph based, not repository-wide grep.

## Delivery slices

Each slice is an independently reviewable PR. A slice may change authority only
when its meaning genuinely changes. Status, hashes, projections, and receipts
close mechanically within the accepted series.

### Slice 0 — One consolidated 0.5.0 authority baseline

Purpose: turn this candidate direction into one coherent, owner-approved
implementation boundary.

Deliverables:

- a product-intent charter derived from this handover;
- reviewed requirements for the lifecycle object model, authority federation,
  import boundary, V&V automation, semantic HTML cutover, graph behavior,
  adoption validation, and final release automation;
- validation questions and measurable release criteria from this plan;
- explicit non-goals and human-approval boundaries; and
- one accepted review identity reusable by later slices whose semantics do not
  change.

Do not split this into repeated per-file authority-review cycles. If one slice
discovers a new semantic requirement, record a scoped delta; do not reopen the
unchanged program baseline.

### Slice 1 — Lifecycle schema and controlled source registration

Deliverables:

- versioned open schema for the lifecycle objects and relationships above;
- deterministic registry of authoritative, imported, and derived sources;
- import/reference receipt with source type, owner, locator, version, digest,
  extraction method, scope, and authority classification;
- explicit legacy filename and case migration, including Vestro's
  `REQUIREMENTS.md` case;
- import fixtures for Markdown, YAML, strict static HTML, and external-record
  stubs; and
- refusal fixtures for missing provenance, mutable locators, ambiguous source
  authority, or active content.

Acceptance: an imported client brief can yield candidate commitment/need
records without changing controlled authority until a human accepts them.

### Slice 2 — V&V-at-capture and acceptance evidence model

Deliverables:

- verification definition and validation definition created with each new or
  changed requirement;
- method templates for test, inspection, analysis, demonstration, operational
  evaluation, usability, and client review;
- deterministic evidence-result ingestion with tested baseline, environment,
  observed result, owner, and disposition;
- stale-evidence detection when a requirement, artifact, environment, or
  applicable baseline changes;
- acceptance decision and held-validation records; and
- a generated client/product acceptance-pack schema.

Acceptance: implementation authority is blocked when required V&V definitions
are missing, while unavailable results create an honest held state rather than
fabricated evidence.

### Slice 3 — Extended `tw-graph` product-lifecycle projection

Deliverables:

- stable nodes and typed edges for every registered lifecycle class;
- deterministic `status`, `search`, `related`, `path`, `impact`, and
  `duplicate-candidate` across lifecycle sources;
- exact-ID ranking before fuzzy text matches;
- duplicate explanations identifying shared terms, source, and confidence;
- upstream and downstream change-impact paths, including invalidated evidence;
- warm incremental projection and content-addressed cache while retaining
  clean, reproducible CI rebuilds;
- one refresh per accepted change cycle and required PR freshness; and
- optional Graphify enrichment merged only as separately labeled context.

Performance targets at a 2,000-record authority closure:

- warm status/search/impact query p95 at or below 2 seconds;
- warm incremental refresh at or below 10 seconds;
- clean deterministic CI rebuild/check at or below 30 seconds; and
- no repository-wide search required for the benchmark lifecycle questions.

### Slice 4 — Atomic semantic-HTML authority migration

Deliverables:

- final strict templates for `requirements.html` and
  `traceability-matrix.html`;
- visible stable IDs, semantic sections, deterministic internal/external links,
  plain-text completeness, canonical formatting, and semantic hashing;
- no script, inline event, remote resource, form submission, hidden authority
  text, or active content;
- deterministic Markdown-to-HTML bridge and bidirectional parity report;
- complete consumer census and migration of wrappers, generators, tests,
  READMEs, graph inputs, and downstream examples;
- one atomic cutover commit with rollback to the last Markdown authority; and
- legacy Markdown import-only behavior after cutover.

Cutover rule: Markdown/YAML authority remains controlling until both HTML files,
the Intent Contract source registry, every consumer, the parity proof, and the
rollback rehearsal pass in one candidate tree.

### Slice 5 — Product-lifecycle capture and change workflow

Deliverables:

- bootstrap and delta flows beginning with a client/product source rather than
  an already-written requirement;
- candidate extraction for commitments, intent, needs, requirements,
  constraints, risks, interfaces, V&V definitions, and non-goals;
- a human confirmation surface that shows source excerpts/locators, proposed
  records, duplicates, conflicts, and downstream consequences;
- approved change flow that updates authority once, derives trace/graph views,
  marks affected evidence stale, and prepares bounded work; and
- no-change mechanical closure that dispatches no reviewer.

Human interaction target: a user confirms, edits, or rejects prepared records;
the user does not manually create routine IDs, reverse links, freshness
receipts, or matrix rows.

### Slice 6 — Human authority and acceptance hub

Deliverables:

- a static semantic-HTML product hub for commitment, baseline, lifecycle,
  verification, validation, change, risk, and acceptance status;
- drill-down from a client commitment to needs, requirements, artifacts,
  evidence, exceptions, and acceptance decisions;
- clear separation of approved, candidate, changed, stale, held, failed, and
  accepted states;
- exportable acceptance pack for a named baseline with a manifest and hashes;
- accessibility, print/PDF usability, and offline operation; and
- no dashboard control that can silently approve authority.

This is a view and decision workbench, not a second source of truth.

### Slice 7 — Integrated product validation

Run the complete 0.5.0 workflow on Vestro and VinilaTech/Air Router using
controlled copies or explicitly authorized product branches.

The combined scenario set must cover:

- importing or registering an existing client/product source;
- normalizing legacy source naming without source loss;
- candidate need and requirement capture;
- duplicate detection before review;
- V&V definition before work;
- correct code and non-code artifact impact paths;
- change-driven stale-evidence detection;
- Terra requested/served receipts and unattested holds;
- bounded review-series termination;
- semantic-HTML navigation and accessibility; and
- a product-owner-readable acceptance pack.

At least one Air Router scenario must include a non-code lifecycle artifact,
such as an interface contract, deployment/configuration record, test procedure,
or operational acceptance result.

### Slice 8 — Release automation completion and 0.5.0 release

Only after Slices 1–7 pass:

- complete the reviewed REQ-TW-091 / revised REQ-TW-053 post-merge preparation
  model;
- default to a patch increment, with `release:minor` and `release:major` label
  overrides;
- prepare coherent version and CHANGELOG metadata before merge across all five
  manifests;
- preserve protected-main, serialized, idempotent, exact-merge-SHA smoke and
  CodeQL gates;
- publish tag, GitHub Release, and durable runtime receipt only after green CI;
- retain explicit `held_ci_failed`, `held_version_conflict`,
  `held_stale_main`, `held_tag_conflict`, and
  `held_release_metadata_write_unavailable` states; and
- cut `traceweaver-core--v0.5.0` from the exact accepted main SHA.

## Verification strategy

Each slice must have deterministic fixtures before real-product validation.

| Concern | Required deterministic proof |
| --- | --- |
| Lifecycle schema | valid/invalid object and relationship fixtures; stable canonical serialization |
| Imports | content digest, source-version identity, case normalization, active-content refusal, authority classification |
| Skill preflight | complete registry coverage, one resolution per invocation, no grep fallback, stale/ambiguous refusal |
| V&V | definition completeness, result/baseline binding, missing-evidence hold, stale-evidence transition |
| Graph | two identical builds, provenance completeness, exact-ID ranking, duplicate and impact fixtures, stale receipt failure |
| Semantic HTML | parity, canonical hash, link validity, text completeness, accessibility, active-content rejection, rollback |
| Review convergence | accepted reuse, zero-review bookkeeping closure, one routine repair, explicit severe exception only |
| Model routing | explicit Terra request, risk-selected effort, no Sol child, requested/served receipt, unattested hold |
| Acceptance pack | exact baseline contents, evidence manifest, no unsupported claim, held/exception visibility |
| Release | five-manifest equality, version-label fixtures, exact-main CI, tag/release idempotency and conflicts |

## Validation and release criteria

0.5.0 may be called complete only when current evidence demonstrates all of the
following:

### Intent and authority

- 100% of accepted requirements in the validation scope link to an approved
  need or intent and a registered source.
- Zero imported, inferred, graph-derived, or generated records are falsely
  promoted to authority.
- 100% of authority-changing actions identify the human approver and effective
  baseline.

### V&V and acceptance

- 100% of requirements authorized for implementation have a verification
  definition and validation question, or an explicit approved
  not-applicable/exception disposition.
- 100% of closed requirements have a tested baseline, observed result,
  evidence locator, owner, and acceptance disposition.
- A change to a requirement or realized artifact reliably marks applicable
  prior evidence stale and exposes the re-verification path.
- One real product baseline produces a complete acceptance pack with no false
  closure claim.

### Navigation and graph value

- At least 95% of required lifecycle records and links are recovered from each
  validation product.
- The benchmark source, duplicate, impact, evidence, and acceptance questions
  require at least 50% fewer repository-wide search operations than the
  pre-TraceWeaver route; the target is zero repository-wide grep.
- Exact identifier search ranks the exact object first.
- Seeded duplicate and impact corpora achieve at least 90% recall and 90%
  precision; a duplicate candidate never automatically blocks or merges
  authority.
- The graph meets the performance targets in Slice 3.

### Human usability

- Product owners complete the benchmark commitment-to-acceptance tasks in no
  more time than the current Markdown/manual-matrix route, with a target of 25%
  improvement after the first-use learning run.
- At least 90% of routine IDs, reverse links, trace rows, freshness receipts,
  and acceptance-pack index entries are derived without manual editing.
- At least 95% of benchmark records and links are reachable from the semantic
  HTML hub without knowing repository paths.
- No active content or hidden authority text is present.

### Workflow convergence and models

- Every routine review series terminates within one discovery and one
  repair-verification cycle.
- A second repair-verification cycle occurs only for a recorded severe
  exception.
- Non-blocking wording/style findings do not start another cycle.
- Every native child dispatch explicitly requests `gpt-5.6-terra` with
  risk-selected effort; receipts show requested and served models separately.
- Unattested served-model evidence remains held and cannot become formal proof.

### Release integrity

- Every 0.5.0 PR is independently reviewable and no PR combines unrelated
  lifecycle, HTML, graph, validation, and release behavior.
- Main is protected and green.
- The five manifests and CHANGELOG agree before merge.
- The 0.5.0 tag and GitHub Release resolve to the exact merge SHA whose smoke
  and CodeQL checks passed.
- The GitHub Release carries a runtime receipt containing the exact candidate
  digest and CI evidence.

## Convergence rules for the 0.5.0 program

These rules are part of delivery, not optional process advice:

1. One consolidated product-intent/requirements review establishes the 0.5.0
   semantic baseline.
2. Each implementation slice gets one clean-room discovery review.
3. A routine blocker gets one repair and one scoped verification.
4. A second repair-verification is allowed only for a remaining P0, P1, or
   explicitly blocking P2 and must use the existing series.
5. Retained findings and genuine repair regressions are the only verification
   scope. New style or wording suggestions become backlog.
6. Status, hash, receipt, graph, generated view, Git index, branch, session,
   wrapper, and publication-preparation changes close mechanically with zero
   reviewers when semantic authority and behavior are unchanged.
7. An accepted review records and closes atomically; its own receipt cannot
   invalidate it.
8. Scope expansion stops for a human decision. It does not silently create a
   new series.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| TraceWeaver becomes a heavyweight PLM clone | Keep authority federated; implement lifecycle identity, trace, evidence, and acceptance only |
| LLM extraction becomes accidental authority | Candidate classification, visible source locators, explicit human approval, zero false-promotion tests |
| Semantic HTML increases tokens or hides meaning | Strict static schema, text completeness, canonical formatting, no decorative or active content |
| Graph state becomes another manual artifact | Rebuildable local projection, one lifecycle refresh, CI freshness, no graph writes to authority |
| V&V automation fabricates confidence | Bind results to observed evidence and tested baseline; missing proof becomes held |
| External records drift | Versioned import receipts, source digests, stale-source detection, re-import as a change |
| Human workflow remains too complex | Invocation preflight card, prepared confirmation actions, measured manual-edit and task-time targets |
| Review fan-out returns | Enforce the 0.4 convergence controller and the program rules above |
| Provider or Graphify dependency blocks use | Deterministic provider-independent core; optional explicit enrichment only |
| Product scope claim exceeds evidence | Release criteria require real product acceptance evidence and preserve explicit holds |

## Recommended worktree and PR strategy

- Start each slice from the current protected `origin/main`.
- Never reuse the mixed `codex/lean-convergence` tree as an implementation base.
- Keep one worktree and one branch per slice.
- Rebase a not-yet-published slice after its prerequisite merges; do not merge
  unrelated local candidates to save review time.
- Treat generated views, graph receipts, and release receipts as part of the
  slice that caused them, not separate authority-review PRs.
- Publish only after the slice's deterministic proof and bounded clean-room
  review pass.

Suggested branch sequence:

1. `codex/v050-authority-baseline`
2. `codex/v050-lifecycle-schema-imports`
3. `codex/v050-vv-acceptance-model`
4. `codex/v050-lifecycle-graph`
5. `codex/v050-semantic-html-cutover`
6. `codex/v050-product-change-flow`
7. `codex/v050-authority-acceptance-hub`
8. `codex/v050-integrated-validation`
9. `codex/v050-release-automation`

## First authorized action after owner approval

Create one consolidated 0.5.0 requirements-review candidate from this handover
and plan. It should produce one coherent authority patch for the lifecycle
model and release criteria, not start implementation and not create a separate
review series for each document or future slice.

After that single authority baseline is accepted, begin Slice 1 in a new clean
worktree and keep all later slices within the same product goal and convergence
rules.
