import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          © {year} SlimHuisWonen.nl – Slimme spullen voor een slimmer huis.
        </p>

        <p className="muted small">
          SlimHuisWonen.nl bevat affiliate-links naar webshops zoals Amazon,
          bol.com en Coolblue. Bij aankoop via deze links ontvangen wij een
          kleine commissie — jij betaalt niets extra.
        </p>

        <nav className="footer-nav" aria-label="Juridisch">
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/disclaimer">Disclaimer</Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookies">Cookies</Link>
          <span aria-hidden="true">·</span>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span aria-hidden="true">·</span>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
