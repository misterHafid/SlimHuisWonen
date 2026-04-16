/**
 * GET /api/bol-search?q=tapo+p115
 *
 * Haalt zoekresultaten op van bol.com en parseert naam, prijs,
 * afbeelding, sterren en product-ID uit de HTML.
 *
 * Alleen beschikbaar in development of met ADMIN_PASSWORD ingesteld.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();

  if (!q) {
    return Response.json({ error: "Geen zoekterm opgegeven" }, { status: 400 });
  }

  const siteId = process.env.BOL_SITE_ID;

  try {
    const res = await fetch(
      `https://www.bol.com/nl/nl/s/?searchtext=${encodeURIComponent(q)}&limit=12`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0",
          Accept: "text/html,application/xhtml+xml",
          "Accept-Language": "nl-NL,nl;q=0.9",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return Response.json({ error: "Bol.com niet bereikbaar" }, { status: 502 });
    }

    const html = await res.text();

    // --- Product IDs (uniek, in volgorde) ---
    const idOrder = [];
    const idSeen = new Set();
    for (const m of html.matchAll(/\/p\/[^\/]+\/(\d{16,20})\//g)) {
      if (!idSeen.has(m[1])) { idSeen.add(m[1]); idOrder.push(m[1]); }
    }

    // --- Afbeeldingen (s-bol.com, originele URL bewaren) ---
    const images = [...html.matchAll(/https:\/\/media\.s-bol\.com\/[^\s"']+/g)]
      .map((m) => m[0]) // gebruik de exacte URL uit de HTML
      .filter((url, i, arr) => arr.indexOf(url) === i); // uniek

    // --- Namen via alt-tekst ---
    const names = [...html.matchAll(/alt="([^"]{10,150})"/g)]
      .map((m) => m[1])
      .filter((n) => !n.toLowerCase().includes("logo") && !n.toLowerCase().includes("banner"));

    // --- Prijzen ---
    const prices = [...html.matchAll(/<span[^>]*>(\d{1,3}[,\.]\d{2})<\/span>/g)]
      .map((m) => `€ ${m[1].replace(".", ",")}`)
      .filter((_, i) => i < 20);

    // --- Sterren via aria-label ---
    const ratings = [...html.matchAll(/Gemiddeld\s+([\d,\.]+)\s+van de 5 sterren uit (\d+) reviews/g)]
      .map((m) => ({ rating: parseFloat(m[1].replace(",", ".")), reviewCount: parseInt(m[2]) }));

    // --- Producten samenvoegen ---
    const products = idOrder.slice(0, 8).map((bolId, i) => {
      const name = names[i] || `Product ${i + 1}`;
      const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 60);

      const bolUrl = siteId
        ? `https://partner.bol.com/click/click?p=61&t=url&s=${siteId}&f=TXL&url=${encodeURIComponent(
            `https://www.bol.com/nl/nl/p/${slug}/${bolId}/`
          )}`
        : `https://www.bol.com/nl/nl/p/${slug}/${bolId}/`;

      return {
        bolId,
        name,
        slug,
        price: prices[i] || null,
        image: images[i] || null,
        rating: ratings[i]?.rating || null,
        reviewCount: ratings[i]?.reviewCount || null,
        bolUrl,
        directUrl: `https://www.bol.com/nl/nl/p/${slug}/${bolId}/`,
      };
    });

    return Response.json({ products });
  } catch (err) {
    console.error("[bol-search]", err);
    return Response.json({ error: "Zoeken mislukt" }, { status: 500 });
  }
}
