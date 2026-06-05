import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowLeft, Send } from "lucide-react";
import logoAsset from "@/assets/northlane-logo.png.asset.json";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Prices — Northlane Web Studio" },
      {
        name: "description",
        content:
          "Luxury website design packages from Northlane Web Studio. Starter, Business and E-commerce websites plus optional extras.",
      },
      { property: "og:title", content: "Packages & Prices — Northlane Web Studio" },
      {
        property: "og:description",
        content: "Starter, Business, and E-commerce website packages crafted for modern brands.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: PackagesPage,
});

type Pkg = {
  name: string;
  tagline: string;
  price: string;
  features: { title: string; desc: string }[];
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "Starter Website",
    tagline: "Perfect for small businesses & personal brands",
    price: "From £299",
    features: [
      { title: "Up to 5 Pages", desc: "Home, About, Services, Gallery, Contact." },
      { title: "Mobile Responsive Design", desc: "Looks beautiful on every device." },
      { title: "Contact Form", desc: "Visitors reach you with one click." },
      { title: "Basic SEO Setup", desc: "Foundations to get found on Google." },
      { title: "2 Revision Rounds", desc: "Refined until you're 100% happy." },
    ],
  },
  {
    name: "Business Website",
    tagline: "For growing businesses that need a stronger online presence",
    price: "From £599",
    featured: true,
    features: [
      { title: "Up to 10 Pages", desc: "Home, About, Services, Portfolio, Testimonials, FAQ, Contact." },
      { title: "Custom Website Design", desc: "Tailored uniquely to your brand identity." },
      { title: "Full Device Optimization", desc: "Mobile, tablet and desktop perfected." },
      { title: "Multiple Contact Forms", desc: "Enquiries, bookings and more." },
      { title: "Basic SEO Setup", desc: "Optimised structure to lift visibility." },
      { title: "3 Revision Rounds", desc: "Until every detail feels right." },
    ],
  },
  {
    name: "E-commerce Website",
    tagline: "Sell your products online with ease",
    price: "From £899",
    features: [
      { title: "Online Store Setup", desc: "Complete e-commerce build." },
      { title: "Product Pages", desc: "Polished listings with images, descriptions & pricing." },
      { title: "Shopping Cart", desc: "Seamless multi-product checkout flow." },
      { title: "Secure Checkout", desc: "Smooth, encrypted purchasing." },
      { title: "Mobile Responsive Design", desc: "Shop effortlessly on any device." },
      { title: "Basic SEO Setup", desc: "Product pages optimised for Google." },
      { title: "3 Revision Rounds", desc: "Perfected to your vision." },
    ],
  },
];

const extras = [
  { name: "Additional Page", desc: "Extend your site beyond your package's page count.", price: "£30" },
  { name: "Logo Design", desc: "A professional logo crafted to represent your brand.", price: "On request" },
  { name: "Brand Kit", desc: "Colours, fonts, logo guidelines & full style guide.", price: "£120" },
  { name: "Social Media Templates", desc: "10 editable Canva Instagram post templates.", price: "£80" },
];

function PackagesPage() {
  return (
    <div className="min-h-screen px-5 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--ink)]/70 hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <header className="text-center mt-8 mb-14">
          <img src={logoAsset.url} alt="Northlane Web Studio" className="w-20 h-20 mx-auto object-contain mb-4" />
          <p className="eyebrow text-[var(--ink)]/60">Packages & Prices</p>
          <h1 className="font-display text-4xl sm:text-5xl mt-3 text-[var(--ink)]">
            Considered websites, transparent pricing
          </h1>
          <p className="mt-4 text-[var(--ink)]/70 max-w-xl mx-auto">
            Three carefully composed packages, each crafted to grow with your brand.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-lg p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                p.featured
                  ? "bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] shadow-[0_30px_60px_-30px_rgba(40,40,55,0.45)]"
                  : "bg-[var(--btn-light)] text-[var(--btn-light-fg)]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 eyebrow bg-[var(--btn-accent)] text-[var(--btn-accent-fg)] px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h2 className="font-display text-2xl">{p.name}</h2>
              <p className="text-xs mt-2 opacity-70 tracking-wide uppercase">{p.tagline}</p>
              <p className="font-display text-3xl mt-5">{p.price}</p>
              <ul className="mt-6 space-y-4 flex-1">
                {p.features.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <Check className="w-4 h-4 mt-1 shrink-0 opacity-70" />
                    <div>
                      <p className="font-medium text-sm">{f.title}</p>
                      <p className="text-xs opacity-70 mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:team.northlaneweb@gmail.com?subject=Enquiry%20—%20{p.name}"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-md py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-[var(--btn-accent)] text-[var(--btn-accent-fg)] hover:bg-[var(--btn-accent-hover)]"
                    : "bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)]"
                }`}
              >
                <Send className="w-4 h-4" /> Enquire
              </a>
            </article>
          ))}
        </section>

        <section className="mt-20">
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--ink)]/60">Optional Extras</p>
            <h2 className="font-display text-3xl mt-2 text-[var(--ink)]">Add more. Elevate your brand.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {extras.map((e) => (
              <div
                key={e.name}
                className="rounded-lg p-6 bg-[var(--btn-muted)] text-[var(--btn-muted-fg)] flex justify-between items-start gap-4"
              >
                <div>
                  <h3 className="font-display text-xl">{e.name}</h3>
                  <p className="text-xs mt-1 opacity-70 leading-relaxed">{e.desc}</p>
                </div>
                <span className="font-display text-lg whitespace-nowrap">{e.price}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 text-center">
          <p className="font-display text-2xl text-[var(--ink)]">Ready to elevate your brand?</p>
          <a
            href="mailto:team.northlaneweb@gmail.com?subject=Project%20Enquiry"
            className="mt-5 inline-flex items-center gap-2 rounded-md py-3 px-7 bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)] text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" /> Start your project
          </a>
        </footer>
      </div>
    </div>
  );
}
