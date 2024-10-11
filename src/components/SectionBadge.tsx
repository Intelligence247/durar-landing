import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label: string;
  inverse?: boolean;
}

export function SectionBadge({ label, inverse }: SectionBadgeProps) {
  return (
    <p
      className={cn(
        "bg-darkgreen text-white rounded-full py-3 px-4 md:py-5 md:px-7 text-center capitalize font-semibold text-sm leading-4 md:text-xl md:leading-7 scale-90 lg:scale-100 inline-block",
        inverse && "bg-white text-darkgreen"
      )}>
      {label}
    </p>
  );
}
