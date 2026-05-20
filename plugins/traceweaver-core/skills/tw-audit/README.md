<!-- TRACEWEAVER: file-role=audit-wrapper-readme; req=REQ-TW-061; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-readme; req=REQ-TW-062; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-readme; req=REQ-TW-063; trace=TRACE-TW-052; ver=VER-TW-065 -->

# tw-audit

`tw-audit` is the TraceWeaver project audit wrapper. Use it when a project,
branch, PR, closure claim, requirement, or changed-file scope needs a visible
check for:

- approved requirement authority
- Intent Contract and matrix consistency
- code/test trace anchors
- verification evidence
- validation or structured acceptance evidence
- generated traceability view drift
- candidate dark, orphaned, obsolete, duplicate, or similar behavior

It is an audit front door only. It does not implement fixes, remove code,
merge duplicate behavior, approve requirements, mark work complete, publish
changes, or claim release readiness.

## Required Inputs

Load the authority triad before auditing:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`

Also load the audit scope and any relevant validation or acceptance artifacts,
usually under `docs/validation/`.

If authority files are missing, report an authority bootstrap gap instead of
continuing as if the audit passed.

## Modes

- Changed-scope audit: branch, PR, diff, changed-file list, or explicit files.
- Whole-repo audit: baseline scan for dark, orphaned, obsolete, duplicate,
  similar, or anchor-only behavior.
- Closure audit: task, requirement, PR, release, or acceptance wording claims
  complete, done, accepted, closed, satisfied, or release-ready.

## Checks

`tw-audit` routes through existing TraceWeaver evidence gates:

- `tw-traceability-check` for authority and traceability findings
- `traceweaver-check-code-anchors` for code/test anchor evidence
- `traceweaver-check-acceptance-results` for structured acceptance closure
- generated-view generator and drift smoke when generated traceability views
  are present
- `requirements-reviewer` when requirement quality, acceptance criteria, or
  closure wording is weak or unclear
- `systems-engineering-traceability` for candidate dark, orphaned, obsolete,
  duplicate, similar, missing-verification, and missing-validation findings

## Output

Return structured findings before summary text. Include:

- audit scope and mode
- authority triad status
- requirement-quality status
- traceability and code/test anchor status
- verification status
- validation or acceptance status
- generated-view drift status when applicable
- candidate dark-behavior findings
- allowed claims
- held claims
- next highest-level TraceWeaver wrapper or exact human decision

## Held Claims

`tw-audit` must not claim traceability-complete, requirement-complete,
validation-complete, engineering-complete, publication-ready, release-ready,
package-ready, upstream-ready, clean replacement, automatic cleanup authority,
deletion authority, or merge/deprecation authority.

When findings require mutation, route to `tw-plan`, `tw-work`,
`tw-requirements-review`, `tw-doc-review`, or a human decision depending on the
authority state.
