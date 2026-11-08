import type { Metadata } from "next";
import { Strona, Wrap } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { Dlaczego, KartyUslug, PasKontaktu } from "@/components/sekcje/Bloki";
import { BudgetCta } from "@/components/BudgetCta";
import { Reveal } from "@/components/ui/Reveal";
import { Ikona } from "@/components/ui/Icons";
import { plans, pricingNote, pricingTerms } from "@/data/pricing";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cennik stron internetowych Poznań",
  description:
    "Cennik stron www: wizytówka 1 490 zł, strona firmowa 2 950 zł, sklep od 5 000 zł. Płatność jednorazowa, bez abonamentu, hosting na rok w cenie, bez doliczania VAT.",
  alternates: { canonical: "/strony-www-cennik" },
};

export default function CennikPage() {
  return (
    <Strona>
      <HeroPodstrona
        title="Profesjonalne strony www"
        subtitle="Uczciwe ceny, wysoka jakość"
        gruby="Chcesz wiedzieć, ile będzie kosztować Twoja strona?"
        lekki="zobacz cennik albo poproś o bezpłatną wycenę"
      />

      <section className="bg-gradient-to-b from-white to-ink-50 py-16 sm:py-24">
        <Wrap>
          <h2 className="h-sekcja text-center">
            Ceny stron internetowych <strong>Poznań</strong>
          </h2>
          <p className="mt-3 text-center">Wycena jest bezpłatna i niezobowiązująca. Nie doliczamy VAT, więc to kwoty końcowe.</p>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2">
            {pricingTerms.map((term) => (
              <li key={term} className="flex items-center gap-2 text-sm font-semibold text-ink-800">
                <Ikona name="ptaszek" className="h-5 w-5 text-accent-600" />
                {term}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.06}>
                <article
                  className={`flex h-full flex-col p-7 sm:p-8 ${index % 2 ? "leaf-b" : "leaf-a"} ${
                    plan.highlighted
                      ? "bg-accent-600 text-white shadow-2xl shadow-accent-900/30"
                      : "border border-ink-100 bg-white shadow-[0_18px_50px_-24px_rgba(15,110,105,0.35)]"
                  }`}
                >
                  {plan.highlighted ? (
                    <span className="mb-3 self-start rounded-[8px_3px] bg-sun-400 px-3 py-1 text-xs font-extrabold text-accent-900 uppercase">
                      Najczęściej wybierana
                    </span>
                  ) : null}
                  <h3 className={`text-2xl font-extrabold ${plan.highlighted ? "text-white" : ""}`}>{plan.name}</h3>
                  <p className={`mt-1 text-sm ${plan.highlighted ? "text-white/80" : "text-ink-500"}`}>{plan.tagline}</p>
                  <p className="mt-5 flex items-baseline gap-1.5">
                    {plan.priceFrom ? <span className="text-sm">od</span> : null}
                    <span className={`font-display text-4xl font-extrabold ${plan.highlighted ? "text-sun-400" : "text-accent-600"}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm">zł</span>
                  </p>
                  <p className={`mt-1 text-sm ${plan.highlighted ? "text-white/80" : "text-ink-500"}`}>
                    płatność jednorazowa · realizacja {plan.time}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px]">
                        <Ikona
                          name="ptaszek"
                          className={`mt-0.5 h-5 w-5 shrink-0 ${plan.highlighted ? "text-sun-400" : "text-accent-600"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <BudgetCta budget={plan.budgetHint} href="/bezplatna-wycena" className="btn-sun mt-7 w-full">
                    Zapytaj o wycenę
                  </BudgetCta>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="leaf-b border border-ink-100 bg-white p-7">
              <h3 className="text-xl font-extrabold">Aplikacje i systemy rezerwacji</h3>
              <p className="mt-2 leading-relaxed">
                Panele klienta, kalkulatory, rezerwacje online, konta użytkowników i płatności cykliczne.
                Wycena indywidualna, po rozmowie o tym, jak działa Twoja firma.
              </p>
              <Link href="/systemy-rezerwacji-online" className="mt-4 inline-block font-bold text-accent-600 hover:underline">
                Systemy rezerwacji ›
              </Link>
            </div>
            <div className="leaf-a border border-ink-100 bg-white p-7">
              <h3 className="text-xl font-extrabold">Hosting i domeny</h3>
              <p className="mt-2 leading-relaxed">
                Pierwszy rok hostingu i certyfikatu SSL jest w cenie każdej strony. Potem koszt podajemy
                z góry albo przenosisz stronę, gdzie chcesz. Domenę rejestrujemy na Twoje dane.
              </p>
              <Link href="/hosting" className="mt-4 inline-block font-bold text-accent-600 hover:underline">
                Hosting i domeny ›
              </Link>
            </div>
          </div>

          {pricingNote ? <p className="mt-10 text-center text-sm text-ink-500">{pricingNote}</p> : null}
        </Wrap>
      </section>

      <KartyUslug id="uslugi" />
      <Dlaczego />
      <PasKontaktu />
    </Strona>
  );
}
