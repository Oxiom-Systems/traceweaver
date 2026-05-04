# U9 Fixture Requirements - Authority Present

Fixture status: synthetic test input only.

Baseline ID: `REQ-FIX-U9-AUTH-PRESENT-001`

## Stakeholder Intent

| ID | Intent | Validation Question |
| --- | --- | --- |
| INTENT-FIX-001 | Preserve authority before a fixture implementation proceeds. | Can the fixture prove that requirements, matrix, and Intent Contract are present and consistent? |

## Requirements

| ID | Statement | Status | Verification Method | Validation Question |
| --- | --- | --- | --- | --- |
| REQ-FIX-001 | The fixture workflow must load a requirements baseline, Intent Contract, and traceability matrix before work starts. | approved | inspection | Does the gate find all required authority files? |
| REQ-FIX-002 | The fixture workflow must reject stale authority hashes before work starts. | approved | hash_check | Does the gate compare declared and computed artifact hashes? |
| REQ-FIX-003 | The fixture workflow must keep writes inside a throwaway fixture workspace. | approved | smoke_test | Does the write proof leave real project authority files unchanged? |

## Held Claims

This fixture does not prove active Codex host-registry discovery, real skill
runtime invocation, release readiness, or project-level TraceWeaver authority.
