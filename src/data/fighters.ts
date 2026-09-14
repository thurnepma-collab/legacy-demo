export type Bout = {
  date: string;        // ISO
  result: 'W' | 'L' | 'D' | 'NC';
  opponent: string;
  method: string;      // "TKO", "DEC", "SUB", "DQ"
  detail: string;      // "Retirement · 5:00 · R3"
  event: string;
  eventSlug?: string;
};

export type Fighter = {
  slug: string;
  name: string;
  givenName?: string;
  nickname?: string;
  record: { w: number; l: number; d: number };
  streak?: string;
  weightClass: string;
  weightLbs: number;
  heightCm?: number;
  age?: number;
  born?: string;
  fightingOutOf?: string;
  gym?: string;
  champion?: string;          // titre détenu
  rankings?: { label: string; rank: number; of: number }[];
  finishes?: { ko: number; sub: number; dec: number };
  instagram?: string;
  tapology?: string;
  sherdog?: string;
  bio?: string;
  bouts?: Bout[];
  featured?: boolean;
  photo?: string;          // ruta en /public/fotos (demo: Tapology)
};

export const fighters: Fighter[] = [
  {
    slug: 'roberto-zambrano',
    photo: '/fotos/roberto-zambrano.jpg',
    name: 'Roberto Zambrano',
    givenName: 'Matías Roberto Zambrano Maldonado',
    nickname: 'El Vago de Oro',
    record: { w: 9, l: 2, d: 0 },
    streak: '1 victoria',
    weightClass: 'Mosca',
    weightLbs: 125,
    heightCm: 170,
    age: 24,
    born: 'Ecuador',
    fightingOutOf: 'Quito, Ecuador',
    gym: 'Bonebreakers MMA',
    champion: 'Campeón Mosca Legacy Fight League',
    rankings: [
      { label: 'Mosca · México', rank: 11, of: 185 },
      { label: 'Mosca · Latinoamérica', rank: 22, of: 532 },
      { label: 'Libra por libra · México', rank: 42, of: 2757 },
    ],
    finishes: { ko: 5, sub: 1, dec: 3 },
    instagram: 'roberto_zambrano__',
    tapology: 'https://www.tapology.com/fightcenter/fighters/284199-roberto-zambrano',
    sherdog: 'https://www.sherdog.com/fighter/roberto-zambrano-380660',
    bio: 'Ecuatoriano radicado en México, Zambrano llegó a la liga en 2025 y en tres peleas se convirtió en la cara de la división mosca. Tras perder el cinturón por descalificación ante Luis Solórzano en marzo, lo recuperó en la revancha de mayo con un TKO al final del tercer asalto. Cinco de sus nueve victorias son por nocaut.',
    featured: true,
    bouts: [
      { date: '2026-05-29', result: 'W', opponent: 'Luis Solórzano', method: 'TKO', detail: 'Retiro · 5:00 · R3 · Título Mosca', event: 'Riot Fight League 18', eventSlug: 'riot-18' },
      { date: '2026-03-27', result: 'L', opponent: 'Luis Solórzano', method: 'DQ', detail: 'Rodillazo ilegal · 0:38 · R2 · Título Mosca', event: 'Riot Fight League 17', eventSlug: 'riot-17' },
      { date: '2025-09-26', result: 'W', opponent: 'Daniel Núñez', method: 'TKO', detail: 'Ground & pound · 4:47 · R1 · Título Mosca', event: 'Riot Fight League 14', eventSlug: 'riot-14' },
      { date: '2025-05-30', result: 'W', opponent: 'Eleazar Meza', method: 'TKO', detail: 'Ground & pound · 2:36 · R1', event: 'Riot Fight League 11' },
      { date: '2025-01-31', result: 'W', opponent: 'Yahir Ramírez', method: 'DEC', detail: 'Decisión unánime', event: 'Lux Fight League 49' },
      { date: '2024-04-19', result: 'W', opponent: 'Jesús Garnica', method: 'TKO', detail: 'KO/TKO · 4:45 · R1', event: 'Beat Down: Aguascalientes' },
      { date: '2023-09-22', result: 'W', opponent: 'Daniel Villa', method: 'SUB', detail: 'Mataleón · 3:42 · R3', event: 'Budo Sento Championship 17' },
      { date: '2023-07-14', result: 'L', opponent: 'Max Leali', method: 'DEC', detail: 'Decisión unánime', event: 'Tuff-N-Uff 132' },
      { date: '2023-06-17', result: 'W', opponent: 'Israel López', method: 'TKO', detail: 'KO/TKO · 3:14 · R1', event: 'Beat Down 7' },
      { date: '2023-02-25', result: 'W', opponent: 'Anthony Ramos', method: 'DEC', detail: 'Decisión unánime', event: 'AWKA 9' },
      { date: '2022-10-21', result: 'W', opponent: 'Miguel Erazo', method: 'DEC', detail: 'Decisión unánime', event: 'Naciones MMA 10' },
    ],
  },
  { slug: 'luis-solorzano', name: 'Luis Solórzano', nickname: 'Power', photo: '/fotos/luis-solorzano.jpg', record: { w: 11, l: 9, d: 0 }, weightClass: 'Mosca', weightLbs: 125, tapology: 'https://www.tapology.com/fightcenter/fighters/' },
  { slug: 'raul-zaragoza', name: 'Raúl Zaragoza', nickname: 'El Matador', photo: '/fotos/raul-zaragoza.jpg', record: { w: 7, l: 1, d: 0 }, weightClass: 'Wélter', weightLbs: 170, tapology: 'https://www.tapology.com/fightcenter/fighters/324872-raul-zaragoza' },
  { slug: 'antonio-rodriguez', name: 'Antonio Rodríguez', nickname: 'El Malilla', photo: '/fotos/antonio-rodriguez.png', record: { w: 12, l: 6, d: 0 }, weightClass: 'Gallo', weightLbs: 135, tapology: 'https://www.tapology.com/fightcenter/fighters/86503-too-rodriguez' },
  { slug: 'fabian-albuerne', name: 'Fabián Albuerne', photo: '/fotos/fabian-albuerne.jpg', record: { w: 6, l: 3, d: 0 }, weightClass: 'Ligero', weightLbs: 155, tapology: 'https://www.tapology.com/fightcenter/fighters/318585-fabian-albuerne' },
  { slug: 'daniel-reyes', name: 'Daniel Reyes', photo: '/fotos/daniel-reyes.jpg', record: { w: 6, l: 0, d: 0 }, weightClass: 'Ligero', weightLbs: 155, tapology: 'https://www.tapology.com/fightcenter/fighters/398366-daniel-reyes' },
  { slug: 'emanuel-castaneda', name: 'Emanuel Castañeda', record: { w: 1, l: 1, d: 1 }, weightClass: 'Gallo', weightLbs: 135 },
];

export const getFighter = (slug: string) => fighters.find((f) => f.slug === slug);
export const recordStr = (f: Fighter) => `${f.record.w}-${f.record.l}-${f.record.d}`;
