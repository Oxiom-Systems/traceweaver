---
name: baseline-configuration-control
description: Controls baseline identity, configuration control, fork-diff classification, and evidence currency for TraceWeaver work. Use when deciding which approved baseline governs the work, whether evidence still applies after later changes, whether a changed file resets a gate, or before release, promotion, package build, or runtime sync.
---

<!-- TRACEWEAVER: file-role=distilled-baseline-configuration-knowledge-skill; req=REQ-TW-020; trace=TRACE-TW-010; ver=VER-TW-012 -->

# Baseline Configuration Control

## Overview

Protect the controlled baseline so agents, reviewers, and release gates all
refer to the same approved candidate and file set. This skill does not
summarize standards or source documents; it applies distilled TraceWeaver
rules to baseline identity, configuration control, and evidence currency.

Core question:

```text
What is the controlled baseline, and did anything change after evidence was
generated?
```

If the baseline is unknown, inconsistent, or changed after evidence, say so,
classify the change, mark the affected gates, and state which claims are held.

## Reference Loading

Always load `references/baseline-control-operating-model.md`,
`references/baseline-control-checklist.md`, and
`references/baseline-control-output-schema.md` for substantive baseline or
configuration-control work.

- Load `tests/baseline-control-examples.md` when calibrating dispositions,
  classifying a borderline diff, or producing example-driven guidance.
- Load `references/source-basis.md` only when the user asks where the rules
  came from or when updating the distilled knowledge base.

Do not reproduce licensed source text, source tables, source diagrams, or long
quoted passages. Public output must use original TraceWeaver wording.

## Process

### 1. Identify The Baseline Under Control

Name the baseline being judged: a final candidate, a release, a runtime
package, a promoted skill set, or a controlled document set. A task, branch,
or local workspace state is not a baseline unless it is recorded as controlled
authority. "Latest", "current", or "main" is not a baseline name.

### 2. Record Baseline Identity And Scope

Record before judging:

- candidate ref: commit, branch, tag, package version, or artifact hash
- controlled file set
- package inclusion and exclusion rules, recorded and locatable from the
  baseline record
- evidence index: verification, validation, review, and gate records, each
  with tested ref, date/session, and result path
- owner and status

If the candidate ref is missing or two records cite different refs, the
baseline is inconsistent; hold before classifying anything else.

### 3. Compare Post-Evidence Changes

List every change made after evidence was generated: commits, file edits,
package metadata changes, fork diffs, and runtime sync deltas. Compare the
change list against the controlled file set and package scope. Evidence is
valid only for the tested ref, artifact, configuration, and scope it records.

### 4. Classify Each Diff

A fork diff must be classified before it may be dismissed. Classify every
changed file or change set as exactly one of:

| Class | Meaning | Action |
|---|---|---|
| `no_impact` | Change cannot affect controlled behavior or evidence | Record rationale |
| `impact_reviewed` | Change affects scope but evidence remains acceptable | Link review record |
| `reset_required` | Change invalidates one or more gates | Hold affected gates |
| `blocked` | Change lacks authority or impact analysis | Stop and route |
| `superseded` | Older baseline replaced by approved newer baseline | Link before/after |

A change is `no_impact` only after a recorded rationale says why it cannot
affect controlled behavior or evidence. Silence is not classification.

### 5. Mark Gate Currency

Mark every affected gate as `current`, `stale`, `held`, `reduced`, or
`superseded`. Any runtime or package-controlled file change after a gate
passes resets the affected gates to `held` unless an explicit impact review
records why the evidence still applies. A stale gate must not remain marked
passed.

### 6. Emit Baseline And Stale-Gate Records

Produce the records from the output schema: `baseline_record`,
`final_candidate_evidence_index`, `controlled_file_set` (inside the baseline
record), `fork_diff_classification`, `stale_gate_report`, and
`change_reset_decision`. A controlled change must link to the affected items
across needs, requirements, design, implementation, verification, validation,
risks, gaps, and release gates; when no item in a category is affected, record
that as rationale rather than leaving it silent.

## Authority Boundary

This skill protects baseline truth. It can classify whether evidence is
current, stale, missing, or out of scope, and it can hold gates. It cannot:

- approve a new requirement or change requirement wording quality judgments
- accept a risk, approve a gap, or waive a failed gate
- create verification or validation evidence
- decide architecture or design rationale

## Handoff Rules

- Missing authority goes to `systems-engineering-traceability`.
- Weak requirement authority goes to `requirements-reviewer`.
- Requirement changes, approved exceptions, and baseline deltas go to
  `risk-gap-change-control`.
- Evidence planning gaps go to `verification-planner` or `validation-planner`.
- Proceed/hold decision readiness goes to `technical-review-and-audit-gate`.

When a handoff target is not packaged as a runtime skill in this plugin, route
through its distilled guide and the owning `tw-*` wrapper instead of inventing
the missing judgment here.

## Integration With TraceWeaver

`tw-authority-gate` and `tw-audit` use this skill when judging baseline
identity, authority custody, change control, stale evidence, and
uncontrolled-change findings.

Baseline identity anchors the Intent Contract -
`.traceweaver/intent-contract.yml` - and `requirements.md` versioning. An
authority claim must cite the current baseline version/hash; an authority
decision that cites a superseded or drifted baseline hash is stale and must be
re-anchored before it can gate work.

If a baseline check fails:

- do not mark affected gates passed
- record the stale gates and the diff classification that staled them
- state which completion, release, package, or sync claims are held
- route the repair to the owning skill or wrapper per the handoff rules

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "It's only a docs change." | A change is `no_impact` only after a recorded rationale says why it cannot affect controlled behavior or evidence. |
| "The tests passed last week." | Evidence is valid only for the tested ref; later runtime or package changes make affected gates stale unless impact-reviewed. |
| "The branch is basically the baseline." | A task, branch, or workspace state is not a baseline until recorded as controlled authority. |
| "The fork diff is just noise." | A fork diff must be classified before it may be dismissed; an unclassified behavior change is a hold condition. |
| "We'll fix the ref bookkeeping at release." | Gates citing different candidate refs cannot prove the same product; reconcile refs before trusting gate results. |
| "Re-running everything is too expensive." | An explicit impact review may keep evidence current; silence may not. |

## Red Flags

- Release gates referencing different candidate refs
- Evidence records without tested ref, artifact hash, or configuration context
- Controlled file set undefined, or package inclusion/exclusion rules not
  recorded
- A runtime or package-controlled file changed after a gate passed with no
  impact review
- A stale gate still reported as passed
- "Latest", "current", or a bare branch name used as a baseline identity
- Fork diff containing an unclassified behavior change
- Baseline supersession without a before/after link
- Authority decisions citing an old baseline hash after the Intent Contract or
  `requirements.md` changed

## Verification

Before finishing baseline or configuration-control work, confirm:

- [ ] The baseline under control is named and its candidate ref is recorded.
- [ ] The controlled file set and package inclusion/exclusion rules are
      recorded and locatable from the baseline record.
- [ ] Every evidence record ties to the tested ref or artifact it claims.
- [ ] All release gates reference the same final candidate ref.
- [ ] Every post-evidence change is classified with exactly one diff class.
- [ ] Affected gates are marked current, stale, held, reduced, or superseded.
- [ ] No held or stale gate is reported as passed.
- [ ] Held claims and the next handoff are stated explicitly.
- [ ] Outputs use the output schema and original TraceWeaver wording.
