<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: needs-and-requirements-capture (2026-06-12)

Executed per `docs/validation/candidate-baseline-review-protocol.md`. Tracked
by GAP-TW-2026-06-12-007. Promotion target under review: `guide-only` (this
domain is currently `private-only`; review is from scratch). This review
addresses the elicitation gap flagged as finding K5 in
`docs/validation/traceweaver-framework-design-review-2026-06-12.md`.

## 1. Scope

- **Domain**: `needs-and-requirements-capture` (private suite distilled
  domain).
- **Single lifecycle question** (candidate's own core question): What did the
  stakeholder actually ask for? — i.e. whether the real stakeholder need is
  captured and preserved before requirements form and before anything becomes
  implementation authority.
- **Candidate files reviewed** (read-only, scrubbed public-candidate folder),
  with `shasum -a 256` hashes:

| File | SHA-256 |
|---|---|
| `.../needs-and-requirements-capture/SKILL.md` | `d23ed905b88dae4b404461c14e0d52c776a62b63f8dd143cc06193702fc1aa91` |
| `.../needs-and-requirements-capture/references/checklist.md` | `81f4a9dafca5937b7d4271c80060fcf3a2f761110d1c75b22d216949fdd0eb3a` |
| `.../needs-and-requirements-capture/references/examples.md` | `ced6d141cecce3599f817f530deb170aab215550cbfd5159203a855b42334b4d` |
| `.../needs-and-requirements-capture/references/operating-model.md` | `5075e865717bd08ece438c235b6007b5b3609972fa74a8d9755334f2fd8a8589` |
| `.../needs-and-requirements-capture/references/output-schema.md` | `2e85d8e81ac6312f9e5ccdeb8cad4da44ca226a7d9fc637f2b8e5e5dae45bffc` |
| `.../needs-and-requirements-capture/references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

Path prefix for all rows:
`TraceWeaver-private/outputs/agent-skills-public-candidate/`.

Access note: Session access to the scrubbed public-candidate folder was
granted by the project owner for this named review per GAP-TW-2026-06-12-007
(kickoff via `docs/plans/2026-06-12-handover-private-promotion-session.md`).
Only the candidate folder above was read; no seed folders, `batches/` raw
sources, conversions, extraction notes, or standards-alignment-delta files
were opened.

## 2. Source Hygiene

This domain has no existing public output, so hygiene review was performed
from scratch over all six candidate files.

| # | Protocol item | Result | Evidence |
|---|---|---|---|
| H1 | Rewritten original TraceWeaver wording; no copied or closely paraphrased standard/handbook text, tables, checklists, examples, ordering, or layout | PASS | All six files read in full. Wording, structure, and vocabulary are TraceWeaver-native: candidate-ID conventions (`NEED-OPS-001`, `UREQ-OPS-001`, `CAP-001`), authority-boundary language ("candidate lifecycle records", "not implementation authority"), and handoff routing to named TraceWeaver skills. The single worked example is a TraceWeaver-specific incident-dashboard scenario, not a textbook example. Checklists and tables are short routing/capture structures organized around TraceWeaver outputs, not standard clause ordering or layout. |
| H2 | No source IDs, licensed-source register rows, private local paths, or page references | PASS | `grep -rniE "SRC-\|register\|licen[cs]\|/Users/\|TraceWeaver-private\|page [0-9]\|p\.[0-9]\|section [0-9]\|clause\|chapter\|§\|copyright\|\(c\)"` over the candidate folder returns no matches. |
| H3 | No claims that TraceWeaver implements or conforms to IEEE, ISO/IEC/IEEE, INCOSE, or any other standard | PASS | `grep -rniE "ISO\|IEEE\|INCOSE\|29148\|15288\|24765\|SEBoK\|handbook\|standard\|conform\|compli\|certif"` returns exactly one match: the explicit disclaimer in `references/source-basis.md` ("does not represent certification, endorsement, or implementation of any third-party publication"). No conformance claim exists anywhere in the candidate. |
| H4 | Mermaid diagrams are original TraceWeaver semantic views | PASS (n/a) | `grep -rni "mermaid"` returns no matches; the candidate contains no diagrams. |

**Hygiene verdict: PASS** (4/4 items).

Observation (not a hygiene failure): `references/source-basis.md` is the
generic 14-line provenance template flagged as finding K4 in the framework
review. It claims nothing false and is not carried into the guide-only
promotion output.

## 3. Quality Gate

Quality gate executed with the packaged requirements-reviewer model, which
tw-requirements-review routes to. The candidate's normative statements
(decision rules, checklist items, stop/hold conditions, process steps,
handoff rules, output schema, gate statement) were classified and scored on
the 0-5 scale.

Summary: reviewed 15 normative statement groups. Approve-quality: 13. Needs
revision: 2. Blocked: 0. Reclassify: 0.

| Normative statement (condensed) | Type | Score | Status |
|---|---|---:|---|
| Preserve original stakeholder wording as evidence | rule | 5 | Can approve |
| Reframe wording separately in TraceWeaver terms | rule | 5 | Can approve |
| Need describes why an outcome matters; requirement states what must be true | classification rule | 5 | Can approve |
| Goal is not a requirement until actor, context, obligation, evidence path exist | rule | 5 | Can approve |
| Design suggestion is not a requirement unless approved as constraint | rule | 5 | Can approve |
| Assumption stays visible until validated, retired, or converted to risk/gap | rule | 5 | Can approve |
| Constraint must carry source, reason, authority state | rule | 5 | Can approve |
| Candidate needs/requirements are not implementation authority | gate rule | 5 | Can approve |
| Missing stakeholder/context/success signal requires clarification | rule | 4 | Revise (NRC-QF-001) |
| Capture checklist (17 items) | checklist | 5 | Can approve |
| Stop-and-ask conditions (6 items) | hold conditions | 5 | Can approve |
| Process steps 1-6 | procedure | 5 | Can approve |
| Handoff rules (SKILL.md list vs operating-model table) | routing rules | 4 | Revise (NRC-QF-002) |
| Output schema and status values | schema | 5 | Can approve |
| Capture gate ("a captured need does not authorize implementation") | gate rule | 5 | Can approve |

Findings:

- **NRC-QF-001 (minor, consistency)**: the operating-model rule makes
  clarification unconditional ("Missing stakeholder, context, or success
  signal requires clarification") while the SKILL.md hold condition is
  qualified ("Stakeholder, actor, or context is unknown **and material**").
  Rewrite applied in the guide: a single unified rule — missing stakeholder,
  context, or success signal requires clarification; hold when the missing
  item is material to scope.
- **NRC-QF-002 (minor, completeness)**: the SKILL.md handoff list (4 rows)
  omits the `Approved requirement candidate -> systems-engineering-traceability`
  row present in the operating-model handoff table (5 rows). Rewrite applied
  in the guide: the merged five-row table is carried, with the traceability
  row reworded to the clearer "requirement approved after review".
- **NRC-QF-003 (observation, K5 fit)**: the candidate's elicitation knowledge
  is distributed across the checklist, stop-and-ask conditions, and decision
  rules rather than presented as elicitation guidance. The guide consolidates
  these into an explicit elicitation section (stakeholder identification,
  intended user/operator, operating context, need vs want vs solution,
  success/failure signals, conflict surfacing) using only candidate-provided
  probes — no new methodology was invented.
- **NRC-QF-004 (observation)**: `references/examples.md` provides one clean
  capture and one weak capture; calibration is thin but adequate for a
  guide-only promotion. More examples can accompany the later runtime-skill
  promotion.

All rewrites listed above are applied in the new public guide only. No
candidate file was modified (candidate folder is read-only for this review).

**Quality verdict: PASS** — no blocked or reclassified statements; both
revision findings are wording-level and resolved in the promoted guide.

## 4. Fit

- **Consumers**: `tw-brainstorm` and `tw-grill`. Both cover the capture
  *process* (preserving brainstorm/interview output as source evidence,
  interrogating a selected idea) but carry no elicitation *knowledge* — what
  to draw out of a stakeholder, how to separate need from want from solution,
  and when capture must hold. This guide supplies that knowledge per finding
  K5.
- **Downstream**: candidate requirements route to `requirements-reviewer`
  (already promoted as a runtime skill); validation intent routes to
  `validation-planner`; assumptions, risks, and gaps route to
  `risk-gap-change-control`; design suggestions route to
  `design-decision-reviewer` (still private-only; named handoff retained,
  consistent with existing guide practice).
- **Promotion target**: `guide-only` — first public output for this domain.
  Runtime-skill promotion stays a later step per the queue in
  `docs/validation/candidate-baseline-review-protocol.md` (item 3: "guide,
  then runtime-skill").

## 5. Promotion Decision

**PROMOTE to `guide-only`.**

Rationale: source hygiene passes on all four protocol items with grep and
full-read evidence; the quality gate passes with no blocking findings and two
minor wording harmonizations applied during the rewrite; the domain fills a
named framework gap (K5 elicitation) with two identified consumers waiting on
it; and the candidate's normative rules are consistent with the existing
distilled guides (authority boundary, candidate status, handoff discipline).

Promotion execution authority for passing domains was granted in the session
kickoff (`docs/plans/2026-06-12-handover-private-promotion-session.md`,
section 3, per GAP-TW-2026-06-12-007). Promotion remains a controlled product
decision of the project owner; this record documents the evidence and the
delegated execution.

Promoted output: `docs/distilled/needs-and-requirements-capture-guide.md`
(new file; authored from the candidate material, rewritten in original
TraceWeaver voice). Packaging copies into
`plugins/traceweaver-core/references/` and skill-local references, consumer
SKILL.md load-instruction wiring, and the `promotion-status.md` state update
are orchestrator follow-ups outside this review session and are enforced by
the `traceweaver-smoke-distilled-coverage` gate.

## 6. Held Items

- The full runtime knowledge skill for this domain (packaged SKILL.md with
  inline core model plus skill-local operating model, checklist, output
  schema, and examples following the `requirements-reviewer` pattern) remains
  **unpromoted**. Guide first per queue order; runtime-skill promotion
  requires its own fresh candidate baseline review.
- `references/source-basis.md` is not promoted (generic provenance template;
  K4 observation above).
- The `design-decision-reviewer` handoff target named in the guide remains
  `private-only` (queue item 4); the routing name is retained so the handoff
  becomes live when that domain promotes.

## Authority Effect

None beyond the delegated guide-only promotion recorded above. No
requirement, baseline hash, Intent Contract field, or held claim changes as a
result of this record.
