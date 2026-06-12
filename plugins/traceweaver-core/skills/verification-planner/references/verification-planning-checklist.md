# Verification Planning Checklist

Use this checklist for each requirement in the verification plan. Missing
items do not all have the same severity; judge them by whether a reviewer
could rerun the proof and trust the result.

## Per-Requirement Checks

- [ ] Requirement ID is stable.
- [ ] Requirement authority state is explicit.
- [ ] Parent/source trace is visible.
- [ ] Verification method is selected and can prove the requirement.
- [ ] Success criteria are measurable or inspectable.
- [ ] Expected result is stated before execution.
- [ ] Procedure or command is defined and rerunnable.
- [ ] Setup and target environment are defined.
- [ ] Tested ref, artifact, or configuration will be recorded.
- [ ] Actual result field exists in the execution record.
- [ ] Evidence path is defined.
- [ ] Owner/responsible actor is identified.
- [ ] Harness equivalence is stated whenever the execution environment differs
      from the target runtime.
- [ ] Deferred/failed/partial/blocked outcomes have a handoff route.

## Hold When

Hold the plan (do not mark it ready) when any of these are true:

- [ ] Requirement is not approved or explicitly accepted for verification
      planning.
- [ ] Success criteria lack an objective pass/fail condition, threshold, or
      inspectable artifact.
- [ ] Method does not prove the requirement.
- [ ] Procedure lacks setup, command/steps, expected result, or evidence path.
- [ ] Evidence cannot be tied to a baseline or candidate ref.
- [ ] Target runtime differs from harness and no equivalence note exists.
- [ ] Verification is being used as validation.

## Plan Readiness Outcome

Choose exactly one per plan:

- `ready`: every in-scope requirement passes the per-requirement checks; the
  plan can guide implementation and execution.
- `held`: one or more hold conditions are open; record them as
  `hold_conditions` and route the handoff.
- `approved_with_exception`: a hold condition is consciously accepted through
  a controlled risk/gap/change record with owner and trigger; release-level
  claims stay blocked until the exception closes.
