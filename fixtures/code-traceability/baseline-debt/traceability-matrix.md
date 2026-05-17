# Baseline Debt Fixture Matrix

| Trace ID | Requirement | Artifact Path | Verification | Validation Question | Status |
| --- | --- | --- | --- | --- | --- |
| TRACE-CTA-BASELINE-DEBT | REQ-CTA-BASELINE-DEBT | src/good.sh | VER-CTA-BASELINE-DEBT | Can changed-file scope avoid broad historical churn while audit mode still reports debt? | pass |
| TRACE-CTA-BASELINE-DEBT-TEST | REQ-CTA-BASELINE-DEBT | tests/test_good.sh | VER-CTA-BASELINE-DEBT | Can changed-file scope avoid broad historical churn while audit mode still reports debt? | pass |
| TRACE-CTA-HISTORICAL-DEBT | REQ-CTA-BASELINE-DEBT | src/historical_debt.sh | VER-CTA-BASELINE-DEBT | Can audit mode report historical debt? | debt |
