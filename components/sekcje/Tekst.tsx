import Image from "next/image";
import { Naglowek, Wrap } from "./Strona";
import { Reveal } from "../ui/Reveal";
import { Ikona } from "../ui/Icons";

/** Sekcja tekstowa: nagłówek i akapity, tło przechodzi z białego w jasnoszare. */
export function Tekst({
  lekki,
  gruby,
  children,
}: {
  lekki?: string;
  gruby?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-white to-ink-50 py-16 sm:py-20">
      <Wrap>
        <Reveal>
          {gruby ? <Naglowek lekki={lekki} gruby={gruby} className="mb-6" /> : null}
          <div className="tresc text-[17px] leading-relaxed">{children}</div>
        </Reveal>
      </Wrap>
    </section>
  );
}

/** Zrzut realizacji obok tekstu (podstrony usług). */
export function ObrazTekst({
  image,
  imageAlt,
  lekki,
  gruby,
  paragraphs,
  bullets,
}: {
  image: string;
  imageAlt: string;
  lekki?: string;
  gruby: string;
  paragraphs: string[];
  bullets?: string[];
}) {
  return (
    <section className="py-16 sm:py-24">
      <Wrap>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="leaf-a relative overflow-hidden bg-accent-950 shadow-2xl shadow-accent-900/25">
              <Image
                src={image}
                alt={imageAlt}
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 92vw, 460px"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <Naglowek lekki={lekki} gruby={gruby} />
            <div className="tresc mt-6 leading-relaxed">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {bullets ? (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] font-medium text-ink-800">
                    <Ikona name="ptaszek" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
