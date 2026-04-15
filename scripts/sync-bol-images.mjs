/**
 * sync-bol-images.mjs
 *
 * Downloadt de officiële productafbeelding van bol.com voor elk product met een EAN-code
 * en slaat deze op in /public/images/products/
 *
 * Gebruik:
 *   node scripts/sync-bol-images.mjs
 * Of via package.json:
 *   npm run sync-bol-images
 *
 * Vereist .env.local met:
 *   BOL_CLIENT_ID=...
 *   BOL_CLIENT_SECRET=...
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");
const IMG_DIR   = path.join(ROOT, "public", "images", "products");

// --- Laad .env.local handmatig (geen dotenv nodig) ---
const envPath = path.join(ROOT, ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.replace(/\r$/, ""); // verwijder Windows \r
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (key) process.env[key] = val;
  }
}

const BOL_TOKEN_URL = "https://login.bol.com/token";
const BOL_API_BASE  = "https://api.bol.com";

async function getToken() {
  const id     = process.env.BOL_CLIENT_ID;
  const secret = process.env.BOL_CLIENT_SECRET;
  if (!id || !secret) throw new Error("BOL_CLIENT_ID of BOL_CLIENT_SECRET ontbreekt in .env.local");

  const credentials = Buffer.from(`${id}:${secret}`).toString("base64");
  const res = await fetch(BOL_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Token ophalen mislukt (${res.status}): ${txt}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function getBolImageUrl(ean, token) {
  const res = await fetch(`${BOL_API_BASE}/catalog/v10/products/${ean}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.retailer.v10+json",
    },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data?.images?.[0]?.url ?? null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) return false;

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  return true;
}

async function main() {
  // Laad producten dynamisch (ESM import van CJS-module werkt via createRequire)
  const { createRequire } = await import("module");
  const require = createRequire(import.meta.url);

  // products.js gebruikt ES module export — verwerk via dynamische import
  const { products } = await import(path.join(ROOT, "data", "products.js")).catch(() => {
    // Fallback: probeer via require (CJS)
    const mod = require(path.join(ROOT, "data", "products.js"));
    return { products: mod.products || mod.default };
  });

  const productsWithEan = products.filter((p) => p.ean && p.ean.length >= 8);

  if (productsWithEan.length === 0) {
    console.log("⚠️  Geen producten gevonden met een EAN-code.");
    console.log('   Voeg "ean: \\"1234567890123\\"" toe aan producten in data/products.js');
    return;
  }

  console.log(`🔑 Token ophalen...`);
  const token = await getToken();
  console.log(`✅ Token ontvangen\n`);

  let succeeded = 0;
  let skipped   = 0;
  let failed    = 0;

  for (const product of productsWithEan) {
    const slug    = product.slug;
    const ean     = product.ean;
    const outFile = path.join(IMG_DIR, `${slug}-bol.jpg`);

    // Sla over als afbeelding al bestaat
    if (fs.existsSync(outFile)) {
      console.log(`⏭️  ${slug} — al aanwezig, overgeslagen`);
      skipped++;
      continue;
    }

    process.stdout.write(`⬇️  ${slug} (EAN ${ean})... `);

    const imageUrl = await getBolImageUrl(ean, token);
    if (!imageUrl) {
      console.log("niet gevonden op bol.com");
      failed++;
      continue;
    }

    const ok = await downloadImage(imageUrl, outFile);
    if (ok) {
      console.log(`✅ opgeslagen als ${slug}-bol.jpg`);
      succeeded++;
    } else {
      console.log("downloaden mislukt");
      failed++;
    }

    // Wacht 300ms om rate limits te vermijden
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log(`\n📊 Resultaat: ${succeeded} gedownload, ${skipped} overgeslagen, ${failed} mislukt`);
}

main().catch((err) => {
  console.error("❌ Fout:", err.message);
  process.exit(1);
});
