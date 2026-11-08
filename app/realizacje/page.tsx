import type { Metadata } from "next";
import { Strona } from "@/components/sekcje/Strona";
import { HeroPodstrona } from "@/components/sekcje/Hero";
import { Realizacje } from "@/components/sekcje/Realizacje";
import { Dlaczego, PasKontaktu } from "@/components/sekcje/Bloki";

export const metadata: Metadata = {
  title: "Realizacje stron internetowych",
  description:
    "Realizacje Webuko: strony salonów beauty z rezerwacją online, aplikacja SaaS z płatnościami, serwis organizacji, strona zakładu usługowego i portfolio. Każda z opisem.",
  alternates: { canonical: "/realizacje" },
};

export default function RealizacjePage() {
  return (
    <Strona>
      <HeroPodstrona title="Realizacje stron internetowych" />
      <Realizacje
        lekki="Nasze"
        gruby="realizacje"
        opis="Przy każdym projekcie opisaliśmy zadanie, to, co jest na stronie, i dlaczego zrobiliśmy ją właśnie tak. Oznaczamy uczciwie, które projekty są dla klientów, które własne, a które pokazowe."
      />
      <Dlaczego />
      <PasKontaktu />
    </Strona>
  );
}
