# Code Traceability Findings

## TW-AUDIT-SUPPORT-SURFACE-HELD

- id: TW-AUDIT-SUPPORT-SURFACE-HELD
- severity: P2
- status: held
- title: Support surface is classified separately from product behavior
- evidence: 557 behavior-bearing audit target(s) classified as support_surface; samples=.memsearch/memory/2026-05-07.md,.memsearch/memory/2026-05-06.md,.memsearch/memory/2026-05-08.md,.memsearch/memory/2026-05-05.md,.memsearch/memory/2026-05-04.md.
- affected_ids: REQ-TW-063
- claim_impact: audit_surface_classified_held_not_product_closure
- remediation: Audit support surfaces with their owning workflow or fixture contract; do not use support-surface findings as direct product cleanup authority.
- surface_class: support_surface
- file_count: 557
- sample_files: .memsearch/memory/2026-05-07.md, .memsearch/memory/2026-05-06.md, .memsearch/memory/2026-05-08.md, .memsearch/memory/2026-05-05.md, .memsearch/memory/2026-05-04.md
- evidence_source: whole_repo_audit_surface_classifier
- confidence: high
- supported_scope: Authority/evidence docs, TraceWeaver references, fixtures, verification smokes, audit helpers, local memory, Beads metadata, context captures, imported CE engines, and packaged reviewer agents
- known_limitation: Surface classification reduces false product-code cleanup signals; it does not prove the classified surface is clean or safe to delete.
- file: .memsearch/memory/2026-05-07.md
- start: 1
- end: 1

## TW-AUDIT-GENERATED-SURFACE-HELD

- id: TW-AUDIT-GENERATED-SURFACE-HELD
- severity: P2
- status: held
- title: Generated evidence surface is classified separately from product behavior
- evidence: 5 behavior-bearing audit target(s) classified as generated_surface; samples=.traceweaver/audit/tw-audit-dogfood-2026-05-20-acceptance-check.md,.traceweaver/audit/tw-audit-dogfood-2026-05-20-code-traceability-check.md,.traceweaver/audit/tw-audit-dogfood-2026-05-20-behavior-code-traceability-check.md,.traceweaver/audit/code-traceability-check.md,.traceweaver/audit/code-traceability-audit.md.
- affected_ids: REQ-TW-063
- claim_impact: audit_surface_classified_held_not_product_closure
- remediation: Regenerate and drift-check derived artifacts, or record a generated-file exception; do not require inline product anchors in generated output.
- surface_class: generated_surface
- file_count: 5
- sample_files: .traceweaver/audit/tw-audit-dogfood-2026-05-20-acceptance-check.md, .traceweaver/audit/tw-audit-dogfood-2026-05-20-code-traceability-check.md, .traceweaver/audit/tw-audit-dogfood-2026-05-20-behavior-code-traceability-check.md, .traceweaver/audit/code-traceability-check.md, .traceweaver/audit/code-traceability-audit.md
- evidence_source: whole_repo_audit_surface_classifier
- confidence: high
- supported_scope: Generated TraceWeaver views and audit reports
- known_limitation: Surface classification reduces false product-code cleanup signals; it does not prove the classified surface is clean or safe to delete.
- file: .traceweaver/audit/tw-audit-dogfood-2026-05-20-acceptance-check.md
- start: 1
- end: 1

## TW-AUDIT-WORKTREE-DEBT-SURFACE

- id: TW-AUDIT-WORKTREE-DEBT-SURFACE
- severity: P2
- status: held
- title: Worktree copy surface is held as audit debt
- evidence: 2655 behavior-bearing audit target(s) classified as worktree_debt; samples=.worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-07.md,.worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-13.md,.worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-12.md,.worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-06.md,.worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-05.md.
- affected_ids: REQ-TW-063
- claim_impact: audit_surface_classified_held_not_product_closure
- remediation: Audit the originating worktree or remove the stale copy through an approved cleanup decision; do not treat copied worktree findings as product behavior closure evidence.
- surface_class: worktree_debt
- file_count: 2655
- sample_files: .worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-07.md, .worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-13.md, .worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-12.md, .worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-06.md, .worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-05.md
- evidence_source: whole_repo_audit_surface_classifier
- confidence: high
- supported_scope: Local .worktrees copies created for branch or repair work
- known_limitation: Surface classification reduces false product-code cleanup signals; it does not prove the classified surface is clean or safe to delete.
- file: .worktrees/codex/tw-skill-behavior-audit/.memsearch/memory/2026-05-07.md
- start: 1
- end: 1

## TW-AUDIT-SOURCE-MATERIAL-DEBT-SURFACE

- id: TW-AUDIT-SOURCE-MATERIAL-DEBT-SURFACE
- severity: P2
- status: held
- title: Source-material cache is held as provenance debt
- evidence: 131 behavior-bearing audit target(s) classified as source_material_debt; samples=.source-materials/README.md,.source-materials/.conversion-libs/python312/pycparser/c_parser.py,.source-materials/.conversion-libs/python312/pycparser/_ast_gen.py,.source-materials/.conversion-libs/python312/pycparser/__init__.py,.source-materials/.conversion-libs/python312/pycparser/c_ast.py.
- affected_ids: REQ-TW-063
- claim_impact: audit_surface_classified_held_not_product_closure
- remediation: Keep source caches private/local or record a reviewed provenance boundary before using them as product evidence; do not mutate or clean them from audit output alone.
- surface_class: source_material_debt
- file_count: 131
- sample_files: .source-materials/README.md, .source-materials/.conversion-libs/python312/pycparser/c_parser.py, .source-materials/.conversion-libs/python312/pycparser/_ast_gen.py, .source-materials/.conversion-libs/python312/pycparser/__init__.py, .source-materials/.conversion-libs/python312/pycparser/c_ast.py
- evidence_source: whole_repo_audit_surface_classifier
- confidence: high
- supported_scope: Local .source-materials caches, conversion libraries, and raw source evidence
- known_limitation: Surface classification reduces false product-code cleanup signals; it does not prove the classified surface is clean or safe to delete.
- file: .source-materials/README.md
- start: 1
- end: 1
