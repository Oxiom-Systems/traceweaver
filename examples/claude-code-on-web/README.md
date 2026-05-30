# TraceWeaver Core — Claude Code on the web kit

This kit makes the TraceWeaver `tw-*` skills available in **Claude Code on the
web** (cloud sessions launched from the Claude mobile or web app).

You do **not** need this for the desktop app or mobile remote-control: a
user-scope `claude plugin install traceweaver-core@traceweaver` already follows
your machine into those sessions. Web/cloud sessions are different — they run in
a fresh, isolated container that does not inherit your locally installed
plugins. Cloud sessions load marketplace plugins **only** when they are declared
in the repository's committed `.claude/settings.json`, and the plugin is
installed and loaded **at session start** (before the agent begins).

> Mid-session installs do not work on the web: a `SessionStart` hook that runs
> `claude plugin install` writes the plugin to disk too late, and
> `/reload-plugins` is not available in cloud sessions. The supported mechanism
> is the committed settings below.

## What it does

`settings.json` declares two keys:

- `extraKnownMarketplaces` — registers the TraceWeaver marketplace so the cloud
  container knows where to fetch the plugin.
- `enabledPlugins` — enables `traceweaver-core@traceweaver`, so Claude Code
  installs and loads it at session start.

## Install into your repository

From the root of the repo you want to use on the web, merge this kit's
`settings.json` into your repo's `.claude/settings.json`. If you do not already
have one, copy it directly:

```sh
mkdir -p .claude
cp path/to/traceweaver/examples/claude-code-on-web/settings.json .claude/settings.json
```

If you already have a `.claude/settings.json`, merge the `extraKnownMarketplaces`
and `enabledPlugins` keys into it instead of overwriting the file.

Commit the file. The **next time you open a fresh Claude Code web session** on
this repo (and trust the configuration), the plugin installs at startup and the
`tw-*` skills are available as `/traceweaver-core:tw-...`.

## Requirements and caveats

- **Network access:** the cloud environment must be able to reach GitHub — use a
  **Trusted** or **Custom** network policy, not **None**.
- **Trust prompt:** Claude Code asks you to trust the repository before applying
  its settings; the plugin loads after you trust it.
- **Fresh session only:** the plugin loads at session **start**. You cannot add
  it to an already-running web session (`/reload-plugins` is unavailable there);
  open a new session to pick it up.
- **Desktop is unaffected:** on the desktop app and mobile remote-control, a
  user-scope install already covers all repos; this kit is only for web/cloud
  sessions.
