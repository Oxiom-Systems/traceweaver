# VRUN-002 Comparison

Scenario: Existing module audit

Starting commit: `29e309d4b9b4b1424ace91560125fd5ad6155814`

Baseline final commit: `e5fee1ac256656a6782e02c5775662f210b3046f`

TraceWeaver final commit: `532e0cfbcb1c7e9c0bd42d6ca7f1411294ebcf9a`

## Outcome

Technical result: Pass.

Formal validation status: Human reviewer usefulness/noise and confidence rating
pending.

Both runs audited the same existing module from the same seed commit and left
production code unchanged. The baseline review found the right general risk.
The TraceWeaver audit converted that risk into traceable dark-code candidates,
debt, draft inferred requirements, and human decisions.

## Baseline vs TraceWeaver Audit

| Area | Baseline | TraceWeaver Audit | Distinct Value |
|---|---|---|---|
| Existing tests | Ran and passed. | Ran and passed. | Same technical verification baseline. |
| Policy authority gap | Prose finding only. | TD-DISC-001 plus TRACE rows with missing authority. | Gap becomes trackable work. |
| Dark-code candidates | Described `LEGACY20` concern in prose. | DC-DISC-001, DC-DISC-002, DC-DISC-003. | Candidates have stable IDs and actions. |
| Inferred requirements | Implied from code/tests. | SREQ-DISC-DRAFT-001 through SREQ-DISC-DRAFT-004, all Draft. | Inferred links are visible but not promoted to authority. |
| Verification evidence | General `npm test` result. | VER-DISC-001 linked to draft requirements and marked as execution evidence only. | Tests are separated from authority and validation. |
| Validation path | Prose note that validation is absent. | TD-DISC-003 and missing validation cells in TRACE rows. | Missing validation is explicit debt. |
| Human decisions | Suggested asking product owner. | DEC-DISC-001 through DEC-DISC-004. | Approval path is explicit. |
| Deletion risk | No delete recommendation. | Explicitly says not to delete solely because traceability is missing. | Aligns with dark-code policy. |

## Noise / Overhead

| Metric | Baseline | TraceWeaver Audit |
|---|---|---|
| Final project files | 5 | 6 |
| Audit artifacts | One prose review | One traceability audit plus one summary |
| Test command time | 0.16s | 0.28s |
| Stable IDs | None | SREQ-DISC-DRAFT, TRACE-DISC, DC-DISC, TD-DISC, DEC-DISC, VER-DISC |
| Noise observed | Low | Medium but appropriate for Audit mode |

The TraceWeaver audit is heavier than the baseline prose review, but this is the
intended Audit-mode tradeoff for owner-unclear behavior. It produced actionable
traceability work rather than just advice.

## Reviewer Confidence

Codex reviewer confidence, before human confirmation:

| Workflow | Confidence | Reason |
|---|---|---|
| Baseline | 3 / 5 | The prose review found the unclear policy risk, but tracking and authority status remain informal. |
| TraceWeaver Audit | 4 / 5 | Missing authority, validation, dark-code candidates, and human decisions are explicit and stable. |

Human reviewer rating: Pending Hannes confirmation.

## Result

VRUN-002 has technical evidence that TraceWeaver adds distinct value for an
existing-module audit where ownership, requirement links, and validation are
unclear.

The run should be marked fully complete only after the human reviewer confirms:

- usefulness rating
- low-value noise rating
- confidence before/after rating
