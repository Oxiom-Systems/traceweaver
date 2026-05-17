#!/usr/bin/env bash
set -euo pipefail

# TRACEWEAVER: file-role=fixture-source; req=REQ-CTA-BASELINE-DEBT; trace=TRACE-CTA-BASELINE-DEBT; ver=VER-CTA-BASELINE-DEBT

# TRACEWEAVER: entrypoint=good_behavior; req=REQ-CTA-BASELINE-DEBT; trace=TRACE-CTA-BASELINE-DEBT; ver=VER-CTA-BASELINE-DEBT
good_behavior() {
  echo "changed file is traceable"
}

good_behavior
