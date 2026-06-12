<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: design-decision-reviewer (2026-06-12)

Reviewer: agent session executing
`docs/validation/candidate-baseline-review-protocol.md`.
Promotion target: `guide-only`. Current public state: `private-only`
(no existing public guide; hygiene review is from scratch).

## 1. Scope

- **Domain**: `design-decision-reviewer` — the private-suite skill that
  reviews design decisions (ADRs, design rationale, implementation
  approaches, architecture choices) before they guide implementation.
- **Single lifecycle question** (candidate's own core question): *Is this
  design decision justified by approved authority, tradeoff, risk,
  constraint, or exception?*
- **Motivation**: framework review finding K5 (P2) in
  `docs/validation/traceweaver-framework-design-review-2026-06-12.md`
  flags the trade-study gap — design decisions are reviewed after the fact
  with no method for exploring alternatives. This domain supplies the
  alternatives/tradeoff review rules. Tracked by GAP-TW-2026-06-12-007.
- **Candidate files reviewed** (read-only, scrubbed public-candidate folder
  `/Users/hanneszietsman/CrypotAI/TraceWeaver-private/outputs/agent-skills-public-candidate/design-decision-reviewer/`),
  `shasum -a 256`:

| File | SHA-256 |
|---|---|
| `SKILL.md` | `4c39f198575f25c721ee6dce5b30fa56e859f7c0d63fde772e170313d08c5a19` |
| `references/checklist.md` | `98dc9daa72a2990054fce4c035f8a815865194c1d13b0a7f7cbad7dd1d871cee` |
| `references/examples.md` | `b9b817c153fb6c3a33a3bf0492f88be332f4326f13b7963a2e1fd697c095b737` |
| `references/operating-model.md` | `f0d9fc7c68c309b99cf0a46a1d30543f52152408ab90d52c1293c430531d90bd` |
| `references/output-schema.md` | `c19865367328d160104166271a875794e98e9a84023c02c2d7509aac81e8f33e` |
| `references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

Session access to the scrubbed public-candidate folder was granted by the
project owner for this named review per GAP-TW-2026-06-12-007 (kickoff via
docs/plans/2026-06-12-handover-private-promotion-session.md). No private
seed folders, `batches/` raw sources, extraction notes, conversions, or
standards-alignment-delta files were opened.

## 2. Source Hygiene

| # | Protocol item | Result | Evidence |
|---|---|---|---|
| H1 | Rewritten original TraceWeaver wording; no copied or closely paraphrased standard/handbook text, tables, checklists, examples, ordering, or layout | **Pass** | All six files use TraceWeaver authority vocabulary ("approved authority", "controlled exception", "trace links", "baseline impact", "agent preference is not rationale"). Document layout follows TraceWeaver's own public-candidate skill template (Purpose / Core Question / When To Use / Handoff Rules / Gate), matching the packaged `requirements-reviewer` pattern, not any external publication's structure. The checklist is a 14-item TraceWeaver review list keyed to TraceWeaver record types (authority trace, derived-requirement candidates, baseline impact, V&V impacts) with no recognizable external table or ordering. Examples are TraceWeaver-specific (ADR-012 file-based skill discovery for Light v0.1, `SREQ-RUN-001`, `VER-PLAN-RUN-001`, `GAP-PKG-001`, manual package sync exception) — no textbook or handbook examples. |
| H2 | No source IDs, licensed-source register rows, private local paths, or page references | **Pass** | `grep -rinE "SRC-\|source-id\|register\|page [0-9]\|p\.[0-9]\|pp\.\|section [0-9]+\.[0-9]\|chapter [0-9]\|/Users/\|seed\|batch\|extraction\|conversion\|alignment-delta"` over `SKILL.md` and `references/` returned zero hits. |
| H3 | No claims that TraceWeaver implements or conforms to IEEE, ISO/IEC/IEEE, INCOSE, or any other standard | **Pass** | `grep -rinE "IEEE\|ISO\|IEC\|INCOSE\|SEBoK\|NASA\|handbook\|29148\|15288\|42010\|conform\|compli(an\|es)\|certif"` returned a single hit: the explicit disclaimer in `references/source-basis.md` line 12 ("does not represent certification, endorsement, or implementation of any third-party publication"). No conformance claim anywhere. |
| H4 | Mermaid diagrams are original TraceWeaver semantic views | **Pass (N/A)** | `grep -rin "mermaid"` returned zero hits; the candidate contains no diagrams. |

**Hygiene verdict: PASS** (4/4; H4 vacuously). The candidate is clean for
public promotion as original TraceWeaver guidance.

## 3. Quality Gate

Quality gate executed with the packaged requirements-reviewer model, which
tw-requirements-review routes to
(`plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md`, 0–5
scoring, classify-before-judge, red-flag and escape-clause rules).
Reviewed: the candidate's normative statements — 8 operating-model decision
rules, the SKILL gate statement, 14 checklist items, 7 merged hold
conditions (SKILL failure/hold list + checklist Hold When), 5 handoff
rules, the 7-value decision-status enumeration, and the output schema.

### Scores

| Statement group | Items | Score | Status |
|---|---:|---:|---|
| Decision rules: not-a-requirement; must trace to authority or controlled exception; requirement-meaning change triggers change control; derived requirements stay candidate | 4 | 5 | Approved-quality |
| Decision rules: agent preference is not rationale; implementation convenience is not authority | 2 | 4 | Approved-quality (judgement-based detection, rule itself unambiguous) |
| Decision rule: "Material decisions need alternatives and tradeoff reasoning" | 1 | 3 | Needs revision — see F1 |
| Decision rule: downstream impacts "where relevant" | 1 | 3 | Needs revision — see F2 |
| SKILL gate statement | 1 | 4 | Approved-quality (compound list, single gate condition) |
| Checklist items | 14 | 5 (13), 4 (1) | Approved-quality — see F4 |
| Hold conditions (merged) | 7 | 5 | Approved-quality |
| Handoff rules | 5 | 4 | Approved-quality — see F3 |
| Decision statuses + output schema | 2 | 5 | Approved-quality |

Blocked: 0. Reclassify: 0. No statement scored ≤ 2; nothing in the
candidate is unsafe as packaged guidance.

### Findings and rewrites applied during promotion

- **F1 (Revise — repaired in guide)**: "material decision" is undefined.
  Without a materiality test, an agent can rationalize skipping the
  alternatives/tradeoff requirement — the exact K5 failure mode. Rewrite
  applied in the guide: a decision is material when it constrains
  requirements, creates derived requirements, changes externally visible
  behavior, affects verification/validation evidence or a baseline, or
  would be costly to reverse.
- **F2 (Revise — repaired in guide)**: "Downstream impacts must include
  implementation, V&V, risk, and baseline effects **where relevant**" —
  escape clause (a requirements-reviewer red flag). Rewrite applied in the
  guide: downstream impact review covers a fixed category list
  (requirements, architecture/interfaces, implementation, verification,
  validation, baseline); a category may be recorded empty only after it
  has been checked.
- **F3 (Minor — unified in guide)**: SKILL.md routes "requirement changes"
  to both `requirements-reviewer` and `risk-gap-change-control`, while the
  operating-model table splits "requirement changed" →
  `risk-gap-change-control` and "derived requirement" →
  `requirements-reviewer`. Not contradictory, but two granularities. The
  guide uses the operating-model split (meaning change → change control;
  derived/rewritten requirement text → requirements review).
- **F4 (Minor — wording tightened in guide)**: "Decision ID is stable"
  does not say stable against what. Guide wording: a stable ID that
  survives revision and supersession.

**Quality verdict: PASS for guide-only promotion** with the two repairs
above applied as original TraceWeaver rewrites (no private source material
consulted or needed for the repairs).

## 4. Fit

- **Consumers**:
  - `tw-plan` (`plugins/traceweaver-core/skills/tw-plan/SKILL.md`) —
    planning regularly selects between implementation approaches; the
    guide supplies the alternatives-considered, tradeoff-rationale, and
    derived-requirement rules so plans do not embed unrecorded design
    authority. Fits the existing skill-local reference-loading pattern
    (verification-planner-guide, validation-planner-guide already wired).
  - `tw-doc-review` (`plugins/traceweaver-core/skills/tw-doc-review/SKILL.md`)
    — document review of ADRs, design notes, and plans containing design
    decisions; the guide supplies the review checklist and hold
    conditions before such documents become TraceWeaver input.
- **Promotion target**: `guide-only` — public distilled guide at
  `docs/distilled/design-decision-reviewer-guide.md`, packaged and wired
  into the two consumers by the orchestrator. The full runtime knowledge
  skill (requirements-reviewer pattern) is not part of this promotion.
- **Coverage note**: this addresses the review half of K5's trade-study
  gap (judging whether alternatives and tradeoffs were considered and
  recorded). It does not add a method for *generating* alternatives;
  that remains an open K5 scoping reality.

## 5. Promotion Decision

**PROMOTE to `guide-only`.** Hygiene passed 4/4 with grep evidence; the
quality gate found no blocking statements; the two Revise findings are
repaired by original rewrites in the authored guide; the domain closes a
named framework-review gap (K5) with two ready consumers. Promotion
execution authority for passing domains was granted in the kickoff
(`docs/plans/2026-06-12-handover-private-promotion-session.md`,
GAP-TW-2026-06-12-007); this record is the per-domain evidence the
protocol requires. Authored in this review:
`docs/distilled/design-decision-reviewer-guide.md`. Packaging copies,
consumer load-instruction wiring, and the `promotion-status.md` row update
(`private-only` → `guide-only`) are executed by the orchestrator, then
checked by `traceweaver-smoke-distilled-coverage`.

## 6. Held Items

- The **runtime knowledge skill** for this domain (inline core model plus
  skill-local `references/` per the `requirements-reviewer` pattern)
  remains **unpromoted**; the domain stays guide-only until a further
  candidate baseline review promotes it.
- `references/source-basis.md` is not promoted; the guide carries its own
  original-guidance statement.
- An alternatives-*generation* (trade-study method) capability is not
  provided by this candidate and remains an open K5 item.
- `promotion-status.md` update, plugin packaging copy, and consumer wiring
  are held for the orchestrator (this review does not modify existing
  files).
