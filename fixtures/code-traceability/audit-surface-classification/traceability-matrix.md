# Audit Surface Classification Fixture Matrix

| Trace ID | Requirement | Artifact | Verification | Validation question | Status |
| --- | --- | --- | --- | --- | --- |
| TRACE-CTA-AUDIT-SURFACE | REQ-CTA-AUDIT-SURFACE | src/real_product.sh | VER-CTA-AUDIT-SURFACE | Can real product behavior still block when untraced? | blocked |
| TRACE-CTA-AUDIT-SURFACE-SUPPORT | REQ-CTA-AUDIT-SURFACE | .memsearch/memory/2026-05-21.md | VER-CTA-AUDIT-SURFACE | Can generated memory be held as support-surface audit debt? | held |
| TRACE-CTA-AUDIT-SURFACE-GENERATED | REQ-CTA-AUDIT-SURFACE | docs/generated/traceability-data.json | VER-CTA-AUDIT-SURFACE | Can generated views be held as generated-surface audit debt? | held |
| TRACE-CTA-AUDIT-SURFACE-WORKTREE | REQ-CTA-AUDIT-SURFACE | .worktrees/codex/sample/src/copied.sh | VER-CTA-AUDIT-SURFACE | Can copied worktree behavior be held as worktree debt? | held |
| TRACE-CTA-AUDIT-SURFACE-SOURCE | REQ-CTA-AUDIT-SURFACE | .source-materials/cache/vendor.py | VER-CTA-AUDIT-SURFACE | Can source caches be held as source-material debt? | held |
