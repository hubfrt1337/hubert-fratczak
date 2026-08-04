import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckIcon } from "./ui/Icons";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="oferta" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Oferta"
          title="Trzy rodzaje projektów, które realizuję"
          description="Zakres dobieramy do celu i budżetu — nie odwrotnie. Jeśli nie wiesz, w którą kategorię wpada Twój pomysł, po prostu napisz."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.07}>
              <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-ink-950/5">
                <span className="font-display text-sm font-bold text-accent-600">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-ink-100 pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ink-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
