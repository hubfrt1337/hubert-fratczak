import Image from "next/image";
import Link from "next/link";
import { Naglowek, Wrap } from "./Strona";
import { Reveal } from "../ui/Reveal";
import { projects, type Project } from "@/data/projects";

function Karta({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[8px_26px] bg-[#f2f6f6] shadow-[0_10px_30px_-18px_rgba(18,22,27,0.35)] transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(15,110,105,0.45)]">
      <Link href={`/realizacje/${project.slug}`} className="relative block aspect-[3/2] overflow-hidden bg-ink-200">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 300px"
          className="object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">
          <Link href={`/realizacje/${project.slug}`} className="hover:text-accent-600">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-ink-500">
          <strong className="font-semibold text-ink-700">Branża:</strong> {project.category.split(" · ")[0]}
        </p>
        <p className="mt-3 line-clamp-4 text-[15px] leading-relaxed">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 text-sm font-bold">
          <Link href={`/realizacje/${project.slug}`} className="text-accent-600 hover:underline">
            Opis projektu ›
          </Link>
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-ink-600 hover:text-ink-900">
            Zobacz stronę
            <span className="sr-only"> {project.name} (otwiera się w nowej karcie)</span>
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Siatka realizacji. `limit` = ile pokazać (podstrony usług pokazują 4 z linkiem do wszystkich).
 * Na końcu siatki karta „Tu może być Twoja strona”.
 */
export function Realizacje({
  lekki = "Przykładowe realizacje:",
  gruby = "strony internetowe dla firm",
  opis = "Strony firmowe, sklepy i aplikacje. Każdą realizację opisaliśmy: jakie było zadanie i jak je rozwiązaliśmy.",
  limit,
  lista,
}: {
  lekki?: string;
  gruby?: string;
  opis?: string;
  limit?: number;
  lista?: Project[];
}) {
  const items = (lista ?? projects).slice(0, limit ?? projects.length);
  const pokazCta = !limit || items.length % 4 !== 0;

  return (
    <section className="py-16 sm:py-24">
      <Wrap className="text-center">
        <Naglowek lekki={lekki} gruby={gruby} center />
        {opis ? <p className="mx-auto mt-4 max-w-3xl leading-relaxed">{opis}</p> : null}
      </Wrap>
      <Wrap szeroki className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={(index % 4) * 0.05}>
              <Karta project={project} />
            </Reveal>
          ))}
          {pokazCta ? (
            <Reveal as="li" delay={0.1}>
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-[8px_26px] bg-accent-600 p-8 text-center text-white">
                <p className="font-display text-2xl font-extrabold text-white">Tu może być Twoja strona</p>
                <p className="mt-3 text-white/85">Opisz projekt, a w ciągu 24 godzin dostaniesz bezpłatną wycenę.</p>
                <Link href="/bezplatna-wycena" className="btn-sun mt-6">
                  Bezpłatna wycena
                </Link>
              </div>
            </Reveal>
          ) : null}
        </ul>
        {limit ? (
          <p className="mt-10 text-center">
            <Link href="/realizacje" className="btn-blue">
              Wszystkie realizacje
            </Link>
          </p>
        ) : null}
      </Wrap>
    </section>
  );
}
