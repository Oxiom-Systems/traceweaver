<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: traceweaver-lifecycle-orchestrator (2026-06-12)

Review type: queue item 9 of
`docs/validation/candidate-baseline-review-protocol.md` — "reconcile with
tw-auto rather than promote (decide overlap explicitly)". This record is
ANALYSIS ONLY. No promotion, no skill creation, no guide creation, no
`promotion-status.md` change, and no `tw-auto` edits were performed.

## 1. Scope

- **Domain:** `traceweaver-lifecycle-orchestrator` (private suite,
  `private-only` in `docs/distilled/promotion-status.md`).
- **Lifecycle question:** routing and ordering across the lifecycle skills —
  "Which skill should run next, and what lifecycle state are we in?"
  The candidate is the private suite's meta-skill: it routes work across the
  other 10 private domain skills, records lifecycle/authority/evidence state,
  and holds or reduces scope; it does not approve technical content.
- **Public counterpart:** `plugins/traceweaver-core/skills/tw-auto/SKILL.md`
  plus its `references/` (automation-loop-state-template.yml,
  intent-contract-template.yml, requirements-baseline-template.md,
  trace-anchor-authoring.md, traceability-matrix-bootstrap-template.md,
  traceweaver-controlled-autonomy-policy.md, traceweaver-operating-modes.md,
  traceweaver-wrapper-handoff-discipline.md). Per `promotion-status.md`,
  tw-auto is an independent public implementation of lifecycle orchestration,
  not a promotion of this domain.
- **Candidate files reviewed** (`shasum -a 256`, paths relative to
  `outputs/agent-skills-public-candidate/traceweaver-lifecycle-orchestrator/`
  in the private repo):

| File | SHA-256 |
|---|---|
| `SKILL.md` | `32f698488634d7f772c27ac8eeb5e545ce95b7bf6da4fbe5e7f5010c9ee40a19` |
| `references/checklist.md` | `ca64ee42e5608c333a7864096db491ade02f14f0e63fa971903098dd0f39f93b` |
| `references/examples.md` | `c58b4e5ba6915129b4acac8a6b6a8cd33b4fa015ff790f7d397b9cb778935e87` |
| `references/operating-model.md` | `58efac3d0771ab9be63ee24b3935435fcd6a78c86942599ffd3490e73201ca80` |
| `references/output-schema.md` | `cf23706c2a8164a39c20c1d9c224102e5ad161c122f23061e251c347d130c58e` |
| `references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

Access note: "Session access to the scrubbed public-candidate folder was
granted by the project owner for this named review per GAP-TW-2026-06-12-007
(kickoff via docs/plans/2026-06-12-handover-private-promotion-session.md)."
Only the candidate folder above was read; no batches, seed folders, extraction
notes, conversions, or standards-alignment-delta files were opened.

## 2. Source hygiene

Checks run over all 6 candidate files (manual read plus pattern scans for
standard names, conformance wording, source/register identifiers, private
paths, and page references). Recorded in full so this record stands regardless
of the later overlap decision.

| Check | Result | Notes |
|---|---|---|
| Original TraceWeaver wording; no copied/closely paraphrased standard or handbook text, tables, checklists, examples, ordering, or layout | PASS | All text is short, product-specific routing guidance phrased in TraceWeaver vocabulary (lifecycle states, route modes, hold conditions, handoff records). Tables and checklists are TraceWeaver skill-routing constructs, not reproductions of any published process table. |
| No source IDs, licensed-source register rows, private local paths, or private page references | PASS | Pattern scan for source/register IDs, `/Users/` paths, private repo names, batch/seed/extraction terms, and page references found no matches. The only IDs are TraceWeaver-shaped examples (`ROUTE-001`, `GAP-DISC-001`). |
| No claims that TraceWeaver implements or conforms to IEEE, ISO/IEC/IEEE, INCOSE, or any other standard | PASS | No standard is named anywhere. `references/source-basis.md` explicitly disclaims: the skill "does not represent certification, endorsement, or implementation of any third-party publication". |
| Mermaid diagrams are original TraceWeaver semantic views | PASS (vacuous) | The candidate contains no Mermaid diagrams or other diagrams. |

Quality observation (protocol step 3, recorded for completeness): the
candidate's normative statements (checklist, hold conditions, route modes,
output schema) are crisp and testable in isolation, but several normative
routing targets name skills that do not exist as public runtime skills (see
section 3, "Handoff targets"). If the material is ever folded into public
text, those targets must be rewritten before any statement can become packaged
authority. No `tw-requirements-review` packaged-authority gate was run beyond
this, because the review outcome is reconcile-not-promote and no candidate
statement is being promoted into authority by this record.

## 3. Overlap analysis vs tw-auto

The candidate and tw-auto answer the same top-level question — what runs next
across the lifecycle — from two different design generations. The candidate is
a pure advisory router over the private 11-skill suite: it selects the
narrowest next skill, records a machine-readable route, and holds. tw-auto is
an executing loop owner over the public `tw-*` wrapper suite: it resolves
wrappers, runs the authority/work/trace/review closure loop itself, and stops
before publication. Detailed comparison:

- **Lifecycle stages.** Candidate defines 12 named states:
  `source_capture`, `requirement_review`, `trace_planning`,
  `architecture_review`, `design_decision`, `verification_planning`,
  `validation_planning`, `implementation_ready`, `evidence_review`,
  `baseline_control`, `gate_review`, `change_control`. tw-auto covers
  strategy/ideation/brainstorm, requirements review, planning, authority gate,
  implementation, trace-anchor authoring, traceability check, code/doc review,
  closure-claim validation, and a publication route, plus side routes (debug,
  audit, sessions, compound, setup, worktree, browser/Xcode tests). The
  candidate has explicit analysis-stage routing (architecture review, design
  decision, separate verification/validation planning) that tw-auto only
  reaches indirectly through guides wired into `tw-plan`/`tw-audit`; tw-auto
  has strategy, debugging, learning, and publication stages the candidate
  lacks entirely.
- **Routing rules.** Candidate rule: "select the narrowest next skill that
  owns the blocker or next lifecycle step", with a 10-row question-to-skill
  routing map. tw-auto rule (SKILL.md "Highest-Level Handoff Discipline" and
  `references/traceweaver-wrapper-handoff-discipline.md`): recommend the
  highest-level executable wrapper to the user, run lower gates internally,
  and only surface a lower gate standalone for explicit diagnostics/audits or
  when a human authority decision blocks higher wrappers. These are opposed as
  user-facing rules but reconcilable as layers: "narrowest owner" describes
  internal gate selection, "highest-level wrapper" describes the user-facing
  handoff. Any reconciliation must state that layering explicitly or the two
  rules contradict.
- **Gate/hold semantics.** Candidate: hold conditions (authority unknown with
  implementation requested, missing source context, unreviewed weak
  requirement, uncontrolled trace gap, unplanned required V&V, stale
  baseline/gate, no skill has sufficient inputs); route modes `normal`,
  `hold`, `reduced_scope`, `exception_path`, `human_decision`; a hold is
  cleared only by the owning skill or an approved exception record. tw-auto:
  a much larger stop-condition list, P0–P3 severity policy, five operating
  modes (Authority Baseline, Implementation Gate, Review-Staging, Post-Work
  Review Closure, Publication), publication held by default, and a human
  decision rule. The candidate's semantics are a strict subset in intent;
  candidate-only artifacts are the named `reduced_scope` route mode and the
  explicit "hold cleared only by owning skill or approved exception" rule.
- **Authority model.** Candidate: an abstract `authority_state`
  (`unknown`/`candidate`/...) plus the principle "raw intent is not
  authority"; no concrete artifacts. tw-auto: concrete authority surfaces —
  `requirements.md`, `traceability-matrix.md`,
  `.traceweaver/intent-contract.yml`, baseline ID/hash, task capsules, and
  gap/change/exception records under `.traceweaver/`, plus a human-confirmed
  authority bootstrap mode. The models agree in principle; tw-auto's concrete
  Intent Contract model supersedes the candidate's abstraction for the public
  product.
- **Handoff targets.** Candidate routes to the private 11-skill suite:
  `needs-and-requirements-capture`, `requirements-reviewer`,
  `systems-engineering-traceability`, `risk-gap-change-control`,
  `baseline-configuration-control`, `technical-review-and-audit-gate`,
  `verification-planner`, `validation-planner`,
  `architecture-and-interface-reviewer`, `design-decision-reviewer`. Publicly,
  only 2 of those 10 exist as runtime skills (`requirements-reviewer`,
  `systems-engineering-traceability`), 5 are guide-only, and 3 are
  private-only (per `promotion-status.md`). tw-auto routes to the `tw-*`
  wrapper namespace (19 required resolutions plus `tw-commit`/
  `tw-commit-push-pr`). Promoting the candidate as-is would ship dangling
  routes into skills the public plugin does not have.
- **Output contracts.** Candidate: a machine-readable YAML route record —
  `lifecycle_route` (route_id, current_state, authority_state, next_skill,
  route_mode), `required_inputs` with per-input status/owner,
  `blocking_conditions` with owning skill, and a `handoff_record` carrying
  `source_preservation_refs`. tw-auto: a prose output checklist (baseline
  ID/hash, authority/matrix status, evidence, review coverage, validation
  question, stop/continue reason, highest-level next wrapper) plus the
  loop-state YAML template. The candidate's structured route/handoff record
  has no direct tw-auto equivalent and is the most reusable candidate-only
  asset.

| Capability | Candidate orchestrator | tw-auto today | Overlap verdict |
|---|---|---|---|
| Core orchestration question (what runs next, what state) | Advisory router; emits route record, does not execute | Executing loop owner; runs gates/work/reviews itself | Duplicate (tw-auto supersedes for the public product) |
| Lifecycle stage coverage — execution loop (plan, work, trace, review, repair) | Implicit (`implementation_ready`, `evidence_review` states only) | Full closure loop with bounded repair cycles | Duplicate (tw-auto richer) |
| Lifecycle stage coverage — analysis routing (architecture review, design decision, separate verification/validation planning states) | Explicit named states and routes | Indirect only, via guides wired into `tw-plan`/`tw-audit`; no routing states | Candidate-only |
| Lifecycle stage coverage — strategy/ideation, debugging, learning capture, sessions, publication | Absent | Explicit routes (`tw-strategy`, `tw-ideate`, `tw-debug`, `tw-compound`, `tw-sessions`, publication wrappers) | tw-auto-only (no conflict; candidate gap) |
| User-facing routing rule | Narrowest next skill that owns the blocker | Highest-level executable wrapper; lower gates internal | Conflicting (reconcilable as internal-vs-user-facing layers; must be stated explicitly) |
| Named lifecycle-state vocabulary (12 states) | Yes | No equivalent enumerated state set (operating modes are risk modes, not lifecycle states) | Candidate-only |
| Route modes (`normal`/`hold`/`reduced_scope`/`exception_path`/`human_decision`) | Yes | Stop conditions and held claims express hold/human-decision; no `reduced_scope` route concept | Complementary (mostly covered; `reduced_scope` is candidate-only) |
| Gate/hold semantics (what blocks progression) | 7 hold conditions; hold cleared only by owning skill or approved exception | Larger stop-condition list, P0–P3 severity policy, operating modes, publication-held default | Duplicate in intent (tw-auto richer); "owning-skill clears hold" rule is candidate-only |
| Authority model | Abstract `authority_state`; "raw intent is not authority" | Concrete Intent Contract / `requirements.md` / `traceability-matrix.md` / baseline hash / `.traceweaver/` records + bootstrap mode | Duplicate principle (tw-auto's concrete model supersedes) |
| Handoff targets | Private 11-skill suite names (3 private-only, 5 guide-only publicly) | Public `tw-*` wrapper namespace, resolution-checked | Conflicting (namespace mismatch; as-is promotion would dangle) |
| Output contract | Machine-readable `lifecycle_route` + `required_inputs` + `blocking_conditions` + `handoff_record` with `source_preservation_refs` | Prose output checklist + loop-state YAML template | Complementary (structured route record is candidate-only) |
| Approval boundary (router/orchestrator may not approve technical content or bypass holds) | Explicit Authority Boundary and Gate sections | Same boundary expressed via stop conditions, severity policy, human decision rule | Duplicate (consistent; no conflict) |

Summary: no capability of the candidate requires promotion to keep the public
product whole. tw-auto already owns the orchestration question with a richer,
executing, publication-aware model. The candidate's distinct value is a small
set of routing vocabulary and record-structure assets (analysis-stage routing
states, route modes incl. `reduced_scope`, owning-skill hold-clearing rule,
structured route/handoff record), and its handoff-target namespace actively
conflicts with the public skill inventory.

## 4. Options for the human decision

Decision is HELD for the project owner per
`docs/plans/2026-06-12-handover-private-promotion-session.md` section 8 (open
decision: `traceweaver-lifecycle-orchestrator` vs `tw-auto` overlap). Options:

- **(a) Do not promote; reconcile by folding candidate-only routing assets
  into tw-auto references as a later authorized change.** Keep the domain
  `private-only` with the existing "tw-auto is an independent public
  implementation" note. In a separate, normally-gated change (requirements
  authority, `tw-doc-review`), fold into tw-auto's skill-local references:
  the 12-state lifecycle vocabulary, the `reduced_scope` and `human_decision`
  route modes, the owning-skill hold-clearing rule, and the structured
  route/handoff record shape — rewritten against the `tw-*` namespace and the
  highest-level-handoff discipline. Consequence: one public orchestrator, no
  dangling routes, no duplicate authority surface; the candidate-only
  analysis-stage routing (architecture/design-decision) waits until queue
  items 4 and 8 give those routes real public targets.
- **(b) Promote as an internal knowledge skill that tw-auto loads.** Package
  the candidate as a runtime knowledge skill (requirements-reviewer pattern)
  and have tw-auto load it as routing knowledge. Consequence: requires
  rewriting the entire routing map and examples to the `tw-*` namespace (the
  artifact would no longer be the reviewed candidate), creates a second
  orchestration-authority surface that can drift from tw-auto's normative
  SKILL.md, and risks the model invoking a router that cannot execute when
  tw-auto already can. High maintenance cost for low marginal value.
- **(c) Promote as a guide-only distilled routing guide wired into tw-auto.**
  A lifecycle-routing guide in `docs/distilled/` referenced by tw-auto.
  Consequence: lighter than (b) but the same namespace rewrite and the same
  dual-source drift risk for routing rules that tw-auto's SKILL.md already
  states normatively; the coverage smoke gate would then bind the guide's
  currency to tw-auto forever.
- **(d) Hold entirely; revisit after the analysis-stage domains promote.**
  Do nothing until `design-decision-reviewer` (queue 4) and
  `architecture-and-interface-reviewer` (queue 8) are decided, since most of
  the candidate's non-duplicate routing targets are exactly those domains.
  Consequence: zero work now, but the useful candidate-only assets (route
  modes, route-record schema, hold-clearing rule) stay unused and the open
  decision stays on the section-8 list.

**Recommendation: option (a).** Rationale: every load-bearing capability is
already implemented more completely in tw-auto; the only conflicts are the
handoff-target namespace (fatal for as-is promotion) and the routing-rule
phrasing (reconcilable by layering). Folding the few candidate-only assets
into tw-auto's references preserves their value without creating a second
orchestrator or a drift-prone dual authority source, and naturally sequences
the analysis-stage routing behind queue items 4 and 8 (which is option (d)'s
one good point, absorbed into (a)'s "later change" timing). This is a
recommendation only; the decision remains HELD for the project owner.

## 5. Promotion decision

Held — human decision required (handover section 8, open decision:
traceweaver-lifecycle-orchestrator vs tw-auto overlap).

## 6. Held items

The following stay unpromoted pending the owner's overlap decision:

- The entire `traceweaver-lifecycle-orchestrator` candidate (SKILL.md and all
  5 references, hashes in section 1) — no public skill, no distilled guide,
  no packaged reference created.
- The 12-state lifecycle vocabulary and the
  `normal`/`hold`/`reduced_scope`/`exception_path`/`human_decision` route
  modes — candidate-only; folding into tw-auto references is a later
  authorized change under option (a), not performed here.
- The structured `lifecycle_route`/`required_inputs`/`blocking_conditions`/
  `handoff_record` output schema (including `source_preservation_refs`) —
  candidate-only; held with the same disposition.
- The "hold cleared only by the owning skill or an approved exception record"
  rule — candidate-only; held.
- Analysis-stage routing to `architecture-and-interface-reviewer` and
  `design-decision-reviewer` — held until queue items 4 and 8 produce public
  targets; routing to `needs-and-requirements-capture` likewise held behind
  queue item 3.
- `docs/distilled/promotion-status.md` row for this domain — unchanged
  (`private-only`); any state or note change is part of the held decision.
- `plugins/traceweaver-core/skills/tw-auto/` — unchanged; no reconciliation
  edits performed in this review.

## 7. Owner decision (2026-06-12 update)

The project owner decided the held question on 2026-06-12 in the same session
that promoted GAP-TW-2026-06-12-001..007: **option (a) accepted - do not
promote**. The `traceweaver-lifecycle-orchestrator` domain stays private-only;
`tw-auto` remains the public lifecycle-orchestration surface. Folding the
candidate-only routing assets named in section 6 (the 12-state lifecycle
vocabulary, route modes, hold-clearing rule, and structured route-record
schema) into `tw-auto` skill-local references is authorized only as a later,
normally gated change with its own review; it was not performed in this
session. The promotion-status inventory row for this domain now records the
decision.
