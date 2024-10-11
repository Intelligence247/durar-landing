import Image from "next/image";

import { CallToActionButton } from "@/components/CallToActionButton";
import { VideoPlayer } from "@/components/VideoPlayer";

export function Hero() {
  return (
    <section className="w-full px-4 md:px-8 max-w-[864px] mx-auto flex flex-col items-center gap-10 text-center mt-14">
      <div className="text-darkgreen">
        <h1 className="font-semibold text-[32px] leading-8 md:text-[60px] md:leading-[75px]">Attend Modrosah in your house at your time</h1>

        <p className="mt-5 font-medium text-sm md:text-xl md:leading-8 md:w-4/5 mx-auto">
          Durar academy is a platform for learning Qu’ran and islamic heritage without leaving your house
        </p>

        <div className="mt-10">
          <CallToActionButton />
        </div>
      </div>

      <div className="relative w-full">
        <VideoPlayer />

        <Image src={"/quote.svg"} className="absolute -top-12 -left-6 hidden lg:block" width={38} height={38} alt="Decoration Icon" />

        <Image src={"/zigzag.svg"} className="absolute bottom-6 -left-4 hidden lg:block" width={83} height={83} alt="Decoration Icon" />

        <Image
          src={"/quote.svg"}
          className="rotate-180 absolute -bottom-12 -right-6 hidden lg:block"
          width={38}
          height={38}
          alt="Decoration Icon"
        />

        <Image src={"/effect.svg"} className="absolute -top-12 -right-14 hidden lg:block" width={110} height={110} alt="Decoration Icon" />
      </div>
    </section>
  );
}
