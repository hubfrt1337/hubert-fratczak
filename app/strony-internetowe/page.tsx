import type { Metadata } from "next";
import { Strona } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { WycenaPas } from "@/components/sekcje/WycenaPas";
import { Dlaczego, GranatCechy, KrokiNumerowane, PasKontaktu, PasParallax } from "@/components/sekcje/Bloki";
import { Liczniki } from "@/components/sekcje/Liczniki";
import { Realizacje } from "@/components/sekcje/Realizacje";
import { OfertaCta, OfertaFaq, OfertaKafle, OfertaTresc } from "@/components/sekcje/Oferta";
import type { IkonaNazwa } from "@/components/ui/Icons";
import { zasadyOferty } from "@/data/wspolne";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Profesjonalne strony internetowe Poznań: oferta",
  description:
    "Oferta Webuko: strony wizytówki od 1 490 zł, strony firmowe 2 950 zł, sklepy od 5 000 zł, systemy rezerwacji, SEO i Google Ads. Płatność jednorazowa, bezpłatna wycena.",
  alternates: { canonical: "/strony-internetowe" },
};

const coMozemy: { title: string; icon: IkonaNazwa; href: string }[] = [
  { title: "Projektowanie stron internetowych", icon: "pioro", href: "/projektowanie-stron-internetowych" },
  { title: "Responsywne strony www", icon: "urzadzenia", href: "/responsywne-strony-www" },
  { title: "Modernizacje stron", icon: "odswiez", href: "/modernizacje-stron-www" },
  { title: "Sklepy internetowe", icon: "koszyk", href: "/sklepy-internetowe" },
  { title: "Systemy rezerwacji online", icon: "kalendarz", href: "/systemy-rezerwacji-online" },
  { title: "Strony z panelem (CMS)", icon: "suwaki", href: "/strony-internetowe-z-cms" },
  { title: "Pozycjonowanie stron", icon: "szukaj", href: "/pozycjonowanie-stron-www" },
  { title: "Reklamy Google Ads", icon: "megafon", href: "/reklamy-google-ads" },
  { title: "Hosting i domeny", icon: "serwer", href: "/hosting" },
];

export default function OfertaPage() {
  return (
    <Strona>
      <HeroPodstrona
        title="Profesjonalne strony internetowe"
        subtitle="Poznań oraz cała Polska"
        gruby="Zaufaj specjalistom"
        lekki="a my zajmiemy się resztą!"
      />
      <KrokiNumerowane
        wstep="Strona internetowa to często pierwsze miejsce, w którym klient poznaje Twoją firmę. Dla firm z Poznania i całej Polski przygotowujemy strony, które jasno pokazują ofertę i zachęcają do kontaktu. Każdy projekt strony internetowej robimy od zera, pod konkretną firmę i jej klientów."
        kroki={zasadyOferty}
      />
      <WycenaPas />
      <GranatCechy lekki="Co możemy" gruby="dla Ciebie zrobić" items={coMozemy} />
      <PasParallax />
      <Dlaczego />
      <Liczniki />
      <Realizacje lekki="Przykładowe" gruby="realizacje" opis="" limit={4} />
      <OfertaKafle
        title="Rodzaje stron internetowych: jaka strona dla Twojej firmy"
        intro="Strony internetowe dla firm różnią się zakresem. Poniżej cztery najczęstsze rozwiązania. Jeśli nie wiesz, które wybrać, napisz: doradzimy bezpłatnie."
        items={[
          {
            title: "Strona wizytówka (landing page): 1 490 zł",
            text: "Jedna strona podzielona na sekcje: oferta, o firmie, galeria, opinie, mapa i kontakt. Najlepsza dla małych firm usługowych, które chcą szybko pojawić się w sieci. Gotowa w 1 do 3 dni.",
            icon: "monitor",
          },
          {
            title: "Strona firmowa z podstronami: 2 950 zł",
            text: "Do 8 podstron, osobna podstrona dla każdej usługi, blog lub aktualności i panel do edycji treści. Lepsza pod Google, bo każda usługa może pojawiać się na swoje frazy.",
            icon: "dokument",
          },
          {
            title: "Sklep internetowy: od 5 000 zł",
            text: "Katalog produktów, płatności BLIK i kartą, wysyłki, regulaminy i szkolenie z obsługi zamówień. Bez prowizji od sprzedaży.",
            icon: "koszyk",
          },
          {
            title: "Serwis z dodatkowymi funkcjami: wycena indywidualna",
            text: "Systemy rezerwacji, panele klienta, kalkulatory, konta użytkowników i płatności cykliczne. Wyceniamy po rozmowie o tym, jak działa Twoja firma.",
            icon: "kod",
          },
        ]}
      />
      <OfertaTresc
        blocks={[
          {
            title: "Ile kosztuje strona internetowa i od czego zależy cena",
            paragraphs: ["Cena pakietu jest stała dla podanego zakresu. Na ostateczną kwotę wpływają głównie:"],
            bullets: [
              "liczba podstron i różnych układów",
              "funkcje: formularze, rezerwacje, kalkulatory",
              "liczba wersji językowych",
              "w sklepie: liczba produktów i integracji",
              "przeniesienie treści ze starej strony",
            ],
          },
          {
            title: "Szybkość, bezpieczeństwo i struktura pod SEO",
            paragraphs: [
              "Każdą stronę piszemy od zera, bez ciężkich szablonów, więc ładuje się szybko także na telefonie. Certyfikat SSL i kopie zapasowe są w standardzie.",
              "Tytuły, opisy, nagłówki, dane firmy dla Google i mapa strony są przygotowane już przy uruchomieniu. To dobry start do późniejszego pozycjonowania.",
            ],
          },
          {
            title: "Co warto przygotować przed rozmową",
            paragraphs: ["Wycena jest dokładniejsza, gdy wiemy kilka rzeczy. Nie musisz mieć wszystkiego, wystarczy krótka odpowiedź:"],
            ordered: [
              "Jaki jest cel strony: telefony, zapytania, rezerwacje czy sprzedaż?",
              "Kim są Twoi klienci i skąd przychodzą?",
              "Jakie usługi lub produkty mają być na stronie?",
              "Czy masz logo, zdjęcia i teksty?",
              "Strony, które Ci się podobają (także konkurencji).",
            ],
          },
          {
            title: "Którą usługę wybrać",
            paragraphs: [
              "Mała firma usługowa najczęściej zaczyna od wizytówki. Jeśli masz kilka usług i chcesz klientów z Google, lepsza będzie strona firmowa z osobną podstroną dla każdej usługi. Sprzedajesz produkty? Wtedy sklep. W razie wątpliwości zadzwoń, doradzimy w 10 minut.",
            ],
          },
        ]}
      />
      <OfertaFaq items={faq} />
      <OfertaCta />
      <PasKontaktu />
    </Strona>
  );
}
