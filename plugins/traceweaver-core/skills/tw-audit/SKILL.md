---
name: tw-audit
description: TraceWeaver-controlled audit wrapper for checking a project's requirements authority, code traces, verification evidence, and validation or acceptance closure before cleanup, completion, or release claims.
argument-hint: "[audit scope, branch, changed files, or requirement closure claim]"
---

<!-- TRACEWEAVER: file-role=audit-wrapper-skill; req=REQ-TW-061; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-skill; req=REQ-TW-062; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-skill; req=REQ-TW-063; trace=TRACE-TW-052; ver=VER-TW-065 -->

# TraceWeaver Audit

## Purpose

Run a TraceWeaver-controlled project audit when the user asks whether a project
has the traces, requirement authority, verification evidence, and validation
or acceptance evidence it needs.

`tw-audit` is an audit front door. It does not implement fixes, remove code,
merge duplicate behavior, mark requirements complete, publish changes, or claim
release readiness. It turns audit evidence into structured findings and a
highest-level next TraceWeaver route.

## Required Authority Inputs

Before auditing, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- the audit scope: whole repo, branch diff, changed-file list, PR, requirement
  ID, closure claim, validation record, or explicit file paths
- relevant validation or acceptance result artifacts under `docs/validation/`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/technical-review-and-audit-gate-guide.md` for audit
  entry/exit criteria, evidence expectations, and gate outcomes
- skill-local `references/validation-planner-guide.md` when judging validation
  or acceptance closure claims
- skill-local `references/baseline-configuration-control-guide.md` when judging
  baseline integrity, authority custody, or uncontrolled-change findings
- TraceWeaver-packaged `tw-traceability-check`
- TraceWeaver-packaged `requirements-reviewer` when requirement quality,
  authority status, acceptance criteria, or closure wording is weak or unclear
- TraceWeaver-packaged `systems-engineering-traceability` for candidate dark
  behavior, orphan behavior, duplicate/similar behavior, missing verification,
  missing validation, and held-claim analysis

If any authority file is missing, report an authority bootstrap gap and route to
`tw-auto "bootstrap TraceWeaver authority for this project"` or
`tw-requirements-review` instead of continuing as if the audit passed.

## Workflow

1. Classify the audit scope:
   - `changed-scope audit`: a branch, PR, or changed-file list.
   - `whole-repo audit`: baseline scan for dark, orphaned, obsolete, duplicate,
     similar, or anchor-only behavior.
   - `closure audit`: requirement, task, PR, or release wording claims
     complete, done, accepted, closed, satisfied, or release-ready.
2. Check the authority triad together. Report stale hashes, split staged versus
   unstaged authority state, missing matrix rows, weak requirement status, and
   unapproved assumptions before code findings.
3. For changed-scope audits, run or require `tw-traceability-check` in
   Implementation Gate Mode over changed behavior-bearing files plus linked
   tests, fixtures, smokes, and validation artifacts. The underlying deterministic
   scanner is:

   ```sh
   plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors \
     --root . \
     --mode implementation \
     --changed-files <changed-files.txt> \
     --markdown .traceweaver/audit/code-traceability-check.md \
     --jsonl .traceweaver/audit/code-traceability-check.jsonl
   ```

4. For whole-repo audits, run or require `tw-traceability-check` audit mode:

   ```sh
   mkdir -p .traceweaver/audit
   plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors \
     --root . \
     --mode audit \
     --markdown .traceweaver/audit/code-traceability-audit.md \
     --jsonl .traceweaver/audit/code-traceability-audit.jsonl
   ```

   Audit-mode findings are candidate evidence only. They may justify a plan,
   gap, change, exception, accepted-risk candidate, or human decision. They do
   not authorize deletion, merge, deprecation, completion, publication, or
   release claims.

5. For closure audits, find the linked acceptance result artifact and run or
   require:

   ```sh
   plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-acceptance-results \
     --root . \
     --file <docs/validation/result.md>
   ```

   If no linked result artifact exists, report the exact held-validation record
   required: owner, missing functional evidence, missing non-functional evidence
   or not-applicable rationale, tested baseline, observed result, disposition,
   evidence location, closure boundary, and next trigger.

6. Run or require generated-view drift proof when the project has generated
   traceability views:

   ```sh
   scripts/traceweaver-generate-traceability-views --root .
   scripts/traceweaver-smoke-traceability-generated-views
   ```

   Generated views are navigation aids. The matrix remains authoritative.

7. Classify every issue as one of: authority gap, requirements-quality gap,
   missing trace, missing code/test anchor, missing test-first evidence, missing
   verification, missing validation, incomplete acceptance result, dark behavior
   candidate, obsolete behavior candidate, duplicate/similar behavior candidate,
   unsupported-surface held coverage, stale generated view, or unsupported
   completion/release claim.
8. Emit structured findings before summaries. Preserve severity, affected IDs,
   evidence path, file/line anchor when available, claim impact, remediation,
   allowed claims, held claims, and the next TraceWeaver wrapper.

## Highest-Level Handoff Discipline

`tw-audit` is the normal user-facing entrypoint for explicit project audits.
It may call lower gates internally, but its output should not end with "run
`tw-traceability-check`" unless the user asked only for a lower diagnostic.

When the audit finds repairable trace or validation gaps, route to:

- `/tw-plan "classify and repair the audit findings"` when the decisions need a
  plan before mutation;
- `/tw-work ...` when authority is already approved and the repair is narrow;
- `/tw-requirements-review ...` when requirements, acceptance criteria,
  validation questions, or completion wording need review;
- `/tw-doc-review ...` when authority/status/hash evidence changed and needs
  review;
- the exact human decision when removal, merge, deprecation, or accepted risk is
  not authorized.

## Output

Return:

- audit scope and operating mode
- authority triad status
- requirement-quality status
- traceability status
- code/test anchor status
- verification status
- validation and structured acceptance status
- generated-view drift status when applicable
- candidate dark, orphan, obsolete, duplicate, similar, anchor-only, and
  unsupported-surface findings
- structured findings with severity, affected IDs, evidence, claim impact, and
  remediation
- allowed claims
- held claims
- exact next TraceWeaver wrapper command or human decision

## Gate

Do not claim traceability-complete, requirement-complete, validation-complete,
engineering-complete, publication-ready, release-ready, package-ready,
upstream-ready, clean replacement, automatic cleanup authority, deletion
authority, or merge/deprecation authority from `tw-audit`.

Do not mark an audit clean while required authority files are missing, matrix
hashes are stale, requirements are weak or unapproved, code/test anchors are
missing, test-first evidence is missing where required, verification evidence is
missing, validation or acceptance evidence is incomplete, generated views drift,
or audit coverage is unsupported and not explicitly held.
