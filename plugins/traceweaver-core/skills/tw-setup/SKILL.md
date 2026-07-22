---
name: tw-setup
description: Advisory local setup and project-bootstrap wrapper. It preserves project instructions and makes only project-local, explicitly requested changes.
argument-hint: "[setup check, environment issue, or tool diagnostic]"
---

<!-- TRACEWEAVER: file-role=setup-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Setup

## Purpose

Use `tw-setup` for local diagnostics and deterministic project bootstrap. The
bootstrap helper creates project-local contract files; it does not change global
host configuration or claim a host automatically loads them.

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
5. Record Luna availability, choice, rationale, and consequence. Luna is only
   eligible with native child dispatch; otherwise record one
   `luna_dispatch_unavailable` receipt and Terra fallback without investigation.

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
