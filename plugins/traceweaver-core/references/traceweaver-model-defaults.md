<!-- TRACEWEAVER: file-role=model-default-policy; req=REQ-TW-060; trace=TRACE-TW-043; ver=VER-TW-055 -->

# TraceWeaver Model Defaults

TraceWeaver-owned packaging and install surfaces record these default model
preferences:

- codex_model: gpt-5.5
- codex_reasoning_effort: medium
- claude_model_family: sonnet

Codex hosts may override the default with:

- `TRACEWEAVER_CODEX_MODEL`
- `TRACEWEAVER_CODEX_REASONING_EFFORT`

TraceWeaver records Claude Sonnet as the default policy where the supported
Claude plugin surface can express it. Runtime enforcement remains held until a
platform-supported enforcement field and smoke proof exist.

Imported CE-derived component bodies are implementation engines only. Do not
edit them for TraceWeaver model-default policy unless an explicit reviewed
overlay/fork record names the upstream source identity, reason, scope, hash,
and regression proof.
