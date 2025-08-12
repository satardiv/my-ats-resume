@echo off
setlocal ENABLEDELAYEDEXPANSION

REM Move to project root (one level up from scripts)
cd /d "%~dp0\.."

REM Install dependencies quietly (safe if already installed)
call npm install --silent

REM Generate the PDF using tsx without prompts
npx --yes tsx scripts/generate-pdf.tsx

if exist "resume.pdf" (
  echo PDF saved to %CD%\resume.pdf
  start "" "%CD%\resume.pdf"
) else (
  echo Failed to create PDF
  exit /b 1
)