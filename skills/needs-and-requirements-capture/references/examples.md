# Examples

## Raw Stakeholder Request

Bad handling:

```text
Stakeholder wants a faster dashboard. Build caching.
```

Finding:

- original wording lost
- design solution mixed into need
- no success signal

Better capture:

```yaml
original_text: "The dashboard takes too long when I check incidents."
reframed_need:
  id: NEED-OPS-001
  text: "Operations users need incident dashboard information quickly enough to support triage."
candidate_requirements:
  - id: UREQ-OPS-001
    text: "The dashboard shall display current incident summary information within a defined response-time target."
    status: draft
assumptions:
  - id: ASM-OPS-001
    text: "Slow loading is the main obstacle to incident triage."
open_questions:
  - id: Q-OPS-001
    question: "What response-time target is acceptable during normal and incident load?"
```

Verification method:

Not set at capture; route to `requirements-reviewer`.

Validation path:

Operations triage scenario.
