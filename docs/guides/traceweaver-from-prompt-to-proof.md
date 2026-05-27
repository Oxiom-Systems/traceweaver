# TraceWeaver: From Prompt To Proof

<!-- TRACEWEAVER: file-role=public-oxiomsystems-guide; req=REQ-TW-021; trace=TRACE-TW-005; ver=VAL-TW-009 -->
<!-- TRACEWEAVER: file-role=public-oxiomsystems-guide; req=REQ-TW-041; trace=TRACE-TW-010; ver=VAL-TW-011 -->
<!-- TRACEWEAVER: file-role=public-oxiomsystems-guide; req=REQ-TW-065; trace=TRACE-TW-048; ver=VAL-TW-011 -->

Coding agents can move from instruction to implementation quickly. That speed
is useful, but it creates a recurring delivery problem: the work can lose the
chain between what the stakeholder wanted, what the agent assumed, what changed,
and what evidence proves the result.

TraceWeaver is the control layer for that chain. It turns loose agent activity
into a file-based workflow for intent, authority, traceability, verification,
validation, and held claims.

## Why TraceWeaver Exists

Prompt-only work often looks complete because the code runs. That is not enough
when a reviewer, customer, operator, or future agent needs to understand why the
behavior exists and whether it still satisfies the original need.

TraceWeaver makes the important links visible:

```text
stakeholder intent
-> reviewed requirement or approved exception
-> bounded agent task
-> implementation
-> verification evidence
-> validation question
-> release or held claim
```

If a link is missing, TraceWeaver does not let the agent quietly fill the gap
with a plausible assumption. The gap becomes a question, proposed requirement,
change, exception, accepted-risk candidate, or held claim.

## The Five Controls

| Control | What it protects |
| --- | --- |
| Intent | The original reason the work exists. |
| Authority | The reviewed requirement or approved exception that allows the work. |
| Trace | The visible link from requirement to code, tests, evidence, and decisions. |
| Verify | The proof that the implementation satisfies the requirement. |
| Validate | The question that checks whether the delivered behavior still solves the stakeholder problem. |

These controls are intentionally lightweight. In the open-source Core workflow,
they live in normal repository files such as `requirements.md`,
`traceability-matrix.md`, `.traceweaver/intent-contract.yml`, and evidence
records under `.traceweaver/`.

## What A First-Time User Does

1. Install the TraceWeaver Core plugin for Codex or Claude Code, or use the
   0.2.2 Antigravity metadata for static local install/discovery only.
2. In a blank project, use the new-project guide to choose the right route for
   the project size:

   ```text
   docs/guides/starting-a-new-project-with-traceweaver.md
   ```

3. Ask TraceWeaver to bootstrap authority:

   ```text
   tw-auto "bootstrap TraceWeaver authority for this project"
   ```

4. In an existing project, audit before changing code:

   ```text
   tw-audit "audit this project for requirements authority, code traces, verification evidence, validation evidence, dark code, orphaned code, duplicate behavior, and lost intent. Report candidate findings only; do not remove or rewrite anything."
   ```

5. For approved work, move through the controlled loop:

   ```text
   tw-plan
   tw-authority-gate
   tw-work
   tw-traceability-check
   tw-code-review
   tw-doc-review
   ```

6. Publish only after the controlled publication gate is in scope and clean.

## What Changes In The Team Workflow

Assumptions stop becoming hidden implementation choices. They become visible
questions, gaps, changes, or held claims.

Tests and smokes stop being detached evidence. They link back to requirements,
trace records, and validation questions.

Review stops being only "does the diff look reasonable?" It also asks what
authorized the behavior, what verifies it, whether it still satisfies the
stakeholder need, and which claims remain unsupported.

Release language becomes evidence-bound. If runtime behavior, clean replacement,
or autonomous publication is not proven, TraceWeaver keeps that claim held
instead of letting it leak into release notes or customer-facing copy.

## Current Alpha Boundary

TraceWeaver Core `0.2.2` is an alpha advisory plugin. It can guide first-time
authority setup, requirements review, planning, work handoffs, traceability
checks, audits, and controlled review flows in Codex and Claude Code.
Antigravity support is limited to static local install/discovery metadata until
runtime invocation evidence is promoted.

The following remain held until later evidence gates pass:

- release-ready, package-ready, and upstream-ready claims;
- full runtime-driver decision binding;
- clean CE replacement as a release claim;
- enforcing mode;
- slash-command support;
- unconstrained-host support;
- autonomous publication.

## Try It

Start with the GitHub quick start:

```text
https://github.com/Oxiom-Systems/traceweaver
```

For team onboarding, workflow design, or guided adoption, use the Oxiom Systems
TraceWeaver and workshop contact path.
