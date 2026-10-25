import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowIcon } from "./ui/Icons";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="o-mnie" className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <Image
                src="/authorHubert.png"
                alt={`${site.name} — zdjęcie portretowe`}
                width={800}
                height={800}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">O mnie</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {site.name} — strony, aplikacje i marketing internetowy
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                <p>
                  Projektuję i buduję strony firmowe, sklepy oraz aplikacje webowe
                  w Next.js, React i TypeScript. Odpowiadam za cały proces: projekt
                  graficzny, kod, wdrożenie, domenę i hosting — a potem za to, żeby
                  strona przyprowadzała klientów.
                </p>
                <p>
                  Na co dzień rozwijam własną aplikację SaaS (StwórzCV) z płatnościami
                  subskrypcyjnymi, dwiema wersjami językowymi i kampaniami Google Ads
                  rozliczanymi do realnej sprzedaży. To samo podejście stosuję
                  u klientów: liczą się zapytania i sprzedaż, a nie sam ruch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    label: "Strony firmowe i landing page",
                    text: "Indywidualny projekt, szybkie ładowanie, wygoda na telefonie.",
                  },
                  {
                    label: "Sklepy internetowe",
                    text: "Płatności (Stripe, Przelewy24, BLIK), wysyłki i integracje.",
                  },
                  {
                    label: "Aplikacje webowe",
                    text: "Systemy rezerwacji, panele klienta, konta i płatności cykliczne.",
                  },
                  {
                    label: "SEO",
                    text: "Audyt techniczny, indeksacja, Search Console, treści pod frazy.",
                  },
                  {
                    label: "Google Ads",
                    text: "Kampanie w wyszukiwarce, wykluczenia, koszt liczony do sprzedaży.",
                  },
                  {
                    label: "Analityka",
                    text: "GA4 i Tag Manager — pomiar formularzy, telefonów i zakupów.",
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-ink-100 bg-ink-50/60 p-4"
                  >
                    <p className="text-sm font-semibold text-ink-950">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-ink-600">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 text-sm text-ink-500">
                Technologie: Next.js · React · TypeScript · Tailwind CSS · Supabase ·
                Stripe · Vercel · Cloudflare · GA4 · Google Ads
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <a href="#kontakt" className="btn-primary mt-8">
                Porozmawiajmy o Twoim projekcie
                <ArrowIcon />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
