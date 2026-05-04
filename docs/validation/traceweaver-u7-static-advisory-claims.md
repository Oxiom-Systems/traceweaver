# TraceWeaver U7 Static Advisory Claim Record

Status: `STATIC_ADVISORY_CLAIMS_REQ_TW_048_AMENDMENT_DOC_REVIEW_PASSED_RUNTIME_HELD`

Date/session: 2026-05-02, `ce:work`, branch
`codex/traceweaver-u6-unblock-next`

Record ID: `TWCORE-U7-STATIC-ADVISORY-CLAIMS-2026-05-02-001`

Beads issue: `TraceWeaver-m4d`

Baseline:

- baseline ID: `REQ-BASELINE-2026-04-30-001`
- baseline hash:
  `6934da7234fe4b59057baebb3cd1ff8a6570b533776185e9a9e3572b617768ba`
- authority source: `requirements.md`, REQ-TW-019 through REQ-TW-022 and
  REQ-TW-033 through REQ-TW-048
- approved source: REQ-TW-048 for static/advisory `tw-grill` source evidence
- primary evidence: `docs/validation/traceweaver-controlled-autonomy-alpha.md`
- matrix authority: `traceability-matrix.md`

## Decision

This U7 record starts the narrow static/advisory claim gate for the
controlled-autonomy alpha package surface.

The claims below are recorded for review. They are not release-ready,
package-ready, upstream-ready, runtime-equivalent, clean-replacement,
slash-command, enforcing-mode, dynamic-discovery, or autonomous-publication
claims.

## Claim Table

| Claim ID | Surface | Claim | Evidence | State |
| --- | --- | --- | --- | --- |
| TW-CLAIM-U7-STATIC-001 | `tw-auto` | TraceWeaver Core statically materializes an advisory controlled-autonomy alpha skill named `tw-auto`, including skill-local authority templates, controlled-autonomy policy references, and reviewer subagent capacity/backpressure handling. | `docs/validation/traceweaver-controlled-autonomy-alpha.md`; refreshed installed-path evidence for `<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/tw-auto/SKILL.md` and direct callable `<TEMP_CODEX_HOME>/.codex/skills/tw-auto/SKILL.md`; current source and installed hash `a65199ab5d447bd750bfae03251bc755452d35b424e6ba428f926e143f766de3`. | Accepted static/advisory; prior authority refresh doc review passed |
| TW-CLAIM-U7-STATIC-002 | `lfg` | TraceWeaver Core statically materializes a compatibility alias named `lfg` that delegates to `tw-auto` and must not run raw CE autopilot directly. | `docs/validation/traceweaver-controlled-autonomy-alpha.md`; installed-path evidence for `<TEMP_CODEX_HOME>/.codex/skills/traceweaver-core/lfg/SKILL.md` and direct callable `<TEMP_CODEX_HOME>/.codex/skills/lfg/SKILL.md`; hash `ed542a61234d8e0cf062c07423ce02f75d31507626d495563af56ecdde52f083`. | Accepted static/advisory |
| TW-CLAIM-U7-STATIC-003 | README install command | In an isolated fresh Codex home, the documented Codex install command with `--codexHome <TEMP_CODEX_HOME>` materializes the selected TraceWeaver Core alpha skill surface, selected CE-compatible continuity skills, selected CE agent TOML files, and package references when run with `--include-skills`. Existing-home upgrade/conflict behavior remains outside this claim except for the separately recorded unowned direct-callable conflict smoke. | `docs/validation/traceweaver-controlled-autonomy-alpha.md`; `src/index.ts` hash `d0e45b8fcce859e2483867c6d0cdbde683595fe91684e295b40714fe4282ead5`; install manifest evidence recording 27 skills, 27 direct callable skill copies, 49 selected agent TOML files, and zero prompts. | Accepted isolated static/advisory install evidence |
| TW-CLAIM-U7-STATIC-004 | `tw-grill` | `tw-grill` is installed/static source-evidence support for idea and brainstorm flow, including bootstrap and delta/gap instructions. It is not implementation authority; accepted requirements and approved exceptions remain the only authority. | `docs/validation/traceweaver-controlled-autonomy-alpha.md`; refreshed installed-path evidence for namespaced and direct callable `tw-grill`; `requirements.md` approved REQ-TW-048; `traceability-matrix.md` rows; current source and installed hash `666420213f2a9df5b44d7212efeb621943413ace61c3b74c86f89b2c43e79c90`; `CE-DOC-REVIEW-2026-05-04-REQ-TW-048-AMENDMENT-CLEAN-001`. | Accepted static/advisory source evidence only; runtime and implementation-authority claims held |

## Held Claims

The following remain held:

- real `tw-auto` runtime invocation;
- real `lfg` alias runtime invocation;
- real `tw-grill` runtime invocation;
- default first-run/bootstrap acceptance;
- full CE-method wrapper sequencing;
- dynamic no-forced discovery;
- clean CE replacement;
- runtime-equivalent CE workflow behavior;
- slash-command or prompt availability;
- enforcing authority gate behavior;
- autonomous commit, push, PR, or release publication;
- package-ready, release-ready, or upstream-ready status;
- R31 real-project validation completion.

## Verification Summary

Observed evidence from `docs/validation/traceweaver-controlled-autonomy-alpha.md`:

```text
ce-code-review_result=passed_no_findings_after_blocker_repairs
ce-doc-review_result=passed_no_findings_after_evidence_state_repairs
current_authority_refresh_code_review_result=passed_no_findings_on_current_reviewer_capacity_authority_diff
current_authority_refresh_doc_review_result=prior_passed_no_findings_before_req_tw_048_two_mode_amendment
current_authority_refresh_doc_review_id=CE-DOC-REVIEW-2026-05-02-AUTHORITY-STATE-CLEAN-001
current_install_smoke_result=pass_current_tw_auto_and_tw_grill_hashes_materialized
json_parse_ok
yaml_parse_ok=plugin_and_skill_local_controlled_autonomy_templates
traceweaver-audit-plugin-scope=pass
traceweaver-audit-ce-closure=pass
traceweaver-smoke-no-publication=pass
isolated_install_smoke=pass
installed_manifest_prompts=0
installed_skill_directory_count=27
installed_callable_skill_directory_count=27
installed_agent_toml_count=49
agent_toml_count=49
agent_toml_parse=pass
agent_identity_sample=ce-correctness-reviewer.toml present
```

This U7 record passed `/ce-doc-review` with no findings on 2026-05-02 after the
baseline hash, installer hash, and upstream review evidence were refreshed
against the non-stale alpha evidence and matrix. That review applies to the
prior U7 static/advisory claim scope and does not promote the later amended
REQ-TW-048 two-mode `tw-grill` authority. The later reviewer-capacity authority
refresh has `/ce-code-review` passed and prior `/ce-doc-review` passed on the
Intent Contract, matrix, alpha evidence, and U7 record before the REQ-TW-048
two-mode amendment. The current install smoke proves the current `tw-auto` and
`tw-grill` hashes materialize through the installer, and
`CE-DOC-REVIEW-2026-05-04-REQ-TW-048-AMENDMENT-CLEAN-001` promotes REQ-TW-048
for static/advisory source-evidence behavior only.
TW-CLAIM-U7-STATIC-001 through TW-CLAIM-U7-STATIC-004 remain accepted only as
static/advisory claims, with runtime/U9 behavior still held until later runtime
evidence passes. `tw-grill` output remains source evidence; it is not
implementation authority. Runtime, release, clean-replacement, slash-command,
enforcing, autonomous-publication, and U9 claims remain held.

Observed U7 document-review result:

```text
ce-doc-review_result=prior_passed_no_findings_after_u7_evidence_refresh_before_req_tw_048_two_mode_amendment
review_date=2026-05-02
review_scope=prior U7 static/advisory claim record before REQ-TW-048 two-mode amendment
review_outcome=no_findings_for_prior_scope
current_req_tw_048_amendment_doc_review_status=passed_no_findings
current_req_tw_048_amendment_doc_review_id=CE-DOC-REVIEW-2026-05-04-REQ-TW-048-AMENDMENT-CLEAN-001
remaining_doc_review_findings=none_for_req_tw_048_amendment
```

## Stale Reset

Reset this record to `held` or `review_pending` if any referenced hash changes
without a refreshed evidence record; if `docs/validation/traceweaver-controlled-autonomy-alpha.md`
is reset to held; if `requirements.md`, `.traceweaver/intent-contract.yml`, or
`traceability-matrix.md` changes the authority status for REQ-TW-019 through
REQ-TW-022 or REQ-TW-033 through REQ-TW-047; if `tw-auto`, `lfg`, or install
behavior drifts; if `tw-grill` output is treated as implementation authority;
or if any public artifact claims runtime equivalence,
clean replacement, slash-command availability, enforcing mode, package-ready,
release-ready, upstream-ready, or autonomous publication status.

## Suggested Next Step

Refresh downstream task capsules and validation records with the promoted
REQ-TW-048 baseline hash before new work uses this authority set. Do not start
U9 runtime claims until runtime validation scope and evidence are explicitly
planned and reviewed.
