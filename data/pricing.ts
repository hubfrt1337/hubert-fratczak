export type Plan = {
  name: string;
  /** Abonament miesięczny (bez VAT — działalność nierejestrowana) — w karcie wyświetla się jako "X zł / mies.". */
  price: string;
  /** Orientacyjny termin realizacji. */
  time: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  /** Wartość wstawiana do pola "pakiet" w formularzu po kliknięciu CTA. */
  budgetHint: string;
};

/**
 * Warunki wspólne dla wszystkich pakietów — wyświetlają się nad kartami.
 * Pusta tablica = pasek się nie wyświetla.
 */
export const subscriptionTerms: string[] = [
  "0 zł na start",
  "Umowa na 12 miesięcy",
  "Hosting w cenie",
  "Drobne zmiany co miesiąc w cenie",
  "Po 12 miesiącach pełne prawa do strony",
];

export const plans: Plan[] = [
  {
    name: "Wizytówka",
    price: "129",
    time: "1–3 dni",
    tagline: "Dla firm, które potrzebują być w sieci i wyglądać poważnie.",
    features: [
      "Strona jednostronicowa (do 5 sekcji)",
      "Formularz kontaktowy i mapa dojazdu",
      "Responsywność: telefon, tablet, komputer",
      "Podstawowa optymalizacja SEO",
      "Hosting, wdrożenie i podpięcie domeny",
      "1 h zmian miesięcznie: teksty, zdjęcia, drobne poprawki",
    ],
    budgetHint: "Wizytówka — 129 zł / mies.",
  },
  {
    name: "Standard",
    price: "229",
    time: "od 7 dni",
    tagline: "Rozbudowana strona firmowa z podstronami i blogiem.",
    features: [
      "Do 6 podstron + blog / aktualności",
      "Indywidualny projekt graficzny",
      "Panel do samodzielnej edycji treści",
      "Rozszerzone SEO i Google Analytics",
      "Formularze i integracja z pocztą",
      "Hosting, kopie zapasowe i aktualizacje",
      "2 h zmian miesięcznie: teksty, zdjęcia, drobne poprawki",
    ],
    highlighted: true,
    budgetHint: "Standard — 229 zł / mies.",
  },
  {
    name: "Sklep i integracje",
    price: "397",
    time: "od 2 tygodni",
    tagline: "Sprzedaż online: płatności, wysyłki i systemy sprzedażowe.",
    features: [
      "Uruchomienie sklepu z katalogiem produktów",
      "Płatności online (Przelewy24 / Stripe / BLIK)",
      "Integracje z kurierami i magazynem",
      "Konfiguracja regulaminów i podatków",
      "Szkolenie z obsługi zamówień",
      "Hosting, kopie zapasowe i aktualizacje",
      "2 h zmian miesięcznie: produkty, zdjęcia, drobne poprawki",
    ],
    budgetHint: "Sklep i integracje — 397 zł / mies.",
  },
];

/**
 * Abonament na opiekę nad stroną — jedyna pozycja rozliczana miesięcznie,
 * dlatego stoi pod kartami pakietów, a nie obok nich.
 * Ustaw `carePlan = null`, żeby ukryć całą sekcję.
 * Ukryta od przejścia na abonament: hosting i opieka są już w cenie pakietów.
 */
export type CarePlan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
};

export const carePlan: CarePlan | null = null;

/**
 * Mała notka pod cennikiem. Pusty string ("") = nie wyświetla się wcale.
 *
 * To miejsce na komunikat, który dotyczy wszystkich pakietów naraz — najczęściej
 * czasową promocję, np.:
 *   "Dla pierwszych trzech klientów w tym miesiącu: pierwszy miesiąc gratis."
 * Poniżej wersja bez promocji — wyjaśnienie, jak działa abonament.
 */
export const pricingNote =
  "Nie płacisz nic na start — stronę robię w ramach abonamentu, a Ty płacisz stałą kwotę co miesiąc. Po 12 miesiącach przenoszę na Ciebie pełne prawa autorskie do strony. Zakres dopasowuję po krótkiej rozmowie, bezpłatnie i bez zobowiązań.";

/** Pakiety do wyboru w formularzu kontaktowym. */
export const budgetOptions = [
  ...plans.map((plan) => plan.budgetHint),
  "jeszcze nie wiem",
];
