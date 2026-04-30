# Baseline Configuration Control Guide

Status: Distilled TraceWeaver Core guidance

This guide gives agents public summary rules for controlling TraceWeaver
baselines, final candidate refs, package scope, fork diffs, and stale evidence.
It is original TraceWeaver guidance for U3 summary promotion and does not
promote a public skill folder, runtime package, package manifest, or release
claim.

Requirement basis: R15 in
`docs/brainstorms/2026-04-27-traceweaver-core-skill-taxonomy-requirements.md`.

## Core Question

What is the controlled baseline, and did anything change after evidence was
generated?

## Use When

Use baseline configuration control before release, promotion, package build, or
runtime sync. Also use it when evidence was created before the latest commit,
when a fork diff is unclear, or when a reviewer needs to know whether a gate is
still current.

Do not use it to approve requirements, waive failed gates, accept risks, or
create verification or validation evidence.

## Required Inputs

- candidate ref, branch, tag, package version, or artifact hash
- controlled file set
- package inclusion and exclusion rules
- evidence records with tested ref, date/session, and result path
- fork diff, baseline diff, or post-gate change list
- approved gaps, risks, waivers, deviations, or change records

## Expected Outputs

- baseline record
- final candidate evidence index
- controlled file set
- fork diff classification
- stale gate report
- change reset decision

## Decision Rules

- A baseline is a named, controlled set of files, refs, records, and evidence.
- Evidence is valid only for the tested ref, artifact, configuration, and scope
  it records.
- A final candidate must have one controlling ref for gates, package scope, and
  release evidence.
- Runtime or package-controlled changes after evidence make affected gates stale
  unless an explicit impact review records why the evidence still applies.
- A fork diff is not noise until classified.
- A task, branch, or local workspace state is not a baseline unless recorded as
  controlled authority.

## Diff Classes

| Class | Meaning | Action |
|---|---|---|
| `no_impact` | Change cannot affect controlled behavior or evidence | Record rationale |
| `impact_reviewed` | Change affects scope but evidence remains acceptable | Link review record |
| `reset_required` | Change invalidates one or more gates | Hold affected gates |
| `blocked` | Change lacks authority or impact analysis | Stop and route |
| `superseded` | Older baseline replaced by approved newer baseline | Link before/after |

## Hold Conditions

Hold the gate when:

- candidate ref is missing or inconsistent;
- controlled file set is unknown;
- a runtime or package file changed after evidence and has no impact review;
- fork diff contains unclassified behavior change;
- evidence cannot be tied to the candidate under review;
- a stale gate is still marked passed.

## Handoffs

| Finding | Next Skill |
|---|---|
| Behavior not in baseline | `systems-engineering-traceability` |
| Requirement changed | `risk-gap-change-control` |
| Evidence stale or missing | `verification-planner` / `validation-planner` |
| Readiness decision needed | `technical-review-and-audit-gate` |

## Summary Output Shape

```yaml
skill_name: baseline-configuration-control
decision: held
baseline_record:
  baseline_id: BASE-001
  baseline_type: final_candidate
  candidate_ref: ""
  controlled_file_set: []
  package_scope: []
final_candidate_evidence_index:
  verification_records: []
  validation_records: []
  review_records: []
  gate_records: []
fork_diff_classification:
  files_changed: []
  classification: reset_required
  affected_gates: []
stale_gate_report:
  gate_id: ""
  prior_status: approved
  new_status: held
  stale_reason: ""
  reset_required: true
```

## U5.5 Blocker Mapping

This summary owns blockers where validation, runtime evidence, release gates, or
fork-diff classifications point at different candidate refs or become stale
after later file changes.
