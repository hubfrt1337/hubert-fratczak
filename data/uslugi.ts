import type { BlokTresci, Kafel, Pytanie } from "@/components/sekcje/Oferta";

/**
 * Podstrony usług. Wszystkie mają ten sam układ (components/StronaUslugi.tsx).
 * Zasady tekstów: prosty język, tylko usługi i liczby, które są prawdą, ceny zgodne z data/pricing.ts,
 * bez „—” jako przerywnika.
 */
export type Usluga = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; subtitle: string; gruby: string; lekki: string };
  intro: { lekki?: string; gruby: string; paragraphs: string[]; bullets?: string[]; image: string; imageAlt: string };
  /** Opcjonalny wstęp w granatowej sekcji („Dlaczego warto?”). */
  cechyWstep?: { title: string; paragraphs: string[]; bullets?: string[] };
  tresc1: BlokTresci[];
  etapyTitle: string;
  etapy: Kafel[];
  tresc2: BlokTresci[];
  faq: Pytanie[];
  ctaTitle: string;
};

const POZNAN = "Poznań oraz cała Polska";

export const uslugi: Usluga[] = [
  {
    slug: "projektowanie-stron-internetowych",
    metaTitle: "Projektowanie stron internetowych Poznań",
    metaDescription:
      "Projektowanie stron internetowych w Poznaniu: indywidualny projekt, kod pisany od zera, teksty pod Google. Wizytówka od 1 490 zł, płatność jednorazowa, hosting na rok w cenie.",
    hero: { title: "Projektowanie stron internetowych", subtitle: POZNAN, gruby: "Zaufaj specjalistom", lekki: "a my zajmiemy się resztą!" },
    intro: {
      lekki: "Projektowanie stron",
      gruby: "pod Twoich klientów",
      paragraphs: [
        "Projektowanie strony zaczynamy od pytań, a nie od kolorów. Kim są Twoi klienci, czego szukają w Google, o co pytają przez telefon i co ich przekonuje do zakupu. Dopiero na tej podstawie układamy sekcje, piszemy teksty i dobieramy zdjęcia.",
        "Każdą stronę projektujemy od zera, bez gotowych szablonów. Dzięki temu wygląda jak Twoja firma, a nie jak setki innych stron z tego samego motywu. Kod piszemy sami, więc strona jest lekka i szybko otwiera się także na telefonie.",
      ],
      bullets: ["Indywidualny projekt graficzny", "Teksty pisane pod wyszukiwanie", "Klikalny telefon i formularz", "Podstawowe SEO w cenie"],
      image: "/portfolio/projekt-7.png",
      imageAlt: "Projekt strony zakładu tapicerskiego z Poznania wykonany przez Webuko",
    },
    tresc1: [
      {
        title: "Dla kogo projektujemy strony",
        paragraphs: [
          "Najczęściej dla małych i średnich firm usługowych: salonów beauty, warsztatów, fachowców, gabinetów, sklepów lokalnych i firm B2B. Dla nich strona ma jedno zadanie: sprawić, żeby klient z okolicy zadzwonił albo wysłał zapytanie.",
        ],
        bullets: [
          "firmy, które nie mają jeszcze strony",
          "firmy ze starą stroną, która nie działa na telefonie",
          "firmy, które chcą być widoczne w Google w swoim mieście",
          "firmy, które potrzebują rezerwacji, wyceny lub sklepu",
        ],
      },
      {
        title: "Co obejmuje projekt strony internetowej",
        bullets: [
          "rozmowę o firmie, klientach i celu strony",
          "plan podstron i treści",
          "projekt graficzny pierwszego ekranu do akceptacji",
          "pomoc w napisaniu tekstów",
          "dobór zdjęć i ich zmniejszenie, żeby strona była lekka",
          "kodowanie i testy na telefonie, tablecie i komputerze",
          "podpięcie domeny, SSL i Search Console",
          "okres bezpłatnych poprawek po uruchomieniu",
        ],
      },
    ],
    etapyTitle: "Etapy projektowania strony internetowej",
    etapy: [
      { title: "Rozmowa i wycena", text: "Poznajemy firmę i cel strony. W ciągu 24 godzin dostajesz cenę i termin." },
      { title: "Plan i treści", text: "Ustalamy podstrony, zbieramy teksty i zdjęcia. Czego brakuje, pomagamy przygotować." },
      { title: "Projekt graficzny", text: "Pokazujemy projekt pierwszego ekranu i wprowadzamy Twoje uwagi." },
      { title: "Kodowanie i testy", text: "Budujemy stronę i sprawdzamy ją na różnych urządzeniach. Masz podgląd postępów." },
      { title: "Uruchomienie", text: "Podpinamy domenę, przekazujemy dostępy i zostajemy na okres poprawek." },
    ],
    tresc2: [
      {
        title: "Co firma otrzymuje na koniec",
        bullets: [
          "gotową stronę pod własną domeną",
          "pełne prawa autorskie do strony po zapłacie",
          "hosting i certyfikat SSL na 12 miesięcy",
          "podpięte Google Search Console",
          "krótką instrukcję obsługi",
          "30 do 90 dni bezpłatnych poprawek",
        ],
      },
    ],
    faq: [
      { question: "Ile kosztuje zaprojektowanie strony?", answer: "Strona wizytówka kosztuje 1 490 zł, strona firmowa z podstronami 2 950 zł, sklep od 5 000 zł. Płacisz raz, połowę na start i resztę po odbiorze. Nie doliczamy VAT, więc to kwoty końcowe." },
      { question: "Ile trwa projektowanie strony?", answer: "Wizytówka jest gotowa w 1 do 3 dni od momentu, w którym mamy teksty i zdjęcia. Strona firmowa zajmuje zwykle od tygodnia. Najczęściej czeka się na materiały, nie na kod." },
      { question: "Czy muszę mieć gotowe teksty?", answer: "Nie. Wystarczy rozmowa przez telefon: opowiadasz o firmie i usługach, a my przygotowujemy teksty do Twojej akceptacji." },
      { question: "Czy zobaczę projekt przed zapłatą całości?", answer: "Tak. Najpierw pokazujemy projekt pierwszego ekranu. Resztę kwoty płacisz dopiero po odbiorze gotowej strony." },
    ],
    ctaTitle: "Bezpłatna wycena projektu strony",
  },
  {
    slug: "responsywne-strony-www",
    metaTitle: "Responsywne strony internetowe Poznań",
    metaDescription:
      "Responsywne strony www, które dobrze wyglądają i działają na telefonie, tablecie i komputerze. Projekt od ekranu smartfona, szybkie ładowanie. Poznań i cała Polska.",
    hero: { title: "Responsywne strony internetowe", subtitle: POZNAN, gruby: "Twoja strona na każdym ekranie", lekki: "od telefonu po duży monitor" },
    intro: {
      lekki: "Strony, które",
      gruby: "działają na telefonie",
      paragraphs: [
        "Ponad połowa klientów wchodzi na strony firm z telefonu, często prosto z Map Google albo z Instagrama. Jeśli strona trzeba powiększać palcami, a numer telefonu nie daje się kliknąć, klient wraca do wyników i dzwoni do konkurencji.",
        "Dlatego każdy ekran projektujemy najpierw na smartfon. Przyciski są duże, numer telefonu dzwoni po jednym dotknięciu, a mapa i formularz są zawsze pod ręką. Na komputerze ta sama strona rozkłada się szerzej i pokazuje więcej.",
      ],
      bullets: ["Projekt od ekranu telefonu", "Klikalny numer i mapa", "Lekkie zdjęcia WebP", "Testy na prawdziwych urządzeniach"],
      image: "/portfolio/projekt-6.png",
      imageAlt: "Strona studia paznokci zaprojektowana od ekranu telefonu",
    },
    cechyWstep: {
      title: "Dlaczego warto?",
      paragraphs: [
        "Google ocenia strony przede wszystkim po wersji na telefon. Strona, która źle działa na smartfonie, traci pozycje w wynikach wyszukiwania, nawet jeśli na komputerze wygląda świetnie.",
      ],
      bullets: ["lepsza pozycja w Google", "więcej telefonów i zapytań", "krótszy czas ładowania", "jedna strona do obsługi zamiast dwóch"],
    },
    tresc1: [
      { title: "Dla kogo", paragraphs: ["Dla każdej firmy, której klienci szukają usług w telefonie: salonów, warsztatów, gabinetów, restauracji, fachowców dojeżdżających do klienta. W tych branżach wersja na smartfon to często jedyna wersja, jaką klient zobaczy."] },
      {
        title: "Responsywność to więcej niż zmniejszony ekran",
        paragraphs: ["Prawdziwie wygodna strona na telefonie ma inną kolejność treści niż na komputerze. Najważniejsze rzeczy są na górze, tekst jest krótszy, a przyciski duże. Dbamy też o szczegóły, które łatwo przeoczyć:"],
        bullets: ["menu, które łatwo otworzyć kciukiem", "formularze z odpowiednią klawiaturą (cyfry dla telefonu)", "zdjęcia w kilku rozmiarach, dobierane do ekranu", "brak przewijania strony na boki"],
      },
      { title: "Szybkość strony na telefonie", paragraphs: ["Na słabszym zasięgu każda sekunda ładowania to uciekający klienci. Zdjęcia zapisujemy w nowoczesnym formacie WebP, zmniejszamy je do rozmiaru ekranu i ładujemy dopiero wtedy, gdy są potrzebne."] },
      { title: "Nowa strona czy dostosowanie obecnej", paragraphs: ["Jeśli obecna strona jest zbudowana w starym kodzie, zwykle taniej i szybciej jest zrobić nową. Jeśli jest w miarę nowa, czasem wystarczy przebudowa wybranych sekcji. Powiemy uczciwie, co się bardziej opłaca, zanim cokolwiek zapłacisz."] },
    ],
    etapyTitle: "Jak pracujemy: etapy",
    etapy: [
      { title: "Sprawdzenie obecnej strony", text: "Jeśli masz stronę, sprawdzamy ją na telefonie i mierzymy szybkość." },
      { title: "Plan treści na telefon", text: "Ustalamy, co klient ma zobaczyć w pierwszych sekundach." },
      { title: "Projekt mobilny", text: "Projektujemy ekran telefonu, potem rozkładamy go na tablet i komputer." },
      { title: "Kodowanie i testy", text: "Testujemy na kilku telefonach i przeglądarkach." },
      { title: "Uruchomienie i pomiar", text: "Uruchamiamy stronę i sprawdzamy jej szybkość w narzędziach Google." },
    ],
    tresc2: [{ title: "Co firma otrzymuje", bullets: ["stronę wygodną na każdym urządzeniu", "szybkie ładowanie na telefonie", "klikalny telefon, mapę i formularz", "hosting i SSL na 12 miesięcy", "okres bezpłatnych poprawek"] }],
    faq: [
      { question: "Skąd mam wiedzieć, czy moja strona jest responsywna?", answer: "Otwórz ją na telefonie. Jeśli tekst jest drobny, trzeba powiększać ekran albo strona przesuwa się na boki, nie jest. Możemy też bezpłatnie sprawdzić ją za Ciebie." },
      { question: "Czy każda nowa strona jest responsywna?", answer: "Tak. Każda strona, którą robimy, działa na telefonie, tablecie i komputerze. To standard, nie dodatek." },
      { question: "Ile kosztuje strona responsywna?", answer: "Tyle samo co każda nasza strona: wizytówka 1 490 zł, strona firmowa 2 950 zł. Dostosowanie istniejącej strony wyceniamy po jej obejrzeniu." },
    ],
    ctaTitle: "Bezpłatna wycena strony responsywnej",
  },
  {
    slug: "modernizacje-stron-www",
    metaTitle: "Modernizacje stron www Poznań",
    metaDescription:
      "Modernizacja starej strony internetowej: nowy wygląd, wersja na telefon, szybkie ładowanie, bez utraty pozycji w Google. Bezpłatna wycena w 24 godziny.",
    hero: { title: "Modernizacje stron www", subtitle: POZNAN, gruby: "Odśwież swoją stronę", lekki: "bez utraty klientów z Google" },
    intro: {
      lekki: "Stara strona",
      gruby: "w nowej odsłonie",
      paragraphs: [
        "Strona zrobiona kilka lat temu często wygląda przestarzale, źle działa na telefonie i długo się ładuje. Klient, który na nią trafi, może pomyśleć, że firma też jest przestarzała albo już nie działa.",
        "Modernizacja to nowy wygląd, wersja na telefon i szybszy kod przy zachowaniu tego, co już działa: adresów podstron, treści, które przyprowadzają klientów z Google, i Twojej domeny.",
      ],
      bullets: ["Zachowane adresy i pozycje", "Nowy, nowoczesny wygląd", "Wersja na telefon", "Szybsze ładowanie"],
      image: "/portfolio/projekt-3.png",
      imageAlt: "Odświeżony serwis Ogólnopolskiego Towarzystwa Szachowego",
    },
    tresc1: [
      { title: "Dla kogo jest modernizacja", bullets: ["strona nie działa dobrze na telefonie", "wygląda na zrobioną wiele lat temu", "długo się ładuje", "trudno w niej cokolwiek zmienić", "oferta i ceny są nieaktualne", "przestała przyprowadzać zapytania"] },
      { title: "Odświeżenie czy przebudowa", paragraphs: ["Odświeżenie to nowy wygląd i poprawki na obecnej stronie. Przebudowa to nowa strona z przeniesieniem treści i adresów. Po obejrzeniu strony powiemy, co się bardziej opłaca. Często przebudowa okazuje się tańsza niż łatanie starego kodu."] },
      { title: "Co obejmuje modernizacja", bullets: ["przegląd obecnej strony i jej wyników w Google", "nowy projekt graficzny", "przeniesienie i odświeżenie treści", "zachowanie adresów albo przekierowania 301", "wersja na telefon", "kompresja zdjęć i szybszy kod"] },
    ],
    etapyTitle: "Jak przebiega modernizacja: etapy",
    etapy: [
      { title: "Przegląd strony", text: "Sprawdzamy stronę, jej szybkość i to, które podstrony przyprowadzają klientów." },
      { title: "Propozycja i wycena", text: "Mówimy, co zostawić, co poprawić, a co zrobić od nowa." },
      { title: "Nowy projekt", text: "Projektujemy nowy wygląd w Twoich kolorach i z Twoim logo." },
      { title: "Przeniesienie treści", text: "Przenosimy teksty i zdjęcia, ustawiamy przekierowania ze starych adresów." },
      { title: "Uruchomienie", text: "Podmieniamy stronę bez przerwy w działaniu i pilnujemy wyników w Google." },
    ],
    tresc2: [{ title: "Co firma otrzymuje", bullets: ["nowoczesną stronę pod tym samym adresem", "zachowane pozycje w Google", "wersję na telefon", "pełne prawa do nowej strony", "okres bezpłatnych poprawek"] }],
    faq: [
      { question: "Czy stracę pozycje w Google po zmianie strony?", answer: "Nie, jeśli zrobi się to dobrze. Zachowujemy adresy podstron albo ustawiamy przekierowania 301 i zgłaszamy nową mapę strony w Search Console." },
      { question: "Ile kosztuje modernizacja?", answer: "Zależy od wielkości strony. Najczęściej wychodzi tyle co nowa wizytówka (1 490 zł) albo strona firmowa (2 950 zł). Dokładną kwotę podajemy po obejrzeniu strony." },
      { question: "Czy strona będzie wyłączona na czas prac?", answer: "Nie. Nową wersję budujemy pod roboczym adresem i podmieniamy dopiero, gdy jest gotowa." },
    ],
    ctaTitle: "Bezpłatna wycena modernizacji",
  },
  {
    slug: "aktualizacja-stron-internetowych",
    metaTitle: "Aktualizacje stron internetowych Poznań",
    metaDescription:
      "Aktualizacja treści, cennika, zdjęć i podstron na Twojej stronie internetowej. Szybkie zmiany wyceniane z góry. Poznań i cała Polska.",
    hero: { title: "Aktualizacje stron internetowych", subtitle: POZNAN, gruby: "Zmiany na stronie", lekki: "szybko i bez zbędnych formalności" },
    intro: {
      lekki: "Aktualna strona",
      gruby: "to więcej zapytań",
      paragraphs: [
        "Nieaktualny cennik, stare godziny otwarcia albo usługa, której już nie robisz, to proste sposoby, żeby stracić klienta. Strona powinna mówić to samo, co mówisz przez telefon.",
        "Wprowadzamy zmiany na stronach, które zrobiliśmy, i na stronach innych wykonawców. Każdą zmianę wyceniamy z góry, zanim zaczniemy pracę.",
      ],
      bullets: ["Zmiana tekstów i cen", "Nowe zdjęcia i podstrony", "Poprawki błędów", "Wycena przed pracą"],
      image: "/portfolio/projekt-4.png",
      imageAlt: "Strona salonu Mililash z aktualnym cennikiem pobieranym z panelu",
    },
    tresc1: [
      { title: "Dla kogo", paragraphs: ["Dla firm, które nie mają czasu albo dostępu, żeby samodzielnie zmieniać stronę, i dla tych, których poprzedni wykonawca przestał odpowiadać."] },
      { title: "Jakie zmiany wprowadzamy", bullets: ["teksty, ceny i godziny otwarcia", "nowe zdjęcia i galerie", "nowe podstrony usług", "formularze i przyciski kontaktu", "poprawki wyglądu na telefonie", "dane firmy dla Google"] },
      { title: "Co sprawdzać na stronie co kilka miesięcy", bullets: ["czy cennik i oferta są aktualne", "czy formularz kontaktowy dochodzi", "czy telefon i adres są poprawne", "czy strona szybko się ładuje", "czy certyfikat SSL jest ważny"] },
      { title: "Jak zgłosić zmianę, żeby poszła sprawnie", ordered: ["Napisz, na której podstronie ma być zmiana (najlepiej z linkiem).", "Wklej nowy tekst albo dołącz zdjęcia.", "Napisz, na kiedy zmiana jest potrzebna."] },
    ],
    etapyTitle: "Jak przebiega aktualizacja: etapy",
    etapy: [
      { title: "Zgłoszenie", text: "Wysyłasz listę zmian mailem albo przez formularz." },
      { title: "Wycena", text: "Odpisujemy z ceną i terminem, zwykle tego samego dnia." },
      { title: "Wprowadzenie zmian", text: "Robimy zmiany i sprawdzamy je na telefonie i komputerze." },
      { title: "Akceptacja", text: "Pokazujemy efekt, nanosimy ewentualne poprawki." },
      { title: "Publikacja", text: "Zmiany trafiają na stronę." },
    ],
    tresc2: [
      { title: "Doraźnie czy w stałej opiece", paragraphs: ["Pojedyncze zmiany rozliczamy osobno, zawsze z ceną podaną z góry. Jeśli zmian jest dużo i regularnie, możemy umówić się na stałą opiekę. Na stronach z panelem (strona firmowa, sklep) wiele rzeczy zmienisz też sam."] },
      { title: "Co firma otrzymuje", bullets: ["aktualną stronę bez szukania wykonawcy", "cenę każdej zmiany przed pracą", "sprawdzenie zmian na telefonie", "kontakt mailowy i telefoniczny"] },
    ],
    faq: [
      { question: "Czy aktualizujecie strony zrobione przez kogoś innego?", answer: "Tak, jeśli dostaniemy dostęp do strony lub serwera. Najpierw ją oglądamy i mówimy, czy zmiana jest prosta, czy wymaga większej pracy." },
      { question: "Jak szybko wprowadzacie zmiany?", answer: "Proste zmiany tekstów i zdjęć zwykle w ciągu 1 do 2 dni roboczych od akceptacji wyceny." },
      { question: "Ile kosztuje zmiana na stronie?", answer: "Zależy od zakresu. Każdą zmianę wyceniamy przed rozpoczęciem pracy, więc nie ma niespodzianek. W okresie poprawek po uruchomieniu naszej strony drobne zmiany są bezpłatne." },
    ],
    ctaTitle: "Bezpłatna wycena zmian na stronie",
  },
  {
    slug: "strony-internetowe-z-cms",
    metaTitle: "Strony internetowe z panelem (CMS) Poznań",
    metaDescription:
      "Strona internetowa z prostym panelem do samodzielnej edycji tekstów, zdjęć, cennika i wpisów. Szkolenie w cenie. Strona firmowa 2 950 zł.",
    hero: { title: "Strony internetowe z panelem (CMS)", subtitle: POZNAN, gruby: "Zmieniaj treści sam", lekki: "bez znajomości kodu" },
    intro: {
      lekki: "Strona z",
      gruby: "prostym panelem",
      paragraphs: [
        "CMS to panel, w którym sam zmieniasz treści na stronie: teksty, zdjęcia, cennik, wpisy na blogu czy aktualności. Nie musisz za każdym razem pisać do wykonawcy i czekać.",
        "Panel przygotowujemy pod Twoją stronę, więc widzisz w nim tylko to, co faktycznie zmieniasz. Bez dziesiątek opcji, w których łatwo coś zepsuć. Po uruchomieniu pokazujemy na żywo, jak z niego korzystać.",
      ],
      bullets: ["Edycja tekstów i zdjęć", "Cennik i aktualności", "Szkolenie na żywo", "Instrukcja obsługi"],
      image: "/portfolio/projekt-4.png",
      imageAlt: "Strona salonu z cennikiem zmienianym w panelu",
    },
    tresc1: [
      { title: "Dla kogo", paragraphs: ["Dla firm, które często zmieniają ofertę, ceny albo publikują aktualności i realizacje. Jeśli treść zmienia się raz w roku, wystarczy wizytówka bez panelu, a zmiany zrobimy za Ciebie."] },
      { title: "Co można zmieniać samodzielnie", bullets: ["teksty na podstronach", "zdjęcia i galerie", "cennik i godziny otwarcia", "wpisy na blogu i aktualności", "realizacje i portfolio", "dane kontaktowe"] },
      { title: "Co lepiej zostawić nam", paragraphs: ["Zmiany układu strony, nowe funkcje, integracje i sprawy techniczne, które wpływają na bezpieczeństwo i pozycje w Google. Tu chętnie pomożemy, z ceną podaną z góry."] },
      { title: "Jak przygotowujemy panel", paragraphs: ["Najpierw ustalamy, co faktycznie będziesz zmieniać. Panel ma tylko te pola, opisane po polsku i prostym językiem. Dzięki temu obsługa zajmuje kilka minut, a nie wieczór z instrukcją."] },
    ],
    etapyTitle: "Jak przebiega współpraca: etapy",
    etapy: [
      { title: "Rozmowa", text: "Ustalamy, które treści będziesz zmieniać samodzielnie." },
      { title: "Projekt strony", text: "Projektujemy wygląd i plan podstron." },
      { title: "Strona i panel", text: "Budujemy stronę razem z panelem dopasowanym do treści." },
      { title: "Szkolenie", text: "Pokazujemy na żywo, jak dodać wpis, zmienić cenę czy zdjęcie." },
      { title: "Wsparcie", text: "Odpowiadamy na pytania i pomagamy w okresie poprawek." },
    ],
    tresc2: [{ title: "Co firma otrzymuje", bullets: ["stronę z panelem do edycji", "szkolenie i instrukcję", "hosting i SSL na 12 miesięcy", "kopie zapasowe", "60 dni bezpłatnych poprawek"] }],
    faq: [
      { question: "Ile kosztuje strona z panelem?", answer: "Panel jest w pakiecie Strona firmowa za 2 950 zł (do 8 podstron, blog lub aktualności). Do wizytówki można go dodać, wycenimy to po rozmowie." },
      { question: "Czy obsługa panelu jest trudna?", answer: "Nie. Jeśli umiesz wysłać maila z załącznikiem, poradzisz sobie z panelem. Po szkoleniu dostajesz krótką instrukcję." },
      { question: "Czy mogę coś zepsuć w panelu?", answer: "Panel ma tylko pola do treści, bez ustawień technicznych. A gdyby coś poszło nie tak, mamy kopie zapasowe." },
    ],
    ctaTitle: "Bezpłatna wycena strony z panelem",
  },
  {
    slug: "sklepy-internetowe",
    metaTitle: "Sklepy internetowe Poznań",
    metaDescription:
      "Tworzenie sklepów internetowych: katalog produktów, płatności BLIK i kartą, wysyłki, regulaminy, szkolenie z obsługi. Od 5 000 zł, płatność jednorazowa.",
    hero: { title: "Sklepy internetowe", subtitle: POZNAN, gruby: "Tworzenie sklepów internetowych", lekki: "które sprzedają" },
    intro: {
      lekki: "Sklep, który",
      gruby: "łatwo obsłużysz",
      paragraphs: [
        "Dobry sklep internetowy to nie tylko lista produktów. To szybkie strony produktów na telefonie, wygodny koszyk, płatność BLIK w kilka sekund i jasne zasady dostawy oraz zwrotów.",
        "Budujemy sklepy dopasowane do skali sprzedaży: od kilkunastu produktów lokalnego producenta po większy katalog. Dbamy o płatności, wysyłki, regulaminy i szkolimy z obsługi zamówień.",
      ],
      bullets: ["Płatności BLIK i kartą", "Integracje z kurierami", "Regulaminy i zwroty", "Szkolenie z obsługi"],
      image: "/portfolio/projekt-1.png",
      imageAlt: "Aplikacja StwórzCV z płatnościami online w Stripe",
    },
    cechyWstep: {
      title: "Sklep wygodny na telefonie",
      paragraphs: ["Większość zakupów zaczyna się na smartfonie. Dlatego karty produktów, koszyk i płatność projektujemy najpierw na telefon, a zdjęcia produktów ładują się w rozmiarze dopasowanym do ekranu."],
    },
    tresc1: [
      { title: "Dla kogo budujemy sklepy", bullets: ["lokalni producenci i rzemieślnicy", "firmy, które sprzedają przez Instagram i chcą własny sklep", "sklepy stacjonarne, które chcą sprzedawać online", "firmy sprzedające usługi, bony i vouchery"] },
      { title: "Jak dobieramy rozwiązanie", paragraphs: ["Przy kilkunastu produktach wystarczy lekka sekcja sklepowa na stronie firmowej. Przy większym katalogu budujemy pełny sklep z panelem zamówień. Zawsze mówimy, co się opłaca przy Twojej skali, żebyś nie płacił za funkcje, których nie użyjesz."] },
      { title: "Co obejmuje wdrożenie sklepu", bullets: ["projekt graficzny sklepu", "katalog produktów z kategoriami", "płatności online (Przelewy24, Stripe, BLIK)", "integracje z kurierami", "regulamin, polityka zwrotów i prywatności", "konfiguracja podatków i wysyłek", "szkolenie z obsługi zamówień", "hosting i SSL na 12 miesięcy"] },
    ],
    etapyTitle: "Jak przebiega tworzenie sklepu internetowego: etapy",
    etapy: [
      { title: "Rozmowa i wycena", text: "Poznajemy produkty, skalę sprzedaży i sposób wysyłki." },
      { title: "Projekt", text: "Projektujemy stronę główną, kategorię, kartę produktu i koszyk." },
      { title: "Budowa sklepu", text: "Kodujemy sklep, podpinamy płatności i wysyłki." },
      { title: "Produkty i testy", text: "Wgrywamy produkty i robimy testowe zamówienia." },
      { title: "Start i szkolenie", text: "Uruchamiamy sprzedaż i pokazujemy, jak obsługiwać zamówienia." },
    ],
    tresc2: [
      { title: "Ile kosztuje sklep internetowy", paragraphs: ["Sklep z integracjami kosztuje od 5 000 zł, płatne jednorazowo: połowa na start, reszta po uruchomieniu. Ostateczna cena zależy od liczby produktów, wariantów, integracji i tego, czy przenosimy dane z innego sklepu."] },
      { title: "Co firma otrzymuje", bullets: ["gotowy sklep pod własną domeną", "działające płatności i wysyłki", "panel do obsługi zamówień", "pełne prawa do sklepu", "90 dni bezpłatnych poprawek"] },
    ],
    faq: [
      { question: "Ile trwa zrobienie sklepu?", answer: "Zwykle od 3 tygodni. Najdłużej trwa zwykle przygotowanie zdjęć i opisów produktów." },
      { question: "Czy pobieracie prowizję od sprzedaży?", answer: "Nie. Płacisz raz za wykonanie sklepu. Prowizje pobiera tylko operator płatności (np. Przelewy24 czy Stripe) według swojego cennika." },
      { question: "Czy mogę sam dodawać produkty?", answer: "Tak. Dostajesz panel, w którym dodasz produkt, zmienisz cenę czy stan magazynu. Pokazujemy to na szkoleniu." },
    ],
    ctaTitle: "Bezpłatna wycena sklepu internetowego",
  },
  {
    slug: "systemy-rezerwacji-online",
    metaTitle: "Systemy rezerwacji online dla salonów i gabinetów",
    metaDescription:
      "Własny system rezerwacji online na stronie: wybór usługi, osoby i wolnego terminu, potwierdzenia mailem, panel z kalendarzem i Kalendarz Google. Bez prowizji od wizyt.",
    hero: { title: "Systemy rezerwacji online", subtitle: "dla salonów, gabinetów i warsztatów", gruby: "Klient rezerwuje sam", lekki: "a Ty nie płacisz prowizji od wizyt" },
    intro: {
      lekki: "Rezerwacje",
      gruby: "na Twojej stronie",
      paragraphs: [
        "Gotowe systemy rezerwacji pobierają abonament albo prowizję i wyglądają tak samo w każdym salonie. Własny system jest częścią Twojej strony, w Twoich kolorach, a każda rezerwacja zostaje u Ciebie.",
        "Taki system zbudowaliśmy dla salonu stylizacji rzęs Mililash w Poznaniu: klientka wybiera zabieg, stylistkę i wolny termin, dostaje potwierdzenie mailem, a salon widzi wizyty w panelu i w Kalendarzu Google.",
      ],
      bullets: ["Wybór usługi, osoby i terminu", "Potwierdzenia i odwołania", "Panel z kalendarzem", "Synchronizacja z Kalendarzem Google"],
      image: "/portfolio/projekt-4.png",
      imageAlt: "System rezerwacji online salonu Mililash",
    },
    tresc1: [
      { title: "Dla kogo", bullets: ["salony beauty, fryzjerzy, barberzy", "gabinety kosmetyczne i fizjoterapia", "warsztaty i wulkanizacje", "szkoły i kursy z zapisami na terminy"] },
      { title: "Co potrafi system", bullets: ["rezerwacja tylko z wolnych terminów", "różne ceny i czas zabiegów dla różnych osób", "grafik pracy i urlopy", "ręczne dodawanie wizyt z telefonu i Instagrama", "link do odwołania wizyty bez logowania", "cennik na stronie pobierany z panelu"] },
      { title: "A co z Booksy?", paragraphs: ["Jeśli korzystasz z Booksy i jesteś zadowolony, nie musisz z niego rezygnować. Strona dostanie wtedy wyraźny przycisk rezerwacji. Własny system ma sens, gdy prowizje i abonament zaczynają boleć albo chcesz mieć klientów u siebie."] },
    ],
    etapyTitle: "Jak przebiega wdrożenie: etapy",
    etapy: [
      { title: "Rozmowa", text: "Poznajemy usługi, grafik i sposób zapisywania wizyt." },
      { title: "Plan systemu", text: "Ustalamy, jakie dane klient podaje i jakie powiadomienia dostaje." },
      { title: "Budowa", text: "Budujemy rezerwacje i panel w kolorach Twojej strony." },
      { title: "Testy", text: "Sprawdzamy system na salonie testowym, żeby nie zgubić żadnej wizyty." },
      { title: "Start i szkolenie", text: "Uruchamiamy rezerwacje i uczymy obsługi panelu." },
    ],
    tresc2: [{ title: "Co firma otrzymuje", bullets: ["rezerwacje online na własnej stronie", "panel z kalendarzem dnia, tygodnia i miesiąca", "brak prowizji od wizyt", "szkolenie i wsparcie"] }],
    faq: [
      { question: "Ile kosztuje system rezerwacji?", answer: "Wyceniamy go osobno, po rozmowie o tym, jak pracuje Twój salon lub gabinet: ile osób, ile usług, jakie powiadomienia. Płacisz raz, bez prowizji od wizyt." },
      { question: "Czy wizyty będą w moim telefonie?", answer: "Tak. System łączy się z Kalendarzem Google, więc wizyty widzisz też w telefonie." },
      { question: "Czy klient musi zakładać konto?", answer: "Nie. Podaje imię, telefon i e-mail, a wizytę może odwołać z linku w mailu." },
    ],
    ctaTitle: "Bezpłatna wycena systemu rezerwacji",
  },
  {
    slug: "pozycjonowanie-stron-www",
    metaTitle: "Pozycjonowanie stron www Poznań",
    metaDescription:
      "Pozycjonowanie stron internetowych: audyt SEO, poprawki techniczne, treści pod frazy klientów, Search Console i raporty. Poznań i cała Polska.",
    hero: { title: "Pozycjonowanie stron www", subtitle: POZNAN, gruby: "Więcej klientów z Google", lekki: "bez płacenia za każde kliknięcie" },
    intro: {
      lekki: "Pozycjonowanie, które",
      gruby: "przyprowadza klientów",
      paragraphs: [
        "Pozycjonowanie (SEO) to praca nad tym, żeby Twoja strona pojawiała się wyżej w Google na frazy, które wpisują klienci, na przykład „mechanik Poznań” czy „naprawa kanapy Jeżyce”. Kliknięcia z bezpłatnych wyników nic nie kosztują, więc dobrze wypozycjonowana strona pracuje na Ciebie latami.",
        "SEO robimy na co dzień na własnym produkcie (StwórzCV): co tydzień sprawdzamy w Search Console, które strony rosną, a które wypadają z indeksu. To samo podejście stosujemy u klientów: liczą się telefony i zapytania, a nie sam ruch.",
      ],
      bullets: ["Audyt SEO strony", "Poprawki techniczne", "Treści pod frazy klientów", "Raporty z Search Console"],
      image: "/portfolio/projekt-1.png",
      imageAlt: "StwórzCV, serwis rozwijany z pomocą SEO i Search Console",
    },
    tresc1: [
      { title: "Dla kogo", paragraphs: ["Dla firm, które mają stronę, ale klienci nie znajdują jej w Google, i dla tych, które chcą zmniejszyć wydatki na reklamy. Najszybsze efekty daje zwykle pozycjonowanie lokalne, na frazy z nazwą miasta lub dzielnicy."] },
      { title: "Od czego zaczynamy: audyt SEO strony", paragraphs: ["Sprawdzamy, które podstrony są w indeksie Google, jak szybko się ładują, czy mają poprawne tytuły i opisy, na jakie frazy już się wyświetlają i gdzie tracą klientów. Z audytu powstaje lista konkretnych poprawek ułożona od najważniejszej."] },
    ],
    etapyTitle: "Co obejmuje pozycjonowanie",
    etapy: [
      { title: "Optymalizacja strony", text: "Tytuły, opisy, nagłówki i treści dopasowane do fraz, które wpisują klienci." },
      { title: "Sprawy techniczne", text: "Indeksacja, szybkość, mapa strony, przekierowania i dane strukturalne." },
      { title: "Treści", text: "Nowe podstrony usług i odpowiedzi na pytania klientów, pisane z wiedzą o Twojej branży." },
      { title: "Profil firmy w Google", text: "Uzupełniony profil w Mapach Google, połączony ze stroną." },
      { title: "Pomiar", text: "Search Console i analityka: wyświetlenia, kliknięcia i zapytania." },
    ],
    tresc2: [
      { title: "Pomiar i raporty", paragraphs: ["Co miesiąc dostajesz krótki raport prostym językiem: na jakie frazy strona się pokazuje, ile osób z nich weszło, co zrobiliśmy i co planujemy dalej. Bez zrzutów z narzędzi, których nikt nie czyta."] },
      { title: "Uczciwie o efektach", paragraphs: ["Nikt nie może zagwarantować pierwszego miejsca w Google. Pierwsze efekty pozycjonowania widać zwykle po 2 do 4 miesiącach. Nie stosujemy farm linków ani masowo generowanych tekstów, bo za to Google karze całą domenę."] },
    ],
    faq: [
      { question: "Ile kosztuje pozycjonowanie?", answer: "Zależy od konkurencji w branży i stanu strony. Najpierw robimy audyt, potem podajemy miesięczną kwotę i zakres prac. Bez długich umów na start." },
      { question: "Kiedy zobaczę efekty?", answer: "Pierwsze zmiany w wyświetleniach widać zwykle po kilku tygodniach, wyraźne efekty po 2 do 4 miesiącach." },
      { question: "Czy pozycjonujecie strony zrobione przez kogoś innego?", answer: "Tak. Jeśli strona ma poważne problemy techniczne, powiemy o tym w audycie i zaproponujemy rozwiązanie." },
    ],
    ctaTitle: "Bezpłatna wycena pozycjonowania",
  },
  {
    slug: "pozycjonowanie-lokalne",
    metaTitle: "Pozycjonowanie lokalne Poznań: Mapy Google",
    metaDescription:
      "Pozycjonowanie lokalne w Poznaniu i okolicach: profil firmy w Google, opinie, podstrony lokalne i spójne dane firmy. Więcej telefonów od klientów z okolicy.",
    hero: { title: "Pozycjonowanie lokalne", subtitle: "Poznań i okolice", gruby: "Widoczność w Mapach Google", lekki: "i w wynikach z nazwą miasta" },
    intro: {
      lekki: "Klienci",
      gruby: "z Twojej okolicy",
      paragraphs: [
        "Gdy ktoś wpisuje „hydraulik Swarzędz” albo „salon rzęs Jeżyce”, Google pokazuje najpierw mapę z trzema firmami, a dopiero pod nią zwykłe strony. Te trzy miejsca zbierają większość telefonów.",
        "Pozycjonowanie lokalne to praca nad tym, żeby Twoja firma była w tych trzech miejscach i wysoko pod mapą: uzupełniony profil firmy, opinie, strona z opisanym obszarem działania i spójne dane w internecie.",
      ],
      bullets: ["Profil firmy w Google", "Opinie klientów", "Podstrony dzielnic i miejscowości", "Spójna nazwa, adres i telefon"],
      image: "/portfolio/projekt-7.png",
      imageAlt: "Strona zakładu tapicerskiego pisana pod lokalne wyszukiwania w Poznaniu",
    },
    tresc1: [
      { title: "Jak Google wybiera firmy do wyników lokalnych", paragraphs: ["Liczą się trzy rzeczy: dopasowanie (czy firma robi to, czego ktoś szuka), odległość (jak blisko jest szukającego) i renoma (opinie, wzmianki, strona). Na odległość nie mamy wpływu, na dwie pozostałe tak."] },
    ],
    etapyTitle: "Co obejmuje pozycjonowanie lokalne",
    etapy: [
      { title: "Profil firmy w Google", text: "Kategorie, usługi, godziny, zdjęcia i opis uzupełnione do końca." },
      { title: "Spójne dane firmy", text: "Ta sama nazwa, adres i telefon na stronie, w Mapach i w katalogach." },
      { title: "Opinie", text: "Prosty sposób proszenia klientów o opinię i odpowiadanie na nie." },
      { title: "Podstrony lokalne", text: "Opis obszaru działania: dzielnice i miejscowości, do których dojeżdżasz." },
      { title: "Lokalne wzmianki", text: "Wpisy w sprawdzonych katalogach i lokalnych serwisach, bez spamu." },
    ],
    tresc2: [
      { title: "Dla kogo jest pozycjonowanie lokalne", bullets: ["warsztaty, wulkanizacje, mechanicy", "salony beauty i fryzjerzy", "fachowcy dojeżdżający do klienta", "gabinety i przychodnie", "restauracje i sklepy lokalne"] },
    ],
    faq: [
      { question: "Czy potrzebuję strony, żeby być w Mapach Google?", answer: "Nie, ale profil połączony ze stroną, na której opisane są usługi i obszar działania, Google lepiej rozumie i chętniej pokazuje." },
      { question: "Jak zdobyć więcej opinii?", answer: "Najlepiej prosić zadowolonych klientów od razu po usłudze, z linkiem prosto do formularza opinii. Przygotujemy taki link i krótką wiadomość do wysyłania." },
      { question: "Ile kosztuje pozycjonowanie lokalne?", answer: "Zależy od branży i konkurencji w okolicy. Po przejrzeniu profilu i strony podajemy zakres i cenę." },
    ],
    ctaTitle: "Bezpłatna wycena pozycjonowania lokalnego",
  },
  {
    slug: "reklamy-google-ads",
    metaTitle: "Reklamy Google Ads Poznań: kampanie rozliczane do sprzedaży",
    metaDescription:
      "Kampanie Google Ads w wyszukiwarce mierzone do telefonów, zapytań i sprzedaży. Wykluczanie fraz, które zjadają budżet, uczciwe raporty. Poznań i cała Polska.",
    hero: { title: "Reklamy Google Ads", subtitle: POZNAN, gruby: "Klienci z Google od pierwszego dnia", lekki: "za rozsądny budżet" },
    intro: {
      lekki: "Reklamy, które",
      gruby: "liczymy do sprzedaży",
      paragraphs: [
        "Reklama w Google pokazuje Twoją firmę na górze wyników od razu po uruchomieniu kampanii. Płacisz za kliknięcia, więc najważniejsze jest, żeby klikali ci, którzy faktycznie chcą kupić.",
        "Kampanie prowadzimy na własnym produkcie i rozliczamy je do realnej sprzedaży, a nie do kliknięć. Wiemy, które frazy przynoszą klientów, a które tylko zjadają budżet, i to samo podejście stosujemy u klientów.",
      ],
      bullets: ["Pomiar telefonów i zapytań", "Wykluczanie zbędnych fraz", "Próg stopu dla kosztu", "Raport prostym językiem"],
      image: "/portfolio/projekt-1.png",
      imageAlt: "StwórzCV, produkt z kampaniami Google Ads mierzonymi do sprzedaży",
    },
    tresc1: [
      { title: "Dla kogo", paragraphs: ["Dla firm, które potrzebują klientów szybko: nowych firm, sezonowych usług i tych, którzy dopiero budują pozycję w Google. Reklama dobrze uzupełnia pozycjonowanie, zanim zacznie ono przynosić efekty."] },
      { title: "Jak pracujemy", bullets: ["ustawiamy pomiar formularzy, telefonów i zakupów", "dobieramy frazy z intencją zakupu", "wykluczamy frazy, które nie sprzedają", "piszemy reklamy i dopasowujemy stronę docelową", "ustalamy próg kosztu, po którym zatrzymujemy kampanię", "co tydzień przeglądamy wyszukiwane hasła"] },
    ],
    etapyTitle: "Jak przebiega współpraca: etapy",
    etapy: [
      { title: "Rozmowa", text: "Ustalamy, kto jest klientem, ile jest wart i jaki budżet ma sens." },
      { title: "Pomiar", text: "Konfigurujemy analitykę, żeby każde zapytanie było policzone." },
      { title: "Kampania", text: "Tworzymy kampanię w wyszukiwarce z frazami i reklamami." },
      { title: "Optymalizacja", text: "Co tydzień wykluczamy zbędne frazy i poprawiamy reklamy." },
      { title: "Raport i decyzja", text: "Po kilku tygodniach mówimy uczciwie, czy reklama się opłaca." },
    ],
    tresc2: [{ title: "Uczciwie o reklamach", paragraphs: ["Nie każdej firmie reklama się opłaca. Jeśli po teście koszt zdobycia klienta będzie wyższy niż zysk z niego, powiemy o tym wprost i zaproponujemy inne rozwiązanie, na przykład pozycjonowanie lokalne."] }],
    faq: [
      { question: "Jaki budżet na reklamy jest potrzebny?", answer: "Dla lokalnej firmy usługowej rozsądny start to zwykle kilkaset złotych miesięcznie na kliknięcia. Dokładną kwotę ustalamy po sprawdzeniu, ile kosztują kliknięcia w Twojej branży." },
      { question: "Ile kosztuje prowadzenie kampanii?", answer: "Wynagrodzenie za prowadzenie wyceniamy po rozmowie, osobno od budżetu na kliknięcia, który płacisz bezpośrednio Google." },
      { question: "Czy konto reklamowe będzie moje?", answer: "Tak. Konto Google Ads zakładamy na Ciebie, a my dostajemy do niego dostęp." },
    ],
    ctaTitle: "Bezpłatna wycena kampanii Google Ads",
  },
  {
    slug: "hosting",
    metaTitle: "Hosting stron internetowych i domeny",
    metaDescription:
      "Szybki hosting stron internetowych z certyfikatem SSL i kopiami zapasowymi. Pierwszy rok w cenie każdej strony, domena na Twoje dane, poczta w domenie.",
    hero: { title: "Szybki hosting", subtitle: "Niezawodne serwery i domeny", gruby: "Pierwszy rok w cenie strony", lekki: "a potem uczciwa cena podana z góry" },
    intro: {
      lekki: "Hosting i domena",
      gruby: "bez kłopotów",
      paragraphs: [
        "Strona musi gdzieś działać. Hosting to miejsce na serwerze, a domena to adres, pod którym klienci ją znajdą. Zajmujemy się jednym i drugim, żebyś nie musiał porównywać ofert i ustawiać serwerów.",
        "Strony uruchamiamy na szybkich, nowoczesnych serwerach z certyfikatem SSL i kopiami zapasowymi. Pierwszy rok hostingu jest w cenie każdej strony. Domenę zawsze rejestrujemy na Twoje dane, więc adres jest Twoją własnością.",
      ],
      bullets: ["Certyfikat SSL", "Kopie zapasowe", "Domena na Twoje dane", "Pomoc z pocztą firmową"],
      image: "/portfolio/projekt-2.png",
      imageAlt: "Portfolio modelki działające na szybkim hostingu",
    },
    tresc1: [
      { title: "Dla kogo", paragraphs: ["Dla naszych klientów i dla firm, które mają stronę u innego wykonawcy i chcą przenieść ją w pewne miejsce."] },
      { title: "Hosting a domena: czym się różnią", paragraphs: ["Domena to adres strony, na przykład twojafirma.pl, opłacany co rok u rejestratora. Hosting to serwer, na którym strona działa. Możesz mieć domenę w jednym miejscu, a hosting w innym. Pomagamy połączyć jedno z drugim."] },
      { title: "Poczta firmowa w domenie", paragraphs: ["Adres w stylu biuro@twojafirma.pl wygląda poważniej niż skrzynka na darmowym portalu. Pomagamy założyć pocztę w domenie i skonfigurować ją w telefonie i komputerze."] },
      { title: "Odnowienie hostingu", paragraphs: ["Po pierwszym roku podajemy koszt dalszego hostingu z góry. Możesz zostać u nas albo przenieść stronę do dowolnego dostawcy, pomożemy w przeprowadzce."] },
    ],
    etapyTitle: "Jak przebiega uruchomienie: etapy",
    etapy: [
      { title: "Domena", text: "Rejestrujemy nową albo podpinamy domenę, którą już masz." },
      { title: "Serwer", text: "Uruchamiamy stronę na serwerze z certyfikatem SSL." },
      { title: "Poczta", text: "Pomagamy założyć skrzynki w domenie." },
      { title: "Kopie zapasowe", text: "Ustawiamy kopie, żeby nic nie zginęło." },
      { title: "Opieka", text: "Pilnujemy odnowień i działania strony." },
    ],
    tresc2: [{ title: "Co firma otrzymuje", bullets: ["szybki hosting z SSL na 12 miesięcy w cenie strony", "domenę zarejestrowaną na siebie", "pomoc z pocztą firmową", "kopie zapasowe", "przypomnienie przed odnowieniem"] }],
    faq: [
      { question: "Czy mogę przenieść stronę na swój hosting?", answer: "Tak. Strona jest Twoja i możesz ją przenieść w każdej chwili. Pomożemy w przeprowadzce." },
      { question: "Ile kosztuje hosting po pierwszym roku?", answer: "Podajemy go z góry, przed odnowieniem, i zależy od wielkości strony. Prosta wizytówka kosztuje niewiele, sklep więcej." },
      { question: "Czy domena będzie moja?", answer: "Tak. Domenę zawsze rejestrujemy na Twoje dane." },
    ],
    ctaTitle: "Bezpłatna wycena hostingu",
  },
];

export function getUsluga(slug: string) {
  const usluga = uslugi.find((u) => u.slug === slug);
  if (!usluga) throw new Error(`Brak usługi ${slug}`);
  return usluga;
}
