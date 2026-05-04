# TraceWeaver U9 Codex Runtime Discovery Evidence

Status: `UNIT1_ISOLATED_CODEX_INSTALL_DISCOVERY_SMOKE_DOC_REVIEW_PASSED_UNIT2_FIXTURE_SMOKE_DOC_REVIEW_PASSED_UNIT3_GATE_BEHAVIOR_SMOKE_CODE_REVIEW_PASSED_DOC_REVIEW_PASSED_UNIT4_BOUNDARY_SMOKE_CODE_REVIEW_PASSED_DOC_REVIEW_PASSED_UNIT5_HOST_REGISTRY_FILESYSTEM_PROBE_CODE_REVIEW_PASSED_DOC_REVIEW_PASSED_UNIT7_HOST_INSTALL_ATTEMPT_DOC_REVIEW_PASSED_UNIT8_SEPARATE_HOME_INSTALL_PASSED_FRESH_EXEC_REGISTRY_REVIEWED_HELD_CODE_REVIEW_PASSED_DOC_REVIEW_PASSED_UNIT9_REGISTRY_SHAPE_REPAIR_AUTH_BOUNDARY_PATCH_CODE_REVIEW_PENDING_AUTHORITY_DOC_REVIEW_PENDING_RUNTIME_CLAIMS_HELD`

Date/session: 2026-05-02, `ce:work`

Record ID: `TWCORE-U9-CODEX-RUNTIME-DISCOVERY-2026-05-02-001`

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- baseline hash:
  `6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`
- authority source: `requirements.md`, REQ-TW-014, REQ-TW-016,
  REQ-TW-033 through REQ-TW-048
- Intent Contract: `.traceweaver/intent-contract.yml`
- matrix authority: `traceability-matrix.md`
- plan authority:
  `docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md`

## Decision

Unit 1 proves that the repository-local installer can materialize a fresh
isolated Codex home with the expected TraceWeaver-packaged skill surface,
selected CE-compatible dependency surface, selected agent TOML files,
references, direct callable marker files, source-identical skill copies, and no
prompt/command surface.

Unit 2 adds fixture-only U9 workspaces and a deterministic fixture smoke harness
for authority-present, missing-authority, stale-authority, weak-requirement,
trace-gap, and trace-write cases. The trace-write case writes generated trace,
gap, change, exception, and matrix content only in a temporary copy and proves
the fixture source files are unchanged.

Unit 3 extends that deterministic fixture harness to classify core
TraceWeaver gate behavior for authority gates, traceability checks,
requirements review, `tw-auto` authority loading, missing authority, missing
TraceWeaver-packaged skill resolution, and fixture-local trace-write
containment.

Unit 4 adds deterministic boundary smoke for `lfg` delegation, publication
stops, and reviewer-capacity backpressure. It proves the installed `lfg` copy
preserves the `tw-auto` delegation/no-raw-CE-autopilot boundary, proves
publication helper scripts stop before invoking `gh`, and classifies reviewer
capacity backpressure as incomplete coverage that cannot close review, U9,
runtime, or release gates. This Unit 4 evidence is accepted only as reviewed
deterministic boundary evidence after clean `/ce-code-review` and
`/ce-doc-review`.

Unit 5 adds a read-only Codex host-home filesystem registry probe. It inspects
the current host skill home without mutating it and confirms that this host does
not yet expose the required TraceWeaver-native direct callable `tw-*` files as
TraceWeaver-marked installed entries. Runtime-discoverable claims therefore
remain held until a host install plus fresh Codex session/reload transcript, or
a supported automated host-registry probe, records the installed skills as
callable TraceWeaver-packaged entries.

Unit 7 attempted the repo-local host install against the current Codex home.
The installer failed closed before overwrite because existing global callable
skill directories are not TraceWeaver-marked direct callable copies. No fresh
Codex reload or real `tw-*` runtime invocation was attempted. This Unit 7
evidence passed authority-set doc review and is accepted only as held
install-conflict limitation evidence.

Unit 8 installed TraceWeaver into a separate temporary Codex home and launched
a fresh `codex exec` session with both `HOME` and `CODEX_HOME` pointed at that
isolated home. The install succeeded, but the captured visible-skill list
excluded `tw-authority-gate`, so runtime registry exposure and real `tw-*`
invocation remain held. The harness now emits only the neutral held observation
`fresh_codex_registry_loading_observation=held_tw_authority_gate_not_in_visible_skill_list`
instead of asserting a registry-loading cause that the harness does not prove.
The refreshed harness has clean behavior-code review and clean authority doc
review. This Unit 8 evidence is accepted only as reviewed-held limitation
evidence and does not prove host-registry discovery or real `tw-*` runtime
invocation.

Unit 9 repairs the registry-shape observation found during manual dogfooding:
the installer no longer places the packaged TraceWeaver skill copy under
`.codex/skills/traceweaver-core`, so Codex sees only direct callable skill
directories under `.codex/skills`. The package/provenance copy now lives under
`.codex/traceweaver-core/skills`. The updated installer also removes the
legacy active `.codex/skills/traceweaver-core` surface only when the existing
TraceWeaver install manifest proves ownership; an unowned legacy surface blocks
before removal. The updated discovery smoke passed and `codex debug
prompt-input` exposed the required `tw-*`, `lfg`, and wrapped CE skills in an
isolated Codex home. The separate-home fresh exec harness also recorded all
required skills as visible. After the auth-boundary patch, the real `codex exec`
transcript reached the exact skill-hash sentinel, but the harness held the result
because the probe used a copied live Codex auth file during execution. The
registry-shape and legacy-upgrade code review passed before the auth-boundary
patch; refreshed behavior-code review and authority doc review remain pending,
and Unit 9 does not accept real runtime invocation.

Allowed use after refreshed Unit 8 authority review closure:

- cite isolated Codex install materialization for Unit 1;
- cite direct callable directory and packaged TraceWeaver directory identity;
- cite fail-closed behavior for an existing unowned direct callable skill
  directory;
- cite Unit 2 fixture classifications as reviewed fixture-scoped evidence;
- cite temporary-copy trace-write output as reviewed fixture-scoped proof;
- cite Unit 3 gate-behavior output as reviewed deterministic fixture-scoped
  evidence after clean `/ce-code-review` and `/ce-doc-review`;
- cite Unit 4 output as reviewed deterministic boundary evidence only;
- cite Unit 5 host-home filesystem probe as reviewed held host-registry
  limitation evidence only; do not use it as runtime discovery proof;
- cite Unit 7 only as reviewed held install-conflict limitation evidence; it
  does not support successful host install, active host-registry discovery, or
  real runtime invocation claims;
- cite Unit 8 only as reviewed-held separate-home install/fresh-exec registry
  limitation evidence; it does not support runtime-discoverable claims until a
  passing registry transcript exists;
- cite Unit 9 only as review-pending registry-shape and auth-boundary evidence
  until refreshed behavior-code review and authority doc review close; do not
  cite it as accepted runtime invocation proof;
- continue planning later U9 host-registry/runtime work with host-registry
  discovery, real skill invocation, and project-level runtime write behavior
  explicitly held.

Held claims:

- active Codex host-registry discovery;
- real fresh Codex exec skill invocation returning the exact TraceWeaver-loaded
  sentinel;
- real `tw-auto`, `lfg`, or `tw-grill` runtime invocation;
- matrix/trace/gap/change/exception write behavior outside temporary-copy
  fixture proof;
- clean CE replacement;
- enforcing authority gate behavior;
- slash-command or prompt availability;
- autonomous commit, push, or PR publication;
- release-ready, package-ready, upstream-ready, or R31 validation status.

## Materialized / Tested Files

| File | SHA-256 | Role | Decision |
| --- | --- | --- | --- |
| `src/index.ts` | `d0e45b8fcce859e2483867c6d0cdbde683595fe91684e295b40714fe4282ead5` | Repo-local Codex installer | Unit 9 registry-shape repair code review passed; authority doc review pending; runtime held. Packaged skills now install outside `.codex/skills`, leaving only direct callable skills as active registry surface, and owned legacy active namespaced surfaces are removed during upgrade. |
| `scripts/traceweaver-smoke-codex-discovery` | `20856843b57a9dcf852c8a2b7905cac19555837884a037dc821ba7d934b362c5` | Unit 1 isolated Codex install/discovery smoke harness plus Unit 4 installed `lfg` boundary check and Unit 9 registry-shape visibility/legacy-upgrade proof | Unit 9 smoke passed; code review passed; authority doc review pending; runtime held. |
| `scripts/traceweaver-smoke-codex-host-registry` | `73f046143ae3f3b0815cb1032ee6a4c8ae6c75c9ca5754cb0cd2aebc48555813` | Unit 5 read-only current Codex host-home filesystem registry probe | Held: current host is missing TraceWeaver-native direct callable `tw-*` entries and has unmarked/stale direct callable continuity entries. |
| `scripts/traceweaver-smoke-codex-separate-home-runtime` | `0c17c2eaba9e7f57acd8460881e0bd19b5981b3114d715ef3604edcae26661ed` | Unit 8 separate Codex home install plus fresh `codex exec` registry probe, updated by Unit 9 to require all required visible skills and hold live-auth-copy runtime results | Unit 9 records required skills visible and an exact skill-hash sentinel, but holds runtime acceptance because a copied live Codex auth file was available to read-only exec; refreshed code/doc review pending. |
| `scripts/traceweaver-smoke-no-publication` | `9e14b7066ed0d6d7e55f82df106dff41db8d18eb0d59be88dd5748e73f9def40` | Unit 4 PR-helper publication-stop, `lfg` delegation, and event-derived reviewer backpressure boundary smoke | Pass accepted as reviewed deterministic boundary evidence. |
| `scripts/traceweaver-smoke-u9-fixtures` | `0646c25d475cb5bfa33864e84f6b9167b4c2fddb4b8061612a5979a1034c1d3f` | Unit 2 fixture classification, temporary-copy trace-write, and Unit 3 deterministic gate-behavior smoke harness | Unit 2 pass accepted; Unit 3 dependency-coverage patch recorded / behavior-bearing code review passed. |
| `fixtures/u9-codex/` | aggregate `3134b4f39d4856137574f35f1377eb4289b03a95fb94e82f99212b281ca423de` | Synthetic U9 fixture workspaces | Fixture-only evidence; not project authority. |
| `fixtures/u9-codex/authority-present/.traceweaver/intent-contract.yml` | `ef69fea4eb63e724876619b37c15efcc4ec7bf334c7178c1d47f0c5c35a24f1c` | Fixture Intent Contract with matching requirements and matrix hashes | Pass candidate for fixture scan. |
| `fixtures/u9-codex/authority-present/requirements.md` | `8dff15a195efe8849372f330433f450ed2c3ea765d306a95be84a8a0b4893f68` | Fixture accepted-requirements baseline | Hash matches fixture Intent Contract. |
| `fixtures/u9-codex/authority-present/traceability-matrix.md` | `ee265542c7ba0ab4b750c29178ab0e0d00003ca730b2844adfdf5061641ec17a` | Fixture traceability matrix | Hash matches fixture Intent Contract. |
| `docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md` | `341f9720d79433efb810cce842a7c98d10f949b373c687b8dfbfbb7d1c40583b` | U9 Codex runtime/discovery proof plan | Unit 1 through Unit 8 reviewed/held inputs plus Unit 9 registry-shape, legacy-upgrade repair, and auth-boundary patch with refreshed code/doc review pending; host-registry/runtime claims remain held. |
| `plugins/traceweaver-core/skills/tw-auto/SKILL.md` | `a65199ab5d447bd750bfae03251bc755452d35b424e6ba428f926e143f766de3` | Controlled-autonomy alpha skill | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/lfg/SKILL.md` | `ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083` | TraceWeaver compatibility alias | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | `93d78f160ee5dd78bd7ebf5dd9cff28e9c1ec3b8f5bfe2b25474b11512e475e3` | Authority gate skill | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` | `c2ac0332032b577e1749bb7990b01b6875f33d81bbec31de31f52d742250b943` | Traceability check skill | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | `f45459c1144646ece057f882da5eb730ff223ec725c19041d59cc3e3c9b7c4e1` | Requirements review skill | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/tw-grill/SKILL.md` | `666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90` | Approved static/advisory source-evidence skill | Source, packaged installed copy, and direct callable copy hashes matched after the two-mode amendment repair; runtime and implementation-authority claims remain held. |
| `plugins/traceweaver-core/skills/ce-plan/SKILL.md` | `51e97828c6c188850c74d9cbe8b1e7f4db6b5f88f6f9ecdafeaffdef1e2aaf11` | Required `tw-auto` CE-compatible planning dependency | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/ce-work/SKILL.md` | `4d3a91e7025f5fdedf2e454e56ab79e2d8588680a35f7d4d4a35aee933d49b36` | Required `tw-auto` CE-compatible work dependency | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/ce-code-review/SKILL.md` | `66a1da73677a5fe2e5d3e6292872a2375c697704353799adf0eaa7b3a9f947f9` | Required `tw-auto` CE-compatible code-review dependency | Source, packaged installed copy, and direct callable copy hashes matched. |
| `plugins/traceweaver-core/skills/ce-doc-review/SKILL.md` | `9b197bee814542328be6153afa5cf560f638eb3fe3ea94ba62c5b66129bdc246` | Required `tw-auto` CE-compatible doc-review dependency | Source, packaged installed copy, and direct callable copy hashes matched. |

## Procedure

Observed command:

```sh
scripts/traceweaver-smoke-codex-discovery
```

The smoke harness performs these checks:

- creates a temporary isolated Codex home;
- runs
  `bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills --codexHome <TEMP_CODEX_HOME>`;
- verifies direct callable skill directories for `tw-auto`, `lfg`,
  `tw-authority-gate`, `tw-traceability-check`, `tw-requirements-review`,
  `tw-grill`, `ce-plan`, `ce-work`, `ce-code-review`, and `ce-doc-review`;
- verifies packaged TraceWeaver copies under
  `<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/`;
- verifies each required direct callable copy contains
  `.traceweaver-core-install.json` with plugin `traceweaver-core` and purpose
  `direct-callable-skill-copy`;
- verifies selected source and installed `SKILL.md` hashes match;
- verifies the install manifest records 27 skills, 27 direct callable skill
  copies, 49 selected agent TOML files, 17 reference files, zero prompts, and
  zero prompt files;
- verifies no prompt or command directory is created in the isolated Codex home;
- verifies a second isolated install fails closed before overwriting an existing
  unowned `.codex/skills/ce-work` directory.
- verifies the installed direct callable `lfg/SKILL.md` delegates to `tw-auto`,
  blocks raw CE autopilot fallback, and does not directly run raw CE workflow
  steps.

## Result

```text
skill_hash_tw-auto=a65199ab5d447bd750bfae03251bc755452d35b424e6ba428f926e143f766de3
skill_hash_lfg=ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083
skill_hash_tw-authority-gate=93d78f160ee5dd78bd7ebf5dd9cff28e9c1ec3b8f5bfe2b25474b11512e475e3
skill_hash_tw-traceability-check=c2ac0332032b577e1749bb7990b01b6875f33d81bbec31de31f52d742250b943
skill_hash_tw-requirements-review=f45459c1144646ece057f882da5eb730ff223ec725c19041d59cc3e3c9b7c4e1
skill_hash_tw-grill=666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90
skill_hash_ce-plan=51e97828c6c188850c74d9cbe8b1e7f4db6b5f88f6f9ecdafeaffdef1e2aaf11
skill_hash_ce-work=4d3a91e7025f5fdedf2e454e56ab79e2d8588680a35f7d4d4a35aee933d49b36
skill_hash_ce-code-review=66a1da73677a5fe2e5d3e6292872a2375c697704353799adf0eaa7b3a9f947f9
skill_hash_ce-doc-review=9b197bee814542328be6153afa5cf560f638eb3fe3ea94ba62c5b66129bdc246
codex_discovery_smoke=pass
temp_codex_home=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/tmp.X1nzTfAhxd/codex-home
installed_manifest=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/tmp.X1nzTfAhxd/codex-home/.codex/traceweaver-core/install-manifest.json
installed_skill_directory_count=27
installed_callable_skill_directory_count=27
installed_agent_toml_count=49
installed_reference_file_count=17
installed_manifest_prompts=0
installed_manifest_prompt_files=0
direct_callable_required_skills=tw-auto lfg tw-authority-gate tw-traceability-check tw-requirements-review tw-grill ce-plan ce-work ce-code-review ce-doc-review
packaged_traceweaver_skills_root=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/tmp.X1nzTfAhxd/codex-home/.codex/traceweaver-core/skills
direct_callable_skills_root=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/tmp.X1nzTfAhxd/codex-home/.codex/skills
selected_agents_root=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/tmp.X1nzTfAhxd/codex-home/.codex/agents/traceweaver-core
references_root=/var/folders/2f/ntb_0p9558v4wfcwr5_64dg00000gn/T/tmp.X1nzTfAhxd/codex-home/.codex/traceweaver-core/references
unowned_direct_callable_conflict=blocked_before_overwrite
installed_lfg_delegation=pass
installed_lfg_no_raw_ce_autopilot=pass
host_codex_registry_discovery=held_manual_fresh_session_or_reload_required
```

The temporary Codex home was removed by the smoke harness after the run. The
paths above identify the observed isolated execution surface; the durable
evidence is the script, hashes, counts, and recorded command output.

## Unit 2 Fixture Procedure

Observed command:

```sh
scripts/traceweaver-smoke-u9-fixtures
```

The fixture smoke harness performs these checks:

- verifies `authority-present/` contains `requirements.md`,
  `traceability-matrix.md`, and `.traceweaver/intent-contract.yml`;
- compares the fixture Intent Contract declared baseline and matrix hashes to
  the computed fixture file hashes;
- verifies `missing-authority/` lacks the required authority files and is
  blocked before work;
- verifies `stale-authority/` carries an intentionally mismatched declared
  requirements hash and is blocked before work;
- verifies `weak-requirement/` carries a candidate/TBD requirement and is not
  implementation-ready;
- verifies `trace-gap/` records a missing evidence/validation link and is
  blocked;
- copies `trace-write/` to a temporary directory, writes generated trace, gap,
  change, exception, and matrix content in that temporary copy, and verifies the
  source fixture files did not change.

## Unit 2 Fixture Result

```text
u9_fixture_authority_present=pass
u9_fixture_missing_authority=blocked_missing_requirements_intent_contract_matrix
u9_fixture_stale_authority=blocked_hash_mismatch
u9_fixture_weak_requirement=blocked_candidate_not_implementation_ready
u9_fixture_trace_gap=blocked_missing_evidence_link
u9_fixture_trace_write=temp_write_pass_real_repo_unchanged
u9_fixture_smoke=pass
```

This proves deterministic fixture classification and temporary-copy write
containment only. It does not prove active host-registry discovery, real
TraceWeaver skill invocation, or project authority-file mutation behavior.

## Unit 3 Gate Behavior Procedure

Observed command:

```sh
scripts/traceweaver-smoke-u9-fixtures
```

The Unit 3 extension performs these deterministic fixture checks:

- classifies `tw-authority-gate` authority-present, missing-authority, and
  stale-authority scenarios;
- classifies `tw-traceability-check` complete-trace and trace-gap scenarios;
- classifies `tw-requirements-review` approved and weak-requirement scenarios;
- classifies `tw-auto` authority-file loading, missing authority, and missing
  TraceWeaver-packaged dependency resolution;
- verifies the trace-write proof remains temporary-copy only and does not mutate
  the source fixture tree;
- records host-registry discovery and real `tw-*` runtime invocation as held
  because no fresh Codex host-registry transcript or equivalent runner was used.

## Unit 3 Gate Behavior Result

```text
u9_fixture_authority_present=pass
tw_authority_gate_authority_present=pass
tw_auto_authority_load=pass
tw_traceability_check_complete_trace=pass
tw_requirements_review_approved_fixture=pass
u9_fixture_missing_authority=blocked_missing_requirements_intent_contract_matrix
tw_authority_gate_missing_authority=blocked_missing_requirements_intent_contract_matrix
tw_auto_missing_authority=blocked_missing_authority
u9_fixture_stale_authority=blocked_hash_mismatch
tw_authority_gate_stale_authority=blocked_hash_mismatch
u9_fixture_weak_requirement=blocked_candidate_not_implementation_ready
tw_requirements_review_weak_requirement=blocked_candidate_not_implementation_ready
u9_fixture_trace_gap=blocked_missing_evidence_link
tw_traceability_check_trace_gap=blocked_dark_behavior_candidate
u9_fixture_trace_write=temp_write_pass_real_repo_unchanged
tw_trace_write_runtime_behavior=held_temp_copy_only_no_project_runtime_write
tw_auto_missing_skill_resolution=held_install_package_gap_no_external_ce_fallback missing=tw-traceability-check,ce-work
host_codex_registry_discovery=held_manual_fresh_session_or_reload_required
real_tw_skill_runtime_invocation=held_no_host_transcript_or_runner
u9_gate_behavior_smoke=pass
u9_fixture_smoke=pass
```

This proves deterministic fixture gate classifications only after the patched
behavior-bearing harness passed code review. Unit 3 does not prove active
host-registry discovery, real skill invocation through the Codex runtime,
enforcing behavior, or project authority-file mutation behavior.

## Unit 4 Boundary Procedure

Observed commands:

```sh
scripts/traceweaver-smoke-codex-discovery
scripts/traceweaver-smoke-no-publication
```

The Unit 4 boundary checks perform these deterministic inspections and negative
smokes:

- verify the isolated installed direct callable `lfg/SKILL.md` delegates to
  `tw-auto`, blocks raw CE autopilot fallback, and does not directly run raw CE
  workflow steps;
- verify source `lfg/SKILL.md` preserves the same boundary;
- verify PR feedback reply/resolve helper scripts stop before invoking `gh`,
  including when a bypass-like publication environment variable is present;
- verify selected CE-derived skill surfaces still carry publication-stop
  markers;
- verify `tw-auto` reviewer-capacity policy records pending reviewers, treats
  active-agent/thread-limit errors as backpressure, and prevents incomplete or
  degraded review coverage from closing required review, U9, runtime, or
  release gates.

## Unit 4 Boundary Result

```text
installed_lfg_delegation=pass
installed_lfg_no_raw_ce_autopilot=pass
no_publication_smoke=pass
reply_to_pr_thread_without_gate=blocked_before_gh
resolve_pr_thread_without_gate=blocked_before_gh
reply_to_pr_thread_env_bypass=blocked_before_gh
resolve_pr_thread_env_bypass=blocked_before_gh
skill_publication_stop_markers=present
lfg_delegation=pass
lfg_no_raw_ce_autopilot=pass
pr_helper_publication_stop_before_external_mutation=pass
publication_stop_static_markers=present
reviewer_backpressure=incomplete_coverage_no_gate_closure events=dispatched:ce-coherence-reviewer capacity:ce-feasibility-reviewer completed:ce-coherence-reviewer closed:ce-coherence-reviewer dispatched:ce-feasibility-reviewer capacity:ce-scope-guardian-reviewer capacity_errors=agent thread limit reached:ce-feasibility-reviewer agent thread limit reached:ce-scope-guardian-reviewer intended=ce-coherence-reviewer ce-feasibility-reviewer ce-scope-guardian-reviewer completed=ce-coherence-reviewer closed=ce-coherence-reviewer pending=ce-scope-guardian-reviewer ce-feasibility-reviewer
degraded_review_acceptance=held_condition_not_gate_closure
unit4_boundary_smoke=pass
host_codex_registry_discovery=held_manual_fresh_session_or_reload_required
```

This proves deterministic policy and script-boundary behavior only. It does not
prove active Codex host-registry discovery, real `tw-auto`/`lfg` runtime
invocation, live reviewer-subagent backpressure behavior, enforcing behavior,
or autonomous publication readiness. Unit 4 is accepted only as reviewed
deterministic boundary evidence after `CE-CODE-REVIEW-2026-05-03-U9-UNIT4-HARNESS-CLEAN-001`
and `CE-DOC-REVIEW-2026-05-03-U9-UNIT4-AUTHORITY-CLEAN-001`.

## Current Held Condition

`real_tw_skill_runtime_invocation=held_live_auth_copy_boundary_after_exact_skill_hash_sentinel`

Before accepting runtime-discoverable U9 claims, capture a fresh Codex exec
transcript or supported automated Codex host-registry evidence showing
`tw-authority-gate` loads from the TraceWeaver-installed skill and returns the
exact expected skill-hash sentinel. Unit 9 prompt-input evidence shows required
`tw-*`, `lfg`, and wrapped CE skills are visible, but it does not prove real
skill invocation. If the proof requires a copied Codex auth file, record the
credential-exposure boundary as held or replace the probe with a tokenless or
otherwise constrained runtime path before accepting runtime evidence.

## Unit 5 Host Registry Filesystem Probe

Observed command:

```sh
scripts/traceweaver-smoke-codex-host-registry
```

The Unit 5 probe is read-only. It inspects the configured current Codex host
skill home, defaulting to `~/.codex/skills`, and compares the required direct
callable TraceWeaver skill names against the TraceWeaver-packaged source
surface. It does not install, delete, overwrite, or reload Codex skills.

## Unit 5 Host Registry Filesystem Result

```text
codex_host_skills_root=/Users/hanneszietsman/.codex/skills
codex_host_required_skills=tw-auto lfg tw-authority-gate tw-traceability-check tw-requirements-review tw-grill ce-plan ce-work ce-code-review ce-doc-review
codex_host_present_skills=lfg ce-plan ce-work ce-code-review ce-doc-review
codex_host_missing_skills=tw-auto tw-authority-gate tw-traceability-check tw-requirements-review tw-grill
codex_host_unmarked_skills=lfg ce-plan ce-work ce-code-review ce-doc-review
codex_host_stale_skills=lfg ce-plan ce-work ce-code-review ce-doc-review
codex_host_traceweaver_native_missing=tw-auto tw-authority-gate tw-traceability-check tw-requirements-review tw-grill
codex_host_registry_filesystem_probe=held_missing_or_untrusted_direct_callable_files
host_codex_registry_discovery=held_missing_traceweaver_direct_callable_host_install_or_active_registry_reload
real_tw_skill_runtime_invocation=held_no_host_transcript_or_runner
```

This proves the current host is not yet a trusted TraceWeaver runtime-discovery
environment. It does not prove active Codex skill registry exposure, real
`tw-auto`/`lfg`/`tw-grill` invocation, project-level trace writes, enforcing
behavior, or release/runtime readiness.

## Unit 5 Review State

```text
unit5_host_registry_filesystem_probe_result=held_missing_or_untrusted_direct_callable_files
unit5_behavior_code_review_status=passed_no_findings
unit5_behavior_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT5-HOST-REGISTRY-HARNESS-CLEAN-001
unit5_behavior_code_review_scope=scripts/traceweaver-smoke-codex-host-registry
unit5_authority_doc_review_status=passed_no_findings
unit5_authority_doc_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT5-AUTHORITY-CLEAN-001
unit5_authority_doc_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u9-codex-runtime-discovery.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md, scripts/traceweaver-smoke-codex-host-registry, README.md, docs/plans/2026-05-02-001-feat-full-ce-341-traceweaver-authority-wrapping-plan.md, src/index.ts, plugins/traceweaver-core/skills/tw-auto/SKILL.md, plugins/traceweaver-core/skills/tw-grill/SKILL.md
unit5_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
unit5_accepted_scope=reviewed held host-home filesystem registry limitation evidence only
unit5_held_scope=active Codex host-registry discovery, real tw-auto/lfg/tw-grill runtime invocation, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Unit 7 Host Install Attempt

Observed command:

```sh
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

The command was run against the default current Codex home. The installer
exited nonzero before writing because existing global callable skill directories
would be overwritten and they do not carry the TraceWeaver direct-callable
marker.

## Unit 7 Host Install Attempt Result

```text
host_install_exit_code=1
host_install_result=blocked_unowned_direct_callable_conflicts_before_overwrite
host_install_conflicts=~/.codex/skills/ce-brainstorm ~/.codex/skills/ce-code-review ~/.codex/skills/ce-compound ~/.codex/skills/ce-compound-refresh ~/.codex/skills/ce-debug ~/.codex/skills/ce-doc-review ~/.codex/skills/ce-plan ~/.codex/skills/ce-sessions ~/.codex/skills/ce-setup ~/.codex/skills/ce-work ~/.codex/skills/lfg
host_codex_registry_discovery=held_install_blocked_existing_unowned_callable_skills
real_tw_skill_runtime_invocation=held_no_successful_host_install_or_fresh_reload_transcript
```

This is a safety result, not a runtime discovery result. It proves the current
host cannot be promoted by the documented installer without first resolving the
existing unowned callable skill directories or using a separate Codex home. It
does not prove active Codex skill registry exposure, real `tw-auto`/`lfg`/
`tw-grill` invocation, project-level trace writes, enforcing behavior, or
release/runtime readiness.

## Unit 7 Review State

```text
unit7_host_install_attempt_result=blocked_unowned_direct_callable_conflicts_before_overwrite
unit7_authority_doc_review_status=passed_no_findings
unit7_authority_doc_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT7-AUTHORITY-CLEAN-001
unit7_authority_doc_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u9-codex-runtime-discovery.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
unit7_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
unit7_accepted_scope=reviewed held current-host install-conflict limitation evidence only
unit7_next_proof_route=Unit 8 separate-home install/fresh exec probe recorded reviewed-held registry evidence with clean code review and authority doc review; next gate is Codex skill-registry loading investigation before any runtime-discoverable claim
unit7_held_scope=active Codex host-registry discovery, real tw-auto/lfg/tw-grill runtime invocation, successful host install in the active host, fresh Codex session/reload registry proof, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Unit 8 Separate-Home Fresh Exec Probe

Observed command:

```sh
scripts/traceweaver-smoke-codex-separate-home-runtime
```

The harness creates a separate temporary home, copies only Codex auth into that
home for the duration of the probe, runs the repo-local installer with
`--codexHome`, captures `codex debug prompt-input` visible-skill evidence, and
launches a fresh `codex exec` session with both `HOME` and `CODEX_HOME`
pointing at the isolated home. Before emitting evidence paths it removes the
copied auth file from the retained temporary home. It does not mutate the
active user Codex home and does not copy the user's Codex config.

Observed output:

```text
separate_codex_home=/tmp/traceweaver-u9-separate-home.Rwv0vP
separate_codex_dot_home=/tmp/traceweaver-u9-separate-home.Rwv0vP/.codex
separate_home_prompt_input=/tmp/traceweaver-u9-separate-home.Rwv0vP/prompt-input.json
separate_home_visible_skills=/tmp/traceweaver-u9-separate-home.Rwv0vP/visible-skills.txt
separate_home_install_result=pass
separate_home_runtime_home_isolated=true
fresh_codex_invocation_target=tw-authority-gate
fresh_codex_expected_skill_hash=93d78f160ee5dd78bd7ebf5dd9cff28e9c1ec3b8f5bfe2b25474b11512e475e3
fresh_codex_exec_exit_code=0
fresh_codex_tw_authority_gate_visible=false
fresh_codex_reload_probe=held_skill_registry_visible_list_excludes_tw_authority_gate
fresh_codex_runtime_skill_invocation=held_skill_registry_visible_list_excludes_tw_authority_gate
fresh_codex_registry_loading_observation=held_tw_authority_gate_not_in_visible_skill_list
```

The captured visible-skill list excluded `tw-authority-gate`, so the harness
held before attempting to classify the transcript as a loaded-skill proof. This
proves the separate-home install can complete, but it does not prove Codex
runtime skill-registry exposure or real `tw-*` invocation.

## Unit 8 Review State

```text
unit8_separate_home_install_result=pass
unit8_fresh_codex_exec_exit_code=0
unit8_fresh_codex_tw_authority_gate_visible=false
unit8_fresh_codex_reload_probe=held_skill_registry_visible_list_excludes_tw_authority_gate
unit8_fresh_codex_runtime_skill_invocation=held_skill_registry_visible_list_excludes_tw_authority_gate
unit8_fresh_codex_registry_loading_observation=held_tw_authority_gate_not_in_visible_skill_list
unit8_behavior_code_review_status=passed_no_findings_after_visibility_list_observation_patch
unit8_behavior_code_review_id=CE-CODE-REVIEW-2026-05-04-U9-SEPARATE-HOME-HARNESS-CLEAN-002
unit8_behavior_code_review_date=2026-05-04
unit8_behavior_code_review_scope=scripts/traceweaver-smoke-codex-separate-home-runtime
unit8_behavior_code_review_finding_patched=P2 blocker cause is asserted, not proven by the harness
unit8_behavior_code_review_coverage=main_thread_review_only_no_reviewer_subagents
unit8_authority_doc_review_status=passed_no_findings_after_next_route_repair
unit8_authority_doc_review_id=CE-DOC-REVIEW-2026-05-04-U9-UNIT8-AUTHORITY-CLEAN-002
unit8_authority_doc_review_date=2026-05-04
unit8_authority_doc_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u9-codex-runtime-discovery.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md, scripts/traceweaver-smoke-codex-separate-home-runtime
unit8_authority_doc_review_coverage=main_thread_review_only_no_reviewer_subagents
unit8_accepted_scope=reviewed held separate-home install/fresh-exec registry limitation evidence only
unit8_held_scope=active Codex host-registry discovery, fresh Codex skill-registry exposure for TraceWeaver-installed skills, real tw-auto/lfg/tw-grill runtime invocation, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Unit 9 Registry-Shape Repair Proof

Observed commands:

```sh
scripts/traceweaver-smoke-codex-discovery
TRACEWEAVER_CODEX_EXEC_TIMEOUT_SECONDS=180 scripts/traceweaver-smoke-codex-separate-home-runtime
```

The installer now writes active callable skills only to direct directories under
`.codex/skills/<skill>`. The packaged TraceWeaver copy used for provenance and
manifest identity is written outside the active Codex skill scan path under
`.codex/traceweaver-core/skills/<skill>`. Owned legacy active namespaced skill
surfaces are removed during upgrade when the prior TraceWeaver install manifest
proves ownership; unowned legacy active namespaced surfaces block before
removal.

Observed deterministic discovery output:

```text
codex_discovery_smoke=pass
installed_packaged_skill_directory_count=27
installed_callable_skill_directory_count=27
codex_prompt_input_visible_required_skills=tw-auto lfg tw-authority-gate tw-traceability-check tw-requirements-review tw-grill ce-plan ce-work ce-code-review ce-doc-review
active_namespaced_skill_surface=absent
owned_legacy_active_skill_surface=removed_on_upgrade
unowned_legacy_active_skill_surface=blocked_before_removal
packaged_traceweaver_skills_root=<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills
direct_callable_skills_root=<TEMP_CODEX_HOME>/.codex/skills
host_codex_registry_discovery=held_manual_fresh_session_or_reload_required
```

Observed separate-home fresh exec output:

```text
separate_home_install_result=pass
separate_home_runtime_home_isolated=true
fresh_codex_tw_authority_gate_visible=true
fresh_codex_required_skills_visible=true
fresh_codex_auth_boundary=held_live_auth_copy_available_to_read_only_exec_until_tokenless_probe_exists
fresh_codex_exec_exit_code=0
fresh_codex_reload_probe=held_auth_boundary_after_skill_hash_sentinel
fresh_codex_runtime_skill_invocation=held_live_auth_copy_boundary
```

Unit 9 repairs the registry-shape observation for prompt-input visibility. It
also proves owned-upgrade cleanup for the old active namespaced skill surface
and fail-closed handling for unowned legacy active skill surfaces. It does not
accept real `tw-*` runtime invocation because the exact skill-hash sentinel was
observed only while a copied live Codex auth file was available to the read-only
exec environment.

## Unit 9 Review State

```text
unit9_registry_shape_repair_status=auth_boundary_patch_code_review_pending_authority_doc_review_pending
unit9_installer_hash=d0e45b8fcce859e2483867c6d0cdbde683595fe91684e295b40714fe4282ead5
unit9_discovery_harness_hash=20856843b57a9dcf852c8a2b7905cac19555837884a037dc821ba7d934b362c5
unit9_separate_home_harness_hash=0c17c2eaba9e7f57acd8460881e0bd19b5981b3114d715ef3604edcae26661ed
unit9_prompt_input_visibility=passed_required_traceweaver_and_wrapped_ce_skills_visible
unit9_owned_legacy_active_surface=removed_on_upgrade
unit9_unowned_legacy_active_surface=blocked_before_removal
unit9_real_runtime_invocation=held_live_auth_copy_boundary_after_exact_skill_hash_sentinel
unit9_behavior_code_review_status=pending_after_auth_boundary_patch
unit9_prior_behavior_code_review_id=CE-CODE-REVIEW-2026-05-04-U9-UNIT9-INSTALLER-HARNESS-CLEAN-001
unit9_behavior_code_review_scope=src/index.ts, scripts/traceweaver-smoke-codex-discovery, scripts/traceweaver-smoke-codex-separate-home-runtime
unit9_behavior_code_review_coverage=main_thread_review_only_no_reviewer_subagents
unit9_authority_doc_review_status=pending
unit9_accepted_scope=none_until_clean_behavior_code_review_and_authority_doc_review
unit9_held_scope=real tw-auto/lfg/tw-grill runtime invocation, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Document Review

Observed current authority-set review:

```text
ce-doc-review_result=passed_no_findings_after_metadata_repairs
review_date=2026-05-03
review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT1-AUTHORITY-CLEAN-001
review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u9-codex-runtime-discovery.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md, scripts/traceweaver-smoke-codex-discovery
review_coverage=main_thread_review_only_no_reviewer_subagents
review_outcome=no_findings
accepted_scope=isolated Unit 1 Codex install/discovery smoke evidence as reviewed U9 planning input
held_scope=active Codex host-registry discovery, real tw-auto/lfg/tw-grill runtime invocation, trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Unit 2 Review State

```text
unit2_fixture_smoke_result=passed
unit2_review_status=passed_no_findings_after_allowed_use_and_plan_snapshot_repairs
unit2_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT2-AUTHORITY-CLEAN-001
unit2_review_date=2026-05-03
unit2_review_scope=fixtures/u9-codex/, scripts/traceweaver-smoke-u9-fixtures, docs/validation/traceweaver-u9-codex-runtime-discovery.md, traceability-matrix.md, .traceweaver/intent-contract.yml, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
unit2_review_coverage=main_thread_review_only_no_reviewer_subagents
unit2_accepted_scope=fixture classification and temporary-copy trace-write proof as reviewed U9 fixture input only
unit2_held_scope=active Codex host-registry discovery, real tw-auto/lfg/tw-grill runtime invocation, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Unit 3 Review State

```text
unit3_gate_behavior_smoke_result=passed
unit3_review_status=passed_no_findings
unit3_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT3-AUTHORITY-CLEAN-001
unit3_review_date=2026-05-03
unit3_review_scope=scripts/traceweaver-smoke-u9-fixtures, docs/validation/traceweaver-u9-codex-runtime-discovery.md, traceability-matrix.md, .traceweaver/intent-contract.yml, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
unit3_review_coverage=main_thread_review_only_no_reviewer_subagents
unit3_accepted_scope=deterministic fixture gate-behavior classification as reviewed U9 fixture input only
unit3_code_review_status=passed_no_findings_after_dependency_resolution_coverage_patch
unit3_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT3-HARNESS-CLEAN-001
unit3_code_review_scope=scripts/traceweaver-smoke-u9-fixtures
unit3_code_review_finding_patched=P1 missing-skill smoke omits required tw-auto dependencies
unit3_code_review_coverage=main_thread_review_only_no_reviewer_subagents
unit3_code_review_accepted_scope=deterministic fixture gate-behavior classification as reviewed U9 fixture input only
unit3_held_scope=active Codex host-registry discovery, real tw-auto/lfg/tw-grill runtime invocation, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```

## Unit 4 Review State

```text
unit4_boundary_smoke_result=passed
unit4_review_status=passed_no_findings
unit4_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT4-HARNESS-CLEAN-001
unit4_doc_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT4-AUTHORITY-CLEAN-001
unit4_review_scope=scripts/traceweaver-smoke-codex-discovery, scripts/traceweaver-smoke-no-publication, docs/validation/traceweaver-u9-codex-runtime-discovery.md, traceability-matrix.md, .traceweaver/intent-contract.yml, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
unit4_accepted_scope=deterministic lfg delegation, PR-helper publication-stop, static broader-publication markers, and event-derived reviewer backpressure boundary evidence only
unit4_held_scope=active Codex host-registry discovery, real tw-auto/lfg/tw-grill runtime invocation, live reviewer-subagent backpressure behavior, project-level trace/matrix/gap/change/exception write behavior, clean CE replacement, enforcing authority gate behavior, slash-command or prompt availability, autonomous commit/push/PR publication, release-ready, package-ready, upstream-ready, and R31 validation status
```
