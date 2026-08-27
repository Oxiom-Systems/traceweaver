---
id: TW-OWNER-DECISION-2026-08-24-V060-PRODUCT-LIFECYCLE-001
title: TraceWeaver Core 0.6.0 product-lifecycle successor authority
status: slice_0_complete_slice_1_authorized_under_retained_tw_auto
date: 2026-08-24
owner: Oxiom Systems
predecessor_release: traceweaver-core--v0.5.0
predecessor_release_commit: 3a1f3c56b093e61b88e9f6282637878e8ebbf163
integration_base_pr: 61
integration_base_sha: e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33
target_release: traceweaver-core--v0.6.0
---

<!-- TRACEWEAVER: file-role=owner-decision-package; req=REQ-TW-130,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# TraceWeaver Core 0.6.0 Product-Lifecycle Successor Authority

## Owner decision

On 2026-08-24, Oxiom Systems selected option 1 from the explicit release
reconciliation choice: preserve the published TraceWeaver Core 0.5.0 release
and deliver the deferred lightweight product-lifecycle assurance framework as
the Core 0.6.0 successor.

This decision closes the reactivation condition in `EXC-TW-017` without
changing, deleting, retagging, or reinterpreting the published 0.5.0 release.
It authorizes a controlled 0.6.0 requirements and implementation baseline with
fresh identifiers. It does not reuse or promote the historical
`REQ-TW-093..108` allocation.

## Incorporated source evidence

The following historical records remain source evidence and rationale only:

| Source | SHA-256 | Successor use |
| --- | --- | --- |
| `docs/plans/2026-08-21-traceweaver-0.5.0-product-intent-plm-handover.md` | `be9544306c27e68e1cb4ce50936491e37ca3a0a9a302b69804d4f2815e90ebb7` | Product intent, lifecycle chain, human-authority boundary, and lightweight-PLM positioning; final blank-line normalization only. |
| `docs/plans/2026-08-21-traceweaver-0.5.0-plm-assurance-implementation-plan.md` | `83393cdb7167987c87dec3f949585fd9380e8d64a70b9ffae111d67e6ceab865` | Slices, verification strategy, validation targets, and release gates; final blank-line normalization only. |

The exhausted authority-patch, direct-transition, and replacement-cycle
records remain preserved in the named recovery stash as immutable RED evidence.
They are not implementation inputs. Their retained lessons are: do not infer
owner approval, do not let post-review bookkeeping self-invalidate the graph,
and do not reopen an exhausted repair series.

## Fresh successor allocation

The 0.6.0 program uses:

- `INTENT-TW-012..013`;
- `NEED-TW-014..017`;
- `REQ-TW-130..145`;
- `DEC-TW-011..015`, `IF-TW-007..011`, and `RISK-TW-014..023`; and
- `ART-TW-081`, `TRACE-TW-074`, `ATP-TW-051`, `RESULT-TW-051`,
  `VER-TW-094`, and `VAL-TW-042`.

The historical lifecycle allocation remains reserved and must not be reused:
`INTENT-TW-009..010`, `NEED-TW-009..012`, `REQ-TW-093..108`,
`DEC-TW-004..008`, `IF-TW-001..005`, `RISK-TW-001..010`,
`ART-TW-078`, `TRACE-TW-071`, `ATP-TW-048`, `RESULT-TW-048`,
`VER-TW-091`, and `VAL-TW-039`.

## Authorized product boundary

Core 0.6.0 is a lightweight assurance layer that preserves the chain from a
registered commitment or stakeholder source through intent, needs,
requirements, constraints, decisions, interfaces, risks, changes, product
artifacts, verification, validation, acceptance, and evidence.

It may provide deterministic schemas, import/reference receipts, prepared
human confirmation, V&V-at-capture, stale-evidence detection, lifecycle graph
queries, strict static semantic-HTML views, acceptance packs, product dogfood,
and release automation. It must remain provider-independent and must not become
an ERP, CAD, BOM, ALM, contract, e-signature, supplier-management, or general
relational-authority replacement.

Imported, inferred, generated, graph-derived, or externally referenced content
remains non-authoritative until a named human accepts the controlled delta.
Approval, verification, independent review, validation, acceptance, and
publication remain separate truth stages.

## Delivery authority and gates

The owner authorizes sequential implementation of the bounded work in
`docs/plans/2026-08-24-traceweaver-0.6.0-product-lifecycle-assurance-plan.md`
after the three controlling roots contain the fresh allocation and the scoped
authority review accepts their exact semantic candidate. That review is now
accepted as `TW-DOC-REVIEW-2026-08-24-V060-PRODUCT-LIFECYCLE-AUTHORITY-001`
with formal acceptance
`TW-FORMAL-AUTHORITY-ACCEPTANCE-2026-08-24-V060-PRODUCT-LIFECYCLE-001`.

Each implementation slice must have requirement-linked RED/GREEN verification
and trace updates. After all slices are integrated into the one frozen mixed
candidate, that complete candidate receives one independent Terra review under
the frozen L3 profile, with at most one batched repair and one targeted resume
of the same reviewer identity. Semantic HTML remains derived until its atomic
parity, consumer-census, accessibility, security, and rollback gate passes.
Product validation and release remain held until their named evidence passes
on the same candidate.

The delivery must first dogfood an isolated clean install of the exact
published `traceweaver-core--v0.5.0` predecessor and retain its release tag,
commit, manifest, package, install, and selected callable-skill hashes. The
active Codex host currently points at an older mixed-root development install;
neither that host state nor branch-local 0.6.0 files count as predecessor
dogfood evidence. Dogfood may identify gaps, but it cannot amend this baseline
or authorize behavior by itself.

## Publication boundary

This decision authorizes implementation and preparation of a reviewed PR on
`codex/v050-product-intent-plm-plan`. It does not authorize rewriting the
0.5.0 tag or release. Commit, push, PR creation/update, merge, tag, and GitHub
Release remain the separately gated publication actions in the accepted 0.6.0
plan and publication capsule.

The exact release target is `traceweaver-core--v0.6.0`. It may be published
only from the accepted main merge SHA after protected-main smoke, CodeQL,
manifest equality, release-readiness, reinstall, and product-validation gates
pass.

## Protected workspace boundary

All work remains in
`/Users/hanneszietsman/CrypotAI/TraceWeaver/.worktrees/codex/v050-product-intent-plm-plan`
on `codex/v050-product-intent-plm-plan`. The mixed root worktree on
`codex/lean-convergence` must not be switched, reset, rebased, cleaned, staged,
or modified.

Every TraceWeaver native child explicitly requests `gpt-5.6-terra`; L3 fixes
reasoning effort at `xhigh`. Sol and Opus child routes, inherited models, and
silent fallback are prohibited. Requested model and served-model attestation
remain distinct.

## Next gate

Begin Slice 1 under the accepted plan and retained `tw-auto` loop. Keep the
integrated mixed-candidate review, product validation, semantic cutover,
publication, and release held until their named gates close.
