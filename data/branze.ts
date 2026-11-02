import type { FaqItem } from "./faq";

/**
 * Podstrony branżowe. Każda ma własny adres, tytuł i treść pod wyszukiwania
 * w stylu „strona dla salonu kosmetycznego”, a realizacje dobiera po polu `industry` w projects.ts.
 * Teksty bez myślników jako przerywnika (prośba autora).
 */
export type Industry = {
  id: "salony" | "warsztaty";
  /** Adres podstrony bez ukośnika na początku. */
  path: string;
  /** Krótka nazwa do linków w stopce i okruszków. */
  shortName: string;
  /** <title> (do niego dokleja się „| Hubert Frątczak”). */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  /** Sekcja „co musi mieć taka strona”. */
  mustHaveTitle: string;
  mustHave: { title: string; text: string }[];
  /** Sekcja tematyczna z kilkoma akapitami. */
  topic: { title: string; paragraphs: string[] };
  faq: FaqItem[];
};

export const industries: Industry[] = [
  {
    id: "salony",
    path: "strony-dla-salonow-beauty",
    shortName: "Strony dla salonów beauty",
    metaTitle: "Strony internetowe dla salonów beauty w Poznaniu",
    metaDescription:
      "Strony dla salonów rzęs, paznokci, fryzjerów i gabinetów kosmetycznych: galeria prac, cennik, rezerwacja online lub przycisk Booksy. Od 1 490 zł, płatność jednorazowa.",
    eyebrow: "Salony beauty",
    h1: "Strony internetowe dla salonów beauty",
    lead: "Dla salonów rzęs, paznokci, fryzjerów i gabinetów kosmetycznych. Klientka wchodzi z Instagrama albo z Google, widzi Twoje prace i cennik, a potem od razu rezerwuje termin.",
    mustHaveTitle: "Co musi mieć dobra strona salonu",
    mustHave: [
      {
        title: "Twoje prace na pierwszym planie",
        text: "Galeria stylizacji, najlepiej z podziałem na rodzaje efektów. Klientki wybierają oczami, więc zdjęcia sprzedają lepiej niż najładniejszy opis.",
      },
      {
        title: "Cennik czytelny na telefonie",
        text: "Zabiegi, ceny i czas trwania bez powiększania ekranu. Klientka, która od razu widzi cenę, nie musi pisać z pytaniem „ile kosztuje”.",
      },
      {
        title: "Rezerwacja jednym kliknięciem",
        text: "Przycisk prowadzący prosto do Twojego Booksy albo własny system rezerwacji na stronie, z wyborem zabiegu, stylistki i wolnego terminu.",
      },
      {
        title: "Adres, mapa i godziny",
        text: "Gdzie jest salon, jak dojechać, gdzie zaparkować i kiedy jest otwarte. To pytania, które padają przed pierwszą wizytą.",
      },
      {
        title: "Opinie klientek",
        text: "Kilka prawdziwych opinii z imieniem przekonuje nową klientkę bardziej niż zapewnienia o jakości.",
      },
      {
        title: "Widoczność w Google",
        text: "Opisy zabiegów i dane salonu ułożone tak, żeby Google pokazywał stronę osobom, które wpisują na przykład „stylizacja rzęs Poznań”.",
      },
    ],
    topic: {
      title: "Booksy czy własne rezerwacje?",
      paragraphs: [
        "Nie musisz rezygnować z Booksy. Jeśli już z niego korzystasz, strona dostaje wyraźny przycisk „Zarezerwuj”, który prowadzi prosto do Twojego profilu. Strona robi wtedy to, czego Booksy nie zrobi: pokazuje Twoje prace w Twoim stylu i pomaga znaleźć salon w Google.",
        "Jeśli wolisz mieć wszystko u siebie, mogę podpiąć system rezerwacji, który napisałem dla salonu Mililash. Klientka wybiera zabieg, stylistkę i wolny termin, dostaje potwierdzenie mailem, a Ty widzisz wizyty w panelu i w Kalendarzu Google. Bez prowizji od wizyt. Taki system wyceniam osobno, po rozmowie o tym, jak pracuje Twój salon.",
      ],
    },
    faq: [
      {
        question: "Ile kosztuje strona dla salonu?",
        answer:
          "Wizytówka z galerią prac, cennikiem, mapą i przyciskiem rezerwacji kosztuje 1 490 zł. Strona firmowa z osobną podstroną dla każdego zabiegu, lepsza pod Google, kosztuje 2 950 zł. Nie doliczam VAT, więc to kwoty końcowe. Własny system rezerwacji wyceniam osobno.",
      },
      {
        question: "Mam Instagrama. Po co mi jeszcze strona?",
        answer:
          "Klientka, która wpisuje w Google „przedłużanie rzęs Poznań”, trafia na mapę i strony salonów, a profil z Instagrama widzi rzadko. Strona zbiera w jednym miejscu to, co masz na Instagramie: prace, cennik, adres i rezerwację. Link do niej możesz wstawić w bio.",
      },
      {
        question: "Czy mogę sama zmieniać cennik i zdjęcia?",
        answer:
          "W pakiecie Strona firmowa dostajesz panel, w którym zmienisz cennik, zdjęcia i teksty bez znajomości kodu. Przy wizytówce zmiany robię ja: w okresie poprawek bezpłatnie, później wyceniam je z góry.",
      },
      {
        question: "Ile trwa zrobienie strony salonu?",
        answer:
          "Wizytówka jest gotowa w 1–3 dni od momentu, w którym mam zdjęcia prac i cennik. Najczęściej czeka się właśnie na zdjęcia, więc warto je przygotować wcześniej. Mogą być z telefonu, byle ostre i w dobrym świetle.",
      },
    ],
  },
  {
    id: "warsztaty",
    path: "strony-dla-warsztatow-i-rzemiosla",
    shortName: "Strony dla warsztatów i fachowców",
    metaTitle: "Strony internetowe dla warsztatów i fachowców w Poznaniu",
    metaDescription:
      "Strony dla mechaników, blacharzy, tapicerów, hydraulików i innych fachowców: telefon na wierzchu, usługi opisane prostym językiem, zdjęcia realizacji i obszar dojazdu. Od 1 490 zł.",
    eyebrow: "Warsztaty i rzemiosło",
    h1: "Strony internetowe dla warsztatów i fachowców",
    lead: "Dla mechaników, blacharzy, tapicerów, hydraulików i elektryków. Strona ma zrobić jedno: klient z okolicy, który szuka fachowca w Google, ma zadzwonić do Ciebie, a nie do konkurencji.",
    mustHaveTitle: "Co musi mieć strona warsztatu lub fachowca",
    mustHave: [
      {
        title: "Telefon widoczny od razu",
        text: "Numer na samej górze, który na telefonie dzwoni po jednym dotknięciu. Większość klientów nie będzie szukać kontaktu na dole strony.",
      },
      {
        title: "Usługi opisane po ludzku",
        text: "„Wymiana rozrządu”, „naprawa kanapy”, „udrożnienie rur”. Tak, jak mówią klienci i jak wpisują to w Google, bez reklamowych haseł.",
      },
      {
        title: "Zdjęcia prawdziwych realizacji",
        text: "Kilka zdjęć z telefonu z ostatnich zleceń mówi więcej niż zdjęcia z banku zdjęć. Klient widzi, że naprawdę to robisz.",
      },
      {
        title: "Obszar, w którym pracujesz",
        text: "Dzielnice i miejscowości, z których przyjmujesz zlecenia albo do których dojeżdżasz. Dzięki temu Google pokazuje stronę ludziom z okolicy.",
      },
      {
        title: "Godziny i dojazd",
        text: "Kiedy jesteś dostępny, gdzie jest warsztat i jak dojechać, z mapą.",
      },
      {
        title: "Wycena ze zdjęcia",
        text: "Formularz, do którego klient dołącza zdjęcie usterki albo mebla. Ty od razu wiesz, o co chodzi, i nie jeździsz na darmo.",
      },
    ],
    topic: {
      title: "Jak klienci szukają fachowca w Google",
      paragraphs: [
        "Wpisują usługę i miejsce: „tapicer Poznań”, „mechanik Jeżyce”, „hydraulik Swarzędz”. Na górze wyników są mapki z profilami firm, a pod nimi zwykłe strony. Dobra strona pomaga w obu miejscach, bo Google lepiej rozumie, co robisz i gdzie.",
        "Dlatego na stronie fachowca każda usługa ma swój krótki opis, a obszar pracy jest wypisany wprost. Przy wdrożeniu pokazuję też, jak połączyć stronę z profilem firmy w Google i jak prosić zadowolonych klientów o opinię.",
      ],
    },
    faq: [
      {
        question: "Ile kosztuje strona dla warsztatu?",
        answer:
          "Wizytówka z usługami, zdjęciami, mapą i formularzem kosztuje 1 490 zł. Strona firmowa z osobną podstroną dla każdej usługi, lepsza pod Google, kosztuje 2 950 zł. Nie doliczam VAT, więc to kwoty końcowe.",
      },
      {
        question: "Nie mam zdjęć realizacji. Co wtedy?",
        answer:
          "Wystarczą zdjęcia z telefonu z najbliższych zleceń. Podpowiem, jak je zrobić, żeby dobrze wyglądały. Na start mogę wstawić zdjęcia poglądowe i podmienić je, gdy pojawią się Twoje.",
      },
      {
        question: "Nie mam czasu pisać tekstów.",
        answer:
          "Nie musisz. Wystarczy rozmowa przez telefon: opowiadasz, co robisz, gdzie dojeżdżasz i o co najczęściej pytają klienci. Teksty piszę ja, a Ty tylko je sprawdzasz.",
      },
      {
        question: "Mam już profil firmy w Google. Czy strona coś da?",
        answer:
          "Tak. Profil z podpiętą stroną, na której są opisane usługi i obszar pracy, Google lepiej rozumie i chętniej pokazuje. Strona przydaje się też klientom, którzy przed telefonem chcą zobaczyć Twoje prace i ceny.",
      },
    ],
  },
];

export function getIndustry(id: Industry["id"]) {
  const industry = industries.find((item) => item.id === id);
  if (!industry) throw new Error(`Brak branży ${id}`);
  return industry;
}
