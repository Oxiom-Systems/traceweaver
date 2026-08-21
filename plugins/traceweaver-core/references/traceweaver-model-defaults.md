<!-- TRACEWEAVER: file-role=model-routing-compatibility-pointer; req=REQ-TW-060; trace=TRACE-TW-065; ver=VER-TW-085 -->

# TraceWeaver Model Defaults — Compatibility Pointer

## Compatibility pointer

This historical filename is retained so existing package and install references
do not break. It is not a second model policy. The single normative
TraceWeaver-owned Codex routing contract is the `model_routing` block in:

- source package: `workflow-profile-template.yml` in this references directory;
- installed/callable package mirror:
  `tw-auto/references/workflow-profile-template.yml`.

Before any TraceWeaver-owned native child call, use
`tw-auto/scripts/traceweaver-route-native-child`. The adapter reads that
contract, emits the only allowed explicit dispatch parameters, and finalizes a
requested/served-model receipt only from independently trusted host or execution
attestation. Package manifests may project a hash-bound snapshot of the same
contract; they do not override it.

The prior May 2026 model-default implementation and its TRACE-TW-043 /
VER-TW-055 evidence are historical only. Runtime enforcement and real
served-model attestation remain held until the host exposes and proves them.

Imported CE-derived component bodies are implementation engines only. Do not
edit them for TraceWeaver model-default policy unless an explicit reviewed
overlay/fork record names the upstream source identity, reason, scope, hash,
and regression proof.
