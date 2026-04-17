import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacybeleid | SlimHuisWonen.nl",
  description:
    "Lees het privacybeleid van SlimHuisWonen.nl. Welke gegevens we verwerken, hoe we omgaan met affiliate-links naar webshops en hoe je je rechten kunt uitoefenen.",
  alternates: { canonical: "https://slimhuiswonen.nl/privacy" },
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/">Home</Link> / Privacybeleid
          </p>

          <h1>Privacybeleid</h1>
          <p className="muted small">Laatst bijgewerkt: april 2026</p>

          <hr />

          <h2>1. Wie zijn wij?</h2>
          <p>
            SlimHuisWonen.nl is een persoonlijke website van Hafid, gericht op
            smart home advies, koopgidsen en uitleg. De site is bereikbaar via{" "}
            <strong>slimhuiswonen.nl</strong>.
          </p>
          <p>
            Vragen over privacy? Neem contact op via de{" "}
            <Link href="/contact">contactpagina</Link>.
          </p>

          <h2>2. Welke gegevens verwerken wij?</h2>
          <p>
            SlimHuisWonen.nl verzamelt <strong>zelf geen persoonsgegevens</strong>.
            Er is geen registratie, geen login en geen betaalfunctie op deze site.
          </p>
          <p>De volgende externe diensten kunnen wel gegevens verwerken:</p>
          <ul>
            <li>
              <strong>Google Analytics</strong> — wij gebruiken Google Analytics
              om anonieme bezoekersstatistieken bij te houden (paginabezoeken,
              sessieduur, herkomst). Er worden geen persoonsgegevens opgeslagen.
              Je kunt Google Analytics opt-out installeren via{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                tools.google.com/dlpage/gaoptout
              </a>
              .
            </li>
            <li>
              <strong>Affiliate-links naar webshops</strong> — als je via een
              link op deze site naar een webshop (zoals Amazon, bol.com of
              Coolblue) gaat, verwerkt die webshop je gegevens conform hun eigen
              privacybeleid.
            </li>
          </ul>

          <h2>3. Cookies</h2>
          <p>
            SlimHuisWonen.nl gebruikt minimale cookies. Zie ons{" "}
            <Link href="/cookies">cookiebeleid</Link> voor een volledig overzicht.
          </p>

          <h2>4. Affiliate partnerprogramma's</h2>
          <p>
            SlimHuisWonen.nl neemt deel aan affiliate-programma's van webshops
            zoals Amazon, bol.com en Coolblue. Dit betekent dat wij een kleine
            commissie ontvangen als je via onze links een product koopt. Voor
            jou verandert er niets aan de prijs.
          </p>
          <p>
            Alle affiliate-links zijn gemarkeerd met{" "}
            <code>rel=&quot;sponsored&quot;</code> conform de richtlijnen van
            Google en de ACM.
          </p>

          <h2>5. Jouw rechten (AVG)</h2>
          <p>
            Op basis van de Algemene Verordening Gegevensbescherming (AVG) heb
            je het recht op inzage, correctie en verwijdering van je
            persoonsgegevens. Omdat wij zelf geen persoonsgegevens opslaan, is
            er doorgaans niets te verwijderen.
          </p>
          <p>
            Voor vragen over jouw rechten of de verwerking via externe diensten
            (Google, Amazon, bol.com) kun je contact opnemen via onze{" "}
            <Link href="/contact">contactpagina</Link>.
          </p>

          <h2>6. Wijzigingen</h2>
          <p>
            Dit privacybeleid kan worden bijgewerkt. De meest recente versie is
            altijd te vinden op deze pagina.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
