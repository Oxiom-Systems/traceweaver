---
id: PLAN-TW-2026-05-05-002
title: TraceWeaver Skill Behavior Audit
status: draft
date: 2026-05-05
owner: Oxiom Systems
branch: codex/tw-skill-behavior-audit
base: codex/auth-safe-runtime-proof
---

# TraceWeaver Skill Behavior Audit Plan

## Purpose

Audit whether the TraceWeaver skill model behaves as intended when applied to
TraceWeaver itself and to a representative new-project bootstrap. The audit must
answer whether TraceWeaver can improve coding work by preserving authority,
requirements quality, traceability, verification, validation, and held-claim
boundaries while still allowing CE skills to do useful planning, work, and
review.

## Authority Capsule

Controlling authority:

- `requirements.md`
- `.traceweaver/intent-contract.yml`
- `traceability-matrix.md`
- `docs/validation/traceweaver-dogfood-audit.md`
- `docs/validation/traceweaver-u9-codex-runtime-discovery.md`
- `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- `docs/plans/2026-05-05-001-feat-traceweaver-dogfood-audit-plan.md`
- Compound Engineering 3.5.0 source worktree:
  `/Users/hanneszietsman/CrypotAI/compound-engineering-plugin-main-3.5.0`
  at upstream commit `1f3c6466e4eb4e1b584c658953dfb1ca98dd3335`

Private source-oracle boundary:

- Use the private TraceWeaver source-custody repo only as internal source
  custody and quality-oracle context.
- Do not copy or closely paraphrase private standards text, source-specific
  tables, layouts, diagrams, source IDs, or page references into public runtime
  files.
- Public outputs must use original TraceWeaver wording and may claim only
  TraceWeaver-reviewed behavior, not IEEE, ISO/IEC/IEEE, INCOSE, or other formal
  standard conformance.

## Current Accepted Scope

Accepted:

- Manual/advisory TraceWeaver dogfood evidence for the current repository.
- Static/install evidence for `tw-auto`, `lfg`, `tw-grill`, and TW adapters.
- Constrained active-host `tw-authority-gate` runtime invocation proof under the
  Unit 11 host reconciliation boundary.

Held:

- Real TW skill runtime invocation beyond the constrained Unit 11
  `tw-authority-gate` sentinel proof, including `tw-requirements-review`,
  `tw-traceability-check`, `tw-code-review`, `tw-doc-review`, `tw-auto`,
  `lfg`, and `tw-grill`.
- Wrapped CE continuity runtime behavior beyond active-surface visibility,
  including `ce-debug`, `ce-commit`, and `ce-commit-push-pr`.
- Project-level trace/matrix/gap/change/exception writes.
- Code/test trace-anchor scanner behavior, matrix code-anchor table behavior,
  `tw-code-review` enforcement, and dead-TDD classification.
- Structured `tw-traceability-check` finding emission, severity mapping,
  file/line anchoring, Codex `::code-comment` output, and review-wrapper
  integration.
- Clean CE replacement.
- Full CE 3.5.0 plugin parity and support for unclassified CE 3.5.0
  surfaces.
- Enforcing authority-gate behavior.
- Slash-command or prompt availability claims.
- Autonomous commit/push/PR publication.
- Release-ready, package-ready, upstream-ready, R31, and unconstrained host
  support.

## Audit Questions

1. Does `tw-requirements-review` identify weak, contradictory, missing, and
   unverifiable requirements in a way that matches TraceWeaver's distilled
   requirements and V&V principles?
2. Does `tw-authority-gate` fail closed when authority files, hashes, trace
   links, verification evidence, or validation intent are missing or stale?
3. Does `tw-traceability-check` identify missing matrix links, dark-behavior
   candidates, missing verification, missing validation, and unsupported done
   claims?
4. Does `tw-grill` deepen intent as source evidence without approving
   implementation authority?
5. Do `tw-code-review` and `tw-doc-review` make the TW-controlled review path
   the normal path by running requirements/traceability preflights before
   delegating to CE review skills?
6. Does `tw-auto` orchestrate TW gates and CE skills in the intended order,
   stopping before unsupported implementation, trace-write, review, commit,
   push, PR, release, or replacement claims?
7. Do wrapped CE skills, including `ce-debug`, `ce-commit`, and
   `ce-commit-push-pr`, preserve useful CE behavior while obeying TraceWeaver
   publication-gated and held-claim constraints?
8. Does the wrapper backlog cover every CE 3.5.0 skill directory from the clean
   source surface, including newly observed or previously missed surfaces such
   as `ce-riffrec-feedback-analysis`?
9. Do the produced outputs include the metrics, traceability evidence, Mermaid
   or derived views, and code-level trace cues that users expect, or are those
   still explicit gaps?
10. Do code/test trace anchors give contributors a navigable path from
    requirement to behavior-bearing file, high-level function, test/fixture,
    verification evidence, and dead-TDD candidate detection without requiring
    line-by-line annotations?

## Implementation Units

### Unit 0: Refresh CE 3.5.0 Source Surface

Files:

- Modify: `requirements.md`
- Modify: `traceability-matrix.md`
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Modify: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- Modify if needed: `docs/plans/2026-05-02-001-feat-full-ce-341-traceweaver-authority-wrapping-plan.md`

Work:

- Use `/Users/hanneszietsman/CrypotAI/compound-engineering-plugin-main-3.5.0`
  as the current CE source surface.
- Record the CE 3.5.0 commit, package/plugin manifest hashes, skill counts,
  missing TraceWeaver-packaged skills, and review-pending wrapper route
  classifications.
- Mark historical CE 3.4.1/3.4.2 records as historical or superseded for
  current wrapper-backlog decisions rather than active source authority.

Verification:

- The source-surface rows identify CE 3.5.0 at commit
  `1f3c6466e4eb4e1b584c658953dfb1ca98dd3335`.
- The backlog includes all 38 CE 3.5.0 `ce-*` skill directories plus upstream
  `lfg`, and explicitly keeps clean replacement/full parity held.
- Stale 3.4.1/3.4.2 wording does not remain as active current-source authority.

### Unit 1: Build Behavior Contracts

Files:

- Create: `docs/validation/traceweaver-skill-behavior-audit.md`
- Modify: `traceability-matrix.md`
- Modify: `.traceweaver/intent-contract.yml`

Work:

- Define an expected behavior contract for each public TW skill and selected
  wrapped CE continuity skill:
  `tw-requirements-review`, `tw-authority-gate`, `tw-traceability-check`,
  `tw-code-review`, `tw-doc-review`, `tw-grill`, `tw-auto`, `lfg`,
  `ce-debug`, `ce-commit`, and `ce-commit-push-pr`.
- Link the behavior contracts to the CE 3.5.0 wrapper backlog so direct CE
  skills are either routed through TW wrappers, held as manual continuity,
  hidden/internal, future-held, or out of scope.
- Map each contract to requirements, Intent Contract state, matrix rows, and
  held claims.
- Keep private standards-derived expectations summarized as original
  TraceWeaver principles only.

Verification:

- Behavior contracts name required inputs, allowed outputs, blocked outputs,
  fail-closed conditions, evidence expectations, and held claims.
- Public text contains no copied private-source passages or formal conformance
  claims.

### Unit 2: Create Deterministic Skill Fixtures

Files:

- Create: `fixtures/tw-skill-behavior/`
- Create or modify: `scripts/traceweaver-smoke-tw-skill-behavior`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

Work:

- Add fixtures for approved requirements, weak requirements, missing authority,
  stale authority, missing trace links, dark-behavior candidates, missing
  verification, missing validation, and source-evidence-only intent deepening.
- Derive pass/blocked/held classifications from fixture state rather than
  constants.

Verification:

- Smoke output records pass, blocked, and held classifications per skill.
- Fixture outputs do not mutate the real repository.

### Unit 3: Run Real Skill Invocation Samples

Files:

- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Private logs only: ignored private audit-run storage chosen by the operator.

Work:

- Run representative prompts through each installed TW skill in the constrained
  active-host setup.
- Capture output summaries, not private raw standards text.
- Compare outputs against Unit 1 behavior contracts.

Verification:

- Evidence separates actual runtime invocation from static/fixture evidence.
- Any unsupported claim remains held.

### Unit 4: Audit CE Wrapper Behavior Under TW Constraints

Files:

- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`
- Modify if needed: selected `plugins/traceweaver-core/skills/ce-*/SKILL.md`

Work:

- Check `tw-code-review` and `tw-doc-review` for TraceWeaver preflight
  sequencing before CE review delegation.
- Check `ce-plan`, `ce-work`, `ce-code-review`, `ce-doc-review`, `ce-debug`,
  `ce-commit`, and `ce-commit-push-pr` wrappers for publication-gated mode,
  authority-first sequencing, controlled publication-route behavior, and held
  publication boundaries.
- Verify `lfg` delegates to `tw-auto` rather than raw CE autopilot.

Verification:

- Wrapper claims are either accepted with evidence or explicitly held.

### Unit 5: Decide Product Gaps

Files:

- Modify: `requirements.md`
- Modify: `traceability-matrix.md`
- Modify: `.traceweaver/intent-contract.yml`
- Modify: `docs/validation/traceweaver-skill-behavior-audit.md`

Work:

- Turn dogfood/audit findings into proposed requirements, gaps, changes, or
  held claims for:
  - metrics dashboard;
  - automatic Mermaid generation;
  - code-level requirement annotations;
  - code/test trace anchors and dead-TDD detection;
  - structured traceability findings;
  - project-level trace writes;
  - active `tw-auto` runtime invocation;
  - CE plugin replacement readiness.

Verification:

- No product gap is treated as implemented without approved requirement,
  traceability row, and evidence.
- Code/test trace-anchor behavior remains candidate-only until requirements/doc
  review, scanner implementation, fixture proof, and `tw-code-review` preflight
  evidence pass.
- Structured traceability-finding behavior remains candidate-only until
  requirements/doc review, implementation, fixture proof, severity/file-anchor
  review, and wrapper integration evidence pass.

## Review Gates

- Run `/ce-code-review` on any changed behavior-bearing scripts or skills.
- Run `/ce-doc-review` on the authority set before accepting audit evidence.
- Stage reviewed authority files together with no staged/unstaged split before
  using the audit as input for new work.

## Suggested Next Command

Run staged-set authority doc review before using the review-pending behavior
contracts, CE 3.5.0 source-surface inventory, TW wrapper backlog, review-wrapper
skills, controlled publication-route wording, or code/test trace-anchor
requirement, or structured traceability-finding requirement as accepted input:

```text
/ce-doc-review
```

If clean, proceed to deterministic fixture/runtime proof for `tw-code-review`,
`tw-doc-review`, `tw-auto` review routing, wrapped CE continuity behavior, and
the controlled publication route, then plan the code-trace-anchor scanner and
dead-TDD fixture proof plus structured `tw-traceability-check` finding fixtures
as the next scoped gaps.
