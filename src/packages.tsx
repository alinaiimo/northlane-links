import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Package, Briefcase, Send, Globe } from "lucide-react";
import logoAsset from "@/assets/northlane-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northlane Web Studio — Links" },
      {
        name: "description",
        content:
          "Northlane Web Studio — luxury website design for modern brands. Explore packages, portfolio and get in touch.",
      },
      { property: "og:title", content: "Northlane Web Studio — Links" },
      {
        property: "og:description",
        content: "Luxury website design for modern brands.",
      },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

type LinkItem = {
  label: string;
  href?: string;
  to?: "/packages" | "/portfolio" | "/studio";
  variant: "dark" | "light" | "muted" | "accent";
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

const links: LinkItem[] = [
  {
    label: "Enquire Today",
    href: "mailto:team.northlaneweb@gmail.com?subject=Project%20Enquiry",
    variant: "dark",
    icon: Send,
  },
  {
    label: "Packages & Prices",
    to: "/packages",
    variant: "light",
    icon: Package,
  },
  {
    label: "View Portfolio",
    to: "/portfolio",
    variant: "muted",
    icon: Briefcase,
  },
  {
    label: "Visit Website",
    to: "/studio",
    variant: "accent",
    icon: Globe,
  },
  {
    label: "Email Us",
    href: "mailto:team.northlaneweb@gmail.com",
    variant: "light",
    icon: Mail,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/358449522012",
    variant: "muted",
    icon: MessageCircle,
    external: true,
  },
];

const variantClasses: Record<LinkItem["variant"], string> = {
  dark: "bg-[var(--btn-dark)] text-[var(--btn-dark-fg)] hover:bg-[var(--btn-dark-hover)]",
  light: "bg-[var(--btn-light)] text-[var(--btn-light-fg)] hover:bg-[var(--btn-light-hover)]",
  muted: "bg-[var(--btn-muted)] text-[var(--btn-muted-fg)] hover:bg-[var(--btn-muted-hover)]",
  accent: "bg-[var(--btn-accent)] text-[var(--btn-accent-fg)] hover:bg-[var(--btn-accent-hover)]",
};

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center px-5 py-12 sm:py-16">
      <main className="w-full max-w-[480px] flex flex-col items-center">
        {/* Logo */}
        <img
          src={logoAsset.url}
          alt="Northlane Web Studio"
          width={180}
          height={180}
          className="w-36 h-36 sm:w-44 sm:h-44 object-contain animate-fade-up"
        />

        <h1 className="sr-only">Northlane Web Studio</h1>
        <p
          className="font-display text-3xl sm:text-4xl mt-4 text-center text-[var(--ink)] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Northlane Web Studio
        </p>
        <p
          className="eyebrow mt-3 text-[var(--ink)]/70 animate-fade-up"
          style={{ animationDelay: "0.18s" }}
        >
          Luxury Websites · Modern Brands
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3 mt-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <a
            href="https://instagram.com/northlaneweb"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-14 h-12 rounded-md bg-[var(--btn-light)] text-[var(--btn-light-fg)] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--btn-light-hover)]"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/358449522012"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-14 h-12 rounded-md bg-[var(--btn-muted)] text-[var(--btn-muted-fg)] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--btn-muted-hover)]"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Link buttons */}
        <nav className="w-full mt-6 flex flex-col gap-3.5">
          {links.map((l, i) => {
            const Icon = l.icon;
            const className = `group relative w-full rounded-md py-4 px-6 flex items-center justify-center gap-3 text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(40,40,55,0.25)] animate-fade-up ${variantClasses[l.variant]}`;
            const style = { animationDelay: `${0.32 + i * 0.06}s` };
            const inner = (
              <>
                <Icon className="w-4 h-4 opacity-80 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium">{l.label}</span>
              </>
            );
            if (l.to) {
              return (
                <Link key={l.label} to={l.to} className={className} style={style}>
                  {inner}
                </Link>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className={className}
                style={style}
              >
                {inner}
              </a>
            );
          })}
        </nav>

        <footer className="mt-16 text-center">
          <p className="eyebrow text-[var(--ink)]/55">© 2026 Northlane Web Studio</p>
        </footer>
      </main>
    </div>
  );
}
