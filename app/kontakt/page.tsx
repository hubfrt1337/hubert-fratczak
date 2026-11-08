import type { Metadata } from "next";
import Link from "next/link";
import { Strona, Wrap } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CallButton } from "@/components/CallReveal";
import { Ikona } from "@/components/ui/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt: strony internetowe Poznań",
  description:
    "Skontaktuj się z Webuko: telefon, e-mail lub formularz. Bezpłatna wycena strony internetowej w 24 godziny. Poznań i cała Polska.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <Strona>
      <HeroPodstrona
        title="Kontakt"
        gruby="Skontaktuj się z nami"
        lekki="porozmawiamy o stronie dla Twojej firmy"
      />
      <section className="py-16 sm:py-24">
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="leading-relaxed">
                Nowoczesne, czytelne i wygodne na telefonie: takie strony projektujemy. Jeśli spodobały
                Ci się nasze <Link href="/realizacje" className="font-semibold text-accent-600 hover:underline">realizacje</Link>{" "}
                i chcesz porozmawiać o współpracy, zadzwoń albo napisz. Przygotujemy bezpłatną wycenę
                po krótkiej rozmowie o Twojej firmie i oczekiwaniach.
              </p>
              <div className="leaf-b mt-8 space-y-5 bg-accent-600 p-7 text-white">
                <p className="font-display text-xl font-extrabold text-white">Webuko · Strony internetowe</p>
                <p className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px_4px] bg-sun-400 text-accent-900">
                    <Ikona name="dymek" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span>
                    <CallButton label="Pokaż numer telefonu" showIcon={false} className="text-lg font-bold text-white underline-offset-4 hover:underline" />
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px_4px] bg-sun-400 text-accent-900">
                    <Ikona name="mail" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <a href={`mailto:${site.email}`} className="text-lg font-bold text-white hover:underline">
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px_4px] bg-sun-400 text-accent-900">
                    <Ikona name="pinezka" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-lg font-bold">{site.city} i okolice, zdalnie cała Polska</span>
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-500">
                Spotkania umawiamy telefonicznie. Aby otrzymać wycenę, wyślij zapytanie mailem, przez
                formularz albo zadzwoń.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-[10px_30px] border border-ink-100 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,110,105,0.35)] sm:p-8">
                <h2 className="mb-6 text-2xl font-extrabold">Napisz do nas</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Wrap>
      </section>
    </Strona>
  );
}
