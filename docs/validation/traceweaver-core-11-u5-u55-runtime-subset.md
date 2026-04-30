# TraceWeaver Core 11 U5/U5.5 Runtime-Subset Record

Date: 2026-04-30

Reviewer/session: `ce:work`, branch `codex/traceweaver-u55-runtime-subset`;
`ce-doc-review`, branch `codex/traceweaver-u6-unblock`

Base commit: `6b6f62e73ac7de138a212bd2b6f8340bbba028ae`
U6-unblock review base: `dea8fa0c9e6e9e0bce413653d1cc77e9406c92a0`

Doc-review update: 2026-04-30 `ce-doc-review` found this record is a blocker
inventory, not a U6 authorization artifact. U6 remains blocked until a later
append-only U5.5 terminal-state record cites concrete evidence IDs for every
required runtime field and records `accepted`, `reduced`, or `split`.

## U5 Delta-Only Public Artifact Inventory

Decision: `CLOSED_NO_DELTA`

U5 does not promote files already accepted under U4. The current public skill
tree contains 66 files under `skills/`, and all 66 match the U4-covered path
set:

```text
skills/*/SKILL.md
skills/*/references/source-basis.md
skills/*/references/operating-model.md
skills/*/references/checklist.md
skills/*/references/output-schema.md
skills/*/references/examples.md
```

Verification commands:

```bash
git ls-tree -r --name-only HEAD skills | wc -l
git ls-tree -r --name-only HEAD skills \
  | rg '^skills/[^/]+/(SKILL\.md|references/(source-basis|operating-model|checklist|output-schema|examples)\.md)$' \
  | wc -l
```

Observed result: `66` total skill files and `66` U4-covered skill files.

U4 evidence-integrity cross-check:

```bash
git ls-tree -r --name-only HEAD skills | sort > /tmp/tw-skill-files.txt
rg -o '`skills/[^`]+`' docs/validation/traceweaver-core-11-promotion-records.md \
  | tr -d '`' \
  | sort -u > /tmp/tw-u4-targets.txt
comm -23 /tmp/tw-skill-files.txt /tmp/tw-u4-targets.txt | wc -l
```

Observed result: `0` current skill files missing from U4 target-path evidence.
The first U5.5 subset skills also have current U4 source-preflight rows
`TWCORE-U4-SOURCE-PREFLIGHT-REQUIREMENTS-REVIEWER-001` and
`TWCORE-U4-SOURCE-PREFLIGHT-SYSTEMS-TRACEABILITY-001`.

No exact U5 target artifact remains outside the U4-promoted skill-folder paths.
Existing `docs/distilled/` guidance is already governed by U3 summary records,
and README, plan, review, and validation files are control artifacts, not U5
public artifact deliverables.

```text
u5_target_inventory: []
u5_decision_state: CLOSED_NO_DELTA
u5_release_effect: no runtime, package, upstream, or release claim
u5_next_gate: U5.5 runtime-subset evidence
```

Stale reset rule: if a future public artifact outside the U4-covered paths is
proposed as a promoted schema, example, checklist, operating extract, generated
derivative, runtime reference, or package surface, U5 returns to `held` until an
exact `u5_target_inventory` row, hygiene scan, source mapping, and whole-file or
approved derivative evidence record exist.

## U5.5 Runtime-Subset Matrix

Decision: `held_pending_runtime_evidence`

U5.5 names the first proposed runtime subset, but does not accept runtime,
package, upstream, release, or public-ready claims yet. U6 remains blocked until
this subset reaches a terminal state of `accepted`, `reduced`, or `split` with
the missing evidence listed below.

Evidence completion unblocks only the U6a runtime-scope decision. Runtime,
package, upstream, release, and public-ready claims remain held until the later
U6, U7, and U8 gates explicitly approve their own surfaces.

Candidate-source status: the previous candidate commit
`987793dfd477bc205a0a49efe4ec1b1e31045903` is not reproducible from this repo
and was not present after fetching the public contributor fork branch on
2026-04-30. The public contributor fork branch
`https://github.com/jjziets/agent-skills.git` at
`refs/heads/feature/systems-engineering-traceability` currently advertises
`696548694dd40ce298d77e603db069934b58f645`. U5.5 cannot move to a terminal
U6-eligible state until the chosen candidate commit is refreshed or proven by a
separate access-controlled evidence record with repository, branch, clean-tree
status, and verification command.

```text
u5_5_runtime_subset_matrix:
  subset_id: light-v0.1-authority-traceability
  subset_name: Light v0.1 authority and traceability runtime subset
  candidate_commit: held_pending_refresh_or_evidence
  previous_candidate_commit: 987793dfd477bc205a0a49efe4ec1b1e31045903
  latest_observed_public_fork_head: 696548694dd40ce298d77e603db069934b58f645
  release_gate_effect: held_until_U7
  gate_state: held_pending_runtime_evidence
  skills:
    - skill_name: requirements-reviewer
      files:
        - skills/requirements-reviewer/SKILL.md
        - skills/requirements-reviewer/references/source-basis.md
        - skills/requirements-reviewer/references/operating-model.md
        - skills/requirements-reviewer/references/checklist.md
        - skills/requirements-reviewer/references/output-schema.md
        - skills/requirements-reviewer/references/examples.md
      runtime_discovery_evidence: missing
      skill_loading_evidence: missing
      reference_loading_evidence: missing
      schema_loading_evidence: missing
      example_loading_evidence: missing
      routing_behavior: held; must route requirements and success criteria through requirements-reviewer before authority approval
      failure_behavior: missing
      scenario_evidence: missing R31 real-scenario evidence
      allowed_claims:
        - public skill folder is U4-promoted
        - proposed member of the first U5.5 runtime subset
      held_claims:
        - runtime-ready
        - package-ready
        - release-ready
        - upstream-ready
      gate_state: held_pending_runtime_evidence
    - skill_name: systems-engineering-traceability
      files:
        - skills/systems-engineering-traceability/SKILL.md
        - skills/systems-engineering-traceability/references/source-basis.md
        - skills/systems-engineering-traceability/references/operating-model.md
        - skills/systems-engineering-traceability/references/checklist.md
        - skills/systems-engineering-traceability/references/output-schema.md
        - skills/systems-engineering-traceability/references/examples.md
      runtime_discovery_evidence: missing
      skill_loading_evidence: missing
      reference_loading_evidence: missing
      schema_loading_evidence: missing
      example_loading_evidence: missing
      routing_behavior: held; must route meaningful behavior through approved-authority traceability before implementation or shipping
      failure_behavior: missing
      scenario_evidence: missing R31 real-scenario evidence
      allowed_claims:
        - public skill folder is U4-promoted
        - proposed member of the first U5.5 runtime subset
      held_claims:
        - runtime-ready
        - package-ready
        - release-ready
        - upstream-ready
      gate_state: held_pending_runtime_evidence
  bundle_level_artifacts:
    - artifact: skills/using-agent-skills/SKILL.md
      classification: held_pending_runtime_target
      reason: required to prove no-forced-skill discovery and cumulative routing in the Agent Skills runtime path
    - artifact: references/systems-engineering-traceability-operating-model.md
      classification: included_if_synced_to_runtime_target
      source_public_doc: docs/distilled/systems-engineering-traceability-operating-model.md
      evidence_needed: source-to-runtime mapping, target hash, and reference loading evidence
    - artifact: references/traceability-matrix-template.md
      classification: included_if_synced_to_runtime_target
      source_public_doc: docs/distilled/traceability-matrix-template.md
      evidence_needed: source-to-runtime mapping, target hash, and reference loading evidence
    - artifact: references/requirements-and-vv-guide.md
      classification: included_if_synced_to_runtime_target
      source_public_doc: docs/distilled/requirements-and-vv-guide.md
      evidence_needed: source-to-runtime mapping, target hash, and reference loading evidence
    - artifact: references/risk-gap-and-change-control-guide.md
      classification: reduced_or_held
      source_public_doc: docs/distilled/risk-gap-and-change-control-guide.md
      evidence_needed: reduced-scope decision, source-to-runtime mapping, target hash, and reference loading evidence
    - artifact: skills/requirements-reviewer/references/requirements-review-finding-schema.md
      classification: held_pending_target_anatomy
      reason: referenced by the Agent Skills runtime candidate but not present in the current public TraceWeaver skill folder
```

Excluded by default:

- the other nine U4-promoted Core skills;
- `idea-refine` command wiring;
- persona-awareness guidance;
- CE adapter hooks;
- all package and release surfaces.

## Missing Evidence Before U6

U6a must not start until all of the following exist for the exact runtime
subset:

- target runtime repository and discovery mechanism selected for this subset;
- named runtime discovery mechanism and expected search paths;
- skill loading evidence for each selected skill;
- reference, schema, and example loading evidence for each selected skill;
- routing behavior evidence for requirements-reviewer handoff and
  systems-engineering-traceability handoff;
- failure behavior evidence for missing authority, missing references, invalid
  schema, and unsupported runtime scope;
- focused review disposition for the U5.5 candidate commit;
- R31 real-scenario validation using only role categories, pseudonymous rater
  IDs, sanitized scenario IDs, public-safe actor classes, and summarized value;
- public hygiene scan showing no local paths, non-public commits, raw logs,
  secrets, environment values, private provenance, unsupported standards claims,
  or unsupported release/package claims.

Package layout and manifest selection are U6a outputs and U6b prerequisites, not
U5.5 preconditions. U5.5 must still identify the target runtime and discovery
mechanism before U6a can decide packaging scope.

Until this evidence exists, U6a scope remains blocked and non-selected
U4-promoted Core skills are excluded from runtime packaging by default.

## Required Terminal-State Handoff

The current held record is not consumable by U6. A later U5.5 transition must be
recorded as a new dated append-only terminal-state section or superseding
evidence file with:

- reviewer/session and date;
- exact candidate repository, branch, commit, and clean checkout status;
- evidence IDs for runtime discovery, skill loading, reference loading, schema
  loading, example loading, routing behavior, and failure behavior;
- focused review disposition for the selected candidate commit;
- R31 authority reference and result;
- included, excluded, reduced, held, and split files;
- stale-reset rule;
- explicit statement that the selected runtime subset is U6a-eligible.

R31 sufficiency must cite the R31 adoption/value gate from
`docs/plans/2026-04-27-002-feat-traceability-mvp-u1-u55-closeout-plan.md` and
must show scenario selection, rater independence or recorded limitation,
pass/fail thresholds, and at least one traceability-specific value result that a
representative rater keeps.
