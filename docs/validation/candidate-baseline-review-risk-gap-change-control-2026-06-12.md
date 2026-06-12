<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: risk-gap-change-control (2026-06-12)

Executed per `docs/validation/candidate-baseline-review-protocol.md`.
Promotion target: `runtime-skill` (queue item 7 in the protocol).

## 1. Scope

- **Domain**: `risk-gap-change-control` (private suite name). The existing
  public output for this domain is the distilled guide
  `docs/distilled/risk-gap-and-change-control-guide.md` (note the guide
  filename differs slightly from the domain name), packaged at
  `plugins/traceweaver-core/references/risk-gap-and-change-control-guide.md`.
- **Single lifecycle question** (the candidate's own core question):

  ```text
  How do we handle approved gaps, accepted risks, weak requirements, and
  requirement changes?
  ```

  In other words: how deviation from the approved authority path is kept
  explicit, owned, bounded, and reviewable instead of becoming hidden
  authority.
- **Candidate files under review** (read-only, scrubbed public-candidate
  folder; `shasum -a 256`):

  | Candidate file | SHA-256 |
  |---|---|
  | `outputs/agent-skills-public-candidate/risk-gap-change-control/SKILL.md` | `983a7368589376de6f5c61693e1fbd6815ed0c8d72033ca4199ceaf06966f22a` |
  | `outputs/agent-skills-public-candidate/risk-gap-change-control/references/operating-model.md` | `6aa6a330168ac771e26befba6c5e760a3bf5ef49a20886790441a47e055c1e60` |
  | `outputs/agent-skills-public-candidate/risk-gap-change-control/references/checklist.md` | `aeabca78937d6710777fa468af85961bd75da21cca2deb35abc5ab79f5b39725` |
  | `outputs/agent-skills-public-candidate/risk-gap-change-control/references/output-schema.md` | `373eab9033717a4e0b826c76f643a0c5f55e3855212214bcd3b67e8b72669b2c` |
  | `outputs/agent-skills-public-candidate/risk-gap-change-control/references/examples.md` | `cc6dda26245101fe4579ce2845dd14a70f3884918ccd74c864be4b8883f213f1` |
  | `outputs/agent-skills-public-candidate/risk-gap-change-control/references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

- **Access note**: Session access to the scrubbed public-candidate folder was
  granted by the project owner for this named review per GAP-TW-2026-06-12-007
  (kickoff via docs/plans/2026-06-12-handover-private-promotion-session.md).
  Only the candidate folder above was read; no seed folders, `batches/`,
  conversions, extraction notes, or standards-alignment-delta files were
  opened.

## 2. Source Hygiene

Each protocol item was verified over all 6 candidate files with recursive
grep plus a full manual read of every file.

| # | Hygiene item | Result | Evidence |
|---|---|---|---|
| H1 | Rewritten original TraceWeaver wording; no copied or closely paraphrased standard/handbook text, tables, checklists, examples, ordering, or layout | PASS | Full read of all 6 files. Vocabulary and structure are TraceWeaver-native throughout (`approved gap`, `traceability debt`, `weak requirement exception`, `authority`, `revisit_trigger`, skill handoffs to `requirements-reviewer` / `systems-engineering-traceability`); the only tables are the candidate's own outcomes table and YAML schemas, both in the established TraceWeaver candidate-skill layout already used by the packaged `requirements-reviewer`. No handbook-style process tables, numbered clause structures, or source-ordered checklists. The single example is a TraceWeaver-specific YAML record, not a sourced example. |
| H2 | No source IDs, licensed-source register rows, private local paths, or page references | PASS | `grep -rniE "page [0-9]\|p\.[0-9]\|pp\.\|SRC-\|seed\|batch\|extraction\|register\|/Users/\|licensed\|conversion\|alignment-delta"` over the candidate folder: 0 matches (exit 1). |
| H3 | No claims that TraceWeaver implements or conforms to IEEE, ISO/IEC/IEEE, INCOSE, or any other standard | PASS | `grep -rniE "IEEE\|ISO\|IEC\|INCOSE\|SEBoK\|NASA\|handbook\|29148\|15288\|24748\|standard"`: 0 matches (exit 1). `grep -rniE "conform\|complian\|certif"`: 1 match, and it is the candidate `source-basis.md` disclaimer stating the skill "does not represent certification, endorsement, or implementation of any third-party publication" — an explicit non-conformance disclaimer, not a claim. |
| H4 | Mermaid diagrams are original TraceWeaver semantic views | PASS (vacuous) | `grep -rni "mermaid"`: 0 matches — the candidate contains no Mermaid diagrams. The promoted skill's operating-model diagram is authored fresh in this session as an original TraceWeaver semantic view (record-control flow over TraceWeaver record types). |

**Hygiene verdict: PASS** on all items. No candidate material required
patching from private sources; promotion proceeds from the candidate text
alone plus original TraceWeaver expansion.

## 3. Quality Gate

Quality gate executed with the packaged requirements-reviewer model, which
tw-requirements-review routes to. The candidate's normative statements (the
SKILL gate, authority boundary, hold conditions, operating-model decision
rules, checklist items, block conditions, and output schema obligations) were
treated as candidate authority statements and scored on the packaged 0-5
model.

### Scores

| Normative statement group | Source | Score | Status |
|---|---|---:|---|
| Gate: "An exception is only controlled when it is explicit, owned, bounded, reviewed, and linked to affected authority and evidence." | SKILL.md | 5 | Can approve |
| Authority boundary: records and controls exceptions; does not make weak authority good or approve risk without human/project decision evidence | SKILL.md | 5 | Can approve |
| When-not-to-use rules (no closing gaps without approval; no hiding weakness as ordinary follow-up; no silent authority updates) | SKILL.md | 5 | Can approve |
| Handoff rules (requirements wording -> requirements-reviewer; trace rows -> systems-engineering-traceability; baseline deltas -> baseline-configuration-control; V&V gaps -> verification/validation planner) | SKILL.md | 4 | Revise (target naming; see RGC-Q-003) |
| Hold conditions (no owner/scope/approval/trigger/closure; hidden missing authority; impact analysis skips V&V/trace/baseline; deferred validation treated as permanent) | SKILL.md | 4 | Revise (one judgment-worded item; see RGC-Q-004) |
| Decision rules: definitions of gap, risk, traceability debt, weak requirement exception; change impact set; deferred V&V requirements; "unowned exceptions are not approved"; every exception needs review condition and expiry/closure trigger | operating-model.md | 5 | Can approve |
| Exception type taxonomy (8 types) and outcomes table (`accept`/`revise`/`defer`/`block`/`escalate`/`close`) | operating-model.md | 5 | Can approve |
| Per-record checklist (14 checks) | checklist.md | 4 | Revise (two items; see RGC-Q-001) |
| Block-when conditions (6) | checklist.md | 5 | Can approve |
| Output schema: envelope, `controlled_record`, finding record, record types | output-schema.md | 4 | Revise (field-name consistency; see RGC-Q-002) |
| Example: weak requirement exception | examples.md | 4 | Revise (aligns to schema field name; coverage thin for a runtime skill) |

No statement scored at or below 2; nothing is blocked, reclassified, or
unsafe as packaged guidance. Findings and the rewrites applied during
promotion:

### Findings And Promotion Rewrites

- **RGC-Q-001 (minor, `escape_clause`)** — checklist item "Baseline impact is
  assessed when relevant." uses an undeterminable trigger ("when relevant"),
  and "Allowed scope is bounded." gives no test for "bounded". Rewritten in
  the promoted checklist with determinable conditions: baseline impact must be
  assessed when any affected item belongs to an approved baseline, and allowed
  scope must name both what may proceed and what remains blocked.
- **RGC-Q-002 (minor, `conflict`)** — the candidate example uses field name
  `decision:` where the candidate output schema defines `record_decision:`.
  The promoted examples and schema consistently use `record_decision` for the
  per-record decision (the envelope-level `decision` remains the
  session-outcome field, matching the packaged output-schema conventions).
- **RGC-Q-003 (minor, `missing_parent_or_source`)** — the candidate handoff
  targets `baseline-configuration-control`, `verification-planner`, and
  `validation-planner` named private-suite domains that were `guide-only` in
  the public plugin when this review started. Resolved during this promotion
  session: the parallel per-domain reviews promoted all three to packaged
  runtime skills in this same working tree, so the promoted handoff rules
  route to those skills by name, exactly as the candidate wrote them. No
  rewrite was needed beyond confirming the targets exist.
- **RGC-Q-004 (note)** — hold condition "Risk/gap hides missing authority" is
  judgment-worded. The promoted text adds the operational test: a recorded
  risk or gap is a held condition, not permission — if work proceeds on the
  record alone, the record is hiding missing authority.
- **RGC-Q-005 (note, coverage)** — the candidate ships a single example. The
  promoted `tests/risk-gap-change-examples.md` keeps that example (aligned per
  RGC-Q-002) and adds two original TraceWeaver-specific examples: an
  uncontrolled requirement change routed through a `CHG-*` record shaped on
  `plugins/traceweaver-core/references/change-template.yml`, and a recorded
  gap wrongly cited as authority, resolved against
  `plugins/traceweaver-core/references/gap-template.yml` semantics.

All rewrites are original TraceWeaver wording authored in this session; no
private material beyond the candidate folder informed them. Every candidate
normative rule is preserved in the promoted skill.

## 4. Fit

- **Current consumer**: the `systems-engineering-traceability` knowledge
  skill, which loads the packaged guide via its SKILL.md line "For risk
  controls, approved gaps, traceability debt, dark-code candidates, and
  change control, use `references/risk-gap-and-change-control-guide.md`."
  (`plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md`).
- **Runtime-skill consumers**: the runtime skill will additionally serve
  `tw-audit` (gap/exception/change closure checks before completion or
  release claims) and gap/change/exception routing across the `tw-*`
  wrappers, which already emit records to `.traceweaver/gaps/`,
  `.traceweaver/changes/`, and `.traceweaver/exceptions/` (see `tw-grill`
  step routing) using `plugins/traceweaver-core/references/gap-template.yml`,
  `change-template.yml`, and `exception-template.yml`.
- **What the runtime skill adds beyond the existing guide**: the guide is
  matrix-facing — row shapes for `RISK-*`/`GAP-*`/`TD-*`, dark-code
  classification, change-control trigger lists, and a runtime checklist. It
  does not give an agent an invokable per-record procedure. The runtime skill
  adds: (1) a classify -> record -> link -> decide -> emit process per
  exception; (2) a machine-readable output schema for controlled records and
  findings with an explicit outcome vocabulary
  (`accept`/`revise`/`defer`/`block`/`escalate`/`close`); (3) block
  conditions that make uncontrolled exceptions fail loudly; (4) handoff
  routing to the peer skills and guides; (5) integration rules that bind the
  record types to the plugin's `.traceweaver/` record templates and state
  explicitly that a recorded gap is a held condition, not permission. The
  guide remains packaged and wired unchanged; the skill references it for the
  matrix row shapes rather than duplicating them.
- **Promotion target**: `runtime-skill`, per the protocol queue.

## 5. Promotion Decision

**PROMOTE** to `runtime-skill`.

Rationale: source hygiene passes on all four protocol items with grep and
full-read evidence; the quality gate found no blocking statements (worst
finding severity: minor) and all findings were resolved by original-wording
rewrites recorded above; the domain has a clear consumer need beyond the
existing guide (tw-audit closure checks and `.traceweaver/` record routing
across wrappers); and the candidate's normative core is consistent with the
already-published guide, so promotion creates no contradiction in packaged
authority.

Promotion execution authority for passing domains was granted in the kickoff
(docs/plans/2026-06-12-handover-private-promotion-session.md, per
GAP-TW-2026-06-12-007); this record documents the per-domain review the
protocol requires before that authority is exercised. The promotion remains
advisory-alpha material under candidate authority — it does not promote any
GAP-TW proposed requirement into `requirements.md`, which stays a human
decision.

Files authored by this promotion (all new; no existing file modified):

- `plugins/traceweaver-core/skills/risk-gap-change-control/SKILL.md`
- `plugins/traceweaver-core/skills/risk-gap-change-control/references/risk-gap-change-operating-model.md`
- `plugins/traceweaver-core/skills/risk-gap-change-control/references/risk-gap-change-checklist.md`
- `plugins/traceweaver-core/skills/risk-gap-change-control/references/risk-gap-change-output-schema.md`
- `plugins/traceweaver-core/skills/risk-gap-change-control/references/source-basis.md`
- `plugins/traceweaver-core/skills/risk-gap-change-control/tests/risk-gap-change-examples.md`

## 6. Held Items

Held for the orchestrator / project owner (this session writes only new
files):

1. `docs/distilled/promotion-status.md` row for `risk-gap-change-control`
   must move from `guide-only` to `runtime-skill` and add the new skill plus
   `tw-audit` to its consumers column (existing-file edit, held).
2. Smoke counters in `scripts/traceweaver-smoke-tw-skill-behavior` must be
   bumped by +1 for this skill directory on both `skill_file_total`
   (pre-session base 47) and `anchored_skill_total` (pre-session base 42; the
   new SKILL.md carries a TRACEWEAVER anchor). Parallel promotions in this
   session add their own +1s, so the orchestrator should set the final totals
   once after all promotions land.
3. Consumer wiring edits are held: `tw-audit` (and any other wrapper that
   should route risk/gap/exception/change work to the new skill by name) and
   the `systems-engineering-traceability` SKILL.md cross-reference are
   existing files and were not modified.
4. The new skill is a knowledge skill (not `tw-*` prefixed): it must NOT be
   added to `expected_direct_skills` / `expected_visible_skills` /
   `identity_skills` in the codex discovery smokes. No action needed unless a
   wrapper is added.
5. Candidate `examples.md` coverage note (RGC-Q-005) is closed by the added
   TraceWeaver examples; no residual held finding from the quality gate.
6. Closed during this session: handoff targets `verification-planner`,
   `validation-planner`, and `baseline-configuration-control` were promoted
   to runtime skills by the parallel per-domain reviews in this same working
   tree, so the new SKILL.md routes to them by name (matching the candidate).
   If any of those parallel promotions is reverted before merge, the
   corresponding handoff bullet must be repointed at the packaged guide
   (`references/<domain>-guide.md`).
