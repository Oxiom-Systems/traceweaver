# TraceWeaver 0.3 Repair — Amendment 2: Release Ratification

**Status:** draft; owner approval of the final whole-file SHA-256 is required after
Sol review receipt insertion.

**Scope:** a one-time, owner-authorized release path for the completed behavioral
0.3 repair. This amendment does not rewrite the historical authority record, make
the earlier exception activation valid, or authorize new product behavior.

## Fixed release facts

- Repair branch HEAD: `474771e6073a4c49a52bc7ea0f540db68418271c`
- Repair base: `e73c1faf4d834f4292b03c236b9f0267f367015d`
- Current `origin/main`: `260b29d8bd88c6c00802893f7900d4b4987b8f52`
- Merge base: `4a0d8cfc14ea6981c0b7777b1391b2890a24e1b3`
- Release version: `0.3.0`
- Release tag: `traceweaver-core--v0.3.0`
- GitHub release title: `TraceWeaver Core 0.3.0`
- The existing `0.2.8` release remains untouched.

The U0–U6 behavioral repair at the fixed repair HEAD is green. Its authority
closure was nevertheless held by `SOL-FINAL-2026-07-23-HELD-AUTHORITY-001`.

## Owner-payload byte definition

The payload SHA-256 is calculated from this file's exact UTF-8 bytes with LF
line endings. There must be exactly one column-0
`<!-- BEGIN OWNER AUTHORITY PAYLOAD -->` line and exactly one column-0
`<!-- END OWNER AUTHORITY PAYLOAD -->` line. The payload begins immediately
after the LF ending the BEGIN marker line, ends immediately before the first
byte of the END marker line, excludes both marker lines, includes the LF
immediately preceding the END marker, and the start must precede the end. Hash
the intervening bytes unchanged.

Portable verification:

```bash
python3 -c 'import hashlib,sys; b=open(sys.argv[1],"rb").read(); begin=b"<!-- BEGIN OWNER AUTHORITY PAYLOAD -->\\n"; end=b"<!-- END OWNER AUTHORITY PAYLOAD -->\\n"; assert b.count(begin)==1 and b.count(end)==1 and b"\\r" not in b; s=b.index(begin)+len(begin); e=b.index(end,s); assert s<e and b[e-1:e]==b"\\n"; print(hashlib.sha256(b[s:e]).hexdigest())' docs/plans/2026-07-23-traceweaver-0.3-repair-amendment-2-release-ratification.md
```

<!-- BEGIN OWNER AUTHORITY PAYLOAD -->
## Owner ratification and accepted risk

On 2026-07-23, the owner directly authorized a PR, merge, tag, and release to
replace the broken 0.3 release with TraceWeaver Core 0.3.0.

The owner explicitly ratifies the existing U0–U6 repair commits at
`474771e6073a4c49a52bc7ea0f540db68418271c` as a **one-time accepted risk** for
that publication. This is not a claim that EXC-TW-011 was originally activated
validly, and it does not convert the prior held authority closure into a
historically clean approval.

TraceWeaver overhead cannot be proven or guaranteed from this repair. The known
estimate is 54 process minutes and 132 delivery minutes: a 29% process share of
known total effort. U3 and portions of U5 have missing timing evidence, so no
hard-ceiling proof can be made. The 20% target is not met by the known estimate;
no release copy, requirement, or evidence record may claim proven overhead
improvement or a guaranteed overhead ceiling.

U7 and dogfood are moved from a pre-release gate to post-release, prospective
measurement. Version 0.3.0 must not claim deployment or dogfood completion,
runtime enforcement, universal host activation, or a proven overhead result.

If publication checks fail, publication must stop. The release may be deprecated
or rolled back through a subsequent corrective release or GitHub release
deprecation; do not overwrite or delete a tag, and do not alter the existing
0.2.8 release.
<!-- END OWNER AUTHORITY PAYLOAD -->

## Reproducible canonicalization of EXC-TW-011

This ratification resolves the prior digest defect without changing history.
The input is the `EXC-TW-011` blob at repair HEAD
`474771e6073a4c49a52bc7ea0f540db68418271c`, read as exact UTF-8/LF bytes.
There must be exactly one column-0 line for each of these keys:

`status`, `review_receipt_id`, `reviewer`, `reviewed_at`, and
`reviewed_semantic_diff_digest`.

For each such line, replace the entire value-bearing line with exactly
`<key>:\n` (no trailing spaces); preserve every other byte. SHA-256 of the
result must be:

`a411eec472341b197c0b0a5743cb487d26d6232dfefe1358d501496a4d2cbc2d`

Portable verification:

```bash
git show 474771e6073a4c49a52bc7ea0f540db68418271c:.traceweaver/exceptions/EXC-TW-011-0.3-recovery-bootstrap.yml | python3 -c 'import hashlib,re,sys; b=sys.stdin.buffer.read(); assert b.decode("utf-8").replace("\r\n","\n").encode()==b; keys=(b"status",b"review_receipt_id",b"reviewer",b"reviewed_at",b"reviewed_semantic_diff_digest"); [(_ for _ in ()).throw(AssertionError(k)) if len(re.findall(rb"(?m)^"+re.escape(k)+rb":[^\n]*\n",b))!=1 else None for k in keys]; c=b; [globals().__setitem__("c",re.sub(rb"(?m)^"+re.escape(k)+rb":[^\n]*\n",k+rb":\n",c)) for k in keys]; print(hashlib.sha256(c).hexdigest())'
```

The recorded `c8eaaf9e…` digest remains a historical, non-reproducible record.
It is superseded only for this release decision by this ratification and the
canonicalization above.

## Release integration boundaries

Create a release-integration branch only. Before integration, fetch and require
`origin/main` to be exactly `260b29d8bd88c6c00802893f7900d4b4987b8f52`.
Any drift stops the release: perform a renewed merge probe, obtain a renewed Sol
review, and obtain renewed owner approval before proceeding. Merge that current
`main` into the repair branch before opening the PR. If manual conflict
resolution is required, it is allowed only in these six paths and must preserve
both current-main changes and the accepted repair semantics:

1. `.traceweaver/intent-contract.current.yml`
2. `.traceweaver/intent-contract.yml`
3. `CHANGELOG.md`
4. `docs/generated/traceability-dashboard.md`
5. `docs/generated/traceability-data.json`
6. `requirements.md`

Release-only edits are allowed only in this amendment, the six conflict paths,
and these paths:

- `traceability-matrix.md`
- `docs/generated/traceability-graph.mmd`
- `.claude-plugin/marketplace.json`
- `plugins/traceweaver-core/.claude-plugin/plugin.json`
- `plugins/traceweaver-core/.codex-plugin/plugin.json`
- `plugins/traceweaver-core/.cursor-plugin/plugin.json`
- `plugins/traceweaver-core/.antigravity-plugin/plugin.json`
- `README.md`
- `plugins/traceweaver-core/README.md`
- `docs/guides/using-traceweaver.md`
- `docs/guides/traceweaver-from-prompt-to-proof.md`
- `docs/plans/2026-07-22-traceweaver-roadmap.md`
- `docs/validation/traceweaver-plugin-0.3-release.md`

Clean auto-merges may bring other main-owned paths unchanged. No manual edit is
permitted outside this allowlist. If a controlled source changes, rebuild its
generated projections with canonical repository tooling only, then conduct an
exact diff review.

## Mandatory publication sequence

1. A Sol reviewer inserts only its receipt ID, result, and reviewed payload SHA
   in the outside-payload receipt section below and independently checks the
   canonical digest, release boundaries, held claims, and final diff.
2. Compute the exact post-receipt whole-file SHA-256. The owner approves that
   SHA **externally in this task**, with no later amendment-file mutation.
   External approval evidence must bind that file SHA and be carried into the
   PR/release receipt; it must not be inserted back into this approved file.
3. The release integrator merges current `main`, resolves only permitted
   conflicts, applies the version/doc/projection changes, and performs exact
   diff review.
4. A fresh Terra verifier runs the full focused repair and release gates.
   Its receipt must bind the exact integration commit SHA and tree SHA.
5. One Sol release review accepts the release state, also binding the exact
   integration commit SHA and tree SHA.
6. Commit and push a ready PR; wait for all blocking CI gates; merge only after
   they pass.
7. The version-bump merge push to `main` automatically triggers
   `.github/workflows/release-on-version-bump.yml`; do not manually run it.
   After merge, monitor that automatic workflow to generate
   `traceweaver-core--v0.3.0` and the `TraceWeaver Core 0.3.0` GitHub release.
8. Record the resulting `main` merge SHA and verify the peeled tag
   `traceweaver-core--v0.3.0^{commit}` equals it. Verify the GitHub release,
   assets, and published version. Stop immediately on any failure; do not
   directly overwrite or delete a tag.

## Held claims after publication

Publication is not deployment, installation, runtime proof, enforcement,
dogfood, universal host activation, or a measured overhead guarantee. U7 and
dogfood remain prospective post-release work with separate evidence and review.

## Review receipt (outside owner payload)

- Sol receipt: `SOL-AMEND2-2026-07-23-9F1BEAEF`
- Sol result: `ACCEPT`
- Payload SHA-256: `9f1beaef19b9fd7bb79b4d11431300240c21314ec174029cbd1c647e6d674a96`

After a Sol ACCEPT receipt is inserted, compute the post-receipt whole-file
SHA-256 and obtain owner approval externally. Do not mutate this file again to
record that approval.
