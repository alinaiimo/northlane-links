import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { works } from "./portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const w = works.find((x) => x.slug === params?.slug);
    const title = w ? `${w.title} — Northlane Web Studio` : "Project — Northlane Web Studio";
    return {
      meta: [
        { title },
        { name: "description", content: w?.description ?? "Project case study." },
        { property: "og:title", content: title },
        { property: "og:description", content: w?.description ?? "Project case study." },
        ...(w ? [{ property: "og:image", content: w.image }] : []),
      ],
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const w = works.find((x) => x.slug === params.slug);
    if (!w) throw notFound();
    return w;
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow text-[var(--ink)]/60">404</p>
      <h1 className="font-display text-4xl mt-2 text-[var(--ink)]">Project not found</h1>
      <Link to="/portfolio" className="mt-6 underline text-[var(--ink)]/70">Back to portfolio</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-3xl text-[var(--ink)]">Something went wrong</h1>
      <button onClick={reset} className="mt-4 underline text-[var(--ink)]/70">Try again</button>
    </div>
  ),
  component: ProjectPage,
});

const detailsBySlug: Record<string, { brief: string; services: string[]; year: string; sector: string; story: string[] }> = {
  "maison-levre": {
    brief: "An editorial digital home for a Parisian couture atelier.",
    services: ["Brand Strategy", "Art Direction", "Web Design", "Development"],
    year: "2025",
    sector: "Couture / Atelier",
    story: [
      "Maison Lèvre needed a quiet, sculptural presence online — a space that honored their craft rather than competing with it.",
      "We designed a slow editorial experience: oversized serif typography, restrained motion, and full-bleed photography that breathes.",
      "The result feels closer to a printed lookbook than a website — an atelier you walk into, not scroll through.",
    ],
  },
  "noir-and-oak": {
    brief: "A boutique fragrance house translated into a tactile e-commerce ritual.",
    services: ["E-commerce Design", "Product Pages", "Checkout Flow"],
    year: "2025",
    sector: "Fragrance / E-commerce",
    story: [
      "Noir & Oak wanted commerce that felt like a perfumery, not a marketplace.",
      "We crafted intimate product pages with note pyramids, sourcing stories, and a quiet checkout that respects the gesture of buying scent.",
      "Conversion lifted 38% in the first quarter — without ever raising its voice.",
    ],
  },
  "elena-vass": {
    brief: "A personal site for a stylist working between Milan and New York.",
    services: ["Personal Brand", "Web Design", "Editorial Layout"],
    year: "2024",
    sector: "Personal Brand",
    story: [
      "Elena's work speaks in silhouette and restraint. Her site needed the same posture.",
      "Generous whitespace, a single hairline serif, and an asymmetric grid let her editorial work hold the room.",
      "Press inquiries doubled within two months of launch.",
    ],
  },
  "atelier-lumen": {
    brief: "A studio site for a London interiors practice with international clients.",
    services: ["Studio Brand", "Web Design", "Case Studies", "CMS"],
    year: "2024",
    sector: "Interior Design",
    story: [
      "Atelier Lumen briefed us for a site that felt like one of their rooms — warm, considered, materially honest.",
      "We led with full-bleed travertine palettes, slow scroll-reveals, and case studies that read like project monographs.",
      "Discovery calls now arrive pre-qualified — clients already speak the studio's language.",
    ],
  },
  "cove-skincare": {
    brief: "A clean skincare brand built around ritual rather than routine.",
    services: ["DTC Brand", "E-commerce", "Subscription Flow"],
    year: "2025",
    sector: "Beauty / DTC",
    story: [
      "Cove needed to step away from the clinical aesthetic dominating clean beauty.",
      "We grounded the brand in stone, sage and slow daylight — pairing it with an ingredient-first product narrative and a subscribe-and-save flow that feels generous, not pushy.",
      "Average order value rose 24% post-launch.",
    ],
  },
  "harbor-and-hue": {
    brief: "A coastal architecture firm with a portfolio of cliffside residences.",
    services: ["Studio Brand", "Web Design", "Project Gallery"],
    year: "2025",
    sector: "Architecture",
    story: [
      "Harbor & Hue's work lives in light — long sightlines, ocean horizons, weathered stone.",
      "We let the photography lead and kept the interface architectural: hairline rules, generous columns, a quiet bespoke booking flow.",
      "The site now serves as the practice's primary new-business channel.",
    ],
  },
};

function ProjectPage() {
  const w = Route.useLoaderData();
  const details = detailsBySlug[w.slug];
  const others = works.filter((x) => x.slug !== w.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="px-5 pt-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-[var(--ink)]/70 hover:text-[var(--ink)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Portfolio
          </Link>
        </div>
      </div>

      <header className="px-5 pt-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-[var(--ink)]/60">{w.category}</p>
          <h1 className="font-display text-5xl sm:text-7xl mt-3 text-[var(--ink)] leading-[1.02]">
            {w.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--ink)]/70 leading-relaxed">
            {details?.brief ?? w.description}
          </p>
        </div>
      </header>

      <section className="px-5">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-xl overflow-hidden shadow-[0_40px_80px_-40px_rgba(40,40,55,0.45)]"
            style={{ background: w.accent }}
          >
            <img
              src={w.image}
              alt={`${w.title} homepage`}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      <section className="px-5 mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <p className="eyebrow text-[var(--ink)]/55">Sector</p>
            <p className="font-display text-xl mt-1 text-[var(--ink)]">{details?.sector ?? w.category}</p>
          </div>
          <div>
            <p className="eyebrow text-[var(--ink)]/55">Year</p>
            <p className="font-display text-xl mt-1 text-[var(--ink)]">{details?.year ?? "—"}</p>
          </div>
          <div>
            <p className="eyebrow text-[var(--ink)]/55">Services</p>
            <p className="font-display text-xl mt-1 text-[var(--ink)] leading-snug">
              {(details?.services ?? []).join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 mt-20">
        <div className="max-w-3xl mx-auto space-y-6">
          {(details?.story ?? [w.description]).map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "font-display text-2xl sm:text-3xl text-[var(--ink)] leading-snug" : "text-[var(--ink)]/75 leading-relaxed"}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 mt-24">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow text-[var(--ink)]/55 mb-6">More work</p>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/portfolio/$slug"
                params={{ slug: o.slug }}
                className="group block rounded-lg overflow-hidden bg-[var(--btn-light)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5 flex items-start justify-between">
                  <div>
                    <p className="eyebrow text-[var(--ink)]/55">{o.category}</p>
                    <h3 className="font-display text-xl mt-1 text-[var(--ink)]">{o.title}</h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--ink)]/40 group-hover:text-[var(--ink)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 mb-16 text-center px-5">
        <p className="font-display text-3xl text-[var(--ink)]">Let's build yours next.</p>
        <a
          href="mailto:team.northlaneweb@gmail.com?subject=Project%20Enquiry"
          className="mt-5 inline-flex items-center gap-2 rounded-md py-3 px-7 bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
        >
          Start a project
        </a>
      </footer>
    </div>
  );
}
