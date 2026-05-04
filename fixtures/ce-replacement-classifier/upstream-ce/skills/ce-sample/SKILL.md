---
name: ce-sample
description: Upstream CE sample skill used by replacement classifier fixtures.
---

# CE Sample

This fixture stands in for a pinned upstream Compound Engineering skill.

When invoked, the skill reads guidance from
`references/ce-sample-support.md` before changing behavior. The support path is
part of the behavior surface and may be checked by the classifier even though
the fixture does not provide that file.

Expected behavior:

1. Load the support guidance.
2. Apply the support guidance to the requested CE workflow step.
3. Report which support file influenced the behavior.
