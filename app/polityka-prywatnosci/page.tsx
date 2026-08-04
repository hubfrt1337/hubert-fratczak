import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: `Zasady przetwarzania danych osobowych w serwisie ${site.name}.`,
  alternates: { canonical: "/polityka-prywatnosci" },
};

/**
 * SZABLON DO UZUPEŁNIENIA.
 * To wzór, nie porada prawna — przed publikacją uzupełnij [PLACEHOLDERY]
 * i sprawdź, czy treść odpowiada temu, jak faktycznie przetwarzasz dane
 * (formularze, analityka, hosting).
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-12 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Polityka prywatności</h1>
          <p className="mt-3 text-sm text-ink-500">
            Ostatnia aktualizacja: [DATA_AKTUALIZACJI]
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-700">
            <section>
              <h2 className="text-xl font-semibold">1. Administrator danych</h2>
              <p className="mt-3">
                Administratorem Twoich danych osobowych jest [NAZWA_FIRMY],
                [ADRES_FIRMY], NIP [NIP]. Kontakt w sprawach danych osobowych:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-accent-700 underline underline-offset-2"
                >
                  {site.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                2. Jakie dane zbieram i w jakim celu
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong>Formularz kontaktowy</strong> — imię, adres e-mail,
                  orientacyjny budżet i treść wiadomości. Cel: odpowiedź na
                  zapytanie i przygotowanie oferty (art. 6 ust. 1 lit. b i f
                  RODO).
                </li>
                <li>
                  <strong>Formularz opinii</strong> — imię, nazwa firmy, treść
                  opinii oraz zgoda na publikację. Cel: publikacja referencji na
                  stronie (art. 6 ust. 1 lit. a RODO — zgoda).
                </li>
                <li>
                  <strong>Dane techniczne</strong> — adres IP i informacje o
                  przeglądarce zapisywane automatycznie przez dostawcę hostingu w
                  logach serwera. Cel: bezpieczeństwo i diagnostyka.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">3. Komu przekazuję dane</h2>
              <p className="mt-3">
                Dane trafiają wyłącznie do podmiotów, które są niezbędne do
                działania strony: dostawcy hostingu ([HOSTING — np. Vercel Inc.]),
                dostawcy obsługi formularzy ([DOSTAWCA_FORMULARZY — np. Web3Forms
                lub Formspree]) oraz dostawcy poczty e-mail ([DOSTAWCA_POCZTY]).
                Nie sprzedaję ani nie udostępniam danych w celach marketingowych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                4. Jak długo przechowuję dane
              </h2>
              <p className="mt-3">
                Korespondencję z zapytań przechowuję przez [OKRES — np. 24
                miesiące] od ostatniego kontaktu. Opinie publikowane na stronie —
                do czasu wycofania zgody. Dokumentację rozliczeniową przez okres
                wymagany przepisami podatkowymi (5 lat).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">5. Twoje prawa</h2>
              <p className="mt-3">
                Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
                ograniczenia przetwarzania, przenoszenia oraz wniesienia
                sprzeciwu. Zgodę na publikację opinii możesz wycofać w każdej
                chwili — wystarczy wiadomość na {site.email}, opinia zostanie
                usunięta ze strony. Przysługuje Ci też skarga do Prezesa Urzędu
                Ochrony Danych Osobowych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">6. Pliki cookies</h2>
              <p className="mt-3">
                [UZUPEŁNIJ — opisz stan faktyczny. Jeśli nie używasz analityki ani
                narzędzi marketingowych: „Strona nie używa plików cookies do
                śledzenia użytkowników ani nie korzysta z narzędzi analitycznych.”
                Jeśli podepniesz np. Google Analytics — opisz zakres i dodaj baner
                zgody.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">7. Zmiany polityki</h2>
              <p className="mt-3">
                Polityka może być aktualizowana wraz z rozwojem strony. Aktualna
                wersja jest zawsze dostępna pod tym adresem, z datą ostatniej
                zmiany na górze.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
