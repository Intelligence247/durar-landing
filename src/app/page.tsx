import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Classes } from "@/components/Classes";
import { HaveAllah } from "@/components/HaveAllah";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <div className="pt-14 pb-20 bg-container">
        <Header />

        <Hero />
      </div>

      <Partners />

      <Classes />

      <Pricing />

      <Testimonials />

      <FAQ />

      <HaveAllah />

      <Footer />
    </>
  );
}
