---
id: PLAN-TW-2026-05-05-001
title: TraceWeaver Dogfood Audit
status: complete_reviewed
date: 2026-05-05
owner: Oxiom Systems
origin: user request to pause U10 and run the TraceWeaver skills/smokes on this repository
---

# TraceWeaver Dogfood Audit Plan

## Problem

TraceWeaver has accumulated static, install, fixture, and held runtime evidence.
Before continuing deeper U9/U10 work, the project needs a direct dogfood audit
that shows what works on this repository, what outputs are visible, what claims
remain held, and whether current requirements cover the expected product
behavior.

## Scope

This plan audits the current repository and current auth-safe runtime proof
worktree. It does not accept release-ready, clean replacement, enforcing mode,
autonomous publication, active host-registry discovery, or real `tw-*` runtime
invocation claims.

Raw logs may be written under the private repository audit folder. Public repo
records must summarize results without private paths, secrets, raw session
transcripts, or copied protected standards text.

## Requirements Trace

| Requirement | Audit relevance |
| --- | --- |
| REQ-TW-002 | Confirm meaningful work cites intent, authority, verification, validation, and baseline. |
| REQ-TW-005 | Confirm the chain from intent through verification and validation is visible. |
| REQ-TW-008 | Confirm `traceability-matrix.md` remains the authoritative audit record. |
| REQ-TW-014 | Check selected CE-compatible skill packaging and held replacement boundary. |
| REQ-TW-016 | Re-run install/discovery smoke for selected skills. |
| REQ-TW-021 | Keep public evidence clean of private or protected material. |
| REQ-TW-022 | Keep R31/release-ready claims held. |
| REQ-TW-035 - REQ-TW-040 | Check `tw-auto` authority, review, traceability, and stop-before-publication controls. |
| REQ-TW-041 - REQ-TW-044 | Check standalone plugin and CE-method wrapping boundaries. |
| REQ-TW-045 - REQ-TW-048 | Check idea/brainstorm/requirements flow, `tw-grill`, trace gaps, and dark-behavior routing. |

## Audit Units

### Unit 1: Executable Smoke Audit

Status: complete / review passed

Run the current smoke harnesses and save raw logs privately:

- `scripts/traceweaver-smoke-codex-discovery`
- `scripts/traceweaver-smoke-u9-fixtures`
- `scripts/traceweaver-smoke-no-publication`
- `scripts/traceweaver-smoke-codex-host-registry`
- `scripts/traceweaver-smoke-codex-separate-home-runtime`
- `scripts/traceweaver-smoke-ce-replacement-classifier`

Expected result: deterministic smokes pass or emit explicit held statuses. Any
crash becomes a dogfood finding and must be fixed or recorded as a blocker.

### Unit 2: Manual Skill Output Audit

Status: complete / review passed

Audit the TraceWeaver skill surfaces from their packaged `SKILL.md` files:

- `tw-grill`
- `tw-requirements-review`
- `tw-authority-gate`
- `tw-traceability-check`
- `tw-auto`
- `lfg`

For each skill, record whether the expected output shape exists, whether it can
produce source evidence or gate status without inventing authority, and whether
the behavior is instruction-only, fixture-proven, install-proven, or runtime
proven.

### Unit 3: Requirements And Brainstorm Gap Audit

Status: complete / review passed

Compare current requirements and brainstorm/source documents against the user's
expected outcomes:

- visible metrics;
- Mermaid diagrams;
- traceability matrix updates;
- code-level requirement comments or annotations;
- tests and validation evidence;
- quality of skill outputs.

Expected result: requirements gaps are listed as proposed requirement/change
items unless already covered by approved requirements.

### Unit 4: Public Evidence Record

Status: complete / review passed

Create a public-safe validation record that summarizes:

- commands run and pass/held/fail outcomes;
- private raw-log location by label only;
- dogfood-discovered bug fixes;
- skill-by-skill output observations;
- requirements gaps and held claims;
- next recommended gates.

### Unit 5: Matrix Linkage

Status: complete / review passed

Update `traceability-matrix.md` with dogfood audit artifact and verification
rows as reviewed dogfood evidence. Do not use this dogfood record to accept
runtime claims.

## Acceptance Criteria

- The dogfood audit record separates passed evidence from held claims.
- The audit names any requirement gaps instead of treating them as authority.
- Public records do not include private raw transcript content.
- `git diff --check` passes.
- The classifier locale crash is either fixed and covered by smoke, or recorded
  as a blocker.
- Next steps identify the remaining held runtime and automation gates after the
  dogfood authority doc review passes.
