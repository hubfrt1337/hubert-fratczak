import Image from "next/image";
import Link from "next/link";
import { Naglowek, Wrap } from "./Strona";
import { Reveal } from "../ui/Reveal";
import { Ikona, type IkonaNazwa } from "../ui/Icons";
import { CallButton } from "../CallReveal";
import { atuty, technologie, wyroznienia } from "@/data/wspolne";
import { karty } from "@/data/services";
import { site } from "@/data/site";

/** Duża liczba z opisem, obraz po lewej i lista atutów 2×3. */
export function Doswiadczenie({
  liczba = "100%",
  opisGruby = "kodu piszemy od zera",
  opisLekki = "bez gotowych szablonów i dziesiątek wtyczek",
  tekst = "Strona internetowa to nie tylko wizytówka. To miejsce, w którym klient decyduje, czy do Ciebie zadzwoni. Dlatego każdą stronę projektujemy pod konkretną firmę i jej klientów: z jasną ofertą, cenami, zdjęciami i kontaktem na wierzchu. Pracujemy z firmami z Poznania i okolic, a zdalnie z całej Polski.",
}: {
  liczba?: string;
  opisGruby?: string;
  opisLekki?: string;
  tekst?: string;
}) {
  return (
    <section className="bg-ink-50 py-16 sm:py-24">
      <Wrap>
        <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-14">
          <Reveal>
            <div className="leaf-a relative mx-auto aspect-square max-w-sm overflow-hidden bg-accent-950 shadow-xl">
              <Image
                src="/portfolio/projekt-7.png"
                alt="Fragment strony zakładu tapicerskiego wykonanej przez Webuko"
                fill
                sizes="(max-width: 1024px) 80vw, 360px"
                className="scale-[1.35] -rotate-6 object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accent-950/90 to-transparent p-5 pt-16">
                <p className="font-display text-sm font-bold tracking-wide text-white uppercase">
                  Projekt · kod · wdrożenie
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-display text-[72px] leading-none font-extrabold text-accent-600 sm:text-[96px]">
                {liczba}
              </p>
              <h3 className="text-[20px] leading-snug font-light sm:text-[24px]">
                <strong className="font-extrabold">{opisGruby}</strong>
                <br />
                {opisLekki}
              </h3>
            </div>
            <p className="mt-6 leading-relaxed">{tekst}</p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {atuty.map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-ink-900">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px_3px] bg-sun-400 text-accent-900">
                    <Ikona name="ptaszek" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}

/** Pas ze zdjęciem w tle, które stoi w miejscu przy przewijaniu. */
export function PasParallax() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[260px] bg-cover bg-center sm:h-[400px] md:bg-fixed"
      style={{ backgroundImage: "url('/tla/pas.webp')" }}
    >
      <div className="absolute inset-0 bg-accent-950/35" />
    </div>
  );
}

/** Osiem kart usług z ikonami, na przemian zaokrąglone „liściem”. */
export function KartyUslug({ id = "oferta" }: { id?: string }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Wrap szeroki>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {karty.map((card, index) => (
            <Reveal as="li" key={card.title} delay={(index % 4) * 0.05}>
              <article
                className={`group flex h-full flex-col items-center border border-ink-100 bg-white px-6 py-9 text-center shadow-[0_18px_50px_-24px_rgba(15,110,105,0.35)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(15,110,105,0.45)] ${
                  index % 2 ? "leaf-b" : "leaf-a"
                }`}
              >
                <span className="flex h-[68px] w-[68px] items-center justify-center rounded-[20px_6px] bg-accent-50 text-accent-600 transition-colors group-hover:bg-sun-400 group-hover:text-accent-900">
                  <Ikona name={card.icon} className="h-9 w-9" strokeWidth={1.4} />
                </span>
                <h3 className="mt-6 text-lg font-bold">
                  <Link href={card.href} className="text-accent-700 hover:text-accent-500">
                    {card.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}

/** Granatowa sekcja z ikonami cech, opcjonalnie z wstępem (nagłówek, akapity, lista). */
export function GranatCechy({
  lekki = "Co wyróżnia",
  gruby = "nasze strony www",
  items = wyroznienia,
  wstep,
}: {
  lekki?: string;
  gruby?: string;
  items?: { title: string; icon: IkonaNazwa; href?: string }[];
  wstep?: { title: string; paragraphs: string[]; bullets?: string[] };
}) {
  return (
    <section className="bg-accent-700 py-16 text-white sm:py-24">
      <Wrap>
        {wstep ? (
          <Reveal className="mb-16 border-b border-white/15 pb-14">
            <h2 className="h-sekcja text-white">
              <strong>{wstep.title}</strong>
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-white/90">
              {wstep.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {wstep.bullets ? (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {wstep.bullets.map((b) => (
                  <li key={b} className="flex gap-3 font-medium">
                    <Ikona name="ptaszek" className="mt-0.5 h-5 w-5 shrink-0 text-sun-400" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ) : null}

        <Naglowek lekki={lekki} gruby={gruby} center white />
        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 3) * 0.05} className="text-center">
              <Ikona name={item.icon} className="mx-auto h-16 w-16 text-sun-400" strokeWidth={1.1} />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.href ? (
                  <Link href={item.href} className="hover:text-sun-300">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
            </Reveal>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}

/** „Dlaczego warto zaufać właśnie nam?”: trzy karty, środkowa biała z przyciskiem. */
export function Dlaczego() {
  return (
    <section className="py-16 sm:py-24">
      <Wrap>
        <Naglowek lekki="Dlaczego warto" gruby="zaufać właśnie nam" po="?" center />
      </Wrap>
      <Wrap szeroki className="mt-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="leaf-b bg-accent-600 p-8 text-white sm:p-10">
            <h3 className="text-xl font-bold text-white">Wizerunek firmy w internecie</h3>
            <p className="mt-4 leading-relaxed text-white/90">
              <strong className="text-white">Szukasz kogoś, kto zrobi albo odświeży stronę Twojej firmy?</strong>{" "}
              Nie wiesz, od czego zacząć i co wybrać? Opowiedz nam o swojej firmie i klientach.
              Doradzimy rozwiązanie na miarę budżetu, a Ty zajmiesz się tym, co robisz najlepiej.
            </p>
          </Reveal>
          <Reveal
            delay={0.05}
            className="leaf-a flex flex-col border border-ink-100 bg-white p-8 shadow-[0_18px_50px_-24px_rgba(15,110,105,0.35)] sm:p-10"
          >
            <h3 className="text-xl font-bold">Strony internetowe {site.city}</h3>
            <p className="mt-4 flex-1 leading-relaxed">
              <strong className="text-ink-900">Spodobały Ci się nasze realizacje?</strong> Każdą z nich
              opisaliśmy krok po kroku: jakie było zadanie, co jest na stronie i dlaczego zrobiliśmy ją
              właśnie tak. Zobacz, jak może wyglądać strona Twojej firmy.
            </p>
            <Link href="/realizacje" className="btn-sun mt-6 self-center">
              Zobacz realizacje
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="leaf-b flex flex-col bg-accent-600 p-8 text-white sm:p-10">
            <h3 className="text-xl font-bold text-white">Tworzenie stron www</h3>
            <p className="mt-4 flex-1 leading-relaxed text-white/90">
              Chcesz mieć profesjonalną stronę, opiekę po uruchomieniu i to wszystko w uczciwej,
              stałej cenie? <strong className="text-white">Jeśli odpowiedź brzmi TAK, zadzwoń do nas.</strong>
            </p>
            <CallButton className="btn-sun mt-6 self-start" label="Zadzwoń teraz" />
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}

/** Pomarańczowa sekcja: biała karta z tekstem pod SEO i lista technologii obok. */
export function ZoltaKarta() {
  return (
    <section className="bg-sun-400 py-16 sm:py-24">
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <Reveal className="leaf-b bg-white p-7 shadow-2xl shadow-black/10 sm:p-10 lg:col-span-2">
            <h2 className="text-[26px] leading-tight font-light sm:text-[32px]">
              <strong className="font-extrabold">Strony internetowe {site.city}</strong>
              <span className="mt-1 block text-[20px] sm:text-[24px]">pokaż swoją firmę z najlepszej strony</span>
            </h2>
            <div className="tresc mt-6 leading-relaxed">
              <p>
                <strong>Tworzenie stron internetowych</strong> dla lokalnych firm to coś więcej niż ładny
                wygląd. Klient z Poznania, który wpisuje w Google „hydraulik Grunwald” albo „salon rzęs
                Jeżyce”, w kilka sekund decyduje, do kogo zadzwoni. Wygrywa strona, która od razu pokazuje
                ofertę, ceny, opinie i numer telefonu.
              </p>
              <p>
                Dlatego <strong>tworzenie stron internetowych w Poznaniu</strong> zaczynamy od rozmowy
                o Twoich klientach: czego szukają, o co pytają przez telefon i co ich przekonuje. Z tego
                powstają teksty, układ i zdjęcia. Stronę piszemy od zera w nowoczesnej technologii,
                więc ładuje się szybko nawet na słabym internecie w telefonie.
              </p>
              <h3 className="mt-8 mb-3 text-xl font-bold">Nowoczesne rozwiązania</h3>
              <p>
                Poza stronami wizytówkami budujemy systemy rezerwacji online, panele dla klientów,
                kalkulatory i sklepy z płatnościami BLIK. Bez abonamentu za cudzy system i bez prowizji
                od każdej wizyty. Wszystko w kolorach Twojej marki i z myślą o widoczności w Google.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="text-[24px] font-extrabold text-accent-900">Nowoczesne technologie:</h3>
            <ul className="mt-6 space-y-6">
              {technologie.map((tech) => (
                <li key={tech.name} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px_3px] bg-accent-800 text-sun-400">
                    <Ikona name="kod" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-accent-950">{tech.name}</h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-accent-950/80">{tech.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}

/** Pas kontaktu na zdjęciu: cztery pytania po lewej, telefon, mail i wycena po prawej. */
export function PasKontaktu() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      <Image src="/tla/kontakt.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-accent-950/88" />
      <Wrap>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-2 font-display text-[22px] leading-snug font-light text-white sm:text-[28px]">
            <p>
              Chcesz otrzymać <strong className="font-extrabold text-sun-400">wycenę</strong>?
            </p>
            <p>
              Chcesz <strong className="font-extrabold text-sun-400">porozmawiać o projekcie</strong>?
            </p>
            <p>
              Potrzebujesz <strong className="font-extrabold text-sun-400">skutecznej strony</strong>?
            </p>
            <p className="pt-2 text-[18px] sm:text-[22px]">
              <strong className="font-extrabold">Napisz</strong> lub{" "}
              <strong className="font-extrabold">zadzwoń</strong> do nas!
            </p>
          </div>
          <ul className="space-y-5">
            {[
              {
                icon: "dymek" as const,
                content: (
                  <CallButton
                    label="Zadzwoń do nas"
                    showIcon={false}
                    className="font-display text-[26px] font-extrabold text-white hover:text-sun-300 sm:text-[32px]"
                  />
                ),
              },
              {
                icon: "mail" as const,
                content: (
                  <a href={`mailto:${site.email}`} className="text-lg font-bold text-white hover:text-sun-300 sm:text-xl">
                    {site.email}
                  </a>
                ),
              },
              {
                icon: "dokument" as const,
                content: (
                  <Link href="/bezplatna-wycena" className="text-lg font-bold text-white hover:text-sun-300 sm:text-xl">
                    Formularz bezpłatnej wyceny ›
                  </Link>
                ),
              },
            ].map((row) => (
              <li key={row.icon} className="flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px_5px] bg-sun-400 text-accent-900">
                  <Ikona name={row.icon} className="h-6 w-6" strokeWidth={1.8} />
                </span>
                {row.content}
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </section>
  );
}

/** Kroki z dużymi numerami „.01”, „.02”… (strona Oferta i Współpraca). */
export function KrokiNumerowane({
  wstep,
  lekki,
  gruby,
  kroki,
}: {
  wstep?: string;
  lekki?: string;
  gruby?: string;
  kroki: { title: string; text: string }[];
}) {
  return (
    <section className="bg-gradient-to-b from-white to-ink-50 py-16 sm:py-24">
      <Wrap>
        {gruby ? <Naglowek lekki={lekki} gruby={gruby} className="mb-6" /> : null}
        {wstep ? <p className="max-w-4xl text-[18px] leading-relaxed">{wstep}</p> : null}
        <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {kroki.map((krok, index) => (
            <Reveal as="li" key={krok.title} delay={(index % 3) * 0.05}>
              <p className="font-display text-[48px] leading-none font-extrabold text-accent-200">
                .{String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[21px] font-bold">{krok.title}</h3>
              <p className="mt-3 leading-relaxed">{krok.text}</p>
            </Reveal>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}
