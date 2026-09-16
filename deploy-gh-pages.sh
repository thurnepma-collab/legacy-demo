#!/bin/bash
# Publica la demo en GitHub Pages: https://thurnepma-collab.github.io/legacy-demo/
# Funciona en el VPS (remote SSH con deploy key) y en el Mac (remote HTTPS con gh).
set -e
cd "$(dirname "$0")"
[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"
export PATH="/opt/homebrew/bin:$PATH"
git push -q origin main || true
rm -rf dist && SITE_URL=https://thurnepma-collab.github.io BASE_PATH=/legacy-demo npm run build
touch dist/.nojekyll
REMOTE=$(git remote get-url origin)
cd dist && git init -q -b gh-pages && git add -A && git -c user.name="Arthur" -c user.email="arthur.ampen@gmail.com" commit -q -m deploy && git push -qf "$REMOTE" gh-pages
echo "Publicado. En 1-2 min: https://thurnepma-collab.github.io/legacy-demo/"
