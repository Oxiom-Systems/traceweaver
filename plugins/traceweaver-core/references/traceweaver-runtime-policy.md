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

Next recommended step: run `tw-authority-gate` before meaningful implementation
and `tw-traceability-check` during review.
