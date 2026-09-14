import type { APIRoute } from 'astro';
import { renderPng, frame, h, BRAND } from '../../lib/og';

export const GET: APIRoute = async () =>
  renderPng(
    frame([
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }, [
        h('div', { fontFamily: 'Bebas Neue', fontSize: 190, lineHeight: 0.9, color: BRAND.text }, 'LEGACY'),
        h('div', { fontFamily: 'Bebas Neue', fontSize: 90, lineHeight: 0.9, color: BRAND.red2 }, 'FIGHT LEAGUE'),
        h('div', { fontSize: 28, color: BRAND.muted, marginTop: 24 }, 'Artes marciales mixtas · Ciudad de México'),
      ]),
    ]),
  );
