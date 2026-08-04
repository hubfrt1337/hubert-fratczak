import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  // Brak opinii = brak sekcji. Żadnych zaślepek ani fikcyjnych cytatów.
  if (testimonials.length === 0) return null;

  return (
    <section
      id="opinie"
      className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Opinie"
          title="Co mówią klienci"
          align="center"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={`${testimonial.name}-${index}`} delay={index * 0.07}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7">
                <blockquote className="flex-1 text-sm leading-relaxed text-ink-700">
                  „{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  {testimonial.photo ? (
                    <Image
                      src={testimonial.photo}
                      alt={`${testimonial.name} — zdjęcie`}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-50 font-display text-sm font-bold text-accent-700"
                    >
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-ink-950">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink-500">{testimonial.company}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
