# Fork Checkout Preflight

Local path: `REDACTED_LOCAL_PATH`

Origin remote: `https://github.com/jjziets/agent-skills.git`

Upstream remote: `https://github.com/addyosmani/agent-skills.git`

Base branch: `main`

Base revision: `1f66d57`

Working branch: `feature/systems-engineering-traceability`

Working tree before U2: clean

Preflight completed by: Codex

Date: 2026-04-25

## U1.5 Refresh - 2026-04-28

Purpose: refresh configuration-control evidence before any U2-U5.5 runtime,
validation, or packaging work continues.

Maintainer response class: `no response`

Allowed next action under the closeout plan: U1.5 fork-state evidence only.
U2-U5.5 runtime/package work remains held unless the product owner records an
explicit local-only strategy with scope bounds.

## Local-Only Strategy Decision - 2026-04-29

Decision: Approved for local/live TraceWeaver candidate only.

Approved by: product owner direction in Codex session.

Allowed scope:

- Continue U2-U5.5 only for the local/live TraceWeaver candidate.
- Keep upstream-ready and public-release-ready claims held while upstream
  response class is `no response`.
- Keep Light v0.1 promoted scope limited to `requirements-reviewer` and
  `systems-engineering-traceability`.
- Treat internal/private Core material as non-promotable provenance only.
  Public/runtime promotion must consume the scrubbed public candidate.

Required controls:

- Name the target runtime and discovery mechanism before U5.5 equivalence can
  pass.
- Bind R31, U5.5 harness evidence, target-runtime equivalence, fork-diff
  classification, packaging anatomy, and traceability-value evidence to the
  same final live candidate commit.
- Reset affected gates to `held` after any runtime/package-controlled file
  changes unless explicitly impact-reviewed.

Current checkout evidence:

| Field | Value |
|-------|-------|
| Local path | `REDACTED_LOCAL_PATH` |
| Origin remote | `https://github.com/jjziets/agent-skills.git` |
| Upstream remote | `https://github.com/addyosmani/agent-skills.git` |
| Working branch | `feature/systems-engineering-traceability` |
| Current HEAD | `987793dfd477bc205a0a49efe4ec1b1e31045903` |
| Upstream merge-base checked | `1f66d57a5e1b041b11e49a8cdca275aa472f0131` |
| U5 validated baseline | `ca6ff66d46f140da72f423ea3dec819f81ef5337` |
| U5.5 candidate | `987793dfd477bc205a0a49efe4ec1b1e31045903` |
| Working tree status | Dirty: `AGENTS.md` modified before this U1.5 refresh |

The `AGENTS.md` modification is outside the U1-U5.5 runtime candidate. Any
validation, packaging, or runtime-sync gate must either start from a clean
checkout or record an explicit owner explanation that the dirty file is outside
the live candidate.

Final candidate evidence index:

```text
internal_provenance_record: TWCORE-INT-PROV-2026-04-29-001
scrubbed_public_candidate_source: required for public/runtime promotion
live_agent_skills_repo: addyosmani/agent-skills
upstream_base_commit: ca6ff66d46f140da72f423ea3dec819f81ef5337
live_candidate_commit: 987793dfd477bc205a0a49efe4ec1b1e31045903

promoted_skills:
  - requirements-reviewer
  - systems-engineering-traceability

non_promoted_core_candidates:
  - needs-and-requirements-capture
  - risk-gap-change-control

gates_bound_to_live_candidate_commit:
  - R31 adoption validation
  - U5.5 harness evidence
  - target-runtime discovery equivalence
  - fork-diff classification
  - packaging anatomy check
  - traceability-specific value scenario
```

## U1 Proceed / Revise / Wait Decision

Historical decision: Proceed

Reason: No maintainer response was recorded before local fork validation work continued. Proceeding is limited to disposable fork validation and does not authorize upstream PR packaging.

Maintainer response status: No response recorded in this local evidence file.

Scope decision: Matrix template remains mandatory. Maintainer pushback on the matrix template reopens MVP scope instead of silently removing the artifact.

Decision date/session: 2026-04-25 / U1 preflight session

Approved by: Hannes / project owner direction in planning thread

## Verification

- Local checkout path recorded: yes.
- `origin` points to the contributor fork: yes, `jjziets/agent-skills`.
- `upstream` points to `addyosmani/agent-skills`: yes.
- Working branch exists and is active: yes, `feature/systems-engineering-traceability`.
- Working tree clean before U2 begins: yes, `git status --short` produced no output.
- U2-U4 edits are scoped to this checkout: yes, target checkout is `REDACTED_LOCAL_PATH`.

## Notes

The GitHub CLI is configured for HTTPS git operations, so remotes use HTTPS rather than SSH. This still satisfies the configuration-control rule: `origin` is the contributor fork and `upstream` is the upstream `addyosmani/agent-skills` repository.
