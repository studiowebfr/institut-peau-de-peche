#!/usr/bin/env bash
# Build d'export statique pour l'aperçu public GitHub Pages.
# La route API n'est pas exportable statiquement (elle exécute du code
# serveur) : on la met de côté le temps du build, puis on la restaure.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -d app/api ]; then
  cp -r app/api .api-backup && rm -rf app/api
  trap 'if [ -d .api-backup ]; then cp -r .api-backup app/api && rm -rf .api-backup; fi' EXIT
fi

GITHUB_PAGES=true npx next build
