# Antigravity Integration Support

Provide a standalone plugin structure and installation capability for the Google Antigravity agent environment, enabling Antigravity agents to discover and invoke TraceWeaver core skills.

## User Review Required

> [!IMPORTANT]
> The default target directory for Antigravity plugins is `~/.gemini/config/plugins/traceweaver-core/`. The installer will copy the Antigravity manifest (`plugin.json`) and the user-callable `tw-*` and `lfg` skills to this directory.

> [!NOTE]
> Since Antigravity discovers skills by looking for subdirectories with `SKILL.md` inside the plugin's `skills` folder, the installer will maintain this structure.

## Open Questions

There are no unresolved open questions.

---

## Proposed Changes

### Requirements & Traceability

#### [MODIFY] [requirements.md](requirements.md)
- Add a new candidate requirement `REQ-TW-068` under the "CE Adapter And Plugin Alpha" section, specifying the target Antigravity integration behavior.

#### [MODIFY] [traceability-matrix.md](traceability-matrix.md)
- Add trace mappings for `REQ-TW-068` showing intent traces, verification artifacts, and validation outcomes.

---

### Antigravity Manifest

#### [NEW] [plugin.json](plugins/traceweaver-core/.antigravity-plugin/plugin.json)
- Create the Antigravity-specific plugin manifest with metadata (name, description, version, keywords, etc.).

---

### Installer

#### [MODIFY] [index.ts](src/index.ts)
- Extend `parseInstallArgs` to accept `--to antigravity` and the optional `--geminiHome <path>` argument.
- Implement `installAntigravitySkills` to copy the Antigravity manifest and the skills directory to `~/.gemini/config/plugins/traceweaver-core`.
- Update `assertTraceWeaverPlugin` to support verifying the presence of `.antigravity-plugin/plugin.json` when the target is `antigravity`.

---

### Documentation

#### [MODIFY] [README.md](README.md)
- Update the main README to add a setup section for Antigravity, including the local alpha install command:
  ```sh
  bun run src/index.ts install ./plugins/traceweaver-core --to antigravity --include-skills
  ```

#### [MODIFY] [README.md](plugins/traceweaver-core/README.md)
- Mention Antigravity plugin structure and configuration details.

---

### Verification Smokes

#### [NEW] [traceweaver-smoke-antigravity-discovery](scripts/traceweaver-smoke-antigravity-discovery)
- Create a smoke test script to verify that installing to an isolated `--geminiHome` copies the files correctly and produces a valid manifest/skills layout.

---

## Verification Plan

### Automated Tests

1. Run the new smoke test:
   ```sh
   scripts/traceweaver-smoke-antigravity-discovery
   ```
2. Verify all existing tests and checks pass:
   ```sh
   scripts/traceweaver-smoke-systems-engineering-audit-closure
   scripts/traceweaver-generate-traceability-views --root .
   scripts/traceweaver-smoke-traceability-generated-views
   git diff --check
   ```

### Manual Verification

- Verify that the installer runs without errors:
  ```sh
  bun run src/index.ts install ./plugins/traceweaver-core --to antigravity --include-skills
  ```
