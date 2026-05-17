# TraceWeaver Operating Modes For tw-worktree

<!-- TRACEWEAVER: file-role=operating-mode-policy; req=REQ-TW-057; trace=TRACE-TW-037; ver=VER-TW-047 -->

`tw-worktree` operates in local worktree mode. It may create or inspect local
worktrees through the packaged `ce-worktree` engine when the repo, base, branch,
and authority scope are clear. Commit, push, PR, remote mutation, and
publication remain held.
