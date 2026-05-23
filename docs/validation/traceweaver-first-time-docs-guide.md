---
validation_record_id: TW-VALIDATION-2026-05-23-FIRST-TIME-DOCS-GUIDE-001
status: implementation_added_verification_passed_review_passed_pr_publication_authorized_release_held
date: 2026-05-23
owner: Oxiom Systems
requirements:
  - REQ-TW-015
  - REQ-TW-016
  - REQ-TW-020
  - REQ-TW-021
  - REQ-TW-023
  - REQ-TW-041
  - REQ-TW-043
  - REQ-TW-065
trace: TRACE-TW-053
artifact: ART-TW-067
verification: VER-TW-068
validation: VAL-TW-015
---

# TraceWeaver First-Time Docs And Public Guide Validation

<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-015; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-016; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-020; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-021; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-023; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-041; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-043; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=first-time-docs-validation; req=REQ-TW-065; trace=TRACE-TW-053; ver=VER-TW-068 -->

## Validation Intent

First-time users should be able to open the GitHub README, understand what
TraceWeaver does, install or update the Codex or Claude Code plugin surface for
the `0.1.0` alpha, choose the first project command, and see which release,
runtime, and publication claims remain held.

Public Oxiom Systems visitors should be able to follow a concise
"from prompt to proof" guide without internal review IDs, local paths, protected
source text, or unsupported formal compliance claims.

## Implemented Scope

- Root `README.md` now leads with first-time install, update, first-command,
  workflow, authority-file, audit, alpha-boundary, and proof-trail sections.
- `docs/guides/traceweaver-from-prompt-to-proof.md` provides a public-safe
  guide that can be adapted for `https://oxiomsystems.com/#traceweaver`.
- The Oxiom Systems website source now includes a first-time guide section
  linking public visitors to the GitHub quick start and contact path.
- Matrix, trace record, validation record, and Intent Contract scope are updated
  for review identity.

## Held Scope

The 2026-05-23 `/tw-commit-push-pr` request authorizes the exact reviewed
TraceWeaver PR route after gates pass. Website deployment, GitHub release
publication, tag creation, release-ready, package-ready, clean CE replacement,
enforcing mode, slash-command support, unconstrained-host support,
runtime-driver binding, and autonomous publication remain held.

## Verification Plan

- Regenerate and smoke the generated TraceWeaver views.
- Run implementation-mode code-anchor scanning over the changed TraceWeaver
  documentation and evidence files.
- Run Codex discovery smoke with host runtime execution disabled.
- Run Claude plugin strict validation.
- Run `git diff --check`.
- Render or statically inspect the Oxiom Systems website guide section before
  any website publication request.

## Result

Verification passed on 2026-05-23:

- `scripts/traceweaver-generate-traceability-views --root .` passed.
- `scripts/traceweaver-smoke-traceability-generated-views` passed.
- Implementation-mode code-anchor scanner passed over the scoped TraceWeaver
  documentation and evidence set with `code_traceability_findings=0`.
- `TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery`
  passed.
- `claude plugin validate --strict .` passed.
- `git diff --check` passed.
- Public-guide hygiene scan passed for internal review IDs, local paths, raw
  standards claims, and unsupported compliance terms.
- Oxiom Systems website copy hygiene scan passed for the same public-safety
  boundary.
- Local Chrome render checks passed for the Oxiom guide section at desktop and
  mobile widths. The section was visible, had three guide cards, and had zero
  guide-section overflow findings.

Scoped review passed with no findings:

- `TW-CODE-REVIEW-2026-05-23-FIRST-TIME-DOCS-GUIDE-CLEAN-001`
- `TW-DOC-REVIEW-2026-05-23-FIRST-TIME-DOCS-GUIDE-STATUS-HASH-CLEAN-001`

Reviewer parallelism was not used; this was a main-thread scoped review. The
TraceWeaver PR publication route is authorized by the user's 2026-05-23
`/tw-commit-push-pr` request after the publication gates pass. Release tags,
GitHub Release publication, and OxiomSystems website publication remain held.
