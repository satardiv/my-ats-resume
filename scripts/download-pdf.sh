#!/usr/bin/env bash
set -euo pipefail

# Move to project root (one level up from scripts)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

# Install dependencies quietly (safe if already installed)
npm install --silent

# Generate the PDF
npx --yes tsx scripts/generate-pdf.tsx

PDF_PATH="$(pwd)/resume.pdf"
echo "PDF saved to: $PDF_PATH"

# Open the PDF automatically if possible
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$PDF_PATH" >/dev/null 2>&1 || true
elif command -v open >/dev/null 2>&1; then
  open "$PDF_PATH" >/dev/null 2>&1 || true
else
  echo "Please open the file manually."
fi