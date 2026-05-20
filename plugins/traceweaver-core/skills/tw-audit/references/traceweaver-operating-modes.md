# TraceWeaver Operating Modes For Audit

<!-- TRACEWEAVER: file-role=audit-wrapper-operating-mode-reference; req=REQ-TW-061; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-operating-mode-reference; req=REQ-TW-063; trace=TRACE-TW-052; ver=VER-TW-065 -->

Use this reference to classify `tw-audit` work before emitting findings.

## Changed-Scope Audit

Use changed-scope audit for a branch, PR, staged diff, unstaged diff, or explicit
file list. The audit checks the changed behavior-bearing files plus linked
tests, fixtures, smokes, validation records, and authority/status files. It
should treat historical baseline debt outside the scope as context unless the
claim depends on whole-repo cleanliness.

## Whole-Repo Audit

Use whole-repo audit for baseline visibility into dark behavior, orphaned code,
obsolete behavior, duplicate/similar behavior, anchor-only coverage, missing
verification, missing validation, and unsupported audit coverage. Findings are
candidate evidence only and must route to a plan, requirement review, gap,
exception, accepted-risk record, or human decision before mutation.

## Closure Audit

Use closure audit when the user or artifact claims a requirement, task, issue,
PR, release, or validation item is complete, accepted, closed, done, satisfied,
publication-ready, or release-ready. Closure audit requires structured
acceptance evidence or a complete held-validation record. Verification evidence
alone is not enough.

## Publication Boundary

`tw-audit` never authorizes commit, push, PR, release, package, upstream,
cleanup, deletion, merge, deprecation, or clean-replacement claims. It reports
allowed and held claims, then names the next TraceWeaver wrapper or human
decision.
