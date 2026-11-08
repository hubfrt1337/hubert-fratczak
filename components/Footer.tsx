import Link from "next/link";
import { Logo } from "./ui/Logo";
import { CallButton } from "./CallReveal";
import { footerInfo, offerMenu, site } from "@/data/site";
import { industries } from "@/data/branze";

export function Footer() {
  const socialLinks = Object.entries(site.social).filter(([, url]) => url);

  return (
    // Na telefonie dół stopki odsunięty o wysokość dolnego paska (64 px + wystający przycisk + pasek systemowy iPhone'a).
    <footer className="bg-ink-100 pb-[calc(6rem+env(safe-area-inset-bottom))] text-[15px] text-ink-600 md:pb-0">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-8 border-b border-ink-200 py-12 md:grid-cols-3 md:items-center">
          <div>
            <Logo />
            <p className="mt-3 font-display text-sm font-bold tracking-wide text-ink-800 uppercase">
              Strony internetowe {site.city}
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex flex-wrap items-center gap-2">
              <strong className="text-ink-900">Zadzwoń:</strong>
              <CallButton
                label="pokaż numer"
                showIcon={false}
                className="font-semibold text-accent-600 underline-offset-2 hover:underline"
              />
            </p>
            <p>
              <strong className="text-ink-900">Napisz:</strong>{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-accent-600 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div className="md:text-right">
            <Link href="/bezplatna-wycena" className="btn-grafit">
              Wyceń swój projekt
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold">O nas</h2>
            <p className="mt-4 leading-relaxed">
              Do każdego projektu podchodzimy indywidualnie. Projektujemy, kodujemy
              i uruchamiamy strony, które jasno mówią, czym zajmuje się firma, i zachęcają
              do kontaktu. Pracujemy z firmami z Poznania i okolic, a zdalnie z całej Polski.
            </p>
            <p className="mt-3 font-semibold text-ink-900">Zapraszamy do współpracy!</p>
            {socialLinks.length > 0 ? (
              <ul className="mt-4 flex gap-4">
                {socialLinks.map(([key, url]) => (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-700">
                      {key}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <h2 className="text-lg font-bold">Informacje</h2>
            <ul className="mt-4 space-y-2">
              {footerInfo.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent-700">
                    › {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Oferta</h2>
            <ul className="mt-4 space-y-2">
              {offerMenu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent-700">
                    › {item.label}
                  </Link>
                </li>
              ))}
              {industries.map((industry) => (
                <li key={industry.id}>
                  <Link href={`/${industry.path}`} className="hover:text-accent-700">
                    › {industry.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-200 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · Strony internetowe {site.city}
          </p>
          <Link href="/polityka-prywatnosci" className="hover:text-accent-700">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
