---
name: baseline-configuration-control
description: Controls TraceWeaver baselines, final candidate refs, package scope, fork diffs, and stale evidence. Use when asking what is controlled and whether evidence still applies after changes.
---

# Baseline Configuration Control

## Purpose

Protect the controlled baseline so agents, reviewers, and release gates all
refer to the same approved candidate and file set.

## Core Question

What is the controlled baseline, and did anything change after evidence was
generated?

## When To Use

- Before release, promotion, package build, or runtime sync.
- When comparing source archive, public repo, live runtime package, or fork.
- When evidence was produced before the latest commit or file change.
- When deciding whether a changed file resets a gate.

## When Not To Use

- To judge requirement wording quality.
- To approve a risk, gap, or waiver.
- To create verification or validation evidence.
- To decide architecture or design rationale.

## Inputs Required

- Candidate commit, branch, tag, package version, or artifact hash.
- Controlled file set and package inclusion rules.
- Evidence records with tested ref, date/session, and result path.
- Fork diff, baseline diff, or post-gate change list.
- Existing approved gaps, risks, waivers, deviations, or change records.

## Outputs Produced

- `baseline_record`
- `final_candidate_evidence_index`
- `controlled_file_set`
- `fork_diff_classification`
- `stale_gate_report`
- `change_reset_decision`

## Authority Boundary

This skill protects baseline truth. It can classify whether evidence is current,
stale, missing, or out of scope. It cannot approve a new requirement, accept a
risk, or waive a failed gate by itself.

## Handoff Rules

- Missing authority goes to `systems-engineering-traceability`.
- Weak requirement authority goes to `requirements-reviewer`.
- Approved exceptions and baseline deltas go to `risk-gap-change-control`.
- Evidence planning gaps go to `verification-planner` or `validation-planner`.
- Proceed/hold decision readiness goes to `technical-review-and-audit-gate`.

## Failure / Hold Conditions

- Release gates reference different candidate commits.
- Runtime/package files changed after evidence was produced.
- Controlled file set is undefined.
- Fork diff includes unclassified behavior change.
- Evidence record lacks tested ref, artifact hash, or configuration context.
- A stale gate is treated as passed without impact review.

## Examples

- Clean: final candidate commit, package file set, verification records, and
  validation record all reference the same ref.
- Weak: package metadata changed after verification, but the gate still points
  to the old commit.
- Exception: a documentation-only change after gate pass is impact-reviewed and
  recorded as no reset for runtime evidence.

## References

Read:

1. `references/operating-model.md`
2. `references/checklist.md`
3. `references/output-schema.md`
4. `references/examples.md` when examples help
5. `references/source-basis.md` only for provenance

## Process

1. Identify the baseline under control.
2. Record candidate ref, controlled file set, package scope, and evidence index.
3. Compare post-evidence changes against controlled scope.
4. Classify diffs as no-impact, impact-reviewed, reset-required, or blocked.
5. Mark affected gates as current, stale, held, reduced, or superseded.
6. Emit baseline and stale-gate records using the output schema.

## Gate

All release gates must reference the same final live candidate commit. Any
runtime or package-controlled file change after a gate passes resets affected
gates to `held` unless an explicit impact review records why the evidence still
applies.
