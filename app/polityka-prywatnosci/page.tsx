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
 * Treść odpowiada stanowi faktycznemu: hosting Vercel, formularze Web3Forms,
 * poczta Zoho, brak analityki i cookies. Jeśli to się zmieni (np. dodasz
 * Google Analytics albo Pixel Meta) — zaktualizuj sekcje 3 i 6 oraz datę.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-12 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Polityka prywatności</h1>
          <p className="mt-3 text-sm text-ink-500">
            Ostatnia aktualizacja: 10 października 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-700">
            <section>
              <h2 className="text-xl font-semibold">1. Administrator danych</h2>
              <p className="mt-3">
                Administratorem Twoich danych osobowych jest {site.name}, ul. Robocza
                21a, Poznań. Usługi świadczę w ramach działalności nierejestrowanej
                (art. 5 ustawy Prawo przedsiębiorców), dlatego nie posługuję się
                numerem NIP ani REGON. Kontakt w sprawach danych osobowych:{" "}
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
                  numer telefonu (jeśli go podasz), orientacyjny budżet i treść wiadomości. Cel: odpowiedź na
                  zapytanie i przygotowanie oferty (art. 6 ust. 1 lit. b i f
                  RODO).
                </li>
                <li>
                  <strong>Kontakt e-mailowy i telefoniczny</strong> — dane, które
                  sam przekażesz: imię, adres e-mail, numer telefonu i treść
                  rozmowy lub wiadomości. Cel: odpowiedź na zapytanie i
                  przygotowanie oferty (art. 6 ust. 1 lit. b i f RODO).
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
                działania strony: dostawcy hostingu (Vercel Inc.), dostawcy obsługi
                formularzy (Web3Forms) oraz dostawcy poczty e-mail (Zoho
                Corporation B.V., serwery w Unii Europejskiej). Część z nich może
                przetwarzać dane poza Europejskim Obszarem Gospodarczym — odbywa
                się to wyłącznie na podstawie mechanizmów przewidzianych w RODO,
                takich jak standardowe klauzule umowne zatwierdzone przez Komisję
                Europejską lub decyzja stwierdzająca odpowiedni stopień ochrony.
                Nie sprzedaję ani nie udostępniam danych w celach marketingowych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                4. Jak długo przechowuję dane
              </h2>
              <p className="mt-3">
                Korespondencję z zapytań przechowuję przez 24 miesiące od
                ostatniego kontaktu, a jeśli dojdzie do współpracy — przez czas
                jej trwania i do upływu okresu przedawnienia roszczeń. Opinie publikowane na stronie —
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
                Strona nie zapisuje plików cookies do śledzenia użytkowników i nie
                korzysta z narzędzi analitycznych ani reklamowych (np. Google
                Analytics czy Pixel Meta). Dlatego nie wyświetla też banera zgody
                na cookies.
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
