// 301-redirects from old idealab.kz URL structure to new routes.
// Critical at DNS-cutover moment: Google has indexed old URLs over 5+ years.
// Without these, old backlinks would 404 and we'd lose ranking. With 301s,
// link equity passes to the new pages.

import { defineMiddleware } from "astro:middleware";

// path-prefix → new canonical path (RU default; KK gets prefixed below)
const REDIRECTS: Record<string, string> = {
  // Old idealab.kz WordPress URLs → new Astro routes
  "/ru/services": "/services",
  "/ru/services/": "/services",
  "/ru/contacts": "/locations",
  "/ru/contacts/": "/locations",
  "/ru/license": "/license",
  "/ru/license/": "/license",
  "/ru/offer": "/offer",
  "/ru/offer/": "/offer",
  "/ru/tests-prepare": "/preparation",
  "/ru/tests-prepare/": "/preparation",
  // KK URL-encoded Cyrillic equivalents
  "/қызметтер": "/kk/services",
  "/қызметтер/": "/kk/services",
  "/байланыс": "/kk/locations",
  "/байланыс/": "/kk/locations",
  "/лицензия": "/kk/license",
  "/лицензия/": "/kk/license",
  "/жария-оферта": "/kk/offer",
  "/жария-оферта/": "/kk/offer",
  "/анализдерге-дайындық": "/kk/preparation",
  "/анализдерге-дайындық/": "/kk/preparation",
};

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;
  // decode URL-encoded path for matching (browsers send punycode-like %D1%80...)
  let decoded = path;
  try {
    decoded = decodeURIComponent(path);
  } catch {
    // malformed encoding — fall through with raw path
  }
  const target = REDIRECTS[path] ?? REDIRECTS[decoded];
  if (target) {
    return context.redirect(target, 301);
  }
  return next();
});
