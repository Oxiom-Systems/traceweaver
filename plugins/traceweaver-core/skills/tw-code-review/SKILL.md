---
name: tw-code-review
description: TraceWeaver-controlled code review wrapper. Use when reviewing code, scripts, skill behavior, manifests, runtime harnesses, or behavior-bearing changes that must first pass traceability checks before CE code review.
---

<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-049; trace=TRACE-TW-023; ver=VER-TW-032 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=review-wrapper-skill; req=REQ-TW-065; trace=TRACE-TW-048; ver=VER-TW-061 -->

# TraceWeaver Code Review

## Purpose

Run code review as a TraceWeaver-controlled review step instead of a raw CE
review. This wrapper preserves the CE reviewer behavior while requiring
authority, traceability, verification, validation, and held-claim checks before
review findings can be treated as accepted TraceWeaver input.

## Required Authority Inputs

Before review, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- relevant `.traceweaver/` gap, change, exception, task, or trace records when
  the changed behavior depends on them

If any required authority input is missing, stale, or insufficient for the
reviewed change, stop and report the missing authority. Do not run raw
`ce-code-review` as a substitute for TraceWeaver closure.

## Workflow

1. Identify the code, script, skill, manifest, runtime harness, or
   behavior-bearing diff under review.
2. Identify the claimed requirement, authority source, implementation links,
   test-first evidence, verification evidence, validation question, and held
   claims.
3. Classify the review target using the operating-mode policy. In
   Implementation Gate Mode, pass the changed behavior-bearing files plus
   linked tests, fixtures, and smokes to `tw-traceability-check` for code-anchor
   scanning. Use whole-repo scanner output only for audit/baseline debt unless
   publication or release claims depend on it.
4. Run `tw-traceability-check` on the review target before CE review.
5. If `tw-traceability-check` returns blocked, needs revision, missing
   test-first evidence, missing verification, missing validation, dark behavior,
   stale evidence, or an unsupported done/release claim, stop before accepted
   code review and report the exact structured traceability findings before any
   CE findings.
6. If the only blocker is missing code/test anchors with unambiguous reviewed
   authority, report the trace-anchor authoring path and route back to
   `tw-work` through `tw-auto`. If the blocker is
   `CTA-UNRESOLVED-ANCHOR-MAPPING`, keep code review acceptance blocked and
   report the unresolved mapping without routing agents to broad authority
   review unless the finding changes task authority, requirement meaning,
   verification authority, or accepted scope. Do not rewrite source or matrix
   files from `tw-code-review`.
7. Run `ce-code-review` only after the traceability check is passable or the
   remaining limitation is explicitly recorded as an approved held condition.
8. Keep `ce-code-review` in TraceWeaver no-publication mode. It may report
   findings and policy-allowed local fixes, but it must not stage, commit, push,
   open PRs, update PRs, or claim release/clean-replacement readiness.
9. Report code-review findings together with the traceability result, test-first
   evidence, verification evidence, validation path, held claims, and next
   required review or human decision.

## Highest-Level Handoff Discipline

`tw-code-review` owns the traceability preflight for code-like review. Do not
return standalone `tw-traceability-check` as the normal next user command unless
the user explicitly asked for a traceability diagnostic or audit.

If review is blocked by missing unambiguous anchors, route the next action to
`/tw-work ...` or `/tw-auto ...` so the work loop can author anchors and rerun
review. If review is clean, recommend `/tw-work record ...` for the clean review
state or scoped `/tw-doc-review ...` when authority/status/hash records changed.
If unresolved mappings or authority problems block acceptance, return the exact
human decision or highest-level wrapper needed to repair the work.

## Output

Return:

- review target
- baseline ID/hash and authority used
- `tw-traceability-check` result
- structured traceability findings, preserving severity, status, affected IDs,
  file/line anchors when available, claim impact, and remediation
- CE code-review coverage and findings
- test-first evidence reviewed, or approved not-applicable/exception status
- verification evidence reviewed
- validation question/path reviewed
- open gaps, dark behavior, held claims, and unsupported claims
- whether the review may be used as accepted TraceWeaver input
- highest-level next TraceWeaver wrapper command, review, or human decision

## Gate

Do not claim engineering-complete, package-ready, release-ready, upstream-ready,
clean CE replacement, enforcing behavior, publication readiness, or PR readiness
from `tw-code-review` unless the traceability, verification, validation, and
publication gates have separately passed.

Do not collapse structured TraceWeaver findings into prose-only summaries.
Report them before CE code-review findings so blocked or held traceability
claims cannot be hidden by a clean CE review.
