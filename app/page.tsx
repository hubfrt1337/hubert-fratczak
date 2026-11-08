import Link from "next/link";
import { Strona } from "@/components/sekcje/Strona";
import { HeroGlowny } from "@/components/sekcje/Hero";
import { Tekst } from "@/components/sekcje/Tekst";
import { WycenaPas } from "@/components/sekcje/WycenaPas";
import {
  Dlaczego,
  Doswiadczenie,
  GranatCechy,
  KartyUslug,
  PasKontaktu,
  PasParallax,
  ZoltaKarta,
} from "@/components/sekcje/Bloki";
import { Liczniki } from "@/components/sekcje/Liczniki";
import { Realizacje } from "@/components/sekcje/Realizacje";
import { Testimonials } from "@/components/Testimonials";

/**
 * Strona główna Webuko. Kolejność sekcji jak u dużych agencji (wzór: webmania.pl):
 * hero → tekst → [opinie Google] → wycena → doświadczenie → pas zdjęciowy → karty usług
 * → co wyróżnia → dlaczego my → liczniki → realizacje → [opinie] → żółta karta → pas kontaktu.
 * Opinie pokażą się same, gdy w data/testimonials.ts będą prawdziwe opinie klientów.
 */
export default function HomePage() {
  return (
    <Strona>
      <HeroGlowny />
      <Tekst lekki="Projektowanie stron" gruby="Poznań">
        <p>
          Dobra strona internetowa to pierwszy krok do nowych klientów. Pomożemy Ci zbudować stronę,
          która przyciąga wzrok, jasno pokazuje ofertę i zachęca do kontaktu. Taka strona staje się
          najlepszą wizytówką Twojej firmy. <Link href="/projektowanie-stron-internetowych">Projektujemy strony
          internetowe</Link> dla firm z Poznania i całej Polski, budujemy{" "}
          <Link href="/sklepy-internetowe">sklepy</Link> i <Link href="/systemy-rezerwacji-online">systemy
          rezerwacji</Link>, a potem dbamy o to, żeby klienci znajdowali Cię w{" "}
          <Link href="/pozycjonowanie-stron-www">Google</Link>. Z nami odświeżysz wizerunek firmy,
          konkretnie przedstawisz ofertę i zdobędziesz nowe zlecenia.
        </p>
      </Tekst>
      <Testimonials />
      <WycenaPas />
      <Doswiadczenie />
      <PasParallax />
      <KartyUslug />
      <GranatCechy />
      <Dlaczego />
      <Liczniki />
      <Realizacje />
      <ZoltaKarta />
      <PasKontaktu />
    </Strona>
  );
}
