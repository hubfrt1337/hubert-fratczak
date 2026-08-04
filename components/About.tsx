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
                Cześć, jestem {site.name.split(" ")[0]}
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                <p>
                  Od czterech lat zawodowo tworzę strony internetowe. Pracuję na
                  tym samym stacku, na którym stoi ten serwis — Next.js, React
                  i TypeScript — i prowadzę projekt od pierwszej rozmowy, przez
                  makietę i kod, aż po wdrożenie i podpięcie domeny. Bez
                  przekazywania zlecenia dalej i bez tłumaczenia się cudzymi
                  opóźnieniami.
                </p>
                <p>
                  Równolegle rozwijam własny produkt — StwórzCV, kreator CV
                  z podpowiedziami AI, kontami użytkowników i płatnościami
                  online. Dzięki temu codziennie mierzę się dokładnie z tym, co
                  jest ważne dla Twojej strony: szybkością ładowania, widocznością
                  w Google i tym, żeby formularz kontaktowy naprawdę dowoził
                  wiadomości.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Bez pośredników",
                    text: "Rozmawiasz z osobą, która pisze kod.",
                  },
                  {
                    label: "Jasna wycena",
                    text: "Cena i termin ustalone przed startem.",
                  },
                  {
                    label: "Wsparcie po starcie",
                    text: "Nie znikam po przekazaniu dostępów.",
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
