# TraceWeaver Operating Modes For tw-work

<!-- TRACEWEAVER: file-role=operating-mode-policy; req=REQ-TW-057; trace=TRACE-TW-032; ver=VER-TW-041 -->

`tw-work` may work in Implementation Gate Mode and the bounded Review-Staging
Mode needed to hand completed work to review.

Use Implementation Gate Mode when approved authority is unchanged and the task
is to implement or verify behavior under that authority. In this mode,
`tw-work` may run TraceWeaver-packaged `ce-work`, update code/test trace
anchors, update matching matrix Code Anchor Evidence, run verification, and then
stage only the explicit completed work/evidence files needed for
`tw-code-review` or `tw-doc-review` artifact identity.

Stop and return control to `tw-auto` when the run is:

- Authority Baseline Mode: requirements, accepted scope, validation intent,
  release/runtime/publication claims, or authority identity changed.
- Publication Mode: commit, push, PR, release, external mutation, or a
  publication claim is requested.
- Unsafe review-staging: the requested staged scope includes files outside the
  completed work/evidence set or authority, verification, trace, target files,
  or review scope are unclear, contradictory, stale, incomplete, or materially
  changed.
- Human-decision pause: requirements are unclear, contradictory, incomplete,
  missing, stale, or need material change.
