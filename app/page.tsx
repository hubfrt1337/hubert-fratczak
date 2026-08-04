import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ForWho } from "@/components/ForWho";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
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
        <ForWho />
        <Services />
        <Process />
        <Portfolio />
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
