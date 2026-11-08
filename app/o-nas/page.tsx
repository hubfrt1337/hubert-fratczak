import type { Metadata } from "next";
import { Strona } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { Tekst } from "@/components/sekcje/Tekst";
import { Dlaczego, GranatCechy, PasKontaktu, PasParallax } from "@/components/sekcje/Bloki";
import { Liczniki } from "@/components/sekcje/Liczniki";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "O nas: strony internetowe Poznań",
  description:
    "Webuko: projektujemy i kodujemy strony internetowe, sklepy i systemy rezerwacji dla firm z Poznania i całej Polski. Płacisz raz, strona jest Twoja.",
  alternates: { canonical: "/o-nas" },
};

export default function ONasPage() {
  return (
    <Strona>
      <HeroPodstrona
        title="Webuko"
        subtitle="Strony internetowe Poznań"
        gruby="Wspieramy firmy w internecie"
        lekki="od pierwszej strony po klientów z Google"
      />
      <Tekst lekki="Kim" gruby="jesteśmy">
        <p>
          Jesteśmy studiem z Poznania, które projektuje i koduje strony internetowe, sklepy i systemy
          rezerwacji dla małych i średnich firm. Robimy cały proces w jednym miejscu: rozmowę o firmie,
          projekt graficzny, teksty, kod, uruchomienie, domenę i hosting, a potem widoczność w Google.
        </p>
        <p>
          Strony piszemy od zera w nowoczesnej technologii, bez gotowych szablonów. Dlatego są lekkie,
          szybko się ładują na telefonie i wyglądają jak firma, dla której powstały. Rozwijamy też własny
          produkt internetowy z płatnościami, wersjami językowymi i reklamami mierzonymi do sprzedaży.
          To, co robimy u klientów, najpierw sprawdzamy u siebie.
        </p>
        <p>
          Pracujemy uczciwie i konkretnie: cena jest stała i znana przed startem, płacisz połowę na
          początku, a resztę po odbiorze. Po zapłacie strona i domena są Twoje.
        </p>
      </Tekst>
      <Liczniki />
      <GranatCechy
        lekki="Nasze"
        gruby="atuty"
        wstep={{
          title: "Co oferujemy:",
          paragraphs: [
            "Strony wizytówki, strony firmowe z podstronami usług, sklepy internetowe, systemy rezerwacji online, modernizacje starych stron, pozycjonowanie, reklamy Google Ads, hosting i domeny.",
          ],
          bullets: [
            "płatność jednorazowa, bez abonamentu",
            "hosting na rok w cenie",
            "pełne prawa do strony po zapłacie",
            "do 90 dni bezpłatnych poprawek",
          ],
        }}
      />
      <PasParallax />
      <Dlaczego />
      <Testimonials />
      <PasKontaktu />
    </Strona>
  );
}
