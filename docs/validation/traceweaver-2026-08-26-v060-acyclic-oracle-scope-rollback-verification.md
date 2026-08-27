---
id: TW-SCOPE-ROLLBACK-2026-08-26-V060-ACYCLIC-ORACLE-001
status: passed_exact_authorized_behavior_scope
date: 2026-08-26
change_id: CHG-TW-2026-08-26-003
exception_id: EXC-TW-020
finding: P1-005-continuation
baseline_hash_sha256: ae5ea38098647901926f1391c975e0db766337e12c765f18a73885f42ff74e08
workflow_profile_revision: 4
workflow_profile_hash: sha256:a51724b649534563d09deb2f27feccee1e7dd5dd50c5e24451fb38eb677e2f6c
publication_authority: none
---

<!-- TRACEWEAVER: file-role=v060-acyclic-oracle-scope-rollback-verification; req=REQ-TW-130,REQ-TW-135,REQ-TW-136,REQ-TW-141,REQ-TW-143,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 acyclic-oracle scope and rollback verification

## Scope result

The behavior repair is confined to the three artifacts named by the approved
change and exception:

| Artifact | Pre-change SHA-256 | Post-change SHA-256 |
| --- | --- | --- |
| `scripts/traceweaver-refresh-v060-model-context-oracle` | `4730ac476e5c560a0e6274d50a87c0573272afe30944bf94da7642a5d6f8d80b` | `6859e5ea8084c2c422f8757197d964989b15f78c1c89f29dd62dc9164267c64c` |
| `scripts/traceweaver-check-release-readiness` | `13c96125895a1ee37ae64bef2cbc86caa26163c3f0bec8d0f5bfda399b6669da` | `65e42485ddf352d10517f86d5b079bea23693d78b8ec4565ee723fe423dbd61b` |
| `scripts/traceweaver-smoke-v060-release-integrity` | `be04f088a05ab95feb9e40981d6494e84029a9bc652f9848a856dd7c393b7c92` | `c70de151f5aee475c453403c47a93507a3a241d47fc2ce3e675b4f00298a160e` |

The change, exception, owner-approval, requirements-review, RED, document
review, authority-gate, GREEN, and this scope record are control/evidence
artifacts for the same decision. No second behavior repair, reviewer action,
product-repository mutation, or publication action occurred.

## Authorized behavior delta

1. Both production source maps now bind current owner-approved authority and
   exclude the two post-oracle receipts.
2. The focused smoke names pre-oracle inputs and post-oracle receipts as
   separate sets.
3. The focused smoke proves that reintroducing either downstream receipt into
   either production source contract is rejected.
4. Synthetic candidate rebinding occurs only inside the temporary smoke
   fixture so existing release-integrity controls can be exercised against an
   exact candidate. It does not alter production product-validation evidence.
5. All clean-review, same-reviewer, stale-source, exact-base, and publication
   holds remain intact.

## Rollback definition

If the correction is rejected before publication, rollback is the exact
restoration of the three pre-change script byte identities listed above and
the continued retention of the RED/decision evidence as historical records.
Rollback must not:

- fabricate either downstream receipt as a pre-oracle input;
- rewrite or republish Core 0.5.0;
- modify Vestro, Air Router, or the mixed root worktree;
- invoke a different reviewer or start another repair cycle; or
- stage, commit, push, open a PR, merge, tag, release, deploy, or publish.

Because the worktree has not been staged or published, no external rollback
operation is currently required.

## Verification boundary

The exact functional digest must be calculated only after this behavior scope
is frozen. Product-trial evidence under `docs/validation/` is non-functional
evidence and must bind to that digest without changing it. A changed
functional digest after product acceptance invalidates the acceptance and
requires fresh rebinding; it does not authorize another repair.

## Next gate

Compute the frozen functional digest and run the two approved read-only
representative-product trials. Stop for explicit exact-product owner
acceptance before contacting the existing integrated Terra reviewer.
