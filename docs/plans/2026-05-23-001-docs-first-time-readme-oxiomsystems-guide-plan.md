---
title: "docs: Make TraceWeaver first-time guidance clear"
status: candidate_planning_input_no_publication
date: "2026-05-23"
owner: Oxiom Systems
beads_issue: TraceWeaver-fif
requirements:
  - REQ-TW-015
  - REQ-TW-016
  - REQ-TW-020
  - REQ-TW-021
  - REQ-TW-023
  - REQ-TW-024
  - REQ-TW-041
  - REQ-TW-043
  - REQ-TW-065
trace_ids:
  - TRACE-TW-004
  - TRACE-TW-005
  - TRACE-TW-006
  - TRACE-TW-010
  - TRACE-TW-046
  - TRACE-TW-048
verification:
  - VAL-TW-006
  - VAL-TW-008
  - VAL-TW-009
  - VAL-TW-011
---

<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-015; trace=TRACE-TW-004; ver=VAL-TW-006 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-016; trace=TRACE-TW-010; ver=VAL-TW-006 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-020; trace=TRACE-TW-006; ver=VAL-TW-008 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-021; trace=TRACE-TW-005; ver=VAL-TW-009 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-023; trace=TRACE-TW-046; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-041; trace=TRACE-TW-010; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-043; trace=TRACE-TW-010; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=first-time-docs-plan; req=REQ-TW-065; trace=TRACE-TW-048; ver=VAL-TW-011 -->

# docs: Make TraceWeaver First-Time Guidance Clear

## Intent

Make the GitHub README easy for a first-time Codex or Claude Code user to
follow, and create a short public guide that can be posted from the
Oxiom Systems TraceWeaver section.

This is documentation planning only. It does not publish the website, create a
GitHub release, claim release readiness, or change plugin runtime behavior.

## Operating Mode

Implementation Gate Mode planning.

The accepted requirements already authorize accurate alpha install docs,
public-safe documentation, TraceWeaver-first wrapper routing, narrow release
claim boundaries, and next-step handoff guidance. The plan must still keep
runtime, release-ready, clean replacement, unconstrained-host, and autonomous
publication claims held.

## Authority

- `requirements.md`, baseline `REQ-BASELINE-2026-04-30-001`, hash
  `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- `plugins/traceweaver-core/skills/tw-plan/references/traceweaver-operating-modes.md`
- Live Oxiom Systems page at `https://oxiomsystems.com/#traceweaver`, current
  public framing: TraceWeaver is the open-source file-based control layer for
  intent capture, requirements authority, task capsules, traceability checks,
  verification evidence, validation records, and controlled publication
  handoffs.

## Problem

The current root README is evidence-rich but hard for a new user to enter. It
starts with a correct product explanation, then moves through architecture,
authority model, install paths, workflow details, audit guidance, CE continuity,
alpha status, and proof history in one long surface.

For first-time users, the missing path is:

1. What is TraceWeaver in one paragraph?
2. Is it safe to install now, and what claims are still held?
3. How do I install the Codex or Claude Code plugin?
4. What do I run first in a blank or existing project?
5. What files will appear, and what do they mean?
6. What is the normal loop after the first bootstrap?
7. Where do I go for deeper authority, validation, and release evidence?

The Oxiom Systems page already provides the higher-level product frame, but it
does not yet give a postable guide that bridges from public positioning to the
GitHub README and plugin install flow.

## Goals

- Put the first successful path in the first screenful of the GitHub README.
- Separate quick start, first project bootstrap, daily workflow, and deep proof
  trail into clearly named sections.
- Keep Codex and Claude Code install/update instructions copyable and
  version-aware for TraceWeaver Core `0.1.0`.
- Make the first user action obvious: install the plugin, then run `tw-auto` or
  the manual wrapper sequence.
- Explain the three authority files without requiring the user to understand
  the full validation history first.
- Make alpha limits visible without overwhelming the top of the README.
- Produce a website guide suitable for `https://oxiomsystems.com/#traceweaver`
  that is public-safe, concise, and not overloaded with internal evidence
  record names.

## Non-Goals

- Do not publish the website in this task.
- Do not create or push release tags.
- Do not claim release-ready, package-ready, clean CE replacement,
  unconstrained-host support, enforcing mode, slash commands, or autonomous
  publication.
- Do not remove the detailed proof trail from the repository; move it behind
  clearer navigation instead.
- Do not expose private paths, protected source text, copied standards text, or
  unsupported formal compliance claims.

## Deliverables

### D1. GitHub README First-Time Restructure

Rewrite the root `README.md` into a reader path with this top-level order:

1. `TraceWeaver Core`
   - one-paragraph product statement;
   - alpha status line;
   - link to quick start, workflow, audit, proof trail.
2. `Quick Start`
   - Codex install/update;
   - Claude Code install/update;
   - verify install shape;
   - first command.
3. `First Project`
   - blank project bootstrap with `tw-auto`;
   - existing repo audit path with `tw-audit`;
   - manual wrapper path for users who do not want automation.
4. `The TraceWeaver Loop`
   - idea, requirements review, plan, authority gate, work, traceability check,
     review, verification, validation, learning;
   - one diagram and one compact command table.
5. `Authority Files`
   - `requirements.md`;
   - `traceability-matrix.md`;
   - `.traceweaver/intent-contract.yml`;
   - `.traceweaver/` evidence records.
6. `Alpha Boundaries`
   - what works now;
   - what remains held;
   - how release/update claims are scoped.
7. `Deep Reference`
   - architecture layers;
   - systems-engineering foundations;
   - CE continuity;
   - detailed validation/proof links;
   - contributor and release notes.

### D2. README Copy Rules

Use these copy rules during implementation:

- Prefer "TraceWeaver keeps agent work tied to intent, authority, evidence, and
  held claims" over abstract systems-engineering phrasing in the opening.
- Use "alpha advisory plugin" near install instructions.
- Use "held" claims as a compact callout, not as scattered repeated caveats.
- Keep `tw-*` wrappers as the normal user path; mention `ce-*` only as internal
  implementation components or compatibility context.
- Keep command blocks short and copyable.
- Move validation-record density into a "Proof trail" or "Current status"
  section.
- Every workflow section must end with the next command or decision.

### D3. Public Oxiom Guide

Create a short guide intended for the Oxiom Systems TraceWeaver section. The
guide should be usable as a new page or an expanded section linked from
`https://oxiomsystems.com/#traceweaver`.

Recommended title:

```text
TraceWeaver: From Prompt To Proof
```

Recommended structure:

1. `Why TraceWeaver exists`
   - Agents move fast, but delivery needs a defensible chain from intent to
     proof.
2. `The five controls`
   - intent;
   - authority;
   - trace;
   - verify;
   - validate.
3. `What a first-time user does`
   - install plugin;
   - bootstrap or audit a repo;
   - run an approved task through `tw-plan`, `tw-work`, review, and evidence.
4. `What changes in the team workflow`
   - assumptions become gaps/questions instead of hidden code;
   - tests and evidence link back to requirements;
   - unsupported release claims stay held.
5. `Try it`
   - link to GitHub README quick start;
   - link to workshops/contact.

The public guide should not include internal review IDs, local validation
paths, raw standards text, or claims that TraceWeaver is formally compliant
with INCOSE, ISO, IEEE, NASA, or any other source.

### D4. Website Integration Plan

When implementing in the Oxiom Systems website repo:

- keep the current `#traceweaver` section as product positioning;
- add a guide link or guide section below the existing comparison block;
- keep the page scannable on mobile;
- link the primary CTA to the GitHub README quick start;
- keep workshop/contact CTA separate from open-source install CTA;
- run local static preview before publication;
- do not run the publish script until publication is explicitly requested.

### D5. Verification

Minimum verification for the documentation change:

```sh
python3 -m json.tool .agents/plugins/marketplace.json >/dev/null
python3 -m json.tool .claude-plugin/marketplace.json >/dev/null
python3 -m json.tool plugins/traceweaver-core/.codex-plugin/plugin.json >/dev/null
python3 -m json.tool plugins/traceweaver-core/.claude-plugin/plugin.json >/dev/null
python3 -m json.tool plugins/traceweaver-core/.cursor-plugin/plugin.json >/dev/null
TRACEWEAVER_HOST_RUNTIME_EXEC=0 scripts/traceweaver-smoke-codex-discovery
claude plugin validate --strict .
git diff --check
```

Documentation review checks:

- the README first screen shows what TraceWeaver is, alpha status, install path,
  and first command;
- Codex and Claude commands match the marketplace/manifests;
- website guide links to the GitHub quick start and keeps unsupported claims
  held;
- public-safe hygiene scan finds no private paths or protected source text in
  new public copy;
- no section implies release-ready, clean CE replacement, enforcing mode,
  slash-command support, or autonomous publication.

If the implementation also changes generated traceability views, run:

```sh
scripts/traceweaver-generate-traceability-views --root .
scripts/traceweaver-smoke-traceability-generated-views
```

## Suggested Implementation Units

### U1. README Outline Patch

Create the new README section skeleton and move existing dense material under
`Deep Reference` without changing technical claims. This should be a structure
change first, not a rewrite of every paragraph.

Acceptance:

- first-time path appears before architecture/proof history;
- existing install/update commands remain present;
- held-claim wording stays intact.

### U2. README First-Time Copy Pass

Rewrite the opening, quick start, first project, workflow loop, and authority
file sections for a new user.

Acceptance:

- a Codex or Claude Code user can identify the install command and first
  TraceWeaver command in under one minute;
- `tw-auto`, `tw-audit`, and the manual wrapper path are clearly separated;
- alpha boundaries are visible but not repeated in every paragraph.

### U3. Public Guide Draft

Add a public-safe guide draft, preferably in the website repo first if the next
task is website work, or as a repo-local draft under TraceWeaver docs if review
should happen before website integration.

Acceptance:

- guide can stand alone outside GitHub;
- no internal evidence IDs are required to understand it;
- CTA points to GitHub README quick start and Oxiom contact/workshop path.

### U4. Website Integration

Update the Oxiom Systems website source to include or link the guide from the
existing TraceWeaver section.

Acceptance:

- local preview renders;
- mobile layout remains readable;
- primary public CTA is open-source quick start;
- commercial CTA remains workshop/contact.

### U5. Review And Evidence

Run documentation review, public-safe hygiene, plugin manifest validation, and
the scoped install/discovery smoke. Record any held claims rather than
weakening them.

Acceptance:

- `/tw-doc-review` passes for README, guide, and any website docs;
- no publication occurs unless separately requested through the controlled
  publication route.

## Risks

| Risk | Control |
| --- | --- |
| README becomes marketing copy and loses authority boundaries. | Keep alpha boundaries and held claims in a compact top-level section plus detailed status links. |
| README remains too dense for first-time use. | Force a first-screen quick start and move proof history behind deep-reference navigation. |
| Website guide overclaims product maturity. | Use "open-source alpha advisory plugin" and keep release-ready/clean-replacement claims held. |
| Codex and Claude install instructions drift from manifests. | Validate JSON manifests and run Claude/Codex discovery checks before review. |
| Public copy leaks internal provenance or protected source material. | Run hygiene scan and avoid standards text, local paths, private repo names, and unsupported compliance language. |

## Held Claims

- Runtime-driver decision binding remains held.
- Release-ready, package-ready, and upstream-ready claims remain held.
- Clean CE replacement remains held.
- Enforcing mode remains held.
- Slash-command support remains held.
- Autonomous publication remains held.
- Website publication remains held until explicitly requested.

## Highest-Level Next Step

Run:

```text
/tw-doc-review docs/plans/2026-05-23-001-docs-first-time-readme-oxiomsystems-guide-plan.md
```

After plan acceptance, run:

```text
/tw-work docs/plans/2026-05-23-001-docs-first-time-readme-oxiomsystems-guide-plan.md
```
