export type BoutCard = {
  order: number;
  section: 'Estelar' | 'Coestelar' | 'Cartelera principal' | 'Preliminares';
  weightLbs: number | null;
  title?: string;
  type: 'MMA' | 'Grappling';
  level: 'Pro' | 'Amateur';
  a: { name: string; slug?: string; record?: string };
  b: { name: string; slug?: string; record?: string };
  winner?: 'a' | 'b';
  method?: string;
  time?: string;
};

export type Event = {
  slug: string;
  name: string;
  number: number;
  date: string;      // ISO
  time?: string;
  venue: string;
  city: string;
  status: 'upcoming' | 'completed';
  tickets?: string;
  stream?: string;
  summary?: string;
  mainEvent: string;
  card?: BoutCard[];
};

export const events: Event[] = [
  {
    slug: 'legacy-19',
    name: 'Legacy 19',
    number: 19,
    date: '2026-10-03',
    time: '18:00',
    venue: 'Universidad 2014',
    city: 'CDMX',
    status: 'upcoming',
    tickets: 'https://ticketwolf.mx/e/legacy-19',
    stream: 'YouTube',
    summary: 'Primer evento bajo el nombre Legacy Fight League. Cartelera por confirmar.',
    mainEvent: 'Zambrano vs. Por confirmar',
    card: [
      { order: 12, section: 'Estelar', weightLbs: 125, title: 'Título Mosca', type: 'MMA', level: 'Pro', a: { name: 'Roberto Zambrano', slug: 'roberto-zambrano', record: '9-2' }, b: { name: 'Por confirmar' } },
      { order: 11, section: 'Coestelar', weightLbs: 155, type: 'MMA', level: 'Pro', a: { name: 'Daniel Reyes', slug: 'daniel-reyes', record: '6-0' }, b: { name: 'Por confirmar' } },
      { order: 10, section: 'Cartelera principal', weightLbs: 170, type: 'MMA', level: 'Pro', a: { name: 'Raúl Zaragoza', slug: 'raul-zaragoza', record: '7-1' }, b: { name: 'Por confirmar' } },
      { order: 9, section: 'Cartelera principal', weightLbs: 135, type: 'MMA', level: 'Pro', a: { name: 'Por confirmar' }, b: { name: 'Por confirmar' } },
    ],
  },
  {
    slug: 'riot-18',
    name: 'Riot Fight League 18',
    number: 18,
    date: '2026-05-29',
    time: '19:00',
    venue: 'Salón Villa Flamingos',
    city: 'CDMX',
    status: 'completed',
    stream: 'YouTube',
    summary: '12 peleas de MMA y un combate de grappling. Roberto Zambrano recuperó el cinturón mosca ante Luis Solórzano por TKO en el tercer asalto.',
    mainEvent: 'Zambrano vs. Solórzano II',
    card: [
      { order: 13, section: 'Estelar', weightLbs: 125, title: 'Título Mosca', type: 'MMA', level: 'Pro', a: { name: 'Roberto Zambrano', slug: 'roberto-zambrano', record: '9-2' }, b: { name: 'Luis Solórzano', slug: 'luis-solorzano', record: '11-9' }, winner: 'a', method: 'KO/TKO · Retiro', time: '5:00 R3' },
      { order: 12, section: 'Coestelar', weightLbs: null, type: 'Grappling', level: 'Pro', a: { name: 'Daniel Zellhuber' }, b: { name: 'Jorge González' }, winner: 'a', method: 'Sumisión · Calf slicer', time: '6:32 R1' },
      { order: 11, section: 'Cartelera principal', weightLbs: 170, type: 'MMA', level: 'Pro', a: { name: 'Raúl Zaragoza', slug: 'raul-zaragoza', record: '7-1' }, b: { name: 'Mario Martínez', record: '3-8' }, winner: 'a', method: 'Sumisión · Mataleón', time: '0:40 R1' },
      { order: 10, section: 'Cartelera principal', weightLbs: 135, type: 'MMA', level: 'Pro', a: { name: 'Antonio Rodríguez', slug: 'antonio-rodriguez', record: '12-6' }, b: { name: 'Carlos Gómez', record: '9-10' }, winner: 'a', method: 'KO/TKO · Ground & pound', time: '2:36 R1' },
      { order: 9, section: 'Cartelera principal', weightLbs: 155, type: 'MMA', level: 'Pro', a: { name: 'Fabián Albuerne', slug: 'fabian-albuerne', record: '6-3' }, b: { name: 'Elías Méndez', record: '4-5' }, winner: 'a', method: 'Sumisión · Mataleón', time: '2:10 R2' },
      { order: 8, section: 'Cartelera principal', weightLbs: 155, type: 'MMA', level: 'Pro', a: { name: 'Daniel Reyes', slug: 'daniel-reyes', record: '6-0' }, b: { name: 'Yesua Guadarrama', record: '0-4' }, winner: 'a', method: 'Sumisión · Ankle lock', time: '4:03 R1' },
      { order: 7, section: 'Cartelera principal', weightLbs: 135, type: 'MMA', level: 'Pro', a: { name: 'Emanuel Castañeda', slug: 'emanuel-castaneda', record: '1-1-1' }, b: { name: 'Emmanuel Blancas', record: '1-2' }, winner: 'a', method: 'Sumisión técnica · Mataleón', time: '0:30 R1' },
      { order: 6, section: 'Preliminares', weightLbs: 125, type: 'MMA', level: 'Amateur', a: { name: 'Óscar Rivera' }, b: { name: 'Juan Hernández' }, winner: 'a', method: 'Sumisión · Armbar', time: '1:01 R1' },
      { order: 5, section: 'Preliminares', weightLbs: 145, type: 'MMA', level: 'Amateur', a: { name: 'Luis Ramírez' }, b: { name: 'Rafael Martínez' }, winner: 'a', method: 'Decisión unánime', time: '3 rounds' },
      { order: 4, section: 'Preliminares', weightLbs: 183, type: 'MMA', level: 'Amateur', a: { name: 'Ernesto Flores' }, b: { name: 'Ángel Chávez' }, winner: 'a', method: 'Sumisión · Mataleón', time: '2:56 R1' },
      { order: 3, section: 'Preliminares', weightLbs: 140, type: 'MMA', level: 'Amateur', a: { name: 'José Hernández' }, b: { name: 'Jonathan Reyna' }, winner: 'a', method: 'Decisión unánime', time: '3 rounds' },
      { order: 2, section: 'Preliminares', weightLbs: 125, type: 'MMA', level: 'Amateur', a: { name: 'Synaí Vázquez' }, b: { name: 'Sofía Bravo' }, winner: 'a', method: 'KO/TKO', time: '1:10 R1' },
      { order: 1, section: 'Preliminares', weightLbs: 135, type: 'MMA', level: 'Amateur', a: { name: 'Carol Elías Aranda' }, b: { name: 'Diego Sánchez' }, winner: 'a', method: 'Sumisión · Mataleón', time: '1:04 R1' },
    ],
  },
  { slug: 'riot-17', name: 'Riot Fight League 17', number: 17, date: '2026-03-27', venue: 'Azteca Estudios', city: 'CDMX', status: 'completed', mainEvent: 'Zambrano vs. Solórzano I', summary: 'Luis Solórzano se llevó el título mosca vacante por descalificación en el segundo asalto.' },
  { slug: 'riot-16', name: 'Riot Fight League 16', number: 16, date: '2026-02-21', venue: 'Azteca Estudios', city: 'CDMX', status: 'completed', mainEvent: 'Sánchez vs. Rojas' },
  { slug: 'riot-15', name: 'Riot Fight League 15', number: 15, date: '2025-11-29', venue: 'Azteca Estudios', city: 'CDMX', status: 'completed', mainEvent: 'Huesca vs. Córdova', summary: '12 peleas entre atletas profesionales y amateurs. Ramiro Huesca Pérez vs. Román "El Gallo Negro" Córdova en el estelar.' },
  { slug: 'riot-14', name: 'Riot Fight League 14', number: 14, date: '2025-09-26', venue: 'Azteca Estudios', city: 'CDMX', status: 'completed', mainEvent: 'Zambrano vs. Núñez', summary: 'Roberto "El Vago de Oro" Zambrano ganó el título mosca ante Daniel Núñez por TKO en el primer asalto.' },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
export const upcoming = () => events.filter((e) => e.status === 'upcoming').sort((a, b) => a.date.localeCompare(b.date));
export const completed = () => events.filter((e) => e.status === 'completed').sort((a, b) => b.date.localeCompare(a.date));

export const fmtDate = (iso: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', opts);
