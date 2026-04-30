---
name: tw-requirements-review
description: TraceWeaver adapter for reviewing whether requirements, needs, acceptance criteria, or planning statements are good enough to become implementation authority. Use before planning treats requirements as approved authority.
---

# TraceWeaver Requirements Review

## Purpose

Run the TraceWeaver requirements-quality gate before a planning document,
requirements document, issue, PRD, or acceptance criteria set becomes
implementation authority.

## Runtime Scope

This adapter routes to `requirements-reviewer`. It does not replace or redefine
that skill.

## Process

1. Load the `requirements-reviewer` skill.
2. Review the supplied requirements, needs, acceptance criteria, or planning
   statements.
3. Classify each candidate item as requirement, need, idea, assumption, design
   note, constraint, acceptance criterion, verification evidence, validation
   evidence, or traceability gap.
4. Mark weak, ambiguous, unverifiable, source-free, or unapproved requirements
   as `Needs revision`, `Blocked`, `Human decision`, or `Reclassify`.
5. State whether the reviewed material can become implementation authority.

## Output

Return:

- requirements reviewed
- authority-ready requirements
- blocked requirements
- required revisions
- human decisions
- verification/validation gaps
- traceability impact

## Gate

Do not let weak or unapproved requirements become implementation authority.
If the team accepts a weak requirement, require an approved gap, accepted risk,
design decision, or change-control exception with owner, reason, allowed use,
and review condition.
