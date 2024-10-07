import Image from "next/image";

import { ClassesCard } from "@/components/ClassesCard";
import { SectionBadge } from "@/components/SectionBadge";

const classesCardsDetails = [
  {
    heading: "Flexible Learning",
    icon: "/calendar.svg",
    content: "Learn at your own pace, whenever and wherever it suits you. you never have to worry about missing a lesson.",
  },
  {
    heading: "Expert Instructors",
    icon: "/user.svg",
    content: "Our courses are taught by highly qualified and teachers with extensive knowledge of the Qur'an and Islamic heritage.",
  },
  {
    heading: "Structured Curriculum",
    icon: "/document.svg",
    content: "From Qur'anic recitation to study of Hadith and Fiqh, our curriculum ensures you gain understanding of Islamic teachings.",
  },
];

export function Classes() {
  return (
    <section className="px-24 py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto text-center">
        <SectionBadge label="Why choose Us" />

        <div className="mt-14 relative">
          <Image width={62} height={62} alt={"Decorator Icon"} src={"checkcircle.svg"} className="absolute -top-14 left-32" />
          <Image width={90} height={90} alt={"Decorator Icon"} src={"achievementcup.svg"} className="absolute right-12 top-14" />

          <h2 className="w-3/5 mx-auto text-darkgreen font-semibold text-[50px] leading-[75px]">
            Can’t fit learning into your <span className="text-orange">busy</span> schedule and you want to learn
            <span className="text-orange"> from expert?</span>
          </h2>

          <div className="mt-20 w-full flex justify-between gap-16 h-80">
            {classesCardsDetails.map((classesCardDetail, index) => (
              <div key={index} className="h-full">
                <ClassesCard icon={classesCardDetail.icon} heading={classesCardDetail.heading} content={classesCardDetail.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
