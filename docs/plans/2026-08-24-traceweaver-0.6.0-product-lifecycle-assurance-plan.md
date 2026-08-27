---
id: TW-PLAN-2026-08-24-V060-PRODUCT-LIFECYCLE-001
title: TraceWeaver Core 0.6.0 product-lifecycle assurance delivery plan
type: product_and_engineering_plan
status: bounded_convergence_passed_exact_candidate_publication_conditionally_authorized
date: 2026-08-24
owner: Oxiom Systems
release_target: 0.6.0
integration_base_pr: 61
integration_base_sha: e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33
authority_decision: TW-OWNER-DECISION-2026-08-24-V060-PRODUCT-LIFECYCLE-001
---

<!-- TRACEWEAVER: file-role=product-lifecycle-delivery-plan; req=REQ-TW-130,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# TraceWeaver Core 0.6.0 Product-Lifecycle Assurance Plan

## Outcome

Deliver TraceWeaver Core 0.6.0 as a lightweight, provider-independent
product-lifecycle assurance framework. A product owner begins with a versioned
client or stakeholder source, prepares and approves a controlled delivery
baseline, connects product artifacts and evidence as work progresses, sees
change and stale-evidence impact, and exports a trustworthy acceptance view.

Core 0.6.0 preserves the released 0.5.0 model-governance and metric-routing
boundaries. It does not rewrite the 0.5.0 release and does not claim active
model enforcement or qualification without their separate evidence.

## Scope and non-goals

In scope: lifecycle object and relationship schemas, controlled source
registration, immutable import/reference receipts, prepared human approval,
V&V-at-capture, evidence results and staleness, lifecycle graph queries,
strict static semantic HTML, an offline acceptance hub/pack, representative
Vestro and Air Router validation, and 0.6.0 release integrity.

Out of scope: autonomous approval, mandatory cloud services or provider keys,
contractual or e-signature mutation, regulated-domain conformance, and
replacement of CAD, BOM, ERP, ALM, issue tracking, test management, supplier
management, or external record systems.

## Consolidated delivery strategy

The named branch carries one semantic candidate and one final PR. Slices are
sequential, independently verifiable checkpoints within that candidate. Each
slice freezes its requirement-linked behavior and deterministic proof before
the next begins. The final integrated review covers the complete mixed
candidate once, with at most one batched repair and one targeted reviewer
resume.

The normal batch and `EXC-TW-018` through `EXC-TW-021` are consumed.
`P1-005-continuation` and `P1-006-continuation` are closed clean. The owner then
applied the bounded-convergence guide through `tw-auto` under
`CHG-TW-2026-08-26-005` / `EXC-TW-022` for current-source and derived receipt
digest closure without repeating the authority gate after each in-scope
failure. The two permitted attempts ended with all 72 model-context cases
passing, zero open retained P0/P1 findings, and a current reviewer-bound oracle.

`CHG-TW-2026-08-27-006` now authorizes the exact Core 0.6.0 PR, merge, tag, and
GitHub Release route only after one final authority freeze, fresh same-candidate
product rebinding, full verification, traceability, independent review, graph,
reinstall, release readiness, publication-capsule, and protected-main checks.
Core 0.6.1 is reserved for later fixes. Any new product limitation, semantic
scope change, failed gate, stale identity, or conflicting tag/release stops the
route.

Before Slice 1, install the exact published
`traceweaver-core--v0.5.0` package into an isolated disposable Codex home and
capture the tag, release commit, five manifest versions, package/install
manifest, and selected callable-skill hashes. Use that released install for
the predecessor workflow dogfood and retain any gap as evidence. The active
host's older mixed-root development install and branch-local 0.6.0 skill files
are diagnostic inputs only; neither can satisfy predecessor dogfood.

### Slice 0 — controlled 0.6.0 authority baseline

- Record the owner decision and successor plan.
- Promote fresh lifecycle IDs without reusing `REQ-TW-093..108`.
- Bind intent, needs, requirements, decisions, interfaces, risks, V&V, and
  release gates across all three controlled roots.
- Record the isolated released-0.5.0 install identity and predecessor-dogfood
  procedure without mutating the active host or mixed root worktree.
- Run one scoped authority review, then one same-cycle graph refresh/check.

### Slice 1 — lifecycle schema and source registration

- Add a versioned open schema for commitments, intent, needs, requirements,
  constraints, decisions, interfaces, risks, changes, artifacts, V&V,
  acceptance, baselines, and evidence.
- Add a deterministic source registry and immutable import/reference receipt.
- Support Markdown, YAML, strict static HTML, and external-record stubs.
- Normalize legacy filename/case explicitly and reject mutable, ambiguous,
  provenance-free, or active-content sources.

### Slice 2 — V&V-at-capture and acceptance evidence

- Require verification and validation definitions with every authorized new or
  changed requirement, or an approved not-applicable disposition.
- Ingest deterministic results bound to tested baseline, environment, owner,
  observed result, evidence locator, and disposition.
- Mark applicable evidence stale after requirement, artifact, environment, or
  baseline changes.
- Generate a versioned acceptance-pack record and honest held-validation state.

### Slice 3 — lifecycle graph and impact

- Project every registered lifecycle class and typed relationship through
  deterministic `tw-graph` provenance.
- Provide exact-ID-first search, related/path/impact navigation, duplicate
  candidates, and invalidated-evidence paths.
- Preserve one accepted-cycle refresh, clean-CI reproducibility, and optional
  Graphify context as non-authoritative enrichment.
- At 2,000 records, verify build p95 at or below 1.5 seconds and warm query p95
  at or below 250 milliseconds using 10 warmups and 30 nearest-rank samples.

### Slice 4 — strict semantic HTML and authority migration gate

- Produce deterministic static requirements, traceability, and lifecycle
  views with visible stable IDs and no active or hidden authority content.
- Prove parity, links, accessibility, canonical hashing, consumer census, and
  rollback.
- Keep Markdown/YAML controlling unless the complete atomic cutover gate passes
  in one candidate; no partial or fallback authority is permitted.

### Slice 5 — product capture and approved change flow

- Begin from a client/product source and prepare candidate commitments, intent,
  needs, requirements, constraints, risks, interfaces, V&V, and non-goals.
- Show source locators, duplicates, conflicts, and downstream consequences for
  human confirmation, editing, or rejection.
- Apply an approved change once, update derived views, mark evidence stale, and
  prepare bounded work. No-change closure dispatches no reviewer.

### Slice 6 — human authority and acceptance hub

- Generate an offline, printable, accessible semantic-HTML hub for lifecycle,
  risk, change, verification, validation, and acceptance state.
- Drill from commitment to needs, requirements, artifacts, evidence,
  exceptions, and acceptance decisions.
- Export a named-baseline acceptance pack with a deterministic manifest and
  hashes. The hub never silently approves authority.

### Slice 7 — representative product validation

- Run the end-to-end workflow against authorized Vestro and VinilaTech/Air
  Router fixtures or branches.
- Cover legacy source normalization, candidate capture, duplicate detection,
  V&V before work, code and non-code impact, stale evidence, bounded review,
  strict HTML navigation, and an owner-readable acceptance pack.
- Include at least one Air Router non-code artifact and retain named rater,
  independence, raw evidence digest, tested baseline, and owner disposition.

### Slice 8 — release integrity and Core 0.6.0 publication

- Update all five manifests, README/install examples, and CHANGELOG coherently.
- Verify patch/minor/major release-label selection, protected main, serialized
  idempotency, exact-merge-SHA smoke, CodeQL, reinstall, and tag conflicts.
- Create `traceweaver-core--v0.6.0` and its GitHub Release only from the accepted
  main SHA, with a durable release-readiness/runtime receipt.
- Preserve explicit held states for CI failure, stale main, version conflict,
  tag conflict, unavailable metadata writes, missing validation, or stale graph.

## Verification and validation

Every behavior slice starts with requirement-linked RED evidence and finishes
with focused GREEN proof. Required deterministic suites cover schema
canonicalization, import provenance, active-content refusal, V&V completeness,
stale evidence, graph determinism and performance, semantic-HTML parity and
security, human-approval boundaries, acceptance-pack integrity, manifest
equality, release idempotency, and stale/conflict negatives.

Core 0.6.0 is complete only when:

- every accepted requirement links to approved intent/need and a registered
  source;
- no imported, inferred, generated, or graph-derived record is falsely
  promoted;
- every authorized requirement has V&V definitions and every closed
  requirement has baseline-bound observed evidence or an explicit hold;
- seeded duplicate and impact fixtures reach at least 90% precision and recall;
- at least 95% of required records/links are recovered in each validation
  product and reachable from the hub;
- routine reverse links, trace rows, receipts, and pack indexes are at least 90%
  derived;
- Vestro and Air Router validation passes without compensation between cells;
- the integrated Terra review closes with no P0/P1/blocking P2;
- the authoritative graph is fresh; and
- the exact merge SHA passes release-readiness, smoke, CodeQL, reinstall, and
  published-release checks.

## Must-not-change boundaries

- Preserve the published 0.5.0 tag, release, evidence, and shadow-only model
  governance semantics.
- Keep Sol as coordinator and explicit Terra as the only TraceWeaver native
  child model; unattested service remains held.
- Keep imported CE component bodies unchanged without separately reviewed
  overlay authority.
- Keep derived graph, HTML, dashboards, imports, and acceptance packs unable to
  approve or supersede authority.
- Do not modify the mixed root worktree.

## Rollback

Before merge, the branch and scoped commits are the recovery boundary. Semantic
HTML cutover must restore the complete prior matched Markdown/YAML generation,
not individual files. Release publication is idempotent and must stop on an
existing mismatched tag or release instead of rewriting it.

## Next step

Stop before any model-context rerun, product rebinding, or reviewer use. The
revision-5 correction and single focused attempt are consumed and non-clean.
If Oxiom Systems elects a final sequencing correction, record a new
change/exception, promote and freeze all controlled authority metadata first,
bind only the seven stale fixtures to that final physical `requirements.md`
digest, prove every referenced locator digest matches, and obtain a fresh
authority `Proceed` for at most one new full 72-case attempt. Publication and
release remain held.
