<!-- TRACEWEAVER: file-role=systems-engineering-audit-closure-contract; req=REQ-TW-061; trace=TRACE-TW-044; ver=VER-TW-056 -->
<!-- TRACEWEAVER: file-role=systems-engineering-audit-closure-contract; req=REQ-TW-062; trace=TRACE-TW-044; ver=VER-TW-056 -->
<!-- TRACEWEAVER: file-role=systems-engineering-audit-closure-contract; req=REQ-TW-063; trace=TRACE-TW-044; ver=VER-TW-056 -->

# TraceWeaver Systems-Engineering Audit Closure

Status: deterministic static contract

This reference defines the static contract used by TraceWeaver fixtures for
REQ-TW-061 through REQ-TW-063. It is packaged as TraceWeaver-owned distilled
systems-engineering guidance and does not authorize runtime, publication,
release, automatic removal, or clean-replacement claims by itself.

## User-Facing Skill Prompt Contract

Every user-facing `tw-*` skill must expose enough starting context for the
agent to preserve intent before delegating to packaged implementation engines:

- task-scoped purpose or start prompt;
- required authority inputs or explicit bootstrap behavior;
- access to distilled systems-engineering knowledge through skill-local
  references or explicitly named packaged delegates;
- preflight gates before downstream CE-derived engines;
- output contract that reports authority, traceability, verification,
  validation, held claims, and next TraceWeaver step;
- no-publication boundary unless the controlled publication route passes.

Thin wrappers may pass by packaged delegate only when the delegated packaged
skill carries the missing knowledge and the wrapper names that delegation.

## Requirement Closure Contract

A requirement closure claim must preserve this chain:

```text
Requirement
-> Trace/design
-> Implementation artifact
-> Verification implementation
-> Verification procedure
-> Verification result/evidence
-> Validation procedure
-> Validation result/evidence or reviewed held-validation record
```

Verification proves the implementation was built correctly. Validation proves
the requirement intent works in the stakeholder or operating context. A test
command is not automatically validation evidence.

A held-validation record must name the owner, evidence location, and latest
acceptable closure boundary.

## Semantic Audit Mode Contract

`tw-traceability-check` audit mode emits candidate findings, not automatic
change authority, for:

- dark behavior;
- obsolete behavior;
- orphaned behavior;
- duplicate behavior;
- similar behavior;
- anchor-only coverage;
- missing verification or validation procedure.

Every semantic audit finding must include evidence source, confidence,
supported scope, known limitation, claim impact, and a recommended authority
action. Unsupported or uninspectable surfaces are held or unknown coverage, not
clean evidence.
