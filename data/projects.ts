export type Project = {
  name: string;
  /** Miniatura w /public/portfolio — podmień na zrzut ekranu realizacji. */
  image: string;
  imageAlt: string;
  /** Mini case study: cel → co zrobiłem → efekt. */
  goal: string;
  work: string;
  result: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "StwórzCV — kreator CV z AI",
    image: "/portfolio/projekt-1.png",
    imageAlt: "Strona główna StwórzCV — kreator CV online z szablonami ATS",
    goal: "Własny produkt: aplikacja, w której kandydat składa profesjonalne CV w kilka minut, zamiast walczyć z formatowaniem w Wordzie.",
    work: "Zbudowałem całość — interfejs kreatora, szablony zgodne z ATS, podpowiedzi AI, eksport do PDF, konta użytkowników i płatności online.",
    result: "Działający serwis z generatorem listów motywacyjnych, dopasowywaniem CV do ogłoszeń i śledzeniem statusu aplikacji.",
    href: "https://stworzcv.com",
  },
  {
    name: "Daria Ziętek — portfolio modelki",
    image: "/portfolio/projekt-2.png",
    imageAlt: "Strona główna portfolio modelki Darii Ziętek",
    goal: "Wizytówka zawodowa dla modelki — strona, którą wysyła się agencjom i fotografom zamiast folderu ze zdjęciami.",
    work: "Kinowy, ciemny layout ze złotym akcentem, pełnoekranowe hero, galeria sesji i sekcja kontaktowa. Zdjęcia ładowane progresywnie, żeby strona nie zwalniała.",
    result: "Kompletne portfolio pod jednym linkiem, czytelne również na telefonie — bez wysyłania ciężkich plików mailem.",
    href: "https://www.dariazietek.pl",
  },
  {
    name: "OTSZ — Ogólnopolskie Towarzystwo Szachowe",
    image: "/portfolio/projekt-3.png",
    imageAlt: "Strona główna Ogólnopolskiego Towarzystwa Szachowego",
    goal: "Serwis organizacji zrzeszającej pasjonatów szachów: miejsce na artykuły, wydarzenia i informacje o działalności.",
    work: "Zaprojektowałem identyfikację strony (granat i złoto), sekcję artykułów i kalendarz wydarzeń oraz typografię przygotowaną pod dłuższe teksty.",
    result: "Artykuły i wydarzenia zebrane w jednym miejscu, zamiast rozproszone po social mediach.",
    href: "https://otsz.pl",
  },
];
