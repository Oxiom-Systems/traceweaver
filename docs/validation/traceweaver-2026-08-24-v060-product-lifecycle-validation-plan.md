---
id: VAL-TW-042
status: historical_exact_candidate_revision_4_rebinding_required_publication_held
date: 2026-08-24
owner: Oxiom Systems
baseline_hash_sha256: ae5ea38098647901926f1391c975e0db766337e12c765f18a73885f42ff74e08
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-validation-plan; req=REQ-TW-136,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VAL-TW-042 — Core 0.6.0 Product-Lifecycle Validation Plan

## Decision

The preregistered post-repair machine routes passed on the same functional
candidate, but Hannes Zietsman explicitly rejected both named product cells and
the non-compensable Oxiom Systems owner disposition. `VAL-TW-042` is failed and
held for release. The owner subsequently classified the failure as
**Real-product depth**: the eight-record disposable trial is too synthetic and
shallow. Corrective implementation remains held pending explicit approval of
`CHG-TW-2026-08-24-001` and `EXC-TW-018`.
That approval is now recorded, and correction-specific RED evidence confirms
the rejected runner has no source-derived census. Exactly one bounded
validation-method correction may proceed; acceptance and publication remain
held.
The same focused check is now GREEN. The final executed result binds functional
scope
`sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875`
and preserves both the rejected eight-record result and the preceding corrected
run as historical evidence. The exact result passes every machine criterion;
both product-cell signals and the owner disposition were then explicitly
accepted with the recorded limitations acknowledged. Publication remains
separately gated.

The retained reviewer continuation subsequently found two release-control
contradictions. `CHG-TW-2026-08-24-002` / `EXC-TW-019` authorize one bounded
repair, so the accepted `8b671913...875` disposition is historical after the
first functional change. The same preregistered, non-compensable product route
must run on the new exact digest and receive a new explicit owner disposition;
acceptance cannot be inherited.
That route is now complete for the final 74-path candidate at
`sha256:8b417a73193da9df15b303d0766391330cf42cd4caf48e0be8faf2cb9692b957`.
Hannes Zietsman accepted both cells and `VAL-TW-042` with the recorded
limitations acknowledged. The product validator passes; publication remains
separately gated.

The subsequent same-reviewer continuation closed P1-006 and retained P1-005
because post-oracle terminal GREEN and retained-review receipts circularly
occur in the pre-oracle source contract. Hannes Zietsman approved
`CHG-TW-2026-08-26-003` / `EXC-TW-020` for one bounded acyclic correction.
Controlled functional authority has therefore changed and the accepted
`8b417a...b957` result is historical. After the authorized correction is
frozen, the same preregistered non-compensable route must run on the new exact
digest and receive a new explicit owner disposition. Acceptance cannot be
inherited; publication remains separately gated.

## Need, intended use, and context

| Need | Intended use | Operating context | Observable success signal |
| --- | --- | --- | --- |
| NEED-TW-014 | Product owner registers a real client/product source, confirms a bounded baseline, and follows commitments through acceptance. | Existing product repositories with Markdown/YAML plus linked code and non-code artifacts. | At least 95% of required records and links recovered, no false authority/truth-stage promotion, and an owner-readable acceptance chain. |
| NEED-TW-015 | Contributor defines V&V before work and sees evidence become stale after a controlled change. | Normal advisory TraceWeaver workflow on immutable product revisions. | Missing V&V fails closed; one seeded change invalidates the exact applicable evidence and exposes re-verification. |
| NEED-TW-016 | Maintainer navigates lifecycle status, duplicate, impact, and acceptance evidence without repository-path knowledge. | Offline strict semantic-HTML hub plus deterministic graph queries. | Required task completion median is no worse than the current Markdown/manual-matrix route, with no scripts/network and complete visible meaning. |
| NEED-TW-017 | Release owner decides whether the same candidate is acceptable and publishable. | Vestro and Air Router matched trials plus the exact Core 0.6.0 release candidate. | Both product cells pass independently; complete limitations and evidence digests are visible; no cross-product compensation. |

## Rater profiles

| Cell | Required rater | Relationship and independence | Representativeness |
| --- | --- | --- | --- |
| Vestro | Named Vestro product owner or maintainer recorded in the result | Must not be the sole implementer of this Core 0.6.0 candidate; any contribution or dependence is disclosed and explicitly accepted by Oxiom Systems. | Regularly interprets Vestro requirements, code/evidence links, changes, and release state. |
| Air Router | Named VinilaTech/Air Router product owner or maintainer recorded in the result | Must not be the sole implementer of this Core 0.6.0 candidate; any contribution or dependence is disclosed and explicitly accepted by Oxiom Systems. | Regularly interprets Air Router requirements plus at least one authorized non-code lifecycle artifact. |
| Acceptance owner | Oxiom Systems | Decision authority for TraceWeaver release; reviews both cells and limitations after raters record outcomes. | Owns the Core 0.6.0 product and publication decision. |

Role placeholders are sufficient for planning only. Each executed result must
name the individual rater and their exact relationship before it can pass.

## Preregistered scenario matrix

| Scenario | Need | Procedure | Acceptance signal | Planned evidence |
| --- | --- | --- | --- | --- |
| VESTRO-LC-001 | NEED-TW-014..017 | On an immutable authorized Vestro revision: register source, prepare candidate lifecycle records, confirm the baseline, find a duplicate, define V&V before work, apply one change, inspect stale evidence, navigate strict HTML, and inspect the acceptance pack. | ≥95% required record/link recovery; zero false authority/truth-stage promotion; every seeded impact found; HTML median time no worse than the current route; named rater accepts or records specific failure. | `docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-product-validation-result.md` plus raw Vestro log/digest. |
| AIRROUTER-LC-001 | NEED-TW-014..017 | Repeat the matched route on an immutable authorized Air Router revision and include at least one source-authorized non-code artifact in change impact and acceptance. | Same independent thresholds as Vestro; non-code artifact is visible in source, impact, evidence, and pack paths; named rater accepts or records specific failure. | Same result record plus raw Air Router log/digest and non-code artifact identity. |
| ACCEPT-LC-001 | NEED-TW-017 | Oxiom Systems compares both non-compensable cells, verification state, limitations, and release holds on the exact candidate. | Explicit owner disposition cites both cell results, tested baseline, raw digests, limitations, and remaining holds; no average or compensating score. | `docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-representative-validation.md`. |

## Evidence and interpretation rules

- Freeze product revision, source authorization, scenario text, required
  records/links, comparison route, rater, and candidate digest before timing or
  scoring.
- Record raw task outcomes and monotonic elapsed times. Report nearest-rank
  medians per cell; do not discard failures or pool the products.
- A generated graph, HTML view, deterministic test, implementer statement, or
  repository fixture is verification input only unless a named representative
  rater executes the scenario and records the acceptance signal.
- `fail`, `partial`, or `blocked` routes to controlled change/scope reduction.
  Validation cannot be silently deferred past the 0.6.0 release gate.

## Executed disposition and hold conditions

- named individual raters, immutable source revisions, raw evidence, and exact
  candidate bindings are recorded;
- both machine routes passed their preregistered objective thresholds;
- the fixed eight-record product-cell signals and Oxiom Systems disposition
  remain `rejected` in historical result
  `sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794`;
- the final exact-candidate machine evidence and explicit owner acceptance are
  bound in result
  `sha256:fae120261ddea78ad01d474e716e124d2f9804e42c6bdb03a1eaaee9d27da50b`;
  both non-compensable cell signals and the owner disposition pass;
- the deficiency category was Real-product depth, the one normal repair batch
  is consumed, and the owner-approved final bounded validation-method
  exception has been executed; and
- the EXC-TW-019 RED, authority Proceed, repair, fresh product evidence, and
  owner disposition are historical complete evidence; the resulting reviewer
  continuation closed P1-006 and retained P1-005;
- EXC-TW-020 revision-4 RED, document review, and fresh authority Proceed must
  precede the one bounded behavior correction, after which fresh exact-product
  evidence and owner disposition are required before the same-reviewer
  verification continuation; and
- oracle refresh, PR, publication, and release remain prohibited until their
  separate gates pass.

## Next gate

Run document review and a fresh authority gate against the completed
revision-4 hashes and RED before script mutation. After the bounded correction,
freeze the functional digest and rerun both exact product cells for explicit
owner disposition. Do not continue the existing Terra reviewer until that
acceptance. Oracle refresh and publication remain separately held.
