# TraceWeaver Core 11 U5/U5.5 Runtime-Subset Record

Date: 2026-04-30

Reviewer/session: `ce:work`, branch `codex/traceweaver-u55-runtime-subset`

Base commit: `6b6f62e73ac7de138a212bd2b6f8340bbba028ae`

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

```text
u5_5_runtime_subset_matrix:
  subset_id: light-v0.1-authority-traceability
  subset_name: Light v0.1 authority and traceability runtime subset
  candidate_commit: 987793dfd477bc205a0a49efe4ec1b1e31045903
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

- target runtime repository, package layout, or manifest selected for this
  subset;
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

Until this evidence exists, U6a scope remains blocked and U4-only skills are
excluded from runtime packaging by default.
