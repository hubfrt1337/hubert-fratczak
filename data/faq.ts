export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Ile trwa realizacja strony?",
    answer:
      "Strona wizytówka to zwykle 1–3 dni od zebrania treści. Rozbudowany serwis firmowy od 7 dni, sklep z integracjami od 2 tygodni. Najczęściej wąskim gardłem nie jest kod, tylko teksty i zdjęcia — jeśli masz je gotowe, idzie szybciej.",
  },
  {
    question: "Czy mogę sam edytować treści po wdrożeniu?",
    answer:
      "Tak. W pakietach Standard i Sklep dostajesz panel, w którym zmienisz teksty, zdjęcia, ceny czy wpisy na blogu bez znajomości kodu. Po wdrożeniu pokazuję na żywo, jak z niego korzystać, i zostawiam krótką instrukcję.",
  },
  {
    question: "Co z domeną i hostingiem?",
    answer:
      "Mogę je kupić i skonfigurować za Ciebie albo podpiąć się pod te, które już masz. Rejestruję je zawsze na Twoje dane — domena i hosting są Twoją własnością, nie moją. Koszt to zwykle 60–150 zł rocznie za domenę i 0–400 zł rocznie za hosting, zależnie od projektu.",
  },
  {
    question: "Czy jest gwarancja na poprawki?",
    answer:
      "Tak. W cenie każdego projektu jest okres wsparcia (30–60 dni zależnie od pakietu), w którym poprawiam wszystkie błędy techniczne bez dodatkowych opłat. Późniejsze zmiany i rozbudowę rozliczam godzinowo lub w ramach stałej opieki — decydujesz sam.",
  },
  {
    question: "Jak wygląda płatność?",
    answer:
      "Standardowo 30–50% zaliczki na start, reszta po wdrożeniu i Twojej akceptacji. Przy większych projektach dzielimy płatność na etapy. Wystawiam fakturę, rozliczam się przelewem.",
  },
];
