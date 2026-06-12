# Bounded current-state snapshot schema

`.traceweaver/intent-contract.current.yml` is a **generated, bounded,
human-readable** snapshot of project authority. It exists to give a reviewer a
one-screen answer to "what is the authority state right now?" without reading
the full append-style records. It is derived; the source of truth remains
`requirements.md`, `traceability-matrix.md`, and
`.traceweaver/intent-contract.yml`.

Regenerate (never hand-edit):

```sh
scripts/traceweaver-smoke-verify --write
```

`scripts/traceweaver-smoke-verify` (also run in CI) regenerates the snapshot and
fails on drift, so a stale or hand-edited snapshot blocks the gate.

## Fields

| Field | Type | Meaning |
| --- | --- | --- |
| `snapshot_id` | scalar | Fixed identifier `TW-IC-CURRENT`. |
| `baseline_id` | scalar | Accepted baseline id, read from `requirements.md`. |
| `baseline_hash_sha256` | scalar | Canonical hash recomputed from `requirements.md`. |
| `baseline_hash_consistent` | bool | True iff `requirements.md` and the Intent Contract both record the recomputed hash. |
| `traceweaver_mode` | scalar | Active mode (`off`/`advisory`/`enforcing`); alpha default `advisory`. |
| `requirements.total` | int | Requirement count from the generated views. |
| `requirements.{approved,candidate,held,other}` | int | Status buckets. `other` counts requirements whose status is not a clean `Approved`/`Candidate*`/`Held` value — a direct measure of status-vocabulary drift (review finding F7). |
| `validation_closure.requirements_total` | int | Total requirements. |
| `validation_closure.acceptance_results_recorded` | int | Structured acceptance results recorded across the project. |
| `validation_closure.requirements_closed` | int | Requirements with a closed acceptance result. |
| `validation_closure.requirements_missing_acceptance` | int | Requirements with no acceptance result. |
| `validation_closure.closure_ratio` | string | `closed/total` — the headline intent-fidelity metric (review finding F5). |
| `authority_reviewability.longest_authority_line_chars` | int | Longest single line across the live authority records. |
| `authority_reviewability.authority_lines_over_2000_chars` | int | Count of authority lines a human cannot practically review (finding F1). |
| `authority_reviewability.human_reviewable` | bool | True iff no authority line exceeds 2000 chars. |
| `open_gaps` | int | Count of `.traceweaver/gaps/*.yml` records with `status: open`. |

## Design intent

This snapshot is the worked example behind review finding F1: an authority
record a human can read at a glance. Each scalar here replaces a slice of the
multi-thousand-character concatenated status strings in
`.traceweaver/intent-contract.yml`. The longer-term recommendation is to make a
bounded structure like this the *primary* contract and move history to
`.traceweaver/history/`; this generated snapshot is the additive, reversible
first step that proves the shape without rewriting recorded authority.
