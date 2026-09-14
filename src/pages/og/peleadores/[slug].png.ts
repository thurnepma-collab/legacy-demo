import type { APIRoute } from 'astro';
import { fighters, recordStr } from '../../../data/fighters';
import { renderPng, frame, h, silhouette, BRAND } from '../../../lib/og';

export function getStaticPaths() {
  return fighters.map((f) => ({ params: { slug: f.slug }, props: { f } }));
}

export const GET: APIRoute = async ({ props }) => {
  const f = props.f as (typeof fighters)[number];
  const tree = frame([
    h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, paddingRight: 40 }, [
      f.champion
        ? h('div', { fontSize: 22, letterSpacing: 4, color: BRAND.gold, fontWeight: 700, marginBottom: 14 }, f.champion.toUpperCase())
        : h('div', { fontSize: 22, letterSpacing: 4, color: BRAND.muted, fontWeight: 700, marginBottom: 14 }, `${f.weightClass.toUpperCase()} · ${f.weightLbs} LBS`),
      f.nickname ? h('div', { fontSize: 30, color: BRAND.red2, fontWeight: 700, marginBottom: 6 }, `"${f.nickname}"`) : null,
      h('div', { fontFamily: 'Bebas Neue', fontSize: 118, lineHeight: 0.95, color: BRAND.text }, f.name.toUpperCase()),
      h('div', { display: 'flex', alignItems: 'baseline', gap: 18, marginTop: 18 }, [
        h('div', { fontFamily: 'Bebas Neue', fontSize: 92, color: BRAND.red2, lineHeight: 1 }, recordStr(f)),
        h('div', { fontSize: 24, color: BRAND.muted, fontWeight: 700, letterSpacing: 3 }, `PRO MMA · ${f.weightClass.toUpperCase()}`),
      ]),
      f.gym ? h('div', { fontSize: 24, color: BRAND.muted, marginTop: 10 }, `${f.gym}${f.fightingOutOf ? ' · ' + f.fightingOutOf : ''}`) : null,
    ].filter(Boolean)),
    h('div', { display: 'flex', alignItems: 'flex-end', width: 380, height: 494, overflow: 'hidden', marginTop: -20 }, [silhouette(380)]),
  ]);
  return renderPng(tree);
};
