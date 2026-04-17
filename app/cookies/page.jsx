import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cookiebeleid | SlimHuisWonen.nl",
  description:
    "Cookiebeleid van SlimHuisWonen.nl. Welke cookies we gebruiken en hoe je ze kunt beheren.",
  alternates: { canonical: "https://slimhuiswonen.nl/cookies" },
  robots: "index, follow",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/">Home</Link> / Cookiebeleid
          </p>

          <h1>Cookiebeleid</h1>
          <p className="muted small">Laatst bijgewerkt: april 2026</p>

          <hr />

          <h2>Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die een website op je apparaat
            opslaat wanneer je de site bezoekt. Ze worden gebruikt om de werking
            van de site te verbeteren en bezoekersgedrag te analyseren.
          </p>

          <h2>Welke cookies gebruikt SlimHuisWonen.nl?</h2>

          <h3>Functionele cookies (geen toestemming vereist)</h3>
          <p>
            Wij slaan je cookievoorkeur op in <code>localStorage</code> van je
            browser. Dit is geen cookie in de technische zin maar een lokale
            instelling die nodig is om de cookiebanner niet elke keer te tonen.
          </p>

          <h3>Analytische cookies (Google Analytics)</h3>
          <p>
            Wij gebruiken Google Analytics om te begrijpen hoe bezoekers onze
            site gebruiken. Google Analytics slaat cookies op die informatie
            bevatten over:
          </p>
          <ul>
            <li>Welke pagina&apos;s je bezoekt</li>
            <li>Hoe lang je op een pagina blijft</li>
            <li>Via welk kanaal je de site hebt gevonden</li>
          </ul>
          <p>
            Deze gegevens zijn anoniem en worden niet gekoppeld aan je persoon.
            Google verwerkt deze gegevens conform hun eigen privacybeleid.
          </p>

          <h3>Webshop cookies (derden)</h3>
          <p>
            Als je klikt op een affiliate-link naar een webshop (zoals Amazon,
            bol.com of Coolblue), kunnen die webshops cookies plaatsen op je
            apparaat. Dit valt buiten onze controle en is onderworpen aan het
            cookiebeleid van de betreffende webshop.
          </p>

          <h2>Cookies weigeren of verwijderen</h2>
          <p>
            Je kunt cookies weigeren of verwijderen via de instellingen van je
            browser. Houd er rekening mee dat sommige functies van de site
            mogelijk niet goed werken als je cookies uitschakelt.
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies beheren in Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-websites-verwijderd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies beheren in Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies beheren in Safari
              </a>
            </li>
          </ul>

          <h2>Google Analytics opt-out</h2>
          <p>
            Wil je Google Analytics volledig uitzetten? Installeer dan de{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2>Contact</h2>
          <p>
            Vragen over ons cookiebeleid? Neem contact op via de{" "}
            <Link href="/contact">contactpagina</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
