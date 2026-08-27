---
id: TW-V060-REAL-PRODUCT-DEPTH-EXACT-SCOPE-ROLLBACK-2026-08-24-001
status: passed_exact_functional_freeze
date: 2026-08-24
owner: Oxiom Systems
requirements: REQ-TW-136, REQ-TW-143, REQ-TW-144, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
change_id: CHG-TW-2026-08-24-001
exception_id: EXC-TW-018
requirements_baseline_hash_sha256: 16e4cbbeb50e8568f0190176df62e74a2bf8d5193cc557b2ae0910a1f2d4afc8
functional_scope_digest: sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875
functional_scope_path_count: 72
authority_effect: none
---

# Core 0.6.0 real-product-depth exact scope and rollback verification

## Disposition

The owner-approved validation-method correction is frozen against integration
base `e53faeb437cfee3b91f43e1b0f4ed3b1cb1e2c33`. The exact deterministic
functional scope contains 72 regular files at:

`sha256:8b6719139c3cebfb66d6f59cdb052d74402bf09af63bda3e06355bc296073875`

using
`sha256(sorted(path + NUL + git_mode + NUL + sha256(file_bytes) + LF))`.
Evidence under `docs/validation/`, generated views, review-series state,
current snapshots, graph freshness, and the reviewer oracle are excluded by
the recorded release-scope algorithm.

The preceding 72-path digest
`sha256:b17b50d4801e038de96e31644f28b616e615afc9bfee79539558249aa156c8a6`
is preserved as intermediate evidence. It was invalidated when the controlled
requirements and matrix restored the release-integrity checker's static
exact-candidate truth invariants without promoting validation or publication
status.

## Correction boundary

- Corrected functional paths remain limited to the representative trial
  runner, focused depth smoke, and controlled authority/profile bindings.
- The final authority edits restore existing non-compensable,
  evidence-controlled exact-candidate policy; they do not accept a product
  cell, close `VAL-TW-042`, or authorize publication.
- No packaged lifecycle script, schema, skill, consumer repository, released
  Core 0.5.0 artifact, or mixed root-worktree file changed in this correction.
- Vestro and Air Router inputs remain pinned and read-only; all controlled
  changes are applied only inside disposable snapshots.
- The rejected eight-record observations and the intermediate corrected
  observations remain historical evidence and are not reinterpreted as the
  final exact-candidate result.

## Verification

`scripts/traceweaver-smoke-v060-real-product-depth` passed source-census,
provenance, graph-binding, and task-count checks with authority effect `none`.
The runner SHA-256 is
`909c099997f9aca0c49cb22eaebb13f5a2c8ab42dc476cb525ef2e4267b195a3`.

## Rollback

Before publication, the branch and its existing named recovery stashes preserve
the pre-correction state. The correction can be reverted by an ordinary future
reviewed change to the two functional scripts and authority bindings; no
consumer or root-worktree rollback is required because neither was mutated.

## Next gate

Run the pinned Vestro and Air Router trials against this exact digest, bind new
raw receipts without overwriting historical receipts, and obtain explicit
Oxiom Systems product disposition. Reviewer continuation and publication
remain held.
