# TraceWeaver Controlled Autonomy Policy

Status: alpha advisory policy

This policy governs `tw-auto`, the TraceWeaver-controlled autonomous alpha
workflow, and `lfg` when packaged by TraceWeaver as a compatibility alias to
`tw-auto`. It composes selected CE-compatible planning, work, and review skills
with TraceWeaver authority gates and file-based trace records.

## Product Intent

TraceWeaver-controlled autonomy repackages the Compound Engineering method with
systems-engineering authority. It should preserve the simple CE rhythm: idea,
brainstorm, plan, work, review, and compound learning. The difference is that
each handoff must carry intent, requirements quality, authority, traceability,
verification, validation, and change-control checks.

Selected CE skills are implementation components for this controlled method.
They are not the authority by themselves. A TraceWeaver wrapper or alias must
make missing authority visible and route it to a gap, proposed requirement,
change, exception, accepted risk, clarification, or removal candidate before
the work can close.

## Invariant

Automate only while authority is clear. Stop when authority must change.

No agent may implement, review, modify, commit, push, or open a PR for
meaningful behavior unless the work can point to:

- stakeholder intent;
- approved requirement or approved exception;
- verification method or evidence;
- validation question;
- current baseline ID and hash;
- traceability matrix row or trace record.

## Required Files

For consuming projects, `tw-auto` uses:

```text
requirements.md
traceability-matrix.md
.traceweaver/
  intent-contract.yml
  trace-records/
  gaps/
  changes/
  exceptions/
```

`requirements.md` and `traceability-matrix.md` belong at the project root so
humans can inspect current authority and traceability. `.traceweaver/` stores
operational records and templates.

If a consuming project has none of these authority files, `tw-auto` must
bootstrap draft authority files first:

- create root `requirements.md` from the user's request and the packaged
  `requirements-baseline-template.md`;
- create `.traceweaver/intent-contract.yml` from the draft baseline and the
  packaged `intent-contract-template.yml`;
- create root `traceability-matrix.md` from the draft baseline and Intent
  Contract;
- stop before implementation and recommend `tw-requirements-review` plus human
  baseline review.

If only the matrix is missing, `tw-auto` may create `traceability-matrix.md`
from the accepted baseline and Intent Contract, then must run
`tw-traceability-check` before continuing.

## Loop States

| State | Meaning | Allowed next step |
| --- | --- | --- |
| `loading_authority` | Baseline, Intent Contract, and matrix are being loaded. | Continue only if all required authority files exist or matrix bootstrap succeeds. |
| `bootstrapping_authority` | Requirements baseline or Intent Contract is missing in a fresh project. | Create draft authority files, then stop for `tw-requirements-review` and human baseline review before implementation. |
| `bootstrapping_matrix` | Root matrix is missing and a placeholder matrix is being created from accepted authority. | Continue to planning after matrix exists and records bootstrap status. |
| `planning` | CE-compatible planning is running against approved authority. | Continue to authority gate. |
| `authority_gate` | TraceWeaver checks that work is authorized. | Continue to work only when approved authority or approved exception exists. |
| `working` | CE-compatible work executes within the approved capsule. | Continue to trace update. |
| `trace_update` | Trace record and matrix rows are updated. | Continue to review only when writes succeed. |
| `reviewing` | CE-compatible code/doc review runs. | Continue to fix cycle or stop based on severity policy. |
| `fix_cycle` | A bounded review-fix cycle is running. | Continue only while progress is visible and cycle budget remains. |
| `verification_validation_recording` | Verification evidence and validation question/status are recorded. | Stop before commit/push/PR with next step. |
| `stopped_for_authority` | Missing/changing authority requires human decision or record update. | Create gap/change/exception/clarification. |
| `stopped_for_review` | Blocking review findings remain. | Run scoped fix work or human review. |
| `stopped_for_verification` | Verification failed or is missing. | Fix tests/evidence or record approved verification gap. |
| `stopped_before_commit` | Static alpha reached its final allowed point. | Human may decide the next CE/git action outside this alpha. |

## Progress And Cycle Limits

Default review-fix budget: two cycles per run.

Stop before another cycle when:

- the same blocking finding repeats;
- no material file diff appears;
- trace records or matrix rows do not change when they should;
- the same verification failure repeats;
- an unresolved dark-behavior candidate remains;
- behavior appears logical but no requirement captures it;
- behavior duplicates or expands existing behavior without authority;
- continuing requires new or changed requirements.

Projects may override the cycle limit only through reviewed project-local Intent
Contract policy.

## Severity Policy

- P0/P1: always blocking.
- P2: blocking when related to authority, requirements, tests, traceability,
  validation, release claims, security, data integrity, or runtime safety.
- P3: may be non-blocking debt only with an owner, due condition, trace row, and
  suggested next step.

## Commit, Push, And PR Boundary

`tw-auto` alpha must stop before commit, push, or PR creation. It may recommend
the next git or CE command, but it must not claim that autonomous publication is
approved.

Commit/push/PR automation remains a later runtime/U9 claim.

## Compatibility Aliases

The TraceWeaver-packaged `lfg` skill is a compatibility alias, not raw CE
autopilot. It must delegate to `tw-auto` and must not directly run CE planning,
work, review, commit, push, or PR steps. If `tw-auto` is unavailable, the alias
must stop instead of falling back to raw CE `lfg`.

## Held Claims

The following remain held:

- clean CE replacement;
- runtime-equivalent CE workflow behavior;
- slash-command or prompt availability;
- enforcing authority gate behavior;
- dynamic no-forced discovery;
- full Core 11 runtime suite;
- release-ready, package-ready, or upstream-ready status;
- autonomous commit, push, or PR publication.

## Suggested Next Step Rule

Every `tw-auto` outcome must end with exactly one recommended next step:

- continue with another bounded cycle;
- run a named CE/TW review gate;
- create or update a gap/change/exception/clarification;
- request a human authority decision;
- stop before commit/push/PR with required evidence named.
