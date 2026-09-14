# Legacy Fight League — demo del sitio

Demo estática (Astro) para la reunión con LFL. Páginas con render en servidor, Open Graph dinámico por peleador y por evento, y una página `/demo` que muestra "antes y después" en WhatsApp.

## Rutas

- `/` inicio · `/eventos` · `/eventos/legacy-19` (próximo) · `/eventos/riot-18` (resultados)
- `/peleadores` · `/peleadores/roberto-zambrano`
- `/rankings` · `/contacto`
- `/demo` — para enseñar en la reunión (no está en el menú)
- `/og/peleadores/<slug>.png` y `/og/eventos/<slug>.png` — imágenes generadas en build (satori + resvg)

## Correr local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build && npm run preview
```

## Desplegar en Vercel (5 min)

```bash
npm i -g vercel
vercel login
vercel                       # acepta los defaults, framework: Astro
vercel env add SITE_URL      # valor: https://<tu-proyecto>.vercel.app  (o el dominio final)
vercel --prod
```

`SITE_URL` hace que `og:image` sea una URL absoluta; sin ella WhatsApp no muestra la imagen. Para verificar la vista previa antes de la reunión: pega el link del peleador en un chat de WhatsApp contigo mismo, o usa https://www.opengraph.xyz.

## Datos

- `src/data/fighters.ts` y `src/data/events.ts` son el "CMS" de la demo. En el sitio final se sustituyen por Sanity o Payload sin tocar las páginas.
- Datos públicos de Tapology (récords, carteleras, rankings regionales) y de riotfl.mx (evento, venue, contacto). Fotos: placeholder (`src/components/Silhouette.astro`), se cambia por `<img>` cuando la liga entregue fotos.
- Legacy 19: cartelera "por confirmar" salvo el estelar, ilustrativo.
