# Legacy Fight League — demo site

Demo Astro pour Legacy Fight League (LFL), promotion MMA à CDMX. Arthur vend ce site à LFL (contact : Chris Del Mal ; Adolfo = CFO). Proposition envoyée le 15 sept 2026 : 35 000 MXN + IVA fixe (ou 3 x 11 700), 5 000 MXN par event, 600 MXN/h hors périmètre, v1 avant Legacy 19 (3 oct 2026). Plancher 30 000. Le forfait par event ne se négocie pas.

## Commandes
- `npm run dev` : serveur local (http://localhost:4321)
- `./deploy-gh-pages.sh` : build + publication sur GitHub Pages (https://thurnepma-collab.github.io/legacy-demo/). Toujours après `git commit` sur main.
- Variables de build : `SITE_URL` (origine publique) et `BASE_PATH` (`/legacy-demo` sur GitHub Pages, `/` sur Vercel).

## Structure
- `src/data/fighters.ts`, `src/data/events.ts` : le "CMS" de la démo. Données publiques Tapology + riotfl.mx + Ticketwolf.
- `src/lib/og.ts` : cartes Open Graph (satori + resvg + sharp, JPEG < 300 Ko, limite WhatsApp). Les `img` satori doivent avoir width/height en attributs ; pas de boxShadow (resvg plante).
- `src/lib/url.ts` : helper `u()` qui préfixe le base path et ajoute la barre finale (évite les 301 GitHub Pages).
- `public/fotos/` : portraits Tapology (placeholders jusqu'à ce que la ligue fournisse). `public/eventos/legacy-19.jpg` : bannière Ticketwolf.
- `../propuesta/` : propuesta HTML + PDF. Le PDF se génère avec Chrome headless sur le Mac ; sur le VPS, modifier le HTML puis régénérer depuis le Mac, ou installer chromium.

## Règles
- Ne jamais commiter dist/ sur main. gh-pages est régénéré par le script.
- Ne pas pitcher sponsors / représentation de fighters tant que le site n'est pas signé.
