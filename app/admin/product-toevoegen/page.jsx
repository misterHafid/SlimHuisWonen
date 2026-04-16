"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function ProductToevoegenPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [searchError, setSearchError] = useState("");

  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    slug: "",
    brand: "",
    category: "",
    amazonUrl: "",
    youtubeUrl: "",
    features: "",
    description: "",
  });

  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState(null);

  /* ── Auth ── */
  function handleAuth(e) {
    e.preventDefault();
    if (password === "slimhuis2026" || password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      // Valideer via cookie-check — voor nu: simpele client-side check
      setAuthError("Verkeerd wachtwoord");
    }
  }

  /* ── Zoeken ── */
  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    setSearchError("");
    setResults([]);
    setSelected(null);

    try {
      const res = await fetch(`/api/bol-search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResults(data.products || []);
    } catch (err) {
      setSearchError(err.message);
    } finally {
      setSearching(false);
    }
  }

  /* ── Product selecteren ── */
  function selectProduct(product) {
    setSelected(product);
    // Auto-vul formulier
    const nameSlug = product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 50);
    const brand = product.name.split(" ")[0];
    setForm({
      slug: nameSlug,
      brand,
      category: "",
      amazonUrl: "",
      youtubeUrl: "",
      features: "",
      description: product.name,
    });
    // Scroll naar formulier
    setTimeout(() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  /* ── Opslaan ── */
  async function handleSave(e) {
    e.preventDefault();
    if (!selected || !form.slug || !form.category) return;
    setSaving(true);
    setSaveResult(null);

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
          rating: selected.rating,
          ean: selected.ean || null,
          bolUrl: selected.bolUrl,
          amazonUrl: form.amazonUrl || null,
          imageUrl: selected.image,
          youtubeUrl: form.youtubeUrl || null,
          features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSaveResult({ success: true, message: data.message, slug: data.slug });
      setSelected(null);
      setResults([]);
      setQuery("");
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
  return (
    <div style={{ minHeight: "100vh", background: "#0b0f1a", padding: "2rem", color: "#f1f5f9" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "0.25rem" }}>Product toevoegen</h1>
        <p style={{ opacity: 0.6, marginBottom: "2rem", fontSize: "0.9rem" }}>
          Zoek op bol.com → selecteer → vul aan → opgeslagen in products.js
        </p>

        {/* Zoekbalk */}
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <input
            type="text"
            placeholder="Bijv: Tapo L930, Aqara rookmelder, Homey Pro"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: 1, padding: "0.7rem 1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "#141827", color: "#fff", fontSize: "1rem" }}
          />
          <button
            type="submit"
            disabled={searching}
            style={{ padding: "0.7rem 1.5rem", borderRadius: "8px", background: "#6366f1", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", opacity: searching ? 0.7 : 1 }}
          >
            {searching ? "Zoeken..." : "Zoek op bol.com"}
          </button>
        </form>

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
              {results.map((p) => (
                <button
                  key={p.bolId}
                  onClick={() => selectProduct(p)}
                  style={{
                    background: selected?.bolId === p.bolId ? "rgba(99,102,241,0.15)" : "#141827",
                    border: selected?.bolId === p.bolId ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "0.75rem",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#f1f5f9",
                    transition: "border-color 0.15s",
                  }}
                >
                  {p.image && (
                    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", background: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "0.5rem" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  )}
                  <p style={{ margin: "0 0 0.3rem", fontSize: "0.82rem", lineHeight: 1.3, fontWeight: 600 }}>
                    {p.name.slice(0, 70)}{p.name.length > 70 ? "…" : ""}
                  </p>
                  {p.price && <p style={{ margin: "0 0 0.2rem", fontSize: "0.9rem", color: "#4ade80", fontWeight: 700 }}>{p.price}</p>}
                  {p.rating && (
                    <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.6 }}>
                      ⭐ {p.rating} ({p.reviewCount} reviews)
                    </p>
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
                    return (
                      <span style={{ fontSize: "0.75rem", color: "#4ade80", marginTop: "0.25rem" }}>
                        ✓ wordt opgeslagen als: {u.toString()}
                      </span>
                    );
                  } catch {
                    return (
                      <span style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.25rem" }}>
                        ✗ ongeldige URL
                      </span>
                    );
                  }
                })()}
              </label>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "0.82rem", opacity: 0.6 }}>YouTube URL (optioneel)</span>
                <input
                  value={form.youtubeUrl}
                  onChange={(e) => setForm((f) => ({ ...f, youtubeUrl: e.target.value }))}
                  placeholder="https://youtube.com/watch?v=... of youtu.be/..."
                  style={inputStyle}
                />
                {form.youtubeUrl && (() => {
                  const url = form.youtubeUrl;
                  const id = (
                    url.match(/youtube\.com\/shorts\/([^?&/]+)/)?.[1] ||
                    url.match(/[?&]v=([^&]+)/)?.[1] ||
                    url.match(/youtu\.be\/([^?&/]+)/)?.[1] ||
                    url.match(/youtube\.com\/embed\/([^?&/]+)/)?.[1]
                  );
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

            {/* Overzicht */}
            <div style={{ background: "rgba(99,102,241,0.06)", borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", fontSize: "0.85rem" }}>
              <strong>Wordt opgeslagen:</strong>
              <ul style={{ margin: "0.5rem 0 0 1rem", lineHeight: 1.8 }}>
                <li>Naam: {selected.name}</li>
                <li>Prijs: {selected.price || "—"}</li>
                <li>Sterren: {selected.rating || "—"}</li>
                <li>Bol.com ID: {selected.bolId}</li>
                <li>Afbeelding: {selected.image ? "wordt gedownload" : "geen"}</li>
                <li>YouTube: {form.youtubeUrl ? "✓ ingevuld" : "—"}</li>
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
      </div>
    </div>
  );
}

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
