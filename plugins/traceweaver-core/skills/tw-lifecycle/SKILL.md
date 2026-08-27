---
name: tw-lifecycle
description: TraceWeaver lifecycle assurance control surface for deterministic source registration, lifecycle records, V&V evidence, impact, strict semantic HTML, and acceptance packs without promoting generated or imported material to authority.
argument-hint: "<registry-check|source-receipt|record-check|capture-prepare|capture-confirm|change-apply|graph-build|graph-check|status|search|related|path|impact|duplicate-candidate|html-build|html-check|acceptance-hub-build|acceptance-hub-check|product-validation-check|cutover-check|cutover-rehearse|acceptance-pack> [arguments]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092,REQ-TW-130; trace=TRACE-TW-070,TRACE-TW-074; ver=VER-TW-090,VER-TW-094 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-lifecycle`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`.
Contract resolution never approves a lifecycle source, record, change,
validation result, acceptance decision, or publication action.

# TraceWeaver Lifecycle Assurance

## Purpose

Connect product-lifecycle records from registered stakeholder sources through
intent, needs, requirements, decisions, artifacts, V&V, validation, and
acceptance while their owning systems remain authoritative. This is a
lightweight federated assurance layer, not an ERP, PLM, ALM, issue tracker, or
test-management replacement.

## Controlled inputs

Load and cite the current `requirements.md`, `traceability-matrix.md`,
`.traceweaver/intent-contract.yml`, selected workflow profile, lifecycle source
registry, applicable lifecycle records, and linked evidence. Use the versioned
schemas in the package-level lifecycle reference directory.

Run the skill-local `scripts/traceweaver-lifecycle-integrity` executable for
source-registry checks and immutable source receipts. Later lifecycle actions
must use the sibling lifecycle executables defined by the accepted delivery
baseline. Run `scripts/traceweaver-lifecycle-evidence` for V&V-at-capture,
truth-stage validation, deterministic staleness, and acceptance-pack records.
Run `scripts/traceweaver-lifecycle-capture` for exact-source candidate
preparation, visible human confirmation, and separately approved change
application.
Run `scripts/traceweaver-lifecycle-graph` for deterministic graph build/check,
exact-ID-first search, related/path/impact navigation, and duplicate-candidate
explanations. Every action retains the same authority and truth-stage
boundaries.

## Lifecycle graph rules

- Build only from one exact checked source registry, one current lifecycle
  generation/baseline, and a closed directory of canonical lifecycle records.
  Stale evidence and verification/validation results retain their historical
  tested baseline; mixed baselines remain prohibited for current records.
- Every registered source must contribute a record; every record source must
  match its registered locator, version, digest, and role; every relationship
  target must resolve inside the same closure.
- External sources use an exact immutable source receipt and cause no implicit
  fetch. Missing, stale, omitted, orphaned, mismatched, unsafe, mixed, or
  non-reproducible members fail closed.
- Graph nodes and edges carry record/source/baseline digests, applicability,
  freshness, and deterministic provenance. Graph identity is content-addressed
  and its authority effect is always `none`.
- Exact IDs rank before text results. Related, directed path, bidirectional
  impact, stale-evidence, and duplicate-candidate results are navigation
  evidence only; they cannot approve, validate, accept, or publish anything.
- Use one accepted-cycle refresh and a clean-CI rebuild/check. Optional
  Graphify context must remain separately labeled, non-authoritative
  enrichment and is not present in the canonical graph identity.

## Strict semantic HTML rules

- Run `scripts/traceweaver-lifecycle-project` only against a current checked
  lifecycle graph and its exact registry/record closure. It uses the frozen
  Nokogiri HTML5/libgumbo parser and generated-source-span adapter declared by
  the package-level semantic HTML parser lock. Missing or mismatched parser
  runtime, ambiguous spans, parser errors, stale graph bytes, or hand edits
  fail closed.
- Render every stable ID, controlled field, source/baseline identity,
  lifecycle state, and typed relationship as visible semantic text. Generated
  HTML must remain script-free, offline, printable, keyboard navigable, and
  free of hidden controlled meaning, active elements, remote resources, forms,
  URL rewriting, embeddings, event handlers, and CSS fetch/hiding primitives.
- Bind page bytes, record bytes, exact article source spans, visible text,
  relationships, parser lock, source closure, graph, and baseline in one
  `tw-lifecycle-html/1` manifest. Two builds must be byte-identical.
- Markdown/YAML and immutable external receipts remain controlling. The HTML
  role is `derived_non_authoritative` and its authority effect is always
  `none` unless a separate named human decision and complete atomic cutover
  gate later pass.

## Human authority and acceptance hub rules

- Run `scripts/traceweaver-lifecycle-acceptance-hub build` only from one
  current checked graph/registry/record closure and one evidence receipt whose
  named baseline exactly matches that graph. Every applicable requirement and
  artifact in the receipt must resolve to its corresponding lifecycle class.
- The hub wraps the strict semantic-HTML projection and deterministic
  `tw-lifecycle-acceptance-pack/1` output. It shows the named baseline, owner
  disposition, every separate truth stage, remaining holds, and grouped
  commitment/intent/need/requirement/risk/change/artifact/V&V/evidence/
  acceptance records with local drill-down to exact fields and relationships.
- One `tw-lifecycle-acceptance-hub/1` manifest binds graph, strict projection,
  evidence/review links, evidence receipt, acceptance pack, record index, and
  every emitted file by canonical identity and byte digest. Two complete builds
  must be byte-identical; `check` refuses stale, hand-edited, active, hidden,
  remote, partial, unsafe, or mismatched output.
- The hub is script-free, offline, keyboard navigable, printable, and
  `derived_non_authoritative`. A pack may truthfully report `accepted` only
  after its own evidence transition controls pass, but pack/hub state never
  approves, validates, accepts, publishes, or supersedes the governing source.

## Authority cutover rules

- Run `scripts/traceweaver-lifecycle-cutover check` before treating semantic
  HTML as authority. It requires one exact candidate generation, a closed and
  independently reproduced reader/writer census, migration of every censused
  consumer, parity, accessibility, security, usability, rollback evidence, no
  remaining holds, and an explicit owner decision.
- A rollback rehearsal may create the rollback evidence while that one field
  remains pending. Rehearsal is restricted to an explicitly marked disposable
  fixture root, exercises an atomic directory swap, restores the complete
  prior generation on success or injected failure, and has no authority
  effect.
- Any incomplete census, partial migration, mixed generation, failed evidence,
  stale/mismatched manifest, missing owner decision, or remaining hold keeps
  Markdown/YAML controlling. Never perform a partial or fallback cutover.

## Representative product validation rules

- Run `scripts/traceweaver-lifecycle-product-validation` only against the
  preregistered `VAL-TW-042` result for the exact Core 0.6.0 candidate. The
  result contains exactly one Vestro cell and one Air Router cell; neither can
  compensate for the other.
- Each cell binds a named representative rater and relationship, disclosed
  independence, immutable source authorization and revision identity, all
  eight lifecycle tasks, complete raw evidence locators/digests, seeded impact
  recovery, route timings, limitations, and a cell-specific acceptance signal.
- Pass each product independently at no less than 95 percent required-record
  and link recovery, zero false authority or truth-stage promotions, complete
  seeded impacts, and a strict-HTML median no worse than the matched current
  Markdown/manual-matrix route. Air Router additionally binds one
  source-authorized non-code lifecycle artifact through impact and acceptance.
- The Oxiom Systems owner disposition must cite both exact cell raw-evidence
  digests, acknowledge limitations, and retain later publication holds.
  Repository-only fixtures may test the validator but can never populate or
  pass `VAL-TW-042`; missing representative observation keeps release held.

## Source registration rules

- Register repository-local Markdown, YAML, strict static HTML, or immutable
  external-record stubs with one stable ID, exact locator, schema version,
  digest, owner, authority class, field-family ownership, generation, and
  normalization declaration.
- Reject missing, duplicate, stale, ambiguous, recursive, mixed-generation,
  mutable, unsupported, unsafe, active-content, or provenance-free sources.
- External references are immutable stubs and are never fetched implicitly.
- A source receipt proves an exact observation only. It never approves the
  source, extracted records, requirements, validation, or acceptance.
- Imported, inferred, generated, graph-derived, and projection records remain
  candidate/evidence/derived state until a named human accepts a controlled
  delta in the governing authority source.

## Product capture and approved change rules

- `traceweaver-lifecycle-capture prepare` consumes one content-addressed
  proposal at the exact current registry baseline. Repository-local evidence
  uses verified byte spans; external material uses an immutable registered
  receipt and is never fetched implicitly.
- Prepared records remain `candidate` / `proposed` and carry no acceptance
  object. Requirement candidates include verification and validation
  definitions at capture. The confirmation surface visibly presents exact
  source evidence, duplicate candidates, conflicts, downstream consequences,
  and V&V without granting authority.
- `confirm` requires one canonical named-human decision that disposes every
  candidate exactly once as accept, edit, or reject. Edits retain the exact
  registered source identity. An all-reject result is a deterministic
  `no_change_mechanical_closure` with zero reviewer dispatches and cannot be
  sent to `apply`.
- `apply` requires a separate named-human approval binding the human decision,
  exact change-request identity, current registry/source preimage, allowed
  record IDs, and one new generation/baseline. The applied Markdown authority
  block, registry, records, and application receipt are one rollback-capable
  transaction; failures restore the exact preimage.
- A successful application promotes only the approved records, marks linked
  historical evidence stale while preserving its tested baseline, records
  exact post-state record digests, and requires graph rebuild/impact inspection
  before bounded work or review. Replaying the same approval is write-free only
  when registry, source, and every recorded post-state identity still match.
- Prepared packs, confirmation surfaces, change requests, application
  receipts, and graph projections are evidence/control artifacts rather than
  authority substitutes. Only the exact approved delta written to the
  registered governing source changes authority.

## Truth and publication boundaries

Keep observation, verification, independent review, PR, merge, deployment,
runtime health, release, stakeholder validation, acceptance, and publication
as separate states. Markdown/YAML remain controlling for Core 0.6.0 unless the
complete separately accepted semantic-HTML atomic cutover passes. A graph,
HTML hub, source receipt, deterministic fixture, or acceptance pack cannot
approve or supersede authority.

Stop before commit, push, PR, merge, tag, GitHub Release, deployment, or any
release-ready claim unless their separately named TraceWeaver gates pass.

## Output and next step

Return the operation, exact source/registry/baseline identities, status,
structured findings, authority effect (`none` unless a separately accepted
human decision exists), evidence locator, held claims, and next gate. After a
passing bounded lifecycle implementation slice, return to the retained
`tw-auto` loop for requirement-linked GREEN evidence and trace bookkeeping.
