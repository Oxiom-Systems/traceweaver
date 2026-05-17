#!/usr/bin/env bash
set -euo pipefail

feature_message() {
  echo "authored source trace"
}

private_helper() {
  feature_message
}

private_helper
