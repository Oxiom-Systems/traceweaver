---
title: "feat: TraceWeaver audit wrapper"
status: static_implementation_plan
date: "2026-05-20"
owner: Oxiom Systems
requirements:
  - REQ-TW-061
  - REQ-TW-062
  - REQ-TW-063
trace_ids:
  - TRACE-TW-052
verification:
  - VER-TW-065
---

<!-- TRACEWEAVER: file-role=audit-wrapper-plan; req=REQ-TW-061; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-plan; req=REQ-TW-062; trace=TRACE-TW-052; ver=VER-TW-065 -->
<!-- TRACEWEAVER: file-role=audit-wrapper-plan; req=REQ-TW-063; trace=TRACE-TW-052; ver=VER-TW-065 -->

# feat: TraceWeaver Audit Wrapper

## Intent

Add a dedicated `tw-audit` skill so users can ask whether a TraceWeaver project
has the required authority, traces, verification evidence, and validation or
acceptance evidence without remembering the lower scanner and acceptance-checker
sequence.

## Authority

The wrapper is bounded by existing reviewed audit authority:

- `REQ-TW-061`: every user-facing `tw-*` skill needs task-scoped prompt,
  authority inputs, and systems-engineering knowledge access.
- `REQ-TW-062`: closure claims need implementation trace, verification
  procedure/result, and validation evidence or held-validation record.
- `REQ-TW-063`: audit mode reports evidence-backed candidate findings without
  automatic removal, merge, deprecation, publication, or release authority.

## Scope

Add:

- `plugins/traceweaver-core/skills/tw-audit/SKILL.md`
- `plugins/traceweaver-core/skills/tw-audit/references/traceweaver-operating-modes.md`
- routing and package-surface mentions in README, plugin README, `tw-auto`, and
  `using-agent-skills`
- deterministic smoke coverage that treats `tw-audit` as a direct TraceWeaver
  skill and checks the audit flow contract
- matrix and generated-view records for static/advisory implementation status

Do not add runtime-enforcement, automatic arbitrary-project audit mutation,
cleanup/deletion authority, publication, release, package, upstream, clean
replacement, Vestro/R31 dogfood, or autonomous-publication claims.

## Verification

Run:

```sh
bash -n scripts/traceweaver-smoke-tw-skill-behavior
TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior
scripts/traceweaver-smoke-systems-engineering-audit-closure
scripts/traceweaver-smoke-code-traceability
scripts/traceweaver-smoke-acceptance-results
scripts/traceweaver-generate-traceability-views --root .
scripts/traceweaver-smoke-traceability-generated-views
git diff --check
```

## Validation

The first accepted use is static/advisory: reviewers can enter through
`tw-audit`, see the authority triad, code-trace, verification, validation, and
generated-view checks in one flow, and receive a next TraceWeaver route without
mistaking audit findings for cleanup or release authority.

Runtime invocation and real external-project dogfood remain held.
