import Link from "next/link";
import Image from "next/image";

export default function BuyGuideProductCard({
  title,
  description,
  image,
  href,
  badges = [],
  amazonUrl,
  bolUrl,
  coolblueUrl,
  priceHint,
}) {
  return (
    <article
      className="buyGuideCard"
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          background: "#0b0f1a",
          aspectRatio: "1 / 1",
          position: "relative",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="120px"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontSize: "0.8rem",
                padding: "0.25rem 0.5rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                opacity: 0.9,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <h3 style={{ margin: 0, marginBottom: "0.35rem" }}>{title}</h3>

        <p className="muted" style={{ margin: 0, marginBottom: "0.75rem" }}>
          {description}
        </p>

        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center" }}>
          {bolUrl && (
            <a
              href={bolUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-bol product-btn"
              style={{ fontSize: "0.88rem", padding: "0.55rem 1rem", whiteSpace: "nowrap" }}
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
              style={{ fontSize: "0.88rem", padding: "0.55rem 1rem", whiteSpace: "nowrap" }}
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
              style={{ fontSize: "0.88rem", padding: "0.55rem 1rem", whiteSpace: "nowrap" }}
            >
              Bekijk op Amazon
            </a>
          )}

          <Link
            href={href}
            className="product-details-link"
            style={{ fontSize: "0.88rem", padding: "0.55rem 0.9rem" }}
          >
            Meer info
          </Link>
        </div>
      </div>
    </article>
  );
}
