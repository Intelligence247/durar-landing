import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQContents = [
  {
    question: "What courses does Durar Academy offer?",
    answer:
      "Durar Academy offers courses in Qur'an Recitation and Memorization, Islamic Jurisprudence (Fiqh), Aqeedah (Islamic Theology), Seerah (Life of Prophet Muhammad ﷺ), Hadith Studies, Arabic Language, and Islamic History and Civilization. These courses cater to various levels, from beginners to advanced learners.",
  },
  {
    question: "Is there a certification provided upon course completion?",
    answer:
      "Yes, Durar Academy provides certification upon successful completion of its courses. These certificates serve as recognition of your commitment and understanding of the subject matter, whether it’s in Qur'an Recitation, Fiqh, or any other course. They are designed to reflect your dedication to Islamic learning and can be a valuable addition to your personal and spiritual development.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "The classes at Durar Academy are conducted online through live sessions and recorded lectures. Students can participate in real-time with instructors or access the recorded content for self-paced learning. Interactive Q&A sessions and discussion forums are also available for student engagement.",
  },
  {
    question: "Do I need any prior knowledge before enrolling?",
    answer:
      "No, Durar Academy offers courses for all levels, including beginners. You do not need any prior knowledge to enroll, as we provide foundational courses for those new to Islamic studies, as well as advanced courses for more experienced learners.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white -scroll-m-20 pt-28 pb-32">
      <div className="mx-4 md:w-4/5 lg:w-3/5 md:mx-auto text-center relative">
        <Image
          src={"magnifyingglass.svg"}
          width={99}
          height={99}
          className="hidden md:absolute -top-9 -left-8 lg:-left-12"
          alt="Decorator Icon"
        />
        <Image
          src={"exclamation.svg"}
          width={75}
          height={75}
          className="hidden md:absolute -bottom-20 lg:-bottom-3 -right-14 lg:-right-28"
          alt="Decorator Icon"
        />

        <SectionBadge label="FAQ" />

        <div className="mt-9">
          <h3 className="mb-10 font-semibold text-xl md:text-3xl md:leading-[45px] text-darkgreen">Common questions you may have</h3>

          <div className="text-left">
            <Accordion type="multiple">
              <div className="flex flex-col gap-10">
                {FAQContents.map((FAQContent, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="">
                    <AccordionTrigger>{FAQContent.question}</AccordionTrigger>
                    <AccordionContent>{FAQContent.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
