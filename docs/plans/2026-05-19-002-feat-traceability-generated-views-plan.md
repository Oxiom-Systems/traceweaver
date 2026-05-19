<!-- TRACEWEAVER: file-role=traceability-generated-views-plan; req=REQ-TW-067; trace=TRACE-TW-051; ver=VER-TW-064 -->

# Traceability Generated Views Plan

Plan ID: TW-PLAN-2026-05-19-002
Requirement: REQ-TW-067
Trace: TRACE-TW-051
Verification: VER-TW-064
Validation: VAL-TW-013
Status: implementation_added_smoke_passed_code_review_passed_status_hash_doc_review_passed_runtime_held

## Summary

Create a bounded static generator slice that parses existing TraceWeaver
authority fields first and emits read-only derived views:

- `docs/generated/traceability-dashboard.md`
- `docs/generated/traceability-graph.mmd`
- `docs/generated/traceability-data.json`

The Markdown matrix remains authoritative. Generated views are navigation aids
only, and the drift smoke must fail when checked-in generated files no longer
match the current authority files.

## Authority Capsule

Authorized by: user request on 2026-05-19 for `/tw-auto` bounded generator
slice.

Intent served: NEED-TW-001, NEED-TW-003, NEED-TW-005, NEED-TW-008.

Approved requirements used: REQ-TW-005, REQ-TW-008, REQ-TW-023,
REQ-TW-054, REQ-TW-056, REQ-TW-057, REQ-TW-066, and new bounded
REQ-TW-067.

Verification required: deterministic generator smoke that regenerates to a
temporary directory and diffs the committed derived views.

Validation question: can a reviewer follow requirements, trace rows,
verification, validation, and acceptance evidence without manually reading the
entire matrix first?

Must not change: source-of-truth authority remains `traceability-matrix.md`;
the generator must not mutate root authority files; no runtime, enforcement,
publication, release, clean-replacement, or arbitrary-project automatic
artifact-creation claim is made.

## Implementation Units

1. Record REQ-TW-067 in `requirements.md`, `.traceweaver/intent-contract.yml`,
   and `traceability-matrix.md`.
2. Add `scripts/traceweaver-generate-traceability-views` to parse matrix
   tables and structured acceptance result frontmatter.
3. Add `scripts/traceweaver-smoke-traceability-generated-views` to regenerate
   views into a temporary directory and fail on drift.
4. Generate `docs/generated/traceability-dashboard.md`,
   `docs/generated/traceability-graph.mmd`, and
   `docs/generated/traceability-data.json`.
5. Record ATP, result, verification, validation, and Code Anchor Evidence rows.

## Verification Plan

- `ruby -c scripts/traceweaver-generate-traceability-views`
- `bash -n scripts/traceweaver-smoke-traceability-generated-views`
- `scripts/traceweaver-generate-traceability-views --root .`
- `scripts/traceweaver-smoke-traceability-generated-views`
- existing acceptance-result smoke remains green
- implementation-mode code-anchor scan over changed behavior-bearing files
- `git diff --check`

## Review Evidence

Scoped main-thread `tw-code-review` passed with no findings as
`TW-CODE-REVIEW-2026-05-19-REQ-TW-067-GENERATED-TRACEABILITY-VIEWS-CLEAN-001`.

Scoped main-thread `tw-doc-review` for requirements, matrix, Intent Contract,
plan status, and generated-artifact status/hash coherence passed with no
findings as
`TW-DOC-REVIEW-2026-05-19-REQ-TW-067-GENERATED-TRACEABILITY-VIEWS-STATUS-HASH-CLEAN-001`.

## Held Scope

Runtime enforcement, active-host wrapper invocation, automatic arbitrary-project
artifact creation, publication, package/release/upstream readiness, clean
replacement, Vestro/R31 dogfood, and autonomous publication remain held.

## Acceptance Criteria

- Generator parses existing structured fields before generating views.
- Generated Markdown, Mermaid, and JSON files are deterministic.
- Drift smoke fails when generated views do not match authority files.
- Matrix rows make the generated views explicitly derived, not authoritative.

## Next TraceWeaver Step

After implementation verification, run the scoped `tw-code-review` and
`tw-doc-review` closure inside this `tw-auto` run, or hold those review claims
if reviewer capacity or authority blocks continuation.
