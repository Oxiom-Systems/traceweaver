---
name: tw-traceability-check
description: TraceWeaver adapter for checking whether plans, code, PRs, docs, or release evidence trace to approved authority and verification/validation evidence. Use during review before engineering-complete or release-ready claims.
---

<!-- TRACEWEAVER: file-role=traceability-skill; req=REQ-TW-055; trace=TRACE-TW-028; ver=VER-TW-037 -->
<!-- TRACEWEAVER: file-role=semantic-audit-traceability-skill; req=REQ-TW-063; trace=TRACE-TW-044; ver=VER-TW-056 -->
<!-- TRACEWEAVER: file-role=traceability-skill; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Traceability Check

## Purpose

Check whether meaningful behavior has a visible chain from need and approved
authority through implementation, verification, and validation evidence.
When that chain is broken, return actionable reviewer-style findings instead
of only returning a prose status.

## Runtime Scope

This adapter routes to `systems-engineering-traceability`. It may also route to
`requirements-reviewer` when the authority quality is weak or unclear.

## Required Inputs

Before checking traceability, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- the plan, code, PR, document, release evidence, changed-file scope, or audit
  scope under review
- claimed requirement IDs, trace IDs, implementation artifacts, verification
  evidence, validation procedure/evidence or held-validation record, and
  blocked/held claims
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/code-trace-anchor-contract.md` for code/test surfaces
- skill-local `references/trace-anchor-authoring.md` for authoring proposals
- skill-local `references/structured-findings.md`

Use the TraceWeaver-packaged `systems-engineering-traceability` and
`requirements-reviewer` skills as distilled systems-engineering knowledge
sources for authority, verification, validation, gaps, candidate dark behavior,
and requirement-quality checks.

Load `references/traceweaver-operating-modes.md` before deciding whether the
current surface is Authority Baseline Mode, Implementation Gate Mode, or
Publication Mode.

Load `references/code-trace-anchor-contract.md` and run the skill-local
`scripts/traceweaver-check-code-anchors` scanner when a behavior-bearing code,
script, skill, fixture, smoke, or test surface is reviewed in Implementation
Gate Mode. Default scanner scope is changed behavior-bearing files plus linked
tests, fixtures, and smokes; whole-repo scans are audit/baseline mode.

Load `references/trace-anchor-authoring.md` when missing anchors need to be
proposed or routed back to TraceWeaver-controlled work. In review-only mode,
report the proposal or pause condition; do not mutate source or matrix files.
Only a TraceWeaver-controlled work-loop context may run the skill-local
`scripts/traceweaver-author-code-anchors` helper in apply mode, and the current
accepted proof is fixture-only until project-write gates pass.

Load `references/structured-findings.md` when a check can return a traceability
gap, blocked claim, held claim, or review finding.

## Process

1. Identify the behavior, plan, PR, document, or release surface under review.
2. Identify the claimed need, requirement, decision, risk, gap, task, and
   verification/validation evidence.
3. Use `systems-engineering-traceability` to check for orphan behavior,
   dark-code candidates, missing bidirectional links, stale evidence, and
   missing verification or validation paths.
4. In Implementation Gate Mode for behavior-bearing code or tests, run the
   skill-local code-anchor scanner before review closure. Treat missing anchors,
   unresolved mapping JSONL records, stale requirement IDs, dead-TDD candidates,
   missing matrix paths, and missing verification anchors as structured
   TraceWeaver findings.
5. If an anchor can be authored from unambiguous reviewed authority, return the
   authoring proposal or route to the work loop. If only a per-artifact anchor
   mapping is ambiguous, report the unresolved mapping finding and block
   traceability-complete, review acceptance, done, publication, and release
   claims without broad authority churn. If task authority, requirement meaning,
   verification authority, accepted scope, or material authority is ambiguous,
   contradictory, incomplete, missing, or stale, return a human-decision pause
   instead of inventing anchors.
6. Use `requirements-reviewer` if the requirement itself is ambiguous,
   unverifiable, unapproved, or source-free.
7. Emit structured findings for traceability failures. Include severity,
   status, title, evidence, affected requirement/trace/evidence IDs, file path
   and line range when available, blocked/allowed/held claim impact, and
   concrete remediation.
8. In Codex contexts with a concrete file/line anchor, use
   `::code-comment{...}` for findings that should appear inline. Use normal
   Markdown findings when the issue is cross-file, artifact-level, or lacks a
   stable line anchor.
9. Record the overall result as `Pass`, `Needs revision`, `Blocked`,
   `Approved gap required`, or `Human decision`.

## Highest-Level Handoff Discipline

`tw-traceability-check` is a standalone lower gate only for explicit
traceability diagnostics, audit mode, or baseline-authority review. In normal
implementation and review flow, `tw-code-review`, `tw-doc-review`, `tw-work`,
and `tw-auto` own this check.

When traceability passes, recommend the highest-level next wrapper for the
workflow, normally `/tw-code-review ...`, scoped `/tw-doc-review ...`, or
`/tw-auto ...`. When it blocks on missing unambiguous anchors, route to
`/tw-work ...` or `/tw-auto ...` so the work loop can author or record them.
When it blocks on unresolved authority or mapping decisions, return the exact
human decision needed and keep completion, publication, and release claims held.

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
- highest-level next TraceWeaver wrapper command or exact human decision

## Gate

Do not claim engineering-complete, package-ready, release-ready, or
upstream-ready status when behavior lacks approved authority, implementation
links, verification evidence, or a validation path.

Do not mark traceability as passed while any P0/P1 blocker, unapproved held
claim, missing authority, stale matrix/hash, missing verification/validation
path, dark behavior, missing code/test anchor, dead-TDD candidate, or
unsupported done/release claim remains unresolved. A
`CTA-UNRESOLVED-ANCHOR-MAPPING` finding is a P1 traceability blocker until the
mapping is resolved or explicitly held by reviewed authority.
