import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SectionBadge } from "@/components/SectionBadge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonialsContent = [
  {
    image: "/male.webp",
    name: "Uthman Sodeeq",
    title: "Student, Qur’an Studies",
    remark:
      "Durar Academy has deepened my Qur'anic knowledge with flexible, high-quality lessons. The supportive community makes learning enjoyable and fulfilling.",
  },
  {
    image: "/female.webp",
    name: "Fatima Mahmoud",
    title: "Parent of a Student",
    remark:
      "My daughter has made incredible progress in Qur'an memorization. The interactive lessons and dedicated instructors make learning both effective and enjoyable.",
  },
  {
    image: "/male.webp",
    name: "Uthman Sodeeq",
    title: "Student, Qur’an Studies",
    remark:
      "Durar Academy has deepened my Qur'anic knowledge with flexible, high-quality lessons. The supportive community makes learning enjoyable and fulfilling.",
  },
  {
    image: "/female.webp",
    name: "Fatima Mahmoud",
    title: "Parent of a Student",
    remark:
      "My daughter has made incredible progress in Qur'an memorization. The interactive lessons and dedicated instructors make learning both effective and enjoyable.",
  },
  {
    image: "/male.webp",
    name: "Uthman Sodeeq",
    title: "Student, Qur’an Studies",
    remark:
      "Durar Academy has deepened my Qur'anic knowledge with flexible, high-quality lessons. The supportive community makes learning enjoyable and fulfilling.",
  },
  {
    image: "/female.webp",
    name: "Fatima Mahmoud",
    title: "Parent of a Student",
    remark:
      "My daughter has made incredible progress in Qur'an memorization. The interactive lessons and dedicated instructors make learning both effective and enjoyable.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="-scroll-m-16 py-20 relative text-center bg-container-1">
      <Image src={"achievementbadge.svg"} width={63} height={63} className="hidden md:absolute top-28 left-20 lg:left-52" alt="Decorator Icon" />
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
