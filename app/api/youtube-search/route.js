/**
 * GET /api/youtube-search?brand=Philips+Hue&name=White+Ambiance+Starterkit
 *
 * Zoekt via YouTube Data API v3 naar een passende productvideo.
 * Retourneert de top 3 resultaten met id, titel, kanaal en thumbnail.
 *
 * Quota-kosten: 100 per aanroep (gratis limiet = 10.000/dag → ~100 zoekopdrachten/dag).
 */
export async function GET(request) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        error: "YOUTUBE_API_KEY niet ingesteld",
        setup: [
          "1. Ga naar https://console.cloud.google.com/",
          "2. Maak een project aan (of selecteer een bestaand project)",
          "3. Ga naar 'APIs & Services' > 'Library'",
          "4. Zoek naar 'YouTube Data API v3' en activeer deze",
          "5. Ga naar 'APIs & Services' > 'Credentials'",
          "6. Klik op 'Create Credentials' > 'API key'",
          "7. Kopieer de sleutel en voeg toe aan .env.local:",
          "   YOUTUBE_API_KEY=AIza...",
          "8. Herstart de dev-server (npm run dev)",
        ],
      },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand")?.trim() || "";
  const name = searchParams.get("name")?.trim() || "";

  if (!name) {
    return Response.json({ error: "name parameter verplicht" }, { status: 400 });
  }

  // Zoekterm: "[merk] [product] review OR unboxing OR hands-on"
  const q = `${brand} ${name} review OR unboxing OR hands-on`.trim();

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("q", q);
    url.searchParams.set("type", "video");
    url.searchParams.set("maxResults", "10");
    url.searchParams.set("relevanceLanguage", "nl");
    url.searchParams.set("videoDuration", "any");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), { cache: "no-store" });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const msg = err?.error?.message || `YouTube API HTTP ${res.status}`;
      return Response.json({ error: msg }, { status: res.status });
    }

    const data = await res.json();
    const items = data.items || [];

    // Haal video details op (duur) voor de gevonden video's
    const ids = items.map((it) => it.id?.videoId).filter(Boolean);
    let durations = {};

    if (ids.length > 0) {
      const detailUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
      detailUrl.searchParams.set("part", "contentDetails");
      detailUrl.searchParams.set("id", ids.join(","));
      detailUrl.searchParams.set("key", apiKey);

      const detailRes = await fetch(detailUrl.toString(), { cache: "no-store" });
      if (detailRes.ok) {
        const detailData = await detailRes.json();
        for (const v of detailData.items || []) {
          durations[v.id] = parseDuration(v.contentDetails?.duration);
        }
      }
    }

    // Verwerk en sorteer: merkkanalen krijgen bonus
    const brandLower = brand.toLowerCase();
    const scored = items
      .map((it) => {
        const videoId = it.id?.videoId;
        if (!videoId) return null;

        const title = it.snippet?.title || "";
        const channel = it.snippet?.channelTitle || "";
        const thumb =
          it.snippet?.thumbnails?.medium?.url ||
          it.snippet?.thumbnails?.default?.url ||
          null;
        const duration = durations[videoId] || null;

        // Merkkanaal bonus
        const isBrandChannel = brandLower && channel.toLowerCase().includes(brandLower);
        const score = isBrandChannel ? 2 : 1;

        return { videoId, title, channel, thumb, duration, isBrandChannel, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return Response.json({ videos: scored, query: q });
  } catch (err) {
    console.error("[youtube-search]", err);
    return Response.json({ error: "Zoeken mislukt: " + err.message }, { status: 500 });
  }
}

/* ISO 8601 duratie → leesbare string (bijv. "PT4M30S" → "4:30") */
function parseDuration(iso) {
  if (!iso) return null;
  const h = iso.match(/(\d+)H/)?.[1];
  const m = iso.match(/(\d+)M/)?.[1];
  const s = iso.match(/(\d+)S/)?.[1];
  const hours = parseInt(h || 0);
  const mins = parseInt(m || 0);
  const secs = parseInt(s || 0);
  if (hours > 0) return `${hours}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}
