# Code/Test Trace Anchor Contract

<!-- TRACEWEAVER: file-role=code-anchor-contract; req=REQ-TW-054; trace=TRACE-TW-032; ver=VER-TW-041 -->

Status: static scanner contract

TraceWeaver trace anchors make behavior-bearing code and verification artifacts
navigable from approved requirements without noisy line-by-line annotation.

For authoring rules, load `trace-anchor-authoring.md`. The scanner detects and
reports missing or stale anchors. Authoring is a separate controlled work-loop
operation with propose/apply/pause modes.

## Anchor Format

Use a single comment line containing `TRACEWEAVER:` and key/value pairs.

File-level behavior anchor:

```text
TRACEWEAVER: file-role=<role>; req=REQ-TW-054; trace=TRACE-TW-032; ver=VER-TW-041
```

High-level entrypoint anchor:

```text
TRACEWEAVER: entrypoint=<name>; req=REQ-TW-054; trace=TRACE-TW-032; ver=VER-TW-041
```

Verification artifact anchor:

```text
TRACEWEAVER: verifies=VER-TW-041; req=REQ-TW-054; trace=TRACE-TW-032
```

Approved omission or generated-file exception:

```text
TRACEWEAVER: exception=generated; req=REQ-TW-054; reason=<short reason>
```

## Required Coverage

- Behavior-bearing source, skill, script, and command files need a file-level
  anchor.
- Public entrypoints, command handlers, orchestrators, validators, runtime
  mutation helpers, publication helpers, and safety gates need a nearby
  entrypoint anchor.
- Tests, fixtures, and smoke scripts need a `verifies=` anchor naming the
  verification ID and requirement ID they exercise.
- Matrix evidence must link requirement IDs, artifact paths, trace IDs, and
  verification IDs for accepted implementation-gate claims.

## Scanner Findings

The scanner must emit structured findings for:

- missing file-level anchors;
- missing high-level entrypoint anchors;
- missing test or fixture verification anchors;
- unresolved per-artifact anchor mappings recorded by `tw-work`;
- requirement IDs that do not exist in `requirements.md`;
- test anchors linked to removed or missing requirements;
- behavior-bearing files without matrix paths;
- generated, vendored, cosmetic, mechanical, or externally owned files without
  an approved exception.

## Scope Modes

Implementation Gate Mode scans changed behavior-bearing files plus linked tests,
fixtures, and smokes. Unchanged historical gaps are baseline debt unless the
current task touches them or uses them to support an accepted claim.

Audit Mode may scan the whole repository and report all observed anchor gaps as
baseline debt or blockers according to the requested claim.

## Authoring Boundary

Review-only invocations must not mutate files. TraceWeaver-controlled work may
use the skill-local authoring helper only when the mapping is unambiguous and
the current mode permits writes. When only a per-artifact mapping is ambiguous,
TraceWeaver-controlled work records an unresolved mapping JSONL file instead of
mutating source or matrix files; the scanner consumes that file and emits
`CTA-UNRESOLVED-ANCHOR-MAPPING`, which blocks traceability-complete, review,
done, publication, and release claims. Fixture proof may apply anchors inside
temporary or fixture workspaces. Real project writes remain held until the
deterministic authoring helper, review, and narrow project-write gates pass.
