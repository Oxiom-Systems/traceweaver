# Verification Planning Examples

These are original TraceWeaver examples. Do not copy examples from licensed
sources into runtime material.

## Example: Clean Verification Plan

Requirement:

```text
SREQ-RUN-001: The runtime package shall load the requirements-reviewer skill
and its references from the target skills directory.
```

Plan:

```yaml
method: test
target_environment: "target agent runtime"
procedure_or_command: "Run runtime discovery command and inspect loaded files."
expected_result: "Skill metadata and all referenced files are discoverable."
tested_ref_required: true
```

Why it is clean:

- requirement ID present, method matches the obligation (loading is runtime
  behavior, so `test`, not `inspection`)
- expected result is written before the run
- tested ref is required, so evidence names what was tested

Validation path:

Separate. This verifies loading behavior; it does not prove users accept the
workflow. Acceptance routes to `validation-planner`.

## Example: Weak Verification Note

Bad:

```text
Run tests.
```

Finding:

- no requirement ID
- no method
- no expected result
- no target ref
- no evidence path

Better:

Create `VER-PLAN-*` with method, setup, command/procedure, expected result,
tested ref, and result path. Until that exists, a green run is activity, not
evidence.

## Example: Approved Deferred Verification

Input:

```text
Target runtime is unavailable until vendor beta access.
```

Disposition:

```yaml
decision: approved_with_exception
exceptions:
  - GAP-VER-002
recommended_next_skill: risk-gap-change-control
hold_conditions:
  - "Release cannot pass until target runtime evidence exists."
```

Why it is acceptable:

- the deferral is recorded, owned, and has a trigger (vendor beta access)
- release-level claims stay blocked until the exception closes
- silence was not an option; the gap record is the handoff

## Example: Smoke-Script Evidence vs Inspection Evidence

Two requirements about the same packaged skill need different methods.

Requirement A (runtime behavior):

```text
SREQ-PKG-003: The packaged plugin shall discover and parse every SKILL.md
under the plugin skills directory at load time.
```

Plan A:

```yaml
method: test
target_environment: "local repo harness (equivalence stated below)"
procedure_or_command: "scripts/traceweaver-smoke-tw-skill-behavior"
expected_result: "Reported skill file total and anchored total match the expected counts; exit 0."
tested_ref_required: true
harness_equivalence: "The smoke script walks the same plugin directory tree the runtime package ships; file discovery and anchor grep behavior are identical to packaged layout. Runtime metadata parsing is not covered and keeps its own runtime-discovery evidence."
```

Requirement B (static packaging):

```text
SREQ-PKG-004: The packaged plugin shall include every skill-local reference
file named in its SKILL.md Reference Loading section.
```

Plan B:

```yaml
method: inspection
target_environment: "packaged plugin file tree"
procedure_or_command: "List references/ per skill and compare against the Reference Loading section of each SKILL.md."
expected_result: "Every named reference file exists at the named path; no dangling names."
tested_ref_required: true
```

The mistake to avoid: claiming the smoke-script run (Plan A) also proves
Requirement B. The script proves counts and anchors, not name-to-file
correspondence; each requirement keeps the method that proves its own
obligation.

## Example: Harness Result Claimed As Runtime Evidence

Bad:

```text
Verified skill loading: ran the local CLI harness, skill responded. Closing
VER-RUN-007 for the web runtime.
```

Finding:

- execution environment (local CLI harness) differs from the target runtime
  (web runtime)
- no equivalence statement
- outcome overclaims the target environment

Better:

```yaml
execution_record_template:
  execution_id: VER-RUN-007
  procedure_or_command: "Local CLI harness load of verification-planner skill"
  tested_ref: "traceweaver-core--v0.2.4"
  actual_result: "Skill and references loaded; responded to core question."
  outcome: partial
  evidence_path: ".traceweaver/evidence/VER-RUN-007.md"
  deviations:
    - "Run executed in local CLI harness, not web runtime. Equivalence covers file discovery and metadata parsing; web-runtime routing remains unproven and is tracked as GAP-VER-011."
```

The partial outcome plus the recorded deviation keeps the claim honest and
routes the remaining proof to `risk-gap-change-control`.
