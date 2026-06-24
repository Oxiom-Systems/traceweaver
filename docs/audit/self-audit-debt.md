<!-- TRACEWEAVER: file-role=self-audit-debt-record; req=REQ-TW-063; trace=TRACE-TW-044; ver=VAL-TW-016 -->

# Self-Audit Baseline Debt

Findings surfaced by `scripts/traceweaver-audit-self` (whole-repo audit of
this repository) as of 2026-06-14. The self-audit is a non-blocking report;
this record makes its current baseline visible and tracked rather than silently
accumulating. Tracked by GAP-TW-2026-06-14-008. Drive this list down through
`tw-audit` / `tw-work` under approved authority; it is not auto-cleanup authority.

Total findings: 27

## CTA-MISSING-FILE-ANCHOR (8)

- `.claude/install-traceweaver.sh`
- `.claude/settings.json`
- `.claude/settings.local.json`
- `.github/workflows/release-on-version-bump.yml`
- `.github/workflows/smoke-tests.yml`
- `examples/claude-code-on-web/README.md`
- `examples/claude-code-on-web/install-traceweaver.sh`
- `examples/claude-code-on-web/settings.json`

## CTA-MISSING-MATRIX-PATH (14)

- `.claude/install-traceweaver.sh`
- `.claude/settings.json`
- `.claude/settings.local.json`
- `.github/workflows/release-on-version-bump.yml`
- `.github/workflows/smoke-tests.yml`
- `examples/claude-code-on-web/README.md`
- `examples/claude-code-on-web/install-traceweaver.sh`
- `examples/claude-code-on-web/settings.json`
- `plugins/traceweaver-core/skills/baseline-configuration-control/SKILL.md`
- `plugins/traceweaver-core/skills/risk-gap-change-control/SKILL.md`
- `plugins/traceweaver-core/skills/technical-review-and-audit-gate/SKILL.md`
- `plugins/traceweaver-core/skills/tw-update/SKILL.md`
- `plugins/traceweaver-core/skills/validation-planner/SKILL.md`
- `plugins/traceweaver-core/skills/verification-planner/SKILL.md`

## TW-AUDIT-DARK-BEHAVIOR (2)

- `.claude/install-traceweaver.sh`
- `examples/claude-code-on-web/install-traceweaver.sh`

## TW-AUDIT-DUPLICATE-BEHAVIOR (1)

- `examples/claude-code-on-web/install-traceweaver.sh`

## TW-AUDIT-GENERATED-SURFACE-HELD (1)

- `.traceweaver/audit/code-traceability-audit.md`

## TW-AUDIT-SUPPORT-SURFACE-HELD (1)

- `.traceweaver/ce-replacement-classification.generated.json`

## Disposition notes

- `.claude/`, `.github/workflows/`, and `examples/` are infrastructure /
  example surfaces, not product behavior. The scanner currently treats them
  as product targets because they are absent from `audit_surface_class`.
  Candidate fix: add them to the support-surface classification (a separate
  reviewed scanner change), which would also reduce report noise.
- The two `install-traceweaver.sh` copies are a genuine dark duplicate
  (`.claude/` copied from `examples/`); consolidation or an approved
  intentional-copy exception is the disposition decision.
- The six 0.2.5 skill `SKILL.md` files lack matrix rows: real traceability
  debt from the rapid promotion releases; add matrix rows or an approved
  support-surface exception.
