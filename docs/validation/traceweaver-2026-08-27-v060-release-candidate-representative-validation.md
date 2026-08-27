---
id: VAL-TW-042
status: accepted
date: 2026-08-27
owner: Oxiom Systems
functional_scope_digest: sha256:118896968ba3963e5ce06800a465b74be309c26a14e17cbdfc99e09b5157862c
functional_scope_path_count: 102
change_id: CHG-TW-2026-08-27-006
authority_effect: none
publication_authority: conditional_exact_candidate_only
---

<!-- TRACEWEAVER: file-role=v060-release-candidate-representative-validation; req=REQ-TW-136,REQ-TW-144,REQ-TW-145; trace=TRACE-TW-074; ver=VER-TW-094; val=VAL-TW-042 -->

# Core 0.6.0 representative-product validation

The frozen Core 0.6.0 candidate passed fresh exact-product trials against the
same accepted Vestro and Air Router revisions. The product validator returned
`product_validation_release_gate=passed` for
`docs/validation/traceweaver-2026-08-27-v060-product-lifecycle-product-validation-result-release-candidate-acyclic-final-exact.json`.

| Product | Revision | Recovery | False promotions | Raw digest |
| --- | --- | ---: | ---: | --- |
| Vestro | `8bc3b724f56cc72f08f8162c783a7f8e2816b990` | 698/698 | 0 authority; 0 truth-stage | `sha256:5b4f4778aa8683def31bdd7993201e93ed22eadb1f766bf901061b5c1524ed4e` |
| Air Router | `0fc9b6514e112f8ece4196f5a6e0fbb80e3ee56b` | 820/820 | 0 authority; 0 truth-stage | `sha256:f391237690754c99b383476d067b3aaebf218adc808c72c420b089213fe9bd82` |

The new observations differ from the last accepted observations only in the
frozen candidate binding, its dependent hub/HTML digests, and an improved
Vestro strict-HTML timing sample. Product revisions, source inventories,
record and relationship counts, recovered links, truth-stage behavior,
non-code Air Router coverage, and recorded limitations are unchanged. No
consumer repository was modified.

Publication, deployment, runtime health, and semantic-HTML authority cutover
remain outside this validation result.
