import type { IkonaNazwa } from "@/components/ui/Icons";

/**
 * Treści sekcji powtarzanych na wielu podstronach.
 * Zasada: tylko prawdziwe liczby i usługi, które faktycznie wykonujemy. Bez „—” jako przerywnika.
 */

/** Granatowa sekcja „Co wyróżnia nasze strony www” (3×3). */
export const wyroznienia: { title: string; icon: IkonaNazwa }[] = [
  { title: "Wysoka jakość wykonania", icon: "medal" },
  { title: "Projekt pod Twoją firmę", icon: "zarowka" },
  { title: "Prosta edycja treści", icon: "suwaki" },
  { title: "Indywidualny projekt graficzny", icon: "pioro" },
  { title: "Wygoda na każdym urządzeniu", icon: "urzadzenia" },
  { title: "Wsparcie po uruchomieniu", icon: "kolo" },
  { title: "Szybkie ładowanie", icon: "piorun" },
  { title: "Bezpieczeństwo i certyfikat SSL", icon: "tarcza" },
  { title: "Struktura przygotowana pod SEO", icon: "szukaj" },
];

/** Sekcja „Doświadczenie”: lista 2×3 obok dużej liczby. */
export const atuty = [
  "Kod pisany od zera",
  "Indywidualne podejście",
  "Stałe, uczciwe ceny",
  "Gwarancja poprawek",
  "Pełne prawa do strony",
  "Kompleksowa obsługa",
];

/** Liczniki na zdjęciu w tle. Wartości liczbowe animują się od zera. */
export const liczniki = [
  {
    value: 24,
    suffix: " h",
    title: "na bezpłatną wycenę",
    text: "Na każde zapytanie odpowiadamy w ciągu doby. Dostajesz konkretną kwotę i termin, a nie widełki bez pokrycia.",
  },
  {
    value: 12,
    suffix: "",
    title: "miesięcy hostingu w cenie",
    text: "Pierwszy rok hostingu i certyfikatu SSL jest w cenie każdej strony. Potem koszt podajemy z góry albo przenosisz stronę, gdzie chcesz.",
  },
  {
    value: 90,
    suffix: "",
    title: "dni bezpłatnych poprawek",
    text: "Po uruchomieniu poprawiamy bez dopłat wszystko, co wyjdzie w praktyce: 30 dni przy wizytówce, 60 przy stronie firmowej, 90 przy sklepie.",
  },
];

/** Technologie w żółtej sekcji (prawa kolumna). */
export const technologie: { name: string; text: string }[] = [
  { name: "Next.js i React", text: "Nowoczesny kod, który szybko się ładuje i dobrze wypada w Google." },
  { name: "Panel do edycji treści", text: "Teksty, zdjęcia, cennik i wpisy zmieniasz sam, bez znajomości kodu." },
  { name: "Supabase", text: "Baza danych i konta użytkowników do rezerwacji, paneli i aplikacji." },
  { name: "Stripe i Przelewy24", text: "Płatności online, BLIK i subskrypcje w sklepach i aplikacjach." },
  { name: "HTML / CSS / TypeScript", text: "Strony pisane od zera, bez ciężkich szablonów i dziesiątek wtyczek." },
];

/** „Kroki numerowane” na stronie Oferta: jak robimy strony. */
export const zasadyOferty = [
  {
    title: "Nie korzystamy z gotowych szablonów",
    text: "Każdą stronę projektujemy od pierwszego ekranu pod konkretną firmę. Dzięki temu nie wygląda jak sto innych i pokazuje to, co u Ciebie najważniejsze.",
  },
  {
    title: "Teksty pod klientów i pod Google",
    text: "Pomagamy napisać treści prostym językiem, takim, jakim klienci szukają usług w Google. Wystarczy rozmowa telefoniczna, resztę przygotujemy.",
  },
  {
    title: "Panel do samodzielnej edycji",
    text: "W stronie firmowej i sklepie dostajesz panel, w którym zmienisz teksty, zdjęcia i ceny. Po uruchomieniu pokazujemy na żywo, jak z niego korzystać.",
  },
  {
    title: "Gwarancja poprawek i wsparcie",
    text: "Po starcie strony poprawiamy bez dopłat wszystko, co wyjdzie w praktyce, a później zostajemy pod telefonem i mailem.",
  },
  {
    title: "Widoczność w Google od pierwszego dnia",
    text: "Tytuły, opisy, dane firmy dla Google, mapa strony i podpięcie Search Console są w cenie. Strona startuje przygotowana do pozycjonowania.",
  },
  {
    title: "Strona wygodna na telefonie",
    text: "Większość klientów wchodzi z telefonu, więc każdy ekran projektujemy najpierw na smartfon: klikalny numer, mapa i formularz zawsze pod ręką.",
  },
];

/** „Kroki numerowane” na stronie Współpraca. */
export const krokiWspolpracy = [
  {
    title: "Rozmowa i bezpłatna wycena",
    text: "Dzwonisz albo wypełniasz formularz. Pytamy o firmę, klientów i cel strony. W ciągu 24 godzin dostajesz konkretną cenę i termin.",
  },
  {
    title: "Materiały i plan strony",
    text: "Zbieramy teksty, zdjęcia i logo. Czego brakuje, pomagamy przygotować. Ustalamy listę podstron i to, co ma się na nich znaleźć.",
  },
  {
    title: "Projekt graficzny",
    text: "Pokazujemy projekt pierwszego ekranu. Wprowadzamy Twoje uwagi, aż wygląd będzie dokładnie taki, jak chcesz.",
  },
  {
    title: "Kodowanie i testy",
    text: "Budujemy stronę, wgrywamy treści i sprawdzamy ją na telefonie, tablecie i komputerze. Na bieżąco masz podgląd postępów pod roboczym adresem.",
  },
  {
    title: "Uruchomienie",
    text: "Podpinamy domenę, certyfikat SSL, pocztę i Search Console. Przekazujemy dostępy i krótką instrukcję obsługi panelu.",
  },
  {
    title: "Opieka po starcie",
    text: "Przez okres gwarancji poprawiamy wszystko bez dopłat. Później zostajemy pod telefonem, gdy zechcesz rozbudować stronę.",
  },
];
