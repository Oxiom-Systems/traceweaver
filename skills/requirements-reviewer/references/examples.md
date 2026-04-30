# Examples

Original examples only.

## Vague Requirement

Bad input:

```text
The system should be fast and easy to use.
```

Finding:

- vague language
- weak mandatory language
- unverifiable

Why it fails:

No workload, threshold, actor, or acceptance signal exists.

Better version:

```text
The search service shall return the first page of results within 2 seconds for
95% of searches under normal operating load.
```

Verification method:

Performance test.

Validation path:

User acceptance scenario for the search workflow.

## Implementation-Biased Requirement

Bad input:

```text
The checkout service shall use Redis to store sessions.
```

Finding:

- implementation-biased unless Redis is an approved constraint

Why it fails:

It says how to build instead of what must be true.

Better version:

```text
The checkout service shall preserve an active checkout session for 30 minutes
after the user's last checkout action.
```

Verification method:

Session persistence test.

Validation path:

Checkout continuation scenario.
