<!-- TRACEWEAVER: file-role=candidate-baseline-review-protocol; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review Protocol (Private -> Public Promotion)

This protocol governs promoting distilled systems-engineering knowledge from
the private TraceWeaver source-material repo into public TraceWeaver outputs
(`docs/distilled/` guides, and packaged knowledge skills in the runtime
plugin). It operationalizes the private repo's promotion path so a review can
be executed mechanically per domain. Tracked by GAP-TW-2026-06-12-007.

## Inputs

- The scrubbed publication candidate for the domain (the public-candidate
  folder in the private repo - never the private seed folders, raw sources,
  extraction notes, or alignment deltas).
- The current public state: `docs/distilled/promotion-status.md`, any existing
  guide for the domain, and the consuming `tw-*` skills.

Agent sessions must not read the private repo directly unless the project
owner has explicitly granted that session access to the scrubbed candidate
folder for a named review.

## Per-Domain Review Steps

1. **Scope**: state the domain, its single lifecycle question, and the
   candidate files under review (paths and hashes).
2. **Source hygiene** - verify all of:
   - rewritten original TraceWeaver wording; no copied or closely paraphrased
     standard/handbook text, tables, checklists, examples, ordering, or layout
   - no source IDs, licensed-source register rows, private local paths, or
     private page references
   - no claims that TraceWeaver implements or conforms to IEEE, ISO/IEC/IEEE,
     INCOSE, or any other standard
   - Mermaid diagrams are original TraceWeaver semantic views
3. **Quality gate**: run `tw-requirements-review` over the candidate's
   normative statements (checklists, gates, schemas) so weak or ambiguous
   guidance does not become packaged authority.
4. **Fit**: map the domain to its consuming `tw-*` skills and decide the
   promotion target - `guide-only` (distilled guide wired into consumers) or
   `runtime-skill` (full knowledge skill with skill-local references following
   the `requirements-reviewer` pattern: inline core model + mandatory
   reference-loading instructions).
5. **Record**: write the review as
   `docs/validation/candidate-baseline-review-<domain>-<date>.md` with
   findings, hygiene checklist results, promotion decision, and held items.
6. **Promote**: copy the approved text into `docs/distilled/` (guides) and the
   plugin (packaged references and/or knowledge skill), update
   `promotion-status.md`, and let `traceweaver-smoke-distilled-coverage`
   verify packaging, currency, and skill wiring.

## Current Queue (from promotion-status.md)

Awaiting fresh candidate baseline review, in suggested order of leverage:

1. validation-planner -> runtime-skill (validation closure is the framework's
   weakest measured metric)
2. verification-planner -> runtime-skill
3. needs-and-requirements-capture -> guide, then runtime-skill (elicitation
   gap flagged by review finding K5)
4. design-decision-reviewer -> guide (trade-study gap flagged by K5)
5. technical-review-and-audit-gate -> runtime-skill
6. baseline-configuration-control -> runtime-skill
7. risk-gap-change-control -> runtime-skill
8. architecture-and-interface-reviewer -> guide
9. traceweaver-lifecycle-orchestrator -> reconcile with tw-auto rather than
   promote (decide overlap explicitly)

## Boundaries

- A review record is required per domain; batch promotions without per-domain
  records are not allowed.
- Promotion is a controlled product decision by the project owner; this
  protocol prepares evidence, it does not grant authority.
