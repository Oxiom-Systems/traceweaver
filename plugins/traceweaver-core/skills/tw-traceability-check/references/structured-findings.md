# Structured Traceability Findings

`tw-traceability-check` uses structured findings when a traceability check
finds a gap, blocker, or held claim. The goal is to make trace failures as
actionable as code-review and doc-review findings while preserving the
TraceWeaver authority boundary.

## Required Fields

Each finding must carry these fields:

| Field | Meaning |
| --- | --- |
| `id` | Stable fixture or run-local finding id. |
| `severity` | `P0`, `P1`, `P2`, or `P3`. |
| `status` | `blocked`, `needs-revision`, `held`, `approved-gap-required`, `human-decision`, or `pass`. |
| `title` | Short reviewer-facing issue title. |
| `evidence` | Specific observed fact that supports the finding. |
| `affected_ids` | Requirement, trace, artifact, verification, validation, gap, change, exception, or result ids affected by the finding. |
| `file` | Repo-relative file path when a stable file anchor exists. |
| `start` | 1-based start line when a stable line anchor exists. |
| `end` | 1-based end line when a stable line anchor exists. |
| `claim_impact` | The done/release/authority/runtime/publication claim that remains blocked, held, or allowed. |
| `remediation` | Concrete next action needed to clear, hold, or route the finding. |

`file`, `start`, and `end` may be omitted only when the finding is cross-file,
artifact-level, or source-free.

## Severity Policy

- `P0`: immediate safety, credential, destructive publication, or release claim
  risk. Blocks all acceptance and publication.
- `P1`: missing/stale authority, missing matrix row, missing verification,
  missing validation, unsupported done/release claim, or dark behavior. Blocks
  pass until resolved or explicitly held by approved authority.
- `P2`: traceability, authority, validation, runtime-safety, or publication
  weakness that could mislead later agents. Blocks when it affects accepted
  authority, release claims, runtime behavior, or publication.
- `P3`: non-blocking traceability debt. It must name an owner or next step.

## Status Policy

- `blocked`: the reviewed surface cannot be accepted.
- `needs-revision`: the reviewed surface may become acceptable after a bounded
  document or code revision.
- `held`: the behavior or claim is intentionally not accepted yet.
- `approved-gap-required`: work may continue only after a gap/change/exception
  record is approved.
- `human-decision`: the finding requires stakeholder or owner choice.
- `pass`: no blocking structured finding remains for the checked scope.

## Codex Inline Findings

When a stable repo file and line range exists, emit a Codex inline finding in
this shape:

```text
::code-comment{title="[P1] Short title" body="Evidence, claim impact, and remediation." file="path/from/repo/root" start=12 end=12 priority=1 confidence=0.90}
```

Use Markdown findings instead of `::code-comment{...}` when the issue spans
multiple files, has no stable line anchor, or describes an artifact-level
authority state.

## Pass Rule

`tw-traceability-check` must not return pass when any `P0` or `P1` finding
remains unresolved. A pass result must list allowed claims and any non-blocking
held claims separately so later work cannot convert a held claim into accepted
authority by omission.
