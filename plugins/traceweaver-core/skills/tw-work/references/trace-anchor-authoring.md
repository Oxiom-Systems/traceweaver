# Trace Anchor Authoring For tw-work

<!-- TRACEWEAVER: file-role=trace-anchor-authoring-contract; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->

`tw-work` owns trace-anchor mutation inside the TraceWeaver work loop. Review
surfaces may report missing anchors, but implementation is the only place that
may apply source anchors and matrix Code Anchor Evidence.

Apply anchors only when the requirement, trace ID, verification ID, validation
path, and target artifact role are all unambiguous and already covered by
reviewed authority. If only one artifact's anchor mapping is ambiguous, skip
that source/matrix mutation, record an unresolved mapping candidate, continue
other unambiguous anchors, and require `tw-traceability-check` to report the
unresolved mapping as a blocking structured finding. Pause for human input when
task authority, requirement meaning, verification authority, accepted scope, or
material authority is unclear, contradictory, incomplete, missing, stale, or
implies a material authority change.

Use coarse hierarchy:

- module/file premise anchors for artifact purpose;
- behavior-entrypoint anchors for requirement-bearing public behavior;
- verification anchors for tests, fixtures, and smokes;
- helper/subfunction anchors only by approved exception.

Do not turn every helper into a requirements record. Anchor density is not proof
quality.

When the mapping is unambiguous and the work loop is authorized, apply anchors
with the skill-local helper:

```sh
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-author-code-anchors \
  --mode apply \
  --work-loop \
  --target <changed-file> \
  --requirement <REQ-ID> \
  --trace <TRACE-ID> \
  --verification <VER-ID>
```

The helper is responsible for writing the source anchor and the matching matrix
Code Anchor Evidence row as one transaction. When a per-artifact mapping is
ambiguous, call the helper with `--skip-ambiguous-mapping` and
`--unresolved-mappings <path>` so it records the skipped target without source or
matrix mutation, then rerun the scanner with that unresolved mapping file. If it
pauses or refuses, do not hand-edit around it; return to `tw-auto` for user
input or requirements review.
