---
title: CE Replacement Inventory Classifier
type: feat
status: active
date: 2026-05-04
origin: docs/plans/2026-05-02-001-feat-full-ce-341-traceweaver-authority-wrapping-plan.md
baseline_id: REQ-BASELINE-2026-04-30-001
baseline_hash_sha256: 6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba
traceweaver_mode: advisory
review_evidence_id: CE-DOC-REVIEW-2026-05-04-CE-REPLACEMENT-CLASSIFIER-PLAN-CLEAN-001
review_status: passed_no_findings
---

# CE Replacement Inventory Classifier

## Overview

Build a generator/checker that mechanically inventories the Compound
Engineering 3.4.1 surface and the TraceWeaver packaged surface, then classifies
each behavior-bearing CE entrypoint or support surface as `wrapped`, `aliased`,
`hidden`, `held`, or `out_of_scope`. `missing` and `unclassified` are checker
statuses, not controlled classifications.

This closes the current guessing problem without claiming clean replacement.
The checker should tell us exactly what is wrapped, what is only continuity
support, what must be hidden, what is held, and what is missing before we remove
the CE plugin from the host and rely on TraceWeaver-installed skills.

## Problem Frame

TraceWeaver has a reviewed static/advisory alpha and a full CE authority-wrapping
roadmap. It does not yet have a mechanical proof that every upstream CE
entrypoint and related support file is either wrapped by TraceWeaver, delegated
to a TraceWeaver wrapper, hidden from direct use, intentionally held, or
intentionally out of scope.

Without that proof, removing CE from the active host would be guesswork:

- a direct `ce-*` skill could remain callable and bypass authority gates;
- a CE support file could be copied without a classification row;
- an unselected CE skill could still influence a preserved workflow branch;
- TraceWeaver could accidentally claim clean CE replacement from static install
  evidence;
- U9 runtime work could proceed before the install surface is understood.

The generator/checker is the next safe step because it creates a falsifiable
inventory and keeps runtime, enforcing, publication, and clean-replacement
claims held.

## Authority And Source Trace

| Source | Use in this plan |
| --- | --- |
| `requirements.md` REQ-TW-014, REQ-TW-020, REQ-TW-033 through REQ-TW-048 | Authorizes CE-compatible workflow continuity, standalone TraceWeaver packaging, authority controls, `tw-auto`, `lfg`, and static/advisory `tw-grill`; keeps runtime and clean-replacement claims held. |
| `docs/brainstorms/2026-05-01-traceweaver-ce-method-authority-correction.md` | Captures the stakeholder correction that TraceWeaver must repackage the CE method with systems-engineering authority instead of living beside CE. |
| `docs/plans/2026-05-02-001-feat-full-ce-341-traceweaver-authority-wrapping-plan.md` | Provides the classification taxonomy, evidence rubric, and full CE 3.4.1 inventory target. |
| `docs/validation/traceweaver-core-11-ce-runtime-inventory.md` | Provides the selected CE source pin, selected packaged files, hashes, and static materialization boundary. |
| `plugins/traceweaver-core/references/ce-upstream-source-inventory.md` | Provides the upstream CE version, source commit, aggregate fingerprint, and stale-reset rules. |
| `traceability-matrix.md` ART-TW-022, VER-TW-015, VER-TW-023 through VER-TW-026, TD-TW-010, EXC-TW-008 | Records current static install evidence, host conflicts, held runtime evidence, and clean-replacement limitations. |

## Scope

In scope:

- scan the pinned upstream CE 3.4.1 current/core method surface needed for the
  checkpoint, plus broad-surface identifiers needed to create held skeleton rows;
- scan the exhaustive upstream CE 3.4.1 skill, agent, prompt, manifest, command,
  support-file, connector, install metadata, and external-dependency surface only
  when Unit 0 selects `full_surface_supported` or an accepted
  `product_exception`;
- scan the TraceWeaver plugin source and installed Codex skill surface;
- join those inventories to a controlled classification file;
- fail closed on missing hashes, stale source pins, unclassified CE surfaces,
  unapproved packaged CE files, and direct CE entrypoints that can still mutate
  behavior without a wrapper, stop, absence proof, or read-only proof;
- emit machine-readable and human-readable evidence for review;
- create a host-removal readiness check that reports blockers before any CE
  plugin or skill directory is removed.
- preserve the full CE roadmap's Unit 1A checkpoint gate: current/core
  inventory and held broad-surface skeletons may proceed first, while exhaustive
  37-skill and whole-plugin classification may proceed only after the checkpoint
  returns `full_surface_supported` or records an accepted `product_exception`.

Out of scope:

- exhaustive full-surface Unit 1B classification before the Unit 1A checkpoint
  result exists;
- implementing the missing wrappers;
- removing CE from the active host;
- installing TraceWeaver into the active host as the only provider;
- invoking `tw-auto`, `lfg`, `tw-grill`, or direct `ce-*` skills as runtime
  proof;
- closing U9 runtime behavior, enforcing authority gates, slash-command support,
  release-ready status, or clean CE replacement.

## Design

The work should add a single classifier flow with three outputs:

```text
pinned upstream CE source
  + selected CE inventory
  + TraceWeaver plugin source
  + optional installed Codex home
  + controlled classification targets
  -> generator/checker
  -> JSON/YAML inventory
  -> Markdown evidence record
  -> pass/fail readiness summary
```

The checker should be deterministic and conservative:

- generation may discover surfaces, hashes, support edges, and host visibility;
- classification authority must come from a controlled file in the repo;
- generated discoveries may propose rows, but they must not silently approve a
  row;
- the checker must emit held skeleton rows for broad surfaces when the Unit 1A
  checkpoint is missing, stale, or returns `narrow_to_core_method`;
- low-confidence rows default to `held`;
- any installed or packaged behavior-bearing CE surface without a valid class
  fails the check;
- any clean-replacement or runtime-equivalence wording in generated evidence
  must be listed under held claims unless later U9 evidence closes it.

## Classification Schema

Create a controlled classification file that can be reviewed and diffed. The
schema should be simple enough for shell/Ruby scripts to validate without adding
new runtime dependencies.

Recommended path:

- `plugins/traceweaver-core/references/ce-replacement-classification.yml`

Rows use one of two schemas. Current/core classification rows carry full
classification evidence. Held skeleton rows for current packaged support,
package support, broad surfaces, and out-of-scope surfaces carry fail-closed
blocker and reopen evidence until they are promoted by a later reviewed scope
decision.

Current/core classification rows should include:

- `id`: stable row id, such as `CE-SKILL-ce-work` or `CE-AGENT-correctness-reviewer`;
- `surface_type`: `skill`, `agent`, `prompt`, `default_prompt`, `command`,
  `manifest`, `mcp_app_connector`, `install_metadata`, `support_file`,
  `external_dependency`, or `installer_surface`;
- `upstream_path`: upstream CE path when present;
- `traceweaver_path`: TraceWeaver package path when present;
- `source_version`: expected CE version or `traceweaver_delta`;
- `expected_hash`: hash for source-controlled files when the row controls one
  file;
- `support_closure_depth`: `exhaustive`, `dependency_and_consumer`, or
  `not_applicable`;
- `classification`: `wrapped`, `aliased`, `hidden`, `held`, or `out_of_scope`;
- `side_effect_category`: one of the categories already named in the full CE
  roadmap;
- `authority_evidence`: requirements, accepted exception, baseline id/hash, and
  validation question;
- `class_rationale`: why this class is correct;
- `disconfirming_test`: evidence that would force reclassification;
- `confidence`: `high`, `medium`, or `low`;
- `allowed_claims`: explicit allowed claims;
- `held_claims`: runtime, publication, authority, or release claims still held;
- `close_condition`: what evidence closes the row;
- `reopen_condition`: what drift reopens the row;
- `evidence_status`: `provisional_target`, `static_proven`,
  `static_proven_runtime_held`, `package_surface_held`, `runtime_held`,
  `runtime_proven`, or `reclassified`;
- `reviewer_evidence_id`: review id or `pending_review`.

Held skeleton rows should include:

- `id`: stable row id;
- `surface_type` plus `traceweaver_path`, `upstream_path`, `manifest_path`, or
  `surface_key` as applicable;
- `blocker`: why the surface is not implementation/runtime authority;
- `dependency_check` and `consumer_check` when the surface is upstream or broad;
- `classification`: `held` or `out_of_scope` when the row is a controlled class;
- `evidence_status`;
- `allowed_claims`;
- `held_claims`;
- `reopen_condition`.

Generated output may add non-authoritative fields such as `actual_hash`,
`visible_in_host`, `support_edges`, `missing_support_files`, and
`checker_status`.

## Implementation Units

### Unit 0: Checkpoint Gate And Scope Mode

Read or create the Unit 1A product-checkpoint evidence required by the full CE
roadmap, then set the classifier's executable mode.

Files:

- `docs/validation/traceweaver-ce-replacement-classification.md`
- `plugins/traceweaver-core/references/ce-replacement-classification.yml`

Test scenarios:

- missing checkpoint produces `scope_mode=current_core_with_broad_surface_held`;
- `narrow_to_core_method` produces current/core rows plus held broad-surface
  skeleton rows with reopen triggers;
- `full_surface_supported` permits exhaustive 37-skill and whole-plugin
  classification;
- `product_exception` permits only the surfaces named by the exception;
- stale or ambiguous checkpoint evidence fails closed and does not permit full
  Unit 1B classification.

### Unit 1: Schema And Fixtures

Define the controlled classification schema and small fixtures that prove the
checker fails closed before touching the full CE inventory.

Files:

- `plugins/traceweaver-core/references/ce-replacement-classification.yml`
- `fixtures/ce-replacement-classifier/README.md`
- `fixtures/ce-replacement-classifier/upstream-ce/skills/ce-sample/SKILL.md`
- `fixtures/ce-replacement-classifier/traceweaver/skills/ce-sample/SKILL.md`
- `fixtures/ce-replacement-classifier/traceweaver/skills/tw-sample/SKILL.md`

Test scenarios:

- a current/core classification row with every required field passes schema
  validation;
- a row missing authority evidence fails;
- a low-confidence `wrapped` row fails unless its evidence status is held;
- a packaged direct CE skill with no row is reported as `unclassified`;
- a row whose `expected_hash` no longer matches is reported as stale.

### Unit 2: Inventory Generator

Add a script that scans upstream CE source, selected inventory records, the
TraceWeaver plugin tree, and an optional Codex home within the scope mode chosen
by Unit 0.

Files:

- `scripts/traceweaver-classify-ce-replacement`
- `scripts/traceweaver-smoke-ce-replacement-classifier`

Follow existing patterns from:

- `scripts/traceweaver-audit-plugin-scope`
- `scripts/traceweaver-audit-ce-closure`
- `scripts/traceweaver-smoke-codex-discovery`

Test scenarios:

- fixture upstream source reports every loader-visible skill directory;
- fixture TraceWeaver plugin reports packaged and direct-callable skills
  separately;
- support references under `references/`, `scripts/`, and `assets/` are included
  in the support graph;
- default prompts, prompt/slash-command registrations, MCP/app connector
  declarations, install metadata, and external dependencies are discovered or
  proven absent;
- unknown prompt or command surfaces are detected and reported even when the
  current TraceWeaver plugin has none;
- the generator records source version, source commit, aggregate fingerprint,
  and file hashes without rewriting the controlled classification file.

### Unit 3: Classification Checker

Join generated inventory to the controlled classification file and fail closed
on unsafe states.

Files:

- `scripts/traceweaver-classify-ce-replacement`
- `plugins/traceweaver-core/references/ce-replacement-classification.yml`
- `scripts/traceweaver-smoke-ce-replacement-classifier`

Test scenarios:

- in `current_core_with_broad_surface_held` mode, every current/core packaged
  TraceWeaver surface has a classification row and every broad CE surface has a
  held skeleton row with blocker, dependency, consumer, and reopen-condition
  fields;
- in `full_surface_supported` mode, every one of the 37 upstream CE 3.4.1
  `ce-*` skill directories plus upstream `lfg` has exactly one classification
  row;
- in `product_exception` mode, only the exception-named broad surfaces may have
  full classifications and all other broad surfaces remain held;
- every selected TraceWeaver direct CE-derived skill has a valid class and
  current hash evidence;
- packaged `lfg` is accepted only as a TraceWeaver alias to `tw-auto`;
- raw upstream `lfg` is not accepted as runtime authority;
- `wrapped`, `aliased`, and `hidden` rows fail if support closure is incomplete;
- `held` and `out_of_scope` rows pass only when they include blocker,
  dependency, consumer, allowed-claim, held-claim, and reopen-condition fields;
- any behavior-bearing installed CE entrypoint that is not delegated, stopped,
  absent, or proven read-only causes a failed readiness summary.

### Unit 4: Evidence Output

Emit a reviewed evidence artifact that can be used by the matrix, Intent
Contract, and U9 planning without making runtime claims.

Files:

- `docs/validation/traceweaver-ce-replacement-classification.md`
- `.traceweaver/ce-replacement-classification.generated.json`

Test scenarios:

- generated Markdown contains counts for upstream CE skills, upstream `lfg`,
  packaged TraceWeaver skills, direct callable skills, selected agents, prompts,
  commands, default prompts, MCP/app connectors, install metadata, external
  dependencies, hidden surfaces, held rows, and unclassified rows;
- generated Markdown names the active classifier scope mode and the checkpoint
  evidence or held reason;
- generated Markdown lists blockers before any success summary;
- generated JSON contains stable row ids and machine-readable statuses;
- evidence explicitly states that runtime invocation, enforcement, publication,
  release-ready, and clean-replacement claims remain held;
- generated evidence names the current baseline hash and the source inventory
  hash used for the run.

### Unit 5: Host Removal Readiness Check

Use the classifier output to answer the practical question: "Can we remove CE
from this host and rely on TraceWeaver-installed skills without guessing?"

Files:

- `scripts/traceweaver-classify-ce-replacement`
- `scripts/traceweaver-smoke-ce-replacement-classifier`
- `docs/validation/traceweaver-ce-replacement-classification.md`

Test scenarios:

- current host conflicts are reported as blockers, not silently overwritten;
- unowned existing `ce-*` directories produce `held_existing_unowned_callable`;
- owned TraceWeaver legacy directories can be classified separately from unowned
  CE directories;
- readiness remains failed while any required `tw-*` host-visible skill is
  missing;
- readiness remains failed while any wrapped direct CE-derived skill has no
  wrapper runtime proof;
- readiness output recommends the next safe action without deleting or moving
  host files.

### Unit 6: Authority Records And Review Handoff

Wire the classifier evidence into the existing authority documents after the
script and fixtures pass.

Files:

- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- `docs/validation/traceweaver-u9-codex-runtime-discovery.md`
- `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- `docs/validation/traceweaver-ce-replacement-classification.md`

Test scenarios:

- matrix adds artifact, verification, trace, technical-debt, and exception rows
  without closing runtime claims;
- Intent Contract records the classifier evidence as static/readiness evidence
  only;
- U9 record uses the classifier as input for later runtime work, not as runtime
  proof;
- stale-reset language names classification drift, source hash drift, host
  surface drift, and wrapper behavior drift;
- `/ce-doc-review` on the classifier evidence and authority records returns no
  findings before any host CE removal step.

## Acceptance Criteria

- In `current_core_with_broad_surface_held` mode, the checker produces a
  mechanical list for current/core TraceWeaver and CE-method surfaces, plus held
  skeleton rows for broad upstream CE surfaces.
- In `full_surface_supported` or exception-authorized mode, the checker produces
  the full mechanical list for upstream CE 3.4.1 skill directories, upstream
  `lfg`, current TraceWeaver-packaged skills, selected CE agents, support files,
  prompts, commands, default prompts, manifests, MCP/app connector declarations,
  install metadata, external dependencies, and host-visible callable skills.
- Full 37-skill and whole-plugin classification runs only when the Unit 1A
  checkpoint returns `full_surface_supported` or records an accepted
  `product_exception`; otherwise broad surfaces are held with reopen triggers.
- Every behavior-bearing CE surface is classified as `wrapped`, `aliased`,
  `hidden`, `held`, or `out_of_scope`, or the checker fails with
  `unclassified`.
- Every current/core classification row includes authority evidence,
  side-effect category, rationale, disconfirming test, confidence, close
  condition, evidence status, and reviewer evidence id.
- Every current packaged held, package support held, broad held, and
  out-of-scope skeleton row includes blocker, dependency or surface check where
  applicable, allowed claims, held claims, evidence status, and reopen
  condition.
- Generated evidence is reproducible and machine-readable.
- Host removal readiness fails closed until no unowned CE callable conflicts,
  missing TraceWeaver callable skills, stale hashes, unclassified rows, or held
  wrapper-runtime blockers remain.
- The matrix and Intent Contract treat this as static/readiness evidence only.

## Non-Claims

This plan and its implementation must not claim:

- clean CE replacement;
- runtime-equivalent CE behavior;
- real `tw-auto`, `lfg`, `tw-grill`, or `ce-*` runtime invocation;
- enforcing authority gates;
- slash-command or prompt availability;
- autonomous commit, push, PR, release, or update behavior;
- release-ready, package-ready, upstream-ready, or R31-complete status.

## Risks And Mitigations

| Risk | Mitigation |
| --- | --- |
| Scanner trusts copied CE files as authority. | Require controlled classification rows and source pin/hash checks; generated discovery cannot approve rows. |
| Classification output becomes another stale manual table. | Include hash drift, source version drift, host-surface drift, and support-edge drift as failing checks. |
| Host behavior differs from plugin manifest shape. | Keep optional Codex-home scanning and report installed callable skills separately from packaged plugin skills. |
| Wrapper work starts before the inventory is complete. | Treat unclassified or low-confidence behavior-bearing rows as failed readiness. |
| Evidence wording overclaims replacement. | Generated Markdown must list held runtime and clean-replacement claims before any readiness summary. |

## Execution Notes For Implementation

- Prefer Ruby for the checker so it matches the existing audit scripts and does
  not add a new runtime dependency.
- Keep the controlled classification file hand-editable and reviewable.
- Keep generated JSON under `.traceweaver/` because it is tool output, while the
  reviewed human evidence belongs in `docs/validation/`.
- Do not mutate host skill directories from this checker. It reports readiness
  only.
- Do not update the installer to remove CE until this classifier has reviewed
  evidence and a later implementation plan authorizes removal behavior.
- Implement Unit 0 before Units 1 through 4. If Unit 0 cannot prove
  `full_surface_supported` or an accepted `product_exception`, keep the first
  implementation pass limited to current/core classification plus held
  broad-surface skeleton rows.

## Suggested Next Step

Use the accepted Units 1 through 4 static-readiness evidence as input to plan
Unit 5 host-removal readiness checking and Unit 6 authority-record handoff. Do
not remove host CE, claim runtime invocation, or claim clean replacement from
this record. Host CE removal, runtime invocation, clean replacement, enforcing
behavior, publication, release-ready, package-ready, upstream-ready, and R31
claims remain held.
