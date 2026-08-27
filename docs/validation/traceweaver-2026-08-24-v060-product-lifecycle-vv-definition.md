---
id: VER-TW-094-DEFINITION-2026-08-24-001
status: post_oracle_ci_convergence_single_attempt_consumed_failed_owner_decision_required_publication_held
date: 2026-08-24
owner: Oxiom Systems
baseline_hash_sha256: 64efb7325451f031bc15935bef264e95ae185a717854d4a7d5305067eca62c5e
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-vv-definition; req=REQ-TW-130,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VER-TW-094 Definition — Core 0.6.0 Product-Lifecycle Assurance

## Readiness disposition

The accepted L3 plan, pre-implementation V&V definition, RED evidence, and one
authorized repair batch are complete. The exact post-repair candidate is
functionally frozen at
`sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51`,
but its representative validation result was explicitly rejected and then
classified as a Real-product depth failure. This definition therefore routes
to approved `CHG-TW-2026-08-24-001` and `EXC-TW-018`. They authorize one
bounded validation-method correction under profile revision 2; the targeted
Terra continuation, oracle refresh, publication, and release remain held.
The correction-specific smoke recorded the expected pre-change failure
`missing_source_census` and then passed unchanged after the bounded `/tw-work`
mutation. Final exact product trials were then run against functional scope
`sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875`.
Those trials pass their machine criteria with source-derived censuses of
626 Vestro records / 2,657 relationships and 719 Air Router records / 5,584
relationships. Hannes Zietsman explicitly accepted both non-compensable cells
and the exact owner disposition with limitations acknowledged, so
`VAL-TW-042` passed for that frozen functional candidate. The retained reviewer
continuation then returned `P1-005-continuation` and
`P1-006-continuation`. Hannes Zietsman approved
`CHG-TW-2026-08-24-002` / `EXC-TW-019` for one terminal release-control
repair, fresh exact-product rebinding, and one retained-finding-only
continuation by the same reviewer. The accepted `8b671913...875` product result
becomes historical when behavior changes; publication remains separately
gated.
The final terminal-repair candidate was frozen at 74 functional paths and
`sha256:8b417a73193da9df15b303d0766391330cf42cd4caf48e0be8faf2cb9692b957`.
Both fresh product cells and `VAL-TW-042` are explicitly accepted with raw
digests `7968bee1...e260` and `d6e3b0f0...496c`. The retained continuation
closed `P1-006-continuation` and left `P1-005-continuation` open because two
post-oracle receipts circularly occur in the pre-oracle source set. Hannes
Zietsman approved `CHG-TW-2026-08-26-003` / `EXC-TW-020` for one revision-4
acyclic correction of that fingerprint only, fresh exact-product rebinding,
and one verification-only continuation by the same reviewer. The
`8b417a...b957` product result became historical because controlled functional
authority changed. The revision-4 correction, fresh product acceptance,
same-reviewer verification closure, and canonical oracle write subsequently
completed. The final accepted pre-revision-5 candidate has 76 functional paths
at `sha256:22d5d66acfa3b0c5abbe27ef7d478106768ee386f45c9332a1d25f72627d8719`.
Its Vestro and Air Router raw digests are `sha256:1cc5233c...219f` and
`sha256:8e444328...ee36`, with the recorded limitations explicitly accepted.
The canonical oracle then exposed the distinct post-oracle CI convergence RED
recorded in `RED-TW-2026-08-26-V060-POST-ORACLE-CI-CONVERGENCE-001`. Hannes
Zietsman approved `CHG-TW-2026-08-26-004` / `EXC-TW-021` for one revision-5
eleven-file correction, one focused verification attempt, fresh exact-product
rebinding, and one verification-only continuation by the same reviewer limited
to that delta. Behavior work remains held until the revision-5 hashes, clean
document review, passed bounded V&V capsule preflight, and a fresh authority
`Proceed` exist.

## Source and configuration

| Field | Value |
| --- | --- |
| Accepted plan | `docs/plans/2026-08-24-traceweaver-0.6.0-product-lifecycle-assurance-plan.md` |
| Authority review | `TW-DOC-REVIEW-2026-08-24-V060-PRODUCT-LIFECYCLE-AUTHORITY-001` |
| Formal acceptance | `TW-FORMAL-AUTHORITY-ACCEPTANCE-2026-08-24-V060-PRODUCT-LIFECYCLE-001` |
| Baseline | `REQ-BASELINE-2026-04-30-001` at canonical hash `64efb7325451f031bc15935bef264e95ae185a717854d4a7d5305067eca62c5e` |
| Profile | L3 revision 5, canonical hash `sha256:52e2732d13df824411d3bdb7f9553d9e6b9d88af66b39a50c4bce187917b14e7` |
| Work item | `TW-PLAN-2026-08-24-V060-PRODUCT-LIFECYCLE-001` |
| Verification chain | ATP-TW-051 / RESULT-TW-051 / VER-TW-094 |
| Validation chain | VAL-TW-042 |
| RED harness | `scripts/traceweaver-smoke-v060-product-lifecycle` |
| RED result | `docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-red-evidence.md` |
| Real-product-depth RED | `docs/validation/traceweaver-2026-08-24-v060-real-product-depth-red-evidence.md` (`missing_source_census`, expected failure) |
| Terminal release-truth RED | `docs/validation/traceweaver-2026-08-26-v060-terminal-release-truth-red-evidence.md` (required before behavior work) |
| Acyclic-oracle RED | `docs/validation/traceweaver-2026-08-26-v060-acyclic-oracle-red-evidence.md` (required before behavior work) |
| Post-oracle CI convergence RED | `docs/validation/traceweaver-2026-08-26-v060-post-oracle-ci-convergence-red-evidence.md` (passed expected failure plus disposable exact-scope probe) |
| Revision-5 focused verification | `scripts/traceweaver-smoke-model-context-routing` once; expected `model_context_routing_smoke=pass cases=72` |
| Validation definition | `docs/validation/traceweaver-2026-08-24-v060-product-lifecycle-validation-plan.md` |

## Verification cross-reference

Every execution record must name the tested ref, environment, command,
expected result, actual result, outcome, and evidence path. Local fixtures
prove deterministic package behavior only; browser checks prove rendered
accessibility/navigation only; representative product validation remains
separate.

| Requirement | Primary method | Procedure / objective pass criterion | Planned result evidence |
| --- | --- | --- | --- |
| REQ-TW-130 | test | Registry canonicalization accepts one ordered supported source set and rejects missing, duplicate, stale, ambiguous, recursive, mixed-generation, mutable, and conflicting ownership inputs. | Slice 1 functional log and registry fixtures. |
| REQ-TW-131 | test | Static HTML schema/link/accessibility/plain-text/print suite rejects script, events, active/remote resources, rewriting, forms, frames, refresh, hidden authority, and fetch-capable CSS. | Slice 4 security/accessibility log. |
| REQ-TW-132 | test | Pinned parser and source-span adapter reproduce exact canonical digests twice and reject encoding, path, vocabulary, byte-span, manifest-order, mixed-generation, and malformed-input negatives. | Slice 1/4 integrity log and parser pin. |
| REQ-TW-133 | test | Projection is byte-identical on double build, preserves IDs/typed links/field ownership, and rejects stale input, hand edits, fallback authority, and parity drift. | Slice 4 projection/parity log. |
| REQ-TW-134 | demonstration | Frozen consumer census plus atomic cutover rehearsal switches one matched generation; every injected partial failure restores the complete prior generation with no dual authority. | Slice 4 rehearsal record and rollback hashes. |
| REQ-TW-135 | test | Receipt canonical identity separates observation, verification, review, PR, merge, deployment, runtime, release, validation, and acceptance; false-promotion and stale-evidence negatives fail. | Slice 2 receipt/truth-stage log. |
| REQ-TW-136 | demonstration | Each preregistered Vestro/Air Router scenario independently reaches ≥95% recovery, zero false promotion, and HTML median no worse than current route; Air Router includes a non-code artifact. | VAL-TW-042 raw logs and owner disposition. |
| REQ-TW-137 | test | JSON-schema positive/negative corpus covers every lifecycle class, typed relationship, provenance/owner/version/applicability/freshness/acceptance field, canonical serialization, and human acceptance boundary. | Slice 1 schema log. |
| REQ-TW-138 | inspection | Release evidence states Markdown/YAML controlling unless the complete cutover receipt passes; derived HTML remains explicitly derived and never fallback authority. | Slice 4 semantic-HTML release-gate record. |
| REQ-TW-139 | test | Fixed 2,000-record corpus; 10 warmups and 30 measured samples; nearest-rank p95 build ≤1.5s, warm status/search/impact ≤250ms, and registered repository-wide searches reduced by ≥50% from frozen baseline. | Slice 3 raw benchmark JSON and summary. |
| REQ-TW-140 | test | Exact requirement/artifact/environment/baseline mutations invalidate only applicable evidence and expose deterministic downstream re-verification paths. | Slice 2/3 stale-evidence and impact logs. |
| REQ-TW-141 | test | Transition corpus rejects every substitution of imported/generated/graph/fixture/self-assessment/configured-model signals for approval, independent review, validation, acceptance, attestation, or publication truth. | Slice 2 truth-stage negative log. |
| REQ-TW-142 | test | Two identical authority-closure builds include every direct/transitive local source and immutable external receipt; omitted, orphaned, stale, unsafe, unresolvable, and hash/path mismatches fail. | Slice 3 closure/freshness log. |
| REQ-TW-143 | inspection | Worktree topology, base SHA, exact released-predecessor receipt, changed-path scope, per-slice RED/GREEN, rollback state, single review ledger, and root-worktree status are complete and reproducible. | Scope/rollback verification record. |
| REQ-TW-144 | demonstration | Named representative Vestro and Air Router raters execute immutable same-candidate scenarios; neither product can compensate for the other; Air Router non-code evidence is bound. | Representative validation result and owner disposition. |
| REQ-TW-145 | test | Release gate refuses missing/stale V&V, graph, validation, manifest/CHANGELOG, protected-main CI, reinstall, merge-SHA, tag, release, and metadata states; matching re-entry is idempotent and mismatched tag/release is never rewritten. | Exact-main release-readiness/runtime receipt and conflict logs. |

## Execution record template

```yaml
execution_id: RESULT-TW-051/<slice-and-case>
requirement_id: REQ-TW-<130-145>
method: test|inspection|analysis|demonstration
setup_and_environment: <exact host/runtime/fixture and immutable inputs>
procedure_or_command: <rerunnable command or named manual procedure>
tested_ref: <commit/tag/package/baseline digest>
expected_result: <preregistered objective criterion>
actual_result: <observed value or artifact identity>
outcome: pass|fail|partial|blocked|deferred
evidence_path: <repository-relative record or raw artifact>
deviations: []
```

Non-pass outcomes require a controlled gap/change/exception handoff and cannot
be silently omitted or averaged away.

## L3 high-risk controls

- Rollback: pre-merge recovery stays on the protected branch/stashes; semantic
  cutover restores the full prior matched Markdown/YAML generation; release
  publication refuses mismatched existing state and never rewrites 0.5.0.
- Owner decision: `TW-OWNER-DECISION-2026-08-24-V060-PRODUCT-LIFECYCLE-001`
  controls scope; any material expansion needs a new owner decision.
- Root safety: no command may switch, reset, rebase, clean, stage, or modify
  the mixed `codex/lean-convergence` root worktree.
- Model/review: Sol retains delivery; the same explicit Terra xhigh identity is
  retained. EXC-TW-018 through EXC-TW-021 are consumed. The EXC-TW-021 focused
  attempt failed at `MC110_EXACT_ROUTE` because seven fixtures retained a
  pre-promotion physical requirements digest. The existing reviewer was not
  continued; unattested served-model claims stay held.

## Review holds

- The initial integrated code/document review, repair, EXC-TW-018 correction,
  and complete EXC-TW-019 cycle are consumed.
- P1-005 and P1-006 are closed clean; the revision-4 correction, fresh product
  acceptance, same-reviewer verification, and canonical oracle write are
  complete. The accepted `22d5d66a...8719` result is historical after
  revision-5 authority promotion.
- The EXC-TW-021 eleven-file correction attempt is consumed and non-clean.
  Fresh exact-product disposition and reviewer continuation are blocked. Any
  seven-fixture requirements-digest rebinding or second smoke needs a new
  owner-approved change/exception and fresh authority gate.
- `--require-review-passed` capsule mode, reviewer-owned oracle refresh, graph
  freshness, PR preparation, and release remain held.

## Next gate

Stop before any rerun, product rebinding, or reviewer use. If the owner elects
a final sequencing correction, promote and freeze its controlled authority
first, bind only the seven named fixtures to the resulting physical
`requirements.md` digest, statically verify every referenced locator digest,
and obtain a fresh authority `Proceed` for at most one new full 72-case
attempt. Keep graph, reinstall, PR, publication, and release held.
