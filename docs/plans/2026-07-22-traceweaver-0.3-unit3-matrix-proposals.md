# TraceWeaver 0.3 Unit 3 — Proposed Hook Matrix Updates

Status: proposal only. This document does **not** modify
`traceability-matrix.md` and must not be read as a runtime claim.

## Proposed Rows

| Trace ID | Requirement | Implementation | Verification | Validation | Proposed status / debt |
| --- | --- | --- | --- | --- | --- |
| TRACE-TW-060 | REQ-TW-079 | `plugins/traceweaver-core/hooks/session-start`; Claude and Cursor manifests; supported-host session fixtures | VER-TW-080: `scripts/traceweaver-smoke-hook-session-start` validates supported-host JSON shapes, mode, Authority Rule, held claims, and V&V-before-work ordering | VAL-TW-022: reviewers can inspect static payloads before implementation | Static/fixture-verified only. Live SessionStart firing is held per Claude Code, Cursor, and Codex. Codex registration/install remains held. |
| TRACE-TW-061 | REQ-TW-080 | `plugins/traceweaver-core/hooks/pretooluse-tdd-gate`; Claude and Cursor PreToolUse manifest entries; V&V-present/missing fixtures | VER-TW-081: `scripts/traceweaver-smoke-hook-pretooluse-tdd-gate` proves silent positive path, warning negative path, and exit 0 | VAL-TW-023: a missing V&V definition is surfaced without blocking | Static/fixture-verified only. Enforcing/blocking and live runtime firing are held. Codex registration/install remains held. |
| TRACE-TW-062 | REQ-TW-081 | Capability matrix, Codex discovery record, supported-host payload fixtures | VER-TW-082: inspect matrix state, manifests, payload schemas, and discovery evidence | VAL-TW-024: reviewers can distinguish capability from runtime proof | All cells are `supported` on local mechanism evidence, but every runtime-firing claim is held. No matrix merge is performed by this unit. |

## Merge Preconditions

1. Preserve the `static/fixture-verified; runtime firing held per host` boundary.
2. Attach smoke output and scoped code/doc-review evidence before changing live
   verification or validation status.
3. Do not add a Codex installation or runtime claim without a separate
   registration/trust and live-session proof record.
