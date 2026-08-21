---
name: tw-setup
description: Advisory local setup and project-bootstrap wrapper. It preserves project instructions and makes only project-local, explicitly requested changes.
argument-hint: "[setup check, environment issue, or tool diagnostic]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-setup`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=setup-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->
<!-- TRACEWEAVER: file-role=optional-graphify-setup-route; req=REQ-TW-089; trace=TRACE-TW-064; ver=VER-TW-084 -->
<!-- TRACEWEAVER: entrypoint=graphify_setup_detection; req=REQ-TW-090; trace=TRACE-TW-064; ver=VER-TW-084 -->

# TraceWeaver Setup

## Purpose

Use `tw-setup` for local diagnostics and deterministic project bootstrap. The
bootstrap helper creates project-local contract files; it does not change global
host configuration or claim a host automatically loads them.

## Native Child Routing

Before any TraceWeaver-owned native Codex child call, run the packaged sibling
`tw-auto/scripts/traceweaver-route-native-child` against the canonical workflow-
profile contract. Use only its explicit dispatch parameters and finalize its
receipt with independent host/execution attestation. A held route makes child
output ineligible; never inherit a model or silently fall back.

## Required Inputs

Before bootstrap, require a project root, explicit owner authorization before
creating missing authority drafts, and an explicit host-activation choice before
adding a managed project pointer.

## Workflow

1. Run `scripts/traceweaver-bootstrap-project --root <project-root>`.
2. Add `--owner-authorized` only to create absent draft `requirements.md`,
   `traceability-matrix.md`, and Intent Contract artifacts; never overwrite
   existing authority or instructions.
3. Add `--host-activation managed` only after an explicit local-host choice.
   It may append a project-local `AGENTS.md` pointer but never changes global
   host configuration. Without fresh-task proof report
   `template_manual_launch_only`.
4. The master is read-only. A named role needs a delegation capsule and is
   limited to builder, verifier, reviewer, deployer, dogfooder, or registrar.
   Roleless children are denied.
5. Record the central adapter's capability evidence and receipt. If its planned
   route is held, do not dispatch a child or attempt another model. If the host
   cannot independently attest the served model, retain the unattested hold and
   keep formal evidence on the main route.

## Optional Graphify Setup

At repository setup or diagnostics, run `command -v graphify`. When it is
available, locate the packaged sibling
`tw-auto/scripts/traceweaver-graphify-advisory` helper and run:

```sh
<skills-root>/tw-auto/scripts/traceweaver-graphify-advisory initialize --root <project-root>
```

When it is absent, record `graphify_status=not_installed`, recommend installing
Graphify for optional repository relationship context, and continue the normal
setup workflow. When initialization fails, record `graphify_status=degraded`
and continue from repository sources. Graphify output is derived and is not authority.

## Boundaries

- Do not overwrite `AGENTS.md`, `CLAUDE.md`, Cursor instructions, or authority.
- Deployment and Chrome dogfood require separate explicit permissions/receipts;
  bootstrap performs neither.
- Do not commit, push, publish, install credentials, mutate remote services, or
  claim automatic activation/runtime proof.

## Output

Return the project-local files created or conflict-held, authority-draft state,
role state, model-routing receipt, separate deployment/dogfood state, and host
claim boundary.
When all three authority roots exist—or are created with explicit owner
authorization—bootstrap must invoke the packaged `tw-graph` refresh once and
leave both a queryable local projection and a tracked freshness receipt. It
must not install a Git or host hook. If authority roots are absent, report the
graph bootstrap hold without blocking the rest of the advisory setup output.
