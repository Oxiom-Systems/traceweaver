# TraceWeaver Dogfood Audit Evidence

Status: `dogfood_audit_classifier_code_review_passed_authority_doc_review_passed_runtime_claims_held`

Date/session: 2026-05-05, `ce:plan` plus `ce:work`

Plan: `docs/plans/2026-05-05-001-feat-traceweaver-dogfood-audit-plan.md`

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- baseline hash:
  `6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`
- requirements authority: `requirements.md`
- matrix authority: `traceability-matrix.md`
- Intent Contract: `.traceweaver/intent-contract.yml`

## Purpose

This record captures a dogfood audit of TraceWeaver on its own repository before
continuing deeper U9/U10 runtime proof work. It records what works, what is
fixture/static/install-proven only, what remains held, and which requirement
gaps should be considered before claiming that TraceWeaver reliably maintains
requirements and intent during development.

## Allowed Use

This record may be cited as reviewed dogfood audit evidence for manual/advisory
TraceWeaver use on this repository. It does not accept the held runtime,
publication, release, or clean-replacement claims listed below.

This record does not accept:

- active host-registry discovery;
- real `tw-*` runtime invocation;
- clean CE replacement;
- enforcing authority gates;
- autonomous commit, push, PR, release, or publication;
- release-ready, package-ready, upstream-ready, or R31 validation status.

## Private Raw Logs

Raw command logs are retained outside the public repository under the private
audit run label `2026-05-05-tw-dogfood`. This public record summarizes the
results and intentionally does not copy private absolute paths, credentials,
session transcripts, or protected standards text.

## Executable Smoke Results

| Smoke | Result | Accepted scope | Held scope |
| --- | --- | --- | --- |
| `scripts/traceweaver-smoke-codex-discovery` | passed | Isolated install/direct callable identity, marker files, packaged copy layout, 27 packaged skills, 27 callable skills, 49 selected agent TOML files, 18 reference files, zero prompts, prompt-input visible required skills, owned legacy cleanup, unowned conflict block | Active host session discovery and runtime invocation |
| `scripts/traceweaver-smoke-u9-fixtures` | passed | Fixture authority-present, missing-authority, stale-authority, weak-requirement, trace-gap, missing skill resolution, and temp-copy trace-write classifications | Real project authority-file mutation and runtime invocation |
| `scripts/traceweaver-smoke-no-publication` | passed | PR helper stop-before-external-mutation, static publication stop markers, `lfg` delegation, deterministic reviewer-backpressure events, degraded-review held condition | Real reviewer subagent lifecycle and broader publication routes |
| `scripts/traceweaver-smoke-codex-host-registry` | held observation | Current host filesystem observation: `lfg`, `ce-plan`, `ce-work`, `ce-code-review`, and `ce-doc-review` present but unmarked/stale; TraceWeaver-native `tw-*` entries missing | Active host registry reload and runtime invocation |
| `scripts/traceweaver-smoke-codex-separate-home-runtime` | held observation | Auth-safe isolated prompt-input visibility, no auth copy used or retained, required skills visible, isolated `codex exec` exits auth-required | Real runtime invocation without unsafe auth copy |
| `scripts/traceweaver-smoke-ce-replacement-classifier` | passed after locale fix and clean code review | CE replacement classifier static readiness and generated metrics: 27 packaged TraceWeaver skills, 18 current core rows, 9 current packaged held rows, 16 broad held rows, 3 out-of-scope rows, zero unclassified rows | Runtime-equivalent CE replacement |

## Dogfood-Discovered Bug

During the first user-run dogfood pass, `scripts/traceweaver-smoke-ce-replacement-classifier`
failed because `scripts/traceweaver-classify-ce-replacement` read UTF-8 skill
text using the caller's default Ruby external encoding. Under a US-ASCII process
encoding, regex scanning raised `ArgumentError: invalid byte sequence in
US-ASCII`.

Patch recorded in this worktree:

- `scripts/traceweaver-classify-ce-replacement` now declares UTF-8 source
  encoding and reads text using `mode: "r:BOM|UTF-8"`.
- `scripts/traceweaver-smoke-ce-replacement-classifier` now runs the main
  positive path under `LC_ALL=C LANG=C` to cover the locale regression.

Classifier behavior code review passed with no findings as
`CE-CODE-REVIEW-2026-05-05-DOGFOOD-CLASSIFIER-CLEAN-001`.
Coverage was main-thread CE code review only, with no reviewer subagents.
Authority doc review of this dogfood record, plan, matrix, Intent Contract, and
alpha evidence passed with no findings as
`CE-DOC-REVIEW-2026-05-05-DOGFOOD-AUTHORITY-CLEAN-001`. Coverage was
main-thread CE doc review only, with no reviewer subagents.

## Metrics Observed

| Metric | Value | Source |
| --- | --- | --- |
| Packaged TraceWeaver skill directories | 27 | Discovery smoke and CE replacement classifier |
| Direct callable skill directories in isolated install | 27 | Discovery smoke |
| Selected agent TOML files | 49 | Discovery smoke |
| Installed reference files | 18 | Discovery smoke |
| Installed prompts / prompt files | 0 / 0 | Discovery smoke |
| Current core classifier rows | 18 | CE replacement classifier |
| Current packaged held rows | 9 | CE replacement classifier |
| Broad held rows | 16 | CE replacement classifier |
| Out-of-scope rows | 3 | CE replacement classifier |
| Unclassified rows | 0 | CE replacement classifier |

## Mermaid / Diagram Observation

`traceability-matrix.md` includes a Mermaid view as a derived visual map. The
dogfood audit did not prove automatic Mermaid generation. The authoritative
trace remains the Markdown matrix; if the table and Mermaid disagree, the table
wins and the diagram must be updated.

## Manual Skill Output Audit

| Skill | Output shape observed in packaged instructions | Current proof level | Dogfood finding |
| --- | --- | --- | --- |
| `tw-grill` | Selected idea, authority mode, gap/delta classification, source-evidence output, suggested next steps | Static/install accepted; runtime held | It supports intent deepening as source evidence only. It does not create implementation authority. |
| `tw-requirements-review` | Requirements reviewed, authority-ready/blocked requirements, revisions, human decisions, V&V gaps, traceability impact | Static/install accepted; fixture classification smoke covers approved/weak requirements | It can guide requirements quality, but real skill invocation remains held. |
| `tw-authority-gate` | Authority source/status, traceability status, missing evidence, allowed scope, blocked claims, next action | Static/install accepted; fixture classification smoke covers authority-present/missing/stale states | It blocks orphan work in guidance/fixture scope; runtime invocation remains held. |
| `tw-traceability-check` | Traceability status, authority chain, implementation links, verification/validation status, gaps, dark-code candidates, allowed/held claims | Static/install accepted; fixture classification smoke covers complete trace and trace-gap states | It detects dark-behavior candidates in fixture scope; project-level runtime matrix writes remain held. |
| `tw-auto` | Controlled CE-style loop with authority loading, skill resolution, matrix/trace updates, review gates, and stop-before-publication controls | Static/install accepted; fixture/boundary smokes cover selected controls; runtime held | Instructions name the right loop, but real autonomous execution and project-file writes remain held. |
| `lfg` | Compatibility alias that resolves and delegates to `tw-auto` and does not run raw CE autopilot | Static/install and deterministic boundary smoke accepted | Alias boundary is proven by static/installed checks, not full runtime invocation. |

## Requirements / Product Gaps

The dogfood audit found these gaps or clarifications to consider:

| Gap | Current authority state | Proposed route |
| --- | --- | --- |
| Code-level requirement comments or annotations are not currently required as the primary TraceWeaver trace mechanism. | Existing requirements emphasize matrix rows, trace records, and evidence records. | Use `tw-grill` and `tw-requirements-review` to decide whether a new requirement should mandate code annotations for scripts/functions/classes, and when those annotations are useful versus noisy. |
| Metrics are produced by smoke logs and classifier JSON/Markdown, but there is no unified dogfood metrics dashboard. | Existing smokes emit counts and pass/held markers. | Add a proposed requirement or validation record if a consolidated metrics report is required. |
| Mermaid diagrams are present as derived views, but automatic Mermaid generation is not proven. | Existing requirements treat Mermaid as derived/non-authoritative. | Keep matrix authoritative; add a future executable generation requirement only if needed. |
| Project-level trace/gap/change/exception write behavior remains held. | Fixture-only temp-copy write proof exists. | Require a reviewed runtime scenario before claiming TraceWeaver maintains project records automatically. |
| Active host `tw-*` skill availability remains held in this session. | Host filesystem probe reports missing/untrusted direct callable TW-native skills; separate-home prompt-input sees them, but auth-safe exec is held. | Reconcile host install or supported auth-safe fresh-session path before real runtime claims. |

## Current Conclusion

TraceWeaver is usable today as a manual/advisory discipline on this repository:
load `requirements.md`, `.traceweaver/intent-contract.yml`, and
`traceability-matrix.md`; route changes through TraceWeaver gates; update matrix
and evidence records; and use CE review/work commands under TraceWeaver
constraints.

TraceWeaver is not yet proven as an autonomous runtime plugin that reliably
invokes `tw-*` skills and writes project trace records without human
orchestration. That remains held pending reviewed runtime proof.

## Suggested Next Step

Use this reviewed dogfood audit as manual/advisory input for the next scoped
TraceWeaver gap decision. Keep real `tw-*` runtime invocation, project-level
runtime trace writes, clean CE replacement, enforcing behavior, autonomous
publication, release-ready, package-ready, upstream-ready, and R31 claims held
until their own reviewed evidence gates pass.
