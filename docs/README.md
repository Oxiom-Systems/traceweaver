# TraceWeaver Documentation

<!-- TRACEWEAVER: file-role=documentation-index; req=REQ-TW-015; trace=TRACE-TW-053; ver=VER-TW-068 -->
<!-- TRACEWEAVER: file-role=documentation-index; req=REQ-TW-021; trace=TRACE-TW-005; ver=VAL-TW-009 -->
<!-- TRACEWEAVER: file-role=documentation-index; req=REQ-TW-023; trace=TRACE-TW-046; ver=VAL-TW-011 -->

This is the deeper documentation entry point for TraceWeaver Core. The root
[README](../README.md) is intentionally short; use this page when you need the
full workflow, reference files, or proof trail.

## Start Here

| Need | Read |
| --- | --- |
| Watch the intro | [TraceWeaver prompt-to-proof video](https://youtu.be/Vtpzw_27tbo?si=I2Myn2EXu9TfXOdl) |
| Watch the setup walkthrough | [TraceWeaver setup video](https://youtu.be/7ZK5m8_VvZA?si=z-IZw-l5ChIbrA6C) |
| Understand the idea in a few minutes | [TraceWeaver: From Prompt To Proof](guides/traceweaver-from-prompt-to-proof.md) |
| See what the first authority files should contain | [Worked authority bootstrap example](guides/worked-authority-bootstrap-example.md) |
| Install, update, and use the plugin | [How to use TraceWeaver](guides/using-traceweaver.md) |
| Start a blank project safely | [Starting a new project](guides/starting-a-new-project-with-traceweaver.md) |
| Audit an existing project | [How to use TraceWeaver: Audit an existing codebase](guides/using-traceweaver.md#audit-an-existing-codebase) |
| Inspect the plugin package | [Plugin README](../plugins/traceweaver-core/README.md) |

## Workflow Docs

| Topic | Link |
| --- | --- |
| Quick start and first commands | [How to use TraceWeaver](guides/using-traceweaver.md#first-command) |
| Worked bootstrap file contents | [Worked authority bootstrap example](guides/worked-authority-bootstrap-example.md) |
| New project routing | [Starting a new project](guides/starting-a-new-project-with-traceweaver.md) |
| Normal TraceWeaver loop | [How to use TraceWeaver](guides/using-traceweaver.md#the-traceweaver-loop) |
| Authority files | [How to use TraceWeaver](guides/using-traceweaver.md#authority-files) |
| User-facing skills | [How to use TraceWeaver](guides/using-traceweaver.md#user-facing-skills) |
| Alpha boundaries | [How to use TraceWeaver](guides/using-traceweaver.md#alpha-boundaries) |

## Authority And Evidence

| Source | Role |
| --- | --- |
| [requirements.md](../requirements.md) | Controlled requirements baseline and stakeholder intent. |
| [traceability-matrix.md](../traceability-matrix.md) | Human-facing traceability matrix and evidence links. |
| [.traceweaver/intent-contract.yml](../.traceweaver/intent-contract.yml) | Active project authority contract, baseline hash, and held claims. |
| [Generated traceability dashboard](generated/traceability-dashboard.md) | Derived navigation view generated from the authority files. |
| [Validation records](validation/) | Review, smoke, release, and held-claim evidence records. |
| [Plans](plans/) | Reviewed implementation plans and scope decisions. |

## Maintainer Reference

| Area | Link |
| --- | --- |
| Release history | [Changelog](../CHANGELOG.md) |
| Distilled systems-engineering guides | [docs/distilled/](distilled/) |
| Brainstorm source evidence | [docs/brainstorms/](brainstorms/) |
| Generated graph and JSON views | [docs/generated/](generated/) |
| Upstream and source-pin notes | [docs/upstream/](upstream/) |

The matrix and Intent Contract remain the controlled sources for authority
state. Generated docs are for navigation and review convenience only.
