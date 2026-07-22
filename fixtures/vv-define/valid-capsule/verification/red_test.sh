#!/usr/bin/env bash
set -euo pipefail

# Fixture executable verification artifact for the tw-vv-define capsule
# validator smoke. It represents a requirement-linked test/fixture derived
# from acceptance criteria before implementation exists. This copy is a
# fixture only; it is not wired into any real requirement's closure.

echo "fixture_vv_define_red_test: asserting not-yet-implemented behavior"
echo "FAIL: expected behavior does not exist yet (RED)"
exit 1
