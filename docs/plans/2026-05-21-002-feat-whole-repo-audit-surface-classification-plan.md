---
title: "feat: whole-repo audit surface classification"
status: reviewed_held
date: "2026-05-21"
owner: Oxiom Systems
requirements:
  - REQ-TW-054
  - REQ-TW-063
trace_ids:
  - TRACE-TW-044
  - TRACE-TW-052
verification:
  - VER-TW-067
---

<!-- TRACEWEAVER: file-role=audit-surface-classification-plan; req=REQ-TW-063; trace=TRACE-TW-052; ver=VER-TW-067 -->

# feat: Whole-Repo Audit Surface Classification

## Intent

Classify the current whole-repo audit findings by surface type so TraceWeaver
does not mistake generated/local support debt for product behavior, while still
blocking real product behavior that lacks authority, trace, verification, or
validation evidence.

## Operating Mode

Implementation Gate Mode. The accepted authority is unchanged: `REQ-TW-054`
defines code/test trace anchors, and `REQ-TW-063` defines audit-mode candidate
findings with held or unknown coverage for unsupported surfaces. This plan does
not add cleanup, deletion, deprecation, publication, release, runtime, semantic
completeness, Vestro/R31, or clean-replacement authority.

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Baseline hash:
  `9e94f5a1f2aa4f43562a505c40c9ecdc84a624d27723613b17b8062558bc36f3`
- Requirement authority: `requirements.md`
- Intent Contract: `.traceweaver/intent-contract.yml`
- Requirements:
  - `REQ-TW-054`: behavior-bearing units need code/test trace anchors and
    reviewed matrix evidence.
  - `REQ-TW-063`: audit mode must report evidence-backed candidate findings
    and hold unsupported or uninspectable surfaces instead of treating them as
    clean.
- Validation question: Can a whole-repo audit separate support-surface,
  generated-surface, worktree, and source-material debt from real product
  behavior without granting cleanup authority?

## Classification Plan

| Surface | Examples | Audit treatment | Claim boundary |
| --- | --- | --- | --- |
| support-surface | authority/evidence docs, TraceWeaver references, `.memsearch/`, `.context/`, `.beads/`, `fixtures/`, verification smokes, audit helpers, packaged CE support and agents | emit held support-surface finding with counts and samples | not product behavior closure evidence |
| generated-surface | `docs/generated/`, `.traceweaver/audit/` | emit held generated-surface finding and rely on regeneration/drift checks | generated output does not need inline product anchors |
| worktree debt | `.worktrees/` | emit held worktree-debt finding with counts and samples | audit originating worktree or decide cleanup separately |
| source-material debt | `.source-materials/` | emit held source-material finding with counts and samples | provenance/source cache boundary, not product behavior |
| real product behavior | root product code, TraceWeaver-owned generators/installers/wrappers/manifests, and source files outside held surfaces | run existing authority, matrix, verification, dark/obsolete/orphan/duplicate checks | blocks traceability and review if P1/P2 authority findings remain |

## Implementation Tasks

1. Add an audit-mode surface classifier to
   `traceweaver-check-code-anchors`.
2. Emit one structured held finding per classified non-product surface instead
   of thousands of product-code anchor findings.
3. Keep real product behavior in the existing scanner target list.
4. Add deterministic fixture coverage proving all requested surface classes are
   classified while real untraced product behavior still blocks.
5. Repair real product-behavior audit false positives found during dogfood:
   add a reviewed anchor to the CE replacement classifier and constrain
   obsolete-authority detection to the actual requirement row status cell.
6. Update traceability evidence and generated views after verification.

## Verification

Run:

```sh
ruby -c plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors
ruby -c scripts/traceweaver-classify-ce-replacement
bash -n scripts/traceweaver-smoke-code-traceability
scripts/traceweaver-smoke-code-traceability
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --mode audit --markdown .traceweaver/audit/code-traceability-audit.md --jsonl .traceweaver/audit/code-traceability-audit.jsonl
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-code-anchors --root . --mode implementation --changed-files /tmp/tw-surface-changed-files.txt --markdown .traceweaver/audit/code-traceability-check.md --jsonl .traceweaver/audit/code-traceability-check.jsonl
plugins/traceweaver-core/skills/tw-traceability-check/scripts/traceweaver-check-acceptance-results --root . --file docs/validation/traceweaver-system-acceptance-results.md
scripts/traceweaver-smoke-systems-engineering-audit-closure
scripts/traceweaver-generate-traceability-views --root .
scripts/traceweaver-smoke-traceability-generated-views
TRACEWEAVER_TW_SKILL_BEHAVIOR_RUNTIME=0 scripts/traceweaver-smoke-tw-skill-behavior
git diff --check
```

## Held Claims

Audit findings remain candidate evidence. This work does not authorize
automatic cleanup, deletion, merge, deprecation, publication, release/package,
upstream readiness, runtime enforcement, clean replacement, Vestro/R31
validation, or semantic-completeness claims.

## Current Result

As of the 2026-05-21 dogfood run, whole-repo audit mode exits blocked only
because the four classified non-product surfaces are intentionally held:
support-surface, generated-surface, worktree-debt, and source-material-debt.
No unclassified real-product behavior finding remains in the audit output.

## Review Repair

The review-blocker repair refreshes the Intent Contract active gate/scope to
this VER-TW-067 work item and adds scoped `.gitignore` negations so the
deterministic fixture's `.memsearch`, `.worktrees`, and `.source-materials`
support-surface files are visible to normal review and staging commands. The
global/local caches remain ignored outside this fixture. Scoped code review and
status/hash document review passed after the repair; runtime, publication, and
cleanup claims remain held.
