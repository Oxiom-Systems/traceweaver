---
record_type: candidate_verification
date: "2026-08-21"
base: f90fbd6d6560bd746aa5be3878960053052095b5
scope: "0.4.0 PR2 SEC hardening, graph projection, and derived semantic HTML preview"
requirements: [REQ-TW-088, REQ-TW-092]
artifacts: [ART-TW-075, ART-TW-076, ART-TW-077]
traces: [TRACE-TW-066, TRACE-TW-069, TRACE-TW-070]
verification: [VER-TW-086, VER-TW-089, VER-TW-090]
status: clean_room_candidate_verification_passed_no_formal_acceptance
---

# 0.4.0 PR2 Candidate Verification

This is worktree-local candidate evidence only. It does not approve authority,
accept candidate semantic-HTML requirements, or attest runtime, CI, publication,
release, cutover, consumer validation, Vestro, or Air Router behavior.

Commands passed on the stated base:

- `ruby -c plugins/traceweaver-core/skills/tw-graph/scripts/traceweaver-tw-graph`;
- `bash -n scripts/traceweaver-semantic-html-preview` and `ruby -c plugins/traceweaver-core/skills/tw-graph/scripts/traceweaver-semantic-html-preview`;
- `scripts/traceweaver-smoke-tw-graph`, covering deterministic double build,
  stale/missing/omitted/orphan/unresolvable/hash/provenance negatives, query
  operations, duplicate candidates, cycle accounting, PR freshness text, and
  Graphify absence. The Git-backed cache fixture also proves that changing an
  already-dirty file invalidates the cache even when `git status` has the same
  path set;
- `scripts/traceweaver-smoke-semantic-html-preview`, covering exact byte
  double build, source drift, hand-edit rejection, malformed templates,
  destination-aware exact-ID links, every generated href/fragment target,
  range/unresolved literal text, text parity, fail-closed base/refresh/resource/
  event/CSS/SVG/MathML negatives, exclusion from graph closure, and execution
  on the Ubuntu CI tool baseline without requiring `rg`;
- `scripts/traceweaver-smoke-skill-execution-contract`, covering all 28
  callables, source/installed resolution, packaged `SKILL.md` byte binding,
  installed-source drift refusal, alias inheritance, route/hold composition,
  and missing/stale/invalid/ambiguous refusal; and
- the Terra routing, install/discovery, generated-view drift, bounded snapshot,
  no-publication, code-anchor, workflow-profile, and convergence regression
  suites named by the PR workflow.

All package manifests remain version `0.3.2`. Graph and HTML artifacts are
derived and ignored; Markdown/YAML remain canonical.

## Holds

REQ-TW-089/090 stay optional Graphify enrichment. The copied semantic-HTML
candidate remains REQ-TW-093 through REQ-TW-099 and is not accepted authority.
No canonical HTML cutover or consumer migration is included.

## Clean-room disposition and next

This pass was performed directly against the current code/doc tree rather than
through another TraceWeaver review-series invocation. It found and repaired a
dirty-byte graph-cache false-freshness path, unbound SEC skill bytes, lost
default SEC holds, stale current validation wording, and obsolete 0.3.x next
steps. No accepted-review identity was minted.

Next, complete the bounded read-only Vestro/Air Router validation, mechanically
finish the already-resolved rebase, and prepare this exact tree for PR checks.
No new document-discovery cycle is required unless those steps introduce a
genuine behavior regression.
