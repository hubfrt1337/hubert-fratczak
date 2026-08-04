import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowIcon } from "./ui/Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-20 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                Wolne terminy na najbliższy miesiąc
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
                Robię strony, które przynoszą klientów{" "}
                <span className="text-accent-600">— nie tylko ładnie wyglądają</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
                Wizytówki, sklepy z integracjami i większe serwisy dla małych firm.
                Sam projektuję, sam koduję i sam odbieram telefon — bez pośredników
                i bez agencyjnych narzutów.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="btn-primary">
                  Wyceń swoją stronę
                  <ArrowIcon />
                </a>
                <a href="#portfolio" className="btn-secondary">
                  Zobacz realizacje
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink-100 pt-6">
                <div>
                  <dt className="text-sm text-ink-500">Doświadczenie</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">
                    4 lata
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-500">Odpowiadam w</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">
                    24 h
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-500">Wizytówka gotowa w</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">
                    1–3 dni
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-500">Wycena</dt>
                  <dd className="font-display text-xl font-bold text-ink-950">
                    bezpłatnie
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-3xl bg-ink-50"
              />
              {/* Kolaż z realnych zrzutów realizacji — generuje go `npm run hero` */}
              <Image
                src="/hero.png"
                alt="Zrzuty trzech zrealizowanych stron: Ogólnopolskiego Towarzystwa Szachowego, portfolio modelki Darii Ziętek oraz kreatora CV StwórzCV"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="w-full rounded-2xl shadow-xl shadow-ink-950/10"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
