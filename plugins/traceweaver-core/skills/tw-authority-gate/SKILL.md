---
name: tw-authority-gate
description: TraceWeaver adapter for checking whether planned implementation work has approved authority before build work starts. Use before ce-work, implementation, or task execution on meaningful behavior.
---

<!-- TRACEWEAVER: file-role=authority-gate-wrapper-skill; req=REQ-TW-041; trace=TRACE-TW-020; ver=VER-TW-029 -->
<!-- TRACEWEAVER: file-role=systems-engineering-prompt-contract-skill; req=REQ-TW-061; trace=TRACE-TW-044; ver=VER-TW-056 -->
<!-- TRACEWEAVER: file-role=authority-gate-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Authority Gate

## Purpose

Block orphan implementation before work starts. Use this adapter when a plan,
task, issue, or requested change is about to become implementation work.

## Runtime Scope

This adapter routes to `requirements-reviewer` when authority quality is
unclear and to `systems-engineering-traceability` when the authority chain must
be checked.

## Required Inputs

Before returning an authority decision, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- the planned task, plan, changed-file scope, or requested behavior
- skill-local `references/baseline-configuration-control-guide.md` when judging
  baseline identity, change control, or authority custody
- the claimed requirement IDs, trace IDs, verification target, validation
  question, baseline ID/hash, and must-not-change boundaries

Use the TraceWeaver-packaged `requirements-reviewer` and
`systems-engineering-traceability` skills as the distilled
systems-engineering knowledge source for requirement quality, authority,
traceability, verification, validation, gaps, and held claims.

## Process

1. Identify the planned behavior or implementation task.
2. Find the claimed authority: approved requirement, approved design decision,
   first-class approved risk control, approved traceability gap, or task that
   closes directly to one of those authorities.
3. If the claimed authority is a requirement or acceptance criterion, use
   `requirements-reviewer` to check approval readiness.
4. Use `systems-engineering-traceability` to check whether the behavior traces
   to approved authority and planned verification/validation evidence.
5. Return `Proceed`, `Reduce scope`, `Revise`, `Human decision`, or `Blocked`.

## Highest-Level Handoff Discipline

`tw-authority-gate` is a standalone lower gate only for explicit authority
diagnostics or baseline-authority review. In normal implementation flow,
`tw-work` and `tw-auto` own this gate before packaged `ce-work` runs.

When the gate passes, recommend `/tw-work ...` or `/tw-auto ...` as the next
user-facing command rather than asking the user to run more lower gates. When it
blocks, return the exact authority decision needed and the highest-level wrapper
that can record or repair it, if one can proceed safely.

## Output

Return:

- authority source
- authority status
- traceability status
- missing evidence
- allowed implementation scope
- blocked claims
- highest-level next TraceWeaver wrapper command or exact human decision

## Gate

Meaningful behavior must not proceed from task ID, agent interpretation, draft
requirement, inferred requirement, or bare risk ID alone.
