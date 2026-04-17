import fs from "fs";
import path from "path";
import zlib from "zlib";
import { promisify } from "util";

const gunzip = promisify(zlib.gunzip);

/* ── Column indices in Coolblue datafeed ── */
const COL = {
  aw_deep_link: 0,
  name: 1,
  description: 5,
  category: 6,
  price: 7,
  image: 4,
  merchant_deep_link: 16,
  brand: 21,
  specifications: 25,
  ean: 70,
};

/* ── Simple CSV parser (handles quoted fields) ── */
function parseCSVLine(line) {
  const cols = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      cols.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  cols.push(current);
  return cols;
}

/* ── Load + cache feed in memory ── */
let cachedRows = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 min

async function getRows() {
  const now = Date.now();
  if (cachedRows && now - cacheTime < CACHE_TTL) return cachedRows;

  // Find the newest .csv.gz in data/feeds/
  const feedDir = path.join(process.cwd(), "data", "feeds");
  const files = fs.readdirSync(feedDir).filter((f) => f.endsWith(".csv.gz"));
  if (files.length === 0) throw new Error("Geen Coolblue datafeed gevonden in data/feeds/");

  const feedPath = path.join(feedDir, files[files.length - 1]);
  const compressed = fs.readFileSync(feedPath);
  const buffer = await gunzip(compressed);
  const text = buffer.toString("utf8");

  const lines = text.split("\n");
  // Skip header row
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    rows.push(parseCSVLine(line));
  }

  cachedRows = rows;
  cacheTime = now;
  return rows;
}

/* ── Search ── */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim().toLowerCase();

  if (!q || q.length < 2) {
    return Response.json({ error: "Zoekterm te kort" }, { status: 400 });
  }

  try {
    const rows = await getRows();
    const terms = q.split(/\s+/).filter(Boolean);

    const scored = rows
      .map((cols) => {
        const name = (cols[COL.name] || "").toLowerCase();
        const brand = (cols[COL.brand] || "").toLowerCase();
        const combined = `${name} ${brand}`;

        // Count how many search terms match
        let score = 0;
        for (const t of terms) {
          if (combined.includes(t)) score++;
        }
        return { cols, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);

    const affiliateId = process.env.AWIN_PUBLISHER_ID || "";

    const products = scored.map(({ cols }) => {
      const name = cols[COL.name] || "";
      const brand = cols[COL.brand] || "";
      const priceRaw = cols[COL.price] || "";
      const price = priceRaw ? `€ ${parseFloat(priceRaw).toFixed(2).replace(".", ",")}` : null;
      const image = cols[COL.image] || null;
      const description = cols[COL.description] || "";
      const category = cols[COL.category] || "";
      const deepLink = cols[COL.merchant_deep_link] || "";
      const awDeepLink = cols[COL.aw_deep_link] || "";
      const ean = cols[COL.ean] || null;

      // Use affiliate deep link if publisher ID set, otherwise merchant link
      const coolblueUrl = affiliateId && awDeepLink ? awDeepLink : deepLink;

      return { name, brand, price, image, description, category, coolblueUrl, ean };
    });

    return Response.json({ products, feedFile: "coolblue.csv.gz", total: rows.length });
  } catch (err) {
    console.error("[coolblue-search]", err);
    return Response.json({ error: err.message || "Zoeken mislukt" }, { status: 500 });
  }
}
