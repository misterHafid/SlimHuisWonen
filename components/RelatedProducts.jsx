import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import { getBolUrl } from "@/lib/bol-api";

export default function RelatedProducts({ slugs = [], title = "Producten die je nodig hebt" }) {
  const products = slugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  if (products.length === 0) return null;

  return (
    <section style={{ marginTop: "2.5rem" }}>
      <hr />
      <h2 style={{ marginTop: "1.5rem" }}>{title}</h2>
      <p className="muted" style={{ marginBottom: "1rem" }}>
        Beschikbaar via Amazon en bol.com — jij betaalt niets extra via onze links.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {products.map((p) => {
          const bolUrl = getBolUrl(p);
          return (
            <article
              key={p.slug}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                padding: "1rem",
                background: "rgba(255,255,255,0.02)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {p.image && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    background: "#0b0f1a",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="220px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}

              <div style={{ fontSize: "0.8rem", opacity: 0.6 }}>{p.brand}</div>
              <h3 style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.3 }}>{p.name}</h3>

              {p.priceHint && (
                <p style={{ margin: 0, fontSize: "0.88rem", opacity: 0.7 }}>{p.priceHint}</p>
              )}

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "auto" }}>
                {p.affiliateUrl && (
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-block",
                      padding: "0.45rem 0.85rem",
                      borderRadius: "8px",
                      background: "#f59e0b",
                      color: "#1a1a1a",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      textDecoration: "none",
                    }}
                  >
                    Amazon →
                  </a>
                )}
                {bolUrl && (
                  <a
                    href={bolUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-block",
                      padding: "0.45rem 0.85rem",
                      borderRadius: "8px",
                      background: "#0000a4",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      textDecoration: "none",
                    }}
                  >
                    bol.com →
                  </a>
                )}
                <Link
                  href={`/producten/${p.slug}`}
                  style={{
                    display: "inline-block",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    opacity: 0.8,
                  }}
                >
                  Meer info
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
