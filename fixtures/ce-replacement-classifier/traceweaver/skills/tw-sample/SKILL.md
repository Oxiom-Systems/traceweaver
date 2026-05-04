---
name: tw-sample
description: Native TraceWeaver wrapper and authority-control sample fixture.
---

# TW Sample

This fixture represents a TraceWeaver-native control skill. It is not a copied
CE entrypoint.

Before delegating to any CE-derived behavior, it must confirm stakeholder
intent, approved requirement or approved exception, verification method,
validation question, and current baseline version. Missing authority stops the
handoff and creates a gap, change, exception, accepted-risk candidate, or
clarification record.

Expected behavior:

1. Check the Intent Contract inputs.
2. Stop when authority evidence is missing or stale.
3. Delegate only through an approved wrapper or classified CE-derived surface.
