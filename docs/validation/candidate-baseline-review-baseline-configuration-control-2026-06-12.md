<!-- TRACEWEAVER: file-role=candidate-baseline-review-record; req=REQ-TW-020; trace=TRACE-TW-010; ver=VAL-TW-011 -->

# Candidate Baseline Review: baseline-configuration-control (2026-06-12)

Executed per `docs/validation/candidate-baseline-review-protocol.md`.
Reviewer: privileged promotion session, 2026-06-12. Promotion target:
`runtime-skill`.

## 1. Scope

- **Domain**: `baseline-configuration-control`.
- **Single lifecycle question** (the candidate's own core question):

  ```text
  What is the controlled baseline, and did anything change after evidence was
  generated?
  ```

- **Candidate files under review** (private repo, read-only), with
  `shasum -a 256` hashes taken 2026-06-12:

  | Candidate file | SHA-256 |
  |---|---|
  | `outputs/agent-skills-public-candidate/baseline-configuration-control/SKILL.md` | `f9755d9c2fe4e9606f69b0b61e40e400883373d33702f47eb02ee6f80a328e4a` |
  | `.../references/checklist.md` | `81d7794d2f639eca54199293d298eb45dd049ac9e484f2775a1efd42a9af4ddc` |
  | `.../references/examples.md` | `697ca5bfed48cca3471f899337ac709a13d71bd72f45d9ef096adc73e2bbf512` |
  | `.../references/operating-model.md` | `fe77cfd2ae53c8f683deb07ef65738587e62c6ae45b484dc617eb568cf0cef13` |
  | `.../references/output-schema.md` | `991d333692bee10c8bbef74e44592dfa689189aee3a703cbae43c9bfb7994f0c` |
  | `.../references/source-basis.md` | `e6a1dd96de5a20530598b8e4a717ed6d844279afe89228bf76fc5121f8c53e5a` |

- **Access note**: Session access to the scrubbed public-candidate folder was
  granted by the project owner for this named review per GAP-TW-2026-06-12-007
  (kickoff via docs/plans/2026-06-12-handover-private-promotion-session.md).
- Only the candidate folder above was read. No private seed folders,
  `batches/` raw sources, conversions, extraction notes, or
  standards-alignment-delta files were opened.
- **Public comparison state**: `docs/distilled/baseline-configuration-control-guide.md`
  (state `guide-only` in `docs/distilled/promotion-status.md`), packaged
  byte-identically as skill-local
  `plugins/traceweaver-core/skills/tw-authority-gate/references/baseline-configuration-control-guide.md`
  and
  `plugins/traceweaver-core/skills/tw-audit/references/baseline-configuration-control-guide.md`
  (verified identical by `diff` during this review).

## 2. Source Hygiene

A material corroborating fact: every candidate file is byte-identical (same
SHA-256, verified by per-file `diff`) to the already-public U4-promoted skill
folder `skills/baseline-configuration-control/` in this repo, which passed the
U4 public hygiene scan recorded as
`TWCORE-U4-SOURCE-PREFLIGHT-BASELINE-CONFIGURATION-001` in
`docs/validation/traceweaver-core-11-promotion-records.md`. This review still
re-verified each protocol item independently:

| Hygiene item | Evidence | Result |
|---|---|---|
| Rewritten original TraceWeaver wording; no copied or closely paraphrased standard/handbook text, tables, checklists, examples, ordering, or layout | Full read of all 6 candidate files. All prose is TraceWeaver-operational voice (skill handoffs by TraceWeaver skill name, `held`/`reduced`/`superseded` status vocabulary, YAML output schema with TraceWeaver field names). The diff-class table, checklist, and examples are TraceWeaver-specific constructions (e.g. fork-diff classification of a skill package, `IMPACT-BASE-004` exception record); no recognizable standard/handbook table, ordering, or layout is reproduced. | PASS |
| No source IDs, licensed-source register rows, private local paths, or page references | `grep -rniE "SRC-|source[-_ ]?id|register|page [0-9]|p\. ?[0-9]|/Users/|priority-docs|batches/|seed|extraction|alignment-delta"` over the candidate folder: zero hits (exit 1). | PASS |
| No claims of IEEE / ISO/IEC/IEEE / INCOSE conformance | `grep -rniE "ieee|iso[ /-]?iec|incose|29148|15288|828|handbook|conform|compliant|certif"` over the candidate folder: single hit is the disclaimer in `references/source-basis.md` ("does not represent certification, endorsement, or implementation of any third-party publication"), which is an anti-claim, not a conformance claim. | PASS |
| Mermaid diagrams are original TraceWeaver semantic views | `grep -rni "mermaid"` over the candidate folder: zero hits. The candidate contains no diagrams; the promoted operating model adds one new diagram authored in this session as an original TraceWeaver semantic view. | PASS |

**Source hygiene verdict: PASS** on all four protocol items. No candidate
material required patching from private sources, and none was performed.

## 3. Quality Gate

Quality gate executed with the packaged requirements-reviewer model, which
tw-requirements-review routes to. The 0-5 scoring model, characteristic
checks (necessary, singular, unambiguous, complete, feasible, verifiable,
correct, consistent, traceable, implementation-neutral, right abstraction),
and outcome vocabulary from
`plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` and its
`references/requirements-quality-operating-model.md` /
`references/requirements-quality-checklist.md` were applied to the candidate's
normative statements (decision rules, gate, hold conditions, checklist,
diff classes, output schema, handoffs).

### Scores

| ID | Normative statement (abbreviated) | Score | Status |
|---|---|---:|---|
| BCC-N-001 | A baseline is a named, controlled set of files, refs, records, and evidence | 5 | Can approve |
| BCC-N-002 | Evidence is valid only for the tested ref, artifact, configuration, and scope it records | 5 | Can approve |
| BCC-N-003 | A final candidate must have one controlling ref for gates, package scope, and release evidence | 5 | Can approve |
| BCC-N-004 | Runtime/package-controlled changes after evidence make affected gates stale unless impact-reviewed | 5 | Can approve |
| BCC-N-005 | "A fork diff is not noise until classified" | 4 | Revise (wording) |
| BCC-N-006 | A task, branch, or local workspace state is not a baseline unless recorded as controlled authority | 5 | Can approve |
| BCC-N-007 | Configuration changes must link to affected needs, requirements, design, implementation, V&V, risks, gaps, and release gates | 4 | Revise (wording) |
| BCC-N-008 | Diff classes table (`no_impact` / `impact_reviewed` / `reset_required` / `blocked` / `superseded`) | 5 | Can approve |
| BCC-N-009 | Failure/hold conditions (six conditions) | 5 | Can approve |
| BCC-N-010 | Per-baseline checklist plus Hold-When list | 4 | Revise (wording) |
| BCC-N-011 | Output schema with conservative defaults (`decision: held`, `classification: reset_required`) and shared status values | 5 | Can approve |
| BCC-N-012 | Gate: "All release gates must reference the same final live candidate commit" | 4 | Revise (consistency) |
| BCC-N-013 | Handoff rules (SKILL.md routing list and operating-model finding table) | 5 | Can approve |

Summary: 13 normative items reviewed; 9 scored 5 (Can approve); 4 scored 4
(Revise, minor wording only); 0 Blocked; 0 Reclassify; 0 Human decision.

### Findings and rewrites applied during promotion

All rewrites are original TraceWeaver wording applied in the promoted skill
text only; the candidate files were not modified.

1. **BCC-N-005** (`vague_language`, minor): "not noise until classified" is
   informal. Promoted wording states the obligation directly: a fork diff must
   be classified before it may be dismissed, and an unclassified behavior
   change is a hold condition. Rule strength preserved.
2. **BCC-N-007** (`ambiguous`, minor): "must link to affected needs,
   requirements, design, implementation, verification, validation, risks,
   gaps, and release gates" could be misread as requiring a link in every
   category. Promoted wording clarifies that a controlled change must link to
   the affected items across those categories, and that "none affected" is a
   recorded rationale, not silence. Rule strength preserved.
3. **BCC-N-010** (`vague_language`, minor): checklist item "Package
   inclusion/exclusion rules are visible" — "visible" is subjective. Promoted
   checklist says the rules must be recorded and locatable from the baseline
   record. Rule strength preserved.
4. **BCC-N-012** (`conflict`, minor internal inconsistency): the gate says
   "same final live candidate **commit**" while the declared inputs accept
   commit, branch, tag, package version, or artifact hash. Promoted gate uses
   "same final candidate ref" with ref defined to cover commit, tag, package
   version, or artifact hash, so the gate and the inputs agree. Rule strength
   preserved (one controlling ref, no weakening).

No normative rule was dropped, weakened, or inverted during promotion. The
conservative schema defaults (`decision: held`, `reset_required`) were kept.

## 4. Fit

- **Consumers**: `tw-authority-gate` (SKILL.md line 31) and `tw-audit`
  (SKILL.md line 39) already load skill-local
  `references/baseline-configuration-control-guide.md` when judging baseline
  identity, authority custody, change control, or uncontrolled-change
  findings. Those guide copies are byte-identical to
  `docs/distilled/baseline-configuration-control-guide.md` and remain in
  place, untouched by this review.
- **What the runtime skill adds beyond the guide**: the guide is a one-page
  summary (decision rules, diff classes, hold conditions, abbreviated output
  shape). The promoted runtime skill adds:
  - a named, loadable knowledge skill with the core model inline in SKILL.md,
    so the rules survive agents that skip reference files;
  - mandatory reference-loading instructions following the
    `requirements-reviewer` pattern;
  - the full output schema with shared header fields (`authority_status`,
    `decision_rationale`, `recommended_next_skill`, `hold_conditions`) and
    conservative held-by-default behavior;
  - the per-baseline checklist with explicit hold conditions;
  - worked examples calibrating clean, stale, and approved-exception
    dispositions, including TraceWeaver-specific cases (Intent Contract
    bounded-snapshot drift; packaged-guide drift against `docs/distilled/`);
  - explicit Authority Boundary, Common Rationalizations, and Red Flags
    material for runtime resistance to "the diff looks harmless" pressure;
  - Integration rules binding baseline identity to the Intent Contract
    (`.traceweaver/intent-contract.yml`) and `requirements.md` versioning, so
    authority decisions cite the current baseline version/hash.
- **Promotion target**: `runtime-skill`, matching queue item 6 in the
  protocol and the handover plan. Knowledge skills are internal (not `tw-*`
  prefixed), are not directly callable, and do not enter
  `expected_direct_skills`.

## 5. Promotion Decision

**PROMOTE** `baseline-configuration-control` from `guide-only` to
`runtime-skill`.

Rationale: source hygiene passes on all four protocol items (independently
re-verified and corroborated by the prior U4 hygiene scan of the byte-identical
public skill folder); the quality gate found no blocking, reclassification, or
human-decision findings — only four minor wording revisions, all applied in
the promoted text in original TraceWeaver wording with rule strength
preserved; the domain has two live consumers (`tw-authority-gate`, `tw-audit`)
whose baseline judgments currently rest on a summary guide, and the runtime
skill supplies the operating model, checklist, output schema, and calibration
examples those judgments need.

Authority note: promotion execution authority for passing domains was granted
in the kickoff (docs/plans/2026-06-12-handover-private-promotion-session.md,
per GAP-TW-2026-06-12-007). This promotion is executed under that grant as
advisory alpha material under candidate authority. It does not mutate
`requirements.md`, the Intent Contract baseline, or any existing file; it adds
the new skill folder and this review record only.

Promoted files (all new; written in this session):

- `plugins/traceweaver-core/skills/baseline-configuration-control/SKILL.md`
- `plugins/traceweaver-core/skills/baseline-configuration-control/references/baseline-control-operating-model.md`
- `plugins/traceweaver-core/skills/baseline-configuration-control/references/baseline-control-checklist.md`
- `plugins/traceweaver-core/skills/baseline-configuration-control/references/baseline-control-output-schema.md`
- `plugins/traceweaver-core/skills/baseline-configuration-control/references/source-basis.md`
- `plugins/traceweaver-core/skills/baseline-configuration-control/tests/baseline-control-examples.md`

## 6. Held Items

These items are required to complete wiring but are held because this session
must not modify existing files:

1. **Consumer wiring**: update `tw-authority-gate/SKILL.md` and
   `tw-audit/SKILL.md` to route baseline-identity, custody, and stale-evidence
   judgments to the packaged `baseline-configuration-control` skill by name
   (pattern: how `tw-requirements-review` routes to `requirements-reviewer`).
   The existing skill-local guide load lines may remain or be replaced at the
   orchestrator's discretion.
2. **Promotion status**: flip `baseline-configuration-control` from
   `guide-only` to `runtime-skill` in `docs/distilled/promotion-status.md`
   and add the skill to its runtime-consumers column.
3. **Smoke counts**: `scripts/traceweaver-smoke-tw-skill-behavior` asserts
   `skill_file_total=47` (line 450) and `anchored_skill_total=42` (line 454).
   Adding this skill directory makes the actuals 48 and 43; both assertions
   must be bumped or the smoke fails.
4. **Repo-root duplicate**: `skills/baseline-configuration-control/` (the U4
   public skill folder) is byte-identical to the candidate and now overlaps
   the packaged skill. Whether it remains as the U4 artifact or is reconciled
   is an owner/orchestrator decision; not changed here.
5. **No `agents/` directory** was created for this skill (the
   `requirements-reviewer` template has one); adding one is a follow-up
   decision.
6. **Verification run**: the full local smoke suite (per the handover plan,
   including `traceweaver-smoke-distilled-coverage` and
   `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 traceweaver-smoke-tw-skill-behavior`)
   must run after items 1-3 land and before push.
7. **Human decisions unchanged**: promotion of GAP-TW-2026-06-12-001..007
   proposed requirements into `requirements.md` remains an owner decision.
