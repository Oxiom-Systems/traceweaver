---
title: TraceWeaver 0.5.0 product-intent and PLM handover
status: candidate_source_evidence_not_implementation_authority
date: 2026-08-21
owner: Oxiom Systems
released_baseline: traceweaver-core--v0.4.0
released_main_sha: e1b2886ea51ceae03249c4ae09ff75308678970a
---

# TraceWeaver 0.5.0 Product-Intent and PLM Handover

## Why this handover exists

TraceWeaver 0.4.0 establishes a dependable engineering control plane. The next
release must turn that foundation into a product that helps a team manage what
it promised to deliver, why the promise matters, what must be built, and how
the client will know it was delivered.

The 0.5.0 direction is deliberately broader than software requirements. It is
about product lifecycle assurance: preserving the chain from an agreed client
or stakeholder commitment through needs, requirements, decisions, product
artifacts, verification, validation, and acceptance with as little manual
trace maintenance as possible.

This document is source evidence for that direction. It does not itself modify
the controlled requirements baseline or authorize implementation.

## North star

> TraceWeaver turns agreed stakeholder and client intent into a continuously
> maintained proof graph connecting commitments, needs, requirements, product
> decisions, delivery artifacts, verification, validation, and final
> acceptance.

A successful TraceWeaver project should always be able to answer five plain
questions:

1. What did we agree to deliver?
2. Why is each part required, and who owns that intent?
3. What product artifact or behavior realizes it?
4. How will we verify it and validate that it solves the client's problem?
5. What evidence supports acceptance, and what remains changed, at risk, held,
   or rejected?

The product promise is not “more traceability paperwork.” It is that these
answers remain current as a natural consequence of doing the work.

## Product definition

TraceWeaver 0.5.0 should be a lightweight product-assurance and lifecycle trace
layer. It should work for products containing software, hardware, operations,
services, documentation, supplier deliverables, or combinations of them.

It should:

- capture commitments and intent from client briefs, statements of work,
  meeting decisions, product briefs, and existing requirement sets;
- help a human turn that source material into controlled needs, requirements,
  constraints, risks, and acceptance questions;
- define verification and validation while requirements are being formed, not
  after implementation;
- link requirements to decisions, interfaces, work, product artifacts, tests,
  inspections, demonstrations, analyses, and acceptance results;
- detect duplicates, missing links, stale evidence, conflicting changes, and
  unapproved behavior before they become review surprises;
- produce a human-readable view of delivery and acceptance status without
  asking people to maintain a second hand-written matrix; and
- preserve explicit human authority for commitments, requirement approval,
  risk acceptance, validation judgment, and client acceptance.

TraceWeaver is not intended to replace a full enterprise PLM, ALM, ERP, CAD,
BOM, issue tracker, test-management system, contract repository, or electronic
signature platform. It should link their records and preserve provenance. It
must not copy external system state and quietly claim to own it.

## The lifecycle chain

| Lifecycle object | The question it answers | Typical authoritative source | Closure condition |
| --- | --- | --- | --- |
| Client commitment | What was agreed? | Contract, SOW, proposal, approved brief, decision record | Human confirms source, owner, version, and applicable scope |
| Stakeholder intent | Why does it matter? | Intent Contract and approved intent record | Intent, owner, success outcome, and non-goals are explicit |
| Need | What outcome is required? | Controlled needs baseline | Need is reviewed and linked to its commitment and validation intent |
| Requirement or constraint | What must be true? | Controlled semantic authority | Requirement is unambiguous, measurable, owned, and approved |
| Decision, interface, risk, or change | How is the product shaped and controlled? | The owning decision, interface, risk, or change record | Disposition and affected lifecycle objects are explicit |
| Product artifact | What realizes the requirement? | Code, design, drawing, configuration, procedure, service record, supplier item | Artifact and tested baseline are identified |
| Verification | Was it built correctly? | Test, inspection, analysis, or demonstration evidence | Method, expected result, observed result, and disposition are recorded |
| Validation | Did it solve the intended problem? | Stakeholder trial, operational evaluation, usability study, field evidence | The validation question is answered for a named baseline and context |
| Acceptance | Has the owner or client accepted the delivery? | Acceptance decision and evidence pack | Owner, scope, exceptions, evidence, and final disposition are recorded |

Baseline, configuration, risk, and change control apply across the entire
chain. A change to any upstream object must expose the downstream objects and
evidence that may be invalidated.

## Authority model

TraceWeaver needs a federation of authority, not one file pretending to own
everything.

- `.traceweaver/intent-contract.yml` remains the control plane for owner
  decisions, allowed and held scope, authority-source registration, workflow
  policy, model policy, and publication boundaries.
- `requirements.html` and `traceability-matrix.html` may become canonical only
  after the atomic semantic-HTML migration passes parity, rollback, consumer,
  and usability validation. Markdown remains controlling until then.
- Client commitments and imported product records keep their own source
  identity, version, owner, locator, and content digest. TraceWeaver records an
  immutable import/reference receipt; it does not silently promote imported
  text into approved requirements.
- Code, CAD, test tools, issue trackers, and other lifecycle systems remain
  authoritative for the records they own.
- `tw-graph` is always a derived navigation and analysis projection. It may
  locate, relate, compare, and report authority, but it may never create,
  approve, sign, or supersede authority.
- Optional Graphify enrichment may add code, AST, document, and semantic
  context. It cannot replace deterministic `tw-graph` closure or freshness.

## Human and agent responsibilities

The agent should perform the mechanical and analytical work that people
currently repeat:

- inventory sources and propose lifecycle records;
- assign provisional identifiers and links according to a deterministic
  schema;
- highlight duplicates, ambiguity, missing V&V, or affected downstream work;
- update derived views and graph projections once per accepted change cycle;
- prepare verification and acceptance evidence packs;
- keep record locators, hashes, statuses, and freshness evidence current; and
- explain the next decision in plain language.

Humans remain responsible for:

- confirming that a source represents a real commitment or stakeholder need;
- approving or rejecting requirements and changes;
- accepting risk and exceptions;
- deciding whether validation evidence demonstrates the intended outcome;
- accepting a delivered product or release; and
- authorizing external publication, signatures, or contractual changes.

The normal interaction should therefore be “confirm, correct, or reject this
prepared change,” not “manually maintain these identifiers and cross-links.”

## What 0.4.0 delivered

TraceWeaver Core 0.4.0 was published on 2026-08-21 as
`traceweaver-core--v0.4.0`. Both the tag and `main` resolve to
`e1b2886ea51ceae03249c4ae09ff75308678970a`.

The release provides the foundations 0.5.0 should build on:

- deterministic generated JSON and generated-view drift checks;
- persistent, bounded review-series convergence with semantic review reuse;
- deterministic Skill Execution Contracts for every callable TraceWeaver
  skill and alias;
- explicit Sol-main and Terra-child request policy with risk-selected effort,
  requested/served-model receipt fields, and honest unattested holds;
- mandatory provider-independent `tw-graph` projection, duplicate and impact
  queries, lifecycle freshness, and PR checks;
- strict static semantic-HTML templates and derived previews;
- integrated bounded validation against Vestro and VinilaTech/Air Router; and
- an exact-main, smoke-and-CodeQL-gated release workflow with an attached
  runtime evidence receipt.

Release evidence:

- Release PR: `Oxiom-Systems/traceweaver#56`
- Live release-recovery PR: `Oxiom-Systems/traceweaver#59`
- Release workflow: `32475882703`
- Candidate digest:
  `sha256:4f8ab72a979b00102c9f82054b4f2e4f814d5138eabb379425e7b8aafa40a6d8`
- GitHub Release:
  `https://github.com/Oxiom-Systems/traceweaver/releases/tag/traceweaver-core--v0.4.0`

## What 0.4.0 does not yet solve

- Requirements and matrix authority are still Markdown. Semantic HTML is a
  derived preview, not the controlling baseline.
- The lifecycle graph is requirements-centric. It does not yet provide a
  first-class model for commitments, interfaces, product configurations,
  risks, changes, acceptance decisions, or external-system records.
- Source import is not a controlled product workflow. Vestro's tracked
  uppercase `REQUIREMENTS.md` exposed the need for explicit case and legacy
  normalization rather than host-dependent filename behavior.
- Exact-ID search ranking is not consistently first, and clean graph builds on
  repositories with roughly 1,200–1,900 records remain too slow for a fluid
  interactive experience.
- V&V definitions and evidence packs exist, but users can still perform manual
  work to create, link, and maintain them.
- Human navigation validation is limited; the 0.4 benchmarks proved task-step
  improvement on bounded corpora, not broad client or product-owner adoption.
- The host cannot always independently attest the model actually served for a
  child dispatch. Formal child evidence must remain `held_model_unattested`
  when that evidence is unavailable.
- TraceWeaver does not yet produce a complete client-facing acceptance package
  for one real product baseline.

## 0.5.0 mission

0.5.0 should prove one end-to-end product lifecycle:

1. register or import a real client/product commitment;
2. derive candidate intent, needs, requirements, risks, and acceptance
   questions;
3. obtain explicit human approval for the controlled baseline;
4. define verification and validation before realization work begins;
5. connect product artifacts and evidence as work progresses;
6. answer duplicate, impact, completeness, and stale-evidence questions through
   the graph;
7. present human-readable lifecycle status in strict semantic HTML; and
8. generate a reviewable acceptance pack whose claims never exceed its
   evidence.

The reference validation should use both Vestro and VinilaTech/Air Router, and
at least one scenario must include a non-code product artifact or operational
deliverable. Passing repository tests alone is insufficient.

## Working principles for 0.5.0

1. Capture intent before formatting records.
2. Define V&V with the requirement, not at the end.
3. Derive trace links whenever the source relationship is deterministic.
4. Ask the human only for intent, authority, risk, or judgment that cannot be
   discovered or derived.
5. Keep every authority source visibly distinct from projections and imports.
6. Reuse accepted semantic review; bookkeeping closes mechanically.
7. One bounded change gets one discovery review and normally one repair
   verification. Non-blocking wording suggestions become backlog, not another
   cycle.
8. Preserve open formats, static readability, deterministic hashes, and
   provider independence.
9. Measure reduced human effort and improved decisions, not number of records
   created.
10. Do not claim PLM replacement, standards compliance, client acceptance, or
    model attestation without current evidence.

## Handover boundary

The next implementation session should begin from released `main` at
`e1b2886ea51ceae03249c4ae09ff75308678970a` or a later explicitly reconciled
main SHA. The mixed `codex/lean-convergence` working tree must not be reset or
used as the 0.5.0 implementation base.

Before implementation, the owner should accept one consolidated 0.5.0
product-intent baseline covering the lifecycle model and success measures in
the accompanying plan. That should be one semantic authority pass, not a new
requirements-review loop for every implementation slice.

## Definition of a successful 0.5.0

TraceWeaver 0.5.0 is successful when a product owner can begin with a client or
stakeholder source, approve a controlled delivery baseline, follow change and
evidence through the product lifecycle, and receive a trustworthy acceptance
view without manually reconstructing the trace matrix or relying on repository
grep.

The measurable release criteria are defined in
`docs/plans/2026-08-21-traceweaver-0.5.0-plm-assurance-implementation-plan.md`.
