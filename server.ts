import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, MessageCircle, Instagram, Send, Sparkles, PenTool, Layout, Rocket, Heart } from "lucide-react";
import logoAsset from "@/assets/northlane-logo.png.asset.json";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Northlane Web Studio — Luxury Website Design" },
      {
        name: "description",
        content:
          "Northlane Web Studio designs luxury websites for modern brands. Discover our story, services, process and packages.",
      },
      { property: "og:title", content: "Northlane Web Studio — Luxury Website Design" },
      {
        property: "og:description",
        content: "A boutique web design studio crafting refined digital experiences for considered brands.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const services = [
    { icon: Layout, title: "Bespoke Website Design", desc: "Custom websites tailored to your brand voice and audience." },
    { icon: Sparkles, title: "Brand Identity", desc: "Logos, colour systems and visual language that feel timeless." },
    { icon: PenTool, title: "E-commerce Builds", desc: "Considered online stores with seamless checkout flows." },
    { icon: Rocket, title: "Launch & SEO", desc: "Optimised foundations so your brand is found from day one." },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "We learn your brand, audience and ambitions in depth." },
    { step: "02", title: "Strategy", desc: "Information architecture, voice and visual direction." },
    { step: "03", title: "Design", desc: "Refined layouts crafted with intention and restraint." },
    { step: "04", title: "Build", desc: "Hand-built, responsive and performance-tuned." },
    { step: "05", title: "Launch", desc: "Quality-checked, SEO-ready, and gracefully delivered." },
  ];

  const reasons = [
    "Tailored, never templated",
    "Luxury aesthetic refined for modern brands",
    "Direct, personal communication",
    "Considered detail in every pixel",
    "Built to grow with you",
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-5 py-12 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--ink)]/70 hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to links
        </Link>

        {/* Hero */}
        <header className="text-center pt-12 pb-20">
          <img src={logoAsset.url} alt="Northlane Web Studio" className="w-24 h-24 mx-auto object-contain mb-6" />
          <p className="eyebrow text-[var(--ink)]/60">Northlane Web Studio</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-4 text-[var(--ink)] leading-[1.05]">
            Luxury websites for<br />modern brands.
          </h1>
          <p className="mt-6 text-[var(--ink)]/70 max-w-xl mx-auto leading-relaxed">
            A boutique web design studio crafting refined, intentional digital experiences for brands
            that care about every detail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:team.northlaneweb@gmail.com?subject=Project%20Enquiry"
              className="inline-flex items-center gap-2 rounded-md py-3 px-7 bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" /> Start your project
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-md py-3 px-7 bg-[var(--btn-light)] text-[var(--btn-light-fg)] hover:bg-[var(--btn-light-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              View our work
            </Link>
          </div>
        </header>

        {/* About */}
        <section className="grid md:grid-cols-2 gap-12 items-center py-16 border-t border-[var(--ink)]/10">
          <div>
            <p className="eyebrow text-[var(--ink)]/60">Who we are</p>
            <h2 className="font-display text-4xl mt-3 text-[var(--ink)]">A studio built on craft.</h2>
          </div>
          <p className="text-[var(--ink)]/75 leading-relaxed">
            Northlane Web Studio is an independent design practice creating considered websites for
            small businesses, personal brands and growing e-commerce labels. We believe the most
            memorable brands online aren't the loudest — they're the most thoughtfully made. Every
            project is a partnership: small in client list, large in care.
          </p>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-[var(--ink)]/10">
          <div className="text-center mb-12">
            <p className="eyebrow text-[var(--ink)]/60">Services</p>
            <h2 className="font-display text-4xl mt-3 text-[var(--ink)]">What we do</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-lg p-6 bg-[var(--btn-light)] flex gap-4">
                <div className="w-10 h-10 rounded-md bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] flex items-center justify-center shrink-0">
                  <s.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-[var(--ink)]">{s.title}</h3>
                  <p className="text-sm mt-1 text-[var(--ink)]/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-16 border-t border-[var(--ink)]/10">
          <div className="text-center mb-12">
            <p className="eyebrow text-[var(--ink)]/60">Process</p>
            <h2 className="font-display text-4xl mt-3 text-[var(--ink)]">How we work</h2>
          </div>
          <ol className="space-y-3">
            {process.map((p) => (
              <li key={p.step} className="rounded-lg p-6 bg-[var(--btn-muted)] flex gap-5 items-baseline">
                <span className="font-display text-3xl text-[var(--ink)]/40">{p.step}</span>
                <div>
                  <h3 className="font-display text-xl text-[var(--ink)]">{p.title}</h3>
                  <p className="text-sm mt-1 text-[var(--ink)]/70">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Packages preview */}
        <section className="py-16 border-t border-[var(--ink)]/10 text-center">
          <p className="eyebrow text-[var(--ink)]/60">Packages</p>
          <h2 className="font-display text-4xl mt-3 text-[var(--ink)]">Crafted for every stage</h2>
          <p className="mt-4 text-[var(--ink)]/70 max-w-lg mx-auto">
            From a Starter website at £299 to bespoke e-commerce builds from £899 — find the package
            that suits your brand.
          </p>
          <Link
            to="/packages"
            className="mt-7 inline-flex items-center gap-2 rounded-md py-3 px-7 bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            View packages & prices
          </Link>
        </section>

        {/* Why us */}
        <section className="py-16 border-t border-[var(--ink)]/10">
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--ink)]/60">Why Northlane</p>
            <h2 className="font-display text-4xl mt-3 text-[var(--ink)]">A quiet kind of excellence</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-3 rounded-md p-4 bg-[var(--btn-light)]">
                <Heart className="w-4 h-4 text-[var(--ink)]/60" />
                <span className="text-sm text-[var(--ink)]">{r}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="py-16 border-t border-[var(--ink)]/10 text-center">
          <p className="eyebrow text-[var(--ink)]/60">Contact</p>
          <h2 className="font-display text-4xl mt-3 text-[var(--ink)]">Let's create something amazing.</h2>
          <p className="mt-4 text-[var(--ink)]/70">
            We take on a limited number of projects each month. Get in touch to begin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:team.northlaneweb@gmail.com"
              className="inline-flex items-center gap-2 rounded-md py-3 px-6 bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" /> team.northlaneweb@gmail.com
            </a>
            <a
              href="https://wa.me/358449522012"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md py-3 px-6 bg-[var(--btn-muted)] text-[var(--btn-muted-fg)] hover:bg-[var(--btn-muted-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="https://instagram.com/northlaneweb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md py-3 px-6 bg-[var(--btn-light)] text-[var(--btn-light-fg)] hover:bg-[var(--btn-light-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </section>

        <footer className="mt-12 text-center pt-8 border-t border-[var(--ink)]/10">
          <p className="eyebrow text-[var(--ink)]/55">© 2026 Northlane Web Studio</p>
        </footer>
      </div>
    </div>
  );
}
