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
      "Hosting jest w cenie abonamentu — nie płacisz za niego osobno. Domenę mogę kupić i skonfigurować za Ciebie albo podpiąć się pod tę, którą już masz. Rejestruję ją zawsze na Twoje dane, więc adres strony jest Twoją własnością od pierwszego dnia.",
  },
  {
    question: "Czy jest gwarancja na poprawki?",
    answer:
      "Tak. Przez cały okres abonamentu poprawiam błędy techniczne bez dodatkowych opłat, pilnuję kopii zapasowych i aktualizacji. Do tego co miesiąc masz w cenie 1 godzinę zmian w wizytówce i 2 godziny w stronie firmowej i sklepie: podmiana tekstów i zdjęć, nowy wpis, drobne poprawki wyglądu. Większe zmiany, np. nowa podstrona czy funkcja, wyceniam osobno — zawsze przed rozpoczęciem pracy.",
  },
  {
    question: "Jak działa abonament?",
    answer:
      "Nie płacisz nic na start. Stronę robię w ramach abonamentu: 129 zł miesięcznie za wizytówkę, 229 zł za stronę firmową, 397 zł za sklep. W cenie jest hosting, kopie zapasowe, aktualizacje, poprawki błędów i 1–2 godziny zmian co miesiąc (zależnie od pakietu). Umowa jest na 12 miesięcy.",
  },
  {
    question: "Czyja jest strona po 12 miesiącach?",
    answer:
      "Twoja. Po 12 miesiącach przenoszę na Ciebie pełne majątkowe prawa autorskie do strony — możesz ją zabrać do innego wykonawcy albo zostać u mnie w abonamencie.",
  },
  {
    question: "Jak wygląda płatność?",
    answer:
      "Płacisz stałą kwotę co miesiąc, bez zaliczki. Rozliczam się przelewem i wystawiam rachunek. Nie doliczam VAT, więc kwota z cennika jest kwotą końcową.",
  },
];
