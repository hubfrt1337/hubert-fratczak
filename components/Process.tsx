import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="proces" className="bg-ink-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          dark
          eyebrow="Jak to działa"
          title="Cztery kroki od pomysłu do działającej strony"
          description="Na każdym etapie wiesz, co się dzieje i co jest potrzebne z Twojej strony."
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 0.07}>
              <div className="h-full bg-ink-950 p-7">
                <span className="font-display text-3xl font-bold text-accent-500">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
