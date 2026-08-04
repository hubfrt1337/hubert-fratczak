export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  /** Ścieżka do zdjęcia w /public, np. "/opinie/anna.jpg". Opcjonalne. */
  photo?: string;
};

/**
 * Opinie klientów.
 *
 * Dopóki ta tablica jest pusta, sekcja "Opinie" NIE renderuje się na stronie.
 * Żeby ją włączyć — dopisz tu prawdziwe opinie (zebrane np. przez /opinia):
 *
 *   { name: "Anna Kowalska", company: "Gabinet Dentystyczny Kowalska", quote: "...", photo: "/opinie/anna.jpg" },
 */
export const testimonials: Testimonial[] = [];
