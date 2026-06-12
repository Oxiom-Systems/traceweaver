<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: validation-planner (2026-06-12)

Protocol: `docs/validation/candidate-baseline-review-protocol.md`
Reviewer session: privileged promotion session, 2026-06-12.
Promotion target under review: `guide-only` -> `runtime-skill`.

## 1. Scope

- **Domain**: `validation-planner`.
- **Single lifecycle question**: How will we prove we built the right thing?
- **Candidate files under review** (read-only, scrubbed public-candidate
  folder; `shasum -a 256`):

| Candidate file | SHA-256 |
|---|---|
| `outputs/agent-skills-public-candidate/validation-planner/SKILL.md` | `f41ccc676cc7ed619ea6a204c752b2a71c3e311e15dee78bfa5f7c3afd3da60b` |
| `outputs/agent-skills-public-candidate/validation-planner/references/checklist.md` | `c81b1d628558298d9b3225141d3723543fc3c824c15625fd18f677c33f9cbe78` |
| `outputs/agent-skills-public-candidate/validation-planner/references/examples.md` | `0e17857f653431c19f97efc53b277d071080e5acebc07908779a38ad436b9386` |
| `outputs/agent-skills-public-candidate/validation-planner/references/operating-model.md` | `8b0621c88b3f6ec25e6198530a93bf3fd95d69ec905f774a8f82de5f636afe18` |
| `outputs/agent-skills-public-candidate/validation-planner/references/output-schema.md` | `55f548474b7149f6c6f236db023d1a0827e91cc00eaf280eefd37dd7dff8c65f` |
| `outputs/agent-skills-public-candidate/validation-planner/references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

- **Access note**: Session access to the scrubbed public-candidate folder was
  granted by the project owner for this named review per
  GAP-TW-2026-06-12-007 (kickoff via
  `docs/plans/2026-06-12-handover-private-promotion-session.md`).
- **Boundary observed**: only the six candidate files above were read in the
  private repo. No seed folders, `batches/` material, conversions, extraction
  notes, or standards-alignment-delta files were opened.

## 2. Source Hygiene

All checks ran over the full candidate folder
(`outputs/agent-skills-public-candidate/validation-planner/`, recursive).

| # | Protocol item | Evidence | Result |
|---|---|---|---|
| H1 | Rewritten original TraceWeaver wording; no copied or closely paraphrased standard/handbook text, tables, checklists, examples, ordering, or layout | Manual read of all six files. Content is voiced in TraceWeaver operational terms (rater relationship to work, adoption evidence record, approval package inputs, hold conditions) and structured around TraceWeaver's own skill envelope (decision/hold/handoff/output-schema), not any external document layout. All examples are TraceWeaver-specific (`NEED-OPS-001` about locating a TraceWeaver skill, `R31` adoption claim, `GAP-VAL-004` beta deferral). The verification/validation distinction appears only as short original phrasing already used across the public repo. | PASS |
| H2 | No source IDs, licensed-source register rows, private local paths, or page references | `grep -rniE "SRC-\|register\|page [0-9]\|p\.[0-9]\|/Users/\|batches/\|seed\|extraction\|alignment-delta\|conversion"` over the candidate folder: no matches (exit 1). | PASS |
| H3 | No claims of IEEE / ISO/IEC/IEEE / INCOSE (or other standard) conformance | `grep -rniE "IEEE\|ISO\|IEC\|INCOSE\|29148\|15288\|1012\|SEBoK\|handbook\|standard"`: no matches (exit 1). Candidate `references/source-basis.md` carries an explicit non-conformance disclaimer ("does not represent certification, endorsement, or implementation of any third-party publication"), which is a boundary statement, not a conformance claim. | PASS |
| H4 | Mermaid diagrams are original TraceWeaver semantic views | `grep -rn "mermaid"`: no matches (exit 1). No diagrams present in the candidate; nothing to assess. | PASS (vacuous) |
| H5 | No long quoted passages or copyright/citation markers | `grep -rnE "\"[A-Z][^\"]{60,}\"\|©\|copyright\|reprinted\|adapted from"`: two matches, both original TraceWeaver YAML string values in `references/examples.md` (a scenario prompt and a release-hold condition). Reviewed and cleared as false positives. | PASS |

**Source hygiene verdict: PASS** on all items. No candidate material required
patching from private sources; none was performed.

## 3. Quality Gate

Quality gate executed with the packaged requirements-reviewer model, which
`tw-requirements-review` routes to. The 0-5 score model and review outcomes
from `plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` and
`references/requirements-quality-checklist.md` were applied to the candidate's
normative statements: the gate, the decision rules, the checklist items, the
hold conditions, the handoff rules, and the output schema. These statements
are skill operating rules, not system requirements, so the gate question was:
can each statement safely become packaged runtime authority for agents?

### Scores

| ID | Normative statement (candidate) | Score | Status |
|---|---|---:|---|
| VPL-N-001 | Gate: validation cannot pass on implementer self-assessment alone; rater named; role and relationship recorded; scenario connects to need or intended use | 5 | Adopt as written |
| VPL-N-002 | Validation checks the result against stakeholder need, intended use, and operating context | 5 | Adopt as written |
| VPL-N-003 | Verification can inform validation but does not replace it | 5 | Adopt as written |
| VPL-N-004 | "Representative context matters: the rater ... must be identified" | 4 | Revise (minor wording) |
| VPL-N-005 | "The relationship of the rater to the work must be visible" | 4 | Revise (minor ambiguity) |
| VPL-N-006 | Acceptance criteria must describe observable success in context | 5 | Adopt as written |
| VPL-N-007 | Deferred validation only as controlled gap with owner, trigger, expected evidence, and release impact | 5 | Adopt as written |
| VPL-N-008 | "Failed or partial validation drives change control or scope reduction" | 4 | Revise (weak verb) |
| VPL-N-009 | Checklist (12 items) | 4 | Revise (one escape clause) |
| VPL-N-010 | Hold When conditions (6 items) | 4 | Revise (one judgment-word trigger) |
| VPL-N-011 | Output schema + outcomes enum | 4 | Revise (add field meanings) |
| VPL-N-012 | Handoff rules (5 routes) | 4 | Revise (packaging-state note needed) |
| VPL-N-013 | Authority boundary | 5 | Adopt as written |
| VPL-N-014 | When To Use / When Not To Use | 5 | Adopt as written |

No statement scored 2 or below; nothing is blocked, ambiguous beyond safe
interpretation, or unverifiable as an operating rule.

### Findings and rewrites applied during promotion

| Finding | Issue class | Rewrite applied in the packaged skill |
|---|---|---|
| VPL-N-001 is compound (three conditions in one sentence) | compound, but intentional: gate conditions are conjunctive and must all hold | Kept as a single gate; conditions also decomposed into the checklist and hold conditions so each is independently checkable. Not weakened. |
| VPL-N-004 lead-in "Representative context matters" is non-binding commentary before the binding clause | weak wording | Rule restated with the binding clause leading: the rater, stakeholder, user, operator, or approved proxy must be identified. |
| VPL-N-005 "must be visible" does not say where | ambiguous | Restated as: the rater's relationship to the work must be recorded in the rater profile. |
| VPL-N-008 "drives" is a non-mandatory verb | weak wording | Restated as: failed or partial validation must route to change control or scope reduction and must not be re-labeled as a pass. |
| VPL-N-009 checklist item "Verification evidence is separate and linked where relevant" contains the escape clause "where relevant" | escape clause | Restated as: when verification evidence exists, it is linked and labeled as verification, not validation. All 12 items retained. |
| VPL-N-010 hold trigger "Acceptance criteria are vague" uses a judgment word as the trigger | vague language | Restated as: acceptance criteria do not describe an observable outcome in the intended context. All 6 hold conditions retained. |
| VPL-N-011 outcomes enum (`pass`/`fail`/`partial`/`blocked`/`deferred`) and schema fields lack meaning notes | incomplete | Brief field-meaning and outcome-meaning notes added to the packaged output-schema reference. Schema fields and outcomes unchanged. |
| VPL-N-012 handoff targets include domains not yet packaged as knowledge skills | dangling route risk | Packaged Handoff Rules note which target domains are not yet packaged and route through their distilled guides or consuming `tw-*` skills until promoted. |

No gate, hold condition, checklist item, decision rule, schema field, or
outcome was removed or weakened during promotion.

## 4. Fit

- **Consumers**: `tw-plan` loads skill-local
  `references/validation-planner-guide.md` when planning how a result will be
  validated; `tw-audit` loads its copy when judging validation or acceptance
  closure claims. Both copies mirror `docs/distilled/validation-planner-guide.md`.
- **What the runtime skill adds beyond the guide**:
  - Operating-model depth: decision rules with evidence-type definitions,
    rater/representativeness rules, deferred-validation control rules, and
    failed/partial-validation routing in one loadable reference, instead of
    the guide's summary bullets.
  - A per-need checklist with explicit Hold When conditions usable as a
    mechanical gate during planning and audit.
  - The full output schema with the complete skill envelope
    (decision rationale, hold conditions, exceptions, gaps, trace links),
    where the guide publishes only a summary shape.
  - Worked examples, including weak-claim findings and an approved-deferral
    disposition, for calibration.
  - Handoff rules with packaging-state awareness and an authority boundary.
  - A process agents can follow end to end, in the same structure as the
    already-promoted `requirements-reviewer` knowledge skill.
- **Why runtime-skill**: validation closure is the framework's weakest
  measured metric (kickoff queue item 1), and both consumers already route to
  this domain by guide; promoting the full knowledge skill gives them an
  inline core model plus mandatory reference loading per the
  `requirements-reviewer` pattern.
- **Promotion target**: `runtime-skill`.

## 5. Promotion Decision

**Decision: PROMOTE** `validation-planner` to `runtime-skill`.

Rationale: source hygiene passed on every protocol item with recorded
evidence; the quality gate found no blocking or ambiguous normative
statements, only minor wording findings, all of which were resolved by
original-wording rewrites recorded above; the domain has two live consumers
and is the highest-leverage item in the promotion queue.

Authority note: promotion execution authority for passing domains was granted
in the kickoff (`docs/plans/2026-06-12-handover-private-promotion-session.md`,
per GAP-TW-2026-06-12-007). This record is the per-domain review evidence the
protocol requires; the underlying promotion-path requirements remain candidate
authority until the project owner promotes them into `requirements.md`.

Promoted artifacts (written in this review session):

- `plugins/traceweaver-core/skills/validation-planner/SKILL.md`
- `plugins/traceweaver-core/skills/validation-planner/references/validation-planning-operating-model.md`
- `plugins/traceweaver-core/skills/validation-planner/references/validation-planning-checklist.md`
- `plugins/traceweaver-core/skills/validation-planner/references/validation-plan-output-schema.md`
- `plugins/traceweaver-core/skills/validation-planner/references/source-basis.md`
- `plugins/traceweaver-core/skills/validation-planner/tests/validation-planning-examples.md`

## 6. Held Items

- **Wiring deferred to the orchestrator** (not performed in this review):
  `docs/distilled/promotion-status.md` state update (`guide-only` ->
  `runtime-skill`), consumer wiring in `tw-plan` and `tw-audit` SKILL.md
  files, smoke-script count updates
  (`scripts/traceweaver-smoke-tw-skill-behavior` `skill_file_total` and
  `anchored_skill_total`), and any
  `traceweaver-smoke-codex-host-registry` reference-file registration.
- **No `agents/` directory** was created for the packaged skill (kickoff
  scope decision for this review).
- **Handoff targets not yet packaged**: `needs-and-requirements-capture`
  (private-only), `verification-planner`, `risk-gap-change-control`, and
  `technical-review-and-audit-gate` (guide-only). The packaged skill names
  them as domains and notes their packaging state; their own promotions
  remain queued.
- **Existing guide untouched**: `docs/distilled/validation-planner-guide.md`
  and its skill-local copies were not modified; reconciling guide vs.
  runtime-skill duplication is a follow-up for the orchestrator if desired.
