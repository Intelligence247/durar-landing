import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Classes } from "@/components/Classes";
import { HaveAllah } from "@/components/HaveAllah";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="pt-14 pb-20 bg-container">
        <Header />

        <Hero />
      </div>

      <Partners />

      <Classes />

      <HaveAllah />

      <Footer />
    </>
  );
}
