import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const fontFile = (pkg: string, file: string) => require.resolve(`${pkg}/files/${file}`);

let fontsCache: Promise<any[]> | null = null;
export function fonts() {
  fontsCache ??= Promise.all([
    readFile(fontFile('@fontsource/bebas-neue', 'bebas-neue-latin-400-normal.woff')).then((data) => ({ name: 'Bebas Neue', data, weight: 400, style: 'normal' })),
    readFile(fontFile('@fontsource/inter', 'inter-latin-400-normal.woff')).then((data) => ({ name: 'Inter', data, weight: 400, style: 'normal' })),
    readFile(fontFile('@fontsource/inter', 'inter-latin-700-normal.woff')).then((data) => ({ name: 'Inter', data, weight: 700, style: 'normal' })),
  ]);
  return fontsCache;
}

// Mini helper para escribir árboles satori sin JSX.
export const h = (type: string, style: Record<string, any> = {}, children: any = undefined, extra: Record<string, any> = {}) => ({
  type,
  props: { style, children, ...extra },
});

export async function renderPng(tree: any) {
  const svg = await satori(tree, { width: 1200, height: 630, fonts: await fonts() });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' } });
}

export const BRAND = { bg: '#0b0b0d', bg2: '#141418', red: '#e3202b', red2: '#ff3b47', gold: '#e8c26a', muted: '#9a9aa6', text: '#f2f2f2' };

// Marco común: fondo, marca arriba a la izquierda, pie con dominio.
export function frame(children: any[], footer = 'legacyfl.mx') {
  return h('div', {
    width: 1200, height: 630, display: 'flex', flexDirection: 'column', background: BRAND.bg, color: BRAND.text, fontFamily: 'Inter', position: 'relative', overflow: 'hidden',
  }, [
    h('div', { position: 'absolute', left: -200, top: -260, width: 900, height: 900, borderRadius: 900, background: 'radial-gradient(circle, rgba(227,32,43,0.45) 0%, rgba(11,11,13,0) 62%)' }),
    h('div', { position: 'absolute', right: 0, top: 0, width: 14, height: 630, background: BRAND.red }),
    h('div', { display: 'flex', alignItems: 'baseline', gap: 12, padding: '36px 56px 0' }, [
      h('div', { fontFamily: 'Bebas Neue', fontSize: 44, color: BRAND.red2, letterSpacing: 2 }, 'LEGACY'),
      h('div', { fontSize: 16, letterSpacing: 5, color: BRAND.muted, fontWeight: 700 }, 'FIGHT LEAGUE'),
    ]),
    h('div', { display: 'flex', flex: 1, padding: '0 56px' }, children),
    h('div', { display: 'flex', justifyContent: 'space-between', padding: '0 56px 30px', fontSize: 18, color: BRAND.muted, letterSpacing: 2, fontWeight: 700 }, [
      h('div', {}, footer.toUpperCase()),
      h('div', {}, 'MMA · CDMX'),
    ]),
  ]);
}

// Silueta como placeholder de foto dentro de la imagen OG.
export function silhouette(size = 420) {
  const s = size / 400;
  return h('svg', { width: 400 * s, height: 520 * s }, [
    h('defs', {}, [
      h('linearGradient', { id: 'b' }, [h('stop', {}, undefined, { offset: '0', 'stop-color': '#34343f' }), h('stop', {}, undefined, { offset: '1', 'stop-color': '#0b0b0d' })]),
    ]),
    h('ellipse', {}, undefined, { cx: 200, cy: 150, rx: 52, ry: 62, fill: '#2a2a33' }),
    h('path', {}, undefined, { d: 'M110 520 L120 300 Q125 235 200 225 Q275 235 280 300 L290 520 Z', fill: '#26262e' }),
    h('path', {}, undefined, { d: 'M122 300 Q70 330 60 420 L95 440 Q110 380 130 340 Z', fill: '#26262e' }),
    h('path', {}, undefined, { d: 'M278 300 Q330 330 340 420 L305 440 Q290 380 270 340 Z', fill: '#26262e' }),
  ], { viewBox: '0 0 400 520', xmlns: 'http://www.w3.org/2000/svg' });
}

// Foto del peleador (de /public/fotos) como data URI para satori; null si no hay foto.
export async function photoNode(photo: string | undefined, w = 380, ht = 494) {
  if (!photo) return null;
  const file = join(process.cwd(), 'public', photo);
  let data: Buffer;
  try { data = await readFile(file); } catch { return null; }
  const mime = photo.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return h('div', { display: 'flex', flexShrink: 0, width: w, height: ht, borderRadius: 14, overflow: 'hidden', border: `3px solid ${BRAND.red}` }, [
    h('img', { objectFit: 'cover', objectPosition: 'center top' }, undefined, { width: w, height: ht, src: `data:${mime};base64,${data.toString('base64')}` }),
  ]);
}
