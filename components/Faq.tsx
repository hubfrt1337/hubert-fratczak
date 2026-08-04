import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ChevronIcon } from "./ui/Icons";
import { faq } from "@/data/faq";

/**
 * Akordeon na natywnych <details>/<summary> — dostępny z klawiatury i zerowy koszt JS.
 */
export function Faq() {
  return (
    <section
      id="faq"
      className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Pytania, które słyszę najczęściej"
              description="Nie ma tu Twojego pytania? Napisz — odpowiadam w ciągu 24 godzin."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink-200 border-y border-ink-200">
              {faq.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.04}>
                  <details className="group py-2">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left">
                      <h3 className="font-display text-base font-semibold text-ink-950 sm:text-lg">
                        {item.question}
                      </h3>
                      <ChevronIcon className="h-5 w-5 shrink-0 text-accent-600 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="pb-4 pr-8 text-sm leading-relaxed text-ink-600">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
