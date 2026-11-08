import type { Metadata } from "next";
import { Strona } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { OfertaFaq } from "@/components/sekcje/Oferta";
import { Dlaczego, PasKontaktu, PasParallax } from "@/components/sekcje/Bloki";
import { faq } from "@/data/faq";
import { uslugi } from "@/data/uslugi";

export const metadata: Metadata = {
  title: "Najczęściej zadawane pytania o strony www",
  description:
    "Odpowiedzi na pytania o strony internetowe: ceny, terminy, hosting, domena, poprawki, prawa do strony, płatność, panel do edycji, SEO i reklamy.",
  alternates: { canonical: "/faq" },
};

/** Ogólne pytania + wybrane pytania z podstron usług (bez powtórek). */
const pytania = [
  ...faq,
  ...uslugi.flatMap((u) => u.faq).filter((q, i, all) => all.findIndex((x) => x.question === q.question) === i),
].filter((q, i, all) => all.findIndex((x) => x.question === q.question) === i);

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pytania.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
  };
  return (
    <Strona>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroPodstrona title="Najczęściej zadawane pytania" />
      <OfertaFaq title="Pytania o strony internetowe" items={pytania} />
      <PasParallax />
      <Dlaczego />
      <PasKontaktu />
    </Strona>
  );
}
