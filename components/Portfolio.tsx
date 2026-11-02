"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ArrowIcon, ChevronIcon } from "./ui/Icons";
import { projects } from "@/data/projects";

/** Co ile karuzela sama przewija o jedną kartę. */
const AUTOPLAY_MS = 4500;

/** Pozycja przewinięcia, przy której karta stoi równo z lewym marginesem toru. */
function cardStart(track: HTMLElement, card: HTMLElement) {
  const padding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
  return card.offsetLeft - track.offsetLeft - padding;
}

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // Pauza, gdy ktoś najechał, dotknął albo przewija klawiaturą — nie zabieramy mu karty sprzed oczu.
  const [paused, setPaused] = useState(false);

  const cards = () =>
    Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const list = cards();
    if (!track || list.length === 0) return;
    const next = (index + list.length) % list.length;
    const target = list[next];
    // Ustawiamy od razu — nie czekamy na zdarzenie scroll (przy skoku bez animacji bywa pomijane).
    setActive(next);
    // Przy systemowym „ogranicz animacje” karuzela przeskakuje bez płynnego przewijania.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: cardStart(track, target), behavior: reduced ? "auto" : "smooth" });
  }, []);

  // Na komputerze widać kilka kart naraz — gdy tor dojechał do końca, „dalej” wraca na początek.
  const next = () => {
    const track = trackRef.current;
    const atEnd = track ? track.scrollLeft + track.clientWidth >= track.scrollWidth - 4 : false;
    goTo(atEnd ? 0 : active + 1);
  };

  // Aktywna karta = ta, której lewa krawędź jest najbliżej początku toru.
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const list = cards();
    let best = 0;
    let bestDistance = Infinity;
    list.forEach((card, index) => {
      const distance = Math.abs(cardStart(track, card) - track.scrollLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    // Na końcu toru ostatnie karty nie dojadą do lewej krawędzi — wtedy aktywna jest ostatnia.
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) best = list.length - 1;
    setActive(best);
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      next();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [active, paused, goTo]);

  return (
    <section id="portfolio" className="overflow-hidden py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Wybrane projekty"
            description="Strony firmowe, serwisy i aplikacje webowe: od projektu graficznego, przez kod, po SEO, analitykę i kampanie."
          />
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 transition-colors hover:border-ink-300 hover:bg-ink-50"
              aria-label="Poprzedni projekt"
            >
              <ChevronIcon className="h-5 w-5 rotate-90" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 transition-colors hover:border-ink-300 hover:bg-ink-50"
              aria-label="Następny projekt"
            >
              <ChevronIcon className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>

        <Reveal delay={0.05}>
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="karuzela"
            aria-label="Realizacje"
            tabIndex={0}
            onScroll={onScroll}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <article
                key={project.name}
                aria-roledescription="slajd"
                aria-label={`${index + 1} z ${projects.length}: ${project.name}`}
                className="relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-lg hover:shadow-ink-950/5 sm:w-[60%] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <div className="relative aspect-video w-full border-b border-ink-100 bg-ink-100">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 400px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold tracking-wide text-accent-700 uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {project.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
                    <Link
                      href={`/realizacje/${project.slug}`}
                      className="inline-flex items-center gap-2 text-accent-700 hover:text-accent-800"
                    >
                      Opis projektu
                      <ArrowIcon />
                      <span className="sr-only">: {project.name}</span>
                    </Link>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-600 hover:text-ink-950"
                    >
                      Zobacz stronę
                      <span className="sr-only"> {project.name} (otwiera się w nowej karcie)</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              tabIndex={-1}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-6 bg-accent-600" : "w-2 bg-ink-200 hover:bg-ink-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
