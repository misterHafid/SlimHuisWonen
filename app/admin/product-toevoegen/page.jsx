"use client";

import { useState } from "react";

const CATEGORIES = [
  "slimme-verlichting",
  "sensoren",
  "slimme-deurbellen",
  "slimme-cameras",
  "slimme-thermostaten",
  "slimme-stekkers",
  "smart-home-hubs",
  "mesh-wifi",
  "energie-monitors",
  "slimme-sloten",
];

const inputStyle = {
  padding: "0.6rem 0.8rem",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "#0b0f1a",
  color: "#f1f5f9",
  fontSize: "0.9rem",
  width: "100%",
  boxSizing: "border-box",
};

/* ── Helper: extract YouTube video ID from URL or raw ID ── */
function resolveYouTubeId(input) {
  if (!input) return null;
  const s = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  return (
    s.match(/youtube\.com\/shorts\/([^?&/]+)/)?.[1] ||
    s.match(/[?&]v=([^&]+)/)?.[1] ||
    s.match(/youtu\.be\/([^?&/]+)/)?.[1] ||
    s.match(/youtube\.com\/embed\/([^?&/]+)/)?.[1] ||
    null
  );
}

export default function ProductToevoegenPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  /* Source toggle */
  const [source, setSource] = useState("bol"); // "bol" | "coolblue"

  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [feedInfo, setFeedInfo] = useState(null);

  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    slug: "",
    brand: "",
    category: "",
    amazonUrl: "",
    coolblueUrl: "",
    youtubeUrl: "",
    features: "",
    description: "",
  });

  /* YouTube video search */
  const [ytSearching, setYtSearching] = useState(false);
  const [ytVideos, setYtVideos] = useState([]);
  const [ytError, setYtError] = useState(null);
  const [ytSetupInstructions, setYtSetupInstructions] = useState(null);
  const [ytSelectedId, setYtSelectedId] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState(null);

  /* ── Auth ── */
  function handleAuth(e) {
    e.preventDefault();
    if (password === "slimhuis2026" || password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      setAuthError("Verkeerd wachtwoord");
    }
  }

  /* ── Product zoeken (bol / coolblue) ── */
  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    setSearchError("");
    setResults([]);
    setSelected(null);
    setFeedInfo(null);

    try {
      const endpoint =
        source === "coolblue"
          ? `/api/coolblue-search?q=${encodeURIComponent(query)}`
          : `/api/bol-search?q=${encodeURIComponent(query)}`;

      const res = await fetch(endpoint);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResults(data.products || []);
      if (data.feedFile) setFeedInfo({ file: data.feedFile, total: data.total });
    } catch (err) {
      setSearchError(err.message);
    } finally {
      setSearching(false);
    }
  }

  /* ── YouTube video's zoeken ── */
  async function searchYouTube(brand, name) {
    setYtSearching(true);
    setYtVideos([]);
    setYtError(null);
    setYtSetupInstructions(null);
    setYtSelectedId(null);

    try {
      const res = await fetch(
        `/api/youtube-search?brand=${encodeURIComponent(brand)}&name=${encodeURIComponent(name)}`
      );
      const data = await res.json();

      if (res.status === 503 && data.setup) {
        setYtSetupInstructions(data.setup);
        return;
      }
      if (data.error) {
        setYtError(data.error);
        return;
      }
      setYtVideos(data.videos || []);
    } catch (err) {
      setYtError(err.message);
    } finally {
      setYtSearching(false);
    }
  }

  /* ── Product selecteren ── */
  function selectProduct(product) {
    setSelected(product);
    const nameSlug = product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 50);

    const brand = product.brand || product.name.split(" ")[0];

    const newForm = {
      slug: nameSlug,
      brand,
      category: "",
      amazonUrl: "",
      coolblueUrl: product.coolblueUrl || "",
      youtubeUrl: "",
      features: "",
      description: product.description || product.name,
    };
    setForm(newForm);
    setYtVideos([]);
    setYtSelectedId(null);
    setYtError(null);
    setYtSetupInstructions(null);

    // Auto-zoek YouTube video's
    searchYouTube(brand, product.name);

    setTimeout(() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  /* ── Opslaan ── */
  async function handleSave(e) {
    e.preventDefault();
    if (!selected || !form.slug || !form.category) return;
    setSaving(true);
    setSaveResult(null);

    // Bepaal YouTube ID: gekozen uit suggesties, of handmatig ingevuld
    const manualYtId = resolveYouTubeId(form.youtubeUrl);
    const youtubeId = ytSelectedId || manualYtId || null;

    try {
      const res = await fetch("/api/product-opslaan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": password,
        },
        body: JSON.stringify({
          slug: form.slug,
          name: selected.name,
          brand: form.brand,
          category: form.category,
          description: form.description || selected.name,
          price: selected.price,
          rating: selected.rating || null,
          ean: selected.ean || null,
          bolUrl: selected.bolUrl || null,
          amazonUrl: form.amazonUrl || null,
          coolblueUrl: form.coolblueUrl || null,
          imageUrl: selected.image,
          youtubeUrl: youtubeId, // route extraheert hier het ID uit
          features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSaveResult({ success: true, message: data.message, slug: data.slug });
      setSelected(null);
      setResults([]);
      setQuery("");
      setYtVideos([]);
      setYtSelectedId(null);
    } catch (err) {
      setSaveResult({ success: false, message: err.message });
    } finally {
      setSaving(false);
    }
  }

  /* ── Login scherm ── */
  if (!authenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0f1a" }}>
        <form onSubmit={handleAuth} style={{ background: "#141827", padding: "2rem", borderRadius: "12px", width: "320px", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h1 style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}>Admin — Product toevoegen</h1>
          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.6rem 0.8rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "#0b0f1a", color: "#fff", marginBottom: "0.75rem", boxSizing: "border-box" }}
          />
          {authError && <p style={{ color: "#f87171", fontSize: "0.85rem", marginBottom: "0.75rem" }}>{authError}</p>}
          <button type="submit" style={{ width: "100%", padding: "0.65rem", borderRadius: "8px", background: "#6366f1", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer" }}>
            Inloggen
          </button>
        </form>
      </div>
    );
  }

  /* ── Hoofd UI ── */
  const activeYtId = ytSelectedId || resolveYouTubeId(form.youtubeUrl);

  return (
    <div style={{ minHeight: "100vh", background: "#0b0f1a", padding: "2rem", color: "#f1f5f9" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "0.25rem" }}>Product toevoegen</h1>
        <p style={{ opacity: 0.6, marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          Zoek op bol.com of Coolblue → selecteer → vul aan → opgeslagen in products.js
        </p>

        {/* Databron */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
          {[
            { id: "bol", label: "bol.com" },
            { id: "coolblue", label: "Coolblue" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => { setSource(id); setResults([]); setSelected(null); setSearchError(""); setFeedInfo(null); }}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: "999px",
                border: source === id ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.12)",
                background: source === id ? "rgba(99,102,241,0.15)" : "#141827",
                color: "#f1f5f9",
                fontWeight: source === id ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Zoekbalk */}
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <input
            type="text"
            placeholder={source === "coolblue" ? "Bijv: Tapo C225, Aqara Hub M3, Homey Pro" : "Bijv: Tapo L930, Aqara rookmelder, Homey Pro"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: 1, padding: "0.7rem 1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "#141827", color: "#fff", fontSize: "1rem" }}
          />
          <button
            type="submit"
            disabled={searching}
            style={{ padding: "0.7rem 1.5rem", borderRadius: "8px", background: source === "coolblue" ? "#003087" : "#6366f1", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", opacity: searching ? 0.7 : 1, whiteSpace: "nowrap" }}
          >
            {searching ? "Zoeken..." : `Zoek op ${source === "coolblue" ? "Coolblue" : "bol.com"}`}
          </button>
        </form>

        {feedInfo && (
          <p style={{ fontSize: "0.78rem", opacity: 0.5, marginBottom: "1rem" }}>
            Datafeed: {feedInfo.file} — {feedInfo.total.toLocaleString("nl")} producten
          </p>
        )}

        {searchError && (
          <p style={{ color: "#f87171", marginBottom: "1rem" }}>❌ {searchError}</p>
        )}

        {/* Zoekresultaten */}
        {results.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "1rem", opacity: 0.7 }}>
              {results.length} resultaten — klik het juiste product
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {results.map((p, i) => (
                <button
                  key={p.coolblueUrl || p.bolId || i}
                  onClick={() => selectProduct(p)}
                  style={{
                    background: selected === p ? "rgba(99,102,241,0.15)" : "#141827",
                    border: selected === p ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "0.75rem",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#f1f5f9",
                    transition: "border-color 0.15s",
                  }}
                >
                  {p.image && (
                    <div style={{ width: "100%", aspectRatio: "1/1", background: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  )}
                  <p style={{ margin: "0 0 0.3rem", fontSize: "0.82rem", lineHeight: 1.3, fontWeight: 600 }}>
                    {p.name.slice(0, 70)}{p.name.length > 70 ? "…" : ""}
                  </p>
                  {p.brand && <p style={{ margin: "0 0 0.2rem", fontSize: "0.78rem", opacity: 0.5 }}>{p.brand}</p>}
                  {p.price && <p style={{ margin: "0 0 0.2rem", fontSize: "0.9rem", color: "#4ade80", fontWeight: 700 }}>{p.price}</p>}
                  {p.rating && (
                    <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.6 }}>
                      ⭐ {p.rating} ({p.reviewCount} reviews)
                    </p>
                  )}
                  {source === "coolblue" && p.category && (
                    <p style={{ margin: "0.2rem 0 0", fontSize: "0.72rem", opacity: 0.4 }}>{p.category}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Formulier */}
        {selected && (
          <form id="form-section" onSubmit={handleSave} style={{ background: "#141827", borderRadius: "12px", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h2 style={{ marginBottom: "1.25rem" }}>Product invullen</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Slug (URL) *</span>
                <input
                  required
                  value={form.slug}
                  onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                  placeholder="bijv: tapo-p115"
                  style={inputStyle}
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Merk</span>
                <input
                  value={form.brand}
                  onChange={(e) => setForm((f) => ({ ...f, brand: e.target.value }))}
                  placeholder="bijv: TP-Link Tapo"
                  style={inputStyle}
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Categorie *</span>
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  style={inputStyle}
                >
                  <option value="">Kies categorie...</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Amazon link (optioneel)</span>
                <input
                  value={form.amazonUrl}
                  onChange={(e) => setForm((f) => ({ ...f, amazonUrl: e.target.value }))}
                  placeholder="https://amazon.nl/dp/B08QRQQ53T"
                  style={inputStyle}
                />
                {form.amazonUrl && (() => {
                  try {
                    const u = new URL(form.amazonUrl);
                    if (!u.searchParams.has("tag")) u.searchParams.set("tag", "slimhuiswonen-21");
                    return <span style={{ fontSize: "0.75rem", color: "#4ade80", marginTop: "0.25rem" }}>✓ wordt: {u.toString()}</span>;
                  } catch {
                    return <span style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.25rem" }}>✗ ongeldige URL</span>;
                  }
                })()}
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Coolblue link (optioneel)</span>
                <input
                  value={form.coolblueUrl}
                  onChange={(e) => setForm((f) => ({ ...f, coolblueUrl: e.target.value }))}
                  placeholder="https://www.coolblue.nl/product/..."
                  style={inputStyle}
                />
                {form.coolblueUrl && <span style={{ fontSize: "0.75rem", color: "#4ade80", marginTop: "0.25rem" }}>✓ Coolblue link ingevuld</span>}
              </label>
            </div>

            <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Beschrijving</span>
              <input
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                style={inputStyle}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>Kenmerken (één per regel)</span>
              <textarea
                value={form.features}
                onChange={(e) => setForm((f) => ({ ...f, features: e.target.value }))}
                placeholder={"Wi-Fi\nGeen hub nodig\nAlexa & Google Home"}
                rows={4}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
              />
            </label>

            {/* ── YouTube sectie ── */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <h3 style={{ margin: 0, fontSize: "0.95rem" }}>
                  YouTube video
                  {ytSelectedId && <span style={{ marginLeft: "0.5rem", fontSize: "0.8rem", color: "#4ade80" }}>✓ geselecteerd</span>}
                </h3>
                <button
                  type="button"
                  onClick={() => searchYouTube(form.brand, selected.name)}
                  disabled={ytSearching}
                  style={{ padding: "0.35rem 0.9rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.12)", background: "transparent", color: "#f1f5f9", fontSize: "0.82rem", cursor: "pointer", opacity: ytSearching ? 0.6 : 1 }}
                >
                  {ytSearching ? "Zoeken..." : "Opnieuw zoeken"}
                </button>
              </div>

              {/* Setup instructies als geen API key */}
              {ytSetupInstructions && (
                <div style={{ background: "rgba(251,191,36,0.07)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", fontSize: "0.83rem" }}>
                  <p style={{ margin: "0 0 0.5rem", fontWeight: 700, color: "#fbbf24" }}>YouTube API key niet ingesteld</p>
                  <ol style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2, opacity: 0.85 }}>
                    {ytSetupInstructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {ytError && !ytSetupInstructions && (
                <p style={{ color: "#f87171", fontSize: "0.85rem", marginBottom: "0.75rem" }}>❌ {ytError}</p>
              )}

              {ytSearching && (
                <p style={{ opacity: 0.5, fontSize: "0.85rem" }}>Video&apos;s zoeken...</p>
              )}

              {/* Video suggesties */}
              {ytVideos.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1rem" }}>
                  {ytVideos.map((v) => (
                    <button
                      key={v.videoId}
                      type="button"
                      onClick={() => {
                        setYtSelectedId(ytSelectedId === v.videoId ? null : v.videoId);
                        setForm((f) => ({ ...f, youtubeUrl: "" }));
                      }}
                      style={{
                        background: ytSelectedId === v.videoId ? "rgba(99,102,241,0.18)" : "rgba(255,255,255,0.03)",
                        border: ytSelectedId === v.videoId ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px",
                        padding: "0.6rem",
                        cursor: "pointer",
                        textAlign: "left",
                        color: "#f1f5f9",
                        transition: "border-color 0.15s",
                      }}
                    >
                      {v.thumb && (
                        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "6px", overflow: "hidden", marginBottom: "0.5rem", background: "#000" }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={v.thumb} alt={v.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          {v.duration && (
                            <span style={{ position: "absolute", bottom: "4px", right: "4px", background: "rgba(0,0,0,0.75)", color: "#fff", fontSize: "0.7rem", padding: "1px 5px", borderRadius: "3px" }}>
                              {v.duration}
                            </span>
                          )}
                        </div>
                      )}
                      <p style={{ margin: "0 0 0.2rem", fontSize: "0.78rem", fontWeight: 600, lineHeight: 1.3 }}>
                        {v.title.slice(0, 60)}{v.title.length > 60 ? "…" : ""}
                      </p>
                      <p style={{ margin: 0, fontSize: "0.72rem", opacity: 0.5 }}>
                        {v.channel}
                        {v.isBrandChannel && <span style={{ marginLeft: "0.3rem", color: "#818cf8" }}>✓ merkkanaal</span>}
                      </p>
                    </button>
                  ))}
                </div>
              )}

              {ytVideos.length > 0 && !ytSelectedId && (
                <p style={{ fontSize: "0.78rem", opacity: 0.5, marginBottom: "0.75rem" }}>
                  Selecteer een video hierboven, of vul hieronder handmatig een YouTube-link in.
                </p>
              )}

              {/* Handmatig veld */}
              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>
                  Handmatig invoeren (URL of video-ID)
                  {ytSelectedId && <span style={{ marginLeft: "0.4rem", color: "#6366f1" }}>— overschrijft selectie</span>}
                </span>
                <input
                  value={form.youtubeUrl}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, youtubeUrl: e.target.value }));
                    if (e.target.value) setYtSelectedId(null);
                  }}
                  placeholder="https://youtube.com/watch?v=... of video-ID"
                  style={inputStyle}
                />
                {form.youtubeUrl && (() => {
                  const id = resolveYouTubeId(form.youtubeUrl);
                  return id ? (
                    <span style={{ fontSize: "0.75rem", color: "#4ade80", marginTop: "0.25rem" }}>
                      ✓ video-ID: {id}
                    </span>
                  ) : (
                    <span style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.25rem" }}>
                      ✗ geen geldig YouTube-adres
                    </span>
                  );
                })()}
              </label>

              {/* Preview van geselecteerde video */}
              {activeYtId && (
                <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.8rem", background: "rgba(99,102,241,0.06)", borderRadius: "8px", fontSize: "0.82rem" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${activeYtId}/default.jpg`}
                    alt="preview"
                    style={{ width: "80px", borderRadius: "4px", flexShrink: 0 }}
                  />
                  <div>
                    <p style={{ margin: "0 0 0.2rem", fontWeight: 600 }}>Wordt opgeslagen als:</p>
                    <code style={{ fontSize: "0.8rem", opacity: 0.7 }}>youtubeId: &quot;{activeYtId}&quot;</code>
                    <br />
                    <a
                      href={`https://www.youtube.com/watch?v=${activeYtId}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: "0.75rem", color: "#818cf8" }}
                    >
                      Bekijk op YouTube →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Overzicht */}
            <div style={{ background: "rgba(99,102,241,0.06)", borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", fontSize: "0.85rem" }}>
              <strong>Wordt opgeslagen:</strong>
              <ul style={{ margin: "0.5rem 0 0 1rem", lineHeight: 1.8 }}>
                <li>Naam: {selected.name}</li>
                <li>Prijs: {selected.price || "—"}</li>
                {selected.rating && <li>Sterren: {selected.rating}</li>}
                {selected.bolId && <li>Bol.com ID: {selected.bolId}</li>}
                <li>Afbeelding: {selected.image ? "wordt gedownload" : "geen"}</li>
                {form.coolblueUrl && <li>Coolblue: ✓</li>}
                {activeYtId && <li>YouTube ID: {activeYtId}</li>}
                <li>URL: /producten/{form.slug}</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                type="submit"
                disabled={saving}
                style={{ padding: "0.7rem 1.5rem", borderRadius: "8px", background: "#4ade80", color: "#0b0f1a", fontWeight: 700, border: "none", cursor: "pointer", opacity: saving ? 0.7 : 1 }}
              >
                {saving ? "Opslaan..." : "✅ Product toevoegen"}
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{ padding: "0.7rem 1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "transparent", color: "#f1f5f9", cursor: "pointer" }}
              >
                Annuleren
              </button>
            </div>
          </form>
        )}

        {/* Resultaat */}
        {saveResult && (
          <div style={{
            marginTop: "1.5rem",
            padding: "1rem 1.25rem",
            borderRadius: "8px",
            background: saveResult.success ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
            border: `1px solid ${saveResult.success ? "#4ade80" : "#f87171"}`,
          }}>
            <p style={{ margin: 0, fontWeight: 600 }}>
              {saveResult.success ? "✅" : "❌"} {saveResult.message}
            </p>
            {saveResult.success && (
              <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem", opacity: 0.7 }}>
                Bekijk op: <a href={`/producten/${saveResult.slug}`} target="_blank" rel="noreferrer" style={{ color: "#818cf8" }}>/producten/{saveResult.slug}</a>
              </p>
            )}
          </div>
        )}

        {/* Datafeed info */}
        <div style={{ marginTop: "3rem", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)", background: "#141827", fontSize: "0.82rem", opacity: 0.6 }}>
          <strong>Datafeed verversen</strong>
          <p style={{ margin: "0.4rem 0 0" }}>
            Download een nieuwe Coolblue datafeed en sla op als <code>data/feeds/coolblue.csv.gz</code> (vervangt het huidige bestand).
          </p>
        </div>
      </div>
    </div>
  );
}
