export type Plan = {
  name: string;
  /** Kwota końcowa, płatna raz (bez VAT — działalność nierejestrowana) — w karcie wyświetla się jako "X zł". */
  price: string;
  /** true = cena "od" (zakres ustalany po rozmowie). */
  priceFrom?: boolean;
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
 * Abonament (0 zł na start, 129 / 229 / 397 zł mies.) jest w historii gita — commit 343eb24.
 */
export const pricingTerms: string[] = [
  "Płacisz raz — bez abonamentu",
  "50% na start, reszta po odbiorze",
  "Pełne prawa do strony po zapłacie",
  "Hosting na 12 miesięcy w cenie",
];

export const plans: Plan[] = [
  {
    name: "Wizytówka",
    price: "1 490",
    time: "1–3 dni",
    tagline: "Dla firm, które potrzebują być w sieci i wyglądać poważnie.",
    features: [
      "Strona jednostronicowa (do 6 sekcji)",
      "Indywidualny projekt graficzny pod Twoją firmę",
      "Pomoc w napisaniu tekstów",
      "Formularz kontaktowy, mapa i przycisk „Zadzwoń”",
      "Responsywność: telefon, tablet, komputer",
      "Podstawowa optymalizacja SEO",
      "Hosting i SSL na 12 miesięcy, podpięcie domeny",
      "30 dni poprawek po wdrożeniu",
    ],
    budgetHint: "Wizytówka — 1 490 zł",
  },
  {
    name: "Strona firmowa",
    price: "2 950",
    time: "od 7 dni",
    tagline: "Rozbudowana strona z osobną podstroną dla każdej usługi.",
    features: [
      "Do 8 podstron + blog / aktualności",
      "Indywidualny projekt graficzny",
      "Teksty usług pisane pod wyszukiwanie w Google",
      "Panel do samodzielnej edycji treści",
      "Rozszerzone SEO, Google Analytics i Search Console",
      "Formularze i integracja z pocztą",
      "Hosting i SSL na 12 miesięcy, kopie zapasowe",
      "60 dni poprawek po wdrożeniu",
    ],
    highlighted: true,
    budgetHint: "Strona firmowa — 2 950 zł",
  },
  {
    name: "Sklep i integracje",
    price: "5 000",
    priceFrom: true,
    time: "od 3 tygodni",
    tagline: "Sprzedaż online: płatności, wysyłki i systemy sprzedażowe.",
    features: [
      "Sklep z katalogiem produktów",
      "Płatności online (Przelewy24 / Stripe / BLIK)",
      "Integracje z kurierami i magazynem",
      "Konfiguracja regulaminów i podatków",
      "Szkolenie z obsługi zamówień",
      "Hosting i SSL na 12 miesięcy, kopie zapasowe",
      "90 dni poprawek po wdrożeniu",
    ],
    budgetHint: "Sklep i integracje — od 5 000 zł",
  },
];

/** Najtańszy pakiet — „od X zł” w hero zawsze zgadza się z cennikiem. */
export const cheapestPlan = plans.reduce((cheapest, plan) =>
  Number(plan.price.replace(/\s/g, "")) < Number(cheapest.price.replace(/\s/g, ""))
    ? plan
    : cheapest,
);

/**
 * Abonament na opiekę nad stroną — jedyna pozycja rozliczana miesięcznie,
 * dlatego stoi pod kartami pakietów, a nie obok nich.
 * Ustaw `carePlan = null`, żeby ukryć całą sekcję.
 * Ukryta, póki cennik jest "bez abonamentu".
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
 *   "Dla pierwszych trzech klientów w tym miesiącu: domena na rok gratis."
 * Poniżej wersja bez promocji — wyjaśnienie, co jest w cenie, a co nie.
 */
export const pricingNote =
  "Cena pakietu jest stała dla podanego zakresu. Dodatkowe podstrony, wersje językowe czy integracje wyceniam przed startem — po krótkiej rozmowie, bezpłatnie i bez zobowiązań.";

/** Pakiety do wyboru w formularzu kontaktowym. */
export const budgetOptions = [
  ...plans.map((plan) => plan.budgetHint),
  "jeszcze nie wiem",
];
