import Image from "next/image";
import Link from "next/link";
import { Wrap } from "./Strona";

function Tlo({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src="/tla/hero.webp"
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(5,36,36,0.94)_0%,rgba(15,110,105,0.86)_55%,rgba(15,110,105,0.80)_100%)]"
      />
    </>
  );
}

/** Hero strony głównej: zdjęcie na cały ekran, trzy linie nagłówka i dwa pomarańczowe przyciski. */
export function HeroGlowny() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden pt-[88px] pb-16 sm:min-h-[min(100svh,860px)]">
      <Tlo priority />
      <Wrap className="text-center text-white">
        <h1 className="text-[34px] leading-[1.15] font-extrabold text-white sm:text-[54px]">
          Tworzenie stron internetowych Poznań
        </h1>
        <h2 className="mt-6 text-[22px] leading-snug font-light text-white sm:text-[32px]">
          Strony, które <strong className="font-extrabold">pracują na Twoją firmę każdego dnia.</strong>
        </h2>
        <h3 className="mt-3 text-[18px] leading-snug font-light text-white/95 sm:text-[25px]">
          <strong className="font-bold">Płacisz raz,</strong> a strona jest Twoja na zawsze!
        </h3>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link href="#oferta" className="btn-sun min-w-[250px] px-10 py-4 text-base">
            Co oferujemy
          </Link>
          <Link href="#wycena" className="btn-sun min-w-[250px] px-10 py-4 text-base">
            Bezpłatna wycena
          </Link>
        </div>
      </Wrap>
    </section>
  );
}

/**
 * Hero podstrony: tytuł z dopiskiem pod spodem (np. „Poznań oraz cała Polska”)
 * i jedno zdanie z grubą i lekką częścią.
 */
export function HeroPodstrona({
  title,
  subtitle,
  gruby,
  lekki,
}: {
  title: string;
  subtitle?: string;
  gruby?: string;
  lekki?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-[88px]">
      <Tlo priority />
      <Wrap className="py-20 text-center text-white sm:py-28">
        <h1 className="text-[32px] leading-[1.15] font-extrabold text-white sm:text-[50px]">
          {title}
          {subtitle ? (
            <span className="mt-2 block text-[19px] font-light sm:text-[25px]">{subtitle}</span>
          ) : null}
        </h1>
        {gruby || lekki ? (
          <p className="mt-6 font-display text-[19px] leading-snug font-light sm:text-[25px]">
            {gruby ? <strong className="font-bold">{gruby}</strong> : null}
            {gruby && lekki ? ", " : null}
            {lekki ?? null}
          </p>
        ) : null}
      </Wrap>
    </section>
  );
}
