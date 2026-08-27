---
id: VAL-TW-042
status: rejected_controlled_gap_open
date: 2026-08-24
owner: Hannes Zietsman
owner_relationship: Oxiom Systems TraceWeaver release owner and representative product owner
requirements: [REQ-TW-136, REQ-TW-144, REQ-TW-145]
functional_scope_digest: sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51
product_validation_result_digest: sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794
---

<!-- TRACEWEAVER: file-role=v060-product-lifecycle-representative-validation; req=REQ-TW-136,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# VAL-TW-042 Representative Validation Disposition

## Decision

Rejected on 2026-08-24. Hannes Zietsman rejected both exact observations and
the non-compensable `ACCEPT-LC-001` disposition for functional candidate
`sha256:7f579cd8aa205a2940b98040240b0c915787a37fab3d527eb8ef3d48c344ea51`.
The selection records the disposition, not a reason inferred by the agent.

| Cell | Named rater and relationship | Exact raw evidence | Signal | Limitations acknowledged |
| --- | --- | --- | --- | --- |
| `VESTRO-LC-001` | Hannes Zietsman; authorized Vestro product representative and maintainer; did not implement the Core 0.6.0 candidate | `vestro-lc-001-machine-observation.json`; `sha256:72443f647aa18ad3c6f3ed140f7fca37e84579613d5359d299aca2f5a6badae1`; 40/40; zero false promotions; all impacts; 1 ms medians | rejected | Yes — no acceptance or release claim. |
| `AIRROUTER-LC-001` | Hannes Zietsman; Oxiom Systems Air Router product owner and maintainer; did not implement the Core 0.6.0 candidate | `airrouter-lc-001-machine-observation.json`; `sha256:47e299e3c9046071976138f520ed5d31484f46d2e522db7f1ea45ce4c8ac8651`; 40/40; zero false promotions; all impacts; 1 ms medians; `SRC-AIR-042` visible | rejected | Yes — no acceptance or release claim. |
| `ACCEPT-LC-001` | Hannes Zietsman; Oxiom Systems TraceWeaver release owner and representative product owner | Both raw digests plus result `sha256:a56ab36faaa7b0baf47c748e86e48d5e4afa86843a763df73daf6ff8ddc6a794` | rejected | Yes — no cross-product compensation; all release holds retained. |

The machine-readable result is schema- and content-bound, but the release-gate
validator correctly holds it because both cells and the owner disposition are
rejected. Authority effect remains `none`.

## Remaining holds

- single integrated independent review and reviewer-bound model-context oracle;
- final graph freshness and clean isolated reinstall;
- PR checks, exact-main smoke tests, and CodeQL;
- serialized tag and GitHub Release publication;
- semantic-HTML authority cutover; and
- every deployment/runtime-health claim.

## Next gate

The rejection is classified as Real-product depth. Approve or reject
`CHG-TW-2026-08-24-001` and `EXC-TW-018`. The Terra continuation and all
publication remain held until an approved corrective route produces a new
exact-candidate disposition.
