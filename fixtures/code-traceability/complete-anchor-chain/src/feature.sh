#!/usr/bin/env bash
set -euo pipefail

# TRACEWEAVER: file-role=fixture-source; req=REQ-CTA-COMPLETE; trace=TRACE-CTA-COMPLETE; ver=VER-CTA-COMPLETE

# TRACEWEAVER: entrypoint=feature_message; req=REQ-CTA-COMPLETE; trace=TRACE-CTA-COMPLETE; ver=VER-CTA-COMPLETE
feature_message() {
  echo "complete trace"
}

feature_message
