import type { Metadata } from "next";
import { Strona, Wrap } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { PasKontaktu } from "@/components/sekcje/Bloki";
import { FormularzWyceny } from "@/components/forms/FormularzWyceny";

export const metadata: Metadata = {
  title: "Bezpłatna wycena strony internetowej",
  description:
    "Formularz bezpłatnej wyceny: strona wizytówka, strona firmowa, sklep, system rezerwacji, pozycjonowanie lub Google Ads. Odpowiadamy z ceną w 24 godziny.",
  alternates: { canonical: "/bezplatna-wycena" },
};

export default function WycenaPage() {
  return (
    <Strona>
      <HeroPodstrona
        title="Bezpłatna wycena"
        subtitle="Strona www, sklep, rezerwacje, pozycjonowanie"
        gruby="Ile kosztuje strona internetowa?"
        lekki="odpowiemy w ciągu 24 godzin"
      />
      <section className="bg-ink-50 py-16 sm:py-24">
        <Wrap className="max-w-[960px]">
          <h2 className="h-sekcja">
            Formularz <strong>bezpłatnej wyceny</strong>
          </h2>
          <p className="mt-4 leading-relaxed">
            Wystarczy wybrać rodzaj projektu i podać dane kontaktowe. Pozostałe pola są opcjonalne,
            ale pomagają przygotować dokładniejszą wycenę.
          </p>
          <div className="mt-10 rounded-[10px_30px] bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,110,105,0.35)] sm:p-10">
            <FormularzWyceny />
          </div>
        </Wrap>
      </section>
      <PasKontaktu />
    </Strona>
  );
}
