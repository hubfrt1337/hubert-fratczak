import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/ui/Container";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { getIndustry } from "@/data/branze";
import { breadcrumbJsonLd } from "@/data/jsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Tylko adresy z projects.ts; reszta to 404.
export const dynamicParams = false;

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  const title = `${project.name} (${project.category.split(" · ")[0]}): opis realizacji`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/realizacje/${project.slug}` },
    openGraph: { title, description: project.summary, url: `/realizacje/${project.slug}`, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const industry = project.industry ? getIndustry(project.industry) : null;
  const others = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Realizacje", path: "/#portfolio" },
              { name: project.name, path: `/realizacje/${project.slug}` },
            ]),
          ),
        }}
      />
      <Header />
      <main className="py-12 sm:py-20">
        <Container className="max-w-4xl">
          <nav aria-label="Okruszki" className="text-sm text-ink-500">
            <Link href="/" className="hover:text-accent-700">
              Strona główna
            </Link>{" "}
            ›{" "}
            <Link href="/#portfolio" className="hover:text-accent-700">
              Realizacje
            </Link>{" "}
            › <span className="text-ink-700">{project.name}</span>
          </nav>

          <p className="eyebrow mt-8">{project.category}</p>
          <h1 className="mt-3 text-4xl leading-[1.1] font-bold sm:text-5xl">{project.name}</h1>
          {project.kind ? (
            <p className="mt-4 inline-flex rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
              {project.kind}
            </p>
          ) : null}
          <p className="mt-6 text-lg leading-relaxed text-ink-600">{project.summary}</p>

          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-ink-100 bg-ink-100">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 900px"
              className="object-cover object-top"
            />
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-ink-700">
            <section>
              <h2 className="text-2xl font-bold text-ink-950">Zadanie</h2>
              <p className="mt-4">{project.goal}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink-950">Co jest na stronie</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink-950">Jak to zrobiłem</h2>
              <div className="mt-4 space-y-4">
                {project.approach.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600">
                    {tag}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Zobacz stronę
              <ArrowIcon />
              <span className="sr-only">(otwiera się w nowej karcie)</span>
            </a>
            {industry ? (
              <Link href={`/${industry.path}`} className="btn-secondary">
                {industry.shortName}
              </Link>
            ) : null}
            <a href="#kontakt" className="btn-primary">
              Chcę podobną stronę
              <ArrowIcon />
            </a>
          </div>

          <section className="mt-16 border-t border-ink-100 pt-10">
            <h2 className="text-xl font-bold text-ink-950">Inne realizacje</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/realizacje/${item.slug}`}
                    className="block rounded-xl border border-ink-100 p-4 transition-colors hover:border-ink-300"
                  >
                    <span className="block text-xs text-ink-500">{item.category}</span>
                    <span className="mt-1 block font-semibold text-ink-950">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
