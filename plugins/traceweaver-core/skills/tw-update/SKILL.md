---
name: tw-update
description: Check whether the installed TraceWeaver Core plugin is current and recommend the correct update command for the active harness. Use when the user says "update traceweaver", "tw-update", "check traceweaver version", or wants to stay current with new TraceWeaver releases.
argument-hint: "[optional: harness name, or 'check only']"
---

<!-- TRACEWEAVER: file-role=update-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Update

## Purpose

Use `tw-update` to tell the user whether their installed TraceWeaver Core is
current and, if not, the exact in-harness command to update it. This is the
"stay current from inside the harness" path. It is advisory: it reads versions
and recommends a command; it does not silently mutate the host, publish, or
bypass any TraceWeaver gate.

TraceWeaver Core releases from `main`: every release bumps the plugin `version`
and produces a `traceweaver-core--v<version>` git tag and a matching GitHub
Release. The marketplace tracks `main`, so the latest released `version` on
`main` is the "current" target.

## Step 1: Determine the installed version

Read the `version` field from the installed plugin manifest. Look in the
harness's install location, in this order, and use the first that exists:

- Claude Code: `~/.claude/plugins/**/traceweaver-core/.claude-plugin/plugin.json`
  (marketplace cache), or the active plugin dir if running with `--plugin-dir`.
- Codex: `<codexHome>/.codex/traceweaver-core/install-manifest.json` or the
  installed `traceweaver-core/.codex-plugin/plugin.json` (default
  `~/.codex/...`).
- Antigravity: `<geminiHome>/.gemini/config/plugins/traceweaver-core/.antigravity-plugin/plugin.json`
  (default `~/.gemini/...`).

If no installed manifest is found, report that TraceWeaver may be running from a
local development checkout and that no marketplace update applies to this
session; recommend `git pull --ff-only origin main` in the checkout instead.

## Step 2: Determine the latest released version

Read the canonical released `version` without cloning. Prefer the GitHub
Release, fall back to `main`:

```sh
# Canonical release (preferred)
gh release list --repo Oxiom-Systems/traceweaver --limit 5

# Or read the version field on main directly
gh api repos/Oxiom-Systems/traceweaver/contents/plugins/traceweaver-core/.claude-plugin/plugin.json \
  --jq '.content | @base64d | fromjson | .version'
```

If `gh` is unavailable, fetch the raw manifest:

```sh
curl -fsSL https://raw.githubusercontent.com/Oxiom-Systems/traceweaver/main/plugins/traceweaver-core/.claude-plugin/plugin.json \
  | python3 -c 'import sys,json;print(json.load(sys.stdin)["version"])'
```

If neither network path succeeds, say the latest version could not be
determined and stop; do not guess.

## Step 3: Compare and recommend

If the installed version equals the latest released version, report that
TraceWeaver Core is current and stop.

If the installed version is behind, report both versions and give the exact
update command for the active harness:

- Claude Code:

  ```text
  claude plugin marketplace update traceweaver
  claude plugin update traceweaver-core@traceweaver
  /reload-plugins
  ```

- Codex:

  ```sh
  codex plugin marketplace upgrade traceweaver
  ```

  then reinstall `traceweaver-core` from the Codex plugin UI. For a pinned local
  install, re-run the installer against the latest tag:

  ```sh
  git clone --branch traceweaver-core--v<latest> --depth 1 git@github.com:Oxiom-Systems/traceweaver.git
  cd traceweaver && bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
  ```

- Antigravity:

  ```sh
  git clone --branch traceweaver-core--v<latest> --depth 1 git@github.com:Oxiom-Systems/traceweaver.git
  cd traceweaver && bun run src/index.ts install ./plugins/traceweaver-core --to antigravity --include-skills
  ```

After any update, run `/reload-plugins` (Claude Code) or start a fresh session
so the harness registers the new skill surface.

## Claude Code on the web

Web/cloud sessions start from a fresh container. Keeping current there means the
committed `SessionStart` install hook runs `claude plugin install
traceweaver-core@traceweaver` on container start, which pulls the marketplace's
current `main` state. To move to a specific release, pin the marketplace ref in
the committed `extraKnownMarketplaces` configuration.

## Boundaries

- `tw-update` performs read-only version checks and recommends a command. It
  does not auto-run installs, mutate the host plugin set, publish, tag, or
  release. The user runs the recommended command.
- This skill does not change requirements, authority, or held-claim status.

## Suggested next steps

- If current: continue with the intended `tw-auto` / `tw-work` task.
- If behind: run the recommended update command, reload plugins, and re-run the
  intended task on the updated skill surface.
- If running from a development checkout: `git pull --ff-only origin main` and
  reinstall with `bun run src/index.ts install ...`.
