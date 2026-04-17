import Header from "@/components/Header";
import TopKoopgidsen from "@/components/TopKoopgidsen";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug } from "@/data/products";
import { getBolUrl, getCoolblueUrl } from "@/lib/bol-api";

const POPULAIRE_SLUGS = [
  "philips-hue-white-ambiance-starterkit",
  "tapo-l530e",
  "aqara-deur-raamsensor-p2",
  "tapo-c200",
  "ring-video-deurbel",
  "tapo-p115",
];

function PopulaireProducten() {
  const producten = POPULAIRE_SLUGS.map((slug) => getProductBySlug(slug)).filter(Boolean);

  return (
    <section className="section">
      <div className="container">
        <h2>Populaire producten</h2>
        <p className="section-intro">
          Bestel via Amazon of bol.com — meest bekeken producten op SlimHuisWonen.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {producten.map((p) => {
            const bolUrl = getBolUrl(p);
            const coolblueUrl = getCoolblueUrl(p);
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
                  position: "relative",
                }}
              >
                {/* Stretched link — hele kaart klikbaar */}
                <Link
                  href={`/producten/${p.slug}`}
                  aria-label={p.name}
                  style={{ position: "absolute", inset: 0, zIndex: 0 }}
                  tabIndex={-1}
                />

                {p.image && (
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1 / 1",
                      background: "#fff",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 200px"
                      style={{ objectFit: "contain", padding: "6px" }}
                    />
                  </div>
                )}

                <div style={{ fontSize: "0.75rem", opacity: 0.55 }}>{p.brand}</div>
                <h3 style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.3 }}>{p.name}</h3>

                {p.priceHint && (
                  <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>{p.priceHint}</p>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "auto", position: "relative", zIndex: 1 }}>
                  {bolUrl && (
                    <a
                      href={bolUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-bol product-btn"
                      style={{ fontSize: "0.8rem", padding: "0.45rem 0.75rem" }}
                    >
                      Bekijk op bol.com
                    </a>
                  )}

                  {p.affiliateUrl && (
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-amazon product-btn"
                      style={{ fontSize: "0.8rem", padding: "0.45rem 0.75rem" }}
                    >
                      Bekijk op Amazon
                    </a>
                  )}

                  {coolblueUrl && (
                    <a
                      href={coolblueUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-coolblue product-btn"
                      style={{ fontSize: "0.8rem", padding: "0.45rem 0.75rem" }}
                    >
                      Bekijk op Coolblue
                    </a>
                  )}

                  <Link
                    href={`/producten/${p.slug}`}
                    className="product-details-link"
                    style={{ fontSize: "0.8rem", position: "relative", zIndex: 1 }}
                  >
                    Meer info
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="muted small" style={{ marginTop: "1rem" }}>
          * Affiliate links — jij betaalt niets extra.{" "}
          <Link href="/disclaimer">Meer info</Link>
        </p>
      </div>
    </section>
  );
}

export async function generateMetadata() {
  return {
    title: "SlimHuisWonen.nl – Slim huis starten zonder gedoe",
    description:
      "Slim huis beginnen? Ontdek de beste smart home producten, koopgidsen, tips, blogs en how-to handleidingen voor slimme verlichting, sensoren, camera’s, hubs en automatiseringen.",
    alternates: {
      canonical: "https://slimhuiswonen.nl",
    },
    openGraph: {
      title: "SlimHuisWonen.nl – Slim huis starten zonder gedoe",
      description:
        "De beste smart home producten, tips en automatiseringen op één plek.",
      url: "https://slimhuiswonen.nl",
      images: [
        {
          url: "https://slimhuiswonen.nl/images/blog/blog-header.png",
        },
      ],
    },
  };
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SlimHuisWonen",
  url: "https://slimhuiswonen.nl",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://slimhuiswonen.nl/zoeken?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SlimHuisWonen",
  url: "https://slimhuiswonen.nl",
  logo: "https://slimhuiswonen.nl/images/logo.png",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="hero-banner">
          <div className="hero-banner-overlay" />

          <div className="hero-banner-content">
            <div className="container">
              <div className="hero-banner-inner">
                <div className="hero-banner-left">
                  <h1>Maak je huis slim — zonder gedoe</h1>

                  <p>
                    Slim huis beginnen? Ontdek de beste smart home producten,
                    praktische tips, koopgidsen en automatiseringen voor slimme
                    verlichting, sensoren, camera’s, hubs en meer.
                  </p>

                  <div className="hero-banner-actions">
                    <Link
                      href="/aanraders"
                      className="btn hero-btn hero-primary"
                    >
                      Bekijk koopgidsen →
                    </Link>

                    <Link
                      href="/blog"
                      className="btn hero-btn hero-secondary"
                    >
                      Lees uitleg & vergelijkingen
                    </Link>
                  </div>

                  <a href="#koopgidsen" className="scroll-indicator">
                    Ontdek meer <span className="scroll-arrow">↓</span>
                  </a>
                </div>

                <div className="hero-banner-right">
                  <div className="hero-quote">
                    <p className="hero-quote__heading">
                      Waar begin je met een slim huis?
                    </p>
                    <p className="hero-quote__sub">
                      Volg mijn koopgidsen en tips — speciaal voor mensen die
                      gewoon willen dat het werkt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hero-spacer" />

        {/* ================= PERSOONLIJK BLOK ================= */}
        <section className="section">
          <div className="container">
            <div className="about-founder__grid">
              <div className="about-founder__image-wrap">
                <img
                  src="/images/hafid-laptop.jpg"
                  alt="Hafid van SlimHuisWonen"
                  className="about-founder__image"
                />
              </div>

              <div className="about-founder__content">
                <span className="about-founder__eyebrow">
                  Over SlimHuisWonen
                </span>
                <h2>Waarom ik SlimHuisWonen ben gestart</h2>

                <p>
                  Zo is het bij mij ook begonnen: met één slimme lamp. Daarna
                  groeide het snel door naar een compleet smart home met slimme
                  verlichting, sensoren, automatiseringen en een smart home hub.
                </p>

                <p>
                  Toen ik zelf begon, merkte ik hoe onduidelijk smart home soms
                  kan zijn. Welke producten werken goed samen? Heb je een hub
                  nodig? Kies je voor wifi, Zigbee of Matter?
                </p>

                <p>
                  Daarom ben ik SlimHuisWonen.nl gestart. Op deze website deel
                  ik mijn ervaringen, tips en aanbevelingen zodat jij makkelijker
                  kunt starten met jouw eigen slimme huis.
                </p>

                <div className="about-founder__actions">
                  <Link href="/aanraders" className="about-founder__button">
                    Bekijk mijn aanraders
                  </Link>

                  <Link href="/tips" className="about-founder__link">
                    Lees praktische tips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SNEL NAAR POPULAIRE ONDERWERPEN ================= */}
        <section className="section">
          <div className="container">
            <h2>Waar wil je mee beginnen?</h2>

            <p className="section-intro">
              Kies direct het onderwerp waar jij nu het meeste aan hebt:
              verlichting, sensoren, beveiliging, hubs of praktische uitleg.
            </p>

            <div className="grid-3">
              <Link href="/aanraders/beste-slimme-verlichting" className="card">
                <h3>Beste slimme verlichting</h3>
                <p>
                  Vergelijk Philips Hue, Innr, Tapo en Govee en ontdek welke
                  slimme verlichting het beste past bij jouw huis.
                </p>
                <span>Bekijk koopgids →</span>
              </Link>

              <Link href="/aanraders/beste-slimme-sensoren" className="card">
                <h3>Beste slimme sensoren</h3>
                <p>
                  Ontdek welke slimme sensoren nuttig zijn voor automatisering,
                  veiligheid en energiebesparing.
                </p>
                <span>Bekijk koopgids →</span>
              </Link>

              <Link href="/aanraders/beste-smart-home-hub" className="card">
                <h3>Beste smart home hub</h3>
                <p>
                  Twijfel je tussen Homey, Home Assistant of SmartThings? Bekijk
                  welke smart home hub bij jou past.
                </p>
                <span>Bekijk koopgids →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= KENNISCLUSTERS ================= */}
        <section className="section">
          <div className="container">
            <h2>Onze kennisclusters</h2>

            <p className="section-intro">
              Ontdek complete kennisgebieden binnen smart home. Hier vind je
              handleidingen, tips, uitleg en koopadvies per onderwerp.
            </p>

            <div className="grid-3">
              <Link href="/topic/smart-home-basis" className="card">
                <h3>Smart Home Basis</h3>
                <p>
                  Beginnen met een smart home? Leer hoe je slim start en welke
                  producten je echt nodig hebt.
                </p>
                <span>Bekijk kenniscluster →</span>
              </Link>

              <Link href="/topic/wifi-netwerk" className="card">
                <h3>Wifi & Netwerk</h3>
                <p>
                  Verbeter je wifi en zorg voor een stabiel netwerk voor slimme
                  lampen, camera’s, sensoren en hubs.
                </p>
                <span>Bekijk kenniscluster →</span>
              </Link>

              <Link href="/topic/beveiliging" className="card">
                <h3>Beveiliging</h3>
                <p>
                  Houd je huis veiliger met slimme camera’s, deurbellen,
                  meldingen en slimme sensoren.
                </p>
                <span>Bekijk kenniscluster →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= POPULAIRE UITLEG ================= */}
        <section className="section">
          <div className="container">
            <h2>Populaire uitleg & vergelijkingen</h2>

            <p className="section-intro">
              Eerst begrijpen hoe smart home werkt? Begin met deze populaire
              artikelen over protocollen, hubs en slimme keuzes.
            </p>

            <div className="grid-3">
              <Link href="/blog/wat-is-zigbee" className="card">
                <h3>Wat is Zigbee?</h3>
                <p>
                  Ontdek wat Zigbee is, waarom het populair is en wanneer het
                  slimmer is dan wifi.
                </p>
                <span>Lees artikel →</span>
              </Link>

              <Link href="/blog/wat-is-matter" className="card">
                <h3>Wat is Matter?</h3>
                <p>
                  Lees hoe Matter werkt en waarom deze nieuwe standaard
                  belangrijk is voor de toekomst van smart home.
                </p>
                <span>Lees artikel →</span>
              </Link>

              <Link
                href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi"
                className="card"
              >
                <h3>Zigbee vs Z-Wave vs Matter vs Wi-Fi</h3>
                <p>
                  Vergelijk de belangrijkste smart home protocollen en ontdek
                  wat het beste past bij jouw situatie.
                </p>
                <span>Lees vergelijking →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= KOOPGIDSEN ================= */}
        <span id="koopgidsen" />
        <TopKoopgidsen />

        {/* ================= POPULAIRE PRODUCTEN ================= */}
        <PopulaireProducten />

        {/* ================= CATEGORIEËN ================= */}
        <Categories />

        {/* ================= PROBLEEMGERICHTE INGANGEN ================= */}
        <section className="section">
          <div className="container">
            <h2>Smart home per situatie</h2>

            <p className="section-intro">
              Niet iedereen zoekt hetzelfde product. Soms zoek je vooral een
              oplossing voor een situatie thuis. Begin dan hier.
            </p>

            <div className="grid-3">
              <Link
                href="/aanraders/beste-slimme-producten-voor-kinderen"
                className="card"
              >
                <h3>Smart home voor kinderen</h3>
                <p>
                  Nachtverlichting, sensoren, babycamera’s en slimme routines
                  voor meer veiligheid en rust in huis.
                </p>
                <span>Bekijk oplossingen →</span>
              </Link>

              <Link
                href="/aanraders/beste-slimme-producten-voor-huisdieren"
                className="card"
              >
                <h3>Smart home voor huisdieren</h3>
                <p>
                  Toezicht, meldingen en automatiseringen om je hond, kat of
                  aquarium beter te monitoren.
                </p>
                <span>Bekijk oplossingen →</span>
              </Link>

              <Link href="/aanraders/beste-slimme-camera" className="card">
                <h3>Huis beveiligen</h3>
                <p>
                  Bekijk slimme camera’s, deurbellen en sensoren voor meer
                  veiligheid en controle rondom je woning.
                </p>
                <span>Bekijk beveiliging →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= TIPS ================= */}
        <section className="section">
          <div className="container">
            <Link href="/tips" className="banner-center tips-banner-link">
              <div className="categorie-banner tips-banner">
                <img
                  src="/images/banner_tips_uitleg.png"
                  alt="Tips en uitleg voor je smart home"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>Tips & uitleg</h2>

            <p className="section-intro">
              Praktische uitleg over slimme verlichting, sensoren, hubs,
              automatiseringen en netwerken. Begrijp hoe je smart home werkt en
              voorkom miskopen.
            </p>

            <Link href="/tips" className="btn btn-primary">
              Bekijk alle tips →
            </Link>
          </div>
        </section>

        {/* ================= HOW TO ================= */}
        <section className="section">
          <div className="container">
            <Link href="/how-to" className="banner-center howto-banner-link">
              <div className="categorie-banner howto-banner">
                <img
                  src="/images/banner_how-to.png"
                  alt="How To Smart Home"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>How To Smart Home</h2>

            <p className="section-intro">
              Stap-voor-stap handleidingen om je smart home goed in te stellen —
              zonder technisch gedoe en met duidelijke uitleg.
            </p>

            <Link href="/how-to" className="btn btn-primary">
              Bekijk alle how-to handleidingen →
            </Link>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="section">
          <div className="container">
            <Link href="/blog" className="banner-center blog-banner-link">
              <div className="categorie-banner blog-banner">
                <img
                  src="/images/blog/blog-header.png"
                  alt="SlimHuisWonen blog"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>Blog</h2>

            <p className="section-intro">
              Lees vergelijkingen, uitleg en slimme keuzes over Zigbee, Matter,
              Homey, Home Assistant, wifi en automatiseringen.
            </p>

            <Link href="/blog" className="btn btn-primary">
              Bekijk alle blogs →
            </Link>
          </div>
        </section>

        {/* ================= EXTRA INTERNE LINKS ================= */}
        <section className="section">
          <div className="container">
            <h2>Veel gezochte pagina’s</h2>

            <div className="grid-3">
              <Link href="/aanraders/beste-slimme-stekkers" className="card">
                <h3>Beste slimme stekkers</h3>
                <p>
                  Vergelijk wifi, Zigbee en Matter slimme stekkers met en zonder
                  energiemeting.
                </p>
                <span>Bekijk koopgids →</span>
              </Link>

              <Link href="/aanraders/beste-slimme-deurbel" className="card">
                <h3>Beste slimme deurbel</h3>
                <p>
                  Bekijk de beste slimme deurbellen voor bedraad, accu en
                  smart home integratie.
                </p>
                <span>Bekijk koopgids →</span>
              </Link>

              <Link href="/blog/home-assistant-vs-homey" className="card">
                <h3>Home Assistant vs Homey</h3>
                <p>
                  Vergelijk gebruiksgemak, automatiseringen en flexibiliteit en
                  ontdek welke hub beter bij jou past.
                </p>
                <span>Lees vergelijking →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= OVER ================= */}
        <About />

        {/* ================= CONTACT ================= */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}