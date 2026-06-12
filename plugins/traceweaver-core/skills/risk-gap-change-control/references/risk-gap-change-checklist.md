# Risk Gap Change Checklist

Use this checklist for each risk, gap, exception, or change record. Missing
items do not all have the same severity; judge them by whether the record can
safely act as a controlled exception.

## Per-Record Checks

- [ ] Type is classified as exactly one record type.
- [ ] Affected need/requirement/design/task/implementation/evidence is linked.
- [ ] Owner is named.
- [ ] Reason is stated.
- [ ] Impact is stated.
- [ ] Allowed scope names what work may proceed and what remains blocked.
- [ ] Decision is explicit and is exactly one of `accept`, `revise`, `defer`,
      `block`, `escalate`, or `close`.
- [ ] Review condition is stated.
- [ ] Expiry or closure trigger is stated.
- [ ] Required follow-up is listed.
- [ ] Verification impact is assessed.
- [ ] Validation impact is assessed.
- [ ] Baseline impact is assessed when any affected item belongs to an
      approved baseline.
- [ ] Human approval evidence exists when the decision is `accept`.

## Block When

Block the record (and any work relying on it) when any of these are true:

- [ ] Exception has no owner.
- [ ] Allowed scope is unclear or does not state what remains blocked.
- [ ] Risk/gap hides missing authority - work is proceeding on the record
      alone, with no approved requirement or approved exception behind it.
- [ ] Requirement changed without impact analysis covering needs,
      requirements, design, implementation, V&V, risks, and baseline.
- [ ] Deferred V&V has no trigger or expected evidence.
- [ ] Human approval is assumed but not recorded.

## Closure Checks

Before marking a record `close`:

- [ ] The closing evidence is linked (added evidence, corrected trace,
      retired behavior, or promotion to approved requirement/exception).
- [ ] Follow-up actions are done or explicitly carried to a new owned record.
- [ ] Downstream items that depended on the record were rechecked.

## Review Outcome

Choose exactly one per record:

- `accept`: controlled exception with owner, scope, review condition, and
  recorded approval evidence.
- `revise`: requirement, trace, or evidence needs correction first.
- `defer`: allowed later with trigger, owner, and expected evidence.
- `block`: too risky or uncontrolled as recorded.
- `escalate`: human decision required.
- `close`: resolved with linked evidence.
