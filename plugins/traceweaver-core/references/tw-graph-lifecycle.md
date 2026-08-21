# TraceWeaver Graph Lifecycle Contract

<!-- TRACEWEAVER: file-role=tw-graph-lifecycle-contract; req=REQ-TW-088; trace=TRACE-TW-066; ver=VER-TW-086 -->

This is the single TraceWeaver-owned lifecycle source for the mandatory derived
authority projection. Wrappers point here rather than restating mutable graph
policy.

## Invariants

1. `requirements.md`, `traceability-matrix.md`, and
   `.traceweaver/intent-contract.yml` retain their separate authority roles.
2. Graph and manifest output is derived, rebuildable, and unable to select,
   write, approve, merge, delete, supersede, or attest authority.
3. A completed change cycle that accepts authority, trace, evidence, or
   verified-behavior changes owns exactly one durable cycle receipt and invokes:

   ```text
   tw-graph/scripts/traceweaver-tw-graph refresh --root <root> --cycle-id <stable-series-and-cycle-id>
   ```

   Same-cycle exact re-entry is idempotent. If final review or acceptance
   bookkeeping changes registered sources, the same cycle receipt is reconciled
   in place with an incremented materialization count. That mechanical closure
   must not create a new review series or consume another repair cycle.
4. The owning wrapper immediately runs:

   ```text
   tw-graph/scripts/traceweaver-tw-graph check --root <root>
   ```

5. `tw-code-review` and `tw-doc-review` require a passing check before clean
   review completion. They do not refresh a stale graph during read-only review.
6. `tw-commit` and `tw-commit-push-pr` require a passing check before staging or
   publication. A publication wrapper must not refresh merely to make its own
   gate pass.
7. `tw-auto` carries the refresh/check receipt from the owning bounded child; it
   does not perform graph mutation itself.
8. `tw-setup` creates the first graph and receipt whenever all three authority
   roots exist. A first-use `refresh` is explicit and never installs a hook.
9. PR CI runs the deterministic smoke and a repository-root `check`; it never
   runs `build` or `refresh` first. A clean clone can verify the tracked receipt
   entirely in memory without materializing ignored local graph files. Missing,
   malformed, non-reproducible, provenance-incomplete, stale, omitted,
   orphaned, unresolvable, source-hash, graph-hash, manifest-hash, or baseline-
   hash mismatch is blocking.
10. A successful full check may cache its exact receipt/workspace fingerprint
    under ignored local state. Unchanged later wrappers reuse that result only
    when Git HEAD, exact tracked-diff bytes, untracked path/content bytes, and
    receipt identity match. A second edit to an already-dirty file invalidates
    the cache even when `git status` reports the same paths.
11. No wrapper silently installs or mutates a global, Git, or host hook.
12. Optional Graphify may enrich navigation but cannot block, refresh, satisfy,
    or attest this lifecycle.

## Receipt fields

The tracked `.traceweaver/tw-graph-freshness.json` receipt carries the accepted
cycle ID, materialization count, baseline hash, closure identity, manifest hash,
graph hash, closure count, and its own canonical hash. Operation/check state is
returned by the command.
Review and publication wrappers preserve the receipt or the exact subsequent
check output.
