# TraceWeaver Core

<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-015; trace=TRACE-TW-004; ver=VAL-TW-006 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-016; trace=TRACE-TW-010; ver=VAL-TW-006 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-020; trace=TRACE-TW-006; ver=VAL-TW-008 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-021; trace=TRACE-TW-005; ver=VAL-TW-009 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-023; trace=TRACE-TW-046; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-041; trace=TRACE-TW-010; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-043; trace=TRACE-TW-010; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-065; trace=TRACE-TW-048; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-root-readme; req=REQ-TW-068; trace=TRACE-TW-054; ver=VAL-TW-016 -->

TraceWeaver keeps coding-agent work tied to intent, approved authority,
verification evidence, validation questions, and explicit held claims.

Use it when you want Codex, Claude Code, or other agent tools to move quickly
without losing the proof behind what changed, why it changed, and whether it is
ready to publish.

Current release: TraceWeaver Core `0.2.5` is an alpha advisory plugin for Codex
and Claude Code. Antigravity support is limited to static local
install/discovery metadata. Runtime-driver binding, enforcing mode, clean CE
replacement, slash-command support, unconstrained-host support, and autonomous
publication remain held until separate evidence gates pass.

## Get Started

### Codex

Add or refresh the marketplace, then install `traceweaver-core` from the Codex
plugin UI:

```sh
codex plugin marketplace add Oxiom-Systems/traceweaver
codex plugin marketplace upgrade traceweaver
```

For a pinned local alpha install:

```sh
git clone --branch traceweaver-core--v0.2.5 --depth 1 git@github.com:Oxiom-Systems/traceweaver.git
cd traceweaver
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

### Claude Code

Add or refresh the marketplace, install the plugin, then reload plugins:

```sh
claude plugin marketplace add Oxiom-Systems/traceweaver
claude plugin install traceweaver-core@traceweaver
claude plugin marketplace update traceweaver
claude plugin update traceweaver-core@traceweaver
```

```text
/reload-plugins
```

### First Command

Blank project:

```text
tw-auto "bootstrap TraceWeaver authority for this project"
```

Existing codebase:

```text
tw-audit "audit this project for requirements authority, code traces, verification evidence, validation evidence, dark code, orphaned code, duplicate behavior, and lost intent. Report candidate findings only; do not remove or rewrite anything."
```

Approved change:

```text
tw-auto "implement the approved plan"
```

## What It Does

TraceWeaver makes the chain of work visible:

```text
stakeholder intent
-> reviewed requirement or approved exception
-> bounded agent task
-> implementation
-> verification evidence
-> validation question
-> shipped claim or held claim
```

The practical rule is simple: meaningful behavior must trace to approved
authority and verification evidence before it is implemented, approved,
published, or shipped.

TraceWeaver expects these project authority files:

| File | Purpose |
| --- | --- |
| `requirements.md` | Stakeholder intent, approved requirements, verification methods, validation questions, and status. |
| `traceability-matrix.md` | Links needs, requirements, implementation, tests, evidence, validation, gaps, and held claims. |
| `.traceweaver/intent-contract.yml` | Current project authority contract: baseline hash, approved scope, active gate, and held claims. |
| `.traceweaver/trace-records/` | Evidence records for tasks, reviews, audits, validation runs, and held conditions. |

## Documentation

Start with the docs landing page:

- [Documentation index](docs/README.md)
- [How to use TraceWeaver](docs/guides/using-traceweaver.md)
- [Starting a new project](docs/guides/starting-a-new-project-with-traceweaver.md)
- [TraceWeaver: From Prompt To Proof](docs/guides/traceweaver-from-prompt-to-proof.md)

Reference material:

- [Plugin README](plugins/traceweaver-core/README.md)
- [Requirements baseline](requirements.md)
- [Traceability matrix](traceability-matrix.md)
- [Generated traceability dashboard](docs/generated/traceability-dashboard.md)
- [Validation records](docs/validation/)
- [Changelog](CHANGELOG.md)

## Normal Workflow

| Situation | Use |
| --- | --- |
| Unsure where to start | `tw-auto "describe the goal"` |
| Candidate requirements or acceptance criteria exist | `tw-requirements-review` |
| Approved work needs a plan | `tw-plan` |
| Approved plan needs code or docs changed | `tw-work` |
| Existing repo needs dark-code or lost-intent audit | `tw-audit` |
| Bug, regression, failing test, or incident | `tw-debug` |
| Behavior-bearing files changed | `tw-code-review` |
| Requirements, plans, matrix, Intent Contract, or evidence changed | `tw-doc-review` |
| Commit, push, or PR is requested | `tw-commit-push-pr` |
| Learning should be captured | `tw-compound` |

Every TraceWeaver task should end with the next wrapper, review, evidence
record, held condition, or human decision.

## Alpha Boundaries

Available now:

- installable TraceWeaver Core metadata for Codex and Claude Code;
- TraceWeaver-owned `tw-*` skills and the `lfg` compatibility alias;
- file-based authority, traceability, verification, validation, and held-claim
  records;
- advisory use for requirements review, planning, work handoffs, audits,
  traceability checks, and controlled review.

Held until separate evidence gates pass:

- full `tw-auto` runtime-driver decision binding;
- release-ready, package-ready, and upstream-ready claims;
- clean CE replacement as a release claim;
- enforcing mode;
- slash-command support;
- unconstrained-host support;
- autonomous publication;
- automatic removal, merge, or deprecation authority for audit findings.

## Repository Map

| Path | Purpose |
| --- | --- |
| `plugins/traceweaver-core/` | Installable TraceWeaver Core alpha plugin source. |
| `docs/guides/` | User-facing guides. |
| `docs/validation/` | Review records, install/runtime observations, smoke evidence, and held-claim records. |
| `docs/generated/` | Derived traceability views; the matrix remains authoritative. |
| `fixtures/` | Deterministic proof fixtures. |
| `scripts/traceweaver-smoke-*` | Reproducible smoke checks for the reviewed alpha surface. |

Gate types: smoke scripts under `scripts/` are mechanical checks with pass/fail
exit codes. Requirements-quality scores, review records, audits, and `tw-*`
skill judgments are advisory in alpha; they prepare evidence but do not
mechanically block anything.
