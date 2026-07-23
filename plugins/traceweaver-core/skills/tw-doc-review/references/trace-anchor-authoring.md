# Trace Anchor Authoring Contract

<!-- TRACEWEAVER: file-role=trace-anchor-authoring-contract; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->

Status: reviewed planning input / fixture behavior required before project writes

Use this contract when reviewing code-anchor hierarchy, authoring policy, or
matrix Code Anchor Evidence updates. The review question is whether the document
keeps source anchors and matrix evidence tied to reviewed requirements without
opening project writes, runtime behavior, publication, Vestro, clean replacement,
or release claims prematurely.

Authoring may proceed only when the requirement, trace ID, verification ID,
validation path, artifact role, and existing anchors form exactly one reviewed
authority path. Multiple candidate requirements, missing verification, stale
authority, conflicting anchors, unclear file role, or helper/subfunction-only
requests without an approved exception must pause without changing files.

For explicit entrypoints, only typed cells in the canonical `## Traceability
Matrix` table may select authority. All three caller selectors plus an exact
target in `Implementation` or `Artifact Path` must match one reviewed row,
while escaped pipes remain cell data. Narrative, basename, and decoy table matches
are not authority. Source and matrix evidence preserve the row's complete ID
sets, while missing target binding and incomplete or different same-named
anchors pause.

Anchor hierarchy:

- module/file premise anchors explain artifact purpose;
- behavior-entrypoint anchors mark requirement-bearing public behavior;
- verification anchors mark tests, fixtures, and smokes;
- helper/subfunction anchors are approved exceptions only.

Source anchors and matrix Code Anchor Evidence updates are a rollback-safe pair
that preserves exact destination permission modes for handled failures, not a
power-loss-atomicity claim. Real project writes remain held until deterministic
authoring fixtures, review, and a narrow project-write allowance pass.
