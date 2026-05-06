---
name: tw-traceability-check
description: TraceWeaver adapter for checking whether plans, code, PRs, docs, or release evidence trace to approved authority and verification/validation evidence. Use during review before engineering-complete or release-ready claims.
---

# TraceWeaver Traceability Check

## Purpose

Check whether meaningful behavior has a visible chain from need and approved
authority through implementation, verification, and validation evidence.
When that chain is broken, return actionable reviewer-style findings instead
of only returning a prose status.

## Runtime Scope

This adapter routes to `systems-engineering-traceability`. It may also route to
`requirements-reviewer` when the authority quality is weak or unclear.

Load `references/structured-findings.md` when a check can return a traceability
gap, blocked claim, held claim, or review finding.

## Process

1. Identify the behavior, plan, PR, document, or release surface under review.
2. Identify the claimed need, requirement, decision, risk, gap, task, and
   verification/validation evidence.
3. Use `systems-engineering-traceability` to check for orphan behavior,
   dark-code candidates, missing bidirectional links, stale evidence, and
   missing verification or validation paths.
4. Use `requirements-reviewer` if the requirement itself is ambiguous,
   unverifiable, unapproved, or source-free.
5. Emit structured findings for traceability failures. Include severity,
   status, title, evidence, affected requirement/trace/evidence IDs, file path
   and line range when available, blocked/allowed/held claim impact, and
   concrete remediation.
6. In Codex contexts with a concrete file/line anchor, use
   `::code-comment{...}` for findings that should appear inline. Use normal
   Markdown findings when the issue is cross-file, artifact-level, or lacks a
   stable line anchor.
7. Record the overall result as `Pass`, `Needs revision`, `Blocked`,
   `Approved gap required`, or `Human decision`.

## Output

Return:

- traceability status
- authority chain
- implementation links
- verification status
- validation status
- gaps and risks
- dark-code candidates
- structured findings with severity, status, affected IDs, evidence, file/line
  anchors when available, claim impact, and remediation
- Codex `::code-comment{...}` inline findings when a stable file and line range
  exists
- allowed claims
- held claims

## Gate

Do not claim engineering-complete, package-ready, release-ready, or
upstream-ready status when behavior lacks approved authority, implementation
links, verification evidence, or a validation path.

Do not mark traceability as passed while any P0/P1 blocker, unapproved held
claim, missing authority, stale matrix/hash, missing verification/validation
path, dark behavior, missing code/test anchor, dead-TDD candidate, or
unsupported done/release claim remains unresolved.
