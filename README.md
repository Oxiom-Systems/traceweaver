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
<!-- TRACEWEAVER: file-role=v050-shadow-governance-public-guide; req=REQ-TW-122; trace=TRACE-TW-072; ver=VER-TW-092; val=VAL-TW-040 -->

TraceWeaver keeps coding-agent work tied to intent, approved authority,
verification evidence, validation questions, and explicit held claims.

Use it when you want Codex, Claude Code, or other agent tools to move quickly
without losing the proof behind what changed, why it changed, and whether it is
ready to publish.

TraceWeaver Core `0.5.0` is an alpha advisory release candidate for Codex and
Claude Code. It adds inspectable shadow model/context governance while the
existing v1 dispatch remains authoritative. Antigravity support remains
limited to static local install/discovery metadata.

## Intro Video

<a href="https://youtu.be/Vtpzw_27tbo?si=I2Myn2EXu9TfXOdl">
  <img src="https://img.youtube.com/vi/Vtpzw_27tbo/hqdefault.jpg" alt="TraceWeaver prompt-to-proof workflow for AI coding agents" width="640">
</a>

Watch the intro: how TraceWeaver moves agent work from prompt to proof without
turning assumptions into authority.

## Why It Exists

The failure mode is familiar: someone asks an agent to "add export", the agent
builds a CSV path, tests pass, and the change looks complete. Later the team
discovers the stakeholder meant monthly invoice totals, while the agent assumed
an admin export of every customer field. The code works, but the authority for
the behavior was never visible.

TraceWeaver calls that missing link proof of authority. For meaningful work,
the agent should be able to point at the stakeholder intent, approved
requirement or approved exception, verification method, validation question,
and current baseline before treating the work as ready.

## Get Started

### Setup Video

<a href="https://youtu.be/7ZK5m8_VvZA?si=z-IZw-l5ChIbrA6C">
  <img src="https://img.youtube.com/vi/7ZK5m8_VvZA/hqdefault.jpg" alt="TraceWeaver setup guide: install, bootstrap, and run the first cycle" width="640">
</a>

Watch the setup guide: install TraceWeaver, bootstrap authority, and run the
first controlled cycle.

### Codex

Add or refresh the marketplace, then install `traceweaver-core` from the Codex
plugin UI:

```sh
codex plugin marketplace add Oxiom-Systems/traceweaver
codex plugin marketplace upgrade traceweaver
```

After the 0.5.0 GitHub Release is published, for a pinned local alpha install:

```sh
git clone --branch traceweaver-core--v0.5.0 --depth 1 git@github.com:Oxiom-Systems/traceweaver.git
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

If the project has no authority files yet, bootstrap mode is expected to draft
them and stop for review. That stop is not a failure; it is the guardrail that
keeps a prompt from becoming implementation authority by accident. See the
[worked bootstrap example](docs/guides/worked-authority-bootstrap-example.md)
for the minimum file shape.

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

Use the [worked bootstrap example](docs/guides/worked-authority-bootstrap-example.md)
when you want to see what belongs in the first three files before reading the
full reference templates.

## What's New in 0.5.0

TraceWeaver Core 0.5.0 adds a deterministic, inspectable, shadow-only
model-context map and compiler. The map keeps model role, risk effort, packet
budget, and context completeness independent and gives every declared
TraceWeaver route a stable record beside the existing Skill Execution
Contract.

The B0--B3 packet budgets are experimental, revision-controlled hypotheses;
they are not proof that a packet is sufficient, cheaper, or quality-equivalent.
The compiler selects the lowest structurally eligible hypothesis at or above
the authorized route floor, or returns an exact hold without truncating or
dropping required sources. V1 remains authoritative and the shadow compiler
cannot dispatch a model, change a v1 receipt, or publish work.

Shadow plan and final decisions use separate canonical receipts, leaving v1
resolver, native-child, terminal, and review-series receipt schemas and bytes
unchanged. Installation is one recoverable package transaction whose rollback
restores the prior touched projection's bytes and executable modes after a
failure.

Active routing, descendant enforcement, served-model attestation, token savings, token sufficiency, quality equivalence, and provider replay qualification remain held.
Active cutover is disabled and requires a future owner decision; it is not a
0.5.0 release prerequisite.

The 0.5.0 package retains the deterministic 0.4.0 control-plane foundations:

- generated JSON is deterministic across supported runtimes, and review series
  persist within their bounded convergence budget, reusing an accepted review
  when its semantic identity is unchanged;
- every callable `tw-*` skill and the `lfg` alias has a deterministic Skill
  Execution Contract, including explicit authority, verification, validation,
  and no-publication boundaries;
- native Codex work keeps Sol on the coordinating route and explicitly requests
  Terra children with risk-selected effort. Receipts honestly distinguish the
  requested model from an independently attested served model; no attestation
  means `served_model: unattested` and remains held;
- `tw-graph` provides provider-independent duplicate, impact, path, related,
  search, and freshness operations over derived repository relationships.
  Graphify remains optional enrichment, never a dependency or authority source;
- static semantic-HTML templates and a deterministic derived preview improve
  navigation while Markdown and YAML remain canonical authority; and
- a bounded, read-only Vestro and Air Router validation route records consumer
  evidence without changing consumer repositories or invoking live services.

### 0.5.0 Quick Start

After installing 0.5.0, inspect the packaged
`references/model-context-map.yml` and `references/workflow-profile-template.yml`
before treating a budget recommendation as meaningful. In a source checkout,
run the complete deterministic acceptance smoke:

```sh
plugins/traceweaver-core/skills/tw-auto/scripts/traceweaver-generate-model-context-map --root .
scripts/traceweaver-smoke-model-context-routing
```

See [How To Use TraceWeaver](docs/guides/using-traceweaver.md#inspect-050-shadow-modelcontext-governance)
for an explicit advisory-compile example. Its fixture manifest is illustrative,
and its output is a separate shadow receipt rather than a v1 dispatch.

The existing graph remains useful before falling back to repository-wide
search:

```text
tw-graph status
tw-graph search REQ-TW-088
tw-graph duplicate-candidate <candidate-or-identifier>
tw-graph impact <canonical-source-locator>
tw-graph path <from-id> <to-id>
tw-graph check
```

Use callable skills normally; their deterministic Skill Execution Contracts
make the required inputs, requested/served-model receipt fields, evidence, and
held boundaries inspectable rather than inferred. The contract index and exact
artifact locations are supplied by the integrated 0.5.0 package.

### Compatibility and Migration

- Existing `requirements.md`, `traceability-matrix.md`, and
  `.traceweaver/intent-contract.yml` remain canonical. Do not promote a
  generated HTML preview into an authority file.
- Canonical filenames are case-sensitive across Git hosts. Existing projects
  that track `REQUIREMENTS.md` must perform an explicit, reviewed case-only
  rename to `requirements.md`; 0.5.0 will not silently reinterpret or rename
  an authority source.
- Existing Graphify users can retain it as optional context; 0.5.0 neither
  installs Graphify nor uses it to satisfy `tw-graph` freshness.
- Existing workflows remain advisory. 0.5.0 does not add active enforcement,
  live consumer-runtime validation, independent served-model attestation, or
  autonomous publication by documentation alone.
- One integrated 0.5.0 candidate replaces the historical 0.4.0 PR1/PR2
  prerequisite shape. A bounded same-version recovery can resume publication
  only while the `0.5.0` tag is absent. After the tag exists,
  ordinary same-version pushes are successful no-ops.
- The committed release receipt covers a deterministic fixed file set rather
  than predicting its own future commit. After merge, the serialized workflow
  waits for smoke and CodeQL to pass on the exact checked-out `main` SHA,
  rejects tag conflicts, and attaches a runtime receipt to the GitHub Release.

## Documentation

This README is the short entry point. The complete docs live under
[`docs/`](docs/README.md):

- [Documentation index](docs/README.md)
- [Worked authority bootstrap example](docs/guides/worked-authority-bootstrap-example.md)
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
