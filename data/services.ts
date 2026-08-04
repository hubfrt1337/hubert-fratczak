export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "wizytowka",
    title: "Strona wizytówka",
    description:
      "Prosta, szybka strona informacyjna dla małej firmy. Klient wchodzi, w 10 sekund wie czym się zajmujesz i jak się z Tobą skontaktować.",
    points: [
      "Jedna lub kilka podstron (oferta, o firmie, kontakt)",
      "Formularz kontaktowy i klikalny telefon",
      "Podstawowe SEO i Google Maps",
      "Gotowa do wyświetlania na telefonie",
    ],
  },
  {
    id: "sklepy",
    title: "Integracje ze sklepami",
    description:
      "Wdrożenia e-commerce i podpinanie tego, co sprzedaje: płatności, wysyłki, systemów sprzedażowych i magazynowych.",
    points: [
      "Uruchomienie sklepu lub sekcji sklepowej",
      "Płatności online (Przelewy24, Stripe, BLIK)",
      "Integracje z kurierami i systemem magazynowym",
      "Konfiguracja podatków, wysyłek i regulaminów",
    ],
  },
  {
    id: "wieksze-projekty",
    title: "Większe projekty",
    description:
      "Rozbudowane serwisy pod indywidualne potrzeby — kiedy gotowe szablony przestają wystarczać.",
    points: [
      "Panele, kalkulatory, systemy rezerwacji",
      "Blog i strefa dla klientów",
      "Integracje z zewnętrznymi API i CRM",
      "Wielojęzyczność i rozbudowana analityka",
    ],
  },
];
