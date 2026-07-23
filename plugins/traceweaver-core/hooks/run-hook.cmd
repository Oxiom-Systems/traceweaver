: << 'CMDBLOCK'
@echo off
REM TRACEWEAVER: file-role=advisory-hook-wrapper; req=REQ-TW-079,REQ-TW-080; trace=TRACE-TW-060,TRACE-TW-061; ver=VER-TW-080,VER-TW-081
REM Cross-platform wrapper for TraceWeaver extensionless bash hooks.
if "%~1"=="" exit /b 0
set "HOOK_DIR=%~dp0"
if exist "C:\Program Files\Git\bin\bash.exe" (
    "C:\Program Files\Git\bin\bash.exe" "%HOOK_DIR%%~1" %2 %3 %4 %5 %6 %7 %8 %9
    exit /b %ERRORLEVEL%
)
where bash >nul 2>nul
if %ERRORLEVEL% equ 0 (
    bash "%HOOK_DIR%%~1" %2 %3 %4 %5 %6 %7 %8 %9
    exit /b %ERRORLEVEL%
)
exit /b 0
CMDBLOCK

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SCRIPT_NAME="${1:-}"
[[ -n "$SCRIPT_NAME" ]] || exit 0
shift
exec bash "${SCRIPT_DIR}/${SCRIPT_NAME}" "$@"
