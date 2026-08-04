import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const groups = [
  {
    title: "Małe firmy lokalne",
    description:
      "Zakłady, warsztaty, firmy usługowe i budowlane, które chcą, żeby klient z okolicy znalazł je w Google zamiast konkurencji.",
  },
  {
    title: "Jednoosobowe działalności",
    description:
      "Fotografowie, trenerzy, księgowi, prawnicy — wszyscy, dla których strona jest pierwszym wrażeniem i sposobem na uwiarygodnienie oferty.",
  },
  {
    title: "Gabinety i praktyki",
    description:
      "Stomatologia, fizjoterapia, kosmetyka, medycyna. Cennik, grafik i zapisy w jednym miejscu, żeby telefon dzwonił rzadziej, a kalendarz zapełniał się sam.",
  },
  {
    title: "Sklepy wchodzące online",
    description:
      "Firmy sprzedające dotąd stacjonarnie albo przez Allegro, które chcą własnego kanału sprzedaży z płatnościami i wysyłką.",
  },
];

export function ForWho() {
  return (
    <section id="dla-kogo" className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Dla kogo to jest"
          title="Pracuję z firmami, dla których strona ma po prostu działać"
          description="Nie robię stron „dla samego posiadania strony”. Poniżej typy klientów, z którymi współpraca układa się najlepiej."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {groups.map((group, index) => (
            <Reveal as="li" key={group.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {group.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
