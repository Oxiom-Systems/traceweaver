#!/usr/bin/env bash
set -euo pipefail

# TRACEWEAVER: file-role=fixture-source; req=REQ-CTA-MISSING-FUNCTION; trace=TRACE-CTA-MISSING-FUNCTION; ver=VER-CTA-MISSING-FUNCTION

feature_without_entrypoint_anchor() {
  echo "missing entrypoint anchor"
}

feature_without_entrypoint_anchor
