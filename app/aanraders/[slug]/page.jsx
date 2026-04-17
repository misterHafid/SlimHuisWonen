import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aanraders } from "@/data/aanraders";
import { blogPosts } from "@/data/blog";
import { getProductBySlug } from "@/data/products";
import { getBolUrl } from "@/lib/bol-api";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";
import AmazonSearchCta from "@/components/AmazonSearchCta";
import RelatedContent from "@/components/RelatedContent";

/* ================= Amazon zoekterm mapping ================= */

const KOOPGIDS_AMAZON_TERMS = {
  "beste-slimme-camera": "slimme beveiligingscamera wifi",
  "beste-slimme-stekkers": "slimme stekker wifi",
  "beste-slimme-verlichting": "slimme verlichting",
  "beste-smart-home-hub": "smart home hub",
  "beste-slimme-deurbel": "slimme deurbel met camera",
  "beste-slimme-thermostaat": "slimme thermostaat",
  "beste-slimme-bewegingssensor": "slimme bewegingssensor zigbee",
  "beste-mesh-wifi-systeem": "mesh wifi systeem",
  "beste-slimme-slot": "slim deurslot",
  "beste-energie-monitor": "slimme energiemeter p1",
};

function getAmazonSearchTerm(slug) {
  return KOOPGIDS_AMAZON_TERMS[slug] ?? slug.replace(/-/g, " ");
}

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  const guide = aanraders.find((g) => g.slug === params.slug);

  if (!guide) {
    return {
      title: "Aanraders – SlimHuisWonen.nl",
      description: "Onze beste smart home aanraders en koopgidsen.",
    };
  }

  return {
    title: `${guide.title} | SlimHuisWonen`,
    description: guide.description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/aanraders/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://slimhuiswonen.nl/aanraders/${guide.slug}`,
      images: [
        {
          url: `https://slimhuiswonen.nl${guide.image}`,
        },
      ],
    },
  };
}

/* ================= PAGE ================= */

export default function AanraderDetailPage({ params }) {
  const guide = aanraders.find((g) => g.slug === params.slug);
  if (!guide) return notFound();

  const relatedBlog = blogPosts.find((b) => b.slug === guide.relatedBlog);

  const relatedBlogs = guide.relatedBlogs
    ? guide.relatedBlogs
        .map((slug) => blogPosts.find((b) => b.slug === slug))
        .filter(Boolean)
    : [];

  const relatedGuides = guide.relatedGuides
    ? guide.relatedGuides
        .map((slug) => aanraders.find((g) => g.slug === slug))
        .filter(Boolean)
    : [];

  const relatedItems = [
    ...(relatedBlog ? [{ ...relatedBlog, basePath: "blog" }] : []),
    ...relatedBlogs.map((post) => ({ ...post, basePath: "blog" })),
    ...relatedGuides.map((item) => ({ ...item, basePath: "aanraders" })),
  ];

  const amazonSearchTerm = getAmazonSearchTerm(params.slug);

  /* Verrijk picks met kooplinks + priceHint vanuit productdata */
  const enrichedPicks = guide.picks.map((pick) => {
    const slug = pick.href?.replace("/producten/", "");
    const product = slug ? getProductBySlug(slug) : null;
    return {
      ...pick,
      amazonUrl: product?.affiliateUrl || null,
      bolUrl: product ? getBolUrl(product) : null,
      priceHint: product?.priceHint || null,
    };
  });

  /* Structured Data: BreadcrumbList */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://slimhuiswonen.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aanraders",
        item: "https://slimhuiswonen.nl/aanraders",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `https://slimhuiswonen.nl/aanraders/${guide.slug}`,
      },
    ],
  };

  /* Structured Data: ItemList */
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: guide.title,
    description: guide.description,
    itemListElement: guide.picks.map((pick, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pick.title,
      url: `https://slimhuiswonen.nl${pick.href}`,
    })),
  };

  /* Structured Data: FAQ */
  const faqSchema =
    guide.faq && guide.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main className="section">
        <div className="container article">
          {/* 🔥 BlogBanner stijl */}
          {guide.image && (
            <div
              className="blogBanner"
              style={{ "--blog-bg": `url(${guide.image})` }}
            >
              <div
                className="blogBannerBlur blogBannerBlurLeft"
                style={{ backgroundImage: "var(--blog-bg)" }}
              />
              <div
                className="blogBannerBlur blogBannerBlurRight"
                style={{ backgroundImage: "var(--blog-bg)" }}
              />

              <div className="blogBannerInner compact">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  priority
                  className="blogBannerImg"
                  sizes="100vw"
                />
              </div>
            </div>
          )}

          {/* Breadcrumb */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/aanraders">Aanraders</Link> / {guide.title}
          </p>

          <h1>{guide.title}</h1>

          {guide.intro && <p className="section-intro">{guide.intro}</p>}

          {guide.whoIsThisFor && guide.whoIsThisFor.length > 0 && (
            <>
              <h2>Voor wie is deze koopgids?</h2>
              <ul>
                {guide.whoIsThisFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {guide.buyingAdviceIntro && <p>{guide.buyingAdviceIntro}</p>}

          {guide.whatToLookFor && (
            <>
              <h2>Waar moet je op letten?</h2>
              <ul>
                {guide.whatToLookFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <hr />

          <h2>Onze aanraders</h2>
          <p className="muted">
            Alleen producten die betrouwbaar zijn en logisch voor hun
            gebruikssituatie.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {enrichedPicks.map((pick) => (
              <BuyGuideProductCard key={pick.title} {...pick} />
            ))}
          </div>

          {relatedItems.length > 0 && (
            <>
              <hr />
              <RelatedContent items={relatedItems} basePath="aanraders" />
            </>
          )}

          {guide.faq && guide.faq.length > 0 && (
            <>
              <hr />
              <h2>Veelgestelde vragen</h2>
              <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
                {guide.faq.map((item) => (
                  <div key={item.question}>
                    <h3 style={{ marginBottom: "0.35rem" }}>{item.question}</h3>
                    <p className="muted" style={{ marginBottom: 0 }}>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ✅ Subtiele Amazon zoek CTA onder koopgids */}
          <hr style={{ marginTop: "2rem" }} />
          <AmazonSearchCta searchTerm={amazonSearchTerm} />
        </div>
      </main>

      <Footer />
    </>
  );
}