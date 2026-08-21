---
record_type: traceweaver_requirements_review
schema_version: 1
review_id: TW-REQ-REVIEW-2026-08-20-SEMANTIC-HTML-AUTHORITY-001
status: candidate_review_saturated_held_authority_acceptance
date: "2026-08-20"
owner: Oxiom Systems
candidate_amendment_id: REQ-AMEND-CANDIDATE-2026-08-20-SEMANTIC-HTML-001
requirements: [REQ-TW-088, REQ-TW-093, REQ-TW-094, REQ-TW-095, REQ-TW-096, REQ-TW-097, REQ-TW-098, REQ-TW-099]
artifact_id: ART-TW-076
trace_id: TRACE-TW-069
acceptance_test_id: ATP-TW-046
result_id: RESULT-TW-046
verification_id: VER-TW-089
validation_id: VAL-TW-037
source_review_series_generation_id: RS-GEN-2026-08-20-006
authority_review_series_generation_id: RS-GEN-2026-08-20-007
authority_review_terminal_outcome: candidate_review_saturated
authority_review_repair_verification_cycles: 1
accepted_review_identity: null
formal_authority_acceptance: held
publication_authority: none
---

<!-- TRACEWEAVER: file-role=semantic-html-authority-requirements-review; req=REQ-TW-088,REQ-TW-093,REQ-TW-094,REQ-TW-095,REQ-TW-096,REQ-TW-097,REQ-TW-098,REQ-TW-099; trace=TRACE-TW-069; ver=VER-TW-089 -->

# Semantic-HTML Authority Requirements Review

## Decision

The repaired eight-file semantic-HTML candidate is sufficient source evidence
for a bounded candidate authority-baseline amendment. The requirement set below
passes requirements-quality review and its applied candidate baseline has
completed one bounded scoped authority-review series. It does not authorize the
parser, normalized model, generator, writer, checker, bridge, census, wrapper,
hook, CI, runtime, cutover, staging, publication, release, or deployment
implementation.

Formal authority acceptance remains held. Current `requirements.md`,
`traceability-matrix.md`, and `.traceweaver/intent-contract.yml` remain the
controlling sources until a separately accepted atomic cutover. REQ-TW-089 and
REQ-TW-090 remain optional Graphify enrichment. The mandatory `tw-graph`
projection remains derived and must consume the registered canonical sources;
neither graph may select or approve authority.

## Source evidence and convergence

The exact source family is:

- `docs/brainstorms/2026-08-12-semantic-html-authority-templates/index.html`;
- `requirements.template.html` and `traceability-matrix.template.html` in that
  directory;
- the evidence/V&V, decision/hold, PR-receipt, and derived authority-hub
  templates in that directory; and
- `docs/validation/traceweaver-2026-08-12-semantic-html-authority-template-requirements-review.html`.

`RS-GEN-2026-08-20-006` reviewed those exact bytes under the canonical scoped
review protocol. The discovery pass found zero blocking P1/P2 findings and
retained one non-blocking P3 debt,
`sha256:ebf72e7f279de627448a49e6e0b4fe93e6e4e41179ac9259f4fa7dc5aca25ddb`:
the derived hub's Source identity requires a direct governing-contract link.
Because the hub is derived-only and the label cannot alter authority,
integrity, migration safety, or cutover eligibility, the debt does not open a
repair cycle. The review terminated `candidate_review_saturated` concurrently
with `held_authority_acceptance`.

The exact eight files parse as HTML5 with zero parser errors, duplicate IDs, or
active/fetch constructs. All 260 local links and fragments resolve within the
repository. These are discovery diagnostics, not implementation V&V.

`RS-GEN-2026-08-20-007` reviewed the applied candidate authority set. Discovery
retained three in-scope blockers: recursive Intent Contract registry identity,
a possible second HTML review-receipt identity, and undefined usability-cell
sample minima. Repair-verification cycle 1 replaced the recursive full-file
identity with role-specific canonical-member or non-cyclic control-plane
digests, made HTML a projection of the one existing review-series terminal
receipt identity, and restored fixed human and served-equivalence LLM cell
minima. Verification closed all three blockers without a scope expansion or
genuine repair regression. The retained P3 hub-source-label fingerprint remains
non-blocking debt. The series terminates `candidate_review_saturated`
concurrently with `held_authority_acceptance`; its ledger receipt controls that
lifecycle state, and this record does not create a second receipt identity.

## Requirement-set structure

The 26 detailed candidate clauses are consolidated into seven controlled
requirements to avoid duplicating the same authority, integrity, migration,
and validation obligations:

| Requirement | Controlled concern | Quality score | Outcome |
| --- | --- | --- | --- |
| REQ-TW-093 | Registered canonical authority-source set and role ownership | 5/5 | Candidate baseline patch may proceed. |
| REQ-TW-094 | Static semantic HTML schema, visible IDs/fields, and active-content prohibition | 5/5 | Candidate baseline patch may proceed. |
| REQ-TW-095 | Deterministic parser, link, canonical-member, control-plane, and baseline integrity | 5/5 | Candidate baseline patch may proceed; dependency selection remains held. |
| REQ-TW-096 | Read-only deterministic pre-cutover projection and parity bridge | 5/5 | Candidate baseline patch may proceed; implementation remains held. |
| REQ-TW-097 | Closed consumer boundary, format-neutral model, atomic cutover/rollback, and import-only legacy | 5/5 | Candidate baseline patch may proceed; cutover remains held. |
| REQ-TW-098 | Evidence provenance, independent truth stages, and one review-cycle receipt | 5/5 | Candidate baseline patch may proceed; publication remains held. |
| REQ-TW-099 | Non-compensable Vestro/Air Router human and attested-LLM usability validation | 5/5 | Candidate baseline patch may proceed; trials and owner acceptance remain held. |

REQ-TW-088 is revised only to resolve its authority roots and role ownership
from the registered canonical-source set. Its graph behavior, freshness,
provenance, lifecycle, PR gate, derived-only boundary, and optional-Graphify
boundary do not change.

## Exact candidate requirements

### REQ-TW-093 — registered canonical authority sources

TraceWeaver shall resolve authority through one versioned ordered canonical
authority-source registry controlled by the Intent Contract. Each entry shall
bind a stable role, repository-relative path, schema version, role-specific
source-identity kind and digest, owned field families, and lifecycle
generation. Requirement and traceability entries shall use the canonical
member digest governed by REQ-TW-095; the Intent Contract entry shall use the
non-cyclic control-plane digest governed by REQ-TW-095 and shall never hash the
complete file that contains its own registry identity. Before cutover the
registry shall name `requirements.md`, `traceability-matrix.md`, and
`.traceweaver/intent-contract.yml`; only a separately accepted atomic cutover
may replace the two Markdown roles with root `requirements.html` and
`traceability-matrix.html`, while the Intent Contract remains the compact
machine-oriented control plane. Missing, duplicate, stale, mixed-generation,
ambiguous, recursively defined, or unregistered authority sources shall fail
closed without priority, merge, inference, fallback, or dual authority.

### REQ-TW-094 — strict static semantic HTML

Every controlled HTML authority, evidence, decision, receipt, tombstone, or
derived-navigation record shall conform to a versioned path-and-role-specific
static HTML5 schema; expose its stable record ID as the exact element `id` and
a matching visible `.stable-id`; expose all controlled metadata, fields,
relationships, status, scope, holds, provenance, verification, and validation
as semantic visible text; and remain complete without CSS, scripts, graphs, or
optional enrichment. Controlled HTML shall prohibit `base`, scripts, frames,
forms, embedded objects, refresh/event behavior, URL-rewriting or resource
attributes, external dependencies, and CSS fetch primitives. Static inline CSS
and ordinary repository-local navigation may improve readability but cannot
carry hidden controlled meaning or close traceability.

### REQ-TW-095 — deterministic integrity and baseline closure

Before implementation, TraceWeaver shall select and pin one standards-compliant
HTML parser plus an exact source-location/tokenizer adapter. The authority
checker shall enforce the closed semantic schema and relationship vocabulary,
physical-root-confined local links, lifecycle/cardinality rules, UTF-8/LF/no-BOM
input, and exact original-source byte spans for non-cyclic member/self-hash
placeholder transforms without DOM reserialization. One non-cyclic Intent
Contract control-plane digest shall bind mode, active gate, held claims, and
workflow-policy payload digests; one ordered authority-baseline manifest shall
bind that digest and every canonical member digest. Missing, extra, duplicate,
ambiguous, malformed, non-reproducible, mixed-generation, stale, or mismatched
input shall fail closed.

### REQ-TW-096 — deterministic pre-cutover bridge

Before cutover, TraceWeaver shall generate read-only `requirements.html` and
`traceability-matrix.html` projections only from the registered current
Markdown/YAML authority sources through one versioned format-neutral model.
The bridge shall assign each field family to exactly one current owner,
preserve stable IDs and links, produce byte-identical double builds, prove
complete semantic parity, and fail closed on missing sources, hash drift,
incomplete extraction, ownership ambiguity, copied-fact conflict, or attempted
hand edit. A generated projection shall never become fallback authority and
repairs shall target the registered owning source.

### REQ-TW-097 — atomic migration, rollback, and legacy boundary

HTML cutover shall remain held until an independently reproduced, versioned
consumer census freezes an accepted closed observable boundary covering the
repository, supported installed/package/host roots, static and dynamic route
selectors, entrypoints, hooks, CI, bootstrap, publication, and declared
external or out-of-tree consumers. Every discovered authority route shall map
one-to-one to an included format-neutral route or an owner-approved fail-closed
exclusion, and supported runtime observations shall prove deny-by-default
resolution. Cutover shall switch all included readers and writers atomically to
one matched HTML/YAML baseline generation; any failure shall restore the
complete prior matched generation without mixed or dual authority. After an
accepted cutover, retained Markdown shall be immutable import-only history,
usable only for one auditable import, historical citation, or explicit
owner-approved matched rollback—not live read, write, bootstrap, freshness
fallback, review gate, or parallel authority.

### REQ-TW-098 — evidence and review-cycle receipt

Controlled HTML evidence shall keep raw observation, technical verification,
independent review, PR, merge, deployment, runtime health, release, and
stakeholder validation as separately sourced truth stages. Each record shall
carry its requirement or need, tested immutable artifact/revision, baseline
identity, method, inputs, expected result, threshold, executor/tool/version,
environment, immutable raw evidence, observation, interpretation, limitations,
non-actions, disposition, owner, and time. Each governed review cycle shall
extend and serialize the single existing review-series terminal receipt
identity governed by REQ-TW-037, REQ-TW-056, and REQ-TW-057; the HTML receipt
is a representation of that receipt, never a second receipt identity or
authority source. That one receipt shall bind the exact immutable changed-scope
tree digest, baseline/control-plane closure, applicable graph result or
explicit not-applicable decision, evidence and review links, requested and
independently attested served model or held state, truth stages, remaining
holds, and next gate. The receipt may summarize but never replace its owning
sources.

### REQ-TW-099 — measured human and LLM usability value

Before cutover, TraceWeaver shall preregister and execute matched semantic-HTML
versus last-accepted-Markdown comparisons at one immutable revision for exactly
four task classes: Vestro requirement-change trace, Vestro live-truth trace,
Air Router requirement-change trace, and Air Router live-truth trace. Every
task-class × format human cell shall contain at least four eligible
first-exposure observations, including at least two observations of each
protected difficulty-matched form, and the study shall include at least four
named maintainers. Every task-class × format × served-equivalence LLM cell
shall contain at least ten eligible isolated/reset observations, including at
least five observations of each protected difficulty-matched form; both
formats shall independently meet those minima inside the same
served-equivalence stratum before comparison. Each cell shall also have zero
false authority-stage promotion, at least 95% required-record/link recovery,
at least 50% fewer repository-wide search events for HTML, and HTML median
completion time no worse than Markdown; no aggregate or stronger cell may
compensate for a missing or failing cell. Human trials shall use balanced first
exposure. LLM observations shall preserve complete raw logs and count only
when an immutable accepted central attestation binds the exact served provider,
model, version, reasoning effort, and run identity; requested, self-asserted,
mismatched, rejected, drifted, or `held_model_unattested` observations cannot
satisfy a cell or be pooled across served-equivalence strata. Named owner
acceptance is required after every cell and per-class comparison passes.

## Trace and V&V allocation

- ART-TW-076: candidate semantic-HTML templates, registry/schema/bridge/checker
  implementation, migration/census records, and validation evidence.
- TRACE-TW-069: NEED-TW-001/003/005/008 through REQ-TW-088 and
  REQ-TW-093..099 to ART-TW-076, ATP-TW-046, VER-TW-089, and VAL-TW-037.
- ATP-TW-046 / RESULT-TW-046: deterministic schema, integrity, bridge, parity,
  registry, census, cutover, rollback, legacy, receipt, and Graphify-absent
  transition suite.
- VER-TW-089: implementation verification across those transitions.
- VAL-TW-037: owner-observed Vestro/Air Router human and independently attested
  LLM comparison plus representative cutover/rollback workflow.

The parked release-automation candidate retains its requested identifiers
REQ-TW-091, ART-TW-073, TRACE-TW-068, ATP-TW-043, RESULT-TW-043, VER-TW-088,
and VAL-TW-036. This semantic-HTML amendment does not consume or authorize
them.

## Holds and next gate

No parser dependency, canonicalizer, source adapter, normalized model,
generator, checker, writer, census, migration route, hook, CI workflow,
runtime switch, cutover, generated traceability view, snapshot, stage, commit,
push, PR, merge, release, deploy, or publication is authorized by this review.
No accepted-review identity or formal authority acceptance exists.

Next, obtain a separate owner formal-authority acceptance for the saturated
candidate baseline before selecting a parser or authorizing any implementation.
The acceptance action must preserve every implementation, cutover, generated
view/snapshot, staging, publication, release, and deploy hold.
