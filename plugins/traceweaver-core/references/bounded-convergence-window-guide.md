<!-- TRACEWEAVER: file-role=bounded-convergence-window-guide; req=REQ-TW-037,REQ-TW-056,REQ-TW-057; trace=TRACE-TW-067; ver=VER-TW-087 -->

# Bounded Convergence Window

## Purpose

Use a bounded convergence window when accepted work needs a small number of
repair-and-verification attempts without changing its semantic scope. The
window converts one owner decision into a controlled execution budget; it does
not turn every failed check, digest refresh, or evidence write into a new
authority decision.

The governing invariant is:

> A gate may inspect a candidate, but it must never mutate the candidate it gates.

## When This Route Applies

Use the window only when all of these are true:

- the stakeholder intent, requirements, allowed behavior, safety boundaries,
  and publication holds are already accepted;
- the candidate file scope and verification method can be named before the
  first attempt;
- expected repairs stay inside that semantic scope; and
- the owner can bound attempts and stop conditions in one decision.

Do not use it to absorb a new requirement, interface, behavior, risk posture,
release claim, publication action, or materially different implementation
scope. Those changes exit the window and return to change/authority control.

## Three-Plane Model

| Plane | State during the window | Typical contents |
| --- | --- | --- |
| Authority | Frozen | requirements, Intent Contract, accepted change/exception, workflow profile, plan, V&V definition, verification method, validation question, must-not-change boundaries |
| Candidate | Mutable only inside the authorized scope | implementation, linked tests, fixtures, smokes, and exact mechanical bindings named by the window |
| Evidence | Append-only after an attempt; consolidated after window exit | command results, failure classification, terminal verification result, review receipt, trace/matrix status projection |

Gate outputs and evidence outputs must not become inputs to the same attempt or
rewrite digest-bound authority while that attempt is running. A verification
result may report on the frozen inputs; it may not silently redefine them.

## One Owner Decision

Record one decision that names:

1. the frozen authority baseline and semantic scope;
2. the candidate file allowlist or exact bounded file classes;
3. the focused verification command and pass condition;
4. a static source-closure preflight that must pass before each counted attempt;
5. the maximum repair/verification attempts;
6. the repair classes allowed without reopening authority;
7. the conditions that immediately stop the window;
8. the evidence locations written after each attempt and at terminal closure;
9. the claims and actions that remain separately held, including publication.

The attempt budget is risk-proportional and explicit. Do not assume that every
window has two attempts. An in-scope failed attempt consumes the budget but is
not by itself a request for new owner approval.

## Execution

1. Freeze the authority plane before candidate mutation.
2. Before each counted verification attempt, prove static source closure:
   every required locator exists, every digest input is current, the command
   will exercise the intended packaged implementation, and no same-attempt
   result path feeds its own input identity.
3. Run the focused verification once.
4. Classify the result using the table below.
5. If continuation is allowed and budget remains, repair only the authorized
   candidate scope and return to static source closure.
6. Exit on success or a stop condition. Then write one consolidated terminal
   evidence/status update. Do not interleave authority rewrites between
   attempts.

| Result | Route |
| --- | --- |
| Focused verification passes | Exit converged; perform terminal evidence closure once. |
| Verification fails for an anticipated in-scope defect | Continue within the remaining budget; no authority reopen. |
| Exact fixture/source digest rebinding changes no behavior, claim, or authority | Treat as mechanical candidate repair inside the window when explicitly allowed. |
| A rebinding changes meaning, permitted behavior, or a release/validation claim | Stop; this is a semantic change, not mechanical repair. |
| New requirement, interface, safety issue, stakeholder intent, or scope is discovered | Stop and return to change/authority control. |
| An unsafe finding or disallowed mutation is discovered | Stop immediately and preserve the finding. |
| Attempt budget is exhausted | Exit held with the last evidence; request one new decision only if another bounded window is justified. |

## Anti-Loop Rules

- Do not run an authority gate after each ordinary in-scope failure.
- Do not rewrite requirements, the Intent Contract, the plan, V&V definition,
  or workflow profile merely to describe a verification result.
- Do not bind a fixture to a document that the same attempt or its result will
  rewrite. Bind to a frozen source manifest or canonical semantic identity.
- Do not let receipts, generated views, status prose, raw file hashes, or
  bookkeeping become semantic candidate identity.
- Do not spend a counted verification attempt before static source closure is
  complete.
- Do not call the window successful until its named pass condition actually
  passes.
- Do not let convergence imply commit, push, PR, merge, tag, release,
  deployment, dogfood, or publication authority.

## Compact Authorization Template

```text
Authorize one bounded convergence window for <work item>.
Frozen authority: <baseline and accepted decision>.
Candidate scope: <files or bounded file classes>.
Allowed repairs: <anticipated in-scope repair classes>.
Verification: <command and pass condition>.
Static preflight: <source-closure proof>.
Attempt budget: <positive integer>.
Stop on: semantic scope/authority change, unsafe or out-of-scope finding,
budget exhaustion, or success.
Evidence closure: append attempt results, then update terminal status once.
Separate holds: <publication/deployment/dogfood/release claims>.
```
