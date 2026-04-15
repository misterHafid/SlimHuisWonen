/**
 * bol.com affiliate integratie
 *
 * De bol.com affiliate API (scope: "affiliate") geeft geen toegang tot de
 * product catalog — alleen affiliate tracking links zijn beschikbaar.
 *
 * Strategie:
 * 1. Als product.ean bekend is → directe bol.com productpagina-URL
 * 2. Anders → bol.com zoekresultaten-URL op productnaam
 *
 * Beide worden gewrapt in een affiliate tracking link zodat commissies bijgehouden worden.
 *
 * Vereiste vars in .env.local:
 *   BOL_SITE_ID=1515439
 */

/**
 * Bouw een affiliate tracking URL voor bol.com.
 * @param {string} targetUrl  - de bol.com URL (product of zoekresultaat)
 * @returns {string|null}
 */
function wrapAffiliate(targetUrl) {
  const siteId = process.env.BOL_SITE_ID;
  if (!siteId || !targetUrl) return null;

  return (
    `https://partner.bol.com/click/click?p=61&t=url&s=${siteId}&f=TXL` +
    `&url=${encodeURIComponent(targetUrl)}`
  );
}

/**
 * Geeft een affiliate URL terug voor een product.
 *
 * Met EAN  → directe productpagina op bol.com
 * Zonder   → zoekresultaten op productnaam + merk
 *
 * @param {{ ean?: string, name: string, brand?: string }} product
 * @returns {string|null}
 */
export function getBolUrl(product) {
  if (!product) return null;

  let targetUrl;

  if (product.ean) {
    // Directe productpagina — beste gebruikerservaring en tracking
    const slug = product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    targetUrl = `https://www.bol.com/nl/nl/p/${slug}/${product.ean}/`;
  } else {
    // Zoekresultaten op naam (brand zit vaak al in de naam)
    const query = product.name.trim();
    targetUrl = `https://www.bol.com/nl/nl/s/?searchtext=${encodeURIComponent(query)}`;
  }

  return wrapAffiliate(targetUrl);
}

/**
 * Legacy helper — alleen EAN-based. Gebruik liever getBolUrl(product).
 * @param {string} ean
 * @returns {string|null}
 */
export function getBolAffiliateUrl(ean) {
  if (!ean) return null;
  return wrapAffiliate(`https://www.bol.com/nl/nl/s/?searchtext=${ean}`);
}
