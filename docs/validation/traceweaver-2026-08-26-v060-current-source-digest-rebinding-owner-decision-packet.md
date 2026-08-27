---
id: TW-OWNER-DECISION-PACKET-2026-08-26-V060-CURRENT-SOURCE-DIGEST-REBINDING-001
status: owner_decision_required_no_behavior_authority
date: 2026-08-26
owner: Oxiom Systems
proposed_change_id: CHG-TW-2026-08-26-005
proposed_exception_id: EXC-TW-022
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-current-source-digest-rebinding-owner-decision-packet; req=REQ-TW-110,REQ-TW-123,REQ-TW-130,REQ-TW-143,REQ-TW-145; trace=TRACE-TW-072,TRACE-TW-074; ver=VER-TW-092,VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 current-source digest rebinding owner decision

## Decision needed

`CHG-TW-2026-08-26-004` / `EXC-TW-021` are consumed and non-clean. Their
only full model-context smoke failed at `MC110_EXACT_ROUTE` because seven
fixtures retained the physical `requirements.md` digest from the disposable
probe, while final authority promotion changed that controlled file.

The failure is narrow and deterministic, but no remaining exception authorizes
a fixture change or second smoke.

## Recommended exact decision

> Approve CHG-TW-2026-08-26-005 and EXC-TW-022 for one profile-revision-6 main-thread current-source digest sequencing correction only: first complete and freeze every controlled authority, profile, plan, V&V, trace, and evidence update without changing behavior fixtures; then replace only the stale physical requirements.md digest wherever it appears in oracle-review-complete.json, source-manifest-complete.json, the three source-manifest-delivery files, and the two source-manifest-temporal-external files with the final frozen post-promotion requirements.md digest, after static proof that every other referenced repository locator digest matches. Permit one full 72-case model-context smoke attempt, fresh exact Vestro and Air Router product rebinding only after a clean result, and one verification-only continuation of the same existing integrated Terra reviewer limited to the cumulative eleven-file CHG-004/CHG-005 delta only after exact product acceptance. Preserve the published Core 0.5.0 release, the mixed root worktree, the accepted product limitations, and every semantic-cutover, runtime, deployment, release, staging, commit, push, PR, merge, tag, GitHub Release, and publication hold; publication remains separately gated.

## Why this order differs

The earlier probe froze fixture bytes before the controlled approval/profile
promotion finished. The corrected order makes the changing source settle
before any fixture digest is generated:

```text
exact owner decision
  -> requirements review + profile revision 6 + V&V + document review
  -> fresh authority Proceed
  -> freeze physical requirements.md digest
  -> rebind seven fixtures only
  -> static all-locator digest comparison
  -> one full 72-case attempt
```

No provisional probe digest may become the real fixture target.

## Current held state

- Canonical requirements baseline:
  `sha256:64efb7325451f031bc15935bef264e95ae185a717854d4a7d5305067eca62c5e`.
- Current physical `requirements.md` before any proposed revision-6
  promotion: `sha256:18589e636043d27bd1e33f4e1a5c2615f878fb234c8ad763992823bc328aef11`.
- Current accepted product digest `22d5d66a...8719` remains historical.
- No product or reviewer continuation followed the failed attempt.
- This packet, CHG-005, and EXC-022 are proposals only and grant no authority.

## If declined

Keep the branch as a non-clean Core 0.6.0 candidate. Do not rerun the smoke,
rebind product evidence, invoke the reviewer, prepare a PR, or publish.
