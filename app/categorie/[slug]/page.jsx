import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import AmazonSearchCta from "@/components/AmazonSearchCta";
import { getBolUrl, getCoolblueUrl } from "@/lib/bol-api";

export const dynamic = "force-dynamic";

/* ---------- Helpers ---------- */
const CATEGORY_ALIASES = {
  verlichting: "slimme-verlichting",
  beveiliging: "sensoren",
  cameras: "slimme-cameras",
  energie: "energie-monitors",
  hubs: "smart-home-hubs",
  sloten: "slimme-sloten",
  wifi: "mesh-wifi",
};

function normalizeCategorySlug(slug) {
  return CATEGORY_ALIASES[slug] ?? slug;
}

function getCategory(slug) {
  const normalized = normalizeCategorySlug(slug);
  return categories.find((c) => c.slug === normalized);
}

/* ---------- Amazon zoekterm mapping ---------- */
const AMAZON_SEARCH_TERMS = {
  "slimme-verlichting": "slimme verlichting",
  "slimme-stekkers": "slimme stekker wifi",
  "slimme-deurbellen": "slimme deurbel met camera",
  "slimme-cameras": "slimme beveiligingscamera wifi",
  "sensoren": "bewegingssensor zigbee",
  "slimme-thermostaten": "slimme thermostaat",
  "slimme-sloten": "slim deurslot",
  "smart-home-hubs": "smart home hub homey",
  "mesh-wifi": "mesh wifi systeem",
  "energie-monitors": "slimme energiemeter p1",
};

function getAmazonSearchTerm(slug) {
  return AMAZON_SEARCH_TERMS[slug] ?? slug.replace("-", " ");
}

/* ---------- Metadata ---------- */
export function generateMetadata({ params }) {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: "Categorie niet gevonden | SlimHuisWonen",
      description: "Deze categorie bestaat niet.",
    };
  }

  const url = `https://slimhuiswonen.nl/categorie/${category.slug}`;

  return {
    title: `${category.name} | SlimHuisWonen`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${category.name} | SlimHuisWonen`,
      description: category.description,
      url,
      type: "website",
    },
  };
}

/* ---------- Page ---------- */
export default function CategoryPage({ params }) {
  const { slug } = params;

  const normalizedSlug = normalizeCategorySlug(slug);
  const category = getCategory(normalizedSlug);

  if (!category) {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <h1>Categorie niet gevonden</h1>
            <p>Deze categorie bestaat niet.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const products = getProductsByCategory(normalizedSlug).sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );

  const topThree = products.slice(0, 3);
  const rest = products.slice(3);

  const amazonSearchTerm = getAmazonSearchTerm(normalizedSlug);

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          {/* Banner */}
          {category.image && (
            <div className="banner-center">
              <div
                className="categorie-banner category-hero-banner"
                style={{ "--category-bg": `url(${category.image})` }}
              >
                <div className="category-darken" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="banner-img"
                />
              </div>
            </div>
          )}

          <h1>{category.name}</h1>
          <p className="section-intro">{category.description}</p>

          {products.length === 0 && (
            <p>Er zijn nog geen producten in deze categorie.</p>
          )}

          {topThree.length > 0 && (
            <section className="top-products">
              <h2>Beste keuzes</h2>

              <div className="product-grid">
                {topThree.map((p, index) => {
                  const bolUrl = getBolUrl(p);
                  const coolblueUrl = getCoolblueUrl(p);
                  return (
                    <article key={p.slug} className="product-card highlight" style={{ position: "relative" }}>
                      {/* Stretched link — hele kaart klikbaar */}
                      <Link
                        href={`/producten/${p.slug}`}
                        aria-label={p.name}
                        style={{ position: "absolute", inset: 0, zIndex: 0 }}
                        tabIndex={-1}
                      />

                      {index === 0 && (
                        <div className="best-choice">Beste keuze</div>
                      )}

                      {p.image && (
                        <div style={{ position: "relative", width: "100%", height: "160px", background: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "0.75rem" }}>
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            style={{ objectFit: "contain", padding: "8px" }}
                            sizes="(max-width: 640px) 100vw, 360px"
                          />
                        </div>
                      )}

                      <div className="product-tag">{p.brand}</div>
                      <h3>{p.name}</h3>
                      <p className="product-desc">{p.description}</p>

                      {p.features?.length > 0 && (
                        <ul className="product-bullets">
                          {p.features.slice(0, 3).map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      )}

                      {p.priceHint && (
                        <p style={{ fontSize: "0.9rem", opacity: 0.7, margin: "0.25rem 0 0.5rem" }}>
                          {p.priceHint}
                        </p>
                      )}

                      <div className="product-actions" style={{ position: "relative", zIndex: 1 }}>
                        {bolUrl && (
                          <a
                            href={bolUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-bol product-btn"
                          >
                            Bekijk op bol.com
                          </a>
                        )}

                        {coolblueUrl && (
                          <a
                            href={coolblueUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-coolblue product-btn"
                          >
                            Bekijk op Coolblue
                          </a>
                        )}

                        {p.affiliateUrl && (
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-amazon product-btn"
                          >
                            Bekijk op Amazon
                          </a>
                        )}

                        <Link
                          href={`/producten/${p.slug}`}
                          className="product-details-link"
                          style={{ position: "relative", zIndex: 1 }}
                        >
                          Meer info
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {rest.length > 0 && (
            <>
              <h2>Meer producten</h2>

              <div className="product-grid">
                {rest.map((p) => {
                  const bolUrl = getBolUrl(p);
                  const coolblueUrl = getCoolblueUrl(p);
                  return (
                    <article key={p.slug} className="product-card" style={{ position: "relative" }}>
                      {/* Stretched link — hele kaart klikbaar */}
                      <Link
                        href={`/producten/${p.slug}`}
                        aria-label={p.name}
                        style={{ position: "absolute", inset: 0, zIndex: 0 }}
                        tabIndex={-1}
                      />

                      {p.image && (
                        <div style={{ position: "relative", width: "100%", height: "160px", background: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "0.75rem" }}>
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            style={{ objectFit: "contain", padding: "8px" }}
                            sizes="(max-width: 640px) 100vw, 360px"
                          />
                        </div>
                      )}

                      <div className="product-tag">{p.brand}</div>
                      <h3>{p.name}</h3>
                      <p className="product-desc">{p.description}</p>

                      {p.features?.length > 0 && (
                        <ul className="product-bullets">
                          {p.features.slice(0, 3).map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      )}

                      {p.priceHint && (
                        <p style={{ fontSize: "0.9rem", opacity: 0.7, margin: "0.25rem 0 0.5rem" }}>
                          {p.priceHint}
                        </p>
                      )}

                      <div className="product-actions" style={{ position: "relative", zIndex: 1 }}>
                        {bolUrl && (
                          <a
                            href={bolUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-bol product-btn"
                          >
                            Bekijk op bol.com
                          </a>
                        )}

                        {coolblueUrl && (
                          <a
                            href={coolblueUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-coolblue product-btn"
                          >
                            Bekijk op Coolblue
                          </a>
                        )}

                        {p.affiliateUrl && (
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-amazon product-btn"
                          >
                            Bekijk op Amazon
                          </a>
                        )}

                        <Link
                          href={`/producten/${p.slug}`}
                          className="product-details-link"
                          style={{ position: "relative", zIndex: 1 }}
                        >
                          Meer info
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {/* ✅ Subtiele Amazon zoek CTA */}
          {products.length > 0 && (
            <AmazonSearchCta searchTerm={amazonSearchTerm} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}