# TraceWeaver Operating Modes For tw-resolve-pr-feedback

<!-- TRACEWEAVER: file-role=operating-mode-policy; req=REQ-TW-057; trace=TRACE-TW-037; ver=VER-TW-047 -->

`tw-resolve-pr-feedback` operates in local repair mode unless a separate
controlled-publication gate is opened. It may analyze feedback and prepare local
fixes through the packaged `ce-resolve-pr-feedback` engine, but remote PR
comments, thread resolution, pushes, commits, and PR updates remain held.
