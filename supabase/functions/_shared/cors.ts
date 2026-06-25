// Shared CORS for Vendr edge functions. The site is static (GitHub Pages on
// vendr.ie); the browser calls these functions cross-origin. Wildcard not used.

const ALLOWED_ORIGINS = new Set([
  'https://vendr.ie',
  'https://www.vendr.ie',
  'http://localhost:5173',
  'http://localhost:3000',
]);

function originFor(req) {
  const o = req.headers.get('origin') ?? '';
  return ALLOWED_ORIGINS.has(o) ? o : 'https://vendr.ie';
}

export function corsHeaders(req) {
  return {
    'Access-Control-Allow-Origin': originFor(req),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

export function handleCors(req) {
  if (req.method !== 'OPTIONS') return null;
  return new Response(null, { status: 204, headers: corsHeaders(req) });
}
