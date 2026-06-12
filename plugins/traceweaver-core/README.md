# TraceWeaver Core Plugin

<!-- TRACEWEAVER: file-role=plugin-readme; req=REQ-TW-052; trace=TRACE-TW-036; ver=VER-TW-046 -->
<!-- TRACEWEAVER: file-role=strategy-ideation-plugin-readme; req=REQ-TW-064; trace=TRACE-TW-047; ver=VER-TW-060 -->
<!-- TRACEWEAVER: file-role=plugin-readme; req=REQ-TW-068; trace=TRACE-TW-054; ver=VAL-TW-016 -->

TraceWeaver Core adds systems-engineering authority control to agentic software
work. This alpha plugin wires requirement quality, traceability checks, and
selected CE-compatible workflow surfaces into planning, implementation, and
review handoffs.

TraceWeaver preserves intent, authority, and traceability as agents move from
stakeholder needs to requirements, plans, code, tests, and release decisions.
Agents may help create requirements, plans, code, tests, and evidence, but they
may not silently promote their own interpretation into authority.

The controlled chain is:

```text
stakeholder intent
-> captured needs
-> reviewed requirements
-> approved authority or approved exception
-> implementation
-> verification
-> validation
-> change control
```

Alpha behavior is advisory: missing authority, weak requirements, untraced
behavior, and validation gaps should be recorded as warnings, gaps, exceptions,
or held claims rather than silently accepted as implementation authority.

## Runtime Scope

Runtime scope: `light-v0.1-authority-traceability`

Plugin version: `0.2.4`

Included skills:

- `requirements-reviewer`
- `systems-engineering-traceability`
- `using-agent-skills` selected routing context
- `tw-requirements-review`
- `tw-strategy`
- `tw-ideate`
- `tw-grill`
- `tw-authority-gate`
- `tw-audit`
- `tw-traceability-check`
- `tw-auto`
- `tw-plan`
- `tw-work`
- `tw-brainstorm`
- `tw-debug`
- `tw-code-review`
- `tw-doc-review`
- `tw-compound`
- `tw-compound-refresh`
- `tw-commit`
- `tw-commit-push-pr`
- `tw-resolve-pr-feedback`
- `tw-sessions`
- `tw-test-browser`
- `tw-test-xcode`
- `tw-setup`
- `tw-worktree`
- `tw-update`
- selected CE-compatible workflow skills refreshed from Compound Engineering
  `3.12.0`, including `ce-strategy`, `ce-ideate`, `ce-brainstorm`,
  `ce-plan`, `ce-work`, `ce-code-review`, `ce-doc-review`, `ce-compound`,
  `ce-resolve-pr-feedback`, `ce-commit`, `ce-commit-push-pr`,
  `ce-compound-refresh`, `ce-sessions`, `ce-test-browser`, `ce-test-xcode`,
  `ce-worktree`, `ce-setup`, `ce-debug`, and `lfg`

Included references:

- `references/requirements-and-vv-guide.md`
- `references/requirements-baseline-template.md`
- `references/risk-gap-and-change-control-guide.md`
- `references/systems-engineering-traceability-operating-model.md`
- `references/traceability-matrix-template.md`
- `references/intent-contract-template.yml`
- `references/authority-baseline-template.yml`
- `references/task-capsule-template.yml`
- `references/trace-record-template.yml`
- `references/gap-template.yml`
- `references/change-template.yml`
- `references/exception-template.yml`
- `references/traceweaver-runtime-policy.md`
- `references/traceweaver-controlled-autonomy-policy.md`
- `references/automation-loop-state-template.yml`
- `references/traceability-matrix-bootstrap-template.md`
- `references/ce-upstream-source-inventory.md`

Selected references are also packaged under their owning skill directories so
skill-local reference loading works in Codex converter installs. In particular,
the requirements baseline template, controlled-autonomy policy, loop-state
template, Intent Contract template, and bootstrap matrix template are also under
`skills/tw-auto/references/`.

Not included yet:

- full Core 11 runtime suite
- proven agent-backed CE runtime behavior
- package-ready or release-ready claims
- upstream-ready claims
- dynamic no-forced discovery proof
- slash-command or prompt surfaces
- clean CE replacement proof
- R31 release validation

## Standalone Packaging Boundary

This alpha can be installed and tested as a standalone TraceWeaver package
without the external Compound Engineering plugin. The accepted standalone proof
covers:

- fresh CE-absent Codex install/discovery;
- TW-only direct-callable user skill surface;
- selected CE-derived skills packaged as internal implementation components;
- unowned direct `ce-*` callable conflict rejection before install writes;
- active-host filesystem/hash currentness for the reviewed surface;
- runtime-disabled separate-home smoke and model-default policy checks.

This does not approve package-ready, release-ready, upstream-ready, clean
replacement, unconstrained-host, or full runtime-driver claims. The opt-in
runtime harness currently proves prompt-registry visibility, installed skill
identity, controlled fixture outcomes, unresolved-mapping evidence, and
no-publication boundaries. It still holds the stronger claim that loaded
`tw-auto` itself drove every runtime handoff decision.

Before any public package/release claim, rerun the standalone install smokes,
review the staged package surface, complete or explicitly hold R31/Vestro
dogfood evidence, and keep full runtime-driver invocation held unless a later
reviewed proof binds runtime handoff decisions to the loaded `tw-auto` skill
identity.

## Marketplace Updates

Codex marketplace:

```sh
codex plugin marketplace add Oxiom-Systems/traceweaver
codex plugin marketplace upgrade traceweaver
```

Claude Code marketplace:

```sh
claude plugin marketplace add Oxiom-Systems/traceweaver
claude plugin install traceweaver-core@traceweaver
claude plugin marketplace update traceweaver
claude plugin update traceweaver-core@traceweaver
```

Claude Code uses the plugin manifest version as the update cache key for this
package. Bump every peer plugin manifest carried by the release:

- `plugins/traceweaver-core/.codex-plugin/plugin.json`
- `plugins/traceweaver-core/.claude-plugin/plugin.json`
- `plugins/traceweaver-core/.antigravity-plugin/plugin.json`
- `plugins/traceweaver-core/.cursor-plugin/plugin.json`

Release tags should use the Claude Code plugin tag convention:
`traceweaver-core--v0.2.4`.

Tagging and the GitHub Release are automated: when a commit that bumps the
plugin version lands on `main`, the `Release on version bump` workflow
(`.github/workflows/release-on-version-bump.yml`) creates the
`traceweaver-core--v<version>` tag and a matching GitHub Release using the
`CHANGELOG.md` section for that version. The job is idempotent, so non-version
commits do not produce a release. Bumping the manifests and CHANGELOG is the
only manual step.

## Skill Entry Points

- `tw-requirements-review` checks whether candidate
  requirements are good enough to become implementation authority.
- `tw-strategy` wraps packaged `ce-strategy` so `STRATEGY.md` remains
  grounding and source evidence, not implementation authority.
- `tw-ideate` wraps packaged `ce-ideate` so generated and ranked ideas remain
  source evidence before grilling, brainstorming, or requirements review.
- `tw-grill` optionally stress-tests one selected idea after ideation and before
  `tw-brainstorm`; it produces source evidence only, not approved authority.
- `tw-authority-gate` checks whether planned work has approved
  authority before implementation starts.
- `tw-audit` audits a project, branch, or closure claim for authority, traces,
  verification evidence, validation or acceptance evidence, generated-view
  drift, and candidate dark behavior without granting cleanup or publication
  authority.
- `tw-traceability-check` checks whether behavior traces to
  approved authority, implementation, test-first verification, and validation
  evidence.
- `tw-auto` runs the advisory controlled-autonomy loop: CE-compatible
  plan/work/review sequencing plus TraceWeaver authority, traceability,
  test-first verification, matrix-update, and next-step controls.
- `tw-plan` wraps the packaged `ce-plan` planning engine with TraceWeaver
  authority, requirements-quality, traceability, and no-publication controls.
- `tw-brainstorm` wraps packaged `ce-brainstorm` so vague ideas and requirement
  source material enter TraceWeaver as source evidence before
  `tw-requirements-review`.
- `tw-compound` and `tw-compound-refresh` wrap packaged CE learning capture and
  refresh workflows as source evidence, not authority rewrites.
- `tw-sessions` wraps packaged `ce-sessions`; the older CE 3.5.0
  `ce-session-inventory` and `ce-session-extract` split helpers are not part of
  the selected 3.12.0 package surface.
- `tw-test-browser` and `tw-test-xcode` wrap packaged verification engines and
  require requirement/trace/verification context for gate-closing evidence.
- `tw-resolve-pr-feedback`, `tw-setup`, and `tw-worktree` wrap local repair,
  setup, and worktree workflows while remote mutation and publication stay
  routed through controlled TraceWeaver gates.
- `lfg` is packaged as a compatibility alias for `tw-auto`, not as raw CE
  autopilot.

This alpha installs skills, not slash commands. Slash-command or prompt
surfaces require a later package record that adds command/prompt files and
proves they install.

`tw-auto` is a skill entrypoint, not a slash command. It must stop before commit,
push, or PR creation in this alpha and report the next review, evidence, or
human authority step.

The selected CE-compatible skills are packaged under TraceWeaver's internal
plugin skill store for wrapper delegation. They are not installed as the normal
user-facing direct-callable surface in standalone Codex installs. Users should
enter through the `tw-*` wrappers or the approved `lfg` alias. Runtime-equivalent
CE replacement and agent-backed behavior remain held until U9 or later runtime
proof.

## CE Static Continuity Rule

TraceWeaver is intended to be a standalone plugin based on the selected Compound
Engineering workflow surface. Selected `ce-*` skills are packaged as
CE-compatible implementation components, while TraceWeaver entrypoints provide
the authority, traceability, verification, validation, and next-step control
layer.

The standalone package does not require the external Compound Engineering
plugin to be installed. The selected CE-derived skills in this package are
TraceWeaver-owned implementation components and are installed from
`plugins/traceweaver-core/skills/` into TraceWeaver's packaged internal skill
store. Standalone Codex installs expose only TraceWeaver wrappers and approved
TraceWeaver aliases as direct-callable user skills.

The product goal is to repackage the CE method with TraceWeaver authority, not
to ask users to manually juggle unrelated CE and TraceWeaver skills. The simple
CE progression remains: idea, brainstorm, plan, work, review, and compound
learning. TraceWeaver adds the systems-engineering controls that keep those
steps tied to stakeholder intent, reviewed requirements, the Intent Contract,
the traceability matrix, verification evidence, validation questions, and
change control.

Every TraceWeaver-wrapped CE step should make missing authority visible. If a
plan, code change, skill behavior, command, script, function, method, or class
does not trace to an approved requirement or approved exception, it is dark
behavior until removed, linked, or captured as a proposed requirement, gap,
change, exception, accepted risk, or clarification.

The controlled alpha path is:

```text
tw-strategy when product direction needs grounding
-> tw-ideate when options need generation and critique
-> tw-brainstorm
-> tw-requirements-review
-> authority-baseline record
-> tw-plan
-> tw-authority-gate
-> test-first verification evidence
-> tw-work
-> tw-traceability-check
-> tw-code-review / tw-doc-review
-> verification evidence record
-> validation evidence record
-> tw-compound
```

`authority-baseline`, `verification`, and `validation` are record outputs in
this alpha, not installed `tw-*` skills or slash commands. A later unit may add
dedicated skills for those steps, but they must be separately materialized and
proven before the README can advertise them as callable entry points.

Direct `ce-*` invocation is not a standalone TraceWeaver user workflow. Selected
`ce-*` skills remain packaged as internal implementation engines for wrapper
delegation, static continuity testing, and reviewed upstream-drift comparison,
but they do not by themselves close TraceWeaver authority, traceability,
verification, or validation gates. TraceWeaver wrappers are provided for the
selected packaged CE continuity entrypoints users are expected to call directly:
`tw-strategy`, `tw-ideate`, `tw-brainstorm`, `tw-plan`, `tw-work`, `tw-debug`, `tw-code-review`,
`tw-doc-review`, `tw-commit`, `tw-commit-push-pr`, `tw-compound`,
`tw-compound-refresh`, `tw-sessions`, `tw-test-browser`, `tw-test-xcode`,
`tw-resolve-pr-feedback`, `tw-setup`, and `tw-worktree`. Packaged
`ce-sessions` is the selected internal session component; the older CE 3.5.0
`ce-session-inventory` and `ce-session-extract` split helpers are not part of
the selected CE 3.12.0 package surface.
Runtime-equivalent CE replacement, agent-backed behavior, slash commands, and
enforcing mode remain held until U9 or a later accepted runtime proof.

`tw-auto` is the first packaged TraceWeaver-controlled automation surface. It
provides advisory automation with the Intent Contract, traceability matrix,
bounded review-fix cycle, severity policy, and stop-before commit/push/PR
boundary. The packaged `lfg` name delegates to `tw-auto` so users who expect the
CE autonomous entrypoint do not bypass TraceWeaver authority controls.

There are two valid blank-project starts:

```text
intent-first path:
idea
-> tw-strategy when product direction needs grounding
-> tw-ideate when options are needed
-> ideation source
-> tw-grill
-> tw-brainstorm
-> tw-requirements-review
-> accepted requirements baseline
-> tw-auto
```

```text
fast bootstrap path:
tw-auto "build X"
-> draft requirements.md
-> draft traceability-matrix.md
-> draft .traceweaver/intent-contract.yml
-> stop for tw-requirements-review
```

`tw-auto` may route strategy or idea-generation requests through `tw-strategy`
and `tw-ideate` before brainstorming. It should skip those source-evidence
wrappers for approved implementation plans that do not ask for upstream
strategy or ideation. If a consuming project has no TraceWeaver authority files
yet, it bootstraps draft
`requirements.md`, root `traceability-matrix.md`, and
`.traceweaver/intent-contract.yml` from packaged templates, then stops for
`tw-requirements-review` and human baseline review before implementation.

`tw-grill` is the optional handoff from ideation into brainstorming. Use it when
a candidate idea needs deeper interview before requirements source material is
created. The skill must inspect repo-discoverable answers instead of asking the
user, provide a recommended answer for every question it does ask, and route its
output through `tw-requirements-review` before anything becomes authority.

## Intent Contract Templates

TraceWeaver alpha includes file templates for consuming repositories:

```text
requirements.md
traceability-matrix.md
.traceweaver/
  intent-contract.yml
  authority-baseline.yml
  task-capsules/
  trace-records/
  gaps/
  changes/
  exceptions/
```

The packaged templates live under `references/`. They define the minimum fields
for requirements baselines, intent contracts, task capsules, trace records,
gaps, changes, and exceptions. The `tw-auto` skill also includes skill-local
copies of the first-run requirements baseline, matrix bootstrap, loop-state, and
controlled-autonomy policy templates, plus the Intent Contract template, so
`--include-skills` installs have the bootstrap material available beside the
installed skill. If no approved
requirement or approved exception authorizes a meaningful change, advisory mode
records a gap, change, exception candidate, or clarification instead of treating
agent interpretation as authority.

In consuming projects, `requirements.md` and `traceability-matrix.md` should
live at the repository root so users can inspect the current authority baseline
and traceability state without digging through generated records. Supporting
plans and validation records can live under `docs/`; operational records live
under `.traceweaver/`.

## Installation Target

This plugin follows the Compound Engineering plugin shape and is intended to be
installed from the repository checkout during U6b proof.

Example target command for Codex:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
```

Example target command for Antigravity:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to antigravity --include-skills [--geminiHome <path>]
```

From the TraceWeaver repository root, `src/index.ts` is a repo-local
self-contained Codex installer for this alpha. It materializes the packaged
TraceWeaver skill directories under the TraceWeaver namespace and writes an
install manifest without delegating to a mutable Compound Engineering source
checkout.

`--include-skills` is required for this alpha. The repo-local installer fails
closed when it is omitted so `tw-auto` and its skill-local authority templates
cannot be partially installed.

U6b alpha records the install command, runtime target, selected skills
materialized, selected references materialized, static adapter routing, and
dynamic-discovery limitation. Real runtime invocation and slash-command surfaces
remain later proof work.
