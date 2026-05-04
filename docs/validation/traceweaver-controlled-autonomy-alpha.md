# TraceWeaver Controlled Autonomy Alpha Evidence

Status: `STATIC_MATERIALIZED_STATIC_CHECKS_INSTALL_SMOKE_CODE_REVIEW_PASSED_REQ_TW_048_AMENDMENT_DOC_REVIEW_PASSED_U9_UNIT8_REFRESH_CODE_REVIEW_PASSED_AUTHORITY_DOC_REVIEW_PASSED_REVIEWED_HELD_U9_UNIT9_AUTH_BOUNDARY_PATCH_CODE_REVIEW_PENDING_AUTHORITY_DOC_REVIEW_PENDING_RUNTIME_HELD`

Date/session: 2026-05-01, `ce:work`, branch
`codex/traceweaver-u6-unblock-next`

Record ID: `TWCORE-CONTROLLED-AUTONOMY-ALPHA-2026-05-01-001`

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- baseline hash:
  `6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`
- authority source: `requirements.md`, REQ-TW-033 through REQ-TW-048
- Intent Contract: `.traceweaver/intent-contract.yml`
- matrix authority: `traceability-matrix.md`

## Decision

`tw-auto` is materialized as an advisory static alpha skill, the packaged `lfg`
entrypoint is materialized as a TraceWeaver compatibility alias that delegates
to `tw-auto`, and `tw-grill` is materialized as an optional post-ideation
source-evidence skill.

This record also captures the product-intent correction that TraceWeaver is not
an adjacent helper skill bundle. It is the CE-style workflow repackaged with
systems-engineering authority: requirements quality, Intent Contract, matrix
updates, verification, validation, and dark-behavior routing must travel through
the familiar idea/brainstorm/plan/work/review/learning path.

Allowed use:

- package and inspect the `tw-auto` skill and `lfg` compatibility alias;
- package and inspect the `tw-grill` post-ideation source-evidence skill;
- use `tw-auto` instructions as advisory controlled-autonomy guidance;
- use static and install-smoke evidence only for the refreshed narrow U7
  static/advisory state; this record does not support U9, runtime, release,
  clean-replacement, enforcing, dynamic-discovery, slash-command, or autonomous
  publication claims.

Held claims:

- real `tw-auto` runtime invocation;
- real `lfg` alias runtime invocation;
- real `tw-grill` runtime invocation;
- full CE-method wrapper sequencing;
- runtime dark-behavior detection for duplicate or logical-but-uncaptured code;
- clean CE replacement;
- runtime-equivalent CE workflow behavior;
- slash-command or prompt availability;
- enforcing authority gate behavior;
- autonomous commit, push, or PR publication;
- release-ready, package-ready, or upstream-ready status.

## Materialized Files

| File | SHA-256 | Role | Decision |
| --- | --- | --- | --- |
| `src/index.ts` | `d0e45b8fcce859e2483867c6d0cdbde683595fe91684e295b40714fe4282ead5` | Repository-local self-contained Codex installer for the README command; installs selected skills, selected CE agents, plugin-level references, and direct callable skill copies without overwriting unowned global skill directories; Unit 9 registry-shape, legacy-upgrade cleanup, and auth-boundary harness code-reviewed | Static materialized; Unit 9 behavior code review and authority doc review passed; runtime held. |
| `plugins/traceweaver-core/skills/tw-auto/SKILL.md` | `a65199ab5d447bd750bfae03251bc755452d35b424e6ba428f926e143f766de3` | Advisory controlled-autonomy skill with TraceWeaver-packaged dependency resolution, privacy bootstrap gate, no-publication work handoff, and reviewer subagent capacity/backpressure handling | Static materialized; current code review passed; prior authority-state doc review passed; runtime held. |
| `plugins/traceweaver-core/skills/lfg/SKILL.md` | `ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083` | TraceWeaver compatibility alias for `tw-auto` | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/tw-grill/SKILL.md` | `666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90` | Optional post-ideation intent-deepening skill with bootstrap and delta/gap modes | Static materialized; refreshed isolated install smoke passed; REQ-TW-048 amendment doc review passed; runtime held; context mutation held to source evidence only. |
| `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | `93d78f160ee5dd78bd7ebf5dd9cff28e9c1ec3b8f5bfe2b25474b11512e475e3` | TraceWeaver authority-gate skill | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | `f45459c1144646ece057f882da5eb730ff223ec725c19041d59cc3e3c9b7c4e1` | TraceWeaver requirements-review skill | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/tw-traceability-check/SKILL.md` | `c2ac0332032b577e1749bb7990b01b6875f33d81bbec31de31f52d742250b943` | TraceWeaver traceability-check skill | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` | `1cd5a3cb0316bb814afda991cc7b22602849949a25772e4dc214bbf5a995a91d` | Requirements review support skill | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md` | `e14608e14d341df67c173a0c3b03c5725cae6844991565a1d150cdbfbb898282` | Systems-engineering traceability support skill | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/tw-grill/references/upstream-notice.md` | `091702e556151a6eb6718a42159692adfc3925d3501951c45249ade1c46aea90` | Skill-local upstream attribution and source pin | Static materialized. |
| `plugins/traceweaver-core/skills/tw-auto/references/requirements-baseline-template.md` | `a0f413dfa8eb8223a6d171ca5f8ee58147255820a164cd392b7773039780aeda` | Skill-local requirements baseline template for first-run authority bootstrap | Static materialized. |
| `plugins/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml` | `ffe85511b70a8e0e676a41dd6ba4073b7603f64400a0c46b180afb0fe62436b2` | Skill-local Intent Contract template for first-run authority bootstrap | Static materialized. |
| `plugins/traceweaver-core/skills/tw-auto/references/traceweaver-controlled-autonomy-policy.md` | `98e6f66a1f46013dd63e2e752068e6f3f48f0f7f41d18dcf9444630dd7ee30db` | Skill-local controlled-autonomy policy for include-skills installs | Static materialized; runtime held. |
| `plugins/traceweaver-core/skills/tw-auto/references/automation-loop-state-template.yml` | `5f9d64772162a5a67121876a0473f9c8afb63763e92d3a17fb3f69af8c247c8b` | Skill-local loop-state trace template for include-skills installs | Static materialized. |
| `plugins/traceweaver-core/skills/tw-auto/references/traceability-matrix-bootstrap-template.md` | `3986a0d2c999fdfcceddcc650f5d98dec6fc5f7119df5cdc04865e670fa56aa1` | Skill-local bootstrap matrix template for include-skills installs | Static materialized. |
| `plugins/traceweaver-core/references/requirements-baseline-template.md` | `a0f413dfa8eb8223a6d171ca5f8ee58147255820a164cd392b7773039780aeda` | Plugin-level requirements baseline template for first-run authority bootstrap | Static materialized. |
| `plugins/traceweaver-core/references/intent-contract-template.yml` | `ffe85511b70a8e0e676a41dd6ba4073b7603f64400a0c46b180afb0fe62436b2` | Plugin-level Intent Contract template for first-run authority bootstrap | Static materialized. |
| `plugins/traceweaver-core/references/authority-baseline-template.yml` | `e84608937ab8c8cd00bd350d1cdc23d03db829fb79012a675b15af689f1e59cd` | Plugin-level authority baseline record template | Static materialized. |
| `plugins/traceweaver-core/references/gap-template.yml` | `b41750bc73eaab76baf5f1146af8eba252ea80f4050c9dc5e3e891d00ed0dde4` | Plugin-level gap record template | Static materialized. |
| `plugins/traceweaver-core/references/change-template.yml` | `39fd2d09bf0724555bbf8d6d59e007e29e2efa760d82418eea2df814ba364704` | Plugin-level change record template | Static materialized. |
| `plugins/traceweaver-core/references/exception-template.yml` | `c1b4a222b24d1fe806b20fe26f69d70276676664c74e95f4a18a27f0cf350683` | Plugin-level exception record template | Static materialized. |
| `plugins/traceweaver-core/references/task-capsule-template.yml` | `cfb1358631783e351048d7ac8d99a2d6db31289f8305f980bb06f0edaea8b394` | Plugin-level task capsule template | Static materialized. |
| `plugins/traceweaver-core/references/trace-record-template.yml` | `e5aa489b16d696c3dca8ed18bb8e34ea981a366e1d8ea435e11439766a91659f` | Plugin-level trace record template | Static materialized. |
| `plugins/traceweaver-core/references/requirements-and-vv-guide.md` | `2079d78917d7a2cf3e0d5c85f112ce5ea7e88c6fd537fe44521713c20354201c` | Plugin-level requirements and V&V guide | Static materialized. |
| `plugins/traceweaver-core/references/risk-gap-and-change-control-guide.md` | `bb422bf12791dc1bf3d3025fc7bcc32e3b1aafcc2bc5f0c3a3bfa97c6a4f3e79` | Plugin-level risk, gap, and change-control guide | Static materialized. |
| `plugins/traceweaver-core/references/systems-engineering-traceability-operating-model.md` | `4306c403e175902673c2fe223379462fc6cef758d88ecad8b1709a14de848813` | Plugin-level systems-engineering traceability operating model | Static materialized. |
| `plugins/traceweaver-core/references/traceability-matrix-template.md` | `2575a50dd1cafbe07ec9ebb19992a69777f3050054efe937a54b5de35688de3c` | Plugin-level traceability matrix template | Static materialized. |
| `plugins/traceweaver-core/references/traceweaver-controlled-autonomy-policy.md` | `7831ba7367960ea8b62f90dd4d7c198aaf96789e4cd474cc63c1250f012511ec` | Loop state, stop condition, severity, alias, and held-claim policy | Static materialized; runtime held. |
| `plugins/traceweaver-core/references/automation-loop-state-template.yml` | `5f9d64772162a5a67121876a0473f9c8afb63763e92d3a17fb3f69af8c247c8b` | Loop-state trace template | Static materialized. |
| `plugins/traceweaver-core/references/traceability-matrix-bootstrap-template.md` | `3986a0d2c999fdfcceddcc650f5d98dec6fc5f7119df5cdc04865e670fa56aa1` | Generic consuming-project matrix bootstrap template | Static materialized. |
| `plugins/traceweaver-core/references/traceweaver-runtime-policy.md` | `40d116e05e808c89c7c918920299def3dafd1fd54ee97b0436843535f5bf77a6` | Runtime/advisory policy, updated for `tw-auto` and `lfg` alias | Static materialized. |
| `plugins/traceweaver-core/.codex-plugin/plugin.json` | `28602d1303a022e54d1f03dc9d37edc8e7b15ac35f756cb8419b3bd938c81068` | Codex plugin metadata with `interface.defaultPrompt` prompt-like publication surface | Static materialized; default prompt hygiene-scanned. |
| `plugins/traceweaver-core/.claude-plugin/plugin.json` | `b385631dda16f32b0d296e4968a8462a69c9a110f060b064852a160704b37e10` | Claude compatibility metadata | Static materialized. |
| `plugins/traceweaver-core/.cursor-plugin/plugin.json` | `299e322e2bb0da05bc4894a32afc73e7a1e2f7fe62e68a84e0cd1a293ac1e242` | Cursor compatibility metadata | Static materialized. |
| `plugins/traceweaver-core/README.md` | `16f2ccff86f9666a74b190a49d3937e9d9000a1b99e50ebcd1d004cbb52c4af9` | Plugin user docs | Static updated; review pending. |
| `plugins/traceweaver-core/AGENTS.md` | `5f65f83096d8fb2ea859a85440e4e55bb468fda9245ebed8dda13ebb62fd2635` | Plugin-local agent instructions | Static updated; review pending. |
| `plugins/traceweaver-core/skills/ce-plan/SKILL.md` | `51e97828c6c188850c74d9cbe8b1e7f4db6b5f88f6f9ecdafeaffdef1e2aaf11` | CE-derived planning skill with TraceWeaver package-boundary primer, no `ce-proof` route in alpha, and draft-only issue handoff | Legacy/manual-continuity only until wrapped; runtime held. |
| `plugins/traceweaver-core/skills/ce-work/SKILL.md` | `4d3a91e7025f5fdedf2e454e56ab79e2d8588680a35f7d4d4a35aee933d49b36` | CE-derived work skill with TraceWeaver package-boundary primer and no-publication mode, including direct and parallel-flow publication stops | Legacy/manual-continuity only until wrapped; runtime held. |
| `plugins/traceweaver-core/skills/ce-code-review/SKILL.md` | `66a1da73677a5fe2e5d3e6292872a2375c697704353799adf0eaa7b3a9f947f9` | CE-derived code-review skill with TraceWeaver publication hold | Legacy/manual-continuity review only until wrapped; publication held. |
| `plugins/traceweaver-core/skills/ce-brainstorm/references/handoff.md` | `710d2c48567a4a57aa5e8aec6e70d3ad4089e201a95f3396bf0a16af052b8d76` | CE-derived brainstorm handoff patched to prefer TraceWeaver requirements authority before planning/work | Legacy/manual-continuity CE handoffs explicitly marked. |
| `plugins/traceweaver-core/skills/using-agent-skills/SKILL.md` | `7c658b4551214c7a8434b0d20aa8b32ff93b666dca8f6faa049bfb6761a2e1d0` | Meta-routing table for TraceWeaver-controlled work | Routes new work to `tw-auto` or TraceWeaver gates before raw CE skills. |
| `README.md` | `5bdb8c035a1fb7c2a1503b241adc94cf9fb226926f7f95f8d242ad89fdff97b2` | Root product docs | Static updated; review pending. |
| `traceability-matrix.md` | `e8feb99eb548662579f3df45903750aed1e81b90aaa69a14fde3d11da07a4b11` | Root traceability authority | Updated with behavior-bearing `tw-auto`, `lfg`, approved source-evidence `tw-grill`, direct callable install checks, no-publication smoke coverage, behavior-level verification gap, reviewer subagent capacity/backpressure coverage, code-review-passed/prior-doc-review-passed alpha evidence state, canonical baseline hash refresh, accepted narrow U7 static-advisory claim boundary, refreshed current install-smoke evidence, REQ-TW-048 amendment doc review passed, U9 Units 1-8 reviewed evidence, and U9 Unit 9 registry-shape/auth-boundary repair with refreshed behavior code review and authority doc review passed while real runtime invocation remains held. |
| `scripts/traceweaver-smoke-codex-host-registry` | `73f046143ae3f3b0815cb1032ee6a4c8ae6c75c9ca5754cb0cd2aebc48555813` | Read-only current Codex host-home filesystem registry probe | Held: current host is missing TraceWeaver-native direct callable `tw-*` entries and has unmarked/stale direct callable continuity entries. |
| `scripts/traceweaver-smoke-codex-separate-home-runtime` | `0c17c2eaba9e7f57acd8460881e0bd19b5981b3114d715ef3604edcae26661ed` | Separate Codex home install plus fresh exec registry probe, updated to require every Unit 9 required skill in the visible-skill list and hold live-auth-copy runtime results | Unit 9 records required skills visible and the exact sentinel, but runtime acceptance remains held by the copied-auth boundary; refreshed behavior code review and authority doc review passed. |
| `scripts/traceweaver-smoke-no-publication` | `9e14b7066ed0d6d7e55f82df106dff41db8d18eb0d59be88dd5748e73f9def40` | Negative smoke for alpha publication hold on executable PR support scripts, env-var bypass attempts, static skill stop markers, `lfg` delegation, and event-derived reviewer backpressure classification | Pass accepted for deterministic Unit 4 boundary scope; full skill runtime invocation remains held. |
| `docs/brainstorms/2026-05-01-traceweaver-ce-method-authority-correction.md` | `2ad22c4fde83fff9fcc996c59706d1665897ef1d69f78267bc3afdfb5ca327ff` | Pinned source record for CE-method wrapping and anti-drift correction | Source evidence recorded; review pending. |
| `docs/brainstorms/2026-05-01-traceweaver-grill-intent-deepening-requirements.md` | `63bc4ba5677ef411569f1663620a7ef4a0f7afefff654f11fc853c5f7e323c33` | Pinned source record for post-ideation intent deepening, bootstrap mode, and delta/gap mode | Source evidence recorded; review pending. |

## Static Checks

Observed static checks:

```sh
python3 -m json.tool plugins/traceweaver-core/.codex-plugin/plugin.json
python3 -m json.tool plugins/traceweaver-core/.claude-plugin/plugin.json
python3 -m json.tool plugins/traceweaver-core/.cursor-plugin/plugin.json
ruby -e 'require "yaml"; YAML.load_file("plugins/traceweaver-core/references/automation-loop-state-template.yml")'
ruby -e 'require "yaml"; YAML.load_file("plugins/traceweaver-core/references/intent-contract-template.yml")'
ruby -e 'require "yaml"; YAML.load_file("plugins/traceweaver-core/skills/tw-auto/references/automation-loop-state-template.yml")'
ruby -e 'require "yaml"; YAML.load_file("plugins/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml")'
test -f plugins/traceweaver-core/references/requirements-baseline-template.md
test -f plugins/traceweaver-core/references/intent-contract-template.yml
test -f plugins/traceweaver-core/skills/tw-auto/references/requirements-baseline-template.md
test -f plugins/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml
test -f plugins/traceweaver-core/skills/tw-grill/SKILL.md
test -f plugins/traceweaver-core/skills/tw-grill/references/upstream-notice.md
test -f src/index.ts
TEMP_CODEX_HOME="$(mktemp -d)"
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills --codexHome "$TEMP_CODEX_HOME"
scripts/traceweaver-smoke-no-publication
scripts/traceweaver-audit-plugin-scope
scripts/traceweaver-audit-ce-closure
git diff --check
python3 - "$TEMP_CODEX_HOME/.codex/agents/traceweaver-core" <<'PY'
import pathlib, sys, tomllib
root = pathlib.Path(sys.argv[1])
paths = sorted(root.glob("*.toml"))
if len(paths) != 49:
    raise SystemExit(f"agent_toml_count=fail expected=49 actual={len(paths)}")
if not (root / "ce-correctness-reviewer.toml").is_file():
    raise SystemExit("agent_identity_sample=missing ce-correctness-reviewer.toml")
for path in paths:
    tomllib.loads(path.read_text())
print(f"agent_toml_count={len(paths)}")
print("agent_toml_parse=pass")
print("agent_identity_sample=ce-correctness-reviewer.toml present")
PY
rm -rf "$TEMP_CODEX_HOME"
```

Result:

```text
json_parse_ok
yaml_parse_ok=plugins/traceweaver-core/references/automation-loop-state-template.yml
yaml_parse_ok=plugins/traceweaver-core/references/intent-contract-template.yml
yaml_parse_ok=plugins/traceweaver-core/skills/tw-auto/references/automation-loop-state-template.yml
yaml_parse_ok=plugins/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml
requirements_template_present=plugin_and_skill_local
intent_contract_template_present=plugin_and_skill_local
tw_grill_skill_present=plugin_skill
tw_grill_upstream_notice_present=skill_local_reference
repo_local_install_wrapper_present=src/index.ts
tw_auto_skill_resolution_policy=TraceWeaver-packaged dependencies required; external CE fallback held
install_exit=0
installed_skill_directory_count=27
installed_callable_skill_directory_count=27
installed_agent_toml_count=49
installed_reference_file_count=17
traceweaver-audit-plugin-scope: selected_files=122 packaged_ce_files=122 missing=none extra=none traceweaver_required_files=30 traceweaver_missing=none traceweaver_missing_hash_records=none hash_mismatches=none traceweaver_hash_mismatches=none
traceweaver-audit-ce-closure: skill_entrypoints=19 selected_ce_files_scanned=73 support_references_checked=53 missing=none untracked=none
traceweaver-smoke-no-publication: no_publication_smoke=pass reply_to_pr_thread_without_gate=blocked_before_gh resolve_pr_thread_without_gate=blocked_before_gh reply_to_pr_thread_env_bypass=blocked_before_gh resolve_pr_thread_env_bypass=blocked_before_gh skill_publication_stop_markers=present
direct_callable_conflict_check=pass: installer fails closed before overwriting an existing unowned `.codex/skills/ce-work` directory and preserves the original file content
git diff --check: pass
agent_toml_count=49
agent_toml_parse=pass
agent_identity_sample=ce-correctness-reviewer.toml present
```

Hygiene and overclaim scan:

```text
private_path_scan: no local user/cache/private repository paths in the new plugin files or evidence
plugin_metadata_defaultPrompt_scan: no local user/cache/private repository paths, prompt files, slash-command availability, clean-replacement, enforcing-mode, runtime-equivalence, autonomous publication, or release-ready approval claim found in plugins/traceweaver-core/.codex-plugin/plugin.json interface.defaultPrompt
held_claim_scan: no `tw-auto`/`lfg`/`tw-grill` slash-command, clean-replacement, enforcing-mode, runtime-equivalence, or autonomous publication approval claim found
```

## Review Evidence

Code review was run in-thread on 2026-05-01 and refreshed on 2026-05-02 for the
staged behavior-bearing package surface: `tw-auto`, `lfg`, `tw-grill`,
policy/templates, plugin manifests/default prompt, validation evidence,
traceability matrix updates, install wrapper, and selected CE-derived entrypoint
boundary text. The latest review findings were accepted as valid and patched in
this record. `/ce-code-review` was rerun clean on the tracked diff after the
blocker repairs, and `/ce-doc-review` was rerun clean on the final tracked alpha
evidence and matrix.

Observed code-review result:

```text
ce-code-review_result=passed_no_findings_after_blocker_repairs
review_date=2026-05-02
review_scope=tracked diff, including docs/validation/traceweaver-controlled-autonomy-alpha.md and traceability-matrix.md
finding_patched=P1 README install command must be copy-runnable from this repo
finding_patched=P1 install evidence must use the real documented command or a repo-local wrapper
finding_patched=P1 direct ce-work remains legacy/manual-continuity unless wrapped
finding_patched=P1 direct ce-plan remains legacy/manual-continuity unless wrapped
finding_patched=P2 full CE 3.4.1 authority wrapping is future scope, not this static alpha
finding_patched=P1 tw-auto path could reach raw CE publication through ce-work
finding_patched=P1 installer shim depended on mutable CE source checkout
finding_patched=P2 missing include-skills guard allowed partial installs
finding_patched=P2 ce-plan routed to uninstalled ce-proof
finding_patched=P2 using-agent-skills named unavailable upstream skills without packaged equivalents
finding_patched=P2 plugin-scope audit excluded TraceWeaver-native package surface
finding_patched=P2 authority bootstrap could write sensitive prompt material into tracked docs
finding_patched=P1 installer omitted selected CE agents
finding_patched=P1 no-publication mode still reached parallel commit paths
finding_patched=P1 packaged code review could still publish
finding_patched=P1 brainstorm handoff bypassed TraceWeaver requirements authority
finding_patched=P2 autonomy evidence hashes were stale
finding_patched=P1 packaged PR feedback resolver could still publish
finding_patched=P1 plan handoff bypassed TraceWeaver authority before work
finding_patched=P1 worktree helper copied local secrets into review worktrees
finding_patched=P1 candidate REQ-TW-048 was treated as accepted matrix authority
finding_patched=P2 compound refresh could auto-commit and open PRs
finding_patched=P2 CE closure audit was shallow
finding_patched=P2 U6b evidence recorded stale closure count
finding_patched=P1 review-pending matrix evidence was recorded as passed
finding_patched=P1 alpha and matrix next steps advanced to excluded U7 draft before tracked review blockers closed
finding_patched=P1 candidate REQ-TW-048 was still named as implementation authority in the full CE wrapping plan prerequisite
finding_patched=P1 PR feedback GraphQL failures could report success
finding_patched=P1 current Codex function_call_output errors were silently dropped by session error extraction
finding_patched=P2 current Codex function_call tools were omitted from session skeleton extraction
finding_patched=P2 PR feedback GraphQL pagination was truncated
review_outcome=no_findings
remaining_code_review_findings=none
```

Document review was refreshed after the code-review closure and produced one
stale-next-step finding. That finding was patched in this record. `/ce-doc-review`
was rerun clean on the final tracked alpha evidence and matrix. The May 2
authority-state `/ce-doc-review` was then rerun clean on the Intent Contract,
matrix, alpha evidence, and U7 record. That clean May 2 review remains prior
evidence only. It does not cover the later U9 Unit 1 evidence record, smoke
script, plan completion note, matrix hash cascade, or TRACE-TW-010 linkage.

The U9 Unit 1 authority-set `/ce-doc-review` on 2026-05-03 first returned P1
metadata findings. Those findings were patched, and the same authority set was
rerun clean. This accepts the isolated Unit 1 install/discovery smoke evidence
as reviewed U9 planning input only; host-registry discovery, runtime behavior,
release, enforcing, slash-command, publication, and clean-replacement claims
remain held.

U9 Unit 2 fixture workspace work then added synthetic fixture inputs and a
deterministic fixture smoke harness. That evidence is recorded as fixture-only
classification and temporary-copy write proof with clean doc review; it does not
promote host-registry discovery, real `tw-*` runtime invocation, or
project-level trace/matrix/gap/change/exception runtime write claims.

U9 Unit 3 gate-behavior work then extended the fixture smoke harness with
deterministic authority-gate, traceability-check, requirements-review, and
`tw-auto` missing-skill-resolution classifications. That evidence passed clean
doc review as fixture-scoped gate-behavior input only. A behavior-bearing
`/ce-code-review` finding then found that missing-skill-resolution coverage did
not include TraceWeaver-native dependencies; the harness was patched and the
code-review rerun passed with no findings. This does not promote host-registry
discovery, real `tw-*` runtime invocation, enforcing behavior, or project-level
trace, matrix, gap, change, or exception runtime write claims.

U9 Unit 4 boundary work then extended the isolated Codex discovery smoke and
no-publication smoke to prove installed/source `lfg` delegates to `tw-auto`,
blocks raw CE autopilot fallback, PR publication helper scripts stop before
external mutation, broader publication paths retain static stop markers, and
event-derived reviewer capacity backpressure is incomplete coverage that cannot
close required review, U9, runtime, or release gates. This Unit 4 evidence is
accepted only as deterministic boundary evidence after clean code and doc
review; host-registry discovery and runtime claims remain held.

Observed document-review result:

```text
ce-doc-review_result=prior_passed_no_findings_after_evidence_state_repairs_before_req_tw_048_two_mode_amendment
review_date=2026-05-02
review_scope=docs/validation/traceweaver-controlled-autonomy-alpha.md and traceability-matrix.md before REQ-TW-048 two-mode amendment
finding_patched=P2 stale Suggested Next Step re-ran clean code review instead of naming only the remaining doc-review gate
review_outcome=no_findings_for_prior_scope
current_req_tw_048_amendment_doc_review_status=passed_no_findings
current_req_tw_048_amendment_doc_review_id=CE-DOC-REVIEW-2026-05-04-REQ-TW-048-AMENDMENT-CLEAN-001
remaining_doc_review_findings=none_for_req_tw_048_amendment
current_authority_refresh_doc_review_result=prior_passed_no_findings_before_u9_unit1_authority_set
current_authority_refresh_doc_review_id=CE-DOC-REVIEW-2026-05-02-AUTHORITY-STATE-CLEAN-001
current_authority_refresh_doc_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u7-static-advisory-claims.md
current_authority_refresh_doc_review_coverage=main_thread_review_due_to_reviewer_subagent_capacity_backpressure_context
u9_unit1_authority_doc_review_result=passed_no_findings_after_metadata_repairs
u9_unit1_authority_doc_review_date=2026-05-03
u9_unit1_authority_doc_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT1-AUTHORITY-CLEAN-001
u9_unit1_authority_doc_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u9-codex-runtime-discovery.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md, scripts/traceweaver-smoke-codex-discovery
u9_unit1_authority_doc_review_findings=P1 stale Intent Contract review scope; P1 stale matrix effective review evidence; P1 stale alpha review evidence
u9_unit1_authority_doc_review_rerun_outcome=no_findings
u9_unit2_fixture_smoke_result=passed
u9_unit2_authority_review_status=passed_no_findings_after_allowed_use_and_plan_snapshot_repairs
u9_unit2_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT2-AUTHORITY-CLEAN-001
u9_unit2_authority_review_date=2026-05-03
u9_unit2_authority_review_scope=fixtures/u9-codex/, scripts/traceweaver-smoke-u9-fixtures, docs/validation/traceweaver-u9-codex-runtime-discovery.md, traceability-matrix.md, .traceweaver/intent-contract.yml, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
u9_unit2_authority_review_coverage=main_thread_review_only_no_reviewer_subagents
u9_unit2_accepted_scope=fixture classification and temporary-copy trace-write proof as reviewed U9 fixture input only
u9_unit3_gate_behavior_smoke_result=passed
u9_unit3_authority_review_status=passed_no_findings
u9_unit3_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT3-AUTHORITY-CLEAN-001
u9_unit3_authority_review_date=2026-05-03
u9_unit3_authority_review_scope=scripts/traceweaver-smoke-u9-fixtures, docs/validation/traceweaver-u9-codex-runtime-discovery.md, traceability-matrix.md, .traceweaver/intent-contract.yml, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
u9_unit3_authority_review_coverage=main_thread_review_only_no_reviewer_subagents
u9_unit3_accepted_scope=deterministic fixture gate-behavior classification as reviewed U9 fixture input only
u9_unit3_code_review_status=passed_no_findings_after_dependency_resolution_coverage_patch
u9_unit3_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT3-HARNESS-CLEAN-001
u9_unit3_code_review_scope=scripts/traceweaver-smoke-u9-fixtures
u9_unit3_code_review_finding_patched=P1 missing-skill smoke omits required tw-auto dependencies
u9_unit3_code_review_coverage=main_thread_review_only_no_reviewer_subagents
u9_unit3_code_review_accepted_scope=deterministic fixture gate-behavior classification as reviewed U9 fixture input only
u9_unit4_boundary_smoke_result=passed
u9_unit4_code_review_status=passed_no_findings_after_no_publication_backpressure_scope_patch
u9_unit4_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT4-HARNESS-CLEAN-001
u9_unit4_authority_review_status=passed_no_findings
u9_unit4_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT4-AUTHORITY-CLEAN-001
u9_unit4_authority_review_scope=scripts/traceweaver-smoke-codex-discovery, scripts/traceweaver-smoke-no-publication, docs/validation/traceweaver-u9-codex-runtime-discovery.md, traceability-matrix.md, .traceweaver/intent-contract.yml, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md
u9_unit4_accepted_scope=deterministic boundary evidence for lfg delegation, PR-helper stop-before-gh, static broader publication markers, and event-derived reviewer backpressure classification only
```

Current authority-state refresh:

```text
ce-code-review_result=passed_no_findings_on_current_reviewer_capacity_authority_diff
review_date=2026-05-02
review_scope=plugins/traceweaver-core/skills/tw-auto/SKILL.md, .traceweaver/intent-contract.yml, traceability-matrix.md
review_outcome=no_findings
ce-doc-review_result=prior_passed_no_findings_on_may2_authority_state_refresh
doc_review_id=CE-DOC-REVIEW-2026-05-02-AUTHORITY-STATE-CLEAN-001
doc_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u7-static-advisory-claims.md
u9_unit1_authority_review_result=passed_no_findings_after_2026-05-03_metadata_repairs
u9_unit1_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT1-AUTHORITY-CLEAN-001
u9_unit1_authority_review_scope=.traceweaver/intent-contract.yml, traceability-matrix.md, docs/validation/traceweaver-controlled-autonomy-alpha.md, docs/validation/traceweaver-u9-codex-runtime-discovery.md, docs/plans/2026-05-02-003-feat-u9-codex-runtime-discovery-proof-plan.md, scripts/traceweaver-smoke-codex-discovery
u9_unit2_fixture_smoke_result=passed
u9_unit2_authority_review_result=passed_no_findings_after_allowed_use_and_plan_snapshot_repairs
u9_unit2_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT2-AUTHORITY-CLEAN-001
u9_unit3_gate_behavior_smoke_result=passed_doc_review_passed
u9_unit3_authority_review_result=passed_no_findings
u9_unit3_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT3-AUTHORITY-CLEAN-001
u9_unit3_code_review_status=passed_no_findings_after_dependency_resolution_coverage_patch
u9_unit3_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT3-HARNESS-CLEAN-001
u9_unit4_boundary_smoke_result=passed_code_review_passed_doc_review_passed
u9_unit4_doc_review_gate=passed_no_findings
u9_unit4_code_review_gate=passed_no_findings_after_no_publication_backpressure_scope_patch
u9_unit5_host_registry_filesystem_probe_result=reviewed_held_missing_or_untrusted_direct_callable_files
u9_unit5_code_review_gate=passed_no_findings
u9_unit5_code_review_id=CE-CODE-REVIEW-2026-05-03-U9-UNIT5-HOST-REGISTRY-HARNESS-CLEAN-001
u9_unit5_authority_review_gate=passed_no_findings
u9_unit5_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT5-AUTHORITY-CLEAN-001
u9_unit5_accepted_scope=reviewed held host-home filesystem registry limitation evidence only
u9_unit7_host_install_attempt_result=blocked_unowned_direct_callable_conflicts_before_overwrite
u9_unit7_authority_review_gate=passed_no_findings
u9_unit7_authority_review_id=CE-DOC-REVIEW-2026-05-03-U9-UNIT7-AUTHORITY-CLEAN-001
u9_unit7_accepted_scope=reviewed held current-host install-conflict limitation evidence only
u9_unit8_separate_home_install_result=pass
u9_unit8_fresh_exec_registry_probe=held_skill_registry_visible_list_excludes_tw_authority_gate
u9_unit8_registry_loading_observation=held_tw_authority_gate_not_in_visible_skill_list
u9_unit8_review_status=code_review_passed_authority_doc_review_passed_reviewed_held
u9_unit8_code_review_id=CE-CODE-REVIEW-2026-05-04-U9-SEPARATE-HOME-HARNESS-CLEAN-002
u9_unit8_doc_review_id=CE-DOC-REVIEW-2026-05-04-U9-UNIT8-AUTHORITY-CLEAN-002
u9_unit8_accepted_scope=reviewed held separate-home install/fresh-exec registry limitation evidence only
u9_unit9_registry_shape_repair_status=auth_boundary_patch_code_review_passed_authority_doc_review_passed_runtime_held
u9_unit9_prompt_input_visibility=passed_required_traceweaver_and_wrapped_ce_skills_visible
u9_unit9_owned_legacy_active_surface=removed_on_upgrade
u9_unit9_unowned_legacy_active_surface=blocked_before_removal
u9_unit9_real_runtime_invocation=held_live_auth_copy_boundary_after_exact_skill_hash_sentinel
u9_unit9_code_review_gate=passed_no_findings_after_auth_boundary_patch
u9_unit9_code_review_id=CE-CODE-REVIEW-2026-05-04-U9-UNIT9-AUTH-BOUNDARY-HARNESS-CLEAN-001
u9_unit9_prior_code_review_id=CE-CODE-REVIEW-2026-05-04-U9-UNIT9-INSTALLER-HARNESS-CLEAN-001
u9_unit9_authority_review_gate=passed_no_findings
u9_unit9_authority_review_id=CE-DOC-REVIEW-2026-05-04-U9-UNIT9-AUTHORITY-CLEAN-001
u9_unit9_accepted_scope=reviewed held registry-shape/auth-boundary evidence only
remaining_runtime_gate=host_registry_discovery_real_tw_runtime_invocation_project_level_trace_write_behavior_and_release_claims_held
```

## Install Smoke Evidence

Observed isolated install smoke:

```sh
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills --codexHome <TEMP_CODEX_HOME>
```

The user-facing README command is the same command without the isolated Codex
home override:

```sh
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

The smoke used the repository-local `src/index.ts` self-contained Codex
installer. The installer does not delegate to a mutable Compound Engineering
source checkout. It used the same install arguments plus an isolated Codex home
flag so it did not modify the real user Codex home.

Observed result:

```text
install_exit=0
install_layout=packaged_traceweaver_copy_outside_active_skills_plus_direct_callable_codex_skill_directories
installed_skill_directory_count=27
installed_callable_skill_directory_count=27
installed_agent_toml_count=49
installed_reference_file_count=17
installed_agent_toml_parse=pass
installed_agent_identity_sample=ce-correctness-reviewer.toml present
installed_manifest=<TEMP_CODEX_HOME>/.codex/traceweaver-core/install-manifest.json
installed_manifest_json=parse_ok
installed_manifest_prompts=0
installed_manifest_references=17
installed_prompts_directory=absent
installed_prompt_files=0
prompt_surface=none_observed
installed_references_root=<TEMP_CODEX_HOME>/.codex/traceweaver-core/references
installed_callable_skills_root=<TEMP_CODEX_HOME>/.codex/skills
```

Selected installed paths checked:

```text
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/SKILL.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/lfg/SKILL.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-grill/SKILL.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-grill/references/upstream-notice.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/requirements-baseline-template.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/traceability-matrix-bootstrap-template.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/traceweaver-controlled-autonomy-policy.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/references/gap-template.yml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/references/change-template.yml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/references/exception-template.yml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/references/task-capsule-template.yml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/references/trace-record-template.yml
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/requirements-reviewer/SKILL.md
<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/systems-engineering-traceability/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/tw-auto/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/lfg/SKILL.md
<TEMP_CODEX_HOME>/.codex/skills/tw-grill/SKILL.md
```

Installed selected-path hashes:

```text
a65199ab5d447bd750bfae03251bc755452d35b424e6ba428f926e143f766de3  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/SKILL.md
a65199ab5d447bd750bfae03251bc755452d35b424e6ba428f926e143f766de3  <TEMP_CODEX_HOME>/.codex/skills/tw-auto/SKILL.md
ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/lfg/SKILL.md
ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083  <TEMP_CODEX_HOME>/.codex/skills/lfg/SKILL.md
666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-grill/SKILL.md
666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90  <TEMP_CODEX_HOME>/.codex/skills/tw-grill/SKILL.md
091702e556151a6eb6718a42159692adfc3925d3501951c45249ade1c46aea90  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-grill/references/upstream-notice.md
a0f413dfa8eb8223a6d171ca5f8ee58147255820a164cd392b7773039780aeda  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/requirements-baseline-template.md
ffe85511b70a8e0e676a41dd6ba4073b7603f64400a0c46b180afb0fe62436b2  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/intent-contract-template.yml
3986a0d2c999fdfcceddcc650f5d98dec6fc5f7119df5cdc04865e670fa56aa1  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/traceability-matrix-bootstrap-template.md
98e6f66a1f46013dd63e2e752068e6f3f48f0f7f41d18dcf9444630dd7ee30db  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/tw-auto/references/traceweaver-controlled-autonomy-policy.md
b41750bc73eaab76baf5f1146af8eba252ea80f4050c9dc5e3e891d00ed0dde4  <TEMP_CODEX_HOME>/.codex/traceweaver-core/references/gap-template.yml
39fd2d09bf0724555bbf8d6d59e007e29e2efa760d82418eea2df814ba364704  <TEMP_CODEX_HOME>/.codex/traceweaver-core/references/change-template.yml
c1b4a222b24d1fe806b20fe26f69d70276676664c74e95f4a18a27f0cf350683  <TEMP_CODEX_HOME>/.codex/traceweaver-core/references/exception-template.yml
cfb1358631783e351048d7ac8d99a2d6db31289f8305f980bb06f0edaea8b394  <TEMP_CODEX_HOME>/.codex/traceweaver-core/references/task-capsule-template.yml
e5aa489b16d696c3dca8ed18bb8e34ea981a366e1d8ea435e11439766a91659f  <TEMP_CODEX_HOME>/.codex/traceweaver-core/references/trace-record-template.yml
7c658b4551214c7a8434b0d20aa8b32ff93b666dca8f6faa049bfb6761a2e1d0  <TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/using-agent-skills/SKILL.md
```

Install-smoke decision:

| Check | Result |
| --- | --- |
| Documented command includes `--include-skills` | Pass |
| Missing `--include-skills` fails closed | Pass: installer exits nonzero with `TraceWeaver alpha installs require --include-skills so tw-auto and its templates are materialized.` |
| Existing unowned global callable skill directory fails closed | Pass: installer exits nonzero before overwriting an existing `.codex/skills/ce-work` directory that lacks the TraceWeaver install marker. |
| Isolated install command succeeds | Pass |
| `tw-auto`, `lfg`, and `tw-grill` install | Pass |
| `tw-auto`, `lfg`, and `tw-grill` direct callable directories install | Pass: direct copies were observed under `<TEMP_CODEX_HOME>/.codex/skills/` as well as the packaged TraceWeaver copy under `<TEMP_CODEX_HOME>/.codex/traceweaver-core/skills/`. |
| `tw-grill` upstream attribution notice installs | Pass |
| Skill-local requirements baseline, Intent Contract, matrix bootstrap, and policy templates install | Pass |
| Selected TraceWeaver runtime skills install | Pass |
| Prompt/command file surface remains absent; plugin metadata defaultPrompt is hygiene-scanned | Pass: installed manifest records `prompts: []`; no installed prompt directory or prompt files observed; `plugins/traceweaver-core/.codex-plugin/plugin.json` `interface.defaultPrompt` is present as plugin metadata and was scanned as prompt-like publication surface. |
| Dynamic runtime invocation | Held |
| Commit/push/PR automation | Held; executable PR reply/resolve support scripts are negative-smoked by `scripts/traceweaver-smoke-no-publication`, while full skill runtime invocation remains held. |

## Claim Boundaries

This record is a selected package-scope addition after U6b Unit 2. It does not
retroactively prove dynamic behavior or change the U6b dynamic/runtime held
claims.

`tw-auto`, `tw-grill`, and the `lfg` alias must stop before commit, push, or PR
creation in the alpha. The skills may recommend a next command or human
decision, but autonomous publication remains held.

## Stale Reset

Reset this record to `held` if any listed file changes without refreshed hashes
and review evidence; if plugin manifests or install behavior changes; if
skill-local `tw-auto` references are absent from the install; if `tw-grill` is
absent from the install or stops presenting output as source evidence only; if
the packaged requirements baseline or Intent Contract templates are absent or
drift without a refreshed hash; if packaged `lfg` stops delegating to `tw-auto`;
if plugin metadata `interface.defaultPrompt` drifts without refreshed
prompt-surface hygiene scan; if `tw-auto` stops requiring TraceWeaver-packaged
dependency resolution, the root
requirements baseline, root matrix, Intent Contract, authority gate, trace
update, severity policy, authority bootstrap, or stop-before-commit boundary; or
if docs claim runtime equivalence, clean CE replacement, slash commands,
enforcing mode, or release readiness before later gates approve those claims.

## Suggested Next Step

Refresh downstream task capsules and validation records with the promoted
REQ-TW-048 baseline hash before new work uses this authority set. Keep runtime
behavior, clean CE replacement, dynamic discovery, enforcing mode, slash
commands, and commit/push/PR automation held.
