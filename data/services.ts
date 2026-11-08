import type { IkonaNazwa } from "@/components/ui/Icons";

/** Osiem kart usług na stronie głównej i w cenniku. Każda prowadzi do swojej podstrony. */
export const karty: { title: string; text: string; icon: IkonaNazwa; href: string }[] = [
  {
    title: "Strony internetowe Poznań",
    text: "Wizytówki i strony firmowe projektowane od zera pod Twoją firmę. Każdy projekt jest inny, więc zawsze zaczynamy od rozmowy o Twoich klientach i celu strony.",
    icon: "monitor",
    href: "/projektowanie-stron-internetowych",
  },
  {
    title: "Strony na telefon",
    text: "Większość klientów wchodzi z telefonu. Nasze strony wyglądają i działają dobrze na smartfonie, tablecie i komputerze, z klikalnym numerem i mapą pod ręką.",
    icon: "mobile",
    href: "/responsywne-strony-www",
  },
  {
    title: "Sklepy internetowe",
    text: "Sprzedajesz w internecie albo chcesz zacząć? Budujemy sklepy z płatnościami BLIK i kartą, wysyłkami i prostą obsługą zamówień, dopasowane do skali sprzedaży.",
    icon: "koszyk",
    href: "/sklepy-internetowe",
  },
  {
    title: "Modernizacje stron",
    text: "Strona sprzed kilku lat źle wygląda na telefonie i długo się ładuje? Przebudujemy ją z zachowaniem adresów, żeby nie stracić pozycji w Google.",
    icon: "odswiez",
    href: "/modernizacje-stron-www",
  },
  {
    title: "Pozycjonowanie stron",
    text: "Chcesz, żeby klienci z okolicy znajdowali Cię w Google przed konkurencją? Audyt, poprawki techniczne, treści pod frazy i profil firmy w Mapach Google.",
    icon: "szukaj",
    href: "/pozycjonowanie-stron-www",
  },
  {
    title: "Reklamy Google Ads",
    text: "Kampanie w wyszukiwarce rozliczane do telefonów, zapytań i sprzedaży, a nie do kliknięć. Wykluczamy frazy, które tylko zjadają budżet.",
    icon: "megafon",
    href: "/reklamy-google-ads",
  },
  {
    title: "Hosting i domeny",
    text: "Pierwszy rok hostingu i certyfikat SSL w cenie każdej strony. Domenę rejestrujemy na Twoje dane, a pocztę firmową podpinamy pod Twój adres.",
    icon: "serwer",
    href: "/hosting",
  },
  {
    title: "Systemy rezerwacji",
    text: "Rezerwacje online na stronie salonu, gabinetu czy warsztatu: wybór usługi, osoby i wolnego terminu, przypomnienia i panel. Bez prowizji od wizyt.",
    icon: "kalendarz",
    href: "/systemy-rezerwacji-online",
  },
];
