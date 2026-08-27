---
id: TW-V060-SCOPE-ROLLBACK-VERIFICATION-2026-08-24-001
status: passed_post_repair_functional_freeze
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-143, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
functional_scope_digest: sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-scope-rollback-verification; req=REQ-TW-143,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 Functional Scope And Rollback Verification

## Disposition

Passed for the frozen post-repair functional candidate. The integration base is
`e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33`, the released predecessor is
`traceweaver-core--v0.5.0` at
`3a1f3c56b093e61b88e9f6282637878e8ebbf163`, and the target branch is
`codex/v050-product-intent-plm-plan` in the protected named worktree.

The deterministic functional scope contains 71 unique regular files and has
digest
`sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51`
under
`sha256(sorted(path + NUL + git_mode + NUL + sha256(file_bytes) + LF))`.
It is the complete PR61 delta except evidence carriers under
`docs/validation/`, generated traceability views, review-series state, current
graph/snapshot receipts, and the reviewer-authored model-context oracle. The
production release receipt must enumerate this same 71-path set explicitly;
the release checker independently recalculates every path, mode, and digest.

There are no deleted paths. Every new lifecycle tool, benchmark, trial runner,
and smoke has executable mode `100755`; schemas, skills, requirements, plans,
workflows, manifests, and public documentation use `100644`.

## Protected-root and recovery observations

The mixed root remains on `codex/lean-convergence` at
`f7c3f0451142f1c72f8eb9bf121648f5b1575d5e`. Its 92-entry mixed status has
observation digest
`sha256:e37399493be7e2028a24340cb7b7add51dffa3d4bd6bf9eb5d60d0e18000e262`.
No reset, switch, rebase, clean, stage, stash mutation, or file write was
performed there.

The target repository retains two named recovery stashes without mutation:

- `codex-v050-obsolete-authority-retry-artifacts-after-pr61-rebase-2026-08-24`;
- `codex-v050-product-intent-before-pr61-rebase-2026-08-24`.

Before merge, the target branch plus those recovery stashes preserve the
candidate and pre-PR61 states. The exact integration base is independently
resolvable. No rollback command was executed against either live worktree.

## Behavioral rollback proof

`scripts/traceweaver-smoke-v060-lifecycle-cutover` passed complete directory
swap restoration after success and injected failure while refusing mixed
generations. `scripts/traceweaver-smoke-installer-transaction` passed rollback
for pre-existing and absent Codex/Antigravity installs at every injected phase,
plus conflict and symlink-boundary refusal. Product trials run only in
disposable snapshots and left the Vestro and Air Router worktrees unchanged.

## Next gate

Post-repair product logs bind this digest, but the named product and release
owner rejected the result. Classify
`GAP-TW-2026-08-24-V060-PRODUCT-VALIDATION-001` before authorizing any further
functional repair. Any approved repair that changes one of the 71 functional
paths invalidates this pass and requires a new digest, product-trial rebind,
and scope/rollback record. The targeted review continuation, reinstall, graph,
PR, and release remain held.
