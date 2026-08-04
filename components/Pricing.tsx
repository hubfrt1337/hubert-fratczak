import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckIcon } from "./ui/Icons";
import { BudgetCta } from "./BudgetCta";
import { plans, pricingNote } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="cennik" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title="Orientacyjne widełki, bez ukrytych kosztów"
          description="Ostateczną cenę podaję po krótkiej rozmowie — zależy od liczby podstron, integracji i tego, czy masz gotowe treści. Ceny netto."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.07}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  plan.highlighted
                    ? "border-accent-600 bg-white shadow-xl shadow-accent-600/10 ring-1 ring-accent-600"
                    : "border-ink-100 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                      Najczęściej wybierany
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {plan.tagline}
                </p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-sm text-ink-500">od</span>
                  <span className="font-display text-3xl font-bold text-ink-950">
                    {plan.price}
                  </span>
                  <span className="text-sm text-ink-500">zł</span>
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  Realizacja: <span className="text-ink-800">{plan.time}</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-ink-100 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-ink-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <BudgetCta
                  budget={plan.budgetHint}
                  className={`mt-7 w-full ${
                    plan.highlighted ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Zapytaj o ten pakiet
                </BudgetCta>
              </article>
            </Reveal>
          ))}
        </div>

        {pricingNote ? (
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-ink-500">{pricingNote}</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
