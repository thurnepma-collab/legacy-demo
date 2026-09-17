import type { APIRoute } from 'astro';
import { renderPng, frame, h, bannerBackground, BRAND } from '../../lib/og';
import { upcoming, fmtDate } from '../../data/events';

// Carte de l'accueil : bannière du prochain event en fond, marque + prochain event en texte.
export const GET: APIRoute = async () => {
  const next = upcoming()[0];
  const dateStr = next ? fmtDate(next.date, { weekday: 'long', day: 'numeric', month: 'long' }).replace(/^./, (c) => c.toUpperCase()) : '';
  return renderPng(
    frame(
      [
        h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }, [
          h('div', { fontFamily: 'Bebas Neue', fontSize: 170, lineHeight: 0.9, color: BRAND.text }, 'LEGACY'),
          h('div', { fontFamily: 'Bebas Neue', fontSize: 80, lineHeight: 0.9, color: BRAND.red2 }, 'FIGHT LEAGUE'),
          h('div', { fontSize: 26, color: BRAND.muted, marginTop: 18 }, 'Artes marciales mixtas · Ciudad de México'),
          next
            ? h('div', { display: 'flex', alignItems: 'center', gap: 14, marginTop: 26 }, [
                h('div', { fontSize: 18, letterSpacing: 3, color: BRAND.gold, fontWeight: 700 }, 'PRÓXIMO EVENTO'),
                h('div', { fontFamily: 'Bebas Neue', fontSize: 40, color: BRAND.text }, `${next.name.toUpperCase()} · ${dateStr.toUpperCase()}${next.time ? ' · ' + next.time + ' HRS' : ''}`),
              ])
            : null,
        ].filter(Boolean)),
        h('div', { display: 'flex', width: 300 }),
      ],
      'legacyfl.mx',
      await bannerBackground(next?.banner),
    ),
  );
};
