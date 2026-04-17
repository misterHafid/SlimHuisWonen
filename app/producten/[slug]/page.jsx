import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/data/products";
import { getBolUrl, getCoolblueUrl } from "@/lib/bol-api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeFacade from "@/components/YouTubeFacade";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product niet gevonden | SlimHuisWonen",
    };
  }

  const title = `${product.name} – ${product.brand} | SlimHuisWonen`;
  const description =
    product.description ||
    `Bekijk ${product.name} van ${product.brand} op SlimHuisWonen.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/producten/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description,
      url: `https://slimhuiswonen.nl/producten/${product.slug}`,
      ...(product.image && {
        images: [{ url: `https://slimhuiswonen.nl${product.image}` }],
      }),
    },
  };
}

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({
    slug: p.slug,
  }));
}

/* ---------- Video helpers ---------- */
function extractVideoId(url) {
  if (!url || typeof url !== "string") return null;
  return (
    url.match(/youtube\.com\/shorts\/([^?/]+)/)?.[1] ||
    url.match(/[?&]v=([^&]+)/)?.[1] ||
    url.match(/youtu\.be\/([^?/]+)/)?.[1] ||
    url.match(/youtube\.com\/embed\/([^?/]+)/)?.[1] ||
    null
  );
}

/* ---------- Helpers ---------- */
const getAmazonUrl = (p) =>
  p?.affiliateUrl ||
  p?.amazonUrl ||
  p?.amazonLink ||
  p?.url ||
  null;

// Resolve video ID: youtubeId field (new) or extract from youtubeUrl (legacy)
const getVideoId = (p) =>
  p?.youtubeId ||
  extractVideoId(p?.youtubeUrl) ||
  extractVideoId(p?.videoUrl) ||
  null;

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const {
    name,
    brand,
    description,
    features = [],
    priceHint,
    priceLastUpdated,
    pros = [],
    cons = [],
    forWho = [],
    personalNote,
    compatibility = {},
  } = product;

  const amazonUrl   = getAmazonUrl(product);
  const bolUrl      = getBolUrl(product);
  const coolblueUrl = getCoolblueUrl(product);
  const videoId     = getVideoId(product);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(product.image && {
      image: `https://slimhuiswonen.nl${product.image}`,
    }),
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        bestRating: 5,
        reviewCount: 1,
      },
    }),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      ...(amazonUrl && { url: amazonUrl }),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>{name}</h1>

            <p className="product-brand">{brand}</p>
            <p className="product-desc">{description}</p>

            {/* ✅ Video */}
            {videoId && (
              <section style={{ marginTop: "2rem" }}>
                <h2>Video: zo werkt dit product</h2>
                <YouTubeFacade videoId={videoId} title={`Video van ${name}`} />
              </section>
            )}

            {/* ✅ Voor wie */}
            {forWho.length > 0 && (
              <>
                <h2 style={{ marginTop: "2rem" }}>Voor wie is dit?</h2>
                <ul className="product-bullets">
                  {forWho.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* ✅ Features */}
            {features.length > 0 && (
              <>
                <h2 style={{ marginTop: "2rem" }}>Belangrijkste kenmerken</h2>
                <ul className="product-bullets">
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {/* ✅ Pros / Cons */}
            {(pros.length > 0 || cons.length > 0) && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
              >
                {pros.length > 0 && (
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", color: "#4ade80" }}>
                      Voordelen
                    </h3>
                    <ul className="product-bullets">
                      {pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cons.length > 0 && (
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", color: "#f87171" }}>
                      Nadelen
                    </h3>
                    <ul className="product-bullets">
                      {cons.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* ✅ Persoonlijk advies */}
            {personalNote && (
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem 1.25rem",
                  borderLeft: "3px solid #6366f1",
                  background: "rgba(99,102,241,0.07)",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <strong>Mijn advies:</strong>
                <p style={{ margin: "0.4rem 0 0 0" }}>{personalNote}</p>
              </div>
            )}

            {priceHint && (
              <p className="price-hint" style={{ marginTop: "1.5rem" }}>
                <strong>Prijsindicatie:</strong> {priceHint}
                {priceLastUpdated && (
                  <span style={{ fontSize: "0.85rem", opacity: 0.6, marginLeft: "0.5rem" }}>
                    (gecheckt {priceLastUpdated})
                  </span>
                )}
              </p>
            )}

            {/* ✅ Knoppen: bol.com + Coolblue + Amazon */}
            {(bolUrl || coolblueUrl || amazonUrl) && (
              <div style={{ marginTop: "1.5rem" }}>
                <div className="product-actions" style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  {bolUrl && (
                    <a
                      href={bolUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-bol product-btn"
                      style={{ width: "auto" }}
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
                      style={{ width: "auto" }}
                    >
                      Bekijk op Coolblue
                    </a>
                  )}
                  {amazonUrl && (
                    <a
                      href={amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-amazon product-btn"
                      style={{ width: "auto" }}
                    >
                      Bekijk op Amazon
                    </a>
                  )}
                </div>
                <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", opacity: 0.6 }}>
                  * Affiliate links — jij betaalt niets extra, ik ontvang een kleine commissie.
                </p>
              </div>
            )}

            {compatibility && Object.keys(compatibility).length > 0 && (
              <>
                <h2 style={{ marginTop: "2rem" }}>Compatibiliteit</h2>
                <ul>
                  {Object.entries(compatibility).map(([platform, value]) => (
                    <li key={platform}>
                      {platform}: {value}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
