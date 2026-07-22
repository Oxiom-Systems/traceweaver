# Trace Anchor Authoring Contract

<!-- TRACEWEAVER: file-role=trace-anchor-authoring-contract; req=REQ-TW-054; trace=TRACE-TW-035; ver=VER-TW-044 -->

Status: reviewed planning input / fixture behavior required before project writes

Trace-anchor authoring is part of TraceWeaver implementation closure. It adds
navigation evidence from approved requirements to changed behavior-bearing
artifacts and verification artifacts. It does not create requirements, reinterpret
requirements, or approve release/runtime/publication claims.

## Authoring Modes

- `propose-only`: produce anchor and matrix proposals without changing files.
- `apply-under-work-loop`: apply proposals only in a TraceWeaver-controlled work
  context after mapping is unambiguous. The first accepted proof is limited to
  fixture or temporary workspaces.
- `pause`: stop without changing files when mapping is unclear, contradictory,
  incomplete, stale, or missing.

`tw-traceability-check` and `tw-code-review` are review surfaces by default. They
may report missing anchors and route back to the work loop, but they must not
silently rewrite source files during review-only use.

## Anchor Hierarchy

- Module/file premise anchors explain why the artifact exists and which accepted
  requirement or premise it serves.
- Behavior-entrypoint anchors mark public commands, exported functions, safety
  gates, validators, runtime mutation helpers, publication helpers, core
  classes, or orchestration functions that materially implement requirement
  behavior.
- Verification anchors mark tests, fixtures, and smoke scripts that exercise a
  reviewed verification ID.
- Helper/subfunction anchors are exceptions. Use them only when the helper
  independently carries requirement-level behavior or a structured reviewer or
  user-approved navigability finding says module/file and behavior-entrypoint
  anchors are insufficient.

Do not duplicate the same requirement anchor on every nested helper. Anchor
density is not proof quality.

## Unambiguous Mapping Criteria

Authoring may proceed only when all of these are true:

- the requirement ID exists in reviewed `requirements.md`;
- the trace ID exists in the reviewed matrix or is part of the same reviewed
  authority update;
- the verification ID already exists in reviewed matrix/ATP/VER authority or was
  introduced by a separate reviewed authority update;
- the validation path or question is present;
- exactly one requirement/trace/verification path fits the changed artifact;
- existing anchors do not conflict with the proposed mapping;
- the target is not generated, vendored, cosmetic, mechanical, or externally
  owned unless the matrix or an approved exception records why it may be omitted
  or carry an exception anchor.

## Explicit Entrypoint Multi-Authority Mapping

An explicit behavior-entrypoint request requires `anchor-level=entrypoint`, a
named entrypoint, and all three caller selectors: requirement, trace, and
verification. The helper may select authority only from a typed Markdown
row in the canonical `## Traceability Matrix` section with `Trace` (or
`Trace ID`), `Requirement`, `Verification` (or `Verification ID`), `Status`,
and `Implementation` or `Artifact Path` columns. Escaped Markdown pipes remain
cell content. Lookalike tables outside that section and narrative cells never
authorize an entrypoint anchor.

Exactly one reviewed row must contain all three selectors in their respective
typed columns and map the exact requested repository-relative target in an
approved path-bearing cell. Rows mapping other artifacts are not candidates.
The selectors are assertions, not an instruction to narrow the result: the
emitted source anchor contains the selected row's complete, normalized
requirement, trace, and verification sets, comma-separated. The matching Code
Anchor Evidence row contains the same complete sets, semicolon-separated. Zero
or multiple matching rows pause without mutation. Basename matches, narrative
mentions, caller assertions, and unrelated Code Anchor Evidence do not
establish target authority; a missing exact target mapping pauses without
mutation.

Unrelated file, verification, and differently named entrypoint anchors do not
conflict with this route. Only same-named entrypoint anchors are inspected: an
exact complete tuple is idempotent; an incomplete or different tuple pauses
without mutation. `--helper-exception-approved` is not entrypoint authority and
does not override this route.

## Pause Criteria

Pause with a human-decision output and no file changes when any of these are
true:

- multiple candidate requirements or verification paths fit the target;
- the requirement, trace ID, verification ID, or validation path is missing;
- a validation question or requirement wording changed during implementation;
- the matrix chain is stale or incomplete;
- an existing anchor conflicts with the proposed requirement, trace, or
  verification ID;
- the file role is unclear;
- a helper/subfunction-only anchor is requested without an approved exception;
- generated-file omission is requested without a matching matrix or approved
  exception record.

## Matrix Evidence

Source anchors and matrix Code Anchor Evidence updates are one authoring
transaction. Apply computes both outputs first, stages each beside its original,
preserves each destination's exact permission mode, and restores both originals
with those modes after a handled staging or replacement failure. This is
rollback-safe pair handling, not a claim of power-loss atomicity. A proposal or
apply result must include:

- artifact path;
- anchor type;
- requirement ID;
- trace ID;
- verification ID;
- concise artifact role;
- whether source changed;
- whether matrix evidence changed.

Fixture proof may update fixture-local matrix copies. Real project matrix writes
remain held until deterministic authoring, review, and a narrow project-write
allowance pass.
