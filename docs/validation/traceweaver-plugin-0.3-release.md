# TraceWeaver Plugin 0.3 Release Validation Record

Status: `ONE_TIME_0_3_0_RELEASE_RATIFIED_BEHAVIORAL_REPAIR_VERIFIED_U7_PROSPECTIVE`

Date/session: 2026-07-22, integration branch
`codex/traceweaver-0.3-validation-first` (this record prepared on
`codex/tw03-0.3.0-docs`)

Record ID: `TWCORE-PLUGIN-0.3-RELEASE-VALIDATION-2026-07-22-001`

## Release Ratification

The owner approved the one-time PR, merge, tag, and GitHub release route for
TraceWeaver Core `0.3.0` under
`docs/plans/2026-07-23-traceweaver-0.3-repair-amendment-2-release-ratification.md`
(whole-file SHA-256
`0b67c4bfeaf23e849a261976011e0f537437170cb2ee370fff4d0d947d8dbf1f`; Sol
receipt `SOL-AMEND2-2026-07-23-9F1BEAEF`). The repaired behavior is verified,
but historical or general TraceWeaver overhead is not proven or guaranteed.
The historical EXC-TW-011 activation remains invalid and is not rewritten.
Amendment 3 (approved SHA-256
`2b079a94b94d5878201c5efd0d4badcfd3297682c64f30bdf19ad438465e7e7e`; Sol
receipt `SOL-AMEND3-2026-07-23-2B079A94`) restores the `tw-auto` planning-child
route to `tw-plan` while retaining the read-only master and held-claim bounds.

U7/product dogfood is prospective post-release measurement. This release does
not claim deployment, installation, runtime enforcement, universal-host
activation, dogfood completion, or an overhead guarantee.

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- authority source: `requirements.md`
- canonical baseline hash: `7166605b3bae8b56bba3d0d9e7e8095982826df719339a7b67d8a78b6cbb6b07`
  (matches `.traceweaver/intent-contract.yml` and
  `.traceweaver/intent-contract.current.yml`; `baseline_hash_consistent: true`)
- relevant requirements: REQ-TW-076, REQ-TW-077, REQ-TW-078, REQ-TW-079,
  REQ-TW-080, REQ-TW-081 (all `candidate_for_review`; none promoted to
  `approved` by this release)
- traceability source: `traceability-matrix.md` rows TRACE-TW-057..062,
  VER-TW-077..082, VAL-TW-019..024

## Scope Summary

TraceWeaver 0.3 "validation-first" is a static/advisory program that inserts
a mandatory V&V (verification and validation) definition phase between an
accepted plan and implementation for behavior-bearing work: reviewed RED
verification artifacts plus a reviewed `docs/validation/` validation
definition must exist and be handed to `tw-work` via a `tw-vv-capsule/1`
capsule before implementation may start mutating behavior-bearing files.
The program adds a new `tw-vv-define` skill and capsule validator, a hard
`tw-work` V&V preflight, `tw-plan`/`tw-auto` routing through
`tw-vv-define`, a short optional SessionStart advisory reminder, and a host x
hook capability matrix. The default PreToolUse TDD-gate registration, hook,
smoke, and fixtures have been removed during the 0.3 repair: no default
PreToolUse behavior is part of the current product surface.

This release does **not** claim: any hook firing in a live agent session on
any host; `traceweaver_mode: enforcing` or any blocking/refusal behavior;
promotion of REQ-TW-076..081 to `approved`; Codex plugin installation or
hook-trust registration; deployment, dogfood completion, package-ready, or
clean-replacement status. The `0.3.0` version bump and
`traceweaver-core--v0.3.0` tag occur only through the reviewed merge-to-main
workflow; this record does not itself claim that publication has completed.

## Requirements And Review Records

| Requirement | Summary | Status |
| --- | --- | --- |
| REQ-TW-076 | Mandatory V&V definition phase between accepted plan and implementation | `candidate_for_review`; requirements-quality passed, doc review clean |
| REQ-TW-077 | `tw-vv-define` skill owning the V&V definition phase and capsule handoff | `candidate_for_review`; requirements-quality passed, doc review clean |
| REQ-TW-078 | `tw-work` hard V&V preflight (refuse mutation without reviewed capsule + RED evidence) | `candidate_for_review`; requirements-quality passed, doc review clean |
| REQ-TW-079 | Optional advisory SessionStart reminder | `candidate_for_review`; static artifact only, no live-host claim |
| REQ-TW-080 | Advisory, non-blocking PreToolUse TDD-gate hook | `candidate_for_review`; not delivered in the repaired default surface |
| REQ-TW-081 | Host x hook capability matrix (`supported`/`unsupported-gap`/`unproven`) | `candidate_for_review`; requirements-quality passed, doc review clean |

Review records:

- `docs/validation/traceweaver-0.3-req-076-081-requirements-review.md` —
  requirements-quality review, all six 5/5 "Can approve"; one finding
  (REQ-FIND-001, REQ-TW-079 vs. REQ-TW-081 fixture-obligation conflict)
  raised and closed by a revision that conditions REQ-TW-079's fixture/
  schema/smoke obligations on a REQ-TW-081 `supported` cell.
- `docs/validation/traceweaver-0.3-req-076-081-doc-review.md` — scoped
  document review, clean: no ID collisions, no held-claim boundary
  overreach, all added Markdown tables well-formed, Intent Contract
  consistency confirmed. Two non-blocking informational notes recorded
  (`EXC-TW-007`/`EXC-TW-008` defined only in `traceability-matrix.md`, and no
  Intent Contract entry yet for REQ-TW-076..081 — both pre-existing/expected
  patterns, not defects).
- `docs/validation/traceweaver-0.3-owner-direction-authorization.md` —
  project-owner direction (2026-07-22) authorizing static/advisory
  implementation of the six requirements on the integration branch ahead of
  baseline-amendment promotion; this is the stakeholder authority record that
  resolves the authority-ordering findings raised during the adversarial
  review cycle (see below).
- `docs/validation/traceweaver-0.3-hook-host-capability-matrix.md` and
  `docs/validation/traceweaver-0.3-codex-hook-capability-discovery.md` —
  static host-capability discovery records (not runtime transcripts).

Neither review record promotes REQ-TW-076..081 past `candidate_for_review`,
approves runtime/enforcing claims, or authorizes publication.

## Implementation Units

Execution model: orchestrator coordinates; implementation performed by
subagents with cross-model adversarial build/review pairing
(`claude-sonnet-5` <-> `gpt-5.6-terra`), per the owner-direction record.

| Unit | Scope | Builder | Reviewer | Verdict |
| --- | --- | --- | --- | --- |
| Unit 1 | Formal requirements review + scoped doc review for REQ-TW-076..081 | claude-sonnet-5 | claude-sonnet-5 | Both clean (requirements-quality passed after REQ-FIND-001 closure; doc review clean) |
| Unit 2 | `tw-vv-define` skill + capsule validator + smokes (REQ-TW-076/077) | claude-sonnet-5 | gpt-5.6-terra | REJECT -> fix round -> micro-fix -> verified; P0 authority-ordering finding resolved by orchestrator owner-direction record at integration |
| Unit 3 | Original advisory hook work and host capability matrix (REQ-TW-079/080/081) | gpt-5.6-terra | claude-sonnet-5 | Historical static evidence only; U5 removes the default PreToolUse surface |
| Unit 4 | `tw-work` hard V&V preflight, `tw-plan`/`tw-auto` routing, superpowers rigor port (REQ-TW-078) | gpt-5.6-terra | claude-sonnet-5 | ACCEPT, no blocking findings |
| Integration fix 1 | PreToolUse hook made to consume the `tw-vv-capsule/1` schema (hook<->capsule contract mismatch) | orchestrator | — | Fixed; smokes extended and green |
| Integration fix 2 | Schema-v1 capsule target linkage (advisory-bypass closure) | orchestrator | — | Fixed; smokes extended and green |

All four unit builds and the two integration fix rounds are historical
static/advisory evidence only; none claims runtime hook firing, enforcement,
release readiness, or publication.

## Superseded PreToolUse History

The former PreToolUse findings and fixes below describe removed work only. They
must not be used to infer a registered hook, host capability, enforcement,
runtime firing, or release readiness in the repaired 0.3 surface.

## Historical Adversarial Findings

- **Capsule validator root-escape and identity hardening (Unit 2).** The
  adversarial ("terra") review issued a REJECT on the initial
  `tw-vv-define` capsule validator. The fix round added: a literal
  `schema_version` const check (`tw-vv-capsule/1`); `req_id`/`trace_id`/
  `ver_id`/`val_id` regex identity checks; `plan_ref` root-containment
  verification (rejecting paths that escape `--root`); a structured
  `reviews[]` shape (`gate`, `id`, `status`, `evidence_path`); and a new
  `--require-review-passed` validator mode. New fixtures cover
  `missing-red-evidence`, `unscoped-not-applicable`, `invalid-identity`,
  `path-escapes-root`, and `review-entry-malformed` cases.
- **Codex PreToolUse over-claim reclassified unproven (Unit 3).** An earlier
  characterization of a bundled Claude-plugin-marketplace-cache template
  (`planning-with-files/.codex/hooks.json`) as Codex PreToolUse evidence was
  retracted; it was never installed into an active `.codex/` project. The
  capability matrix and Codex discovery record now classify Codex x
  PreToolUse as `unproven` on partial binary-string evidence only
  (`PreToolUse*Wire` JSON-schema structs, `CLAUDE_PLUGIN_ROOT` strings), with
  no documented or active schema/configuration surface.
- **Naive RED substring scan replaced by capsule -> definition ->
  red_evidence path chain (Unit 3 B1/M1/S2/S4 fix round).** The PreToolUse
  hook's original RED-evidence check was a substring scan vulnerable to a
  `credentials.env`-style false match. It was replaced with a verified path
  chain: capsule -> linked V&V definition artifact -> `red_evidence` path,
  confirming the referenced RED evidence file actually exists and is
  non-empty before treating a work item as covered.
- **Hook<->capsule contract mismatch (integration fix 1).** The PreToolUse
  hook did not originally consume the `tw-vv-capsule/1` schema produced by
  `tw-vv-define`'s validator. Fixed by teaching the hook to read
  `schema_version`, `requirements[].red_evidence`, and `requirements[].
  reviews[]` directly from schema-v1 capsules, with new
  `vv-capsule-schema-present` (silent/positive) and
  `vv-capsule-schema-review-not-passed` (advisory-warning/negative) fixtures.
- **Schema-v1 capsule target linkage / advisory-bypass closure (integration
  fix 2).** A schema-v1 capsule with no `affected_paths` field could
  silently cover an edit to an unrelated file, bypassing the advisory
  warning for a target the capsule never actually named. Fixed by adding
  `affected_paths` to schema-v1 capsules and having the hook match the
  edited file against that list; a new `vv-capsule-schema-unrelated-target`
  fixture proves the hook still warns when the edited path is not covered by
  any linked capsule's `affected_paths`.
- **Authority-ordering findings (Unit 2 P0, Unit 3 B2).** Both adversarial
  reviewers separately flagged that implementation was proceeding against
  requirements that had passed requirements-quality and scoped doc review but
  had not been promoted past `candidate_for_review`. Resolved by the
  project-owner direction record
  (`docs/validation/traceweaver-0.3-owner-direction-authorization.md`),
  which is the stakeholder authority for static/advisory implementation
  while the requirements remain `candidate_for_review` pending baseline
  amendment.

## Verification Evidence

Historical local smoke run on the integration branch state (2026-07-22),
11/11 green. Its PreToolUse result is superseded by U5 removal and is not
current verification evidence; the ten remaining historical results were:

1. `scripts/traceweaver-smoke-vv-define` — `vv_define_smoke=pass`
2. `scripts/traceweaver-smoke-hook-session-start` — `hook_session_start_smoke=pass`
3. `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior` — `tw_skill_behavior_smoke=pass`
4. `scripts/traceweaver-smoke-code-traceability` — `code_traceability_smoke=pass`
5. `scripts/traceweaver-smoke-traceability-generated-views` — `traceability_generated_views_smoke=pass`
6. `scripts/traceweaver-smoke-verify` — `traceweaver_verify=pass hash_ok=1`
7. `scripts/traceweaver-smoke-controlled-publication` — `controlled_publication_route_smoke=pass`
8. `scripts/traceweaver-smoke-distilled-coverage` — `distilled_coverage=pass`
9. `TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery` — `codex_discovery_smoke=pass`
10. `scripts/traceweaver-smoke-antigravity-discovery` — `antigravity_discovery_smoke=pass`

Verify gate detail: `traceweaver_verify=pass hash_ok=1 closure=0/75
longest_line=8803 over2000=43`. Canonical baseline hash
`7166605b3bae8b56bba3d0d9e7e8095982826df719339a7b67d8a78b6cbb6b07` is
consistent across `requirements.md`, `.traceweaver/intent-contract.yml`, and
the regenerated bounded snapshot
`.traceweaver/intent-contract.current.yml` (`baseline_hash_consistent:
true`).

Generated views regenerated and drift-checked clean:
`docs/generated/traceability-dashboard.md`,
`docs/generated/traceability-data.json`,
`docs/generated/traceability-graph.mmd` (via
`scripts/traceweaver-smoke-traceability-generated-views`).

Anchor scan: `scripts/traceweaver-smoke-code-traceability` passed its full
positive/negative fixture set (complete anchor chain, missing-file-anchor,
missing-entrypoint-anchor, missing-test-verification, stale-requirement,
dead-TDD, generated-file exceptions, unsafe-changed-file-path, and both
audit-mode and implementation-mode blocking cases), plus a clean pass over
the real, unchanged 0.3 program files.

## Pre-Existing Main Failures (Out Of Scope)

Two smoke failures pre-date this release and are unrelated to the
validation-first program; both are tracked by a filed bead
(`TraceWeaver-ybhr`) rather than fixed as part of 0.3 scope:

- `scripts/traceweaver-smoke-no-publication` — fails on a missing
  `## Phase 5: TraceWeaver Alpha Stop Before Commit` marker in
  `plugins/traceweaver-core/skills/ce-compound-refresh/SKILL.md`.
- `scripts/traceweaver-smoke-systems-engineering-audit-closure` — fails on a
  missing `## Required Inputs` / `## Required Authority Inputs` section in
  `plugins/traceweaver-core/skills/tw-update/SKILL.md`.

Both were confirmed still failing against the current tree during this
release's verification pass and are recorded here as known, tracked,
out-of-scope debt rather than release blockers for the validation-first
program.

## Held Claims

- Runtime firing of the optional SessionStart reminder on any host;
  a live agent session observing it has not been demonstrated.
- Codex x PreToolUse capability and any default PreToolUse behavior; the
  removed hook supplies no current fixture, manifest, or coverage claim.
- `traceweaver_mode: enforcing` and any blocking/refusal behavior.
- `tw-work`'s V&V preflight "refuse" behavior: a static/advisory
  policy-and-fixture contract only, not a demonstrated live-host block.
- Codex plugin installation, hook-trust registration, and the explicit
  suppress-vs-adopt decision for potential `hooks/hooks.json` auto-adoption
  by the Codex plugin loader.
- Promotion of REQ-TW-076 through REQ-TW-081 from `candidate_for_review` to
  `approved`; no baseline amendment has occurred.
- Measured product dogfood U7 for VAL-TW-019 through VAL-TW-024; current
  evidence is fixture-level only. U7 is prospective post-release measurement,
  not a claim that dogfood has completed.
- Package-ready, release-ready, upstream-ready, clean
  CE replacement, slash-command support, unconstrained-host support, R31/
  Vestro validation, and autonomous publication, consistent with the
  existing project-wide held-claim baseline.
- Deployment, installation, universal-host activation, runtime enforcement,
  and any claim that TraceWeaver overhead is generally reduced, proven, or
  guaranteed.

## Suggested Next Step

After the one-time `0.3.0` publication completes, run measured product dogfood
U7 on one real work item and obtain a separate review of that evidence. Runtime,
enforcing, requirement-promotion, and per-host hook runtime-proof claims remain
held regardless of this record.
