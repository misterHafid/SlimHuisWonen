import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/data/products";
import { getBolUrl } from "@/lib/bol-api";
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
function toYouTubeEmbedUrl(url) {
  if (!url || typeof url !== "string") return null;

  // Shorts
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?]+)/);
  if (shortsMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  // Watch
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch?.[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  // youtu.be
  const shortUrlMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortUrlMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortUrlMatch[1]}`;
  }

  // already embed
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  return null;
}

/* ---------- Helpers ---------- */
const getAmazonUrl = (p) =>
  p?.affiliateUrl ||
  p?.amazonUrl ||
  p?.amazonLink ||
  p?.url ||
  null;

const getVideoUrl = (p) =>
  p?.youtubeUrl ||
  p?.videoUrl ||
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

  const amazonUrl = getAmazonUrl(product);
  const bolUrl    = getBolUrl(product);
  const rawVideoUrl = getVideoUrl(product);
  const youtubeEmbedUrl = toYouTubeEmbedUrl(rawVideoUrl);

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
            {rawVideoUrl && (
              <section style={{ marginTop: "2rem" }}>
                <h2>Video: zo werkt dit product</h2>

                {youtubeEmbedUrl ? (
                  <YouTubeFacade
                    embedUrl={youtubeEmbedUrl}
                    title={`Video van ${name}`}
                  />
                ) : (
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={rawVideoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Bekijk video →
                    </a>
                  </div>
                )}
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

            {/* ✅ Knoppen: Amazon + bol.com */}
            {(amazonUrl || bolUrl) && (
              <div style={{ marginTop: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {amazonUrl && (
                    <a
                      href={amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.6rem 1.1rem",
                        borderRadius: "8px",
                        background: "#f59e0b",
                        color: "#1a1a1a",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      Bekijk op Amazon →
                    </a>
                  )}
                  {bolUrl && (
                    <a
                      href={bolUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.6rem 1.1rem",
                        borderRadius: "8px",
                        background: "#0000a4",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      Bekijk op bol.com →
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
