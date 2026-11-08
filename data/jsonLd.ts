import { site } from "./site";
import { cheapestPlan } from "./pricing";

/**
 * Dane strukturalne (schema.org) dla Google: firma usługowa z Poznania, obsługująca też całą Polskę.
 * Adres tylko do miasta: pracujemy u klienta albo zdalnie, bez biura dla klientów.
 */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#firma`,
  name: site.name,
  description:
    "Tworzenie stron internetowych dla firm: wizytówki, strony firmowe, sklepy i systemy rezerwacji. Płatność jednorazowa, bez abonamentu.",
  url: site.url,
  image: `${site.url}/og.png`,
  logo: `${site.url}/apple-touch-icon.png`,
  email: site.email,
  priceRange: `od ${cheapestPlan.price} zł`,
  currenciesAccepted: "PLN",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "wielkopolskie",
    addressCountry: "PL",
  },
  areaServed: [
    { "@type": "City", name: "Poznań" },
    { "@type": "Country", name: "Polska" },
  ],
  knowsLanguage: ["pl", "en"],
};

/** Okruszki (Strona główna › …) dla podstron. Ostatni element to bieżąca strona. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Strona główna", path: "" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
