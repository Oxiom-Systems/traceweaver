# TraceWeaver Core 11 U6a Runtime Scope Decision

Status: `PASSED_STATIC_SCOPE_DECISION_ONLY`

Date/session: 2026-04-30, `ce:work`, branch
`codex/traceweaver-u6-unblock-next`

U6a records the bounded static runtime-scope decision authorized by U5.5. It
does not create a runtime package, package manifest, installed-runtime proof,
release claim, upstream PR claim, dynamic no-forced discovery claim, or R31
completion claim.

## Decision Record

Record ID: `TWCORE-U6A-SCOPE-2026-04-30-001`

Decision state: `passed_static_scope_decision_only`

Allowed next gate: `U6b_package_install_runtime_evidence_for_exact_scope`

Required upstream evidence:

- `TWCORE-GATE-U5.5-2026-04-30` in
  `docs/validation/traceweaver-core-11-promotion-records.md`;
- `TWCORE-U55-TERM-2026-04-30-001` in
  `docs/validation/traceweaver-core-11-u5-u55-runtime-subset.md`;
- `U55-LIMIT-STATIC-DISCOVERY-001`;
- `TWCORE-U55-LOAD-2026-04-30-001`;
- `TWCORE-U55-FILE-DELTA-2026-04-30-001`;
- `TWCORE-U55-REQQUAL-2026-04-30-001`;
- `TWCORE-U55-LIFECYCLE-DISCOVERY-2026-04-30-001`.

Runtime authority commit:
`696548694dd40ce298d77e603db069934b58f645`.

Runtime subset: `light-v0.1-authority-traceability`.

Supported runtime/discovery mechanism: upstream Agent Skills Markdown skill
layout, static scope only.

## Selected Scope

U6a selects only the files recorded by `TWCORE-U55-LOAD-2026-04-30-001` for the
bounded static scope decision.

| Surface | Scope decision | Evidence |
| --- | --- | --- |
| `skills/requirements-reviewer/` | selected for U6b package/install/runtime evidence | U4 file-level records plus `TWCORE-U55-FILE-DELTA-2026-04-30-001` |
| `skills/systems-engineering-traceability/` | selected for U6b package/install/runtime evidence | U4 file-level records plus `TWCORE-U55-FILE-DELTA-2026-04-30-001` |
| `skills/using-agent-skills/SKILL.md` | selected clauses only, static routing context | `U55-LIMIT-STATIC-DISCOVERY-001` |
| `references/requirements-and-vv-guide.md` | selected static support reference | `TWCORE-U55-LOAD-2026-04-30-001` |
| `references/risk-gap-and-change-control-guide.md` | selected static support reference | `TWCORE-U55-LOAD-2026-04-30-001` |
| `references/systems-engineering-traceability-operating-model.md` | selected static support reference | `TWCORE-U55-LOAD-2026-04-30-001` |
| `references/traceability-matrix-template.md` | selected static support reference | `TWCORE-U55-LOAD-2026-04-30-001` |

The selected `requirements-reviewer` files include the referenced
`agents/openai.yaml`, requirement language/type references, requirements quality
references, finding schema, source-basis, verification/validation guide, and
example file recorded in `TWCORE-U55-LOAD-2026-04-30-001`.

## U4 Skill-Folder Authority

U6a uses U4 only as public skill-folder authority for the selected skills. U5.5
delta records remain the authority for Agent Skills candidate differences.

| Selected skill | Current U4 file-level public skill-folder records |
| --- | --- |
| `requirements-reviewer` | `TWCORE-PROMO-U4-REQUIREMENTS-REVIEWER-SKILL-001`; `TWCORE-PROMO-U4-REQUIREMENTS-REVIEWER-SOURCE-BASIS-001`; `TWCORE-PROMO-U4-REQUIREMENTS-REVIEWER-OPERATING-MODEL-001`; `TWCORE-PROMO-U4-REQUIREMENTS-REVIEWER-CHECKLIST-001`; `TWCORE-PROMO-U4-REQUIREMENTS-REVIEWER-OUTPUT-SCHEMA-001`; `TWCORE-PROMO-U4-REQUIREMENTS-REVIEWER-EXAMPLES-001` |
| `systems-engineering-traceability` | `TWCORE-PROMO-U4-SYSTEMS-TRACEABILITY-SKILL-001`; `TWCORE-PROMO-U4-SYSTEMS-TRACEABILITY-SOURCE-BASIS-001`; `TWCORE-PROMO-U4-SYSTEMS-TRACEABILITY-OPERATING-MODEL-001`; `TWCORE-PROMO-U4-SYSTEMS-TRACEABILITY-CHECKLIST-001`; `TWCORE-PROMO-U4-SYSTEMS-TRACEABILITY-OUTPUT-SCHEMA-001`; `TWCORE-PROMO-U4-SYSTEMS-TRACEABILITY-EXAMPLES-001` |

U6a does not treat U2 validation records, U3 summary records, exception records,
or U4-only non-selected skills as runtime packaging authorization.

## Excluded Scope

Excluded by default:

- all non-selected Core 11 skills;
- `idea-refine` command wiring;
- non-selected workflow skills named by `skills/using-agent-skills/SKILL.md`;
- Compound Engineering adapter hooks;
- persona-awareness guidance;
- package manifests and generated packages;
- release notes, upstream PR surfaces, and public availability claims.

Any later inclusion of an excluded surface requires a new scope decision with
file-level manifest evidence, delta/impact evidence where needed, hygiene
evidence, reviewer, and stale-reset rule.

## Held Claims

The following remain held after U6a:

- dynamic no-forced runtime discovery;
- installed runtime behavior;
- package-ready;
- release-ready;
- upstream-ready;
- all-Core runtime scope;
- source-name hygiene accepted for release surfaces;
- R31 complete.

## U6b Entry Conditions

U6b may start only for the exact selected scope above. U6b must record:

- package manifest or equivalent packaging inventory;
- install/setup evidence;
- runtime execution evidence;
- observed loading of selected skills and selected references;
- routing and failure behavior under runtime execution;
- dynamic no-forced discovery transcript or an explicit U6b/U9 limitation;
- hygiene scan for generated package/install/runtime artifacts;
- stale-reset rule tied to the same candidate commit and selected file hashes.

## Stale Reset Rule

This U6a decision resets to `held` if the candidate commit changes, any selected
file hash changes, U5.5 terminal state changes away from
`REDUCED_FOR_U6A_STATIC_SCOPE_ONLY`, U6b uses files outside this selected scope,
non-selected Core skills are included by default, static discovery evidence is
used as dynamic runtime proof, source-name hygiene is accepted without U7, or
R31 is presented as complete without real-scenario evidence.
