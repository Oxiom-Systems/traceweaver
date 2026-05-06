---
name: tw-code-review
description: TraceWeaver-controlled code review wrapper. Use when reviewing code, scripts, skill behavior, manifests, runtime harnesses, or behavior-bearing changes that must first pass traceability checks before CE code review.
---

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
- relevant `.traceweaver/` gap, change, exception, task, or trace records when
  the changed behavior depends on them

If any required authority input is missing, stale, or insufficient for the
reviewed change, stop and report the missing authority. Do not run raw
`ce-code-review` as a substitute for TraceWeaver closure.

## Workflow

1. Identify the code, script, skill, manifest, runtime harness, or
   behavior-bearing diff under review.
2. Identify the claimed requirement, authority source, implementation links,
   verification evidence, validation question, and held claims.
3. Run `tw-traceability-check` on the review target before CE review.
4. If `tw-traceability-check` returns blocked, needs revision, missing
   verification, missing validation, dark behavior, stale evidence, or an
   unsupported done/release claim, stop before accepted code review and report
   the exact structured traceability findings before any CE findings.
5. Run `ce-code-review` only after the traceability check is passable or the
   remaining limitation is explicitly recorded as an approved held condition.
6. Keep `ce-code-review` in TraceWeaver no-publication mode. It may report
   findings and policy-allowed local fixes, but it must not stage, commit, push,
   open PRs, update PRs, or claim release/clean-replacement readiness.
7. Report code-review findings together with the traceability result, verification
   evidence, validation path, held claims, and next required review or human
   decision.

## Output

Return:

- review target
- baseline ID/hash and authority used
- `tw-traceability-check` result
- structured traceability findings, preserving severity, status, affected IDs,
  file/line anchors when available, claim impact, and remediation
- CE code-review coverage and findings
- verification evidence reviewed
- validation question/path reviewed
- open gaps, dark behavior, held claims, and unsupported claims
- whether the review may be used as accepted TraceWeaver input
- next required command, review, or human decision

## Gate

Do not claim engineering-complete, package-ready, release-ready, upstream-ready,
clean CE replacement, enforcing behavior, publication readiness, or PR readiness
from `tw-code-review` unless the traceability, verification, validation, and
publication gates have separately passed.

Do not collapse structured TraceWeaver findings into prose-only summaries.
Report them before CE code-review findings so blocked or held traceability
claims cannot be hidden by a clean CE review.
