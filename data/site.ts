/**
 * Centralne dane strony Webuko: kontakt, menu, stopka.
 */

export const site = {
  name: "Webuko",
  role: "Tworzenie stron internetowych",
  /** Hasło pod logo i w stopce. */
  tagline: "Strony internetowe dla firm",
  /** Adres kanoniczny — z www, bo Vercel przekierowuje bezhostową wersję na www. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hubertfratczak.pl",

  email: "kontakt@hubertfratczak.pl",
  /**
   * Telefon nie trafia do HTML-a strony: przyciski „Zadzwoń” składają numer dopiero po kliknięciu
   * (na telefonie od razu dzwonią, na komputerze pokazują numer). Pusty string = przyciski znikają.
   */
  callPhone: "+48 792 760 270",
  city: "Poznań",

  // Zostaw pusty string, żeby link nie pojawił się w stopce.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  } as Record<string, string>,
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

/** Podstrony usług w menu „Oferta” (kolejność jak w menu). Dane stron: data/uslugi.ts. */
export const offerMenu = [
  { label: "Projektowanie stron internetowych", href: "/projektowanie-stron-internetowych" },
  { label: "Responsywne strony internetowe", href: "/responsywne-strony-www" },
  { label: "Modernizacje stron www", href: "/modernizacje-stron-www" },
  { label: "Aktualizacje stron internetowych", href: "/aktualizacja-stron-internetowych" },
  { label: "Strony internetowe z panelem (CMS)", href: "/strony-internetowe-z-cms" },
  { label: "Sklepy internetowe", href: "/sklepy-internetowe" },
  { label: "Systemy rezerwacji online", href: "/systemy-rezerwacji-online" },
  { label: "Pozycjonowanie stron www", href: "/pozycjonowanie-stron-www" },
  { label: "Pozycjonowanie lokalne", href: "/pozycjonowanie-lokalne" },
  { label: "Reklamy Google Ads", href: "/reklamy-google-ads" },
  { label: "Hosting i domeny", href: "/hosting" },
];

export const nav: NavItem[] = [
  { label: "O nas", href: "/o-nas" },
  { label: "Oferta", href: "/strony-internetowe", children: offerMenu },
  { label: "Współpraca", href: "/wspolpraca" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Cennik", href: "/strony-www-cennik" },
  { label: "FAQ", href: "/faq" },
  { label: "Wycena", href: "/bezplatna-wycena" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Kolumna „Informacje” w stopce. */
export const footerInfo = [
  { label: "O nas", href: "/o-nas" },
  { label: "Oferta", href: "/strony-internetowe" },
  { label: "Cennik", href: "/strony-www-cennik" },
  { label: "Współpraca", href: "/wspolpraca" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Pytania i odpowiedzi", href: "/faq" },
  { label: "Bezpłatna wycena", href: "/bezplatna-wycena" },
  { label: "Kontakt", href: "/kontakt" },
];
