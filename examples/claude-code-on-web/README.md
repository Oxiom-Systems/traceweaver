# TraceWeaver Core — Claude Code on the web kit

This kit makes the TraceWeaver `tw-*` skills available in **Claude Code on the
web** (cloud sessions launched from the Claude mobile or web app).

You do **not** need this for the desktop app or mobile remote-control: a
user-scope `claude plugin install traceweaver-core@traceweaver` already follows
your machine into those sessions. Web/cloud sessions are different — they run in
a fresh, isolated container that does not inherit your locally installed
plugins, so the marketplace and an install step have to live in the repository
you open.

## What it does

- Declares the TraceWeaver marketplace with `extraKnownMarketplaces`, so the
  cloud container knows where to find the plugin.
- Adds a `SessionStart` hook that runs `claude plugin install
  traceweaver-core@traceweaver` when the container starts, so the plugin is
  present in the session (run `/reload-plugins` if the `tw-*` skills do not show
  up right away).

## Install into your repository

From the root of the repo you want to use on the web:

```sh
mkdir -p .claude
cp path/to/traceweaver/examples/claude-code-on-web/install-traceweaver.sh .claude/install-traceweaver.sh
chmod +x .claude/install-traceweaver.sh
```

Then merge `settings.json` from this kit into your repo's
`.claude/settings.json`. If you do not already have one, you can copy it
directly:

```sh
cp path/to/traceweaver/examples/claude-code-on-web/settings.json .claude/settings.json
```

If you already have a `.claude/settings.json`, merge the `extraKnownMarketplaces`
and `hooks.SessionStart` keys into it instead of overwriting the file.

Commit both files. The next time you open this repo in a Claude Code web session
and trust the configuration, the hook installs the plugin. If the `tw-*` skills
do not appear right away, run `/reload-plugins` (or start a fresh session) —
Claude Code does not always register a plugin installed into an already-running
session without a reload.

## Requirements and caveats

- **Network access:** the cloud environment must be able to reach GitHub — use a
  **Trusted** or **Custom** network policy, not **None**.
- **Trust prompt:** Claude Code asks you to trust the repository's hooks before
  they run. The plugin only installs after you trust it.
- **Best-effort, not turn-key:** the install runs at session start and tolerates
  failure (it never blocks the session). There is no stable plugin-only way to
  auto-enable a marketplace plugin in cloud sessions yet, so this hook is the
  documented workaround.
- **Slight startup latency:** the hook runs on every session start, adding a few
  seconds while the plugin installs or verifies.
- **May need a reload:** if the skills do not show in the session where the hook
  first ran, run `/reload-plugins` or start a fresh session so Claude Code picks
  up the just-installed plugin.

The script only acts in remote sessions (it checks `CLAUDE_CODE_REMOTE`), so it
is a no-op when the same repo is opened on your desktop.
