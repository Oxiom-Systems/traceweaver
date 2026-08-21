# Scoped Review Protocol

<!-- TRACEWEAVER: file-role=scoped-review-protocol; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->

Protocol version: `tw-scoped-review-protocol/1`

Canonical source: `plugins/traceweaver-core/references/scoped-review-protocol.md`

The skill-local copy at
`plugins/traceweaver-core/skills/tw-auto/references/scoped-review-protocol.md`
is a required byte-identical package mirror. It is never a second policy
source. A callable wrapper must resolve the canonical path, declared version,
and SHA-256 digest before opening or resuming a review series. Mirror parity is
a deterministic precondition for packaged use.

In a source checkout, the controller resolves the registered path beneath the
supplied repository root. In an installed host, the wrapper must pass the exact
installed canonical file through `--canonical-protocol-file`; the controller
verifies that file's version and digest while retaining the registered path in
the frozen identity. This explicit physical mapping never changes or replaces
the registered canonical path.

## Persistent series identity

Every review-bearing invocation uses
`tw-auto/scripts/traceweaver-review-series` with a
`tw-review-series-command/1` request and a durable ledger. Explicit owner
authorization creates one immutable `series_generation_id`, records the
predecessor series identity and authorization reason, and derives a stable
series identity from:

- series generation;
- predecessor identity;
- authorization reason;
- review mode; and
- the routing-scope identity.

The receipt field `frozen_scope_identity` is the routing-scope identity. It
contains the canonical target set, review objective, canonical concern or
governing-rule set, and an explicit `policy_epoch` that
changes only for a semantic review-routing contract break. Target and concern
ordering is canonicalized. A successor generation with otherwise identical
scope remains distinct because its generation and predecessor inputs are
distinct.

The complete requirements-baseline hash, workflow-profile hash, raw protocol
file digest, HEAD, branch, Git-index state, session, command, wrapper, dispatch,
review/status/receipt identities, projections, generated views, Graphify state,
installation hashes, and publication preparation are audit metadata only. They
remain visible in receipts but never launch review or change the routing-scope
identity by themselves.

Command, run, session, wrapper, branch, Git index, and bookkeeping changes do
not reset the series. Re-entry must name the same generation and immutable
identity inputs or stop.

## Stage and dispatch accounting

A routine series permits exactly one `discovery` stage followed by one
`repair_verification` cycle. One final cycle may be enabled only by an owner-
or approved change-control-authority decision receipt bound to the series,
retained finding fingerprint, P0/P1/blocking-P2 severity and context,
authorization reason, and final-cycle limit. Agent-generated or self-authorized
exceptions are invalid; two cycles remain the absolute maximum.

- Discovery is consumed once and never re-opened by a later wrapper.
- Each repair-verification cycle has one stable attempt identity and decrements
  the remaining series budget exactly once when opened.
- Every `tw-auto`, `tw-work`, `tw-doc-review`, `tw-code-review`, or child
  call has a distinct dispatch identity bound to the series, stage, and attempt.
- Repair/helper dispatches and exactly one review-bearing dispatch may occur
  inside one logical cycle without consuming additional cycle budget. A second
  `tw-doc-review` or `tw-code-review` dispatch in the same attempt is rejected.
- Re-entering an open attempt returns the existing attempt identity and budget.

## Durable findings and progress

A finding fingerprint is a SHA-256 identity over the normalized governing rule,
semantic anchor, failure predicate, and claim impact. Case and whitespace-only
rewording does not create another finding.

P0 and P1 findings block. P2 blocks when it affects authority, requirements,
tests, traceability, validation, release claims, security, data integrity, or
runtime safety. Only non-blocking P2/P3 debt may be recorded without opening a
repair-verification cycle. A genuine in-scope repair regression is eligible for
repair but cannot reset or extend the series budget.

The ledger retains generation, predecessor, series, attempt, and dispatch
identities; frozen scope and protocol identity; finding fingerprints,
dispositions, blocking state, and repair eligibility; evidence and verification
history; remaining budget; accepted-review inputs; terminal receipts; and the
separate authority-acceptance state.

A repair-verification cycle makes progress only when it reduces the unresolved
blocking set or records a relevant evidence delta that can change a blocking
disposition. Repeated blockers with unchanged evidence, non-monotonic blocker
progress, repeated repair-verification failure, or exhausted budget while
blockers remain stops `held_no_progress`.

## Semantic routing and accepted-review reuse

An accepted-review identity is a canonical SHA-256 digest over exactly:

1. `semantic_authority_digest`: normalized applicable requirements, accepted
   scope, validation intent, allowed/held behavior, and must-not-change rules;
2. `behavior_digest`: canonical reviewed target paths, behavior, and linked
   tests;
3. `verification_digest`: normalized verification method, target, and outcome,
   excluding time, log locations, run IDs, and receipt paths; and
4. the explicit `policy_epoch`.

When all four values match and no new unresolved in-scope blocker exists, exact
reuse returns `reuse_accepted_review` and dispatches zero reviewers. Only after
that matching accepted review exists, bookkeeping or audit-metadata changes
return `mechanical_closure` with zero reviewers; without a matching accepted
review, review remains required. An
applicable semantic-authority change routes one `document_review`; a reviewed
behavior, linked-test, or meaningful verification change routes one
`code_review`. A `policy_epoch` change or genuine authorized-envelope expansion
returns `held_scope_expansion` with zero reviewers until explicitly authorized.

Status, receipt, matrix projection, generated view, index, Graphify, branch,
HEAD, session, wrapper, command, dispatch, installation, unrelated baseline or
profile, protocol-wording, and publication-preparation work closes mechanically
after the four semantic inputs match an existing accepted review. Recording an accepted review and its
bookkeeping is one atomic terminal transaction; that transaction cannot
invalidate the review it records. Mechanical work never creates an accepted
review by itself.

## Terminal precedence and authority

Terminal evaluation is deterministic:

1. A frozen-scope change or new out-of-scope blocker returns
   `held_scope_expansion`.
2. Otherwise, zero unresolved in-scope blocking findings returns
   `candidate_review_saturated`.
3. Otherwise, failed progress, repeated repair-verification failure, or
   exhausted repair budget returns `held_no_progress`.

Formal authority acceptance is a separate receipt dimension.
`held_authority_acceptance` may coexist with
`candidate_review_saturated`. Candidate saturation, review reuse, or
mechanical bookkeeping never authorizes implementation, staging, publication,
runtime, release, or deployment.

After saturation, `record_authority_acceptance` may change that separate
dimension to `authority_accepted` only when it carries the explicit formal
acceptance receipt. Re-entry with the same receipt is idempotent; a different
receipt cannot overwrite the recorded decision. This transition does not alter
the review terminal or grant publication authority.

Review-series outcomes do not collapse the existing delivery facts in
`terminal-receipt-template.yml`. `implemented`, `verified`, `reviewed`,
`deployed`, and `dogfooded` remain independent. A saturated or reusable review
does not imply `ready_for_authorized_deploy`, `held_dogfood`, or `complete`;
those delivery states still require their own authority and evidence.
