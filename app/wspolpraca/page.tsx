import type { Metadata } from "next";
import { Strona } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { Tekst } from "@/components/sekcje/Tekst";
import { Dlaczego, Doswiadczenie, KrokiNumerowane, PasKontaktu, PasParallax } from "@/components/sekcje/Bloki";
import { Liczniki } from "@/components/sekcje/Liczniki";
import { Realizacje } from "@/components/sekcje/Realizacje";
import { Testimonials } from "@/components/Testimonials";
import { krokiWspolpracy } from "@/data/wspolne";

export const metadata: Metadata = {
  title: "Współpraca: jak powstaje strona internetowa",
  description:
    "Jak wygląda współpraca przy tworzeniu strony: rozmowa i wycena w 24 godziny, projekt, kodowanie, uruchomienie i opieka. 50% na start, reszta po odbiorze.",
  alternates: { canonical: "/wspolpraca" },
};

export default function WspolpracaPage() {
  return (
    <Strona>
      <HeroPodstrona
        title="Jak wygląda współpraca"
        subtitle="przy tworzeniu strony internetowej"
        gruby="Doradzamy na każdym etapie"
        lekki="od pierwszej rozmowy po opiekę po starcie"
      />
      <Tekst lekki="Prosto" gruby="i bez niespodzianek">
        <p>
          Nie musisz znać się na stronach internetowych. Wystarczy, że opowiesz nam o swojej firmie
          i klientach. Resztę przeprowadzimy krok po kroku, a na każdym etapie wiesz, co się dzieje,
          ile to kosztuje i kiedy będzie gotowe. Płacisz połowę na start i resztę po odbiorze gotowej
          strony.
        </p>
      </Tekst>
      <Doswiadczenie
        liczba="24 h"
        opisGruby="tyle czekasz na wycenę"
        opisLekki="z konkretną ceną i terminem"
        tekst="Po pierwszej rozmowie albo formularzu dostajesz wycenę w ciągu doby. Bez widełek i bez dopisków drobnym drukiem: cena pakietu jest stała dla ustalonego zakresu, a każdą dodatkową rzecz wyceniamy przed rozpoczęciem pracy."
      />
      <KrokiNumerowane lekki="Nasza współpraca to" gruby="6 prostych kroków" kroki={krokiWspolpracy} />
      <PasParallax />
      <Dlaczego />
      <Liczniki />
      <Testimonials />
      <Realizacje lekki="Przykładowe" gruby="realizacje" opis="" limit={4} />
      <PasKontaktu />
    </Strona>
  );
}
