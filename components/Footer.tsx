import Link from "next/link";
import { Container } from "./ui/Container";
import { nav, site } from "@/data/site";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  facebook: "Facebook",
  instagram: "Instagram",
};

export function Footer() {
  const socialLinks = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="border-t border-ink-100 bg-white py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-bold text-ink-950">
              {site.name}
              <span className="text-accent-600">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-600">
              {site.role} dla małych i średnich firm. Projekt, kod i wdrożenie
              w jednych rękach.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink-950">Kontakt</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-accent-700"
                >
                  {site.email}
                </a>
              </li>
              {site.phone ? (
                <li>
                  <a href={`tel:${site.phoneHref}`} className="hover:text-accent-700">
                    {site.phone}
                  </a>
                </li>
              ) : null}
              {site.city ? <li>{site.city}</li> : null}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink-950">Strona</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {socialLinks.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-600">
                {socialLinks.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-700"
                    >
                      {socialLabels[key] ?? key}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-100 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Wszelkie prawa zastrzeżone.
          </p>
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-accent-700"
          >
            Polityka prywatności
          </Link>
        </div>
      </Container>
    </footer>
  );
}
