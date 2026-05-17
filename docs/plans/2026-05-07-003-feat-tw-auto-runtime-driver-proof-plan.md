# Plan: tw-auto Runtime Driver Proof

## Status

Candidate implementation-gate plan. This plan does not approve new
requirements, runtime readiness, publication, clean replacement, release
readiness, or Vestro dogfood. It defines the next proof slice for the already
recorded `tw-auto` closure-loop and non-blocking trace-anchor requirements.

## Authority Capsule

- Baseline: `REQ-BASELINE-2026-04-30-001`
- Baseline hash: `02ec458e848780886158e16eda8af9645660842304de7123a2589a1e3d1a81dd`
- Current candidate requirements hash:
  `b33dfe9207c752b8c320c527c4104d632c1d043b1f52de062d71c8590a0e26db`
- Primary requirements: `REQ-TW-033`, `REQ-TW-035`, `REQ-TW-037`,
  `REQ-TW-038`, `REQ-TW-039`, `REQ-TW-049`, `REQ-TW-050`, `REQ-TW-053`,
  `REQ-TW-054`, `REQ-TW-055`, `REQ-TW-056`, `REQ-TW-057`, `REQ-TW-058`
- Primary trace rows: `VER-TW-040`, `VER-TW-041`, `VER-TW-044`,
  `VER-TW-045`, `VER-TW-048`, `VER-TW-050`
- Reserved runtime-driver proof chain:
  - Artifact: `ART-TW-053`
  - Trace: `TRACE-TW-039`
  - ATP: `ATP-TW-023`
  - Result: `RESULT-TW-023`
  - Verification: `VER-TW-051`
  These IDs are reserved for this proof slice only. Do not overload prior
  active-host currentness rows (`VER-TW-045`) or non-blocking ambiguity fixture
  rows (`VER-TW-050`) when recording the runtime-driver result.
- Current active-host state: direct-callable filesystem/hash currentness and
  review-routing surface passed after the 2026-05-07 reconciliation rerun.
  Active-session prompt-registry completeness and runtime invocation remain
  held.

## Goal

Prove, in a controlled runtime fixture, that `tw-auto` can drive this sequence
without the user manually cycling wrappers:

```text
tw-auto -> authority gate -> tw-work -> trace-anchor authoring ->
tw-traceability-check -> tw-code-review / tw-doc-review handoff
```

The proof must show actual work-loop state transitions and file outcomes, not
only a model echoing requested fields.

## Non-Goals

- No real commit, push, PR, release, remote mutation, or publication.
- No Vestro writes in this proof slice.
- No requirements rewriting or invented trace IDs.
- No clean replacement or runtime parity claim.
- No broad authority polishing outside rows directly touched by this proof.

## Proof Strategy

Use a disposable fixture repo copied to a temporary directory. The fixture must
contain accepted authority files, a small implementation task, one unanchored
behavior file, one unanchored test/smoke file, and one deliberately ambiguous
anchor target.

The runtime harness should run a fresh `codex exec` only when explicitly enabled
by an environment flag, for example:

```sh
TRACEWEAVER_TW_AUTO_DRIVER_RUNTIME=1 scripts/traceweaver-smoke-tw-auto-runtime-driver
```

Default mode must be deterministic and safe: verify fixture shape, run static
controls, and emit held runtime observations without invoking live Codex.

## Required Observations

The runtime proof passes only if the temporary fixture records all of these
observable outcomes:

1. `tw-auto` classifies the run as Implementation Gate Mode.
2. `tw-auto` loads or cites the authority gate before implementation.
3. `tw-auto` routes implementation through `tw-work`, not raw `ce-work`.
4. `tw-work` adds an unambiguous module/file or entrypoint anchor to the changed
   behavior file.
5. `tw-work` adds a verification anchor to the linked test/smoke artifact.
6. `tw-work` updates `traceability-matrix.md` Code Anchor Evidence in the same
   temporary fixture.
7. Ambiguous per-artifact mapping is skipped, recorded as unresolved mapping
   evidence, and not silently guessed.
8. `tw-traceability-check` runs after authoring and emits either pass or a
   structured unresolved-mapping finding.
9. `tw-code-review` is selected for behavior-bearing files and only after
   traceability preflight.
10. `tw-doc-review` is selected for authority/status/hash evidence updates when
    those files change.
11. The loop stops with one of: clean accepted fixture state, explicit held
    unresolved mapping, or human-decision pause.
12. The fixture proves no commit, push, PR, branch creation, or remote mutation
    happened.

## Deterministic Controls

The harness must include controls that cannot pass from prompt satisfaction
alone:

- A fixture-local sentinel value stored in the accepted authority files and not
  fully disclosed in the runtime prompt. The runtime result must derive the
  expected work-loop state from the fixture files.
- An active-host `tw-auto` skill-identity control. The harness must derive an
  undisclosed expected value from the installed `tw-auto/SKILL.md` or active
  skill surface, require the runtime transcript to bind the run to that loaded
  skill identity, and verify it independently after `codex exec` exits. The
  runtime prompt must not disclose the full expected value or inline enough
  `tw-auto` instructions for a raw prompt to satisfy the proof without loading
  the skill.
- A changed source file whose expected anchor can be verified by reading the
  temporary file after `codex exec` exits.
- A matrix row check that verifies one row links `REQ -> TRACE -> ART/source ->
  VER/test` for the authored anchor.
- A negative ambiguous target whose source file must remain unmodified while an
  unresolved mapping JSONL record is produced.
- A fake `git`/`gh` path or isolated temp repository check proving publication
  commands were not executed.

## Units

### U1. Fresh-Session Registry Probe

Run a fresh prompt-registry check after the active-host reconciliation rerun.
Acceptance:

- Direct-callable filesystem/hash currentness remains pass.
- Fresh-session prompt registry sees the required `tw-*` entrypoints, or the
  proof stays held with a narrow finding that runtime driver proof cannot start.
- Runtime claims remain held until U3 passes.

### U2. Fixture And Harness

Add `fixtures/tw-auto-runtime-driver/` with:

- clean implementation fixture
- ambiguous per-artifact anchor fixture
- stale/missing authority negative fixture
- fake publication boundary fixture

Add `scripts/traceweaver-smoke-tw-auto-runtime-driver`.
Acceptance:

- Default non-runtime mode passes deterministic fixture-shape checks.
- Runtime mode is opt-in.
- Real repo unchanged guard covers authority and validation files.

### U3. Runtime Driver Transcript

Run the harness with runtime enabled against a temporary fixture copy.
Acceptance:

- `tw-auto` produces a work-loop transcript naming each wrapper handoff.
- The transcript includes the verified `tw-auto` skill-identity control and
  fails if the installed `tw-auto/SKILL.md` or active skill surface was not
  loaded as the driver.
- Temporary fixture files show source anchors and matrix Code Anchor Evidence
  updated for unambiguous mappings.
- `tw-traceability-check` output is captured after authoring.
- `tw-code-review` / `tw-doc-review` route selection is captured.
- Ambiguous mapping is reported as a structured blocker, not guessed.
- No publication action occurs.

### U4. Review And Record

Run scoped `tw-code-review` on:

- runtime driver smoke script
- runtime driver fixtures
- `tw-auto`, `tw-work`, `tw-traceability-check`, `tw-code-review`,
  `tw-doc-review` surfaces if touched
- relevant Code Anchor Evidence rows

Then run scoped `tw-doc-review` only for the status/hash update.

Acceptance:

- Code review has no P0/P1 findings.
- Doc review accepts the exact status/hash update.
- Runtime proof is recorded only for the proven fixture scope.
- Runtime-driver records use `ART-TW-053` / `TRACE-TW-039` / `ATP-TW-023` /
  `RESULT-TW-023` / `VER-TW-051`.
- The fake publication boundary treats only exact non-mutating remote forms
  (`git remote -v` and `git remote get-url ...`) as read-only; mutating remote
  forms remain blocked and recorded by the marker.
- The `tw-worktree` wrapper, packaged `ce-worktree` component, routing and
  discovery/host smokes, fixture, Code Anchor Evidence rows, and runtime-driver
  proof boundary passed scoped code review as
  `TW-CODE-REVIEW-2026-05-13-TW-WORKTREE-RUNTIME-HARNESS-CLEAN-001`; scoped
  status/hash doc review passed as
  `TW-DOC-REVIEW-2026-05-13-TW-WORKTREE-RUNTIME-HARNESS-STATUS-HASH-CLEAN-001`.
- The runtime harness validator/publication-boundary repair passed scoped code
  review as
  `TW-CODE-REVIEW-2026-05-14-TW-AUTO-RUNTIME-HARNESS-VALIDATOR-PUBLICATION-BOUNDARY-CLEAN-001`.
  The opt-in runtime smoke now validates completed runtime artifact evidence
  while keeping full runtime-driver invocation held; scoped status/hash doc
  review is pending.

## Held Claims

- Vestro dogfood remains held.
- Publication route remains held except fake no-mutation fixture proof.
- Clean CE replacement remains held.
- Runtime parity beyond the exact driver fixture remains held.
- Release/package/upstream readiness remains held.
- R31 remains held.

## Next Command

Run:

```text
/tw-auto continue to the full tw-auto runtime-driver proof
```

Keep full runtime-driver invocation held unless a later proof binds runtime
handoff decisions to the loaded `tw-auto` skill identity.
