import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/northlane-logo.png.asset.json";
import maison from "@/assets/portfolio/maison.jpg.asset.json";
import noir from "@/assets/portfolio/noir.jpg.asset.json";
import elena from "@/assets/portfolio/elena.jpg.asset.json";
import atelier from "@/assets/portfolio/atelier.jpg.asset.json";
import cove from "@/assets/portfolio/cove.jpg.asset.json";
import harbor from "@/assets/portfolio/harbor.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Northlane Web Studio" },
      {
        name: "description",
        content:
          "A curated showcase of luxury business, e-commerce, personal brand and service-based websites designed by Northlane Web Studio.",
      },
      { property: "og:title", content: "Portfolio — Northlane Web Studio" },
      {
        property: "og:description",
        content: "Selected work — luxury, e-commerce, personal brand and service websites.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: PortfolioPage,
});

export const works = [
  {
    slug: "maison-levre",
    title: "Maison Lèvre",
    category: "Luxury Business",
    description: "A refined editorial site for a Parisian atelier — slow, sculptural, deeply tactile.",
    image: maison.url,
    accent: "#c9b89a",
  },
  {
    slug: "noir-and-oak",
    title: "Noir & Oak",
    category: "E-commerce",
    description: "Boutique fragrance store with a quiet checkout flow and immersive product pages.",
    image: noir.url,
    accent: "#8a6a48",
  },
  {
    slug: "elena-vass",
    title: "Elena Vass",
    category: "Personal Brand",
    description: "A minimalist personal site for a stylist — typography forward, generous white space.",
    image: elena.url,
    accent: "#d9c9b5",
  },
  {
    slug: "atelier-lumen",
    title: "Atelier Lumen",
    category: "Service-Based",
    description: "An interior design studio's portfolio with full-bleed imagery and case studies.",
    image: atelier.url,
    accent: "#b89a76",
  },
  {
    slug: "cove-skincare",
    title: "Cove Skincare",
    category: "E-commerce",
    description: "Clean skincare brand with subscription flow and ingredient storytelling.",
    image: cove.url,
    accent: "#cdb89a",
  },
  {
    slug: "harbor-and-hue",
    title: "Harbor & Hue",
    category: "Luxury Business",
    description: "Coastal architecture firm site with project gallery and bespoke booking.",
    image: harbor.url,
    accent: "#7c9bb0",
  },
] as const;

const categories = ["All", "Luxury Business", "E-commerce", "Personal Brand", "Service-Based"];

function PortfolioPage() {
  return (
    <div className="min-h-screen px-5 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--ink)]/70 hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <header className="text-center mt-8 mb-14">
          <img src={logoAsset.url} alt="Northlane Web Studio" className="w-20 h-20 mx-auto object-contain mb-4" />
          <p className="eyebrow text-[var(--ink)]/60">Selected Work</p>
          <h1 className="font-display text-4xl sm:text-5xl mt-3 text-[var(--ink)]">
            Websites designed with intention
          </h1>
          <p className="mt-4 text-[var(--ink)]/70 max-w-xl mx-auto">
            A curated look at the kind of brands and experiences we craft.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <span
              key={c}
              className="eyebrow px-3 py-1.5 rounded-full bg-[var(--btn-light)] text-[var(--btn-light-fg)]"
            >
              {c}
            </span>
          ))}
        </div>

        <section className="grid gap-8 md:grid-cols-2">
          {works.map((w) => (
            <Link
              key={w.slug}
              to="/portfolio/$slug"
              params={{ slug: w.slug }}
              className="group block rounded-lg overflow-hidden bg-[var(--btn-light)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(40,40,55,0.35)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={w.image}
                  alt={`${w.title} website mockup`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-[var(--ink)]/55">{w.category}</p>
                    <h2 className="font-display text-2xl mt-1 text-[var(--ink)]">{w.title}</h2>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--ink)]/40 group-hover:text-[var(--ink)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm mt-3 text-[var(--ink)]/70 leading-relaxed">{w.description}</p>
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-20 text-center">
          <p className="font-display text-2xl text-[var(--ink)]">Have a project in mind?</p>
          <a
            href="mailto:team.northlaneweb@gmail.com?subject=Project%20Enquiry"
            className="mt-5 inline-flex items-center gap-2 rounded-md py-3 px-7 bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            Start a conversation
          </a>
        </footer>
      </div>
    </div>
  );
}
