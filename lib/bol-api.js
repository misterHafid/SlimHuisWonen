/**
 * bol.com affiliate integratie
 *
 * Bol.com gebruikt interne product-IDs in hun URLs — niet EANs.
 * De catalog API is niet beschikbaar voor affiliate accounts (403).
 *
 * Strategie:
 * 1. EAN bekend → zoek op bol.com op EAN (geeft exact 1 product, altijd correct)
 * 2. Geen EAN   → zoek op productnaam (fallback, werkt ook voor commissie)
 *
 * Vereiste var in .env.local:
 *   BOL_SITE_ID=1515439
 */

/**
 * Wrap een bol.com URL in een affiliate tracking link.
 * @param {string} targetUrl
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
 * Met EAN  → bol.com zoekresultaten op EAN (toont exact het juiste product)
 * Zonder   → bol.com zoekresultaten op productnaam
 *
 * @param {{ ean?: string, name: string }} product
 * @returns {string|null}
 */
export function getBolUrl(product) {
  if (!product) return null;

  const query = product.ean
    ? product.ean                    // EAN → exacte zoekresultaat
    : product.name.trim();           // naam → brede zoekresultaten

  const targetUrl = `https://www.bol.com/nl/nl/s/?searchtext=${encodeURIComponent(query)}`;
  return wrapAffiliate(targetUrl);
}

/**
 * Legacy helper — gebruik liever getBolUrl(product).
 * @param {string} ean
 * @returns {string|null}
 */
export function getBolAffiliateUrl(ean) {
  if (!ean) return null;
  return wrapAffiliate(`https://www.bol.com/nl/nl/s/?searchtext=${ean}`);
}

/**
 * Geeft de Coolblue affiliate URL terug als die aanwezig is in de productdata.
 * @param {{ coolblueUrl?: string }} product
 * @returns {string|null}
 */
export function getCoolblueUrl(product) {
  return product?.coolblueUrl || null;
}
