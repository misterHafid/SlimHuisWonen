import fs from "fs";
import path from "path";

/**
 * POST /api/product-opslaan
 *
 * Voegt een nieuw product toe aan data/products.js en
 * downloadt de productafbeelding naar /public/images/products/.
 *
 * Body (JSON):
 * {
 *   slug, name, brand, category, description,
 *   price, rating, ean, bolUrl, amazonUrl,
 *   image (URL van bol.com), features (string[])
 * }
 */
export async function POST(request) {
  // Eenvoudige auth via header (gezet door admin-pagina via cookie check)
  const adminKey = request.headers.get("x-admin-key");
  if (adminKey !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Niet geautoriseerd" }, { status: 401 });
  }

  const body = await request.json();
  const { slug, name, brand, category, description, price, rating, ean, amazonUrl, youtubeUrl, imageUrl, features = [] } = body;

  if (!slug || !name || !category) {
    return Response.json({ error: "slug, name en category zijn verplicht" }, { status: 400 });
  }

  const ROOT = process.cwd();

  // --- Afbeelding downloaden ---
  let localImage = null;
  if (imageUrl) {
    try {
      const imgRes = await fetch(imageUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Referer": "https://www.bol.com/",
          "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
      });
      if (imgRes.ok) {
        const contentType = imgRes.headers.get("content-type") || "";
        const ext = contentType.includes("png") || imageUrl.includes(".png") ? "png" : "jpg";
        const filename = `${slug}.${ext}`;
        const destPath = path.join(ROOT, "public", "images", "products", filename);
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        fs.writeFileSync(destPath, buffer);
        localImage = `/images/products/${filename}`;
        console.log("[product-opslaan] Afbeelding opgeslagen:", filename);
      } else {
        console.warn("[product-opslaan] Afbeelding HTTP", imgRes.status, imageUrl);
      }
    } catch (e) {
      console.warn("[product-opslaan] Afbeelding downloaden mislukt:", e.message);
    }
  }

  // --- YouTube video ID extraheren ---
  let finalYoutubeUrl = null;
  if (youtubeUrl) {
    const shorts = youtubeUrl.match(/youtube\.com\/shorts\/([^?&/]+)/);
    const watch  = youtubeUrl.match(/[?&]v=([^&]+)/);
    const short  = youtubeUrl.match(/youtu\.be\/([^?&/]+)/);
    const embed  = youtubeUrl.match(/youtube\.com\/embed\/([^?&/]+)/);
    const videoId = (shorts || watch || short || embed)?.[1];
    if (videoId) {
      finalYoutubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }
  }

  // --- Amazon affiliate tag toevoegen ---
  let finalAmazonUrl = amazonUrl || null;
  if (finalAmazonUrl) {
    try {
      const u = new URL(finalAmazonUrl);
      if (!u.searchParams.has("tag")) {
        u.searchParams.set("tag", "slimhuiswonen-21");
      }
      finalAmazonUrl = u.toString();
    } catch {
      // URL parsen mislukt — gebruik origineel
    }
  }

  // --- Product object bouwen ---
  const priceHint = price ? price.replace("€ ", "€").replace(",", ",") : null;

  const productEntry = `
  {
    slug: "${slug}",
    ${ean ? `ean: "${ean}",` : ""}
    brand: "${(brand || "").replace(/"/g, "'")}",
    name: "${name.replace(/"/g, "'")}",
    category: "${category}",
    image: "${localImage || "/images/products/placeholder.png"}",
    description: "${(description || name).replace(/"/g, "'")}",
    features: [${features.map((f) => `"${String(f).replace(/"/g, "'")}"`).join(", ")}],
    ${finalAmazonUrl ? `affiliateUrl: "${finalAmazonUrl}",` : ""}
    ${finalYoutubeUrl ? `youtubeUrl: "${finalYoutubeUrl}",` : ""}
    ${priceHint ? `priceHint: "${priceHint}",` : ""}
    priceLastUpdated: "${new Date().toLocaleDateString("nl-NL", { month: "long", year: "numeric" })}",
    ${rating ? `rating: ${rating},` : ""}
    pros: [],
    cons: [],
    forWho: [],
  },`;

  // --- Invoegen in products.js vóór de afsluitende ]; ---
  const productsPath = path.join(ROOT, "data", "products.js");
  let content = fs.readFileSync(productsPath, "utf8");

  if (content.includes(`slug: "${slug}"`)) {
    return Response.json({ error: `Product met slug "${slug}" bestaat al` }, { status: 409 });
  }

  // Zoek de afsluitende ]; van de products array — staat vóór de HELPERS comment
  const insertMarker = "\n];\n\n/* =========================\n   HELPERS";
  if (content.includes(insertMarker)) {
    content = content.replace(insertMarker, `\n${productEntry}${insertMarker}`);
  } else {
    // Fallback: voeg in vóór de laatste ]; in het bestand
    const lastBracket = content.lastIndexOf("\n];");
    if (lastBracket === -1) throw new Error("Kan products array niet vinden in products.js");
    content = content.slice(0, lastBracket) + `\n${productEntry}` + content.slice(lastBracket);
  }

  fs.writeFileSync(productsPath, content, "utf8");

  return Response.json({
    success: true,
    slug,
    image: localImage,
    message: `Product "${name}" toegevoegd aan data/products.js`,
  });
}
