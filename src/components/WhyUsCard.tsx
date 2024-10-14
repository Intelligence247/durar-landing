import Image from "next/image";

interface WhyUsCardsProp {
  index: number;
  icon: string;
  heading: string;
  content: string;
}

export function WhyUsCard({ index, icon, heading, content }: WhyUsCardsProp) {
  return (
    <div className="h-full rounded-[40px] border-2 border-orange/30 bg-white p-6 md:py-10 lg:py-6 xl:py-10 md:px-14 lg:px-8 xl:px-14 flex flex-col items-center basis-full lg:basis-1/3">
      <Image width={index === 2 ? 36 : 48} height={index === 2 ? 36 : 48} alt="Icon" className="object-cover" src={icon} />

      <h4 className="mt-6 text-high text-lg md:text-xl md:leading-8 font-semibold">{heading}</h4>

      <p className="mt-3 text-low text-sm md:text-base">{content}</p>
    </div>
  );
}
