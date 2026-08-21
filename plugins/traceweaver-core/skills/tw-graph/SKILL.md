---
name: tw-graph
description: TraceWeaver-owned deterministic authority projection and freshness control surface. Use for source-located requirement/trace navigation, impact and duplicate candidates, accepted-cycle refresh, and required review/PR freshness checks.
argument-hint: "<build|check|refresh|status|search|related|path|impact|duplicate-candidate> [arguments]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-graph`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=tw-graph-control-skill; req=REQ-TW-088; trace=TRACE-TW-066; ver=VER-TW-086 -->

# TraceWeaver Graph

## Purpose

Provide the mandatory, provider-independent projection of TraceWeaver authority
and its complete repository-local reference closure. `tw-graph` makes stable
identifiers and typed relationships navigable without repository-wide grep and
proves that the derived graph and freshness manifest match their sources.

This skill is a control surface, never authority. `requirements.md` remains
authoritative for requirement definitions/status, `traceability-matrix.md` for
trace/evidence relationships, and `.traceweaver/intent-contract.yml` for owner
decisions and allowed/held scope. Graph and manifest output must never write,
approve, merge, delete, supersede, or attest those sources.

## Control surface

Resolve the packaged sibling executable at
`scripts/traceweaver-tw-graph`. Every operation requires `--root <repository>`:

- `build`: materialize the ignored repository-local graph without recording an
  accepted lifecycle transition.
- `refresh --cycle-id <accepted-cycle-id>`: materialize the graph and update the
  one tracked receipt for the named cycle. Exact re-entry is idempotent; final
  same-cycle bookkeeping reconciles that receipt without opening a new review
  series.
- `check`: verify the tracked receipt against two deterministic in-memory
  builds. When local graph files exist, verify their exact bytes too; a clean CI
  clone does not need to create ignored projection files. An unchanged Git
  HEAD, tracked diff bytes, untracked file bytes, and receipt identity may reuse
  the ignored local cache; changing an already-dirty file invalidates it.
- `status`: report fresh versus stale/missing without mutating sources.
- `search --query <text>`: return source-located matching nodes.
- `related --id <stable-id>`: return adjacent typed relationships.
- `path --from <stable-id> --to <stable-id>`: return a deterministic shortest
  source-located path.
- `impact --id <stable-id>`: return downstream typed impact.
- `duplicate-candidate --id <REQ-id>`: return deterministic similarity
  candidates for human review; never merge or reject a requirement.

Operations return machine-readable JSON. A blocking freshness or provenance
condition exits non-zero with `tw_graph_finding=<reason>`.

## Lifecycle

Load the central installed/source reference
`<traceweaver-package-root>/references/tw-graph-lifecycle.md`, resolving the
package root from the install manifest or containing source plugin. After one
completed change cycle accepts authority, trace, evidence, or verified-behavior
changes, the owning work wrapper performs the final `refresh` using the stable
review-series/cycle identity, then `check`. Mechanical bookkeeping may reconcile
the same receipt without consuming a new review cycle. Review completion and every
publication wrapper require a passing `check`; they do not refresh merely to
hide staleness.

These are wrapper calls only. Do not install or mutate global, Git, or host
hooks. Do not refresh Graphify as part of the mandatory check.

## Graphify boundary

Graphify remains optional REQ-TW-089/090 enrichment. Its absence, degradation,
empty result, or semantic staleness cannot block this control surface and cannot
satisfy `tw-graph check`. Use Graphify context only as corroborated navigation;
never copy its claims into authority or mandatory freshness evidence.

## Safety and held claims

- Writes are limited to `.traceweaver/graph/`, ignored cache/ledger state, and
  the tracked `.traceweaver/tw-graph-freshness.json` receipt; authority inputs
  are read-only.
- In-repository symlink aliases are canonicalized to their regular-file target;
  broken, looping, non-file, generated-state, or repository-escaping links are
  refused.
- The projection structurally excludes only its own graph/manifest/state to
  prevent self-hash recursion; it does not use a hand-maintained source
  allowlist to shrink authority closure.
- Generated traceability views, the bounded snapshot, semantic-HTML cutover,
  active-host installation, staging, publication, release, and deploy require
  their separate gates.

## Output and next step

Report the operation, freshness state, baseline/manifest/graph hashes, closure
count, result locators, and any held reason. After a successful accepted-cycle
refresh/check, the next command is the scoped `tw-code-review` or
`tw-doc-review`; before publication it is the applicable publication wrapper
only after that wrapper independently repeats `tw-graph check`.
