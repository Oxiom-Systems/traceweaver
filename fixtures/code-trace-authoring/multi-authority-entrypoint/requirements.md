# Multi-Authority Entrypoint Fixture Requirements

| ID | Requirement | Verification | Validation | Status |
| --- | --- | --- | --- | --- |
| REQ-AUTH-MULTI-PRIMARY | The selected entrypoint row preserves its co-owned requirement set. | VER-AUTH-MULTI-PRIMARY | Can explicit entrypoint authoring preserve every reviewed authority ID? | approved |
| REQ-AUTH-MULTI-ALTERNATE | An alternate requirement selector cannot narrow a selected co-owned row. | VER-AUTH-MULTI-ALTERNATE | Can an alternate selector preserve the full selected set? | approved |
| REQ-AUTH-UNRELATED | Unrelated anchors must not block the selected entrypoint route. | VER-AUTH-UNRELATED | Can unrelated anchors remain untouched? | approved |
