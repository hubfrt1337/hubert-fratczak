export type Project = {
  /** Adres podstrony: /realizacje/<slug>. */
  slug: string;
  name: string;
  /** Krótka etykieta branży / typu projektu nad nazwą. */
  category: string;
  /**
   * Uczciwa etykieta na podstronie: projekt dla klienta, własny albo koncepcyjny (pokazowy).
   * Pusta = etykieta się nie wyświetla.
   */
  kind?: "Realizacja dla klienta" | "Projekt własny" | "Projekt koncepcyjny";
  /** Zrzut w /public/portfolio — odświeża go `npm run screenshots`. */
  image: string;
  imageAlt: string;
  /** 1–2 zdania: zakres i to, co projekt daje właścicielowi. */
  summary: string;
  /** Technologie i zakres w skrócie — wyświetlane jako małe etykiety. */
  tags: string[];
  href: string;
  /** Podstrona realizacji: cel projektu (1 akapit). */
  goal: string;
  /** Podstrona realizacji: co jest na stronie / w aplikacji. */
  features: string[];
  /** Podstrona realizacji: jak to zrobiłem i dlaczego tak (1–2 akapity). */
  approach: string[];
  /** Podstrona branżowa, do której prowadzi „Chcesz podobną stronę?”. */
  industry?: "salony" | "warsztaty";
};

export const projects: Project[] = [
  {
    slug: "mililash",
    name: "Mililash",
    category: "Salon beauty · system rezerwacji",
    kind: "Realizacja dla klienta",
    image: "/portfolio/projekt-4.png",
    imageAlt: "Strona główna salonu stylizacji rzęs Mililash z Poznania",
    summary:
      "Strona salonu zintegrowana z autorskim systemem rezerwacji online: wybór zabiegu i stylistki, wolne terminy w czasie rzeczywistym oraz panel z kalendarzem, grafikiem pracy i synchronizacją z Kalendarzem Google.",
    tags: ["Next.js", "Supabase", "Rezerwacje online"],
    href: "https://mililash.pages.dev",
    goal:
      "Mililash to salon stylizacji rzęs w Poznaniu, w którym pracują dwie stylistki. Wizyty były zapisywane ręcznie w Kalendarzu Google. Celem była strona, na której klientka sama wybiera zabieg, stylistkę i wolny termin, bez dzwonienia i bez prowizji od wizyt.",
    features: [
      "Rezerwacja online: zabieg, stylistka (albo „dowolna”), dzień i godzina, tylko z wolnych terminów",
      "Potwierdzenie mailem i link do odwołania wizyty bez logowania",
      "Panel dla salonu: kalendarz dnia, tygodnia i miesiąca, ręczne dodawanie wizyt z telefonu i Instagrama",
      "Grafik pracy każdej stylistki i czas wolny (urlop, lekarz), którego klientki nie zarezerwują",
      "Zabiegi z ceną i czasem trwania osobno dla każdej stylistki",
      "Połączenie z Kalendarzem Google, żeby wizyty były też w telefonie",
      "Cennik i czas zabiegów na stronie pobierane z panelu, więc zawsze aktualne",
    ],
    approach: [
      "Gotowe systemy rezerwacji pobierają abonament albo prowizję i wyglądają tak samo w każdym salonie. Tutaj rezerwacja jest częścią strony salonu, w jego kolorach, a cały system napisałem od zera w Next.js z bazą Supabase.",
      "Każdy ekran projektowałem najpierw na telefon, bo z telefonu korzystają i klientki, i stylistki. Zanim zmiana trafi do salonu, sprawdzam ją na osobnym salonie testowym i automatycznymi testami, żeby nie zgubić żadnej wizyty.",
    ],
    industry: "salony",
  },
  {
    slug: "stworzcv",
    name: "StwórzCV",
    category: "Aplikacja SaaS · płatności cykliczne",
    kind: "Projekt własny",
    image: "/portfolio/projekt-1.png",
    imageAlt: "Strona główna StwórzCV, kreator CV online z szablonami ATS",
    summary:
      "Kreator CV i listów motywacyjnych z kontami użytkowników, eksportem do PDF i subskrypcjami w Stripe. Wersje PL i EN, rozbudowane SEO oraz kampanie Google Ads mierzone aż do sprzedaży.",
    tags: ["Next.js", "Stripe", "SEO", "Google Ads"],
    href: "https://www.stworzcv.com",
    goal:
      "StwórzCV to moja własna aplikacja: kreator CV i listów motywacyjnych dla osób szukających pracy. Prowadzę ją sam, od kodu po marketing, więc to, co robię u klientów (SEO, reklamy, pomiar), najpierw sprawdzam na własnym biznesie i za własne pieniądze.",
    features: [
      "Kreator CV krok po kroku z szablonami czytelnymi dla systemów ATS",
      "Wgrywanie starego CV, dopasowanie CV do oferty pracy i tłumaczenie CV",
      "Listy motywacyjne i eksport do PDF",
      "Konta użytkowników i płatności w Stripe z okresem próbnym i subskrypcją",
      "Dwie domeny i wersje językowe: stworzcv.com (PL) i rovocareer.com (EN)",
      "Wzory CV dla wielu zawodów i blog z poradnikami",
    ],
    approach: [
      "Aplikacja działa na Next.js i Vercelu, dane trzyma w Supabase, a płatności obsługuje Stripe. Strony wzorów i poradników są pisane pod konkretne wyszukiwania w Google, a w Search Console regularnie sprawdzam, które z nich rosną, a które wypadają z indeksu.",
      "Kampanie Google Ads rozliczam do realnej sprzedaży w Stripe, a nie do kliknięć. Dzięki temu wiem, które frazy przynoszą płacących klientów, a które tylko zjadają budżet. To samo podejście stosuję przy reklamach dla klientów.",
    ],
  },
  {
    slug: "ogolnopolskie-towarzystwo-szachowe",
    name: "Ogólnopolskie Towarzystwo Szachowe",
    category: "Organizacja · serwis treściowy",
    image: "/portfolio/projekt-3.png",
    imageAlt: "Strona główna Ogólnopolskiego Towarzystwa Szachowego",
    summary:
      "Serwis organizacji z modułem artykułów i kalendarzem wydarzeń. Identyfikacja wizualna w granacie i złocie oraz typografia przygotowana pod długie teksty.",
    tags: ["Projekt graficzny", "Artykuły", "Wydarzenia"],
    href: "https://otsz.pl",
    goal:
      "Serwis dla organizacji szachowej, który ma dwa zadania: publikować artykuły o szachach i informować o nadchodzących wydarzeniach. Treści jest dużo, więc najważniejsza była wygoda czytania.",
    features: [
      "Moduł artykułów z kategoriami",
      "Kalendarz wydarzeń",
      "Identyfikacja wizualna w granacie i złocie",
      "Typografia dobrana pod długie teksty, czytelna też na telefonie",
    ],
    approach: [
      "Zacząłem od wyglądu tekstu, a nie od dekoracji: szerokość kolumny, wielkość liter i odstępy są ustawione tak, żeby długi artykuł czytało się bez męczenia oczu. Granat i złoto nawiązują do klasycznej, eleganckiej strony szachów.",
    ],
  },
  {
    slug: "oriane-lash-atelier",
    name: "Oriane Lash Atelier",
    category: "Salon beauty · strona premium",
    kind: "Projekt koncepcyjny",
    image: "/portfolio/projekt-5.png",
    imageAlt: "Strona główna atelier stylizacji rzęs Oriane",
    summary:
      "Strona atelier z interaktywną mapą rzęs, galerią efektów, opiniami i rezerwacją terminu. Lekki kod bez wtyczek, dzięki czemu szybko ładuje się na telefonie.",
    tags: ["UX/UI", "Rezerwacje", "Wydajność"],
    href: "https://oriane-lash-atelier.pages.dev",
    goal:
      "Projekt pokazowy: jak może wyglądać strona salonu rzęs z wyższej półki. Klientka ma w kilka sekund zobaczyć efekty, zrozumieć różnice między stylizacjami i zarezerwować termin.",
    features: [
      "Interaktywna mapa rzęs, która pokazuje, czym różnią się stylizacje",
      "Galeria efektów",
      "Opinie klientek",
      "Rezerwacja terminu",
      "Lekki kod bez wtyczek, szybki na telefonie",
    ],
    approach: [
      "Stylizacje rzęs trudno opisać słowami, dlatego zamiast długich opisów jest interaktywna mapa: klientka klika i widzi, gdzie rzęsy są dłuższe, a gdzie krótsze. Strona jest napisana bez ciężkich wtyczek, więc otwiera się szybko nawet na słabszym internecie w telefonie.",
    ],
    industry: "salony",
  },
  {
    slug: "cerise-nail-studio",
    name: "Cerise Nail Studio",
    category: "Salon beauty · lookbook",
    kind: "Projekt koncepcyjny",
    image: "/portfolio/projekt-6.png",
    imageAlt: "Strona główna studia stylizacji paznokci Cerise",
    summary:
      "Strona studia manicure z lookbookiem stylizacji, cennikiem, opiniami i formularzem rezerwacji. Projektowana od ekranu telefonu, z którego przychodzi większość klientek.",
    tags: ["UX/UI", "Galeria", "Mobile first"],
    href: "https://cerise-nail-studio.pages.dev",
    goal:
      "Projekt pokazowy strony dla studia paznokci. W tej branży klientki wybierają oczami, więc stylizacje są na pierwszym planie, a cennik i rezerwacja zawsze pod ręką.",
    features: [
      "Lookbook stylizacji z filtrami i powiększaniem zdjęć",
      "Rozwijane opisy usług i menu zabiegów z cenami",
      "Opinie klientek",
      "Bon podarunkowy z kwotą wybieraną na żywo",
      "Mapa dojazdu i formularz rezerwacji",
    ],
    approach: [
      "Strona była projektowana od ekranu telefonu, bo właśnie z niego wchodzi większość klientek, zwykle prosto z Instagrama. Zdjęcia ładują się w dwóch rozmiarach: małe w galerii i pełne dopiero po kliknięciu, żeby strona nie zjadała internetu w telefonie.",
      "Animacje wyłączają się same, jeśli ktoś ma w telefonie ustawione ograniczenie ruchu.",
    ],
    industry: "salony",
  },
  {
    slug: "tapicernia-pod-kasztanem",
    name: "Tapicernia Pod Kasztanem",
    category: "Zakład usługowy · SEO lokalne",
    kind: "Projekt koncepcyjny",
    image: "/portfolio/projekt-7.png",
    imageAlt: "Strona główna zakładu tapicerskiego Tapicernia Pod Kasztanem z Poznania",
    summary:
      "Strona zakładu tapicerskiego z Poznania pisana pod lokalne wyszukiwania: opisy usług przy zdjęciach, cennik orientacyjny, dzielnice i okolice, pytania klientów, formularz ze zdjęciami mebla i mapa dojazdu.",
    tags: ["SEO lokalne", "Dane strukturalne", "Mobile first"],
    href: "https://tapicernia-pod-kasztanem.hubert-fratczak.workers.dev",
    goal:
      "Projekt pokazowy strony dla lokalnego zakładu usługowego. Ktoś wpisuje w Google „tapicer Poznań” albo „renowacja fotela Jeżyce”. Strona ma się wtedy pojawić i sprawić, że ta osoba wyśle zdjęcie mebla do wyceny.",
    features: [
      "Usługi opisane prostym językiem, przy zdjęciach mebli",
      "Cennik orientacyjny, żeby klient wiedział, czego się spodziewać",
      "Dzielnice Poznania i okoliczne miejscowości, z których przyjmowane są zlecenia",
      "Pytania, które klienci zadają najczęściej",
      "Formularz ze zdjęciami mebla do wyceny bez wizyty",
      "Mapa dojazdu i dane firmy dla Google",
    ],
    approach: [
      "Teksty są pisane tak, jak mówią klienci, a nie jak hasła reklamowe: „naprawa kanapy”, „nowe obicie krzeseł”. Właśnie takie słowa ludzie wpisują w Google. Strona ma też dane strukturalne, które mówią Google, co to za firma i gdzie działa.",
      "Formularz pozwala dołączyć zdjęcia mebla. Tapicer od razu widzi, o co chodzi, i może podać wycenę bez jeżdżenia do klienta.",
    ],
    industry: "warsztaty",
  },
  {
    slug: "daria-zietek",
    name: "Daria Ziętek",
    category: "Portfolio · marka osobista",
    image: "/portfolio/projekt-2.png",
    imageAlt: "Strona główna portfolio modelki Darii Ziętek",
    summary:
      "Portfolio modelki w kinowej, ciemnej estetyce z galerią sesji i progresywnym ładowaniem zdjęć. Jeden link dla agencji i fotografów.",
    tags: ["Projekt graficzny", "Galeria", "Wydajność"],
    href: "https://www.dariazietek.pl",
    goal:
      "Portfolio modelki, które zastępuje wysyłanie paczek zdjęć. Agencja albo fotograf dostaje jeden link i od razu widzi najlepsze sesje.",
    features: [
      "Galeria sesji w ciemnej, kinowej estetyce",
      "Progresywne ładowanie zdjęć: najpierw lekki podgląd, potem pełna jakość",
      "Jeden adres do wysłania agencjom i fotografom",
    ],
    approach: [
      "W portfolio najważniejsze są zdjęcia, więc projekt jest ciemny i oszczędny, a wszystko inne schodzi na drugi plan. Duże zdjęcia ładują się stopniowo, dzięki czemu galeria otwiera się od razu, a nie po kilku sekundach białego ekranu.",
    ],
  },
];
