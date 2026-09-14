// Prefija rutas internas con el base path (vacío en Vercel, "/legacy-demo" en GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;
