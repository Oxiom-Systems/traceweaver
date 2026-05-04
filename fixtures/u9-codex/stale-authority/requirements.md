# U9 Fixture Requirements - Stale Authority

Fixture status: synthetic test input only.

Baseline ID: `REQ-FIX-U9-STALE-001`

Declared requirements hash:
`0000000000000000000000000000000000000000000000000000000000000000`

Expected classification:

```text
blocked_hash_mismatch
```

The declared hash intentionally does not match this file. A TraceWeaver gate
must stop before work instead of accepting stale authority.
