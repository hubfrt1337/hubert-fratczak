import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { OpinionForm } from "@/components/forms/OpinionForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Podziel się opinią",
  description: "Formularz opinii po zakończonym projekcie.",
  // Strona niepromowana — nie ma jej w nawigacji ani w sitemap.
  robots: { index: false, follow: false },
};

export default function OpinionPage() {
  return (
    <main className="min-h-screen bg-ink-50/60 py-12 sm:py-20">
      <Container className="max-w-2xl">
        <Link
          href="/"
          className="font-display text-lg font-bold text-ink-950"
        >
          {site.name}
          <span className="text-accent-600">.</span>
        </Link>

        <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 sm:p-10">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Jak Ci się ze mną pracowało?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Kilka zdań od Ciebie pomaga kolejnym firmom zdecydować, komu zaufać.
            Zajmie to dwie minuty. Opinię opublikuję na stronie dopiero po Twojej
            zgodzie — a jeśli chcesz coś w niej poprawić, po prostu napisz do mnie
            na {site.email}.
          </p>

          <div className="mt-8">
            <OpinionForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
