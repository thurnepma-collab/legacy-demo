// Prefija rutas internas con el base path (vacío en Vercel, "/legacy-demo" en GitHub Pages)
// y añade la barra final a las páginas (no a los archivos), para evitar redirecciones 301.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => {
  const isFile = /\.[a-z0-9]+$/i.test(path);
  const p = !isFile && !path.endsWith('/') ? `${path}/` : path;
  return `${base}${p}`;
};
