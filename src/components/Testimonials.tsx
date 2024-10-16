import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SectionBadge } from "@/components/SectionBadge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonialsContent = [
  {
    image: "/male.webp",
    name: "Binnal Mukhtar",
    title: "Dubai",
    remark:
      "I enrolled my sons, Meer and Afan, at Durar Academy, and the results have been incredible. They can now read the Qur'an and understand basic Arabic expressions. I appreciate the academy's excellent teaching.",
  },
  {
    image: "/female.webp",
    name: "Lawal Surat Abiodun",
    title: "Nigeria",
    remark:
      "I never thought I could learn to recite the Qur'an, especially starting so late in life. But in just four months, Durar Academy helped me achieve that dream. The support and patience of my teachers made all the difference in just 4 months. I'm so grateful!",
  },
  {
    image: "/male.webp",
    name: "Balogun Nurudeen",
    title: "United States of America",
    remark:
      "I enrolled my two daughters and son at Durar Academy with no prior knowledge of Arabic. Now, they not only read and write it but have completely fallen in love with the language. I'm truly impressed by their progress!",
  },
  {
    image: "/female.webp",
    name: "Asiyah Omolara ",
    title: "United Kingdom",
    remark:
      "I enrolled both my 2 kids at Durar Academy, and despite balancing their Western education, they can now recite the Qur'an fluently. The progress they’ve made is truly amazing, and I’m so thankful for the academy’s support.",
  },
  {
    image: "/female.webp",
    name: "Feryal Behboodi",
    title: "Bahrain",
    remark:
      "I joined Durar Academy with only basic Arabic knowledge. Now, I can recite the Qur'an and understand the Arabic language much better. It was quite challenging but the improvement has been remarkable!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="-scroll-m-16 py-20 relative text-center bg-container-1">
      <Image
        src={"achievementbadge.svg"}
        width={63}
        height={63}
        className="hidden md:absolute top-28 left-20 lg:left-52"
        alt="Decorator Icon"
      />
      <Image src={"heart.svg"} width={68} height={68} className="hidden md:absolute top-16 right-12 lg:right-36" alt="Decorator Icon" />

      <SectionBadge label="Testimonials" />

      <Carousel className="mt-20 md:ml-8 xl:ml-32">
        <CarouselContent className="mx-4 gap-7 text-left">
          {testimonialsContent.map((testimonialContent, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "max-w-[580px] basis-full md:basis-4/5 lg:basis-2/5 rounded-3xl px-6 md:px-12 py-8 md:py-16 text-white flex flex-col gap-5",
                index % 2 === 0 ? "bg-orange" : "bg-darkgreen"
              )}>
              <div className="flex items-center gap-5">
                <Image src={testimonialContent.image} width={55} height={55} alt={testimonialContent.name} className="rounded-full" />

                <div>
                  <h3 className="font-semibold text-lg">{testimonialContent.name}</h3>
                  <p className="font-normal text-xs">{testimonialContent.title}</p>
                </div>
              </div>

              <p className="text-base md:text-xl md:leading-8">
                <q>{testimonialContent.remark}</q>
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex gap-4 w-fit lg:ml-auto lg:mr-32 mx-auto mt-16">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-12 w-12 text-white hover:text-white bg-orange border-orange hover:bg-orange/90">
            <ArrowLeft className="w-6 h-6" />
          </CarouselPrevious>
          <CarouselNext className="relative right-0 top-0 translate-y-0 h-12 w-12 text-white hover:text-white bg-darkgreen border-darkgreen hover:bg-darkgreen/90">
            <ArrowRight className="w-6 h-6" />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
}
