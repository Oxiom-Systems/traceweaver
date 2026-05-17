#!/usr/bin/env bash
set -euo pipefail

# TRACEWEAVER: file-role=fixture-source; req=REQ-CTA-REMOVED; trace=TRACE-CTA-STALE; ver=VER-CTA-STALE

# TRACEWEAVER: entrypoint=stale_requirement_behavior; req=REQ-CTA-REMOVED; trace=TRACE-CTA-STALE; ver=VER-CTA-STALE
stale_requirement_behavior() {
  echo "stale requirement"
}

stale_requirement_behavior
