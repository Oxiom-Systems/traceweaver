---
id: TW-REVIEW-2026-06-12-FRAMEWORK-DESIGN
title: TraceWeaver Framework Design Review
status: candidate_review_record_advisory_input_only_no_authority_change
date: 2026-06-12
owner: Oxiom Systems
review_type: framework_critique
scope: framework design, authority/evidence data model, skill suite, distilled knowledge base
authority_effect: none
publication_boundary: >
  This is an advisory design-review record. It does not change any requirement,
  baseline hash, Intent Contract field, or held-claim status. It proposes
  findings and candidate gaps only. Acting on any finding requires its own
  requirements-review, plan, and gate.
---

# TraceWeaver Framework Design Review

A critical review of whether the TraceWeaver framework, as it currently exists
and dogfoods itself in this repository, achieves its stated purpose: apply
systems-engineering discipline during agentic development and keep work true to
the intent of the user.

This record deliberately uses a short, human-readable `status` field rather than
the long concatenated status strings used elsewhere in this repo. That choice is
itself Finding F1 below.

## Verdict

The systems-engineering model is sound: intent -> requirements -> authority ->
implementation -> verification -> validation, with explicit held claims and a
rule that an agent's assumption must become a question, gap, or exception rather
than silent authority. That core insight is correct and worth building on.

However, the current implementation is failing its own mission in a way the
dogfood repo itself demonstrates: the control artifacts have grown past human
reviewability, so intent is not being preserved so much as laundered through
evidence that no human can practically audit. Three measurements frame the
problem:

| Measure | Value |
| --- | --- |
| Product code under governance (`src/index.ts`) | 524 lines |
| Process artifacts governing it | ~900KB+ (matrix 436KB, Intent Contract 2,342 lines, generated views 432KB, 92 requirement rows) |
| Requirements with closed acceptance/validation evidence (per `docs/generated/traceability-data.json`) | 1 of 67 (`acceptance_missing=66`) |

The last figure is the most significant by the framework's own measure: the
system verifies obsessively ("did we build it right") and validates almost
nothing ("did we build what the user wanted") -- the inversion of its purpose.

## What is genuinely well designed

- Verification and validation are kept as separate questions, with a validation
  question attached to every requirement and intent.
- Held-claim discipline: the framework explicitly enumerates what is *not*
  proven (runtime, enforcing mode, clean CE replacement) instead of inflating
  claims.
- Test-first is a gate, not a suggestion (`tw-work` requires failing-test
  evidence or an explicit exception with owner/reason/revisit-trigger).
- Highest-level handoff discipline prevents wrappers from dumping a lower gate
  ("now run /tw-code-review") on the user when they could continue themselves.
- Proportional operating modes (authority-baseline vs implementation-gate vs
  publication) so trivial changes are not fully gated.
- Anchor `skip-unresolved` mode allows partial progress on clear mappings while
  ambiguous ones become explicit findings.
- Advisory-by-default, with enforcing mode held until proven. Correct
  sequencing.

These should be preserved. The findings below concern form, not the underlying
model.

## Findings

### F1 (P1) The authority record is write-only; the human reviewer is disenfranchised

`.traceweaver/intent-contract.yml` is described as the "current project authority
contract" but is a 2,342-line append log. `baseline_status` (line 19) is a single
~4,600-character snake_case value concatenating every review event since April:
`accepted_controlled_baseline_with_prior_refreshed_authority_state_code_review_passed_doc_review_passed_u9_unit1_..._runtime_held`.
The same pathology appears in `requirements.md` frontmatter
(`candidate_amendment_status`, ~2,500 chars) and in matrix rows up to 8,803
characters on a single line.

No human can review this; no machine can parse it (it is prose with underscores,
not structure); diffs are meaningless. A framework whose purpose is preserving
intent cannot do so if the stakeholder cannot read the authority record. Highest
priority.

### F2 (P1) Almost every gate is honor-system

- The baseline hash procedure is documented (`requirements.md` Canonical baseline
  hash procedure) but no script validates it; verification is "manually run
  shasum and compare."
- The anchor scanner (`traceweaver-check-code-anchors`) validates syntax and ID
  existence only, never whether the code actually implements the cited
  requirement.
- The ~22 smoke scripts run independently with no aggregation, no CI gate, and no
  pre-commit hook. Nothing mechanically stops an unanchored behavior change from
  being committed.

The framework is a control system in which the controlled party (the agent) also
operates the controls and writes the audit log. The dogfood evidence shows long
chains of `main_thread_scoped_tw_code_review_no_reviewer_subagents` -- the agent
reviewing its own work and recording it as independent evidence.

### F3 (P2) Prescriptive volume substitutes for operational precision

One full `tw-auto -> tw-work -> tw-code-review -> tw-traceability-check` loop
carries roughly 25K tokens of skill guidance (~45K including the wrapped CE
engines), yet the decisive predicates are undefined: "unchanged requirements"
(no hash rule), "enough reviewed authority" (no threshold), "ambiguous mapping"
(no criterion), "review-fix cycle budget" (unquantified). `tw-authority-gate`
returns `Proceed/Reduce scope/Revise/Human decision/Blocked` with no defined next
action for any outcome. Meanwhile an estimated 930-1,150 of ~3,000 tw-* lines are
duplicated boilerplate (18 operating-modes copies, 5 trace-anchor-authoring
variants, ~8 near-identical handoff-discipline blocks). Heavy repeated text
trains the agent to skim, making performative compliance more likely.

### F4 (P2) The framework violates its own requirements in its own repo

`requirements.md` mandates `.traceweaver/gaps/`, `changes/`, `exceptions/`, and
`task-capsules/` as minimum consuming-repo artifact paths. None of these
directories exist in this repo. Twelve trace-records exist (milestone/release
level only); zero gap records exist despite 18+ held-claim categories. The
mandated discipline is not dogfooded, leaving the requirement unfalsifiable.

### F5 (P1) Validation -- the actual "true to user intent" check -- is the least developed part

Stakeholder intents and validation questions are well written
(`INTENT-TW-001..008`). But the validation questions are never answered:
`acceptance_missing=66` of 67 by the repo's own generated data. Validation is
perpetually `held` while verification rituals multiply. A framework can pass
every gate it has and still drift from intent if the gate that asks "does this
satisfy the stakeholder?" never closes. REQ-TW-022 also references "R31 evidence"
that is defined nowhere in the baseline.

### F6 (P2) Circular dependencies in bootstrap and authority repair

Bootstrap creates unreviewed authority files; `tw-work` requires
`tw-authority-gate`; the gate requires loading reviewed authority; the bootstrap
output is unreviewed. There is no explicit "provisional authority" state, so the
loop's exit condition lives in the agent's interpretation. Updating
`traceability-matrix.md` (an authority file) similarly requires authority
approval based on that same matrix.

### F7 (P3) Ontology overload

Eleven-plus ID namespaces (REQ, INTENT, NEED, SRC, TRACE, VER, VAL, ART, ATP,
RESULT, EXC) plus private jargon (U6b, U7, U9, R31, "dark code," "Intent
Capsule"). The dogfood evidence shows even the authoring agent drifting on status
vocabulary across matrix rows (`passed_no_findings` vs `passed` vs
`approved / held / open`). Every ID type multiplies the rows a single change must
touch (3-5 row updates per requirement refresh, by design), and steepens the
adopter onboarding cliff.

## Distilled knowledge base review

This section reviews the source of the distilled SE knowledge: the
`skills/*/references/` material (`source-basis.md`, `operating-model.md`,
`checklist.md`, `output-schema.md`, `examples.md`) and the packaged copies under
`plugins/traceweaver-core/skills/*/references/`. The framework claims to adapt
INCOSE/ISO/IEEE/NASA practice without copying protected text and without claiming
compliance.

Overall: the knowledge base is the strongest part of the framework. It is
IP-clean, internally consistent, and faithful to core SE on the concepts it
covers. Its weaknesses are missing upstream/quantitative SE domains and
boilerplate provenance — not incorrectness.

### K1 (good) IP hygiene is clean

No verbatim or closely paraphrased standard text was found. The good-requirement
characteristics are reframed as agent questions ("Necessary -> Is this needed to
satisfy a parent need, source, constraint, or risk control?") rather than copied
from ISO 29148, and the V&V distinction is an original restatement, not a
quotation. The README's disclaimer (no certification/endorsement/compliance with
INCOSE, ISO, IEEE, NASA) is honoured throughout. Copyright risk: low.

### K2 (good) Core SE fidelity and cross-skill consistency are high

Verification vs validation, the idea->need->requirement->design->implementation
->verification->validation->change-control chain, baseline/configuration
control, and the gap/risk/change/exception taxonomy are all stated correctly and
consistently across the 11 skills. No contradictory definitions or routing
conflicts were found; each skill's handoff table matches the lifecycle
orchestrator's routing map. Within scope, the content is accurate.

### K3 (good) Operational value, low padding

The guidance is checklist-and-gate driven with block/revise/approve outcomes and
calibrated rewrite examples (e.g. "fast" -> "return the first page of results
within 2 seconds for 95% of searches under normal load"). Outputs are structured
schemas, not prose. The strongest skill is `requirements-reviewer` (rich,
testable, teaches the rewrite); the weakest is
`architecture-and-interface-reviewer`, which identifies interfaces but does not
govern them (no interface-spec template, no data-contract/timing/error-behaviour
guidance, derived requirements are routed away rather than produced).

### K4 (P3) Provenance is boilerplate and non-traceable

All 11 `source-basis.md` files are byte-identical 14-line templates citing
"generally known engineering concepts" with zero specific standard editions or
sections. This is honest (it claims nothing false) but unauditable: a reviewer
cannot verify which basis informed a given rule, and the 1:1 duplication
suggests the provenance was templated rather than curated per skill. Acceptable
for open-source guidance; insufficient for any regulated/compliance positioning.

### K5 (P2) Upstream and quantitative SE domains are missing

For a framework selling SE rigor, notable omissions: requirements elicitation
(the capture skill records, it does not elicit), trade studies (design decisions
are reviewed after the fact with no method for exploring alternatives),
interface specification/ICD control, design margins and FMEA, ConOps/operational
scenarios, measures of effectiveness and performance budgeting/flow-down, and
risk quantification (risk is categorised but never scored by likelihood/impact).
The suite is fit for single-project, well-scoped agentic feature work; it is not
sufficient for multi-layer system programs, supplier management, or regulated
domains. This is a scoping reality to state plainly in the docs, not necessarily
a defect to fix — but today the framing implies broader SE coverage than the
knowledge base delivers.

### Knowledge-base verdict

B+/A-: a solid, honest, operationally useful distillation of the core authority
and traceability pipeline. The gap between this knowledge base (genuinely good)
and the authority/evidence machinery built on top of it (findings F1-F7, which
have grown past human reviewability) is the central tension of the framework:
the method is sound; the bookkeeping has outgrown it.

## Recommendations (prioritized)

1. Separate the contract from the log. Make `intent-contract.yml` a bounded
   snapshot (~100 lines: baseline hash, mode, active gate, open held claims).
   Move history to `.traceweaver/history/` or rely on git. Replace snake_case
   status sagas with structured fields (`status: held`, `evidence: [ids]`). This
   restores the human reviewability that every other claim depends on.
2. Mechanize the cheap checks; stop presenting the expensive ones as checked.
   Ship a baseline-hash validator, a pre-commit/CI anchor lint, and one
   `traceweaver-verify` aggregator with a pass/fail exit code. Document which
   gates are mechanical and which are LLM judgment.
3. Make validation closure the headline metric. Surface "validation questions
   answered / total" in the dashboard and every `tw-auto` output. Today the
   honest number is 1/67.
4. Define operational thresholds in one short reference: unchanged = hash match;
   repeated finding = same finding ID two cycles; cycle budget = N; an explicit
   next-action table for each `tw-authority-gate` outcome; an explicit
   `provisional` authority state to break the bootstrap circle.
5. Cut skill text by ~60%. Deduplicate operating-modes and anchor-authoring into
   single shared references; collapse repeated "load these three files"
   preambles. Target full loop <= 10K tokens.
6. Use the gap/change/exception system or remove it from the requirements.
   Create the directories and convert the held-claim categories into records
   with owners and revisit triggers.
7. Collapse the ID ontology toward three namespaces (intent/need, requirement,
   evidence) plus severity.
8. Add real failure paths: rollback when `ce-work` fails mid-change, behavior
   when the anchor scanner is missing, behavior when authority files are
   corrupted.

## Candidate gaps raised by this review

This review raises the following candidate gap records (see `.traceweaver/gaps/`).
They are candidates for requirements review, not approved authority.

- GAP-TW-2026-06-12-001: authority record is not human-reviewable (F1).
- GAP-TW-2026-06-12-002: framework gates are not mechanically enforced (F2).
- GAP-TW-2026-06-12-003: mandated gap/change/exception directories are absent (F4).
- GAP-TW-2026-06-12-004: validation closure is effectively unmeasured (F5).
- GAP-TW-2026-06-12-005: SE-coverage framing exceeds knowledge-base scope; provenance is boilerplate (K4, K5).

## Authority effect

None. This record is advisory input. No requirement, baseline hash, Intent
Contract field, or held claim changes as a result of writing it.

## Next steps

Recommended next TraceWeaver step: run `tw-requirements-review` on this record
and the candidate gaps to decide which findings become approved requirements or
changes. Do not treat any finding here as implementation authority until that
review passes.
