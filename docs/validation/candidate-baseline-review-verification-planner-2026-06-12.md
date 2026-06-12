<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: verification-planner (2026-06-12)

Protocol: `docs/validation/candidate-baseline-review-protocol.md` (GAP-TW-2026-06-12-007).
Promotion target under review: `guide-only` -> `runtime-skill`.

## 1. Scope

- **Domain**: `verification-planner` — planning objective proof that the built
  artifact satisfies approved requirements.
- **Single lifecycle question** (candidate's own core question): *How will we
  prove we built it right?*
- **Candidate files under review** (private scrubbed public-candidate folder,
  read-only), `shasum -a 256`:

| File | SHA-256 |
|---|---|
| `outputs/agent-skills-public-candidate/verification-planner/SKILL.md` | `62856c94ec1658779fd7d4be4e398fa8c9cbf8a17a26dafb00730f2ec44e89c2` |
| `outputs/agent-skills-public-candidate/verification-planner/references/checklist.md` | `988aab0d3fbb5cb8ed369d3594e69be0875d455e340059ebfaba9172e56eadfc` |
| `outputs/agent-skills-public-candidate/verification-planner/references/examples.md` | `f0b3ad0ba987ba18f9b00a784c8726da456a56b1f99ae6faa08201346787a373` |
| `outputs/agent-skills-public-candidate/verification-planner/references/operating-model.md` | `e8f6d465f735ef8263a340f7336b0bc764ab64893893eb2eff2a32d9ae302fc6` |
| `outputs/agent-skills-public-candidate/verification-planner/references/output-schema.md` | `db2a728f4f36ec3ead12db17480a812aeef6f7f8cc9c4e4e58b59bf4ae76422b` |
| `outputs/agent-skills-public-candidate/verification-planner/references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

- **Access note**: Session access to the scrubbed public-candidate folder was
  granted by the project owner for this named review per GAP-TW-2026-06-12-007
  (kickoff via `docs/plans/2026-06-12-handover-private-promotion-session.md`).
  Only the candidate folder above was read; no seed folders, `batches/`,
  conversions, extraction notes, or standards-alignment-delta files were
  opened.

## 2. Source Hygiene

Each protocol item verified over all 6 candidate files.

| # | Hygiene item | Evidence | Result |
|---|---|---|---|
| H1 | Rewritten original TraceWeaver wording; no copied or closely paraphrased standard/handbook text, tables, checklists, examples, ordering, or layout | Manual read of all 6 files. All normative content is TraceWeaver-shaped: TraceWeaver ID schemes (`SREQ-*`, `VER-PLAN-*`, `VER-*`, `ATP-*`, `GAP-VER-*`), TraceWeaver-specific verification targets (target runtime discovery, skill loading, metadata parsing, reference loading, routing behavior, package layout, harness equivalence), and TraceWeaver lifecycle vocabulary (tested ref, evidence path, authority state, hold conditions). Tables are short TraceWeaver routing/checklist tables, not standard-style verification matrices. Text closely matches the already-public, previously hygiene-reviewed `docs/distilled/verification-planner-guide.md` rather than any external layout. The four-method vocabulary (inspection, analysis, demonstration, test) is a generally known engineering concept already used in the public requirements-reviewer package. | PASS |
| H2 | No source IDs, licensed-source register rows, private local paths, or page references | `grep -rinE "SRC-\|source[- ]id\|register\|page [0-9]\|p\.[0-9]\|pp\.\|/Users/\|batches/\|seed\|extraction\|alignment-delta\|licensed" SKILL.md references/` returned no matches (exit 1). | PASS |
| H3 | No claims of IEEE / ISO/IEC/IEEE / INCOSE (or other standard) conformance | `grep -rinE "IEEE\|ISO\|IEC\|INCOSE\|SEBoK\|NASA\|handbook\|standard\|29148\|15288\|1012\|conform\|compliant\|certif"` returned a single match: the candidate `references/source-basis.md` line 12, which is an explicit *non-claim* ("This skill does not represent certification, endorsement, or implementation of any third-party publication."). No standard is named anywhere in the candidate. | PASS |
| H4 | Mermaid diagrams are original TraceWeaver semantic views | `grep -rn "mermaid" SKILL.md references/` returned no matches; the candidate contains no diagrams. The one Mermaid diagram added during promotion (verification-planning flow in `references/verification-planning-operating-model.md`) is a new TraceWeaver semantic view authored in this session, not derived from any source figure. | PASS (N/A in candidate; promoted diagram original) |

**Hygiene verdict: PASS** on all items. No held hygiene findings.

## 3. Quality Gate

Quality gate executed with the packaged requirements-reviewer model, which
`tw-requirements-review` routes to. The 0-5 scoring model, characteristics
checks (singular, unambiguous, verifiable, traceable, implementation-neutral),
and red-flag rules from
`plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` and its
`references/` were applied to the candidate's normative statements (gate
statement, decision rules, checklist items, hold conditions, output schema,
handoff rules).

### Scores

| Normative statement (candidate) | Score | Status |
|---|---:|---|
| Gate: "A requirement is not verification-ready until a reviewer can see what will be checked, by which method, in which environment, against which ref, with what pass/fail criteria, and where the result will be recorded." | 5 | Can approve |
| Decision rule: "Verification checks implementation or artifact behavior against requirements." | 5 | Can approve |
| Decision rule: "A test command is not enough; evidence needs requirement ID, method, setup, tested ref, expected result, actual result, outcome, and record path." | 5 | Can approve |
| Decision rule: "A local harness can support evidence only when its equivalence to the target runtime is stated." | 5 | Can approve |
| Decision rule: "Failed, partial, blocked, or deferred verification creates a record and a handoff, not silence." | 5 | Can approve |
| Decision rule: "Verification planning starts before implementation when requirements are important enough to guide build." | 3 | Revise (vague_language: "important enough") |
| Checklist: "Harness equivalence is addressed when relevant." | 3 | Revise (escape_clause: "when relevant") |
| Hold condition: "Success criteria are vague." | 4 | Revise (minor: trigger itself subjective; needs objective test) |
| Hold condition: "Method does not prove the requirement." | 4 | Can approve (reviewer-judgment gate, acceptable) |
| Output schema `decision` field (value `held` shown, no enumerated value set; examples use `approved_with_exception` which the schema does not declare) | 3 | Revise (incomplete: missing decision enumeration) |
| Outcomes enumeration (`pass`/`fail`/`partial`/`blocked`/`deferred`) | 5 | Can approve |
| Handoff rules table (5 routes) | 5 | Can approve |
| Remaining checklist items (ID stable, authority explicit, method selected, criteria measurable, procedure defined, environment defined, tested ref recorded, expected/actual result, evidence path, owner, handoff route) | 4-5 | Can approve |

Summary: 0 blocked, 0 reclassify, 3 revise, remainder approve-quality. No
statement was unsafe as packaged authority; the three revisions are wording
and completeness fixes whose intent is clear, so original rewrites were
applied during promotion (per the requirements-reviewer rule that rewrites are
suggested only when intent is clear).

### Rewrites applied during promotion

| Candidate text | Promoted rewrite | Reason |
|---|---|---|
| "Verification planning starts before implementation when requirements are important enough to guide build." | "Verification planning starts before implementation whenever the work is meaningful behavior under TraceWeaver authority controls." | Removes the subjective "important enough" trigger; binds to the existing TraceWeaver meaningful-behavior gate. |
| "Harness equivalence is addressed when relevant." | "Harness equivalence is stated whenever the execution environment differs from the target runtime." | Removes the escape clause; makes the trigger objective. |
| Hold: "Success criteria are vague." | "Success criteria lack an objective pass/fail condition, threshold, or inspectable artifact." | Makes the hold trigger checkable. |
| Output schema `decision` undeclared value set | Promoted schema enumerates `decision: ready \| held \| approved_with_exception` | Closes the schema/example inconsistency (examples used `approved_with_exception`). |

No normative rule was dropped; every candidate rule survives in the promoted
skill, some with the tightened wording above.

## 4. Fit

Consumers (current wiring): `tw-plan`, `tw-test-browser`, `tw-test-xcode`
already load the skill-local copy of `verification-planner-guide.md`
(`plugins/traceweaver-core/skills/tw-plan/SKILL.md` line 33,
`tw-test-browser/SKILL.md` line 26, `tw-test-xcode/SKILL.md` line 26).

What the runtime skill adds beyond `docs/distilled/verification-planner-guide.md`:

- an **active planning process** (identify -> select method -> define criteria
  -> define procedure/environment/evidence -> link ref and equivalence -> emit
  plan and execution record), not just summary decision rules;
- a **mandatory per-requirement checklist** with hold triggers and a single
  declared readiness outcome;
- a **complete output schema** with enumerated `decision` and `outcome` values,
  required-field semantics, and an execution record template suitable for
  matrix linkage;
- **calibrated examples** including TraceWeaver-specific smoke-script-vs-
  inspection evidence and harness-equivalence cases;
- **rationalization and red-flag tables** so agents recognize weak verification
  claims, mirroring the requirements-reviewer enforcement style;
- a stable internal skill the `tw-*` wrappers can route to by name instead of
  each carrying only a guide summary.

Promotion target: `runtime-skill` (queue item 2 in the protocol). The guide
remains in place; consumer rewiring is held for the orchestrator (see
section 6).

## 5. Promotion Decision

**Decision: PROMOTE to `runtime-skill`.**

Rationale: all four hygiene items pass with recorded evidence; the quality
gate found no blocking or reclassification findings, and the three revise-
level findings were resolved with original rewrites whose intent was
unambiguous; the domain has three live consumers that currently get only
summary guidance; the promoted skill follows the established
requirements-reviewer pattern exactly (inline core model, mandatory reference
loading, skill-local references, original TraceWeaver wording, TRACEWEAVER
anchor).

Authority: promotion execution authority for passing domains was granted in
the session kickoff (`docs/plans/2026-06-12-handover-private-promotion-session.md`,
per GAP-TW-2026-06-12-007). This record prepares and documents the evidence;
promotion into requirements-baseline authority remains a controlled product
decision by the project owner per the protocol's Boundaries section.

Promoted files (all new; no existing file modified):

- `plugins/traceweaver-core/skills/verification-planner/SKILL.md`
- `plugins/traceweaver-core/skills/verification-planner/references/verification-planning-operating-model.md`
- `plugins/traceweaver-core/skills/verification-planner/references/verification-planning-checklist.md`
- `plugins/traceweaver-core/skills/verification-planner/references/verification-plan-output-schema.md`
- `plugins/traceweaver-core/skills/verification-planner/references/source-basis.md`
- `plugins/traceweaver-core/skills/verification-planner/tests/verification-planning-examples.md`

## 6. Held Items

Held for the orchestrator / follow-up work (this session was scoped to not
modify existing files):

1. **Consumer rewiring**: `tw-plan`, `tw-test-browser`, and `tw-test-xcode`
   still load `references/verification-planner-guide.md`; they should
   additionally route substantive verification planning to the
   `verification-planner` skill by name (pattern: how `tw-requirements-review`
   routes to `requirements-reviewer`).
2. **`docs/distilled/promotion-status.md`**: verification-planner row state
   must move `guide-only` -> `runtime-skill` with the new skill listed as a
   runtime consumer.
3. **Smoke count bumps**: `scripts/traceweaver-smoke-tw-skill-behavior`
   expects `skill_file_total=47` and `anchored_skill_total=42` (lines
   450/454); the new anchored SKILL.md makes these 48 and 43.
4. **No `agents/` directory** was created for verification-planner (explicit
   session instruction); requirements-reviewer has one, so parity is a
   deliberate later decision.
5. **No new `tw-*` wrapper** was created; `expected_direct_skills` /
   `expected_visible_skills` / `identity_skills` in the codex smokes are
   unchanged by design (knowledge skills are internal and not directly
   callable).
6. **Guide/skill overlap**: the distilled guide stays authoritative for the
   summary view; if the guide and skill ever drift, the skill's operating
   model is the richer surface — a future reconciliation rule may be wanted.
