export type Plan = {
  name: string;
  /** Kwota netto "od" — w karcie wyświetla się jako "od X zł". */
  price: string;
  /** Orientacyjny termin realizacji. */
  time: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  /** Wartość wstawiana do pola "budżet" w formularzu po kliknięciu CTA. */
  budgetHint: string;
};

export const plans: Plan[] = [
  {
    name: "Wizytówka",
    price: "400",
    time: "1–3 dni",
    tagline: "Dla firm, które potrzebują być w sieci i wyglądać poważnie.",
    features: [
      "Strona jednostronicowa (do 5 sekcji)",
      "Formularz kontaktowy i mapa dojazdu",
      "Responsywność: telefon, tablet, komputer",
      "Podstawowa optymalizacja SEO",
      "Wdrożenie na serwerze i podpięcie domeny",
    ],
    budgetHint: "do 1 000 zł",
  },
  {
    name: "Standard",
    price: "1 000",
    time: "od 7 dni",
    tagline: "Rozbudowana strona firmowa z podstronami i blogiem.",
    features: [
      "Do 6 podstron + blog / aktualności",
      "Indywidualny projekt graficzny",
      "Panel do samodzielnej edycji treści",
      "Rozszerzone SEO i Google Analytics",
      "Formularze i integracja z pocztą",
      "30 dni wsparcia po wdrożeniu",
    ],
    highlighted: true,
    budgetHint: "1 000 – 2 500 zł",
  },
  {
    name: "Sklep i integracje",
    price: "1 500",
    time: "od 2 tygodni",
    tagline: "Sprzedaż online: płatności, wysyłki i systemy sprzedażowe.",
    features: [
      "Uruchomienie sklepu z katalogiem produktów",
      "Płatności online (Przelewy24 / Stripe / BLIK)",
      "Integracje z kurierami i magazynem",
      "Konfiguracja regulaminów i podatków",
      "Szkolenie z obsługi zamówień",
      "60 dni wsparcia po wdrożeniu",
    ],
    budgetHint: "2 500 – 5 000 zł",
  },
];

/**
 * Mała notka pod cennikiem. Pusty string ("") = nie wyświetla się wcale.
 *
 * To miejsce na komunikat, który dotyczy wszystkich pakietów naraz — najczęściej
 * czasową promocję, np.:
 *   "Dla pierwszych trzech klientów w tym miesiącu: -20% na każdy pakiet."
 *   "Do końca marca strona wizytówka z darmową domeną na pierwszy rok."
 * Poniżej wersja bez promocji — po prostu uczciwe zastrzeżenie do cen.
 */
export const pricingNote =
  "Podane kwoty to ceny startowe. Ostateczna wycena zależy od liczby podstron, integracji i tego, czy masz gotowe treści — podaję ją po krótkiej rozmowie, bezpłatnie i bez zobowiązań.";

/** Widełki budżetu w formularzu kontaktowym. */
export const budgetOptions = [
  "do 1 000 zł",
  "1 000 – 2 500 zł",
  "2 500 – 5 000 zł",
  "powyżej 5 000 zł",
  "jeszcze nie wiem",
];
