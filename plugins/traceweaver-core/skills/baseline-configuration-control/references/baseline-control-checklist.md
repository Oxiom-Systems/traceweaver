# Baseline Control Checklist

Use this checklist for each controlled baseline. Missing items do not all have
the same severity; judge them by whether gates and claims can safely rely on
the baseline.

## Identity

- [ ] Baseline ID is stable.
- [ ] Baseline type is named: final candidate, release, runtime package, or
      controlled document set.
- [ ] Candidate ref is recorded: commit, branch, tag, artifact hash, or
      package version.
- [ ] Owner and status are recorded.

## Scope

- [ ] Controlled file set is explicit.
- [ ] Package inclusion and exclusion rules are recorded and locatable from
      the baseline record.

## Evidence

- [ ] Every evidence record identifies the tested ref or artifact.
- [ ] Evidence records carry date/session and result path.
- [ ] All release gates reference the same final candidate ref.

## Change Classification

- [ ] Post-evidence changes are listed.
- [ ] Fork diff is classified; no changed file is left unclassified.
- [ ] Every `no_impact` classification has a recorded rationale.
- [ ] Every `impact_reviewed` classification links a review record.
- [ ] Affected gates are marked current, stale, held, reduced, or superseded.
- [ ] Baseline before/after is recorded for controlled changes.

## Linked Authority

- [ ] Approved gaps, risks, waivers, or deviations are linked.
- [ ] Controlled changes link to the affected items across needs,
      requirements, design, implementation, verification, validation, risks,
      gaps, and release gates, or record that no items in a category are
      affected.
- [ ] Open actions have an owner and a next skill.

## Hold When

Hold the gate when any of these are true:

- [ ] Candidate ref is missing or inconsistent across records.
- [ ] Controlled file set is unknown.
- [ ] A runtime or package-controlled file changed after evidence and no
      impact review exists.
- [ ] Fork diff contains an unclassified behavior change.
- [ ] Evidence cannot be tied to the candidate under review.
- [ ] A stale gate is still marked passed.

## Review Outcome

Choose exactly one:

- `approved`: identity, scope, evidence currency, and classifications are
  consistent for this candidate ref.
- `approved_with_exception`: consistent except for classified,
  impact-reviewed changes with linked records.
- `held`: one or more hold conditions are true; affected gates and claims
  must not be relied on.
- `superseded`: a newer approved baseline replaces this one; link before and
  after.
