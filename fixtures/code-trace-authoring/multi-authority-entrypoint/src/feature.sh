#!/usr/bin/env bash
set -euo pipefail

# TRACEWEAVER: file-role=unrelated-file-anchor; req=REQ-AUTH-UNRELATED; trace=TRACE-AUTH-UNRELATED; ver=VER-AUTH-UNRELATED
# TRACEWEAVER: verifies=VER-AUTH-UNRELATED; req=REQ-AUTH-UNRELATED; trace=TRACE-AUTH-UNRELATED
# TRACEWEAVER: entrypoint=other_entrypoint; req=REQ-AUTH-UNRELATED; trace=TRACE-AUTH-UNRELATED; ver=VER-AUTH-UNRELATED

multi_authority_entrypoint() {
  echo "complete selected authority"
}

other_entrypoint() {
  echo "unrelated authority"
}
