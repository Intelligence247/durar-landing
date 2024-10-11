import Image from "next/image";

import { CallToActionButton } from "@/components/CallToActionButton";

export function HaveAllah() {
  return (
    <section className="bg-container">
      <div className="text-center py-20 relative px-4 mdpx-0 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <h3 className="text-darkgreen font-semibold text-xl md:text-[32px] md:leading-[48px] mb-10">Having knowledge of Allah takes care of your DEEN</h3>

        <CallToActionButton />

        <Image width={53} height={53} alt={"Decorator Icon"} src={"/phone.svg"} className="hidden md:absolute -left-8 xl:-left-60 top-2/3" />
        <Image width={49} height={49} alt={"Decorator Icon"} src={"/pencil.svg"} className="hidden md:absolute -right-10 lg:-right-20 top-1/2" />
      </div>
    </section>
  );
}
