---
name: tw-debug
description: TraceWeaver-controlled debugging wrapper. Use when debugging errors, failing tests, regressions, production issues, or broken behavior while preserving TraceWeaver authority, traceability, verification, and no-publication controls.
argument-hint: "[issue reference, error message, test path, or description of broken behavior]"
---

<!-- TRACEWEAVER: file-role=debug-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-025; ver=VER-TW-034 -->
<!-- TRACEWEAVER: file-role=debug-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Debug

## Purpose

Provide the TraceWeaver entrypoint for debugging so users do not need to invoke
raw `ce-debug`. `tw-debug` keeps CE's investigation and root-cause workflow, but
wraps it in TraceWeaver authority, traceability, verification, and
no-publication controls.

This wrapper exists to keep the user-facing command surface TraceWeaver-owned.
It does not broaden implementation or publication authority.

## Required Inputs

Before fixing or changing behavior, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- relevant validation, review, trace, gap, change, exception, task, incident,
  issue, or defect records
- the failing command, stack trace, issue reference, production signal, or
  reproduction evidence supplied by the user

If no approved requirement, defect, gap, exception, or explicit user-approved
diagnostic scope authorizes a code change, run diagnosis only and stop before
implementation. Do not rewrite requirements to make the fix possible.

## Workflow

1. Classify the request as diagnosis-only, authorized local fix, authority
   clarification, or publication intent.
2. If the request is publication intent, return control to `tw-auto`,
   `tw-commit`, or `tw-commit-push-pr`; do not debug by publishing.
3. Run or require `tw-authority-gate` before any behavior-changing fix.
4. Delegate the investigation to the TraceWeaver-packaged `ce-debug` skill.
5. Keep `ce-debug` in TraceWeaver no-publication mode. It may reproduce,
   inspect, diagnose, propose a fix, implement authorized local changes, and run
   verification, but it must not stage, commit, push, open PRs, edit remote
   issues, or load publication-capable CE skills.
6. After any local fix, run the relevant verification commands and
   `tw-traceability-check` on changed behavior-bearing files and linked tests.
7. If missing anchors have unambiguous reviewed authority, route anchor writes
   back through `tw-work`. If authority is unclear, contradictory, incomplete,
   stale, or missing, pause for user input or requirements review.
8. Return the root cause, causal chain, changed files, verification evidence,
   traceability status, held claims, and next TraceWeaver review command.

## Highest-Level Handoff Discipline

`tw-debug` may diagnose without implementation. For behavior-changing fixes, it
must not leave the user with standalone `tw-authority-gate` or
`tw-traceability-check` as the normal next command. Those checks are embedded in
`tw-work`, `tw-code-review`, and `tw-auto`.

After diagnosis, return the highest-level next wrapper: `/tw-auto ...` for a
bounded bug-fix loop, `/tw-work ...` for an approved local fix, or
`/tw-code-review ...` after changed code is already ready for review. Recommend
standalone lower gates only when the user explicitly asked for that diagnostic
gate or when no higher wrapper can proceed without a human authority decision.

## Boundaries

- Do not invoke raw external CE plugin skills.
- Do not use debugging as authority to implement missing requirements.
- Do not stage files, commit, push, open PRs, update issues or PRs, publish
  artifacts, or claim release/production readiness.
- Do not claim a clean TraceWeaver review from diagnosis or a clean CE debug
  pass; route changed code through `tw-code-review` and changed authority docs
  through `tw-doc-review`.

## Output

Return:

- debug mode: `diagnosis_only`, `authorized_local_fix`, `blocked`, or `held`
- authority baseline and hash used
- reproduction status
- root cause and causal chain
- changed files, if any
- verification commands and results
- `tw-traceability-check` status for changed behavior
- open traceability findings, authority gaps, or held claims
- highest-level next TraceWeaver wrapper command or exact human decision
