# TraceWeaver 0.3 Repair — Amendment 3: `tw-auto` Main Compatibility

**Status:** draft. This document is not authority until the owner externally
approves its final, exact whole-file SHA-256 after one independent Sol document
review records `ACCEPT` against that same SHA.

## Purpose and inherited authority

This is a narrow, one-time compatibility correction during the authorized 0.3.0
release integration. It supplements, but does not rewrite, Amendment 2:

- Amendment 2 whole-file SHA-256:
  `0b67c4bfeaf23e849a261976011e0f537437170cb2ee370fff4d0d947d8dbf1f`
- owner approval: the owner approved that exact Amendment 2 SHA and authorized
  its PR, merge, tag, and release sequence;
- Sol receipt: `SOL-AMEND2-2026-07-23-9F1BEAEF` (`ACCEPT`).

The owner authorization is limited to resolving the identified semantic
compatibility failure. It does not establish or guarantee a TraceWeaver overhead
level, and it does not expand U7, runtime, enforcement, deployment, dogfood, or
universal-host claims.

## Fixed release-integration facts

- Release worktree:
  `/Users/hanneszietsman/CrypotAI/TraceWeaver/.worktrees/codex/traceweaver-0.3-repair`
- Current branch: `codex/traceweaver-0.3-release`
- Current release branch and repair ref HEAD:
  `6f1530335854f384076aa83ec5e448bc44d817e1`
- Repair lineage before release ratification: `474771e6073a4c49a52bc7ea0f540db68418271c`
- Pinned current `origin/main`: `260b29d8bd88c6c00802893f7900d4b4987b8f52`
- Current pre-addendum, pre-fix staged index tree:
  `1d78bdb5e27e2802a98a4ef8301951e17e42a266`

The current integration has resolved exactly these six expected manual merge
conflicts, as allowed by Amendment 2:

1. `.traceweaver/intent-contract.current.yml`
2. `.traceweaver/intent-contract.yml`
3. `CHANGELOG.md`
4. `docs/generated/traceability-dashboard.md`
5. `docs/generated/traceability-data.json`
6. `requirements.md`

No unresolved merge path is part of this addendum. The stated index-tree SHA is
evidence only; it does not authorize a ref change or publication.

## Observed compatibility failure

All current integration checks pass except this focused behavior check:

```text
TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior
tw_auto_routes_plan_wrapper=failed_missing_pattern pattern=tw-plan
```

Current `main` requires `tw-auto` to retain an explicit `tw-plan` planning-wrapper
route. The repaired read-only profile router removed that route. This is a
semantic compatibility defect, not a permission to insert a comment or
test-string-only workaround.

## Authorized delta

Beyond the Amendment 2 integration/release paths, exactly two manual additions
are authorized:

1. this addendum file; and
2. a semantic edit to
   `plugins/traceweaver-core/skills/tw-auto/SKILL.md`.

The Amendment 2-authorized files
`docs/plans/2026-07-22-traceweaver-roadmap.md` and
`docs/validation/traceweaver-plugin-0.3-release.md` may cite this amendment.
No other file may be manually changed for this correction. A second semantic
incompatibility outside those approved paths stops the release integration for a
new owner decision.

The `tw-auto` edit must restore an explicit, executable planning-wrapper route
to `tw-plan` that remains compatible with current `main`. It must preserve every
U0–U6 repair boundary:

- the read-only master orchestrates and never implements or reviews;
- child role, model, and selected profile are frozen before handoff;
- authority and V&V preflight remain required;
- scoped-review and terminal-receipt caps remain in force;
- there are no publication, deployment, or dogfood-completion claims; and
- default `PreToolUse` behavior remains absent.

The route must describe actual workflow behavior, not merely mention `tw-plan`
to satisfy a textual assertion.

## Required integration and review sequence

1. An independent Sol document review must first return `ACCEPT` for the final
   exact bytes of this addendum. The owner must then externally approve that
   exact whole-file SHA in this task.
2. The same Terra release integrator makes only the permitted `tw-auto` and
   allowed citation edits, then runs the required builder checks without touching
   any other unapproved path.
3. After steps 1 and 2, this amendment authorizes exactly one **local,
   unpublished integration merge commit** on `codex/traceweaver-0.3-release`.
   It is evidence for review only: it must not be pushed, proposed in a PR,
   merged to `main`, tagged, or released at this stage.
4. A fresh Terra verifier confirms the semantic planning route and runs the full
   focused repair and release gates, including the previously failing
   `traceweaver-smoke-tw-skill-behavior` check. Its evidence binds the exact
   local integration commit SHA and tree SHA.
5. One independent Sol release review accepts that exact local integration
   commit and tree SHA, checks the approved-path boundary, and verifies that the
   correction preserves the U0–U6 limits above.
6. Only after both the Terra and Sol release reviews accept may the authorized
   push, PR, merge to `main`, tag, and release sequence continue under
   Amendment 2.

This addendum contains no mutable review receipt and no self-reported final
hash. After an independent Sol document `ACCEPT` receipt has reviewed the final
whole-file bytes, the owner must approve that exact whole-file SHA externally in
this task. The approved document is immutable after that approval; evidence of
approval belongs in the PR/release record, not in this file.

## Rollback before publication

If the correction fails verification, exceeds the approved paths, or finds a
second semantic incompatibility, stop.

Before approval and before a local integration commit, rollback is `git merge
--abort` as applicable plus removal of this untracked draft. After owner
approval, the approved amendment is evidence and must be preserved rather than
removed.

If the permitted local integration commit is rejected, do not use destructive
reset. Retain it by renaming or copying it to an evidence branch named
`codex/traceweaver-0.3-release-rejected-<shortsha>`, abandon that branch for
publication, and create any retry branch/worktree freshly from authority parent
`6f1530335854f384076aa83ec5e448bc44d817e1` and pinned
`origin/main` `260b29d8bd88c6c00802893f7900d4b4987b8f52` only under renewed
owner authority. `main`, remote branches, tags, and releases remain untouched.
Do not push, merge to `main`, tag, release, delete, or overwrite any existing
release artifact as part of rollback.
