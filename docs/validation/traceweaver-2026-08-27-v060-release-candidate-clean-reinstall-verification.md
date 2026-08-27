---
id: VER-TW-094-V060-RELEASE-CANDIDATE-CLEAN-REINSTALL-001
status: passed
date: 2026-08-27
owner: Oxiom Systems
functional_scope_digest: sha256:468c14d389ef06f738eabc22eca177c9a572f4e374d751795e10e06e2dc0b3e8
functional_scope_path_count: 102
version: 0.6.0
authority_effect: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-release-candidate-clean-reinstall-verification; req=REQ-TW-121,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094 -->

# Core 0.6.0 clean isolated reinstall verification

`TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery`
passed against a fresh temporary Codex home. The installed projection reported:

- 55 packaged skill directories and 29 direct-callable TraceWeaver skills;
- 43 agent TOML files and 53 packaged references;
- standalone ownership with no external Compound Engineering plugin required;
- `gpt-5.6-sol` coordinator and `gpt-5.6-terra` native-child routing metadata;
- publication-capsule, publication-review, native-child, convergence,
  semantic-HTML, Graphify-advisory, direct-SEC, bootstrap, and model-routing
  helpers present and executable;
- unowned conflicts refused before overwrite and owned legacy surfaces cleaned
  only inside the isolated install root.

`scripts/traceweaver-smoke-installer-transaction` also passed replacement,
success, rollback, concurrency, conflict, and symlink-boundary cases for Codex
and Antigravity. The active host and mixed root worktree were not reconciled or
mutated; runtime discovery still requires a fresh host session after release.
