#!/usr/bin/env python3
"""Extract error signals from a Claude Code, Codex, or Cursor JSONL session file.

Usage: cat <session.jsonl> | python3 extract-errors.py

Auto-detects platform from the JSONL structure.
Note: Cursor agent transcripts do not log tool results, so no errors can be extracted.
Finds failed tool calls / commands and outputs them with timestamps.
Outputs a _meta line at the end with processing stats.
"""
import sys
import json
import os
import re
import shlex

stats = {"lines": 0, "parse_errors": 0, "errors_found": 0}
codex_calls = {}


def redact(raw):
    """Remove common secret-bearing and host-specific fragments before output."""
    text = str(raw)
    replacements = [
        (r"(?i)(authorization:\s*bearer\s+)[^\s'\"`]+", r"\1[REDACTED]"),
        (r"(?i)(api[_-]?key|token|secret|password|passwd|pwd)(\s*[:=]\s*)[^\s'\"`]+", r"\1\2[REDACTED]"),
        (r"(?i)(https?://[^/\s:@]+:)[^@\s/]+@", r"\1[REDACTED]@"),
        (r"(?i)(x-api-key:\s*)[^\s'\"`]+", r"\1[REDACTED]"),
        (r"(?i)(cookie:\s*)[^\n]+", r"\1[REDACTED]"),
        (r"-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----", "[REDACTED_PRIVATE_KEY]"),
        (r"/Users/[^/\s]+", "/Users/[REDACTED]"),
        (r"/home/[^/\s]+", "/home/[REDACTED]"),
    ]
    for pattern, replacement in replacements:
        text = re.sub(pattern, replacement, text)
    return text


def command_label(command):
    """Return a coarse command label without reproducing arguments."""
    try:
        parts = shlex.split(str(command))
    except ValueError:
        parts = str(command).split()
    if not parts:
        return "unknown"
    return os.path.basename(parts[0]) or "unknown"


def summarize_error(raw):
    """Extract a short error summary instead of dumping the full payload."""
    text = redact(raw).strip()
    # Take the first non-empty line as the error message
    for line in text.split("\n"):
        line = line.strip()
        if line:
            return line[:200]
    return text[:200]


def parse_exit_code(output):
    """Return a nonzero Codex command exit code if the output records one."""
    if "Process exited with code " not in output:
        return None
    try:
        code_str = output.split("Process exited with code ")[1].split("\n")[0]
        exit_code = int(code_str)
    except (IndexError, ValueError):
        return None
    return exit_code if exit_code != 0 else None


def remember_codex_call(payload):
    """Remember current Codex function_call metadata for later output pairing."""
    call_id = payload.get("call_id")
    if not call_id:
        return

    name = payload.get("name") or payload.get("function") or "function_call"
    arguments = payload.get("arguments", "")
    label = name
    if isinstance(arguments, str) and arguments.strip():
        try:
            parsed = json.loads(arguments)
            if isinstance(parsed, dict):
                label = parsed.get("cmd") or parsed.get("command") or parsed.get("path") or name
        except json.JSONDecodeError:
            label = arguments
    codex_calls[call_id] = command_label(label)


def handle_claude(obj):
    if obj.get("type") == "user":
        content = obj.get("message", {}).get("content", [])
        if isinstance(content, list):
            for block in content:
                if block.get("type") == "tool_result" and block.get("is_error"):
                    ts = obj.get("timestamp", "")[:19]
                    summary = summarize_error(block.get("content", ""))
                    print(f"[{ts}] [error] {summary}")
                    print("---")
                    stats["errors_found"] += 1


def handle_codex(obj):
    if obj.get("type") == "event_msg":
        p = obj.get("payload", {})
        if p.get("type") == "exec_command_end":
            output = p.get("aggregated_output", "")
            stderr = p.get("stderr", "")
            command = p.get("command", [])
            cmd_str = command[-1] if command else ""

            exit_match = parse_exit_code(output)

            if exit_match is not None or stderr:
                ts = obj.get("timestamp", "")[:19]
                error_summary = summarize_error(stderr if stderr else output)
                print(f"[{ts}] [error] exit={exit_match} command={command_label(cmd_str)}: {error_summary}")
                print("---")
                stats["errors_found"] += 1
    elif obj.get("type") == "response_item":
        p = obj.get("payload", {})
        payload_type = p.get("type")
        if payload_type == "function_call":
            remember_codex_call(p)
        elif payload_type == "function_call_output":
            output = p.get("output", "")
            if not isinstance(output, str):
                output = json.dumps(output)
            exit_match = parse_exit_code(output)
            if exit_match is not None:
                ts = obj.get("timestamp", "")[:19]
                call_id = p.get("call_id")
                label = codex_calls.get(call_id, p.get("name", "function_call"))
                error_summary = summarize_error(output)
                print(f"[{ts}] [error] exit={exit_match} command={label}: {error_summary}")
                print("---")
                stats["errors_found"] += 1


# Auto-detect platform from first few lines, then process all
detected = None
buffer = []

for line in sys.stdin:
    line = line.strip()
    if not line:
        continue
    buffer.append(line)
    stats["lines"] += 1

    if not detected and len(buffer) <= 10:
        try:
            obj = json.loads(line)
            if obj.get("type") in ("user", "assistant"):
                detected = "claude"
            elif obj.get("type") in ("session_meta", "turn_context", "response_item", "event_msg"):
                detected = "codex"
            elif obj.get("role") in ("user", "assistant") and "type" not in obj:
                detected = "cursor"
        except (json.JSONDecodeError, KeyError):
            pass

# Cursor transcripts don't log tool results — no errors to extract
def handle_noop(obj):
    pass

handlers = {"claude": handle_claude, "codex": handle_codex, "cursor": handle_noop}
handler = handlers.get(detected, handle_noop)

for line in buffer:
    try:
        handler(json.loads(line))
    except (json.JSONDecodeError, KeyError):
        stats["parse_errors"] += 1

print(json.dumps({"_meta": True, **stats}))
