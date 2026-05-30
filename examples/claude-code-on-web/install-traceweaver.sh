#!/usr/bin/env bash
# TraceWeaver Core — Claude Code on the web auto-install.
#
# Installs the traceweaver-core plugin so the tw-* skills are available in
# web/cloud sessions, which start from a fresh container that does not inherit
# the plugins installed on your machine. Safe to run repeatedly.
set -u

# Only act in remote (web/cloud) sessions. Desktop and mobile remote-control
# sessions already have the plugin from a user-scope install, so this is a no-op
# there.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# The marketplace is also declared in .claude/settings.json
# (extraKnownMarketplaces); add it explicitly in case it is not yet registered.
# Tolerate failures so a transient network or trust issue never blocks the
# session.
claude plugin marketplace add Oxiom-Systems/traceweaver >/dev/null 2>&1 || true
claude plugin install traceweaver-core@traceweaver >/dev/null 2>&1 || true

exit 0
