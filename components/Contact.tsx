import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./forms/ContactForm";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="kontakt" className="bg-ink-950 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent-300">Kontakt</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Opisz projekt — odeślę wycenę w 24 godziny
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-300">
                Nie musisz mieć gotowej specyfikacji. Wystarczy, że napiszesz, czym
                zajmuje się Twoja firma i co strona ma dla Ciebie robić — resztę
                ustalimy w rozmowie. Wycena jest bezpłatna i niezobowiązująca.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <dl className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm">
                <div>
                  <dt className="text-ink-400">E-mail</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-white hover:text-accent-300"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                {site.phone ? (
                  <div>
                    <dt className="text-ink-400">Telefon</dt>
                    <dd>
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="font-medium text-white hover:text-accent-300"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                ) : (
                  <div>
                    <dt className="text-ink-400">Czas odpowiedzi</dt>
                    <dd className="font-medium text-white">do 24 godzin</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
