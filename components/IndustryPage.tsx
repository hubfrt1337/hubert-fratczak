import { Strona } from "./sekcje/Strona";
import { HeroPodstrona } from "./sekcje/Hero";
import { WycenaPas } from "./sekcje/WycenaPas";
import { Dlaczego, PasKontaktu } from "./sekcje/Bloki";
import { Liczniki } from "./sekcje/Liczniki";
import { Realizacje } from "./sekcje/Realizacje";
import { OfertaCta, OfertaFaq, OfertaKafle, OfertaTresc } from "./sekcje/Oferta";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd } from "@/data/jsonLd";
import type { Industry } from "@/data/branze";

/** Podstrony branżowe w układzie podstron usług. */
export function IndustryPage({ industry }: { industry: Industry }) {
  const related = projects.filter((project) => project.industry === industry.id);

  return (
    <Strona>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: industry.shortName, path: `/${industry.path}` }])),
        }}
      />
      <HeroPodstrona title={industry.h1} subtitle="Poznań oraz cała Polska" lekki={industry.eyebrow} />
      <OfertaTresc blocks={[{ title: industry.eyebrow, paragraphs: [industry.lead] }]} />
      <OfertaKafle title={industry.mustHaveTitle} items={industry.mustHave.map((m) => ({ ...m, icon: "ptaszek" as const }))} />
      <WycenaPas />
      <OfertaTresc blocks={[{ title: industry.topic.title, paragraphs: industry.topic.paragraphs }]} />
      {related.length > 0 ? (
        <Realizacje lekki="Przykłady stron" gruby="z tej branży" opis="" lista={related} limit={related.length} />
      ) : null}
      <Dlaczego />
      <Liczniki />
      <OfertaFaq title="Pytania od właścicieli" items={industry.faq} />
      <OfertaCta />
      <PasKontaktu />
    </Strona>
  );
}
