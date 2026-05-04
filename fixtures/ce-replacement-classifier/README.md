# CE Replacement Classifier Fixtures

Minimal behavior-bearing fixtures for the CE replacement inventory classifier.

These files are intentionally small. They exist to exercise classifier behavior
before the checker scans the full Compound Engineering and TraceWeaver package
surface.

Fixture layout:

- `upstream-ce/skills/ce-sample/SKILL.md` represents a pinned upstream CE skill.
  It references a support file path so the classifier can discover or verify a
  support edge without requiring the support file to exist in this fixture.
- `traceweaver/skills/ce-sample/SKILL.md` represents a direct CE-derived
  packaged skill that should require a controlled classification row.
- `traceweaver/skills/tw-sample/SKILL.md` represents a native TraceWeaver
  wrapper/control skill that delegates through authority checks rather than
  exposing raw CE behavior.

Expected classifier uses:

- report a packaged direct `ce-sample` skill with no controlled row as
  `unclassified`;
- detect stale rows when an expected hash no longer matches a fixture file;
- fail a low-confidence `wrapped` row unless its evidence status remains held;
- keep TraceWeaver-native `tw-sample` distinct from direct CE-derived package
  continuity.
