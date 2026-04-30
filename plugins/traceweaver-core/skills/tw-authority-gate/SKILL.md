---
name: tw-authority-gate
description: TraceWeaver adapter for checking whether planned implementation work has approved authority before build work starts. Use before ce-work, implementation, or task execution on meaningful behavior.
---

# TraceWeaver Authority Gate

## Purpose

Block orphan implementation before work starts. Use this adapter when a plan,
task, issue, or requested change is about to become implementation work.

## Runtime Scope

This adapter routes to `requirements-reviewer` when authority quality is
unclear and to `systems-engineering-traceability` when the authority chain must
be checked.

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

## Output

Return:

- authority source
- authority status
- traceability status
- missing evidence
- allowed implementation scope
- blocked claims
- next required action

## Gate

Meaningful behavior must not proceed from task ID, agent interpretation, draft
requirement, inferred requirement, or bare risk ID alone.
