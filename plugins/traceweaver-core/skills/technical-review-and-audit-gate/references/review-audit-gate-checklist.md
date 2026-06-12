# Review And Audit Gate Checklist

Use this checklist for each gate. Items are not all the same severity; judge
them by whether the decision can safely stand on recorded evidence.

## Gate Identity

- [ ] Gate name and gate ID are identified.
- [ ] Lifecycle stage is identified.
- [ ] Review mode is explicit: `lite`, `normal`, or `audit`.
- [ ] Candidate baseline/ref is recorded.
- [ ] Decision authority is identified.
- [ ] Required review lens set is taken from the gate definition.

## Entry Criteria

- [ ] Entry criteria are listed.
- [ ] Entry criteria are satisfied or the gate is held.
- [ ] Entry criteria were checked before exit claims were judged.

## Evidence Index

- [ ] Evidence index links to traceability, V&V, baseline, risk, and change
      records.
- [ ] Every index entry points at a recorded artifact, not a recollection.
- [ ] Evidence is current against the candidate ref, or flagged stale.

## Review Lenses And Exit Criteria

- [ ] Required review lenses are complete.
- [ ] Each lens has its own recorded result.
- [ ] Exit criteria are listed.
- [ ] Every exit criterion has a status and an evidence reference or an
      explicit hold.

## Action Items

- [ ] Open action items are classified: blocker, accepted exception,
      follow-up, or not relevant.
- [ ] Every follow-up has an owner and a trigger.
- [ ] No blocker was reclassified without the decision authority's approval.

## Risk, Gap, And Exception State

- [ ] Risk readiness is known: current open-risk, accepted-risk, and
      unresolved-gap lists exist, each entry has a disposition, and each
      disposition traces to a risk/gap/change record.
- [ ] Gap and exception state is known under the same definition.
- [ ] Every claimed exception names its risk, gap, or change record ID.

## Decision

- [ ] Decision is exactly one of `proceed`, `hold`, `reduce`, or `reject`.
- [ ] Decision rationale is grounded in the evidence index.
- [ ] A `reduce` names what proceeds, what stays held, and the approving
      record.
- [ ] The decision-to-status mapping is applied in the output.
- [ ] The decision is recorded so later gates can index it as evidence.

## Hold When

- [ ] Gate, candidate ref, review mode, or decision authority cannot be
      identified.
- [ ] Entry criteria are not met.
- [ ] Candidate baseline is stale or inconsistent.
- [ ] Required evidence is missing without an approved exception.
- [ ] Required review lens is missing, unknown, or not clean.
- [ ] Open blocker has no owner or disposition.
- [ ] Risk, gap, or stale-evidence state is unknown.
- [ ] Approval is inferred from no response.
