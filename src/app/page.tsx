import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { WhyUs } from "@/components/WhyUs";
import { HaveAllah } from "@/components/HaveAllah";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Topics } from "@/components/Topics";
import { FloatingIcon } from "@/components/FloatingIcon";

export default function Home() {
  return (
    <main className="relative">
      <div className="pt-14 pb-20 bg-container">
        <Header />

        <Hero />
      </div>

      <Partners />

      <WhyUs />

      <Topics />

      <Process />

      <Pricing />

      <Testimonials />

      <FAQ />

      <HaveAllah />

      <Footer />

      <FloatingIcon />
    </main>
  );
}
