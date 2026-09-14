import type { APIRoute } from 'astro';
import { events, fmtDate } from '../../../data/events';
import { renderPng, frame, h, BRAND } from '../../../lib/og';

export function getStaticPaths() {
  return events.map((e) => ({ params: { slug: e.slug }, props: { e } }));
}

export const GET: APIRoute = async ({ props }) => {
  const e = props.e as (typeof events)[number];
  const up = e.status === 'upcoming';
  const dateStr = fmtDate(e.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace(/^./, (c) => c.toUpperCase());
  const tree = frame([
    h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }, [
      h('div', { fontSize: 24, letterSpacing: 4, color: up ? BRAND.red2 : BRAND.muted, fontWeight: 700, marginBottom: 14 }, up ? 'PRÓXIMO EVENTO' : 'RESULTADOS OFICIALES'),
      h('div', { fontFamily: 'Bebas Neue', fontSize: 150, lineHeight: 0.9, color: BRAND.text }, e.name.toUpperCase()),
      h('div', { fontSize: 34, color: BRAND.text, fontWeight: 700, marginTop: 22 }, dateStr + (e.time && up ? ` · ${e.time} hrs` : '')),
      h('div', { fontSize: 28, color: BRAND.muted, marginTop: 8 }, `${e.venue}, ${e.city}`),
      h('div', { display: 'flex', alignItems: 'center', gap: 14, marginTop: 30 }, [
        h('div', { fontSize: 20, letterSpacing: 3, color: BRAND.gold, fontWeight: 700 }, 'ESTELAR'),
        h('div', { fontFamily: 'Bebas Neue', fontSize: 46, color: BRAND.text }, e.mainEvent.toUpperCase()),
      ]),
    ]),
    h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 300 }, [
      h('div', { fontFamily: 'Bebas Neue', fontSize: 420, color: 'rgba(227,32,43,0.22)', lineHeight: 0.8 }, String(e.number)),
    ]),
  ]);
  return renderPng(tree);
};
