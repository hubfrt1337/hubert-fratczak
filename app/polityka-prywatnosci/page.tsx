import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Strona } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
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
    <Strona>
      <HeroPodstrona title="Polityka prywatności" />
      <div className="py-12 sm:py-20">
        <Container className="max-w-3xl">
          <p className=" text-sm text-ink-500">
            Ostatnia aktualizacja: 8 listopada 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-700">
            <section>
              <h2 className="text-xl font-semibold">1. Administrator danych</h2>
              <p className="mt-3">
                Serwis {site.name} prowadzi Hubert Frątczak, ul. Robocza 21a, Poznań,
                i to on jest administratorem Twoich danych osobowych. Usługi są
                świadczone w ramach działalności nierejestrowanej (art. 5 ustawy
                Prawo przedsiębiorców), dlatego bez numeru NIP i REGON. Kontakt w sprawach danych osobowych:{" "}
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
                2. Jakie dane zbieramy i w jakim celu
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong>Formularze wyceny i kontaktowy:</strong> imię i nazwisko
                  lub nazwa firmy, adres e-mail, numer telefonu (jeśli go podasz),
                  rodzaj i zakres projektu, liczba podstron, termin, orientacyjny
                  budżet, adres obecnej strony i treść wiadomości (pola poza imieniem,
                  e-mailem i rodzajem projektu są dobrowolne). Cel: odpowiedź na
                  zapytanie i przygotowanie wyceny (art. 6 ust. 1 lit. b i f RODO).
                </li>
                <li>
                  <strong>Kontakt e-mailowy i telefoniczny:</strong> dane, które
                  sam przekażesz: imię, adres e-mail, numer telefonu i treść
                  rozmowy lub wiadomości. Cel: odpowiedź na zapytanie i
                  przygotowanie oferty (art. 6 ust. 1 lit. b i f RODO).
                </li>
                <li>
                  <strong>Formularz opinii:</strong> imię, nazwa firmy, treść
                  opinii oraz zgoda na publikację. Cel: publikacja referencji na
                  stronie (art. 6 ust. 1 lit. a RODO, zgoda).
                </li>
                <li>
                  <strong>Dane techniczne:</strong> adres IP i informacje o
                  przeglądarce zapisywane automatycznie przez dostawcę hostingu w
                  logach serwera. Cel: bezpieczeństwo i diagnostyka.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">3. Komu przekazujemy dane</h2>
              <p className="mt-3">
                Dane trafiają wyłącznie do podmiotów, które są niezbędne do
                działania strony: dostawcy hostingu (Vercel Inc.), dostawcy obsługi
                formularzy (Web3Forms) oraz dostawcy poczty e-mail (Zoho
                Corporation B.V., serwery w Unii Europejskiej). Część z nich może
                przetwarzać dane poza Europejskim Obszarem Gospodarczym. Odbywa
                się to wyłącznie na podstawie mechanizmów przewidzianych w RODO,
                takich jak standardowe klauzule umowne zatwierdzone przez Komisję
                Europejską lub decyzja stwierdzająca odpowiedni stopień ochrony.
                Nie sprzedajemy ani nie udostępniamy danych w celach marketingowych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                4. Jak długo przechowujemy dane
              </h2>
              <p className="mt-3">
                Korespondencję z zapytań przechowujemy przez 24 miesiące od
                ostatniego kontaktu, a jeśli dojdzie do współpracy, przez czas
                jej trwania i do upływu okresu przedawnienia roszczeń. Opinie publikowane na stronie przechowujemy
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
                chwili. Wystarczy wiadomość na {site.email}, opinia zostanie
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
      </div>
    </Strona>
  );
}
