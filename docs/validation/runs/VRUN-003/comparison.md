# VRUN-003 Comparison

Scenario: Low-risk Lite mode

Starting commit: `cfe6bb3e1f70dcc118d446c456631a67bf32fd5e`

Baseline final commit: `ef002816fb6726f18dd379a782e563e1b7837166`

TraceWeaver Lite final commit: `b2517cc8e6fe9db3054faa830c1571bdaea89ab5`

## Outcome

Technical result: Pass.

Formal validation status: Human reviewer usefulness/noise and confidence rating
pending.

Both runs made the same low-risk README discoverability change. The TraceWeaver
Lite run added exactly one minimal matrix artifact and avoided full
Standard/Audit ceremony.

## Baseline vs TraceWeaver Lite

| Area | Baseline | TraceWeaver Lite | Distinct Value |
|---|---|---|---|
| README discoverability change | Added CLI link. | Added same CLI link. | Same visible product output. |
| Traceability artifact | None. | One minimal matrix row in `docs/traceability/readme-discoverability-lite.md`. | Durable reason/evidence without full ceremony. |
| Requirements package | None. | None. | Lite mode did not over-process. |
| Plan package | None. | None. | Lite mode did not over-process. |
| ATP / results package | None. | None. | Lite mode did not over-process. |
| Verification evidence | `rg` output only. | `rg` output plus command captured in Lite row. | Verification method is preserved in the repo. |
| Validation path | Inferred from docs review. | Human docs review path named in Lite row. | Validation path is visible without adding process weight. |

## Noise / Overhead

| Metric | Baseline | TraceWeaver Lite |
|---|---|---|
| Final project files | 3 | 4 |
| Files changed | 1 | 2 |
| Verification command time | 0.01s | 0.00s |
| Additional durable docs | None | One 13-line Lite traceability file |
| Full matrix ceremony | No | No |
| ATP/results ceremony | No | No |

TraceWeaver Lite added one small artifact and did not create requirements,
plans, ATPs, result records, risk controls, approved gaps, or dark-code
sections. This satisfies the Lite-mode requirement that the matrix exists but is
minimal.

## Reviewer Confidence

Codex reviewer confidence, before human confirmation:

| Workflow | Confidence | Reason |
|---|---|---|
| Baseline | 4 / 5 | The change is tiny and easy to infer from the diff. |
| TraceWeaver Lite | 4 / 5 | Same visible change plus a small durable reason/evidence row. |

Human reviewer rating: Pending Hannes confirmation.

## Result

VRUN-003 has technical evidence that Lite mode can preserve a minimal matrix
artifact without over-processing a low-risk docs/discoverability change.

The run should be marked fully complete only after the human reviewer confirms:

- usefulness rating
- low-value noise rating
- confidence before/after rating
