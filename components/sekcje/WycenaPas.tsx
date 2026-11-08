import Link from "next/link";
import { Wrap } from "./Strona";
import { Reveal } from "../ui/Reveal";
import { Ikona } from "../ui/Icons";
import { ContactForm } from "../forms/ContactForm";
import { CallButton } from "../CallReveal";
import { plans } from "@/data/pricing";

/** Morski pas „Bezpłatna wycena strony www”: ceny po lewej, formularz po prawej. */
export function WycenaPas() {
  return (
    <section
      id="wycena"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0e5856_0%,#0f6e69_100%)] py-16 sm:py-24"
    >
      <div aria-hidden="true" className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/5" />
      <Wrap className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="text-white lg:col-span-2">
            <h2 className="h-sekcja text-white">
              Bezpłatna <strong>wycena strony www</strong>
            </h2>
            <p className="mt-5 leading-relaxed text-white/90">
              Wycena jest bezpłatna i niezobowiązująca. Im więcej szczegółów podasz, tym
              dokładniej wycenimy projekt. Odpowiadamy w ciągu 24 godzin.
            </p>
            <ul className="mt-6 space-y-2.5">
              {plans.map((plan) => (
                <li key={plan.name} className="flex items-center gap-3 font-medium">
                  <Ikona name="ptaszek" className="h-5 w-5 shrink-0 text-sun-400" />
                  <span>
                    {plan.name.toLowerCase()} {plan.priceFrom ? "od " : ""}
                    <strong className="font-extrabold text-sun-400">{plan.price} zł</strong>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/strony-www-cennik" className="font-bold text-sun-300 underline-offset-4 hover:underline">
                Zobacz cennik stron www ›
              </Link>
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-white/90">
              Można też zadzwonić:
              <CallButton
                label="pokaż numer"
                showIcon={false}
                className="font-bold text-white underline underline-offset-4 hover:text-sun-300"
              />
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <div className="rounded-[10px_30px] bg-white p-6 shadow-2xl shadow-accent-950/40 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
