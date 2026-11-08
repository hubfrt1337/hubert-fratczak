/**
 * Ręcznie pisane ikony SVG — zero zależności, jeden spójny styl (stroke 1.5).
 */

type IconProps = { className?: string };

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function ChevronIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 8 4 4 4-4" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

/** Własny zestaw ikon liniowych (siatka 24×24). Jedna funkcja, nazwy po polsku. */
const paths = {
  monitor: ["M3 5h18v11H3z", "M8 20h8", "M12 16v4", "m9 9-2 1.5L9 12", "m15 9 2 1.5-2 1.5"],
  mobile: ["M7 2.5h10v19H7z", "M10.5 18.5h3"],
  koszyk: ["M3 4h2.5l2.2 10.5h10l2-7.5H6.4", "M9.5 19.5a1 1 0 1 0 0 .01", "M17 19.5a1 1 0 1 0 0 .01"],
  odswiez: ["M4 12a8 8 0 0 1 13.7-5.6L20 8.5", "M20 4v4.5h-4.5", "M20 12a8 8 0 0 1-13.7 5.6L4 15.5", "M4 20v-4.5h4.5"],
  szukaj: ["M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z", "m15.5 15.5 5 5", "M8 12l2-2 1.5 1.5L14 9"],
  megafon: ["M3 10v4h3l7 4V6l-7 4z", "M17 9a4 4 0 0 1 0 6", "M6 14l1.5 5h2.5L9 14"],
  serwer: ["M4 4h16v6H4z", "M4 14h16v6H4z", "M8 7h.01", "M8 17h.01", "M12 7h4", "M12 17h4"],
  kalendarz: ["M4 5.5h16V20H4z", "M4 10h16", "M8 3v4", "M16 3v4", "m9 15 2 2 4-4"],
  medal: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7", "m9.5 9 1.8 1.8L15 7.3"],
  zarowka: ["M9 18h6", "M10 21h4", "M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"],
  suwaki: ["M4 6h9", "M17 6h3", "M15 4v4", "M4 12h3", "M11 12h9", "M9 10v4", "M4 18h11", "M19 18h1", "M17 16v4"],
  pioro: ["M4 20l4-1 11-11-3-3L5 16l-1 4z", "M14 6l3 3"],
  urzadzenia: ["M3 5h13v9H3z", "M7 18h5", "M9.5 14v4", "M17 9h4v11h-4z", "M19 17.5h.01"],
  kolo: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "m5.6 5.6 3.6 3.6", "m14.8 14.8 3.6 3.6", "m18.4 5.6-3.6 3.6", "m9.2 14.8-3.6 3.6"],
  piorun: ["M13 3 5 13h6l-1 8 8-10h-6l1-8z"],
  tarcza: ["M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z", "m9 12 2 2 4-4"],
  mail: ["M3 6h18v12H3z", "m3 7 9 6 9-6"],
  pinezka: ["M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z", "M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"],
  zegar: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
  dokument: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7", "M9 16h7"],
  kod: ["m8 7-5 5 5 5", "m16 7 5 5-5 5", "M13.5 5l-3 14"],
  dymek: ["M4 5h16v11H9l-5 4z", "M8 10h8", "M8 13h5"],
  rakieta: ["M12 2.5c3 2 5 5 5 9l-2 3.5H9l-2-3.5c0-4 2-7 5-9z", "M9 15l-2.5 4.5 3.5-1.2", "M15 15l2.5 4.5-3.5-1.2", "M12 9.5h.01"],
  gwiazda: ["M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"],
  klucz: ["M14.5 14a5.5 5.5 0 1 0-4.6-2.5L3 18.5V21h3v-2h2v-2h2l1.4-1.4A5.5 5.5 0 0 0 14.5 14z", "M16 8h.01"],
  cena: ["M3 12V4h8l10 10-8 8L3 12z", "M7.5 8h.01"],
  wykres: ["M4 20V4", "M4 20h16", "m7 15 4-4 3 3 5-6"],
  link: ["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1", "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"],
  baza: ["M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3z", "M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5", "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"],
  karta: ["M3 6h18v12H3z", "M3 10h18", "M7 15h3"],
  chmura: ["M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-1 8.5H7z"],
  oko: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  ptaszek: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "m8.5 12 2.5 2.5 4.5-5"],
} as const;

export type IkonaNazwa = keyof typeof paths;
/** Zgodność wstecz: stare nazwy ikon oferty. */
export type ServiceIconName = IkonaNazwa;

export function Ikona({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.6,
}: IconProps & { name: IkonaNazwa; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function ServiceIcon({ name, className = "h-6 w-6" }: IconProps & { name: IkonaNazwa }) {
  return <Ikona name={name} className={className} />;
}
