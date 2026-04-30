# Checklist

For each controlled baseline:

- [ ] Baseline ID is stable.
- [ ] Candidate ref, branch, tag, artifact hash, or package version is recorded.
- [ ] Controlled file set is explicit.
- [ ] Package inclusion/exclusion rules are visible.
- [ ] Evidence records identify tested ref or artifact.
- [ ] All release gates reference the same final candidate.
- [ ] Fork diff is classified.
- [ ] Post-evidence changes are listed.
- [ ] Affected gates are marked current, stale, held, reduced, or superseded.
- [ ] Baseline before/after is recorded for controlled changes.
- [ ] Approved gaps, risks, waivers, or deviations are linked.
- [ ] Open actions have owner and next skill.

## Hold When

- [ ] Candidate ref is missing or inconsistent.
- [ ] Controlled file set is unknown.
- [ ] A runtime/package file changed after evidence and no impact review exists.
- [ ] Fork diff contains unclassified behavior change.
- [ ] Evidence cannot be tied to the candidate under review.
- [ ] A stale gate is still marked passed.
