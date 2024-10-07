import Image from "next/image";

interface ClassesCardProps {
  icon: string;
  heading: string;
  content: string;
}

export function ClassesCard({ icon, heading, content }: ClassesCardProps) {
  return (
    <div className="h-full rounded-[40px] border-2 border-orange/30 bg-white py-10 px-14 flex flex-col items-center">
      <Image width={48} height={48} alt="Icon" className="object-cover" src={icon} />

      <h4 className="mt-6 text-high text-xl leading-8 font-semibold">{heading}</h4>

      <p className="mt-3 text-low text-base">{content}</p>
    </div>
  );
}
