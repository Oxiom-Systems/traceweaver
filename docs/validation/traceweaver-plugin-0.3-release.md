# TraceWeaver Plugin 0.3 Release Validation Record

Status: `VALIDATION_FIRST_PROGRAM_STATIC_ADVISORY_IMPLEMENTED_REVIEWS_CLEAN_RUNTIME_ENFORCING_PUBLICATION_HELD`

Date/session: 2026-07-22, integration branch
`codex/traceweaver-0.3-validation-first` (this record prepared on
`codex/tw03-0.3.0-docs`)

Record ID: `TWCORE-PLUGIN-0.3-RELEASE-VALIDATION-2026-07-22-001`

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
`tw-vv-define`, and two advisory-only plugin hooks (SessionStart discipline
injection, PreToolUse TDD-gate warning) whose mechanism is adapted from
`obra/superpowers` (pinned `d884ae04edebef577e82ff7c4e143debd0bbec99`, no
rebase), plus a host x hook capability matrix.

This release does **not** claim: any hook firing in a live agent session on
any host; `traceweaver_mode: enforcing` or any blocking/refusal behavior;
promotion of REQ-TW-076..081 to `approved`; Codex plugin installation or
hook-trust registration; or publication, release, package-ready, or
clean-replacement status. Version manifests remain at `0.2.6`; the version
bump and `traceweaver-core--v0.3.0` tag occur only at merge-to-main per the
branching/versioning policy. This record is release preparation, not a
publication record.

## Requirements And Review Records

| Requirement | Summary | Status |
| --- | --- | --- |
| REQ-TW-076 | Mandatory V&V definition phase between accepted plan and implementation | `candidate_for_review`; requirements-quality passed, doc review clean |
| REQ-TW-077 | `tw-vv-define` skill owning the V&V definition phase and capsule handoff | `candidate_for_review`; requirements-quality passed, doc review clean |
| REQ-TW-078 | `tw-work` hard V&V preflight (refuse mutation without reviewed capsule + RED evidence) | `candidate_for_review`; requirements-quality passed, doc review clean |
| REQ-TW-079 | Advisory SessionStart discipline-injection hook, adapted from superpowers | `candidate_for_review`; requirements-quality passed after REQ-FIND-001 closure (capability-conditioned revision), doc review clean |
| REQ-TW-080 | Advisory, non-blocking PreToolUse TDD-gate hook | `candidate_for_review`; requirements-quality passed, doc review clean |
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
| Unit 1 | Formal requirements review + scoped doc review for REQ-TW-076..081 | claude-sonnet-5 | gpt-5.6-terra | Both clean (requirements-quality passed after REQ-FIND-001 closure; doc review clean) |
| Unit 2 | `tw-vv-define` skill + capsule validator + smokes (REQ-TW-076/077) | claude-sonnet-5 | gpt-5.6-terra | REJECT -> fix round -> micro-fix -> verified; P0 authority-ordering finding resolved by orchestrator owner-direction record at integration |
| Unit 3 | Advisory SessionStart + PreToolUse hooks, host capability matrix (REQ-TW-079/080/081) | gpt-5.6-terra | claude-sonnet-5 | B1/M1/S2/S4 findings fixed and re-reviewed ACCEPT; B2 authority-ordering finding resolved by orchestrator owner-direction record at integration |
| Unit 4 | `tw-work` hard V&V preflight, `tw-plan`/`tw-auto` routing, superpowers rigor port (REQ-TW-078) | claude-sonnet-5 | gpt-5.6-terra | ACCEPT, no blocking findings |
| Integration fix 1 | PreToolUse hook made to consume the `tw-vv-capsule/1` schema (hook<->capsule contract mismatch) | orchestrator | — | Fixed; smokes extended and green |
| Integration fix 2 | Schema-v1 capsule target linkage (advisory-bypass closure) | orchestrator | — | Fixed; smokes extended and green |

All four unit builds and the two integration fix rounds are static/advisory
only; none claims runtime hook firing, enforcement, or publication.

## Adversarial Findings Caught And Fixed

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

Local smoke run on the integration branch state (2026-07-22), 11/11 green:

1. `scripts/traceweaver-smoke-vv-define` — `vv_define_smoke=pass`
2. `scripts/traceweaver-smoke-hook-session-start` — `hook_session_start_smoke=pass`
3. `scripts/traceweaver-smoke-hook-pretooluse-tdd-gate` — `pretooluse_tdd_gate_smoke=pass`
4. `TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior` — `tw_skill_behavior_smoke=pass`
5. `scripts/traceweaver-smoke-code-traceability` — `code_traceability_smoke=pass`
6. `scripts/traceweaver-smoke-traceability-generated-views` — `traceability_generated_views_smoke=pass`
7. `scripts/traceweaver-smoke-verify` — `traceweaver_verify=pass hash_ok=1`
8. `scripts/traceweaver-smoke-controlled-publication` — `controlled_publication_route_smoke=pass`
9. `scripts/traceweaver-smoke-distilled-coverage` — `distilled_coverage=pass`
10. `TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery` — `codex_discovery_smoke=pass`
11. `scripts/traceweaver-smoke-antigravity-discovery` — `antigravity_discovery_smoke=pass`

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

- Runtime firing of the SessionStart hook or the PreToolUse hook, on any
  host, for any `supported` cell (Claude Code, Cursor, Codex SessionStart);
  a live agent session observing either hook has not been demonstrated.
- Codex x PreToolUse capability: `unproven`, not `supported` or
  `unsupported-gap`; no fixture, manifest, or coverage claim is made for
  this cell.
- `traceweaver_mode: enforcing` and any blocking/refusal behavior for the
  PreToolUse gate; the hook always exits 0.
- `tw-work`'s V&V preflight "refuse" behavior: a static/advisory
  policy-and-fixture contract only, not a demonstrated live-host block.
- Codex plugin installation, hook-trust registration, and the explicit
  suppress-vs-adopt decision for potential `hooks/hooks.json` auto-adoption
  by the Codex plugin loader.
- Promotion of REQ-TW-076 through REQ-TW-081 from `candidate_for_review` to
  `approved`; no baseline amendment has occurred.
- Representative/real-use validation for VAL-TW-019 through VAL-TW-024;
  current evidence is fixture-level only, pending a first consuming
  real work item (dogfood).
- Release, publication, package-ready, release-ready, upstream-ready, clean
  CE replacement, slash-command support, unconstrained-host support, R31/
  Vestro validation, and autonomous publication, consistent with the
  existing project-wide held-claim baseline.
- The version bump to `0.3.0` and the `traceweaver-core--v0.3.0` tag; both
  occur only at merge-to-main per the branching/versioning policy. Version
  manifests remain at `0.2.6` as of this record.

## Suggested Next Step

Route this reviewed unit (CHANGELOG entry, this release record, and the
0.3.x roadmap at `docs/plans/2026-07-22-traceweaver-roadmap.md`) through a
controlled PR from the integration branch into `dev`/`main` per the
branching policy; bump the version to `0.3.0` and cut the
`traceweaver-core--v0.3.0` tag only at that merge, then record post-release
publication evidence following the `traceweaver-plugin-0.2-release.md`
pattern. Runtime, enforcing, requirement-promotion, and per-host hook
runtime-proof claims remain held regardless of this record until their own
proof gates pass.
