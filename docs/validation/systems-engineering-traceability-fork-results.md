# Systems Engineering Traceability Fork Validation

Status: Implementation slice ready; VRUN-001 technical evidence captured; controlled validation still pending

Date: 2026-04-26

Fork checkout: `/Users/hanneszietsman/CrypotAI/agent-skills`

Working branch: `feature/systems-engineering-traceability`

Tested implementation commit: `ca6ff66d46f140da72f423ea3dec819f81ef5337 docs: align skill tree count`

Last stale pre-reconciliation ref: `b9923fc982e6a572b1f70d1cbe9e8f1e2bc6d017 fix: clarify traceability authority rules`

Current reconciliation state: refreshed implementation commit tested locally and focused code review rerun with no remaining findings.

Upstream issue: https://github.com/addyosmani/agent-skills/issues/103

## Gate Decision

Current decision: **Do not package the upstream PR yet.**

Reason: The upstream-neutral implementation slice is ready at tested commit `ca6ff66d46f140da72f423ea3dec819f81ef5337`, but U5 validation has not yet satisfied the required baseline comparison and human reviewer confidence evidence. The PR package remains blocked until all three pre-registered validation scenarios are complete and the distinct-value criteria pass across the full scenario set.

## Completed Evidence

| Area | Evidence | Result |
|---|---|---|
| Tested commit | Exact fork commit under review is `ca6ff66d46f140da72f423ea3dec819f81ef5337 docs: align skill tree count`. | Pass |
| Focused PR scope | Required fork scope is `skills/systems-engineering-traceability/SKILL.md`, `references/systems-engineering-traceability-operating-model.md`, `references/traceability-matrix-template.md`, `skills/using-agent-skills/SKILL.md`, and `README.md`. | Pass |
| Skill anatomy | `SKILL.md` includes YAML frontmatter, overview, when-to-use, process, rationalizations, red flags, and verification. | Pass |
| Frontmatter | `name` matches directory and description includes trigger conditions. | Pass |
| Matrix authority boundary | Skill and template define the matrix as audit record for links/status/evidence/gaps/decisions, not as replacement for source artifacts. | Pass |
| Lifecycle checkpoints | Skill includes checkpoints for spec, plan, build, test, review, and ship. | Pass |
| No-orphan gate | Skill blocks meaningful behavior without valid approved authority: approved requirement, approved ADR/design decision, first-class approved risk control, approved traceability gap, or task that closes directly to one of those authorities. | Pass |
| Risk controls | Matrix template includes first-class risk controls with risk statement, owner, mitigation/control, linked requirement or approved gap, evidence path, approval status, and approval ID. | Pass |
| Approved gaps vs debt | Matrix template separates authority-bearing approved traceability gaps from ordinary open traceability debt. | Pass |
| Status model | Skill and template define `Draft`, `Approved`, `Implemented`, `Verified`, `Validated`, `Open`, `Gap`, `Deferred`, `Closed`, `Expired`, and `Retired`. | Pass |
| Verification vs validation | Skill and template separate verification evidence from validation evidence or validation plan. | Pass |
| README discoverability | README lists the skill as cross-cutting, counts 22 skills, and links the template. | Pass |
| Meta-skill routing | `skills/using-agent-skills/SKILL.md` routes meaningful behavior through `systems-engineering-traceability` as a cross-cutting hop. | Pass |
| Operating model artifact | `references/systems-engineering-traceability-operating-model.md` exists, is linked from `SKILL.md`, contains original agent-facing lifecycle rules plus source-boundary language, and includes official/public source links. | Pass |
| Focused code review | Focused `ce-code-review` pass on the implementation slice found no remaining findings after commits `5745ab2`, `2e67062`, and `ca6ff66`. | Pass |
| VRUN-001 technical evidence | Dummy new-feature A/B run created baseline and TraceWeaver outputs from the same seed commit. | Technical pass; human reviewer rating pending |
| Markdown hygiene | `git diff --check` passed across the branch against upstream `main`. | Pass |
| New-file ASCII | `SKILL.md`, `systems-engineering-traceability-operating-model.md`, and `traceability-matrix-template.md` contain ASCII only. | Pass |

## Controlled Validation Protocol

Each validation scenario must record controlled inputs before comparing outcomes.

```markdown
## Validation Run: [Scenario ID]

Scenario:
Starting repository and commit:
Starting branch/worktree:
Baseline workflow:
Traceability workflow:
Exact baseline prompt:
Exact traceability prompt:
Artifacts available at start:
Artifacts produced by baseline:
Artifacts produced with traceability skill:
Reviewer:
Timing method:
Baseline elapsed time:
Traceability elapsed time:
Comparison notes:
```

Rules:

- Record the baseline output before running the traceability-enabled version.
- Use the same starting repository state, scenario description, and available source artifacts for both runs.
- Do not let the traceability-enabled run inherit unrecorded human interpretation from the baseline run.
- Compare only recorded artifacts, findings, and reviewer ratings.

## Planned Validation Runs

### VRUN-001: New Feature With Document Chain

Scenario: Use the skill on a new feature or feature-like change with separate requirements, plan, traceability matrix, ATP/procedure entry, and result record.

Purpose: Prove the skill maintains the chain from requirement to plan task to implementation to ATP/results.

Required evidence:

- Baseline artifacts from existing Agent Skills only.
- Traceability-enabled artifacts.
- At least one requirement-to-plan or requirement-to-results link that the baseline did not make explicit.
- Actionability and noise rating from a human reviewer.

Evidence:

- `docs/validation/runs/VRUN-001/scenario.md`
- `docs/validation/runs/VRUN-001/baseline-output.md`
- `docs/validation/runs/VRUN-001/traceweaver-output.md`
- `docs/validation/runs/VRUN-001/comparison.md`

Status: Technical evidence captured; human reviewer usefulness/noise and confidence ratings pending.

### VRUN-002: Existing Module Audit

Scenario: Audit an existing module or skill where ownership, requirement links, verification evidence, or validation path is unclear.

Purpose: Prove the skill finds dark-code candidates, missing validation paths, missing verification links, or unapproved inferred requirements.

Required evidence:

- Baseline review using existing Agent Skills only.
- Traceability-enabled review.
- At least one distinct traceability gap or dark-code candidate.
- Human classification of useful vs low-value findings.

Status: Pending.

### VRUN-003: Low-Risk Lite Mode

Scenario: Apply Lite mode to a low-risk discoverability or documentation-only change.

Purpose: Prove the skill avoids over-process while still requiring a minimal matrix artifact for small, clear changes.

Required evidence:

- Minimal matrix row or accepted minimal matrix entry.
- Lite trace note may supplement the row, but it does not replace the matrix artifact.
- Overhead estimate.
- Human reviewer confirms whether the minimal matrix evidence was useful or noisy.

Status: Pending.

## Baseline Comparison Matrix

| Area | Existing Agent Skills Baseline | With Traceability Skill | Distinct Value Added |
|---|---|---|---|
| Stakeholder need captured | VRUN-001 captured a plain-language need. | VRUN-001 created NEED-SHIP-001. | Stable need ID. |
| Requirement IDs created | VRUN-001 created requirements without stable IDs. | VRUN-001 created SREQ-SHIP-001 and SREQ-SHIP-002. | Requirements can be referenced by plan, ATP, result, and tests. |
| Requirement-to-plan links | VRUN-001 plan bullets are implicit. | VRUN-001 task rows link to SREQ IDs. | Reviewer can audit scope from plan to requirement. |
| Requirement-to-implementation links | VRUN-001 links are inferred from feature name and tests. | VRUN-001 TRACE rows link SREQs to implementation and tests. | Less reconstruction needed. |
| Requirement-to-test links | VRUN-001 tests name behavior only. | VRUN-001 tests and VER-SHIP-001 identify SREQ coverage. | Tests state what requirement they verify. |
| ATP / acceptance test procedure recorded | VRUN-001 baseline has no ATP. | VRUN-001 created ATP-SHIP-001 and ATP-SHIP-002. | Acceptance procedures are explicit. |
| Verification evidence recorded | VRUN-001 records a general `npm test` result. | VRUN-001 records VER-SHIP-001 linked to requirements and result. | Test evidence is auditable by ID. |
| Validation path recorded | VRUN-001 baseline has no validation path. | VRUN-001 records VAL-SHIP-001 and TD-SHIP-001 for deferred UI validation. | Separates module validation from later UI validation. |
| Design decision linked to requirement | Pending broader validation. | VRUN-001 records ADR-SHIP-001 linked to SREQ IDs. | Design rationale is traceable. |
| Dark-code candidates found | Pending | Pending | Pending |
| Unapproved inferred requirements flagged | Pending | Pending | Pending |
| Change impact analysis performed | Pending | Pending | Pending |
| Reviewer confidence | VRUN-001 Codex rating: 2 / 5; human confirmation pending. | VRUN-001 Codex rating: 4 / 5; human confirmation pending. | Higher confidence, pending human rating. |
| Workflow overhead | VRUN-001 baseline produced 7 files; test command 0.30s. | VRUN-001 TraceWeaver run produced 9 files; test command 0.30s. | Additional matrix and ATP docs; acceptable for Standard-mode new feature pending human noise rating. |

## Skill-Level V&V Matrix

| ID | Skill Requirement | Evidence Method | Current Result |
|---|---|---|---|
| SREQ-TRACE-001 | The skill must create useful traceability from intent to implementation. | Run all three pre-registered fork scenarios. | Partial pass in VRUN-001; VRUN-002/003 and human ratings pending. |
| SREQ-TRACE-002 | The skill must remain lightweight. | Compare baseline workflow time against traceability-enabled workflow time. | Pending controlled timing. |
| SREQ-TRACE-003 | The skill must be low-noise. | Human reviewer classifies findings as useful or low-value. | Pending human reviewer classification. |
| SREQ-TRACE-004 | The skill must improve reviewer confidence. | Reviewer rates confidence before and after using the skill. | Codex rating improved in VRUN-001; human reviewer rating pending. |
| SREQ-TRACE-005 | The skill must not require broad repo changes. | Review PR scope. | Pass at tested commit `ca6ff66`: current candidate touches one skill, one operating-model reference, one matrix template, the meta-skill discovery file, and README only. |
| SREQ-TRACE-006 | The skill must expose missing traceability, not invent it. | Inspect inferred links. | Partial pass: skill requires inferred links to remain `Draft`; needs validation run evidence. |
| SREQ-TRACE-007 | The skill must provide distinct value beyond existing Agent Skills workflows. | Compare baseline run against traceability-enabled run. | Partial pass in VRUN-001; broader scenario set pending. |

## Current Blockers Before PR Packaging

- VRUN-001 needs human usefulness/noise and confidence confirmation.
- VRUN-002 and VRUN-003 controlled validation runs must be completed.
- Human reviewer must classify finding usefulness and low-value noise.
- Human reviewer confidence before/after must be recorded.
- Distinct value must be demonstrated in at least two baseline comparison areas across the full scenario set, including at least one outcome-based signal.
- If distinct value is not demonstrated, the work must be revised into a smaller patch to an existing skill instead of a new skill PR.
