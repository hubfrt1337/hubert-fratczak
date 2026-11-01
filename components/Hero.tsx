import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowIcon, CheckIcon } from "./ui/Icons";
import { cheapestPlan } from "@/data/pricing";

/** „Od X zł” w hero zawsze zgadza się z najtańszym pakietem w cenniku. */
const lowestPrice = cheapestPlan.price;

/** Pozycje karty oferty: co dostajesz w jednej płatności. */
const offerRows = [
  { label: "Projekt i wykonanie strony", value: "w cenie" },
  { label: "Hosting i certyfikat SSL", value: "12 mies." },
  { label: "Pełne prawa do strony", value: "po zapłacie" },
  { label: "Poprawki po wdrożeniu", value: "30–90 dni" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                Bez abonamentu i ukrytych opłat
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
                Strona dla Twojej firmy{" "}
                <span className="text-accent-600">— płacisz raz i jest Twoja</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
                Projekt, wykonanie i wdrożenie w jednej cenie, od {lowestPrice} zł.
                Hosting na pierwszy rok w cenie, a po zapłacie pełne prawa do strony
                przechodzą na Ciebie — żadnych miesięcznych opłat.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="btn-primary">
                  Wyceń swoją stronę
                  <ArrowIcon />
                </a>
                <a href="#cennik" className="btn-secondary">
                  Zobacz pakiety
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink-100 pt-6 sm:flex sm:flex-wrap sm:gap-x-10">
                <div>
                  <dt className="text-sm text-ink-500">Płatność</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">jednorazowa</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-500">Hosting</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">rok w cenie</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-500">Cena</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">
                    od {lowestPrice} zł
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-500">Wizytówka gotowa w</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">1–3 dni</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md pt-24 pb-20 lg:max-w-none">
              {/* Zrzuty realizacji w tle — podpowiadają, co dostaje się w pakiecie */}
              <div
                aria-hidden="true"
                className="absolute top-0 -right-4 w-[75%] rotate-6 overflow-hidden rounded-xl border border-ink-100 shadow-lg shadow-ink-950/10"
              >
                <Image
                  src="/portfolio/projekt-6.png"
                  alt=""
                  width={1600}
                  height={900}
                  sizes="320px"
                  className="w-full"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute bottom-0 -left-4 w-[75%] -rotate-6 overflow-hidden rounded-xl border border-ink-100 shadow-lg shadow-ink-950/10"
              >
                <Image
                  src="/portfolio/projekt-4.png"
                  alt=""
                  width={1600}
                  height={900}
                  sizes="320px"
                  className="w-full"
                />
              </div>

              <div className="relative mx-auto w-[90%] rounded-2xl border border-ink-100 bg-white p-6 shadow-2xl shadow-ink-950/15 sm:p-7">
                <p className="text-sm font-semibold text-ink-900">Twoja strona w jednej płatności</p>

                <ul className="mt-5 space-y-3">
                  {offerRows.map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-4 text-sm">
                      <span className="flex items-center gap-2.5 text-ink-700">
                        <CheckIcon className="h-4 w-4 shrink-0 text-accent-600" />
                        {row.label}
                      </span>
                      <span className="shrink-0 font-semibold text-ink-950">{row.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-ink-50 p-4">
                  <p className="text-sm text-ink-500">Płacisz raz, bez abonamentu</p>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-sm text-ink-500">od</span>
                    <span className="font-display text-4xl font-bold text-ink-950">
                      {lowestPrice}
                    </span>
                    <span className="text-sm text-ink-500">zł</span>
                  </p>
                  <p className="mt-2 text-xs text-ink-500">
                    50% na start, reszta po odbiorze gotowej strony.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
