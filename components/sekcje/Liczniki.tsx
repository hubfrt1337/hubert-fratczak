"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { liczniki } from "@/data/wspolne";

/** Liczba, która odlicza od zera, gdy pojawi się na ekranie. */
function Licznik({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1400);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/** Trzy liczniki na zdjęciu w tle. */
export function Liczniki() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <Image src="/tla/liczniki.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-accent-950/85" />
      <div className="mx-auto grid max-w-[1140px] gap-12 px-5 sm:px-8 md:grid-cols-3">
        {liczniki.map((item) => (
          <div key={item.title} className="text-center text-white">
            <p className="font-display text-[64px] leading-none font-extrabold text-sun-400 sm:text-[76px]">
              <Licznik value={item.value} suffix={item.suffix} />
            </p>
            <h3 className="mt-3 text-lg font-bold tracking-wide text-white uppercase">{item.title}</h3>
            <p className="mx-auto mt-4 max-w-[300px] leading-relaxed text-white/80">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
