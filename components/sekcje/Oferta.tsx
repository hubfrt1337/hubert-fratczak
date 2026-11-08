import Link from "next/link";
import { Wrap } from "./Strona";
import { Reveal } from "../ui/Reveal";
import { Ikona, type IkonaNazwa } from "../ui/Icons";

export type Kafel = { title: string; text: string; icon?: IkonaNazwa };
export type BlokTresci = { title: string; paragraphs?: string[]; bullets?: string[]; ordered?: string[] };
export type Pytanie = { question: string; answer: string };

/** Kafle z ikoną w kółku (rodzaje stron, etapy, zakres usługi). */
export function OfertaKafle({
  title,
  intro,
  items,
  numbered = false,
}: {
  title: string;
  intro?: string;
  items: Kafel[];
  numbered?: boolean;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Wrap>
        <h2 className="text-[26px] font-bold sm:text-[30px]">{title}</h2>
        {intro ? <p className="mt-3 max-w-4xl leading-relaxed">{intro}</p> : null}
        <ul className={`mt-10 grid gap-6 ${items.length % 3 === 0 || items.length === 5 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 3) * 0.05}>
              <div className="flex h-full gap-5 rounded-[8px_26px] border border-ink-200/70 bg-[#f2f6f6] p-6 shadow-[0_10px_30px_-22px_rgba(18,22,27,0.4)] sm:p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px_5px] bg-white text-accent-600 shadow-md shadow-ink-900/5">
                  {numbered ? (
                    <span className="font-display text-lg font-extrabold">{index + 1}</span>
                  ) : (
                    <Ikona name={item.icon ?? "ptaszek"} className="h-7 w-7" />
                  )}
                </span>
                <div>
                  <h3 className="text-[19px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}

/** Bloki tekstu z nagłówkami, listami punktowanymi (w dwóch kolumnach) i numerowanymi. */
export function OfertaTresc({ blocks }: { blocks: BlokTresci[] }) {
  return (
    <section className="py-12 sm:py-16">
      <Wrap className="space-y-12">
        {blocks.map((block) => (
          <Reveal key={block.title}>
            <h2 className="text-[26px] font-bold sm:text-[30px]">{block.title}</h2>
            {block.paragraphs ? (
              <div className="tresc mt-4 leading-relaxed">
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : null}
            {block.bullets ? (
              <ul className="mt-5 grid gap-x-10 gap-y-3 md:grid-cols-2">
                {block.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Ikona name="ptaszek" className="mt-1 h-5 w-5 shrink-0 text-accent-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {block.ordered ? (
              <ol className="mt-5 space-y-3">
                {block.ordered.map((b, i) => (
                  <li key={b} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px_3px] bg-accent-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            ) : null}
          </Reveal>
        ))}
      </Wrap>
    </section>
  );
}

/** Pytania i odpowiedzi w harmonijce (pierwsze otwarte). */
export function OfertaFaq({ title = "Pytania i odpowiedzi", items }: { title?: string; items: Pytanie[] }) {
  return (
    <section id="faq" className="bg-ink-50 py-16 sm:py-20">
      <Wrap>
        <h2 className="text-[26px] font-bold sm:text-[30px]">{title}</h2>
        <div className="mt-8 space-y-3">
          {items.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-[6px_20px] border border-ink-200 bg-white open:shadow-[0_10px_30px_-20px_rgba(15,110,105,0.45)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <h3 className="font-display text-[17px] font-bold text-accent-700 group-open:text-accent-600 sm:text-lg">
                  {item.question}
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent-600 text-accent-600 transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed sm:px-6">{item.answer}</p>
            </details>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/** Pomarańczowy pas wezwania do działania na końcu podstrony. */
export function OfertaCta({
  title = "Bezpłatna wycena strony internetowej",
  text = "Opisz krótko firmę i to, czego potrzebujesz. W ciągu 24 godzin odpiszemy z konkretną ceną i terminem. Możesz też skorzystać z pełnego formularza wyceny.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-sun-400 py-16 sm:py-20">
      <div className="mx-auto max-w-[780px] px-5 text-center sm:px-8">
        <h2 className="text-[26px] font-extrabold text-accent-950 sm:text-[32px]">{title}</h2>
        <p className="mt-4 leading-relaxed text-accent-950/85">{text}</p>
        <Link href="/bezplatna-wycena" className="btn-blue mt-8 px-10 py-4">
          Bezpłatna wycena
        </Link>
      </div>
    </section>
  );
}
