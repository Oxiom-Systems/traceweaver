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

Anchor hierarchy:

- module/file premise anchors explain artifact purpose;
- behavior-entrypoint anchors mark requirement-bearing public behavior;
- verification anchors mark tests, fixtures, and smokes;
- helper/subfunction anchors are approved exceptions only.

Source anchors and matrix Code Anchor Evidence updates are one transaction. Real
project writes remain held until deterministic authoring fixtures, review, and a
narrow project-write allowance pass.
