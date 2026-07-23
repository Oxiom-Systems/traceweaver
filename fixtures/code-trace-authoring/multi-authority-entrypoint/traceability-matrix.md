# Multi-Authority Entrypoint Fixture Matrix

## Candidate Mapping

| Trace | Requirement | Implementation | Verification | Status | Narrative |
| --- | --- | --- | --- | --- | --- |
| TRACE-AUTH-MULTI-PRIMARY; TRACE-AUTH-MULTI-ALTERNATE | REQ-AUTH-MULTI-PRIMARY; REQ-AUTH-MULTI-ALTERNATE | src/unmapped_feature.sh | VER-AUTH-MULTI-PRIMARY; VER-AUTH-MULTI-ALTERNATE | reviewed | This decoy table outside the canonical section cannot authorize an entrypoint anchor. |

## Traceability Matrix

| Trace | Requirement | Implementation | Verification | Status | Narrative |
| --- | --- | --- | --- | --- | --- |
| TRACE-AUTH-MULTI-PRIMARY; TRACE-AUTH-MULTI-ALTERNATE | REQ-AUTH-MULTI-PRIMARY; REQ-AUTH-MULTI-ALTERNATE | src/feature.sh | VER-AUTH-MULTI-PRIMARY; VER-AUTH-MULTI-ALTERNATE | reviewed | The complete co-owned row is the only authority for `multi_authority_entrypoint`; escaped \| narrative delimiters remain data. |
| TRACE-AUTH-UNRELATED | REQ-AUTH-UNRELATED | src/unrelated.sh | VER-AUTH-UNRELATED | reviewed | Narrative-only mentions of REQ-AUTH-MULTI-PRIMARY, TRACE-AUTH-MULTI-PRIMARY, and VER-AUTH-MULTI-PRIMARY must not select this row. |

## Code Anchor Evidence

| Artifact Path | Requirement | Trace | Verification | Anchor Type | Role |
| --- | --- | --- | --- | --- | --- |
| src/feature.sh | REQ-AUTH-UNRELATED | TRACE-AUTH-UNRELATED | VER-AUTH-UNRELATED | file-role | unrelated-file-anchor |
| src/feature.sh | REQ-AUTH-UNRELATED | TRACE-AUTH-UNRELATED | VER-AUTH-UNRELATED | verifies | unrelated-verification-anchor |
| src/feature.sh | REQ-AUTH-UNRELATED | TRACE-AUTH-UNRELATED | VER-AUTH-UNRELATED | entrypoint | other_entrypoint |
