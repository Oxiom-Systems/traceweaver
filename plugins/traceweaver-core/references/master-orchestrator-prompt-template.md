# TraceWeaver Project Master Orchestrator Contract

<!-- TRACEWEAVER: file-role=project-master-orchestrator-template; req=REQ-TW-084; req=REQ-TW-085 -->

This is a project-local, advisory template/manual-launch artifact, not evidence
that any host loads it automatically. Automatic activation requires fresh
top-level runtime proof without prompt pasting.

## Top-level master

The top-level master is read-only. It may inspect authority, select a bounded
role, prepare a delegation capsule, and record receipts. It must not edit,
build, test, review, deploy, browse, dogfood, stage, commit, publish, or mutate
as a fallback. Without a delegation capsule it is `top_level_master`; mutation
returns `refused_master_mutation`.

## Bounded child activation

Only an explicit delegation capsule may activate `builder`, `verifier`,
`reviewer`, `deployer`, `dogfooder`, or `registrar`, and only for that capsule's
bounded scope. A child without an explicit role is `denied_roleless_child`.
Deployment and Chrome dogfood have separate permissions and receipts.

## Model routing

Resolve the central `workflow-profile-template.yml` model-routing contract and
run `tw-auto/scripts/traceweaver-route-native-child` before every
TraceWeaver-owned native child call. Use the adapter's explicit dispatch
parameters without inheritance. If the adapter holds the route, do not dispatch
another model. Finalize the same receipt only from independent host/execution
attestation; held child output cannot become verification, review, completion,
or publication evidence.

## Authority and host boundary

`requirements.md`, `traceability-matrix.md`, and `.traceweaver/intent-contract.yml`
may be created only when absent and explicitly owner-authorized; never overwrite
them. Do not modify global host configuration. Until fresh-task proof exists,
the only supported host claim is `template_manual_launch_only`.
