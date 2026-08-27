---
id: TW-AUTH-GATE-2026-08-24-V060-TERMINAL-RELEASE-TRUTH-001
status: proceed_one_bounded_terminal_repair_publication_held
date: 2026-08-26
owner: Oxiom Systems
proposed_change: CHG-TW-2026-08-24-002
proposed_exception: EXC-TW-019
requirements: REQ-TW-037, REQ-TW-145
trace: TRACE-TW-074
verification: VER-TW-094
validation: VAL-TW-042
publication_authority: none
---

# Core 0.6.0 terminal release-truth authority gate

## Gate result

**PROCEED — bounded behavior work only.** The owner-approved exception is
promoted, profile revision 3 is frozen, the L3 V&V state is current, RED
reproduces both findings, and the scoped authority/document review is clean.

## Authority chain evaluated

- Stakeholder intent: complete and release Core 0.6.0 while preserving exact
  authority, evidence, product, review, and publication boundaries.
- Approved requirements: `REQ-TW-037`, `REQ-TW-130`, `REQ-TW-136`,
  `REQ-TW-143`, `REQ-TW-144`, and `REQ-TW-145`.
- Normal plan: one integrated review, one batched repair maximum, and one
  targeted reviewer resume; all are consumed and remain the default rule.
- Terminal exception: owner-approved `CHG-TW-2026-08-24-002` /
  `EXC-TW-019`, recorded as a one-use candidate-specific deviation.
- Verification: `VER-TW-094` and the targeted continuation record.
- RED: `RESULT-TW-051-TERMINAL-RELEASE-TRUTH-RED-001` reproduces both
  retained failures.
- Baseline: requirements
  `sha256:434eea9da9a22c8630a75e31e5e8898182cad4e9954111968753ec48206a3624`;
  workflow profile revision 3
  `sha256:4216516563801166003354286256243b486deb4bb7a9dc8830e54f915a0a21a0`.
- Validation: the accepted prior `VAL-TW-042` result is historical after the
  first functional mutation and must not be inherited.

## Authorized work

- repair the shared lifecycle source contract in
  `scripts/traceweaver-refresh-v060-model-context-oracle` and
  `scripts/traceweaver-check-release-readiness`;
- make the production v3 gate accept only the real clean,
  exact-product-bound V&V capsule state it requires;
- update the focused release-integrity smoke and controlled evidence bindings;
- rerun verification, establish one new functional digest, and execute fresh
  read-only Vestro/Air Router product trials; and
- after explicit product acceptance, continue the existing Terra reviewer once
  for `P1-005-continuation` and `P1-006-continuation` only.

## Held actions

- any capability or finding outside the two retained fingerprints;
- consumer mutation, new reviewer identity, full review, fan-out, repair
  subagent, or later repair/review cycle;
- semantic-HTML authority cutover;
- reviewer-bound oracle write before clean retained closure; and
- staging, commit, push, PR, merge, tag, GitHub Release, deployment, runtime,
  or publication action.

## Next gate

Run one main-thread `/tw-work` repair against the unchanged RED smoke, then
complete full verification and exact-product rebinding. Do not invoke the
reviewer or write the oracle until the new product result is explicitly
accepted.
