import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Over Hafid – SlimHuisWonen.nl",
  description:
    "Hafid begon met KlikAanKlikUit en bouwde stap voor stap een volledig slim huis. Op SlimHuisWonen deelt hij alles wat hij leerde — zodat jij niet dezelfde fouten hoeft te maken.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/over",
  },
  openGraph: {
    title: "Over Hafid – SlimHuisWonen.nl",
    description:
      "Lees wie SlimHuisWonen runt en waarom Hafid deze site is gestart.",
    url: "https://slimhuiswonen.nl/over",
    images: [
      {
        url: "https://slimhuiswonen.nl/profielfoto.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hafid",
  url: "https://slimhuiswonen.nl/over",
  image: "https://slimhuiswonen.nl/profielfoto.jpeg",
  sameAs: ["https://slimhuiswonen.nl"],
  jobTitle: "Oprichter SlimHuisWonen.nl",
  description:
    "Hafid bouwt al jaren aan zijn eigen slimme huis en deelt zijn ervaringen op SlimHuisWonen.nl — praktische koopgidsen, tips en how-to handleidingen voor iedereen die wil beginnen met smart home.",
  knowsAbout: [
    "Smart home",
    "Slimme verlichting",
    "Zigbee",
    "Matter",
    "Thread",
    "Home Assistant",
    "Homey",
    "Domotica",
    "KlikAanKlikUit",
    "Philips Hue",
    "IKEA Tradfri",
    "Tapo",
    "Eufy",
    "Slimme thermostaten",
    "Mesh wifi",
    "Smart home automatiseringen",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SlimHuisWonen.nl",
    url: "https://slimhuiswonen.nl",
  },
};

export default function OverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Header />

      <main className="section">
        <div className="container article">

          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/">Home</Link> / Over
          </p>

          {/* ── HERO ── */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "3px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src="/profielfoto.jpeg"
                alt="Hafid — oprichter SlimHuisWonen"
                fill
                sizes="120px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div>
              <h1 style={{ marginBottom: "0.4rem" }}>Hoi, ik ben Hafid</h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  maxWidth: "540px",
                  fontStyle: "italic",
                  opacity: 0.85,
                  margin: 0,
                }}
              >
                "Ik bouw al jaren aan mijn eigen slimme huis en deel hier
                alles wat ik leer — zodat jij niet dezelfde fouten hoeft te
                maken als ik."
              </p>
            </div>
          </div>

          <hr />

          {/* ── TIJDLIJN ── */}
          <h2>Hoe mijn smart home is gegroeid</h2>
          <p>
            Het is niet begonnen met een groot plan. Ik ben gewoon stap voor
            stap verder gegaan — en voor ik het wist had ik een compleet slim
            huis.
          </p>

          <div style={{ marginTop: "1.5rem" }}>

            {[
              {
                jaar: "Begin",
                titel: "KlikAanKlikUit — mijn eerste stap",
                tekst:
                  "Ik begon met KlikAanKlikUit. Simpele timerschakelaars voor de schemerlamp in de woonkamer. Geen app, geen wifi, gewoon een klikker. Het werkte — en ik wilde meer.",
              },
              {
                jaar: "Daarna",
                titel: "Homey Pro en mijn eerste automatiseringen",
                tekst:
                  "Ik kocht een Homey Pro en sloot mijn eerste slimme lampen aan. Mijn eerste echte automatisering: de wc-lamp gaat 's nachts aan op 10% als ik hem nodig heb. Daarna volgde de tuinverlichting die automatisch aan gaat bij schemering. Kleine dingen — maar het voelde als magie.",
              },
              {
                jaar: "Uitbreiding",
                titel: "IKEA Tradfri voor de rest van het huis",
                tekst:
                  "Philips Hue vond ik te duur voor elke kamer. Ik heb IKEA Tradfri-lampen toegevoegd via Homey. Goedkoper, goed genoeg, en ze werken prima samen met Hue via een universele hub.",
              },
              {
                jaar: "Veiligheid",
                titel: "Camera's en sensoren",
                tekst:
                  "Ik heb Eufy en Tapo camera's in huis. Binnencamera voor als we op vakantie zijn, buitencamera bij de voordeur. Daarna kwamen de Aqara deur- en raaamsensoren — handig als er iemand binnengaat als wij er niet zijn.",
              },
              {
                jaar: "Volgende stap",
                titel: "Home Assistant staat op de planning",
                tekst:
                  "Ik ben van plan om Home Assistant te installeren op een Raspberry Pi of NUC. Volledig lokaal, geen cloud-afhankelijkheid. Nog niet gedaan, maar ik schrijf er al over — want ik leer graag hardop.",
              },
            ].map(({ jaar, titel, tekst }) => (
              <div
                key={jaar}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#6366f1",
                      marginTop: "0.35rem",
                    }}
                  />
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      background: "rgba(99,102,241,0.25)",
                      marginTop: "0.35rem",
                    }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      opacity: 0.5,
                    }}
                  >
                    {jaar}
                  </span>
                  <h3 style={{ margin: "0.2rem 0 0.4rem" }}>{titel}</h3>
                  <p style={{ margin: 0 }}>{tekst}</p>
                </div>
              </div>
            ))}
          </div>

          <hr />

          {/* ── HUIDIGE SETUP ── */}
          <h2>Mijn huidige setup</h2>
          <p>
            Dit gebruik ik op dit moment thuis — geen sponsordeal, gewoon wat
            ik zelf heb gekocht en gebruik:
          </p>

          <ul>
            <li>
              <strong>Hub:</strong> Homey Pro — het hart van alles
            </li>
            <li>
              <strong>Verlichting:</strong> mix van Philips Hue en IKEA
              Tradfri, via Homey gekoppeld
            </li>
            <li>
              <strong>Camera's:</strong> Eufy binnencamera + Tapo buitencamera
            </li>
            <li>
              <strong>Sensoren:</strong> Aqara deur- en raaamsensoren (Zigbee)
            </li>
            <li>
              <strong>Stekkers:</strong> Tapo P115 voor energiemeting bij
              enkele apparaten
            </li>
            <li>
              <strong>Protocol:</strong> voornamelijk Zigbee via Homey, aangevuld
              met wifi voor camera's en stekkers
            </li>
          </ul>

          <hr />

          {/* ── WAAROM DEZE SITE ── */}
          <h2>Waarom ik SlimHuisWonen ben gestart</h2>
          <p>
            Toen ik zelf begon met smart home, was het moeilijk om eerlijke
            informatie te vinden. Alles was óf te technisch, óf duidelijk
            geschreven om producten te verkopen. Ik miste een plek waar iemand
            gewoon vertelt wat hij zelf doet en wat hij aanraadt.
          </p>
          <p>
            Dat is SlimHuisWonen.nl geworden. Ik schrijf vanuit mijn eigen
            ervaring. Soms gaat dat over producten die ik heb gekocht en
            gebruikt, soms over dingen die ik heb onderzocht omdat ik er zelf
            nieuwsgierig naar ben.
          </p>

          <div
            style={{
              background: "rgba(99,102,241,0.08)",
              borderLeft: "4px solid #6366f1",
              padding: "1rem 1.25rem",
              borderRadius: "0 8px 8px 0",
              margin: "1.5rem 0",
            }}
          >
            <strong>Over affiliate links:</strong>
            <p style={{ margin: "0.4rem 0 0" }}>
              Op deze site staan links naar webshops zoals Amazon, bol.com en
              Coolblue. Als je via zo'n link iets koopt, krijg ik een kleine
              commissie — jij betaalt niets extra. Ik raad alleen producten aan
              die ik zelf zou kopen of al heb gekocht.{" "}
              <Link href="/disclaimer">Meer info in mijn disclaimer</Link>.
            </p>
          </div>

          <hr />

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/aanraders" className="btn btn-primary">
              Bekijk mijn koopgidsen →
            </Link>
            <Link href="/tips" className="btn btn-secondary">
              Lees tips & uitleg →
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Stuur me een bericht
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
