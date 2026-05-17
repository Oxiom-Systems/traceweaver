#!/usr/bin/env bash
set -euo pipefail

feature_message() {
  echo "main behavior"
}

private_helper() {
  feature_message
}
