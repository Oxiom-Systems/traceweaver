# Trace Anchor Authoring Contract

<!-- TRACEWEAVER: file-role=trace-anchor-authoring-contract; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->

Status: reviewed planning input / fixture behavior required before project writes

`tw-code-review` is non-mutating. When review finds missing code/test anchors,
load this contract to decide whether the issue should route to deterministic
TraceWeaver work-loop authoring or pause for human clarification.

Authoring may proceed only when the requirement, trace ID, verification ID,
validation path, artifact role, and existing anchors form exactly one reviewed
authority path. Multiple candidate requirements, missing verification, stale
authority, conflicting anchors, unclear file role, or helper/subfunction-only
requests without an approved exception must pause without changing files.

For explicit entrypoints, review only the typed cells in the canonical
`## Traceability Matrix` table: all three selectors plus an `Implementation` or
`Artifact Path` exact-target cell must identify exactly one reviewed row, while
escaped pipes remain cell data. Narrative, basename, and decoy table matches
are not authority. The authored result preserves the row's
complete ID sets; missing target binding and incomplete or different same-named
entrypoint anchors pause.

Anchor hierarchy:

- module/file premise anchors explain artifact purpose;
- behavior-entrypoint anchors mark requirement-bearing public behavior;
- verification anchors mark tests, fixtures, and smokes;
- helper/subfunction anchors are approved exceptions only.

Source anchors and matrix Code Anchor Evidence updates are one rollback-safe
pair transaction that preserves exact destination permission modes for handled
failures, not a power-loss-atomicity claim. Real project writes remain held
until deterministic authoring fixtures, review, and a narrow project-write
allowance pass.
