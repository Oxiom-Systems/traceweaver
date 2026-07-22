# Scoped Review Protocol

<!-- TRACEWEAVER: file-role=scoped-review-protocol; req=REQ-TW-086; req=REQ-TW-087 -->

## Review Identity

An accepted review is identified by these four immutable values:

1. `baseline_hash`
2. `profile_hash`
3. `changed_file_digest`
4. `verification_digest`

`changed_file_digest` is the canonical digest of the reviewed behavior and
authority files. Matrix-only, status-only, and derived-projection-only changes
are excluded from that digest. When all four values are unchanged, reuse the
accepted review with `reuse_accepted_review`; do not spawn a generic, duplicate,
or catch-up review.

## Fan-out and Finding Routing

Select reviewers from the frozen profile and deduplicate personas. Every L1-L3
cycle has one routine independent reviewer. At most two reviewers may be active
at once and no cycle may name more than three personas. A specialist is allowed
only when the selected profile explicitly triggers it. A validator is allowed
only for P0, P1, or a disputed P2.

- P0 or P1: route one repair cycle, then rerun the identity-scoped review.
- Disputed P2: route the contested-P2 decision path; it may use one validator.
- Routine P2 and P3: record the finding without another review cycle.
- After two repair cycles, or after a repair leaves the review identity and
  blocking finding unchanged, return `held_no_progress`.

## Terminal Receipt

Every terminal result uses `terminal-receipt-template.yml`. `implemented`,
`verified`, `reviewed`, `deployed`, and `dogfooded` are independent facts with
an evidence reference and a truthful `passed`, `held`, or `not_applicable`
state. A terminal state is one of:

- `ready_for_authorized_deploy`: implementation, verification, and review are
  passed; required deployment is not yet authorized or evidenced.
- `held_dogfood`: required deployment has passed, but required Chrome dogfood
  evidence is absent or failed.
- `complete`: all required facts have passed. This is rejected when required
  deployment evidence or required browser dogfood evidence is absent.

Deployment and dogfood are separate child permissions and separate receipt
facts; neither follows from implementation, verification, or review.
