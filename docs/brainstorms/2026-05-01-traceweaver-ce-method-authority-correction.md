---
id: SRC-REQ-004
status: source_evidence_for_baseline_patch
date: 2026-05-01
owner: Oxiom Systems
review_evidence: CE-DOC-REVIEW-2026-05-01-TW-AUTHORITY-BOOTSTRAP-CLEAN-001
---

# TraceWeaver CE Method Authority Correction

This record pins the stakeholder correction that TraceWeaver must not drift into
"CE plus adjacent TraceWeaver helper skills." TraceWeaver's intended product
shape is a standalone plugin that preserves the useful Compound Engineering
method while adding systems-engineering authority, traceability, verification,
validation, and change control as the default control layer.

## Captured Intent

R1. TraceWeaver must repackage or wrap the selected CE method steps rather than
only install standalone TraceWeaver skills beside CE skills.

R2. The simple workflow should remain recognizable:

```text
idea
-> brainstorm
-> requirements baseline
-> plan
-> work
-> review
-> verification
-> validation
-> compound learning
```

R3. From the idea and brainstorm phases, TraceWeaver must help create the root
`requirements.md`, root `traceability-matrix.md`, `.traceweaver/intent-contract.yml`,
and supporting gap/change/exception records. Ideas and brainstorm outputs are
source material until reviewed requirements become authority.

R4. TraceWeaver must prevent drift by detecting behavior that is useful or
logical but not authorized by a captured requirement. It must also flag duplicate
behavior, dark code, uncaptured requirement candidates, missing verification
evidence, and code that should be removed or routed to a gap/change/exception.

R5. TraceWeaver may operationalize systems-engineering principles from
IEEE 15288/INCOSE-style practice, including requirement quality, verification,
validation, lifecycle traceability, and change control, but public artifacts
must use original TraceWeaver wording and avoid protected standards text or
unsupported conformance claims.

## Baseline Impact

This source supports REQ-TW-044 through REQ-TW-047 in the master baseline. It
does not by itself approve clean CE replacement, runtime-equivalent CE behavior,
enforcing gates, slash commands, autonomous commit/push/PR, release-ready claims,
or standards conformance claims.

## Suggested Next Step

Run `/ce-doc-review requirements.md README.md plugins/traceweaver-core/README.md traceability-matrix.md docs/validation/traceweaver-controlled-autonomy-alpha.md`.
