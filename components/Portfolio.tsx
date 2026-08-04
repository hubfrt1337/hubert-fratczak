import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ArrowIcon } from "./ui/Icons";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Realizacje i to, co dały klientom"
          description="Każdy projekt zaczynał się od konkretnego problemu. Poniżej krótko: cel, zakres i efekt."
        />

        {/*
          Karty leżą na wspólnej siatce 6 wierszy (zdjęcie, tytuł, Cel, Zakres,
          Efekt, link), a każda karta przejmuje je przez `grid-rows-subgrid`.
          Dzięki temu te same sekcje w sąsiednich kartach zaczynają się na tej
          samej wysokości, a wszystkie karty mają identyczną wysokość — bez
          skryptów i bez sztywnego min-height.
        */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:grid-rows-[repeat(6,auto)]">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.href}
              delay={index * 0.07}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-lg hover:shadow-ink-950/5 lg:row-span-6 lg:grid lg:grid-rows-subgrid"
            >
              <div className="relative aspect-video w-full border-b border-ink-100 bg-ink-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="px-6 pt-6 text-lg font-semibold">{project.name}</h3>

              {[
                { label: "Cel", value: project.goal },
                { label: "Zakres", value: project.work },
                { label: "Efekt", value: project.result },
              ].map((row) => (
                <div key={row.label} className="mt-4 px-6">
                  <p className="text-sm font-semibold text-ink-900">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    {row.value}
                  </p>
                </div>
              ))}

              {/* mt-auto trzyma link przy dolnej krawędzi karty na wąskich ekranach */}
              <div className="mt-auto px-6 pt-6 pb-6">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-700 hover:text-accent-800"
                >
                  Zobacz na żywo
                  <ArrowIcon />
                  <span className="sr-only">(otwiera się w nowej karcie)</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
