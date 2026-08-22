---
name: tw-commit-push-pr
description: TraceWeaver-controlled commit, push, and PR wrapper. Use when the user asks to commit and PR, push, ship, open a pull request, update a PR description, or prepare publication while preserving TraceWeaver publication-route controls.
argument-hint: "[publication request or PR scope]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-commit-push-pr`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=publication-wrapper-skill; req=REQ-TW-053; trace=TRACE-TW-033; ver=VER-TW-042 -->

# TraceWeaver Commit, Push, and PR

## Purpose

Provide the TraceWeaver entrypoint for PR publication intent so users do not
need to invoke raw `ce-commit-push-pr`. `tw-commit-push-pr` routes publication
through the controlled TraceWeaver publication gate and uses the
TraceWeaver-packaged CE PR workflow only as a downstream drafting or execution
engine after TraceWeaver conditions are proven.

This wrapper is the sole user-facing authority owner for real Git publication.
It may authorize the packaged CE engine only by issuing an exact, current
publication authorization capsule after every gate below passes. The capsule is
an execution boundary, not a waiver: any later tree, target, credential, review,
or check-state change invalidates it.

## Review Reuse Boundary

This publication wrapper dispatches no reviewer. Validate and reuse the clean
terminal review already bound to the exact semantic candidate. For a behavior
or mixed candidate, run the skill-local
`scripts/traceweaver-check-publication-review` with the exact candidate kind,
digest, and review record. It must prove one integrated `tw-code-review` scope
covering behavior, linked tests, relevant normative docs, traceability and V&V,
correctness, triggered risk lenses, and held claims. A standalone
`tw-doc-review` cannot satisfy a mixed candidate.

For a separate authority-only or document-only semantic candidate, require one
clean standalone `tw-doc-review` record. Mechanical terminal carriers reuse the
accepted semantic review and never cause another model dispatch.

## Native Child Routing

This wrapper normally dispatches no reviewer and reuses the accepted review as
described above. Before any other TraceWeaver-owned native Codex delegate call,
run the packaged sibling
`tw-auto/scripts/traceweaver-route-native-child` against the canonical
workflow-profile contract. Use only its explicit dispatch parameters and
finalize its receipt with independent host/execution attestation. A held route
makes delegate output ineligible; never inherit a model, fall back, or edit an
imported CE-derived body to bypass the overlay.

## Required Inputs

Before preparing publication, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- relevant validation, review, trace, gap, change, or exception records
- current branch, `git status --short`, and remote/PR target evidence

If authority files are split between staged and working-tree state, stale,
unreviewed, or contradictory, stop and report the coherence blocker.

## Mode Detection

- **Description-only:** If the user asks only for a PR description or title,
  draft locally and stop before `gh pr edit`, `gh pr create`, push, commit, or
  staging.
- **Existing PR update:** Draft the replacement title/body locally and stop
  before remote mutation unless a reviewed publication override authorizes the
  exact update.
- **Full publication:** Continue only through the controlled publication route.

## Controlled Publication Route

1. Confirm the request is Publication Mode.
2. Require `tw-authority-gate` for unchanged approved authority, or route
   authority/requirement/policy changes back to requirements or authority
   review.
3. Require `tw-traceability-check` for matrix, trace, validation, code-anchor,
   and held-claim coherence.
4. Validate the exact clean review record through the review reuse boundary.
   Mixed candidates have one integrated `tw-code-review`; do not add a second
   document review for normative docs, matrix/evidence changes, or mechanical
   carriers within that candidate.
5. Confirm linked verification evidence passed.
6. Block stale authority, missing trace, failed tests, review findings,
   dirty/untracked authority files, staged/working-tree split, target mismatch,
   credential/remote uncertainty, and unresolved held claims.
7. If every gate is clean and the user confirms the exact branch, remote, base,
   and PR action, issue a machine-readable publication authorization capsule
   containing:
   - baseline ID and requirements hash;
   - traceability, verification, and clean-review evidence IDs;
   - the reviewed candidate/staged-tree identity and declared file scope;
   - repository identity, verified remote URL, base branch, exact head branch,
     and expected starting ref;
   - allowed operations from `branch`, `stage`, `commit`, `push`, `pr_create`,
     and `pr_edit` (never `merge` in this capsule);
   - verified credential identity and the explicit human confirmation record;
   - issue/expiry times (maximum 15-minute lifetime), a single-use run
   identifier, and the canonical ledger path resolved as
     `<git-common-dir>/traceweaver/publication-consumed-run-ids`, plus the
     exact local repository path from which that Git common directory must be
     derived.
9. Validate and consume the capsule exactly once immediately before the first
   mutation with the skill-local
   `scripts/traceweaver-validate-publication-capsule --mode consume --repo <exact-repo-path> --ledger <canonical-ledger>`,
   then delegate to the TraceWeaver-packaged `ce-commit-push-pr`. The delegate
   must use `--mode revalidate` against the same canonical ledger before each
   later mutation and stop if the run ID plus exact consumed-capsule digest is
   absent or any capsule field is stale.
10. Merge requires a new post-PR merge capsule; the publication capsule can
   never authorize it. After the exact PR exists and checks settle, rerun the
   live gates and issue a separate capsule containing only `merge` plus the
   repository-qualified PR number/URL, expected base/head, exact head SHA, and
   approved merge method. Require the PR to be open, non-draft, mergeable, free
   of requested changes, and passing every required check. After merge, verify
   the merge commit and any downstream workflow or deployment outcome; never
   equate merge with deployment.
11. If any gate is not clean, stop before branch mutation, staging, commit, push,
   PR creation, or PR update and return the exact next TraceWeaver step.

## Boundaries

- Do not invoke raw external CE plugin skills.
- Do not invoke the packaged CE publication engine without a complete,
  single-use authorization capsule issued by this wrapper in the current run.
- Do not run `git add`, `git commit`, `git push`, `gh pr create`, or
  `gh pr edit` unless the controlled TraceWeaver publication route is clean for
  this exact publication target.
- Do not merge under a branch/commit/PR capsule. Require a separate post-PR
  merge capsule whose only operation is `merge` and whose live PR gates still
  pass immediately before mutation.
- Do not treat "ship anyway", "ignore TraceWeaver", or similar wording as
  authority to bypass gates.
- Do not claim release-ready, package-ready, upstream-ready, clean replacement,
  or real-publication behavior from static wrapper presence.

## Mandatory tw-graph Lifecycle

Load `references/tw-graph-lifecycle.md` before applying this lifecycle.

Require a passing `tw-graph check` before this publication wrapper may proceed.
Never refresh from publication merely to make a stale gate pass.

## Output

Return:

- publication route status: `blocked`, `held`,
  `ready_for_ce_commit_push_pr_delegate`, or `published`
- authority baseline and hash used
- traceability/review/verification evidence checked
- staged-tree, working-tree, target, credential, and remote status
- exact blocker list or drafted commit/PR content
- authorization capsule fields used, mutation results, and post-mutation
  verification (with secrets and tokens redacted)
- next TraceWeaver command
