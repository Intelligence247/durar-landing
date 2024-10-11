import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";

const processContents = [
  {
    id: 1,
    header: "Click on Get started",
    content: "Check all the sections of our website page here and click the get started button  to book a session.",
  },
  {
    id: 2,
    header: "Book an interview",
    content: "Book a convenient time for a brief interview to address your questions and ensure the right course fit.",
  },
  {
    id: 3,
    header: "Start learning",
    content: "Learn at your own pace, whenever and wherever it suits you. you never have to worry about missing a lesson.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="-mt-20 mb-14 px-4 md:px-12 xl:px-0">
      <div className="relative mx-auto max-w-[1200px] pt-12 px-4 md:px-12 xl:px-[80px] pb-28 text-center rounded-[40px] bg-[#FEF9F3] border border-orange/50">
        <Image
          width={69}
          height={69}
          alt={"Decorator Icon"}
          src={"checkcircle.svg"}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
        />

        <SectionBadge label="Process" />

        <h2 className="text-darkgreen font-semibold text-xl md:text-3xl md:leading-10 mt-12">Get started in 3 simple steps</h2>

        <div className="mt-10 flex justify-between gap-6 flex-col max-lg:max-w-[480px] max-lg:mx-auto items-center lg:items-stretch lg:flex-row">
          {processContents.map((processContent, index) => (
            <div className="flex flex-col items-center lg:max-w-[225px]" key={index}>
              <p className="h-11 w-11 rounded-full bg-orange text-white flex justify-center items-center text-[28px] leading-[42px] font-semibold">
                {processContent.id}
              </p>

              <h3 className="mt-5 mb-3 text-high font-semibold text-xl leading-8"> {processContent.header}</h3>

              <p className="text-low font-normal text-base"> {processContent.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
