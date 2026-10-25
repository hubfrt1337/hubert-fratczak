import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        {/* Ukryte 2026-10-25 (decyzja autora): <ForWho /> i <Process /> — komponenty zostają, wystarczy odkomentować. */}
        <Services />
        {/* Renderuje się dopiero, gdy w data/testimonials.ts pojawią się opinie. */}
        <Testimonials />
        <Pricing />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
