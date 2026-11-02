import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Pricing } from "./Pricing";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ArrowIcon, CheckIcon } from "./ui/Icons";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd } from "@/data/jsonLd";
import type { Industry } from "@/data/branze";

/** Wspólny układ podstron branżowych: hero, „co musi mieć strona”, temat, realizacje, cennik, FAQ, kontakt. */
export function IndustryPage({ industry }: { industry: Industry }) {
  const related = projects.filter((project) => project.industry === industry.id);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: industry.shortName, path: `/${industry.path}` }]),
          ),
        }}
      />
      <Header />
      <main>
        <section className="bg-white pt-12 pb-16 sm:pt-20 sm:pb-20">
          <Container>
            <nav aria-label="Okruszki" className="text-sm text-ink-500">
              <Link href="/" className="hover:text-accent-700">
                Strona główna
              </Link>{" "}
              › <span className="text-ink-700">{industry.shortName}</span>
            </nav>
            <div className="mt-6 max-w-3xl">
              <p className="eyebrow">{industry.eyebrow}</p>
              <h1 className="mt-3 text-4xl leading-[1.1] font-bold sm:text-5xl">{industry.h1}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">{industry.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="btn-primary">
                  Wyceń stronę
                  <ArrowIcon />
                </a>
                <a href="#cennik" className="btn-secondary">
                  Zobacz cennik
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-24">
          <Container>
            <SectionHeading title={industry.mustHaveTitle} />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industry.mustHave.map((item, index) => (
                <Reveal key={item.title} as="li" delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-ink-100 bg-white p-6">
                    <CheckIcon className="h-5 w-5 text-accent-600" />
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{industry.topic.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
              {industry.topic.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        {related.length > 0 ? (
          <section className="pb-16 sm:pb-24">
            <Container>
              <SectionHeading
                eyebrow="Realizacje"
                title="Przykłady stron z tej branży"
                description="Kliknij, żeby zobaczyć, co jest na stronie i dlaczego jest zrobiona właśnie tak."
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/realizacje/${project.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-lg hover:shadow-ink-950/5"
                  >
                    <div className="relative aspect-video w-full border-b border-ink-100 bg-ink-100">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold tracking-wide text-accent-700 uppercase">
                        {project.kind ?? project.category}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent-700 group-hover:text-accent-800">
                        Opis projektu
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <Pricing />
        <Faq items={industry.faq} title="Pytania od właścicieli" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
