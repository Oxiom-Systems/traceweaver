# Example Validation Definition Artifact (tw-vv-define, REQ-TW-076/077)

Status: illustrative example only, for `tw-vv-define` capsule schema-shape
demonstration and the `scripts/traceweaver-smoke-vv-define` content-gate
check. It is not itself a filed validation record for a real requirement;
see `docs/validation/traceweaver-0.3-req-076-081-doc-review.md` for the real
scoped doc-review record covering REQ-TW-076..081.

This file exists to narrow a review finding (terra P2): the Unit 2 matrix
proposal previously claimed `scripts/traceweaver-smoke-vv-define` validates
"the `docs/validation/` artifact schema shape" for the example capsule's
`validation_artifact` field, but that field pointed at a scoped doc-review
record that does not itself carry the four sections a validation-definition
artifact must carry per REQ-TW-076(b). This file demonstrates that shape, and
`docs/validation/examples/vv-define-capsule.example.json`'s
`validation_artifact` field for `REQ-TW-077` now points here instead.

## Validation Question

Does the emitted V&V definition capsule give a representative reviewer (a
future `tw-work` preflight consumer, or a human reviewing the capsule by
hand) enough information to judge whether each in-scope requirement's V&V
definition phase is genuinely closed, rather than merely schema-complete?

## FAT/ATP-Style Acceptance Criteria

- A reviewer can, from the capsule alone, locate the executable verification
  artifact, its RED evidence, and the validation definition artifact for
  every verification-mode requirement entry.
- A reviewer can, from the capsule's `reviews[]` array, tell which gate
  (`tw-doc-review` / `tw-code-review`) reviewed which artifact, its status,
  and where the review evidence is recorded.
- A reviewer confirms `matrix_row_ref` names either a concrete proposed
  matrix row or the literal `"pending-merge"` placeholder, not an invented or
  stale row reference.

## Rater / Reviewer Profile

- Name or role: a `tw-doc-review` reviewer independent of the capsule's
  author, standing in for the future `tw-work` preflight consumer described
  by REQ-TW-078 (still held).
- Relationship to work: independent of the skill/validator implementation
  this example illustrates.
- Representativeness: representative of the review pass every real
  verification-mode requirement entry in a `tw-vv-define` capsule must carry
  before `--require-review-passed` mode will accept it.

## Evidence Path

`docs/validation/traceweaver-0.3-req-076-081-doc-review.md` (the real scoped
doc-review record whose `status` and reviewed-inputs section demonstrate what
a passed `tw-doc-review` gate entry's `evidence_path` should resolve to).
