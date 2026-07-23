---
id: TW-AUTHORITY-GATE-2026-07-23-GRAPHIFY-WRAPPER-001
title: Optional Graphify Wrapper Authority Gate
status: proceed_bounded_static_advisory_implementation
date: 2026-07-23
owner: Oxiom Systems
work_item: TraceWeaver-srpk
requirements:
  - REQ-TW-089
  - REQ-TW-090
trace: TRACE-TW-064
verification: VER-TW-084
validation: VAL-TW-032
baseline_hash_sha256: 6e6dee1910320e37f53961ec5e004a809e64b3c5cd6f9c25fa0200d57d25cca1
workflow_profile_hash: sha256:357113a85480e16e849973dcbf2d978964e323329f434a8d4d76eaefa07eb83c
---

# Optional Graphify Wrapper Authority Gate

## Decision

`Proceed` with the bounded L2 static/advisory implementation in
`docs/plans/2026-07-23-graphify-wrapper-integration-plan.md`.

Profile revision 3 preserves the accepted scope and controls after revisions 1
and 2 exhausted their repair cycles on bounded verification and real Graphify
no-result classification findings. The revision does not add authority, a
reviewer, or implementation scope.

## Authority Source

- Stakeholder direction recorded on 2026-07-23 requires Graphify to be
  recommended and used at the appropriate TraceWeaver wrapper steps when
  installed, while preserving the full workflow when it is absent.
- `REQ-TW-089` and `REQ-TW-090` are approved for this bounded behavior.
- Requirements-quality review and plan document review passed.
- `docs/validation/traceweaver-graphify-wrapper-vv-capsule.json` validates as
  `tw-vv-capsule/1`, and its executable smoke has recorded RED evidence before
  implementation.
- `TRACE-TW-064`, `ART-TW-071`, `ATP-TW-041`, `RESULT-TW-041`,
  `VER-TW-084`, and `VAL-TW-032` are present in the authoritative matrix.

## Allowed Implementation Scope

- Add one packaged advisory helper under the `tw-auto` package so installed
  child wrappers can share repository-root resolution, availability states,
  initialization, scoped searches, post-verification code/AST refresh, and
  receipts.
- Update `tw-setup`, `tw-plan`, `tw-debug`, `tw-audit`, `tw-code-review`,
  `tw-traceability-check`, and `tw-work` to invoke or instruct that helper at
  the lifecycle point each wrapper owns.
- Update `tw-auto` only to carry child Graphify receipts; it must execute no
  Graphify command.
- Preserve source inspection and existing TraceWeaver gates in every state,
  including `not_installed`, `no_useful_graph_context`, and `degraded`.
- Add only the deterministic verification, trace anchors, repository hygiene,
  and evidence needed by the accepted plan.

## Must Not Change

- Graphify is derived navigation context, never requirement, source,
  authority, verification, validation, review, completion, or release
  evidence.
- No automatic Graphify installation, package update, provider-key request,
  semantic extraction, global graph mutation, hook installation, publication,
  commit, push, PR, release, deployment, or active-host reconciliation.
- No implementation of the REQ-TW-088 internal SQLite graph mirror.
- No claim that a successful code/AST update refreshed changed Markdown or
  other semantic-backed content.
- No Graphify execution by `tw-auto`.

## Missing Evidence And Held Claims

Implementation GREEN evidence, regression results, scoped implementation code
review, final status/hash document review, and owner validation are not yet
present. Live-host usefulness, semantic freshness, provider-backed extraction,
global graph behavior, runtime enforcement, deployment, release, and
publication remain held.

## Handoff

The accepted next wrapper is
`/tw-work docs/plans/2026-07-23-graphify-wrapper-integration-plan.md` using the
validated L2 V&V capsule. Stop before publication.
