<!-- TRACEWEAVER: file-role=distilled-promotion-status-inventory; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Distilled Knowledge Promotion Status

This inventory tracks each distilled systems-engineering domain from the
private TraceWeaver source-material repo through its public promotion states.
The `traceweaver-smoke-distilled-coverage` gate checks that every guide listed
here is packaged into the runtime plugin, current, and referenced by at least
one packaged skill.

Promotion states:

- `runtime-skill`: distilled knowledge skill promoted into the plugin with
  skill-local references.
- `guide-only`: public distilled guide exists and is packaged/wired into
  consuming skills, but the full per-domain knowledge skill (operating model,
  checklist, output schema, examples) has not been promoted.
- `private-only`: domain exists in the private suite with no public distilled
  output yet.

| Domain (private suite) | Public guide | State | Runtime consumers |
|---|---|---|---|
| requirements-reviewer | requirements-and-vv-guide.md | runtime-skill | requirements-reviewer skill; tw-requirements-review, tw-authority-gate, tw-traceability-check, tw-audit |
| systems-engineering-traceability | systems-engineering-traceability-operating-model.md, traceability-matrix-template.md | runtime-skill | systems-engineering-traceability skill; tw-traceability-check, tw-authority-gate, tw-audit |
| risk-gap-change-control | risk-gap-and-change-control-guide.md | runtime-skill | risk-gap-change-control skill; systems-engineering-traceability, tw-audit |
| verification-planner | verification-planner-guide.md | runtime-skill | verification-planner skill; tw-plan, tw-test-browser, tw-test-xcode |
| validation-planner | validation-planner-guide.md | runtime-skill | validation-planner skill; tw-plan, tw-audit |
| baseline-configuration-control | baseline-configuration-control-guide.md | runtime-skill | baseline-configuration-control skill; tw-authority-gate, tw-audit |
| technical-review-and-audit-gate | technical-review-and-audit-gate-guide.md | runtime-skill | technical-review-and-audit-gate skill; tw-audit |
| needs-and-requirements-capture | needs-and-requirements-capture-guide.md | guide-only | tw-brainstorm, tw-grill |
| design-decision-reviewer | design-decision-reviewer-guide.md | guide-only | tw-plan, tw-doc-review |
| architecture-and-interface-reviewer | architecture-and-interface-reviewer-guide.md | guide-only | tw-plan, tw-code-review |
| traceweaver-lifecycle-orchestrator | none | private-only | none (tw-auto is an independent public implementation; overlap decision held per `docs/validation/candidate-baseline-review-traceweaver-lifecycle-orchestrator-2026-06-12.md`) |

## Promotion Rule

Moving a domain from `private-only` to `guide-only`, or from `guide-only` to
`runtime-skill`, requires a fresh candidate baseline review against the
scrubbed public-candidate material, source-hygiene verification, and
original-wording rewrite, recorded under `docs/validation/`. See
`docs/validation/candidate-baseline-review-protocol.md` and
GAP-TW-2026-06-12-007. Creating private distilled guidance does not by itself
promote anything.
