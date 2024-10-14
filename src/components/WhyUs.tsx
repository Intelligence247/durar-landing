import Image from "next/image";

import { WhyUsCard } from "@/components/WhyUsCard";
import { SectionBadge } from "@/components/SectionBadge";

const whyUsCardDetails = [
  {
    heading: "Flexible Learning",
    icon: "/calendar.svg",
    content: "Learn at your own pace, whenever and wherever it suits you. you never have to worry about missing a lesson.",
  },
  {
    heading: "Expert Instructors",
    icon: "/user.svg",
    content: "Our courses are taught by highly qualified and teachers with extensive knowledge of the Qur'an and Islamic Cultures.",
  },
  {
    heading: "Structured Curriculum",
    icon: "/document.svg",
    content: "From Qur'anic recitation to study of Hadith and Fiqh, our curriculum ensures you gain understanding of Islamic teachings.",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="-scroll-m-20 px-4 md:px-12 xl:px-24 py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto text-center">
        <SectionBadge label="Why choose Us" />

        <div className="mt-14 relative">
          <Image
            width={62}
            height={62}
            alt={"Decorator Icon"}
            src={"checkcircle.svg"}
            className="hidden md:absolute -top-20 lg:-top-14 left-24 lg:left-32"
          />
          <Image
            width={90}
            height={90}
            alt={"Decorator Icon"}
            src={"achievementcup.svg"}
            className="hidden md:absolute right-0 lg:right-12 -top-24 lg:top-14"
          />

          <h2 className="md:w-4/5 lg:w-3/5 mx-auto text-darkgreen font-semibold text-2xl md:text-[36px] lg:text-[48px] md:leading-[50px] lg:leading-[75px]">
            Can’t fit learning into your <span className="text-orange">busy</span> schedule and you want to learn
            <span className="text-orange"> from experts?</span>
          </h2>

          <div className="mt-20 w-full flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-16 max-lg:max-w-[480px] max-lg:mx-auto">
            {whyUsCardDetails.map((whyUsCardDetail, index) => (
              <div key={index} className="h-full">
                <WhyUsCard index={index} icon={whyUsCardDetail.icon} heading={whyUsCardDetail.heading} content={whyUsCardDetail.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
