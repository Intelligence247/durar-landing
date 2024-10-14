"use client";

import { useState } from "react";

import { SectionBadge } from "@/components/SectionBadge";
import { TopicsCards } from "@/components/TopicsCards";
import { TopicsSwitch } from "@/components/TopicsSwitch";

const beginnerTopics = [
  {
    id: 1,
    image: "/bidayah.webp",
    heading: "Bidayah",
    paragraph:
      "Memorize selected chapters, Learn the fundamentals of Arabic Language, Understand basic Fiqh (Jurisprudence) and Hadith",
    level: "Class 1",
  },
  {
    id: 2,
    image: "/namaa.webp",
    heading: "Namaa",
    paragraph: "⁠Further all the teachings and learnings in Bidayah, Develop reading, writing, and conversational Arabic skills",
    level: "Class 2",
  },
  {
    id: 3,
    image: "/istiqomah.webp",
    heading: "Istiqomah",
    paragraph: "Further all the teachings and learnings in Namaa and dive into In-depth understanding of Seerah (Stories in islam)",
    level: "Class 3",
  },
];

const intermediateTopics = [
  {
    id: 1,
    image: "/irtiqah.webp",
    heading: "Irtiqah",
    paragraph:
      "Further all the teachings and learnings in Beginners Level, solidify your Qur’an recitation and start the Memorization of the Qur'an",
    level: "Class 1",
  },
  {
    id: 2,
    image: "/najah.webp",
    heading: "Najah",
    paragraph: "Further all the teachings and learnings in Irtiqoh, improve your comprehension of Arabic texts and translation of Arabic texts",
    level: "Class 2",
  },
  {
    id: 3,
    image: "/itiqon.webp",
    heading: "Itiqon",
    paragraph: "Complete the memorization of the entire Quran with Tejweed. Master essential Fiqh, Hadith, and Tawheed. Learn Advance Nahwu and Sarf",
    level: "Class 3",
  },
];

export function Topics() {
  const [isBeginners, setIsBeginners] = useState(true);

  return (
    <section id="classes" className="-scroll-m-6 pt-12 pb-40 px-4 md:px-8 xl:px-20 text-center bg-container-2">
      <SectionBadge label="Classes" inverse={true} />

      <h2 className="text-white font-semibold text-xl md:text-3xl md:leading-10 mt-14 max-w-[548px] mx-auto">
        Structured classes tailored to suit your learning
      </h2>

      <div className="mt-16">
        <div className="mb-12 lg:mb-20 flex justify-center mx-auto">
          <TopicsSwitch setDisplay={setIsBeginners} />
        </div>

        <div>{isBeginners ? <TopicsCards topicsCardsInfo={beginnerTopics} /> : <TopicsCards topicsCardsInfo={intermediateTopics} />}</div>
      </div>
    </section>
  );
}
