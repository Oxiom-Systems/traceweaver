<!-- TRACEWEAVER: file-role=wrapper-handoff-discipline-policy; req=REQ-TW-052; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=wrapper-handoff-discipline-policy; req=REQ-TW-056; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=wrapper-handoff-discipline-policy; req=REQ-TW-057; trace=TRACE-TW-046; ver=VER-TW-059 -->
<!-- TRACEWEAVER: file-role=wrapper-handoff-discipline-policy; req=REQ-TW-061; trace=TRACE-TW-046; ver=VER-TW-059 -->

# TraceWeaver Wrapper Handoff Discipline

TraceWeaver wrappers embed lower authority, requirements, and traceability gates
inside higher-level workflow surfaces. User-facing output should recommend the
highest-level executable wrapper that advances the user's current workflow, not
an internal lower gate, unless the user explicitly asked for that diagnostic,
audit, or baseline-authority review.

## Highest-Level Next Wrapper Rule

For normal work, recommend the wrapper that owns the next workflow phase:

- use `/tw-auto ...` for multi-step plan/work/review closure;
- use `/tw-work ...` for a bounded approved implementation or review-staging
  repair;
- use `/tw-code-review ...` for code, script, skill, fixture, test, manifest,
  runtime harness, or behavior-bearing review;
- use `/tw-doc-review ...` for requirements, plans, matrices, Intent Contracts,
  validation evidence, review-result, or status/hash acceptance;
- use `/tw-commit-push-pr ...` only when publication is explicitly requested and
  publication gates are in scope.

`tw-requirements-review`, `tw-authority-gate`, and `tw-traceability-check` are
lower gates for normal flow. They may be standalone next commands only when:

- the user explicitly requested that exact gate;
- the run is a diagnostic dry run;
- the run is an audit;
- the run is a baseline-authority review;
- no higher wrapper can proceed without a human authority decision.

When a lower gate is the next command, the output must say why it is standalone.

## Embedded Gate Contract

- `tw-plan` owns requirements-quality preflight before packaged `ce-plan`.
- `tw-work` owns authority preflight, trace-anchor authoring, scanner checks,
  verification, and review-staging handoff before packaged `ce-work` output is
  reviewable.
- `tw-code-review` owns `tw-traceability-check` before packaged
  `ce-code-review`.
- `tw-doc-review` owns requirements-review and trace/hash/status consistency
  checks before packaged `ce-doc-review` when those checks apply.
- `tw-auto` owns the full authority, work, trace, review, repair, recording,
  and clean-or-held stop loop.

## Output Template

Normal outputs must end with:

```text
Next step:
/<highest-level-tw-wrapper> <bounded task, scope, and held claims>
```

Do not end a normal flow with vague prose such as "fix the authority gap",
"resolve the requirements", or "run the appropriate gate". Name the exact
wrapper command or the exact human decision.

If the workflow must stop, return:

- stop reason;
- held claims;
- exact blocker or missing decision;
- the one next command or human decision that can unblock the flow.
