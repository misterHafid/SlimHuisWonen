import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer | SlimHuisWonen.nl",
  description:
    "Disclaimer en aansprakelijkheidsbeperking van SlimHuisWonen.nl. Informatie over affiliate-links en de juistheid van inhoud.",
  alternates: { canonical: "https://slimhuiswonen.nl/disclaimer" },
  robots: "index, follow",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/">Home</Link> / Disclaimer
          </p>

          <h1>Disclaimer</h1>
          <p className="muted small">Laatst bijgewerkt: april 2026</p>

          <hr />

          <h2>Affiliate links</h2>
          <p>
            SlimHuisWonen.nl bevat affiliate-links naar webshops zoals Amazon,
            bol.com en Coolblue. Als je via zo'n link een aankoop doet,
            ontvangen wij een kleine commissie.{" "}
            <strong>Voor jou verandert de prijs niet.</strong>
          </p>
          <p>
            Wij selecteren producten op basis van kwaliteit en gebruiksgemak —
            niet op basis van de hoogte van de commissie. Onze aanbevelingen zijn
            altijd eerlijk en gebaseerd op eigen ervaring of grondig onderzoek.
          </p>
          <p>
            SlimHuisWonen.nl neemt deel aan affiliate-programma's van onder
            andere Amazon, bol.com en Coolblue. Dit zijn advertentieprogramma's
            waarbij websites commissie verdienen via productlinks.
          </p>

          <h2>Juistheid van informatie</h2>
          <p>
            De informatie op SlimHuisWonen.nl is met zorg samengesteld. Toch kan
            het voorkomen dat informatie verouderd of onvolledig is. Prijzen,
            specificaties en beschikbaarheid van producten kunnen wijzigen.
            Controleer altijd de actuele informatie op de website van de
            verkoper of fabrikant voordat je een aankoopbeslissing neemt.
          </p>

          <h2>Aansprakelijkheid</h2>
          <p>
            SlimHuisWonen.nl is niet aansprakelijk voor schade die voortvloeit
            uit het gebruik van informatie op deze website, het gebruik van
            gelinkte externe websites, of aankopen gedaan via affiliate-links.
          </p>
          <p>
            Externe websites (zoals Amazon.nl) hebben hun eigen
            gebruiksvoorwaarden en privacybeleid. SlimHuisWonen.nl is hier niet
            verantwoordelijk voor.
          </p>

          <h2>Intellectueel eigendom</h2>
          <p>
            Alle teksten, afbeeldingen en overige content op SlimHuisWonen.nl
            zijn eigendom van de auteur tenzij anders vermeld. Productafbeeldingen
            zijn eigendom van de respectievelijke fabrikanten.
          </p>

          <h2>Contact</h2>
          <p>
            Vragen of opmerkingen over deze disclaimer? Neem contact op via de{" "}
            <Link href="/contact">contactpagina</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
