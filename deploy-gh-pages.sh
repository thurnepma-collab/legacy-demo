#!/bin/zsh
# Publica la demo en GitHub Pages: https://thurnepma-collab.github.io/legacy-demo
set -e
export PATH="/opt/homebrew/bin:$PATH"
cd "$(dirname "$0")"
gh repo create legacy-demo --public --source . --remote origin --push --description "Demo del sitio Legacy Fight League" 2>/dev/null || git push -u origin main
rm -rf dist && SITE_URL=https://thurnepma-collab.github.io BASE_PATH=/legacy-demo npm run build
touch dist/.nojekyll
cd dist && git init -q -b gh-pages && git add -A && git -c user.name="Arthur" -c user.email="arthur.ampen@gmail.com" commit -q -m deploy && git push -f https://github.com/thurnepma-collab/legacy-demo.git gh-pages && cd ..
gh api -X POST repos/thurnepma-collab/legacy-demo/pages -f 'source[branch]=gh-pages' -f 'source[path]=/' >/dev/null 2>&1 || true
echo "Listo. En 1-2 min: https://thurnepma-collab.github.io/legacy-demo/peleadores/roberto-zambrano"
