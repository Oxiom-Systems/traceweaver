---
id: TW-V060-SEMANTIC-HTML-RELEASE-GATE-2026-08-24-001
status: component_gate_passed_real_product_and_authority_cutover_held
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-131, REQ-TW-132, REQ-TW-133, REQ-TW-134, REQ-TW-138
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
---

<!-- TRACEWEAVER: file-role=v060-semantic-html-release-gate; req=REQ-TW-131,REQ-TW-132,REQ-TW-133,REQ-TW-134,REQ-TW-138; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Semantic HTML Release Gate

## Current authority state

`requirements.md`, `traceability-matrix.md`, and
`.traceweaver/intent-contract.yml` remain the controlling TraceWeaver sources.
Registered product Markdown/YAML and immutable external receipts remain
controlling for lifecycle projections. Semantic HTML is
`derived_non_authoritative`; no semantic-HTML authority cutover has been
attempted or accepted.

Core 0.6.0 may include the strict derived projection schemas and tools while
authority cutover remains held. It may not claim semantic HTML is controlling,
fallback authority, a second writable baseline, product acceptance, or release
truth.

## Gate state

| Gate | Evidence | State |
| --- | --- | --- |
| Frozen standards parser | Nokogiri `1.13.8` `Nokogiri::HTML5`, libgumbo `1.0.0-nokogiri`, and `traceweaver-generated-html-source-span/1` are exact-pinned. Missing or different runtime fails closed. | component pass |
| Deterministic projection | Exact registry/record/graph/baseline input produces byte-identical strict HTML and a content-addressed `tw-lifecycle-html/1` manifest. | component pass |
| Visible parity | Stable IDs, controlled fields, source/baseline identity, state, and typed relationships are visible and bound by record, source-span, visible-text, relationship, page, parser, graph, and source-closure digests. | component pass |
| Accessibility/offline/print | HTML5 parse, English document landmarks, headings, skip links, keyboard links, responsive text, print CSS, and local-only navigation pass fixtures. | component pass |
| Security | Active elements, scripts, events, forms, embedding, remote/fetch URLs, URL rewriting, hidden content, CSS fetch/hiding, malformed HTML, broken links, hand edits, and stale graph bytes fail closed. | component pass |
| Consumer census | The gate requires a closed, independently reproduced reader/writer census and migration of every listed consumer. The actual Core candidate census is not yet independently frozen or migrated. | held |
| Product usability | Non-compensable Vestro and Air Router completion-time and record/link-recovery validation has not run on the complete candidate. | held |
| Atomic cutover/rollback | A disposable fixture proves one directory-swap transaction and complete restoration after success or injected failure. Actual authority cutover remains separately held. | fixture pass / real cutover held |
| Owner cutover decision | No decision accepts semantic HTML as controlling authority for this candidate. | held |

## Fail-closed disposition

The actual cutover gate state is `not_eligible_not_attempted`. Any open census,
unmigrated consumer, failed parity/accessibility/security/usability/rollback
evidence, mixed generation, stale or mismatched manifest, missing named owner
decision, or remaining hold keeps Markdown/YAML controlling. Partial, dual,
fallback, or automatic authority is prohibited.

This record is not Core 0.6.0 release readiness. Integrated review,
representative product validation, final same-candidate graph freshness, CI,
reinstall, exact-main, manifest, tag, and release gates remain held.

## Next gate

Proceed to Slice 5 product-source capture and approved change flow while
retaining the semantic-HTML authority hold. Real semantic-HTML usability and
acceptance evidence is collected only in the separately preregistered Vestro
and Air Router validation.
