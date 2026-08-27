---
id: TW-OWNER-DECISION-PACKET-2026-08-26-V060-ORACLE-SOURCE-CYCLE-001
status: owner_approved_for_controlled_authority_promotion
date: 2026-08-26
candidate_change: CHG-TW-2026-08-26-003
candidate_exception: EXC-TW-020
source_finding: P1-005-continuation
source_review: TW-INTEGRATED-REVIEW-2026-08-26-V060-RETAINED-CONTINUATION-001
requirements: REQ-TW-130, REQ-TW-136, REQ-TW-143, REQ-TW-144, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
historical_product_accepted_functional_scope_digest: sha256:8b417a73193da9df15b303d0766391330cf42cd4caf48e0be8faf2cb9692b957
publication_authority: none
owner_approval: TW-OWNER-APPROVAL-2026-08-26-V060-ORACLE-SOURCE-CYCLE-001
---

# Core 0.6.0 acyclic-oracle owner decision packet

## Current disposition

Hannes Zietsman approved the exact decision in this packet on 2026-08-26.
`TW-OWNER-APPROVAL-2026-08-26-V060-ORACLE-SOURCE-CYCLE-001` is the approval
evidence. This packet can now support controlled authority promotion, but it
does not by itself authorize implementation, another reviewer turn, or
publication.

The exact Vestro and Air Router product result remains accepted historical
evidence for the former 74-path functional candidate at
`sha256:8b417a73193da9df15b303d0766391330cf42cd4caf48e0be8faf2cb9692b957`.
The one retained-finding review continuation reproduced that result and closed
`P1-006-continuation`, but it left `P1-005-continuation` open. Consequently the
candidate was product-accepted but not release-ready. Controlled functional
authority has since changed under this approved revision-4 promotion, so the
result cannot satisfy the current release gate and fresh rebinding is required
after the bounded correction freezes.

## Reproduced defect

The same two post-sequence outputs are declared as mandatory
`accepted_evidence` inputs in all three release-control contracts:

| Contract | Circular inputs |
| --- | --- |
| `scripts/traceweaver-refresh-v060-model-context-oracle` | terminal GREEN evidence and retained-review continuation |
| `scripts/traceweaver-check-release-readiness` | terminal GREEN evidence and retained-review continuation |
| `scripts/traceweaver-smoke-v060-release-integrity` | terminal GREEN evidence and retained-review continuation |

The oracle refresher hashes every declared input before it can produce the
88-route oracle. An independent reviewer therefore cannot reproduce the
oracle to close review while the input set requires that review's future
receipt and a GREEN receipt that depends on the same oracle/release-integrity
sequence. Creating placeholder or falsely GREEN evidence would bypass
`REQ-TW-141` truth-stage separation and is prohibited.

## Smallest acyclic correction

If separately approved and promoted through `/tw-requirements-review` and
`/tw-authority-gate`, the bounded correction is:

1. Remove only the terminal GREEN and retained-review continuation paths from
   the oracle `accepted_evidence` input sets in the refresher and v3 readiness
   checker.
2. Split the focused smoke's contract into pre-oracle inputs and post-oracle
   receipts. Require both source contracts to contain every pre-oracle input
   and to exclude every post-oracle receipt.
3. Keep independent review fail-closed through the existing production v3
   controls: every V&V requirement review status must be `closed_clean`; the
   release receipt must bind an `integrated_review` artifact with zero open P0
   and P1; and its reviewer identity must equal the oracle reviewer identity.
4. Keep GREEN fail-closed through the existing passed `release_integrity`
   evidence requirement. Write the dedicated terminal GREEN trace receipt only
   after the unchanged end-to-end release-integrity smoke passes; do not make
   that output an input to its own proof.

No lifecycle runtime, schema, product behavior, public API, semantic-HTML
authority, consumer repository, or publication surface changes.

## Required controlled sequence

1. Record an explicit owner decision changing the terminal goal boundary.
2. Run `/tw-requirements-review`; if clean, promote only the bounded change,
   exception, plan/V&V delta, and immutable L3 workflow-profile revision 4.
3. Capture correction-specific RED from the current missing-source failure and
   obtain `/tw-authority-gate` Proceed.
4. Use `/tw-work` in the main thread to change only the three named scripts and
   directly necessary controlled/evidence bindings.
5. Run all focused and regression suites, then freeze a new functional digest.
6. Because the scripts are functional-scope members, rerun read-only Vestro and
   Air Router trials and obtain an explicit exact-digest `VAL-TW-042`
   disposition. The accepted `8b417a...b957` result is historical because the
   controlled functional scope changed during revision-4 authority promotion.
7. Continue the same integrated Terra reviewer once, for
   `P1-005-continuation` verification only. A non-clean result is terminal.
8. Only after clean closure, write the reviewer evidence, oracle, terminal
   GREEN, graph, reinstall, and production readiness receipts in dependency
   order. PR and publication remain separately gated.

## Allowed scope if approved

- `scripts/traceweaver-refresh-v060-model-context-oracle`;
- `scripts/traceweaver-check-release-readiness`;
- `scripts/traceweaver-smoke-v060-release-integrity`;
- the minimum controlled requirements, matrix, Intent Contract, plan, workflow
  profile, V&V, change/exception, and evidence updates needed to express this
  one acyclic boundary;
- one main-thread repair attempt;
- one fresh exact-product binding and owner disposition if the functional
  digest changes; and
- one verification-only continuation of the same integrated Terra reviewer for
  `P1-005-continuation`.

## Prohibited scope

- no repair of any finding other than `P1-005-continuation`;
- no new reviewer identity, full review, reviewer fan-out, repair subagent, or
  second verification continuation;
- no placeholder, predeclared, or falsely GREEN evidence;
- no mutation of Vestro, Air Router, the published 0.5.0 release, or the mixed
  root worktree;
- no semantic-HTML authority cutover, served-model, deployment, runtime-health,
  release-ready, tag, GitHub Release, or publication claim; and
- no commit, push, PR, tag, release, or deployment until its separate gate.

## Exact owner decision accepted

> Approve CHG-TW-2026-08-26-003 and EXC-TW-020 for one acyclic-oracle correction of P1-005-continuation only: separate pre-oracle inputs from post-oracle GREEN and retained-review receipts across the oracle refresher, v3 readiness checker, and release-integrity smoke; permit one main-thread repair, exact-product rebinding if the functional digest changes, and one verification-only continuation of the same integrated Terra reviewer. Preserve the published 0.5.0 release, the mixed root worktree, and every semantic-cutover, runtime, deployment, release, and publication hold; publication remains separately gated.

## Next gate

Promote the accepted decision through the bounded revision-4 controlled-root
update. Do not implement or invoke the reviewer before the promoted authority
passes `/tw-doc-review` and a fresh `/tw-authority-gate` returns `Proceed`.
