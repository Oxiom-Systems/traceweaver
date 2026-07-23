# TraceWeaver 0.3 Validation-First Program — Owner Direction Authorization Record

- Record ID: TW-OWNER-DIRECTION-2026-07-22-VALIDATION-FIRST-001
- Date: 2026-07-22
- Owner: Oxiom Systems (project owner, stakeholder direction given in session)
- Scope: REQ-TW-076, REQ-TW-077, REQ-TW-078, REQ-TW-079, REQ-TW-080, REQ-TW-081

## Direction

On 2026-07-22 the project owner directed the TraceWeaver 0.3
"validation-first" program with these explicit decisions:

1. Cherry-pick the hook mechanism from obra/superpowers (pinned commit
   `d884ae04edebef577e82ff7c4e143debd0bbec99`); do NOT rebase TraceWeaver
   onto superpowers.
2. Hooks are advisory-only; enforcing/blocking mode remains a held claim.
3. In-scope hook hosts: Claude Code, Cursor, and Codex (per-cell capability
   states per `docs/validation/traceweaver-0.3-hook-host-capability-matrix.md`).
4. Core behavior change: after planning, the validation (V&V definition:
   executable RED verification artifacts + a reviewed validation-definition
   artifact) must be written and defined BEFORE implementation, so that
   intent is validated rather than the implementation.
5. Execution model: orchestrator coordinates; implementation is performed by
   subagents with cross-model adversarial build/review pairing
   (claude-sonnet-5 <-> gpt-5.6-terra).

## Authority Effect

This record authorizes, for the six requirements in scope:

- **Static/advisory implementation** of the V&V definition phase
  (`tw-vv-define`), the `tw-work` hard V&V preflight, the SessionStart and
  PreToolUse advisory hooks, and the host capability matrix, on the
  `codex/traceweaver-0.3-validation-first` integration branch.
- It resolves the authority-ordering findings raised by the adversarial
  reviewers (Unit 2 P0, Unit 3 B2): implementation proceeded on candidate
  requirements that had passed requirements-quality review
  (`docs/validation/traceweaver-0.3-req-076-081-requirements-review.md`,
  all six 5/5 after REQ-TW-079 revision) and scoped doc review
  (`docs/validation/traceweaver-0.3-req-076-081-doc-review.md`, clean) but
  had not yet been promoted past `candidate_for_review`. The owner direction
  of 2026-07-22 is the stakeholder authority for this static/advisory
  implementation; the requirements remain `candidate_for_review` until
  promotion through the normal baseline-amendment route.

## What This Record Does NOT Authorize (held claims)

- Runtime behavior of any hook on any host (per-host runtime proof gates
  remain held; Codex × PreToolUse is `unproven`).
- Enforcing/blocking mode for the PreToolUse gate (held per REQ-TW-080).
- Requirement promotion to `approved`; baseline amendment; release,
  publication, package-ready, clean-replacement, slash-command, or
  autonomous-publication claims.
- Codex plugin installation/registration of hooks (auto-adopt risk recorded
  in the discovery record; suppression-vs-adoption decision required first).

## Evidence Chain

1. `requirements.md` — REQ-TW-076..081 candidates (Validation-First V&V
   Program section).
2. `docs/validation/traceweaver-0.3-req-076-081-requirements-review.md` —
   requirements-quality review, all six "Can approve" (5/5) after revision.
3. `docs/validation/traceweaver-0.3-req-076-081-doc-review.md` — clean.
4. Unit evidence: `scripts/traceweaver-smoke-vv-define`,
   `scripts/traceweaver-smoke-hook-session-start`,
   `scripts/traceweaver-smoke-hook-pretooluse-tdd-gate`,
   `scripts/traceweaver-smoke-tw-skill-behavior` (all green on the
   integration branch, runtime disabled by default).
5. Adversarial cross-model review cycle: Unit 2 (terra review: REJECT → fix
   round → micro-fix → verified), Unit 3 (sonnet review: B1/M1/S2/S4 → fix
   round → ACCEPT), Unit 4 (sonnet review: ACCEPT, no blocking findings).
