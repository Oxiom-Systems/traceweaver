<!-- TRACEWEAVER: file-role=packaged-ce-resolve-pr-feedback-targeted-mode; req=REQ-TW-043; trace=TRACE-TW-009; ver=VER-TW-015 -->
# Targeted Mode

Read this reference when Mode Detection (in SKILL.md) routes to **Targeted Mode** — a specific comment or thread URL was provided. Targeted mode addresses only that thread.

## 1. Extract Thread Context

Parse the URL to extract HOST, OWNER, REPO, PR number, and comment REST ID:
```
https://HOST/OWNER/REPO/pull/NUMBER#discussion_rCOMMENT_ID
```

**GitHub origin boundary.** Parse the URL with a strict URL parser and require
HTTPS. Its host and `OWNER/REPO` must exactly match the current checkout's
`origin` before the first `gh` or bundled-script call. Never let the comment URL
select an arbitrary authenticated `GH_HOST` or another same-host repository.
Fork-to-upstream resolution is held unless the checkout's `origin` is the PR
repository. On a matching GitHub Enterprise origin, pass
`GH_HOST=<origin-host>` inline; on `github.com`, omit the prefix. The bundled
helper independently enforces both origin matches.

**Step 1** -- Validate the URL host, then get comment details and GraphQL node
ID via REST:
```bash
ORIGIN_URL=$(git remote get-url origin);
ORIGIN_HOST=$(printf '%s' "$ORIGIN_URL" | sed -E 's#^(https?://|ssh://([^@/]+@)?|[^@]+@)([^/:]+).*#\3#');
ORIGIN_REPOSITORY=$(printf '%s' "$ORIGIN_URL" | sed -E 's#^(https?://[^/]+/|ssh://([^@/]+@)?[^/]+/|[^:]+:)##; s#\.git$##');
COMMENT_URL="<provided-comment-url>";
COMMENT_HOST=$(python3 -c 'import sys; from urllib.parse import urlparse; u=urlparse(sys.argv[1]); print(u.hostname or "") if u.scheme=="https" else sys.exit(2)' "$COMMENT_URL") || exit 1;
COMMENT_REPOSITORY=$(python3 -c 'import sys; from urllib.parse import urlparse; p=[x for x in urlparse(sys.argv[1]).path.split("/") if x]; print("/".join(p[:2])) if len(p)>=4 and p[2]=="pull" else sys.exit(2)' "$COMMENT_URL") || exit 1;
[ "$COMMENT_HOST" = "$ORIGIN_HOST" ] || { echo "Comment host must match checkout origin host" >&2; exit 1; };
[ "$COMMENT_REPOSITORY" = "$ORIGIN_REPOSITORY" ] || { echo "Comment repository must match checkout origin repository" >&2; exit 1; };
GH_HOST=<origin-host> gh api repos/OWNER/REPO/pulls/comments/COMMENT_ID \
  --jq '{node_id, path, line, body}'   # omit GH_HOST=<host> on github.com
```

**Step 2** -- Map comment to its thread ID. Use [scripts/get-thread-for-comment](../scripts/get-thread-for-comment). Set `SKILL_DIR` to the absolute directory you loaded the ce-resolve-pr-feedback SKILL.md from — the Bash tool's CWD is the user's project, not the skill dir, and shell state does not persist between Bash calls, so set it inline. If the bundled script is missing, use Full Mode's fallback `gh` commands to inspect the PR comments:
```bash
SKILL_DIR="<absolute path of the directory containing the ce-resolve-pr-feedback SKILL.md>";
GH_HOST=<host> bash "$SKILL_DIR/scripts/get-thread-for-comment" PR_NUMBER COMMENT_NODE_ID [OWNER/REPO]
```

This fetches thread IDs and their first comment IDs (minimal fields, no bodies) and returns the matching thread with full comment details.

## 2. Fix, Draft Reply, Hold Resolution

Read `references/agents/pr-comment-resolver.md` and spawn a single generic subagent seeded with that resolver prompt for the thread. Do not dispatch a standalone agent by type/name. Pass the same fields full mode does, including `isOutdated` and the location fields (`line`, `originalLine`, `startLine`, `originalStartLine`) -- targeted threads can be outdated too and need the same relocation handling. Then follow the same validate -> held publication handoff -> draft reply -> held resolution flow as Full Mode steps 5-7 (in `references/full-mode.md`).
