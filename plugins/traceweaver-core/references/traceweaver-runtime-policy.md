# TraceWeaver Runtime Policy

TraceWeaver Core alpha is advisory by default.

```yaml
traceweaver_mode: advisory
allowed_values:
  - off
  - advisory
  - enforcing
```

- `off`: CE workflow may run without TraceWeaver gates; TraceWeaver skills
  remain manually callable.
- `advisory`: TraceWeaver gates warn, create gap/change/exception records, and
  hold unsupported claims without blocking CE execution.
- `enforcing`: held until dynamic/runtime validation proves blocking behavior.

Agents are not authority. The authority is the accepted Intent Contract and
requirements baseline. For every meaningful change, the acting agent must cite:

- stakeholder intent;
- approved requirement or approved exception;
- verification method or evidence;
- validation question;
- current baseline version and hash.

If authority is missing, the agent may create a gap, change, exception
candidate, accepted-risk candidate, or clarification record. It may not silently
turn its own interpretation into implementation authority.

Alpha package claims stay limited to static install/materialization until later
runtime evidence proves invocation, routing, warning behavior, failure behavior,
dynamic discovery, and clean CE replacement.

## Controlled Autonomy

`tw-auto` is the TraceWeaver-controlled autonomous alpha surface. It composes
selected CE-compatible planning, work, and review skills with TraceWeaver
authority checks, authority bootstrap for fresh projects, matrix updates,
bounded review-fix cycles, and next-step handoffs.

Packaged `lfg` is a TraceWeaver compatibility alias that delegates to `tw-auto`.
It must not run raw CE autopilot directly.

`tw-auto` must:

- load `requirements.md`, `traceability-matrix.md`, and
  `.traceweaver/intent-contract.yml`;
- bootstrap draft authority files and stop for `tw-requirements-review` when
  `requirements.md` or `.traceweaver/intent-contract.yml` is missing;
- bootstrap `traceability-matrix.md` before implementation when the matrix is
  missing;
- run `tw-authority-gate` before implementation;
- update trace records and the root matrix after meaningful work;
- run `tw-traceability-check` before completion claims;
- stop on missing authority, failed verification, unresolved dark behavior,
  blocking review findings, stale evidence, or failed trace-record writes;
- stop before commit, push, or PR creation;
- end with one suggested next step.

Next recommended step: run `tw-authority-gate` before meaningful implementation,
`tw-traceability-check` during review, or `tw-auto` when a bounded advisory
automation loop is appropriate.
