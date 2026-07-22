#!/usr/bin/env bash
set -euo pipefail

# Fixture executable verification artifact for the tw-vv-define capsule
# validator's --require-review-passed mode smoke coverage. This copy is a
# fixture only; it is not wired into any real requirement's closure.

echo "fixture_vv_define_review_not_passed_red_test: asserting not-yet-implemented behavior"
echo "FAIL: expected behavior does not exist yet (RED)"
exit 1
