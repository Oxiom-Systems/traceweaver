---
title: "fix: Complete TraceWeaver-owned skill anchors and alias clarity"
type: fix
status: candidate
date: 2026-05-08
---

# fix: Complete TraceWeaver-owned skill anchors and alias clarity

## Summary

Add the missing TraceWeaver file-role anchors for TraceWeaver-owned skill
surfaces and make the `lfg` compatibility alias unambiguous. The current scan
finds 43 packaged `SKILL.md` files, 21 with `TRACEWEAVER` file-role anchors,
and 22 without. That count is expected to remain below 43 because imported
CE-derived skill bodies must not be edited just to add TraceWeaver-local anchor
comments. The product fix is to anchor TraceWeaver-owned surfaces and record
CE-derived surfaces as imported implementation engines under REQ-TW-059.

This plan is candidate implementation input. It does not approve runtime
behavior, clean CE replacement, publication, upstream-refresh acceptance, or CE
component body edits.

---

## Operating Mode

Implementation Gate Mode planning with an Authority Baseline guard.

The immediate active baseline gate for imported CE component body edits remains
REQ-TW-059 authority doc review. This anchor/alias refresh does not depend on
using REQ-TW-059 as accepted implementation authority because it is limited to
TraceWeaver-owned or TraceWeaver-facing non-`ce-*` skill surfaces and matrix
evidence. It must not edit imported `ce-*` component bodies, claim CE
replacement, or accept upstream-refresh behavior while the REQ-TW-059 authority
doc review remains pending.

---

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`
- Primary requirements: REQ-TW-010, REQ-TW-011, REQ-TW-034, REQ-TW-041,
  REQ-TW-043, REQ-TW-048, REQ-TW-052, REQ-TW-054, REQ-TW-057, REQ-TW-059
- Existing evidence: VER-TW-030 records behavior contracts for
  `tw-requirements-review`, `tw-authority-gate`, `tw-grill`, `tw-auto`, and
  `lfg`; VER-TW-034 records the wrapper backlog; VER-TW-047 records wrapper
  completion anchors; VER-TW-052 records the imported CE component boundary
  requirement update.
- New candidate chain for this plan:
  - Artifact: ART-TW-055
  - Trace: TRACE-TW-041
  - ATP: ATP-TW-025
  - Result: RESULT-TW-025
  - Verification: VER-TW-053

Validation question: Can a reviewer distinguish TraceWeaver-owned workflow
surfaces from imported CE implementation engines by reading the skill anchors,
matrix rows, and evidence records, without confusing `lfg` with raw CE autopilot
or treating `tw-auto` as an upstream CE body?

---

## Problem Frame

The current anchor scan reports:

- total packaged skill files: 43 `SKILL.md`;
- anchored skill files: 21;
- missing anchors: 22.

Missing TraceWeaver-owned or TraceWeaver-facing skill files are:

- `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md`
- `plugins/traceweaver-core/skills/tw-grill/SKILL.md`
- `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md`
- `plugins/traceweaver-core/skills/lfg/SKILL.md`
- `plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md`
- `plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md`

Missing imported CE-derived skill files are not part of the direct anchor-write
target set. They should be represented by the imported-component inventory and
overlay/fork policy instead of local inline anchor edits.

The alias confusion to resolve is:

- `tw-auto` is a TraceWeaver-owned controlled-autonomy skill.
- `lfg` is the familiar compatibility alias that must delegate to `tw-auto`.
- upstream CE `lfg` is a CE surface classification input, not the user-facing
  TraceWeaver authority boundary.

---

## Scope

In scope:

- Add file-role anchors to TraceWeaver-owned direct-callable surfaces that are
  missing them.
- Add or refresh Code Anchor Evidence rows for those skill files.
- Add a deterministic inventory smoke that reports:
  - total packaged skills;
  - anchored TraceWeaver-owned skills;
  - imported CE-derived skills intentionally not inline-anchored;
  - `lfg` classified as `alias_to_tw_auto`;
  - raw CE `lfg` not exposed as the TraceWeaver user-facing authority boundary.
- Update skill behavior evidence and matrix status for the anchor/alias proof.
- Keep active-host/runtime claims held unless an existing smoke only proves
  filesystem/currentness.

Out of scope:

- Editing `ce-*` skill bodies only to add TraceWeaver comments.
- Editing imported CE component bodies without a reviewed overlay/fork record.
- Claiming runtime invocation, full CE parity, clean replacement, publication,
  upstream-ready status, release-ready status, Vestro readiness, or R31.
- Broad historical authority wording cleanup unless it contradicts this scope.

---

## Proposed Anchor Mapping

| File | Anchor role | Requirement | Trace | Verification |
| --- | --- | --- | --- | --- |
| `plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md` | `authority-gate-wrapper-skill` | REQ-TW-041; REQ-TW-052 | TRACE-TW-021 | VER-TW-030 |
| `plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md` | `requirements-review-wrapper-skill` | REQ-TW-050; REQ-TW-052 | TRACE-TW-021 | VER-TW-030 |
| `plugins/traceweaver-core/skills/tw-grill/SKILL.md` | `intent-deepening-source-evidence-skill` | REQ-TW-048 | TRACE-TW-021 | VER-TW-030 |
| `plugins/traceweaver-core/skills/lfg/SKILL.md` | `tw-auto-compatibility-alias-skill` | REQ-TW-034; REQ-TW-043 | TRACE-TW-021 | VER-TW-030 |
| `plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md` | `core-requirements-quality-skill` | REQ-TW-010; REQ-TW-011 | TRACE-TW-041 | VER-TW-053 |
| `plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md` | `core-traceability-method-skill` | REQ-TW-010; REQ-TW-011 | TRACE-TW-041 | VER-TW-053 |

Implementation may adjust these mappings only if `tw-traceability-check` finds
an existing reviewed row with a more specific trace/verification link. Do not
invent new requirement or verification IDs during implementation.

---

## Implementation Units

### U1. Confirm Boundary For This Anchor Refresh

- Confirm the scoped work edits only TraceWeaver-owned or TraceWeaver-facing
  non-`ce-*` skill surfaces, inventory smoke logic, Code Anchor Evidence rows,
  and validation evidence.
- Keep REQ-TW-059 authority doc review pending for imported CE component body
  edits, upstream-refresh behavior, CE drift/overlay inventory enforcement,
  clean replacement, and publication.
- Do not edit `ce-*` skill bodies or use REQ-TW-059 to accept CE-derived
  component changes in this plan.

Acceptance: the scoped anchor refresh may proceed without closing REQ-TW-059
because no imported `ce-*` component body is edited; REQ-TW-059 remains the
held gate for imported component body changes and replacement claims.

### U2. Add TraceWeaver-Owned Anchors

- Add one `<!-- TRACEWEAVER: ... -->` file-role anchor to each in-scope
  TraceWeaver-owned missing skill file.
- Place the anchor near the top of the skill file after frontmatter, matching
  the existing TraceWeaver wrapper convention.
- Keep the anchor coarse: file-role only. Do not add helper/subsection anchors.
- Do not edit CE-derived `ce-*` imported component bodies.

Acceptance: the six in-scope files carry valid file-role anchors and the total
anchored count increases from 21 to 27, while CE-derived missing files remain
unmodified unless separately approved by overlay/fork authority.

### U3. Clarify `lfg` Alias Identity

- Ensure `lfg/SKILL.md` states that packaged `lfg` is a TraceWeaver
  compatibility alias to `tw-auto`.
- Ensure it does not describe itself as raw CE autopilot, upstream CE `lfg`, or
  an authority boundary independent of `tw-auto`.
- Add evidence wording that `tw-auto` is the TraceWeaver-owned driver and `lfg`
  is only the compatibility entrypoint.

Acceptance: static inspection and smoke output classify `lfg` as
`alias_to_tw_auto`, and no record says `tw-auto = ce-lfg`.

### U4. Add Inventory Smoke Coverage

- Add or extend a deterministic smoke to inspect packaged skill files and emit:
  - `traceweaver_skill_file_total=43`;
  - `traceweaver_skill_file_anchored=<count>`;
  - `traceweaver_owned_anchor_status=pass`;
  - `traceweaver_imported_ce_inline_anchor_status=held_imported_components`;
  - `traceweaver_lfg_alias_classification=alias_to_tw_auto`;
  - missing imported CE inline anchors as held/non-blocking inventory, not
    implementation failure.
- The smoke must fail if any TraceWeaver-owned in-scope skill lacks a file-role
  anchor or if `lfg` is not classified as a `tw-auto` alias.

Acceptance: static smoke passes and prints the classifications above.

### U5. Update Matrix And Evidence

- Add Code Anchor Evidence rows for the in-scope skill files.
- Add ART-TW-055 / TRACE-TW-041 / ATP-TW-025 / RESULT-TW-025 / VER-TW-053 rows.
- Update `docs/validation/traceweaver-skill-behavior-audit.md` and
  `docs/validation/traceweaver-controlled-autonomy-alpha.md` with the
  accepted/held boundary after code review.
- Keep CE body edits, runtime, publication, clean replacement, upstream-ready
  and release-ready claims held.

Acceptance: matrix rows and evidence point to the same scoped files and smoke
result.

### U6. Review

- Run `tw-code-review` scoped to:
  - the six in-scope skill files;
  - the inventory smoke;
  - Code Anchor Evidence rows;
  - updated skill behavior evidence.
- If clean, record the code review once.
- Run one scoped `tw-doc-review` only for the status/hash update.

Acceptance: no broad authority-polishing loop; only findings that affect this
scope, runtime/publication claims, CE body edit policy, or alias identity block.

---

## Verification Commands

```sh
for f in plugins/traceweaver-core/skills/*/SKILL.md; do
  if ! rg -q '<!-- TRACEWEAVER: .*file-role=.*req=.*trace=.*ver=' "$f"; then
    echo "$f"
  fi
done
```

```sh
scripts/traceweaver-smoke-tw-skill-behavior
```

```sh
git diff --check -- \
  plugins/traceweaver-core/skills/tw-authority-gate/SKILL.md \
  plugins/traceweaver-core/skills/tw-grill/SKILL.md \
  plugins/traceweaver-core/skills/tw-requirements-review/SKILL.md \
  plugins/traceweaver-core/skills/lfg/SKILL.md \
  plugins/traceweaver-core/skills/requirements-reviewer/SKILL.md \
  plugins/traceweaver-core/skills/systems-engineering-traceability/SKILL.md \
  traceability-matrix.md \
  docs/validation/traceweaver-skill-behavior-audit.md \
  docs/validation/traceweaver-controlled-autonomy-alpha.md
```

---

## Held Claims

- Runtime invocation of `tw-auto`, `lfg`, `tw-grill`,
  `tw-authority-gate`, or `tw-requirements-review` beyond already accepted
  constrained proofs.
- Runtime CE delegation.
- Direct CE-derived component body edits without overlay/fork record.
- Full CE parity, clean replacement, upstream-ready status, package-ready
  status, release-ready status, publication, Vestro dogfood, and R31.

---

## Next Step

Scoped `tw-code-review` passed as
`TW-CODE-REVIEW-2026-05-08-ANCHOR-ALIAS-CURRENTNESS-CLEAN-001` after active-host
currentness evidence was refreshed and the concrete fake `VER-*` example was
repaired.

Scoped `tw-doc-review` for the anchor/alias status/hash update passed as `TW-DOC-REVIEW-2026-05-08-ANCHOR-ALIAS-STATUS-HASH-CLEAN-001`. Record-once complete; move to the next active gate without reopening this status/hash loop.
