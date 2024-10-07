import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";

export default function Home() {
  return (
    <>
      <div className="pt-14 pb-20 bg-container">
        <Header />

        <Hero />
      </div>

      <Partners />
    </>
  );
}
