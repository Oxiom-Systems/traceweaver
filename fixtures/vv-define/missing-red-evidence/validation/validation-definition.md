# Fixture Validation Definition Artifact

Status: fixture only, for `tw-vv-define` capsule validator smoke coverage.
Not a real requirement's validation record.

## Validation Question

Does the fixture behavior solve the intended fixture scenario for a
representative reviewer, in the context this fixture simulates?

## FAT/ATP-Style Acceptance Criteria

- The fixture behavior produces the expected observable outcome described in
  `verification/red_test.sh` once implemented.
- A named reviewer confirms the outcome against this criterion.

## Rater / Reviewer Profile

- Name or role: fixture-reviewer (stand-in, not a real stakeholder)
- Relationship to work: independent of the fixture's own implementation
- Representativeness: stands in for the review pass a real capsule requirement
  would require

## Evidence Path

`fixtures/vv-define/valid-capsule/red-evidence/red_run.txt`
