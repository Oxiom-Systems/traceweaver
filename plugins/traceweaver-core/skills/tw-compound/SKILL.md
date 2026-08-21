---
name: tw-compound
description: TraceWeaver-controlled learning-capture wrapper. Use when documenting a solved problem as source evidence without rewriting requirements or publication state.
argument-hint: "[solved problem, learning, or implementation result]"
---

<!-- TRACEWEAVER: entrypoint=skill_execution_contract_resolution; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090 -->

## Invocation Contract

Before any other control-path action, run
`<skills-root>/tw-auto/scripts/traceweaver-resolve-skill-execution-contract`
exactly once with `--skill tw-compound`, the selected `--risk`, and a stable
`--invocation-id`. Continue only when it returns `terminal_state: resolved`;
missing, invalid, stale, or ambiguous contracts stop the invocation. This
resolves the checklist only. It does not dispatch a child or require
served-model attestation; use the native-child routing adapter only when an
actual child is requested.

<!-- TRACEWEAVER: file-role=learning-wrapper-skill; req=REQ-TW-052; trace=TRACE-TW-037; ver=VER-TW-047 -->

# TraceWeaver Compound

## Purpose

Use `tw-compound` to capture a recently solved problem as reusable learning
while preserving TraceWeaver authority boundaries. It delegates to the
TraceWeaver-packaged `ce-compound` engine and treats learning output as source
evidence unless a separate authority review accepts it.

## Native Child Routing

Before any TraceWeaver-owned native Codex child call, run the packaged sibling
`tw-auto/scripts/traceweaver-route-native-child` against the canonical workflow-
profile contract. Use only its explicit dispatch parameters and finalize its
receipt with independent host/execution attestation. A held route makes the
child output ineligible; never inherit a model, fall back, or edit an imported
CE-derived body to bypass the overlay.

## Required Inputs

Before delegating, load and cite:

- `requirements.md`
- `traceability-matrix.md`
- `.traceweaver/intent-contract.yml`
- skill-local `references/traceweaver-operating-modes.md`
- the verification or review evidence for the solved problem when available

## Workflow

1. Confirm the learning source and the requirement, trace, verification, or
   defect context it relates to.
2. Delegate learning capture to the TraceWeaver-packaged `ce-compound` engine.
3. Label the result as source evidence or knowledge-base material, not approved
   requirements or release evidence.
4. If the learning implies changed requirements, policy, validation intent, or
   publication state, pause and route to `tw-requirements-review` or
   `tw-doc-review`.

## Boundaries

- Do not invoke an external raw CE plugin.
- Do not approve, rewrite, delete, or broaden requirements.
- Do not stage, commit, push, open PRs, publish docs, or update remote systems.
- Do not claim verification or release readiness from a learning note.

## Output

Return:

- authority context loaded
- packaged `ce-compound` delegation status
- source-evidence or learning artifact path when one is created
- requirements or trace gaps discovered
- held claims and next TraceWeaver handoff
