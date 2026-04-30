# Systems Engineering Traceability Fork Validation

Status: U5 representative validation complete at baseline commit; U5.5 terminal state is `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`; R31 real-project validation remains open

Date: 2026-04-26

Fork checkout: `REDACTED_LOCAL_PATH`

Working branch: `feature/systems-engineering-traceability`

U5 validation baseline commit: `ca6ff66d46f140da72f423ea3dec819f81ef5337 docs: align skill tree count`

Latest runtime candidate commit: `696548694dd40ce298d77e603db069934b58f645 feat: add requirements reviewer skill`

Last stale pre-reconciliation ref: `b9923fc982e6a572b1f70d1cbe9e8f1e2bc6d017 fix: clarify traceability authority rules`

Current reconciliation state: U5 baseline implementation commit tested locally and focused code review rerun with no remaining findings.

U5.5 reconciliation state: `light-v0.1-authority-traceability` is reduced to
static U6a scope-decision use at
`696548694dd40ce298d77e603db069934b58f645` under
`U55-LIMIT-STATIC-DISCOVERY-001`. Static file/delta, requirements-quality, and
lifecycle-discovery records exist, but no observed no-forced runtime discovery
transcript is recorded. Broader persona-awareness, non-selected Core skills,
`idea-refine` command wiring, package surfaces, release surfaces, and
upstream-ready claims remain held unless separately authorized by later gates.

2026-04-30 blocker-inventory update: Core 11 U5 is recorded as `CLOSED_NO_DELTA` in
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md`. The first U5.5
runtime-subset matrix is recorded as `light-v0.1-authority-traceability` with
`requirements-reviewer` and `systems-engineering-traceability`. This earlier
blocker inventory was superseded by the terminal-state update below.

2026-04-30 U6-unblock review update: the previous candidate commit
`987793dfd477bc205a0a49efe4ec1b1e31045903` was not reproducible from the
current public contributor fork ref. The observed
`refs/heads/feature/systems-engineering-traceability` head in
`https://github.com/jjziets/agent-skills.git` is
`696548694dd40ce298d77e603db069934b58f645`. This finding was superseded by the
terminal-state update below after that candidate was selected and proven.

2026-04-30 terminal-state update:
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md` records
`TWCORE-U55-TERM-2026-04-30-001`. The candidate was refreshed and proven at
`696548694dd40ce298d77e603db069934b58f645`; static discovery/loading, selected
reference/schema/example inventory, routing, failure behavior, and focused
review evidence are recorded for `light-v0.1-authority-traceability`. A later
U5.5 cleanup added file-level delta/impact records for all selected and
conditionally referenced files plus requirements-quality and static
lifecycle-discoverability validation for the same candidate.
`U55-LIMIT-STATIC-DISCOVERY-001` authorizes only bounded static U6a scope
decision. U6b package evidence, U7 release claim records, U8 upstream/package
surfaces, U9 post-release evidence, R31 real scenarios, dynamic discovery, and
release hygiene remain held.

Architecture boundary: `requirements-reviewer` and
`systems-engineering-traceability` are TraceWeaver Core skills. TraceWeaver CE
is the Compound Engineering adapter that may invoke or wrap those skills, but CE
hooks and reviewers are not the source definition of the Core capabilities.

Upstream issue: https://github.com/addyosmani/agent-skills/issues/103

## U1.5 Final Candidate Evidence Index

Recorded: 2026-04-28

Maintainer response class: `no response`

Allowed next action under the closeout plan: local/live TraceWeaver U2-U5.5
work may continue under the 2026-04-29 product-owner-approved local-only
strategy below. Upstream-ready and public-release-ready claims remain held
while the maintainer response class is `no response`.

Local-only strategy decision:

- Decision date/session: 2026-04-29, product-owner approval in Codex session.
- Scope: continue U2-U5.5 only for the local/live TraceWeaver candidate.
- Upstream/public release status: remains `held` while upstream response class
  is `no response`; do not claim upstream-ready or public-release-ready.
- Light v0.1 promoted scope remains limited to `requirements-reviewer` and
  `systems-engineering-traceability`.
- Internal provenance Core material remains non-promotable evidence only.
  Public/runtime promotion must consume the scrubbed public candidate.
  Internal/private material and exception-record rewrites cannot satisfy Core 11
  public skill, runtime/package, or public-release acceptance.
- Target-runtime discovery mechanism must be named before U5.5 equivalence can
  pass.
- R31, U5.5 harness evidence, target-runtime equivalence, fork-diff
  classification, packaging anatomy, and traceability-value evidence must bind
  to the same final live candidate commit.
- If any runtime/package-controlled file changes after a gate passes, reset
  affected gates to `held` unless explicitly impact-reviewed.

```text
internal_provenance_record: TWCORE-INT-PROV-2026-04-29-001
publishable_source_baseline: scrubbed public candidate
live_agent_skills_repo: addyosmani/agent-skills
upstream_base_commit: ca6ff66d46f140da72f423ea3dec819f81ef5337
live_candidate_commit: 696548694dd40ce298d77e603db069934b58f645
previous_candidate_commit: 987793dfd477bc205a0a49efe4ec1b1e31045903
latest_observed_public_fork_head: 696548694dd40ce298d77e603db069934b58f645

promoted_skills:
  - requirements-reviewer
  - systems-engineering-traceability

held_candidate_skills:
  - needs-and-requirements-capture
  - risk-gap-change-control

gates_bound_to_live_candidate_commit:
  - U5.5 harness evidence: REDUCED_FOR_U6A_STATIC_SCOPE_ONLY under U55-LIMIT-STATIC-DISCOVERY-001
  - target-runtime discovery equivalence: partial static Agent Skills layout only
  - fork-diff classification: file-level delta records complete for static U5.5 review
  - packaging anatomy check: U6b alpha install smoke recorded; dynamic/package/release claims held
  - R31 adoption validation: held for release
  - traceability-specific value scenario: held for R31 release evidence
```

Checkout status: U5.5 terminal-state evidence uses a clean temporary checkout at
`696548694dd40ce298d77e603db069934b58f645`. Historical checkout evidence bound
earlier U2 sync rows to `987793dfd477bc205a0a49efe4ec1b1e31045903`, but that
commit was not reproduced from the current public fork ref during the
U6-unblock review.

## U2 Runtime Sync Evidence

Recorded: 2026-04-29

Live Agent Skills commit:
`987793dfd477bc205a0a49efe4ec1b1e31045903 fix: stabilize traceability authority rules`

Files synced:

- `skills/systems-engineering-traceability/SKILL.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`

U2 result:

- No-orphan authority now rejects bare task IDs unless they close directly to
  approved upstream authority.
- Source-preserving reframes are required before agent-reframed requirements or
  success criteria can become approved authority.
- Accepted weak requirements are converted into approved gaps, accepted risks,
  design decisions, validation gaps, or change-control exceptions instead of
  being upgraded into approved requirements.
- Accepted-risk evidence fields are preserved for the MVP without promoting the
  deferred `risk-gap-change-control` skill into Light v0.1.

Impact on gates: because runtime/package-controlled files changed after the
U1.5 index, packaging anatomy, release hygiene, R31 adoption validation, and
traceability-specific value remain `held`. U5.5 harness evidence, file-level
delta/impact records, requirements-quality validation, lifecycle-discoverability
static review, and static target-runtime discovery equivalence were refreshed at
`696548694dd40ce298d77e603db069934b58f645`; they support only bounded static
U6a scope work under `U55-LIMIT-STATIC-DISCOVERY-001`.

## Gate Decision

Current decision: **U5 representative validation passes at the baseline commit; U5.5 is `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`; R31 real-project validation remains open.**

Reason: The upstream-neutral implementation slice is ready at tested commit `ca6ff66d46f140da72f423ea3dec819f81ef5337` for representative workflow validation. All three dummy validation scenarios have technical evidence, human reviewer usefulness/noise and confidence ratings are recorded below, and the distinct-value criteria are accepted across that representative scenario set. These runs verify workflow shape and evidence capture, but they do not satisfy R31's requirement for real feature, unclear existing module, and low-risk Lite-mode validation.

U5 result: **Pass for representative validation. No implementation revision is required from the dummy runs. R31 remains open until all three pre-registered real validation scenarios are completed.**

U5.5 candidate: commit `696548694dd40ce298d77e603db069934b58f645` is recorded
for static U5.5 review for the `light-v0.1-authority-traceability` subset.
`U55-LIMIT-STATIC-DISCOVERY-001` authorizes only bounded static U6a scope
decision; observed no-forced runtime discovery remains deferred to U6b/U9.
Persona-awareness, non-selected Core skills, command wiring, package readiness,
release readiness, and upstream readiness remain held unless separately
authorized.

## Completed Evidence

| Area | Evidence | Result |
|---|---|---|
| U5 tested commit | Exact fork commit validated by representative VRUN-001 to VRUN-003 is `ca6ff66d46f140da72f423ea3dec819f81ef5337 docs: align skill tree count`. | Pass for dummy workflow validation; R31 real validation remains open |
| U5.5 runtime candidate | Latest fork commit is `696548694dd40ce298d77e603db069934b58f645 feat: add requirements reviewer skill`. | `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`; dynamic discovery deferred to U6b/U9 |
| U5 focused scope | Validated U5 baseline scope is `skills/systems-engineering-traceability/SKILL.md`, `references/systems-engineering-traceability-operating-model.md`, `references/traceability-matrix-template.md`, `skills/using-agent-skills/SKILL.md`, and `README.md`. | Pass at `ca6ff66` only |
| TraceWeaver Core MVP bundle | Core runtime bundle candidate includes two core skills plus selected reference files: requirements-reviewer, systems-engineering-traceability, requirements-reviewer references, operating model, matrix template, requirements/V&V guide, and risk/gap/change-control guide. | Static U6a scope decision only; package/runtime claims held |
| Skill anatomy | `SKILL.md` includes YAML frontmatter, overview, when-to-use, process, rationalizations, red flags, and verification. | Pass |
| Frontmatter | `name` matches directory and description includes trigger conditions. | Pass |
| Matrix authority boundary | Skill and template define the matrix as audit record for links/status/evidence/gaps/decisions, not as replacement for source artifacts. | Pass |
| Lifecycle checkpoints | Skill includes checkpoints for spec, plan, build, test, review, and ship. | Pass |
| No-orphan gate | Skill blocks meaningful behavior without valid approved authority: approved requirement, approved ADR/design decision, first-class approved risk control, approved traceability gap, or task that closes directly to one of those authorities. | Pass |
| Risk controls | Matrix template includes first-class risk controls with risk statement, owner, mitigation/control, linked requirement or approved gap, evidence path, approval status, and approval ID. | Pass |
| Approved gaps vs debt | Matrix template separates authority-bearing approved traceability gaps from ordinary open traceability debt. | Pass |
| Status model | Skill and template define `Draft`, `Approved`, `Implemented`, `Verified`, `Validated`, `Open`, `Gap`, `Deferred`, `Closed`, `Expired`, and `Retired`. | Pass |
| Verification vs validation | Skill and template separate verification evidence from validation evidence or validation plan. | Pass |
| README discoverability | Historical Agent Skills README evidence at the U5 baseline listed the skill as cross-cutting, counted 22 skills, and linked the template. Current TraceWeaver Core uses the Core 11 framing. | Historical pass only |
| Meta-skill routing | `skills/using-agent-skills/SKILL.md` routes meaningful behavior through `systems-engineering-traceability` as a cross-cutting hop. | Pass |
| Operating model artifact | `references/systems-engineering-traceability-operating-model.md` exists, is linked from `SKILL.md`, contains original agent-facing lifecycle rules plus source-boundary language, and includes official/public source links. | Pass |
| Focused code review | Focused `ce-code-review` pass on the implementation slice found no remaining findings after commits `5745ab2`, `2e67062`, and `ca6ff66`; U5.5 terminal-state focused review checked the exact `696548694dd40ce298d77e603db069934b58f645` candidate, then the U5.5 cleanup added file-level delta/impact records plus requirements-quality and static lifecycle-discoverability validation. | Pass for U5 baseline; U5.5 reduced to static U6a scope only |
| VRUN-001 validation | Dummy new-feature A/B run created baseline and TraceWeaver outputs from the same seed commit. Human rating accepted in this session. | Pass as representative workflow evidence; does not satisfy R31 real validation |
| VRUN-002 validation | Dummy existing-module audit A/B run created baseline and TraceWeaver Audit outputs from the same seed commit. Human rating accepted in this session. | Pass as representative workflow evidence; does not satisfy R31 real validation |
| VRUN-003 validation | Dummy low-risk docs/discoverability A/B run created baseline and TraceWeaver Lite outputs from the same seed commit. Human rating accepted in this session. | Pass as representative workflow evidence; does not satisfy R31 real validation |
| Markdown hygiene | `git diff --check` passed across the branch against upstream `main`. | Pass |
| New-file ASCII | `SKILL.md`, `systems-engineering-traceability-operating-model.md`, and `traceability-matrix-template.md` contain ASCII only. | Pass |

## Runtime Guidance Sync Record

Runtime guidance is not considered synced unless the mapping, version stamp,
checksum, reviewer, review session, and implementation commit are recorded.

| Runtime File | Source / Distilled Input | Version Stamp | SHA256 | Reviewed By | Review Session | Commit |
|---|---|---|---|---|---|---|
| `skills/systems-engineering-traceability/SKILL.md` | U2 authority-rule patch from closeout plan | 2026-04-29 U2 | `9f1e8d6fe3149d18d2229f3271eb0e35b6b32ba216d9a7e58a192b61d7f70f7a` | Codex | U2 local-only session | `987793dfd477bc205a0a49efe4ec1b1e31045903` |
| `references/systems-engineering-traceability-operating-model.md` | `docs/distilled/systems-engineering-traceability-operating-model.md` authority-rule subset; packaged version excludes TraceWeaver CE architecture-layer note | 2026-04-29 U2 | `ef427d7aae4deafcc7dfaf758c1e486dc716f03845457812b53625b6c674b791` | Codex | U2 local-only session | `987793dfd477bc205a0a49efe4ec1b1e31045903` |
| `references/traceability-matrix-template.md` | `docs/distilled/traceability-matrix-template.md` | 2026-04-29 U2 unchanged | `2575a50dd1cafbe07ec9ebb19992a69777f3050054efe937a54b5de35688de3c` | Codex | U2 local-only session | `987793dfd477bc205a0a49efe4ec1b1e31045903` |
| `references/requirements-and-vv-guide.md` | `docs/distilled/requirements-and-vv-guide.md` | 2026-04-29 U2 | `303597b207afc8c5e620faf0e52e642c0508d711a9e9c0407890203dd4b1ac43` | Codex | U2 local-only session | `987793dfd477bc205a0a49efe4ec1b1e31045903` |
| `references/risk-gap-and-change-control-guide.md` | `docs/distilled/risk-gap-and-change-control-guide.md` field-preservation subset | 2026-04-29 U2 | `34e638ed9f800a411f06b52defe8211a0e2508e37fef7bdc4f4f5674b04834f6` | Codex | U2 local-only session | `987793dfd477bc205a0a49efe4ec1b1e31045903` |

Status: historical U2 runtime sync recorded for authority-rule stabilization.
The rows above are superseded for U5.5/U6a by the final-candidate static sync
table below.

Evidence: `git diff --check` passed in both TraceWeaver and the Agent Skills
target fork after the U2 edits.

## Final-Candidate Static Runtime Sync Record

Recorded: 2026-04-30

Candidate commit:
`696548694dd40ce298d77e603db069934b58f645 feat: add requirements reviewer skill`

This table records the final Agent Skills candidate files in the selected U5.5
runtime-authority manifest. It supersedes the `987793d` U2 sync rows for
U5.5/U6a review and supersedes any non-byte-identical private runtime snapshot
for U5.5/U6a authority. It does not prove dynamic runtime discovery, installed
package behavior, package readiness, or release readiness.

| Runtime file | Source / distilled input | Version stamp | SHA-256 | Reviewed by | Review session | Commit |
| --- | --- | --- | --- | --- | --- | --- |
| `skills/using-agent-skills/SKILL.md` | Agent Skills meta-skill routing context for U5.5 static discovery review | 2026-04-30 U5.5 static | `a23c1c5a0eb71ba56f3d5ae9eaa0704b6f56c80df1f4e49f3169569bb1fa31c5` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/SKILL.md` | U5.5 runtime delta against U4 `requirements-reviewer/SKILL.md` | 2026-04-30 U5.5 static | `1cd5a3cb0316bb814afda991cc7b22602849949a25772e4dc214bbf5a995a91d` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/agents/openai.yaml` | U5.5 manifest file present under selected Agent Skills runtime skill; no runtime-agent claim approved | 2026-04-30 U5.5 static | `ebdec17ec4de718225b6e4d417123be66c6e9b4a9225278e4bff79ba1581b829` | Codex | `ce:work` U5.5 baseline reconciliation | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/requirements-quality-operating-model.md` | U5.5 requirements-reviewer runtime support reference | 2026-04-30 U5.5 static | `eac57d6d0397bd5076bce40fdef4ece61456e594687dd402d7cee0d89e0e0a2e` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/requirements-quality-checklist.md` | U5.5 requirements-reviewer runtime support reference | 2026-04-30 U5.5 static | `a044d685381f974923661702e00c6bbf188ce9eb15ebdee3c9f11089bed65e85` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/requirements-review-finding-schema.md` | U5.5 requirements-reviewer runtime support schema | 2026-04-30 U5.5 static | `3b0ae1b832311fe6b27655e0f9a488c2ee225969da5ca999ebc597b386fef83d` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/requirement-types-and-attributes.md` | U5.5 conditional requirements-reviewer runtime support reference | 2026-04-30 U5.5 static | `bd4364d6118d5cac81d5ec0fac80c2af5ddb98e3cb8fb2a7a8112968bf265976` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/requirement-language-rules.md` | U5.5 conditional requirements-reviewer runtime support reference | 2026-04-30 U5.5 static | `ea8ef42e7623e6d01492d6247f3678ca12997b709829759d23d19f7ca8ec3492` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/source-basis.md` | U5.5 runtime delta against U4 `requirements-reviewer` source-basis; provenance/release use held | 2026-04-30 U5.5 static | `f2cc81c37d8971636ec703aec3b54aa60ebbcc71e0e4f9cfc28462a1a830e1ae` | Codex | `ce:work` U5.5 baseline reconciliation | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/references/verification-validation-guide.md` | U5.5 conditional requirements-reviewer runtime support reference | 2026-04-30 U5.5 static | `01cb0a2736997c2ad4f169756e776aac8822986df78883d2edf54af9f3374b0e` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/requirements-reviewer/tests/requirements-quality-examples.md` | U5.5 example file referenced by selected skill; example execution/package claims held | 2026-04-30 U5.5 static | `acaa1ae1d5d2343776623c80299bf52c92d9447b5d730eb4d85663d7defc15df` | Codex | `ce:work` U5.5 baseline reconciliation | `696548694dd40ce298d77e603db069934b58f645` |
| `skills/systems-engineering-traceability/SKILL.md` | U5.5 runtime delta against U4 `systems-engineering-traceability/SKILL.md` | 2026-04-30 U5.5 static | `e14608e14d341df67c173a0c3b03c5725cae6844991565a1d150cdbfbb898282` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `references/systems-engineering-traceability-operating-model.md` | `docs/distilled/systems-engineering-traceability-operating-model.md` runtime reference candidate | 2026-04-30 U5.5 static | `b9e49cc32ac2a847994d72a2c308c5b31d9cfada7db8ec0f536900a354aa3faa` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `references/traceability-matrix-template.md` | `docs/distilled/traceability-matrix-template.md` runtime reference candidate | 2026-04-30 U5.5 static | `2575a50dd1cafbe07ec9ebb19992a69777f3050054efe937a54b5de35688de3c` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `references/requirements-and-vv-guide.md` | `docs/distilled/requirements-and-vv-guide.md` runtime reference candidate | 2026-04-30 U5.5 static | `2079d78917d7a2cf3e0d5c85f112ce5ea7e88c6fd537fe44521713c20354201c` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |
| `references/risk-gap-and-change-control-guide.md` | `docs/distilled/risk-gap-and-change-control-guide.md` runtime reference candidate | 2026-04-30 U5.5 static | `bb422bf12791dc1bf3d3025fc7bcc32e3b1aafcc2bc5f0c3a3bfa97c6a4f3e79` | Codex | `ce:work` U5.5 cleanup | `696548694dd40ce298d77e603db069934b58f645` |

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

Status: Complete.

### VRUN-002: Existing Module Audit

Scenario: Audit an existing module or skill where ownership, requirement links, verification evidence, or validation path is unclear.

Purpose: Prove the skill finds dark-code candidates, missing validation paths, missing verification links, or unapproved inferred requirements.

Required evidence:

- Baseline review using existing Agent Skills only.
- Traceability-enabled review.
- At least one distinct traceability gap or dark-code candidate.
- Human classification of useful vs low-value findings.

Evidence:

- `docs/validation/runs/VRUN-002/scenario.md`
- `docs/validation/runs/VRUN-002/baseline-output.md`
- `docs/validation/runs/VRUN-002/traceweaver-output.md`
- `docs/validation/runs/VRUN-002/comparison.md`

Status: Complete.

### VRUN-003: Low-Risk Lite Mode

Scenario: Apply Lite mode to a low-risk discoverability or documentation-only change.

Purpose: Prove the skill avoids over-process while still requiring a minimal matrix artifact for small, clear changes.

Required evidence:

- Minimal matrix row or accepted minimal matrix entry.
- Lite trace note may supplement the row, but it does not replace the matrix artifact.
- Overhead estimate.
- Human reviewer confirms whether the minimal matrix evidence was useful or noisy.

Evidence:

- `docs/validation/runs/VRUN-003/scenario.md`
- `docs/validation/runs/VRUN-003/baseline-output.md`
- `docs/validation/runs/VRUN-003/traceweaver-output.md`
- `docs/validation/runs/VRUN-003/comparison.md`

Status: Complete.

## Human Reviewer Ratings

Reviewer: Hannes

Date / session: 2026-04-26 / TraceWeaver U5 validation closeout

Ratings use a 1-5 scale. For usefulness and confidence, higher is better. For
low-value noise, lower is better.

| Scenario | Usefulness | Low-Value Noise | Baseline Confidence | TraceWeaver Confidence | Human Decision | Notes |
|---|---:|---:|---:|---:|---|---|
| VRUN-001: New feature with document chain | 4 / 5 | 2 / 5 | 2 / 5 | 4 / 5 | Accept | TraceWeaver made requirement, plan, ATP/result, implementation, verification, and validation links explicit. |
| VRUN-002: Existing module audit | 4 / 5 | 2 / 5 | 3 / 5 | 4 / 5 | Accept | TraceWeaver exposed dark-code candidates, draft inferred requirements, traceability debt, and human decisions without inventing authority. |
| VRUN-003: Low-risk Lite mode | 4 / 5 | 1 / 5 | 4 / 5 | 4 / 5 | Accept | Lite mode kept the process lightweight while still creating the required minimal matrix artifact. |

## Final Distinct-Value Decision

Decision: **Accepted for representative validation. TraceWeaver adds distinct
value beyond the baseline Agent Skills workflow in the dummy scenario set. R31
real-project validation remains open.**

Accepted value signals:

- VRUN-001 proves explicit requirement-to-plan-to-implementation-to-result
  traceability for a new feature.
- VRUN-002 proves Audit mode exposes dark-code candidates, missing authority,
  missing validation, and draft inferred requirements as managed traceability
  work.
- VRUN-003 proves Lite mode can stay low-noise while still preserving the
  mandatory matrix artifact.
- Reviewer confidence improved in VRUN-001 and VRUN-002, and remained stable in
  VRUN-003 without extra ceremony.
- The validation set includes outcome-based signals, not only artifact-count
  increases.

U5 closeout: **Pass for representative workflow validation. Proceed without
validation-driven implementation revision from the dummy runs, but do not claim
R31 is satisfied until real feature, unclear-module, and low-risk Lite scenarios
are completed.**

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
| Design decision linked to requirement | VRUN-001 baseline did not create stable design-decision linkage. | VRUN-001 records ADR-SHIP-001 linked to SREQ IDs. | Design rationale is traceable. |
| Dark-code candidates found | VRUN-002 baseline described unclear `LEGACY20` behavior in prose. | VRUN-002 created DC-DISC-001, DC-DISC-002, and DC-DISC-003. | Dark-code candidates have stable IDs, owners, actions, and status. |
| Unapproved inferred requirements flagged | VRUN-002 baseline inferred policy intent from code/tests in prose. | VRUN-002 created SREQ-DISC-DRAFT-001 through SREQ-DISC-DRAFT-004 and marked them Draft. | Inferred requirements are visible but not promoted to authority. |
| Change impact analysis performed | VRUN-002 baseline advised product-owner confirmation before behavior changes. | VRUN-002 created DEC-DISC and TD-DISC records before any change. | Human decision path is explicit before impact work. |
| Reviewer confidence | VRUN-001 human rating: 2 / 5; VRUN-002 baseline 3 / 5; VRUN-003 baseline 4 / 5. | VRUN-001 human rating: 4 / 5; VRUN-002 Audit 4 / 5; VRUN-003 Lite 4 / 5. | Higher confidence in Standard/Audit cases; Lite preserves confidence without extra ceremony. |
| Workflow overhead | VRUN-001 baseline produced 7 files; test command 0.30s. VRUN-002 baseline produced 5 files; test command 0.16s. VRUN-003 baseline produced 3 files; check command 0.01s. | VRUN-001 TraceWeaver run produced 9 files; test command 0.30s. VRUN-002 Audit produced 6 files; test command 0.28s. VRUN-003 Lite produced 4 files; check command 0.00s. | Standard/Audit modes add trace artifacts where ambiguity exists; Lite adds one minimal matrix artifact with accepted low noise. |
| Lifecycle discoverability | Static discovery/routing evidence recorded for `696548694dd40ce298d77e603db069934b58f645`; no dynamic no-forced-skill transcript is recorded yet. | `reduced_static_scope_only` under `U55-LIMIT-STATIC-DISCOVERY-001`. | Dynamic no-forced discovery remains a U6b/U9 testing requirement before dynamic runtime or release claims. |

## Lifecycle Discoverability Validation

Scenario: Run a normal lifecycle task without explicitly forcing the traceability
skill.

Expected result:

- If the prompt contains requirements, success criteria, acceptance criteria, or
  agent-reframed stakeholder intent, the agent discovers `requirements-reviewer`
  without being explicitly forced.
- The agent discovers the traceability skill when meaningful behavior,
  requirements, authority, validation, or no-orphan checks are relevant.
- The agent selects or asks for an active matrix.
- The agent does not proceed with unapproved authority.
- Original stakeholder wording is preserved beside any agent reframe.
- Weak accepted requirements are converted into approved gaps, accepted risks,
  design decisions, validation gaps, or change-control exceptions with owner,
  approved by, date/session, allowed use, review condition, and rationale.
- The agent records traceability evidence or blocks appropriately.

Status: `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`; static evidence recorded, dynamic
no-forced runtime discovery deferred to U6b/U9.

Evidence: `TWCORE-U55-FILE-DELTA-2026-04-30-001`,
`TWCORE-U55-REQQUAL-2026-04-30-001`, and
`TWCORE-U55-LIFECYCLE-DISCOVERY-2026-04-30-001` in
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md`,
`docs/validation/u55-requirements-quality-validation.md`, and
`docs/validation/u55-lifecycle-discoverability.md`.

## Skill-Level V&V Matrix

| ID | Skill Requirement | Evidence Method | Current Result |
|---|---|---|---|
| SREQ-TRACE-001 | The skill must create useful traceability from stakeholder need and requirement authority to implementation, verification, and validation evidence. | Run all three pre-registered fork scenarios. | Pass across representative VRUN-001, VRUN-002, and VRUN-003 with human acceptance for the U5 baseline. R31 real-project validation remains open. U5.5 idea/intent lifecycle coverage is recorded as static review evidence only for later bounded U6a scope work at `696548694dd40ce298d77e603db069934b58f645`; dynamic discovery remains a U6b/U9 testing requirement. |
| SREQ-TRACE-002 | The skill must remain lightweight. | Compare baseline workflow time against traceability-enabled workflow time. | Pass in VRUN-003: Lite mode added one minimal matrix file and no full requirements/plan/ATP/results package; human noise rating 1 / 5. |
| SREQ-TRACE-003 | The skill must be low-noise. | Human reviewer classifies findings as useful or low-value. | Pass: human low-value noise ratings were 2 / 5, 2 / 5, and 1 / 5 across the validation set. |
| SREQ-TRACE-004 | The skill must improve reviewer confidence. | Reviewer rates confidence before and after using the skill. | Pass: confidence improved in VRUN-001 and VRUN-002 and stayed equal in VRUN-003. |
| SREQ-TRACE-005 | The skill must not require broad repo changes. | Review PR scope. | Pass for the tested U2-U5 slice at `ca6ff66`; that slice stays focused. The expanded U5.5 runtime candidate has file-level delta/impact and validation evidence recorded for static-scope U6a review only under `U55-LIMIT-STATIC-DISCOVERY-001`; it is not dynamic runtime approval. |
| SREQ-TRACE-006 | The skill must expose missing traceability, not invent it. | Inspect inferred links. | Pass in VRUN-002: inferred requirements were recorded as Draft and no approved authority was invented. |
| SREQ-TRACE-007 | The skill must provide distinct value beyond existing Agent Skills workflows. | Compare baseline run against traceability-enabled run. | Pass across representative VRUN-001, VRUN-002, and VRUN-003 with final distinct-value decision accepted for dummy validation; R31 real-project validation remains open. |

## Historical U5.5 Expanded Runtime Guidance Candidate

Historical commit: `987793d fix: stabilize traceability authority rules`

Current held U5.5 candidate:
`696548694dd40ce298d77e603db069934b58f645 feat: add requirements reviewer skill`

Status: this section preserves the older U5.5 planning record. The current
terminal-state hold record is
`TWCORE-U55-TERM-2026-04-30-001` in
`docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md`.

Purpose: Ensure lifecycle work treats ideas as pre-authority inputs, checks
requirements quality before requirements or success criteria become
implementation authority, and routes requirements-quality and traceability skills
cumulatively when both apply. This is Core runtime scope, not CE adapter scope.

Changed runtime scope:

- `skills/using-agent-skills/SKILL.md`
- `skills/idea-refine/SKILL.md`
- `skills/spec-driven-development/SKILL.md`
- `skills/planning-and-task-breakdown/SKILL.md`
- `skills/code-review-and-quality/SKILL.md`
- `skills/requirements-reviewer/SKILL.md`
- `skills/requirements-reviewer/references/requirements-review-finding-schema.md`
- `skills/requirements-reviewer/references/source-basis.md`
- `skills/systems-engineering-traceability/SKILL.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/requirements-and-vv-guide.md`
- `references/risk-gap-and-change-control-guide.md`
- `references/traceability-matrix-template.md`
- `README.md`

Excluded from any future U5.5 scope unless separately authorized:

- `agents/README.md`
- `agents/code-reviewer.md`
- `agents/security-auditor.md`
- `agents/test-engineer.md`

No packaging should be prepared from `987793d`. For `6965486`,
`U55-LIMIT-STATIC-DISCOVERY-001` authorizes only bounded static U6a scope
decision; excluded persona files, non-selected Core skills, and command-wiring
surfaces must be split out or authorized by later gates before
they are included.

Key rule added: ideas are first-class lifecycle inputs, not implementation
authority. Idea work must preserve candidate needs, assumptions, risks,
success/failure signals, open decisions, and not-doing boundaries before a
later lifecycle step converts the selected idea into approved authority.

Requirements-quality rule added: requirements-reviewer determines whether a
requirement or success criterion is good enough to become authority;
systems-engineering-traceability determines whether behavior traces to approved
authority. Both checks are required when requirements or success criteria
authorize implementation.

Cumulative-routing rule added: requirements, success criteria, stakeholder
needs, acceptance criteria, and agent-reframed requirements route through
`requirements-reviewer`. When the same work affects meaningful behavior or
implementation authority, it also routes through
`systems-engineering-traceability`. A broad traceability match must not bypass
requirements quality review.

U5.5 pass criteria:

1. A lifecycle-discoverability prompt involving requirements or success criteria
   invokes `requirements-reviewer` without explicit forcing.
2. The same scenario invokes `systems-engineering-traceability` when meaningful
   behavior or implementation authority is involved.
3. Original stakeholder wording is preserved beside any agent-reframed
   requirement.
4. Reframed requirements remain `Draft` until requirements-reviewer confirms
   intent preservation and human approval accepts them.
5. Weak accepted requirements are converted into approved gaps, accepted risks,
   design decisions, validation gaps, or change-control exceptions.
6. Accepted-risk or exception evidence records owner, approved by, date/session,
   allowed use, review condition, and rationale.
7. Human reviewer rates the guidance clear enough to use.
8. Any failure to route requirements through requirements-reviewer blocks U5.5.

Fail conditions:

- requirements-reviewer is bypassed.
- Rewritten requirements lose original intent.
- Task-only authority passes.
- Weak requirements become approved authority.
- Dummy validation is presented as satisfying R31 real validation.

### VRUN-U55-001: Lifecycle Discoverability and Requirements-Reviewer Routing

Purpose: Verify that requirements-related work discovers `requirements-reviewer`
without explicitly forcing the skill, and invokes `systems-engineering-traceability`
when implementation authority is involved.

Starting state:

- Repo: `TraceWeaver`
- Branch: `main`
- Candidate commit: historical `987793d fix: stabilize traceability authority rules`;
  current held U5.5 candidate is
  `696548694dd40ce298d77e603db069934b58f645`
- Working tree status: clean
- Runtime bundle:
  - `skills/systems-engineering-traceability/SKILL.md`
  - `references/systems-engineering-traceability-operating-model.md`
  - `references/requirements-and-vv-guide.md`
  - `references/risk-gap-and-change-control-guide.md`
  - `references/traceability-matrix-template.md`
  - `skills/requirements-reviewer/SKILL.md`
  - `skills/requirements-reviewer/references/requirements-review-finding-schema.md`

Prompt:

```text
I want to build a small browser-based 2.5D puzzle-combat game about weaving five original elemental forces. Help me turn this idea into a buildable plan and identify what must be true before implementation can start.
```

Expected behavior:

- Preserves the original idea text.
- Creates candidate needs and requirements, not approved authority.
- Invokes or recommends `requirements-reviewer` for requirement quality.
- Keeps reframed requirements in `Draft` until reviewed.
- Invokes or recommends `systems-engineering-traceability` before
  implementation authority is granted.
- Does not treat a task, idea, weak requirement, or inferred link as approved
  authority.
- Produces required evidence or blocks with a clear reason.

Required evidence artifact:
`docs/validation/u55-lifecycle-discoverability.md`

Human rating fields:

- Requirements-reviewer discovered without being forced: Pass / Fail
- Traceability skill discovered when authority was needed: Pass / Fail
- Original intent preserved: 1-5
- Requirement quality guidance useful: 1-5
- Traceability guidance useful: 1-5
- Over-process level acceptable: 1-5
- Reviewer confidence improved: Yes / No

Fail conditions:

- Requirements-reviewer is bypassed.
- The agent rewrites the idea into requirements without preserving the original
  source.
- Draft requirements become authority.
- Task-only authority passes.
- Weak requirements become approved requirements.
- Traceability is only checked after implementation.

Local checks:

- `git diff --check`: pass
- SKILL.md frontmatter-start check: pass

Decision required:

- Accept into TraceWeaver Core MVP.
- Split into a follow-up candidate.
- Reduce scope back to the U2-U5 validated bundle.

Status: `REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`. U5.5 evidence is sufficient for a
bounded static U6a scope decision for the selected bundle, not enough for
package/runtime claims. U6a now records that exact static scope; packaging
remains held until U6b proves package/install/runtime behavior for the same
scope.

## Packaging Readiness

No representative U5 validation blockers remain for the `ca6ff66` baseline
slice. R31 real-project validation remains open before packaging claims can say
the real validation requirement is satisfied.

Packaging remains blocked until U6b proves package/install/runtime behavior for
the exact reduced static scope recorded by U6a.

Remaining non-validation work before packaging:

- Run focused document review after U6b package/install/runtime evidence and
  before any package-ready claim.
- Use the U6a record only as the bounded static scope decision authorized by
  `U55-LIMIT-STATIC-DISCOVERY-001`.
- Record observed no-forced runtime discovery later for U6b/U9 before dynamic
  runtime or release claims.
- Complete release hygiene decision for candidate source-name surfaces.
- Complete U6b package/install/runtime evidence for the reduced scope.
- Complete R31 real-project validation: real feature, unclear existing module,
  and low-risk Lite-mode scenarios.
- Prepare the upstream-neutral package or TraceWeaver Core release notes,
  depending on the chosen distribution path.
- Keep the latest tested implementation commit fixed at
  `ca6ff66d46f140da72f423ea3dec819f81ef5337` unless another implementation
  change is made and re-reviewed.
