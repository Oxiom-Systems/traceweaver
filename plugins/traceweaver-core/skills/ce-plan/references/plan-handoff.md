# Plan Handoff

This file contains post-plan-writing instructions: document review, post-generation options, and issue creation. Load it after the plan file has been written and the confidence check (5.3.1-5.3.7) is complete.

## 5.3.8 Document Review

After the confidence check (and any deepening), run the `ce-doc-review` skill on the plan file. Pass the plan path as the argument. When this step is reached, it is mandatory — do not skip it because the confidence check already ran. The two tools catch different classes of issues.

The confidence check and ce-doc-review are complementary:
- The confidence check strengthens rationale, sequencing, risk treatment, and grounding
- Document-review checks coherence, feasibility, scope alignment, and surfaces role-specific issues

If ce-doc-review returns findings that were auto-applied, note them briefly when presenting handoff options. If residual P0/P1 findings were surfaced, mention them so the user can decide whether to address them before proceeding.

When ce-doc-review returns "Review complete", proceed to Final Checks.

**Pipeline mode:** If invoked from an automated workflow such as LFG or any `disable-model-invocation` context, run `ce-doc-review` with `mode:headless` and the plan path. Headless mode applies auto-fixes silently and returns structured findings without interactive prompts. Address any P0/P1 findings before returning control to the caller.

## 5.3.9 Final Checks and Cleanup

Before proceeding to post-generation options:
- Confirm the plan is stronger in specific ways, not merely longer
- Confirm the planning boundary is intact
- Confirm origin decisions were preserved when an origin document exists

If artifact-backed mode was used:
- Clean up the temporary scratch directory after the plan is safely updated
- If cleanup is not practical on the current platform, note where the artifacts were left

## 5.4 Post-Generation Options

**Pipeline mode:** If invoked from an automated workflow such as LFG or any `disable-model-invocation` context, skip the interactive menu below and return control to the caller immediately. The plan file has already been written, the confidence check has already run, and ce-doc-review has already run — the caller (e.g., lfg) determines the next step.

After document-review completes, present the options using the platform's blocking question tool: `AskUserQuestion` in Claude Code (call `ToolSearch` with `select:AskUserQuestion` first if its schema isn't loaded), `request_user_input` in Codex, `ask_user` in Gemini, `ask_user` in Pi (requires the `pi-ask-user` extension). Fall back to numbered options in chat only when no blocking tool exists in the harness or the call errors (e.g., Codex edit modes) — not because a schema load is required. Never silently skip the question.

**Path format:** Use absolute paths for chat-output file references — relative paths are not auto-linked as clickable in most terminals.

**Question:** "Plan ready at `<absolute path to plan>`. What would you like to do next?"

**Options:**
1. **Run TraceWeaver authority gate** (recommended) - Check the plan against the Intent Contract, `requirements.md`, and `traceability-matrix.md` before implementation
2. **Create Issue draft** - Draft a tracked-issue body from this plan without publishing it in the current alpha
3. **Done for now** - Pause; the plan file is saved and can be resumed later

**Surface additional document review contextually, not as a menu fixture:** When the prior document-review pass surfaced residual P0/P1 findings that the user has not addressed, mention them adjacent to the menu and offer another review pass in prose (e.g., "Document review flagged 2 P1 findings you may want to address — want me to run another pass before you pick?"). Do not add it to the option list.

Based on selection (the bare per-option routing is also stated inline in the SKILL.md so it cannot be missed when this reference is not loaded; the elaborate sub-flows below are the reason this reference still exists):
- **Run TraceWeaver authority gate** -> Invoke `tw-authority-gate` with the plan path. If the gate passes or records an approved exception, invoke `ce-work` with the plan path and explicit TraceWeaver no-publication mode. If the gate fails, stop with the missing authority, gap, change, exception, or clarification record needed before work may proceed. Do not invoke raw `ce-work` directly from this handoff.
- **Create Issue draft** -> Follow the Issue Creation Draft section below
- **Done for now** -> Display a brief confirmation that the plan file is saved and end the turn. Do not start follow-up work without an explicit further user prompt.
- **If the user asks for another document review** (either from the contextual prompt when P0/P1 findings remain, or by free-form request) -> Load the `ce-doc-review` skill with the plan path for another pass, then return to the options
- **If the user asks for Proof/HITL review** -> Stop and explain that `ce-proof` is not packaged in the current TraceWeaver alpha. Recommend external/manual review or a future package unit that explicitly adds and reviews the Proof surface.
- **Other** -> Accept free text for revisions and loop back to options

## Issue Creation Draft

When the user selects "Create Issue draft", do not create or publish an issue in
the TraceWeaver packaged alpha. Issue creation is publication-adjacent and
remains held until a TraceWeaver publication gate approves it.

Draft the issue title/body locally instead:

1. Read `AGENTS.md` (or `CLAUDE.md` for compatibility) at the repo root and look for `project_tracker: github` or `project_tracker: linear`.
2. If `project_tracker: github`, draft the command without running it:

   ```bash
   gh issue create --title "<type>: <title>" --body-file <plan_path>
   ```

3. If `project_tracker: linear`, draft the command without running it:

   ```bash
   linear issue create --title "<title>" --description "$(cat <plan_path>)"
   ```

4. If no tracker is configured, draft a neutral issue title and body without
   choosing a tracker or modifying `AGENTS.md`.

After drafting, ask whether to run the TraceWeaver authority gate before work.
