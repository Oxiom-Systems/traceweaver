---
name: tw-work
description: TraceWeaver-controlled implementation worker. Use when applying approved implementation work through TraceWeaver authority, code-anchor authoring, verification, traceability, and no-publication controls before review.
argument-hint: "[approved task or plan path]"
---

<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-057; trace=TRACE-TW-042; ver=VER-TW-054 -->
<!-- TRACEWEAVER: file-role=implementation-worker-skill; req=REQ-TW-056; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Work

## Purpose

Implement approved behavior through the TraceWeaver work loop. `tw-work` is the
TraceWeaver implementation facade that `tw-auto` calls instead of raw `ce-work`.
It keeps the familiar CE worker as the underlying coding engine, but adds the
TraceWeaver responsibilities that must happen during implementation: authority
visibility, trace-anchor authoring, verification evidence, matrix evidence, and
no-publication handoff back to `tw-auto`.

Use `tw-work` for behavior-bearing code, scripts, skill instructions, fixtures,
smokes, manifests, runtime harnesses, and validation artifacts. Do not use it to
approve or rewrite requirements.

## Required Inputs

Before changing meaningful behavior, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- skill-local `references/trace-anchor-authoring.md`
- any relevant `.traceweaver/` task, gap, change, exception, trace, or evidence
  records

If authority is missing, contradictory, stale, incomplete, or requires a material
requirements change, stop with a human-decision pause. Do not infer, rewrite, or
broaden requirements to make implementation possible.

## Authority-Gate Preflight

`tw-work` is the only implementation entrypoint. Immediately before it delegates
to the TraceWeaver-packaged `ce-work` engine, it must run or require
`tw-authority-gate` for the exact approved task, plan, changed-file scope,
requirement IDs, trace IDs, verification target, validation question, baseline
ID/hash, and must-not-change boundaries.

The authority-gate result must be explicit in the work output. If the gate is
missing, stale, contradictory, incomplete, split between staged and working
state, tied to unreviewed requirements, or cannot identify the allowed
implementation scope, `tw-work` must stop before packaged `ce-work` and return
the exact missing authority or human decision needed.

When the gate passes, `tw-work` passes the approved authority capsule to
packaged `ce-work` in no-publication mode. Packaged `ce-work` remains the coding
engine only; it does not approve authority, traceability, review completion, or
publication.

## Workflow

1. Confirm the run is Implementation Gate Mode. If it is Authority Baseline Mode
   or Publication Mode, return control to `tw-auto` with that classification.
2. Run the authority-gate preflight above before implementation.
3. Invoke the TraceWeaver-packaged `ce-work` implementation flow in
   no-publication mode with the approved authority capsule, verification target,
   changed-file scope, and matrix-update requirement.
4. Build the changed-file scope from behavior-bearing files plus linked
   tests/fixtures/smokes, including newly created untracked files. Keep authority
   docs out of the code-anchor scanner unless they are explicitly part of the
   implementation review scope.
5. Run the skill-local code-anchor scanner from `tw-traceability-check` on that
   changed-file scope before review.
6. Run the automatic trace-anchor authoring loop below for scanner findings
   where the mapping is unambiguous. When only a per-artifact anchor mapping is
   ambiguous, skip that one anchor mutation, record an unresolved mapping
   candidate, and keep applying unrelated clear anchors. This is a mandatory
   `tw-work` work-loop step, not a manual follow-up for the user.
7. Rerun the scanner after authoring with any unresolved mapping records. If the
   scanner remains blocked, stop with the structured traceability finding and
   return control to `tw-auto`.
8. Run the required verification commands for the implemented slice.
9. When implementation, verification, scanner, and trace/matrix updates are
   complete, `tw-work` may perform review-staging for an explicit scoped file
   list that belongs to this work item. Review-staging is allowed only to make
   `tw-code-review` / `tw-doc-review` artifact identity coherent. It is not
   publication authority.
10. Return control to `tw-auto` with changed files, staged files when
   review-staging was used, verification evidence, source-anchor changes,
   matrix evidence changes, open gaps, held claims, and the next review command.

## Authoring Rules

- Author module/file premise anchors, behavior-entrypoint anchors, and
  verification anchors at useful hierarchy boundaries.
- Do not annotate every helper or private subfunction unless it independently
  carries requirement-level behavior or a reviewed finding requires it.
- Write source anchors and matrix Code Anchor Evidence together, or accept
  neither as complete.
- Pause without mutation when task authority, requirement meaning, verification
  authority, accepted scope, or material authority is unclear, contradictory,
  incomplete, stale, missing, or implies a requirements change. When only one
  artifact's anchor mapping is ambiguous, skip that anchor write, record the
  unresolved mapping, and let `tw-traceability-check` block traceability-complete
  and review/publication claims.
- Generated, vendored, cosmetic, mechanical, or externally owned files may omit
  anchors only when matrix evidence or an approved exception records why.

## Automatic Trace-Anchor Authoring Loop

`tw-work` owns trace closure during implementation. After the underlying
TraceWeaver-packaged `ce-work` step changes behavior-bearing code, scripts,
skills, fixtures, smokes, or tests, `tw-work` must:

1. Derive the changed-file scope from staged changes, unstaged tracked changes,
   and untracked files, then narrow it to implementation files and linked
   verification artifacts for the current task.
2. Resolve the authority mapping for each target from accepted requirements,
   Intent Contract/matrix rows, task capsule, and verification evidence:
   `REQ-ID`, `TRACE-ID`, `VER-ID`, artifact role, target path, and anchor level.
3. Run `traceweaver-check-code-anchors` in implementation mode for that scoped
   file list.
4. For missing file-role, entrypoint, or verification anchors with an
   unambiguous mapping, run `traceweaver-author-code-anchors` in
   `--mode apply --work-loop` mode. Use file-level anchors for module/file
   premises, entrypoint anchors for requirement-bearing behavior entrypoints,
   and verification anchors for tests/fixtures/smokes. For per-artifact mapping
   ambiguity, run the helper with `--skip-ambiguous-mapping` and
   `--unresolved-mappings <path>` so it records the skipped target without
   mutating the source or matrix.
5. Accept the authoring result only when the helper writes the source anchor and
   the matching `traceability-matrix.md` Code Anchor Evidence row in the same
   transaction.
6. Rerun `traceweaver-check-code-anchors` on the same scoped files, passing the
   unresolved mapping JSONL when any anchor write was skipped. Require either a
   pass or an explicitly held `CTA-UNRESOLVED-ANCHOR-MAPPING` finding before
   handing the work to `tw-code-review`; unresolved mappings block review
   acceptance, done, traceability-complete, and publication claims.
7. Include all changed implementation files, verification artifacts,
   `traceability-matrix.md`, and any scoped evidence/status files in
   review-staging. Do not stage unrelated authority docs or historical baseline
   debt.

Pause without mutation and return control to `tw-auto` when task authority,
requirement meaning, verification authority, accepted scope, or material
authority is missing, ambiguous, contradictory, stale, points to a missing
verification ID, or would require changing requirements. When the ambiguity is
limited to a specific artifact's anchor mapping, do not pause the whole work
loop: skip that source/matrix mutation, record the unresolved mapping candidate,
continue other unambiguous anchors, and require `tw-traceability-check` to emit a
blocking structured finding. In a pause, report the candidate target files,
missing authority fields, scanner findings, and the exact human decision needed.
Do not hand-edit around a helper pause or invent requirement IDs to make the
scanner pass.

## Anchor Authoring Command Contract

When the scanner reports a missing anchor and the authority mapping is
unambiguous, `tw-work` must use the TraceWeaver-packaged authoring helper rather
than hand-editing source comments and matrix rows separately:

```sh
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-author-code-anchors \
  --root <repo-root> \
  --mode apply \
  --work-loop \
  --target <changed-file> \
  --matrix traceability-matrix.md \
  --anchor-level <file|entrypoint|verification> \
  --requirement <REQ-ID> \
  --trace <TRACE-ID> \
  --verification <VER-ID> \
  --role <artifact-role>
```

Use `--mode propose` first when the target mapping needs human inspection. Use
`--mode apply --work-loop` only after the requirement, trace, verification,
role, target, and current-anchor state are all clear. For behavior entrypoints,
also pass `--entrypoint <name>`. If the helper returns `pause`, `refused`, or
any non-zero status, stop without manual fallback mutation and return the
structured pause reason to `tw-auto`. If the helper returns
`skipped_unresolved_mapping`, keep the recorded JSONL evidence and rerun
`traceweaver-check-code-anchors --unresolved-mappings <path>` so the unresolved
mapping blocks acceptance as a structured finding.

## Review-Staging Boundary

`tw-work` may run `git add` only for an explicit scoped review handoff after
approved-authority implementation work is complete, verification and
`tw-traceability-check` have passed or produced an explicitly held condition,
and the exact changed-file list is known. The handoff may come from `tw-auto`
when `tw-auto` has identified split review identity as the only blocker and
passes a work-package ID, review route, and exact scoped file list. It must stage
only files it changed or files whose hash/status was refreshed for that same
review gate.

For a `tw-auto` review-staging handoff, `tw-work` must verify every requested
path belongs to the current work package, changed implementation files, linked
tests/fixtures/smokes, Code Anchor Evidence rows, or scoped status/evidence
records for the same review gate. It returns the staged path list, any refused
paths, the review route to rerun, and held claims back to `tw-auto`.

`tw-work` must stop without staging when requirements, authority, verification,
trace, target files, or review scope are unclear, contradictory, stale,
incomplete, or imply a material authority change.

Review-staging does not allow commits, branches, pushes, PRs, release claims,
publication, remote mutation, plan-complete claims, or publication-wrapper
delegation. Those actions can happen only after `tw-auto` routes through the
controlled TraceWeaver publication gate.

## Highest-Level Handoff Discipline

`tw-work` owns authority preflight, trace-anchor authoring, scanner reruns,
verification, and review-staging for the implementation slice. Do not return
standalone `tw-authority-gate` or `tw-traceability-check` as the normal next
user command after work.

When work is ready for review, return the highest-level next wrapper:
`/tw-code-review ...` for changed code-like files, scoped `/tw-doc-review ...`
for authority/status/hash changes, or return control to `/tw-auto ...` when the
automation loop should continue. Recommend standalone lower gates only for an
explicit diagnostic, audit, baseline-authority review, or a human-decision pause
where no higher wrapper can proceed.

## Output

Return:

- authority used and baseline hash
- changed files
- trace-anchor authoring status
- matrix Code Anchor Evidence status
- verification commands and results
- scanner result after implementation
- staged files, when review-staging was used
- open traceability findings or held claims
- whether work may proceed to `tw-code-review` or must pause for user input
- highest-level next TraceWeaver wrapper command or exact human decision
