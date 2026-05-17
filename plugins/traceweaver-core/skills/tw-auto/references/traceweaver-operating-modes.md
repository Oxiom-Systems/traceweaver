# TraceWeaver Operating Modes

<!-- TRACEWEAVER: file-role=operating-mode-policy; req=REQ-TW-057; trace=TRACE-TW-032; ver=VER-TW-041 -->
<!-- TRACEWEAVER: file-role=operating-mode-policy; req=REQ-TW-056; trace=TRACE-TW-045; ver=VER-TW-057 -->

Status: static planning policy

TraceWeaver uses operating modes to keep systems-engineering gates proportional
to the risk of the current work. The goal is to preserve stakeholder intent and
verification discipline without turning every implementation task into a broad
authority-record polishing loop.

## Authority Baseline Mode

Use Authority Baseline Mode when work changes any of these:

- requirements, accepted scope, stakeholder intent, validation intent, or
  must-not-change constraints;
- Intent Contract authority fields, baseline hashes, review IDs, accepted
  evidence, held claims, or publication policy;
- release, package-ready, upstream-ready, runtime, clean-replacement,
  enforcing, or publication claims;
- gap, change, exception, accepted-risk, or human-decision authority.

Authority Baseline Mode requires requirements-quality review when requirements
or validation intent change, trace/hash/status consistency for authority
records, and strict document review before the changed baseline can authorize
implementation or publication.

## Implementation Gate Mode

Use Implementation Gate Mode for behavior-bearing code, script, skill, fixture,
or test work when approved authority is unchanged.

Implementation Gate Mode requires:

- a current approved requirement or approved exception for the work;
- verification evidence or an approved verification gap;
- validation question or validation evidence path;
- changed-file code/test trace-anchor scanning for behavior-bearing files plus
  linked tests, fixtures, and smokes;
- `tw-traceability-check` before accepted code review;
- `tw-code-review` for behavior/code changes.

Implementation Gate Mode does not require broad historical authority-doc review
for unrelated stale wording. Historical wording, old unanchored files, and
pre-existing trace gaps are baseline debt unless the current change touches
them or uses them to support a done, runtime, publication, release, or accepted
authority claim.

## Review-Staging Mode

Use Review-Staging Mode only as a handoff from completed unchanged-authority
implementation work into `tw-code-review` or `tw-doc-review`.

Review-Staging Mode may stage only the explicit changed work/evidence files that
belong to the current review scope after verification and traceability checks
pass or are explicitly held. It must report the staged path list and must stop
when requirements, authority, verification, trace, target files, or review scope
are unclear, contradictory, stale, incomplete, or imply a material authority
change.

Review-staging is not publication. It does not authorize commits, branches,
pushes, PRs, release claims, remote mutation, publication-wrapper delegation, or
clean-replacement claims.

## Post-Work Review Closure Mode

Use Post-Work Review Closure Mode after `tw-work` completes an unchanged-authority
implementation package and the user did not explicitly ask to stop after work.
This mode continues the loop through `tw-traceability-check`, scoped
`tw-code-review`, bounded `tw-work` repair when review findings are repairable,
single clean-review recording, and scoped `tw-doc-review` only when current
authority/status/hash/evidence files changed.

This mode must stop instead of continuing when the post-work state exposes
missing or changed authority, failed verification that cannot be repaired within
the bounded cycle, unresolved P0/P1 traceability findings that require human
authority, missing review skills, reviewer-capacity backpressure that prevents a
trustworthy review, or any commit/push/PR/deploy/release/publication action.

An explicit user stop such as "stop after tw-work" keeps review, done,
publication, runtime, release, and clean-replacement claims held.

## Publication Mode

Use Publication Mode for committing, pushing, opening or updating PRs, release
notes, package publication, remote mutation, or any publication claim.

Publication Mode is held until the controlled publication route proves:

- approved authority is unchanged or separately reviewed;
- traceability and code/test anchors are coherent for the staged tree;
- verification passes;
- blocking review findings are closed;
- staged-tree identity is coherent;
- target branch/remote and credential boundary are explicit;
- human confirmation or a reviewed Intent Contract publication override
  authorizes the exact target.

## Review Debt Rule

Review debt is blocking only when it contradicts current accepted scope,
pending gate, held/runtime/publication claims, artifact identity, or material
authority. Otherwise it must be reported as non-blocking debt with a next step
and must not restart the whole authority-polishing cycle.

## Human Decision Rule

`tw-auto` and review wrappers must pause for user input when requirements are
unclear, contradictory, incomplete, missing, or need material authority change.
Agents may not create, broaden, reinterpret, or silently approve requirements
to keep implementation moving.
