# Plan Handoff

This file contains post-plan-writing instructions: document review, post-generation options, and issue creation. Load it after the plan file has been written and the confidence check (5.3.1-5.3.7) is complete.

## 5.3.8 Document Review

**Format gate.** This phase runs only when `OUTPUT_FORMAT=md` (resolved in SKILL.md Phase 0.0). `ce-doc-review`'s mutation mechanics are markdown-specific: its walkthrough applies `gated_auto`/`manual` fixes as single-file markdown changes, and its Append-to-Open-Questions flow inserts markdown headings. Running those mutators against an HTML artifact would produce malformed output. Until `ce-doc-review` gains HTML-aware mutation, HTML plans skip this phase entirely.

**When `OUTPUT_FORMAT=html`:** Skip the `ce-doc-review` invocation. Capture a synthetic skipped envelope so the menu summary line in 5.4 can name the limitation explicitly:

- `fixes_applied = 0`
- `proposed_fixes_count = 0`, `decisions_count = 0`, `fyi_count = 0`
- `skipped_reason = "output_format_html"`

Then proceed directly to Final Checks (5.3.9). Do not block on this - the confidence check at 5.3 already strengthened the plan. Free-form requests for review in the post-generation menu must be declined for HTML runs with a prompt to switch to `output:md`; review is not available for HTML plans until `ce-doc-review` gains HTML-aware mutation.

**When `OUTPUT_FORMAT=md`:** Run the `ce-doc-review` skill with `mode:headless` on the plan file. Pass `mode:headless <plan-path>` as the skill arguments. When this step is reached for a markdown plan, it is mandatory - do not skip it because the confidence check already ran. The two tools catch different classes of issues.

Headless is the default at this phase because most users want to start work after planning, not adjudicate every reviewer concern up front. Headless applies `safe_auto` fixes silently and returns structured findings text - no walkthrough, no per-finding routing, no blocking prompts. The post-generation menu (see 5.4) offers `Run deeper doc review` as a first-class option so users can opt into the full interactive walkthrough when they want it.

The confidence check and `ce-doc-review` are complementary:

- The confidence check strengthens rationale, sequencing, risk treatment, and grounding.
- Document review checks coherence, feasibility, scope alignment, and role-specific issues.

If `ce-doc-review` returns findings that were auto-applied, note them briefly when presenting handoff options. If residual P0/P1 findings were surfaced, mention them so the user can decide whether to address them before proceeding.

When `ce-doc-review` returns "Review complete", proceed to Final Checks.

**Pipeline mode:** If invoked from an automated workflow such as LFG or any `disable-model-invocation` context, run `ce-doc-review` with `mode:headless` and the plan path. Headless mode applies auto-fixes silently and returns structured findings without interactive prompts. Address any P0/P1 findings before returning control to the caller.

## 5.3.9 Final Checks and Cleanup

Before proceeding to post-generation options:

- Confirm the plan is stronger in specific ways, not merely longer.
- Confirm the planning boundary is intact.
- Confirm origin decisions were preserved when an origin document exists.

If artifact-backed mode was used:

- Clean up the temporary scratch directory after the plan is safely updated.
- If cleanup is not practical on the current platform, note where the artifacts were left.

**Format-specific composition.** When `OUTPUT_FORMAT=html` (resolved in SKILL.md Phase 0.0), the plan is written as a single self-contained `.html` file - there is no markdown sibling. Read `references/html-rendering.md` for composition rules: invariants, precedence stack, format principles, agent-consumability rules, and the post-compose audit. The `.html` file is the artifact downstream consumers and human readers use. `ce-doc-review` is not a current HTML consumer, so HTML plans skip the 5.3.8 doc-review pass until that gap closes.

When `OUTPUT_FORMAT=md`, write the markdown directly per `references/markdown-rendering.md`. No HTML is composed.

After all mutations in this run have settled (initial write, deepening synthesis, and `ce-doc-review` `safe_auto` fixes when `OUTPUT_FORMAT=md`), the artifact at its single path reflects the final state. TraceWeaver does not package `ce-proof`, so there is no Proof publish or sync step in this packaged alpha handoff.

## 5.4 Post-Generation Options

**Pipeline mode:** If invoked from an automated workflow such as LFG or any `disable-model-invocation` context, skip the interactive menu below and return control to the caller immediately. The plan file has already been written, the confidence check has already run, and document-review handling has completed or been explicitly skipped.

After document-review handling completes, present the options using the platform's blocking question tool: `AskUserQuestion` in Claude Code (call `ToolSearch` with `select:AskUserQuestion` first if its schema isn't loaded), `request_user_input` in Codex, `ask_question` in Antigravity CLI (`agy`), `ask_user` in Pi (requires the `pi-ask-user` extension). Fall back to numbered options in chat only when no blocking tool exists in the harness or the call errors. Never silently skip the question.

**Path format:** Use absolute paths for chat-output file references - relative paths are not auto-linked as clickable in most terminals.

**Question:** "Plan ready at `<absolute path to plan>`. What would you like to do next?"

**Options:**

1. **Run TraceWeaver authority gate** (recommended) - Check the plan against the Intent Contract, `requirements.md`, and `traceability-matrix.md` before implementation.
2. **Run deeper doc review** - Walk through remaining actionable findings interactively. Show only when the headless envelope reports `proposed_fixes_count + decisions_count > 0` and `skipped_reason` is not `output_format_html`.
3. **Create Issue draft** - Draft a tracked-issue body from this plan without publishing it in the current alpha.
4. **External/manual review** - Use a non-packaged review path. `ce-proof` is not part of the current TraceWeaver alpha surface. Render only when `OUTPUT_FORMAT=md`.
4. **Open in browser** - Open the HTML plan file locally for review and sharing. Render only when `OUTPUT_FORMAT=html`.
5. **Done for now** - Pause; the plan file is saved and can be resumed later.

**Menu rendering:** When all five options are visible and the platform's blocking question tool has a four-option cap, render the menu as a numbered list in chat with the hint "Pick a number or describe what you want." On platforms where the blocking tool can carry all visible options, use it. When option 2 is hidden, renumber visible options contiguously.

**Run deeper doc review visibility.** Show option 2 only when the headless envelope reports at least one actionable `gated_auto` or `manual` finding. Drop the option for FYI-only state and when `skipped_reason: output_format_html`. The summary line above the menu should still name any FYI count so the user sees what was found.

Based on selection:

- **Run TraceWeaver authority gate** -> Invoke `tw-authority-gate` with the plan path. If the gate passes or records an approved exception, invoke `ce-work` with the plan path and explicit TraceWeaver no-publication mode. If the gate fails, stop with the missing authority, gap, change, exception, or clarification record needed before work may proceed. Do not invoke raw `ce-work` directly from this handoff.
- **Run deeper doc review** -> Re-invoke the `ce-doc-review` skill on the plan path without `mode:headless` so the interactive routing question and walkthrough fire. The headless pass already applied `safe_auto` fixes and recorded its findings in the session, so the interactive pass picks up where headless stopped. After it returns, re-render this menu with refreshed counts.
- **Create Issue draft** -> Follow the Issue Creation Draft section below.
- **External/manual review** or any request for Proof/HITL review -> Stop and explain that `ce-proof` is not packaged in the current TraceWeaver alpha. Recommend external/manual review or a future package unit that explicitly adds and reviews the Proof surface.
- **Open in browser** -> Display the absolute path to the `.html` plan file so the user can open it locally. Where the platform exposes a browser-opening primitive (e.g., `open` on macOS, `xdg-open` on Linux, `start` on Windows), the agent may invoke it directly; otherwise print the absolute path and let the user open it. After the path is displayed or opened, return to the post-generation options.
- **Done for now** -> Display a brief confirmation that the plan file is saved and end the turn. Do not start follow-up work without an explicit further user prompt.
- **Other** -> Accept free text for revisions and loop back to options.

## Issue Creation Draft

When the user selects "Create Issue draft", do not create or publish an issue in the TraceWeaver packaged alpha. Issue creation is publication-adjacent and remains held until a TraceWeaver publication gate approves it.

Draft the issue title and body locally instead:

1. Identify the project's issue tracker from the active instructions and conventions already in context. Look for an explicit `project_tracker:` declaration or a documented tracker convention. If no tracker is configured, draft a neutral issue title and body without choosing a tracker or modifying project instructions.
2. If `project_tracker: github`, draft the command without running it:

   ```bash
   gh issue create --title "<type>: <title>" --body-file <plan_path>
   ```

3. If `project_tracker: linear`, draft the issue content and state that Linear publication remains held unless a future TraceWeaver publication gate approves the specific connector, API, or CLI path.
4. If another tracker is configured, draft tracker-neutral title/body content and state that publication remains held.

After drafting, ask whether to run the TraceWeaver authority gate before work.
