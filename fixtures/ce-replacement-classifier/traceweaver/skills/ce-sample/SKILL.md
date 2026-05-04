---
name: ce-sample
description: TraceWeaver-packaged direct CE-derived sample skill fixture.
---

# CE Sample

This fixture represents a direct CE-derived skill packaged inside the
TraceWeaver surface for continuity testing.

It preserves the upstream `ce-sample` entrypoint and behavior shape, including
the support-file dependency on `references/ce-sample-support.md`. Because it is
still callable as a `ce-*` surface, the classifier must require an explicit
classification row before treating it as approved package continuity.

Expected classification pressure:

1. Without a controlled row, report this packaged direct CE skill as
   `unclassified`.
2. With a matching controlled row, verify the expected hash and support edge.
3. Do not treat this file as a native TraceWeaver authority wrapper.
