import Image from "next/image";

import { cn } from "@/lib/utils";

export interface TopicCardProps {
  id: number;
  image: string;
  heading: string;
  paragraph: string;
  level: string;
}

export function TopicsCard({ id, image, heading, paragraph, level }: TopicCardProps) {
  return (
    <div className={cn("bg-white rounded-[40px] p-6 md:p-8 text-left md:w-4/5 max-w-[480px] lg:w-full lg:max-w-[420px]", id === 2 ? "scale-100" : "lg:scale-90")}>
      <div className="relative rounded-[28px] w-full h-[210px] overflow-hidden">
        <Image src={image} alt={heading} fill sizes="auto" className="object-cover rounded-[28px]" />

        <div className="absolute inset-0 bg-black/10"></div>

        <p className="absolute py-2 px-10 text-center bg-orange text-white bottom-0 right-0">{level}</p>
      </div>

      <div className="mt-7">
        <h3 className="text-darkgreen font-semibold text-2xl leading-9">{heading}</h3>

        <p className="mt-2 text-black text-sm leading-6 font-normal">{paragraph}</p>
      </div>
    </div>
  );
}
