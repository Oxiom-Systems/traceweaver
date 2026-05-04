# U9 Fixture Traceability Matrix - Authority Present

Fixture status: synthetic test input only.

| Trace ID | Requirement | Artifact | Verification | Validation Question | Status |
| --- | --- | --- | --- | --- | --- |
| TRACE-FIX-001 | REQ-FIX-001 | `requirements.md`; `.traceweaver/intent-contract.yml`; `traceability-matrix.md` | fixture authority scan | Does the gate find all required authority files? | Pass candidate |
| TRACE-FIX-002 | REQ-FIX-002 | `.traceweaver/intent-contract.yml` | fixture hash scan | Does the gate compare declared and computed artifact hashes? | Pass candidate |
| TRACE-FIX-003 | REQ-FIX-003 | `trace-write/` temporary copy | fixture write smoke | Does the write proof leave real project authority files unchanged? | Held until trace-write smoke |

This matrix is not the root project traceability matrix.
