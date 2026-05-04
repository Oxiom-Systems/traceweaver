# TraceWeaver Core Plugin

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

Included skills:

- `requirements-reviewer`
- `systems-engineering-traceability`
- `using-agent-skills` selected routing context
- `tw-requirements-review`
- `tw-grill`
- `tw-authority-gate`
- `tw-traceability-check`
- `tw-auto`
- selected CE-compatible workflow skills, including `ce-brainstorm`,
  `ce-plan`, `ce-work`, `ce-code-review`, `ce-doc-review`, `ce-compound`,
  `ce-resolve-pr-feedback`, `ce-commit`, `ce-commit-push-pr`,
  `ce-compound-refresh`, `ce-sessions`, `ce-session-inventory`,
  `ce-session-extract`, `ce-test-browser`, `ce-test-xcode`, `ce-worktree`,
  `ce-setup`, `ce-debug`, and `lfg`

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

## Skill Entry Points

- `tw-requirements-review` checks whether candidate
  requirements are good enough to become implementation authority.
- `tw-grill` optionally stress-tests one selected idea after ideation and before
  `ce-brainstorm`; it produces source evidence only, not approved authority.
  `ce:ideate` is optional external CE context in this alpha, not a packaged
  TraceWeaver skill.
- `tw-authority-gate` checks whether planned work has approved
  authority before implementation starts.
- `tw-traceability-check` checks whether behavior traces to
  approved authority, implementation, verification, and validation evidence.
- `tw-auto` runs the advisory controlled-autonomy loop: CE-compatible
  plan/work/review sequencing plus TraceWeaver authority, traceability,
  verification, matrix-update, and next-step controls.
- `lfg` is packaged as a compatibility alias for `tw-auto`, not as raw CE
  autopilot.

This alpha installs skills, not slash commands. Slash-command or prompt
surfaces require a later package record that adds command/prompt files and
proves they install.

`tw-auto` is a skill entrypoint, not a slash command. It must stop before commit,
push, or PR creation in this alpha and report the next review, evidence, or
human authority step.

The selected CE-compatible skills are installed as skill directories. They are
packaged for static alpha continuity testing only; runtime-equivalent CE
replacement and agent-backed behavior remain held until U9 or later runtime
proof.

## CE Static Continuity Rule

TraceWeaver is intended to be a standalone plugin based on the selected Compound
Engineering workflow surface. Selected `ce-*` skills are packaged as
CE-compatible implementation components, while TraceWeaver entrypoints provide
the authority, traceability, verification, validation, and next-step control
layer.

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
ce-brainstorm
-> tw-requirements-review
-> authority-baseline record
-> ce-plan
-> tw-authority-gate
-> ce-work
-> tw-traceability-check
-> ce-code-review / ce-doc-review
-> verification evidence record
-> validation evidence record
-> ce-compound
```

`authority-baseline`, `verification`, and `validation` are record outputs in
this alpha, not installed `tw-*` skills or slash commands. A later unit may add
dedicated skills for those steps, but they must be separately materialized and
proven before the README can advertise them as callable entry points.

Direct `ce-*` invocation remains legacy/manual-continuity only. It can be useful
for static continuity testing or scoped manual work, but it does not by itself
close TraceWeaver authority, traceability, verification, or validation gates.
Automatic wrappers for every selected `ce-*` entrypoint remain future work.
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
-> ideation source
-> tw-grill
-> ce-brainstorm
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

`tw-auto` does not automatically run idea generation or `tw-grill`. If a
consuming project has no TraceWeaver authority files yet, it bootstraps draft
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

Example target command:

```bash
bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills
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
