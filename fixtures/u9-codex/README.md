# U9 Codex Fixture Workspaces

These fixtures are synthetic U9 test inputs. They are not project authority for
TraceWeaver Core and must not be cited as accepted requirements, matrix, or
Intent Contract evidence outside U9 fixture smoke records.

Fixture set:

- `authority-present/`: complete minimal authority baseline with matching
  requirements, Intent Contract, and matrix hashes.
- `missing-authority/`: intentionally lacks root authority files.
- `stale-authority/`: intentionally carries a stale expected requirements
  hash.
- `weak-requirement/`: intentionally contains a candidate, ambiguous,
  unverifiable requirement.
- `trace-gap/`: intentionally records behavior without a verification/evidence
  link.
- `trace-write/`: safe write target for temporary-copy trace, gap, change,
  exception, and fixture-matrix update proof.

Runtime-discoverable `tw-*` host claims remain held unless a fresh Codex
host-registry reload or equivalent supported probe proves the skills are
callable in the active host.
