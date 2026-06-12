# Validation Planning Examples

These are original TraceWeaver examples. Do not copy examples from licensed
sources into runtime material.

## Example: Clean Validation Plan

Need:

```text
NEED-OPS-001: Operations users need to locate the right TraceWeaver skill
during planning without reading the whole package.
```

Plan:

```yaml
validation_method: representative_user_scenario
stakeholder_or_rater_profile:
  name_or_role: "engineering lead not involved in implementation"
  relationship_to_work: "target user and approver, not implementer"
  independence_note: "did not contribute to the skill package under review"
  representative_reason: "plans real work with the package weekly"
scenario: "Given a planning prompt, locate the correct skill and explain why it applies."
acceptance_signal: "Rater confirms selection is correct and workflow is usable."
evidence_path: "docs/validation/runs/ops-skill-discovery-scenario.md"
```

Why this passes the gate:

- the rater is named by role, with relationship to the work and an
  independence note
- the scenario reflects intended use in the operating context
- the acceptance signal is an observable, recorded judgment
- the evidence path exists before the claim

Verification link:

Runtime discovery tests may support confidence but do not replace this
scenario; they are linked as verification evidence.

## Example: Weak Validation Claim

Bad:

```text
R31 passed because the implementer thinks adoption will be good.
```

Finding:

- implementer self-assessment
- no representative rater
- no scenario
- no acceptance evidence

Decision: held.

Better:

Name the rater or representative, record their relationship to the work,
define the scenario and observable acceptance signal, and capture the
approval or adoption evidence path before any pass decision.

## Example: Approved Deferred Validation

Input:

```text
Representative beta users are not available until the limited beta starts.
```

Disposition:

```yaml
decision: approved_with_exception
exceptions:
  - GAP-VAL-004
hold_conditions:
  - "Public release held until beta validation evidence is recorded."
recommended_next_skill: risk-gap-change-control
```

Why this is acceptable:

- the deferral is an approved gap with a stable ID
- the trigger is defined: limited beta start
- the release impact is recorded as a hold condition
- closure routes through risk/gap/change control, not silent follow-up

## Example: Verification Offered As Validation

Bad:

```text
VAL-TW-008 is closed: all smoke scripts pass and CI is green on the release
branch.
```

Finding:

- smoke scripts and CI verify implementation behavior; they do not show a
  stakeholder need satisfied in context
- no rater, scenario, or acceptance signal
- `VAL-*` closure claimed on verification evidence

Decision: held; downgrade the evidence to verification.

Better:

```yaml
validation_method: operational_dry_run
stakeholder_or_rater_profile:
  name_or_role: "project owner operating the release workflow"
  relationship_to_work: "decision owner; did not implement the release changes"
scenario: "Run the documented release workflow end to end on a staging copy and accept or reject the resulting release record."
acceptance_signal: "Owner records acceptance that the release record supports the release decision."
evidence_path: "docs/validation/runs/release-workflow-dry-run.md"
```

The smoke results stay linked as verification evidence for the same
requirement IDs.

## Example: TraceWeaver Release Validation Scenario

Need:

```text
NEED-REL-002: The project owner needs the audit verdict to be trustworthy
enough to base a release decision on it.
```

Weak claim:

```text
The audit skill reports clean on our own repo, so the release-readiness need
is validated.
```

Finding:

- the scenario is not representative: a clean self-run cannot show whether
  the verdict catches real problems
- the implementer of the audit behavior is also the only judge
- no acceptance signal beyond the tool's own output

Better plan:

```yaml
validation_method: acceptance_test_with_representative_actor
stakeholder_or_rater_profile:
  name_or_role: "project owner"
  relationship_to_work: "release decision owner, not implementer of the audit behavior"
scenario: "Owner runs the audit on a repository seeded with known closure gaps and compares the verdict against the seeded list."
acceptance_signal: "Owner confirms every seeded gap is reported and the verdict matches their independent release judgment."
evidence_path: "docs/validation/runs/release-audit-seeded-gaps.md"
```

Verification link:

The audit skill's own smoke checks verify that it runs and emits the expected
record shape; only the seeded-gap acceptance scenario validates that the
verdict is trustworthy for a release decision.

## Example: Adoption Claim Without Interpretation Rule

Bad:

```text
We will know validation passed when people start using the new skill.
```

Finding:

- no telemetry target
- no interpretation rule agreed before reading the evidence
- no time window or cohort
- no evidence path

Better:

```yaml
validation_method: beta_adoption_telemetry
success_criteria:
  - "At least 5 of the 8 beta projects invoke the skill on real planning work within 30 days of beta start."
  - "Interpretation rule: invocations triggered by the maintainers' own test repos are excluded."
evidence_path: "docs/validation/runs/beta-adoption-window-1.md"
deferred_trigger: "limited beta start"
```

A target and interpretation rule agreed in advance keep adoption evidence
from being read optimistically after the fact.
