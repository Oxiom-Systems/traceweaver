# Fixture Matrix

| Trace | Verification ID | Requirement | Validation Question | Status |
| --- | --- | --- | --- | --- |
| TRACE-AUTH-NBA-CLEAR | VER-AUTH-NBA-CLEAR | REQ-AUTH-NBA-CLEAR | Can clear mappings continue while ambiguous per-artifact mappings are recorded? | reviewed |
| TRACE-AUTH-NBA-AMBIG-A | VER-AUTH-NBA-AMBIG-A | REQ-AUTH-NBA-AMBIG-A | Can ambiguous mapping A be reported without mutation? | reviewed |
| TRACE-AUTH-NBA-AMBIG-B | VER-AUTH-NBA-AMBIG-B | REQ-AUTH-NBA-AMBIG-B | Can ambiguous mapping B be reported without mutation? | reviewed |

## Code Anchor Evidence

| Artifact Path | Requirement | Trace | Verification | Anchor Type | Role |
| --- | --- | --- | --- | --- | --- |
| src/ambiguous_feature.sh | REQ-AUTH-NBA-AMBIG-A | TRACE-AUTH-NBA-AMBIG-A | VER-AUTH-NBA-AMBIG-A | file-role | ambiguous-source-a |
| src/ambiguous_feature.sh | REQ-AUTH-NBA-AMBIG-B | TRACE-AUTH-NBA-AMBIG-B | VER-AUTH-NBA-AMBIG-B | file-role | ambiguous-source-b |
