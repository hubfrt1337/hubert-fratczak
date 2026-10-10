/**
 * Centralne dane strony — wszystko, co podmieniasz najczęściej, jest tutaj.
 * Placeholdery w [NAWIASACH] zamień na własne treści.
 */

export const site = {
  name: "Hubert Frątczak",
  role: "Tworzenie stron internetowych",
  /** Adres kanoniczny — z www, bo Vercel przekierowuje bezhostową wersję na www. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hubertfratczak.pl",

  email: "kontakt@hubertfratczak.pl",
  /**
   * Pusty string = telefon w ogóle nie pojawia się na stronie (ani w stopce,
   * ani w sekcji kontakt). Wpisz numer, żeby go przywrócić.
   */
  phone: "",
  /** Wersja do linku tel: — bez spacji, np. "+48792760270". */
  phoneHref: "",
  /**
   * Numer pokazywany dopiero po kliknięciu "Pokaż numer" w sekcji kontakt.
   * Nie ma go w HTML-u strony, więc proste boty zbierające numery go nie widzą.
   * Pusty string = karta "Wolisz porozmawiać?" znika.
   */
  callPhone: "+48 792 760 270",
  /** Pusty string = miasto nie pojawia się w stopce. */
  city: "",

  // Zostaw pusty string, żeby link nie pojawił się w stopce.
  social: {
    linkedin: "",
    github: "",
    facebook: "",
    instagram: "",
  } as Record<string, string>,
};

// Ścieżki z "/" na początku, żeby linki działały też z podstron (np. polityki prywatności).
export const nav = [
  { label: "Oferta", href: "/#oferta" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Cennik", href: "/#cennik" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;
