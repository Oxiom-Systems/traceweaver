---
name: tw-traceability-check
description: TraceWeaver adapter for checking whether plans, code, PRs, docs, or release evidence trace to approved authority and verification/validation evidence. Use during review before engineering-complete or release-ready claims.
---

# TraceWeaver Traceability Check

## Purpose

Check whether meaningful behavior has a visible chain from need and approved
authority through implementation, verification, and validation evidence.

## Runtime Scope

This adapter routes to `systems-engineering-traceability`. It may also route to
`requirements-reviewer` when the authority quality is weak or unclear.

## Process

1. Identify the behavior, plan, PR, document, or release surface under review.
2. Identify the claimed need, requirement, decision, risk, gap, task, and
   verification/validation evidence.
3. Use `systems-engineering-traceability` to check for orphan behavior,
   dark-code candidates, missing bidirectional links, stale evidence, and
   missing verification or validation paths.
4. Use `requirements-reviewer` if the requirement itself is ambiguous,
   unverifiable, unapproved, or source-free.
5. Record findings as `Pass`, `Needs revision`, `Blocked`, `Approved gap
   required`, or `Human decision`.

## Output

Return:

- traceability status
- authority chain
- implementation links
- verification status
- validation status
- gaps and risks
- dark-code candidates
- allowed claims
- held claims

## Gate

Do not claim engineering-complete, package-ready, release-ready, or
upstream-ready status when behavior lacks approved authority, implementation
links, verification evidence, or a validation path.
