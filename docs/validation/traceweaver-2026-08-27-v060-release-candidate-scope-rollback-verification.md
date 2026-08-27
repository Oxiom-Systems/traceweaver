---
id: VER-TW-094-V060-RELEASE-CANDIDATE-SCOPE-ROLLBACK-001
status: passed
date: 2026-08-27
owner: Oxiom Systems
functional_scope_digest: sha256:468c14d389ef06f738eabc22eca177c9a572f4e374d751795e10e06e2dc0b3e8
functional_scope_path_count: 102
integration_base: e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33
authority_effect: none
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-release-candidate-scope-rollback-verification; req=REQ-TW-141,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094 -->

# Core 0.6.0 scope and rollback verification

The release-candidate functional digest was independently recomputed after
product-evidence rebinding and remained
`sha256:468c14d389ef06f738eabc22eca177c9a572f4e374d751795e10e06e2dc0b3e8`
across 102 functional paths. Evidence, generated views, review-series state,
graph freshness, bounded snapshot, and canonical/mirror oracle carriers remain
outside that non-recursive functional digest exactly as defined by the release
integrity contract.

`git diff --check` passed. The installer transaction smoke passed successful
replacement plus rollback for pre-existing and absent Codex and Antigravity
installs at every injected phase, concurrent-sentinel behavior, unowned
conflict refusal, and symlink boundaries.

The mixed root worktree was only observed read-only. It remains on
`codex/lean-convergence` at
`f7c3f0451142f1c72f8eb9bf121648f5b1575d5e`; no switch, reset, rebase,
clean, stage, stash, commit, or file write was performed there. All candidate
writes remain confined to the dedicated release worktree.
