// Sirve src/i18n/<lang>.json en /i18n/<lang>.json para el toggle de idioma
import type { APIRoute } from 'astro';
import es from '../../i18n/es.json';
import en from '../../i18n/en.json';

const translations = { es, en };

export function getStaticPaths() {
  return Object.keys(translations).map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(translations[params.lang as keyof typeof translations]), {
    headers: { 'Content-Type': 'application/json' },
  });
