export type Project = {
  name: string;
  /** Krótka etykieta branży / typu projektu nad nazwą. */
  category: string;
  /** Zrzut w /public/portfolio — odświeża go `npm run screenshots`. */
  image: string;
  imageAlt: string;
  /** 1–2 zdania: zakres i to, co projekt daje właścicielowi. */
  summary: string;
  /** Technologie i zakres w skrócie — wyświetlane jako małe etykiety. */
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: "Mililash",
    category: "Salon beauty · system rezerwacji",
    image: "/portfolio/projekt-4.png",
    imageAlt: "Strona główna salonu stylizacji rzęs Mililash z Poznania",
    summary:
      "Strona salonu zintegrowana z autorskim systemem rezerwacji online: wybór zabiegu i stylistki, wolne terminy w czasie rzeczywistym oraz panel z kalendarzem, grafikiem pracy i synchronizacją z Kalendarzem Google.",
    tags: ["Next.js", "Supabase", "Rezerwacje online"],
    href: "https://mililash.pages.dev",
  },
  {
    name: "StwórzCV",
    category: "Aplikacja SaaS · płatności cykliczne",
    image: "/portfolio/projekt-1.png",
    imageAlt: "Strona główna StwórzCV — kreator CV online z szablonami ATS",
    summary:
      "Kreator CV i listów motywacyjnych z kontami użytkowników, eksportem do PDF i subskrypcjami w Stripe. Wersje PL i EN, rozbudowane SEO oraz kampanie Google Ads mierzone aż do sprzedaży.",
    tags: ["Next.js", "Stripe", "SEO", "Google Ads"],
    href: "https://www.stworzcv.com",
  },
  {
    name: "Ogólnopolskie Towarzystwo Szachowe",
    category: "Organizacja · serwis treściowy",
    image: "/portfolio/projekt-3.png",
    imageAlt: "Strona główna Ogólnopolskiego Towarzystwa Szachowego",
    summary:
      "Serwis organizacji z modułem artykułów i kalendarzem wydarzeń. Identyfikacja wizualna w granacie i złocie oraz typografia przygotowana pod długie teksty.",
    tags: ["Projekt graficzny", "Artykuły", "Wydarzenia"],
    href: "https://otsz.pl",
  },
  {
    name: "Oriane Lash Atelier",
    category: "Salon beauty · strona premium",
    image: "/portfolio/projekt-5.png",
    imageAlt: "Strona główna atelier stylizacji rzęs Oriane",
    summary:
      "Strona atelier z interaktywną mapą rzęs, galerią efektów, opiniami i rezerwacją terminu. Lekki kod bez wtyczek — błyskawiczne ładowanie na telefonie.",
    tags: ["UX/UI", "Rezerwacje", "Wydajność"],
    href: "https://oriane-lash-atelier.pages.dev",
  },
  {
    name: "Cerise Nail Studio",
    category: "Salon beauty · lookbook",
    image: "/portfolio/projekt-6.png",
    imageAlt: "Strona główna studia stylizacji paznokci Cerise",
    summary:
      "Strona studia manicure z lookbookiem stylizacji, cennikiem, opiniami i formularzem rezerwacji. Projektowana od ekranu telefonu, z którego przychodzi większość klientek.",
    tags: ["UX/UI", "Galeria", "Mobile first"],
    href: "https://cerise-nail-studio.pages.dev",
  },
  {
    name: "Tapicernia Pod Kasztanem",
    category: "Zakład usługowy · SEO lokalne",
    image: "/portfolio/projekt-7.png",
    imageAlt: "Strona główna zakładu tapicerskiego Tapicernia Pod Kasztanem z Poznania",
    summary:
      "Strona zakładu tapicerskiego z Poznania pisana pod lokalne wyszukiwania: opisy usług przy zdjęciach, cennik orientacyjny, dzielnice i okolice, pytania klientów, formularz ze zdjęciami mebla i mapa dojazdu.",
    tags: ["SEO lokalne", "Dane strukturalne", "Mobile first"],
    href: "https://tapicernia-pod-kasztanem.hubert-fratczak.workers.dev",
  },
  {
    name: "Daria Ziętek",
    category: "Portfolio · marka osobista",
    image: "/portfolio/projekt-2.png",
    imageAlt: "Strona główna portfolio modelki Darii Ziętek",
    summary:
      "Portfolio modelki w kinowej, ciemnej estetyce z galerią sesji i progresywnym ładowaniem zdjęć — jeden link dla agencji i fotografów.",
    tags: ["Projekt graficzny", "Galeria", "Wydajność"],
    href: "https://www.dariazietek.pl",
  },
];
