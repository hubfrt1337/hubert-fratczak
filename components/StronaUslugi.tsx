import type { Metadata } from "next";
import { Strona } from "./sekcje/Strona";
import { HeroPodstrona } from "./sekcje/Hero";
import { ObrazTekst } from "./sekcje/Tekst";
import { WycenaPas } from "./sekcje/WycenaPas";
import { Dlaczego, GranatCechy, PasKontaktu, PasParallax } from "./sekcje/Bloki";
import { Liczniki } from "./sekcje/Liczniki";
import { Realizacje } from "./sekcje/Realizacje";
import { OfertaCta, OfertaFaq, OfertaKafle, OfertaTresc } from "./sekcje/Oferta";
import { breadcrumbJsonLd } from "@/data/jsonLd";
import { getUsluga } from "@/data/uslugi";

export function uslugaMetadata(slug: string): Metadata {
  const u = getUsluga(slug);
  return {
    title: u.metaTitle,
    description: u.metaDescription,
    alternates: { canonical: `/${u.slug}` },
    openGraph: { title: u.metaTitle, description: u.metaDescription, url: `/${u.slug}` },
  };
}

/** Wspólny układ podstron usług (kolejność sekcji jak u dużych agencji). */
export function StronaUslugi({ slug }: { slug: string }) {
  const u = getUsluga(slug);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: u.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <Strona>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd([{ name: u.hero.title, path: `/${u.slug}` }]), faqJsonLd]),
        }}
      />
      <HeroPodstrona title={u.hero.title} subtitle={u.hero.subtitle} gruby={u.hero.gruby} lekki={u.hero.lekki} />
      <ObrazTekst {...u.intro} />
      <WycenaPas />
      <GranatCechy wstep={u.cechyWstep} />
      <PasParallax />
      <Dlaczego />
      <Liczniki />
      <Realizacje lekki="Przykładowe" gruby="realizacje" opis="" limit={4} />
      <OfertaTresc blocks={u.tresc1} />
      <OfertaKafle title={u.etapyTitle} items={u.etapy} numbered />
      <OfertaTresc blocks={u.tresc2} />
      <OfertaFaq items={u.faq} />
      <OfertaCta title={u.ctaTitle} />
      <PasKontaktu />
    </Strona>
  );
}
